/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Define.ts":
/*!***********************!*\
  !*** ./src/Define.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Define {\n    constructor() {\n        this.platId = 0;\n        this.gameId = 0;\n        this.setting = {\n            canBanner: false,\n            canPay: false,\n            canViedo: false,\n            canShare: false,\n        };\n        this.sdk_server = \"http://localhost:3005\"; //线上地址\n        this.sdk_server_dev = \"http://localhost:3005\"; //开发地址\n        this.sdk_server_local = \"http://localhost:3005\"; //本地之地\n        this.mode = 0; //开发模式\n        this.user = {};\n        this.cdnUrl = \"\"; //cdn的url 地址\n        this.ws_server = \"ws://localhost:3306\"; //webSocket 服务的地址\n        this.ws_server_dev = \"ws://localhost:3306\"; //websocket 开发服务地址\n        this.ws_server_local = \"ws://localhost:3306\"; //websocket 本地开发服务地址\n    }\n    /** http 服务地址 */\n    get sdk_server_url() {\n        if (this.mode === 0)\n            return this.sdk_server_local;\n        else if (this.mode === 1)\n            return this.sdk_server_dev;\n        else\n            return this.sdk_server;\n    }\n    /** ws 服务地址 */\n    get ws_server_url() {\n        if (this.mode === 0)\n            return this.ws_server_local;\n        else if (this.mode === 1)\n            return this.ws_server_dev;\n        else\n            return this.ws_server;\n    }\n}\nexports.Define = Define;\nexports.SDK_MODE = {\n    DEBUG: 0,\n    TEST: 1,\n    ONLINE: 2,\n};\nexports.PLAT_IDS = {\n    WEB: 1000,\n    WX: 1100\n};\nexports.ENUM_SERVER = {\n    platServer: \"platServer\",\n    loginServer: \"loginServer\",\n    userServer: \"userServer\",\n};\nexports.ENUM_SVR_FUN = {\n    getPlatInfo: \"getPlatInfo\",\n    login: \"login\",\n};\n\n\n//# sourceURL=webpack:///./src/Define.ts?");

/***/ }),

/***/ "./src/Log.ts":
/*!********************!*\
  !*** ./src/Log.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass Log {\n    constructor() {\n        this.showLog = false;\n    }\n    internalInit() {\n        this.showLog = mgsdk.initOpts.outLog || true;\n    }\n    error(msg, ...args) { console.error(msg, args); }\n    log(msg, ...args) {\n        if (this.showLog) {\n            console.log(msg, args);\n        }\n    }\n    warn(msg, ...args) {\n        if (this.showLog) {\n            console.warn(msg, args);\n        }\n    }\n}\nexports.log = new Log();\n\n\n//# sourceURL=webpack:///./src/Log.ts?");

/***/ }),

/***/ "./src/PlatFactory.ts":
/*!****************************!*\
  !*** ./src/PlatFactory.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Define_1 = __webpack_require__(/*! ./Define */ \"./src/Define.ts\");\nconst PlatWx_1 = __webpack_require__(/*! ./plat/PlatWx */ \"./src/plat/PlatWx.ts\");\nconst PlatDebug_1 = __webpack_require__(/*! ./plat/PlatDebug */ \"./src/plat/PlatDebug.ts\");\nconst NativeWx_1 = __webpack_require__(/*! ./native/NativeWx */ \"./src/native/NativeWx.ts\");\nconst NativeDebug_1 = __webpack_require__(/*! ./native/NativeDebug */ \"./src/native/NativeDebug.ts\");\nconst SdkLife_1 = __webpack_require__(/*! ./life/SdkLife */ \"./src/life/SdkLife.ts\");\nconst LifeWx_1 = __webpack_require__(/*! ./life/LifeWx */ \"./src/life/LifeWx.ts\");\nconst ShareWx_1 = __webpack_require__(/*! ./share/ShareWx */ \"./src/share/ShareWx.ts\");\nconst ShareBase_1 = __webpack_require__(/*! ./share/ShareBase */ \"./src/share/ShareBase.ts\");\nclass PlatFactory {\n    static createFactoryInstance(platId) {\n        switch (platId) {\n            case Define_1.PLAT_IDS.WX:\n                return new PlatWx_1.PlatWx();\n            default:\n                return new PlatDebug_1.PlatDebug();\n        }\n    }\n    static createNativeInstance(platId) {\n        switch (platId) {\n            case Define_1.PLAT_IDS.WX:\n                return new NativeWx_1.NativeWx();\n            default:\n                return new NativeDebug_1.NativeDebug();\n        }\n    }\n    static createLifeInstance(platId, lifeOpts) {\n        switch (platId) {\n            case Define_1.PLAT_IDS.WX:\n                return new LifeWx_1.LifeWx(lifeOpts);\n            default:\n                return new SdkLife_1.SdkLife(lifeOpts);\n        }\n    }\n    static createShareInstance(platId) {\n        switch (platId) {\n            case Define_1.PLAT_IDS.WX:\n                return new ShareWx_1.ShareWx();\n            default:\n                return new ShareBase_1.ShareBase();\n        }\n    }\n}\nexports.PlatFactory = PlatFactory;\n\n\n//# sourceURL=webpack:///./src/PlatFactory.ts?");

/***/ }),

