var CRAWLER_MODE = /bot|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex/i.test(navigator.userAgent);

// if (typeof gtag !== 'function')
// 	console.error('Please initialize Google Tag Manager first');
function gtag(e1,e2,e3){
	
}
if (typeof GAME_ID !== 'string')
    console.error('GAME_ID is not defined');
if (typeof REVISION === 'undefined')
    REVISION = null;

// https://support.cloudflare.com/hc/en-us/articles/200172516-Which-file-extensions-does-Cloudflare-cache-for-static-content-
if (typeof LOBBY_FILE_EXT === 'undefined')
    LOBBY_FILE_EXT = 'png';
if (typeof PACKAGE_FILE_EXT === 'undefined')
    PACKAGE_FILE_EXT = 'png';
if (typeof WASM_FILE_EXT === 'undefined')
    WASM_FILE_EXT = 'class'; // be sure your backend web server treat .class as application/wasm MIME type

if (typeof FILESYSTEM_FILE_EXT === 'undefined')
    FILESYSTEM_FILE_EXT = 'json';
if (typeof PACKAGES_PATH === 'undefined')
    PACKAGES_PATH = 'data/';

const PWA_MODE = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || !!(navigator && navigator.standalone);
const MOBILE_DEVICE = !!navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;

function LoadScript(e,t) {var n,a=document.createElement("script");a.setAttribute("src",e),a.onreadystatechange=a.onload=function(){n||(n=!0,t&&t())},document.getElementsByTagName("head")[0].appendChild(a)}
function trace() {if(void 0!=window.console&&"function"==typeof window.console.log){var o=Array.prototype.slice.call(arguments,0);try{window.console.log.apply(window.console,o)}catch(n){}}}

if (typeof USE_SENTRY !== 'undefined' && !!USE_SENTRY) {
	LoadScript('https://browser.sentry-cdn.com/5.9.1/bundle.min.js', function () {
		Sentry.init({
			dsn: 'https://a8f0d9c1a2074ebeaeb8e93e680080ff@sentry.io/1838424',
			attachStacktrace: true,
			onunhandledrejection: false,
			onerror: false
		});

		JS_OnException = function (e) {
			Sentry.captureException(e);
		};
	});
}

window.addEventListener('error', function(event) {
	if (event.message === 'Script error.') // https://dzone.com/articles/what-the-heck-is-script-error
		return;

	window.removeEventListener('error', arguments.callee);

	let desc = event.filename + " (" + event.lineno + "): " + event.message + "; " + JSON.stringify(event.error).substring(0, 80);
	// gtag('event', 'except', {
	// 	'event_category': 'error',
	// 	'event_label': desc,
	// 	'non_interaction': true
	// });

	console.error("exception logged...", desc);
});

var QUERY_PARAMS = new Object();
(function () {
	var e,
		a = /\+/g,
		r = /([^&=]+)=?([^&]*)/g,
		d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
		q = window.location.search.substring(1);
	while (e = r.exec(q))
		QUERY_PARAMS[d(e[1])] = d(e[2]);
})();

(function(){'use strict';var module={options:[],header:[navigator.platform,navigator.userAgent,navigator.appVersion,navigator.vendor,window.opera],dataos:[{name:'Windows Phone',value:'Windows Phone',version:'OS'},{name:'Windows',value:'Win',version:'NT'},{name:'iPhone',value:'iPhone',version:'OS'},{name:'iPad',value:'iPad',version:'OS'},{name:'Kindle',value:'Silk',version:'Silk'},{name:'Android',value:'Android',version:'Android'},{name:'PlayBook',value:'PlayBook',version:'OS'},{name:'BlackBerry',value:'BlackBerry',version:'/'},{name:'Macintosh',value:'Mac',version:'OS X'},{name:'Linux',value:'Linux',version:'rv'},{name:'Palm',value:'Palm',version:'PalmOS'}],databrowser:[{name:'Chrome',value:'Chrome',version:'Chrome'},{name:'Firefox',value:'Firefox',version:'Firefox'},{name:'Safari',value:'Safari',version:'Version'},{name:'Internet Explorer',value:'MSIE',version:'MSIE'},{name:'Opera',value:'Opera',version:'Opera'},{name:'BlackBerry',value:'CLDC',version:'CLDC'},{name:'Mozilla',value:'Mozilla',version:'Mozilla'}],init:function(){var agent=this.header.join(' '),os=this.matchItem(agent,this.dataos),browser=this.matchItem(agent,this.databrowser);window.os=os;window.browser=browser;},matchItem:function(string,data){var i=0,j=0,html='',regex,regexv,match,matches,version;for(i=0;i<data.length;i+=1){regex=new RegExp(data[i].value,'i');match=regex.test(string);if(match){regexv=new RegExp(data[i].version+'[- /:;]([\\d._]+)','i');matches=string.match(regexv);version='';if(matches){if(matches[1]){matches=matches[1];}}
if(matches){matches=matches.split(/[._]+/);for(j=0;j<matches.length;j+=1){if(j===0){version+=matches[j]+'.';}else{version+=matches[j];}}}else{version='0';}
return{name:data[i].name,version:parseFloat(version)};}}
return{name:'unknown',version:0};}};module.init();}());

function ListenTabFocus(onBlurCallback,onFocusCallback){var hidden,visibilityState,visibilityChange;if(typeof document.hidden!=="undefined"){hidden="hidden";visibilityChange="visibilitychange";visibilityState="visibilityState";}else if(typeof document.mozHidden!=="undefined"){hidden="mozHidden";visibilityChange="mozvisibilitychange";visibilityState="mozVisibilityState";}else if(typeof document.msHidden!=="undefined"){hidden="msHidden";visibilityChange="msvisibilitychange";visibilityState="msVisibilityState";}else if(typeof document.webkitHidden!=="undefined"){hidden="webkitHidden";visibilityChange="webkitvisibilitychange";visibilityState="webkitVisibilityState";}
if(typeof document.addEventListener==="undefined"||typeof hidden==="undefined"){}else{document.addEventListener(visibilityChange,function(){switch(document[visibilityState]){case"visible":if(onFocusCallback)onFocusCallback();break;case"hidden":if(onBlurCallback)onBlurCallback();break;}},false);}}

