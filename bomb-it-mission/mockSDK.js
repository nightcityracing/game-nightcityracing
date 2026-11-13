// mocking the old SPI API
var GameAPI = {
    h5ads: null,
    isAdplaying: false,
    Adwrapper: {
        init: function() {
            GameAPI.h5ads = new window['h5ads']['AdWrapper']('gd', window._azerionIntegration.gdId);
        },
        preloadRewardedAd: function() {
            GameAPI.h5ads.preloadAd(window['h5ads'].AdType.rewarded);
        },
        addListeners: function(pauseCb, resumeCb) {
            GameAPI.h5ads.on(window['h5ads'].AdEvents.CONTENT_PAUSED, () => {
                GameAPI.isAdplaying = true;
                try {
                    pauseCb();
                } catch(e) {}
                
            });

            GameAPI.h5ads.on(window['h5ads'].AdEvents.CONTENT_RESUMED, () => {
                GameAPI.isAdplaying = false;
                try {
                    resumeCb();
                } catch(e) {}
            });
        },
        showIntersitialAd: function(pauseCb, resumeCb) {
            let onPauseTriggered = () => {
                pauseCb();

                GameAPI.h5ads.removeListener(window['h5ads'].AdEvents.CONTENT_PAUSED, onPauseTriggered);
            };
            let onAdComplete = () => {
                resumeCb();

                GameAPI.h5ads.removeListener(window['h5ads'].AdEvents.CONTENT_RESUMED, onAdComplete);
            };

            GameAPI.h5ads.on(window['h5ads'].AdEvents.CONTENT_RESUMED, onAdComplete);
            GameAPI.h5ads.on(window['h5ads'].AdEvents.CONTENT_PAUSED, onPauseTriggered);

            GameAPI.h5ads.showAd(window['h5ads'].AdType.interstitial);
        },
        showRewardedAd: function(pauseCb, resumeCb) {
            let rewarded = false;
            GameAPI.h5ads.addListener(window['h5ads'].AdEvents.AD_REWARDED, () => {
                rewarded = true;
            });
            let onPauseTriggered = () => {
                pauseCb();

                GameAPI.h5ads.removeListener(window['h5ads'].AdEvents.CONTENT_PAUSED, onPauseTriggered);
            };
            let onAdComplete = () => {
                if (rewarded) {
                    resumeCb();
                } else {
                    resumeCb();
                }
                GameAPI.h5ads.preloadAd(window['h5ads'].AdType.rewarded);
                GameAPI.h5ads.removeAllListeners(window['h5ads'].AdEvents.AD_REWARDED);
                GameAPI.h5ads.removeListener(window['h5ads'].AdEvents.CONTENT_RESUMED, onAdComplete);
            };

            GameAPI.h5ads.on(window['h5ads'].AdEvents.CONTENT_RESUMED, onAdComplete);
            GameAPI.h5ads.on(window['h5ads'].AdEvents.CONTENT_PAUSED, onPauseTriggered);

            GameAPI.h5ads.showAd(window['h5ads'].AdType.interstitial);
        }
    },
    GameBreak: {
        request: function(pauseCb, resumeCb) {
            // AdHandler.showAd(resumeCb);
            resumeCb()
        },

        isAvailable: function() {
            return false;
        },
        reward: function(pauseCb, resumeCb) {
            resumeCb()
        },
    },
    loadApi: function(cb){
        cb()
    },
    Branding: {
        getSplashScreen: () => {
            return {
                action: null,
                show: false,
            }
        },
        displaySplashScreen: (_splashCb) => { _splashCb()},
        getLink: () => {
            return {
                image: null,
                action: () => {}
            }
        },
        getLogo: () => {
            return null
        }                
    },
    Award: {
        submit: (_score) => {},
    },
    Score: {
        submit: (_score) => {},
    },
    Branding: {
        getLogo: () => {
            return {
                image: null
            }
        } ,
        getLink: () => {
            return {
                action: () => {}
            }
        },
    },
    loadAPI: function(cb){
        let instance = {
            version: '1.0',
            Score: {
                submit: (_score) => {},
            },
            GameBreak: {
                request: function(pauseCb, resumeCb) {
                    // AdHandler.showAd(resumeCb);
                    resumeCb()
                },
        
                isAvailable: function() {
                    return false;
                },
                reward: function(pauseCb, resumeCb) {
                    resumeCb()
                },
            },
            Branding: {
                getSplashScreen: () => {
                    return {
                        action: null,
                        show: false,
                    }
                },
                displaySplashScreen: (_splashCb) => { _splashCb()},
                getLink: () => {
                    return {
                        image: null,
                        action: () => {}
                    }
                },
                getLogo: () => {
                    return {
                        image: null
                    }
                }                
            }
        }
        cb(instance)
        console.log('called api')
        GameAPI.Adwrapper.init();
    }
}