/***/ "./src/SDK.ts":
/*!********************!*\
  !*** ./src/SDK.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst PlatFactory_1 = __webpack_require__(/*! ./PlatFactory */ \"./src/PlatFactory.ts\");\nconst Define_1 = __webpack_require__(/*! ./Define */ \"./src/Define.ts\");\nconst Log_1 = __webpack_require__(/*! ./Log */ \"./src/Log.ts\");\nconst ObjectUtil_1 = __webpack_require__(/*! ./utils/ObjectUtil */ \"./src/utils/ObjectUtil.ts\");\nconst WSModule_1 = __webpack_require__(/*! ./ws/WSModule */ \"./src/ws/WSModule.ts\");\nvar abc;\n(function (abc) {\n})(abc || (abc = {}));\nclass SDK {\n    constructor() { }\n    /**\n     * @param platId        平台定义的id\n     * @param gameId        平台定义的游戏id\n     * @param success       成功之后的回调\n     * @param fail          失败之后的回调\n     */\n    init(opts, lifeOpts, setting) {\n        /** 参数设置 */\n        this.mDefine = new Define_1.Define();\n        this.mDefine.platId = opts.platId;\n        this.mDefine.gameId = opts.gameId;\n        //复制setting 对象\n        if (setting) {\n            ObjectUtil_1.ObjectUtil.copyObj(this.mDefine.setting, setting);\n        }\n        /**sdk 的运行模式  */\n        this.mDefine.mode = opts.mode;\n        if (opts.sdk_server_local_url) {\n            this.mDefine.sdk_server_local = opts.sdk_server_local_url;\n        }\n        if (opts.sdk_ws_server_local_url) {\n            this.mDefine.ws_server_local = opts.sdk_ws_server_local_url;\n        }\n        this.mInitOpts = opts;\n        this.mWS = new WSModule_1.WSModule();\n        /**log 初始化 */\n        Log_1.log.internalInit();\n        /** 创建平台各个对象初始化 */\n        this.mShare = PlatFactory_1.PlatFactory.createShareInstance(opts.platId); //平台分享\n        this.mLife = PlatFactory_1.PlatFactory.createLifeInstance(opts.platId, lifeOpts); //生命周期管理\n        this.mPlat = PlatFactory_1.PlatFactory.createFactoryInstance(opts.platId); //平台\n        this.mNative = PlatFactory_1.PlatFactory.createNativeInstance(opts.platId); //平台的环境\n        /**初始化 */\n        this.mPlat.internalInit();\n    }\n    get share() { return this.mShare; }\n    get sdkLife() { return this.mLife; } //生命周期管理\n    get initOpts() { return this.mInitOpts; } //平台初始化参数\n    get user() { return this.mDefine.user; } //平台用户\n    get setting() { return this.mDefine.setting; } //盈利参数设置\n    get plat() { return this.mPlat; } //平台抽象对象\n    get define() { return this.mDefine; } //sdk参数\n    get native() { return this.mNative; } //平台环境抽象对象\n    get ws() { return this.mWS; }\n}\nexports.SDK = SDK;\n\n\n//# sourceURL=webpack:///./src/SDK.ts?");

/***/ }),

/***/ "./src/event/EventDispatcher.ts":
/*!**************************************!*\
  !*** ./src/event/EventDispatcher.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass EventDispatcher {\n    constructor() {\n        this._events = null;\n    }\n    /**\n    *检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。\n    *@param type 事件的类型。\n    *@return 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。\n    */\n    hasListener(type) {\n        var listener = this._events && this._events[type];\n        return !!listener;\n    }\n    /**\n    *派发事件。\n    *@param type 事件类型。\n    *@param data （可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。\n    *@return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。\n    */\n    event(type, data) {\n        if (!this._events || !this._events[type])\n            return false;\n        var listeners = this._events[type];\n        if (listeners.run) {\n            if (listeners.once)\n                delete this._events[type];\n            data != null ? listeners.runWith(data) : listeners.run();\n        }\n        else {\n            for (var i = 0, n = listeners.length; i < n; i++) {\n                var listener = listeners[i];\n                if (listener) {\n                    (data != null) ? listener.runWith(data) : listener.run();\n                }\n                if (!listener || listener.once) {\n                    listeners.splice(i, 1);\n                    i--;\n                    n--;\n                }\n            }\n            if (listeners.length === 0 && this._events)\n                delete this._events[type];\n        }\n        return true;\n    }\n    /**\n    *使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。\n    *@param type 事件的类型。\n    *@param caller 事件侦听函数的执行域。\n    *@param listener 事件侦听函数。\n    *@param args （可选）事件侦听函数的回调参数。\n    *@return 此 EventDispatcher 对象。\n    */\n    on(type, caller, listener, args) {\n        return this._createListener(type, caller, listener, args, false);\n    }\n    /**\n    *使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。\n    *@param type 事件的类型。\n    *@param caller 事件侦听函数的执行域。\n    *@param listener 事件侦听函数。\n    *@param args （可选）事件侦听函数的回调参数。\n    *@return 此 EventDispatcher 对象。\n    */\n    once(type, caller, listener, args) {\n        return this._createListener(type, caller, listener, args, true);\n    }\n    _createListener(type, caller, listener, args, once = false, offBefore = true) {\n        offBefore && this.off(type, caller, listener, once);\n        var handler = Handler.create(caller || this, listener, args, once);\n        this._events || (this._events = {});\n        var events = this._events;\n        if (!events[type])\n            events[type] = handler;\n        else {\n            if (!events[type].run)\n                events[type].push(handler);\n            else\n                events[type] = [events[type], handler];\n        }\n        return this;\n    }\n    /**\n    *从 EventDispatcher 对象中删除侦听器。\n    *@param type 事件的类型。\n    *@param caller 事件侦听函数的执行域。\n    *@param listener 事件侦听函数。\n    *@param onceOnly （可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。\n    *@return 此 EventDispatcher 对象。\n    */\n    off(type, caller, listener, onceOnly = false) {\n        if (!this._events || !this._events[type])\n            return this;\n        var listeners = this._events[type];\n        if (listener != null) {\n            if (listeners.run) {\n                if ((!caller || listeners.caller === caller) && listeners.method === listener && (!onceOnly || listeners.once)) {\n                    delete this._events[type];\n                    listeners.recover();\n                }\n            }\n            else {\n                var count = 0;\n                for (var i = 0, n = listeners.length; i < n; i++) {\n                    var item = listeners[i];\n                    if (item && (!caller || item.caller === caller) && item.method === listener && (!onceOnly || item.once)) {\n                        count++;\n                        listeners[i] = null;\n                        item.recover();\n                    }\n                }\n                if (count === n)\n                    delete this._events[type];\n            }\n        }\n        return this;\n    }\n    /**\n    *从 EventDispatcher 对象中删除指定事件类型的所有侦听器。\n    *@param type （可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。\n    *@return 此 EventDispatcher 对象。\n    */\n    offAll(type) {\n        var events = this._events;\n        if (!events)\n            return this;\n        if (type) {\n            this._recoverHandlers(events[type]);\n            delete events[type];\n        }\n        else {\n            for (var name in events) {\n                this._recoverHandlers(events[name]);\n            }\n            this._events = null;\n        }\n        return this;\n    }\n    _recoverHandlers(arr) {\n        if (!arr)\n            return;\n        if (arr.run) {\n            arr.recover();\n        }\n        else {\n            for (var i = arr.length - 1; i > -1; i--) {\n                if (arr[i]) {\n                    arr[i].recover();\n                    arr[i] = null;\n                }\n            }\n        }\n    }\n}\nexports.EventDispatcher = EventDispatcher;\nclass Handler {\n    constructor(caller, method, args, once = false) {\n        this.once = false;\n        this._id = 0;\n        this.caller = caller;\n        this.once = once;\n        this.method = method;\n        this.args = args;\n    }\n    setTo(caller, method, args, once) {\n        this._id = Handler._gid++;\n        this.caller = caller;\n        this.method = method;\n        this.args = args;\n        this.once = once;\n        return this;\n    }\n    /**\n    *执行处理器。\n    */\n    run() {\n        if (this.method == null)\n            return null;\n        var id = this._id;\n        var result = this.method.apply(this.caller, this.args);\n        this._id === id && this.once && this.recover();\n        return result;\n    }\n    runWith(data) {\n        if (this.method == null)\n            return null;\n        var id = this._id;\n        if (data == null)\n            var result = this.method.apply(this.caller, this.args);\n        else if (!this.args && !data.unshift)\n            result = this.method.call(this.caller, data);\n        else if (this.args)\n            result = this.method.apply(this.caller, this.args.concat(data));\n        else\n            result = this.method.apply(this.caller, data);\n        this._id === id && this.once && this.recover();\n        return result;\n    }\n    recover() {\n        if (this._id > 0) {\n            this._id = 0;\n            Handler._pool.push(this.clear());\n        }\n    }\n    clear() {\n        this.caller = null;\n        this.method = null;\n        this.args = null;\n        return this;\n    }\n    static create(caller, method, args, once = true) {\n        (once === void 0) && (once = true);\n        if (Handler._pool.length)\n            return Handler._pool.pop().setTo(caller, method, args, once);\n        return new Handler(caller, method, args, once);\n    }\n}\nHandler._gid = 0;\nHandler._pool = [];\nexports.Handler = Handler;\n\n\n//# sourceURL=webpack:///./src/event/EventDispatcher.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst SDK_1 = __webpack_require__(/*! ./SDK */ \"./src/SDK.ts\");\nvar mgsdk = new SDK_1.SDK();\nconsole.log(`----------index.js----------------`);\nif (window) {\n    window['mgsdk'] = mgsdk;\n}\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/life/LifeWx.ts":