// https://github.com/nodeca/pako
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).pako=t()}}(function(){return function i(s,h,l){function o(e,t){if(!h[e]){if(!s[e]){var a="function"==typeof require&&require;if(!t&&a)return a(e,!0);if(_)return _(e,!0);var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}var r=h[e]={exports:{}};s[e][0].call(r.exports,function(t){return o(s[e][1][t]||t)},r,r.exports,i,s,h,l)}return h[e].exports}for(var _="function"==typeof require&&require,t=0;t<l.length;t++)o(l[t]);return o}({1:[function(t,e,a){"use strict";var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(t){for(var e,a,n=Array.prototype.slice.call(arguments,1);n.length;){var r=n.shift();if(r){if("object"!=typeof r)throw new TypeError(r+"must be non-object");for(var i in r)e=r,a=i,Object.prototype.hasOwnProperty.call(e,a)&&(t[i]=r[i])}}return t},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,a,n,r){if(e.subarray&&t.subarray)t.set(e.subarray(a,a+n),r);else for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){var e,a,n,r,i,s;for(e=n=0,a=t.length;e<a;e++)n+=t[e].length;for(s=new Uint8Array(n),e=r=0,a=t.length;e<a;e++)i=t[e],s.set(i,r),r+=i.length;return s}},i={arraySet:function(t,e,a,n,r){for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,r)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,i))},a.setTyped(n)},{}],2:[function(t,e,a){"use strict";var l=t("./common"),r=!0,i=!0;try{String.fromCharCode.apply(null,[0])}catch(t){r=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(t){i=!1}for(var o=new l.Buf8(256),n=0;n<256;n++)o[n]=252<=n?6:248<=n?5:240<=n?4:224<=n?3:192<=n?2:1;function _(t,e){if(e<65534&&(t.subarray&&i||!t.subarray&&r))return String.fromCharCode.apply(null,l.shrinkBuf(t,e));for(var a="",n=0;n<e;n++)a+=String.fromCharCode(t[n]);return a}o[254]=o[254]=1,a.string2buf=function(t){var e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new l.Buf8(h),r=i=0;i<h;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:(a<2048?e[i++]=192|a>>>6:(a<65536?e[i++]=224|a>>>12:(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63),e[i++]=128|a>>>6&63),e[i++]=128|63&a);return e},a.buf2binstring=function(t){return _(t,t.length)},a.binstring2buf=function(t){for(var e=new l.Buf8(t.length),a=0,n=e.length;a<n;a++)e[a]=t.charCodeAt(a);return e},a.buf2string=function(t,e){var a,n,r,i,s=e||t.length,h=new Array(2*s);for(a=n=0;a<s;)if((r=t[a++])<128)h[n++]=r;else if(4<(i=o[r]))h[n++]=65533,a+=i-1;else{for(r&=2===i?31:3===i?15:7;1<i&&a<s;)r=r<<6|63&t[a++],i--;1<i?h[n++]=65533:r<65536?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return _(h,n)},a.utf8border=function(t,e){var a;for((e=e||t.length)>t.length&&(e=t.length),a=e-1;0<=a&&128==(192&t[a]);)a--;return a<0?e:0===a?e:a+o[t[a]]>e?a:e}},{"./common":1}],3:[function(t,e,a){"use strict";e.exports=function(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){for(a-=s=2e3<a?2e3:a;i=i+(r=r+e[n++]|0)|0,--s;);r%=65521,i%=65521}return r|i<<16|0}},{}],4:[function(t,e,a){"use strict";var h=function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}();e.exports=function(t,e,a,n){var r=h,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return-1^t}},{}],5:[function(t,e,a){"use strict";var l,u=t("../utils/common"),o=t("./trees"),f=t("./adler32"),c=t("./crc32"),n=t("./messages"),_=0,d=4,p=0,g=-2,m=-1,b=4,r=2,v=8,w=9,i=286,s=30,h=19,y=2*i+1,k=15,z=3,x=258,B=x+z+1,A=42,C=113,S=1,j=2,E=3,U=4;function D(t,e){return t.msg=n[e],e}function I(t){return(t<<1)-(4<t?9:0)}function O(t){for(var e=t.length;0<=--e;)t[e]=0}function q(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(u.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function T(t,e){o._tr_flush_block(t,0<=t.block_start?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,q(t.strm)}function L(t,e){t.pending_buf[t.pending++]=e}function N(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function R(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,l=t.strstart>t.w_size-B?t.strstart-(t.w_size-B):0,o=t.window,_=t.w_mask,d=t.prev,u=t.strstart+x,f=o[i+s-1],c=o[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(o[(a=e)+s]===c&&o[a+s-1]===f&&o[a]===o[i]&&o[++a]===o[i+1]){i+=2,a++;do{}while(o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&o[++i]===o[++a]&&i<u);if(n=x-(u-i),i=u-x,s<n){if(t.match_start=e,h<=(s=n))break;f=o[i+s-1],c=o[i+s]}}}while((e=d[e&_])>l&&0!=--r);return s<=t.lookahead?s:t.lookahead}function H(t){var e,a,n,r,i,s,h,l,o,_,d=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=d+(d-B)){for(u.arraySet(t.window,t.window,d,d,0),t.match_start-=d,t.strstart-=d,t.block_start-=d,e=a=t.hash_size;n=t.head[--e],t.head[e]=d<=n?n-d:0,--a;);for(e=a=d;n=t.prev[--e],t.prev[e]=d<=n?n-d:0,--a;);r+=d}if(0===t.strm.avail_in)break;if(s=t.strm,h=t.window,l=t.strstart+t.lookahead,o=r,_=void 0,_=s.avail_in,o<_&&(_=o),a=0===_?0:(s.avail_in-=_,u.arraySet(h,s.input,s.next_in,_,l),1===s.state.wrap?s.adler=f(s.adler,h,_,l):2===s.state.wrap&&(s.adler=c(s.adler,h,_,l)),s.next_in+=_,s.total_in+=_,_),t.lookahead+=a,t.lookahead+t.insert>=z)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+z-1])&t.hash_mask,t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<z)););}while(t.lookahead<B&&0!==t.strm.avail_in)}function F(t,e){for(var a,n;;){if(t.lookahead<B){if(H(t),t.lookahead<B&&e===_)return S;if(0===t.lookahead)break}if(a=0,t.lookahead>=z&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+z-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-B&&(t.match_length=R(t,a)),t.match_length>=z)if(n=o._tr_tally(t,t.strstart-t.match_start,t.match_length-z),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=z){for(t.match_length--;t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+z-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart,0!=--t.match_length;);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else n=o._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(T(t,!1),0===t.strm.avail_out))return S}return t.insert=t.strstart<z-1?t.strstart:z-1,e===d?(T(t,!0),0===t.strm.avail_out?E:U):t.last_lit&&(T(t,!1),0===t.strm.avail_out)?S:j}function K(t,e){for(var a,n,r;;){if(t.lookahead<B){if(H(t),t.lookahead<B&&e===_)return S;if(0===t.lookahead)break}if(a=0,t.lookahead>=z&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+z-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=z-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-B&&(t.match_length=R(t,a),t.match_length<=5&&(1===t.strategy||t.match_length===z&&4096<t.strstart-t.match_start)&&(t.match_length=z-1)),t.prev_length>=z&&t.match_length<=t.prev_length){for(r=t.strstart+t.lookahead-z,n=o._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-z),t.lookahead-=t.prev_length-1,t.prev_length-=2;++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+z-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!=--t.prev_length;);if(t.match_available=0,t.match_length=z-1,t.strstart++,n&&(T(t,!1),0===t.strm.avail_out))return S}else if(t.match_available){if((n=o._tr_tally(t,0,t.window[t.strstart-1]))&&T(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return S}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=o._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<z-1?t.strstart:z-1,e===d?(T(t,!0),0===t.strm.avail_out?E:U):t.last_lit&&(T(t,!1),0===t.strm.avail_out)?S:j}function M(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}function P(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=v,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new u.Buf16(2*y),this.dyn_dtree=new u.Buf16(2*(2*s+1)),this.bl_tree=new u.Buf16(2*(2*h+1)),O(this.dyn_ltree),O(this.dyn_dtree),O(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new u.Buf16(k+1),this.heap=new u.Buf16(2*i+1),O(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new u.Buf16(2*i+1),O(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function G(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=r,(e=t.state).pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?A:C,t.adler=2===e.wrap?0:1,e.last_flush=_,o._tr_init(e),p):D(t,g)}function J(t){var e,a=G(t);return a===p&&((e=t.state).window_size=2*e.w_size,O(e.head),e.max_lazy_match=l[e.level].max_lazy,e.good_match=l[e.level].good_length,e.nice_match=l[e.level].nice_length,e.max_chain_length=l[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=z-1,e.match_available=0,e.ins_h=0),a}function Q(t,e,a,n,r,i){if(!t)return g;var s=1;if(e===m&&(e=6),n<0?(s=0,n=-n):15<n&&(s=2,n-=16),r<1||w<r||a!==v||n<8||15<n||e<0||9<e||i<0||b<i)return D(t,g);8===n&&(n=9);var h=new P;return(t.state=h).strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+z-1)/z),h.window=new u.Buf8(2*h.w_size),h.head=new u.Buf16(h.hash_size),h.prev=new u.Buf16(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new u.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,J(t)}l=[new M(0,0,0,0,function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(H(t),0===t.lookahead&&e===_)return S;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,T(t,!1),0===t.strm.avail_out))return S;if(t.strstart-t.block_start>=t.w_size-B&&(T(t,!1),0===t.strm.avail_out))return S}return t.insert=0,e===d?(T(t,!0),0===t.strm.avail_out?E:U):(t.strstart>t.block_start&&(T(t,!1),t.strm.avail_out),S)}),new M(4,4,8,4,F),new M(4,5,16,8,F),new M(4,6,32,32,F),new M(4,4,16,16,K),new M(8,16,32,32,K),new M(8,16,128,128,K),new M(8,32,128,256,K),new M(32,128,258,1024,K),new M(32,258,258,4096,K)],a.deflateInit=function(t,e){return Q(t,e,v,15,8,0)},a.deflateInit2=Q,a.deflateReset=J,a.deflateResetKeep=G,a.deflateSetHeader=function(t,e){return t&&t.state?2!==t.state.wrap?g:(t.state.gzhead=e,p):g},a.deflate=function(t,e){var a,n,r,i;if(!t||!t.state||5<e||e<0)return t?D(t,g):g;if(n=t.state,!t.output||!t.input&&0!==t.avail_in||666===n.status&&e!==d)return D(t,0===t.avail_out?-5:g);if(n.strm=t,a=n.last_flush,n.last_flush=e,n.status===A)if(2===n.wrap)t.adler=0,L(n,31),L(n,139),L(n,8),n.gzhead?(L(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),L(n,255&n.gzhead.time),L(n,n.gzhead.time>>8&255),L(n,n.gzhead.time>>16&255),L(n,n.gzhead.time>>24&255),L(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),L(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(L(n,255&n.gzhead.extra.length),L(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=c(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69):(L(n,0),L(n,0),L(n,0),L(n,0),L(n,0),L(n,9===n.level?2:2<=n.strategy||n.level<2?4:0),L(n,3),n.status=C);else{var s=v+(n.w_bits-8<<4)<<8;s|=(2<=n.strategy||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(s|=32),s+=31-s%31,n.status=C,N(n,s),0!==n.strstart&&(N(n,t.adler>>>16),N(n,65535&t.adler)),t.adler=1}if(69===n.status)if(n.gzhead.extra){for(r=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>r&&(t.adler=c(t.adler,n.pending_buf,n.pending-r,r)),q(t),r=n.pending,n.pending!==n.pending_buf_size));)L(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>r&&(t.adler=c(t.adler,n.pending_buf,n.pending-r,r)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=73)}else n.status=73;if(73===n.status)if(n.gzhead.name){r=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>r&&(t.adler=c(t.adler,n.pending_buf,n.pending-r,r)),q(t),r=n.pending,n.pending===n.pending_buf_size)){i=1;break}L(n,i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0)}while(0!==i);n.gzhead.hcrc&&n.pending>r&&(t.adler=c(t.adler,n.pending_buf,n.pending-r,r)),0===i&&(n.gzindex=0,n.status=91)}else n.status=91;if(91===n.status)if(n.gzhead.comment){r=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>r&&(t.adler=c(t.adler,n.pending_buf,n.pending-r,r)),q(t),r=n.pending,n.pending===n.pending_buf_size)){i=1;break}L(n,i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0)}while(0!==i);n.gzhead.hcrc&&n.pending>r&&(t.adler=c(t.adler,n.pending_buf,n.pending-r,r)),0===i&&(n.status=103)}else n.status=103;if(103===n.status&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&q(t),n.pending+2<=n.pending_buf_size&&(L(n,255&t.adler),L(n,t.adler>>8&255),t.adler=0,n.status=C)):n.status=C),0!==n.pending){if(q(t),0===t.avail_out)return n.last_flush=-1,p}else if(0===t.avail_in&&I(e)<=I(a)&&e!==d)return D(t,-5);if(666===n.status&&0!==t.avail_in)return D(t,-5);if(0!==t.avail_in||0!==n.lookahead||e!==_&&666!==n.status){var h=2===n.strategy?function(t,e){for(var a;;){if(0===t.lookahead&&(H(t),0===t.lookahead)){if(e===_)return S;break}if(t.match_length=0,a=o._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(T(t,!1),0===t.strm.avail_out))return S}return t.insert=0,e===d?(T(t,!0),0===t.strm.avail_out?E:U):t.last_lit&&(T(t,!1),0===t.strm.avail_out)?S:j}(n,e):3===n.strategy?function(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=x){if(H(t),t.lookahead<=x&&e===_)return S;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=z&&0<t.strstart&&(n=s[r=t.strstart-1])===s[++r]&&n===s[++r]&&n===s[++r]){i=t.strstart+x;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=x-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=z?(a=o._tr_tally(t,1,t.match_length-z),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=o._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(T(t,!1),0===t.strm.avail_out))return S}return t.insert=0,e===d?(T(t,!0),0===t.strm.avail_out?E:U):t.last_lit&&(T(t,!1),0===t.strm.avail_out)?S:j}(n,e):l[n.level].func(n,e);if(h!==E&&h!==U||(n.status=666),h===S||h===E)return 0===t.avail_out&&(n.last_flush=-1),p;if(h===j&&(1===e?o._tr_align(n):5!==e&&(o._tr_stored_block(n,0,0,!1),3===e&&(O(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),q(t),0===t.avail_out))return n.last_flush=-1,p}return e!==d?p:n.wrap<=0?1:(2===n.wrap?(L(n,255&t.adler),L(n,t.adler>>8&255),L(n,t.adler>>16&255),L(n,t.adler>>24&255),L(n,255&t.total_in),L(n,t.total_in>>8&255),L(n,t.total_in>>16&255),L(n,t.total_in>>24&255)):(N(n,t.adler>>>16),N(n,65535&t.adler)),q(t),0<n.wrap&&(n.wrap=-n.wrap),0!==n.pending?p:1)},a.deflateEnd=function(t){var e;return t&&t.state?(e=t.state.status)!==A&&69!==e&&73!==e&&91!==e&&103!==e&&e!==C&&666!==e?D(t,g):(t.state=null,e===C?D(t,-3):p):g},a.deflateSetDictionary=function(t,e){var a,n,r,i,s,h,l,o,_=e.length;if(!t||!t.state)return g;if(2===(i=(a=t.state).wrap)||1===i&&a.status!==A||a.lookahead)return g;for(1===i&&(t.adler=f(t.adler,e,_,0)),a.wrap=0,_>=a.w_size&&(0===i&&(O(a.head),a.strstart=0,a.block_start=0,a.insert=0),o=new u.Buf8(a.w_size),u.arraySet(o,e,_-a.w_size,a.w_size,0),e=o,_=a.w_size),s=t.avail_in,h=t.next_in,l=t.input,t.avail_in=_,t.next_in=0,t.input=e,H(a);a.lookahead>=z;){for(n=a.strstart,r=a.lookahead-(z-1);a.ins_h=(a.ins_h<<a.hash_shift^a.window[n+z-1])&a.hash_mask,a.prev[n&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=n,n++,--r;);a.strstart=n,a.lookahead=z-1,H(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=z-1,a.match_available=0,t.next_in=h,t.input=l,t.avail_in=s,a.wrap=i,p},a.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":1,"./adler32":3,"./crc32":4,"./messages":6,"./trees":7}],6:[function(t,e,a){"use strict";e.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],7:[function(t,e,a){"use strict";var l=t("../utils/common"),h=0,o=1;function n(t){for(var e=t.length;0<=--e;)t[e]=0}var _=0,s=29,d=256,u=d+1+s,f=30,c=19,g=2*u+1,m=15,r=16,p=7,b=256,v=16,w=17,y=18,k=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],z=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],x=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],B=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],A=new Array(2*(u+2));n(A);var C=new Array(2*f);n(C);var S=new Array(512);n(S);var j=new Array(256);n(j);var E=new Array(s);n(E);var U,D,I,O=new Array(f);function q(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function i(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function T(t){return t<256?S[t]:S[256+(t>>>7)]}function L(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function N(t,e,a){t.bi_valid>r-a?(t.bi_buf|=e<<t.bi_valid&65535,L(t,t.bi_buf),t.bi_buf=e>>r-t.bi_valid,t.bi_valid+=a-r):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function R(t,e,a){N(t,a[2*e],a[2*e+1])}function H(t,e){for(var a=0;a|=1&t,t>>>=1,a<<=1,0<--e;);return a>>>1}function F(t,e,a){var n,r,i=new Array(m+1),s=0;for(n=1;n<=m;n++)i[n]=s=s+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=H(i[h]++,h))}}function K(t){var e;for(e=0;e<u;e++)t.dyn_ltree[2*e]=0;for(e=0;e<f;e++)t.dyn_dtree[2*e]=0;for(e=0;e<c;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*b]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function M(t){8<t.bi_valid?L(t,t.bi_buf):0<t.bi_valid&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function P(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]}function G(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&P(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!P(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n}function J(t,e,a){var n,r,i,s,h=0;if(0!==t.last_lit)for(;n=t.pending_buf[t.d_buf+2*h]<<8|t.pending_buf[t.d_buf+2*h+1],r=t.pending_buf[t.l_buf+h],h++,0===n?R(t,r,e):(R(t,(i=j[r])+d+1,e),0!==(s=k[i])&&N(t,r-=E[i],s),R(t,i=T(--n),a),0!==(s=z[i])&&N(t,n-=O[i],s)),h<t.last_lit;);R(t,b,e)}function Q(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,l=e.stat_desc.elems,o=-1;for(t.heap_len=0,t.heap_max=g,a=0;a<l;a++)0!==i[2*a]?(t.heap[++t.heap_len]=o=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=o<2?++o:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=o,a=t.heap_len>>1;1<=a;a--)G(t,i,a);for(r=l;a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],G(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,G(t,i,1),2<=t.heap_len;);t.heap[--t.heap_max]=t.heap[1],function(t,e){var a,n,r,i,s,h,l=e.dyn_tree,o=e.max_code,_=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,p=0;for(i=0;i<=m;i++)t.bl_count[i]=0;for(l[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<g;a++)c<(i=l[2*l[2*(n=t.heap[a])+1]+1]+1)&&(i=c,p++),l[2*n+1]=i,o<n||(t.bl_count[i]++,s=0,f<=n&&(s=u[n-f]),h=l[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(_[2*n+1]+s)));if(0!==p){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,p-=2}while(0<p);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)o<(r=t.heap[--a])||(l[2*r+1]!==i&&(t.opt_len+=(i-l[2*r+1])*l[2*r],l[2*r+1]=i),n--)}}(t,e),F(i,o,t.bl_count)}function V(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,o=4;for(0===s&&(l=138,o=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<l&&r===s||(h<o?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[2*v]++):h<=10?t.bl_tree[2*w]++:t.bl_tree[2*y]++,i=r,(h=0)===s?(l=138,o=3):r===s?(l=6,o=3):(l=7,o=4))}function W(t,e,a){var n,r,i=-1,s=e[1],h=0,l=7,o=4;for(0===s&&(l=138,o=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++h<l&&r===s)){if(h<o)for(;R(t,r,t.bl_tree),0!=--h;);else 0!==r?(r!==i&&(R(t,r,t.bl_tree),h--),R(t,v,t.bl_tree),N(t,h-3,2)):h<=10?(R(t,w,t.bl_tree),N(t,h-3,3)):(R(t,y,t.bl_tree),N(t,h-11,7));i=r,(h=0)===s?(l=138,o=3):r===s?(l=6,o=3):(l=7,o=4)}}n(O);var X=!1;function Y(t,e,a,n){var r,i,s,h;N(t,(_<<1)+(n?1:0),3),i=e,s=a,h=!0,M(r=t),h&&(L(r,s),L(r,~s)),l.arraySet(r.pending_buf,r.window,i,s,r.pending),r.pending+=s}a._tr_init=function(t){X||(function(){var t,e,a,n,r,i=new Array(m+1);for(n=a=0;n<s-1;n++)for(E[n]=a,t=0;t<1<<k[n];t++)j[a++]=n;for(j[a-1]=n,n=r=0;n<16;n++)for(O[n]=r,t=0;t<1<<z[n];t++)S[r++]=n;for(r>>=7;n<f;n++)for(O[n]=r<<7,t=0;t<1<<z[n]-7;t++)S[256+r++]=n;for(e=0;e<=m;e++)i[e]=0;for(t=0;t<=143;)A[2*t+1]=8,t++,i[8]++;for(;t<=255;)A[2*t+1]=9,t++,i[9]++;for(;t<=279;)A[2*t+1]=7,t++,i[7]++;for(;t<=287;)A[2*t+1]=8,t++,i[8]++;for(F(A,u+1,i),t=0;t<f;t++)C[2*t+1]=5,C[2*t]=H(t,5);U=new q(A,k,d+1,u,m),D=new q(C,z,0,f,m),I=new q(new Array(0),x,0,c,p)}(),X=!0),t.l_desc=new i(t.dyn_ltree,U),t.d_desc=new i(t.dyn_dtree,D),t.bl_desc=new i(t.bl_tree,I),t.bi_buf=0,t.bi_valid=0,K(t)},a._tr_stored_block=Y,a._tr_flush_block=function(t,e,a,n){var r,i,s=0;0<t.level?(2===t.strm.data_type&&(t.strm.data_type=function(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return h;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return o;for(e=32;e<d;e++)if(0!==t.dyn_ltree[2*e])return o;return h}(t)),Q(t,t.l_desc),Q(t,t.d_desc),s=function(t){var e;for(V(t,t.dyn_ltree,t.l_desc.max_code),V(t,t.dyn_dtree,t.d_desc.max_code),Q(t,t.bl_desc),e=c-1;3<=e&&0===t.bl_tree[2*B[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}(t),r=t.opt_len+3+7>>>3,(i=t.static_len+3+7>>>3)<=r&&(r=i)):r=i=a+5,a+4<=r&&-1!==e?Y(t,e,a,n):4===t.strategy||i===r?(N(t,2+(n?1:0),3),J(t,A,C)):(N(t,4+(n?1:0),3),function(t,e,a,n){var r;for(N(t,e-257,5),N(t,a-1,5),N(t,n-4,4),r=0;r<n;r++)N(t,t.bl_tree[2*B[r]+1],3);W(t,t.dyn_ltree,e-1),W(t,t.dyn_dtree,a-1)}(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),J(t,t.dyn_ltree,t.dyn_dtree)),K(t),n&&M(t)},a._tr_tally=function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(j[a]+d+1)]++,t.dyn_dtree[2*T(e)]++),t.last_lit===t.lit_bufsize-1},a._tr_align=function(t){var e;N(t,2,3),R(t,b,A),16===(e=t).bi_valid?(L(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):8<=e.bi_valid&&(e.pending_buf[e.pending++]=255&e.bi_buf,e.bi_buf>>=8,e.bi_valid-=8)}},{"../utils/common":1}],8:[function(t,e,a){"use strict";e.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],"/lib/deflate.js":[function(t,e,a){"use strict";var s=t("./zlib/deflate"),h=t("./utils/common"),l=t("./utils/strings"),r=t("./zlib/messages"),i=t("./zlib/zstream"),o=Object.prototype.toString,_=0,d=-1,u=0,f=8;function c(t){if(!(this instanceof c))return new c(t);this.options=h.assign({level:d,method:f,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},t||{});var e=this.options;e.raw&&0<e.windowBits?e.windowBits=-e.windowBits:e.gzip&&0<e.windowBits&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new i,this.strm.avail_out=0;var a=s.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==_)throw new Error(r[a]);if(e.header&&s.deflateSetHeader(this.strm,e.header),e.dictionary){var n;if(n="string"==typeof e.dictionary?l.string2buf(e.dictionary):"[object ArrayBuffer]"===o.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(a=s.deflateSetDictionary(this.strm,n))!==_)throw new Error(r[a]);this._dict_set=!0}}function n(t,e){var a=new c(e);if(a.push(t,!0),a.err)throw a.msg||r[a.err];return a.result}c.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:!0===e?4:0,"string"==typeof t?r.input=l.string2buf(t):"[object ArrayBuffer]"===o.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new h.Buf8(i),r.next_out=0,r.avail_out=i),1!==(a=s.deflate(r,n))&&a!==_)return this.onEnd(a),!(this.ended=!0);0!==r.avail_out&&(0!==r.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(l.buf2binstring(h.shrinkBuf(r.output,r.next_out))):this.onData(h.shrinkBuf(r.output,r.next_out)))}while((0<r.avail_in||0===r.avail_out)&&1!==a);return 4===n?(a=s.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===_):2!==n||(this.onEnd(_),!(r.avail_out=0))},c.prototype.onData=function(t){this.chunks.push(t)},c.prototype.onEnd=function(t){t===_&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=h.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg},a.Deflate=c,a.deflate=n,a.deflateRaw=function(t,e){return(e=e||{}).raw=!0,n(t,e)},a.gzip=function(t,e){return(e=e||{}).gzip=!0,n(t,e)}},{"./utils/common":1,"./utils/strings":2,"./zlib/deflate":5,"./zlib/messages":6,"./zlib/zstream":8}]},{},[])("/lib/deflate.js")});

if (browser.name === "Internet Explorer") {
	if (!CRAWLER_MODE)
		alert('Warning: Internet Explorer is not supported. Please use any modern browser to play this game.');
}

const DEV_VERSION = QUERY_PARAMS.dev === '1';

const BROWSER_LANG = (navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage).split('-')[0].toLowerCase();
const EXACT_LANG = QUERY_PARAMS.locale || BROWSER_LANG;

const NOCACHE = '?nocache' + ((new Date).getTime() % 99999);

const CDN_DOMAIN = 'clash3d.com';
const CDN_PATH = '';

const FS_BASEPATH = "thug";

const gamemodule_path = CDN_PATH;

// NOTE: keep in mind that service worker does not respect cache control
const gamemodule_file = DEV_VERSION ? '/embed/ninja_dev/index.js' + NOCACHE : (!REVISION ? "index.js?v=1" : "index_r" + REVISION.module + ".js");
const lobby_file = DEV_VERSION ? String.fromCharCode(108, 111, 98, 98, 121, 46, 115, 119, 102) + NOCACHE : (REVISION ? "lobby_r" + REVISION.lobby + "." + LOBBY_FILE_EXT : "lobby." + LOBBY_FILE_EXT);
const paks_path = CDN_PATH + PACKAGES_PATH;
const paks_filesystem_file = "filesystem." + FILESYSTEM_FILE_EXT + (REVISION ? '?r=' + REVISION.filesystem : (DEV_VERSION ? NOCACHE : ''));
if (DEV_VERSION)
	console.warn("Attention. Using developer version:", gamemodule_file, lobby_file);

// https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
// chrome.exe --disable-features=AutoplayIgnoreWebAudio
// https://gist.github.com/surma/301c9c377aaf90a3fdae615d4840bb2e
var audiocontext_list = [];
var acontext = window.AudioContext || window.webkitAudioContext;
if (acontext) {
	try {
		var acproxy = new Proxy(acontext, {
			construct(target, args) {
				var result = new target(...args);
				audiocontext_list.push(result);
				trace('AudioContext created with state: ', result.state);
				return result;
			}
		});
		if (window.AudioContext)
			window.AudioContext = acproxy;
		else if (window.webkitAudioContext) // iOS Safari
			window.webkitAudioContext = acproxy;
	} catch (err) {
		console.error(err);
	}
}

function JS_MuteAudio() {
	audiocontext_list.forEach(function (ctx) {
        if (ctx.state == 'running') {
            ctx.suspend().then(() => {
                if (DEV_VERSION)
					trace('muting audio context, new state:', ctx.state);
            });
        }
    });
}

function JS_UnMuteAudio() {
	audiocontext_list.forEach(function (ctx) {
        if (ctx.state != 'running') {
            ctx.resume().then(() => {
				if (DEV_VERSION)
					trace('unmuting audio context, new state:', ctx.state);
            });
        }
    });
}

ListenTabFocus(function () {
	trace('muting audio context on blur:');
    JS_MuteAudio();

}, function () {
	trace('unmuting audio context on focus:');
	JS_UnMuteAudio();
});

function LogError(msg) {
	// gtag('event', 'except', {
    //     'event_category': 'com_error',
    //     'event_label': msg,
    //     'non_interaction': true
    // });

    console.error("error logged...", msg);
}

// onload(ArrayBuffer), onprogress([0-1.0])
function FetchArrayBuffer(url, onload, onprogress) {
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "arraybuffer";
	req.onload = function(event) {
		var arrayBuffer = req.response;
		onload(arrayBuffer);
	};
    if (typeof onprogress == 'function')
        req.onprogress = function (event) {
            if (event.lengthComputable)
                onprogress(event.loaded / event.total);
        };
	req.send();
}

// onload(parsed_json_object), onprogress([0-1.0])
function FetchJSONObject(url, onload, onprogress) {
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "json";
	req.onload = function (event) {
		onload(req.response);
	};
    if (typeof onprogress == 'function')
        req.onprogress = function (event) {
            if (event.lengthComputable)
                onprogress(event.loaded / event.total);
        };
	req.send();
}

function FetchTextObject(url, onload) {
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.responseType = "text";
	req.onload = function (event) {
		onload(req.response);
	};
	req.send();
}

function FetchHeaders(url, onload) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = function() {
        if (this.readyState == this.HEADERS_RECEIVED) {
            //req.getResponseHeader("X-Payload");
            onload(req);
            req.abort();
        }
    };
    req.send();
}

trace(os.name, os.version, browser.name, browser.version, gamemodule_path, PWA_MODE ? 'pwa mode' : '');

var GameModule;
var GAMEMODULE_FILESYSTEM;
var GAMEMODULE_CONFIG;

function UpdateProgressBar(progress) {
    $(".meter > span").each(function() {
        $(this).width('' + 100 * progress + '%');
    });
}

function AnimateProgressBar(progress, target_progress, duration_ms) {
    $(".meter > span").each(function() {
        $(this)
            .width('' + 100 * progress + '%')
            .animate({ width: '' + 100 * target_progress + '%' }, duration_ms)
            ;
    });
}

// NOTE: 2.0 if transformed by @media
function CanvasDotsPerPixel() {
    var element = document.getElementById('canvas');
    return element.offsetWidth / element.getBoundingClientRect().width;
}

function ReplaceFileExtension(filename, new_ext) {
    var parts = filename.split('.');
    parts.pop();
    parts.push(new_ext);
    return parts.join('.');
}

function DownloadAndStoreAssets(on_complete) {
	var paks = GAMEMODULE_FILESYSTEM.preload_paks.concat();
	var map_filename = GAMEMODULE_FILESYSTEM.map_paks[GAME_ID];
	paks.push(map_filename);

	var paks_remain = paks.length;

	function load_pak(filename) {
		var pak_url = paks_path + ReplaceFileExtension(filename, PACKAGE_FILE_EXT);

		FetchArrayBuffer(pak_url, function (arraybuffer) {
			trace("storing", filename, "to file system");
            FS.createPreloadedFile("/" + FS_BASEPATH, ReplaceFileExtension(filename, 'png'), new Uint8Array(arraybuffer), true, false); // REF: library_fs.js: createPreloadedFile
			// NOTE: MEMFS doesnt require FS.syncfs
			if (--paks_remain == 0)
				on_complete();
		});
	}

	for (var i in paks)
		load_pak(paks[i]);
}

function CreateGameModule() {
	return {
        noImageDecoding: true,

		preRun: [],
        postRun: [],

        onAbort: function (what) {
            if (DEV_VERSION) {
                trace('abort', what);
                debugger;
            }
        },

		locateFile: function (filename, script_dir) {
            trace('locateFile:', filename, script_dir);

            var filename_parts = filename.split('.');
            var ext = filename_parts.pop();
            if (ext === "wasm") {
                var name = filename_parts.shift();

				if (DEV_VERSION)
					return '/embed/ninja_dev/' + filename + NOCACHE;
                else if (REVISION)
                    return gamemodule_path + name + "_r" + REVISION.module + "." + WASM_FILE_EXT;
                else
                    return gamemodule_path + ReplaceFileExtension(filename, WASM_FILE_EXT);
            }
            else
                return gamemodule_path + filename;
		},

		preInit: function () {
			trace('GameModule.preInit');

            UpdateProgressBar(0.25);

			var args = [];

            trace("loading lobby...");
			GameModule.addRunDependency('loading lobby');
			FetchArrayBuffer(gamemodule_path + lobby_file, function (lobby_file) {
				GameModule['FS_createPreloadedFile']("/", "lobby.png", new Uint8Array(lobby_file), true, false); // REF: library_fs.js: createPreloadedFile
				trace('lobby loaded');
				GameModule.removeRunDependency('loading lobby');

			}, function (progress) {
                UpdateProgressBar(0.25 + progress * 0.15);

                if (progress == 1)
                    AnimateProgressBar(0.4, 1.0, 15000);
            });

			FS.mkdir(FS_BASEPATH, 511); // octal 0777 is not supported in strict mode

			GameModule.arguments = args;
			GameModule.viewport = document.getElementById("viewport");

			if (typeof window.__sealed_session_json === 'undefined') {
				GameModule.__account_waiting_hook = function () {
					GameModule.removeRunDependency('waiting for ACCOUNT');
					delete GameModule.__account_waiting_hook;
				};
				GameModule.addRunDependency('waiting for ACCOUNT');
			}

            GameModule.addRunDependency('waiting for GAMEMODULE_FILESYSTEM');
            var GAMEMODULE_FILESYSTEM_waiting = setInterval(function () {
                if (GAMEMODULE_FILESYSTEM) {
                    clearInterval(GAMEMODULE_FILESYSTEM_waiting);
                    GameModule.removeRunDependency('waiting for GAMEMODULE_FILESYSTEM');
                    trace('GAMEMODULE_FILESYSTEM waiting finished');
                }
            }, 100);

            GameModule.addRunDependency('waiting for GAMEMODULE_CONFIG');
            var GAMEMODULE_CONFIG_waiting = setInterval(function () {
                if (GAMEMODULE_CONFIG) {
                    clearInterval(GAMEMODULE_CONFIG_waiting);
                    GameModule.removeRunDependency('waiting for GAMEMODULE_CONFIG');
                    trace('GAMEMODULE_CONFIG waiting finished');
                }
            }, 100);

			GameModule.addOnPreMain(function () {
				trace('GameModule.addOnPreMain');

				var canvas = document.getElementById("canvas");

				$('#canvas').on('click touchstart', function() {
					window.focus();
					canvas.focus();

                    audiocontext_list.forEach(function (ctx) {
                        if (ctx.state != 'running') {
                            ctx.resume().then(() => {
                                trace('resuming audio context on click, new state:', ctx.state);
                            });
                        }
                    });
				});

				GameModule['canvas'] = canvas;

				GameModule.postRun.push(function() {
					trace('GameModule.postRun');

					canvas.focus();

                    trace("data packages loading");
                    DownloadAndStoreAssets(function () {
                        trace("all data packages downloaded");
                        GameModule.all_resources_downloaded = true;
                    });
				});
			});

		}
	};
}

function JS_OnGameplayStarted() {
    trace('JS_OnGameplayStarted');

    try { if (typeof parent.JS_OnLobbyShown === 'function') parent.JS_OnLobbyShown(); } catch (e) {}

    setTimeout(function () {
        $("#preloader").remove();
    }, 180);

    gtag('event', 'game', {
      'event_category': 'gameplay',
      'event_label': 'started',
      'value': 1
    });

    try { if (typeof JS_AfterGameplayStarted === 'function') JS_AfterGameplayStarted(); } catch (e) {}; // NOTE: defined somewhere else
}

function wasmAvailable() {
	try {
		var bin = new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]);
		var mod = new WebAssembly.Module(bin);
		var inst = new WebAssembly.Instance(mod, {});

		// test storing to and loading from a non-zero location via a parameter.
		// Safari on iOS 11.2.5 returns 0 unexpectedly at non-zero locations
		return (inst.exports.test(4) !== 0);

	} catch (e) {
		return false;
	}
}

