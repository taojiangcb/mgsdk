import { Handler } from "../event/EventDispatcher";

export class NativeBase implements mgsdk.iNative {
    
    constructor(){}

    
    httpRequst(any: IRequestOptions){}
    
    requireLib(url:string,success:()=>void,fail?:()=>void):void {}

    timeOnce(delay: number, caller: any, method: Function, ...args) {
        var handler = Handler.create(caller, method, args);
        return setTimeout(() => { handler.run();}, delay);
    }

    clearTimeOnce(timer: any) { clearTimeout(timer);}

    /** 本地数据处理 */
    setItem(key:string,value:string):void {return null}
    getItem(key:string):any {return null}
    getSystemInfoAsync():mgsdk.iSystemInfo {return null}
}