/*!****************************!*\
  !*** ./src/life/LifeWx.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst SdkLife_1 = __webpack_require__(/*! ./SdkLife */ \"./src/life/SdkLife.ts\");\nclass LifeWx extends SdkLife_1.SdkLife {\n    constructor(opts) {\n        super(opts);\n    }\n    internalInit() {\n        super.internalInit();\n        wx.onShow(this.onShowHnalder);\n        wx.onHide(this.onHideOffHnalder);\n        wx.onError(this.onErrorHandler);\n    }\n}\nexports.LifeWx = LifeWx;\n\n\n//# sourceURL=webpack:///./src/life/LifeWx.ts?");

/***/ }),

/***/ "./src/life/SdkLife.ts":
/*!*****************************!*\
  !*** ./src/life/SdkLife.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass SdkLife {\n    constructor(opts) {\n        this.mLifeOpts = opts;\n        this.internalInit();\n    }\n    internalInit() {\n        if (!this.mLifeOpts)\n            this.mLifeOpts = {};\n    }\n    onShow(callBack) {\n        this.mLifeOpts.onShow = callBack;\n    }\n    onHide(callBack) {\n        this.mLifeOpts.onHide = callBack;\n    }\n    offShow(callBack) {\n        this.mLifeOpts.onShow = null;\n    }\n    offHide(callBack) {\n        this.mLifeOpts.onHide = null;\n    }\n    onError(callBack) {\n        this.mLifeOpts.onError = callBack;\n    }\n    offError(callBack) {\n        this.mLifeOpts.onError = null;\n    }\n    onShowHnalder(res) {\n        this.mLifeOpts.onShow && this.mLifeOpts.onShow(res);\n    }\n    onHideOffHnalder(res) {\n        this.mLifeOpts.onHide && this.mLifeOpts.onHide(res);\n    }\n    onErrorHandler(res) {\n        this.mLifeOpts.onError && this.mLifeOpts.onError(res);\n    }\n}\nexports.SdkLife = SdkLife;\n\n\n//# sourceURL=webpack:///./src/life/SdkLife.ts?");

/***/ }),

/***/ "./src/native/NativeBase.ts":
/*!**********************************!*\
  !*** ./src/native/NativeBase.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst EventDispatcher_1 = __webpack_require__(/*! ../event/EventDispatcher */ \"./src/event/EventDispatcher.ts\");\nclass NativeBase {\n    constructor() { }\n    httpRequst(any) { }\n    requireLib(url, success, fail) { }\n    timeOnce(delay, caller, method, ...args) {\n        var handler = EventDispatcher_1.Handler.create(caller, method, args);\n        return setTimeout(() => { handler.run(); }, delay);\n    }\n    clearTimeOnce(timer) { clearTimeout(timer); }\n    /** 本地数据处理 */\n    setItem(key, value) { return null; }\n    getItem(key) { return null; }\n    getSystemInfoAsync() { return null; }\n}\nexports.NativeBase = NativeBase;\n\n\n//# sourceURL=webpack:///./src/native/NativeBase.ts?");

/***/ }),

/***/ "./src/native/NativeDebug.ts":
/*!***********************************!*\
  !*** ./src/native/NativeDebug.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst NativeWeb_1 = __webpack_require__(/*! ./NativeWeb */ \"./src/native/NativeWeb.ts\");\nclass NativeDebug extends NativeWeb_1.NativeWeb {\n    constructor() { super(); }\n}\nexports.NativeDebug = NativeDebug;\n\n\n//# sourceURL=webpack:///./src/native/NativeDebug.ts?");

/***/ }),