var config_url = 'https://clash3d.com/config/' + GAME_ID + '.required';
if (DEV_VERSION)
    config_url += '?dev=1';
var network_config_waiting_timer = setTimeout(function () {
    trace("network config was not loaded, using stub");
    GAMEMODULE_CONFIG = {};

    gtag('event', 'site', {
        'event_category': 'config',
        'event_label': 'fetch_failed',
        'value': 1,
        'non_interaction': true
    });
}, 2500);

FetchJSONObject(config_url, function (obj) {
    trace("network config loaded");
    GAMEMODULE_CONFIG = obj;
    clearTimeout(network_config_waiting_timer);
});

FetchJSONObject(paks_path + paks_filesystem_file, function (filesystem) {
    trace("game module file system loaded");
    GAMEMODULE_FILESYSTEM = filesystem;

}, function (progress) {
    UpdateProgressBar(0.05 + 0.05 * progress);
});

function OnAccountFetched(sealed_session_json, session_config) {
	window.__sealed_session_json = sealed_session_json;
	if (session_config)
		window.__session_config_json = JSON.stringify(session_config);

	if (GameModule && GameModule.__account_waiting_hook)
		GameModule.__account_waiting_hook();
}

if (typeof JS_OpenLoginWidget !== "function")
	window.JS_OpenLoginWidget = function (sealed_session_json) {
		let iframe_url = 'https://clash3d.com/account/login.html?game_id=' + GAME_ID;

		let login_div = document.getElementById('loginholder');
		if (!login_div) {
			login_div = document.createElement("div");
			login_div.id = 'loginholder';
			document.body.appendChild(login_div);
		}

		function receiveMsg(event) {
			if (new URL(event.origin).origin !== new URL(iframe_url).origin)
				return;
			if (!event.data || typeof event.data !== 'object' || typeof event.data.op !== 'string')
				return;

			if (DEV_VERSION)
				trace('JS_OpenLoginWidget::receiveMsg from ' + event.origin, event);

			window.removeEventListener('message', receiveMsg);
			$('#loginiframe').remove();

			OnAccountFetched(event.data.result, event.data.config);

			let json = JSON.stringify(event.data);
			let buffer = GameModule._malloc(json.length * 4 + 1); // TODO: stackAlloc?
			stringToUTF8(json, buffer, json.length * 4 + 1);

			let stack = stackSave();
			GameModule._on_account_changed(buffer); // NOTE: defined in PlayerSDL.cpp
			stackRestore(stack);

			GameModule._free(buffer);
		}

		$('#' + login_div.id).html(
			'<iframe id="loginiframe" src="' + iframe_url + '" ' +
			'allowtransparency="true" frameborder="0" scrolling="no" marginwidth="0" marginheight="0" ' +
			'style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;"' +
			'></iframe>'
			);

		window.addEventListener('message', receiveMsg, false);
	}

