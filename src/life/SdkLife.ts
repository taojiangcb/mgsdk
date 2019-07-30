import { callbackify } from "util";

export class SdkLife implements mgsdk.iSdkLife {
    
    protected mLifeOpts:mgsdk.PlatLifeOpts;
    constructor(opts?:mgsdk.PlatLifeOpts) {
        this.mLifeOpts = opts;
        this.internalInit();
    }

    protected internalInit():void { 
        if(!this.mLifeOpts) this.mLifeOpts = {}
    }

    onShow(callBack?:(res?: any) => void){
       this.mLifeOpts.onShow = callBack;
    }

    onHide(callBack?:(res:any)=>void){
        this.mLifeOpts.onHide = callBack;
    }

    offShow(callBack?:(res:any)=>void){
        this.mLifeOpts.onShow = null;
    }

    offHide(callBack?:(res:any)=>void){
        this.mLifeOpts.onHide = null;
    }

    onError(callBack?:(res:any)=>void){
        this.mLifeOpts.onError = callBack;
    }

    offError(callBack?:(res:any)=>void){
        this.mLifeOpts.onError = null;
    }

    protected onShowHnalder(res?:any):void {
        this.mLifeOpts.onShow && this.mLifeOpts.onShow(res);
    }

    protected onHideOffHnalder(res?:any) {
        this.mLifeOpts.onHide && this.mLifeOpts.onHide(res);
    }

    protected onErrorHandler(res?:any) {
        this.mLifeOpts.onError && this.mLifeOpts.onError(res);
    }

}