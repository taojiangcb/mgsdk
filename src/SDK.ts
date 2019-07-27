import { PlatBase } from "./plat/PlatBase";
import { PlatFactory } from "./PlatFactory";
import { NativeBase } from "./native/NativeBase";
import { Define } from "./Define";
import { log } from "./Log";
import { ObjectUtil } from "./utils/ObjectUtil";

export class SDK {
    
    private mInitOpts:mgsdk.PlatInitOps;
    
    private mLifeOpts:mgsdk.PlatLifeOpts;

    private mDefine:mgsdk.iDefine;

    private mPlat:PlatBase;

    private mNative:NativeBase;

    constructor() {}
    /**
     * 
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

        this.mInitOpts = opts;
        this.mLifeOpts = lifeOpts;

        /**log 初始化 */
        log.internalInit();
        /** 创建平台各个对象初始化 */
        this.mPlat = PlatFactory.createFactoryInstance(opts.platId);                //平台
        this.mNative = PlatFactory.createNativeInstance(opts.platId);               //平台的环境
        /**初始化 */
        this.mPlat.internalInit();
    }

    get lifeOpts() {return this.mLifeOpts}                                          //生命周期参数
    get initOpts() {return this.mInitOpts}                                          //平台初始化参数
    get user() { return this.mDefine.user; }                                        //平台用户
    get setting() { return this.mDefine.setting; }                                  //盈利参数设置
    get plat() {return this.mPlat;}                                                 //平台抽象对象
    get define() {return this.mDefine}                                              //sdk参数
    get native() {return this.mNative}                                              //平台环境抽象对象
}