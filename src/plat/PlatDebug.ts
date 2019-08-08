import { PlatBase } from "./PlatBase";
import { HttpTools } from "../net/HttpTools";
import { log } from "../Log";

export class PlatDebug extends PlatBase {
    constructor(){super()}

    login(opts:iLoginResponseOpts) {
        super.login(opts);
        log.log(JSON.stringify(opts));
        let {user,pwd} = opts.arg;

        let debugUser:mgsdk.iPlatUser = {
            naickName:user,
            avatar:"",
            testUser:user,
            testPwd:pwd,
        }
        this.platLogin(debugUser);
    //    HttpTools.callServer()
    }
}