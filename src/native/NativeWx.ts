import { NativeBase } from "./NativeBase";

export class NativeWx extends NativeBase {

    constructor(){super()}

    /** 网络请求 */
    httpRequst(requestOpt: IRequestOptions) {
        var request: any = {};
        for (var key in requestOpt) {
            request[key] = requestOpt[key];
        }
        if (requestOpt.header) {
            var header = {};
            for (var i = 0; i < requestOpt.header.length; i += 2) {
                header[requestOpt.header[i]] = requestOpt.header[i + 1];
            }
            request.header = header;
        }
        wx.request(request);
    }

    setItem(key: string, value: string): void {
        wx.setStorageSync(key, value);
    }
    
    getItem(key: string): string {
        return wx.getStorageSync(key)
    }

    /**惰性求值 */
    private laze_systemInfo:mgsdk.iSystemInfo;
    getSystemInfoAsync():mgsdk.iSystemInfo {
        if(this.laze_systemInfo) return this.laze_systemInfo;
        let system:mgsdk.iSystemInfo = wx.getSystemInfoSync();
        if (system.system && system.system.toLocaleLowerCase().indexOf("ios") != -1) {
            system.isIos = true;
        }
        this.laze_systemInfo = system;
        return system;
    }
}