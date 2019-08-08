


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
    cdnUrl:string = ""                                               //cdn的url 地址
  
    ws_server:string = "ws://localhost:3306"                   //webSocket 服务的地址
    ws_server_dev:string = "ws://localhost:3306";                                    //websocket 开发服务地址
    ws_server_local:string = "ws://localhost:3306";                                      //websocket 本地开发服务地址

    /** http 服务地址 */
    get sdk_server_url() {
        if(this.mode === 0) return this.sdk_server_local;
        else if(this.mode === 1) return this.sdk_server_dev;
        else return this.sdk_server
    }

    /** ws 服务地址 */
    get ws_server_url() {
        if(this.mode === 0) return this.ws_server_local;
        else if(this.mode === 1) return this.ws_server_dev;
        else return this.ws_server;
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
    userServer:"userServer",
}

export const ENUM_SVR_FUN = {
    getPlatInfo:"getPlatInfo",
    login:"login",
}

export const enum WS_SERVER {
    HELLO = "HELLO"
}

export const enum WS_ACTION {
    SAY_HELLO = "say_hello"
}
