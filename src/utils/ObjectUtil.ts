
export class ObjectUtil {

    /**
     * 对象潜拷贝
     */
    static copyObj(to:Object,form:Object):void {
        for (const key in form) {
            if (form.hasOwnProperty(key)) {
                to[key] = form[key];
            }
        }
    }
}