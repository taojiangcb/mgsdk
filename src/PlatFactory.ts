import { PLAT_IDS } from "./Define";
import { PlatWx } from "./plat/PlatWx";
import { PlatBase } from "./plat/PlatBase";
import { PlatDebug } from "./plat/PlatDebug";
import { NativeWx } from "./native/NativeWx";
import { NativeDebug } from "./native/NativeDebug";
import { SdkLife } from "./life/SdkLife";
import { LifeWx } from "./life/LifeWx";
import { ShareWx } from "./share/ShareWx";
import { ShareBase } from "./share/ShareBase";

export class PlatFactory {
    static createFactoryInstance(platId:number):PlatBase {
        switch(platId) {
            case PLAT_IDS.WX:
                return new PlatWx();
            default:
                return new PlatDebug();
        }
    }

    static createNativeInstance(platId:number) {
        switch(platId) {
            case PLAT_IDS.WX:
                return new NativeWx();
                default:
                    return new NativeDebug();
        }
    }

    static createLifeInstance(platId:number,lifeOpts?:mgsdk.PlatLifeOpts) {
        switch(platId) {
            case PLAT_IDS.WX:
                return new LifeWx(lifeOpts);
            default:
                return new SdkLife(lifeOpts);
        }
    }

    static createShareInstance(platId) {
        switch(platId) {
            case PLAT_IDS.WX:
                return new ShareWx();
            default:
                return new ShareBase();
        }
    }
}