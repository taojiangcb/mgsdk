export class NativeBase implements mgsdk.iNative {
    
    constructor(){}

    
    httpRequst(any: IRequestOptions){}
    
    requireLib(url:string,success:()=>void,fail?:()=>void):void {}

    timeOnce(delay: number, caller: any, method: Function, ...args) {}
    clearTimeOnce(timer: any) {}
    /** 本地数据处理 */
    setItem(key:string,value:string):void {
        localStorage.setItem(key,value);
    }
    getItem(key:string):any {
        localStorage.getItem(key);
    }
}