import { log } from "../../Log";
import { SocketController } from "./SocketController";
import { WSIDentiryController } from "./WSIDentiryController";

export type ClientOpts = {
    url:string
}

/** 当ws 连接成功之后 服务器分配的socket 身份下发给客户端 */
export type ClientIdentity = {
    clientId:string;        //socket Id
}

export class SocketClient {

    /**客户端 socket */
    clientIO:WebSocket;

    /**客户端的身份 */
    private mClientIdentity:ClientIdentity;

    /**连接时的参数配置 */
    private opts:ClientOpts;

    /**逻辑业务的消息处理 */
    private controllMaps:Map<string,SocketController>;

    /**请求 ask 回答回调函数集合处理 */
    private askCallMaps:Map<string,(protocol:mgsdk.iBaseProcotol)=>void>;

    /** 对应问答的 次数引用 */
    private ask_count:number = 0;

    /**连接断开之后重试的次数 */
    private try_connect_count: number = 5;                  //重试的次数
    private try_agin: number = 0;                           //当前重试的次数
    private try_agin_id;

    constructor(opts:ClientOpts) {
        this.opts = opts;
        this.controllMaps = new Map<string,SocketController>();
        this.askCallMaps = new Map();
        this.injiectSvrController();
        this.createClientIO(opts);
    }

    /** 注册一些消息处理服务，由子级对象覆盖实现 */
    protected injiectSvrController(){
        //sample add ServerController code;
        this.registerController<WSIDentiryController>(WSIDentiryController.NAME,WSIDentiryController);
    }

     /** 注册业务消息处理 */
    registerController<T extends SocketController> (svrName:string, T) {
        let controller:SocketController = new T(svrName);
        controller.client = this;
        this.controllMaps.set(svrName,controller);
    }

    addController(controller:SocketController) {
        controller.client = this;
        this.controllMaps.set(controller.server_name,controller);
    }
    
    private createClientIO(opts:ClientOpts) {
        this.connect();
    }

    private connect():void {
        if(this.clientIO) { this.clientIO = null; }
        this.clientIO = new WebSocket(this.opts.url)
        this.clientIO.onopen = evt =>{ 
            log.log(`${this.opts.url} connect-succeed`);;
        }

        this.clientIO.onerror = err=>{
            log.error(JSON.stringify(event));
        }

        this.clientIO.onmessage = (message:MessageEvent)=> {
            let protocol:mgsdk.iBaseProcotol = JSON.parse(String(message.data))
            let controller = this.controllMaps.get(protocol.procoBody.server);
            if(!controller) {
                log.error(`无效的服务:${protocol.procoBody.server} protocol:${JSON.stringify(protocol)}`);
                return; 
            }

            controller && controller.doAction(protocol);

            let askId = protocol.askId;
            /** 产出用掉的ask 回调函数 */
            if(askId) {
                let askCall = this.askCallMaps.get(askId);
                if(askCall) {
                    askCall(protocol);
                    this.askCallMaps.delete(askId);
                }
            }
        }

        this.clientIO.onclose = code => {
            this.aginConnect();
        }
    }

    /** * 断线之后重新链接 */
    private aginConnect():void {
        if(this.clientIO) { this.clientIO = undefined; }
        if(this.try_agin < this.try_connect_count) {
            this.try_agin++;
            if(this.try_agin_id) {
                clearTimeout(this.try_agin_id);
                this.try_agin_id = null;
            }
            this.try_agin_id = setTimeout(()=>{
                this.connect();
            },3000);
        }
        else {
            this.forceClose();
            var err_str:string = `网关服务器链接断开！重试了${this.try_connect_count}次，还是不行。`
            log.error(err_str);
            //网络真的断开了，清楚之前所有的问答回调
            this.askCallMaps.clear();
        }
    }

    /**
     * 强行断开，不进行重试连接
     */
    forceClose():void {
        if(this.clientIO && this.clientIO.readyState != WebSocket.CLOSED) {
            this.try_agin = this.try_connect_count;
            if(this.try_agin_id) {
                clearTimeout(this.try_agin_id);
                this.try_agin_id = null;
            }
            this.clientIO.close();
        }
    }

    /** 发送消息到服务端 */
    send(protocol:mgsdk.iBaseProcotol,askFunc?:(protocol:mgsdk.iBaseProcotol)=>void):void {

        if(askFunc) {
            this.ask_count++;
            let askId = `${this.ask_count}_${protocol.socketId}_${protocol.procoBody.server}_${protocol.procoBody.action}`;
            protocol.askId = askId;
            this.askCallMaps.set(askId,askFunc);
        }
        
        if(!this.clientIdentity) {
            let identityController = this.controllMaps.get(WSIDentiryController.NAME) as WSIDentiryController
            if(identityController) identityController.addToBefor(protocol)
            return;
        }

        if(this.clientIO && this.clientIO.readyState === WebSocket.OPEN) {
            this.clientIO.send(JSON.stringify(protocol))
        }
    }
    
    dispose() {
        this.askCallMaps.clear();
        this.controllMaps.clear();
    }

    getControllerBy(name:string) {
        return this.controllMaps.get(name);
    }

    //如果连接成功了，服务端会设置 clientIdentity 对象
    set clientIdentity(val:ClientIdentity) { this.mClientIdentity = val;}
    get clientIdentity() { return this.mClientIdentity }
    
    get clientId() {return this.mClientIdentity ? this.mClientIdentity.clientId : ""}
}