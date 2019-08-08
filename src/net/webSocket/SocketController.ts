import { SocketClient } from "./SocketClient";


/**
 * socket 业务逻辑 解析处理封装层 
 */
export class SocketController {
     /** 注册的服务名称 */
     private serverName:string = ""

     /** websocket 的服务 */
     private m_socketClient:SocketClient;

     constructor(svrName:string,socketClient?:SocketClient) {
         this.serverName = svrName;
         this.m_socketClient = socketClient;
     }
 
     /** 设置 webSocket 服务 */
     set client(svr:SocketClient) { this.m_socketClient = svr;}
     get client() { return this.m_socketClient; }
 
     doAction(protocol:mgsdk.iBaseProcotol) {
         let method = protocol.procoBody.action;
         let callFunc:Function = this[method];
         callFunc && callFunc.call(this,protocol);
     }

     get server_name() {
         return this.serverName;
     }
}