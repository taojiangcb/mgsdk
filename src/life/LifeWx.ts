import { SdkLife } from "./SdkLife";

export class LifeWx extends SdkLife implements mgsdk.iSdkLife {
    
    constructor(opts?:mgsdk.PlatLifeOpts) {
        super(opts);
    }

    internalInit():void {
        super.internalInit();
        wx.onShow(this.onShowHnalder);
        wx.onHide(this.onHideOffHnalder);
        wx.onError(this.onErrorHandler);
    }
}