import { PLAT_IDS } from "./Define";
import { PlatWx } from "./plat/PlatWx";
import { PlatBase } from "./plat/PlatBase";
import { PlatDebug } from "./plat/PlatDebug";
import { NativeWx } from "./native/NativeWx";
import { NativeDebug } from "./native/NativeDebug";

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
}