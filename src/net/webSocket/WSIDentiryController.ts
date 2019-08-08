import { SocketController } from "./SocketController";
import { SocketClient, ClientIdentity } from "./SocketClient";
import { log } from "../../Log";


/**
 * 对客户的socket 进行连接身份 匹配
 */
export class WSIDentiryController extends SocketController {

    
    static NAME:string = "__IDENTITY_CONTROLLER__"

    /**
     * 在没有收到 initClient 之前会把所有 send 先放到这个队列，在收到 initClient 之后 再发送给服务端
     */
    private before_initClient_set:Array<mgsdk.iBaseProcotol>;

    constructor(serName:string,clientIo?:SocketClient) {
        super(serName,clientIo);
        this.before_initClient_set = new Array<mgsdk.iBaseProcotol>();
    }

    /** 添加到 initClient 消息之前的缓存队列中 */
    addToBefor(protocol:mgsdk.iBaseProcotol) : void {
        this.before_initClient_set.push(protocol);
    }

    /**连接成功之后 服务端会发回对应的 socket idengity */
    initClient(protocol:mgsdk.iBaseProcotol) {
        let clientIdentity:ClientIdentity = { clientId:protocol.socketId };
        if(this.client) this.client.clientIdentity = clientIdentity;
        log.warn(JSON.stringify(clientIdentity));
        //发送之前身份验证前的缓冲数据
        if(this.before_initClient_set.length > 0) {
            this.before_initClient_set.forEach(element => {
                element.socketId = this.client.clientId;
            });
            this.client.clientIO.send(JSON.stringify(protocol));
            this.before_initClient_set = [];
        }
    }
}