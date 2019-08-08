import { PlatBase } from "./plat/PlatBase";
import { PlatFactory } from "./PlatFactory";
import { NativeBase } from "./native/NativeBase";
import { Define } from "./Define";
import { log } from "./Log";
import { ObjectUtil } from "./utils/ObjectUtil";
import { SocketClient } from "./net/webSocket/SocketClient";
import { WSModule } from "./ws/WSModule";

enum abc {

}
export class SDK {


    private mInitOpts:mgsdk.PlatInitOps;
    private mDefine:mgsdk.iDefine;

    private mPlat:PlatBase;                     //平台对象
    private mNative:NativeBase;                 //native 对象
    private mLife:mgsdk.iSdkLife;               //生命周期
    private mShare:mgsdk.iShare;                //分享

    private mWS:WSModule;                       //webSocket 服务

    constructor() {}

    /**
     * @param platId        平台定义的id
     * @param gameId        平台定义的游戏id
     * @param success       成功之后的回调
     * @param fail          失败之后的回调
     */
    init(opts:mgsdk.PlatInitOps,lifeOpts?:mgsdk.PlatLifeOpts,setting?:mgsdk.iSetting):void {

        /** 参数设置 */
        this.mDefine = new Define();
        this.mDefine.platId = opts.platId;
        this.mDefine.gameId = opts.gameId;

        //复制setting 对象
        if(setting) { ObjectUtil.copyObj(this.mDefine.setting,setting); }

        /**sdk 的运行模式  */
        this.mDefine.mode = opts.mode
        if(opts.sdk_server_local_url) {
            this.mDefine.sdk_server_local = opts.sdk_server_local_url;
        }
        if(opts.sdk_ws_server_local_url) {
            this.mDefine.ws_server_local = opts.sdk_ws_server_local_url;
        }
        this.mInitOpts = opts;


        this.mWS = new WSModule();

        /**log 初始化 */
        log.internalInit();
        /** 创建平台各个对象初始化 */
        this.mShare = PlatFactory.createShareInstance(opts.platId);                 //平台分享
        this.mLife = PlatFactory.createLifeInstance(opts.platId,lifeOpts);          //生命周期管理
        this.mPlat = PlatFactory.createFactoryInstance(opts.platId);                //平台
        this.mNative = PlatFactory.createNativeInstance(opts.platId);               //平台的环境

        /**初始化 */
        this.mPlat.internalInit();
    }

    get share() {return this.mShare}
    get sdkLife() {return this.mLife}                                               //生命周期管理
    get initOpts() {return this.mInitOpts}                                          //平台初始化参数
    get user() { return this.mDefine.user; }                                        //平台用户
    get setting() { return this.mDefine.setting; }                                  //盈利参数设置
    get plat() {return this.mPlat;}                                                 //平台抽象对象
    get define() {return this.mDefine}                                              //sdk参数
    get native() {return this.mNative}                                              //平台环境抽象对象
    get ws() {return this.mWS}
}