function AccountOpsCall(on_finish, params) {
	var data = {
		game_id: GAME_ID
	};
	if (params)
		for (var key in params)
			data[key] = params[key];
	$.ajax({
		dataType: 'json',
		type: 'POST',
		data: data,
		url: "https://clash3d.com/account/ops",
		crossDomain: true,
		xhrFields: {
			withCredentials: true
		},
		timeout: 5000
	}).done(function (resp) {
		on_finish(resp);
	})
	.fail(function () {
		on_finish(null);
	});
}

if (typeof FetchAccount !== 'function')
	FetchAccount = function () {
		AccountOpsCall(function (resp) {
			if (!resp || typeof resp !== 'object') {
				if (DEV_VERSION)
					console.warn('FetchAccount: invalid Clash3D Account session response', resp);
				OnAccountFetched(null);
				return;
			}

			if (resp.success === false) {
				if (DEV_VERSION)
					console.log('FetchAccount: user has not been logged in...');
				OnAccountFetched(null);
				return;
			}

			if (DEV_VERSION)
				console.log('FetchAccount: Clash3D Account remote session received:', resp);

			try {
				let sealed_session_json = resp.result;
				if (resp.success !== true || typeof sealed_session_json !== 'string' || typeof resp.config !== 'object')
					throw new Error('invalid fields');
				if (!JSON.parse(sealed_session_json))
					throw new Error('invalid sealed session');
				OnAccountFetched(sealed_session_json, resp.config);

			} catch (e) {
				console.error(e);
				console.error('FetchAccount: invalid response content:', resp);
				OnAccountFetched(null);
			}
		});
	};

