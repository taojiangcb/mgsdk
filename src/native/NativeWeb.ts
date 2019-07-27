import { NativeBase } from "./NativeBase";
import { log } from "../Log";
import { HttpRequest } from "../net/HttpRequest";
import { Handler } from "../event/EventDispatcher";

export class NativeWeb extends NativeBase {
    constructor(){super()}
    
    setItem(key:string,value:string):void {localStorage.setItem(key,value);}
    getItem(key:string):any {localStorage.getItem(key);}

    getSystemInfoAsync():any{return {}}

    public requireJs(url: string, callBack: Function) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        document.body.appendChild(script);
        script.onload = () => {
            callBack && callBack();
        }
    }

    httpRequst(requestOpt: IRequestOptions) {
        var request = new HttpRequest();
        var _self = this;
        request.once("complete", this, () => {
            requestOpt.success && requestOpt.success(request.data);
        });
        request.once("error", this, (...args) => {
            args && args.length > 0 ? log.log(args[0]) : "";
            requestOpt.fail && requestOpt.fail(request.data);
        });
        request.send(requestOpt.url, JSON.stringify(requestOpt.data), requestOpt.method.toLocaleLowerCase(), "text", ["Content-Type", "application/json"]);
    }

    timeOnce(delay: number, caller: any, method: Function, ...args) {
        var handler = Handler.create(caller, method, args);
        return setTimeout(() => {
            handler.run();
        }, delay);
    }

    clearTimeOnce(timer: any) {clearTimeout(timer);}

    public setClipBord(msg: string, success?: Function, fail?: Function) {
        if (window['clipboardData']) {
            window['clipboardData'].clearData();
            window['clipboardData'].setData("Text", msg);
        } else if (navigator.userAgent.indexOf("Opera") != -1) {
            window.location = <any>msg;
        } else if (window['netscape']) {
            try {
                window['netscape'].security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("您的当前浏览器设置已关闭此功能！请按以下步骤开启此功能！\n新开一个浏览器，在浏览器地址栏输入'about:config'并回车。\n然后找到'signed.applets.codebase_principal_support'项，双击后设置为'true'。\n声明：本功能不会危极您计算机或数据的安全！");
            }
            var Components = window["Components"];
            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
            if (!clip) return;
            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
            if (!trans) return;
            trans.addDataFlavor('text/unicode');
            // var str = new Object();
            var len = new Object();
            var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
            var copytext = msg;
            str.data = copytext;
            trans.setTransferData("text/unicode", str, copytext.length * 2);
            var clipid = Components.interfaces.nsIClipboard;
            if (!clip) return false;
            clip.setData(trans, null, clipid.kGlobalClipboard);
        } else {
            var index = window["layer"].alert("确定要复制\"" + msg + "\"", () => {
                var txt = document.createElement("input");
                txt.value = msg;
                document.body.appendChild(txt);
                txt.select();
                if (document.execCommand("copy")) {
                    console.log("复制成功")
                    document.body.onclick = null;
                    txt.remove();
                    success && success();
                }
                window["layer"].close(index);
            });
        }
        return true;
    }
}