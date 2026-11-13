!function () {
    "use strict";
    class e {
        constructor() { }
        static on(t, i, s, a = null) {
            e._dspt.on(t, i, s, a);
        }
        static once(t, i, s, a) {
            e._dspt.once(t, i, s, a);
        }
        static off(t, i, s, a = !1) {
            e._dspt.off(t, i, s, a);
        }
        static event(t, i) {
            e._dspt.event(t, i);
        }
        static hasListener(t) {
            return e._dspt.hasListener(t);
        }
        static offAll(t) {
            e._dspt.offAll(t);
        }
        static offAllCaller(t) {
            e._dspt.offAllCaller(t);
        }
    }
    e._dspt = new Laya.EventDispatcher();
    class t { }
    t.GOLD = "Run-Rich-3D-gold", t.ISSOUND = "Run-Rich-3D-issound", t.ISMUSIC = "Run-Rich-3D-ismusic", t.ISVIBRATE = "Run-Rich-3D-isvibrate",
        t.LEVELINDEX = "Run-Rich-3D-levelindex", t.REALLYLEVELINDEX = "Run-Rich-3D-reallylevelindex", t.ISWHITE = "Run-Rich-3D-iswhite",
        t.SKININDEX = "Run-Rich-3D-skinindex", t.UNLOCKSKINLIST = "Run-Rich-3D-unlockskinlist", t.ISLOW = "Run-Rich-3D-islow";
    class i {
        static get isMini() {
            return false;
        }
        static get $objcet() {
            return null != this._objcet ? this._objcet : null;
        }
        static get gold() {
            return this._gold || (this._gold = Number(Laya.LocalStorage.getItem(t.GOLD))), this._gold;
        }
        static set gold(e) {
            this._gold = e, Laya.LocalStorage.setItem(t.GOLD, this._gold.toString());
        }
        static get skinUrl() {
            return this._skinUrl + this._skinList[this.skinIndex];
        }
        static get skinIndex() {
            return Laya.LocalStorage.getItem(t.SKININDEX) ? Number(Laya.LocalStorage.getItem(t.SKININDEX)) : (Laya.LocalStorage.setItem(t.SKININDEX, "0"),
                0);
        }
        static set skinIndex(e) {
            Laya.LocalStorage.setItem(t.SKININDEX, e.toString());
        }
        static get unlockSkinList() {
            if (Laya.LocalStorage.getItem(t.UNLOCKSKINLIST)) return JSON.parse(Laya.LocalStorage.getItem(t.UNLOCKSKINLIST));
            {
                let e = [0];
                return Laya.LocalStorage.setItem(t.UNLOCKSKINLIST, JSON.stringify(e)), e;
            }
        }
        static set unlockSkinList(e) {
            Laya.LocalStorage.setItem(t.UNLOCKSKINLIST, JSON.stringify(e));
        }
        static isUnlock(e) {
            for (let t = 0; t < this.unlockSkinList.length; t++) if (e == this.unlockSkinList[t]) return !0;
            return !1;
        }
        static get ranUnLosckSkinIndex() {
            if (this.unlockSkinList.length == this.skinNum) return -1;
            let e;
            do {
                e = Math.floor(Math.random() * this.skinNum);
            } while (this.isUnlock(e));
            return e;
        }
        static get levelIndex() {
            return -1 == this._levelIndex ? (this._levelIndex = Number(Laya.LocalStorage.getItem(t.LEVELINDEX)),
                0 == this._levelIndex ? (this._levelIndex = 1, Laya.LocalStorage.setItem(t.LEVELINDEX, this._levelIndex.toString()),
                    this._levelIndex) : this._levelIndex) : this._levelIndex;
        }
        static set levelIndex(e) {
            this._levelIndex = e, Laya.LocalStorage.setItem(t.LEVELINDEX, this._levelIndex.toString());
        }
        static get reallyLevelIndex() {
            if (i.levelIndex <= i.maxLevel) return i.levelIndex;
            if (this._reallyLevelIndexList && this._reallyLevelIndexList.length > 0) {
                for (let e = 0; e < this._reallyLevelIndexList.length; e++) {
                    let t = this._reallyLevelIndexList[e];
                    if (t.level == i.levelIndex) return t.reallyLevel;
                }
                let e = Math.ceil(Math.random() * i.maxLevel), s = {
                    level: i.levelIndex,
                    reallyLevel: e
                };
                this._reallyLevelIndexList.push(s);
                let a = JSON.stringify(this._reallyLevelIndexList);
                return Laya.LocalStorage.setItem(t.REALLYLEVELINDEX, a), e;
            }
            {
                let e = Laya.LocalStorage.getItem(t.REALLYLEVELINDEX);
                if (e) {
                    let s = JSON.parse(e);
                    this._reallyLevelIndexList = s;
                    for (let e = 0; e < this._reallyLevelIndexList.length; e++) {
                        let t = this._reallyLevelIndexList[e];
                        if (t.level == i.levelIndex) return t.reallyLevel;
                    }
                    let a = Math.ceil(Math.random() * i.maxLevel), n = {
                        level: i.levelIndex,
                        reallyLevel: a
                    };
                    this._reallyLevelIndexList.push(n);
                    let o = JSON.stringify(this._reallyLevelIndexList);
                    return Laya.LocalStorage.setItem(t.REALLYLEVELINDEX, o), a;
                }
                {
                    this._reallyLevelIndexList = new Array();
                    let e = Math.ceil(Math.random() * i.maxLevel), s = {
                        level: i.levelIndex,
                        reallyLevel: e
                    };
                    this._reallyLevelIndexList.push(s);
                    let a = JSON.stringify(this._reallyLevelIndexList);
                    return Laya.LocalStorage.setItem(t.REALLYLEVELINDEX, a), e;
                }
            }
        }
        static get isLow() {
            if (-1 == this._isLow) {
                let e = Laya.LocalStorage.getItem(t.ISLOW);
                return e ? (this._isLow = Number(e), !!this._isLow) : (this.isLow = !1, !1);
            }
            return !!this._isLow;
        }
        static set isLow(e) {
            this._isLow = e ? 1 : 0, Laya.LocalStorage.setItem(t.ISLOW, this._isLow.toString());
        }
        static get SignNum() {
            return this.signNum = Laya.LocalStorage.getItem("signNum") ? Number(Laya.LocalStorage.getItem("signNum")) : 0,
                this.signNum;
        }
        static set SignNum(e) {
            this.signNum = e, this.signNum > 7 && (this.signNum = 0), Laya.LocalStorage.setItem("signNum", this.signNum.toString());
        }
        static get SignDate() {
            return this.signDate = Laya.LocalStorage.getItem("signDate") ? Number(Laya.LocalStorage.getItem("signDate")) : 0,
                this.signDate;
        }
        static set SignDate(e) {
            this.signDate = e, Laya.LocalStorage.setItem("signDate", this.signDate.toString());
        }
        static get getGold() {
            return this._getGold < 0 && (this.getGold = 0), this._getGold;
        }
        static set getGold(e) {
            this._getGold = e;
        }
        static shareList() {
            return [];
        }
        static get showLog() {
            return !!this.isDebug && this._showLog;
        }
        static get startNum() {
            return this._startNum || (this._startNum = Number(Laya.LocalStorage.getItem("startNum"))),
                this._startNum;
        }
        static set startNum(e) {
            this._startNum = e, Laya.LocalStorage.setItem("startNum", this._startNum.toString());
        }
        static get lowNum() {
            return this._lowNum || (this._lowNum = Number(Laya.LocalStorage.getItem("lowNum"))),
                this._lowNum;
        }
        static set lowNum(e) {
            this._lowNum = e, Laya.LocalStorage.setItem("lowNum", this._lowNum.toString());
        }
        static get addNum() {
            return this._addNum || (this._addNum = Number(Laya.LocalStorage.getItem("addNum"))),
                this._addNum;
        }
        static set addNum(e) {
            this._addNum = e, Laya.LocalStorage.setItem("addNum", this._addNum.toString());
        }
    }
    i.stage_width = 750, i.stage_height = 1334, i.ore_height = 1334, i.ore_width = 750,
        i.statusBarHeight = 0, i.currentTime = 0, i.scene = 0, i._isMini = -1, i._objcet = null,
        i._gold = 0, i.isloadingScene = !1, i.noAdBanner = !1, i.isLoadingVideo = !1, i.openId = "",
        i.login_city = "", i.isGameStart = !1, i.goldEggValue = .6, i.startTime = -1, i._skinUrl = "",
        i._skinList = [], i.trySkinTimes = 0, i.trySkinIndex = -1, i._levelIndex = -1, i._isLow = -1,
        i.isLoadFinish = !1, i.signList = [{
            date: 1,
            type: 0,
            num: 50
        }, {
            date: 2,
            type: 0,
            num: 50
        }, {
            date: 3,
            type: 0,
            num: 50
        }, {
            date: 4,
            type: 0,
            num: 50
        }, {
            date: 5,
            type: 0,
            num: 50
        }, {
            date: 6,
            type: 0,
            num: 50
        }, {
            date: 7,
            type: 0,
            num: 300
        }], i._getGold = 0, i.watchADGold = 200, i.surl = "", i.version = "1.0.0", i.appName = "",
        i.AppId = "", i.isDebug = !1, i._showLog = !0, i.subpackageName = ["subpackage"],
        i.maxLevel = 12, i.skinNum = 6, i.luckBoxTime = 0, i.playerSc = .12, i.isLoadLevel = !1,
        i.colorType = 0, i.isLoadingScene = !0, i.moreS = 1, i._startNum = 0, i._lowNum = 0,
        i._addNum = 0, i.linStartGold = -1, i.isSlow = 1;
    class s { }
    s.wxId = "1201140";
    class a { }
    a.GOLDCHANGE = "goldchange", a.SOUNDCHANGE = "soundchange", a.MUSICCHANGE = "musicchange",
        a.VIBRATECHANGE = "vibartechange", a.SHOWLEFTSIDE = "showleftside", a.SKINCHANGE = "skinchange",
        a.STAGERESIZE = "stageresize", a.USERJUMP = "userjump", a.GETAPP = "getApp", a.ONSHOWNAME = "onshowname",
        a.ONHIDENAME = "onhidename", a.TOUCHBANNER = "touchbanner", a.ONSHOW = "onshow",
        a.ONHIDE = "onhide", a.NPCREADY = "npcready", a.JIUGONGCLOSE = "jiugongclose", a.USERCANCEL = "usercancel",
        a.SKINJUMP = "skinjump", a.LOADFINISH = "loadfinish", a.ISLOW = "islow", a.GAMEREADY = "readygame",
        a.GAMESTART = "gamestart", a.GAMEOVER = "gameover", a.RESETGAME = "resetgame", a.GAMELOSE = "gamelose",
        a.GAMEWIN = "gamewin", a.ADDCHANGE = "addchange", a.LOWCHANGE = "lowchange", a.STARTCHANGE = "startchange",
        a.LINSTARTCHANGE = "linstartchange", a.NATIVELOADFINISH = "nativeloadfinish";
    class n { }
    n.Load_start = "Load_start", n.load_finish = "load_finish", n.enter_main = "enter_main",
        n.Click_startGame = "Click_startGame", n.Enter_white = "Enter_whrite", n.Enter_black = "Enter_black",
        n.Enter_linwhite = "Enter_linwrite", n.Start_video = "Start_video", n.Start_click = "Start_click",
        n.Game_pass = "Game_pass", n.Game_fail = "Game_fail", n.Video_show = "Video_show",
        n.Video_finish = "Video_finish", n.Click_show = "Click_show", n.Click_click = "Click_click",
        n.Show_gongge = "Show_gongge", n.Jump_gongge = "Jump_gongge", n.Show_juhe1 = "Show_juhe1",
        n.Jump_juhe1 = "Jump_juhe1", n.Show_juhe2 = "Show_juhe2", n.Jump_juhe2 = "Jump_juhe2",
        n.show_relive = "show_relive", n.show_jiesuan = "show_jiesuan", n.Jump_jiesuan = "Jump_jiesuan";
    class o {
        static get instacne() {
            return o._instance ? o._instance : o._instance = new o();
        }
        httpRequest(e, t, s, a = "") {
            var n = new Laya.HttpRequest();
            n.http.timeout = 5e3, n.once(Laya.Event.COMPLETE, t, s), n.send(i.surl + e, a, "post", "text");
        }
        getAddress() {
            // var e = new Laya.HttpRequest();
            // e.http.timeout = 5e3, e.once(Laya.Event.COMPLETE, this, e => {
            //     if (null == i.login_city || "" == i.login_city) {
            //         let t = e.toString().split("=");
            //         if (null != t[1] && "" != t[1]) {
            //             let e = t[1].substring(1, t[1].length - 1), s = JSON.parse(e);
            //             i.login_city = s.cname;
            //         }
            //     }
            // }), e.send("https://pv.sohu.com/cityjson?ie=utf-8", "", "post", "text");
        }
    }
    class r { }
    r.LoadingScene = "scene/LoadingScene.scene", r.MainScene = "scene/MainScene.scene",
        r.SelectSkinScene = "scene/SelectSkinScene.scene", r.WinScene = "scene/WinScene.scene",
        r.LoseScene = "scene/LoseScene.scene", r.LoseTwiceScene = "scene/LoseTwiceScene.scene",
        r.SkinTryScene = "scene/SkinTryScene.scene", r.LuckBoxScene = "scene/LuckBoxScene.scene",
        r.TipsScene = "tips/TipsScene.scene", r.MoveTipsScene = "tips/MoveTipsScene.scene",
        r.SideMoreGameScene = "side/MoreGameScene.scene", r.SideTwoScene = "side/SideTwoScene.scene",
        r.SideBannerScene = "side/SideBotListScene.scene", r.SideDoubleScene = "side/SideDoubleListScene.scene",
        r.SideLeftListScene = "side/SideLeftListScene.scene", r.SideGridScene = "side/SideGridScene.scene",
        r.SideJiugongScene = "side/SideJiugongScene.scene", r.SideGoldenEggScene = "side/GoldenEggScene.scene",
        r.SideNativeScene = "side/SideNativeScene.scene", r.SideMoreNativeScene = "side/SideMoreNativeScene.scene",
        r.ShareScene = "scene/ShareScene.scene", r.SignScene = "scene/SignScene.scene",
        r.TurntableScene = "scene/TurntableScene.scene", r.BoxScene = "scene/BoxScene.scene",
        r.SettingScene = "scene/SettingScene.scene", r.SideNativeBannerScene = "side/SideNativeBannerScene.scene",
        r.SlowScene = "tips/SlowScene.scene";
    class l {
        constructor() {
            this._dicView = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new l();
        }
        openJuhe(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && (this._dicView[r.SideMoreGameScene] ? console.log(r.SideMoreGameScene + "頁面已經存在") : (this._dicView[r.SideMoreGameScene] = !0,
                Laya.Scene.open(r.SideMoreGameScene, !1, e)));
        }
        closeJuhe() {
            Laya.Scene.close(r.SideMoreGameScene), this._dicView[r.SideMoreGameScene] = !1;
        }
        openLiangPaiJuhe(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && (this._dicView[r.SideTwoScene] ? console.log(r.SideTwoScene + "頁面已經存在") : (this._dicView[r.SideTwoScene] = !0,
                Laya.Scene.open(r.SideTwoScene, !1, e)));
        }
        closeLiangPaiJuhe() {
            Laya.Scene.close(r.SideTwoScene), this._dicView[r.SideTwoScene] = !1;
        }
        openBanner(e = null) { }
        closeBanner(e = null) {
            Laya.Scene.close(r.SideBannerScene), this._dicView[r.SideBannerScene] = !1;
        }
        openDuilian(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && g.islinshiWhite && (this._dicView[r.SideDoubleScene] ? console.log(r.SideDoubleScene + "頁面已經存在") : (this._dicView[r.SideDoubleScene] = !0,
                Laya.Scene.open(r.SideDoubleScene, !1, e)));
        }
        closeDuilian() {
            Laya.Scene.close(r.SideDoubleScene), this._dicView[r.SideDoubleScene] = !1;
        }
        openLeft(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && g.islinshiWhite && (this._dicView[r.SideLeftListScene] ? console.log(r.SideLeftListScene + "頁面已經存在") : (this._dicView[r.SideLeftListScene] = !0,
                Laya.Scene.open(r.SideLeftListScene, !1, e)));
        }
        closeLeft() {
            Laya.Scene.close(r.SideLeftListScene), this._dicView[r.SideLeftListScene] = !1;
        }
        openLiugong(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && (this._dicView[r.SideGridScene] ? console.log(r.SideGridScene + "頁面已經存在") : (this._dicView[r.SideGridScene] = !0,
                Laya.Scene.open(r.SideGridScene, !1, e)));
        }
        closeLiugong() {
            Laya.Scene.close(r.SideGridScene), this._dicView[r.SideGridScene] = !1;
        }
        openJiugong(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && (this._dicView[r.SideJiugongScene] ? console.log(r.SideJiugongScene + "頁面已經存在") : (this._dicView[r.SideJiugongScene] = !0,
                Laya.Scene.open(r.SideJiugongScene, !1, e)));
        }
        closeJiugong() {
            Laya.Scene.close(r.SideJiugongScene), this._dicView[r.SideJiugongScene] = !1;
        }
        openGoldenEgg(e = null) {
            Laya.Browser.onMiniGame && g.isShowHu && (this._dicView[r.SideGoldenEggScene] ? console.log(r.SideGoldenEggScene + "頁面已經存在") : (this._dicView[r.SideGoldenEggScene] = !0,
                Laya.Scene.open(r.SideGoldenEggScene, !1, e)));
        }
        closeGoldenEgg() {
            Laya.Scene.close(r.SideGoldenEggScene), this._dicView[r.SideGoldenEggScene] = !1;
        }
        openNativeAdScene(e = null) {
            (Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame) && (this._dicView[r.SideNativeScene] ? console.log(r.SideNativeScene + "頁面已經存在") : (this._dicView[r.SideNativeScene] = !0,
                Laya.Scene.open(r.SideNativeScene, !1, e)));
        }
        closeNativeAdSence() {
            Laya.Scene.close(r.SideNativeScene), this._dicView[r.SideNativeScene] = !1;
        }
        openMoreNativeAdScene(e = null) {
            Laya.Browser.onVVMiniGame && (this._dicView[r.SideMoreNativeScene] ? console.log(r.SideMoreNativeScene + "頁面已經存在") : (this._dicView[r.SideMoreNativeScene] = !0,
                Laya.Scene.open(r.SideMoreNativeScene, !1, e)));
        }
        closeMoreNativeAdSence() {
            Laya.Scene.close(r.SideMoreNativeScene), this._dicView[r.SideMoreNativeScene] = !1;
        }
        openShare(e = null) {
            Laya.Browser.onTTMiniGame && (this._dicView[r.ShareScene] ? console.log(r.ShareScene + "頁面已經存在") : (this._dicView[r.ShareScene] = !0,
                Laya.Scene.open(r.ShareScene, !1, e)));
        }
        closeShare() {
            Laya.Scene.close(r.ShareScene), this._dicView[r.ShareScene] = !1;
        }
        openNativeBannerScene(e = null) {
            (Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame) && (this._dicView[r.SideNativeBannerScene] ? console.log(r.SideNativeBannerScene + "頁面已經存在") : (this._dicView[r.SideNativeBannerScene] = !0,
                Laya.Scene.open(r.SideNativeBannerScene, !1, e)));
        }
        closeNativeBannerScene() {
            Laya.Scene.close(r.SideNativeBannerScene), this._dicView[r.SideNativeBannerScene] = !1;
        }
    }
    class h {
        constructor() {
            this.msgNum = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new h();
        }
        openTips(e) {
            this.msgNum++, this.msgNum > 2 && (Laya.Scene.close(r.TipsScene), this.msgNum = 0),
                Laya.Scene.open(r.TipsScene, !1, e);
        }
        openMoveTips(e = 3e3) {
            Laya.Scene.open(r.MoveTipsScene, !1, e);
        }
    }
    class c {
        constructor() {
            this.canShow = !1, this.isShow = !1, this.showBannerTimes = 0, this.bannerID = "339580",
                this.videoID = "339584", this.nativeID = "339583", this.portalID = "339585", this.loadTimes = 0,
                this.startLevel = 1, this.spaceLevel = 1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new c();
        }
        initData() {
            Laya.Browser.onQGMiniGame && (Laya.timer.once(g.delay_time, this, () => {
                this.canShow = !0;
            }), this.bannerAd || this.createBannerAd(), this.videoAd || this.createVideo(),
                this.nativeAd || this.removeNativeAd(), Laya.timer.once(g.delay_time, this, () => {
                    console.log("开始展示广告"), this.isShow = !0, i.isGameStart && (g.isNative ? (i.levelIndex - 1 - c.instance.startLevel) % (c.instance.spaceLevel + 1) == 0 && l.instance.openNativeBannerScene() : (i.levelIndex - 1 - c.instance.startLevel) % (c.instance.spaceLevel + 1) == 0 && this.showBanner());
                }));
        }
        hideBanner() {
            Laya.Browser.onQGMiniGame && this.bannerAd && this.bannerAd.hide();
        }
        showBanner() {
            if (Laya.Browser.onQGMiniGame && this.bannerAd) {
                if (!this.canShow) return;
                this.bannerAd.show(), console.log("----------1---------");
            }
        }
        destroyBanner() {
            Laya.Browser.onQGMiniGame && this.bannerAd && this.bannerAd.destroy();
        }
        createNativeAd() {
            let t = this;
            t.nativeAd = i.$objcet.createNativeAd({
                adUnitId: t.nativeID
            }), t.nativeAd.load(), t.nativeAd.onLoad(i => {
                t.loadTimes = 0, i.adList && i.adList.length > 0 && (t._nativeAdData = i.adList[0],
                    e.event(a.NATIVELOADFINISH), console.log("通知发出去"));
            }), t.nativeAd.onError(e => {
                console.log("加载原生报错，次数：" + t.loadTimes), console.log(e), t.loadTimes++, t.loadTimes < 2 && t.nativeAd.load();
            });
        }
        nativeAdreportAdShow() {
            if (!Laya.Browser.onQGMiniGame) return;
            let e = this;
            e._nativeAdData && e.nativeAd && e.nativeAd.reportAdShow({
                adId: e._nativeAdData.adId
            });
        }
        removeNativeAd() {
            if (!Laya.Browser.onQGMiniGame) return;
            let e = this;
            e.nativeAd && e._nativeAdData ? (e.nativeAd.offLoad(), e.nativeAd.offError(), e.nativeAd.destroy(),
                e.nativeAd = null, e.createNativeAd()) : e.createNativeAd();
        }
        get nativeAdData() {
            if (this.isShow) return this._nativeAdData ? JSON.parse(JSON.stringify(this._nativeAdData)) : null;
        }
        nativeAdreportAdClick() {
            if (!Laya.Browser.onQGMiniGame) return;
            let e = this;
            e.nativeAdData && e.nativeAd && (console.log("-----------上报"), e.nativeAd.reportAdClick({
                adId: e.nativeAdData.adId
            }));
        }
        createBannerAd() {
            this.bannerAd = i.$objcet.createBannerAd({
                adUnitId: this.bannerID,
                style: {
                    left: 0,
                    top: 0,
                    width: 800,
                    height: 300
                }
            }), this.bannerAd.onError(function (e) {
                console.log(e);
            }), this.bannerAd.onLoad(function () {
                console.log("banner 广告加载成功");
            }), this.bannerAd.onError(e => {
                console.log(e), 1004 == e.errCode && (i.noAdBanner = !0);
            });
        }
        createVideo() {

        }
        showVideo(e, t, i = null) {

        }
        createGamePortalAd() {
            if (Laya.Browser.onQGMiniGame) {
                this.gamePortal = i.$objcet.createGamePortalAd({
                    adUnitId: this.portalID
                }), this.gamePortal.onClose(this.destoryGamePortal), this.showGamePortal();
            }
        }
        showGamePortal() {
            this.gamePortal && this.gamePortal.show();
        }
        destoryGamePortal() {
            this.gamePortal.destroy().then(function () {
                console.log("destroy success");
            }).catch(function (e) {
                console.log("destroy fail with:" + e.errCode + "," + e.errMsg);
            });
        }
        addToDesk() {
            Laya.Browser.onQGMiniGame && i.$objcet.hasShortcutInstalled({
                success: function (e) {
                    0 == e && i.$objcet.installShortcut({
                        success: function () { },
                        fail: function (e) { },
                        complete: function () { }
                    });
                },
                fail: function (e) { },
                complete: function () { }
            });
        }
    }
    class d {
        constructor() {
            this.nowVersion = "1.0.0", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new d();
        }
        init() {
            Laya.Browser.onQGMiniGame && (this.qg = Laya.Browser.window.qg, this.qg.tmSDK.init({
                hideRequestLog: !1,
                appVersion: i.version
            }));
        }
        login(e, t) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.login().then(s => {
                console.log(s), i.openId = s.open_id, i.login_city = s.login_city, null != i.login_city && "" != i.login_city || o.instacne.getAddress(),
                    e && t && t.apply(e);
            });
        }
        checkFlowIsOpen(e, t, i) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.checkFlowIsOpen({
                positionId: e
            }).then(({ isOpen: e }) => {
                i.apply(t, [e]), console.log("该广告位是否开启:", e);
            });
        }
        getFlowConfig(e, t, i, s = !0) {
            let a = this;
            if (Laya.Browser.onQGMiniGame) if (a.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            } else a.qg.tmSDK.getFlowConfig({
                positionId: e
            }).then(n => {
                if (a.flowConfig[e] = n, i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            });
        }
        flowNavigate(t, i, s = "") {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.flowNavigate({
                positionId: t,
                creativeId: i
            }).then(i => {
                if (this.flowConfig[t] = i, "navigateToMiniProgram:fail cancel" == i.navigateMessage.errMsg) e.event(a.USERCANCEL); else if ("navigateToMiniProgram:ok" == i.navigateMessage.errMsg) switch (e.event(a.USERJUMP),
                    s) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            d.instance.sendEvent(n.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            d.instance.sendEvent(n.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            d.instance.sendEvent(n.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            d.instance.sendEvent(n.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onQGMiniGame && this.qg.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                if (null != t) {
                    g.probability = t.probability, g.reSetWhite(t.posList), g.OpenClick = t.OpenClick,
                        g.ishutui = t.ishutui, g.OpenVideo = t.OpenVideo, g.blackIPCityArr = t.blackIPCityArr,
                        g.useSetWhite = t.useSetWhite, g.without_sceneList = t.without_sceneList, g.openJiugong = t.openJiugong,
                        g.isNative = t.isNative, g.delay_time = 1e3 * t.delay_time, c.instance.spaceLevel = t.spaceLevel,
                        c.instance.startLevel = t.startLevel, g.isJump = t.isJump, g.RandomClick = t.RandomClick;
                    let e = t.crazy_click_config;
                    null != e && (g.space_level = e.space_level, g.start_level = e.start_level, g.switchVer = e.switchVer),
                        c.instance.initData();
                } else console.log("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    class g {
        static get OpenClick() {
            return this.islinshiWhite && this._OpenClick;
        }
        static set OpenClick(e) {
            this._OpenClick = e;
        }
        static get OpenVideo() {
            return this.islinshiWhite && this._OpenVideo;
        }
        static set OpenVideo(e) {
            this._OpenVideo = e;
        }
        static get isShowHu() {
            return -1 == this._ishutui ? (this.isPos ? this.islinshiWhite || (this.ishutui ? this._ishutui = 1 : this._ishutui = 0) : this._ishutui = 0,
                !!this._ishutui) : !!this._ishutui;
        }
        static set delay_time(e) {
            NaN != e && e >= 3e3 && (console.log(e), this.$delay_time = e);
        }
        static get delay_time() {
            return this.$delay_time;
        }
        static reSetWhite(e) {
            if (this.theposList = e, -1 != this.pos && null != this.pos && null != this.pos && e && e.length > 0) for (let i = 0; i < e.length; i++) this.pos == e[i] && (this._isWhite = 0,
                Laya.LocalStorage.setItem(t.ISWHITE, "false"), this.isPos = !1);
        }
        static get isWhite() {
            if (-1 != this._isWhite) return !!this._isWhite;
            {
                let e = Laya.LocalStorage.getItem(t.ISWHITE);
                if ("true" == e) return this._isWhite = 1, !!this._isWhite;
                if ("false" == e) return this._isWhite = 0, !!this._isWhite;
                if (!e) return this._isWhite = 0, Laya.LocalStorage.setItem(t.ISWHITE, "false"),
                    !!this._isWhite;
            }
        }
        static set isWhite(e) {
            if (null == Laya.LocalStorage.getItem(t.ISWHITE) || "" == Laya.LocalStorage.getItem(t.ISWHITE)) if (e) {
                this._isWhite = 1, Laya.LocalStorage.setItem(t.ISWHITE, "true");
                Laya.LocalStorage.getItem(t.ISWHITE);
            } else this._isWhite = 0, Laya.LocalStorage.setItem(t.ISWHITE, "false");
        }
        static get islinshiWhite() {
            if (this.isWhite) return !0;
            if (-1 == this._isLinshiWhiteList) {
                if (this.useSetWhite) {
                    let e = !0, t = !0;
                    if (this.without_sceneList) for (let t = 0; t < this.without_sceneList.length; t++) {
                        let s = this.without_sceneList[t];
                        i.scene == s && (console.log("---------场景值是黑名单1-----------"), e = !1);
                    }
                    if (this.blackIPCityArr) for (let e = 0; e < this.blackIPCityArr.length; e++) {
                        let s = this.blackIPCityArr[e];
                        console.log(s), -1 != i.login_city.indexOf(s) && (console.log("---------场景值是黑名单2-----------"),
                            t = !1);
                    }
                    return e && t ? (S.instance.sendEvent(n.Enter_linwhite), d.instance.sendEvent(n.Enter_linwhite),
                        this._isLinshiWhiteList = 1, !!this._isLinshiWhiteList) : (this._isLinshiWhiteList = 0,
                            !!this._isLinshiWhiteList);
                }
                return this._isLinshiWhiteList = 0, !!this._isLinshiWhiteList;
            }
            return !!this._isLinshiWhiteList;
        }
        static get checkWuchu() {
            if ((Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame) && this.useSetWhite && this.blackIPCityArr) {
                let e = !0;
                for (let t = 0; t < this.blackIPCityArr.length; t++) {
                    let s = this.blackIPCityArr[t];
                    if (-1 != i.login_city.indexOf(s)) {
                        e = !1;
                        break;
                    }
                }
                if (!e) return !1;
                if (Math.random() <= this.probability) return this.wuchuTimes >= 1 ? (this.wuchuTimes = 0,
                    !1) : (this.wuchuTimes++, !0);
            }
            return !1;
        }
    }
    g.switchVer = !1, g.start_level = 1, g.space_level = 1, g.useSetWhite = !1, g.without_sceneList = new Array(),
        g.blackIPCityArr = new Array(), g._OpenClick = !1, g._OpenVideo = !1, g.crazy_click_config_version = 16,
        g.pos = -1, g.ishutui = !1, g._ishutui = -1, g.everyclick = !1, g.$delay_time = 3e4,
        g.isNative = !1, g.isPos = !0, g.openJiugong = !1, g.isShowWuchu = !1, g._isWhite = -1,
        g.isJump = !1, g.RandomClick = !1, g._isLinshiWhiteList = -1, g.probability = 0,
        g.wuchuTimes = 0;
    class u {
        static log(e, ...t) {
            i.showLog && console.log(e, ...t);
        }
        static info(e, ...t) {
            i.showLog && console.info(e, ...t);
        }
        static error(e, ...t) {
            i.showLog && console.error(e, ...t);
        }
        static warn(e, ...t) {
            i.showLog && console.warn(e, ...t);
        }
    }
    class m {
        constructor() {
            this.seed = 5, this.nodeDic = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new m();
        }
        shortText(e) {
            return e && e.length > 5 ? e.slice(0, 5) + "..." : e;
        }
        formatToUnitEN(e) {
            return ("" + (e = Math.round(e))).length > 15 ? (e / 1e15).toFixed(2) + "MB" : ("" + e).length > 12 ? (e / 1e12).toFixed(2) + "KB" : ("" + e).length > 9 ? (e / 1e9).toFixed(2) + "B" : ("" + e).length > 6 ? (e / 1e6).toFixed(2) + "M" : ("" + e).length > 3 ? (e / 1e3).toFixed(2) + "K" : "" + e.toFixed(0);
        }
        shuffle(e) {
            let t, i, s = e.length;
            for (; --s;) i = Math.floor(Math.random() * s), t = e[s], e[s] = e[i], e[i] = t;
        }
        getRad(e, t) {
            let i = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
            return t < 0 ? Math.acos(e / i) : 2 * Math.PI - Math.acos(e / i);
        }
        getTot(e, t, i = !1) {
            let s = m.instance.getRad(e, t), a = 180 / Math.PI * s - 90 * (i ? -1 : 1);
            return isNaN(a) && (console.log("转角为NaN"), a = 0), a;
        }
        seedRandom() {
            return this.seed = (9301 * this.seed + 49297) % 233280, this.seed / 233280;
        }
        clearTrail(e, t = !1) {
            if (e && e instanceof Laya.TrailSprite3D) {
                e.active = !0;
                let i = e.trailFilter.time;
                e.trailFilter.time = 0, Laya.timer.frameOnce(1, this, () => {
                    e.trailFilter.time = i, e.active = t;
                });
            }
        }
        getChildNodesArray(e) {
            let t = [];
            for (let i = 0; i < e.numChildren; i++) {
                let s = e.getChildAt(i);
                s && t.push(s);
            }
            return t;
        }
        FindAndGetAllChildren(e, t) {
            if (e.numChildren > 0) {
                this.getChildNodesArray(e).forEach(e => {
                    if (t.push(e), !(this.getChildNodesArray(e).length > 0)) return t;
                    this.FindAndGetAllChildren(e, t);
                });
            }
            return null;
        }
        getAllChildrenArray(e) {
            let t = [];
            return this.FindAndGetAllChildren(e, t), t;
        }
        getAllChildrenMap(e) {
            let t = e.id, i = this.nodeDic[t];
            if (!i) {
                let s = this.getAllChildrenArray(e);
                i = new Map();
                for (let e = 0; e < s.length; e++) i.has(s[e].name) || i.set(s[e].name, s[e]);
                this.nodeDic || (this.nodeDic = new Array()), this.nodeDic[t] = i;
            }
            return i;
        }
        getNodeByMap(e, t) {
            return t.has(e) ? t.get(e) : null;
        }
        getNodeByName(e, t) {
            let i = t.id, s = this.nodeDic[i];
            if (!s) {
                let e = this.getAllChildrenArray(t);
                s = new Map();
                for (let t = 0; t < e.length; t++) s.has(e[t].name) || s.set(e[t].name, e[t]);
                this.nodeDic[i] = s;
            }
            return s.has(e) ? s.get(e) : null;
        }
        checkRepeatItem(e) {
            let t = {}, i = e.every(e => !t[e] && (t[e] = !0));
            return !i && console.log("数组有重复项!"), i;
        }
        inTheSector(e, t, i, s, a = 0) {
            if (Laya.Vector3.distance(e, t) < i) {
                a += 180, (a %= 360) < 0 && (a += 360);
                let i = t.x - e.x, n = t.z - e.z, o = Math.atan2(i, n) / (Math.PI / 180);
                return o < 0 && (o += 360), Math.abs(a - o) < s / 2;
            }
            return !1;
        }
        screenshot() {
            let e = 500 / (460 / Laya.stage.width), t = (Laya.stage.height - e) / 2;
            return Laya.stage.drawToTexture(Laya.stage.width, e, 0, t);
        }
        screenshot2() {
            let e = i.$objcet.createCanvas();
            console.log(e), e.getContext("2d");
            let t = "";
            return e.toTempFilePath({
                x: 100,
                y: 150,
                width: 513,
                height: 656,
                destWidth: 410,
                destHeight: 587,
                success: e => {
                    console.log(e.tempFilePath), t = e.tempFilePath;
                },
                fail: e => ""
            }), t;
        }
    }
    class L {
        constructor() {
            this.bannerIDList = ["adunit-9592c375550b6c78", "adunit-3246e1463b21bfe2", "adunit-0176c284bc0d7bea", "adunit-d69f7370264fbfc6", "adunit-78e6e3dce36a03e7", "adunit-9b90951fb5e235b7", "adunit-276e656973edc300", "adunit-edf01eedf0cfe42c"],
                this.videoID = "adunit-9d4d9941e71ed864", this.$whitechangeBannerTime = 4200, this.blackchangeBannerTime = 3e4,
                this.bannerList = {}, this.bannerID = "", this.winSize = Laya.Browser.onMiniGame ? i.$objcet.getSystemInfoSync() : null;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new L();
        }
        init() {
            Laya.Browser.onMiniGame && (!m.instance.checkRepeatItem(this.bannerIDList) && console.log("广告位置ID重复！"),
                this.videoAd || this.createVideo(), this.addBannerListener());
        }
        get refreshTime() {
            return this.$whitechangeBannerTime;
        }
        set refreshTime(e) {
            e && e > 2e3 && (this.$whitechangeBannerTime = e);
        }
        addBannerListener() {
            Laya.Browser.onMiniGame && i.$objcet.onHide(e => {
                e && e.mode && e.targetPagePath && (-1 !== e.targetPagePath.indexOf("weixinadinfo") && -1 !== e.targetPagePath.indexOf("gdt_vid") ? (S.instance.sendEvent(n.Click_click),
                    -1 !== e.targetPagePath.indexOf("mp.weixin.qq.com/mp/ad_biz_info") ? e.adType = "关注公众号链接" : e.adType = "电商链接") : -1 !== e.targetPagePath.indexOf("SnsAdNativeLandingPagesPreviewUI") && (S.instance.sendEvent(n.Click_click),
                        e.adType = "APP下载页"), "hide" === e.mode ? -1 !== e.targetPagePath.indexOf("SnsAdNativeLandingPagesPreviewUI") ? (S.instance.sendEvent(n.Click_click),
                            e.adType = "APP下载页") : -1 !== e.targetPagePath.indexOf("weixinadinfo") && -1 !== e.targetPagePath.indexOf("gdt_vid") ? (S.instance.sendEvent(n.Click_click),
                                -1 !== e.targetPagePath.indexOf("mp.weixin.qq.com/mp/ad_biz_info") ? e.adType = "关注公众号链接" : e.adType = "电商链接") : -1 !== e.targetPagePath.indexOf("SelectConversationUI") || -1 !== e.targetPagePath.indexOf("MMUINavigationController") || -1 !== e.targetPagePath.indexOf("mp.weixin.qq.com/mp/wapreportwxadevlog?action=get_page&appid=wx") || -1 !== e.targetPagePath.indexOf("AppBrandProfileUI") || e.targetPagePath.indexOf("NewWAProfileViewController") : "launchMiniProgram" === e.mode ? -1 !== e.targetPagePath.indexOf("weixinadinfo") && -1 !== e.targetPagePath.indexOf("gdt_vid") ? (e.adType = "微信小游戏",
                                    S.instance.sendEvent(n.Click_click)) : e.targetPagePath.indexOf("wx") : "back" === e.mode && 9 === e.targetAction && e.targetPagePath.indexOf("wx"));
            });
        }
        showBanner(e = !1, t = !0) {
            if (!Laya.Browser.onMiniGame) return;
            if (i.isGameStart && !g.islinshiWhite) return;
            let s = this;
            if (s.hideBanner(), "" != s.bannerID) {
                let e = s.bannerIDList.indexOf(s.bannerID);
                ++e == s.bannerIDList.length && (e = 0);
                let a = s.bannerIDList[e], n = s.bannerList[a];
                n ? (s.banner = n, s.bannerID = a, i.isloadingScene || (s.banner.style.top = s.winSize.windowHeight - s.banner.style.realHeight - 16,
                    s.banner.style.left = (s.winSize.windowWidth - s.banner.style.realWidth) / 2, s.banner.show(),
                    l.instance.closeBanner())) : s.loadBanner(a, t);
            } else s.loadBanner(s.bannerIDList[0], t);
            e && s.changeBannerByTime();
        }
        showLoadedBanner() {
            let e = this;
            if (e.bannerList) {
                let t = 0;
                for (let i in e.bannerList) t++;
                console.log("当前已存banner数：" + t);
                for (let t in e.bannerList) if (t && e.bannerList[t]) return e.bannerID = t, e.banner = e.bannerList[t],
                    e.banner.style.top = e.winSize.windowHeight - e.banner.style.realHeight - 16, e.banner.style.left = (e.winSize.windowWidth - e.banner.style.realWidth) / 2,
                    e.banner.show(), void l.instance.closeBanner();
                e.showBanner();
            } else console.log("banner对象池有问题"), e.showBanner();
        }
        get hasBanner() {
            let e = 0;
            for (let t in this.bannerList) e++;
            return 0 != e;
        }
        getBannerList() {
            return this.bannerList;
        }
        hideBanner() {
            if (!Laya.Browser.onMiniGame) return;
            let e = this;
            Laya.timer.clear(e, e.showBanner), e.banner && (e.banner.offLoad(), e.banner.offError(),
                e.banner.offResize(), e.banner.style.top = e.winSize.windowHeight - 1, e.banner.style.left = e.winSize.windowWidth - 1,
                e.banner = null);
        }
        loadBanner(e, t = !1) {
            if (Laya.Browser.onMiniGame) {
                var s = this;
                s.banner = i.$objcet.createBannerAd({
                    adUnitId: e,
                    style: {
                        left: 0,
                        top: s.winSize.windowHeight,
                        width: 300
                    }
                }), s.banner.onLoad(() => {
                    t ? (i.isloadingScene || (console.log("展示banner"), s.banner.style.top = s.winSize.windowHeight - s.banner.style.realHeight - 16,
                        s.banner.style.left = (s.winSize.windowWidth - s.banner.style.realWidth) / 2, s.banner.show(),
                        l.instance.closeBanner()), s.bannerID = e) : (s.banner.style.top = s.winSize.windowHeight - 1,
                            s.banner.style.left = s.winSize.windowWidth - 1, s.banner.show()), s.bannerList[e] = s.banner;
                }), s.banner.onError(e => {
                    g.islinshiWhite && l.instance.openBanner(), s.hideBanner();
                });
            }
        }
        changeBannerByTime() {
            if (!Laya.Browser.onMiniGame) return;
            let e = this;
            g.islinshiWhite ? Laya.timer.once(e.refreshTime, e, e.showBanner, [!0]) : Laya.timer.once(e.blackchangeBannerTime, e, e.showBanner, [!0]);
        }
        destroyBanner() {
            if (!Laya.Browser.onMiniGame) return;
            let e = this, t = e.banner, i = e.bannerID;
            t && (t.hide(), t.offLoad(), t.offError(), t.offResize(), t.destroy(), t = void 0),
                i && (e.bannerList[i] = void 0, e.loadBanner(i));
        }
        createVideo() {

        }
        nullFun() { }
        showVideo(e, t) {
            platform.getInstance().showReward(() => {
                t.bind(e)(true);
            })
        }
    }
    class S {
        constructor() {
            this.nowVersion = "", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new S();
        }
        init() {

        }
        login(e, t) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.login().then(s => {
                console.log(s), i.openId = s.open_id, i.login_city = s.login_city, null != i.login_city && "" != i.login_city || o.instacne.getAddress(),
                    e && t && t.apply(e);
            });
        }
        checkFlowIsOpen(e, t, i) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.checkFlowIsOpen({
                positionId: e
            }).then(({ isOpen: e }) => {
                i.apply(t, [e]), console.log("该广告位是否开启:", e);
            });
        }
        getFlowConfig(e, t, i, s = !0) {
            let a = this;
            if (Laya.Browser.onMiniGame) if (a.flowConfig[e]) {
                if (i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            } else a.wx.tmSDK.getFlowConfig({
                positionId: e
            }).then(n => {
                if (a.flowConfig[e] = n, i && t) if (s) {
                    let s = a.flowConfig[e].creatives;
                    s ? (s = JSON.parse(JSON.stringify(s)), i.apply(t, [s])) : i.apply(t, [null]);
                } else i.apply(t, [a.flowConfig[e]]);
            });
        }
        flowNavigate(t, i, s = "") {
            Laya.Browser.onMiniGame && this.wx.tmSDK.flowNavigate({
                positionId: t,
                creativeId: i
            }).then(i => {
                if (this.flowConfig[t] = i, "navigateToMiniProgram:fail cancel" == i.navigateMessage.errMsg) e.event(a.USERCANCEL); else if ("navigateToMiniProgram:ok" == i.navigateMessage.errMsg) switch (e.event(a.USERJUMP),
                    s) {
                        case "":
                            break;

                        case "SideJiugongScene":
                            S.instance.sendEvent(n.Jump_gongge);
                            break;

                        case "MoreGameScene":
                            S.instance.sendEvent(n.Jump_juhe1);
                            break;

                        case "SideTwoScene":
                            S.instance.sendEvent(n.Jump_juhe2);
                            break;

                        case "SideGridScene":
                            S.instance.sendEvent(n.Jump_jiesuan);
                    }
            }).catch(e => {
                console.log("跳转失败", e);
            });
        }
        getAppJSONConfig(e = null) {
            Laya.Browser.onMiniGame && this.wx.tmSDK.getAppJSONConfig(e).then(e => {
                console.log("在线配置参数:", e);
                let t = e.game_Config;
                t ? (g.ishutui = t.ishutui, g.OpenClick = t.OpenClick, g.OpenVideo = t.OpenVideo,
                    g.blackIPCityArr = t.blackIPCityArr, g.useSetWhite = t.useSetWhite, g.without_sceneList = t.without_sceneList,
                    g.space_level = t.crazy_click_config.space_level, g.start_level = t.crazy_click_config.start_level,
                    g.switchVer = t.crazy_click_config.switchVer, g.openJiugong = t.openJiugong, g.isJump = t.isJump,
                    g.RandomClick = t.RandomClick, g.reSetWhite(t.posList), g.probability = t.probability,
                    L.instance.refreshTime = 1e3 * t.refreshTime, g.everyclick = t.everyclick) : console.warn("TM后台配置参数错误");
            });
        }
        sendEvent(e, t = null, i = null) { }
    }
    var y, p, v, _ = Laya.Scene, w = Laya.ClassUtils.regClass;
    !function (e) {
        !function (e) {
            class t extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/BoxScene");
                }
            }
            e.BoxSceneUI = t, w("ui.scene.BoxSceneUI", t);
            class i extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoadingScene");
                }
            }
            e.LoadingSceneUI = i, w("ui.scene.LoadingSceneUI", i);
            class s extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoseScene");
                }
            }
            e.LoseSceneUI = s, w("ui.scene.LoseSceneUI", s);
            class a extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LoseTwiceScene");
                }
            }
            e.LoseTwiceSceneUI = a, w("ui.scene.LoseTwiceSceneUI", a);
            class n extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/LuckBoxScene");
                }
            }
            e.LuckBoxSceneUI = n, w("ui.scene.LuckBoxSceneUI", n);
            class o extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/MainScene");
                }
            }
            e.MainSceneUI = o, w("ui.scene.MainSceneUI", o);
            class r extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SelectSkinScene");
                }
            }
            e.SelectSkinSceneUI = r, w("ui.scene.SelectSkinSceneUI", r);
            class l extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SettingScene");
                }
            }
            e.SettingSceneUI = l, w("ui.scene.SettingSceneUI", l);
            class h extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/ShareScene");
                }
            }
            e.ShareSceneUI = h, w("ui.scene.ShareSceneUI", h);
            class c extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SignScene");
                }
            }
            e.SignSceneUI = c, w("ui.scene.SignSceneUI", c);
            class d extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/SkinTryScene");
                }
            }
            e.SkinTrySceneUI = d, w("ui.scene.SkinTrySceneUI", d);
            class g extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/TurntableScene");
                }
            }
            e.TurntableSceneUI = g, w("ui.scene.TurntableSceneUI", g);
            class u extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("scene/WinScene");
                }
            }
            e.WinSceneUI = u, w("ui.scene.WinSceneUI", u);
        }(e.scene || (e.scene = {}));
    }(y || (y = {})), function (e) {
        !function (e) {
            class t extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/GoldenEggScene");
                }
            }
            e.GoldenEggSceneUI = t, w("ui.side.GoldenEggSceneUI", t);
            class i extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/MoreGameScene");
                }
            }
            e.MoreGameSceneUI = i, w("ui.side.MoreGameSceneUI", i);
            class s extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideBotListScene");
                }
            }
            e.SideBotListSceneUI = s, w("ui.side.SideBotListSceneUI", s);
            class a extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideDoubleListScene");
                }
            }
            e.SideDoubleListSceneUI = a, w("ui.side.SideDoubleListSceneUI", a);
            class n extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideGridScene");
                }
            }
            e.SideGridSceneUI = n, w("ui.side.SideGridSceneUI", n);
            class o extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideJiugongScene");
                }
            }
            e.SideJiugongSceneUI = o, w("ui.side.SideJiugongSceneUI", o);
            class r extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideLeftListScene");
                }
            }
            e.SideLeftListSceneUI = r, w("ui.side.SideLeftListSceneUI", r);
            class l extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideMoreNativeScene");
                }
            }
            e.SideMoreNativeSceneUI = l, w("ui.side.SideMoreNativeSceneUI", l);
            class h extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideNativeBannerScene");
                }
            }
            e.SideNativeBannerSceneUI = h, w("ui.side.SideNativeBannerSceneUI", h);
            class c extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideNativeScene");
                }
            }
            e.SideNativeSceneUI = c, w("ui.side.SideNativeSceneUI", c);
            class d extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("side/SideTwoScene");
                }
            }
            e.SideTwoSceneUI = d, w("ui.side.SideTwoSceneUI", d);
        }(e.side || (e.side = {}));
    }(y || (y = {})), function (e) {
        !function (e) {
            class t extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/ConsoleScene");
                }
            }
            e.ConsoleSceneUI = t, w("ui.tips.ConsoleSceneUI", t);
            class i extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/MoveTipsScene");
                }
            }
            e.MoveTipsSceneUI = i, w("ui.tips.MoveTipsSceneUI", i);
            class s extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/SlowScene");
                }
            }
            e.SlowSceneUI = s, w("ui.tips.SlowSceneUI", s);
            class a extends _ {
                constructor() {
                    super();
                }
                createChildren() {
                    super.createChildren(), this.loadScene("tips/TipsScene");
                }
            }
            e.TipsSceneUI = a, w("ui.tips.TipsSceneUI", a);
        }(e.tips || (e.tips = {}));
    }(y || (y = {}));
    class f extends y.scene.BoxSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight, this._main.vScrollBarSkin = "", this._main.height = 1334 - i.statusBarHeight + (i.stage_height - i.ore_height);
        }
        onOpened() {
            this._listHot.selectHandler = new Laya.Handler(this, this.selectHot), this._listJing.selectHandler = new Laya.Handler(this, this.selectJing),
                this._listHot.selectHandler = new Laya.Handler(this, this.selectNew), this._listHot.selectEnable = !0,
                this._listJing.selectEnable = !0, this._listNew.selectEnable = !0, S.instance.getFlowConfig(s.wxId, this, this.loadAd1),
                Laya.timer.once(200, this, () => {
                    S.instance.getFlowConfig(s.wxId, this, this.loadAd2);
                }), Laya.timer.once(400, this, () => {
                    S.instance.getFlowConfig(s.wxId, this, this.loadAd3);
                });
        }
        loadAd1(e) {
            let t = e;
            t.sort(() => .5 - Math.random()), this._listJing.dataSource = t;
        }
        loadAd2(e) {
            let t = e;
            t.sort(() => .5 - Math.random()), this._listNew.dataSource = t;
        }
        loadAd3(e) {
            let t = e;
            t.sort(() => .5 - Math.random()), this._listHot.dataSource = t;
        }
        selectHot(e) {
            let t = this._listHot.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId), this._listHot.selectedIndex = -1);
        }
        selectJing(e) {
            let t = this._listJing.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId), this._listJing.selectedIndex = -1);
        }
        selectNew(e) {
            let t = this._listNew.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId), this._listNew.selectedIndex = -1);
        }
    }
    class b extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            Math.ceil(6 * Math.random());
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon"),
                    e._txtFadeNum = e.getChildByName("_txtFadeNum"), e._txtFadeNum.text = Math.floor(1e5 * Math.random()) + "人在玩";
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = m.instance.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class A extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            Math.ceil(6 * Math.random());
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon");
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = m.instance.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class E extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            Math.ceil(6 * Math.random());
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon");
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = m.instance.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class I {
        constructor() {
            this.baseUrl = "", this.isInit = !1, this.use2dBaseurl = !1, this.use3dBaseurl = !1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new I();
        }
        init() {
            if (this.isInit = !0, Laya.Browser.onMiniGame) {
                let e = Laya.Browser.window.wx;
                this.baseUrl = e.env.USER_DATA_PATH + "/";
            } else this.baseUrl = "";
        }
        create(e, t, i, s, a, n, o, r) {
            if (this.isInit || this.init(), !e) return console.log("资源地址为空"), null;
            if (this.use3dBaseurl) if (e instanceof Array) {
                let t = [];
                for (let i = 0; i < e.length; i++) {
                    let s = e[i];
                    s = this.baseUrl + s, t.push(s);
                }
                e = t;
            } else e = this.baseUrl + e;
            return Laya.loader.create(e, t, i, s, a, n, o, r);
        }
        load(e, t, i, s, a, n, o, r, l) {
            if (this.isInit || this.init(), !e) return console.log("资源地址为空"), null;
            if (this.use2dBaseurl) if (e instanceof Array) {
                let t = [];
                for (let i = 0; i < e.length; i++) {
                    let s = e[i];
                    s = this.baseUrl + s, t.push(s);
                }
                e = t;
            } else e = this.baseUrl + e;
            return Laya.loader.load(e, t, i, s, a, n, o, r, l);
        }
        getRes(e) {
            return this.use3dBaseurl && (e = this.baseUrl + e), Laya.loader.getRes(e);
        }
        get2dRes(e) {
            return this.use2dBaseurl && (e = this.baseUrl + e), Laya.loader.getRes(e);
        }
    }
    class x {
        constructor() {
            this._isSound = -1, this._isMusic = -1, this.isPlaying = !1;
        }
        static get instance() {
            return this._instance || (this._instance = new x()), this._instance;
        }
        get isSound() {
            if (-1 == this._isSound) {
                let e = Laya.LocalStorage.getItem(t.ISSOUND);
                return e ? (this._isSound = Number(e), !!this._isSound) : (Laya.LocalStorage.setItem(t.ISSOUND, "1"),
                    !0);
            }
            return !!this._isSound;
        }
        set isSound(e) {
            this._isSound = e ? 1 : 0, Laya.LocalStorage.setItem(t.ISSOUND, this._isSound.toString());
        }
        get isMusic() {
            if (-1 == this._isMusic) {
                let e = Laya.LocalStorage.getItem(t.ISMUSIC);
                return e ? (this._isMusic = Number(e), !!this._isMusic) : (Laya.LocalStorage.setItem(t.ISMUSIC, "1"),
                    !0);
            }
            return !!this._isMusic;
        }
        set isMusic(e) {
            e ? this._isMusic = 1 : this._isMusic = 0, Laya.LocalStorage.setItem(t.ISMUSIC, this._isMusic.toString());
        }
        stopBg() {
            this.bgChannel && this.bgChannel.pause(), this.isPlaying = !1;
        }
        mainBg() {
            this.isMusic && (this.stopBg(), this.isPlaying = !0, this.bgChannel ? this.bgChannel.resume() : this.bgChannel = Laya.SoundManager.playMusic(i.surl + "sound/bgm.mp3", 0));
        }
        loseVoice() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/Lose.wav");
        }
        winVoice() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/Win.wav");
        }
        Wrong() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/Wrong.wav");
        }
        sound_cashpickup3() {
            this.isSound && Laya.SoundManager.playSound(i.surl + "sound/sound_cashpickup3.wav");
        }
        Mean1() { }
        angry() {
            if (this.isSound) {
                Laya.SoundManager.playSound(i.surl + "sound/GrilUp.wav");
                let e = Math.random();
                e < .3 ? Laya.SoundManager.playSound(i.surl + "sound/MeangirlLaugh1.wav") : e < .6 ? Laya.SoundManager.playSound(i.surl + "sound/MeangirlLaugh2.wav") : Laya.SoundManager.playSound(i.surl + "sound/MeangirlLaugh3.wav");
            }
        }
    }
    class C {
        constructor() {
            this.bannerAdUnitId = "24k8bfe8mdk42cl9sh", this.videoAdUnitId = "530ia824fms412k2mg",
                this.InterstitialAdUnitId = "7f11d244h69gcq47ng", this.GameRecorderManager = null,
                this.videoPath = "", this.screenWidth = 0, this.screenHeight = 0, this.clipIndexList = [],
                this.myBanner = null, this.isHide = !1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new C();
        }
        initData() {
            if (!Laya.Browser.onTTMiniGame) return;
            this.createVideo(), this.createInterstitialAd(), this.check(), this.getGameRecorderManager();
            let e = this;
            Laya.Browser.window.tt.getSystemInfo({
                success(t) {
                    i.stage_height = i.ore_width / t.windowWidth * t.windowHeight, i.statusBarHeight = t.statusBarHeight * i.ore_width / t.windowHeight,
                        e.screenWidth = t.windowWidth, e.screenHeight = t.windowHeight;
                }
            });
        }
        getGameRecorderManager() {
            if (this.videoPath = "", Laya.Browser.onTTMiniGame) {
                this.GameRecorderManager = i.$objcet.getGameRecorderManager(), this.GameRecorderManager.onStart(e => {
                    console.log("开始录屏");
                });
                let e = this;
                this.GameRecorderManager.onStop(t => {
                    e.videoPath = t.videoPath, console.log(t.videoPath), console.log("结束录屏");
                });
            }
        }
        startRecorder() {
            if (Laya.Browser.onTTMiniGame) {
                let e = this.GameRecorderManager.getMark();
                this.screenWidth, e.markWidth, this.screenHeight, e.markHeight;
                console.log(this.GameRecorderManager), this.GameRecorderManager.start({
                    duration: 300,
                    isMarkOpen: !1
                });
            }
        }
        stopRecorder() {
            Laya.Browser.onTTMiniGame && this.GameRecorderManager.stop();
        }
        recordClip() {
            if (Laya.Browser.onTTMiniGame) {
                let e = this;
                this.GameRecorderManager.recordClip({
                    timeRange: [2, 0],
                    success(t) {
                        console.log(t.index), e.clipIndexList.push(t.index);
                    }
                });
            }
        }
        shareVideo() {

        }
        createBannerAd(e = !1) {
            if (!Laya.Browser.onTTMiniGame) return;
            let t = this, s = i.$objcet.getSystemInfoSync();
            this.myBanner = i.$objcet.createBannerAd({
                adUnitId: t.bannerAdUnitId,
                style: {
                    left: 1,
                    width: s.windowWidth,
                    top: s.windowHeight - 112.5
                }
            }), this.myBanner.style.left = 0, this.myBanner.onResize(e => {
                console.log(e.width, e.height), t.myBanner.style.top = s.windowHeight - e.height,
                    t.myBanner.style.left = (s.windowWidth - e.width) / 2;
            }), this.myBanner.onError(function (e) {
                console.log(e);
            }), this.myBanner.onLoad(function () {
                e && this.myBanner.show(), console.log("banner 广告加载成功");
            }), this.myBanner.onError(e => {
                console.log(e), 1004 == e.errCode && (i.noAdBanner = !0);
            });
        }
        check() {
            this.createBannerAd(!0);
        }
        refreshBanner() {
            this.isHide || (this.destroyBanner(), this.createBannerAd(!0));
        }
        hideBanner() {
            Laya.Browser.onTTMiniGame && this.myBanner && (this.myBanner.hide(), this.isHide = !0);
        }
        showBanner() {
            Laya.Browser.onTTMiniGame && this.myBanner ? this.myBanner.show() : this.createBannerAd(!0),
                this.isHide = !1;
        }
        destroyBanner() {
            Laya.Browser.onTTMiniGame && this.myBanner && (this.myBanner.destroy(), this.myBanner = null);
        }
        createVideo() {

        }
        showVideo(e, t, i = null) {

        }
        createInterstitialAd() {
            if (Laya.Browser.onTTMiniGame) {
                this.interstitialAd = i.$objcet.createInterstitialAd({
                    adUnitId: this.InterstitialAdUnitId
                });
            }
        }
        showInterstitialAd() {
            if (!Laya.Browser.onTTMiniGame) return;
            let e = this;
            e.interstitialAd.load().then(() => {
                e.interstitialAd.show();
            }).catch(e => {
                console.log(e);
            });
        }
    }
    class N {
        constructor() {
            this.nativeAd = new Array(), this.videoAdUnitId = "3029e68167d747c18a08e9c37bd71c4d",
                this.bannerAdUnitId = "1b3ce000bfc441a899ab68248352b30f", this.nativeAdUnitId = "5a448bfc8a1d498ba9a77765fd654e9d",
                this.endAdUnitId = "e7f5ec3a6b534464b63b24da5206227a", this.endViewUnitId = "e4dfb29efaf947f08dbadb6ae50d9f60",
                this.boxViewUnitId = "e7f8a6f5a02442d3b23d22d400adb844", this.nativeList = [this.nativeAdUnitId],
                this.startAdUnitId = "66d5a10e8abe46c4b8f120e8fee70a61", this.InterstitialAdUnitId = "e300995d8c754ac5b79d354a4aed218c",
                this.$whitechangeBannerTime = 3e4, this.loadTimes = 0, this._nativeAdDataList = new Array();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new N();
        }
        initData() {
            Laya.Browser.onVVMiniGame && (this.bannerAd || this.createBannerAd(), this.videoAd || this.createVideo(),
                this.createNativeAd(0));
        }
        hideBanner() {
            Laya.Browser.onVVMiniGame && this.bannerAd && (this.destroyBanner(), Laya.timer.clearAll(this));
        }
        showBanner(e = !0) {
            if (Laya.Browser.onVVMiniGame) if (this.bannerAd) {
                this.bannerAd.show();
                let e = this;
                Laya.timer.once(e.refreshTime, e, e.createBannerAd, [!0]);
            } else this.createBannerAd(!0);
        }
        createBannerAd(e = !1) {
            let t = this;
            this.bannerAd && this.destroyBanner(), e && Laya.timer.once(t.refreshTime, t, t.createBannerAd, [!0]),
                t.bannerAd = i.$objcet.createBannerAd({
                    adUnitId: t.bannerAdUnitId
                }), t.bannerAd.onError(e => {
                    console.log(e);
                }), t.bannerAd.onLoad(() => {
                    console.log("banner 广告加载成功"), e && t.bannerAd.show();
                }), t.bannerAd.onError(e => {
                    console.log(e), 1004 == e.errCode && (i.noAdBanner = !0);
                });
        }
        destroyBanner() {
            Laya.Browser.onVVMiniGame && this.bannerAd && (this.bannerAd.destroy(), this.bannerAd = null);
        }
        get refreshTime() {
            return this.$whitechangeBannerTime;
        }
        set refreshTime(e) {
            e && e > 2e3 && (this.$whitechangeBannerTime = e);
        }
        createNativeAd(e) {
            if (!Laya.Browser.onVVMiniGame) return;
            let t = this;
            t.nativeAd[0] = i.$objcet.createNativeAd({
                adUnitId: t.nativeList[0]
            }), console.log(t.nativeAd[0]), t.nativeAd[0].load(), t.nativeAd[0].onLoad(e => {
                t.loadTimes = 0, e.adList && e.adList.length > 0 && (t._nativeAdDataList[0] = e.adList[0],
                    t._nativeAdDataList[0] && (t._oldNativeAdData = JSON.parse(JSON.stringify(t._nativeAdDataList[0]))));
            }), t.nativeAd[0].onError(e => {
                t.loadTimes++, t.loadTimes < 2 && t.nativeAd[0].load();
            });
        }
        nativeAdreportAdShow(e) {
            if (!Laya.Browser.onVVMiniGame) return;
            let t = this;
            t._nativeAdDataList && t._nativeAdDataList[0] && t.nativeAd && t.nativeAd[0] && t.nativeAd[0].reportAdShow({
                adId: t._nativeAdDataList[0].adId
            });
        }
        removeNativeAd(e) {
            if (!Laya.Browser.onVVMiniGame) return;
            let t = this;
            t._nativeAdDataList && t._nativeAdDataList[0] && t.nativeAd && t.nativeAd[0] ? (t._nativeAdDataList[0] = null,
                t.nativeAd[0].offLoad(), t.nativeAd[0].offError(), t.nativeAd[0] = null, t.createNativeAd(0)) : t.createNativeAd(0);
        }
        nativeAdData(e) {
            if (Laya.Browser.onVVMiniGame) return 0, this._nativeAdDataList && this._nativeAdDataList[0] ? JSON.parse(JSON.stringify(this._nativeAdDataList[0])) : this._oldNativeAdData ? (this._nativeAdDataList[0] = JSON.parse(JSON.stringify(this._oldNativeAdData)),
                JSON.parse(JSON.stringify(this._oldNativeAdData))) : (this.createNativeAd(0), null);
        }
        nativeAdreportAdClick(e) {
            if (!Laya.Browser.onVVMiniGame) return;
            let t = this;
            t._nativeAdDataList && t._nativeAdDataList[0] && t.nativeAd && t.nativeAd[0] && t.nativeAd[0].reportAdClick({
                adId: t._nativeAdDataList[0].adId
            });
        }
        createVideo() {

        }
        showVideo(e, t, i = null) {

        }
        addToDesk() {
            Laya.Browser.onVVMiniGame && i.$objcet.hasShortcutInstalled({
                success: e => {
                    0 == e && i.$objcet.installShortcut({
                        success: () => { },
                        fail: e => { },
                        complete: () => { }
                    });
                },
                fail: e => { },
                complete: () => { }
            });
        }
    }
    class B {
        static get unityRES() {
            return this.Continue_Item.concat(this.AI).concat(this.Bar).concat(this.bubble_explode).concat(this.Item_Poor).concat(this.Item_Rich).concat(this.MakeChoiceDoor).concat(this.SlotMachine).concat(this.player).concat(this.ground).concat(this.effRES).concat(this.skyBox).concat(this.water);
        }
    }
    B.levelRES = "res3d/level/all.json", B.gameRES = "res3d/level/Game.json", B.player = "res3d/Player.lh",
        B.AI = "res3d/AI.lh", B.Bar = "res3d/Bar.lh", B.bubble_explode = "res3d/bubble_explode.lh",
        B.Continue_Item = ["res3d/Continue_Item_Poor.lh", "res3d/Continue_Item_Rich.lh"],
        B.Item_Poor = "res3d/Item_Poor.lh", B.Item_Rich = "res3d/Item_Rich.lh", B.MakeChoiceDoor = "res3d/MakeChoiceDoor.lh",
        B.SlotMachine = "res3d/SlotMachine.lh", B.ground = ["res3d/GroundSection.lh", "res3d/TurnLeft.lh", "res3d/TurnRight.lh", "res3d/SectionEnd.lh"],
        B.effRES = ["res3d/MoneyDollarbillPickUpGain.lh", "res3d/MoneyDollarbillPickUpLoose.lh"],
        B.skyBox = "res3d/skybox/skyBox.lmat", B.water = "res3d/Water.lh";
    class T { }
    T.DIAMOND = "diamond", T.GROUND = "ground", T.PLAYER = "player", T.TURNRIGHT = "turnRight",
        T.TURNLEFT = "turnLeft", T.ITEMRICH = "itemrich", T.ITEMPOOR = "itempoor", T.SLOTMACHINE = "slotmachine",
        T.MAKECHOICEDOOR = "makechoicedoor", T.AI = "ai", T.BAR = "bar", T.GETMONEY = "getmoney",
        T.LOSETMONEY = "losemoney", T.WATER = "water";
    class M {
        constructor() {
            this.objList = new Array(), this.objscriptList = new Array(), this.objName = "",
                this.objData = null, this.checkPool = !0, this.addEventListener();
        }
        init() { }
        load(e = null) { }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
        resetScript() {
            if (this.objscriptList && this.objscriptList.length > 0 && "" != this.objName) for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                t && t.onReset();
            }
        }
        createObj() {
            if (null != this.objName && null != this.objName && "" != this.objName) {
                if (this.objPrefab) {
                    let e = Laya.Pool.getItemByCreateFun(this.objName, this.objPrefab.clone, this.objPrefab);
                    return e.name = this.objName, e;
                }
                return console.log(this.objName + "对象为空"), null;
            }
            return console.log("对象名为空"), null;
        }
        clearObj() {
            if (Laya.timer.clearAll(this), this.objList && this.objList.length > 0 && "" != this.objName) for (let e = 0; e < this.objList.length; e++) {
                let t = this.objList[e];
                t && (t.removeSelf(), Laya.Pool.recover(this.objName, t), t = null);
            }
            this.clearOthers(), this.objList = new Array(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        clearManyObjs(e = 16) {
            if (Laya.timer.clearAll(this), this.objList && this.objList.length > 0 && "" != this.objName) {
                let t = 0, i = this;
                Laya.timer.loop(e, i, () => {
                    let e = i.objList[t];
                    e && (e.removeSelf(), Laya.Pool.recover(this.objName, e), e = null), ++t == i.objList.length && (Laya.timer.clearAll(i),
                        this.objList = new Array(), this.clearOthers(), console.log("清理" + this.objName + "完成"),
                        this.checkObjPool());
                });
            } else this.clearOthers(), this.objList = new Array(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        clearScript() {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0 && "" != this.objName) for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                t && t.clearObj();
            }
            this.objscriptList = new Array(), this.clearOthers(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        clearManyScripts(e = 16) {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0 && "" != this.objName) {
                let t = 0, i = this;
                Laya.timer.loop(e, i, () => {
                    let e = this.objscriptList[t];
                    e && e.clearObj(), ++t == i.objscriptList.length && (Laya.timer.clearAll(i), this.objscriptList = new Array(),
                        this.clearOthers(), console.log("清理" + this.objName + "完成"), this.checkObjPool());
                });
            } else this.objscriptList = new Array(), this.clearOthers(), console.log("清理" + this.objName + "完成"),
                this.checkObjPool();
        }
        checkObjPool() {
            this.checkPool && this.objPool.numChildren > 0 && (console.log(this.objPool), console.log("对象池" + this.objName + "Pool回收有遗漏"));
        }
        destryObj() {
            this.removeEventListener(), Laya.timer.clearAll(this);
        }
    }
    class G {
        static get instance() {
            return this._instance ? this._instance : this._instance = new G();
        }
        init() {
            if (this.scene2d = new Laya.Scene(), Laya.stage.addChild(this.scene2d), Laya.stage.setChildIndex(this.scene2d, 0),
                this.scene3d = new Laya.Scene3D(), Laya.stage.addChild(this.scene3d), Laya.stage.setChildIndex(this.scene3d, 0),
                this.scene3d.ambientMode = 0, this.scene3d.ambientColor = new Laya.Vector3(.76, .76, .76),
                this.scene3d.enableFog = !0, this.scene3d.fogColor = new Laya.Vector3(6 / 255, 150 / 255, 183 / 255),
                this.scene3d.fogStart = 15, this.scene3d.fogRange = 70, i.isDebug) {
                var e = this.scene3d.addChild(new Laya.PixelLineSprite3D(3));
                e.addLine(new Laya.Vector3(0, 2, 0), new Laya.Vector3(50, 2, 0), Laya.Color.RED, Laya.Color.RED),
                    e.addLine(new Laya.Vector3(0, 1, 0), new Laya.Vector3(0, 50, 0), Laya.Color.GREEN, Laya.Color.GREEN),
                    e.addLine(new Laya.Vector3(0, 1, 0), new Laya.Vector3(0, 1, 50), Laya.Color.BLUE, Laya.Color.BLUE);
            }
        }
    }
    class O extends Laya.Script3D {
        constructor() {
            super(), this.nodeDic = {};
        }
        get transform() {
            return this.obj ? this.obj.transform : null;
        }
        get position() {
            return this.transform ? this.transform.position.clone() : null;
        }
        set position(e) {
            this.transform && (this.transform.position = e);
        }
        get localPosition() {
            return this.transform ? this.transform.localPosition.clone() : null;
        }
        set localPosition(e) {
            this.transform && (this.transform.localPosition = e);
        }
        get rotation() {
            return this.transform ? this.transform.rotation.clone() : null;
        }
        set rotation(e) {
            this.transform && (this.transform.rotation = e);
        }
        get localRotation() {
            return this.transform ? this.transform.localRotation.clone() : null;
        }
        set localRotation(e) {
            this.transform && (this.transform.localRotation = e);
        }
        get rotationEuler() {
            return this.transform ? this.transform.rotationEuler.clone() : null;
        }
        set rotationEuler(e) {
            this.transform && (this.transform.rotationEuler = e);
        }
        get localRotationEuler() {
            return this.transform ? this.transform.localRotationEuler.clone() : null;
        }
        set localRotationEuler(e) {
            this.transform && (this.transform.localRotationEuler = e);
        }
        get scale() {
            return this.transform ? this.transform.getWorldLossyScale().clone() : null;
        }
        set scale(e) {
            this.transform && this.transform.setWorldLossyScale(e);
        }
        get localScale() {
            return this.transform ? this.transform.localScale.clone() : null;
        }
        set localScale(e) {
            this.transform && (this.transform.localScale = e);
        }
        get localRotationEulerX() {
            return this.transform ? this.transform.localRotationEulerX : null;
        }
        set localRotationEulerX(e) {
            this.transform && (this.transform.localRotationEulerX = e);
        }
        get localRotationEulerY() {
            return this.transform ? this.transform.localRotationEulerY : null;
        }
        set localRotationEulerY(e) {
            this.transform && (this.transform.localRotationEulerY = e);
        }
        get localRotationEulerZ() {
            return this.transform ? this.transform.localRotationEulerZ : null;
        }
        set localRotationEulerZ(e) {
            this.transform && (this.transform.localRotationEulerZ = e);
        }
        get localPositionX() {
            return this.transform ? this.transform.localPositionX : null;
        }
        set localPositionX(e) {
            this.transform && (this.transform.localPositionX = e);
        }
        get localPositionY() {
            return this.transform ? this.transform.localPositionY : null;
        }
        set localPositionY(e) {
            this.transform && (this.transform.localPositionY = e);
        }
        get localPositionZ() {
            return this.transform ? this.transform.localPositionZ : null;
        }
        set localPositionZ(e) {
            this.transform && (this.transform.localPositionZ = e);
        }
        onUpdate() {
            let e = Laya.timer.delta;
            e = (e = e > 60 ? 60 : e) < 10 ? 10 : e, this.update(e);
        }
        update(e) { }
        get V3ZERO() {
            return this._ZERO || (this._ZERO = new Laya.Vector3(0, 0, 0)), this._ZERO;
        }
        get V3ONE() {
            return this._ONE || (this._ONE = new Laya.Vector3(1, 1, 1)), this._ONE;
        }
        get V3UP() {
            return this._UP || (this._UP = new Laya.Vector3(0, 1, 0)), this._UP;
        }
        positionWorld2local(e, t) {
            let i = new Laya.Vector3(0, 0, 0), s = new Laya.Matrix4x4();
            return t.transform.worldMatrix.invert(s), Laya.Vector3.transformCoordinate(e, s, i),
                i;
        }
        getChildNodesArray(e) {
            let t = [];
            for (let i = 0; i < e.numChildren; i++) {
                let s = e.getChildAt(i);
                s && t.push(s);
            }
            return t;
        }
        FindAndGetAllChildren(e, t) {
            if (e.numChildren > 0) {
                this.getChildNodesArray(e).forEach(e => {
                    if (t.push(e), !(this.getChildNodesArray(e).length > 0)) return t;
                    this.FindAndGetAllChildren(e, t);
                });
            }
            return null;
        }
        getAllChildrenArray(e) {
            let t = [];
            return this.FindAndGetAllChildren(e, t), t;
        }
        getAllChildrenMap(e) {
            let t = e.id, i = this.nodeDic[t];
            if (!i) {
                let s = this.getAllChildrenArray(e);
                i = new Map();
                for (let e = 0; e < s.length; e++) i.has(s[e].name) || i.set(s[e].name, s[e]);
                this.nodeDic || (this.nodeDic = new Array()), this.nodeDic[t] = i;
            }
            return i;
        }
        getNodeByMap(e, t) {
            return t.has(e) ? t.get(e) : null;
        }
        getNodeByName(e) {
            if (!this.obj) return null;
            let t = this.obj.id, i = this.nodeDic[t];
            if (!i) {
                let e = this.getAllChildrenArray(this.obj);
                i = new Map();
                for (let t = 0; t < e.length; t++) i.has(e[t].name) || i.set(e[t].name, e[t]);
                this.nodeDic[t] = i;
            }
            return i.has(e) ? i.get(e) : null;
        }
    }
    class k extends O {
        constructor() {
            super(), this.index = 0, this.objData = null;
        }
        onAwake() {
            this.obj = this.owner, this.addEventListener(), this.awake();
        }
        awake() { }
        onReset() { }
        ready() { }
        start() { }
        addEventListener() { }
        removeEventListener() { }
        clearObj() {
            this.clearOthers(), this.removeEventListener(), Laya.timer.clearAll(this), Laya.Tween.clearAll(this),
                this.obj ? (this.obj.removeSelf(), Laya.Pool.recover(this.obj.name, this.obj), this.obj = null,
                    this.destroy()) : (this.obj = null, this.destroy());
        }
        clearOthers() { }
    }
    !function (e) {
        e.Armaturedance_hiphop_turn = "Armaturedance_hiphop_turn", e.ArmatureDefeat_Level = "ArmatureDefeat_Level",
            e.Armatureidle_wait = "Armatureidle_wait", e.ArmaturePoor_Transition = "ArmaturePoor_Transition",
            e.ArmatureReaction = "ArmatureReaction", e.ArmatureRich_Transition = "ArmatureRich_Transition",
            e.ArmatureVictory_Long = "ArmatureVictory_Long", e.Armaturewalk_normal_0 = "Armaturewalk_normal_0",
            e.Armaturewalk_poor = "Armaturewalk_poor", e.Armaturewalk_poor_pity = "Armaturewalk_poor_pity",
            e.Armaturewalk_rich = "Armaturewalk_rich", e.Armaturewalk_richbling = "Armaturewalk_richbling";
    }(p || (p = {})), function (e) {
        e.ArmatureIdle = "ArmatureIdle", e.ArmaturePickUp = "ArmaturePickUp", e.Armaturewalk_normal = "Armaturewalk_normal";
    }(v || (v = {}));
    class D extends Laya.Script3D {
        constructor() {
            super();
        }
        init(e, t = null, i = null, s = null, a = null, n = null, o = null) {
            this.caller = e, this.triggerE = t, this.triggerEx = s, this.triggerSt = i, this.collisionE = a,
                this.collisionEx = n;
        }
        onTriggerEnter(e) {
            this.triggerE && this.triggerE.apply(this.caller, [e]);
        }
        onTriggerStay(e) {
            this.triggerSt && this.triggerSt.apply(this.caller, e);
        }
        onTriggerExit(e) {
            this.triggerEx && this.triggerEx.apply(this.caller, [e]);
        }
        onCollisionEnter(e) {
            this.collisionE && this.collisionE.apply(this.caller, [e]);
        }
        onCollisionExit(e) {
            this.collisionEx && this.collisionEx.apply(this.caller, [e]);
        }
    }
    class P {
        constructor() {
            this._isVibrate = -1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new P();
        }
        get isVibrate() {
            if (-1 == this._isVibrate) {
                let e = Laya.LocalStorage.getItem(t.ISVIBRATE);
                return e ? (this._isVibrate = Number(e), !!this._isVibrate) : (Laya.LocalStorage.setItem(t.ISVIBRATE, "1"),
                    !0);
            }
            return !!this._isVibrate;
        }
        set isVibrate(e) {
            this._isVibrate = e ? 1 : 0, Laya.LocalStorage.setItem(t.ISVIBRATE, this._isVibrate.toString());
        }
        vibrateShort(e = 15) {
            if (i.isMini) {
                let t = Math.ceil(e / 15), s = 0, a = {
                    count: t,
                    index: s
                };
                Laya.timer.loop(16, a, () => {
                    this.isVibrate ? i.$objcet.vibrateShort() : Laya.timer.clearAll(a), ++s > t && Laya.timer.clearAll(a);
                });
            }
        }
        vibrateLong() {
            i.isMini && i.$objcet.vibrateLong();
        }
    }
    class R extends k {
        constructor() {
            super();
        }
        awake() { }
        onReset() { }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) { }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() { }
    }
    class V {
        constructor() {
            this.objList = new Array(), this.objscriptList = new Array(), this.objData = null,
                this.checkPool = !0, this.addEventListener();
        }
        init() { }
        load(e = null) { }
        reset() { }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
        resetScript() {
            if (this.objscriptList && this.objscriptList.length > 0) for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                t && t.onReset();
            }
        }
        createObj(e, t) {
            if (null != e && null != e && "" != e) {
                if (t) {
                    let i = Laya.Pool.getItemByCreateFun(e, t.clone, t);
                    return i.name = e, i;
                }
                return console.log(e + "对象为空"), null;
            }
            return console.log("对象名为空"), null;
        }
        clearObj() {
            if (Laya.timer.clearAll(this), this.objList && this.objList.length > 0) for (let e = 0; e < this.objList.length; e++) {
                let t = this.objList[e];
                t && (t.removeSelf(), Laya.Pool.recover(t.name, t), t = null);
            }
            this.clearOthers(), console.log("清理" + this.constructor.name + "完成"), this.objList = new Array(),
                this.checkObjPool();
        }
        clearManyObjs(e = 16) {
            if (Laya.timer.clearAll(this), this.objList && this.objList.length > 0) {
                let t = 0, i = this;
                Laya.timer.loop(e, i, () => {
                    let e = i.objList[t];
                    e && (e.removeSelf(), Laya.Pool.recover(e.name, e), e = null), ++t == i.objList.length && (Laya.timer.clearAll(i),
                        this.objList = new Array(), this.clearOthers(), console.log("清理" + this.constructor.name + "完成"),
                        this.checkObjPool());
                });
            } else this.clearOthers(), this.objList = new Array(), console.log("清理" + this.constructor.name + "完成"),
                this.checkObjPool();
        }
        clearScript() {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0) for (let e = 0; e < this.objscriptList.length; e++) {
                let t = this.objscriptList[e];
                t && t.clearObj();
            }
            this.objscriptList = new Array(), console.log("清理" + this.constructor.name + "完成"),
                this.clearOthers(), this.checkObjPool();
        }
        clearManyScripts(e = 16) {
            if (Laya.timer.clearAll(this), this.objscriptList && this.objscriptList.length > 0) {
                let t = 0, i = this;
                Laya.timer.loop(e, i, () => {
                    let e = this.objscriptList[t];
                    e && e.clearObj(), ++t == i.objscriptList.length && (Laya.timer.clearAll(i), this.objscriptList = new Array(),
                        this.clearOthers(), console.log("清理" + this.constructor.name + "完成"), this.checkObjPool());
                });
            } else this.objscriptList = new Array(), this.clearOthers(), this.checkObjPool();
        }
        checkObjPool() {
            this.checkPool && this.objPool.numChildren > 0 && console.log("对象池" + this.constructor.name + "Pool回收有遗漏");
        }
        destryObj() {
            this.removeEventListener(), Laya.timer.clearAll(this);
        }
    }
    class j extends k {
        constructor() {
            super(), this.isTurn = !1;
        }
        awake() { }
        onReset() { }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) { }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() { }
    }
    class U extends V {
        static get instance() {
            return this._instance ? this._instance : this._instance = new U();
        }
        init() {
            this.objPool = new Laya.Sprite3D(), G.instance.scene3d.addChild(this.objPool), this.groundPoolList = new Array(),
                this.ground = I.instance.getRes(B.ground[0]), this.turnLeft = I.instance.getRes(B.ground[1]),
                this.turnRight = I.instance.getRes(B.ground[2]), this.groundEnd = I.instance.getRes(B.ground[3]),
                I.instance.load(B.gameRES, Laya.Handler.create(this, e => {
                    let t = e.children;
                    if (t && t.length) for (let e = 0; e < t.length; e++) {
                        let i = t[e], s = i.name;
                        if (-1 != s.indexOf("GroundSection")) {
                            let e = this.createObj(T.GROUND, this.ground), t = e.getChildAt(0);
                            this.groundPoolList.push(t), this.objPool.addChild(e);
                            let s = e.addComponent(j);
                            s.obj = e, s.position = new Laya.Vector3(i.x, i.y, i.z), s.rotation = new Laya.Quaternion(i.rotX, i.rotY, i.rotZ, i.rotW);
                        } else if (-1 != s.indexOf("StartGround")) {
                            let e = this.createObj(T.GROUND, this.ground);
                            e.getChildAt(0);
                            this.objPool.addChild(e);
                            let t = e.addComponent(j);
                            t.obj = e, t.position = new Laya.Vector3(i.x, i.y, i.z), t.rotation = new Laya.Quaternion(i.rotX, i.rotY, i.rotZ, i.rotW);
                        } else if (-1 != s.indexOf("TurnRight")) {
                            let e = this.createObj(T.TURNRIGHT, this.turnRight);
                            this.objPool.addChild(e), e.transform.position = new Laya.Vector3(i.x, i.y, i.z),
                                e.transform.rotation = new Laya.Quaternion(i.rotX, i.rotY, i.rotZ, i.rotW);
                        } else if (-1 != s.indexOf("TurnLeft")) {
                            let e = this.createObj(T.TURNLEFT, this.turnLeft);
                            this.objPool.addChild(e), e.transform.position = new Laya.Vector3(i.x, i.y, i.z),
                                e.transform.rotation = new Laya.Quaternion(i.rotX, i.rotY, i.rotZ, i.rotW);
                        } else -1 != s.indexOf("SectionEnd") && (this.objPool.addChild(this.groundEnd),
                            this.groundEnd.transform.position = new Laya.Vector3(i.x, i.y, i.z), this.groundEnd.transform.rotation = new Laya.Quaternion(i.rotX, i.rotY, i.rotZ, i.rotW));
                    }
                }));
        }
        load(e = null) {
            this.objData = e;
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class H extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new H();
        }
        init() {
            this.objPrefab = I.instance.getRes(B.Bar), this.objName = T.BAR, this.objPool = new Laya.Sprite3D(),
                G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            if (this.objData = e, this.objData && this.objData.length) for (let e = 0; e < this.objData.length; e++) {
                let t = this.objData[e], i = this.createObj();
                U.instance.groundPoolList[t.index].addChild(i), i.transform.localPosition = new Laya.Vector3(t.data.x, t.data.y, t.data.z),
                    i.transform.localRotation = new Laya.Quaternion(t.data.rotX, t.data.rotY, t.data.rotZ, t.data.rotW),
                    i.transform.localScale = new Laya.Vector3(t.data.scaleX, t.data.scaleY, t.data.scaleZ);
                let s = i.addComponent(R);
                this.objscriptList.push(s);
            }
        }
        isInside(e) {
            if (e && this.objscriptList && this.objscriptList.length) {
                let t = e.transform.position.clone(), i = e.transform.localRotationEulerY, s = e.getChildAt(0).transform.position.clone();
                for (let e = 0; e < this.objscriptList.length; e++) {
                    let a = this.objscriptList[e];
                    if (a.position) {
                        if (Laya.Vector3.distance(t, a.position) < 3) if (0 == i) {
                            if (t.z > a.position.z - 2.8 && t.z < a.position.z + 2.8 && s.x > a.position.x - .4 && s.x < a.position.x + .4) return s.x > a.position.x ? (console.log(a.position.x + .4),
                                a.position.x + .4) : (console.log(a.position.x + -.4), a.position.x - .4);
                        } else if (t.x > a.position.x - 2.8 && t.x < a.position.x + 2.8 && s.x > a.position.z - .4 && s.x < a.position.z + .4) return s.x > a.position.z ? a.position.z + .4 : a.position.z - .4;
                    }
                }
                return 0;
            }
            return 0;
        }
        isInside2(e, t) {
            if (e && this.objscriptList && this.objscriptList.length) {
                for (let i = 0; i < this.objscriptList.length; i++) {
                    let s = this.objscriptList[i];
                    if (s.position) {
                        if (Laya.Vector3.distance(e, s.position) < 3) if (0 == t) {
                            if (e.z > s.position.z - 2.8 && e.z < s.position.z + 2.8 && e.x > s.position.x - .4 && e.x < s.position.x + .4) return e.x > s.position.x ? s.position.x + .4 : s.position.x - .4;
                        } else if (e.x > s.position.x - 2.8 && e.x < s.position.x + 2.8 && e.z > s.position.z - .4 && e.z < s.position.z + .4) return e.z > s.position.z ? s.position.z + .4 : s.position.z - .4;
                    }
                }
                return 0;
            }
            return 0;
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class W extends Laya.Script3D {
        constructor() {
            super(), this.isLock = !1, this.aimPos = new Laya.Vector3(0, 0, 0), this.aimRot = new Laya.Vector3(0, 0, 0),
                this.isRot = !1;
        }
        onStart() {
            this.cameraObj = this.owner, this.camera = this.cameraObj.getChildAt(0), this.aimPos = this.camera.transform.localPosition.clone(),
                this.aimRot = this.camera.transform.localRotationEuler.clone();
        }
        onLateUpdate() {
            i.isGameStart && this.isLock && this.playerObj && this.playerRot && (this.cameraObj.transform.position = this.playerRot.transform.position.clone(),
                this.cameraObj.transform.localRotationEulerY = this.playerObj.transform.localRotationEulerY),
                this.isRot && (this.cameraObj.transform.localRotationEulerY -= .8);
        }
    }
    class J {
        constructor() {
            this.$isLock = !1;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new J();
        }
        get isLock() {
            return this.$isLock;
        }
        set isLock(e) {
            this.cameraScript && (this.cameraScript.isLock = e), this.$isLock = e;
        }
        init() {
            this.light = new Laya.DirectionLight(), this.light.name = "light", G.instance.scene3d.addChild(this.light),
                this.light.transform.rotation = new Laya.Quaternion(-.07949767, .8901287, .415074, .1704833),
                this.light.intensity = .2, this.light.lightmapBakedType = Laya.LightSprite.LIGHTMAPBAKEDTYPE_MIXED,
                this.light.color = new Laya.Vector3(1, .9568627, .8392157), this.light.shadowMode = Laya.ShadowMode.SoftHigh,
                this.light.shadowDistance = 25, this.light.shadowResolution = 1024, this.light.shadowCascadesMode = Laya.ShadowCascadesMode.NoCascades,
                this.light.shadowStrength = 1.5, this.cameraObj = new Laya.Sprite3D(), this.camera = new Laya.Camera(),
                this.cameraObj.addChild(this.camera), this.camera.enableHDR = !1, this.camera.farPlane = 70,
                this.camera.nearPlane = .1, this.camera.fieldOfView = 60, this.cameraScript = this.cameraObj.addComponent(W),
                G.instance.scene3d.addChild(this.cameraObj), this.addEventListener(), this.changeSkyBox();
        }
        changeSkyBox() {
            let e = I.instance.getRes(B.skyBox);
            this.camera.clearFlag = Laya.CameraClearFlags.Sky;
            let t = G.instance.scene3d.skyRenderer;
            t.mesh = Laya.SkyBox.instance, t.material = e, Laya.timer.frameLoop(1, this, () => {
                e && (e.rotation += .01);
            });
        }
        reset() {
            this.cameraObj.transform.position = new Laya.Vector3(0, 0, 8), this.camera.nearPlane = 5,
                this.camera.transform.localPosition = new Laya.Vector3(0, 5, -7), this.camera.transform.localRotationEuler = new Laya.Vector3(-20, 180, 0),
                this.cameraScript.isRot = !1, this.cameraObj.transform.localRotationEulerY = 0;
        }
        ready() { }
        start() {
            this.cameraScript.playerObj = X.instance.playerObj(), this.cameraScript.playerRot = X.instance.playerRot(),
                this.isLock = !0;
        }
        gameOver() {
            this.isLock = !1, this.cameraScript.playerObj = null, this.cameraScript.isRot = !0;
        }
        addEventListener() {
            e.on(a.GAMEOVER, this, this.gameOver);
        }
        unLockPlayer() {
            this.isLock = !1;
        }
        showWin() {
            this.camera.nearPlane = .1, Laya.Tween.to(this.camera.transform, {
                localPositionY: 6.5,
                localPositionZ: -9.4,
                localRotationEulerX: -25
            }, 500);
        }
        showLose() {
            this.camera.nearPlane = .1, Laya.Tween.to(this.camera.transform, {
                localPositionY: 6.5,
                localPositionZ: -9.4,
                localRotationEulerX: -25
            }, 200);
        }
        destroyCamera() {
            this.camera && (this.camera.removeSelf(), this.camera.destroy(), this.cameraObj.removeSelf());
        }
    }
    class F {
        constructor() {
            this.effectPrefabPool = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new F();
        }
        init() {
            this.effectPool = new Laya.Sprite3D(), G.instance.scene3d.addChild(this.effectPool);
        }
        createEffect(e, t, i, s = -1) {
            let a;
            if (this.effectPool || this.init(), null == this.effectPrefabPool[e]) {
                let n = I.instance.getRes(t);
                n.name = e, this.effectPrefabPool[e] = n, a = Laya.Pool.getItemByCreateFun(e, n.clone, n),
                    this.effectPool.addChild(a), a.transform.position = i, -1 != s && Laya.timer.once(s, this, () => {
                        this.clear(a);
                    });
            } else {
                let t = this.effectPrefabPool[e];
                a = Laya.Pool.getItemByCreateFun(e, t.clone, t), this.effectPool.addChild(a), a.transform.position = i,
                    -1 != s && Laya.timer.once(s, this, () => {
                        this.clear(a);
                    });
            }
            return a;
        }
        clear(e = null) {
            if (null != e) e.removeSelf(), Laya.Pool.recover(e.name, e), e = null; else {
                Laya.timer.clearAll(this);
                for (let e = 0; e < this.effectPool.numChildren; e++) {
                    let t = this.effectPool.getChildAt(e);
                    t.removeSelf(), Laya.Pool.recover(t.name, t), t = null;
                }
                console.log("清理effectPool完成");
            }
        }
        addEventListener() { }
        removeEventListener() { }
    }
    class Y {
        constructor() {
            this.fontName = "Verdana", this.lastNum = 0, this.lastDNum = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new Y();
        }
        init() {
            if (!Laya.Browser.onVVMiniGame) {
                let e = new Laya.TTFLoader();
                e.fontName = "fzcy", e.load("font/fzjt_1.ttf"), e.complete = Laya.Handler.create(this, () => { });
            }
        }
        showUp(e, t) {
            this.lastNum += e;
            let i = "";
            i = this.lastNum < 10 ? "+ " + this.lastNum.toFixed(0) + "$" : "+" + this.lastNum.toFixed(0) + "$",
                this.lastUp ? (this.changeText(this.lastUp, i, "#006802"), Laya.Tween.clearAll(this.lastUp.transform),
                    this.lastUp.transform.localPosition = new Laya.Vector3(-.8, 1, 0), this.lastUp.transform.localScale = new Laya.Vector3(.5, .3, 1),
                    Laya.Tween.to(this.lastUp.transform, {
                        localScaleX: .7,
                        localScaleY: .7
                    }, 120, null, Laya.Handler.create(this, () => {
                        Laya.Tween.to(this.lastUp.transform, {
                            localScaleX: .5,
                            localScaleY: .5
                        }, 100, null, Laya.Handler.create(this, () => { }));
                    })), Laya.Tween.to(this.lastUp.transform, {
                        localPositionY: 1.8
                    }, 750, null, Laya.Handler.create(this, () => {
                        Laya.Tween.clearAll(this.lastUp.transform), this.lastUp.removeSelf(), this.lastUp.destroy(),
                            this.lastUp = null, this.lastNum = 0;
                    }))) : (this.lastUp = this.createText(i, "#006802"), t.addChild(this.lastUp), this.lastUp.transform.localRotationEulerX = 20,
                        this.showUp(0, t));
        }
        showDown(e, t) {
            this.lastDNum += e;
            let i = "";
            i = (this.lastDNum, this.lastDNum.toFixed(0) + "$"), this.lastDown ? (this.changeText(this.lastDown, i, "#98000A"),
                Laya.Tween.clearAll(this.lastDown.transform), this.lastDown.transform.localPosition = new Laya.Vector3(.8, 1, 0),
                this.lastDown.transform.localScale = new Laya.Vector3(.5, .5, 1), Laya.Tween.to(this.lastDown.transform, {
                    localScaleX: .7,
                    localScaleY: .7
                }, 120, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(this.lastDown.transform, {
                        localScaleX: .5,
                        localScaleY: .5
                    }, 100, null, Laya.Handler.create(this, () => { }));
                })), Laya.Tween.to(this.lastDown.transform, {
                    localPositionY: .2
                }, 750, null, Laya.Handler.create(this, () => {
                    Laya.Tween.clearAll(this.lastDown.transform), this.lastDown.removeSelf(), this.lastDown.destroy(),
                        this.lastDown = null, this.lastDNum = 0;
                }))) : (this.lastDown = this.createText(i, "#98000A"), t.addChild(this.lastDown),
                    this.lastDown.transform.localRotationEulerX = 20, this.showDown(0, t));
        }
        createText(e = "", t = "#fff") {
            let i = new Laya.Sprite3D("textNode"), s = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(2, 2), "textMesh");
            return i.addChild(s), i.transform.localScale = new Laya.Vector3(.7, .7, .7), i.transform.localPosition = new Laya.Vector3(0, 0, 0),
                s.transform.localRotationEuler = new Laya.Vector3(90, 180, 0), this.changeText(i, e, t),
                i;
        }
        changeText(e, t, i = "#fff") {
            if (e) {
                let s = e.getChildAt(0), a = Laya.Browser.createElement("canvas"), n = a.getContext("2d");
                a.width = 128, a.height = 128, n.fillStyle = i, n.font = "bold 40px " + this.fontName,
                    n.textAlign = "center", n.textBaseline = "middle", n.fillText(t, 64, 64, 128), n.lineWidth = .4,
                    n.strokeStyle = "#fff", n.strokeText(t, 64, 64, 128);
                let o = new Laya.Texture2D(128, 128);
                o.loadImageSource(a), n.clearRect(0, 0, 128, 128), Laya.Browser.removeElement(a);
                let r = s.meshRenderer.sharedMaterial;
                if (r) {
                    r.albedoTexture.destroy(), r.albedoTexture = o;
                } else {
                    let e;
                    (e = new Laya.UnlitMaterial()).renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
                        e.albedoTexture = o, s.meshRenderer.sharedMaterial = e;
                }
                s.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE;
            } else;
        }
        addEventListener() { }
        removeEventListener() { }
    }
    class K extends k {
        constructor() {
            super(), this.$health = 40, this.statusIndex = 0, this.roadIndex = 0, this.isHide = !1,
                this.oldLevel = -1, this.startHealth = 29, this.playerSpeed = .07, this.playerRotTime = 1200,
                this.isTurn = 0;
        }
        get health() {
            return this.$health;
        }
        set health(t) {
            t > 120 && (t = 120), this.$health = t;
            let i = (120 - this.$health) / 120;
            this.healthMat.tilingOffsetZ = -Number(i.toFixed(2)), this.healthbar.transform.localPositionX = Number(i.toFixed(2)),
                this.health < 0 ? (this.statusIndex = 9, this.changeAni(), Laya.timer.clearAll(this),
                    J.instance.gameOver(), e.event(a.GAMELOSE), this.bar.active = !1, this.typeobj.active = !1) : this.changeSkin();
        }
        get level() {
            return this.health < 30 ? 0 : this.health >= 30 && this.health < 60 ? 1 : this.health >= 60 && this.health < 80 ? 2 : this.health >= 80 && this.health < 120 ? 3 : this.health >= 120 ? 4 : void 0;
        }
        awake() {
            this.HOBO = this.getNodeByName("HOBO"), this.POOR = this.getNodeByName("POOR"),
                this.DECENT = this.getNodeByName("DECENT"), this.RICH = this.getNodeByName("RICH"),
                this.MILLIONAIRE = this.getNodeByName("MILLIONAIRE"), this.playerRot = this.obj.getChildAt(0),
                this.playerAni = this.playerRot.getComponent(Laya.Animator), this.playerRig = this.playerRot.getComponent(Laya.Rigidbody3D),
                this.playerRotRot = this.playerRot.getChildAt(0), this.bar = this.getNodeByName("bar"),
                this.healthbar = this.getNodeByName("healthbar"), this.typeobj = this.getNodeByName("typeobj"),
                this.healthMat = this.healthbar.meshRenderer.sharedMaterial, this.playerRot.addComponent(D).init(this, this.onTriggerEnter, null, null, this.onCollisionEnter),
                this.numPool = this.getNodeByName("numPool");
        }
        onReset() {
            this.localRotationEulerY = 0, this.position = new Laya.Vector3(0, 0, 8), this.oldLevel = -1,
                -1 != i.linStartGold ? (this.health = i.linStartGold, i.linStartGold = -1) : this.health = this.startHealth + i.startNum,
                this.statusIndex = 0, this.changeAni(), this.playerRot.transform.localPosition = new Laya.Vector3(0, 0, 0),
                this.bar.active = !0, this.typeobj.active = !0, this.playerRotRot.transform.localRotationEulerY = 0;
        }
        changeSkin() {
            if (this.level != this.oldLevel) {
                this.level > this.oldLevel && i.isGameStart && x.instance.angry(), this.level > this.oldLevel ? 1 == this.statusIndex && (this.statusIndex = 2,
                    this.changeAni(), Laya.timer.once(450, this, () => {
                        this.statusIndex = 1, this.changeAni();
                    })) : this.level < this.oldLevel && 1 == this.statusIndex && (this.statusIndex = 3,
                        this.changeAni(), Laya.timer.once(450, this, () => {
                            this.statusIndex = 1, this.changeAni();
                        }));
                for (let e = 0; e < this.typeobj.numChildren; e++) this.typeobj.getChildAt(e).active = !1,
                    e == this.level && (this.typeobj.getChildAt(e).active = !0);
                switch (this.oldLevel = this.level, this.level) {
                    case 0:
                        this.HOBO.active = !0, this.POOR.active = !1, this.DECENT.active = !1, this.RICH.active = !1,
                            this.MILLIONAIRE.active = !1, this.healthMat.albedoColor = new Laya.Vector4(45 / 255, 224 / 255, 187 / 255, 1);
                        break;

                    case 1:
                        this.HOBO.active = !1, this.POOR.active = !0, this.DECENT.active = !1, this.RICH.active = !1,
                            this.MILLIONAIRE.active = !1, this.healthMat.albedoColor = new Laya.Vector4(89 / 255, 194 / 255, 7 / 255, 1);
                        break;

                    case 2:
                        this.HOBO.active = !1, this.POOR.active = !1, this.DECENT.active = !0, this.RICH.active = !1,
                            this.MILLIONAIRE.active = !1, this.healthMat.albedoColor = new Laya.Vector4(1, 221 / 255, 27 / 255, 1);
                        break;

                    case 3:
                        this.HOBO.active = !1, this.POOR.active = !1, this.DECENT.active = !1, this.RICH.active = !0,
                            this.MILLIONAIRE.active = !1, this.healthMat.albedoColor = new Laya.Vector4(254 / 255, 91 / 255, 0, 1);
                        break;

                    case 4:
                        this.HOBO.active = !1, this.POOR.active = !1, this.DECENT.active = !1, this.RICH.active = !1,
                            this.MILLIONAIRE.active = !0, this.healthMat.albedoColor = new Laya.Vector4(253 / 255, 0, 0, 1);
                }
            }
        }
        changeAni() {
            switch (this.statusIndex) {
                case 0:
                    this.playerAni.play(p.Armatureidle_wait), this.playerAni.getControllerLayer(0).getAnimatorState(p.Armatureidle_wait).clip.islooping = !0;
                    break;

                case 1:
                    this.health < 25 ? (this.playerAni.crossFade(p.Armaturewalk_poor_pity, .1),
                        this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_poor_pity).clip.islooping = !0,
                        this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_poor_pity).speed = 1.2) : this.health >= 25 && this.health < 60 ? (this.playerAni.crossFade(p.Armaturewalk_poor, .1),
                            this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_poor).clip.islooping = !0,
                            this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_poor).speed = 1.2) : this.health >= 60 && this.health < 80 ? (this.playerAni.crossFade(p.Armaturewalk_normal_0, .1),
                                this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_normal_0).clip.islooping = !0,
                                this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_normal_0).speed = 1.2) : this.health >= 80 && this.health < 120 ? (this.playerAni.crossFade(p.Armaturewalk_rich, .1),
                                    this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_rich).clip.islooping = !0,
                                    this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_rich).speed = 1.2) : this.health >= 120 && (this.playerAni.crossFade(p.Armaturewalk_richbling, .1),
                                        this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_richbling).clip.islooping = !0,
                                        this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturewalk_richbling).speed = 1.2);
                    break;

                case 2:
                    this.playerAni.crossFade(p.ArmatureRich_Transition, .1), this.playerAni.getControllerLayer(0).getAnimatorState(p.ArmatureRich_Transition).clip.islooping = !1;
                    break;

                case 3:
                    this.playerAni.crossFade(p.ArmaturePoor_Transition, .1), this.playerAni.getControllerLayer(0).getAnimatorState(p.ArmaturePoor_Transition).clip.islooping = !1;
                    break;

                case 4:
                    this.playerAni.crossFade(p.ArmatureVictory_Long, .1), this.playerAni.getControllerLayer(0).getAnimatorState(p.ArmatureVictory_Long).clip.islooping = !1;
                    break;

                case 5:
                    this.playerAni.crossFade(p.ArmatureDefeat_Level, .1), this.playerAni.getControllerLayer(0).getAnimatorState(p.ArmatureDefeat_Level).clip.islooping = !1;
                    break;

                case 6:
                    this.playerAni.crossFade(p.ArmatureReaction, .1), this.playerAni.getControllerLayer(0).getAnimatorState(p.ArmatureReaction).clip.islooping = !1;
                    break;

                case 7:
                    this.playerAni.play(p.Armaturedance_hiphop_turn), this.playerAni.getControllerLayer(0).getAnimatorState(p.Armaturedance_hiphop_turn).clip.islooping = !0;
                    break;

                case 8:
                    break;

                case 9:
                    this.playerAni.crossFade(p.ArmatureDefeat_Level, .1), this.playerAni.getControllerLayer(0).getAnimatorState(p.ArmatureDefeat_Level).clip.islooping = !0;
            }
        }
        start() {
            0 == this.statusIndex && (this.statusIndex = 1, this.changeAni());
        }
        update(e) {
            if (i.isGameStart && !this.isHide && (this.playerRig.isSleeping && this.playerRig.wakeUp(),
                1 == this.statusIndex || 2 == this.statusIndex || 3 == this.statusIndex)) {
                let t = this.playerSpeed * e / 16;
                this.localPositionZ += t * Math.cos(this.localRotationEulerY / 180 * Math.PI) * i.isSlow * 1.2,
                    this.localPositionX += t * Math.sin(this.localRotationEulerY / 180 * Math.PI) * i.isSlow * 1.2;
                let s = H.instance.isInside2(this.playerRot.transform.position.clone(), this.localRotationEulerY);
                0 != s && (0 == this.localRotationEulerY ? this.playerRot.transform.localPositionX += s - this.playerRot.transform.position.clone().x : this.playerRot.transform.localPositionX += s - this.playerRot.transform.position.clone().z),
                    0 != this.playerRotRot.transform.localRotationEulerY && (this.playerRotRot.transform.localRotationEulerY > 0 ? this.playerRotRot.transform.localRotationEulerY -= .5 : this.playerRotRot.transform.localRotationEulerY += .5,
                        Math.abs(this.playerRotRot.transform.localRotationEulerY) < 1 && (this.playerRotRot.transform.localRotationEulerY = 0));
            }
        }
        movePlayer(e, t) {
            if (i.isGameStart) {
                let t = this.playerRot.transform.localPosition.clone().x - e / 200 * 2.6;
                t > 2.6 && (t = 2.6), t < -2.6 && (t = -2.6), this.playerRot.transform.localPositionX = t;
                let i = this.playerRotRot.transform.localRotationEulerY;
                (i -= e / 330 * 45) > 45 && (i = 45), i < -45 && (i = -45), this.playerRotRot.transform.localRotationEulerY = i;
            }
        }
        stopMove() {
            i.isGameStart;
        }
        addEventListener() {
            e.on(a.STARTCHANGE, this, this.changeStartNum), e.on(a.LINSTARTCHANGE, this, this.changeStartNum),
                e.on(a.ONHIDE, this, this.onHide), e.on(a.ONSHOW, this, this.onShow);
        }
        removeEventListener() {
            e.off(a.STARTCHANGE, this, this.changeStartNum), e.off(a.LINSTARTCHANGE, this, this.changeStartNum),
                e.on(a.ONHIDE, this, this.onHide), e.on(a.ONSHOW, this, this.onShow);
        }
        onHide() {
            this.isHide = !0, console.log(this.isHide + "this.isHide");
        }
        onShow() {
            this.isHide = !1, console.log(this.isHide + "this.isHide");
        }
        changeStartNum() {
            -1 != i.linStartGold ? (this.health = i.linStartGold, i.linStartGold = -1) : this.health = this.startHealth + i.startNum;
        }
        onTriggerEnter(t) {
            let s = t.owner, n = s.name;
            if (-1 != n.indexOf("TurnLeft")) {
                if (1 == this.statusIndex || 2 == this.statusIndex || 3 == this.statusIndex) {
                    this.statusIndex = 8;
                    let e = s.parent.getChildByName("EndPoint").transform.position.clone(), t = this.localRotationEulerY + 90;
                    Laya.Tween.to(this.transform, {
                        localRotationEulerY: t,
                        localPositionX: e.x,
                        localPositionZ: e.z
                    }, this.playerRotTime, null, Laya.Handler.create(this, () => {
                        this.statusIndex = 1;
                    }));
                }
            } else if (-1 != n.indexOf("TurnRight")) {
                if (1 == this.statusIndex || 2 == this.statusIndex || 3 == this.statusIndex) {
                    this.statusIndex = 8;
                    let e = s.parent.getChildByName("EndPoint").transform.position.clone(), t = this.localRotationEulerY - 90;
                    Laya.Tween.to(this.transform, {
                        localRotationEulerY: t,
                        localPositionX: e.x,
                        localPositionZ: e.z
                    }, this.playerRotTime, null, Laya.Handler.create(this, () => {
                        this.statusIndex = 1;
                    }));
                }
            } else -1 != n.indexOf("FinishTrigger") ? (
                this.health < 60 ? (this.statusIndex = 9, this.changeAni(), Laya.timer.clearAll(this),
                    J.instance.gameOver(), e.event(a.GAMELOSE), this.bar.active = !1, this.typeobj.active = !1) :
                    this.statusIndex = 7, this.changeAni(),
                J.instance.gameOver(), e.event(a.GAMEWIN), this.bar.active = !1, this.typeobj.active = !1)
                : -1 != n.indexOf("itemrich") ? (this.health += 1 * (1 + i.addNum / 10),
                    i.getGold += 1 * (1 + i.addNum / 10), Y.instance.showUp(1 * (1 + i.addNum / 10), this.numPool),
                    P.instance.vibrateShort(), F.instance.createEffect(T.GETMONEY, B.effRES[0], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500),
                    x.instance.sound_cashpickup3()) : -1 != n.indexOf("itempoor") ? (this.health -= 20 - i.lowNum,
                        i.getGold -= 20 - i.lowNum, Y.instance.showDown(-(20 - i.lowNum), this.numPool),
                        P.instance.vibrateShort(), F.instance.createEffect(T.LOSETMONEY, B.effRES[1], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500),
                        x.instance.Wrong()) : -1 != n.indexOf("GoodDoor") ? (this.health += 20, i.getGold += 20,
                            Y.instance.showUp(20, this.numPool), P.instance.vibrateShort(), F.instance.createEffect(T.GETMONEY, B.effRES[0], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500)) : -1 != n.indexOf("BadDoor") && (this.health -= 20,
                                i.getGold -= 20, x.instance.Wrong(), Y.instance.showDown(-20, this.numPool), P.instance.vibrateShort(),
                                F.instance.createEffect(T.LOSETMONEY, B.effRES[1], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500));
        }
        pickUp() {
            this.health >= 25 && (this.statusIndex = -1, this.health -= 15, x.instance.Wrong(),
                i.getGold -= 15, Y.instance.showDown(-15, this.numPool), -1 == this.statusIndex && (this.statusIndex = 6,
                    this.changeAni(), P.instance.vibrateShort(), F.instance.createEffect(T.LOSETMONEY, B.effRES[1], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500),
                    Laya.timer.once(700, this, () => {
                        this.statusIndex = 1, this.changeAni();
                    })));
        }
        gambling(e) {
            this.statusIndex = -1, e > 0 ? Y.instance.showUp(e, this.numPool) : (Y.instance.showDown(e, this.numPool),
                x.instance.Wrong()), this.health += e, i.getGold += e, -1 == this.statusIndex && (e > 0 ? (this.statusIndex = 4,
                    this.changeAni(), P.instance.vibrateShort(), F.instance.createEffect(T.GETMONEY, B.effRES[0], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500),
                    Laya.timer.once(700, this, () => {
                        this.statusIndex = 1, this.changeAni();
                    })) : (P.instance.vibrateShort(), F.instance.createEffect(T.LOSETMONEY, B.effRES[1], new Laya.Vector3(this.playerRot.transform.position.x, 2, this.playerRot.transform.position.z), 500),
                        this.statusIndex = 5, this.changeAni(), Laya.timer.once(700, this, () => {
                            this.statusIndex = 1, this.changeAni();
                        })));
        }
        onTriggerExit(e) { }
        onCollisionEnter(e) {
            console.log(e.other.owner.name);
        }
        onCollisionExit(e) { }
        clearOthers() { }
    }
    class X extends M {
        constructor() {
            super(...arguments), this.oldHealth = 0;
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new X();
        }
        init() {
            let e = I.instance.getRes(B.player);
            this.objPrefab = e, this.objName = T.PLAYER, this.objPool = new Laya.Sprite3D(),
                this.playerItem = this.objPrefab.addComponent(K), this.objPool.addChild(this.objPrefab),
                G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            this.objData = e, this.playerItem.position = new Laya.Vector3(0, 1.3, 0), this.playerItem && this.playerItem.onReset();
        }
        getPlayerPos() {
            return this.playerItem ? this.playerItem.position : null;
        }
        playerShowNew() {
            this.playerItem && (this.oldHealth = this.playerItem.health, this.playerItem.health = 80);
        }
        playerTry() {
            this.playerItem && (this.playerItem.health = this.oldHealth);
        }
        reAni() {
            this.playerItem && (this.playerItem.statusIndex = 1, this.playerItem.changeAni());
        }
        playerObj() {
            return this.playerItem ? this.playerItem.obj : null;
        }
        playerRot() {
            return this.playerItem ? this.playerItem.playerRot : null;
        }
        playerHealth() {
            return this.playerItem ? this.playerItem.health : 0;
        }
        pickUp() {
            this.playerItem && this.playerItem.pickUp();
        }
        gambling(e) {
            this.playerItem && this.playerItem.gambling(e);
        }
        ready() { }
        movePlayer(e, t) {
            this.playerItem && this.playerItem.movePlayer(e, t);
        }
        stopMove() {
            this.playerItem && this.playerItem.stopMove();
        }
        start() {
            this.playerItem && this.playerItem.start();
        }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class z extends k {
        constructor() {
            super(), this.pointIndex = 0, this.statusIndex = 0;
        }
        awake() { }
        init() {
            this.animator = this.obj.getComponent(Laya.Animator), this.wayPointList && this.wayPointList.length ? (this.statusIndex = 1,
                this.changeAni(), this.pointIndex = 0, this.moveAI()) : (this.statusIndex = 0, this.changeAni());
        }
        moveAI() {
            this.pointIndex++, this.pointIndex == this.wayPointList.length && (this.pointIndex = 0);
            let e = this.wayPointList[this.pointIndex];
            e.x > this.localPositionX ? this.localRotationEulerY = 90 : this.localRotationEulerY = -90,
                Laya.Tween.to(this.transform, {
                    localPositionX: e.x,
                    localPositionY: e.y,
                    localPositionZ: e.z
                }, 2e3, null, Laya.Handler.create(this, () => {
                    this.moveAI();
                }));
        }
        changeAni() {
            switch (this.statusIndex) {
                case 0:
                    this.animator.play(v.ArmatureIdle), this.animator.getControllerLayer(0).getAnimatorState(v.ArmatureIdle).clip.islooping = !0;
                    break;

                case 1:
                    this.animator.play(v.Armaturewalk_normal), this.animator.getControllerLayer(0).getAnimatorState(v.Armaturewalk_normal).clip.islooping = !0;
                    break;

                case 2:
                    this.animator.play(v.ArmaturePickUp), this.animator.getControllerLayer(0).getAnimatorState(v.ArmaturePickUp).clip.islooping = !0;
                    break;

                case 3:
                    this.animator.play(v.ArmatureIdle), this.animator.getControllerLayer(0).getAnimatorState(v.ArmatureIdle).clip.islooping = !0;
            }
        }
        onReset() {
            this.wayPointList = null;
        }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) {
            -1 != e.owner.name.indexOf("Player") && (0 != this.statusIndex && 1 != this.statusIndex || (X.instance.playerHealth() >= 25 && (X.instance.pickUp(),
                this.statusIndex = 2, this.changeAni(), Laya.timer.once(900, this, () => {
                    this.statusIndex = 3, this.changeAni();
                })), Laya.Tween.clearAll(this.transform)));
        }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() {
            Laya.Tween.clearAll(this.transform);
        }
    }
    class Q extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new Q();
        }
        init() {
            this.objPrefab = I.instance.getRes(B.AI), this.objName = T.AI, this.objPool = new Laya.Sprite3D(),
                G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            if (this.objData = e, this.objData && this.objData.length) for (let e = 0; e < this.objData.length; e++) {
                let t = this.objData[e], i = this.createObj();
                U.instance.groundPoolList[t.index].addChild(i), i.transform.localPosition = new Laya.Vector3(t.data.x, t.data.y, t.data.z),
                    i.transform.localRotation = new Laya.Quaternion(t.data.rotX, t.data.rotY, t.data.rotZ, t.data.rotW);
                let s = i.addComponent(z);
                if (this.objscriptList.push(s), -1 != t.data.name.indexOf("AImove")) {
                    let e = [];
                    for (let i = 0; i < t.data.children.length; i++) {
                        let s = t.data.children[i];
                        -1 != s.name.indexOf("point") && e.push(new Laya.Vector3(s.x, s.y, s.z));
                    }
                    s.wayPointList = e, s.init();
                } else s.wayPointList = null, s.init();
            }
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class $ extends k {
        constructor() {
            super();
        }
        awake() {
            this.VisualPoor = this.getNodeByName("VisualPoor");
            let e = Math.floor(Math.random() * this.VisualPoor.numChildren);
            for (let t = 0; t < this.VisualPoor.numChildren; t++) this.VisualPoor.getChildAt(t).active = t == e;
        }
        onReset() { }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) {
            this.clearObj();
        }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() { }
    }
    class q extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new q();
        }
        init() {
            let e = I.instance.getRes(B.Item_Poor);
            this.objPrefab = e, this.objName = T.ITEMPOOR, this.objPool = new Laya.Sprite3D(),
                G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            if (this.objData = e, this.objData && this.objData.length) for (let e = 0; e < this.objData.length; e++) {
                let t = this.objData[e], i = this.createObj();
                U.instance.groundPoolList[t.index].addChild(i), i.transform.localPosition = new Laya.Vector3(t.data.x, t.data.y, t.data.z),
                    i.transform.localRotation = new Laya.Quaternion(t.data.rotX, t.data.rotY, t.data.rotZ, t.data.rotW);
                let s = i.addComponent($);
                this.objscriptList.push(s);
            }
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class Z extends k {
        constructor() {
            super();
        }
        awake() { }
        onReset() { }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) {
            this.clearObj();
        }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() { }
    }
    class ee extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new ee();
        }
        init() {
            let e = I.instance.getRes(B.Item_Rich);
            this.objPrefab = e, this.objName = T.ITEMRICH, this.objPool = new Laya.Sprite3D(),
                G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            if (this.objData = e, this.objData && this.objData.length) for (let e = 0; e < this.objData.length; e++) {
                let t = this.objData[e], i = this.createObj();
                U.instance.groundPoolList[t.index].addChild(i), i.transform.localPosition = new Laya.Vector3(t.data.x, t.data.y, t.data.z),
                    i.transform.localRotation = new Laya.Quaternion(t.data.rotX, t.data.rotY, t.data.rotZ, t.data.rotW);
                let s = i.addComponent(Z);
                this.objscriptList.push(s);
            }
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class te extends k {
        constructor() {
            super(), this.goodList = ["学习", "上学", "工作", "存钱", "抖音", "领英"], this.badList = ["打游戏", "轰趴", "看电视", "度假", "脸书", "脸书"];
        }
        awake() {
            this.BadDoor = this.getNodeByName("BadDoor"), this.GoodDoor = this.getNodeByName("GoodDoor"),
                this.beHit1 = this.BadDoor.addComponent(D), this.beHit2 = this.GoodDoor.addComponent(D),
                this.beHit1.init(this, this.onTriggerEnter), this.beHit2.init(this, this.onTriggerEnter),
                Math.random() > .5 ? (this.BadDoor.transform.localPositionX = 1.5, this.GoodDoor.transform.localPositionX = -1.5) : (this.BadDoor.transform.localPositionX = -1.5,
                    this.GoodDoor.transform.localPositionX = 1.5), this.goodDoorItem = this.GoodDoor.getChildAt(1),
                this.badBaseItem = this.BadDoor.getChildAt(1), this.GoodName = this.getNodeByName("GoodName"),
                this.BadName = this.getNodeByName("BadName");
            let e = Math.floor(Math.random() * this.goodDoorItem.numChildren);
            for (let t = 0; t < this.goodDoorItem.numChildren; t++) t == e ? (this.goodDoorItem.getChildAt(t).active = !0,
                this.badBaseItem.getChildAt(t).active = !0, this.GoodName.getChildAt(t).active = !0,
                this.BadName.getChildAt(t).active = !0) : (this.goodDoorItem.getChildAt(t).active = !1,
                    this.badBaseItem.getChildAt(t).active = !1, this.GoodName.getChildAt(t).active = !1,
                    this.BadName.getChildAt(t).active = !1);
        }
        createText(e = "", t = "#fff") {
            let i = new Laya.Sprite3D("textNode"), s = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane(2, 2), "textMesh");
            return i.addChild(s), i.transform.localScale = new Laya.Vector3(.7, .7, .7), i.transform.localPosition = new Laya.Vector3(0, 0, 0),
                s.transform.localRotationEuler = new Laya.Vector3(90, 180, 0), this.changeText(i, e, t),
                i;
        }
        changeText(e, t, i = "#fff") {
            if (e) {
                let s = e.getChildAt(0), a = Laya.Browser.createElement("canvas"), n = a.getContext("2d");
                a.width = 64, a.height = 64, n.fillStyle = i, n.font = "bold 40px 宋体", n.textAlign = "center",
                    n.textBaseline = "middle", n.fillText(t, 32, 32, 64), n.lineWidth = .1, n.strokeText(t, 32, 32, 64);
                let o = new Laya.Texture2D(64, 64);
                o.loadImageSource(a), n.clearRect(0, 0, 64, 64), Laya.Browser.removeElement(a);
                let r = s.meshRenderer.sharedMaterial;
                if (r) {
                    r.albedoTexture.destroy(), r.albedoTexture = o;
                } else {
                    let e;
                    (e = new Laya.UnlitMaterial()).renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT,
                        e.albedoTexture = o, s.meshRenderer.sharedMaterial = e;
                }
                s.meshRenderer.sharedMaterial.cull = Laya.RenderState.CULL_NONE;
            } else;
        }
        onReset() { }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        onTriggerEnter(e) {
            this.clearObj();
        }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() {
            this.beHit1 && this.beHit1.destroy(), this.beHit2 && this.beHit2.destroy();
        }
    }
    class ie extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new ie();
        }
        init() {
            this.objPrefab = I.instance.getRes(B.MakeChoiceDoor), this.objName = T.MAKECHOICEDOOR,
                this.objPool = new Laya.Sprite3D(), G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            if (this.objData = e, this.objData && this.objData.length) for (let e = 0; e < this.objData.length; e++) {
                let t = this.objData[e], i = this.createObj();
                U.instance.groundPoolList[t.index].addChild(i), i.transform.localPosition = new Laya.Vector3(t.data.x, t.data.y, t.data.z),
                    i.transform.localRotation = new Laya.Quaternion(t.data.rotX, t.data.rotY, t.data.rotZ, t.data.rotW);
                let s = i.addComponent(te);
                this.objscriptList.push(s);
            }
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class se extends k {
        constructor() {
            super();
        }
        awake() {
            this.WinFX = this.getNodeByName("WinFX"), this.LoseFX = this.getNodeByName("LoseFX"),
                this.WinFX.active = !1, this.LoseFX.active = !1;
        }
        onReset() { }
        start() { }
        update(e) { }
        addEventListener() { }
        removeEventListener() { }
        beHit() {
            if (Math.random() > .45) {
                X.instance.playerHealth();
                let e = Math.floor(20 * Math.random()) + 10;
                X.instance.gambling(e), this.WinFX.active = !0, Laya.timer.once(500, this, () => {
                    this.clearObj();
                });
            } else {
                X.instance.playerHealth();
                let e = -(Math.floor(20 * Math.random()) + 10);
                X.instance.gambling(e), this.LoseFX.active = !0, Laya.timer.once(500, this, () => {
                    this.clearObj();
                });
            }
        }
        onTriggerEnter(e) {
            this.beHit();
        }
        onTriggerExit(e) { }
        onCollisionEnter(e) { }
        onCollisionExit(e) { }
        clearOthers() { }
    }
    class ae extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new ae();
        }
        init() {
            this.objPrefab = I.instance.getRes(B.SlotMachine), this.objName = T.SLOTMACHINE,
                this.objPool = new Laya.Sprite3D(), G.instance.scene3d.addChild(this.objPool);
        }
        load(e = null) {
            if (this.objData = e, this.objData = e, this.objData && this.objData.length) for (let e = 0; e < this.objData.length; e++) {
                let t = this.objData[e], i = this.createObj();
                U.instance.groundPoolList[t.index].addChild(i), i.transform.localPosition = new Laya.Vector3(t.data.x, t.data.y, t.data.z),
                    i.transform.localRotation = new Laya.Quaternion(t.data.rotX, t.data.rotY, t.data.rotZ, t.data.rotW);
                let s = i.addComponent(se);
                this.objscriptList.push(s);
            }
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class ne {
        static get instance() {
            return this._instance ? this._instance : this._instance = new ne();
        }
        load() {
            let e = this;
            if (this._levelData) {
                m.instance.shuffle(this._levelData);
                let e = [], t = [], i = [], s = [], a = [], n = [];
                for (let o = 0; o < 10; o++) {
                    let r = this._levelData[o].children;
                    for (let l = 0; l < r.length; l++) {
                        let h = r[l].name, c = {
                            index: o,
                            data: r[l]
                        };
                        -1 != h.indexOf("Item_Rich") ? e.push(c) : -1 != h.indexOf("Item_Poor") ? t.push(c) : -1 != h.indexOf("AI") ? s.push(c) : -1 != h.indexOf("MakeChoiceDoor") ? a.push(c) : -1 != h.indexOf("Bar") ? n.push(c) : -1 != h.indexOf("SlotMachine") ? i.push(c) : -1 != h.indexOf("Continue_Item_Poor") || -1 != h.indexOf("Continue_Item_Poor") || console.log("遗漏" + h);
                    }
                }
                ee.instance.load(e), q.instance.load(t), ae.instance.load(i), ie.instance.load(a),
                    H.instance.load(n), Q.instance.load(s);
            } else I.instance.load(B.levelRES, Laya.Handler.create(this, t => {
                e._levelData = Array();
                for (let e = 0; e < t.length; e++) {
                    let i = t[e], s = JSON.parse(i);
                    if ("Item20" == s.levelName) for (let e = 0; e < 8; e++) this._levelData.push(s);
                    this._levelData.push(s);
                }
                e.load();
            }));
        }
    }
    var oe = Laya.Shader3D, re = Laya.SubShader;
    class le extends Laya.Material {
        constructor() {
            super(), this.MAIN_TEX = oe.propertyNameToID("u_MainTex"), this.NOISE_TEX = oe.propertyNameToID("u_NoiseTex"),
                this.setShaderName("Water");
        }
        static initShader() {
            var e = {
                a_Position: Laya.VertexMesh.MESH_POSITION0,
                a_Normal: Laya.VertexMesh.MESH_NORMAL0,
                a_Textcoord: Laya.VertexMesh.MESH_TEXTURECOORDINATE0
            }, t = {
                u_WorldMat: oe.PERIOD_SPRITE,
                u_MvpMatrix: oe.PERIOD_SPRITE,
                u_MainTex: oe.PERIOD_MATERIAL,
                u_NoiseTex: oe.PERIOD_MATERIAL,
                u_Time: oe.PERIOD_SCENE
            }, i = oe.add("Water", null, null, !0), s = new re(e, t);
            i.addSubShader(s), s.addShaderPass('\n        #include "Lighting.glsl";\n        \n        attribute vec4 a_Position;\n        attribute vec2 a_Textcoord;\n        uniform mat4 u_WorldMat;\n        uniform mat4 u_MvpMatrix;\n        \n        varying vec2 v_textcoord;\n        \n        void main()\n        {\n            v_textcoord = a_Textcoord;\n            gl_Position = u_MvpMatrix * a_Position;\n            gl_Position = remapGLPositionZ(gl_Position);\n        }', '\n        #ifdef HIGHPRECISION\n        precision highp float;\n        #else\n        precision mediump float;\n        #endif\n\n        #include "Lighting.glsl";\n        \n        uniform sampler2D u_MainTex;\n        uniform sampler2D u_NoiseTex;\n        uniform float u_Time;\n\n        varying vec2 v_textcoord;\n        void main()\n        {\n            float _NoiseSpeedX = 0.075;\n            float _NoiseSpeedY = 0.075;\n            float _NoiseScaleX = 0.75;\n            float _NoiseScaleY = 0.75;\n            float _NoiseBrightOffset = 0.75;\n\n            vec2 tuv1 = v_textcoord + vec2(u_Time * _NoiseSpeedX,0);\n            vec2 tuv2 = v_textcoord + vec2(0,u_Time * _NoiseSpeedY);\n            vec2 ouvxy = vec2(texture2D(u_NoiseTex,tuv1).r,texture2D(u_NoiseTex,tuv2).r);\n            ouvxy -= _NoiseBrightOffset;\n            ouvxy *= vec2(_NoiseScaleX, _NoiseScaleY);\n\n            vec4 col = texture2D(u_MainTex,v_textcoord + ouvxy);\n            gl_FragColor = col;\n        }\n        ');
        }
        set mainTex(e) {
            this._shaderValues.setTexture(this.MAIN_TEX, e);
        }
        set noiseTex(e) {
            this._shaderValues.setTexture(this.NOISE_TEX, e);
        }
    }
    class he extends M {
        static get instance() {
            return this._instance ? this._instance : this._instance = new he();
        }
        init() {
            this.objPrefab = I.instance.getRes(B.water), this.objName = T.WATER, this.objPool = new Laya.Sprite3D(),
                G.instance.scene3d.addChild(this.objPool), this.objPool.addChild(this.objPrefab),
                this.objPrefab.transform.position = new Laya.Vector3(-22, 0, 62), le.initShader();
            for (let e = 0; e < this.objPrefab.numChildren; e++) {
                let t = this.objPrefab.getChildAt(e), i = new le();
                i.mainTex = Laya.loader.getRes("res3d/Assets/Texture2D/water.jpg"), i.noiseTex = Laya.loader.getRes("res3d/Assets/Texture2D/water.jpg"),
                    t.meshRenderer.material = i;
            }
        }
        load(e = null) {
            this.objData = e;
        }
        ready() { }
        start() { }
        clearOthers() { }
        addEventListener() { }
        removeEventListener() { }
    }
    class ce {
        constructor() {
            this.touchTime = 0, this.isShowSlow = !1, this._isOver = !1, this.isTouch = !1,
                this.offx = 0, this.offy = 0, this.nameList = new Array();
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new ce();
        }
        init() {
            G.instance.init();
            let e = B.unityRES;
            I.instance.create(e, Laya.Handler.create(this, e => {
                1 == e && (J.instance.init(), U.instance.init(), ee.instance.init(), q.instance.init(),
                    ae.instance.init(), Q.instance.init(), H.instance.init(), ie.instance.init(), he.instance.init(),
                    X.instance.init(), F.instance.createEffect(T.GETMONEY, B.effRES[0], new Laya.Vector3(0, 0, 0), 20),
                    F.instance.createEffect(T.LOSETMONEY, B.effRES[1], new Laya.Vector3(0, 0, 0), 20),
                    Laya.timer.frameLoop(1, this, () => {
                        this.update();
                    }), Y.instance.init(), this.sceneObjLoadFinish(), this.addEventListener());
                // platform.getInstance().hideSplash();
                // platform.getInstance().showBanner();
            }));
        }
        sceneObjLoadFinish() {
            this.clearGame();
        }
        clearGame() {
            ee.instance.clearScript(), q.instance.clearScript(), ae.instance.clearScript(),
                Q.instance.clearScript(), H.instance.clearScript(), ie.instance.clearScript(), this.load();
        }
        load() {
            i.colorType = Math.floor(5 * Math.random()), ne.instance.load(), X.instance.load(),
                this.reset();
        }
        reset() {
            this.checkFinish(), J.instance.reset(), X.instance.reset();
        }
        checkFinish() {
            i.isLoadFinish || (i.isLoadFinish = !0, e.event(a.LOADFINISH), Laya.timer.once(4e3, this, () => {
                Laya.Stat.FPS < 20 ? (i.isLow = !0, e.event(a.ISLOW)) : i.isLow = !1;
            }), g.islinshiWhite && Laya.Browser.onMiniGame || i.isLoadFinish && (console.log("-----------LoadingScene---------"),
                Laya.Scene.close(r.LoadingScene), Laya.Scene.open(r.MainScene, !1)));
        }
        readyGame() {
            e.event(a.GAMEREADY), J.instance.ready();
        }
        startGame() {
            this.isOver = !1, console.log(this.isOver + "this.isover"), this.isShowSlow = !1,
                i.isGameStart = !0, C.instance.startRecorder(), C.instance.hideBanner(), g.isNative ? Laya.Browser.onQGMiniGame ? (i.levelIndex - 1 - c.instance.startLevel) % (c.instance.spaceLevel + 1) == 0 && l.instance.openNativeBannerScene() : Laya.Browser.onVVMiniGame && l.instance.openNativeBannerScene() : (Laya.Browser.onQGMiniGame && (i.levelIndex - 1 - c.instance.startLevel) % (c.instance.spaceLevel + 1) == 0 && c.instance.showBanner(),
                    N.instance.showBanner(!0)), e.event(a.GAMESTART), g.islinshiWhite ? L.instance.showBanner(!0) : L.instance.hideBanner(),
                J.instance.start(), X.instance.start(), i.startTime = Date.parse(new Date().toString());
        }
        update() {
            let e = Laya.timer.delta;
            i.isGameStart && (this.isTouch ? this.touchTime = 0 : this.isShowSlow || (this.touchTime += e,
                this.touchTime > 900 && (this.isShowSlow = !0, this.touchTime = 0, Laya.Scene.open(r.SlowScene, !1),
                    i.isSlow = .1)));
        }
        get isOver() {
            return this._isOver;
        }
        set isOver(e) {
            this._isOver = e;
        }
        gameLose() {
            this.isOver ? console.log("再次进入游戏结束判定1") : (Laya.timer.clearAll(this), this.isOver = !0,
                i.isGameStart = !1, Laya.Scene.close(r.SlowScene), c.instance.hideBanner(), N.instance.hideBanner(),
                x.instance.loseVoice(), C.instance.showBanner(), l.instance.closeNativeBannerScene(),
                x.instance.stopBg(), C.instance.stopRecorder(), i.trySkinTimes > 0 && (i.trySkinTimes--,
                    0 == i.trySkinTimes && (i.trySkinIndex = -1)), Laya.timer.once(2600, this, () => {
                        e.event(a.GAMEOVER), "" != C.instance.videoPath ? Laya.Scene.open(r.ShareScene, !1, !1) : Laya.Scene.open(r.LoseTwiceScene, !1);
                    }));
        }
        gameWin() {
            this.isOver ? console.log("再次进入游戏结束判定2") : (this.isOver = !0, i.isGameStart = !1,
                Laya.Scene.close(r.SlowScene), Laya.timer.clearAll(this), N.instance.hideBanner(),
                c.instance.hideBanner(), x.instance.stopBg(), x.instance.winVoice(), C.instance.showBanner(),
                l.instance.closeNativeBannerScene(), C.instance.stopRecorder(), i.trySkinTimes > 0 && (i.trySkinTimes--,
                    0 == i.trySkinTimes && (i.trySkinIndex = -1)), Laya.timer.once(5e3, this, () => {
                        e.event(a.GAMEOVER), "" != C.instance.videoPath ? Laya.Scene.open(r.ShareScene, !1, !0) : Laya.Scene.open(r.WinScene, !1);
                    }));
        }
        addEventListener() {
            Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.startTouch),
                Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.mouseMove),
                Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stopTouch),
                Laya.stage.on(Laya.Event.MOUSE_OUT, this, this.stopTouch),
                e.on(a.RESETGAME, this, this.clearGame),
                e.on(a.GAMELOSE, this, this.gameLose), e.on(a.GAMEWIN, this, this.gameWin);
        }
        startTouch(e) {
            this.startX = e.stageX, this.startY = e.stageY, this.isTouch = !0, i.isSlow = 1;
        }
        mouseMove(e) {
            if (!this.isTouch) {
                return;
            }
            let t = e.stageX - this.startX, i = e.stageY - this.startY;
            this.startX = e.stageX, this.startY = e.stageY, X.instance.movePlayer(t, i);
        }
        stopTouch(e) {
            this.isTouch = !1, X.instance.stopMove();
        }
        ranName() {
            return this.nameList && this.nameList.length > 0 ? this.nameList[Math.floor(Math.random() * this.nameList.length)] : "";
        }
    }
    class de extends y.scene.LoadingSceneUI {
        constructor() {
            super(), this.times = 2, this.trueLoadFinish = !1, this.fadeLoadFinish = !1;
        }
        onEnable() {
            this.zOrder = 3500, this.y = i.statusBarHeight, g.islinshiWhite && Laya.Browser.onMiniGame ? (
                this._boxBlack.visible = !1,
                this._imgStart.visible = !1, this._spLoad2.visible = !0) : (this._boxBlack.visible = !0);
        }
        onOpened() {
            this.addEventListener(), S.instance.sendEvent(n.Load_start),
                this._txtVersion.visible = false,
                this._txtVersion.text = "",
                this._imgMask = this._imgLoading.mask,
                this._imgMask.x = -511,
                // platform.getInstance().showSplash();

            platform.getInstance().yadstartup("Run-Rich-3d", () => {
                // window.yad.on(Laya.Event.MOUSE_DOWN, window.yad, (e) => { e.stopPropagation(); platform.getInstance().navigate("GAME", "LOGO"); });
                window.WebAudioEngine.pause = Laya.LocalStorage.getItem("Run-Rich-3D-musicState") ? JSON.parse(Laya.LocalStorage.getItem("Run-Rich-3D-musicState")) : false;
                this.loadSubpackage();
            })
        }
        selectDown(e) {

        }
        loadAd(e) {

        }
        jumpRandon() {

        }
        startGame() {
            Laya.Scene.close(r.LoadingScene), Laya.Scene.open(r.MainScene, !1);
        }
        loadSubpackage() {
            let e = this;
            e._imgMask.x = 408.8 - 511, Laya.timer.once(200, e, () => {
                e.goMainScene();
            });

        }
        fadeLoad() {

        }
        goMainScene() {
            S.instance.sendEvent(n.load_finish), ce.instance.init()
        }
        addEventListener() {
            e.once(a.LOADFINISH, this, this.loadFinish);
        }
        loadFinish() {
            this.trueLoadFinish && g.islinshiWhite && Laya.Browser.onMiniGame && i.isLoadFinish && (this._spLoad2.visible = !1,
                this._imgStart.visible = !0, L.instance.showLoadedBanner(), Laya.timer.once(2e3, this, () => {
                    L.instance.destroyBanner();
                }));
        }
        onClosed() {
            i.isloadingScene = !1;
        }
    }
    class ge extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._imgTitleBg = this.getChildAt(0).getChildByName("_imgTitleBg"), this._imgTitleBg.skin = "img/connon/titleBg/titlebg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._txtTitle = e.getChildAt(0).getChildByName("_txtTitle"), e._imgIcon = e.getChildAt(0).getChildByName("_imgIcon"),
                    e._imgTitleBg = e.getChildAt(0).getChildByName("_imgTitleBg");
                let t = e.dataSource.show_config.image;
                e._txtTitle && (e._txtTitle.text = m.instance.shortText(e.dataSource.show_config.title),
                    t && (e._imgIcon.skin = t));
            }
        }
    }
    class ue extends Laya.VScrollBar {
        constructor() {
            super(), this.toValue = this.max;
        }
        onAwake() {
            this.value = 0, this.toValue = this.max, this.fatherObj = this.parent, this.fatherObj.on(Laya.Event.MOUSE_DOWN, this, this.stopChange),
                this.fatherObj.on(Laya.Event.MOUSE_OUT, this, this.stopChange), this.fatherObj.on(Laya.Event.MOUSE_UP, this, this.startChange),
                this.startChange();
        }
        startChange() {
            this.timer.clearAll(this), this.timer.once(600, this, () => {
                this.road();
            });
        }
        road() {
            let e = 20 * (0 == this.toValue ? this.value : this.toValue - this.value);
            Laya.Tween.to(this, {
                value: this.toValue
            }, e, null, Laya.Handler.create(this, () => {
                this.toValue = 0 == this.toValue ? this.max : 0, this.road();
            }));
        }
        stopChange() {
            Laya.Tween.clearAll(this);
        }
        onDisable() {
            this.fatherObj.off(Laya.Event.MOUSE_DOWN, this, this.stopChange), this.fatherObj.off(Laya.Event.MOUSE_OUT, this, this.stopChange),
                this.fatherObj.off(Laya.Event.MOUSE_UP, this, this.startChange);
        }
    }
    class me extends Laya.Script {
        constructor() {
            super(), this.dic = 2;
        }
        onStart() {
            this.changeView();
        }
        changeView() {
            let e = this.owner;
            this.def_x = e.x, this.def_y = e.y, this.byNoRainLand(), 0 == this.dic ? e.x = i.stage_width - (i.ore_width - this.def_x) : 1 == this.dic ? e.x = i.stage_width / 2 - (e.width / 2 - e.pivotX) : 2 == this.dic && (e.y = i.stage_height - (i.ore_height - this.def_y) - i.statusBarHeight);
        }
        byNoRainLand() {
            console.log();
        }
        onDestroy() { }
    }
    class Le extends y.scene.LoseSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this.reShowNative();
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), C.instance.showInterstitialAd(), l.instance.openLiugong(),
                this._fcpGold.value = m.instance.formatToUnitEN(i.gold), i.getGold = 0, S.instance.sendEvent(n.show_relive),
                L.instance.showBanner(!0), l.instance.closeBanner(), l.instance.openMoreNativeAdScene(),
                Laya.Browser.onVVMiniGame || l.instance.openNativeAdScene(), this.scene_Data ? this._txtIndex.text = "第" + this.scene_Data + "名" : this._txtIndex.text = "",
                this.isTouchAd = !1;
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.once(a.NATIVELOADFINISH, this, this.reShowNative);
        }
        reShowNative() {
            c.instance.canShow && null != c.instance.nativeAdData ? (this._imgCon.x = 83, this._imgMoreGame.visible = !0) : Laya.Browser.onVVMiniGame && null != N.instance.nativeAdData(2) ? (this._imgCon.x = 83,
                this._imgMoreGame.visible = !0) : (this._imgMoreGame.visible = !1, this._imgCon.x = 247);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            s == this._imgCon ? (i.isGameStart = !1, (c.instance.canShow || Laya.Browser.onVVMiniGame) && g.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                e.event(a.GETAPP)) : (e.event(a.RESETGAME), Laya.Scene.close(r.LoseTwiceScene), Laya.Scene.open(r.LoseTwiceScene, !1, this.scene_Data),
                    g.isJump && (l.instance.openJuhe(), L.instance.hideBanner(), l.instance.closeBanner()))) : s == this._imgMoreGame && e.event(a.GETAPP);
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Se extends y.scene.LoseTwiceSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, !Laya.Browser.onQGMiniGame && g.isJump;
        }
        onOpened(ee) {
            e.event(a.RESETGAME);
            this.scene_Data = ee, this.addEventListener(), l.instance.openLiugong(), l.instance.openNativeAdScene(),
                this._fcpGold.value = m.instance.formatToUnitEN(i.gold), S.instance.sendEvent(n.show_jiesuan),
                this.isTouchAd = !1;
            platform.getInstance().initList(this.list_showList);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            t.target == this._spAgain ?
                platform.getInstance().showInterstitial(() => {
                    (Laya.Scene.close(r.LoseTwiceScene), l.instance.openLeft(),
                        g.isJump && l.instance.openLiangPaiJuhe(), l.instance.openDuilian(), Laya.Browser.onQGMiniGame && (i.luckBoxTime++,
                            i.luckBoxTime > 2 && (i.luckBoxTime = 0, Laya.Scene.open(r.LuckBoxScene, !1))))
                }) : this._spAn && e.event(a.GETAPP);
        }
        onClosed() {
            l.instance.closeLiugong(), l.instance.closeNativeAdSence(), this.removeEventListener();
        }
    }
    class ye extends y.scene.LuckBoxSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._boxNative.visible = !1, this._main.y = (i.stage_height - i.ore_height) / 2 + i.statusBarHeight;
        }
        onOpened(e) {
            this.addEventListener(), this.showNative(), this.isTouchAd = !1;
        }
        showNative() {
            let e;
            Laya.Browser.onQGMiniGame ? e = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = N.instance.nativeAdData(3));
            let t = this;
            if (c.instance.hideBanner(), N.instance.hideBanner(), null == e) t._boxNative.visible = !1; else if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                let i = e.imgUrlList[0];
                this._imgNative.loadImage(i, Laya.Handler.create(this, e => {
                    Object.keys(Laya.Loader.loadedMap).indexOf(i) >= 0 ? (t._boxNative.visible = !0,
                        c.instance.nativeAdreportAdShow(), N.instance.nativeAdreportAdShow(3), console.log("加载成功")) : (console.log("加载失败"),
                            t._boxNative.visible = !1);
                }));
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.once(a.NATIVELOADFINISH, this, this.showNative);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgGet ? (L.instance.showVideo(this, this.getGold)) : t == this._imgNative ? (c.instance.nativeAdreportAdClick(),
                N.instance.nativeAdreportAdClick(3)) : t == this._imgSSS ? this._boxNative.visible = !1 : t == this._imgNo && (c.instance.canShow && g.checkWuchu && !this.isTouchAd ? (c.instance.nativeAdreportAdClick(),
                    this.isTouchAd = !0) : Laya.Browser.onVVMiniGame && g.checkWuchu && !this.isTouchAd ? (N.instance.nativeAdreportAdClick(3),
                        this.isTouchAd = !0) : Laya.Scene.close(r.LuckBoxScene));
        }
        getGold(t) {
            if (t) {
                let t = Math.floor(50 * Math.random()) + 50;
                i.gold += t, h.instance.openTips("Coin+ " + t), e.event(a.GOLDCHANGE);
            }
            Laya.Scene.close(r.LuckBoxScene);
        }
        onClosed() {
            c.instance.removeNativeAd(), N.instance.removeNativeAd(3), x.instance.mainBg(),
                this.removeEventListener();
        }
    }
    class pe extends y.scene.MainSceneUI {
        constructor() {
            super(), this.waitLoad = !1, this.lists = [596, 0, 130, 287, 444];
        }
        onEnable() {
            this.y = i.statusBarHeight, i.isLoadingVideo = !0, this._imgMore.visible = !1;
        }
        onOpened(e) {
            this.addEventListener(), g.openJiugong && l.instance.openJiugong(), S.instance.sendEvent(n.enter_main),
                this.changeGold(), this.resetGame(), this.timer.once(500, this, () => {
                    x.instance.mainBg();
                }), this.timer.once(1e3, this, () => {
                    l.instance.openDuilian();
                });
            this.btn_music.skin = window.WebAudioEngine.pause ? "img/mainscene/btn_sound_off.png" : "img/mainscene/btn_sound_on.png";
        }
        resetGame() {
            this._imgStart.visible = !0, this._boxTip.visible = !0, this._imgStr.visible = !0,
                Laya.Browser.onQGMiniGame || (g.isShowHu && g.isJump ? this._imgMore.visible = !0 : this._imgMore.visible = !1),
                this._imgTurn.visible = !g.islinshiWhite, this._imgSign.visible = !g.islinshiWhite,
                this._imgSkin.visible = !0, this._imgSetting.visible = !0, Laya.timer.clearAll(this),
                this.waitLoad = !1, x.instance.mainBg(), this._fcpLevel.visible = !1, this._fcpLevel.value = i.levelIndex,
                this._imgLogo.visible = !0, this._boxLevel.visible = !0, this.changeLevel(), this._boxDown.visible = !0,
                this.changeDown();
        }
        changeDown() {
            this._fcpStartGold.value = "级" + i.startNum, this._fcpLow.value = "级" + i.lowNum,
                this._fcpAdd.value = "级" + i.addNum, this._fcpStartNum.value = 20 * i.startNum + 50,
                this._fcpLowNum.value = 20 * i.lowNum + 50, this._fcpAddNum.value = 20 * i.addNum + 50;
        }
        changeLevel() {
            let e = Math.floor(i.levelIndex / 5), t = i.levelIndex % 5;
            0 != e && 0 == t && e--, this._imgPro.width = this.lists[t], this._fcpLevel1.value = (5 * e + 1).toString(),
                this._fcpLevel2.value = (5 * e + 2).toString(), this._fcpLevel3.value = (5 * e + 3).toString(),
                this._fcpLevel4.value = (5 * e + 4).toString(), this._fcpLevel5.value = (5 * e + 5).toString(),
                0 == t && (t = 5);
            for (let e = 0; e < 5; e++) {
                let i = this._level.getChildAt(e);
                i.skin = e < t - 1 ? "img/mainscene/yuan2.png" : e == t - 1 ? "img/mainscene/yuan1.png" : "img/mainscene/yuan3.png";
            }
        }
        readyGame() {
            platform.getInstance().showInterstitial(() => {
                this._imgStart.visible = !1, this._imgStr.visible = !1, this._imgSkin.visible = !1,
                    this._imgMore.visible = !1, this._fcpLevel.visible = !0, this._imgLogo.visible = !1,
                    this._boxDown.visible = !1, l.instance.closeDuilian(), l.instance.closeLeft(), ce.instance.readyGame(),
                    this._boxTip.visible = !1, this.gameStart(), this._boxLevel.visible = !1, this._imgSetting.visible = !1,
                    this._imgTurn.visible = !1, this._imgSign.visible = !1;
            })
        }
        readyFinish() { }
        gameStart() {
            ce.instance.startGame();
        }
        gameOver() {
            Laya.timer.clearAll(this);
        }
        addEventListener() {
            this.btn_music.on(Laya.Event.CLICK, this, this.changeMusic),
                this.on(Laya.Event.CLICK, this, this.getTouch),
                e.on(a.JIUGONGCLOSE, this, this.readyGame),
                e.on(a.GOLDCHANGE, this, this.changeGold),
                e.on(a.RESETGAME, this, this.resetGame),
                e.on(a.GAMEOVER, this, this.gameOver),
                e.on(a.SKINJUMP, this, this.skinJump),
                this.on(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        }
        removeEventListener() {
            this.btn_music.off(Laya.Event.CLICK, this, this.changeMusic),
                this.off(Laya.Event.CLICK, this, this.getTouch),
                e.off(a.JIUGONGCLOSE, this, this.readyGame),
                e.off(a.GOLDCHANGE, this, this.changeGold),
                e.off(a.RESETGAME, this, this.resetGame),
                e.off(a.GAMEOVER, this, this.gameOver),
                e.off(a.SKINJUMP, this, this.skinJump),
                this.off(Laya.Event.MOUSE_DOWN, this, this.mouseDown);
        }

        changeMusic() {
            window.WebAudioEngine.pause = !window.WebAudioEngine.pause;
            this.btn_music.skin = window.WebAudioEngine.pause ? "img/mainscene/btn_sound_off.png" : "img/mainscene/btn_sound_on.png";
            Laya.LocalStorage.setItem("Run-Rich-3D-musicState", JSON.stringify(window.WebAudioEngine.pause));
        }

        changeGold() {
            Laya.Tween.to(this._imgGold, {
                scaleX: 1,
                scaleY: 1
            }, 120, null, Laya.Handler.create(this, () => {
                this._fcpGold.value = m.instance.formatToUnitEN(i.gold), Laya.Tween.to(this._imgGold, {
                    scaleX: .7,
                    scaleY: .7
                }, 120, null, Laya.Handler.create(this, () => { }));
            }));
        }
        skinJump() {
            this.readyGame();
        }
        mouseDown(e) {
            if (!i.isLoadFinish) return;
            if (i.isloadingScene) return;
            e.target == this._imgStr && (this.waitLoad ? h.instance.openTips("Loading") : !g.isShowWuchu && Laya.Browser.onMiniGame ? (g.isShowWuchu = !0,
                g.OpenClick && g.OpenVideo ? (L.instance.showVideo(this, this.showGoldenEgg),
                    S.instance.sendEvent(n.Start_video), N.instance.hideBanner(), L.instance.hideBanner()) : g.OpenClick ? (this.showGoldenEgg(),
                        N.instance.hideBanner(), L.instance.hideBanner()) : g.OpenVideo ? (N.instance.hideBanner(),
                            L.instance.hideBanner(), L.instance.showVideo(this, this.readyGame), S.instance.sendEvent(n.Start_video)) : this.readyGame()) : i.isLoadingVideo && g.islinshiWhite && g.isShowHu && !Laya.Browser.onQGMiniGame && !Laya.Browser.onVVMiniGame ? this.readyGame() : g.islinshiWhite && g.everyclick && !Laya.Browser.onQGMiniGame && !Laya.Browser.onVVMiniGame ? (this.showGoldenEgg(),
                                L.instance.hideBanner()) : Laya.Browser.onQGMiniGame || Laya.Browser.onVVMiniGame ? X.instance.playerHealth() > 80 ? this.readyGame() : Laya.Scene.open(r.SkinTryScene, !1) : this.readyGame());
        }
        getTouch(t) {
            if (!i.isLoadFinish) return;
            if (i.isloadingScene) return;
            let s = t.target;
            s == this._imgSkin ? (L.instance.showVideo(this, this.getGold)) :
                s == this._imgMore ? l.instance.openJuhe() :
                    s == this._imgSign ? Laya.Scene.open(r.SignScene, !1) :
                        s == this._imgTurn ? Laya.Scene.open(r.TurntableScene, !1) :
                            s == this._imgSetting ? Laya.Scene.open(r.SettingScene, !1) :
                                s == this._imgLow ? (this.hitButton(this._imgLow),
                                    i.gold < 20 * i.lowNum + 50 ? h.instance.openTips("Coins Are Not Enough") :
                                        10 == i.lowNum ? h.instance.openTips("Lv Max") :
                                            (i.gold -= 20 * i.lowNum + 50, e.event(a.GOLDCHANGE),
                                                i.lowNum++, this.changeDown(), x.instance.sound_cashpickup3(), e.event(a.LOWCHANGE))) :
                                    s == this._imgAdd ? (this.hitButton(this._imgAdd), i.gold < 20 * i.addNum + 50 ? h.instance.openTips("Coins Are Not Enough") :
                                        10 == i.addNum ? h.instance.openTips("Lv Max") : (i.gold -= 20 * i.addNum + 50,
                                            e.event(a.GOLDCHANGE), i.addNum++, this.changeDown(), x.instance.sound_cashpickup3(),
                                            e.event(a.ADDCHANGE))) :
                                        s == this._imgStartGold && (this.hitButton(this._imgStartGold),
                                            i.gold < 20 * i.startNum + 50 ? h.instance.openTips("Coins Are Not Enough") :
                                                20 == i.startNum ? h.instance.openTips("Lv Max") : (i.gold -= 20 * i.startNum + 50,
                                                    e.event(a.GOLDCHANGE), i.startNum++, this.changeDown(), x.instance.sound_cashpickup3(),
                                                    e.event(a.STARTCHANGE)));
        }
        hitButton(e) {
            Laya.Tween.clearAll(e), Laya.Tween.to(e, {
                scaleX: .8,
                scaleY: .8
            }, 100, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(e, {
                    scaleX: 1,
                    scaleY: 1
                }, 100, null, Laya.Handler.create(this, () => { }));
            }));
        }
        getGold(t = null) {
            t && (i.linStartGold = 81, e.event(a.LINSTARTCHANGE));
        }
        showGoldenEgg(t = null) {
            L.instance.hasBanner ? (i.isLoadingVideo = !0, g.isShowHu ? l.instance.openGoldenEgg(!0) : (e.event(a.JIUGONGCLOSE),
                i.isLoadingVideo = !1), S.instance.sendEvent(n.Start_click)) : this.readyGame();
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class ve {
        static get instance() {
            return this._instance ? this._instance : this._instance = new ve();
        }
        createPlayer(e, t, s, a, n = null) {
            return this.scene3d = n || new Laya.Scene3D(), Laya.stage.addChild(this.scene3d),
                this.camera = new Laya.Camera(), this.camera.transform.position = new Laya.Vector3(0, .7, -3),
                this.camera.transform.rotation = new Laya.Quaternion(0, .9928806, .0591143, 0),
                this.camera.clearFlag = Laya.CameraClearFlags.DepthOnly, this.scene3d.addChild(this.camera),
                this.camera.viewport = new Laya.Viewport(e * Laya.stage.clientScaleX, (t + i.statusBarHeight) * Laya.stage.clientScaleY, s * Laya.stage.clientScaleX, a * Laya.stage.clientScaleY),
                this.light = new Laya.DirectionLight(), this.scene3d.addChild(this.light), this.light.transform.position = new Laya.Vector3(-9.281452, 15.48453, -18.53672),
                this.light.transform.rotation = new Laya.Quaternion(.1093816, .8754261, .4082179, -.2345697),
                this.light.intensity = .41, this.scene3d.ambientColor = new Laya.Vector3(.7, .7, .7),
                this.scene3d;
        }
        clearPlayer() {
            this.camera && (this.camera.removeSelf(), this.camera.destroy(), this.camera = null),
                this.light && (this.light.removeSelf(), this.light.destroy(), this.light = null),
                this.player && (this.player.removeSelf(), Laya.Pool.recover(T.PLAYER, this.player),
                    this.player = null), this.scene3d && (this.scene3d.removeSelf(), this.scene3d.destroyChildren(),
                        this.scene3d.destroy(), this.scene3d = null);
        }
    }
    class _e extends y.scene.SelectSkinSceneUI {
        constructor() {
            super(), this.linUnlock = -1, this.isRan = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._fcpGold.value = m.instance.formatToUnitEN(i.gold);
        }
        onOpened(e) {
            N.instance.hideBanner(), L.instance.hideBanner(), C.instance.hideBanner(), l.instance.closeBanner(),
                l.instance.closeLeft(), l.instance.closeDuilian(), this.addEventListener(), this._listskin.renderHandler = new Laya.Handler(this, this.changeItem),
                this._listskin.selectHandler = new Laya.Handler(this, this.selectList), this._listskin.selectEnable = !0,
                this.changeList(), this.showPlayerSkin();
        }
        changeList() {
            this._listskin.array = [0, 1, 2, 3, 4, 5], this._listskin.selectedIndex = i.skinIndex;
        }
        selectList(t) {
            if (i.isUnlock(t)) if (this.isRan) this._listskin.selectedIndex = -1, h.instance.openTips("Waiting"); else {
                let s = this._listskin.getCell(t);
                s.getChildByName("_imgBg").visible = !1, s.getChildByName("_imgBg1").visible = !0,
                    i.skinIndex != t && (i.skinIndex = t, this.showPlayerSkin(), e.event(a.SKINCHANGE));
            } else this._listskin.selectedIndex = -1, h.instance.openTips("Locked");
        }
        changeItem(e, t) {
            let s = e.getChildByName("_imgBg"), a = e.getChildByName("_imgBg1"), n = e.getChildByName("_imgPlayer"), o = e.getChildByName("_imgSelect");
            n.skin = "img/player/" + t + ".png", t == i.skinIndex ? (a.visible = !0, s.visible = !1) : (a.visible = !1,
                s.visible = !0), o.visible = !0;
            for (let e in i.unlockSkinList) i.unlockSkinList[Number(e)] == t && (o.visible = !1);
            t == this.linUnlock && (a.visible = !0, s.visible = !1, o.visible = !1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            if (s == this._imgRan) {
                if (this.isRan) return;
                i.gold >= 500 ? 6 == i.unlockSkinList.length ? h.instance.openTips("You have unlocked all skins") : (i.gold -= 500,
                    e.event(a.GOLDCHANGE), this._fcpGold.value = m.instance.formatToUnitEN(i.gold),
                    this.ranSkin()) : h.instance.openTips("Coins Are Not Enough");
            } else s == this._imgWatch ? i.isMini ? (L.instance.showVideo(this, this.getGold)) : h.instance.openTips("Locked")
                : s == this._imgBack && Laya.Scene.close(r.SelectSkinScene);
        }
        ranSkin() {
            this.isRan = !0;
            let t = [0, 1, 2, 3, 4, 5].filter(e => !new Set(i.unlockSkinList).has(e));
            console.log(t);
            let s = Math.floor(Math.random() * t.length), n = 0;
            Laya.timer.loop(200, this, () => {
                let o = n > t.length ? n % t.length : n, r = t[o];
                if (this.linUnlock = r, this.changeList(), ++n > t.length + s) {
                    Laya.timer.clearAll(this), i.skinIndex = t[s];
                    let n = JSON.parse(JSON.stringify(i.unlockSkinList));
                    n.push(i.skinIndex), i.unlockSkinList = n, e.event(a.SKINCHANGE), this.showPlayerSkin(),
                        this.isRan = !1, this._listskin.selectedIndex = t[s], this.linUnlock = -1;
                }
            });
        }
        showPlayerSkin() {
            this.scene3d ? e.event(a.SKINCHANGE) : (this.scene3d = ve.instance.createPlayer(175, 100, 400, 480),
                this.player = X.instance.playerObj(), this.player.transform.localScale = new Laya.Vector3(.8, .8, .8),
                this.player.transform.localPositionY = .6, this.player.removeSelf(), this.scene3d.addChild(this.player),
                this.showPlayerSkin());
        }
        getGold(t) {
            1 == t && (i.gold += i.watchADGold, e.event(a.GOLDCHANGE), h.instance.openTips("Coin+ " + i.watchADGold),
                this._fcpGold.value = m.instance.formatToUnitEN(i.gold));
        }
        removeScene() {
            this.player = X.instance.playerObj(), this.player.transform.localScale = new Laya.Vector3(1, 1, 1),
                this.player.removeSelf(), X.instance.objPool.addChild(this.player), this.player.transform.localPositionY = 1.3,
                this.player = null, ve.instance.clearPlayer();
        }
        onClosed() {
            e.event(a.ONSHOWNAME), L.instance.showBanner(!0), C.instance.showBanner(), l.instance.closeBanner(),
                l.instance.openLeft(), l.instance.openDuilian(), this.removeScene(), this.removeEventListener();
        }
    }
    class we extends y.scene.SettingSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight;
        }
        onOpened(e) {
            this.initMain(), this.addEventListener(), this._main.scale(.5, .5), Laya.Tween.to(this._main, {
                scaleX: 1,
                scaleY: 1
            }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                this._main.scale(1, 1);
            }));
        }
        initMain() {
            this.changeVS(!0), this.changeMS(!0), this.changeSS(!0);
        }
        changeVS(e = !1) {
            let t = this._vibrate.getChildAt(2);
            P.instance.isVibrate ? e ? t.x = -17 : (P.instance.isVibrate = !1, t.x = 110) : e ? t.x = 110 : (P.instance.isVibrate = !0,
                P.instance.vibrateShort(30), t.x = -17);
        }
        changeMS(e = !1) {
            let t = this._music.getChildAt(2);
            x.instance.isMusic ? e ? t.x = -17 : (x.instance.isMusic = !1, t.x = 110) : e ? t.x = 110 : (x.instance.isMusic = !0,
                t.x = -17);
        }
        changeSS(e = !1) {
            let t = this._sound.getChildAt(2);
            x.instance.isSound ? e ? t.x = -17 : (x.instance.isSound = !1, t.x = 110) : e ? t.x = 110 : (x.instance.isSound = !0,
                t.x = -17);
        }
        addEventListener() {
            this.on(Laya.Event.MOUSE_DOWN, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.MOUSE_DOWN, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            t == this._vibrate ? this.changeVS() : t == this._music ? this.changeMS() : t == this._sound ? this.changeSS() : t == this._close && Laya.Scene.close(r.SettingScene);
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class fe extends y.scene.ShareSceneUI {
        constructor() {
            super(), this.sceneData = !1, this.canClick = !0;
        }
        onEnable() {
            this.zOrder = 100, this._bg.visible = !1, this._main.visible = !1, this._imgShot2.visible = !1,
                this.y = i.statusBarHeight, this._main.y = (i.stage_height - i.ore_height) / 2;
        }
        onOpened(e) {
            this.sceneData = e, Laya.timer.once(60, this, () => {
                this._imgShot2.texture = this.getScreenTexture(), this._imgShot.texture = this.getScreenTexture2(),
                    this._imgShot2.visible = !0, Laya.Tween.to(this._imgShot2, {
                        scaleX: -.85,
                        scaleY: .7
                    }, 150, null, Laya.Handler.create(this, () => {
                        this._imgShot2.visible = !1, this._bg.visible = !0, this._main.visible = !0;
                    })), this._bg.y = i.stage_height - i.ore_height + this._bg.y - i.statusBarHeight,
                    this.height = i.stage_height;
            }), C.instance.refreshBanner(), C.instance.showBanner(), this.addEventListener();
        }
        getScreenTexture() {
            try {
                let e = null, t = Laya.WebGLContext.mainContext, i = t.drawingBufferWidth, s = t.drawingBufferHeight, a = new Uint8Array(i * s * 4);
                t.readPixels(0, 0, i, s, t.RGBA, t.UNSIGNED_BYTE, a);
                let n = new Laya.Texture2D(i, s, Laya.TextureFormat.R8G8B8A8, !1, !1);
                return n.setPixels(a), e = new Laya.Texture(n);
            } catch (e) { }
            return null;
        }
        getScreenTexture2() {
            try {
                let e = null, t = Laya.WebGLContext.mainContext, i = t.drawingBufferWidth, s = t.drawingBufferHeight, a = 870 * i / 750;
                console.log(a);
                let n = (s - a) / 2, o = new Uint8Array(i * s * 4);
                t.readPixels(0, n, i, a, t.RGBA, t.UNSIGNED_BYTE, o);
                let r = new Laya.Texture2D(i, a, Laya.TextureFormat.R8G8B8A8, !1, !1);
                return r.setPixels(o), e = new Laya.Texture(r);
            } catch (e) { }
            return null;
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        doEvent() {
            this.canClick = !0;
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            t == this._close ? l.instance.closeShare() : t == this._share && this.canClick && (this.canClick = !1,
                C.instance.shareVideo());
        }
        onClosed() {
            this.sceneData ? Laya.Scene.open(r.WinScene, !1) : Laya.Scene.open(r.LoseTwiceScene, !1),
                this.removeEventListener();
        }
    }
    class be extends y.scene.SignSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight;
        }
        onOpened(e) {
            this.curDate = new Date(), this.isSelect = !1, this.initSign(), this.addEventListener(),
                this._main.scale(.5, .5), Laya.Tween.to(this._main, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                    this._main.scale(1, 1);
                }));
        }
        initSign() {
            i.SignNum >= 7 && this.curDate.getDate() != i.SignDate && (i.SignNum = 0);
            let e = i.signList;
            for (let t = 0; t < this._box.numChildren; t++) {
                let i = this._box.getChildAt(t);
                i.getChildByName("_isGet").visible = !1;
                let s = i.getChildByName("_typeAndNum"), a = e[t], n = "";
                0 == a.type && (n = "金币"), s.value = `x${a.num}`;
            }
            let t = i.SignNum;
            for (let e = 0; e < t; e++) {
                this._box.getChildAt(e).getChildByName("_isGet").visible = !0;
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            if (t == this._sign) {
                this.curDate.getDate() != i.SignDate ? i.SignNum < 7 && this.startSign(!0) : h.instance.openTips("Signed");
            } else if (t == this._sign2) {
                this.curDate.getDate() != i.SignDate ? i.SignNum < 7 && (L.instance.showVideo(this, this.startSign2)) : h.instance.openTips("Signed");
            } else if (t == this._close) Laya.Scene.close(r.SignScene);
            else if (t == this._select) {
                if (this.isSelect) {
                    this.isSelect = !1, this._select.skin = "img/sigeinscene/gouxuan2.png", this._sign.getChildAt(0).skin = "img/sigeinscene/wenzi2.png";
                } else {
                    this.isSelect = !0, this._select.skin = "img/sigeinscene/gouxuan1.png", this._sign.getChildAt(0).skin = "img/skintryscene/wenzi.png";
                }
            }

        }
        startSign(t) {
            if (t) {
                i.SignNum++, i.SignDate = this.curDate.getDate();
                for (let e = 0; e < i.SignNum; e++) {
                    this._box.getChildAt(e).getChildByName("_isGet").visible = !0;
                }
                let t = i.signList[i.SignNum - 1].num;
                h.instance.openTips(`Coins+ ${t}`), i.gold += t, e.event(a.GOLDCHANGE);
            }
        }
        startSign2(t) {
            if (t) {
                i.SignNum++, i.SignDate = this.curDate.getDate();
                for (let e = 0; e < i.SignNum; e++) {
                    this._box.getChildAt(e).getChildByName("_isGet").visible = !0;
                }
                let t = i.signList[i.SignNum - 1].num;
                t *= 2, h.instance.openTips(`Coins+ ${t}`), i.gold += t, e.event(a.GOLDCHANGE);
            }
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Ae extends y.scene.SkinTrySceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this._main.y = (i.stage_height - i.ore_height) / 2;
        }
        onOpened(e) {
            this.scene_data = e, this.showPlayerSkin(), this.addEventListener(), this.showNative(),
                this.isTouchAd = !1;
        }
        showPlayerSkin() {
            if (this.player); else {
                let e = i.statusBarHeight + (i.stage_height - i.ore_height) / 2 + 150;
                this.scene3d = ve.instance.createPlayer(175, e, 400, 480), this.player = X.instance.playerObj(),
                    X.instance.playerShowNew(), this.player.transform.localPosition = new Laya.Vector3(0, 0, 0),
                    this.player.transform.localRotationEulerY = 180, this.player.transform.localScale = new Laya.Vector3(1.4, 1.4, 1.4),
                    this.player.transform.localPositionY = -1, this.player.removeSelf(), this.scene3d.addChild(this.player),
                    this.showPlayerSkin();
            }
        }
        showNative() {
            let e;
            Laya.Browser.onQGMiniGame ? e = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = N.instance.nativeAdData(0)),
                c.instance.hideBanner(), N.instance.hideBanner();
            let t = this;
            if (null == e) t._boxNative.visible = !1; else if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                let i = e.imgUrlList[0];
                this._imgNative.loadImage(i, Laya.Handler.create(this, e => {
                    Object.keys(Laya.Loader.loadedMap).indexOf(i) >= 0 ? (t._boxNative.visible = !0,
                        c.instance.nativeAdreportAdShow(), N.instance.nativeAdreportAdShow(0), console.log("加载成功")) : (console.log("加载失败"),
                            t._boxNative.visible = !1);
                }));
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.once(a.NATIVELOADFINISH, this, this.reShowNative);
        }
        reShowNative() {
            this.showNative();
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let i = t.target;
            i == this._txtNo ? c.instance.canShow && g.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                c.instance.nativeAdreportAdClick()) : Laya.Browser.onVVMiniGame && g.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0,
                    N.instance.nativeAdreportAdClick(0)) : (X.instance.playerTry(), e.event(a.SKINJUMP),
                        this.clearScene(), Laya.Scene.close(r.SkinTryScene)) : i == this._imgSkin ? (L.instance.showVideo(this, this.trySkin)) : i == this._imgNative ? (c.instance.nativeAdreportAdClick(),
                            N.instance.nativeAdreportAdClick(0)) : i == this._imgSSS && (this._boxNative.visible = !1);
        }
        trySkin(t) {
            1 == t && (h.instance.openTips("Success"), i.trySkinIndex = this.scene_data, i.trySkinTimes = 2,
                e.event(a.SKINCHANGE), e.event(a.SKINJUMP), this.clearScene(), Laya.Scene.close(r.SkinTryScene));
        }
        clearScene() {
            this.player.removeSelf(), X.instance.objPool.addChild(this.player), X.instance.reAni(),
                this.player.transform.localPosition = new Laya.Vector3(0, 0, 8), this.player.transform.localRotationEulerY = 0,
                this.player.transform.localScale = new Laya.Vector3(1, 1, 1), this.player.transform.localPositionY = 0,
                this.player = null, ve.instance.clearPlayer();
        }
        onClosed() {
            c.instance.removeNativeAd(), N.instance.removeNativeAd(0), this.removeEventListener();
        }
    }
    class Ee extends y.scene.TurntableSceneUI {
        constructor() {
            super(), this.lastRot = 0, this.isLock = !1, this.getGold = 0;
        }
        onEnable() {
            this.y = i.statusBarHeight;
        }
        onOpened(e) {
            this.isLock = !1, this.getGold = 0, this._zhuan.rotation = 0, this._main.scale(.5, .5),
                Laya.Tween.to(this._main, {
                    scaleX: 1,
                    scaleY: 1
                }, 500, Laya.Ease.backOut, Laya.Handler.create(this, () => {
                    this._main.scale(1, 1);
                })), this.addEventListener();
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            if (t == this._start) {
                if (this.isLock) return void h.instance.openTips("Waiting");
                L.instance.showVideo(this, this.doStart);
            } else if (t == this._close) {
                if (this.isLock) return void h.instance.openTips("Waiting");
                Laya.Scene.close(r.TurntableScene);
            }
        }
        doStart(e = null) {
            if (e) {
                this.isLock = !0, this.randomMoney(), console.log(this.getGold);
                let e = 0;
                200 == this.getGold ? e = 24 : 150 == this.getGold ? e = 68 : 300 == this.getGold ? e = 113 : 250 == this.getGold ? e = 158 : 350 == this.getGold ? e = 204 : 500 == this.getGold ? e = 249 : 1e3 == this.getGold ? e = 293 : 100 == this.getGold && (e = 338),
                    e = e - 20 + 40 * Math.random(), Laya.Tween.to(this._zhuan, {
                        rotation: this._zhuan.rotation - this.lastRot + 3600 + e
                    }, 5e3, Laya.Ease.circInOut, Laya.Handler.create(this, this.doSettlement)), this.lastRot = e;
            }
        }
        randomMoney() {
            let e = Math.random();
            e <= 100 / 2850 ? this.getGold = 1e3 : e > 100 / 2850 && e <= 250 / 2850 ? this.getGold = 500 : e > 250 / 2850 && e <= 450 / 2850 ? this.getGold = 350 : e > 450 / 2850 && e <= 700 / 2850 ? this.getGold = 300 : e > 700 / 2850 && e <= 1e3 / 2850 ? this.getGold = 250 : e > 1e3 / 2850 && e <= 1350 / 2850 ? this.getGold = 200 : e > 1350 / 2850 && e <= 1850 / 2850 ? this.getGold = 150 : e > 1850 / 2850 && e <= 2850 && (this.getGold = 100);
        }
        doSettlement() {
            this.isLock = !1, i.gold += this.getGold, h.instance.openTips("Coin+ " + this.getGold),
                e.event(a.GOLDCHANGE);
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Ie extends y.scene.WinSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, (Laya.Browser.onVVMiniGame || Laya.Browser.onQGMiniGame) && (this._money.y = 239,
                this._spGetMore.x = 248, this._spGetMore.y = 1010, this._spMoreGame.x = 248, this._spMoreGame.y = 886,
                this._see.visible = !0);
        }
        onOpened(e) {
            l.instance.openLiugong(), l.instance.openMoreNativeAdScene(), C.instance.showInterstitialAd(),
                Laya.Browser.onVVMiniGame || (console.log("-----------1-------"), l.instance.openNativeAdScene()),
                this.scene_Data = e, this.scene_Data ? this._txtRank.text = "第" + this.scene_Data + "名" : this._txtRank.text = "",
                i.levelIndex++, this.addEventListener(), this._txtNum.text = "+" + (i.getGold * i.moreS).toFixed(0),
                l.instance.closeBanner(), S.instance.sendEvent(n.Game_pass), this._fcpGold.value = m.instance.formatToUnitEN(i.gold),
                g.isJump && l.instance.openJuhe(), this.isTouchAd = !1;
            platform.getInstance().initList(this.list_showList);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(t) {
            let s = t.target;
            s == this._spMoreGame ? platform.getInstance().showInterstitial(() => {
                ((i.gold += Math.floor(i.getGold * i.moreS), h.instance.openTips("Coin+ " + Math.floor(i.getGold * i.moreS)),
                    i.getGold = 0, e.event(a.GOLDCHANGE), Laya.Scene.close(r.WinScene)))
            }) : s == this._spGetMore ? (
                L.instance.showVideo(this,
                    this.getMoreGold)
            )
                : s == this._see && e.event(a.GETAPP);
        }
        getMoreGold(t = null) {
            t && (i.gold += Math.floor(i.getGold * i.moreS * 3), h.instance.openTips("Coin+ " + Math.floor(i.getGold * i.moreS * 3)),
                i.getGold = 0, e.event(a.GOLDCHANGE), Laya.Scene.close(r.WinScene));
        }
        onClosed() {
            l.instance.closeLiugong(), l.instance.closeNativeAdSence(), this.removeEventListener(),
                Laya.timer.frameOnce(1, this, () => {
                    e.event(a.RESETGAME);
                });
        }
    }
    class xe extends y.side.GoldenEggSceneUI {
        constructor() {
            super(), this.eggValue = 0, this.$addProb = .2, this.$subProb = .02, this.timeOut = !0;
        }
        onEnable() {
            this.zOrder = 2303, this._imgTouch.y = this._imgTouch.y + i.stage_height - i.ore_height,
                this._imgMask = this._imgLoad.mask, this._imgMask.x = -this._imgMask.width;
        }
        onOpened(e) {
            this.secene_data = e, this.addEventListener(), S.instance.sendEvent(n.Click_show),
                this.handAni = new Laya.TimeLine();
            let t = this._imgHand.x, i = this._imgHand.y;
            this.handAni = this.handAni.addLabel("tl1", 0).to(this._imgHand, {
                x: 20 + t,
                y: 30 + i
            }, 300, Laya.Ease.linearNone).addLabel("tl2", 0).to(this.handAni, {
                x: t,
                y: i
            }, 300, Laya.Ease.linearNone), this.timeOut = !0, this.timer.frameLoop(2, this, this.subProb),
                this.handAni.play(0, !0), N.instance.hideBanner(), L.instance.hideBanner();
        }
        subProb() {
            this.eggValue = Math.max(0, this.eggValue - this.$subProb), this.changeValue();
        }
        addProb() {
            this.eggValue = Math.min(1, this.eggValue + this.$addProb), this.changeValue();
        }
        changeValue() {
            this._imgMask.x = -this._imgMask.width + this._imgMask.width * this.eggValue, this.eggValue >= i.goldEggValue / 2 && this.timeOut && (this.timeOut = !1,
                L.instance.showLoadedBanner(), this._imgEgg.skin = this._imgEgg.skin.replace("0", "1"),
                this.timer.once(2e3, this, () => {
                    L.instance.destroyBanner(), L.instance.showBanner(!0), c.instance.showBanner(),
                        Laya.timer.once(1500, this, () => {
                            l.instance.closeGoldenEgg();
                        });
                })), this.eggValue >= i.goldEggValue && (this.mouseEnabled = !1);
        }
        addEventListener() {
            this._imgTouch.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this._imgTouch.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            e.target == this._imgTouch && this.addProb();
        }
        getGoldEgg() {
            let t = Math.floor(40 * Math.random() + 10);
            i.gold += t, e.event(a.GOLDCHANGE), h.instance.openTips("Coin+ " + t);
        }
        onClosed() {
            this.timer.clear(this, this.subProb), this.handAni && (this.handAni.destroy(), this.handAni = null),
                1 == this.secene_data && e.event(a.JIUGONGCLOSE), i.isLoadingVideo = !1, this.removeEventListener(),
                this.getGoldEgg();
        }
    }
    class Ce extends y.side.MoreGameSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2303, this._listDown.height = i.stage_height - i.ore_height + 1034 - i.statusBarHeight,
                this._imgKeep.y = i.stage_height - i.ore_height + 1188 - i.statusBarHeight, g.islinshiWhite || (this._imgBack.visible = !1,
                    this._imgKeep.visible = !0);
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), S.instance.sendEvent(n.Show_juhe1),
                this.isShow = !1, S.instance.getFlowConfig(s.wxId, this, this.loadAd), this._listDown.selectEnable = !0,
                this._listTop.selectEnable = !0, this._listDown.selectHandler = new Laya.Handler(this, this.selectDown),
                this._listTop.selectHandler = new Laya.Handler(this, this.selectTop), N.instance.hideBanner(),
                L.instance.hideBanner(), g.islinshiWhite && g.RandomClick ? (this.userCancel(),
                    this._imgKeep.skin = "img/losescene/ranjump.png") : this._imgKeep.skin = "img/losescene/jixuyouxi.png",
                g.islinshiWhite && (this._imgBack.visible = !1, Laya.timer.once(3e3, this, () => {
                    this._imgBack.visible = !0;
                }));
        }
        jumpRandom() {
            if (g.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                S.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene");
            }
        }
        loadAd(e) {
            this._listDown.array = e, this._listTop.array = JSON.parse(JSON.stringify(e)), g.islinshiWhite && g.RandomClick && this.jumpRandom();
        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene"), this._listDown.selectedIndex = -1);
        }
        selectTop(e) {
            let t = this._listTop.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId, "MoreGameScene"), this._listTop.selectedIndex = -1);
        }
        userCancel() {
            !this.isShow && g.islinshiWhite && (this.isShow = !0, console.log("开始LOADbanner"),
                this.timer.once(1300, this, () => {
                    L.instance.showLoadedBanner(), this.timer.once(2e3, this, () => {
                        L.instance.destroyBanner();
                    });
                }));
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.USERCANCEL, this, this.userCancel);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.USERCANCEL, this, this.userCancel);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgBack ? (l.instance.closeJuhe(), this.scene_Data ? (L.instance.showBanner(!0),
                c.instance.showBanner()) : g.islinshiWhite && (i.levelIndex - 1 - g.start_level) % (g.space_level + 1) == 0 && L.instance.hasBanner ? l.instance.openGoldenEgg() : (L.instance.showBanner(!0),
                    c.instance.showBanner())) : t == this._imgKeep && (g.islinshiWhite && g.RandomClick ? this.jumpRandom() : (l.instance.closeJuhe(),
                        this.scene_Data ? (L.instance.showBanner(!0), c.instance.showBanner()) : g.islinshiWhite && (i.levelIndex - 1 - g.start_level) % (g.space_level + 1) == 0 && L.instance.hasBanner ? l.instance.openGoldenEgg() : (L.instance.showBanner(!0),
                            c.instance.showBanner())));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Ne extends Laya.HScrollBar {
        constructor() {
            super();
        }
        onEnable() {
            this.value = 0, this.toValue = this.max, this.fatherObj = this.parent, this.fatherObj.on(Laya.Event.MOUSE_DOWN, this, this.stopChange),
                this.fatherObj.on(Laya.Event.MOUSE_OUT, this, this.stopChange), this.fatherObj.on(Laya.Event.MOUSE_UP, this, this.startChange),
                this.startChange();
        }
        startChange() {
            this.timer.clearAll(this), this.timer.once(600, this, () => {
                this.road();
            });
        }
        road() {
            let e = 20 * (0 == this.toValue ? this.value : this.toValue - this.value);
            Laya.Tween.to(this, {
                value: this.toValue
            }, e, null, Laya.Handler.create(this, () => {
                this.toValue = 0 == this.toValue ? this.max : 0, this.road();
            }));
        }
        stopChange() {
            Laya.Tween.clearAll(this);
        }
        onDisable() {
            this.fatherObj.off(Laya.Event.MOUSE_DOWN, this, this.stopChange), this.fatherObj.off(Laya.Event.MOUSE_OUT, this, this.stopChange),
                this.fatherObj.off(Laya.Event.MOUSE_UP, this, this.startChange);
        }
    }
    class Be extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._imgTitleBg = this.getChildByName("_imgTitleBg"), this._imgTitleBg.skin = "img/connon/titleBg/titlebg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._imgIcon || (e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon"),
                    e._imgTitleBg = e.getChildByName("_imgTitleBg"));
                let t = e.dataSource.show_config.image;
                e._txtTitle.text = m.instance.shortText(e.dataSource.show_config.title), t && (e._imgIcon.skin = t);
            }
        }
    }
    class Te extends y.side.SideBotListSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.x = 8, this.y = i.stage_height - 250, this.zOrder = 2300;
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), S.instance.getFlowConfig(s.wxId, this, this.loadAd),
                this._listBanner.selectEnable = !0, this._listBanner.selectHandler = new Laya.Handler(this, this.selectBanner);
        }
        loadAd(e) {
            this._listBanner.array = e;
        }
        selectBanner(e) {
            let t = this._listBanner.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId), this._listBanner.selectedIndex = -1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            e.target;
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Me extends Laya.Box {
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() { }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._imgIcon || (e._imgIcon = e.getChildByName("_imgIcon"), e._imgNew = e.getChildByName("_imgNew"));
                let t = e.dataSource.show_config.image;
                t && (e._imgIcon.skin = t);
            }
        }
    }
    class Ge extends y.side.SideDoubleListSceneUI {
        constructor() {
            super(), this._listBox = new Array();
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2298;
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), this._listBox = new Array(), this._listBox.push(this._box1),
                this._listBox.push(this._box2), this._listBox.push(this._box3), this._listBox.push(this._box4),
                this._listBox.push(this._box5), this._listBox.push(this._box6), S.instance.getFlowConfig(s.wxId, this, this.loadAd);
        }
        changeImage() { }
        loadAd(e) {
            let t = e;
            t.sort(function () {
                return .5 - Math.random();
            });
            let i = t.slice(0, 6);
            for (let e = 0; e < this._listBox.length; e++) this._listBox[e].dataSource = i[e];
            Laya.timer.loop(3e3, this, () => {
                this.ani1.play(0, !1), t.sort(function () {
                    return .5 - Math.random();
                });
                let e = t.slice(0, 6);
                for (let t = 0; t < this._listBox.length; t++) this._listBox[t].dataSource = e[t];
            });
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            if (t == this._box1) {
                let e = this._listBox[0].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box2) {
                let e = this._listBox[1].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box3) {
                let e = this._listBox[2].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box4) {
                let e = this._listBox[3].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box5) {
                let e = this._listBox[4].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            } else if (t == this._box6) {
                let e = this._listBox[5].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            }
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Oe extends Laya.Box {
        constructor() {
            super(), this.times = 0;
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._box = this.getChildByName("_box"), this._imgBg = this._box.getChildByName("_imgBg"),
                this._imgBg.skin = "img/connon/titleBg/bg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e._dataSource) {
                e._imgIcon || (e._box = e.getChildByName("_box"), e._txtTitle = e._box.getChildByName("_txtTitle"),
                    e._imgIcon = e._box.getChildByName("_imgIcon")), e._txtTitle.text = m.instance.shortText(e._dataSource.show_config.title);
                let t = e._dataSource.show_config.image;
                t && (e._imgIcon.skin = t);
            }
        }
    }
    class ke extends y.side.SideGridSceneUI {
        constructor() {
            super(), this._listBox = new Array();
        }
        onEnable() {
            this.zOrder = 2301, this.y = i.statusBarHeight;
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), this._listBox = new Array(), this._listBox.push(this._box1),
                this._listBox.push(this._box2), this._listBox.push(this._box3), this._listBox.push(this._box4),
                this._listBox.push(this._box5), this._listBox.push(this._box6), S.instance.getFlowConfig(s.wxId, this, this.loadAd);
        }
        loadAd(e) {
            let t = e;
            t.sort(function () {
                return .5 - Math.random();
            });
            let i = t.slice(0, 6);
            for (let e = 0; e < this._listBox.length; e++) this._listBox[e].dataSource = i[e];
            Laya.timer.loop(3e3, this, () => {
                this.ani1.play(0, !1), t.sort(function () {
                    return .5 - Math.random();
                });
                let e = t.slice(0, 6);
                for (let t = 0; t < this._listBox.length; t++) this._listBox[t].dataSource = e[t];
            });
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            let t = e.target;
            if (t == this._box1) {
                let e = this._listBox[0].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box2) {
                let e = this._listBox[1].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box3) {
                let e = this._listBox[2].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box4) {
                let e = this._listBox[3].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box5) {
                let e = this._listBox[4].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId, "SideGridScene");
            } else if (t == this._box6) {
                let e = this._listBox[5].dataSource;
                e && S.instance.flowNavigate(e.positionId, e.creativeId);
            }
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class De extends y.side.SideJiugongSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.zOrder = 2302, this.y = i.statusBarHeight, this._main.y = i.stage_height / 2 - 220;
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), S.instance.getFlowConfig(s.wxId, this, this.loadAd),
                S.instance.sendEvent(n.Show_gongge), this._listAd.selectEnable = !0, this._listAd.selectHandler = new Laya.Handler(this, this.selectTop);
        }
        loadAd(e) {
            this._listAd.array = e;
        }
        selectTop(e) {
            let t = this._listAd.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId, "SideJiugongScene"), this._listAd.selectedIndex = -1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch);
        }
        getTouch(e) {
            e.target == this._imgClose && this.closeJiugong();
        }
        closeJiugong() {
            l.instance.closeJiugong(), l.instance.openLeft(!0);
        }
        showGoldenEgg(e = null) {
            l.instance.closeJiugong(), L.instance.hasBanner && (l.instance.openGoldenEgg(),
                S.instance.sendEvent(n.Start_click));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Pe extends Laya.Box {
        constructor() {
            super();
        }
        get dataSource() {
            return this._dataSource;
        }
        set dataSource(e) {
            this._dataSource = e, this.refresh();
        }
        onEnable() {
            let e = Math.ceil(6 * Math.random());
            this._imgTitleBg = this.getChildByName("_imgTitleBg"), this._imgTitleBg.skin = "img/connon/titleBg/titlebg" + e + ".png";
        }
        refresh() {
            let e = this;
            if (e.dataSource) {
                e._imgIcon || (e._txtTitle = e.getChildByName("_txtTitle"), e._imgIcon = e.getChildByName("_imgIcon"));
                let t = e.dataSource.show_config.image;
                e._txtTitle.text = m.instance.shortText(e.dataSource.show_config.title), t && (e._imgIcon.skin = t);
            }
        }
    }
    class Re extends y.side.SideLeftListSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.zOrder = 2299;
        }
        onOpened(e) {
            this.scene_Data = e, this.addEventListener(), S.instance.getFlowConfig(s.wxId, this, this.loadAd),
                this._listAd.selectEnable = !0, this._listAd.selectHandler = new Laya.Handler(this, this.selectBanner);
            this._listAd.scrollBar;
            this.isShow = !1, this._imgSlide.visible = !0, this._imgBg.visible = !1, this._boxMain.x = -607,
                1 == e && this.showAd();
        }
        showAd() {
            Laya.Tween.clearAll(this._boxMain), this._imgBg.visible = !0, this._imgSlide.visible = !1,
                Laya.Tween.to(this._boxMain, {
                    x: 0
                }, 400, null, Laya.Handler.create(this, () => {
                    this.isShow = !0;
                }));
        }
        hideAd() {
            Laya.Tween.clearAll(this._boxMain), Laya.Tween.to(this._boxMain, {
                x: -607
            }, 400, null, Laya.Handler.create(this, () => {
                this._imgBg.visible = !1, this._imgSlide.visible = !0, this.isShow = !1;
            }));
        }
        loadAd(e) {
            this._listAd.array = e;
        }
        selectBanner(e) {
            let t = this._listAd.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId), this._listAd.selectedIndex = -1);
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.SHOWLEFTSIDE, this, this.showAd);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.SHOWLEFTSIDE, this, this.showAd);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSlide ? this.showAd() : t == this._imgBg && this.hideAd();
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class Ve extends y.side.SideMoreNativeSceneUI {
        constructor() {
            super(), this.isTouchAd = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2302, this._main.visible = !1;
        }
        onOpened(e) {
            let t;
            if (this.isTouchAd = !1, this.scene_Data = e, this.addEventListener(), Laya.Browser.onQGMiniGame ? t = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (t = N.instance.nativeAdData(1)),
                null == t) l.instance.closeMoreNativeAdSence(); else {
                c.instance.hideBanner();
                let e = this;
                if (t && t.imgUrlList && t.imgUrlList.length > 0) {
                    let i = t.title;
                    if (i.length > 8) {
                        let t = i.slice(0, 8) + "...";
                        e._txtTitle.text = t;
                    } else e._txtTitle.text = i;
                    let s = t.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, c.instance.nativeAdreportAdShow(),
                            N.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                l.instance.closeMoreNativeAdSence());
                    }));
                }
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.GETAPP, this, this.getApp),
                e.once(a.NATIVELOADFINISH, this, this.reShowNative);
        }
        reShowNative() {
            let e;
            if (Laya.Browser.onQGMiniGame ? e = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = N.instance.nativeAdData(1)),
                null == e) l.instance.closeMoreNativeAdSence(); else {
                c.instance.hideBanner();
                let t = this;
                if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                    let i = e.title;
                    if (i.length > 8) {
                        let e = i.slice(0, 8) + "...";
                        t._txtTitle.text = e;
                    } else t._txtTitle.text = i;
                    let s = e.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, c.instance.nativeAdreportAdShow(),
                            N.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                l.instance.closeMoreNativeAdSence());
                    }));
                }
            }
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.GETAPP, this, this.getApp);
        }
        getApp() {
            c.instance.nativeAdreportAdClick(), N.instance.nativeAdreportAdClick(1);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSSS ? g.checkWuchu && !this.isTouchAd ? (this.isTouchAd = !0, c.instance.nativeAdreportAdClick(),
                N.instance.nativeAdreportAdClick(1)) : l.instance.closeMoreNativeAdSence() : t != this._imgNative && t != this._imgWatch || (c.instance.nativeAdreportAdClick(),
                    N.instance.nativeAdreportAdClick(1));
        }
        onClosed() {
            c.instance.removeNativeAd(), Laya.Browser.onVVMiniGame && Laya.timer.once(500, this, () => {
                l.instance.openNativeAdScene();
            }), this.removeEventListener();
        }
    }
    class je extends y.side.SideNativeBannerSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.zOrder = 2301, this.y = i.statusBarHeight;
        }
        onOpened(t) {
            c.instance.hideBanner(), N.instance.hideBanner(), this.showNatBanner(), Laya.Browser.onVVMiniGame && Laya.timer.loop(N.instance.refreshTime, this, this.carouselBanner),
                this.on(Laya.Event.CLICK, this, this.clickEvent), e.once(a.NATIVELOADFINISH, this, this.showNatBanner);
        }
        clickEvent(e) {
            let t = e.target;
            t == this._imgClose ? l.instance.closeNativeBannerScene() : t == this._imgBanner && (c.instance.nativeAdreportAdClick(),
                N.instance.nativeAdreportAdClick(0));
        }
        carouselBanner() {
            N.instance.removeNativeAd(0), this._boxAll.visible = !1, Laya.timer.once(1e3, this, () => {
                this.showNatBanner();
            });
        }
        showNatBanner() {
            let e;
            if (this._boxAll.visible = !1, this._imgBanner.visible = !1, Laya.Browser.onQGMiniGame ? e = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = N.instance.nativeAdData(0)),
                null == e) Laya.Browser.onQGMiniGame && l.instance.closeNativeBannerScene(); else {
                if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                    let t = e.imgUrlList[0];
                    this._imgBanner.loadImage(t, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(t) >= 0 ? (this._imgBanner.visible = !0,
                            c.instance.nativeAdreportAdShow(), N.instance.nativeAdreportAdShow(0), this._boxAll.visible = !0) : l.instance.closeNativeBannerScene();
                    }));
                }
            }
        }
        onClosed() {
            this.off(Laya.Event.CLICK, this, this.clickEvent), Laya.timer.clear(this, this.carouselBanner),
                N.instance.removeNativeAd(0), this.off(Laya.Event.CLICK, this, this.clickEvent);
        }
    }
    class Ue extends y.side.SideNativeSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2301, this._main.visible = !1;
        }
        onOpened(e) {
            let t;
            if (this.scene_Data = e, this.addEventListener(), Laya.Browser.onQGMiniGame ? t = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (t = N.instance.nativeAdData(2)),
                null == t) l.instance.closeNativeAdSence(); else {
                c.instance.hideBanner();
                let e = this;
                if (t && t.imgUrlList && t.imgUrlList.length > 0) {
                    let i = t.title;
                    if (i.length > 8) {
                        let t = i.slice(0, 8) + "...";
                        e._txtTitle.text = t;
                    } else e._txtTitle.text = i;
                    let s = t.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, c.instance.nativeAdreportAdShow(),
                            N.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                l.instance.closeNativeAdSence());
                    }));
                }
            }
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.GETAPP, this, this.getApp),
                e.on(a.NATIVELOADFINISH, this, this.reShowNative);
        }
        reShowNative() {
            let e;
            if (Laya.Browser.onQGMiniGame ? e = c.instance.nativeAdData : Laya.Browser.onVVMiniGame && (e = N.instance.nativeAdData(2)),
                null == e) l.instance.closeNativeAdSence(); else {
                c.instance.hideBanner();
                let t = this;
                if (e && e.imgUrlList && e.imgUrlList.length > 0) {
                    let i = e.title;
                    if (i.length > 8) {
                        let e = i.slice(0, 8) + "...";
                        t._txtTitle.text = e;
                    } else t._txtTitle.text = i;
                    let s = e.imgUrlList[0];
                    this._imgNative.loadImage(s, Laya.Handler.create(this, e => {
                        Object.keys(Laya.Loader.loadedMap).indexOf(s) >= 0 ? (this._main.visible = !0, c.instance.nativeAdreportAdShow(),
                            N.instance.nativeAdreportAdShow(2), console.log("加载成功")) : (console.log("加载失败"),
                                l.instance.closeNativeAdSence());
                    }));
                }
            }
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.GETAPP, this, this.getApp);
        }
        getApp() {
            c.instance.nativeAdreportAdClick(), N.instance.nativeAdreportAdClick(2);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgSSS ? l.instance.closeNativeAdSence() : t == this._imgNative && (c.instance.nativeAdreportAdClick(),
                N.instance.nativeAdreportAdClick(2));
        }
        onClosed() {
            c.instance.removeNativeAd(), N.instance.removeNativeAd(2), this.removeEventListener();
        }
    }
    class He extends y.side.SideTwoSceneUI {
        constructor() {
            super(), this.isShow = !1;
        }
        onEnable() {
            this.y = i.statusBarHeight, this.zOrder = 2303, this._listDown.height = (i.stage_height - i.ore_height - i.statusBarHeight) / 1.5 + 870,
                this._imgKeep.y = i.stage_height - i.ore_height + 1166 - i.statusBarHeight, g.islinshiWhite || (this._imgBack.visible = !1,
                    this._imgKeep.visible = !0);
        }
        onOpened(e) {
            N.instance.hideBanner(), L.instance.hideBanner(), this.scene_Data = e, this.addEventListener(),
                this.isShow = !1, S.instance.sendEvent(n.Show_juhe2), S.instance.getFlowConfig(s.wxId, this, this.loadAd),
                this._listDown.selectEnable = !0, this._listDown.selectHandler = new Laya.Handler(this, this.selectDown),
                L.instance.hideBanner(), N.instance.hideBanner(), g.islinshiWhite && (this._imgBack.visible = !1,
                    Laya.timer.once(3e3, this, () => {
                        this._imgBack.visible = !0;
                    })), g.islinshiWhite && g.RandomClick ? (this.userCancel(), this._imgKeep.skin = "img/losescene/ranjump.png") : this._imgKeep.skin = "img/losescene/jixuyouxi.png";
        }
        loadAd(e) {
            this._listDown.array = e, g.islinshiWhite && g.RandomClick && this.jumpRandom();
        }
        jumpRandom() {
            if (g.islinshiWhite) {
                let e = Math.floor(this._listDown.array.length * Math.random()), t = this._listDown.array[e];
                S.instance.flowNavigate(t.positionId, t.creativeId, "SideTwoScene");
            }
        }
        selectDown(e) {
            let t = this._listDown.array[e];
            t && (S.instance.flowNavigate(t.positionId, t.creativeId, "SideTwoScene"), this._listDown.selectedIndex = -1);
        }
        userCancel() {
            !this.isShow && g.islinshiWhite && (this.isShow = !0, this.timer.once(1300, this, () => {
                L.instance.showLoadedBanner(), this.timer.once(2e3, this, () => {
                    L.instance.destroyBanner();
                });
            }));
        }
        addEventListener() {
            this.on(Laya.Event.CLICK, this, this.getTouch), e.on(a.USERCANCEL, this, this.userCancel);
        }
        removeEventListener() {
            this.off(Laya.Event.CLICK, this, this.getTouch), e.off(a.USERCANCEL, this, this.userCancel);
        }
        getTouch(e) {
            let t = e.target;
            t == this._imgBack ? (l.instance.closeLiangPaiJuhe(), x.instance.mainBg()) : t == this._imgKeep && (g.islinshiWhite && g.RandomClick ? this.jumpRandom() : (l.instance.closeLiangPaiJuhe(),
                x.instance.mainBg()));
        }
        onClosed() {
            this.removeEventListener();
        }
    }
    class We extends y.tips.MoveTipsSceneUI {
        constructor() {
            super();
        }
        onOpened(e) {
            e || (e = 3e3), Laya.timer.once(e, this, () => {
                Laya.Scene.close(r.MoveTipsScene);
            });
        }
    }
    class Je extends y.tips.SlowSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this._boxTip.alpha = 0, Laya.Tween.to(this._boxTip, {
                alpha: .7
            }, 500), this._boxTip.once(Laya.Event.MOUSE_DOWN, this, this.close);
        }
    }
    class Fe extends y.tips.TipsSceneUI {
        constructor() {
            super();
        }
        onEnable() {
            this.y = 800 + (i.stage_height - i.ore_height) / 2, this.x = (i.ore_width - this.width) / 2,
                this.zOrder = 4e3;
        }
        onOpened(e) {
            this._txtMsg.text = e, this.timer.frameOnce(55, this, this.closeView);
        }
        closeView() {
            this._txtMsg.text = "", this.timer.clearAll(this), this.close();
        }
    }
    class Ye {
        constructor() { }
        static init() {
            var e = Laya.ClassUtils.regClass;
            e("script/scene/BoxScene.ts", f), e("script/scene/Item/box1.ts", b), e("script/scene/Item/box2.ts", A),
                e("script/scene/Item/box3.ts", E), e("script/scene/LoadingScene.ts", de), e("side/item/SideBoxItem.ts", ge),
                e("side/item/VScrollBarChange.ts", ue), e("base/FitTheScreen.ts", me), e("script/scene/LoseScene.ts", Le),
                e("script/scene/LoseTwiceScene.ts", Se), e("script/scene/LuckBoxScene.ts", ye),
                e("script/scene/MainScene.ts", pe), e("script/scene/SelectSkinScene.ts", _e), e("script/scene/SettingScene.ts", we),
                e("script/scene/ShareScene.ts", fe), e("script/scene/SignScene.ts", be), e("script/scene/SkinTryScene.ts", Ae),
                e("script/scene/TurntableScene.ts", Ee), e("script/scene/WinScene.ts", Ie), e("side/GoldenEggScene.ts", xe),
                e("side/MoreGameScene.ts", Ce), e("side/item/HScrollBarChange.ts", Ne), e("side/item/SideBoxItem1.ts", Be),
                e("side/SideBotListScene.ts", Te), e("side/item/SideBotItem.ts", Me), e("side/SideDoubleListScene.ts", Ge),
                e("side/item/SideDoubleListItem.ts", Oe), e("side/SideGridScene.ts", ke), e("side/SideJiugongScene.ts", De),
                e("side/item/SideLeftItem.ts", Pe), e("side/SideLeftListScene.ts", Re), e("side/SideMoreNativeScene.ts", Ve),
                e("side/SideNativeBannerScene.ts", je), e("side/SideNativeScene.ts", Ue), e("side/SideTwoScene.ts", He),
                e("tips/MoveTipsScene.ts", We), e("tips/SlowScene.ts", Je), e("tips/TipsScene.ts", Fe);
        }
    }
    Ye.width = 750, Ye.height = 1334, Ye.scaleMode = "showall", Ye.screenMode = "none",
        Ye.alignV = "middle", Ye.alignH = "center", Ye.startScene = "scene/LoadingScene.scene",
        Ye.sceneRoot = "", Ye.debug = !1, Ye.stat = !1, Ye.physicsDebug = !1, Ye.exportSceneToJson = !0,
        Ye.init();
    class Ke {
        constructor() {
            this.nowVersion = "1.0.0", this.flowConfig = {};
        }
        static get instance() {
            return this._instance ? this._instance : this._instance = new Ke();
        }
        init() {

        }
        login(e, t) {

        }
        checkFlowIsOpen(e, t, i) {

        }
        getFlowConfig(e, t, i, s = !0) {

        }
        flowNavigate(t, i, s = "") {

        }
        getAppJSONConfig(e = null) {

        }
        sendEvent(e, t = null, i = null) { }
    }
    new class {
        constructor() {
            Config.preserveDrawingBuffer = !0;
            let e = new Config3D();
            window.Laya3D ? Laya3D.init(Ye.width, Ye.height, e, Laya.Handler.create(this, this.initMain)) : (Laya.init(Ye.width, Ye.height, Laya.WebGL),
                this.initMain());
        }
        initMain() {
            Laya.stage.useRetinalCanvas = !1, Laya.stage.scaleMode = Ye.scaleMode, Laya.stage.screenMode = Ye.screenMode,
                Laya.stage.alignV = Ye.alignV, Laya.stage.alignH = Ye.alignH, Laya.URL.exportSceneToJson = Ye.exportSceneToJson;
            platform.getInstance().createLogo();
            // window.yad.right = 0;
            // window.yad.scale(0.8, 0.8);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            console.log("==================================当前引擎版本" + Laya.version + "请确保打包工具和引擎版本保持一致！==============================="),
                this.startNorainGame();
        }
        startNorainGame() {
            let t = this;
            if (i.isDebug && Laya.Stat.show(0, 100), Laya.MouseManager.multiTouchEnabled = !1,
                i.isMini) {
                let t = i.$objcet.getLaunchOptionsSync();
                if (i.scene = t.scene, null != t && "" != t) {
                    let e = t.query.wxgamecid, i = t.query.channelCode;
                    g.pos = t.query.pos, e || i ? (g.isWhite = !0, S.instance.sendEvent(n.Enter_white)) : (S.instance.sendEvent(n.Enter_black),
                        g.isWhite = !1);
                }
                i.$objcet.onHide(t => {
                    e.event(a.ONHIDE);
                }), i.$objcet.onShow(t => {
                    e.event(a.ONSHOW), x.instance.isPlaying && x.instance.mainBg();
                }), i.$objcet.getSystemInfo({
                    success: e => {
                        e.windowWidth > e.windowHeight ? (i.stage_height = i.ore_width / e.windowHeight * e.windowWidth,
                            i.statusBarHeight = e.statusBarHeight * i.ore_width / e.windowHeight) : (i.stage_height = i.ore_width / e.windowWidth * e.windowHeight,
                                i.statusBarHeight = e.statusBarHeight * i.ore_width / e.windowWidth);
                    }
                });
            } else console.log("---------2-----------"), i.stage_height = i.ore_width / Laya.stage.width * Laya.stage.height;
            Laya.Browser.onMiniGame ? (L.instance.init(), i.$objcet.showShareMenu({
                withShareTicket: !0
            }), S.instance.init(), S.instance.login(t, () => {
                S.instance.getAppJSONConfig(), S.instance.getFlowConfig(s.wxId, t, e => {
                    t.startGame();
                });
            })) : Laya.Browser.onQGMiniGame ? (d.instance.init(), d.instance.login(t, () => {
                d.instance.getAppJSONConfig();
            }), Laya.timer.once(700, t, () => {
                t.startGame();
            })) : Laya.Browser.onVVMiniGame ? (N.instance.initData(), Ke.instance.init(), o.instacne.getAddress(),
                Ke.instance.getAppJSONConfig(), t.startGame()) : Laya.Browser.onTTMiniGame ? (C.instance.initData(),
                    this.startGame()) : t.startGame();
        }
        startGame() {
            if (i.isDebug && this.debugFunc(), -1 != g.pos && null != g.pos && null != g.pos && g.theposList && g.theposList.length > 0) {
                for (let e = 0; e < g.theposList.length; e++) if (g.pos == g.theposList[e]) return void Laya.Scene.open(r.LoadingScene, !1);
                Laya.Scene.open(r.BoxScene, !1);
            } else Laya.Scene.open(r.LoadingScene, !1);
        }
        debugFunc() { }
    }();
}();