if (typeof CommitAccountData !== 'function')
	CommitAccountData = function (data, sig) {
		let json = JSON.stringify({
			data: data, sig: sig
		});

		var json_bin8 = pako.deflateRaw(json);

		if (DEV_VERSION)
			trace('Commiting account data:', json.length, 'bytes, compressed to ', json_bin8.length, 'bytes to remote server...');

		var xhr = new XMLHttpRequest;
		xhr.open("POST", 'https://clash3d.com/account/ops?game_id=' + GAME_ID + '&op=save');
		xhr.withCredentials = true;
		xhr.setRequestHeader("Content-Type", "application/octet-stream");
		xhr.send(json_bin8);
	};

FetchAccount();

function Xsolla_PurchaseItem(sku_id, price, currency, sandbox) {
	function finish(possible_purchase) {
		function exit_to_module(result) {
			let json = JSON.stringify(result);
			let buffer = GameModule.stackAlloc(json.length * 4 + 1);
			stringToUTF8(json, buffer, json.length * 4 + 1);

			let stack = stackSave();
			GameModule._on_external_call(buffer); // NOTE: defined in PlayerSDL.cpp
			stackRestore(stack);
		}

		if (possible_purchase)
			AccountOpsCall(function (resp) {
				if (resp && typeof resp === 'object' && resp.success === true)
					exit_to_module(resp.result);
				else
					exit_to_module(null);
			}, {op: 'trxlist'});
		else
			exit_to_module(null);
	}

	function open_widget(access_token) {
		LoadScript("https://cdn.xsolla.net/embed/paystation/1.2.0/widget.min.js", function () {
			// event: on init of paystation, open it immediately
            XPayStationWidget.on(XPayStationWidget.eventTypes.INIT, XPayStationWidget.open);

			XPayStationWidget.on(XPayStationWidget.eventTypes.STATUS, function () {
				//trace("STATUS", arguments);
			});

            XPayStationWidget.on(XPayStationWidget.eventTypes.CLOSE, function () {
				trace("Xsolla Paystation closed");
				finish(true);
			});

			let width = Math.min(740, window.innerWidth);
			let height = Math.min(760, window.innerHeight);

			// https://github.com/xsolla/paystation-embed
			let options = {
				access_token: access_token,
				lightbox: {
					zIndex: 2147483647,
					width: '' + width + 'px',
					height: '' + height + 'px',
					overlayOpacity: 0,
					spinner: 'round',
					spinnerColor: '#cccccc'
				}
			};

			if (sandbox)
				options.sandbox = true;

			XPayStationWidget.init(options);
		});
	}

	AccountOpsCall(function (resp) {
		if (resp && typeof resp === 'object' && resp.success === true)
			open_widget(resp.result);
		else
			finish(false);
	}, {op: 'xsolla_paystation_token', sku_id: sku_id, price: price, currency: currency, sandbox: sandbox});
}

