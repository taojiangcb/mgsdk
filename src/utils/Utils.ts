import { Handler } from "../event/EventDispatcher";
import { log } from "../Log";


export class Utils {
    static parseXMLFromString(value: string): any {
        var rst;
        value = value.replace(/>\s+</g, '><');
		/*__JS__ */rst = (new DOMParser()).parseFromString(value, 'text/xml');
        if (rst.firstChild.textContent.indexOf("This page contains the following errors") > -1) {
            throw new Error(rst.firstChild.firstChild.textContent);
        }
        return rst;
    }
}

/**
 * 对比两个版本大小，v1大则返回1，v1小则返回-1，否则0
 * @param v1 
 * @param v2 
 */
export function compareVersion(v1: string, v2: string) {
    log.log("比较版本"+v1+":"+v2);
    if (!v1 && v2) return -1;
    if (v1 && !v2) return 1;
    var v1Arr = v1.split(".");
    var v2Arr = v2.split(".");
    var len = Math.max(v1Arr.length, v2Arr.length);
    for (var i = 0; i < len; i++) {
        if (!v1Arr[i]) return -1;
        if (!v2Arr[i]) return 1;
        if (v1Arr[i] > v2Arr[i]) return 1;
        if (v1Arr[i] < v2Arr[i]) return -1;
    }
    return 0;
}