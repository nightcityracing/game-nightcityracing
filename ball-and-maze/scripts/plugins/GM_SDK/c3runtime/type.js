"use strict";

{
	C3.Plugins.GM_SDK.Type = class SingleGlobalType extends globalThis.ISDKObjectTypeBase
	{
		constructor()
		{
			super();
		}
		
		Release()
		{
			super.Release();
		}
		
		OnCreate()
		{	
		}
	};
}