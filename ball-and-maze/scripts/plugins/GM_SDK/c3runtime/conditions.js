"use strict";

{
  C3.Plugins.GM_SDK.Cnds = {
    ResumeGame() {
      return !this._adPlaying;
    },
    PauseGame() {
      return this._adPlaying;
    },
    PreloadedAd() {
      return this._preloadedAd;
    },
    AdViewed() {
      return this._adViewed;
    }
  };
}
