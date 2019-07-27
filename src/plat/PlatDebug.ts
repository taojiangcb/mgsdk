import { PlatBase } from "./PlatBase";
import { HttpTools } from "../net/HttpTools";

export class PlatDebug extends PlatBase {
    constructor(){super()}

    login(opts:iLoginResponse) {
       let {user,pwd} = opts.arg;
    //    HttpTools.callServer()
    }
}