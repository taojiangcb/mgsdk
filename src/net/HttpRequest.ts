import { EventDispatcher } from "../event/EventDispatcher";
import { Utils } from "../utils/Utils";

export class HttpRequest extends EventDispatcher {
	private _responseType: string = "";
	private _data: any = null;
	private _http: any = null;
	constructor() {
		super();
		this._http = new XMLHttpRequest();
	}

	public send(url: string, data: any, method: string = "get", responseType: "arraybuffer" | "text" = "text", headers?: Array<string>) {
		this._responseType = responseType;
		this._data = null;
		var _self = this;
		var http = this._http;
	
		http.open(method, url, true);
		if (headers) {
			for (var i = 0; i < headers.length; i++) {
				http.setRequestHeader(headers[i++], headers[i]);
			}
		} else {
			if (!data || (typeof data == 'string')) http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			else http.setRequestHeader("Content-Type", "application/json");
		}
		http.responseType = responseType !== "arraybuffer" ? "text" : "arraybuffer";
		http.onerror = function (e: any) { _self._onError(e); }
		http.onabort = function (e: any) { _self._onAbort(e); }
		http.onprogress = function (e: any) { _self._onProgress(e); }
		http.onload = function (e: any) {
			_self._onLoad(e);
		}
		http.send(data);
	}

	private _onError(e: any) {
		this.error("Request failed Status:" + this._http.status + " text:" + this._http.statusText);
	}

	private _onAbort(e: any) {
		this.error("Request was aborted by user");
	}

	private _onProgress(e: any) {
		if (e && e.lengthComputable) this.event(/*laya.events.Event.PROGRESS*/"progress", e.loaded / e.total);
	}

	private _onLoad(e: any) {
		var http = this._http;
		var status = http.status !== undefined ? http.status : 200;
		if (status === 200 || status === 204 || status === 0) {
			this.complete();
		} else {
			this.error("[" + http.status + "]" + http.statusText + ":" + http.responseURL);
		}
	}

	/**
	*@private
	*请求错误的处理函数。
	*@param message 错误信息。
	*/
	error(message) {
		this.clear();
		this.event(/*laya.events.Event.ERROR*/"error", message);
	}
	
	/**
	* @private
	* 请求成功完成的处理函数。
	*/
	complete() {
		this.clear();
		var flag = true;
		try {
			if (this._responseType === "json") {
				this._data = JSON.parse(this._http.responseText);
			} else if (this._responseType === "xml") {
				this._data = Utils.parseXMLFromString(this._http.responseText);
			} else {
				this._data = this._http.response || this._http.responseText;
			}
		} catch (e) {
			flag = false;
			this.error(e.message);
		}
		flag && this.event(/*laya.events.Event.COMPLETE*/"complete", (this._data instanceof Array) ? [this._data] : this._data);
	}
	
	/**
	* @private
	* 清除当前请求。
	*/
	clear() {
		var http = this._http;
		http.onerror = http.onabort = http.onprogress = http.onload = null;
	}

	public get url(): string {
		return this._http.responseURL;
	}

	public get http(): XMLHttpRequest {
		return this._http;
	}

	public get data(): any {
		return this._data;
	}
}