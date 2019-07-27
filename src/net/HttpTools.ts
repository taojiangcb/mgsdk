import { log } from "../Log";

export class HttpTools {
    private _retryTime: number = 0;
    private _request: any;
    static _pool: Array<HttpTools>;

    constructor() { }

    public static callServer(server: string, func: string, data: any, success?: DataResponseCallback, fail?: Function, method: string = "POST") {
        var url = `${mgsdk.define.sdk_server_url}/${server}/${func}`;
        this.send(url, data, success, fail, method);
    }

    public static send(url: string, data: any, success?: DataResponseCallback, fail?: Function, method: string = "POST") {
        var request: HttpTools;
        if (this._pool && this._pool.length > 0) {
            request = this._pool.shift();
        } else {
            request = new HttpTools();
        }
        request.setTo(url, data, success, fail, method);
        request.send();
    }

    public setTo(url: string, data: any, success?: DataResponseCallback, fail?: Function, method: string = "POST") {
        this._retryTime = 0;
        var _self = this;
        data = data || {};
        data.timestamp = Date.now();
        this._request = {
            url: url, method: method, data: data, success: (res) => {
                var resultD;
                if (typeof res == "string") {
                    try {
                        resultD = JSON.parse(res);
                    } catch (e) {
                        resultD = { success: false, data: res };
                    }
                } else {
                    resultD = res.data;
                }
                success && success(resultD);
                _self._recover();
            }, fail: (res) => {
                _self._retryTime++;
                if (_self._retryTime > 3) {
                    fail && fail();
                    _self._recover();
                } else {
                    mgsdk.native.timeOnce(3000, _self, _self.send);
                }
            }
        };
    }

    public send() {
        if (!this._request) return;
        if (mgsdk.native) {
            mgsdk.native.httpRequst(this._request);
        } else {
            log.error("native还没有初始化");
        }
    }

    protected _recover() {
        if (!HttpTools._pool) HttpTools._pool = [];
        this._request = null;
        HttpTools._pool.push(this);
    }
}