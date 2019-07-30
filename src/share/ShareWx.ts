import { ShareBase } from "./ShareBase";
import { callbackify } from "util";

export class ShareWx extends ShareBase {

    constructor() {
        super();
    }

    shareAppMessage(opts:mgsdk.iShareContext) {
        wx.shareAppMessage(opts);
    }

    /**
     * 点转发是处理
     * @param callBack 
     */
    onShareAppMessage(callBack:()=>mgsdk.iShareContext):void {
        wx.onShareAppMessage(callBack);
    }

    showShareMenu?(opts:mgsdk.iShareMenuOpts):void {
        wx.showShareMenu({
            withShareTicket:opts.withShareTicket,
            success:opts.success,
            fail:opts.fail,
            complete:opts.complete
        });
    }

    hideShareMenu(opts:mgsdk.iShareMenuOpts):void {
        wx.hideShareMenu(opts);
    }
}