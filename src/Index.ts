import { SDK } from "./SDK";

var mgsdk = new SDK();
console.log(`----------index.js----------------`);
if(window) window['mgsdk'] = mgsdk;