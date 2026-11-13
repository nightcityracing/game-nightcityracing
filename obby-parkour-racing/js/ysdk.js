window.mockYsdk = {
  // Mock Yandex SDK object
  features: {
    LoadingAPI: {
      ready: function() {
        console.log("Mock: LoadingAPI.ready() called");
        return Promise.resolve();
      }
    },
    GameplayAPI: {
      start: function() {
        console.log("Gameplay started");
      },
      stop: function() {
        console.log("Gameplay stopped");
      }
    },
    FullscreenAPI: {},
    Player: {},
    Payments: {},
    Leaderboards: {},
    Feedback: {},
    Shortcut: {}
  },
  deviceInfo: {
    isMobile: () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    isTablet: () => false,
    isDesktop: () => !/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    isTV: () => false,
    type: "desktop"
  },
  environment: {
    i18n: {
      lang: "en",
      tld: "com"
    },
    app: {
      id: "mock-app-id"
    },
    serverTime: Math.floor(Date.now() / 1000),
    browser: {
      lang: "en"
    },
    payload: ""
  },
  feedback: {
    canReview: () => Promise.resolve({ value: false, reason: "mock" }),
    requestReview: () => Promise.resolve({ feedbackSent: false })
  },
  shortcut: {
    canShowPrompt: () => Promise.resolve({ canShow: false }),
    showPrompt: () => Promise.resolve({ outcome: "rejected" })
  },
  screen: {
    fullscreen: {
      status: "off",
      request: () => {},
      exit: () => {}
    }
  },
  auth: {
    openAuthDialog: () => Promise.resolve()
  },
  getFlags: () => Promise.resolve({
    "dark_theme": true,
    "premium_features": false,
    "experimental_ui": true,
    "debug_mode": false,
    "new_levels": true
  }),
  getPlayer: () => Promise.resolve({
    getName: () => "Player",
    getPhoto: () => "",
    getUniqueID: () => "mock-player-id",
    getMode: () => "lite",
    getPayingStatus: () => "mock-paying-status",
    setData: (data) => {
      console.log("Mock: Saving player data:", data);
      return Promise.resolve();
    },
    getData: () => Promise.resolve({ saves: null }),
    setStats: (stats) => {
      console.log("Mock: Setting player stats:", stats);
      return Promise.resolve();
    },
    getStats: () => Promise.resolve({}),
    incrementStats: (stats) => {
      console.log("Mock: Incrementing player stats:", stats);
      return Promise.resolve();
    },
    getAvatarSrc: (size) => `https://via.placeholder.com/${size}?text=Avatar`,
    publicName: "Mock Player",
    scopePermissions: {
      public_name: "allow"
    }
  }),
  getPayments: () => Promise.resolve({
    products: [
      {
        id: "coins_0",
        title: "Premium Upgrade",
        description: "Unlock all premium features",
        imageURI: "",
        priceValue: "0.00",
        price: "FREE",
        priceCurrencyCode: "USD"
      }
    ],
    purchases: [],
    
    purchase: function(id) {
      return new Promise((resolve, reject) => {
        const product = this.products.find(p => p.id === id);
        if (product) {
          this.purchases.push({
            productID: id,
            purchaseToken: "mock_token_" + Math.random().toString(36).substr(2, 9),
            developerPayload: "",
            signature: "mock_signature",
            orderId: "mock_order_" + Math.random().toString(36).substr(2, 9)
          });
          console.log("Mock purchase successful for:", id);
          resolve();
        } else {
          reject(new Error("Product not found"));
        }
      });
    },
    
    getCatalog: function() {
      return Promise.resolve(this.products);
    },
    
    getPurchases: function() {
      return Promise.resolve(this.purchases);
    },
    
    consumePurchase: function(token) {
      this.purchases = this.purchases.filter(p => p.purchaseToken !== token);
      return Promise.resolve();
    }
  }),
  
  // LEADERBOARDS API - Bu bölüm eklendi
  leaderboards: {
    setScore: function(name, score, extraData) {
      console.log(`Mock: Setting leaderboard score for "${name}": ${score}, extraData: ${extraData}`);
      return Promise.resolve();
    },
    
    getDescription: function(nameLB) {
      return Promise.resolve({
        default: false,
        description: {
          invert_sort_order: false,
          score_format: { 
            options: { 
              decimal_offset: 0 
            } 
          },
          type: "numeric"
        },
        title: `${nameLB} Leaderboard`
      });
    },
    
    getEntries: function(nameLB, options) {
      console.log(`Mock: Getting entries for leaderboard "${nameLB}"`, options);
      
      // Mock entries
      const entries = [
        {
          rank: 1,
          score: 1000,
          extraData: "{\"level\":10,\"time\":120}",
          player: {
            uniqueID: "player1",
            getAvatarSrc: (size) => `https://via.placeholder.com/${size}?text=P1`,
            publicName: "Player One",
            scopePermissions: {
              public_name: "allow"
            }
          }
        },
        {
          rank: 2,
          score: 900,
          extraData: "{\"level\":9,\"time\":110}",
          player: {
            uniqueID: "player2",
            getAvatarSrc: (size) => `https://via.placeholder.com/${size}?text=P2`,
            publicName: "Player Two",
            scopePermissions: {
              public_name: "allow"
            }
          }
        },
        {
          rank: 3,
          score: 800,
          extraData: "",
          player: {
            uniqueID: "player3",
            getAvatarSrc: (size) => `https://via.placeholder.com/${size}?text=P3`,
            publicName: "anonymous",
            scopePermissions: {
              public_name: "deny"
            }
          }
        },
        {
          rank: 4,
          score: 700,
          extraData: null,
          player: {
            uniqueID: "mock-player-id", // Current user
            getAvatarSrc: (size) => `https://via.placeholder.com/${size}?text=You`,
            publicName: "Mock Player",
            scopePermissions: {
              public_name: "allow"
            }
          }
        }
      ];
      
      // Filter based on options
      let filteredEntries = [...entries];
      
      if (options && options.quantityTop) {
        filteredEntries = filteredEntries.slice(0, options.quantityTop);
      }
      
      if (options && options.includeUser === false) {
        filteredEntries = filteredEntries.filter(entry => entry.player.uniqueID !== "mock-player-id");
      }
      
      return Promise.resolve({
        entries: filteredEntries,
        leaderboard: {
          name: nameLB,
          description: {
            invert_sort_order: false,
            score_format: { options: { decimal_offset: 0 } },
            type: "numeric"
          }
        },
        userRank: 4
      });
    }
  },
  
  getLeaderboards: () => Promise.resolve({
    getLeaderboardDescription: () => Promise.resolve({
      default: false,
      description: {
        invert_sort_order: false,
        score_format: { options: { decimal_offset: 0 } },
        type: "numeric"
      },
      title: "Mock Leaderboard"
    }),
    getLeaderboardEntries: () => Promise.resolve({ 
      entries: [],
      leaderboard: {
        name: "mock_leaderboard",
        description: {
          invert_sort_order: false,
          score_format: { options: { decimal_offset: 0 } },
          type: "numeric"
        }
      },
      userRank: 0
    }),
    setLeaderboardScore: (name, score) => {
      console.log(`Mock: Setting leaderboard score for "${name}": ${score}`);
      return Promise.resolve();
    }
  }),
  
  adv: {
    showFullscreenAdv: function(options) {
      console.log("Mock: Showing Full video");
      if (options && options.callbacks) {
        setTimeout(() => {
          options.callbacks.onOpen && options.callbacks.onOpen();
          setTimeout(() => {
            options.callbacks.onClose && options.callbacks.onClose();
          }, 500);
        }, 100);
      }
    },
    showRewardedVideo: function(options) {
      console.log("Mock: Showing rewarded video");
      if (options && options.callbacks) {
        setTimeout(() => {
          options.callbacks.onOpen && options.callbacks.onOpen();
          setTimeout(() => {
            options.callbacks.onRewarded && options.callbacks.onRewarded();
            options.callbacks.onClose && options.callbacks.onClose();
          }, 10000);
        }, 100);
      }
    },
    getBannerAdvStatus: () => Promise.resolve({ stickyAdvIsShowing: false, reason: "mock" }),
    hideBannerAdv: () => {},
    showBannerAdv: () => {}
  },
  
  serverTime: () => Math.floor(Date.now() / 1000)
};