/***/ "./src/native/NativeWeb.ts":
/*!*********************************!*\
  !*** ./src/native/NativeWeb.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst NativeBase_1 = __webpack_require__(/*! ./NativeBase */ \"./src/native/NativeBase.ts\");\nconst Log_1 = __webpack_require__(/*! ../Log */ \"./src/Log.ts\");\nconst HttpRequest_1 = __webpack_require__(/*! ../net/HttpRequest */ \"./src/net/HttpRequest.ts\");\nconst EventDispatcher_1 = __webpack_require__(/*! ../event/EventDispatcher */ \"./src/event/EventDispatcher.ts\");\nclass NativeWeb extends NativeBase_1.NativeBase {\n    constructor() { super(); }\n    setItem(key, value) { localStorage.setItem(key, value); }\n    getItem(key) { localStorage.getItem(key); }\n    getSystemInfoAsync() { return {}; }\n    requireJs(url, callBack) {\n        var script = document.createElement(\"script\");\n        script.type = \"text/javascript\";\n        script.src = url;\n        document.body.appendChild(script);\n        script.onload = () => {\n            callBack && callBack();\n        };\n    }\n    httpRequst(requestOpt) {\n        var request = new HttpRequest_1.HttpRequest();\n        var _self = this;\n        request.once(\"complete\", this, () => {\n            requestOpt.success && requestOpt.success(request.data);\n        });\n        request.once(\"error\", this, (...args) => {\n            args && args.length > 0 ? Log_1.log.log(args[0]) : \"\";\n            requestOpt.fail && requestOpt.fail(request.data);\n        });\n        request.send(requestOpt.url, JSON.stringify(requestOpt.data), requestOpt.method.toLocaleLowerCase(), \"text\", [\"Content-Type\", \"application/json\"]);\n    }\n    timeOnce(delay, caller, method, ...args) {\n        var handler = EventDispatcher_1.Handler.create(caller, method, args);\n        return setTimeout(() => {\n            handler.run();\n        }, delay);\n    }\n    clearTimeOnce(timer) { clearTimeout(timer); }\n    setClipBord(msg, success, fail) {\n        if (window['clipboardData']) {\n            window['clipboardData'].clearData();\n            window['clipboardData'].setData(\"Text\", msg);\n        }\n        else if (navigator.userAgent.indexOf(\"Opera\") != -1) {\n            window.location = msg;\n        }\n        else if (window['netscape']) {\n            try {\n                window['netscape'].security.PrivilegeManager.enablePrivilege(\"UniversalXPConnect\");\n            }\n            catch (e) {\n                alert(\"您的当前浏览器设置已关闭此功能！请按以下步骤开启此功能！\\n新开一个浏览器，在浏览器地址栏输入'about:config'并回车。\\n然后找到'signed.applets.codebase_principal_support'项，双击后设置为'true'。\\n声明：本功能不会危极您计算机或数据的安全！\");\n            }\n            var Components = window[\"Components\"];\n            var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);\n            if (!clip)\n                return;\n            var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);\n            if (!trans)\n                return;\n            trans.addDataFlavor('text/unicode');\n            // var str = new Object();\n            var len = new Object();\n            var str = Components.classes[\"@mozilla.org/supports-string;1\"].createInstance(Components.interfaces.nsISupportsString);\n            var copytext = msg;\n            str.data = copytext;\n            trans.setTransferData(\"text/unicode\", str, copytext.length * 2);\n            var clipid = Components.interfaces.nsIClipboard;\n            if (!clip)\n                return false;\n            clip.setData(trans, null, clipid.kGlobalClipboard);\n        }\n        else {\n            var index = window[\"layer\"].alert(\"确定要复制\\\"\" + msg + \"\\\"\", () => {\n                var txt = document.createElement(\"input\");\n                txt.value = msg;\n                document.body.appendChild(txt);\n                txt.select();\n                if (document.execCommand(\"copy\")) {\n                    console.log(\"复制成功\");\n                    document.body.onclick = null;\n                    txt.remove();\n                    success && success();\n                }\n                window[\"layer\"].close(index);\n            });\n        }\n        return true;\n    }\n}\nexports.NativeWeb = NativeWeb;\n\n\n//# sourceURL=webpack:///./src/native/NativeWeb.ts?");

/***/ }),

/***/ "./src/native/NativeWx.ts":
/*!********************************!*\
  !*** ./src/native/NativeWx.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst NativeBase_1 = __webpack_require__(/*! ./NativeBase */ \"./src/native/NativeBase.ts\");\nclass NativeWx extends NativeBase_1.NativeBase {\n    constructor() { super(); }\n    /** 网络请求 */\n    httpRequst(requestOpt) {\n        var request = {};\n        for (var key in requestOpt) {\n            request[key] = requestOpt[key];\n        }\n        if (requestOpt.header) {\n            var header = {};\n            for (var i = 0; i < requestOpt.header.length; i += 2) {\n                header[requestOpt.header[i]] = requestOpt.header[i + 1];\n            }\n            request.header = header;\n        }\n        wx.request(request);\n    }\n    setItem(key, value) {\n        wx.setStorageSync(key, value);\n    }\n    getItem(key) {\n        return wx.getStorageSync(key);\n    }\n    getSystemInfoAsync() {\n        if (this.laze_systemInfo)\n            return this.laze_systemInfo;\n        let system = wx.getSystemInfoSync();\n        if (system.system && system.system.toLocaleLowerCase().indexOf(\"ios\") != -1) {\n            system.isIos = true;\n        }\n        this.laze_systemInfo = system;\n        return system;\n    }\n}\nexports.NativeWx = NativeWx;\n\n\n//# sourceURL=webpack:///./src/native/NativeWx.ts?");

/***/ }),

/***/ "./src/net/HttpRequest.ts":
/*!********************************!*\
  !*** ./src/net/HttpRequest.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst EventDispatcher_1 = __webpack_require__(/*! ../event/EventDispatcher */ \"./src/event/EventDispatcher.ts\");\nconst Utils_1 = __webpack_require__(/*! ../utils/Utils */ \"./src/utils/Utils.ts\");\nclass HttpRequest extends EventDispatcher_1.EventDispatcher {\n    constructor() {\n        super();\n        this._responseType = \"\";\n        this._data = null;\n        this._http = null;\n        this._http = new XMLHttpRequest();\n    }\n    send(url, data, method = \"get\", responseType = \"text\", headers) {\n        this._responseType = responseType;\n        this._data = null;\n        var _self = this;\n        var http = this._http;\n        http.open(method, url, true);\n        if (headers) {\n            for (var i = 0; i < headers.length; i++) {\n                http.setRequestHeader(headers[i++], headers[i]);\n            }\n        }\n        else {\n            if (!data || (typeof data == 'string'))\n                http.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n            else\n                http.setRequestHeader(\"Content-Type\", \"application/json\");\n        }\n        http.responseType = responseType !== \"arraybuffer\" ? \"text\" : \"arraybuffer\";\n        http.onerror = function (e) { _self._onError(e); };\n        http.onabort = function (e) { _self._onAbort(e); };\n        http.onprogress = function (e) { _self._onProgress(e); };\n        http.onload = function (e) {\n            _self._onLoad(e);\n        };\n        http.send(data);\n    }\n    _onError(e) {\n        this.error(\"Request failed Status:\" + this._http.status + \" text:\" + this._http.statusText);\n    }\n    _onAbort(e) {\n        this.error(\"Request was aborted by user\");\n    }\n    _onProgress(e) {\n        if (e && e.lengthComputable)\n            this.event(/*laya.events.Event.PROGRESS*/ \"progress\", e.loaded / e.total);\n    }\n    _onLoad(e) {\n        var http = this._http;\n        var status = http.status !== undefined ? http.status : 200;\n        if (status === 200 || status === 204 || status === 0) {\n            this.complete();\n        }\n        else {\n            this.error(\"[\" + http.status + \"]\" + http.statusText + \":\" + http.responseURL);\n        }\n    }\n    /**\n    *@private\n    *请求错误的处理函数。\n    *@param message 错误信息。\n    */\n    error(message) {\n        this.clear();\n        this.event(/*laya.events.Event.ERROR*/ \"error\", message);\n    }\n    /**\n    * @private\n    * 请求成功完成的处理函数。\n    */\n    complete() {\n        this.clear();\n        var flag = true;\n        try {\n            if (this._responseType === \"json\") {\n                this._data = JSON.parse(this._http.responseText);\n            }\n            else if (this._responseType === \"xml\") {\n                this._data = Utils_1.Utils.parseXMLFromString(this._http.responseText);\n            }\n            else {\n                this._data = this._http.response || this._http.responseText;\n            }\n        }\n        catch (e) {\n            flag = false;\n            this.error(e.message);\n        }\n        flag && this.event(/*laya.events.Event.COMPLETE*/ \"complete\", (this._data instanceof Array) ? [this._data] : this._data);\n    }\n    /**\n    * @private\n    * 清除当前请求。\n    */\n    clear() {\n        var http = this._http;\n        http.onerror = http.onabort = http.onprogress = http.onload = null;\n    }\n    get url() {\n        return this._http.responseURL;\n    }\n    get http() {\n        return this._http;\n    }\n    get data() {\n        return this._data;\n    }\n}\nexports.HttpRequest = HttpRequest;\n\n\n//# sourceURL=webpack:///./src/net/HttpRequest.ts?");

