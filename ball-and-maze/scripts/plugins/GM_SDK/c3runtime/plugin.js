"use strict";

{
  C3.Plugins.GM_SDK = class SingleGlobalPlugin extends globalThis.ISDKPluginBase {
    constructor() {
      super();
    }

    Release() {
      super.Release();
    }
  };
}