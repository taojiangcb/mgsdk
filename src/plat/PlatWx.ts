
import { PlatBase } from "./PlatBase";
import { log } from "../Log";

export class PlatWx extends PlatBase{
    
    private mLoginResult:wx.LoginResponse;
    private mCodeTimer;
    private mUserInfo: wx.UserInfoResponse;
    private mBtn: wx.UserButton;

    constructor() { super(); }

    /** wx平台初始化  */
    internalInit():void {
        super.internalInit();
    }

    login(opts:iLoginResponseOpts) {
        super.login(opts);
        this.wxLogin();
    }
    
    getLaunchOptionsSync():mgsdk.iLaunchData {
        return wx.getLaunchOptionsSync();
    }

    /** 微信登录 */
    private wxLogin() {
        wx.login({
            success: (res) => {
                this.mLoginResult = res;
                log.log("wx登录成功：", res);
                //这个逻辑是防止用户停留再授权按钮阶段超过时限，导致code过期
                this.mCodeTimer = mgsdk.native.timeOnce(5 * 60000, this, this.wxLogin);
                if (this.mLoginOpts.getUser) this.showLoginBtn();
                else {
                    this.callLogin();
                }
            }, fail: (error) => {
                log.error("wx登录失败:", error);
                mgsdk.native.timeOnce(1000, this, this.wxLogin);
            }
        })
    }

    private mIsFail: boolean = false;
    private showLoginBtn() {
        if (this.mBtn) return;
        var _self = this;
        log.log("显示登录按钮");
        if (wx.getUserInfo && !this.mIsFail) {
            wx.getUserInfo({
                withCredentials: true,
                lang: "zh_CN",
                success: (res) => {
                    log.log(`用户数据获取成功:${JSON.stringify(res.userInfo)}`);
                    _self._userGetHandler(res);
                }
                , fail: (res) => {
                    log.error("获取用户信息失败", res);
                    this.mIsFail = true;
                    this.showLoginBtn();
                }
            });
            return;
        }
        if (wx.createUserInfoButton) {
            var systemInfo: wx.SystemInfo = wx.getSystemInfoSync();
            var btnSkin = {
                width: 332,
                height: 127,
                x: 0,
                y: 0,
                skin: mgsdk.define.cdnUrl + "promotion\/wxLogin.png",
            }
            btnSkin.x = (systemInfo.windowWidth * 2 - btnSkin.width) / 2;
            btnSkin.y = (systemInfo.windowHeight * 2 - btnSkin.height) / 3 * 2;
            if (this.mLoginOpts.btnStyle) {
                for (var key in this.mLoginOpts.btnStyle) {
                    btnSkin[key] = this.mLoginOpts.btnStyle[key];
                }
            }

            if (btnSkin.skin.indexOf("http") == -1) {
                var img = wx.createImage();
                img.src = btnSkin.skin;
                btnSkin.skin = img.src;
            }
            log.log(btnSkin)
            this.mBtn = wx.createUserInfoButton({
                type: 'image',
                image: btnSkin.skin,
                style: {
                    left: btnSkin.x / 2,
                    top: btnSkin.y / 2,
                    width: btnSkin.width / 2,
                    height: btnSkin.height / 2,
                }
            })
            this.mBtn.show();
            this.mBtn.onTap(this._userGetHandler.bind(this));
        }
    }

    private _userGetHandler(userInfo: wx.UserInfoResponse) {
        log.log("用户授权数据:", userInfo)
        if (this.mBtn) {
            this.mBtn.destroy();
            this.mBtn = null;
        }
        if (!userInfo.userInfo) {
            this.showLoginBtn();
            return;
        }
        this.mUserInfo = userInfo;
        this.callLogin();
    }

    private callLogin() {
        if (this.mCodeTimer) {
            mgsdk.native.clearTimeOnce(this.mCodeTimer);
            this.mCodeTimer = null;
        }
        var nickName = "";
        var avatar = "";
        if (this.mUserInfo) {
            var content = { iv: this.mUserInfo.iv, encryptData: this.mUserInfo.encryptedData };
            nickName = this.mUserInfo.userInfo.nickName;
            avatar = this.mUserInfo.userInfo.avatarUrl;
        }
        
        let launchData = this.getLaunchOptionsSync();
        this.platLogin({ code: this.mLoginResult.code, naickName: nickName, avatar: avatar,content: content},launchData);
    }
}