/***/ }),

/***/ "./src/net/HttpTools.ts":
/*!******************************!*\
  !*** ./src/net/HttpTools.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Log_1 = __webpack_require__(/*! ../Log */ \"./src/Log.ts\");\nclass HttpTools {\n    constructor() {\n        this._retryTime = 0;\n    }\n    static callServer(server, func, data, success, fail, method = \"POST\") {\n        var url = `${mgsdk.define.sdk_server_url}/${server}/${func}`;\n        this.send(url, data, success, fail, method);\n    }\n    static send(url, data, success, fail, method = \"POST\") {\n        var request;\n        if (this._pool && this._pool.length > 0) {\n            request = this._pool.shift();\n        }\n        else {\n            request = new HttpTools();\n        }\n        request.setTo(url, data, success, fail, method);\n        request.send();\n    }\n    setTo(url, data, success, fail, method = \"POST\") {\n        this._retryTime = 0;\n        var _self = this;\n        data = data || {};\n        data.timestamp = Date.now();\n        this._request = {\n            url: url, method: method, data: data, success: (res) => {\n                var resultD;\n                if (typeof res == \"string\") {\n                    try {\n                        resultD = JSON.parse(res);\n                    }\n                    catch (e) {\n                        resultD = { success: false, data: res };\n                    }\n                }\n                else {\n                    resultD = res.data;\n                }\n                success && success(resultD);\n                _self._recover();\n            }, fail: (res) => {\n                _self._retryTime++;\n                if (_self._retryTime > 3) {\n                    fail && fail();\n                    _self._recover();\n                }\n                else {\n                    mgsdk.native.timeOnce(3000, _self, _self.send);\n                }\n            }\n        };\n    }\n    send() {\n        if (!this._request)\n            return;\n        if (mgsdk.native) {\n            mgsdk.native.httpRequst(this._request);\n        }\n        else {\n            Log_1.log.error(\"native还没有初始化\");\n        }\n    }\n    _recover() {\n        if (!HttpTools._pool)\n            HttpTools._pool = [];\n        this._request = null;\n        HttpTools._pool.push(this);\n    }\n}\nexports.HttpTools = HttpTools;\n\n\n//# sourceURL=webpack:///./src/net/HttpTools.ts?");

/***/ }),

/***/ "./src/net/webSocket/SocketClient.ts":
/*!*******************************************!*\
  !*** ./src/net/webSocket/SocketClient.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Log_1 = __webpack_require__(/*! ../../Log */ \"./src/Log.ts\");\nconst WSIDentiryController_1 = __webpack_require__(/*! ./WSIDentiryController */ \"./src/net/webSocket/WSIDentiryController.ts\");\nclass SocketClient {\n    constructor(opts) {\n        /** 对应问答的 次数引用 */\n        this.ask_count = 0;\n        /**连接断开之后重试的次数 */\n        this.try_connect_count = 5; //重试的次数\n        this.try_agin = 0; //当前重试的次数\n        this.opts = opts;\n        this.controllMaps = new Map();\n        this.askCallMaps = new Map();\n        this.injiectSvrController();\n        this.createClientIO(opts);\n    }\n    /** 注册一些消息处理服务，由子级对象覆盖实现 */\n    injiectSvrController() {\n        //sample add ServerController code;\n        this.registerController(WSIDentiryController_1.WSIDentiryController.NAME, WSIDentiryController_1.WSIDentiryController);\n    }\n    /** 注册业务消息处理 */\n    registerController(svrName, T) {\n        let controller = new T(svrName);\n        controller.client = this;\n        this.controllMaps.set(svrName, controller);\n    }\n    addController(controller) {\n        controller.client = this;\n        this.controllMaps.set(controller.server_name, controller);\n    }\n    createClientIO(opts) {\n        this.connect();\n    }\n    connect() {\n        if (this.clientIO) {\n            this.clientIO = null;\n        }\n        this.clientIO = new WebSocket(this.opts.url);\n        this.clientIO.onopen = evt => {\n            Log_1.log.log(`${this.opts.url} connect-succeed`);\n            ;\n        };\n        this.clientIO.onerror = err => {\n            Log_1.log.error(JSON.stringify(event));\n        };\n        this.clientIO.onmessage = (message) => {\n            let protocol = JSON.parse(String(message.data));\n            let controller = this.controllMaps.get(protocol.procoBody.server);\n            if (!controller) {\n                Log_1.log.error(`无效的服务:${protocol.procoBody.server} protocol:${JSON.stringify(protocol)}`);\n                return;\n            }\n            controller && controller.doAction(protocol);\n            let askId = protocol.askId;\n            /** 产出用掉的ask 回调函数 */\n            if (askId) {\n                let askCall = this.askCallMaps.get(askId);\n                if (askCall) {\n                    askCall(protocol);\n                    this.askCallMaps.delete(askId);\n                }\n            }\n        };\n        this.clientIO.onclose = code => {\n            this.aginConnect();\n        };\n    }\n    /** * 断线之后重新链接 */\n    aginConnect() {\n        if (this.clientIO) {\n            this.clientIO = undefined;\n        }\n        if (this.try_agin < this.try_connect_count) {\n            this.try_agin++;\n            if (this.try_agin_id) {\n                clearTimeout(this.try_agin_id);\n                this.try_agin_id = null;\n            }\n            this.try_agin_id = setTimeout(() => {\n                this.connect();\n            }, 3000);\n        }\n        else {\n            this.forceClose();\n            var err_str = `网关服务器链接断开！重试了${this.try_connect_count}次，还是不行。`;\n            Log_1.log.error(err_str);\n            //网络真的断开了，清楚之前所有的问答回调\n            this.askCallMaps.clear();\n        }\n    }\n    /**\n     * 强行断开，不进行重试连接\n     */\n    forceClose() {\n        if (this.clientIO && this.clientIO.readyState != WebSocket.CLOSED) {\n            this.try_agin = this.try_connect_count;\n            if (this.try_agin_id) {\n                clearTimeout(this.try_agin_id);\n                this.try_agin_id = null;\n            }\n            this.clientIO.close();\n        }\n    }\n    /** 发送消息到服务端 */\n    send(protocol, askFunc) {\n        if (askFunc) {\n            this.ask_count++;\n            let askId = `${this.ask_count}_${protocol.socketId}_${protocol.procoBody.server}_${protocol.procoBody.action}`;\n            protocol.askId = askId;\n            this.askCallMaps.set(askId, askFunc);\n        }\n        if (!this.clientIdentity) {\n            let identityController = this.controllMaps.get(WSIDentiryController_1.WSIDentiryController.NAME);\n            if (identityController)\n                identityController.addToBefor(protocol);\n            return;\n        }\n        if (this.clientIO && this.clientIO.readyState === WebSocket.OPEN) {\n            this.clientIO.send(JSON.stringify(protocol));\n        }\n    }\n    dispose() {\n        this.askCallMaps.clear();\n        this.controllMaps.clear();\n    }\n    getControllerBy(name) {\n        return this.controllMaps.get(name);\n    }\n    //如果连接成功了，服务端会设置 clientIdentity 对象\n    set clientIdentity(val) { this.mClientIdentity = val; }\n    get clientIdentity() { return this.mClientIdentity; }\n    get clientId() { return this.mClientIdentity ? this.mClientIdentity.clientId : \"\"; }\n}\nexports.SocketClient = SocketClient;\n\n\n//# sourceURL=webpack:///./src/net/webSocket/SocketClient.ts?");

