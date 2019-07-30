import { PlatBase } from "./PlatBase";
import { HttpTools } from "../net/HttpTools";

export class PlatDebug extends PlatBase {
    constructor(){super()}

    login(opts:iLoginResponseOpts) {
       let {user,pwd} = opts.arg;
    //    HttpTools.callServer()
    }
}