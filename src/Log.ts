
class Log {

    private showLog:boolean = false;

    internalInit():void {
        this.showLog = mgsdk.initOpts.outLog || true;
    }

    error(msg:any,...args):void { console.error(msg,args); }

    
    log(msg:any,...args) {
        if(this.showLog) {
            console.log(msg,args);
        }
    }

    warn(msg:any,...args) {
        if(this.showLog) {
            console.warn(msg,args);
        }
    }
}

export var log = new Log();