/***/ }),

/***/ "./src/net/webSocket/SocketController.ts":
/*!***********************************************!*\
  !*** ./src/net/webSocket/SocketController.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/**\n * socket 业务逻辑 解析处理封装层\n */\nclass SocketController {\n    constructor(svrName, socketClient) {\n        /** 注册的服务名称 */\n        this.serverName = \"\";\n        this.serverName = svrName;\n        this.m_socketClient = socketClient;\n    }\n    /** 设置 webSocket 服务 */\n    set client(svr) { this.m_socketClient = svr; }\n    get client() { return this.m_socketClient; }\n    doAction(protocol) {\n        let method = protocol.procoBody.action;\n        let callFunc = this[method];\n        callFunc && callFunc.call(this, protocol);\n    }\n    get server_name() {\n        return this.serverName;\n    }\n}\nexports.SocketController = SocketController;\n\n\n//# sourceURL=webpack:///./src/net/webSocket/SocketController.ts?");

/***/ }),

/***/ "./src/net/webSocket/WSIDentiryController.ts":
/*!***************************************************!*\
  !*** ./src/net/webSocket/WSIDentiryController.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst SocketController_1 = __webpack_require__(/*! ./SocketController */ \"./src/net/webSocket/SocketController.ts\");\nconst Log_1 = __webpack_require__(/*! ../../Log */ \"./src/Log.ts\");\n/**\n * 对客户的socket 进行连接身份 匹配\n */\nclass WSIDentiryController extends SocketController_1.SocketController {\n    constructor(serName, clientIo) {\n        super(serName, clientIo);\n        this.before_initClient_set = new Array();\n    }\n    /** 添加到 initClient 消息之前的缓存队列中 */\n    addToBefor(protocol) {\n        this.before_initClient_set.push(protocol);\n    }\n    /**连接成功之后 服务端会发回对应的 socket idengity */\n    initClient(protocol) {\n        let clientIdentity = { clientId: protocol.socketId };\n        if (this.client)\n            this.client.clientIdentity = clientIdentity;\n        Log_1.log.warn(JSON.stringify(clientIdentity));\n        //发送之前身份验证前的缓冲数据\n        if (this.before_initClient_set.length > 0) {\n            this.before_initClient_set.forEach(element => {\n                element.socketId = this.client.clientId;\n            });\n            this.client.clientIO.send(JSON.stringify(protocol));\n            this.before_initClient_set = [];\n        }\n    }\n}\nWSIDentiryController.NAME = \"__IDENTITY_CONTROLLER__\";\nexports.WSIDentiryController = WSIDentiryController;\n\n\n//# sourceURL=webpack:///./src/net/webSocket/WSIDentiryController.ts?");

/***/ }),

