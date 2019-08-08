import { SocketController } from "../net/webSocket/SocketController";


export class WsHelloServer extends SocketController {

    constructor(svrName:string) { super(svrName);}

    say_hello(protocol:mgsdk.iBaseProcotol):void {
    }

    sendHello() {
    }
}