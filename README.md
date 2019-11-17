### 添加本地公共库

1. 在 mgsdkcommon 项目中执行 npm link 命令创建本地连接库。

项目地址:https://github.com/taojiangcb/-types-mgsdkcommon

2. 在mgsdk 项目中执行 npm link @types/mgsdkcommon 命令连接本地项目库


# 功能规划 

## 1. 各个配置参数 & 安全验证

分发的各个渠道的参数已经安全校验

```
服务端：
登录: appId
安全: 验证签名 security
支付: payId
广告: adId
横幅: bannerId
```

```
客户端:
登录: appId
支付: payId
横幅: bannerId
```

## sdk 生命周期

1. sdk启动初始化 (h5 onload 事件)
2. 切换到后台 最小化 (h5 onpagehide 事件)
3. 切换到前台 最大化 (h5 onpageshow 事件)
4. 运行脚本异常 (h5 onerror 事件)
5. 关闭程序 (h5 onunload 事件)

```

//sdk 加载初始化启动回调
mgsdk.life.onRead(callBack:()=>void);

//应用到前台时处理
mgsdk.life.onShow(callBack?:(res?: mgsdk.iLaunchData) => void);     
mgsdk.life.offShow(callFunc: Function): void;

//应用到后台时处理
mgsdk.life.onHide(callBack?:(res?: any) => void);                   
mgsdk.life.offHide(callFunc: Function): void;

//平台捕获到异常时处理
mgsdk.life.onError?(callBack?:(error?: any) => void);               
mgsdk.life.offError?(callFunc: Function): void;
```

## mgsdk 全局 api
```
用户平台初始化
mgsdk.init()

从服务端获取到的配置信息
mgsdk.cliConfig
```

## Plat 用户登录验签名&以及来源流量

1. 用户注册
2. 用户流量的来源

```
用户平台登录&验签&注册
mgsdk.plat.login()

获取游戏启动的入口来源的参数
mgsdk.plat.getLaunchOptionsSync()
```

## AppMatrix 产品矩阵推广
```
1.获取能跳转的游戏列表
2.跳转到指定的游戏
```

## DataPoint 数据埋点
```
1. 游戏数据采集打点
2. 上报游戏分数
3. 行为分析
```

## ADViedo 视频广告
```
1. 视频广告加载,预加载
2. 视屏广告播放管理(控制等)
```

## ADBanner banner广告
```
1. banner 的预加载
2. banner 的显示控制
```

## Share 社交
```
//显示 app的 share 按钮
mgsdk.share.showShareMenu?(opts:iShareMenuOpts);
//隐藏 app的 share 按钮
mgsdk.share.hideShareMenu?(opts:iShareMenuOpts);
//用户行为主动分享
mgsdk.share.shareAppMessage?(obj:iShareContext);
//点击app 的分享按钮
mgsdk.share.onShareAppMessage?(callBack:()=>iShareContext);
mgsdk.share.offShareAppMessage?(callBack:()=>void);
```

## Pay 支付
```
1. 调用支付购买
2. 发货
3. 补单
```

## native 平台功能 针对各个第三方环境的差异化 通一的api

```
网络请求
httpRequst(any: IRequestOptions){}

加载的需要的地三方资源
requireLib(url:string,success:()=>void,fail?:()=>void):void {}

#### 计时器类的
timeOnce(delay: number, caller: any, method: Function, ...args) {
        var handler = Handler.create(caller, method, args);
    return setTimeout(() => { handler.run();}, delay);
}
clearTimeOnce(timer: any) { clearTimeout(timer);}
```
#### 数据存储类
```
/** 本地数据处理 */
setItem(key:string,value:string):void {return null}
getItem(key:string):any {return null}
```
#### 获取平台设备信息
```
getSystemInfoAsync():mgsdk.iSystemInfo {return null}
```

## IMChat 跨产品IM 通信
```
1. 产品可以各自穿件通信频道
2. 跨产品通信
```