/***/ "./src/plat/PlatBase.ts":
/*!******************************!*\
  !*** ./src/plat/PlatBase.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Log_1 = __webpack_require__(/*! ../Log */ \"./src/Log.ts\");\nconst HttpTools_1 = __webpack_require__(/*! ../net/HttpTools */ \"./src/net/HttpTools.ts\");\nconst Define_1 = __webpack_require__(/*! ../Define */ \"./src/Define.ts\");\nclass PlatBase {\n    constructor() { }\n    internalInit() {\n        this.mInitOpts = mgsdk.initOpts;\n        if (this.mInitOpts.libUrl) {\n            mgsdk.native.requireLib(this.mInitOpts.libUrl, () => {\n                this.getPlatInfo();\n            }, () => {\n                var msg = `第三方 lib 加载失败:${this.mInitOpts.libUrl}`;\n                Log_1.log.error(msg);\n                this.mInitOpts.fail(msg);\n            });\n        }\n        else {\n            this.getPlatInfo();\n        }\n    }\n    getPlatInfo() {\n        HttpTools_1.HttpTools.callServer(Define_1.ENUM_SERVER.platServer, Define_1.ENUM_SVR_FUN.getPlatInfo, { platId: this.mInitOpts.platId, gameId: this.mInitOpts.gameId }, res => {\n            if (res.success) {\n                this.mConfigCli = res.data.cli_config;\n                this.mInitOpts.success && this.mInitOpts.success(res);\n            }\n            else {\n                var msg = `get platInfo fail == paltId:${this.mInitOpts.platId},gameId:${this.mInitOpts.gameId}`;\n                this.mInitOpts.fail && this.mInitOpts.fail(msg);\n            }\n        }, () => {\n            var msg = `get platInfo fail == paltId:${this.mInitOpts.platId},gameId:${this.mInitOpts.gameId}`;\n            this.mInitOpts.fail && this.mInitOpts.fail(msg);\n        });\n    }\n    /**从服务端获取到的配置信息 */\n    get cliConfig() { return this.mConfigCli; }\n    /**平台登录 */\n    login(opts) {\n        this.mLoginOpts = opts;\n    }\n    /**获取启动参数 */\n    getLaunchOptionsSync() {\n        return {};\n    }\n    //============================内部函数=======================\n    /**发起登录请求 */\n    platLogin(platUser, launchData) {\n        let userId = \"\";\n        let channelId = \"\";\n        let appId = \"\";\n        var referrerinfo = launchData ? launchData.referrerInfo : null;\n        if (referrerinfo) {\n            if (referrerinfo.appId) {\n                appId = referrerinfo.appId;\n                channelId = launchData.scene.toString();\n            }\n        }\n        var queryData = launchData ? launchData.query : null;\n        if (queryData) {\n            if (queryData.fromUser)\n                userId = queryData.fromUser;\n            if (queryData.channelId)\n                channelId = queryData.channelId;\n        }\n        let param = {\n            platUser: platUser,\n            platId: this.mInitOpts.platId,\n            gameId: this.mInitOpts.gameId,\n            fromChannel: channelId,\n            fromAppId: appId,\n            fromUser: userId,\n        };\n        HttpTools_1.HttpTools.callServer(Define_1.ENUM_SERVER.userServer, Define_1.ENUM_SVR_FUN.login, param, res => {\n            if (res.success) {\n                mgsdk.define.user = res.data;\n                this.mLoginOpts.success && this.mLoginOpts.success(res.data);\n            }\n            else {\n                Log_1.log.error(res.msg);\n                this.mLoginOpts.fail && this.mLoginOpts.fail(res.msg);\n            }\n        }, () => {\n            var msg = `登录失败 params${JSON.stringify(param)}`;\n            Log_1.log.error(msg);\n            this.mLoginOpts.fail && this.mLoginOpts.fail();\n        });\n    }\n}\nexports.PlatBase = PlatBase;\n\n\n//# sourceURL=webpack:///./src/plat/PlatBase.ts?");

/***/ }),

/***/ "./src/plat/PlatDebug.ts":
/*!*******************************!*\
  !*** ./src/plat/PlatDebug.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst PlatBase_1 = __webpack_require__(/*! ./PlatBase */ \"./src/plat/PlatBase.ts\");\nconst Log_1 = __webpack_require__(/*! ../Log */ \"./src/Log.ts\");\nclass PlatDebug extends PlatBase_1.PlatBase {\n    constructor() { super(); }\n    login(opts) {\n        super.login(opts);\n        Log_1.log.log(JSON.stringify(opts));\n        let { user, pwd } = opts.arg;\n        let debugUser = {\n            naickName: user,\n            avatar: \"\",\n            testUser: user,\n            testPwd: pwd,\n        };\n        this.platLogin(debugUser);\n        //    HttpTools.callServer()\n    }\n}\nexports.PlatDebug = PlatDebug;\n\n\n//# sourceURL=webpack:///./src/plat/PlatDebug.ts?");

/***/ }),

/***/ "./src/plat/PlatWx.ts":
/*!****************************!*\
  !*** ./src/plat/PlatWx.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst PlatBase_1 = __webpack_require__(/*! ./PlatBase */ \"./src/plat/PlatBase.ts\");\nconst Log_1 = __webpack_require__(/*! ../Log */ \"./src/Log.ts\");\nclass PlatWx extends PlatBase_1.PlatBase {\n    constructor() {\n        super();\n        this.mIsFail = false;\n    }\n    /** wx平台初始化  */\n    internalInit() {\n        super.internalInit();\n    }\n    login(opts) {\n        super.login(opts);\n        this.wxLogin();\n    }\n    getLaunchOptionsSync() {\n        return wx.getLaunchOptionsSync();\n    }\n    /** 微信登录 */\n    wxLogin() {\n        wx.login({\n            success: (res) => {\n                this.mLoginResult = res;\n                Log_1.log.log(\"wx登录成功：\", res);\n                //这个逻辑是防止用户停留再授权按钮阶段超过时限，导致code过期\n                this.mCodeTimer = mgsdk.native.timeOnce(5 * 60000, this, this.wxLogin);\n                if (this.mLoginOpts.getUser)\n                    this.showLoginBtn();\n                else {\n                    this.callLogin();\n                }\n            }, fail: (error) => {\n                Log_1.log.error(\"wx登录失败:\", error);\n                mgsdk.native.timeOnce(1000, this, this.wxLogin);\n            }\n        });\n    }\n    showLoginBtn() {\n        if (this.mBtn)\n            return;\n        var _self = this;\n        Log_1.log.log(\"显示登录按钮\");\n        if (wx.getUserInfo && !this.mIsFail) {\n            wx.getUserInfo({\n                withCredentials: true,\n                lang: \"zh_CN\",\n                success: (res) => {\n                    Log_1.log.log(`用户数据获取成功:${JSON.stringify(res.userInfo)}`);\n                    _self._userGetHandler(res);\n                },\n                fail: (res) => {\n                    Log_1.log.error(\"获取用户信息失败\", res);\n                    this.mIsFail = true;\n                    this.showLoginBtn();\n                }\n            });\n            return;\n        }\n        if (wx.createUserInfoButton) {\n            var systemInfo = wx.getSystemInfoSync();\n            var btnSkin = {\n                width: 332,\n                height: 127,\n                x: 0,\n                y: 0,\n                skin: mgsdk.define.cdnUrl + \"promotion\\/wxLogin.png\",\n            };\n            btnSkin.x = (systemInfo.windowWidth * 2 - btnSkin.width) / 2;\n            btnSkin.y = (systemInfo.windowHeight * 2 - btnSkin.height) / 3 * 2;\n            if (this.mLoginOpts.btnStyle) {\n                for (var key in this.mLoginOpts.btnStyle) {\n                    btnSkin[key] = this.mLoginOpts.btnStyle[key];\n                }\n            }\n            if (btnSkin.skin.indexOf(\"http\") == -1) {\n                var img = wx.createImage();\n                img.src = btnSkin.skin;\n                btnSkin.skin = img.src;\n            }\n            Log_1.log.log(btnSkin);\n            this.mBtn = wx.createUserInfoButton({\n                type: 'image',\n                image: btnSkin.skin,\n                style: {\n                    left: btnSkin.x / 2,\n                    top: btnSkin.y / 2,\n                    width: btnSkin.width / 2,\n                    height: btnSkin.height / 2,\n                }\n            });\n            this.mBtn.show();\n            this.mBtn.onTap(this._userGetHandler.bind(this));\n        }\n    }\n    _userGetHandler(userInfo) {\n        Log_1.log.log(\"用户授权数据:\", userInfo);\n        if (this.mBtn) {\n            this.mBtn.destroy();\n            this.mBtn = null;\n        }\n        if (!userInfo.userInfo) {\n            this.showLoginBtn();\n            return;\n        }\n        this.mUserInfo = userInfo;\n        this.callLogin();\n    }\n    callLogin() {\n        if (this.mCodeTimer) {\n            mgsdk.native.clearTimeOnce(this.mCodeTimer);\n            this.mCodeTimer = null;\n        }\n        var nickName = \"\";\n        var avatar = \"\";\n        if (this.mUserInfo) {\n            var content = { iv: this.mUserInfo.iv, encryptData: this.mUserInfo.encryptedData };\n            nickName = this.mUserInfo.userInfo.nickName;\n            avatar = this.mUserInfo.userInfo.avatarUrl;\n        }\n        let launchData = this.getLaunchOptionsSync();\n        this.platLogin({ code: this.mLoginResult.code, naickName: nickName, avatar: avatar, content: content }, launchData);\n    }\n}\nexports.PlatWx = PlatWx;\n\n\n//# sourceURL=webpack:///./src/plat/PlatWx.ts?");

