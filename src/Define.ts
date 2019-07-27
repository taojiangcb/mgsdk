


export class Define {

    platId:number = 0;
    gameId:number = 0;

    setting:mgsdk.iSetting = {
        canBanner:false,                                             //有banner
        canPay:false,                                                //有支付
        canViedo:false,                                              //有视频
        canShare:false,                                              //有分享
    };

    sdk_server:string = "http://localhost:3005";                     //线上地址
    sdk_server_dev:string = "http://localhost:3005";                 //开发地址
    sdk_server_local:string = "http://localhost:3005";               //本地之地
    mode : 0|1|2 = 0 ;                                               //开发模式
    user:mgsdk.iPlatUser = {};

    get sdk_server_url() {
        if(this.mode === 0) return this.sdk_server_local;
        else if(this.mode === 1) return this.sdk_server_dev;
        else return this.sdk_server
    }
}

export var SDK_MODE = {
    DEBUG:0,
    TEST:1,
    ONLINE:2,
}

export const PLAT_IDS = {
    WEB:1000,
    WX:1100
}

export const ENUM_SERVER = {
    platServer:"platServer",
    loginServer:"loginServer",
}

export const ENUM_SVR_FUN = {
    getPlatInfo:"getPlatInfo",
    login:"login",
}