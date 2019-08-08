import { SocketClient, ClientOpts } from "../net/webSocket/SocketClient";
import { Define, WS_SERVER } from "../Define";
import { WsHelloServer } from "./WsHelloServer";

export class WSModule implements mgsdk.iWSModule {

    private clientIO:SocketClient;

    private helloController:WsHelloServer

    constructor(){
        let opts:ClientOpts = { url:mgsdk.define.ws_server_url}
        this.clientIO = new SocketClient(opts)

        this.helloController = new WsHelloServer(WS_SERVER.HELLO);
        this.clientIO.addController(this.helloController)
        
        // method 2
        //this.clientIO.registerController<WsHelloServer>(WsHelloServer.NAME,WsHelloServer);
    }

    send(protocol:mgsdk.iBaseProcotol,askCall?:(protocol:mgsdk.iBaseProcotol)=>void) {
        protocol.socketId = this.clientIO.clientId;
        this.clientIO.send(protocol,askCall)
    }

    get wsClient() { return this.clientIO; }

    get helloSvr() {return this.helloController}
}