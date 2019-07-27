export class EventDispatcher {
    private _events: any;
    constructor() {
        this._events = null;
    }

    /**
	*检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。
	*@param type 事件的类型。
	*@return 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
	*/
    public hasListener(type) {
        var listener = this._events && this._events[type];
        return !!listener;
    }

    /**
	*派发事件。
	*@param type 事件类型。
	*@param data （可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
	*@return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
	*/
    public event(type: string, data?: any) {
        if (!this._events || !this._events[type]) return false;
        var listeners = this._events[type];
        if (listeners.run) {
            if (listeners.once) delete this._events[type];
            data != null ? listeners.runWith(data) : listeners.run();
        } else {
            for (var i = 0, n = listeners.length; i < n; i++) {
                var listener = listeners[i];
                if (listener) {
                    (data != null) ? listener.runWith(data) : listener.run();
                }
                if (!listener || listener.once) {
                    listeners.splice(i, 1);
                    i--;
                    n--;
                }
            }
            if (listeners.length === 0 && this._events) delete this._events[type];
        }
        return true;
    }

    /**
	*使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
	*@param type 事件的类型。
	*@param caller 事件侦听函数的执行域。
	*@param listener 事件侦听函数。
	*@param args （可选）事件侦听函数的回调参数。
	*@return 此 EventDispatcher 对象。
	*/
    on(type: string, caller: any, listener: Function, args?: Array<any>) {
        return this._createListener(type, caller, listener, args, false);
    }

    /**
	*使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
	*@param type 事件的类型。
	*@param caller 事件侦听函数的执行域。
	*@param listener 事件侦听函数。
	*@param args （可选）事件侦听函数的回调参数。
	*@return 此 EventDispatcher 对象。
	*/
    once(type: string, caller: any, listener: Function, args?: Array<any>) {
        return this._createListener(type, caller, listener, args, true);
    }

    private _createListener(type: string, caller: any, listener: Function, args: Array<any>, once: boolean = false, offBefore: boolean = true) {
        offBefore && this.off(type, caller, listener, once);
        var handler = Handler.create(caller || this, listener, args, once);
        this._events || (this._events = {});
        var events = this._events;
        if (!events[type]) events[type] = handler;
        else {
            if (!events[type].run) events[type].push(handler);
            else events[type] = [events[type], handler];
        }
        return this;
    }

    /**
	*从 EventDispatcher 对象中删除侦听器。
	*@param type 事件的类型。
	*@param caller 事件侦听函数的执行域。
	*@param listener 事件侦听函数。
	*@param onceOnly （可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。
	*@return 此 EventDispatcher 对象。
	*/
    public off(type: string, caller: any, listener: Function, onceOnly: boolean = false) {
        if (!this._events || !this._events[type]) return this;
        var listeners = this._events[type];
        if (listener != null) {
            if (listeners.run) {
                if ((!caller || listeners.caller === caller) && listeners.method === listener && (!onceOnly || listeners.once)) {
                    delete this._events[type];
                    listeners.recover();
                }
            } else {
                var count = 0;
                for (var i = 0, n = listeners.length; i < n; i++) {
                    var item = listeners[i];
                    if (item && (!caller || item.caller === caller) && item.method === listener && (!onceOnly || item.once)) {
                        count++;
                        listeners[i] = null;
                        item.recover();
                    }
                }
                if (count === n) delete this._events[type];
            }
        }
        return this;
    }


    /**
	*从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
	*@param type （可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。
	*@return 此 EventDispatcher 对象。
	*/
    public offAll(type: string) {
        var events = this._events;
        if (!events) return this;
        if (type) {
            this._recoverHandlers(events[type]);
            delete events[type];
        } else {
            for (var name in events) {
                this._recoverHandlers(events[name]);
            }
            this._events = null;
        }
        return this;
    }

    _recoverHandlers(arr) {
        if (!arr) return;
        if (arr.run) {
            arr.recover();
        } else {
            for (var i = arr.length - 1; i > -1; i--) {
                if (arr[i]) {
                    arr[i].recover();
                    arr[i] = null;
                }
            }
        }
    }
}

export class Handler {
    static _gid: number = 0;
    static _pool: Array<Handler> = [];
    public caller: any;
    public method: Function;
    public args: Array<any>;
    public once: boolean = false;
    private _id: number = 0;
    constructor(caller: any, method: Function, args?: Array<any>, once: boolean = false) {
        this.caller=caller;
        this.once=once;
        this.method = method;
        this.args = args;
    }

    public setTo(caller: any, method: Function, args: Array<any>, once: boolean) {
        this._id = Handler._gid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    }

    /**
	*执行处理器。
	*/
	public run(){
		if (this.method==null)return null;
		var id=this._id;
		var result=this.method.apply(this.caller,this.args);
		this._id===id && this.once && this.recover();
		return result;
	}

    public runWith(data: any) {
        if (this.method == null) return null;
        var id = this._id;
        if (data == null)
            var result = this.method.apply(this.caller, this.args);
        else if (!this.args && !data.unshift) result = this.method.call(this.caller, data);
        else if (this.args) result = this.method.apply(this.caller, this.args.concat(data));
        else result = this.method.apply(this.caller, data);
        this._id === id && this.once && this.recover();
        return result;
    }

    public recover() {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    }

    public clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    }

    static create(caller: any, method: Function, args?, once: boolean = true) {
        (once === void 0) && (once = true);
        if (Handler._pool.length) return Handler._pool.pop().setTo(caller, method, args, once);
        return new Handler(caller, method, args, once);
    }
}