import { log } from "../Log";
import { HttpTools } from "../net/HttpTools";
import { ENUM_SERVER, ENUM_SVR_FUN } from "../Define";

export class PlatBase implements mgsdk.iPlat {
    
    constructor() {}

    protected mInitOpts:mgsdk.PlatInitOps;

    /**服务器端配置的客户端参数 appid,appscret,之类的 */
    protected mConfigCli:any;

    protected mLoginOpts:iLoginResponseOpts;

    internalInit():void {
        this.mInitOpts = mgsdk.initOpts;
        if(this.mInitOpts.libUrl) {
            mgsdk.native.requireLib(this.mInitOpts.libUrl,()=>{
                this.getPlatInfo()
            },
            ()=>{
                var msg:string = `第三方 lib 加载失败:${this.mInitOpts.libUrl}`;
                log.error(msg);
                this.mInitOpts.fail(msg);
            })
        }
    }

    protected getPlatInfo() {
        HttpTools.callServer(ENUM_SERVER.platServer,
            ENUM_SVR_FUN.getPlatInfo,
            {paltId:this.mInitOpts.platId,gameId:this.mInitOpts.gameId},
            res=>{
                this.mConfigCli = res.data.cli_config;
                this.mInitOpts.success && this.mInitOpts.success(res);
            },
            ()=>{
                var msg:string = `get platInfo fail == paltId:${this.mInitOpts.platId},gameId:${this.mInitOpts.gameId}`;
                this.mInitOpts.fail && this.mInitOpts.fail(msg);
            }
        )
    }

    /**从服务端获取到的配置信息 */
    get cliConfig():any {return this.mConfigCli;}

    /**平台登录 */
    login(opts:iLoginResponseOpts) {
        this.mLoginOpts = opts;
    }

    /**获取启动参数 */
    getLaunchOptionsSync():mgsdk.iLaunchData {
        return {}
    }

    //============================内部函数=======================

    /**发起登录请求 */
    protected platLogin(platUser:mgsdk.iPlatUser,launchData?:mgsdk.iLaunchData) {

        let userId:string = "";
        let channelId:string = "";
        let appId:string = "";
        
        var referrerinfo = launchData ? launchData.referrerInfo : null;
        if(referrerinfo) {
            if(referrerinfo.appId) {
                appId = referrerinfo.appId;
                channelId = launchData.scene.toString();
            }
        }
        
        var queryData:any = launchData ? launchData.query : null;
        if(queryData) {
            if(queryData.fromUser)    userId = queryData.fromUser;
            if(queryData.channelId)   channelId = queryData.channelId;
        }

        let param : mgsdk.PlatLoginParams = {
            platUser:platUser,
            platId:this.mInitOpts.platId,
            gameId:this.mInitOpts.gameId,
            fromChannel:channelId,
            fromAppId:appId,
            fromUser:userId,
        }

        HttpTools.callServer(
            ENUM_SERVER.platServer,
            ENUM_SVR_FUN.login,
            param,
            res=>{
                if(res.success) { 
                    mgsdk.define.user = res.data;
                    this.mLoginOpts.success && this.mLoginOpts.success(res.data);
                }
                else { 
                    log.error(res.msg) 
                    this.mLoginOpts.fail && this.mLoginOpts.fail(res.msg);
                }
            },
            ()=>{
                var msg = `登录失败 params${JSON.stringify(param)}`
                log.error(msg);
                this.mLoginOpts.fail && this.mLoginOpts.fail();
            })
    }
}