function DetectAdblock(on_result) {
	var test = document.createElement('div');
	test.innerHTML = '&nbsp;';
	test.className = 'adsbox';
	test.style.position = 'absolute';
	test.style.fontSize = '10px';
	document.body.appendChild(test);
	var checker = setInterval(function () {
		var adsenabled = test.offsetHeight !== 0;
		if (adsenabled) {
			clearInterval(checker);
			checker = -1;
			try{test.parentNode.removeChild(test);}catch(e){};
			on_result(false);
		}
	}, 10);
	setTimeout(function () {
		if (checker != -1) {
			clearInterval(checker);
			try{test.parentNode.removeChild(test);}catch(e){};
			on_result(true);
		}
	}, 250);
}

$(document).ready(function () {
	DetectAdblock(function (adblock) {
		if (!adblock)
			window.__adallow = true;
	});

	if (console && console.re) {
        trace('embedding console.re intercepting functions');

        var orig_log = console.log;
        var orig_info = console.info;
        var orig_warn = console.warn;
        var orig_error = console.error;

        function new_warn() { console.warn = orig_warn; console.re.warn(Array.prototype.slice.call(arguments, 0).join(' ')); console.warn = new_warn; }
        console.warn = new_warn;

        function new_log() { console.log = orig_log; console.re.log(Array.prototype.slice.call(arguments, 0).join(' ')); console.log = new_log; }
        console.log = new_log;

        function new_info() { console.info = orig_info; console.re.info(Array.prototype.slice.call(arguments, 0).join(' ')); console.info = new_info; }
        console.info = new_info;

        function new_error() { console.error = orig_error; console.re.error(Array.prototype.slice.call(arguments, 0).join(' ')); console.error = new_error; }
        console.error = new_error;

        trace('console.re embedding success');
    }

    trace("document ready", paks_path + paks_filesystem_file);

    if (browser.name === 'Chrome' && browser.version < 59) {
        gtag('event', 'site', {
            'event_category': 'compatibility',
            'event_label': 'outdated_chrome',
            'value': 1,
            'non_interaction': true
        });

		if (!CRAWLER_MODE)
			alert('Warning: Google Chrome 59 or greater is required to play this game. Please update your browser.');
    }
    else
    if (browser.name === 'Firefox' && browser.version < 52) {
        gtag('event', 'site', {
            'event_category': 'compatibility',
            'event_label': 'outdated_firefox',
            'value': 1,
            'non_interaction': true
        });

		if (!CRAWLER_MODE)
			alert('Warning: Firefox 52 or greater is required to play this game. Please update your browser.');
    }
    else
	if (!wasmAvailable()) {
        gtag('event', 'site', {
            'event_category': 'compatibility',
            'event_label': 'wasm_unsupported',
            'value': 1,
            'non_interaction': true
        });

		if (!CRAWLER_MODE)
			alert("Warning: your browser doesn't support WebAssembly, please update it to play the game.");
    }

	trace("loading game module script...");

	gtag('event', 'site', {
		'event_category': 'compatibility',
		'event_label': 'success',
		'value': 1,
		'non_interaction': true
	});

	GameModule = CreateGameModule();
	LoadScript(gamemodule_path + gamemodule_file, function () {
		trace("game module script loaded");
	});

	// https://www.khronos.org/webgl/wiki/HandlingContextLost
	var canvas = document.getElementById('canvas');
	canvas.addEventListener("webglcontextlost", function (event) {
		event.preventDefault();
		console.error("WebGL context lost, waiting for context restored...");
		setTimeout(function () {
			console.error("WebGL context restore timeout, last chance redirect...");
			try {
				window.parent.location.replace('//clash3d.com');
			} catch (e) {
				window.location.replace('//clash3d.com');
			}
		}, 2000);
	}, false);
	canvas.addEventListener("webglcontextrestored", function (event) {
		console.info("WebGL context restored!");
		if (!CRAWLER_MODE)
			alert('Press button to reload the game.');
		try {
			window.parent.location.reload(false);
		} catch(e) {
			window.location.reload(false);
		}
	}, false);
});

if (MOBILE_DEVICE && navigator.wakeLock) { // https://web.dev/wakelock/
	// The wake lock sentinel.
	let wakeLock = null;

	// Function that attempts to request a screen wake lock.
	const requestWakeLock = async () => {
		try {
			wakeLock = await navigator.wakeLock.request('screen');
			wakeLock.addEventListener('release', () => {
				console.log('Screen Wake Lock was released');
			});
			console.log('Screen Wake Lock is active');

		} catch (err) {
			console.error(`${err.name}, ${err.message}`);
		}
	};

	const handleVisibilityChange = () => {
		if (wakeLock !== null && document.visibilityState === 'visible') {
			requestWakeLock();
		}
	};

	document.addEventListener('visibilitychange', handleVisibilityChange);
	document.addEventListener('fullscreenchange', handleVisibilityChange);

	requestWakeLock();
}