/***/ }),

/***/ "./src/share/ShareBase.ts":
/*!********************************!*\
  !*** ./src/share/ShareBase.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ShareBase {\n    constructor() { }\n}\nexports.ShareBase = ShareBase;\n\n\n//# sourceURL=webpack:///./src/share/ShareBase.ts?");

/***/ }),

/***/ "./src/share/ShareWx.ts":
/*!******************************!*\
  !*** ./src/share/ShareWx.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst ShareBase_1 = __webpack_require__(/*! ./ShareBase */ \"./src/share/ShareBase.ts\");\nclass ShareWx extends ShareBase_1.ShareBase {\n    constructor() {\n        super();\n    }\n    shareAppMessage(opts) {\n        wx.shareAppMessage(opts);\n    }\n    /**\n     * 点转发是处理\n     * @param callBack\n     */\n    onShareAppMessage(callBack) {\n        wx.onShareAppMessage(callBack);\n    }\n    showShareMenu(opts) {\n        wx.showShareMenu({\n            withShareTicket: opts.withShareTicket,\n            success: opts.success,\n            fail: opts.fail,\n            complete: opts.complete\n        });\n    }\n    hideShareMenu(opts) {\n        wx.hideShareMenu(opts);\n    }\n}\nexports.ShareWx = ShareWx;\n\n\n//# sourceURL=webpack:///./src/share/ShareWx.ts?");

/***/ }),

/***/ "./src/utils/ObjectUtil.ts":
/*!*********************************!*\
  !*** ./src/utils/ObjectUtil.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nclass ObjectUtil {\n    /**\n     * 对象潜拷贝\n     */\n    static copyObj(to, form) {\n        for (const key in form) {\n            if (form.hasOwnProperty(key)) {\n                to[key] = form[key];\n            }\n        }\n    }\n}\nexports.ObjectUtil = ObjectUtil;\n\n\n//# sourceURL=webpack:///./src/utils/ObjectUtil.ts?");

/***/ }),

/***/ "./src/utils/Utils.ts":
/*!****************************!*\
  !*** ./src/utils/Utils.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst Log_1 = __webpack_require__(/*! ../Log */ \"./src/Log.ts\");\nclass Utils {\n    static parseXMLFromString(value) {\n        var rst;\n        value = value.replace(/>\\s+</g, '><');\n        /*__JS__ */ rst = (new DOMParser()).parseFromString(value, 'text/xml');\n        if (rst.firstChild.textContent.indexOf(\"This page contains the following errors\") > -1) {\n            throw new Error(rst.firstChild.firstChild.textContent);\n        }\n        return rst;\n    }\n}\nexports.Utils = Utils;\n/**\n * 对比两个版本大小，v1大则返回1，v1小则返回-1，否则0\n * @param v1\n * @param v2\n */\nfunction compareVersion(v1, v2) {\n    Log_1.log.log(\"比较版本\" + v1 + \":\" + v2);\n    if (!v1 && v2)\n        return -1;\n    if (v1 && !v2)\n        return 1;\n    var v1Arr = v1.split(\".\");\n    var v2Arr = v2.split(\".\");\n    var len = Math.max(v1Arr.length, v2Arr.length);\n    for (var i = 0; i < len; i++) {\n        if (!v1Arr[i])\n            return -1;\n        if (!v2Arr[i])\n            return 1;\n        if (v1Arr[i] > v2Arr[i])\n            return 1;\n        if (v1Arr[i] < v2Arr[i])\n            return -1;\n    }\n    return 0;\n}\nexports.compareVersion = compareVersion;\n\n\n//# sourceURL=webpack:///./src/utils/Utils.ts?");

/***/ }),

/***/ "./src/ws/WSModule.ts":
/*!****************************!*\
  !*** ./src/ws/WSModule.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst SocketClient_1 = __webpack_require__(/*! ../net/webSocket/SocketClient */ \"./src/net/webSocket/SocketClient.ts\");\nconst WsHelloServer_1 = __webpack_require__(/*! ./WsHelloServer */ \"./src/ws/WsHelloServer.ts\");\nclass WSModule {\n    constructor() {\n        let opts = { url: mgsdk.define.ws_server_url };\n        this.clientIO = new SocketClient_1.SocketClient(opts);\n        this.helloController = new WsHelloServer_1.WsHelloServer(\"HELLO\" /* HELLO */);\n        this.clientIO.addController(this.helloController);\n        // method 2\n        //this.clientIO.registerController<WsHelloServer>(WsHelloServer.NAME,WsHelloServer);\n    }\n    send(protocol, askCall) {\n        protocol.socketId = this.clientIO.clientId;\n        this.clientIO.send(protocol, askCall);\n    }\n    get wsClient() { return this.clientIO; }\n    get helloSvr() { return this.helloController; }\n}\nexports.WSModule = WSModule;\n\n\n//# sourceURL=webpack:///./src/ws/WSModule.ts?");

/***/ }),

/***/ "./src/ws/WsHelloServer.ts":
/*!*********************************!*\
  !*** ./src/ws/WsHelloServer.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst SocketController_1 = __webpack_require__(/*! ../net/webSocket/SocketController */ \"./src/net/webSocket/SocketController.ts\");\nclass WsHelloServer extends SocketController_1.SocketController {\n    constructor(svrName) { super(svrName); }\n    say_hello(protocol) {\n    }\n    sendHello() {\n    }\n}\nexports.WsHelloServer = WsHelloServer;\n\n\n//# sourceURL=webpack:///./src/ws/WsHelloServer.ts?");

/***/ })

/******/ });