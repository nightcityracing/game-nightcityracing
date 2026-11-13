(()=>{var wo="160";var Qc=1,El=2,ui=3,Ri=0,_t=1,Xn=2;var eu=1,ra=2;var ji=100;var Eo=204,To=205;var tu=0,Jd=1,$d=2,Ti=0,Qd=1,ep=2,tp=3,Tl=4,ip=5,np=6;var iu=300,In=301,Un=302,Ao=303,Ro=304,aa=306,ys=1e3,pi=1001,Co=1002,St=1003,Th=1004;var Ha=1005;var Xt=1006,sp=1007;var Tr=1008;var Ki=1009;var Al=1012,nu=1013,wi=1014,Ei=1015,xs=1016,su=1017,ru=1018,Ji=1020;var Qt=1023;var $i=1026,Nn=1027;var au=1029;var ou=1031,lu=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,Ah=35840,Rh=35841,Ch=35842,Ph=35843,hu=36196,Lh=37492,Dh=37496,Ih=37808,Uh=37809,Nh=37810,Oh=37811,kh=37812,zh=37813,Bh=37814,Fh=37815,Hh=37816,Gh=37817,Vh=37818,Wh=37819,Xh=37820,jh=37821,ja=36492,qh=36494,Yh=36495;var Zh=36284,Kh=36285,Jh=36286;var Ar=2300,Rr=2301,qa=2302,$h=2400,Qh=2401,ec=2402;var cu=3e3,Qi=3001;var ei="",Ze="srgb",fi="srgb-linear",Rl="display-p3",oa="display-p3-linear",Cr="linear",Ve="srgb",Pr="rec709",Lr="p3";var pn=7680;var tc=35044;var ic="300 es",Po=1035,On=2e3,Dr=2001,Ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let i=t.slice(0);for(let n=0,r=i.length;n<r;n++)i[n].call(this,e);e.target=null}}},mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Er=Math.PI/180,Lo=180/Math.PI;function jn(){let s=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,i=4294967295*Math.random()|0;return(mt[255&s]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]+"-"+mt[255&e]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[63&t|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[255&i]+mt[i>>8&255]+mt[i>>16&255]+mt[i>>24&255]).toLowerCase()}function ht(s,e,t){return Math.max(e,Math.min(t,s))}function rp(s,e){return(s%e+e)%e}function Ya(s,e,t){return(1-t)*s+t*e}function nc(s){return(s&s-1)==0&&s!==0}function Do(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function as(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Et(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(4294967295*s);case Uint16Array:return Math.round(65535*s);case Uint8Array:return Math.round(255*s);case Int32Array:return Math.round(2147483647*s);case Int16Array:return Math.round(32767*s);case Int8Array:return Math.round(127*s);default:throw new Error("Invalid component type.")}}var oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Le=class s{constructor(e,t,i,n,r,a,o,l,h){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h)}set(e,t,i,n,r,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=t,c[4]=r,c[5]=l,c[6]=i,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=n[0],p=n[3],_=n[6],m=n[1],v=n[4],x=n[7],w=n[2],M=n[5],b=n[8];return r[0]=a*y+o*m+l*w,r[3]=a*p+o*v+l*M,r[6]=a*_+o*x+l*b,r[1]=h*y+c*m+d*w,r[4]=h*p+c*v+d*M,r[7]=h*_+c*x+d*b,r[2]=u*y+f*m+g*w,r[5]=u*p+f*v+g*M,r[8]=u*_+f*x+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return t*a*c-t*o*h-i*r*c+i*o*l+n*r*h-n*a*l}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*r,f=h*r-a*l,g=t*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(n*h-c*i)*y,e[2]=(o*i-n*a)*y,e[3]=u*y,e[4]=(c*t-n*l)*y,e[5]=(n*r-o*t)*y,e[6]=f*y,e[7]=(i*l-h*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Za=new Le;function uu(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ir(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ap(){let s=Ir("canvas");return s.style.display="block",s}var sc={};function fs(s){s in sc||(sc[s]=!0,console.warn(s))}var rc=new Le().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ac=new Le().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),qs={[fi]:{transfer:Cr,primaries:Pr,toReference:s=>s,fromReference:s=>s},[Ze]:{transfer:Ve,primaries:Pr,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[oa]:{transfer:Cr,primaries:Lr,toReference:s=>s.applyMatrix3(ac),fromReference:s=>s.applyMatrix3(rc)},[Rl]:{transfer:Ve,primaries:Lr,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ac),fromReference:s=>s.applyMatrix3(rc).convertLinearToSRGB()}},op=new Set([fi,oa]),He={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!op.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let i=qs[e].toReference;return(0,qs[t].fromReference)(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return qs[s].primaries},getTransfer:function(s){return s===ei?Cr:qs[s].transfer}};function Ln(s){return s<.04045?.0773993808*s:Math.pow(.9478672986*s+.0521327014,2.4)}function Ka(s){return s<.0031308?12.92*s:1.055*Math.pow(s,.41666)-.055}var fn,Ur=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fn===void 0&&(fn=Ir("canvas")),fn.width=e.width,fn.height=e.height;let i=fn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ir("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=255*Ln(r[a]/255);return i.putImageData(n,0,0),t}if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(255*Ln(t[i]/255)):t[i]=Ln(t[i]);return{data:t,width:e.width,height:e.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},lp=0,Nr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=jn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Ja(n[a].image)):r.push(Ja(n[a]))}else r=Ja(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ja(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ur.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var hp=0,Ot=class s extends Ci{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=1001,n=1001,r=1006,a=1008,o=1023,l=1009,h=s.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=jn(),this.name="",this.source=new Nr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Qi?Ze:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==iu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ys:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case ys:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ze?Qi:cu}set encoding(e){fs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qi?Ze:ei}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=iu,Ot.DEFAULT_ANISOTROPY=1;var tt=class s{constructor(e=0,t=0,i=0,n=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,l=e.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],p=l[6],_=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(h+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(h+1)/2,x=(f+1)/2,w=(_+1)/2,M=(c+u)/4,b=(d+y)/4,D=(g+p)/4;return v>x&&v>w?v<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(v),n=M/i,r=b/i):x>w?x<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(x),i=M/n,r=D/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=b/r,n=D/r),this.set(i,n,r,t),this}let m=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(u-c)*(u-c));return Math.abs(m)<.001&&(m=1),this.x=(p-g)/m,this.y=(d-y)/m,this.z=(u-c)/m,this.w=Math.acos((h+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Io=class extends Ci{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let n={width:e,height:t,depth:1};i.encoding!==void 0&&(fs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Qi?Ze:ei),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ot(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){this.width===e&&this.height===t&&this.depth===i||(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Nr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},mi=class extends Io{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Or=class extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=St,this.minFilter=St,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Uo=class extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=St,this.minFilter=St,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],h=i[n+1],c=i[n+2],d=i[n+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0)return e[t+0]=l,e[t+1]=h,e[t+2]=c,void(e[t+3]=d);if(o===1)return e[t+0]=u,e[t+1]=f,e[t+2]=g,void(e[t+3]=y);if(d!==y||l!==u||h!==f||c!==g){let p=1-o,_=l*u+h*f+c*g+d*y,m=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){let w=Math.sqrt(v),M=Math.atan2(w,_*m);p=Math.sin(p*M)/w,o=Math.sin(o*M)/w}let x=o*m;if(l=l*p+u*x,h=h*p+f*x,c=c*p+g*x,d=d*p+y*x,p===1-o){let w=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=w,h*=w,c*=w,d*=w}}e[t]=l,e[t+1]=h,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],l=i[n+1],h=i[n+2],c=i[n+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+c*d+l*f-h*u,e[t+1]=l*g+c*u+h*d-o*f,e[t+2]=h*g+c*f+o*u-l*d,e[t+3]=c*g-o*d-l*u-h*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,h=o(i/2),c=o(n/2),d=o(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(a){case"XYZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"YXZ":this._x=u*c*d+h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"ZXY":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d-u*f*g;break;case"ZYX":this._x=u*c*d-h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d+u*f*g;break;case"YZX":this._x=u*c*d+h*f*g,this._y=h*f*d+u*c*g,this._z=h*c*g-u*f*d,this._w=h*c*d-u*f*g;break;case"XZY":this._x=u*c*d-h*f*g,this._y=h*f*d-u*c*g,this._z=h*c*g+u*f*d,this._w=h*c*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],h=t[2],c=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(a-n)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(c-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+h)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-h)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-n)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,h=t._z,c=t._w;return this._x=i*c+a*o+n*h-r*l,this._y=n*c+a*l+r*o-i*h,this._z=r*c+a*h+i*l-n*o,this._w=a*c-i*o-n*l-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,n=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let h=Math.sqrt(l),c=Math.atan2(h,o),d=Math.sin((1-t)*c)/h,u=Math.sin(t*c)/h;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(r),i*Math.cos(r),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{constructor(e=0,t=0,i=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*i),c=2*(o*t-r*n),d=2*(r*i-a*t);return this.x=t+l*h+a*d-o*c,this.y=i+l*c+o*h-r*d,this.z=n+l*d+r*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=2*(Math.random()-.5),t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$a=new R,oc=new ti,qt=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Gt):Gt.fromBufferAttribute(r,a),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(os),Zs.subVectors(this.max,os),mn.subVectors(e.a,os),gn.subVectors(e.b,os),_n.subVectors(e.c,os),yi.subVectors(gn,mn),xi.subVectors(_n,gn),Hi.subVectors(mn,_n);let t=[0,-yi.z,yi.y,0,-xi.z,xi.y,0,-Hi.z,Hi.y,yi.z,0,-yi.x,xi.z,0,-xi.x,Hi.z,0,-Hi.x,-yi.y,yi.x,0,-xi.y,xi.x,0,-Hi.y,Hi.x,0];return!!Qa(t,mn,gn,_n,Zs)&&(t=[1,0,0,0,1,0,0,0,1],!!Qa(t,mn,gn,_n,Zs)&&(Ks.crossVectors(yi,xi),t=[Ks.x,Ks.y,Ks.z],Qa(t,mn,gn,_n,Zs)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Gt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ai=[new R,new R,new R,new R,new R,new R,new R,new R],Gt=new R,Ys=new qt,mn=new R,gn=new R,_n=new R,yi=new R,xi=new R,Hi=new R,os=new R,Zs=new R,Ks=new R,Gi=new R;function Qa(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Gi.fromArray(s,r);let o=n.x*Math.abs(Gi.x)+n.y*Math.abs(Gi.y)+n.z*Math.abs(Gi.z),l=e.dot(Gi),h=t.dot(Gi),c=i.dot(Gi);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var cp=new qt,ls=new R,eo=new R,Yt=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):cp.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);let t=ls.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=.5*(i-this.radius);this.center.addScaledVector(ls,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(eo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(eo)),this.expandByPoint(ls.copy(e.center).sub(eo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},oi=new R,to=new R,Js=new R,Mi=new R,io=new R,$s=new R,no=new R,kn=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){to.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Mi.copy(this.origin).sub(to);let r=.5*e.distanceTo(t),a=-this.direction.dot(Js),o=Mi.dot(this.direction),l=-Mi.dot(Js),h=Mi.lengthSq(),c=Math.abs(1-a*a),d,u,f,g;if(c>0)if(d=a*l-o,u=a*o-l,g=r*c,d>=0)if(u>=-g)if(u<=g){let y=1/c;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+h}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(to).addScaledVector(Js,u),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);let i=oi.dot(this.direction),n=oi.dot(oi)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(e.min.x-u.x)*h,n=(e.max.x-u.x)*h):(i=(e.max.x-u.x)*h,n=(e.min.x-u.x)*h),c>=0?(r=(e.min.y-u.y)*c,a=(e.max.y-u.y)*c):(r=(e.max.y-u.y)*c,a=(e.min.y-u.y)*c),i>a||r>n?null:((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n?null:((o>i||i!=i)&&(i=o),(l<n||n!=n)&&(n=l),n<0?null:this.at(i>=0?i:n,t)))}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,n,r){io.subVectors(t,e),$s.subVectors(i,e),no.crossVectors(io,$s);let a,o=this.direction.dot(no);if(o>0){if(n)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}Mi.subVectors(this.origin,e);let l=a*this.direction.dot($s.crossVectors(Mi,$s));if(l<0)return null;let h=a*this.direction.dot(io.cross(Mi));if(h<0||l+h>o)return null;let c=-a*Mi.dot(no);return c<0?null:this.at(c/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ae=class s{constructor(e,t,i,n,r,a,o,l,h,c,d,u,f,g,y,p){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,h,c,d,u,f,g,y,p)}set(e,t,i,n,r,a,o,l,h,c,d,u,f,g,y,p){let _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=n,_[1]=r,_[5]=a,_[9]=o,_[13]=l,_[2]=h,_[6]=c,_[10]=d,_[14]=u,_[3]=f,_[7]=g,_[11]=y,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,n=1/vn.setFromMatrixColumn(e,0).length(),r=1/vn.setFromMatrixColumn(e,1).length(),a=1/vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),h=Math.sin(n),c=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*c,f=a*d,g=o*c,y=o*d;t[0]=l*c,t[4]=-l*d,t[8]=h,t[1]=f+g*h,t[5]=u-y*h,t[9]=-o*l,t[2]=y-u*h,t[6]=g+f*h,t[10]=a*l}else if(e.order==="YXZ"){let u=l*c,f=l*d,g=h*c,y=h*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*h,t[1]=a*d,t[5]=a*c,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*c,f=l*d,g=h*c,y=h*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*c,t[9]=y-u*o,t[2]=-a*h,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*c,f=a*d,g=o*c,y=o*d;t[0]=l*c,t[4]=g*h-f,t[8]=u*h+y,t[1]=l*d,t[5]=y*h+u,t[9]=f*h-g,t[2]=-h,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*h,g=o*l,y=o*h;t[0]=l*c,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*c,t[9]=-o*c,t[2]=-h*c,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*h,g=o*l,y=o*h;t[0]=l*c,t[4]=-d,t[8]=h*c,t[1]=u*d+y,t[5]=a*c,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*c,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,i){let n=this.elements;return At.subVectors(e,t),At.lengthSq()===0&&(At.z=1),At.normalize(),Si.crossVectors(i,At),Si.lengthSq()===0&&(Math.abs(i.z)===1?At.x+=1e-4:At.z+=1e-4,At.normalize(),Si.crossVectors(i,At)),Si.normalize(),Qs.crossVectors(At,Si),n[0]=Si.x,n[4]=Qs.x,n[8]=At.x,n[1]=Si.y,n[5]=Qs.y,n[9]=At.y,n[2]=Si.z,n[6]=Qs.z,n[10]=At.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],p=i[10],_=i[14],m=i[3],v=i[7],x=i[11],w=i[15],M=n[0],b=n[4],D=n[8],I=n[12],z=n[1],j=n[5],C=n[9],B=n[13],H=n[2],se=n[6],ue=n[10],ie=n[14],Y=n[3],te=n[7],V=n[11],K=n[15];return r[0]=a*M+o*z+l*H+h*Y,r[4]=a*b+o*j+l*se+h*te,r[8]=a*D+o*C+l*ue+h*V,r[12]=a*I+o*B+l*ie+h*K,r[1]=c*M+d*z+u*H+f*Y,r[5]=c*b+d*j+u*se+f*te,r[9]=c*D+d*C+u*ue+f*V,r[13]=c*I+d*B+u*ie+f*K,r[2]=g*M+y*z+p*H+_*Y,r[6]=g*b+y*j+p*se+_*te,r[10]=g*D+y*C+p*ue+_*V,r[14]=g*I+y*B+p*ie+_*K,r[3]=m*M+v*z+x*H+w*Y,r[7]=m*b+v*j+x*se+w*te,r[11]=m*D+v*C+x*ue+w*V,r[15]=m*I+v*B+x*ie+w*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],f=e[14];return e[3]*(+r*l*d-n*h*d-r*o*u+i*h*u+n*o*f-i*l*f)+e[7]*(+t*l*f-t*h*u+r*a*u-n*a*f+n*h*c-r*l*c)+e[11]*(+t*h*d-t*o*f-r*a*d+i*a*f+r*o*c-i*h*c)+e[15]*(-n*o*c-t*l*d+t*o*u+n*a*d-i*a*u+i*l*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],p=e[14],_=e[15],m=d*p*h-y*u*h+y*l*f-o*p*f-d*l*_+o*u*_,v=g*u*h-c*p*h-g*l*f+a*p*f+c*l*_-a*u*_,x=c*y*h-g*d*h+g*o*f-a*y*f-c*o*_+a*d*_,w=g*d*l-c*y*l-g*o*u+a*y*u+c*o*p-a*d*p,M=t*m+i*v+n*x+r*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/M;return e[0]=m*b,e[1]=(y*u*r-d*p*r-y*n*f+i*p*f+d*n*_-i*u*_)*b,e[2]=(o*p*r-y*l*r+y*n*h-i*p*h-o*n*_+i*l*_)*b,e[3]=(d*l*r-o*u*r-d*n*h+i*u*h+o*n*f-i*l*f)*b,e[4]=v*b,e[5]=(c*p*r-g*u*r+g*n*f-t*p*f-c*n*_+t*u*_)*b,e[6]=(g*l*r-a*p*r-g*n*h+t*p*h+a*n*_-t*l*_)*b,e[7]=(a*u*r-c*l*r+c*n*h-t*u*h-a*n*f+t*l*f)*b,e[8]=x*b,e[9]=(g*d*r-c*y*r-g*i*f+t*y*f+c*i*_-t*d*_)*b,e[10]=(a*y*r-g*o*r+g*i*h-t*y*h-a*i*_+t*o*_)*b,e[11]=(c*o*r-a*d*r-c*i*h+t*d*h+a*i*f-t*o*f)*b,e[12]=w*b,e[13]=(c*y*n-g*d*n+g*i*u-t*y*u-c*i*p+t*d*p)*b,e[14]=(g*o*n-a*y*n-g*i*l+t*y*l+a*i*p-t*o*p)*b,e[15]=(a*d*n-c*o*n+c*i*l-t*d*l-a*i*u+t*o*u)*b,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,h=r*a,c=r*o;return this.set(h*a+i,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+i,c*l-n*a,0,h*l-n*o,c*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,h=r+r,c=a+a,d=o+o,u=r*h,f=r*c,g=r*d,y=a*c,p=a*d,_=o*d,m=l*h,v=l*c,x=l*d,w=i.x,M=i.y,b=i.z;return n[0]=(1-(y+_))*w,n[1]=(f+x)*w,n[2]=(g-v)*w,n[3]=0,n[4]=(f-x)*M,n[5]=(1-(u+_))*M,n[6]=(p+m)*M,n[7]=0,n[8]=(g+v)*b,n[9]=(p-m)*b,n[10]=(1-(u+y))*b,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements,r=vn.set(n[0],n[1],n[2]).length(),a=vn.set(n[4],n[5],n[6]).length(),o=vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],Vt.copy(this);let l=1/r,h=1/a,c=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=c,Vt.elements[9]*=c,Vt.elements[10]*=c,t.setFromRotationMatrix(Vt),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=2e3){let l=this.elements,h=2*r/(t-e),c=2*r/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n),f,g;if(o===On)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else{if(o!==Dr)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-r),g=-a*r/(a-r)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=2e3){let l=this.elements,h=1/(t-e),c=1/(i-n),d=1/(a-r),u=(t+e)*h,f=(i+n)*c,g,y;if(o===On)g=(a+r)*d,y=-2*d;else{if(o!==Dr)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);g=r*d,y=-1*d}return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},vn=new R,Vt=new Ae,up=new R(0,0,0),dp=new R(1,1,1),Si=new R,Qs=new R,At=new R,lc=new Ae,hc=new ti,kr=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return lc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return hc.setFromEuler(this),this.setFromQuaternion(hc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kr.DEFAULT_ORDER="XYZ";var zr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!=0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},pp=0,cc=new R,yn=new ti,li=new Ae,er=new R,hs=new R,fp=new R,mp=new ti,uc=new R(1,0,0),dc=new R(0,1,0),pc=new R(0,0,1),gp={type:"added"},_p={type:"removed"},vt=class s extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new kr,i=new ti,n=new R(1,1,1);t._onChange(function(){i.setFromEuler(t,!1)}),i._onChange(function(){t.setFromQuaternion(i,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Le}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.multiply(yn),this}rotateOnWorldAxis(e,t){return yn.setFromAxisAngle(e,t),this.quaternion.premultiply(yn),this}rotateX(e){return this.rotateOnAxis(uc,e)}rotateY(e){return this.rotateOnAxis(dc,e)}rotateZ(e){return this.rotateOnAxis(pc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uc,e)}translateY(e){return this.translateOnAxis(dc,e)}translateZ(e){return this.translateOnAxis(pc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?er.copy(e):er.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(hs,er,this.up):li.lookAt(er,hs,this.up),this.quaternion.setFromRotationMatrix(li),n&&(li.extractRotation(n.matrixWorld),yn.setFromRotationMatrix(li),this.quaternion.premultiply(yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_p)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,e,fp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++){let r=t[i];r.matrixWorldAutoUpdate!==!0&&e!==!0||r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let n=this.children;for(let r=0,a=n.length;r<a;r++){let o=n[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let n={};function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}};vt.DEFAULT_UP=new R(0,1,0),vt.DEFAULT_MATRIX_AUTO_UPDATE=!0,vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=new R,hi=new R,so=new R,ci=new R,xn=new R,Mn=new R,fc=new R,ro=new R,ao=new R,oo=new R,tr=!1,Zi=class s{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Wt.subVectors(e,t),n.cross(Wt);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){Wt.subVectors(n,t),hi.subVectors(i,t),so.subVectors(e,t);let a=Wt.dot(Wt),o=Wt.dot(hi),l=Wt.dot(so),h=hi.dot(hi),c=hi.dot(so),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-o*c)*u,g=(a*c-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ci)!==null&&ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,i,n,r,a,o,l){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),this.getInterpolation(e,t,i,n,r,a,o,l)}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,t,i,n){return Wt.subVectors(i,t),hi.subVectors(e,t),Wt.cross(hi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),.5*Wt.cross(hi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,r){return tr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),tr=!0),s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;xn.subVectors(n,i),Mn.subVectors(r,i),ro.subVectors(e,i);let l=xn.dot(ro),h=Mn.dot(ro);if(l<=0&&h<=0)return t.copy(i);ao.subVectors(e,n);let c=xn.dot(ao),d=Mn.dot(ao);if(c>=0&&d<=c)return t.copy(n);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),t.copy(i).addScaledVector(xn,a);oo.subVectors(e,r);let f=xn.dot(oo),g=Mn.dot(oo);if(g>=0&&f<=g)return t.copy(r);let y=f*h-l*g;if(y<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(i).addScaledVector(Mn,o);let p=c*g-f*d;if(p<=0&&d-c>=0&&f-g>=0)return fc.subVectors(r,n),o=(d-c)/(d-c+(f-g)),t.copy(n).addScaledVector(fc,o);let _=1/(p+y+u);return a=y*_,o=u*_,t.copy(i).addScaledVector(xn,a).addScaledVector(Mn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},ir={h:0,s:0,l:0};function lo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+6*(e-s)*t:t<.5?e:t<2/3?s+6*(e-s)*(2/3-t):s}var fe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=He.workingColorSpace){return this.r=e,this.g=t,this.b=i,He.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=He.workingColorSpace){if(e=rp(e,1),t=ht(t,0,1),i=ht(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=lo(a,r,e+1/3),this.g=lo(a,r,e),this.b=lo(a,r,e-1/3)}return He.toWorkingColorSpace(this,n),this}setStyle(e,t=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ze){let i=du[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ln(e.r),this.g=Ln(e.g),this.b=Ln(e.b),this}copyLinearToSRGB(e){return this.r=Ka(e.r),this.g=Ka(e.g),this.b=Ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ze){return He.fromWorkingColorSpace(gt.copy(this),e),65536*Math.round(ht(255*gt.r,0,255))+256*Math.round(ht(255*gt.g,0,255))+Math.round(ht(255*gt.b,0,255))}getHexString(e=Ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(gt.copy(this),t);let i=gt.r,n=gt.g,r=gt.b,a=Math.max(i,n,r),o=Math.min(i,n,r),l,h,c=(o+a)/2;if(o===a)l=0,h=0;else{let d=a-o;switch(h=c<=.5?d/(a+o):d/(2-a-o),a){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4}l/=6}return e.h=l,e.s=h,e.l=c,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ze){He.fromWorkingColorSpace(gt.copy(this),e);let t=gt.r,i=gt.g,n=gt.b;return e!==Ze?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*i)},${Math.round(255*n)})`}offsetHSL(e,t,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+t,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(bi),e.getHSL(ir);let i=Ya(bi.h,ir.h,t),n=Ya(bi.s,ir.s,t),r=Ya(bi.l,ir.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gt=new fe;fe.NAMES=du;var vp=0,Pi=class extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=1,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Eo,this.blendDst=To,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pn,this.stencilZFail=pn,this.stencilZPass=pn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];n!==void 0?n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i:console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function n(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Eo&&(i.blendSrc=this.blendSrc),this.blendDst!==To&&(i.blendDst=this.blendDst),this.blendEquation!==ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData),t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ut=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jm=yp();function yp(){let s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(i[l]=0,i[256|l]=32768,n[l]=24,n[256|l]=24):h<-14?(i[l]=1024>>-h-14,i[256|l]=1024>>-h-14|32768,n[l]=-h-1,n[256|l]=-h-1):h<=15?(i[l]=h+15<<10,i[256|l]=h+15<<10|32768,n[l]=13,n[256|l]=13):h<128?(i[l]=31744,i[256|l]=64512,n[l]=24,n[256|l]=24):(i[l]=31744,i[256|l]=64512,n[l]=13,n[256|l]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;!(8388608&h);)h<<=1,c-=8388608;h&=-8388609,c+=947912704,r[l]=h|c}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}var et=new R,nr=new oe,st=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nr.fromBufferAttribute(this,t),nr.applyMatrix3(e),this.setXY(t,nr.x,nr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=as(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Et(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=as(t,this.array)),t}setX(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=as(t,this.array)),t}setY(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=as(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=as(t,this.array)),t}setW(e,t){return this.normalized&&(t=Et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),n=Et(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=Et(t,this.array),i=Et(i,this.array),n=Et(n,this.array),r=Et(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tc&&(e.usage=this.usage),e}};var Br=class extends st{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Fr=class extends st{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ee=class extends st{constructor(e,t,i){super(new Float32Array(e),t,i)}};var xp=0,Nt=new Ae,ho=new vt,Sn=new R,Rt=new qt,cs=new qt,lt=new R,je=class s extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uu(e)?Fr:Br)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Le().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,i){return Nt.makeTranslation(e,t,i),this.applyMatrix4(Nt),this}scale(e,t,i){return Nt.makeScale(e,t,i),this.applyMatrix4(Nt),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sn).negate(),this.translate(Sn.x,Sn.y,Sn.z),this}setFromPoints(e){let t=[];for(let i=0,n=e.length;i<n;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ee(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Rt.setFromBufferAttribute(r),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Rt.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Rt.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Rt.min),this.boundingBox.expandByPoint(Rt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new R,1/0);if(e){let i=this.boundingSphere.center;if(Rt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];cs.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Rt.min,cs.min),Rt.expandByPoint(lt),lt.addVectors(Rt.max,cs.max),Rt.expandByPoint(lt)):(Rt.expandByPoint(cs.min),Rt.expandByPoint(cs.max))}Rt.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)lt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(lt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)lt.fromBufferAttribute(o,h),l&&(Sn.fromBufferAttribute(e,h),lt.add(Sn)),n=Math.max(n,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let i=e.array,n=t.position.array,r=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new st(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,h=[],c=[];for(let z=0;z<o;z++)h[z]=new R,c[z]=new R;let d=new R,u=new R,f=new R,g=new oe,y=new oe,p=new oe,_=new R,m=new R;function v(z,j,C){d.fromArray(n,3*z),u.fromArray(n,3*j),f.fromArray(n,3*C),g.fromArray(a,2*z),y.fromArray(a,2*j),p.fromArray(a,2*C),u.sub(d),f.sub(d),y.sub(g),p.sub(g);let B=1/(y.x*p.y-p.x*y.y);isFinite(B)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(f,-y.y).multiplyScalar(B),m.copy(f).multiplyScalar(y.x).addScaledVector(u,-p.x).multiplyScalar(B),h[z].add(_),h[j].add(_),h[C].add(_),c[z].add(m),c[j].add(m),c[C].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let z=0,j=x.length;z<j;++z){let C=x[z],B=C.start;for(let H=B,se=B+C.count;H<se;H+=3)v(i[H+0],i[H+1],i[H+2])}let w=new R,M=new R,b=new R,D=new R;function I(z){b.fromArray(r,3*z),D.copy(b);let j=h[z];w.copy(j),w.sub(b.multiplyScalar(b.dot(j))).normalize(),M.crossVectors(D,j);let C=M.dot(c[z])<0?-1:1;l[4*z]=w.x,l[4*z+1]=w.y,l[4*z+2]=w.z,l[4*z+3]=C}for(let z=0,j=x.length;z<j;++z){let C=x[z],B=C.start;for(let H=B,se=B+C.count;H<se;H+=3)I(i[H+0]),I(i[H+1]),I(i[H+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new st(new Float32Array(3*t.count),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new R,r=new R,a=new R,o=new R,l=new R,h=new R,c=new R,d=new R;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),p=e.getX(u+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),c.subVectors(a,r),d.subVectors(n,r),c.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,p),o.add(c),l.add(c),h.add(c),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),c.subVectors(a,r),d.subVectors(n,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),f=0,g=0;for(let y=0,p=l.length;y<p;y++){f=o.isInterleavedBufferAttribute?l[y]*o.data.stride+o.offset:l[y]*c;for(let _=0;_<c;_++)u[g++]=h[f++]}return new st(u,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let l=e(n[o],i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let l=[],h=r[o];for(let c=0,d=h.length;c<d;c++){let u=e(h[c],i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let h=i[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(e.data))}c.length>0&&(n[l]=c,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(t))}let r=e.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(t));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},mc=new Ae,Vi=new kn,sr=new Yt,gc=new R,bn=new R,wn=new R,En=new R,co=new R,rr=new R,ar=new oe,or=new oe,lr=new oe,_c=new R,vc=new R,yc=new R,hr=new R,cr=new R,xe=class extends vt{constructor(e=new je,t=new ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){rr.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=o[l],d=r[l];c!==0&&(co.fromBufferAttribute(d,e),a?rr.addScaledVector(co,c):rr.addScaledVector(co.sub(t),c))}t.add(rr)}return t}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;if(n!==void 0){if(i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere),sr.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),sr.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(sr,gc)===null||Vi.origin.distanceToSquared(gc)>(e.far-e.near)**2))return;mc.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(mc),i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1||this._computeIntersections(e,t,Vi)}}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],_=a[p.materialIndex];for(let m=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));m<v;m+=3)n=ur(this,_,e,i,h,c,d,o.getX(m),o.getX(m+1),o.getX(m+2)),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=p.materialIndex,t.push(n))}else for(let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);g<y;g+=3)n=ur(this,a,e,i,h,c,d,o.getX(g),o.getX(g+1),o.getX(g+2)),n&&(n.faceIndex=Math.floor(g/3),t.push(n));else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],_=a[p.materialIndex];for(let m=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));m<v;m+=3)n=ur(this,_,e,i,h,c,d,m,m+1,m+2),n&&(n.faceIndex=Math.floor(m/3),n.face.materialIndex=p.materialIndex,t.push(n))}else for(let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);g<y;g+=3)n=ur(this,a,e,i,h,c,d,g,g+1,g+2),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}};function ur(s,e,t,i,n,r,a,o,l,h){s.getVertexPosition(o,bn),s.getVertexPosition(l,wn),s.getVertexPosition(h,En);let c=function(d,u,f,g,y,p,_,m){let v;if(v=u.side===_t?g.intersectTriangle(_,p,y,!0,m):g.intersectTriangle(y,p,_,u.side===Ri,m),v===null)return null;cr.copy(m),cr.applyMatrix4(d.matrixWorld);let x=f.ray.origin.distanceTo(cr);return x<f.near||x>f.far?null:{distance:x,point:cr.clone(),object:d}}(s,e,t,i,bn,wn,En,hr);if(c){n&&(ar.fromBufferAttribute(n,o),or.fromBufferAttribute(n,l),lr.fromBufferAttribute(n,h),c.uv=Zi.getInterpolation(hr,bn,wn,En,ar,or,lr,new oe)),r&&(ar.fromBufferAttribute(r,o),or.fromBufferAttribute(r,l),lr.fromBufferAttribute(r,h),c.uv1=Zi.getInterpolation(hr,bn,wn,En,ar,or,lr,new oe),c.uv2=c.uv1),a&&(_c.fromBufferAttribute(a,o),vc.fromBufferAttribute(a,l),yc.fromBufferAttribute(a,h),c.normal=Zi.getInterpolation(hr,bn,wn,En,_c,vc,yc,new R),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:h,normal:new R,materialIndex:0};Zi.getNormal(bn,wn,En,d.normal),c.face=d}return c}var kt=class s extends je{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=0,f=0;function g(y,p,_,m,v,x,w,M,b,D,I){let z=x/b,j=w/D,C=x/2,B=w/2,H=M/2,se=b+1,ue=D+1,ie=0,Y=0,te=new R;for(let V=0;V<ue;V++){let K=V*j-B;for(let ce=0;ce<se;ce++){let E=ce*z-C;te[y]=E*m,te[p]=K*v,te[_]=H,h.push(te.x,te.y,te.z),te[y]=0,te[p]=0,te[_]=M>0?1:-1,c.push(te.x,te.y,te.z),d.push(ce/b),d.push(1-V/D),ie+=1}}for(let V=0;V<D;V++)for(let K=0;K<b;K++){let ce=u+K+se*V,E=u+K+se*(V+1),T=u+(K+1)+se*(V+1),F=u+(K+1)+se*V;l.push(ce,E,F),l.push(E,T,F),Y+=6}o.addGroup(f,Y,I),f+=Y,u+=ie}g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ee(h,3)),this.setAttribute("normal",new Ee(c,3)),this.setAttribute("uv",new Ee(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function zn(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Mt(s){let e={};for(let t=0;t<s.length;t++){let i=zn(s[t]);for(let n in i)e[n]=i[n]}return e}function pu(s){return s.getRenderTarget()===null?s.outputColorSpace:He.workingColorSpace}var Mp={clone:zn,merge:Mt},Zt=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zn(e.uniforms),this.uniformsGroups=function(t){let i=[];for(let n=0;n<t.length;n++)i.push(t[n].clone());return i}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Ms=class extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},bt=class extends Ms{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Lo*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Er*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Lo*Math.atan(Math.tan(.5*Er*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Er*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,h=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/h,n*=a.width/l,i*=a.height/h}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Tn=-90,No=class extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new bt(Tn,1,e,t);n.layers=this.layers,this.add(n);let r=new bt(Tn,1,e,t);r.layers=this.layers,this.add(r);let a=new bt(Tn,1,e,t);a.layers=this.layers,this.add(a);let o=new bt(Tn,1,e,t);o.layers=this.layers,this.add(o);let l=new bt(Tn,1,e,t);l.layers=this.layers,this.add(l);let h=new bt(Tn,1,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(let h of t)this.remove(h);if(e===On)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else{if(e!==Dr)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1)}for(let h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,h,c]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,h),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,n),e.render(t,c),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bn=class extends Ot{constructor(e,t,i,n,r,a,o,l,h,c){super(e=e!==void 0?e:[],t=t!==void 0?t:In,i,n,r,a,o,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Oo=class extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(fs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qi?Ze:ei),this.texture=new Bn(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new kt(5,5,5),r=new Zt({name:"CubemapFromEquirect",uniforms:zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_t,blending:0});r.uniforms.tEquirect.value=t;let a=new xe(n,r),o=t.minFilter;return t.minFilter===Tr&&(t.minFilter=Xt),new No(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}},uo=new R,Sp=new R,bp=new Le,di=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=uo.subVectors(i,t).cross(Sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(uo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||bp.getNormalMatrix(e),n=this.coplanarPoint(uo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wi=new Yt,dr=new R,Fn=class{constructor(e=new di,t=new di,i=new di,n=new di,r=new di,a=new di){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=2e3){let i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],f=n[8],g=n[9],y=n[10],p=n[11],_=n[12],m=n[13],v=n[14],x=n[15];if(i[0].setComponents(l-r,u-h,p-f,x-_).normalize(),i[1].setComponents(l+r,u+h,p+f,x+_).normalize(),i[2].setComponents(l+a,u+c,p+g,x+m).normalize(),i[3].setComponents(l-a,u-c,p-g,x-m).normalize(),i[4].setComponents(l-o,u-d,p-y,x-v).normalize(),t===On)i[5].setComponents(l+o,u+d,p+y,x+v).normalize();else{if(t!==Dr)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);i[5].setComponents(o,d,y,v).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(dr.x=n.normal.x>0?e.max.x:e.min.x,dr.y=n.normal.y>0?e.max.y:e.min.y,dr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(dr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function fu(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wp(s,e){let t=e.isWebGL2,i=new WeakMap;return{get:function(n){return n.isInterleavedBufferAttribute&&(n=n.data),i.get(n)},remove:function(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=i.get(n);r&&(s.deleteBuffer(r.buffer),i.delete(n))},update:function(n,r){if(n.isGLBufferAttribute){let o=i.get(n);return void((!o||o.version<n.version)&&i.set(n,{buffer:n.buffer,type:n.type,bytesPerElement:n.elementSize,version:n.version}))}n.isInterleavedBufferAttribute&&(n=n.data);let a=i.get(n);if(a===void 0)i.set(n,function(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=s.createBuffer(),f;if(s.bindBuffer(l,u),s.bufferData(l,h,c),o.onUploadCallback(),h instanceof Float32Array)f=s.FLOAT;else if(h instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");f=s.HALF_FLOAT}else f=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=s.SHORT;else if(h instanceof Uint32Array)f=s.UNSIGNED_INT;else if(h instanceof Int32Array)f=s.INT;else if(h instanceof Int8Array)f=s.BYTE;else if(h instanceof Uint8Array)f=s.UNSIGNED_BYTE;else{if(!(h instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);f=s.UNSIGNED_BYTE}return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}(n,r));else if(a.version<n.version){if(a.size!==n.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,l,h){let c=l.array,d=l._updateRange,u=l.updateRanges;if(s.bindBuffer(h,o),d.count===-1&&u.length===0&&s.bufferSubData(h,0,c),u.length!==0){for(let f=0,g=u.length;f<g;f++){let y=u[f];t?s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count):s.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c.subarray(y.start,y.start+y.count))}l.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count):s.bufferSubData(h,d.offset*c.BYTES_PER_ELEMENT,c.subarray(d.offset,d.offset+d.count)),d.count=-1),l.onUploadCallback()})(a.buffer,n,r),a.version=n.version}}}}var en=class s extends je{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),h=o+1,c=l+1,d=e/o,u=t/l,f=[],g=[],y=[],p=[];for(let _=0;_<c;_++){let m=_*u-a;for(let v=0;v<h;v++){let x=v*d-r;g.push(x,-m,0),y.push(0,0,1),p.push(v/o),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let m=0;m<o;m++){let v=m+h*_,x=m+h*(_+1),w=m+1+h*(_+1),M=m+1+h*_;f.push(v,x,M),f.push(x,w,M)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Re={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},le={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},$t={basic:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Re.meshbasic_vert,fragmentShader:Re.meshbasic_frag},lambert:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new fe(0)}}]),vertexShader:Re.meshlambert_vert,fragmentShader:Re.meshlambert_frag},phong:{uniforms:Mt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:Re.meshphong_vert,fragmentShader:Re.meshphong_frag},standard:{uniforms:Mt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag},toon:{uniforms:Mt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new fe(0)}}]),vertexShader:Re.meshtoon_vert,fragmentShader:Re.meshtoon_frag},matcap:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Re.meshmatcap_vert,fragmentShader:Re.meshmatcap_frag},points:{uniforms:Mt([le.points,le.fog]),vertexShader:Re.points_vert,fragmentShader:Re.points_frag},dashed:{uniforms:Mt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Re.linedashed_vert,fragmentShader:Re.linedashed_frag},depth:{uniforms:Mt([le.common,le.displacementmap]),vertexShader:Re.depth_vert,fragmentShader:Re.depth_frag},normal:{uniforms:Mt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Re.meshnormal_vert,fragmentShader:Re.meshnormal_frag},sprite:{uniforms:Mt([le.sprite,le.fog]),vertexShader:Re.sprite_vert,fragmentShader:Re.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Re.background_vert,fragmentShader:Re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Re.backgroundCube_vert,fragmentShader:Re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Re.cube_vert,fragmentShader:Re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Re.equirect_vert,fragmentShader:Re.equirect_frag},distanceRGBA:{uniforms:Mt([le.common,le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Re.distanceRGBA_vert,fragmentShader:Re.distanceRGBA_frag},shadow:{uniforms:Mt([le.lights,le.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:Re.shadow_vert,fragmentShader:Re.shadow_frag}};$t.physical={uniforms:Mt([$t.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Re.meshphysical_vert,fragmentShader:Re.meshphysical_frag};var pr={r:0,b:0,g:0};function Ep(s,e,t,i,n,r,a){let o=new fe(0),l,h,c=r===!0?0:1,d=null,u=0,f=null;function g(y,p){y.getRGB(pr,pu(s)),i.buffers.color.setClear(pr.r,pr.g,pr.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(y,p=1){o.set(y),c=p,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,g(o,c)},render:function(y,p){let _=!1,m=p.isScene===!0?p.background:null;m&&m.isTexture&&(m=(p.backgroundBlurriness>0?t:e).get(m)),m===null?g(o,c):m&&m.isColor&&(g(m,1),_=!0);let v=s.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===aa)?(h===void 0&&(h=new xe(new kt(1,1,1),new Zt({name:"BackgroundCubeMaterial",uniforms:zn($t.backgroundCube.uniforms),vertexShader:$t.backgroundCube.vertexShader,fragmentShader:$t.backgroundCube.fragmentShader,side:_t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(x,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=m,h.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=He.getTransfer(m.colorSpace)!==Ve,d===m&&u===m.version&&f===s.toneMapping||(h.material.needsUpdate=!0,d=m,u=m.version,f=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new xe(new en(2,2),new Zt({name:"BackgroundMaterial",uniforms:zn($t.background.uniforms),vertexShader:$t.background.vertexShader,fragmentShader:$t.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=m,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=He.getTransfer(m.colorSpace)!==Ve,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),d===m&&u===m.version&&f===s.toneMapping||(l.material.needsUpdate=!0,d=m,u=m.version,f=s.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}}}function Tp(s,e,t,i){let n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=f(null),h=l,c=!1;function d(w){return i.isWebGL2?s.bindVertexArray(w):r.bindVertexArrayOES(w)}function u(w){return i.isWebGL2?s.deleteVertexArray(w):r.deleteVertexArrayOES(w)}function f(w){let M=[],b=[],D=[];for(let I=0;I<n;I++)M[I]=0,b[I]=0,D[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:b,attributeDivisors:D,object:w,attributes:{},index:null}}function g(){let w=h.newAttributes;for(let M=0,b=w.length;M<b;M++)w[M]=0}function y(w){p(w,0)}function p(w,M){let b=h.newAttributes,D=h.enabledAttributes,I=h.attributeDivisors;b[w]=1,D[w]===0&&(s.enableVertexAttribArray(w),D[w]=1),I[w]!==M&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](w,M),I[w]=M)}function _(){let w=h.newAttributes,M=h.enabledAttributes;for(let b=0,D=M.length;b<D;b++)M[b]!==w[b]&&(s.disableVertexAttribArray(b),M[b]=0)}function m(w,M,b,D,I,z,j){j===!0?s.vertexAttribIPointer(w,M,b,I,z):s.vertexAttribPointer(w,M,b,D,I,z)}function v(){x(),c=!0,h!==l&&(h=l,d(h.object))}function x(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:function(w,M,b,D,I){let z=!1;if(a){let j=function(C,B,H){let se=H.wireframe===!0,ue=o[C.id];ue===void 0&&(ue={},o[C.id]=ue);let ie=ue[B.id];ie===void 0&&(ie={},ue[B.id]=ie);let Y=ie[se];return Y===void 0&&(Y=f(i.isWebGL2?s.createVertexArray():r.createVertexArrayOES()),ie[se]=Y),Y}(D,b,M);h!==j&&(h=j,d(h.object)),z=function(C,B,H,se){let ue=h.attributes,ie=B.attributes,Y=0,te=H.getAttributes();for(let V in te)if(te[V].location>=0){let K=ue[V],ce=ie[V];if(ce===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),K===void 0||K.attribute!==ce||ce&&K.data!==ce.data)return!0;Y++}return h.attributesNum!==Y||h.index!==se}(w,D,b,I),z&&function(C,B,H,se){let ue={},ie=B.attributes,Y=0,te=H.getAttributes();for(let V in te)if(te[V].location>=0){let K=ie[V];K===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(K=C.instanceColor));let ce={};ce.attribute=K,K&&K.data&&(ce.data=K.data),ue[V]=ce,Y++}h.attributes=ue,h.attributesNum=Y,h.index=se}(w,D,b,I)}else{let j=M.wireframe===!0;h.geometry===D.id&&h.program===b.id&&h.wireframe===j||(h.geometry=D.id,h.program=b.id,h.wireframe=j,z=!0)}I!==null&&t.update(I,s.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,function(j,C,B,H){if(i.isWebGL2===!1&&(j.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();let se=H.attributes,ue=B.getAttributes(),ie=C.defaultAttributeValues;for(let Y in ue){let te=ue[Y];if(te.location>=0){let V=se[Y];if(V===void 0&&(Y==="instanceMatrix"&&j.instanceMatrix&&(V=j.instanceMatrix),Y==="instanceColor"&&j.instanceColor&&(V=j.instanceColor)),V!==void 0){let K=V.normalized,ce=V.itemSize,E=t.get(V);if(E===void 0)continue;let T=E.buffer,F=E.type,Z=E.bytesPerElement,U=i.isWebGL2===!0&&(F===s.INT||F===s.UNSIGNED_INT||V.gpuType===nu);if(V.isInterleavedBufferAttribute){let X=V.data,N=X.stride,O=V.offset;if(X.isInstancedInterleavedBuffer){for(let G=0;G<te.locationSize;G++)p(te.location+G,X.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let G=0;G<te.locationSize;G++)y(te.location+G);s.bindBuffer(s.ARRAY_BUFFER,T);for(let G=0;G<te.locationSize;G++)m(te.location+G,ce/te.locationSize,F,K,N*Z,(O+ce/te.locationSize*G)*Z,U)}else{if(V.isInstancedBufferAttribute){for(let X=0;X<te.locationSize;X++)p(te.location+X,V.meshPerAttribute);j.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let X=0;X<te.locationSize;X++)y(te.location+X);s.bindBuffer(s.ARRAY_BUFFER,T);for(let X=0;X<te.locationSize;X++)m(te.location+X,ce/te.locationSize,F,K,ce*Z,ce/te.locationSize*X*Z,U)}}else if(ie!==void 0){let K=ie[Y];if(K!==void 0)switch(K.length){case 2:s.vertexAttrib2fv(te.location,K);break;case 3:s.vertexAttrib3fv(te.location,K);break;case 4:s.vertexAttrib4fv(te.location,K);break;default:s.vertexAttrib1fv(te.location,K)}}}}_()}(w,M,b,D),I!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))},reset:v,resetDefaultState:x,dispose:function(){v();for(let w in o){let M=o[w];for(let b in M){let D=M[b];for(let I in D)u(D[I].object),delete D[I];delete M[b]}delete o[w]}},releaseStatesOfGeometry:function(w){if(o[w.id]===void 0)return;let M=o[w.id];for(let b in M){let D=M[b];for(let I in D)u(D[I].object),delete D[I];delete M[b]}delete o[w.id]},releaseStatesOfProgram:function(w){for(let M in o){let b=o[M];if(b[w.id]===void 0)continue;let D=b[w.id];for(let I in D)u(D[I].object),delete D[I];delete b[w.id]}},initAttributes:g,enableAttribute:y,disableUnusedAttributes:_}}function Ap(s,e,t,i){let n=i.isWebGL2,r;this.setMode=function(a){r=a},this.render=function(a,o){s.drawArrays(r,a,o),t.update(o,r,1)},this.renderInstances=function(a,o,l){if(l===0)return;let h,c;if(n)h=s,c="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",h===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");h[c](r,a,o,l),t.update(o,r,l)},this.renderMultiDraw=function(a,o,l){if(l===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let c=0;c<l;c++)this.render(a[c],o[c]);else{h.multiDrawArraysWEBGL(r,a,0,o,0,l);let c=0;for(let d=0;d<l;d++)c+=o[d];t.update(c,r,1)}}}function Rp(s,e,t){let i;function n(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",o=n(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let l=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,c=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),f=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),m=d>0,v=r||e.has("OES_texture_float");return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:function(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i},getMaxPrecision:n,precision:a,logarithmicDepthBuffer:h,maxTextures:c,maxVertexTextures:d,maxTextureSize:u,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:y,maxVaryings:p,maxFragmentUniforms:_,vertexTextures:m,floatFragmentTextures:v,floatVertexTextures:m&&v,maxSamples:r?s.getParameter(s.MAX_SAMPLES):0}}function Cp(s){let e=this,t=null,i=0,n=!1,r=!1,a=new di,o=new Le,l={value:null,needsUpdate:!1};function h(c,d,u,f){let g=c!==null?c.length:0,y=null;if(g!==0){if(y=l.value,f!==!0||y===null){let p=u+4*g,_=d.matrixWorldInverse;o.getNormalMatrix(_),(y===null||y.length<p)&&(y=new Float32Array(p));for(let m=0,v=u;m!==g;++m,v+=4)a.copy(c[m]).applyMatrix4(_,o),a.normal.toArray(y,v),y[v+3]=a.constant}l.value=y,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,y}this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){let u=c.length!==0||d||i!==0||n;return n=d,i=c.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){t=h(c,d,0)},this.setState=function(c,d,u){let f=c.clippingPlanes,g=c.clipIntersection,y=c.clipShadows,p=s.get(c);if(!n||f===null||f.length===0||r&&!y)r?h(null):function(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}();else{let _=r?0:i,m=4*_,v=p.clippingState||null;l.value=v,v=h(f,d,m,u);for(let x=0;x!==m;++x)v[x]=t[x];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}}}function Pp(s){let e=new WeakMap;function t(n,r){return r===Ao?n.mapping=In:r===Ro&&(n.mapping=Un),n}function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping;if(r===Ao||r===Ro){if(e.has(n))return t(e.get(n).texture,n.mapping);{let a=n.image;if(a&&a.height>0){let o=new Oo(a.height/2);return o.fromEquirectangularTexture(s,n),e.set(n,o),n.addEventListener("dispose",i),t(o.texture,n.mapping)}return null}}}return n},dispose:function(){e=new WeakMap}}}var Hr=class extends Ms{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},xc=[.125,.215,.35,.446,.526,.582],us=20,po=new Hr,Mc=new fe,fo=null,mo=0,go=0,Xi=(1+Math.sqrt(5))/2,An=1/Xi,Sc=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Xi,An),new R(0,Xi,-An),new R(An,0,Xi),new R(-An,0,Xi),new R(Xi,An,0),new R(-Xi,An,0)],Gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){fo=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fo,mo,go),e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===In||e.mapping===Un?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fo=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:xs,format:Qt,colorSpace:fi,depthBuffer:!1},n=bc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bc(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(a){let o=[],l=[],h=[],c=a,d=a-4+1+xc.length;for(let u=0;u<d;u++){let f=Math.pow(2,c);l.push(f);let g=1/f;u>a-4?g=xc[u-a+4-1]:u===0&&(g=0),h.push(g);let y=1/(f-2),p=-y,_=1+y,m=[p,p,_,p,_,_,p,p,_,_,p,_],v=6,x=6,w=3,M=2,b=1,D=new Float32Array(w*x*v),I=new Float32Array(M*x*v),z=new Float32Array(b*x*v);for(let C=0;C<v;C++){let B=C%3*2/3-1,H=C>2?0:-1,se=[B,H,0,B+2/3,H,0,B+2/3,H+1,0,B,H,0,B+2/3,H+1,0,B,H+1,0];D.set(se,w*x*C),I.set(m,M*x*C);let ue=[C,C,C,C,C,C];z.set(ue,b*x*C)}let j=new je;j.setAttribute("position",new st(D,w)),j.setAttribute("uv",new st(I,M)),j.setAttribute("faceIndex",new st(z,b)),o.push(j),c>4&&c--}return{lodPlanes:o,sizeLods:l,sigmas:h}}(r)),this._blurMaterial=function(a,o,l){let h=new Float32Array(us),c=new R(0,1,0);return new Zt({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/l,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:h},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(r,e,t)}return n}_compileMaterial(e){let t=new xe(this._lodPlanes[0],e);this._renderer.compile(t,po)}_sceneToCubeUV(e,t,i,n){let r=new bt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(Mc),l.toneMapping=Ti,l.autoClear=!1;let d=new ut({name:"PMREM.Background",side:_t,depthWrite:!1,depthTest:!1}),u=new xe(new kt,d),f=!1,g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(Mc),f=!0);for(let y=0;y<6;y++){let p=y%3;p===0?(r.up.set(0,a[y],0),r.lookAt(o[y],0,0)):p===1?(r.up.set(0,0,a[y]),r.lookAt(0,o[y],0)):(r.up.set(0,a[y],0),r.lookAt(0,0,o[y]));let _=this._cubeSize;fr(n,p*_,y>2?_:0,_,_),l.setRenderTarget(n),f&&l.render(u,r),l.render(e,r)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=c,l.autoClear=h,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===In||e.mapping===Un;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wc());let r=n?this._cubemapMaterial:this._equirectMaterial,a=new xe(this._lodPlanes[0],r);r.uniforms.envMap.value=e;let o=this._cubeSize;fr(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(a,po)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){let r=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Sc[(n-1)%Sc.length];this._blur(e,n-1,n,r,a)}t.autoClear=i}_blur(e,t,i,n,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){let l=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let c=new xe(this._lodPlanes[n],h),d=h.uniforms,u=this._sizeLods[i]-1,f=isFinite(r)?Math.PI/(2*u):2*Math.PI/39,g=r/f,y=isFinite(r)?1+Math.floor(3*g):us;y>us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${y} samples when the maximum is set to 20`);let p=[],_=0;for(let x=0;x<us;++x){let w=x/g,M=Math.exp(-w*w/2);p.push(M),x===0?_+=M:x<y&&(_+=2*M)}for(let x=0;x<p.length;x++)p[x]=p[x]/_;d.envMap.value=e.texture,d.samples.value=y,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:m}=this;d.dTheta.value=f,d.mipInt.value=m-i;let v=this._sizeLods[n];fr(t,3*v*(n>m-4?n-m+4:0),4*(this._cubeSize-v),3*v,2*v),l.setRenderTarget(t),l.render(c,po)}};function bc(s,e,t){let i=new mi(s,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function fr(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function wc(){return new Zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ec(){return new Zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Lp(s){let e=new WeakMap,t=null;function i(n){let r=n.target;r.removeEventListener("dispose",i);let a=e.get(r);a!==void 0&&(e.delete(r),a.dispose())}return{get:function(n){if(n&&n.isTexture){let r=n.mapping,a=r===Ao||r===Ro,o=r===In||r===Un;if(a||o){if(n.isRenderTargetTexture&&n.needsPMREMUpdate===!0){n.needsPMREMUpdate=!1;let l=e.get(n);return t===null&&(t=new Gr(s)),l=a?t.fromEquirectangular(n,l):t.fromCubemap(n,l),e.set(n,l),l.texture}if(e.has(n))return e.get(n).texture;{let l=n.image;if(a&&l&&l.height>0||o&&l&&function(h){let c=0,d=6;for(let u=0;u<d;u++)h[u]!==void 0&&c++;return c===d}(l)){t===null&&(t=new Gr(s));let h=a?t.fromEquirectangular(n):t.fromCubemap(n);return e.set(n,h),n.addEventListener("dispose",i),h.texture}return null}}}return n},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Dp(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Ip(s,e,t,i){let n={},r=new WeakMap;function a(l){let h=l.target;h.index!==null&&e.remove(h.index);for(let d in h.attributes)e.remove(h.attributes[d]);for(let d in h.morphAttributes){let u=h.morphAttributes[d];for(let f=0,g=u.length;f<g;f++)e.remove(u[f])}h.removeEventListener("dispose",a),delete n[h.id];let c=r.get(h);c&&(e.remove(c),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(l){let h=[],c=l.index,d=l.attributes.position,u=0;if(c!==null){let y=c.array;u=c.version;for(let p=0,_=y.length;p<_;p+=3){let m=y[p+0],v=y[p+1],x=y[p+2];h.push(m,v,v,x,x,m)}}else{if(d===void 0)return;{let y=d.array;u=d.version;for(let p=0,_=y.length/3-1;p<_;p+=3){let m=p+0,v=p+1,x=p+2;h.push(m,v,v,x,x,m)}}}let f=new(uu(h)?Fr:Br)(h,1);f.version=u;let g=r.get(l);g&&e.remove(g),r.set(l,f)}return{get:function(l,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h},update:function(l){let h=l.attributes;for(let d in h)e.update(h[d],s.ARRAY_BUFFER);let c=l.morphAttributes;for(let d in c){let u=c[d];for(let f=0,g=u.length;f<g;f++)e.update(u[f],s.ARRAY_BUFFER)}},getWireframeAttribute:function(l){let h=r.get(l);if(h){let c=l.index;c!==null&&h.version<c.version&&o(l)}else o(l);return r.get(l)}}}function Up(s,e,t,i){let n=i.isWebGL2,r,a,o;this.setMode=function(l){r=l},this.setIndex=function(l){a=l.type,o=l.bytesPerElement},this.render=function(l,h){s.drawElements(r,h,a,l*o),t.update(h,r,1)},this.renderInstances=function(l,h,c){if(c===0)return;let d,u;if(n)d=s,u="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",d===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");d[u](r,h,a,l*o,c),t.update(h,r,c)},this.renderMultiDraw=function(l,h,c){if(c===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<c;u++)this.render(l[u]/o,h[u]);else{d.multiDrawElementsWEBGL(r,h,0,a,l,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];t.update(u,r,1)}}}function Np(s){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,i,n){switch(e.calls++,i){case s.TRIANGLES:e.triangles+=n*(t/3);break;case s.LINES:e.lines+=n*(t/2);break;case s.LINE_STRIP:e.lines+=n*(t-1);break;case s.LINE_LOOP:e.lines+=n*t;break;case s.POINTS:e.points+=n*t;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",i)}}}}function Op(s,e){return s[0]-e[0]}function kp(s,e){return Math.abs(e[1])-Math.abs(s[1])}function zp(s,e,t){let i={},n=new Float32Array(8),r=new WeakMap,a=new tt,o=[];for(let l=0;l<8;l++)o[l]=[l,0];return{update:function(l,h,c){let d=l.morphTargetInfluences;if(e.isWebGL2===!0){let u=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=u!==void 0?u.length:0,g=r.get(h);if(g===void 0||g.count!==f){let B=function(){j.dispose(),r.delete(h),h.removeEventListener("dispose",B)};g!==void 0&&g.texture.dispose();let _=h.morphAttributes.position!==void 0,m=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],M=h.morphAttributes.color||[],b=0;_===!0&&(b=1),m===!0&&(b=2),v===!0&&(b=3);let D=h.attributes.position.count*b,I=1;D>e.maxTextureSize&&(I=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);let z=new Float32Array(D*I*4*f),j=new Or(z,D,I,f);j.type=Ei,j.needsUpdate=!0;let C=4*b;for(let H=0;H<f;H++){let se=x[H],ue=w[H],ie=M[H],Y=D*I*4*H;for(let te=0;te<se.count;te++){let V=te*C;_===!0&&(a.fromBufferAttribute(se,te),z[Y+V+0]=a.x,z[Y+V+1]=a.y,z[Y+V+2]=a.z,z[Y+V+3]=0),m===!0&&(a.fromBufferAttribute(ue,te),z[Y+V+4]=a.x,z[Y+V+5]=a.y,z[Y+V+6]=a.z,z[Y+V+7]=0),v===!0&&(a.fromBufferAttribute(ie,te),z[Y+V+8]=a.x,z[Y+V+9]=a.y,z[Y+V+10]=a.z,z[Y+V+11]=ie.itemSize===4?a.w:1)}}g={count:f,texture:j,size:new oe(D,I)},r.set(h,g),h.addEventListener("dispose",B)}let y=0;for(let _=0;_<d.length;_++)y+=d[_];let p=h.morphTargetsRelative?1:1-y;c.getUniforms().setValue(s,"morphTargetBaseInfluence",p),c.getUniforms().setValue(s,"morphTargetInfluences",d),c.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{let u=d===void 0?0:d.length,f=i[h.id];if(f===void 0||f.length!==u){f=[];for(let m=0;m<u;m++)f[m]=[m,0];i[h.id]=f}for(let m=0;m<u;m++){let v=f[m];v[0]=m,v[1]=d[m]}f.sort(kp);for(let m=0;m<8;m++)m<u&&f[m][1]?(o[m][0]=f[m][0],o[m][1]=f[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(Op);let g=h.morphAttributes.position,y=h.morphAttributes.normal,p=0;for(let m=0;m<8;m++){let v=o[m],x=v[0],w=v[1];x!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+m)!==g[x]&&h.setAttribute("morphTarget"+m,g[x]),y&&h.getAttribute("morphNormal"+m)!==y[x]&&h.setAttribute("morphNormal"+m,y[x]),n[m]=w,p+=w):(g&&h.hasAttribute("morphTarget"+m)===!0&&h.deleteAttribute("morphTarget"+m),y&&h.hasAttribute("morphNormal"+m)===!0&&h.deleteAttribute("morphNormal"+m),n[m]=0)}let _=h.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",n)}}}}function Bp(s,e,t,i){let n=new WeakMap;function r(a){let o=a.target;o.removeEventListener("dispose",r),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=i.render.frame,l=a.geometry,h=e.get(a,l);if(n.get(h)!==o&&(e.update(h),n.set(h,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",r)===!1&&a.addEventListener("dispose",r),n.get(a)!==o&&(t.update(a.instanceMatrix,s.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,s.ARRAY_BUFFER),n.set(a,o))),a.isSkinnedMesh){let c=a.skeleton;n.get(c)!==o&&(c.update(),n.set(c,o))}return h},dispose:function(){n=new WeakMap}}}var Vr=class extends Ot{constructor(e,t,i,n,r,a,o,l,h,c){if((c=c!==void 0?c:$i)!==$i&&c!==Nn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===$i&&(i=wi),i===void 0&&c===Nn&&(i=Ji),super(null,n,r,a,o,l,c,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},mu=new Ot,gu=new Vr(1,1);gu.compareFunction=515;var _u=new Or,vu=new Uo,yu=new Bn,Tc=[],Ac=[],Rc=new Float32Array(16),Cc=new Float32Array(9),Pc=new Float32Array(4);function qn(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=Tc[n];if(r===void 0&&(r=new Float32Array(n),Tc[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function rt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function at(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function la(s,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function Fp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2fv(this.addr,e),at(t,e)}}function Gp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;s.uniform3fv(this.addr,e),at(t,e)}}function Vp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4fv(this.addr,e),at(t,e)}}function Wp(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(rt(t,i))return;Pc.set(i),s.uniformMatrix2fv(this.addr,!1,Pc),at(t,i)}}function Xp(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(rt(t,i))return;Cc.set(i),s.uniformMatrix3fv(this.addr,!1,Cc),at(t,i)}}function jp(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(rt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(rt(t,i))return;Rc.set(i),s.uniformMatrix4fv(this.addr,!1,Rc),at(t,i)}}function qp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Yp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2iv(this.addr,e),at(t,e)}}function Zp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;s.uniform3iv(this.addr,e),at(t,e)}}function Kp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4iv(this.addr,e),at(t,e)}}function Jp(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $p(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;s.uniform2uiv(this.addr,e),at(t,e)}}function Qp(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;s.uniform3uiv(this.addr,e),at(t,e)}}function ef(s,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;s.uniform4uiv(this.addr,e),at(t,e)}}function tf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r=this.type===s.SAMPLER_2D_SHADOW?gu:mu;t.setTexture2D(e||r,n)}function nf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||vu,n)}function sf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||yu,n)}function rf(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||_u,n)}function af(s,e){s.uniform1fv(this.addr,e)}function of(s,e){let t=qn(e,this.size,2);s.uniform2fv(this.addr,t)}function lf(s,e){let t=qn(e,this.size,3);s.uniform3fv(this.addr,t)}function hf(s,e){let t=qn(e,this.size,4);s.uniform4fv(this.addr,t)}function cf(s,e){let t=qn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function uf(s,e){let t=qn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function df(s,e){let t=qn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function pf(s,e){s.uniform1iv(this.addr,e)}function ff(s,e){s.uniform2iv(this.addr,e)}function mf(s,e){s.uniform3iv(this.addr,e)}function gf(s,e){s.uniform4iv(this.addr,e)}function _f(s,e){s.uniform1uiv(this.addr,e)}function vf(s,e){s.uniform2uiv(this.addr,e)}function yf(s,e){s.uniform3uiv(this.addr,e)}function xf(s,e){s.uniform4uiv(this.addr,e)}function Mf(s,e,t){let i=this.cache,n=e.length,r=la(t,n);rt(i,r)||(s.uniform1iv(this.addr,r),at(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||mu,r[a])}function Sf(s,e,t){let i=this.cache,n=e.length,r=la(t,n);rt(i,r)||(s.uniform1iv(this.addr,r),at(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||vu,r[a])}function bf(s,e,t){let i=this.cache,n=e.length,r=la(t,n);rt(i,r)||(s.uniform1iv(this.addr,r),at(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||yu,r[a])}function wf(s,e,t){let i=this.cache,n=e.length,r=la(t,n);rt(i,r)||(s.uniform1iv(this.addr,r),at(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||_u,r[a])}var ko=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=function(n){switch(n){case 5126:return Fp;case 35664:return Hp;case 35665:return Gp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return jp;case 5124:case 35670:return qp;case 35667:case 35671:return Yp;case 35668:case 35672:return Zp;case 35669:case 35673:return Kp;case 5125:return Jp;case 36294:return $p;case 36295:return Qp;case 36296:return ef;case 35678:case 36198:case 36298:case 36306:case 35682:return tf;case 35679:case 36299:case 36307:return nf;case 35680:case 36300:case 36308:case 36293:return sf;case 36289:case 36303:case 36311:case 36292:return rf}}(t.type)}},zo=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(n){switch(n){case 5126:return af;case 35664:return of;case 35665:return lf;case 35666:return hf;case 35674:return cf;case 35675:return uf;case 35676:return df;case 5124:case 35670:return pf;case 35667:case 35671:return ff;case 35668:case 35672:return mf;case 35669:case 35673:return gf;case 5125:return _f;case 36294:return vf;case 36295:return yf;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Mf;case 35679:case 36299:case 36307:return Sf;case 35680:case 36300:case 36308:case 36293:return bf;case 36289:case 36303:case 36311:case 36292:return wf}}(t.type)}},Bo=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},_o=/(\w+)(\])?(\[|\.)?/g;function Lc(s,e){s.seq.push(e),s.map[e.id]=e}function Ef(s,e,t){let i=s.name,n=i.length;for(_o.lastIndex=0;;){let r=_o.exec(i),a=_o.lastIndex,o=r[1],l=r[2]==="]",h=r[3];if(l&&(o|=0),h===void 0||h==="["&&a+2===n){Lc(t,h===void 0?new ko(o,s,e):new zo(o,s,e));break}{let c=t.map[o];c===void 0&&(c=new Bo(o),Lc(t,c)),t=c}}}var Dn=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let r=e.getActiveUniform(t,n);Ef(r,e.getUniformLocation(t,r.name),this)}}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function Dc(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var Tf=37297,Af=0;function Ic(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";let r=/ERROR: 0:(\d+)/.exec(n);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+function(o,l){let h=o.split(`
`),c=[],d=Math.max(l-6,0),u=Math.min(l+6,h.length);for(let f=d;f<u;f++){let g=f+1;c.push(`${g===l?">":" "} ${g}: ${h[f]}`)}return c.join(`
`)}(s.getShaderSource(e),a)}return n}function Rf(s,e){let t=function(i){let n=He.getPrimaries(He.workingColorSpace),r=He.getPrimaries(i),a;switch(n===r?a="":n===Lr&&r===Pr?a="LinearDisplayP3ToLinearSRGB":n===Pr&&r===Lr&&(a="LinearSRGBToLinearDisplayP3"),i){case fi:case oa:return[a,"LinearTransferOETF"];case Ze:case Rl:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[a,"LinearTransferOETF"]}}(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Cf(s,e){let t;switch(e){case Qd:t="Linear";break;case ep:t="Reinhard";break;case tp:t="OptimizedCineon";break;case Tl:t="ACESFilmic";break;case np:t="AgX";break;case ip:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rn(s){return s!==""}function Uc(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fo(s){return s.replace(Pf,Df)}var Lf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Df(s,e){let t=Re[e];if(t===void 0){let i=Lf.get(e);if(i===void 0)throw new Error("Can not resolve #include <"+e+">");t=Re[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i)}return Fo(t)}var If=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oc(s){return s.replace(If,Uf)}function Uf(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function kc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Nf(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=function(C){let B="SHADOWMAP_TYPE_BASIC";return C.shadowMapType===Qc?B="SHADOWMAP_TYPE_PCF":C.shadowMapType===El?B="SHADOWMAP_TYPE_PCF_SOFT":C.shadowMapType===ui&&(B="SHADOWMAP_TYPE_VSM"),B}(t),h=function(C){let B="ENVMAP_TYPE_CUBE";if(C.envMap)switch(C.envMapMode){case In:case Un:B="ENVMAP_TYPE_CUBE";break;case aa:B="ENVMAP_TYPE_CUBE_UV"}return B}(t),c=function(C){let B="ENVMAP_MODE_REFLECTION";return C.envMap&&C.envMapMode===Un&&(B="ENVMAP_MODE_REFRACTION"),B}(t),d=function(C){let B="ENVMAP_BLENDING_NONE";if(C.envMap)switch(C.combine){case tu:B="ENVMAP_BLENDING_MULTIPLY";break;case Jd:B="ENVMAP_BLENDING_MIX";break;case $d:B="ENVMAP_BLENDING_ADD"}return B}(t),u=function(C){let B=C.envMapCubeUVHeight;if(B===null)return null;let H=Math.log2(B)-2,se=1/B;return{texelWidth:1/(3*Math.max(Math.pow(2,H),112)),texelHeight:se,maxMip:H}}(t),f=t.isWebGL2?"":function(C){return[C.extensionDerivatives||C.envMapCubeUVHeight||C.bumpMap||C.normalMapTangentSpace||C.clearcoatNormalMap||C.flatShading||C.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(C.extensionFragDepth||C.logarithmicDepthBuffer)&&C.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",C.extensionDrawBuffers&&C.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(C.extensionShaderTextureLOD||C.envMap||C.transmission)&&C.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rn).join(`
`)}(t),g=function(C){return[C.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Rn).join(`
`)}(t),y=function(C){let B=[];for(let H in C){let se=C[H];se!==!1&&B.push("#define "+H+" "+se)}return B.join(`
`)}(r),p=n.createProgram(),_,m,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Rn).join(`
`),_.length>0&&(_+=`
`),m=[f,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Rn).join(`
`),m.length>0&&(m+=`
`)):(_=[kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rn).join(`
`),m=[f,kc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Re.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Cf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Re.colorspace_pars_fragment,Rf("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rn).join(`
`)),a=Fo(a),a=Uc(a,t),a=Nc(a,t),o=Fo(o),o=Uc(o,t),o=Nc(o,t),a=Oc(a),o=Oc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,_=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=v+_+a,w=v+m+o,M=Dc(n,n.VERTEX_SHADER,x),b=Dc(n,n.FRAGMENT_SHADER,w);function D(C){if(s.debug.checkShaderErrors){let B=n.getProgramInfoLog(p).trim(),H=n.getShaderInfoLog(M).trim(),se=n.getShaderInfoLog(b).trim(),ue=!0,ie=!0;if(n.getProgramParameter(p,n.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,p,M,b);else{let Y=Ic(n,M,"vertex"),te=Ic(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,n.VALIDATE_STATUS)+`

Program Info Log: `+B+`
`+Y+`
`+te)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):H!==""&&se!==""||(ie=!1);ie&&(C.diagnostics={runnable:ue,programLog:B,vertexShader:{log:H,prefix:_},fragmentShader:{log:se,prefix:m}})}n.deleteShader(M),n.deleteShader(b),I=new Dn(n,p),z=function(B,H){let se={},ue=B.getProgramParameter(H,B.ACTIVE_ATTRIBUTES);for(let ie=0;ie<ue;ie++){let Y=B.getActiveAttrib(H,ie),te=Y.name,V=1;Y.type===B.FLOAT_MAT2&&(V=2),Y.type===B.FLOAT_MAT3&&(V=3),Y.type===B.FLOAT_MAT4&&(V=4),se[te]={type:Y.type,location:B.getAttribLocation(H,te),locationSize:V}}return se}(n,p)}let I,z;n.attachShader(p,M),n.attachShader(p,b),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),this.getUniforms=function(){return I===void 0&&D(this),I},this.getAttributes=function(){return z===void 0&&D(this),z};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=n.getProgramParameter(p,Tf)),j},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Af++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=b,this}var Of=0,Ho=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Go(e),t.set(e,i)),i}},Go=class{constructor(e){this.id=Of++,this.code=e,this.usedTimes=0}};function kf(s,e,t,i,n,r,a){let o=new zr,l=new Ho,h=[],c=n.isWebGL2,d=n.logarithmicDepthBuffer,u=n.vertexTextures,f=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(p){return p===0?"uv":`uv${p}`}return{getParameters:function(p,_,m,v,x){let w=v.fog,M=x.geometry,b=p.isMeshStandardMaterial?v.environment:null,D=(p.isMeshStandardMaterial?t:e).get(p.envMap||b),I=D&&D.mapping===aa?D.image.height:null,z=g[p.type];p.precision!==null&&(f=n.getMaxPrecision(p.precision),f!==p.precision&&console.warn("THREE.WebGLProgram.getParameters:",p.precision,"not supported, using",f,"instead."));let j=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,C=j!==void 0?j.length:0,B,H,se,ue,ie=0;if(M.morphAttributes.position!==void 0&&(ie=1),M.morphAttributes.normal!==void 0&&(ie=2),M.morphAttributes.color!==void 0&&(ie=3),z){let pt=$t[z];B=pt.vertexShader,H=pt.fragmentShader}else B=p.vertexShader,H=p.fragmentShader,l.update(p),se=l.getVertexShaderID(p),ue=l.getFragmentShaderID(p);let Y=s.getRenderTarget(),te=x.isInstancedMesh===!0,V=x.isBatchedMesh===!0,K=!!p.map,ce=!!p.matcap,E=!!D,T=!!p.aoMap,F=!!p.lightMap,Z=!!p.bumpMap,U=!!p.normalMap,X=!!p.displacementMap,N=!!p.emissiveMap,O=!!p.metalnessMap,G=!!p.roughnessMap,Q=p.anisotropy>0,J=p.clearcoat>0,S=p.iridescence>0,ne=p.sheen>0,P=p.transmission>0,L=Q&&!!p.anisotropyMap,k=J&&!!p.clearcoatMap,ae=J&&!!p.clearcoatNormalMap,pe=J&&!!p.clearcoatRoughnessMap,me=S&&!!p.iridescenceMap,we=S&&!!p.iridescenceThicknessMap,ge=ne&&!!p.sheenColorMap,_e=ne&&!!p.sheenRoughnessMap,Ce=!!p.specularMap,ot=!!p.specularColorMap,ve=!!p.specularIntensityMap,ke=P&&!!p.transmissionMap,Ie=P&&!!p.thicknessMap,Hs=!!p.gradientMap,un=!!p.alphaMap,Gs=p.alphaTest>0,Dt=!!p.alphaHash,Tt=!!p.extensions,dn=!!M.attributes.uv1,q=!!M.attributes.uv2,Vs=!!M.attributes.uv3,ns=Ti;return p.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(ns=s.toneMapping)),{isWebGL2:c,shaderID:z,shaderType:p.type,shaderName:p.name,vertexShader:B,fragmentShader:H,defines:p.defines,customVertexShaderID:se,customFragmentShaderID:ue,isRawShaderMaterial:p.isRawShaderMaterial===!0,glslVersion:p.glslVersion,precision:f,batching:V,instancing:te,instancingColor:te&&x.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:fi,map:K,matcap:ce,envMap:E,envMapMode:E&&D.mapping,envMapCubeUVHeight:I,aoMap:T,lightMap:F,bumpMap:Z,normalMap:U,displacementMap:u&&X,emissiveMap:N,normalMapObjectSpace:U&&p.normalMapType===1,normalMapTangentSpace:U&&p.normalMapType===0,metalnessMap:O,roughnessMap:G,anisotropy:Q,anisotropyMap:L,clearcoat:J,clearcoatMap:k,clearcoatNormalMap:ae,clearcoatRoughnessMap:pe,iridescence:S,iridescenceMap:me,iridescenceThicknessMap:we,sheen:ne,sheenColorMap:ge,sheenRoughnessMap:_e,specularMap:Ce,specularColorMap:ot,specularIntensityMap:ve,transmission:P,transmissionMap:ke,thicknessMap:Ie,gradientMap:Hs,opaque:p.transparent===!1&&p.blending===1,alphaMap:un,alphaTest:Gs,alphaHash:Dt,combine:p.combine,mapUv:K&&y(p.map.channel),aoMapUv:T&&y(p.aoMap.channel),lightMapUv:F&&y(p.lightMap.channel),bumpMapUv:Z&&y(p.bumpMap.channel),normalMapUv:U&&y(p.normalMap.channel),displacementMapUv:X&&y(p.displacementMap.channel),emissiveMapUv:N&&y(p.emissiveMap.channel),metalnessMapUv:O&&y(p.metalnessMap.channel),roughnessMapUv:G&&y(p.roughnessMap.channel),anisotropyMapUv:L&&y(p.anisotropyMap.channel),clearcoatMapUv:k&&y(p.clearcoatMap.channel),clearcoatNormalMapUv:ae&&y(p.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&y(p.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&y(p.iridescenceMap.channel),iridescenceThicknessMapUv:we&&y(p.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&y(p.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(p.sheenRoughnessMap.channel),specularMapUv:Ce&&y(p.specularMap.channel),specularColorMapUv:ot&&y(p.specularColorMap.channel),specularIntensityMapUv:ve&&y(p.specularIntensityMap.channel),transmissionMapUv:ke&&y(p.transmissionMap.channel),thicknessMapUv:Ie&&y(p.thicknessMap.channel),alphaMapUv:un&&y(p.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(U||Q),vertexColors:p.vertexColors,vertexAlphas:p.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,vertexUv1s:dn,vertexUv2s:q,vertexUv3s:Vs,pointsUvs:x.isPoints===!0&&!!M.attributes.uv&&(K||un),fog:!!w,useFog:p.fog===!0,fogExp2:w&&w.isFogExp2,flatShading:p.flatShading===!0,sizeAttenuation:p.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:x.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:C,morphTextureStride:ie,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:p.dithering,shadowMapEnabled:s.shadowMap.enabled&&m.length>0,shadowMapType:s.shadowMap.type,toneMapping:ns,useLegacyLights:s._useLegacyLights,decodeVideoTexture:K&&p.map.isVideoTexture===!0&&He.getTransfer(p.map.colorSpace)===Ve,premultipliedAlpha:p.premultipliedAlpha,doubleSided:p.side===2,flipSided:p.side===_t,useDepthPacking:p.depthPacking>=0,depthPacking:p.depthPacking||0,index0AttributeName:p.index0AttributeName,extensionDerivatives:Tt&&p.extensions.derivatives===!0,extensionFragDepth:Tt&&p.extensions.fragDepth===!0,extensionDrawBuffers:Tt&&p.extensions.drawBuffers===!0,extensionShaderTextureLOD:Tt&&p.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Tt&&p.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:p.customProgramCacheKey()}},getProgramCacheKey:function(p){let _=[];if(p.shaderID?_.push(p.shaderID):(_.push(p.customVertexShaderID),_.push(p.customFragmentShaderID)),p.defines!==void 0)for(let m in p.defines)_.push(m),_.push(p.defines[m]);return p.isRawShaderMaterial===!1&&(function(m,v){m.push(v.precision),m.push(v.outputColorSpace),m.push(v.envMapMode),m.push(v.envMapCubeUVHeight),m.push(v.mapUv),m.push(v.alphaMapUv),m.push(v.lightMapUv),m.push(v.aoMapUv),m.push(v.bumpMapUv),m.push(v.normalMapUv),m.push(v.displacementMapUv),m.push(v.emissiveMapUv),m.push(v.metalnessMapUv),m.push(v.roughnessMapUv),m.push(v.anisotropyMapUv),m.push(v.clearcoatMapUv),m.push(v.clearcoatNormalMapUv),m.push(v.clearcoatRoughnessMapUv),m.push(v.iridescenceMapUv),m.push(v.iridescenceThicknessMapUv),m.push(v.sheenColorMapUv),m.push(v.sheenRoughnessMapUv),m.push(v.specularMapUv),m.push(v.specularColorMapUv),m.push(v.specularIntensityMapUv),m.push(v.transmissionMapUv),m.push(v.thicknessMapUv),m.push(v.combine),m.push(v.fogExp2),m.push(v.sizeAttenuation),m.push(v.morphTargetsCount),m.push(v.morphAttributeCount),m.push(v.numDirLights),m.push(v.numPointLights),m.push(v.numSpotLights),m.push(v.numSpotLightMaps),m.push(v.numHemiLights),m.push(v.numRectAreaLights),m.push(v.numDirLightShadows),m.push(v.numPointLightShadows),m.push(v.numSpotLightShadows),m.push(v.numSpotLightShadowsWithMaps),m.push(v.numLightProbes),m.push(v.shadowMapType),m.push(v.toneMapping),m.push(v.numClippingPlanes),m.push(v.numClipIntersection),m.push(v.depthPacking)}(_,p),function(m,v){o.disableAll(),v.isWebGL2&&o.enable(0),v.supportsVertexTextures&&o.enable(1),v.instancing&&o.enable(2),v.instancingColor&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),m.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),m.push(o.mask)}(_,p),_.push(s.outputColorSpace)),_.push(p.customProgramCacheKey),_.join()},getUniforms:function(p){let _=g[p.type],m;if(_){let v=$t[_];m=Mp.clone(v.uniforms)}else m=p.uniforms;return m},acquireProgram:function(p,_){let m;for(let v=0,x=h.length;v<x;v++){let w=h[v];if(w.cacheKey===_){m=w,++m.usedTimes;break}}return m===void 0&&(m=new Nf(s,_,p,r),h.push(m)),m},releaseProgram:function(p){if(--p.usedTimes==0){let _=h.indexOf(p);h[_]=h[h.length-1],h.pop(),p.destroy()}},releaseShaderCache:function(p){l.remove(p)},programs:h,dispose:function(){l.dispose()}}}function zf(){let s=new WeakMap;return{get:function(e){let t=s.get(e);return t===void 0&&(t={},s.set(e,t)),t},remove:function(e){s.delete(e)},update:function(e,t,i){s.get(e)[t]=i},dispose:function(){s=new WeakMap}}}function Bf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function zc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Bc(){let s=[],e=0,t=[],i=[],n=[];function r(a,o,l,h,c,d){let u=s[e];return u===void 0?(u={id:a.id,object:a,geometry:o,material:l,groupOrder:h,renderOrder:a.renderOrder,z:c,group:d},s[e]=u):(u.id=a.id,u.object=a,u.geometry=o,u.material=l,u.groupOrder=h,u.renderOrder=a.renderOrder,u.z=c,u.group=d),e++,u}return{opaque:t,transmissive:i,transparent:n,init:function(){e=0,t.length=0,i.length=0,n.length=0},push:function(a,o,l,h,c,d){let u=r(a,o,l,h,c,d);l.transmission>0?i.push(u):l.transparent===!0?n.push(u):t.push(u)},unshift:function(a,o,l,h,c,d){let u=r(a,o,l,h,c,d);l.transmission>0?i.unshift(u):l.transparent===!0?n.unshift(u):t.unshift(u)},finish:function(){for(let a=e,o=s.length;a<o;a++){let l=s[a];if(l.id===null)break;l.id=null,l.object=null,l.geometry=null,l.material=null,l.group=null}},sort:function(a,o){t.length>1&&t.sort(a||Bf),i.length>1&&i.sort(o||zc),n.length>1&&n.sort(o||zc)}}}function Ff(){let s=new WeakMap;return{get:function(e,t){let i=s.get(e),n;return i===void 0?(n=new Bc,s.set(e,[n])):t>=i.length?(n=new Bc,i.push(n)):n=i[t],n},dispose:function(){s=new WeakMap}}}function Hf(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new fe};break;case"SpotLight":t={position:new R,direction:new R,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new R,halfWidth:new R,halfHeight:new R}}return s[e.id]=t,t}}}var Gf=0;function Vf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Wf(s,e){let t=new Hf,i=function(){let l={};return{get:function(h){if(l[h.id]!==void 0)return l[h.id];let c;switch(h.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3}}return l[h.id]=c,c}}}(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new R);let r=new R,a=new Ae,o=new Ae;return{setup:function(l,h){let c=0,d=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let f=0,g=0,y=0,p=0,_=0,m=0,v=0,x=0,w=0,M=0,b=0;l.sort(Vf);let D=h===!0?Math.PI:1;for(let z=0,j=l.length;z<j;z++){let C=l[z],B=C.color,H=C.intensity,se=C.distance,ue=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)c+=B.r*H*D,d+=B.g*H*D,u+=B.b*H*D;else if(C.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(C.sh.coefficients[ie],H);b++}else if(C.isDirectionalLight){let ie=t.get(C);if(ie.color.copy(C.color).multiplyScalar(C.intensity*D),C.castShadow){let Y=C.shadow,te=i.get(C);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.directionalShadow[f]=te,n.directionalShadowMap[f]=ue,n.directionalShadowMatrix[f]=C.shadow.matrix,m++}n.directional[f]=ie,f++}else if(C.isSpotLight){let ie=t.get(C);ie.position.setFromMatrixPosition(C.matrixWorld),ie.color.copy(B).multiplyScalar(H*D),ie.distance=se,ie.coneCos=Math.cos(C.angle),ie.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ie.decay=C.decay,n.spot[y]=ie;let Y=C.shadow;if(C.map&&(n.spotLightMap[w]=C.map,w++,Y.updateMatrices(C),C.castShadow&&M++),n.spotLightMatrix[y]=Y.matrix,C.castShadow){let te=i.get(C);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,n.spotShadow[y]=te,n.spotShadowMap[y]=ue,x++}y++}else if(C.isRectAreaLight){let ie=t.get(C);ie.color.copy(B).multiplyScalar(H),ie.halfWidth.set(.5*C.width,0,0),ie.halfHeight.set(0,.5*C.height,0),n.rectArea[p]=ie,p++}else if(C.isPointLight){let ie=t.get(C);if(ie.color.copy(C.color).multiplyScalar(C.intensity*D),ie.distance=C.distance,ie.decay=C.decay,C.castShadow){let Y=C.shadow,te=i.get(C);te.shadowBias=Y.bias,te.shadowNormalBias=Y.normalBias,te.shadowRadius=Y.radius,te.shadowMapSize=Y.mapSize,te.shadowCameraNear=Y.camera.near,te.shadowCameraFar=Y.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=ue,n.pointShadowMatrix[g]=C.shadow.matrix,v++}n.point[g]=ie,g++}else if(C.isHemisphereLight){let ie=t.get(C);ie.skyColor.copy(C.color).multiplyScalar(H*D),ie.groundColor.copy(C.groundColor).multiplyScalar(H*D),n.hemi[_]=ie,_++}}p>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=c,n.ambient[1]=d,n.ambient[2]=u;let I=n.hash;I.directionalLength===f&&I.pointLength===g&&I.spotLength===y&&I.rectAreaLength===p&&I.hemiLength===_&&I.numDirectionalShadows===m&&I.numPointShadows===v&&I.numSpotShadows===x&&I.numSpotMaps===w&&I.numLightProbes===b||(n.directional.length=f,n.spot.length=y,n.rectArea.length=p,n.point.length=g,n.hemi.length=_,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+w-M,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=b,I.directionalLength=f,I.pointLength=g,I.spotLength=y,I.rectAreaLength=p,I.hemiLength=_,I.numDirectionalShadows=m,I.numPointShadows=v,I.numSpotShadows=x,I.numSpotMaps=w,I.numLightProbes=b,n.version=Gf++)},setupView:function(l,h){let c=0,d=0,u=0,f=0,g=0,y=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let m=l[p];if(m.isDirectionalLight){let v=n.directional[c];v.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),c++}else if(m.isSpotLight){let v=n.spot[u];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(y),v.direction.setFromMatrixPosition(m.matrixWorld),r.setFromMatrixPosition(m.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(y),u++}else if(m.isRectAreaLight){let v=n.rectArea[f];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(y),o.identity(),a.copy(m.matrixWorld),a.premultiply(y),o.extractRotation(a),v.halfWidth.set(.5*m.width,0,0),v.halfHeight.set(0,.5*m.height,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),f++}else if(m.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(m.matrixWorld),v.position.applyMatrix4(y),d++}else if(m.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(m.matrixWorld),v.direction.transformDirection(y),g++}}},state:n}}function Fc(s,e){let t=new Wf(s,e),i=[],n=[];return{init:function(){i.length=0,n.length=0},state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:function(r){t.setup(i,r)},setupLightsView:function(r){t.setupView(i,r)},pushLight:function(r){i.push(r)},pushShadow:function(r){n.push(r)}}}function Xf(s,e){let t=new WeakMap;return{get:function(i,n=0){let r=t.get(i),a;return r===void 0?(a=new Fc(s,e),t.set(i,[a])):n>=r.length?(a=new Fc(s,e),r.push(a)):a=r[n],a},dispose:function(){t=new WeakMap}}}var Vo=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function jf(s,e,t){let i=new Fn,n=new oe,r=new oe,a=new tt,o=new Vo({depthPacking:3201}),l=new Wo,h={},c=t.maxTextureSize,d={[Ri]:_t,[_t]:Ri,2:2},u=new Zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new je;g.setAttribute("position",new st(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new xe(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let _=this.type;function m(M,b){let D=e.update(y);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new mi(n.x,n.y)),u.uniforms.shadow_pass.value=M.map.texture,u.uniforms.resolution.value=M.mapSize,u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(b,null,D,u,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(b,null,D,f,y,null)}function v(M,b,D,I){let z=null,j=D.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(j!==void 0)z=j;else if(z=D.isPointLight===!0?l:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let C=z.uuid,B=b.uuid,H=h[C];H===void 0&&(H={},h[C]=H);let se=H[B];se===void 0&&(se=z.clone(),H[B]=se,b.addEventListener("dispose",w)),z=se}return z.visible=b.visible,z.wireframe=b.wireframe,z.side=I===ui?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:d[b.side],z.alphaMap=b.alphaMap,z.alphaTest=b.alphaTest,z.map=b.map,z.clipShadows=b.clipShadows,z.clippingPlanes=b.clippingPlanes,z.clipIntersection=b.clipIntersection,z.displacementMap=b.displacementMap,z.displacementScale=b.displacementScale,z.displacementBias=b.displacementBias,z.wireframeLinewidth=b.wireframeLinewidth,z.linewidth=b.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(s.properties.get(z).light=D),z}function x(M,b,D,I,z){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&z===ui)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,M.matrixWorld);let C=e.update(M),B=M.material;if(Array.isArray(B)){let H=C.groups;for(let se=0,ue=H.length;se<ue;se++){let ie=H[se],Y=B[ie.materialIndex];if(Y&&Y.visible){let te=v(M,Y,I,z);M.onBeforeShadow(s,M,b,D,C,te,ie),s.renderBufferDirect(D,null,C,te,M,ie),M.onAfterShadow(s,M,b,D,C,te,ie)}}}else if(B.visible){let H=v(M,B,I,z);M.onBeforeShadow(s,M,b,D,C,H,null),s.renderBufferDirect(D,null,C,H,M,null),M.onAfterShadow(s,M,b,D,C,H,null)}}let j=M.children;for(let C=0,B=j.length;C<B;C++)x(j[C],b,D,I,z)}function w(M){M.target.removeEventListener("dispose",w);for(let b in h){let D=h[b],I=M.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}this.render=function(M,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;let I=s.getRenderTarget(),z=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),C=s.state;C.setBlending(0),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let B=_!==ui&&this.type===ui,H=_===ui&&this.type!==ui;for(let se=0,ue=M.length;se<ue;se++){let ie=M[se],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;n.copy(Y.mapSize);let te=Y.getFrameExtents();if(n.multiply(te),r.copy(Y.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(r.x=Math.floor(c/te.x),n.x=r.x*te.x,Y.mapSize.x=r.x),n.y>c&&(r.y=Math.floor(c/te.y),n.y=r.y*te.y,Y.mapSize.y=r.y)),Y.map===null||B===!0||H===!0){let K=this.type!==ui?{minFilter:St,magFilter:St}:{};Y.map!==null&&Y.map.dispose(),Y.map=new mi(n.x,n.y,K),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();let V=Y.getViewportCount();for(let K=0;K<V;K++){let ce=Y.getViewport(K);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),C.viewport(a),Y.updateMatrices(ie,K),i=Y.getFrustum(),x(b,D,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===ui&&m(Y,D),Y.needsUpdate=!1}_=this.type,p.needsUpdate=!1,s.setRenderTarget(I,z,j)}}function qf(s,e,t){let i=t.isWebGL2,n=new function(){let S=!1,ne=new tt,P=null,L=new tt(0,0,0,0);return{setMask:function(k){P===k||S||(s.colorMask(k,k,k,k),P=k)},setLocked:function(k){S=k},setClear:function(k,ae,pe,me,we){we===!0&&(k*=me,ae*=me,pe*=me),ne.set(k,ae,pe,me),L.equals(ne)===!1&&(s.clearColor(k,ae,pe,me),L.copy(ne))},reset:function(){S=!1,P=null,L.set(-1,0,0,0)}}},r=new function(){let S=!1,ne=null,P=null,L=null;return{setTest:function(k){k?Z(s.DEPTH_TEST):U(s.DEPTH_TEST)},setMask:function(k){ne===k||S||(s.depthMask(k),ne=k)},setFunc:function(k){if(P!==k){switch(k){case 0:s.depthFunc(s.NEVER);break;case 1:s.depthFunc(s.ALWAYS);break;case 2:s.depthFunc(s.LESS);break;case 3:default:s.depthFunc(s.LEQUAL);break;case 4:s.depthFunc(s.EQUAL);break;case 5:s.depthFunc(s.GEQUAL);break;case 6:s.depthFunc(s.GREATER);break;case 7:s.depthFunc(s.NOTEQUAL)}P=k}},setLocked:function(k){S=k},setClear:function(k){L!==k&&(s.clearDepth(k),L=k)},reset:function(){S=!1,ne=null,P=null,L=null}}},a=new function(){let S=!1,ne=null,P=null,L=null,k=null,ae=null,pe=null,me=null,we=null;return{setTest:function(ge){S||(ge?Z(s.STENCIL_TEST):U(s.STENCIL_TEST))},setMask:function(ge){ne===ge||S||(s.stencilMask(ge),ne=ge)},setFunc:function(ge,_e,Ce){P===ge&&L===_e&&k===Ce||(s.stencilFunc(ge,_e,Ce),P=ge,L=_e,k=Ce)},setOp:function(ge,_e,Ce){ae===ge&&pe===_e&&me===Ce||(s.stencilOp(ge,_e,Ce),ae=ge,pe=_e,me=Ce)},setLocked:function(ge){S=ge},setClear:function(ge){we!==ge&&(s.clearStencil(ge),we=ge)},reset:function(){S=!1,ne=null,P=null,L=null,k=null,ae=null,pe=null,me=null,we=null}}},o=new WeakMap,l=new WeakMap,h={},c={},d=new WeakMap,u=[],f=null,g=!1,y=null,p=null,_=null,m=null,v=null,x=null,w=null,M=new fe(0,0,0),b=0,D=!1,I=null,z=null,j=null,C=null,B=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,ue=0,ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ie)[1]),se=ue>=1):ie.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),se=ue>=2);let Y=null,te={},V=s.getParameter(s.SCISSOR_BOX),K=s.getParameter(s.VIEWPORT),ce=new tt().fromArray(V),E=new tt().fromArray(K);function T(S,ne,P,L){let k=new Uint8Array(4),ae=s.createTexture();s.bindTexture(S,ae),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let pe=0;pe<P;pe++)!i||S!==s.TEXTURE_3D&&S!==s.TEXTURE_2D_ARRAY?s.texImage2D(ne+pe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,k):s.texImage3D(ne,0,s.RGBA,1,1,L,0,s.RGBA,s.UNSIGNED_BYTE,k);return ae}let F={};function Z(S){h[S]!==!0&&(s.enable(S),h[S]=!0)}function U(S){h[S]!==!1&&(s.disable(S),h[S]=!1)}F[s.TEXTURE_2D]=T(s.TEXTURE_2D,s.TEXTURE_2D,1),F[s.TEXTURE_CUBE_MAP]=T(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(F[s.TEXTURE_2D_ARRAY]=T(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),F[s.TEXTURE_3D]=T(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),n.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Z(s.DEPTH_TEST),r.setFunc(3),G(!1),Q(1),Z(s.CULL_FACE),O(0);let X={[ji]:s.FUNC_ADD,101:s.FUNC_SUBTRACT,102:s.FUNC_REVERSE_SUBTRACT};if(i)X[103]=s.MIN,X[104]=s.MAX;else{let S=e.get("EXT_blend_minmax");S!==null&&(X[103]=S.MIN_EXT,X[104]=S.MAX_EXT)}let N={200:s.ZERO,201:s.ONE,202:s.SRC_COLOR,[Eo]:s.SRC_ALPHA,210:s.SRC_ALPHA_SATURATE,208:s.DST_COLOR,206:s.DST_ALPHA,203:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,209:s.ONE_MINUS_DST_COLOR,207:s.ONE_MINUS_DST_ALPHA,211:s.CONSTANT_COLOR,212:s.ONE_MINUS_CONSTANT_COLOR,213:s.CONSTANT_ALPHA,214:s.ONE_MINUS_CONSTANT_ALPHA};function O(S,ne,P,L,k,ae,pe,me,we,ge){if(S!==0){if(g===!1&&(Z(s.BLEND),g=!0),S===5)k=k||ne,ae=ae||P,pe=pe||L,ne===p&&k===v||(s.blendEquationSeparate(X[ne],X[k]),p=ne,v=k),P===_&&L===m&&ae===x&&pe===w||(s.blendFuncSeparate(N[P],N[L],N[ae],N[pe]),_=P,m=L,x=ae,w=pe),me.equals(M)!==!1&&we===b||(s.blendColor(me.r,me.g,me.b,we),M.copy(me),b=we),y=S,D=!1;else if(S!==y||ge!==D){if(p===ji&&v===ji||(s.blendEquation(s.FUNC_ADD),p=ji,v=ji),ge)switch(S){case 1:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.ONE,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}else switch(S){case 1:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case 2:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case 3:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case 4:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S)}_=null,m=null,x=null,w=null,M.set(0,0,0),b=0,y=S,D=ge}}else g===!0&&(U(s.BLEND),g=!1)}function G(S){I!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),I=S)}function Q(S){S!==0?(Z(s.CULL_FACE),S!==z&&(S===1?s.cullFace(s.BACK):S===2?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):U(s.CULL_FACE),z=S}function J(S,ne,P){S?(Z(s.POLYGON_OFFSET_FILL),C===ne&&B===P||(s.polygonOffset(ne,P),C=ne,B=P)):U(s.POLYGON_OFFSET_FILL)}return{buffers:{color:n,depth:r,stencil:a},enable:Z,disable:U,bindFramebuffer:function(S,ne){return c[S]!==ne&&(s.bindFramebuffer(S,ne),c[S]=ne,i&&(S===s.DRAW_FRAMEBUFFER&&(c[s.FRAMEBUFFER]=ne),S===s.FRAMEBUFFER&&(c[s.DRAW_FRAMEBUFFER]=ne)),!0)},drawBuffers:function(S,ne){let P=u,L=!1;if(S)if(P=d.get(ne),P===void 0&&(P=[],d.set(ne,P)),S.isWebGLMultipleRenderTargets){let k=S.texture;if(P.length!==k.length||P[0]!==s.COLOR_ATTACHMENT0){for(let ae=0,pe=k.length;ae<pe;ae++)P[ae]=s.COLOR_ATTACHMENT0+ae;P.length=k.length,L=!0}}else P[0]!==s.COLOR_ATTACHMENT0&&(P[0]=s.COLOR_ATTACHMENT0,L=!0);else P[0]!==s.BACK&&(P[0]=s.BACK,L=!0);L&&(t.isWebGL2?s.drawBuffers(P):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(P))},useProgram:function(S){return f!==S&&(s.useProgram(S),f=S,!0)},setBlending:O,setMaterial:function(S,ne){S.side===2?U(s.CULL_FACE):Z(s.CULL_FACE);let P=S.side===_t;ne&&(P=!P),G(P),S.blending===1&&S.transparent===!1?O(0):O(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),n.setMask(S.colorWrite);let L=S.stencilWrite;a.setTest(L),L&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),J(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Z(s.SAMPLE_ALPHA_TO_COVERAGE):U(s.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:G,setCullFace:Q,setLineWidth:function(S){S!==j&&(se&&s.lineWidth(S),j=S)},setPolygonOffset:J,setScissorTest:function(S){S?Z(s.SCISSOR_TEST):U(s.SCISSOR_TEST)},activeTexture:function(S){S===void 0&&(S=s.TEXTURE0+H-1),Y!==S&&(s.activeTexture(S),Y=S)},bindTexture:function(S,ne,P){P===void 0&&(P=Y===null?s.TEXTURE0+H-1:Y);let L=te[P];L===void 0&&(L={type:void 0,texture:void 0},te[P]=L),L.type===S&&L.texture===ne||(Y!==P&&(s.activeTexture(P),Y=P),s.bindTexture(S,ne||F[S]),L.type=S,L.texture=ne)},unbindTexture:function(){let S=te[Y];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)},compressedTexImage2D:function(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexImage3D:function(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage2D:function(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texImage3D:function(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},updateUBOMapping:function(S,ne){let P=l.get(ne);P===void 0&&(P=new WeakMap,l.set(ne,P));let L=P.get(S);L===void 0&&(L=s.getUniformBlockIndex(ne,S.name),P.set(S,L))},uniformBlockBinding:function(S,ne){let P=l.get(ne).get(S);o.get(ne)!==P&&(s.uniformBlockBinding(ne,P,S.__bindingPointIndex),o.set(ne,P))},texStorage2D:function(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texStorage3D:function(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage2D:function(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},texSubImage3D:function(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage2D:function(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},compressedTexSubImage3D:function(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}},scissor:function(S){ce.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),ce.copy(S))},viewport:function(S){E.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),E.copy(S))},reset:function(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,te={},c={},d=new WeakMap,u=[],f=null,g=!1,y=null,p=null,_=null,m=null,v=null,x=null,w=null,M=new fe(0,0,0),b=0,D=!1,I=null,z=null,j=null,C=null,B=null,ce.set(0,0,s.canvas.width,s.canvas.height),E.set(0,0,s.canvas.width,s.canvas.height),n.reset(),r.reset(),a.reset()}}}function Yf(s,e,t,i,n,r,a){let o=n.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,T){return f?new OffscreenCanvas(E,T):Ir("canvas")}function y(E,T,F,Z){let U=1;if((E.width>Z||E.height>Z)&&(U=Z/Math.max(E.width,E.height)),U<1||T===!0){if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let X=T?Do:Math.floor,N=X(U*E.width),O=X(U*E.height);d===void 0&&(d=g(N,O));let G=F?g(N,O):d;return G.width=N,G.height=O,G.getContext("2d").drawImage(E,0,0,N,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+N+"x"+O+")."),G}return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E}return E}function p(E){return nc(E.width)&&nc(E.height)}function _(E,T){return E.generateMipmaps&&T&&E.minFilter!==St&&E.minFilter!==Xt}function m(E){s.generateMipmap(E)}function v(E,T,F,Z,U=!1){if(o===!1)return T;if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let X=T;if(T===s.RED&&(F===s.FLOAT&&(X=s.R32F),F===s.HALF_FLOAT&&(X=s.R16F),F===s.UNSIGNED_BYTE&&(X=s.R8)),T===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.R8UI),F===s.UNSIGNED_SHORT&&(X=s.R16UI),F===s.UNSIGNED_INT&&(X=s.R32UI),F===s.BYTE&&(X=s.R8I),F===s.SHORT&&(X=s.R16I),F===s.INT&&(X=s.R32I)),T===s.RG&&(F===s.FLOAT&&(X=s.RG32F),F===s.HALF_FLOAT&&(X=s.RG16F),F===s.UNSIGNED_BYTE&&(X=s.RG8)),T===s.RGBA){let N=U?Cr:He.getTransfer(Z);F===s.FLOAT&&(X=s.RGBA32F),F===s.HALF_FLOAT&&(X=s.RGBA16F),F===s.UNSIGNED_BYTE&&(X=N===Ve?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return X!==s.R16F&&X!==s.R32F&&X!==s.RG16F&&X!==s.RG32F&&X!==s.RGBA16F&&X!==s.RGBA32F||e.get("EXT_color_buffer_float"),X}function x(E,T,F){return _(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==St&&E.minFilter!==Xt?Math.log2(Math.max(T.width,T.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?T.mipmaps.length:1}function w(E){return E===St||E===Th||E===Ha?s.NEAREST:s.LINEAR}function M(E){let T=E.target;T.removeEventListener("dispose",M),function(F){let Z=i.get(F);if(Z.__webglInit===void 0)return;let U=F.source,X=u.get(U);if(X){let N=X[Z.__cacheKey];N.usedTimes--,N.usedTimes===0&&D(F),Object.keys(X).length===0&&u.delete(U)}i.remove(F)}(T),T.isVideoTexture&&c.delete(T)}function b(E){let T=E.target;T.removeEventListener("dispose",b),function(F){let Z=F.texture,U=i.get(F),X=i.get(Z);if(X.__webglTexture!==void 0&&(s.deleteTexture(X.__webglTexture),a.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(U.__webglFramebuffer[N]))for(let O=0;O<U.__webglFramebuffer[N].length;O++)s.deleteFramebuffer(U.__webglFramebuffer[N][O]);else s.deleteFramebuffer(U.__webglFramebuffer[N]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[N])}else{if(Array.isArray(U.__webglFramebuffer))for(let N=0;N<U.__webglFramebuffer.length;N++)s.deleteFramebuffer(U.__webglFramebuffer[N]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let N=0;N<U.__webglColorRenderbuffer.length;N++)U.__webglColorRenderbuffer[N]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[N]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let N=0,O=Z.length;N<O;N++){let G=i.get(Z[N]);G.__webglTexture&&(s.deleteTexture(G.__webglTexture),a.memory.textures--),i.remove(Z[N])}i.remove(Z),i.remove(F)}(T)}function D(E){let T=i.get(E);s.deleteTexture(T.__webglTexture);let F=E.source;delete u.get(F)[T.__cacheKey],a.memory.textures--}let I=0;function z(E,T){let F=i.get(E);if(E.isVideoTexture&&function(Z){let U=a.render.frame;c.get(Z)!==U&&(c.set(Z,U),Z.update())}(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else{if(Z.complete!==!1)return void ue(F,E,T);console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete")}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+T)}let j={[ys]:s.REPEAT,[pi]:s.CLAMP_TO_EDGE,[Co]:s.MIRRORED_REPEAT},C={[St]:s.NEAREST,[Th]:s.NEAREST_MIPMAP_NEAREST,[Ha]:s.NEAREST_MIPMAP_LINEAR,[Xt]:s.LINEAR,[sp]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},B={512:s.NEVER,519:s.ALWAYS,513:s.LESS,515:s.LEQUAL,514:s.EQUAL,518:s.GEQUAL,516:s.GREATER,517:s.NOTEQUAL};function H(E,T,F){if(F?(s.texParameteri(E,s.TEXTURE_WRAP_S,j[T.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,j[T.wrapT]),E!==s.TEXTURE_3D&&E!==s.TEXTURE_2D_ARRAY||s.texParameteri(E,s.TEXTURE_WRAP_R,j[T.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,C[T.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,C[T.minFilter])):(s.texParameteri(E,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(E,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),E!==s.TEXTURE_3D&&E!==s.TEXTURE_2D_ARRAY||s.texParameteri(E,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),T.wrapS===pi&&T.wrapT===pi||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(E,s.TEXTURE_MAG_FILTER,w(T.magFilter)),s.texParameteri(E,s.TEXTURE_MIN_FILTER,w(T.minFilter)),T.minFilter!==St&&T.minFilter!==Xt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,B[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let Z=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===St||T.minFilter!==Ha&&T.minFilter!==Tr||T.type===Ei&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===xs&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(s.texParameterf(E,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function se(E,T){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,T.addEventListener("dispose",M));let Z=T.source,U=u.get(Z);U===void 0&&(U={},u.set(Z,U));let X=function(N){let O=[];return O.push(N.wrapS),O.push(N.wrapT),O.push(N.wrapR||0),O.push(N.magFilter),O.push(N.minFilter),O.push(N.anisotropy),O.push(N.internalFormat),O.push(N.format),O.push(N.type),O.push(N.generateMipmaps),O.push(N.premultiplyAlpha),O.push(N.flipY),O.push(N.unpackAlignment),O.push(N.colorSpace),O.join()}(T);if(X!==E.__cacheKey){U[X]===void 0&&(U[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),U[X].usedTimes++;let N=U[E.__cacheKey];N!==void 0&&(U[E.__cacheKey].usedTimes--,N.usedTimes===0&&D(T)),E.__cacheKey=X,E.__webglTexture=U[X].texture}return F}function ue(E,T,F){let Z=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=s.TEXTURE_3D);let U=se(E,T),X=T.source;t.bindTexture(Z,E.__webglTexture,s.TEXTURE0+F);let N=i.get(X);if(X.version!==N.__version||U===!0){t.activeTexture(s.TEXTURE0+F);let O=He.getPrimaries(He.workingColorSpace),G=T.colorSpace===ei?null:He.getPrimaries(T.colorSpace),Q=T.colorSpace===ei||O===G?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let J=function(_e){return!o&&(_e.wrapS!==pi||_e.wrapT!==pi||_e.minFilter!==St&&_e.minFilter!==Xt)}(T)&&p(T.image)===!1,S=y(T.image,J,!1,n.maxTextureSize);S=ce(T,S);let ne=p(S)||o,P=r.convert(T.format,T.colorSpace),L,k=r.convert(T.type),ae=v(T.internalFormat,P,k,T.colorSpace,T.isVideoTexture);H(Z,T,ne);let pe=T.mipmaps,me=o&&T.isVideoTexture!==!0&&ae!==hu,we=N.__version===void 0||U===!0,ge=x(T,S,ne);if(T.isDepthTexture)ae=s.DEPTH_COMPONENT,o?ae=T.type===Ei?s.DEPTH_COMPONENT32F:T.type===wi?s.DEPTH_COMPONENT24:T.type===Ji?s.DEPTH24_STENCIL8:s.DEPTH_COMPONENT16:T.type===Ei&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===$i&&ae===s.DEPTH_COMPONENT&&T.type!==Al&&T.type!==wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=wi,k=r.convert(T.type)),T.format===Nn&&ae===s.DEPTH_COMPONENT&&(ae=s.DEPTH_STENCIL,T.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Ji,k=r.convert(T.type))),we&&(me?t.texStorage2D(s.TEXTURE_2D,1,ae,S.width,S.height):t.texImage2D(s.TEXTURE_2D,0,ae,S.width,S.height,0,P,k,null));else if(T.isDataTexture)if(pe.length>0&&ne){me&&we&&t.texStorage2D(s.TEXTURE_2D,ge,ae,pe[0].width,pe[0].height);for(let _e=0,Ce=pe.length;_e<Ce;_e++)L=pe[_e],me?t.texSubImage2D(s.TEXTURE_2D,_e,0,0,L.width,L.height,P,k,L.data):t.texImage2D(s.TEXTURE_2D,_e,ae,L.width,L.height,0,P,k,L.data);T.generateMipmaps=!1}else me?(we&&t.texStorage2D(s.TEXTURE_2D,ge,ae,S.width,S.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,S.width,S.height,P,k,S.data)):t.texImage2D(s.TEXTURE_2D,0,ae,S.width,S.height,0,P,k,S.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){me&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ae,pe[0].width,pe[0].height,S.depth);for(let _e=0,Ce=pe.length;_e<Ce;_e++)L=pe[_e],T.format!==Qt?P!==null?me?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,L.width,L.height,S.depth,P,L.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,_e,ae,L.width,L.height,S.depth,0,L.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage3D(s.TEXTURE_2D_ARRAY,_e,0,0,0,L.width,L.height,S.depth,P,k,L.data):t.texImage3D(s.TEXTURE_2D_ARRAY,_e,ae,L.width,L.height,S.depth,0,P,k,L.data)}else{me&&we&&t.texStorage2D(s.TEXTURE_2D,ge,ae,pe[0].width,pe[0].height);for(let _e=0,Ce=pe.length;_e<Ce;_e++)L=pe[_e],T.format!==Qt?P!==null?me?t.compressedTexSubImage2D(s.TEXTURE_2D,_e,0,0,L.width,L.height,P,L.data):t.compressedTexImage2D(s.TEXTURE_2D,_e,ae,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?t.texSubImage2D(s.TEXTURE_2D,_e,0,0,L.width,L.height,P,k,L.data):t.texImage2D(s.TEXTURE_2D,_e,ae,L.width,L.height,0,P,k,L.data)}else if(T.isDataArrayTexture)me?(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ge,ae,S.width,S.height,S.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,S.width,S.height,S.depth,P,k,S.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,ae,S.width,S.height,S.depth,0,P,k,S.data);else if(T.isData3DTexture)me?(we&&t.texStorage3D(s.TEXTURE_3D,ge,ae,S.width,S.height,S.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,S.width,S.height,S.depth,P,k,S.data)):t.texImage3D(s.TEXTURE_3D,0,ae,S.width,S.height,S.depth,0,P,k,S.data);else if(T.isFramebufferTexture){if(we)if(me)t.texStorage2D(s.TEXTURE_2D,ge,ae,S.width,S.height);else{let _e=S.width,Ce=S.height;for(let ot=0;ot<ge;ot++)t.texImage2D(s.TEXTURE_2D,ot,ae,_e,Ce,0,P,k,null),_e>>=1,Ce>>=1}}else if(pe.length>0&&ne){me&&we&&t.texStorage2D(s.TEXTURE_2D,ge,ae,pe[0].width,pe[0].height);for(let _e=0,Ce=pe.length;_e<Ce;_e++)L=pe[_e],me?t.texSubImage2D(s.TEXTURE_2D,_e,0,0,P,k,L):t.texImage2D(s.TEXTURE_2D,_e,ae,P,k,L);T.generateMipmaps=!1}else me?(we&&t.texStorage2D(s.TEXTURE_2D,ge,ae,S.width,S.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,P,k,S)):t.texImage2D(s.TEXTURE_2D,0,ae,P,k,S);_(T,ne)&&m(Z),N.__version=X.version,T.onUpdate&&T.onUpdate(T)}E.__version=T.version}function ie(E,T,F,Z,U,X){let N=r.convert(F.format,F.colorSpace),O=r.convert(F.type),G=v(F.internalFormat,N,O,F.colorSpace);if(!i.get(T).__hasExternalTextures){let Q=Math.max(1,T.width>>X),J=Math.max(1,T.height>>X);U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY?t.texImage3D(U,X,G,Q,J,T.depth,0,N,O,null):t.texImage2D(U,X,G,Q,J,0,N,O,null)}t.bindFramebuffer(s.FRAMEBUFFER,E),K(T)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,U,i.get(F).__webglTexture,0,V(T)):(U===s.TEXTURE_2D||U>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,U,i.get(F).__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(E,T,F){if(s.bindRenderbuffer(s.RENDERBUFFER,E),T.depthBuffer&&!T.stencilBuffer){let Z=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||K(T)){let U=T.depthTexture;U&&U.isDepthTexture&&(U.type===Ei?Z=s.DEPTH_COMPONENT32F:U.type===wi&&(Z=s.DEPTH_COMPONENT24));let X=V(T);K(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,Z,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,X,Z,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,E)}else if(T.depthBuffer&&T.stencilBuffer){let Z=V(T);F&&K(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,T.width,T.height):K(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,E)}else{let Z=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let U=0;U<Z.length;U++){let X=Z[U],N=r.convert(X.format,X.colorSpace),O=r.convert(X.type),G=v(X.internalFormat,N,O,X.colorSpace),Q=V(T);F&&K(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Q,G,T.width,T.height):K(T)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Q,G,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,G,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function te(E){let T=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(Z,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,Z),!U.depthTexture||!U.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");i.get(U.depthTexture).__webglTexture&&U.depthTexture.image.width===U.width&&U.depthTexture.image.height===U.height||(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),z(U.depthTexture,0);let X=i.get(U.depthTexture).__webglTexture,N=V(U);if(U.depthTexture.format===$i)K(U)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0);else{if(U.depthTexture.format!==Nn)throw new Error("Unknown depthTexture format");K(U)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0,N):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0)}})(T.__webglFramebuffer,E)}else if(F){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]=s.createRenderbuffer(),Y(T.__webglDepthbuffer[Z],E,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),Y(T.__webglDepthbuffer,E,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function V(E){return Math.min(n.maxSamples,E.samples)}function K(E){let T=i.get(E);return o&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ce(E,T){let F=E.colorSpace,Z=E.format,U=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Po||F!==fi&&F!==ei&&(He.getTransfer(F)===Ve?o===!1?e.has("EXT_sRGB")===!0&&Z===Qt?(E.format=Po,E.minFilter=Xt,E.generateMipmaps=!1):T=Ur.sRGBToLinear(T):Z===Qt&&U===Ki||console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=function(){let E=I;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),I+=1,E},this.resetTextureUnits=function(){I=0},this.setTexture2D=z,this.setTexture2DArray=function(E,T){let F=i.get(E);E.version>0&&F.__version!==E.version?ue(F,E,T):t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+T)},this.setTexture3D=function(E,T){let F=i.get(E);E.version>0&&F.__version!==E.version?ue(F,E,T):t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+T)},this.setTextureCube=function(E,T){let F=i.get(E);E.version>0&&F.__version!==E.version?function(Z,U,X){if(U.image.length!==6)return;let N=se(Z,U),O=U.source;t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+X);let G=i.get(O);if(O.version!==G.__version||N===!0){t.activeTexture(s.TEXTURE0+X);let Q=He.getPrimaries(He.workingColorSpace),J=U.colorSpace===ei?null:He.getPrimaries(U.colorSpace),S=U.colorSpace===ei||Q===J?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,U.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,U.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,S);let ne=U.isCompressedTexture||U.image[0].isCompressedTexture,P=U.image[0]&&U.image[0].isDataTexture,L=[];for(let ve=0;ve<6;ve++)L[ve]=ne||P?P?U.image[ve].image:U.image[ve]:y(U.image[ve],!1,!0,n.maxCubemapSize),L[ve]=ce(U,L[ve]);let k=L[0],ae=p(k)||o,pe=r.convert(U.format,U.colorSpace),me=r.convert(U.type),we=v(U.internalFormat,pe,me,U.colorSpace),ge=o&&U.isVideoTexture!==!0,_e=G.__version===void 0||N===!0,Ce,ot=x(U,k,ae);if(H(s.TEXTURE_CUBE_MAP,U,ae),ne){ge&&_e&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,we,k.width,k.height);for(let ve=0;ve<6;ve++){Ce=L[ve].mipmaps;for(let ke=0;ke<Ce.length;ke++){let Ie=Ce[ke];U.format!==Qt?pe!==null?ge?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,0,0,Ie.width,Ie.height,pe,Ie.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,we,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,0,0,Ie.width,Ie.height,pe,me,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke,we,Ie.width,Ie.height,0,pe,me,Ie.data)}}}else{Ce=U.mipmaps,ge&&_e&&(Ce.length>0&&ot++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ot,we,L[0].width,L[0].height));for(let ve=0;ve<6;ve++)if(P){ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,L[ve].width,L[ve].height,pe,me,L[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,L[ve].width,L[ve].height,0,pe,me,L[ve].data);for(let ke=0;ke<Ce.length;ke++){let Ie=Ce[ke].image[ve].image;ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,0,0,Ie.width,Ie.height,pe,me,Ie.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,we,Ie.width,Ie.height,0,pe,me,Ie.data)}}else{ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,pe,me,L[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,pe,me,L[ve]);for(let ke=0;ke<Ce.length;ke++){let Ie=Ce[ke];ge?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,0,0,pe,me,Ie.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,ke+1,we,pe,me,Ie.image[ve])}}}_(U,ae)&&m(s.TEXTURE_CUBE_MAP),G.__version=O.version,U.onUpdate&&U.onUpdate(U)}Z.__version=U.version}(F,E,T):t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+T)},this.rebindTextures=function(E,T,F){let Z=i.get(E);T!==void 0&&ie(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&te(E)},this.setupRenderTarget=function(E){let T=E.texture,F=i.get(E),Z=i.get(T);E.addEventListener("dispose",b),E.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=T.version,a.memory.textures++);let U=E.isWebGLCubeRenderTarget===!0,X=E.isWebGLMultipleRenderTargets===!0,N=p(E)||o;if(U){F.__webglFramebuffer=[];for(let O=0;O<6;O++)if(o&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer[O]=[];for(let G=0;G<T.mipmaps.length;G++)F.__webglFramebuffer[O][G]=s.createFramebuffer()}else F.__webglFramebuffer[O]=s.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){F.__webglFramebuffer=[];for(let O=0;O<T.mipmaps.length;O++)F.__webglFramebuffer[O]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(X)if(n.drawBuffers){let O=E.texture;for(let G=0,Q=O.length;G<Q;G++){let J=i.get(O[G]);J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&K(E)===!1){let O=X?T:[T];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let G=0;G<O.length;G++){let Q=O[G];F.__webglColorRenderbuffer[G]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[G]);let J=r.convert(Q.format,Q.colorSpace),S=r.convert(Q.type),ne=v(Q.internalFormat,J,S,Q.colorSpace,E.isXRRenderTarget===!0),P=V(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,P,ne,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+G,s.RENDERBUFFER,F.__webglColorRenderbuffer[G])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(U){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),H(s.TEXTURE_CUBE_MAP,T,N);for(let O=0;O<6;O++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)ie(F.__webglFramebuffer[O][G],E,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+O,G);else ie(F.__webglFramebuffer[O],E,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);_(T,N)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(X){let O=E.texture;for(let G=0,Q=O.length;G<Q;G++){let J=O[G],S=i.get(J);t.bindTexture(s.TEXTURE_2D,S.__webglTexture),H(s.TEXTURE_2D,J,N),ie(F.__webglFramebuffer,E,J,s.COLOR_ATTACHMENT0+G,s.TEXTURE_2D,0),_(J,N)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let O=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?O=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(O,Z.__webglTexture),H(O,T,N),o&&T.mipmaps&&T.mipmaps.length>0)for(let G=0;G<T.mipmaps.length;G++)ie(F.__webglFramebuffer[G],E,T,s.COLOR_ATTACHMENT0,O,G);else ie(F.__webglFramebuffer,E,T,s.COLOR_ATTACHMENT0,O,0);_(T,N)&&m(O),t.unbindTexture()}E.depthBuffer&&te(E)},this.updateRenderTargetMipmap=function(E){let T=p(E)||o,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Z=0,U=F.length;Z<U;Z++){let X=F[Z];if(_(X,T)){let N=E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,O=i.get(X).__webglTexture;t.bindTexture(N,O),m(N),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(E){if(o&&E.samples>0&&K(E)===!1){let T=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,Z=E.height,U=s.COLOR_BUFFER_BIT,X=[],N=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,O=i.get(E),G=E.isWebGLMultipleRenderTargets===!0;if(G)for(let Q=0;Q<T.length;Q++)t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,O.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let Q=0;Q<T.length;Q++){X.push(s.COLOR_ATTACHMENT0+Q),E.depthBuffer&&X.push(N);let J=O.__ignoreDepthValues!==void 0&&O.__ignoreDepthValues;if(J===!1&&(E.depthBuffer&&(U|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&(U|=s.STENCIL_BUFFER_BIT)),G&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,O.__webglColorRenderbuffer[Q]),J===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[N]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[N])),G){let S=i.get(T[Q]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,S,0)}s.blitFramebuffer(0,0,F,Z,0,0,F,Z,U,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),G)for(let Q=0;Q<T.length;Q++){t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);let J=i.get(T[Q]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,O.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Q,s.TEXTURE_2D,J,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=K}function Zf(s,e,t){let i=t.isWebGL2;return{convert:function(n,r=""){let a,o=He.getTransfer(r);if(n===Ki)return s.UNSIGNED_BYTE;if(n===su)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ru)return s.UNSIGNED_SHORT_5_5_5_1;if(n===1010)return s.BYTE;if(n===1011)return s.SHORT;if(n===Al)return s.UNSIGNED_SHORT;if(n===nu)return s.INT;if(n===wi)return s.UNSIGNED_INT;if(n===Ei)return s.FLOAT;if(n===xs)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===1021)return s.ALPHA;if(n===Qt)return s.RGBA;if(n===1024)return s.LUMINANCE;if(n===1025)return s.LUMINANCE_ALPHA;if(n===$i)return s.DEPTH_COMPONENT;if(n===Nn)return s.DEPTH_STENCIL;if(n===Po)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===1028)return s.RED;if(n===au)return s.RED_INTEGER;if(n===1030)return s.RG;if(n===ou)return s.RG_INTEGER;if(n===lu)return s.RGBA_INTEGER;if(n===Ga||n===Va||n===Wa||n===Xa)if(o===Ve){if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a===null)return null;if(n===Ga)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(a=e.get("WEBGL_compressed_texture_s3tc"),a===null)return null;if(n===Ga)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(n===Ah||n===Rh||n===Ch||n===Ph){if(a=e.get("WEBGL_compressed_texture_pvrtc"),a===null)return null;if(n===Ah)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ch)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ph)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(n===hu)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Lh||n===Dh){if(a=e.get("WEBGL_compressed_texture_etc"),a===null)return null;if(n===Lh)return o===Ve?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Dh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}if(n===Ih||n===Uh||n===Nh||n===Oh||n===kh||n===zh||n===Bh||n===Fh||n===Hh||n===Gh||n===Vh||n===Wh||n===Xh||n===jh){if(a=e.get("WEBGL_compressed_texture_astc"),a===null)return null;if(n===Ih)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Oh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jh)return o===Ve?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}if(n===ja||n===qh||n===Yh){if(a=e.get("EXT_texture_compression_bptc"),a===null)return null;if(n===ja)return o===Ve?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(n===36283||n===Zh||n===Kh||n===Jh){if(a=e.get("EXT_texture_compression_rgtc"),a===null)return null;if(n===ja)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Zh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return n===Ji?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}}}var Xo=class extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ct=class extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Kf={type:"move"},ms=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,l=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),_=this._getHandJoint(h,y);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=p.radius),_.visible=p!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,g=.005;h.inputState.pinching&&u>f+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=f-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Kf)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ct;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},jo=class extends Ci{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,g=null,y=t.getContextAttributes(),p=null,_=null,m=[],v=[],x=new oe,w=null,M=new bt;M.layers.enable(1),M.viewport=new tt;let b=new bt;b.layers.enable(2),b.viewport=new tt;let D=[M,b],I=new Xo;I.layers.enable(1),I.layers.enable(2);let z=null,j=null;function C(V){let K=v.indexOf(V.inputSource);if(K===-1)return;let ce=m[K];ce!==void 0&&(ce.update(V.inputSource,V.frame,h||a),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function B(){n.removeEventListener("select",C),n.removeEventListener("selectstart",C),n.removeEventListener("selectend",C),n.removeEventListener("squeeze",C),n.removeEventListener("squeezestart",C),n.removeEventListener("squeezeend",C),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",H);for(let V=0;V<m.length;V++){let K=v[V];K!==null&&(v[V]=null,m[V].disconnect(K))}z=null,j=null,e.setRenderTarget(p),f=null,u=null,d=null,n=null,_=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),i.dispatchEvent({type:"sessionend"})}function H(V){for(let K=0;K<V.removed.length;K++){let ce=V.removed[K],E=v.indexOf(ce);E>=0&&(v[E]=null,m[E].disconnect(ce))}for(let K=0;K<V.added.length;K++){let ce=V.added[K],E=v.indexOf(ce);if(E===-1){for(let F=0;F<m.length;F++){if(F>=v.length){v.push(ce),E=F;break}if(v[F]===null){v[F]=ce,E=F;break}}if(E===-1)break}let T=m[E];T&&T.connect(ce)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let K=m[V];return K===void 0&&(K=new ms,m[V]=K),K.getTargetRaySpace()},this.getControllerGrip=function(V){let K=m[V];return K===void 0&&(K=new ms,m[V]=K),K.getGripSpace()},this.getHand=function(V){let K=m[V];return K===void 0&&(K=new ms,m[V]=K),K.getHandSpace()},this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(V){h=V},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(V){if(n=V,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",C),n.addEventListener("selectstart",C),n.addEventListener("selectend",C),n.addEventListener("squeeze",C),n.addEventListener("squeezestart",C),n.addEventListener("squeezeend",C),n.addEventListener("end",B),n.addEventListener("inputsourceschange",H),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let K={antialias:n.renderState.layers!==void 0||y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,K),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new mi(f.framebufferWidth,f.framebufferHeight,{format:Qt,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let K=null,ce=null,E=null;y.depth&&(E=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=y.stencil?Nn:$i,ce=y.stencil?Ji:wi);let T={colorFormat:t.RGBA8,depthFormat:E,scaleFactor:r};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(T),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new mi(u.textureWidth,u.textureHeight,{format:Qt,type:Ki,depthTexture:new Vr(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0}),e.properties.get(_).__ignoreDepthValues=u.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),h=null,a=await n.requestReferenceSpace(o),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};let se=new R,ue=new R;function ie(V,K){K===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(K.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(n===null)return;I.near=b.near=M.near=V.near,I.far=b.far=M.far=V.far,z===I.near&&j===I.far||(n.updateRenderState({depthNear:I.near,depthFar:I.far}),z=I.near,j=I.far);let K=V.parent,ce=I.cameras;ie(I,K);for(let E=0;E<ce.length;E++)ie(ce[E],K);ce.length===2?function(E,T,F){se.setFromMatrixPosition(T.matrixWorld),ue.setFromMatrixPosition(F.matrixWorld);let Z=se.distanceTo(ue),U=T.projectionMatrix.elements,X=F.projectionMatrix.elements,N=U[14]/(U[10]-1),O=U[14]/(U[10]+1),G=(U[9]+1)/U[5],Q=(U[9]-1)/U[5],J=(U[8]-1)/U[0],S=(X[8]+1)/X[0],ne=N*J,P=N*S,L=Z/(-J+S),k=L*-J;T.matrixWorld.decompose(E.position,E.quaternion,E.scale),E.translateX(k),E.translateZ(L),E.matrixWorld.compose(E.position,E.quaternion,E.scale),E.matrixWorldInverse.copy(E.matrixWorld).invert();let ae=N+L,pe=O+L,me=ne-k,we=P+(Z-k),ge=G*O/pe*ae,_e=Q*O/pe*ae;E.projectionMatrix.makePerspective(me,we,ge,_e,ae,pe),E.projectionMatrixInverse.copy(E.projectionMatrix).invert()}(I,M,b):I.projectionMatrix.copy(M.projectionMatrix),function(E,T,F){F===null?E.matrix.copy(T.matrixWorld):(E.matrix.copy(F.matrixWorld),E.matrix.invert(),E.matrix.multiply(T.matrixWorld)),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrixWorld(!0),E.projectionMatrix.copy(T.projectionMatrix),E.projectionMatrixInverse.copy(T.projectionMatrixInverse),E.isPerspectiveCamera&&(E.fov=2*Lo*Math.atan(1/E.projectionMatrix.elements[5]),E.zoom=1)}(V,I,K)},this.getCamera=function(){return I},this.getFoveation=function(){if(u!==null||f!==null)return l},this.setFoveation=function(V){l=V,u!==null&&(u.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)};let Y=null,te=new fu;te.setAnimationLoop(function(V,K){if(c=K.getViewerPose(h||a),g=K,c!==null){let ce=c.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let E=!1;ce.length!==I.cameras.length&&(I.cameras.length=0,E=!0);for(let T=0;T<ce.length;T++){let F=ce[T],Z=null;if(f!==null)Z=f.getViewport(F);else{let X=d.getViewSubImage(u,F);Z=X.viewport,T===0&&(e.setRenderTargetTextures(_,X.colorTexture,u.ignoreDepthValues?void 0:X.depthStencilTexture),e.setRenderTarget(_))}let U=D[T];U===void 0&&(U=new bt,U.layers.enable(T),U.viewport=new tt,D[T]=U),U.matrix.fromArray(F.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(F.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Z.x,Z.y,Z.width,Z.height),T===0&&(I.matrix.copy(U.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),E===!0&&I.cameras.push(U)}}for(let ce=0;ce<m.length;ce++){let E=v[ce],T=m[ce];E!==null&&T!==void 0&&T.update(E,K,h||a)}Y&&Y(V,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}};function Jf(s,e){function t(n,r){n.matrixAutoUpdate===!0&&n.updateMatrix(),r.value.copy(n.matrix)}function i(n,r){n.opacity.value=r.opacity,r.color&&n.diffuse.value.copy(r.color),r.emissive&&n.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(n.map.value=r.map,t(r.map,n.mapTransform)),r.alphaMap&&(n.alphaMap.value=r.alphaMap,t(r.alphaMap,n.alphaMapTransform)),r.bumpMap&&(n.bumpMap.value=r.bumpMap,t(r.bumpMap,n.bumpMapTransform),n.bumpScale.value=r.bumpScale,r.side===_t&&(n.bumpScale.value*=-1)),r.normalMap&&(n.normalMap.value=r.normalMap,t(r.normalMap,n.normalMapTransform),n.normalScale.value.copy(r.normalScale),r.side===_t&&n.normalScale.value.negate()),r.displacementMap&&(n.displacementMap.value=r.displacementMap,t(r.displacementMap,n.displacementMapTransform),n.displacementScale.value=r.displacementScale,n.displacementBias.value=r.displacementBias),r.emissiveMap&&(n.emissiveMap.value=r.emissiveMap,t(r.emissiveMap,n.emissiveMapTransform)),r.specularMap&&(n.specularMap.value=r.specularMap,t(r.specularMap,n.specularMapTransform)),r.alphaTest>0&&(n.alphaTest.value=r.alphaTest);let a=e.get(r).envMap;if(a&&(n.envMap.value=a,n.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,n.reflectivity.value=r.reflectivity,n.ior.value=r.ior,n.refractionRatio.value=r.refractionRatio),r.lightMap){n.lightMap.value=r.lightMap;let o=s._useLegacyLights===!0?Math.PI:1;n.lightMapIntensity.value=r.lightMapIntensity*o,t(r.lightMap,n.lightMapTransform)}r.aoMap&&(n.aoMap.value=r.aoMap,n.aoMapIntensity.value=r.aoMapIntensity,t(r.aoMap,n.aoMapTransform))}return{refreshFogUniforms:function(n,r){r.color.getRGB(n.fogColor.value,pu(s)),r.isFog?(n.fogNear.value=r.near,n.fogFar.value=r.far):r.isFogExp2&&(n.fogDensity.value=r.density)},refreshMaterialUniforms:function(n,r,a,o,l){r.isMeshBasicMaterial||r.isMeshLambertMaterial?i(n,r):r.isMeshToonMaterial?(i(n,r),function(h,c){c.gradientMap&&(h.gradientMap.value=c.gradientMap)}(n,r)):r.isMeshPhongMaterial?(i(n,r),function(h,c){h.specular.value.copy(c.specular),h.shininess.value=Math.max(c.shininess,1e-4)}(n,r)):r.isMeshStandardMaterial?(i(n,r),function(h,c){h.metalness.value=c.metalness,c.metalnessMap&&(h.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,h.metalnessMapTransform)),h.roughness.value=c.roughness,c.roughnessMap&&(h.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,h.roughnessMapTransform)),e.get(c).envMap&&(h.envMapIntensity.value=c.envMapIntensity)}(n,r),r.isMeshPhysicalMaterial&&function(h,c,d){h.ior.value=c.ior,c.sheen>0&&(h.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),h.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(h.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,h.sheenColorMapTransform)),c.sheenRoughnessMap&&(h.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,h.sheenRoughnessMapTransform))),c.clearcoat>0&&(h.clearcoat.value=c.clearcoat,h.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(h.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,h.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,h.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(h.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,h.clearcoatNormalMapTransform),h.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===_t&&h.clearcoatNormalScale.value.negate())),c.iridescence>0&&(h.iridescence.value=c.iridescence,h.iridescenceIOR.value=c.iridescenceIOR,h.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(h.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,h.iridescenceMapTransform)),c.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,h.iridescenceThicknessMapTransform))),c.transmission>0&&(h.transmission.value=c.transmission,h.transmissionSamplerMap.value=d.texture,h.transmissionSamplerSize.value.set(d.width,d.height),c.transmissionMap&&(h.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,h.transmissionMapTransform)),h.thickness.value=c.thickness,c.thicknessMap&&(h.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,h.thicknessMapTransform)),h.attenuationDistance.value=c.attenuationDistance,h.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(h.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(h.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,h.anisotropyMapTransform))),h.specularIntensity.value=c.specularIntensity,h.specularColor.value.copy(c.specularColor),c.specularColorMap&&(h.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,h.specularColorMapTransform)),c.specularIntensityMap&&(h.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,h.specularIntensityMapTransform))}(n,r,l)):r.isMeshMatcapMaterial?(i(n,r),function(h,c){c.matcap&&(h.matcap.value=c.matcap)}(n,r)):r.isMeshDepthMaterial?i(n,r):r.isMeshDistanceMaterial?(i(n,r),function(h,c){let d=e.get(c).light;h.referencePosition.value.setFromMatrixPosition(d.matrixWorld),h.nearDistance.value=d.shadow.camera.near,h.farDistance.value=d.shadow.camera.far}(n,r)):r.isMeshNormalMaterial?i(n,r):r.isLineBasicMaterial?(function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform))}(n,r),r.isLineDashedMaterial&&function(h,c){h.dashSize.value=c.dashSize,h.totalSize.value=c.dashSize+c.gapSize,h.scale.value=c.scale}(n,r)):r.isPointsMaterial?function(h,c,d,u){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.size.value=c.size*d,h.scale.value=.5*u,c.map&&(h.map.value=c.map,t(c.map,h.uvTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r,a,o):r.isSpriteMaterial?function(h,c){h.diffuse.value.copy(c.color),h.opacity.value=c.opacity,h.rotation.value=c.rotation,c.map&&(h.map.value=c.map,t(c.map,h.mapTransform)),c.alphaMap&&(h.alphaMap.value=c.alphaMap,t(c.alphaMap,h.alphaMapTransform)),c.alphaTest>0&&(h.alphaTest.value=c.alphaTest)}(n,r):r.isShadowMaterial?(n.color.value.copy(r.color),n.opacity.value=r.opacity):r.isShaderMaterial&&(r.uniformsNeedUpdate=!1)}}}function $f(s,e,t,i){let n={},r={},a=[],o=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(d,u,f,g){let y=d.value,p=u+"_"+f;if(g[p]===void 0)return g[p]=typeof y=="number"||typeof y=="boolean"?y:y.clone(),!0;{let _=g[p];if(typeof y=="number"||typeof y=="boolean"){if(_!==y)return g[p]=y,!0}else if(_.equals(y)===!1)return _.copy(y),!0}return!1}function h(d){let u={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(u.boundary=4,u.storage=4):d.isVector2?(u.boundary=8,u.storage=8):d.isVector3||d.isColor?(u.boundary=16,u.storage=12):d.isVector4?(u.boundary=16,u.storage=16):d.isMatrix3?(u.boundary=48,u.storage=48):d.isMatrix4?(u.boundary=64,u.storage=64):d.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",d),u}function c(d){let u=d.target;u.removeEventListener("dispose",c);let f=a.indexOf(u.__bindingPointIndex);a.splice(f,1),s.deleteBuffer(n[u.id]),delete n[u.id],delete r[u.id]}return{bind:function(d,u){let f=u.program;i.uniformBlockBinding(d,f)},update:function(d,u){let f=n[d.id];f===void 0&&(function(p){let _=p.uniforms,m=0,v=16;for(let w=0,M=_.length;w<M;w++){let b=Array.isArray(_[w])?_[w]:[_[w]];for(let D=0,I=b.length;D<I;D++){let z=b[D],j=Array.isArray(z.value)?z.value:[z.value];for(let C=0,B=j.length;C<B;C++){let H=h(j[C]),se=m%v;se!==0&&v-se<H.boundary&&(m+=v-se),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=m,m+=H.storage}}}let x=m%v;x>0&&(m+=v-x),p.__size=m,p.__cache={}}(d),f=function(p){let _=function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}();p.__bindingPointIndex=_;let m=s.createBuffer(),v=p.__size,x=p.usage;return s.bindBuffer(s.UNIFORM_BUFFER,m),s.bufferData(s.UNIFORM_BUFFER,v,x),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,m),m}(d),n[d.id]=f,d.addEventListener("dispose",c));let g=u.program;i.updateUBOMapping(d,g);let y=e.render.frame;r[d.id]!==y&&(function(p){let _=n[p.id],m=p.uniforms,v=p.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let x=0,w=m.length;x<w;x++){let M=Array.isArray(m[x])?m[x]:[m[x]];for(let b=0,D=M.length;b<D;b++){let I=M[b];if(l(I,x,b,v)===!0){let z=I.__offset,j=Array.isArray(I.value)?I.value:[I.value],C=0;for(let B=0;B<j.length;B++){let H=j[B],se=h(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,z+C,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,C),C+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}(d),r[d.id]=y)},dispose:function(){for(let d in n)s.deleteBuffer(n[d]);a=[],n={},r={}}}}var Ss=class{constructor(e={}){let{canvas:t=ap(),context:i=null,depth:n=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e,u;this.isWebGLRenderer=!0,u=i!==null?i.getContextAttributes().alpha:a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,_=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ze,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;let v=this,x=!1,w=0,M=0,b=null,D=-1,I=null,z=new tt,j=new tt,C=null,B=new fe(0),H=0,se=t.width,ue=t.height,ie=1,Y=null,te=null,V=new tt(0,0,se,ue),K=new tt(0,0,se,ue),ce=!1,E=new Fn,T=!1,F=!1,Z=null,U=new Ae,X=new oe,N=new R,O={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return b===null?ie:1}let Q,J,S,ne,P,L,k,ae,pe,me,we,ge,_e,Ce,ot,ve,ke,Ie,Hs,un,Gs,Dt,Tt,dn,q=i;function Vs(A,W){for(let $=0;$<A.length;$++){let re=A[$],ee=t.getContext(re,W);if(ee!==null)return ee}return null}try{let A={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",ch,!1),t.addEventListener("webglcontextrestored",uh,!1),t.addEventListener("webglcontextcreationerror",dh,!1),q===null){let W=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&W.shift(),q=Vs(W,A),q===null)throw Vs(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}function ns(){Q=new Dp(q),J=new Rp(q,Q,e),Q.init(J),Dt=new Zf(q,Q,J),S=new qf(q,Q,J),ne=new Np(q),P=new zf,L=new Yf(q,Q,S,P,J,Dt,ne),k=new Pp(v),ae=new Lp(v),pe=new wp(q,J),Tt=new Tp(q,Q,pe,J),me=new Ip(q,pe,ne,Tt),we=new Bp(q,me,pe,ne),Hs=new zp(q,J,L),ve=new Cp(P),ge=new kf(v,k,ae,Q,J,Tt,ve),_e=new Jf(v,P),Ce=new Ff,ot=new Xf(Q,J),Ie=new Ep(v,k,ae,S,we,u,l),ke=new jf(v,we,J),dn=new $f(q,ne,J,S),un=new Ap(q,Q,ne,J),Gs=new Up(q,Q,ne,J),ne.programs=ge.programs,v.capabilities=J,v.extensions=Q,v.properties=P,v.renderLists=Ce,v.shadowMap=ke,v.state=S,v.info=ne}ns();let pt=new jo(v,q);function ch(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function uh(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let A=ne.autoReset,W=ke.enabled,$=ke.autoUpdate,re=ke.needsUpdate,ee=ke.type;ns(),ne.autoReset=A,ke.enabled=W,ke.autoUpdate=$,ke.needsUpdate=re,ke.type=ee}function dh(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ph(A){let W=A.target;W.removeEventListener("dispose",ph),function($){(function(re){let ee=P.get(re).programs;ee!==void 0&&(ee.forEach(function(de){ge.releaseProgram(de)}),re.isShaderMaterial&&ge.releaseShaderCache(re))})($),P.remove($)}(W)}function fh(A,W,$){A.transparent===!0&&A.side===2&&A.forceSinglePass===!1?(A.side=_t,A.needsUpdate=!0,Xs(A,W,$),A.side=Ri,A.needsUpdate=!0,Xs(A,W,$),A.side=2):Xs(A,W,$)}this.xr=pt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let A=Q.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Q.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(A){A!==void 0&&(ie=A,this.setSize(se,ue,!1))},this.getSize=function(A){return A.set(se,ue)},this.setSize=function(A,W,$=!0){pt.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):(se=A,ue=W,t.width=Math.floor(A*ie),t.height=Math.floor(W*ie),$===!0&&(t.style.width=A+"px",t.style.height=W+"px"),this.setViewport(0,0,A,W))},this.getDrawingBufferSize=function(A){return A.set(se*ie,ue*ie).floor()},this.setDrawingBufferSize=function(A,W,$){se=A,ue=W,ie=$,t.width=Math.floor(A*$),t.height=Math.floor(W*$),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(V)},this.setViewport=function(A,W,$,re){A.isVector4?V.set(A.x,A.y,A.z,A.w):V.set(A,W,$,re),S.viewport(z.copy(V).multiplyScalar(ie).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,W,$,re){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,W,$,re),S.scissor(j.copy(K).multiplyScalar(ie).floor())},this.getScissorTest=function(){return ce},this.setScissorTest=function(A){S.setScissorTest(ce=A)},this.setOpaqueSort=function(A){Y=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(A=!0,W=!0,$=!0){let re=0;if(A){let ee=!1;if(b!==null){let de=b.texture.format;ee=de===lu||de===ou||de===au}if(ee){let de=b.texture.type,Me=de===Ki||de===wi||de===Al||de===Ji||de===su||de===ru,be=Ie.getClearColor(),Pe=Ie.getClearAlpha(),De=be.r,Ue=be.g,Ne=be.b;Me?(f[0]=De,f[1]=Ue,f[2]=Ne,f[3]=Pe,q.clearBufferuiv(q.COLOR,0,f)):(g[0]=De,g[1]=Ue,g[2]=Ne,g[3]=Pe,q.clearBufferiv(q.COLOR,0,g))}else re|=q.COLOR_BUFFER_BIT}W&&(re|=q.DEPTH_BUFFER_BIT),$&&(re|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ch,!1),t.removeEventListener("webglcontextrestored",uh,!1),t.removeEventListener("webglcontextcreationerror",dh,!1),Ce.dispose(),ot.dispose(),P.dispose(),k.dispose(),ae.dispose(),we.dispose(),Tt.dispose(),dn.dispose(),ge.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",mh),pt.removeEventListener("sessionend",gh),Z&&(Z.dispose(),Z=null),ki.stop()},this.renderBufferDirect=function(A,W,$,re,ee,de){W===null&&(W=O);let Me=ee.isMesh&&ee.matrixWorld.determinant()<0,be=function(nt,It,wt,Oe,ze){It.isScene!==!0&&(It=O),L.resetTextureUnits();let ss=It.fog,ka=Oe.isMeshStandardMaterial?It.environment:null,Gd=b===null?v.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:fi,js=(Oe.isMeshStandardMaterial?ae:k).get(Oe.envMap||ka),Vd=Oe.vertexColors===!0&&!!wt.attributes.color&&wt.attributes.color.itemSize===4,Wd=!!wt.attributes.tangent&&(!!Oe.normalMap||Oe.anisotropy>0),Xd=!!wt.morphAttributes.position,jd=!!wt.morphAttributes.normal,qd=!!wt.morphAttributes.color,Sh=Ti;Oe.toneMapped&&(b!==null&&b.isXRRenderTarget!==!0||(Sh=v.toneMapping));let bh=wt.morphAttributes.position||wt.morphAttributes.normal||wt.morphAttributes.color,Yd=bh!==void 0?bh.length:0,Fe=P.get(Oe),Zd=p.state.lights;if(T===!0&&(F===!0||nt!==I)){let Ut=nt===I&&Oe.id===D;ve.setState(Oe,nt,Ut)}let Ft=!1;Oe.version===Fe.__version?Fe.needsLights&&Fe.lightsStateVersion!==Zd.state.version||Fe.outputColorSpace!==Gd||ze.isBatchedMesh&&Fe.batching===!1?Ft=!0:ze.isBatchedMesh||Fe.batching!==!0?ze.isInstancedMesh&&Fe.instancing===!1?Ft=!0:ze.isInstancedMesh||Fe.instancing!==!0?ze.isSkinnedMesh&&Fe.skinning===!1?Ft=!0:ze.isSkinnedMesh||Fe.skinning!==!0?ze.isInstancedMesh&&Fe.instancingColor===!0&&ze.instanceColor===null||ze.isInstancedMesh&&Fe.instancingColor===!1&&ze.instanceColor!==null||Fe.envMap!==js||Oe.fog===!0&&Fe.fog!==ss?Ft=!0:Fe.numClippingPlanes===void 0||Fe.numClippingPlanes===ve.numPlanes&&Fe.numIntersection===ve.numIntersection?(Fe.vertexAlphas!==Vd||Fe.vertexTangents!==Wd||Fe.morphTargets!==Xd||Fe.morphNormals!==jd||Fe.morphColors!==qd||Fe.toneMapping!==Sh||J.isWebGL2===!0&&Fe.morphTargetsCount!==Yd)&&(Ft=!0):Ft=!0:Ft=!0:Ft=!0:Ft=!0:(Ft=!0,Fe.__version=Oe.version);let Bi=Fe.currentProgram;Ft===!0&&(Bi=Xs(Oe,It,ze));let wh=!1,rs=!1,za=!1,ft=Bi.getUniforms(),Fi=Fe.uniforms;if(S.useProgram(Bi.program)&&(wh=!0,rs=!0,za=!0),Oe.id!==D&&(D=Oe.id,rs=!0),wh||I!==nt){ft.setValue(q,"projectionMatrix",nt.projectionMatrix),ft.setValue(q,"viewMatrix",nt.matrixWorldInverse);let Ut=ft.map.cameraPosition;Ut!==void 0&&Ut.setValue(q,N.setFromMatrixPosition(nt.matrixWorld)),J.logarithmicDepthBuffer&&ft.setValue(q,"logDepthBufFC",2/(Math.log(nt.far+1)/Math.LN2)),(Oe.isMeshPhongMaterial||Oe.isMeshToonMaterial||Oe.isMeshLambertMaterial||Oe.isMeshBasicMaterial||Oe.isMeshStandardMaterial||Oe.isShaderMaterial)&&ft.setValue(q,"isOrthographic",nt.isOrthographicCamera===!0),I!==nt&&(I=nt,rs=!0,za=!0)}if(ze.isSkinnedMesh){ft.setOptional(q,ze,"bindMatrix"),ft.setOptional(q,ze,"bindMatrixInverse");let Ut=ze.skeleton;Ut&&(J.floatVertexTextures?(Ut.boneTexture===null&&Ut.computeBoneTexture(),ft.setValue(q,"boneTexture",Ut.boneTexture,L)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}ze.isBatchedMesh&&(ft.setOptional(q,ze,"batchingTexture"),ft.setValue(q,"batchingTexture",ze._matricesTexture,L));let Ba=wt.morphAttributes;(Ba.position!==void 0||Ba.normal!==void 0||Ba.color!==void 0&&J.isWebGL2===!0)&&Hs.update(ze,wt,Bi),(rs||Fe.receiveShadow!==ze.receiveShadow)&&(Fe.receiveShadow=ze.receiveShadow,ft.setValue(q,"receiveShadow",ze.receiveShadow)),Oe.isMeshGouraudMaterial&&Oe.envMap!==null&&(Fi.envMap.value=js,Fi.flipEnvMap.value=js.isCubeTexture&&js.isRenderTargetTexture===!1?-1:1),rs&&(ft.setValue(q,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&(Ht=za,(Jt=Fi).ambientLightColor.needsUpdate=Ht,Jt.lightProbe.needsUpdate=Ht,Jt.directionalLights.needsUpdate=Ht,Jt.directionalLightShadows.needsUpdate=Ht,Jt.pointLights.needsUpdate=Ht,Jt.pointLightShadows.needsUpdate=Ht,Jt.spotLights.needsUpdate=Ht,Jt.spotLightShadows.needsUpdate=Ht,Jt.rectAreaLights.needsUpdate=Ht,Jt.hemisphereLights.needsUpdate=Ht),ss&&Oe.fog===!0&&_e.refreshFogUniforms(Fi,ss),_e.refreshMaterialUniforms(Fi,Oe,ie,ue,Z),Dn.upload(q,xh(Fe),Fi,L));var Jt,Ht;if(Oe.isShaderMaterial&&Oe.uniformsNeedUpdate===!0&&(Dn.upload(q,xh(Fe),Fi,L),Oe.uniformsNeedUpdate=!1),Oe.isSpriteMaterial&&ft.setValue(q,"center",ze.center),ft.setValue(q,"modelViewMatrix",ze.modelViewMatrix),ft.setValue(q,"normalMatrix",ze.normalMatrix),ft.setValue(q,"modelMatrix",ze.matrixWorld),Oe.isShaderMaterial||Oe.isRawShaderMaterial){let Ut=Oe.uniformsGroups;for(let Fa=0,Kd=Ut.length;Fa<Kd;Fa++)if(J.isWebGL2){let Eh=Ut[Fa];dn.update(Eh,Bi),dn.bind(Eh,Bi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Bi}(A,W,$,re,ee);S.setMaterial(re,Me);let Pe=$.index,De=1;if(re.wireframe===!0){if(Pe=me.getWireframeAttribute($),Pe===void 0)return;De=2}let Ue=$.drawRange,Ne=$.attributes.position,qe=Ue.start*De,Bt=(Ue.start+Ue.count)*De;de!==null&&(qe=Math.max(qe,de.start*De),Bt=Math.min(Bt,(de.start+de.count)*De)),Pe!==null?(qe=Math.max(qe,0),Bt=Math.min(Bt,Pe.count)):Ne!=null&&(qe=Math.max(qe,0),Bt=Math.min(Bt,Ne.count));let ri=Bt-qe;if(ri<0||ri===1/0)return;let zi;Tt.setup(ee,re,be,$,Pe);let Ye=un;if(Pe!==null&&(zi=pe.get(Pe),Ye=Gs,Ye.setIndex(zi)),ee.isMesh)re.wireframe===!0?(S.setLineWidth(re.wireframeLinewidth*G()),Ye.setMode(q.LINES)):Ye.setMode(q.TRIANGLES);else if(ee.isLine){let nt=re.linewidth;nt===void 0&&(nt=1),S.setLineWidth(nt*G()),ee.isLineSegments?Ye.setMode(q.LINES):ee.isLineLoop?Ye.setMode(q.LINE_LOOP):Ye.setMode(q.LINE_STRIP)}else ee.isPoints?Ye.setMode(q.POINTS):ee.isSprite&&Ye.setMode(q.TRIANGLES);if(ee.isBatchedMesh)Ye.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else if(ee.isInstancedMesh)Ye.renderInstances(qe,ri,ee.count);else if($.isInstancedBufferGeometry){let nt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,It=Math.min($.instanceCount,nt);Ye.renderInstances(qe,ri,It)}else Ye.render(qe,ri)},this.compile=function(A,W,$=null){$===null&&($=A),p=ot.get($),p.init(),m.push(p),$.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),A!==$&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(W.layers)&&(p.pushLight(ee),ee.castShadow&&p.pushShadow(ee))}),p.setupLights(v._useLegacyLights);let re=new Set;return A.traverse(function(ee){let de=ee.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let be=de[Me];fh(be,$,ee),re.add(be)}else fh(de,$,ee),re.add(de)}),m.pop(),p=null,re},this.compileAsync=function(A,W,$=null){let re=this.compile(A,W,$);return new Promise(ee=>{function de(){re.forEach(function(Me){P.get(Me).currentProgram.isReady()&&re.delete(Me)}),re.size!==0?setTimeout(de,10):ee(A)}Q.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Oa=null;function mh(){ki.stop()}function gh(){ki.start()}let ki=new fu;function _h(A,W,$,re){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||E.intersectsSprite(A)){re&&N.setFromMatrixPosition(A.matrixWorld).applyMatrix4(U);let de=we.update(A),Me=A.material;Me.visible&&y.push(A,de,Me,$,N.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||E.intersectsObject(A))){let de=we.update(A),Me=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),N.copy(A.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),N.copy(de.boundingSphere.center)),N.applyMatrix4(A.matrixWorld).applyMatrix4(U)),Array.isArray(Me)){let be=de.groups;for(let Pe=0,De=be.length;Pe<De;Pe++){let Ue=be[Pe],Ne=Me[Ue.materialIndex];Ne&&Ne.visible&&y.push(A,de,Ne,$,N.z,Ue)}}else Me.visible&&y.push(A,de,Me,$,N.z,null)}}let ee=A.children;for(let de=0,Me=ee.length;de<Me;de++)_h(ee[de],W,$,re)}function vh(A,W,$,re){let ee=A.opaque,de=A.transmissive,Me=A.transparent;p.setupLightsView($),T===!0&&ve.setGlobalState(v.clippingPlanes,$),de.length>0&&function(be,Pe,De,Ue){if((De.isScene===!0?De.overrideMaterial:null)!==null)return;let qe=J.isWebGL2;Z===null&&(Z=new mi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?xs:Ki,minFilter:Tr,samples:qe?4:0})),v.getDrawingBufferSize(X),qe?Z.setSize(X.x,X.y):Z.setSize(Do(X.x),Do(X.y));let Bt=v.getRenderTarget();v.setRenderTarget(Z),v.getClearColor(B),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear();let ri=v.toneMapping;v.toneMapping=Ti,Ws(be,De,Ue),L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z);let zi=!1;for(let Ye=0,nt=Pe.length;Ye<nt;Ye++){let It=Pe[Ye],wt=It.object,Oe=It.geometry,ze=It.material,ss=It.group;if(ze.side===2&&wt.layers.test(Ue.layers)){let ka=ze.side;ze.side=_t,ze.needsUpdate=!0,yh(wt,De,Ue,Oe,ze,ss),ze.side=ka,ze.needsUpdate=!0,zi=!0}}zi===!0&&(L.updateMultisampleRenderTarget(Z),L.updateRenderTargetMipmap(Z)),v.setRenderTarget(Bt),v.setClearColor(B,H),v.toneMapping=ri}(ee,de,W,$),re&&S.viewport(z.copy(re)),ee.length>0&&Ws(ee,W,$),de.length>0&&Ws(de,W,$),Me.length>0&&Ws(Me,W,$),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Ws(A,W,$){let re=W.isScene===!0?W.overrideMaterial:null;for(let ee=0,de=A.length;ee<de;ee++){let Me=A[ee],be=Me.object,Pe=Me.geometry,De=re===null?Me.material:re,Ue=Me.group;be.layers.test($.layers)&&yh(be,W,$,Pe,De,Ue)}}function yh(A,W,$,re,ee,de){A.onBeforeRender(v,W,$,re,ee,de),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(v,W,$,re,A,de),ee.transparent===!0&&ee.side===2&&ee.forceSinglePass===!1?(ee.side=_t,ee.needsUpdate=!0,v.renderBufferDirect($,W,re,ee,A,de),ee.side=Ri,ee.needsUpdate=!0,v.renderBufferDirect($,W,re,ee,A,de),ee.side=2):v.renderBufferDirect($,W,re,ee,A,de),A.onAfterRender(v,W,$,re,ee,de)}function Xs(A,W,$){W.isScene!==!0&&(W=O);let re=P.get(A),ee=p.state.lights,de=p.state.shadowsArray,Me=ee.state.version,be=ge.getParameters(A,ee.state,de,W,$),Pe=ge.getProgramCacheKey(be),De=re.programs;re.environment=A.isMeshStandardMaterial?W.environment:null,re.fog=W.fog,re.envMap=(A.isMeshStandardMaterial?ae:k).get(A.envMap||re.environment),De===void 0&&(A.addEventListener("dispose",ph),De=new Map,re.programs=De);let Ue=De.get(Pe);if(Ue!==void 0){if(re.currentProgram===Ue&&re.lightsStateVersion===Me)return Mh(A,be),Ue}else be.uniforms=ge.getUniforms(A),A.onBuild($,be,v),A.onBeforeCompile(be,v),Ue=ge.acquireProgram(be,Pe),De.set(Pe,Ue),re.uniforms=be.uniforms;let Ne=re.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Ne.clippingPlanes=ve.uniform),Mh(A,be),re.needsLights=function(qe){return qe.isMeshLambertMaterial||qe.isMeshToonMaterial||qe.isMeshPhongMaterial||qe.isMeshStandardMaterial||qe.isShadowMaterial||qe.isShaderMaterial&&qe.lights===!0}(A),re.lightsStateVersion=Me,re.needsLights&&(Ne.ambientLightColor.value=ee.state.ambient,Ne.lightProbe.value=ee.state.probe,Ne.directionalLights.value=ee.state.directional,Ne.directionalLightShadows.value=ee.state.directionalShadow,Ne.spotLights.value=ee.state.spot,Ne.spotLightShadows.value=ee.state.spotShadow,Ne.rectAreaLights.value=ee.state.rectArea,Ne.ltc_1.value=ee.state.rectAreaLTC1,Ne.ltc_2.value=ee.state.rectAreaLTC2,Ne.pointLights.value=ee.state.point,Ne.pointLightShadows.value=ee.state.pointShadow,Ne.hemisphereLights.value=ee.state.hemi,Ne.directionalShadowMap.value=ee.state.directionalShadowMap,Ne.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ne.spotShadowMap.value=ee.state.spotShadowMap,Ne.spotLightMatrix.value=ee.state.spotLightMatrix,Ne.spotLightMap.value=ee.state.spotLightMap,Ne.pointShadowMap.value=ee.state.pointShadowMap,Ne.pointShadowMatrix.value=ee.state.pointShadowMatrix),re.currentProgram=Ue,re.uniformsList=null,Ue}function xh(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=Dn.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Mh(A,W){let $=P.get(A);$.outputColorSpace=W.outputColorSpace,$.batching=W.batching,$.instancing=W.instancing,$.instancingColor=W.instancingColor,$.skinning=W.skinning,$.morphTargets=W.morphTargets,$.morphNormals=W.morphNormals,$.morphColors=W.morphColors,$.morphTargetsCount=W.morphTargetsCount,$.numClippingPlanes=W.numClippingPlanes,$.numIntersection=W.numClipIntersection,$.vertexAlphas=W.vertexAlphas,$.vertexTangents=W.vertexTangents,$.toneMapping=W.toneMapping}ki.setAnimationLoop(function(A){Oa&&Oa(A)}),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(A){Oa=A,pt.setAnimationLoop(A),A===null?ki.stop():ki.start()},pt.addEventListener("sessionstart",mh),pt.addEventListener("sessionend",gh),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0)return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(W),W=pt.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,W,b),p=ot.get(A,m.length),p.init(),m.push(p),U.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),E.setFromProjectionMatrix(U),F=this.localClippingEnabled,T=ve.init(this.clippingPlanes,F),y=Ce.get(A,_.length),y.init(),_.push(y),_h(A,W,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(Y,te),this.info.render.frame++,T===!0&&ve.beginShadows();let $=p.state.shadowsArray;if(ke.render($,A,W),T===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ie.render(y,A),p.setupLights(v._useLegacyLights),W.isArrayCamera){let re=W.cameras;for(let ee=0,de=re.length;ee<de;ee++){let Me=re[ee];vh(y,A,Me,Me.viewport)}}else vh(y,A,W);b!==null&&(L.updateMultisampleRenderTarget(b),L.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(v,A,W),Tt.resetDefaultState(),D=-1,I=null,m.pop(),p=m.length>0?m[m.length-1]:null,_.pop(),y=_.length>0?_[_.length-1]:null},this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,W,$){P.get(A.texture).__webglTexture=W,P.get(A.depthTexture).__webglTexture=$;let re=P.get(A);re.__hasExternalTextures=!0,re.__hasExternalTextures&&(re.__autoAllocateDepthBuffer=$===void 0,re.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),re.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,W){let $=P.get(A);$.__webglFramebuffer=W,$.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,$=0){b=A,w=W,M=$;let re=!0,ee=null,de=!1,Me=!1;if(A){let be=P.get(A);be.__useDefaultFramebuffer!==void 0?(S.bindFramebuffer(q.FRAMEBUFFER,null),re=!1):be.__webglFramebuffer===void 0?L.setupRenderTarget(A):be.__hasExternalTextures&&L.rebindTextures(A,P.get(A.texture).__webglTexture,P.get(A.depthTexture).__webglTexture);let Pe=A.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Me=!0);let De=P.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(ee=Array.isArray(De[W])?De[W][$]:De[W],de=!0):ee=J.isWebGL2&&A.samples>0&&L.useMultisampledRTT(A)===!1?P.get(A).__webglMultisampledFramebuffer:Array.isArray(De)?De[$]:De,z.copy(A.viewport),j.copy(A.scissor),C=A.scissorTest}else z.copy(V).multiplyScalar(ie).floor(),j.copy(K).multiplyScalar(ie).floor(),C=ce;if(S.bindFramebuffer(q.FRAMEBUFFER,ee)&&J.drawBuffers&&re&&S.drawBuffers(A,ee),S.viewport(z),S.scissor(j),S.setScissorTest(C),de){let be=P.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,be.__webglTexture,$)}else if(Me){let be=P.get(A.texture),Pe=W||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,be.__webglTexture,$||0,Pe)}D=-1},this.readRenderTargetPixels=function(A,W,$,re,ee,de,Me){if(!A||!A.isWebGLRenderTarget)return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=P.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){S.bindFramebuffer(q.FRAMEBUFFER,be);try{let Pe=A.texture,De=Pe.format,Ue=Pe.type;if(De!==Qt&&Dt.convert(De)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");let Ne=Ue===xs&&(Q.has("EXT_color_buffer_half_float")||J.isWebGL2&&Q.has("EXT_color_buffer_float"));if(!(Ue===Ki||Dt.convert(Ue)===q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)||Ue===Ei&&(J.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float"))||Ne))return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");W>=0&&W<=A.width-re&&$>=0&&$<=A.height-ee&&q.readPixels(W,$,re,ee,Dt.convert(De),Dt.convert(Ue),de)}finally{let Pe=b!==null?P.get(b).__webglFramebuffer:null;S.bindFramebuffer(q.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(A,W,$=0){let re=Math.pow(2,-$),ee=Math.floor(W.image.width*re),de=Math.floor(W.image.height*re);L.setTexture2D(W,0),q.copyTexSubImage2D(q.TEXTURE_2D,$,0,0,A.x,A.y,ee,de),S.unbindTexture()},this.copyTextureToTexture=function(A,W,$,re=0){let ee=W.image.width,de=W.image.height,Me=Dt.convert($.format),be=Dt.convert($.type);L.setTexture2D($,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment),W.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,re,A.x,A.y,ee,de,Me,be,W.image.data):W.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,re,A.x,A.y,W.mipmaps[0].width,W.mipmaps[0].height,Me,W.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,re,A.x,A.y,Me,be,W.image),re===0&&$.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),S.unbindTexture()},this.copyTextureToTexture3D=function(A,W,$,re,ee=0){if(v.isWebGL1Renderer)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");let de=A.max.x-A.min.x+1,Me=A.max.y-A.min.y+1,be=A.max.z-A.min.z+1,Pe=Dt.convert(re.format),De=Dt.convert(re.type),Ue;if(re.isData3DTexture)L.setTexture3D(re,0),Ue=q.TEXTURE_3D;else{if(!re.isDataArrayTexture&&!re.isCompressedArrayTexture)return void console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");L.setTexture2DArray(re,0),Ue=q.TEXTURE_2D_ARRAY}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,re.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,re.unpackAlignment);let Ne=q.getParameter(q.UNPACK_ROW_LENGTH),qe=q.getParameter(q.UNPACK_IMAGE_HEIGHT),Bt=q.getParameter(q.UNPACK_SKIP_PIXELS),ri=q.getParameter(q.UNPACK_SKIP_ROWS),zi=q.getParameter(q.UNPACK_SKIP_IMAGES),Ye=$.isCompressedTexture?$.mipmaps[ee]:$.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ye.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ye.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,A.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,A.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,A.min.z),$.isDataTexture||$.isData3DTexture?q.texSubImage3D(Ue,ee,W.x,W.y,W.z,de,Me,be,Pe,De,Ye.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(Ue,ee,W.x,W.y,W.z,de,Me,be,Pe,Ye.data)):q.texSubImage3D(Ue,ee,W.x,W.y,W.z,de,Me,be,Pe,De,Ye),q.pixelStorei(q.UNPACK_ROW_LENGTH,Ne),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,qe),q.pixelStorei(q.UNPACK_SKIP_PIXELS,Bt),q.pixelStorei(q.UNPACK_SKIP_ROWS,ri),q.pixelStorei(q.UNPACK_SKIP_IMAGES,zi),ee===0&&re.generateMipmaps&&q.generateMipmap(Ue),S.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){w=0,M=0,b=null,S.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Rl?"display-p3":"srgb",t.unpackColorSpace=He.workingColorSpace===oa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ze?Qi:cu}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qi?Ze:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qo=class extends Ss{};qo.prototype.isWebGL1Renderer=!0;var Wr=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}};var $m=new R;var Qm=new R,eg=new R,tg=new R,ig=new oe,ng=new oe,sg=new Ae,rg=new R,ag=new R,og=new R,lg=new oe,hg=new oe,cg=new oe;var ug=new R,dg=new R;var pg=new R,fg=new tt,mg=new tt,gg=new R,_g=new Ae,vg=new R,yg=new Yt,xg=new Ae,Mg=new kn;var Sg=new Ae,bg=new Ae;var Xr=class extends st{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cn=new Ae,Hc=new Ae,mr=[],Gc=new qt,Qf=new Ae,ds=new xe,ps=new Yt,jr=class extends xe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xr(new Float32Array(16*i),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Qf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cn),Gc.copy(e.boundingBox).applyMatrix4(Cn),this.boundingBox.union(Gc)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cn),ps.copy(e.boundingSphere).applyMatrix4(Cn),this.boundingSphere.union(ps)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}raycast(e,t){let i=this.matrixWorld,n=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(i),e.ray.intersectsSphere(ps)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Cn),Hc.multiplyMatrices(i,Cn),ds.matrixWorld=Hc,ds.raycast(e,mr);for(let a=0,o=mr.length;a<o;a++){let l=mr[a];l.instanceId=r,l.object=this,t.push(l)}mr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Xr(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yo=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){let i=this.pool,n=this.list;this.index>=i.length&&i.push({start:-1,count:-1,z:-1});let r=i[this.index];n.push(r),this.index++,r.start=e.start,r.count=e.count,r.z=t}reset(){this.list.length=0,this.index=0}};var wg=new Ae,Eg=new Ae,Tg=new Ae,Ag=new Ae,Rg=new Fn,Cg=new qt,Pg=new Yt,Lg=new R,Dg=new Yo,Ig=new xe;var Ug=new R,Ng=new R,Og=new Ae,kg=new kn,zg=new Yt;var Bg=new R,Fg=new R;var Hn=class extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Vc=new Ae,Zo=new kn,gr=new Yt,_r=new R,bs=class extends vt{constructor(e=new je,t=new Hn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere),gr.applyMatrix4(n),gr.radius+=r,e.ray.intersectsSphere(gr)===!1)return;Vc.copy(n).invert(),Zo.copy(e.ray).applyMatrix4(Vc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,h=i.index,c=i.attributes.position;if(h!==null)for(let d=Math.max(0,a.start),u=Math.min(h.count,a.start+a.count);d<u;d++){let f=h.getX(d);_r.fromBufferAttribute(c,f),Wc(_r,f,l,n,e,t,this)}else for(let d=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);d<u;d++)_r.fromBufferAttribute(c,d),Wc(_r,d,l,n,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,r=i.length;n<r;n++){let a=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Wc(s,e,t,i,n,r,a){let o=Zo.distanceSqToPoint(s);if(o<t){let l=new R;Zo.closestPointToPoint(s,l),l.applyMatrix4(i);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}var Li=class extends Ot{constructor(e,t,i,n,r,a,o,l,h){super(e,t,i,n,r,a,o,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}},zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),n=0,r=i.length,a;a=t||e*i[r-1];let o,l=0,h=r-1;for(;l<=h;)if(n=Math.floor(l+(h-l)/2),o=i[n]-a,o<0)l=n+1;else{if(!(o>0)){h=n;break}h=n-1}if(n=h,i[n]===a)return n/(r-1);let c=i[n];return(n+(a-c)/(i[n+1]-c))/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new oe:new R);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new R,n=[],r=[],a=[],o=new R,l=new Ae;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let h=Number.MAX_VALUE,c=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ht(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(ht(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ws=class extends zt{constructor(e=0,t=0,i=1,n=1,r=0,a=2*Math.PI,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){let i=t||new oe,n=2*Math.PI,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(r=a?0:n),this.aClockwise!==!0||a||(r===n?r=-n:r-=n);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ko=class extends ws{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Pl(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,h){n(a,o,h*(o-r),h*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,h,c,d){let u=(a-r)/h-(o-r)/(h+c)+(o-a)/c,f=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,f*=c,n(a,o,u,f)},calc:function(r){let a=r*r;return s+e*r+t*a+i*(a*r)}}}var vr=new R,vo=new Pl,yo=new Pl,xo=new Pl,Jo=class extends zt{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o,l,h=Math.floor(a),c=a-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/r)+1)*r:c===0&&h===r-1&&(h=r-2,c=1),this.closed||h>0?o=n[(h-1)%r]:(vr.subVectors(n[0],n[1]).add(n[0]),o=vr);let d=n[h%r],u=n[(h+1)%r];if(this.closed||h+2<r?l=n[(h+2)%r]:(vr.subVectors(n[r-1],n[r-2]).add(n[r-1]),l=vr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(o.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(l),f);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),vo.initNonuniformCatmullRom(o.x,d.x,u.x,l.x,g,y,p),yo.initNonuniformCatmullRom(o.y,d.y,u.y,l.y,g,y,p),xo.initNonuniformCatmullRom(o.z,d.z,u.z,l.z,g,y,p)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(o.x,d.x,u.x,l.x,this.tension),yo.initCatmullRom(o.y,d.y,u.y,l.y,this.tension),xo.initCatmullRom(o.z,d.z,u.z,l.z,this.tension));return i.set(vo.calc(c),yo.calc(c),xo.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Xc(s,e,t,i,n){let r=.5*(i-e),a=.5*(n-t),o=s*s;return(2*t-2*i+r+a)*(s*o)+(-3*t+3*i-2*r-a)*o+r*s+t}function gs(s,e,t,i){return function(n,r){let a=1-n;return a*a*r}(s,e)+function(n,r){return 2*(1-n)*n*r}(s,t)+function(n,r){return n*n*r}(s,i)}function _s(s,e,t,i,n){return function(r,a){let o=1-r;return o*o*o*a}(s,e)+function(r,a){let o=1-r;return 3*o*o*r*a}(s,t)+function(r,a){return 3*(1-r)*r*r*a}(s,i)+function(r,a){return r*r*r*a}(s,n)}var qr=class extends zt{constructor(e=new oe,t=new oe,i=new oe,n=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new oe){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(_s(e,n.x,r.x,a.x,o.x),_s(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$o=class extends zt{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(_s(e,n.x,r.x,a.x,o.x),_s(e,n.y,r.y,a.y,o.y),_s(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Yr=class extends zt{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qo=class extends zt{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends zt{constructor(e=new oe,t=new oe,i=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new oe){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(gs(e,n.x,r.x,a.x),gs(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kr=class extends zt{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(gs(e,n.x,r.x,a.x),gs(e,n.y,r.y,a.y),gs(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Jr=class extends zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],h=n[a],c=n[a>n.length-2?n.length-1:a+1],d=n[a>n.length-3?n.length-1:a+2];return i.set(Xc(o,l.x,h.x,c.x,d.x),Xc(o,l.y,h.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new oe().fromArray(n))}return this}},$r=Object.freeze({__proto__:null,ArcCurve:Ko,CatmullRomCurve3:Jo,CubicBezierCurve:qr,CubicBezierCurve3:$o,EllipseCurve:ws,LineCurve:Yr,LineCurve3:Qo,QuadraticBezierCurve:Zr,QuadraticBezierCurve3:Kr,SplineCurve:Jr}),el=class extends zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $r[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],l=o.getLength(),h=l===0?0:1-a/l;return o.getPointAt(h,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new $r[n.type]().fromJSON(n))}return this}},Es=class extends el{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Yr(this.currentPoint.clone(),new oe(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Zr(this.currentPoint.clone(),new oe(e,t),new oe(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new qr(this.currentPoint.clone(),new oe(e,t),new oe(i,n),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Jr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+h,t+c,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){let h=new ws(e,t,i,n,r,a,o,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Qr=class s extends je{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,i=0,n=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=ht(n,0,2*Math.PI);let r=[],a=[],o=[],l=[],h=[],c=1/t,d=new R,u=new oe,f=new R,g=new R,y=new R,p=0,_=0;for(let m=0;m<=e.length-1;m++)switch(m){case 0:p=e[m+1].x-e[m].x,_=e[m+1].y-e[m].y,f.x=1*_,f.y=-p,f.z=0*_,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:p=e[m+1].x-e[m].x,_=e[m+1].y-e[m].y,f.x=1*_,f.y=-p,f.z=0*_,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let m=0;m<=t;m++){let v=i+m*c*n,x=Math.sin(v),w=Math.cos(v);for(let M=0;M<=e.length-1;M++){d.x=e[M].x*x,d.y=e[M].y,d.z=e[M].x*w,a.push(d.x,d.y,d.z),u.x=m/t,u.y=M/(e.length-1),o.push(u.x,u.y);let b=l[3*M+0]*x,D=l[3*M+1],I=l[3*M+0]*w;h.push(b,D,I)}}for(let m=0;m<t;m++)for(let v=0;v<e.length-1;v++){let x=v+m*e.length,w=x,M=x+e.length,b=x+e.length+1,D=x+1;r.push(w,M,D),r.push(b,D,M)}this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("uv",new Ee(o,2)),this.setAttribute("normal",new Ee(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},tl=class s extends Qr{constructor(e=1,t=1,i=4,n=8){let r=new Es;r.absarc(0,-t/2,e,1.5*Math.PI,0),r.absarc(0,t/2,e,0,.5*Math.PI),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},Gn=class s extends je{constructor(e=1,t=32,i=0,n=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],l=[],h=new R,c=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*n;h.x=e*Math.cos(f),h.y=e*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ee(a,3)),this.setAttribute("normal",new Ee(o,3)),this.setAttribute("uv",new Ee(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class s extends je{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),r=Math.floor(r);let c=[],d=[],u=[],f=[],g=0,y=[],p=i/2,_=0;function m(v){let x=g,w=new oe,M=new R,b=0,D=v===!0?e:t,I=v===!0?1:-1;for(let j=1;j<=n;j++)d.push(0,p*I,0),u.push(0,I,0),f.push(.5,.5),g++;let z=g;for(let j=0;j<=n;j++){let C=j/n*l+o,B=Math.cos(C),H=Math.sin(C);M.x=D*H,M.y=p*I,M.z=D*B,d.push(M.x,M.y,M.z),u.push(0,I,0),w.x=.5*B+.5,w.y=.5*H*I+.5,f.push(w.x,w.y),g++}for(let j=0;j<n;j++){let C=x+j,B=z+j;v===!0?c.push(B,B+1,C):c.push(B+1,B,C),b+=3}h.addGroup(_,b,v===!0?1:2),_+=b}(function(){let v=new R,x=new R,w=0,M=(t-e)/i;for(let b=0;b<=r;b++){let D=[],I=b/r,z=I*(t-e)+e;for(let j=0;j<=n;j++){let C=j/n,B=C*l+o,H=Math.sin(B),se=Math.cos(B);x.x=z*H,x.y=-I*i+p,x.z=z*se,d.push(x.x,x.y,x.z),v.set(H,M,se).normalize(),u.push(v.x,v.y,v.z),f.push(C,1-I),D.push(g++)}y.push(D)}for(let b=0;b<n;b++)for(let D=0;D<r;D++){let I=y[D][b],z=y[D+1][b],j=y[D+1][b+1],C=y[D][b+1];c.push(I,z,C),c.push(z,j,C),w+=6}h.addGroup(_,w,0),_+=w})(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(c),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vn=class s extends yt{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=2*Math.PI){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},tn=class s extends je{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];function o(u,f,g,y){let p=y+1,_=[];for(let m=0;m<=p;m++){_[m]=[];let v=u.clone().lerp(g,m/p),x=f.clone().lerp(g,m/p),w=p-m;for(let M=0;M<=w;M++)_[m][M]=M===0&&m===p?v:v.clone().lerp(x,M/w)}for(let m=0;m<p;m++)for(let v=0;v<2*(p-m)-1;v++){let x=Math.floor(v/2);v%2==0?(l(_[m][x+1]),l(_[m+1][x]),l(_[m][x])):(l(_[m][x+1]),l(_[m+1][x+1]),l(_[m+1][x]))}}function l(u){r.push(u.x,u.y,u.z)}function h(u,f){let g=3*u;f.x=e[g+0],f.y=e[g+1],f.z=e[g+2]}function c(u,f,g,y){y<0&&u.x===1&&(a[f]=u.x-1),g.x===0&&g.z===0&&(a[f]=y/2/Math.PI+.5)}function d(u){return Math.atan2(u.z,-u.x)}(function(u){let f=new R,g=new R,y=new R;for(let p=0;p<t.length;p+=3)h(t[p+0],f),h(t[p+1],g),h(t[p+2],y),o(f,g,y,u)})(n),function(u){let f=new R;for(let g=0;g<r.length;g+=3)f.x=r[g+0],f.y=r[g+1],f.z=r[g+2],f.normalize().multiplyScalar(u),r[g+0]=f.x,r[g+1]=f.y,r[g+2]=f.z}(i),function(){let u=new R;for(let g=0;g<r.length;g+=3){u.x=r[g+0],u.y=r[g+1],u.z=r[g+2];let y=d(u)/2/Math.PI+.5,p=(f=u,Math.atan2(-f.y,Math.sqrt(f.x*f.x+f.z*f.z))/Math.PI+.5);a.push(y,1-p)}var f;(function(){let g=new R,y=new R,p=new R,_=new R,m=new oe,v=new oe,x=new oe;for(let w=0,M=0;w<r.length;w+=9,M+=6){g.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),p.set(r[w+6],r[w+7],r[w+8]),m.set(a[M+0],a[M+1]),v.set(a[M+2],a[M+3]),x.set(a[M+4],a[M+5]),_.copy(g).add(y).add(p).divideScalar(3);let b=d(_);c(m,M+0,g,b),c(v,M+2,y,b),c(x,M+4,p,b)}})(),function(){for(let g=0;g<a.length;g+=6){let y=a[g+0],p=a[g+2],_=a[g+4],m=Math.max(y,p,_),v=Math.min(y,p,_);m>.9&&v<.1&&(y<.2&&(a[g+0]+=1),p<.2&&(a[g+2]+=1),_<.2&&(a[g+4]+=1))}}()}(),this.setAttribute("position",new Ee(r,3)),this.setAttribute("normal",new Ee(r.slice(),3)),this.setAttribute("uv",new Ee(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}},il=class s extends tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=1/i;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},yr=new R,xr=new R,Mo=new R,Mr=new Zi,nl=class extends je{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let n=Math.pow(10,4),r=Math.cos(Er*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,h=[0,0,0],c=["a","b","c"],d=new Array(3),u={},f=[];for(let g=0;g<l;g+=3){a?(h[0]=a.getX(g),h[1]=a.getX(g+1),h[2]=a.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);let{a:y,b:p,c:_}=Mr;if(y.fromBufferAttribute(o,h[0]),p.fromBufferAttribute(o,h[1]),_.fromBufferAttribute(o,h[2]),Mr.getNormal(Mo),d[0]=`${Math.round(y.x*n)},${Math.round(y.y*n)},${Math.round(y.z*n)}`,d[1]=`${Math.round(p.x*n)},${Math.round(p.y*n)},${Math.round(p.z*n)}`,d[2]=`${Math.round(_.x*n)},${Math.round(_.y*n)},${Math.round(_.z*n)}`,d[0]!==d[1]&&d[1]!==d[2]&&d[2]!==d[0])for(let m=0;m<3;m++){let v=(m+1)%3,x=d[m],w=d[v],M=Mr[c[m]],b=Mr[c[v]],D=`${x}_${w}`,I=`${w}_${x}`;I in u&&u[I]?(Mo.dot(u[I].normal)<=r&&(f.push(M.x,M.y,M.z),f.push(b.x,b.y,b.z)),u[I]=null):D in u||(u[D]={index0:h[m],index1:h[v],normal:Mo.clone()})}}for(let g in u)if(u[g]){let{index0:y,index1:p}=u[g];yr.fromBufferAttribute(o,y),xr.fromBufferAttribute(o,p),f.push(yr.x,yr.y,yr.z),f.push(xr.x,xr.y,xr.z)}this.setAttribute("position",new Ee(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},ea=class extends Es{constructor(e){super(e),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Es().fromJSON(n))}return this}},em=function(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=jc(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,h,c,d,u,f;if(i&&(r=function(g,y,p,_){let m=[],v,x,w,M,b;for(v=0,x=y.length;v<x;v++)w=y[v]*_,M=v<x-1?y[v+1]*_:g.length,b=jc(g,w,M,_,!1),b===b.next&&(b.steiner=!0),m.push(lm(b));for(m.sort(rm),v=0;v<m.length;v++)p=am(m[v],p);return p}(s,e,r,t)),s.length>80*t){o=h=s[0],l=c=s[1];for(let g=t;g<n;g+=t)d=s[g],u=s[g+1],d<o&&(o=d),u<l&&(l=u),d>h&&(h=d),u>c&&(c=u);f=Math.max(h-o,c-l),f=f!==0?32767/f:0}return Ts(r,a,t,o,l,f,0),a};function jc(s,e,t,i,n){let r,a;if(n===function(o,l,h,c){let d=0;for(let u=l,f=h-c;u<h;u+=c)d+=(o[f]-o[u])*(o[u+1]+o[f+1]),f=u;return d}(s,e,t,i)>0)for(r=e;r<t;r+=i)a=qc(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=qc(r,s[r],s[r+1],a);return a&&ha(a,a.next)&&(Rs(a),a=a.next),a}function nn(s,e){if(!s)return s;e||(e=s);let t,i=s;do if(t=!1,i.steiner||!ha(i,i.next)&&Ke(i.prev,i,i.next)!==0)i=i.next;else{if(Rs(i),i=e=i.prev,i===i.next)break;t=!0}while(t||i!==e);return e}function Ts(s,e,t,i,n,r,a){if(!s)return;!a&&r&&function(c,d,u,f){let g=c;do g.z===0&&(g.z=sl(g.x,g.y,d,u,f)),g.prevZ=g.prev,g.nextZ=g.next,g=g.next;while(g!==c);g.prevZ.nextZ=null,g.prevZ=null,function(y){let p,_,m,v,x,w,M,b,D=1;do{for(_=y,y=null,x=null,w=0;_;){for(w++,m=_,M=0,p=0;p<D&&(M++,m=m.nextZ,m);p++);for(b=D;M>0||b>0&&m;)M!==0&&(b===0||!m||_.z<=m.z)?(v=_,_=_.nextZ,M--):(v=m,m=m.nextZ,b--),x?x.nextZ=v:y=v,v.prevZ=x,x=v;_=m}x.nextZ=null,D*=2}while(w>1)}(g)}(s,i,n,r);let o,l,h=s;for(;s.prev!==s.next;)if(o=s.prev,l=s.next,r?im(s,i,n,r):tm(s))e.push(o.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),Rs(s),s=l.next,h=l.next;else if((s=l)===h){a?a===1?Ts(s=nm(nn(s),e,t),e,t,i,n,r,2):a===2&&sm(s,e,t,i,n,r):Ts(nn(s),e,t,i,n,r,1);break}}function tm(s){let e=s.prev,t=s,i=s.next;if(Ke(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,h=i.y,c=n<r?n<a?n:a:r<a?r:a,d=o<l?o<h?o:h:l<h?l:h,u=n>r?n>a?n:a:r>a?r:a,f=o>l?o>h?o:h:l>h?l:h,g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=f&&Pn(n,o,r,l,a,h,g.x,g.y)&&Ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function im(s,e,t,i){let n=s.prev,r=s,a=s.next;if(Ke(n,r,a)>=0)return!1;let o=n.x,l=r.x,h=a.x,c=n.y,d=r.y,u=a.y,f=o<l?o<h?o:h:l<h?l:h,g=c<d?c<u?c:u:d<u?d:u,y=o>l?o>h?o:h:l>h?l:h,p=c>d?c>u?c:u:d>u?d:u,_=sl(f,g,e,t,i),m=sl(y,p,e,t,i),v=s.prevZ,x=s.nextZ;for(;v&&v.z>=_&&x&&x.z<=m;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&Pn(o,c,l,d,h,u,v.x,v.y)&&Ke(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=p&&x!==n&&x!==a&&Pn(o,c,l,d,h,u,x.x,x.y)&&Ke(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=_;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=p&&v!==n&&v!==a&&Pn(o,c,l,d,h,u,v.x,v.y)&&Ke(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=m;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=p&&x!==n&&x!==a&&Pn(o,c,l,d,h,u,x.x,x.y)&&Ke(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function nm(s,e,t){let i=s;do{let n=i.prev,r=i.next.next;!ha(n,r)&&xu(n,i,i.next,r)&&As(n,r)&&As(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Rs(i),Rs(i.next),i=s=r),i=i.next}while(i!==s);return nn(i)}function sm(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&hm(a,o)){let l=Mu(a,o);return a=nn(a,a.next),l=nn(l,l.next),Ts(a,e,t,i,n,r,0),void Ts(l,e,t,i,n,r,0)}o=o.next}a=a.next}while(a!==s)}function rm(s,e){return s.x-e.x}function am(s,e){let t=function(n,r){let a,o=r,l=-1/0,h=n.x,c=n.y;do{if(c<=o.y&&c>=o.next.y&&o.next.y!==o.y){let p=o.x+(c-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(p<=h&&p>l&&(l=p,a=o.x<o.next.x?o:o.next,p===h))return a}o=o.next}while(o!==r);if(!a)return null;let d=a,u=a.x,f=a.y,g,y=1/0;o=a;do h>=o.x&&o.x>=u&&h!==o.x&&Pn(c<f?h:l,c,u,f,c<f?l:h,c,o.x,o.y)&&(g=Math.abs(c-o.y)/(h-o.x),As(o,n)&&(g<y||g===y&&(o.x>a.x||o.x===a.x&&om(a,o)))&&(a=o,y=g)),o=o.next;while(o!==d);return a}(s,e);if(!t)return e;let i=Mu(t,s);return nn(i,i.next),nn(t,t.next)}function om(s,e){return Ke(s.prev,s,e.prev)<0&&Ke(e.next,s,s.next)<0}function sl(s,e,t,i,n){return(s=1431655765&((s=858993459&((s=252645135&((s=16711935&((s=(s-t)*n|0)|s<<8))|s<<4))|s<<2))|s<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-i)*n|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function lm(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Pn(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function hm(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!function(t,i){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==i.i&&n.next.i!==i.i&&xu(n,n.next,t,i))return!0;n=n.next}while(n!==t);return!1}(s,e)&&(As(s,e)&&As(e,s)&&function(t,i){let n=t,r=!1,a=(t.x+i.x)/2,o=(t.y+i.y)/2;do n.y>o!=n.next.y>o&&n.next.y!==n.y&&a<(n.next.x-n.x)*(o-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==t);return r}(s,e)&&(Ke(s.prev,s,e.prev)||Ke(s,e.prev,e))||ha(s,e)&&Ke(s.prev,s,s.next)>0&&Ke(e.prev,e,e.next)>0)}function Ke(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ha(s,e){return s.x===e.x&&s.y===e.y}function xu(s,e,t,i){let n=br(Ke(s,e,t)),r=br(Ke(s,e,i)),a=br(Ke(t,i,s)),o=br(Ke(t,i,e));return n!==r&&a!==o||!(n!==0||!Sr(s,t,e))||!(r!==0||!Sr(s,i,e))||!(a!==0||!Sr(t,s,i))||!(o!==0||!Sr(t,e,i))}function Sr(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function br(s){return s>0?1:s<0?-1:0}function As(s,e){return Ke(s.prev,s,s.next)<0?Ke(s,e,s.next)>=0&&Ke(s,s.prev,e)>=0:Ke(s,e,s.prev)<0||Ke(s,s.next,e)<0}function Mu(s,e){let t=new rl(s.i,s.x,s.y),i=new rl(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function qc(s,e,t,i){let n=new rl(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Rs(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function rl(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}var Ai=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return .5*i}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Yc(e),Zc(i,e);let a=e.length;t.forEach(Yc);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Zc(i,t[l]);let o=em(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Yc(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Zc(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var al=class s extends je{constructor(e=new ea([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++)a(e[o]);function a(o){let l=[],h=t.curveSegments!==void 0?t.curveSegments:12,c=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled===void 0||t.bevelEnabled,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:cm,v,x,w,M,b,D=!1;_&&(v=_.getSpacedPoints(c),D=!0,u=!1,x=_.computeFrenetFrames(c,!1),w=new R,M=new R,b=new R),u||(p=0,f=0,g=0,y=0);let I=o.extractPoints(h),z=I.shape,j=I.holes;if(!Ai.isClockWise(z)){z=z.reverse();for(let N=0,O=j.length;N<O;N++){let G=j[N];Ai.isClockWise(G)&&(j[N]=G.reverse())}}let C=Ai.triangulateShape(z,j),B=z;for(let N=0,O=j.length;N<O;N++){let G=j[N];z=z.concat(G)}function H(N,O,G){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(O,G)}let se=z.length,ue=C.length;function ie(N,O,G){let Q,J,S,ne=N.x-O.x,P=N.y-O.y,L=G.x-N.x,k=G.y-N.y,ae=ne*ne+P*P,pe=ne*k-P*L;if(Math.abs(pe)>Number.EPSILON){let me=Math.sqrt(ae),we=Math.sqrt(L*L+k*k),ge=O.x-P/me,_e=O.y+ne/me,Ce=((G.x-k/we-ge)*k-(G.y+L/we-_e)*L)/(ne*k-P*L);Q=ge+ne*Ce-N.x,J=_e+P*Ce-N.y;let ot=Q*Q+J*J;if(ot<=2)return new oe(Q,J);S=Math.sqrt(ot/2)}else{let me=!1;ne>Number.EPSILON?L>Number.EPSILON&&(me=!0):ne<-Number.EPSILON?L<-Number.EPSILON&&(me=!0):Math.sign(P)===Math.sign(k)&&(me=!0),me?(Q=-P,J=ne,S=Math.sqrt(ae)):(Q=ne,J=P,S=Math.sqrt(ae/2))}return new oe(Q/S,J/S)}let Y=[];for(let N=0,O=B.length,G=O-1,Q=N+1;N<O;N++,G++,Q++)G===O&&(G=0),Q===O&&(Q=0),Y[N]=ie(B[N],B[G],B[Q]);let te=[],V,K=Y.concat();for(let N=0,O=j.length;N<O;N++){let G=j[N];V=[];for(let Q=0,J=G.length,S=J-1,ne=Q+1;Q<J;Q++,S++,ne++)S===J&&(S=0),ne===J&&(ne=0),V[Q]=ie(G[Q],G[S],G[ne]);te.push(V),K=K.concat(V)}for(let N=0;N<p;N++){let O=N/p,G=f*Math.cos(O*Math.PI/2),Q=g*Math.sin(O*Math.PI/2)+y;for(let J=0,S=B.length;J<S;J++){let ne=H(B[J],Y[J],Q);T(ne.x,ne.y,-G)}for(let J=0,S=j.length;J<S;J++){let ne=j[J];V=te[J];for(let P=0,L=ne.length;P<L;P++){let k=H(ne[P],V[P],Q);T(k.x,k.y,-G)}}}let ce=g+y;for(let N=0;N<se;N++){let O=u?H(z[N],K[N],ce):z[N];D?(M.copy(x.normals[0]).multiplyScalar(O.x),w.copy(x.binormals[0]).multiplyScalar(O.y),b.copy(v[0]).add(M).add(w),T(b.x,b.y,b.z)):T(O.x,O.y,0)}for(let N=1;N<=c;N++)for(let O=0;O<se;O++){let G=u?H(z[O],K[O],ce):z[O];D?(M.copy(x.normals[N]).multiplyScalar(G.x),w.copy(x.binormals[N]).multiplyScalar(G.y),b.copy(v[N]).add(M).add(w),T(b.x,b.y,b.z)):T(G.x,G.y,d/c*N)}for(let N=p-1;N>=0;N--){let O=N/p,G=f*Math.cos(O*Math.PI/2),Q=g*Math.sin(O*Math.PI/2)+y;for(let J=0,S=B.length;J<S;J++){let ne=H(B[J],Y[J],Q);T(ne.x,ne.y,d+G)}for(let J=0,S=j.length;J<S;J++){let ne=j[J];V=te[J];for(let P=0,L=ne.length;P<L;P++){let k=H(ne[P],V[P],Q);D?T(k.x,k.y+v[c-1].y,v[c-1].x+G):T(k.x,k.y,d+G)}}}function E(N,O){let G=N.length;for(;--G>=0;){let Q=G,J=G-1;J<0&&(J=N.length-1);for(let S=0,ne=c+2*p;S<ne;S++){let P=se*S,L=se*(S+1);Z(O+Q+P,O+J+P,O+J+L,O+Q+L)}}}function T(N,O,G){l.push(N),l.push(O),l.push(G)}function F(N,O,G){U(N),U(O),U(G);let Q=n.length/3,J=m.generateTopUV(i,n,Q-3,Q-2,Q-1);X(J[0]),X(J[1]),X(J[2])}function Z(N,O,G,Q){U(N),U(O),U(Q),U(O),U(G),U(Q);let J=n.length/3,S=m.generateSideWallUV(i,n,J-6,J-3,J-2,J-1);X(S[0]),X(S[1]),X(S[3]),X(S[1]),X(S[2]),X(S[3])}function U(N){n.push(l[3*N+0]),n.push(l[3*N+1]),n.push(l[3*N+2])}function X(N){r.push(N.x),r.push(N.y)}(function(){let N=n.length/3;if(u){let O=0,G=se*O;for(let Q=0;Q<ue;Q++){let J=C[Q];F(J[2]+G,J[1]+G,J[0]+G)}O=c+2*p,G=se*O;for(let Q=0;Q<ue;Q++){let J=C[Q];F(J[0]+G,J[1]+G,J[2]+G)}}else{for(let O=0;O<ue;O++){let G=C[O];F(G[2],G[1],G[0])}for(let O=0;O<ue;O++){let G=C[O];F(G[0]+se*c,G[1]+se*c,G[2]+se*c)}}i.addGroup(N,n.length/3-N,0)})(),function(){let N=n.length/3,O=0;E(B,O),O+=B.length;for(let G=0,Q=j.length;G<Q;G++){let J=j[G];E(J,O),O+=J.length}i.addGroup(N,n.length/3-N,1)}()}this.setAttribute("position",new Ee(n,3)),this.setAttribute("uv",new Ee(r,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i,n){if(n.shapes=[],Array.isArray(t))for(let r=0,a=t.length;r<a;r++){let o=t[r];n.shapes.push(o.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},i),i.extrudePath!==void 0&&(n.options.extrudePath=i.extrudePath.toJSON()),n}(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new $r[n.type]().fromJSON(n)),new s(i,e.options)}},cm={generateTopUV:function(s,e,t,i,n){let r=e[3*t],a=e[3*t+1],o=e[3*i],l=e[3*i+1],h=e[3*n],c=e[3*n+1];return[new oe(r,a),new oe(o,l),new oe(h,c)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[3*t],o=e[3*t+1],l=e[3*t+2],h=e[3*i],c=e[3*i+1],d=e[3*i+2],u=e[3*n],f=e[3*n+1],g=e[3*n+2],y=e[3*r],p=e[3*r+1],_=e[3*r+2];return Math.abs(o-c)<Math.abs(a-h)?[new oe(a,1-l),new oe(h,1-d),new oe(u,1-g),new oe(y,1-_)]:[new oe(o,1-l),new oe(c,1-d),new oe(f,1-g),new oe(p,1-_)]}},ol=class s extends tn{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2;super([-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ll=class s extends tn{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Cs=class s extends je{constructor(e=.5,t=1,i=32,n=1,r=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i);let o=[],l=[],h=[],c=[],d=e,u=(t-e)/(n=Math.max(1,n)),f=new R,g=new oe;for(let y=0;y<=n;y++){for(let p=0;p<=i;p++){let _=r+p/i*a;f.x=d*Math.cos(_),f.y=d*Math.sin(_),l.push(f.x,f.y,f.z),h.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,c.push(g.x,g.y)}d+=u}for(let y=0;y<n;y++){let p=y*(i+1);for(let _=0;_<i;_++){let m=_+p,v=m,x=m+i+1,w=m+i+2,M=m+1;o.push(v,x,M),o.push(x,w,M)}}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},hl=class s extends je{constructor(e=new ea([new oe(0,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],n=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;function h(c){let d=n.length/3,u=c.extractPoints(t),f=u.shape,g=u.holes;Ai.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,_=g.length;p<_;p++){let m=g[p];Ai.isClockWise(m)===!0&&(g[p]=m.reverse())}let y=Ai.triangulateShape(f,g);for(let p=0,_=g.length;p<_;p++){let m=g[p];f=f.concat(m)}for(let p=0,_=f.length;p<_;p++){let m=f[p];n.push(m.x,m.y,0),r.push(0,0,1),a.push(m.x,m.y)}for(let p=0,_=y.length;p<_;p++){let m=y[p],v=m[0]+d,x=m[1]+d,w=m[2]+d;i.push(v,x,w),l+=3}}this.setIndex(i),this.setAttribute("position",new Ee(n,3)),this.setAttribute("normal",new Ee(r,3)),this.setAttribute("uv",new Ee(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return function(t,i){if(i.shapes=[],Array.isArray(t))for(let n=0,r=t.length;n<r;n++){let a=t[n];i.shapes.push(a.uuid)}else i.shapes.push(t.uuid);return i}(this.parameters.shapes,e)}static fromJSON(e,t){let i=[];for(let n=0,r=e.shapes.length;n<r;n++){let a=t[e.shapes[n]];i.push(a)}return new s(i,e.curveSegments)}},Kt=class s extends je{constructor(e=1,t=32,i=16,n=0,r=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),h=0,c=[],d=new R,u=new R,f=[],g=[],y=[],p=[];for(let _=0;_<=i;_++){let m=[],v=_/i,x=0;_===0&&a===0?x=.5/t:_===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let M=w/t;d.x=-e*Math.cos(n+M*r)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(n+M*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),p.push(M+x,1-v),m.push(h++)}c.push(m)}for(let _=0;_<i;_++)for(let m=0;m<t;m++){let v=c[_][m+1],x=c[_][m],w=c[_+1][m],M=c[_+1][m+1];(_!==0||a>0)&&f.push(v,x,M),(_!==i-1||l<Math.PI)&&f.push(x,w,M)}this.setIndex(f),this.setAttribute("position",new Ee(g,3)),this.setAttribute("normal",new Ee(y,3)),this.setAttribute("uv",new Ee(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},cl=class s extends tn{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ii=class s extends je{constructor(e=1,t=.4,i=12,n=48,r=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);let a=[],o=[],l=[],h=[],c=new R,d=new R,u=new R;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){let y=g/n*r,p=f/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),u.subVectors(d,c).normalize(),l.push(u.x,u.y,u.z),h.push(g/n),h.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){let y=(n+1)*f+g-1,p=(n+1)*(f-1)+g-1,_=(n+1)*(f-1)+g,m=(n+1)*f+g;a.push(y,p,m),a.push(p,_,m)}this.setIndex(a),this.setAttribute("position",new Ee(o,3)),this.setAttribute("normal",new Ee(l,3)),this.setAttribute("uv",new Ee(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ul=class s extends je{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);let o=[],l=[],h=[],c=[],d=new R,u=new R,f=new R,g=new R,y=new R,p=new R,_=new R;for(let v=0;v<=i;++v){let x=v/i*r*Math.PI*2;m(x,r,a,e,f),m(x+.01,r,a,e,g),p.subVectors(g,f),_.addVectors(g,f),y.crossVectors(p,_),_.crossVectors(y,p),y.normalize(),_.normalize();for(let w=0;w<=n;++w){let M=w/n*Math.PI*2,b=-t*Math.cos(M),D=t*Math.sin(M);d.x=f.x+(b*_.x+D*y.x),d.y=f.y+(b*_.y+D*y.y),d.z=f.z+(b*_.z+D*y.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),h.push(u.x,u.y,u.z),c.push(v/i),c.push(w/n)}}for(let v=1;v<=i;v++)for(let x=1;x<=n;x++){let w=(n+1)*(v-1)+(x-1),M=(n+1)*v+(x-1),b=(n+1)*v+x,D=(n+1)*(v-1)+x;o.push(w,M,D),o.push(M,b,D)}function m(v,x,w,M,b){let D=Math.cos(v),I=Math.sin(v),z=w/x*v,j=Math.cos(z);b.x=M*(2+j)*.5*D,b.y=M*(2+j)*I*.5,b.z=M*Math.sin(z)*.5}this.setIndex(o),this.setAttribute("position",new Ee(l,3)),this.setAttribute("normal",new Ee(h,3)),this.setAttribute("uv",new Ee(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},dl=class s extends je{constructor(e=new Kr(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,l=new R,h=new oe,c=new R,d=[],u=[],f=[],g=[];function y(p){c=e.getPointAt(p/t,c);let _=a.normals[p],m=a.binormals[p];for(let v=0;v<=n;v++){let x=v/n*Math.PI*2,w=Math.sin(x),M=-Math.cos(x);l.x=M*_.x+w*m.x,l.y=M*_.y+w*m.y,l.z=M*_.z+w*m.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+i*l.x,o.y=c.y+i*l.y,o.z=c.z+i*l.z,d.push(o.x,o.y,o.z)}}(function(){for(let p=0;p<t;p++)y(p);y(r===!1?t:0),function(){for(let p=0;p<=t;p++)for(let _=0;_<=n;_++)h.x=p/t,h.y=_/n,f.push(h.x,h.y)}(),function(){for(let p=1;p<=t;p++)for(let _=1;_<=n;_++){let m=(n+1)*(p-1)+(_-1),v=(n+1)*p+(_-1),x=(n+1)*p+_,w=(n+1)*(p-1)+_;g.push(m,v,w),g.push(v,x,w)}}()})(),this.setIndex(g),this.setAttribute("position",new Ee(d,3)),this.setAttribute("normal",new Ee(u,3)),this.setAttribute("uv",new Ee(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new $r[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},pl=class extends je{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,n=new R,r=new R;if(e.index!==null){let a=e.attributes.position,o=e.index,l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let h=0,c=l.length;h<c;++h){let d=l[h],u=d.start;for(let f=u,g=u+d.count;f<g;f+=3)for(let y=0;y<3;y++){let p=o.getX(f+y),_=o.getX(f+(y+1)%3);n.fromBufferAttribute(a,p),r.fromBufferAttribute(a,_),Kc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let h=0;h<3;h++){let c=3*o+h,d=3*o+(h+1)%3;n.fromBufferAttribute(a,c),r.fromBufferAttribute(a,d),Kc(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ee(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Kc(s,e,t){let i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)!==!0&&t.has(n)!==!0&&(t.add(i),t.add(n),!0)}var Hg=Object.freeze({__proto__:null,BoxGeometry:kt,CapsuleGeometry:tl,CircleGeometry:Gn,ConeGeometry:Vn,CylinderGeometry:yt,DodecahedronGeometry:il,EdgesGeometry:nl,ExtrudeGeometry:al,IcosahedronGeometry:ol,LatheGeometry:Qr,OctahedronGeometry:ll,PlaneGeometry:en,PolyhedronGeometry:tn,RingGeometry:Cs,ShapeGeometry:hl,SphereGeometry:Kt,TetrahedronGeometry:cl,TorusGeometry:ii,TorusKnotGeometry:ul,TubeGeometry:dl,WireframeGeometry:pl});var We=class extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ta=class extends We{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function wr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function um(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Wn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];t:{e:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break e}a=t.length;break i}if(e>=r)break t;{let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break e}a=i,i=0}}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends Wn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$h,endingEnd:$h}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qh:r=e,o=2*t-i;break;case ec:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Qh:a=e,l=2*i-t;break;case ec:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}let h=.5*(i-t),c=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=a*c}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),y=g*g,p=y*g,_=-u*p+2*u*y-u*g,m=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-f)*p+(1.5+f)*y+.5*g,x=f*p-f*y;for(let w=0;w!==o;++w)r[w]=_*a[c+w]+m*a[h+w]+v*a[l+w]+x*a[d+w];return r}},ml=class extends Wn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,h=l-o,c=(i-t)/(n-t),d=1-c;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[l+u]*c;return r}},gl=class extends Wn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},jt=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=wr(t,this.TimeBufferType),this.values=wr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:wr(e.times,Array),values:wr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new gl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case Rr:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(i);this.setInterpolation(this.DefaultInterpolation)}return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return Rr;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!=0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&um(n))for(let o=0,l=n.length;o!==l;++o){let h=n[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,h=e[o];if(h!==e[o+1]&&(o!==1||h!==e[0]))if(n)l=!0;else{let c=o*i,d=c-i,u=c+i;for(let f=0;f!==i;++f){let g=t[c+f];if(g!==t[d+f]||g!==t[u+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let c=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[c+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,h=0;h!==i;++h)t[l+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=new this.constructor(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};jt.prototype.TimeBufferType=Float32Array,jt.prototype.ValueBufferType=Float32Array,jt.prototype.DefaultInterpolation=Rr;var qi=class extends jt{};qi.prototype.ValueTypeName="bool",qi.prototype.ValueBufferType=Array,qi.prototype.DefaultInterpolation=Ar,qi.prototype.InterpolantFactoryMethodLinear=void 0,qi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends jt{};_l.prototype.ValueTypeName="color";var vl=class extends jt{};vl.prototype.ValueTypeName="number";var yl=class extends Wn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t),h=e*o;for(let c=h+o;h!==c;h+=4)ti.slerpFlat(r,0,a,h-o,a,h,l);return r}},vs=class extends jt{InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}};vs.prototype.ValueTypeName="quaternion",vs.prototype.DefaultInterpolation=Rr,vs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yi=class extends jt{};Yi.prototype.ValueTypeName="string",Yi.prototype.ValueBufferType=Array,Yi.prototype.DefaultInterpolation=Ar,Yi.prototype.InterpolantFactoryMethodLinear=void 0,Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var xl=class extends jt{};xl.prototype.ValueTypeName="vector";var Ml=class{constructor(e,t,i){let n=this,r,a=!1,o=0,l=0,h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){l++,a===!1&&n.onStart!==void 0&&n.onStart(c,o,l),a=!0},this.itemEnd=function(c){o++,n.onProgress!==void 0&&n.onProgress(c,o,l),o===l&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(c){n.onError!==void 0&&n.onError(c)},this.resolveURL=function(c){return r?r(c):c},this.setURLModifier=function(c){return r=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],g=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return g}return null}}},dm=new Ml,Sl=class{constructor(e){this.manager=e!==void 0?e:dm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ps=class extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}},ia=class extends Ps{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},So=new Ae,Jc=new R,$c=new R,bl=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fn,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Jc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),So.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(So),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(So)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Gg=new Ae,Vg=new R,Wg=new R;var wl=class extends bl{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},na=class extends Ps{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new wl}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},sa=class extends Ps{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Xg=new Ae,jg=new Ae,qg=new Ae;var Yg=new R,Zg=new ti,Kg=new R,Jg=new R;var $g=new R,Qg=new ti,e0=new R,t0=new R;var Ll="\\[\\]\\.:\\/",pm=new RegExp("["+Ll+"]","g"),bo="[^"+Ll+"]",fm="[^"+Ll.replace("\\.","")+"]",mm=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bo)+/(WCOD+)?/.source.replace("WCOD",fm)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bo)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bo)+"$"),gm=["material","materials","bones","map"],Xe=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){let t=mm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);gm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[i]===void 0)return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[i]}if(h!==void 0){if(e[h]===void 0)return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[h]}}let a=e[n];if(a===void 0){let h=t.nodeName;return void console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e)}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=class{constructor(s,e,t){let i=t||Xe.parseTrackName(e);this._targetGroup=s,this._bindings=s.subscribe_(e,i)}getValue(s,e){this.bind();let t=this._targetGroup.nCachedObjects_,i=this._bindings[t];i!==void 0&&i.getValue(s,e)}setValue(s,e){let t=this._bindings;for(let i=this._targetGroup.nCachedObjects_,n=t.length;i!==n;++i)t[i].setValue(s,e)}bind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].bind()}unbind(){let s=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=s.length;e!==t;++e)s[e].unbind()}},Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray],Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i0=new Float32Array(1);var n0=new oe;var s0=new R,r0=new R;var a0=new R;var o0=new R,l0=new Ae,h0=new Ae;var c0=new R,u0=new fe,d0=new fe;var p0=new R,f0=new R,m0=new R;var g0=new R,_0=new Ms;var v0=new qt;var y0=new R;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);var gi={accel:80,maxSpeed:15.5,boostMult:1.8,friction:3.2,wallRestitution:.18,airControl:.4},Dl={coin:3.2*.52,hole:3.2*.44,powerup:3.2*.6,hazard:.92,portal:3.2*.42},Il={coinFractionFor2:.5,coinFractionFor3:.999},Su=[{id:"meadow",name:"Sunny Meadow",floor:7652714,floorEdge:5544524,wall:10119744,wallTop:13212262,accent:16765498,sky:9426687,horizon:14349567,fog:.01,sun:16774880,sunInt:3,hemiSky:13496063,hemiGround:7323491,hemiInt:1.05,amb:.32,sig:"none",blurb:"Roll to the green hole."},{id:"canyon",name:"Red Canyon",floor:14853990,floorEdge:12091204,wall:11685680,wallTop:14711888,accent:16765567,sky:16764812,horizon:16771010,fog:.012,sun:16773330,sunInt:3.1,hemiSky:16769981,hemiGround:11565637,hemiInt:1,amb:.34,sig:"none",blurb:"Sun-baked rock and gold."},{id:"jungle",name:"Jungle Temple",floor:4170327,floorEdge:3045953,wall:7293484,wallTop:11111252,accent:16769610,sky:6737818,horizon:12775375,fog:.016,sun:16773839,sunInt:2.8,hemiSky:11594950,hemiGround:2907449,hemiInt:1.05,amb:.34,sig:"none",blurb:"Overgrown ruins."},{id:"candy",name:"Candy Rush",floor:16752326,floorEdge:14708896,wall:9263576,wallTop:12820735,accent:16773194,sky:16766702,horizon:16771830,fog:.012,sun:16777215,sunInt:2.8,hemiSky:16769009,hemiGround:15043776,hemiInt:1.1,amb:.4,sig:"none",blurb:"Sweet and bouncy."},{id:"ice",name:"Glacier Caves",floor:7319776,floorEdge:5213380,wall:15661055,wallTop:16777215,accent:4839167,sky:12575743,horizon:15135999,fog:.014,sun:15398655,sunInt:2.6,hemiSky:14348543,hemiGround:8828118,hemiInt:1.15,amb:.42,sig:"slippery",blurb:"Slick ice — ease off."},{id:"ocean",name:"Coral Reef",floor:1332846,floorEdge:932944,wall:2859202,wallTop:8382182,accent:3141840,sky:669008,horizon:1927820,fog:.02,sun:13497087,sunInt:2.2,hemiSky:4830927,hemiGround:799558,hemiInt:1.1,amb:.4,sig:"current",blurb:"Mind the current."},{id:"lava",name:"Lava Forge",floor:3021340,floorEdge:1641744,wall:8137762,wallTop:16738872,accent:16734762,sky:1838094,horizon:3937810,fog:.018,emissiveWorld:!0,sun:16756848,sunInt:2,hemiSky:6957598,hemiGround:1443849,hemiInt:.9,amb:.55,sig:"none",blurb:"Glowing forge."},{id:"neon",name:"Neon Grid",floor:1317440,floorEdge:790576,wall:2899094,wallTop:3866623,accent:2225151,sky:459796,horizon:1444400,fog:.018,emissiveWorld:!0,sun:10467071,sunInt:1.7,hemiSky:3816074,hemiGround:657440,hemiInt:.8,amb:.55,sig:"none",blurb:"Synthwave maze."},{id:"toxic",name:"Toxic Swamp",floor:3495466,floorEdge:2375708,wall:7114808,wallTop:11992924,accent:10223402,sky:6978106,horizon:11977850,fog:.02,emissiveWorld:!0,sun:15400896,sunInt:2.2,hemiSky:11977850,hemiGround:2375708,hemiInt:1,amb:.42,sig:"none",blurb:"Don’t drink the water."},{id:"space",name:"Orbital Station",floor:1447996,floorEdge:790054,wall:3820192,wallTop:12884735,accent:12159743,sky:328462,horizon:788770,fog:.016,emissiveWorld:!0,sun:14081279,sunInt:1.8,hemiSky:3817076,hemiGround:328462,hemiInt:.85,amb:.55,sig:"lowgrav",blurb:"Low gravity. Stay sharp."}],ca=3;function vm(s){return Math.floor((s-1)/ca)%Su.length}function Ls(s){return Su[vm(s)]}var bu=[{key:"coins",level:1,label:"Collect coins (bonus!)"},{key:"decoys",level:2,label:"Avoid the RED holes"},{key:"powerups",level:4,label:"Grab power-ups"},{key:"boostPads",level:5,label:"Speed pads — zoom!"},{key:"movingWalls",level:6,label:"Sliding walls"},{key:"bouncers",level:7,label:"Bouncers"},{key:"crawlers",level:8,label:"Toxic blobs are RED"},{key:"spikes",level:10,label:"Spike traps"},{key:"turrets",level:12,label:"Watch the shooters"},{key:"sizeZones",level:14,label:"Size gates"},{key:"rotators",level:17,label:"Spinning blades"}];function Ul(s){let e=new Set;for(let t of bu)s>=t.level&&e.add(t.key);return e}function Ds(s){return bu.find(e=>e.level===s)||null}var Di={magnet:{id:"magnet",name:"Coin Magnet",color:16764730,dur:7,icon:"",timed:!0,blurb:"Pulls coins in"},x2:{id:"x2",name:"2× Coins",color:16769357,dur:9,icon:"",timed:!0,blurb:"Double coins"},speed:{id:"speed",name:"Speed Surge",color:4837631,dur:5,icon:"",timed:!0,blurb:"Go faster"},slowmo:{id:"slowmo",name:"Slow-Mo",color:12159743,dur:5,icon:"",timed:!0,blurb:"Slow time"},shield:{id:"shield",name:"Shield",color:5111715,dur:10,icon:"",timed:!0,blurb:"Survive one hit"},bigfinish:{id:"bigfinish",name:"Big Finish",color:8060880,dur:10,icon:"",timed:!0,blurb:"Bigger goal"},shrink:{id:"shrink",name:"Mini Marble",color:10158079,dur:8,icon:"",timed:!0,blurb:"Squeeze through"},patchHoles:{id:"patchHoles",name:"Hole Patch",color:7070719,dur:7,icon:"",timed:!0,blurb:"Seals RED holes"},ghost:{id:"ghost",name:"Ghost",color:14083327,dur:5,icon:"",timed:!0,blurb:"Pass through walls"},freeze:{id:"freeze",name:"Time Freeze",color:9433087,dur:4,icon:"",timed:!0,blurb:"Hazards freeze"}},Nl=Object.keys(Di),Yn={fraction:.85,minFast:12,windowSec:3,durationSec:6,fillCount:60},Is={shield:{icon:"",label:"Extra Life",blurb:"Start each level shielded"},magnet:{icon:"",label:"Coin Pull",blurb:"Gentle passive coin magnet"},headstart:{icon:"",label:"Headstart",blurb:"+8% top speed"},lucky:{icon:"",label:"Lucky",blurb:"+15% coins earned"}},ua={common:{label:"Common",color:"#9aa6b2",order:0},rare:{label:"Rare",color:"#3fa9ff",order:1},epic:{label:"Epic",color:"#b06bff",order:2},legendary:{label:"Legendary",color:"#ffb02e",order:3}},Ii=[{id:"pearl",name:"Classic Swirl",rarity:"common",price:0,unlocked:!0,tex:"pearl",worldTint:.12,mat:{color:16777215,metalness:0,roughness:.28,clearcoat:.45,envInt:.55}},{id:"beach",name:"Beach Ball",rarity:"common",price:220,tex:"beach",mat:{color:16777215,metalness:0,roughness:.22,clearcoat:.8}},{id:"smiley",name:"Lava Lamp",rarity:"common",price:300,tex:"lavalamp",flow:.03,hueShift:.05,mat:{color:16777215,metalness:.15,roughness:.16,clearcoat:1,emissive:16734762,emissiveInt:.35}},{id:"donut",name:"Sprinkle Pop",rarity:"common",price:420,tex:"donut",mat:{color:16777215,metalness:0,roughness:.35,clearcoat:.4}},{id:"soccer",name:"Plasma Orb",rarity:"rare",price:700,tex:"plasma",flow:.11,hueShift:.13,mat:{color:16777215,metalness:.25,roughness:.12,clearcoat:1,emissive:5909247,emissiveInt:.5}},{id:"basket",name:"Boba Swirl",rarity:"rare",price:780,tex:"boba",flow:.025,mat:{color:16777215,metalness:.05,roughness:.2,clearcoat:.9}},{id:"eight",name:"8-Ball",rarity:"rare",price:880,tex:"eight",mat:{color:16777215,metalness:0,roughness:.2,clearcoat:.55}},{id:"melon",name:"Watermelon",rarity:"rare",price:950,tex:"melon",mat:{color:16777215,metalness:0,roughness:.34,clearcoat:.35}},{id:"disco",name:"Disco Ball",rarity:"epic",price:1600,tex:"disco",perk:"lucky",mat:{color:16777215,metalness:.95,roughness:.12}},{id:"panda",name:"Ink Drop",rarity:"epic",price:1800,tex:"ink",flow:.04,perk:"lucky",mat:{color:16777215,metalness:.05,roughness:.14,clearcoat:1}},{id:"globe",name:"Chameleon",rarity:"epic",price:2e3,tex:"chameleon",hueShift:.14,perk:"magnet",mat:{color:16777215,metalness:.55,roughness:.15,clearcoat:1,emissive:1722986,emissiveInt:.3}},{id:"magma",name:"Magma Core",rarity:"epic",price:2200,tex:"magma",perk:"headstart",mat:{color:16777215,metalness:.3,roughness:.55,emissive:16734740,emissiveInt:.55}},{id:"gold",name:"Solid Gold",rarity:"legendary",price:3600,tex:"gold",perk:"lucky",mat:{color:16777215,tint:16766826,metalness:1,roughness:.18}},{id:"saturn",name:"Lil Planet",rarity:"legendary",price:4200,tex:"planet",ring:!0,perk:"magnet",mat:{color:16777215,metalness:.15,roughness:.45}},{id:"galaxy",name:"Galaxy",rarity:"legendary",price:4800,tex:"galaxy",perk:"headstart",mat:{color:16777215,metalness:.35,roughness:.28,clearcoat:1,emissive:3807882,emissiveInt:.3}},{id:"rainbow",name:"Aurora",rarity:"legendary",price:5600,tex:"aurora",rainbow:!0,perk:"shield",mat:{color:16777215,metalness:.35,roughness:.1,clearcoat:1,emissive:1731192,emissiveInt:.35}},{id:"diamond",name:"Diamond",rarity:"legendary",price:6400,tex:"diamond",perk:"shield",mat:{color:16777215,metalness:.25,roughness:.05,clearcoat:1,emissive:7321824,emissiveInt:.15}}],Ui=[{id:"none",name:"No Trail",price:0,unlocked:!0,color:16777215},{id:"spark",name:"Sparkles",price:260,color:16774056,color2:16754222,size:.5,spread:.34,rise:1.1,gravity:1.6,decay:2,twinkle:1},{id:"neon",name:"Neon Streak",price:480,color:10157311,color2:683007,size:1.15,spread:.05,rise:0,decay:1.5,drag:3},{id:"bubble",name:"Bubbles",price:620,color:14219007,color2:4830975,size:.85,spread:.42,rise:1.5,gravity:-.2,decay:1.1,drag:.7,soft:!0},{id:"fire",name:"Fire Tail",price:760,color:16773280,color2:16722442,size:1,spread:.26,rise:1.7,gravity:-.6,decay:2.4,drag:1.9},{id:"frost",name:"Frost Dust",price:1e3,color:16777215,color2:7329023,size:.55,spread:.5,rise:.2,gravity:1.1,decay:1.2,drag:.8,twinkle:.8},{id:"void",name:"Stardust",price:1400,color:16770815,color2:8006399,size:.7,spread:.55,rise:.6,gravity:.2,decay:.95,drag:.5,twinkle:.9},{id:"rainbow",name:"Rainbow",price:1900,color:16711935,rainbow:!0,size:1,spread:.2,rise:.5,decay:1.4,drag:1.2}],Ct={coinValue:1,finishBonus:s=>18+s*3,perfectBonus:50,daily:[50,75,100,150,200,300,500],dailySkinAt:7,chestEvery:3,chestCoins:s=>40+s*6},Ol={small:{cols:[4,6],rows:[4,5]},medium:{cols:[7,9],rows:[6,8]},large:{cols:[10,12],rows:[8,10]},huge:{cols:[13,16],rows:[10,12]}},Us=["small","medium","large","huge"],Zn={chill:{label:"Chill",bias:-260,k:28},normal:{label:"Normal",bias:0,k:64},hard:{label:"Hard",bias:220,k:64},expert:{label:"Expert",bias:460,k:80}};var $e={startSkill:1e3,K:64,targetWinProb:.6,offsetEasy:-80,offsetHard:180,diffMin:780,diffMax:2600,churn:{deathStreak2:22,deathStreak3:40,quickDeath:18,idle5s:16,pausedMidLevel:10,repeatedSpot:20,longLoseStreak:30,tabBlur:14,recentWin:-28,newMechanic:-16,reward:-14,closeLoss:-8,perfect:-20}};function da(s,e,t,i=t){let n=p=>p*t,r=p=>p*i,a=p=>s.fillStyle=p,o=p=>{a(p),s.fillRect(0,0,t,i)},l=(p,_,m,v,x)=>{a(x),s.beginPath(),s.ellipse(p,_,m,v,0,0,7),s.fill()},h=(p,_)=>{a(p),s.fillRect(0,0,t,r(_)),s.fillRect(0,i-r(_),t,r(_))},c=(p,_)=>{for(let m=0;m<p;m++)_(n((m+.5)/p),m)},d=2166136261;for(let p=0;p<e.length;p++)d=Math.imul(d^e.charCodeAt(p),16777619)>>>0;let u=()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296),f=(p,_,m,v,x=0,w=1)=>{for(let M=0;M<p;M++){let b=r(x+u()*(w-x)),D=Math.max(.25,Math.sin(b/i*Math.PI)),I=r(_+u()*(m-_));l(u()*t,b,I/D,I,v[u()*v.length|0])}},g=(p,_,m,v,x)=>{s.strokeStyle=v,s.lineCap="round",s.lineJoin="round";for(let w=0;w<p;w++){let M=u()*t,b=r(.12+u()*.76),D=u()*7;s.lineWidth=m*(.6+u()*.8),s.beginPath(),s.moveTo(M,b);for(let I=0;I<_;I++)D+=(u()-.5)*x,M+=Math.cos(D)*r(.05),b+=Math.sin(D)*r(.035),s.lineTo(M,b);s.stroke()}},y=(p,_)=>{let m=s.createLinearGradient(0,0,0,i);m.addColorStop(0,p),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,_),a(m),s.fillRect(0,0,t,i)};switch(e){case"pearl":{let p=(I,z=0,j=0)=>{let C=s.createLinearGradient(0,r(z),t,r(j));return I.forEach((B,H)=>C.addColorStop(H/(I.length-1),B)),C},_=(I,z,j)=>{let C=[];for(let B=0;B<=96;B++){let H=B/96;C.push([n(H),r(I+Math.sin(H*Math.PI*2+j)*z)])}return C},m=(I,z,j,C)=>{s.globalAlpha=C,s.strokeStyle=z,s.lineWidth=j,s.lineCap="round",s.lineJoin="round",s.beginPath();for(let[B,H]of I)s.lineTo(B,H);s.stroke(),s.globalAlpha=1},v=s.createLinearGradient(0,0,0,i);v.addColorStop(0,"#bfe6ff"),v.addColorStop(.28,"#6fb4f5"),v.addColorStop(.62,"#3f6fd8"),v.addColorStop(1,"#223f8f"),a(v),s.fillRect(0,0,t,i),s.globalAlpha=.34,a(p(["#63e8ff","#8f7bff","#ff7cc4","#5cf0cf","#63e8ff"],.15,.85)),s.fillRect(0,0,t,i),s.globalAlpha=1;let x=p(["#5ff0ff","#7ea8ff","#c07bff","#ff74b8","#5ff0ff"]),w=_(.5,.32,0);m(w,"rgba(18,34,74,.34)",r(.3),1);for(let I=3;I>=1;I--)m(w,x,r(.17)*(1+I*.45),.12);m(w,x,r(.17),1),m(w,p(["rgba(255,255,255,.95)","rgba(232,250,255,.85)","rgba(255,255,255,.95)"]),r(.045),.95);let M=_(.5,.29,Math.PI);m(M,p(["#9ff0ff","#cbb0ff","#ffb8dc","#9ff0ff"]),r(.085),.26);let b=s.createLinearGradient(0,0,0,r(.22));b.addColorStop(0,"rgba(255,255,255,.42)"),b.addColorStop(1,"rgba(255,255,255,0)"),a(b),s.fillRect(0,0,t,r(.22));let D=s.createLinearGradient(0,r(.64),0,i);D.addColorStop(0,"rgba(14,26,62,0)"),D.addColorStop(1,"rgba(12,22,56,.55)"),a(D),s.fillRect(0,r(.64),t,r(.36));break}case"beach":{let p=["#ff4d6d","#ffd23a","#2fc4ff","#4ed17a","#b06bff","#ff8a3d"];for(let _=0;_<p.length;_++)a(p[_]),s.fillRect(n(_/p.length),0,n(1/p.length)+1,i);h("#fdfdff",.085),y("rgba(255,255,255,.35)","rgba(0,0,40,.22)");break}case"lavalamp":{o("#2a0f3a");for(let _=0;_<18;_++){let m=s.createRadialGradient(u()*t,r(.5),0,u()*t,r(.5),r(.5));m.addColorStop(0,"rgba(120,30,140,.5)"),m.addColorStop(1,"rgba(0,0,0,0)"),a(m),s.fillRect(0,0,t,i)}let p=["#ff5a2a","#ff8a2a","#ff3d7a","#ffc247"];for(let _=0;_<16;_++){let m=u()*t,v=r(.12+u()*.76),x=Math.max(.35,Math.sin(v/i*Math.PI)),w=r(.08+u()*.14),M=w*(.5+u()*.3)/x,b=p[u()*p.length|0],D=s.createRadialGradient(m,v-w*.3,0,m,v,w*1.5);D.addColorStop(0,"#ffe9a8"),D.addColorStop(.42,b),D.addColorStop(1,"rgba(255,60,20,0)"),a(D),s.beginPath(),s.ellipse(m,v,M*1.5,w*1.5,0,0,7),s.fill(),l(m,v,M,w,b)}f(40,.004,.012,["rgba(255,220,140,.7)"]);break}case"donut":{o("#ff9fc4"),a("#fff0dc"),s.beginPath(),s.moveTo(0,r(.62));for(let p=0;p<=28;p++)s.lineTo(n(p/28),r(.62+Math.sin(p*.9)*.045));s.lineTo(t,i),s.lineTo(0,i),s.closePath(),s.fill(),f(80,.012,.02,["#ff4d6d","#ffd23a","#2fc4ff","#4ed17a","#b06bff","#ffffff"],.1,.62),h("#ffc2da",.06),y("rgba(255,255,255,.4)","rgba(140,60,90,.28)");break}case"plasma":{o("#0b0526");for(let p=0;p<22;p++){let _=u()*t,m=r(.2+u()*.6),v=s.createRadialGradient(_,m,0,_,m,n(.16));v.addColorStop(0,["rgba(80,200,255,.55)","rgba(180,90,255,.5)","rgba(255,80,210,.4)"][u()*3|0]),v.addColorStop(1,"rgba(0,0,0,0)"),a(v),s.fillRect(0,0,t,i)}s.lineCap="round",s.lineJoin="round";for(let p=0;p<26;p++){let _=u()*t,m=r(.12+u()*.76),v=u()*7,x=["#7ae4ff","#c58cff","#ff8ae0"][u()*3|0];s.strokeStyle=x,s.lineWidth=r(.016),s.beginPath(),s.moveTo(_,m);for(let w=0;w<14;w++)v+=(u()-.5)*2.2,_+=Math.cos(v)*r(.055),m+=Math.sin(v)*r(.03),s.lineTo(_,m);s.stroke(),s.strokeStyle="rgba(255,255,255,.85)",s.lineWidth=r(.005),s.stroke()}f(70,.003,.008,["rgba(200,240,255,.9)"]);break}case"boba":{let p=s.createLinearGradient(0,0,0,i);p.addColorStop(0,"#ffe7cf"),p.addColorStop(.45,"#f0c49a"),p.addColorStop(1,"#c98a5e"),a(p),s.fillRect(0,0,t,i);for(let _=0;_<14;_++){let m=r(.1+u()*.8),v=Math.max(.35,Math.sin(m/i*Math.PI));s.strokeStyle="rgba(255,248,238,.5)",s.lineWidth=r(.05+u()*.06),s.beginPath();for(let x=0;x<=30;x++)s.lineTo(n(x/30),m+Math.sin(x*.5+_)*r(.035)/v);s.stroke()}for(let _=0;_<34;_++){let m=r(.14+u()*.72),v=Math.max(.35,Math.sin(m/i*Math.PI)),x=r(.026+u()*.022),w=u()*t;l(w,m,x/v,x,"#2e1a12"),l(w-x*.3/v,m-x*.32,x*.3/v,x*.28,"rgba(255,230,200,.45)")}y("rgba(255,250,240,.4)","rgba(90,50,20,.35)");break}case"eight":{o("#0c0c0f");for(let p=0;p<40;p++){let _=s.createRadialGradient(u()*t,u()*i,0,u()*t,r(.5),r(.5));_.addColorStop(0,"rgba(120,140,180,.07)"),_.addColorStop(1,"rgba(0,0,0,0)"),a(_),s.fillRect(0,0,t,i)}c(2,p=>{l(p,r(.5),n(.085),r(.17),"#fbfbfd"),a("#0c0c0f"),s.font=`bold ${r(.22)}px Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle",s.fillText("8",p,r(.52))}),y("rgba(255,255,255,.22)","rgba(0,0,0,.4)");break}case"melon":{o("#2f9147");for(let p=0;p<12;p++){a(p%2?"#1c6b33":"#49b45c"),s.beginPath();let _=n(p/12);s.moveTo(_,0);for(let m=0;m<=16;m++)s.lineTo(_+Math.sin(m*1.3)*n(.012)+n(.026),r(m/16));for(let m=16;m>=0;m--)s.lineTo(_+Math.sin(m*1.3)*n(.012)-n(.012),r(m/16));s.closePath(),s.fill()}h("#256f37",.05),y("rgba(210,255,215,.3)","rgba(0,40,10,.35)");break}case"disco":{for(let m=0;m<13;m++)for(let v=0;v<26;v++){let x=u();a(x>.9?"#ffffff":x>.72?"#dfe9ff":x>.4?"#9fb0cc":"#6d7d99"),s.fillRect(v*(t/26),m*(i/13),t/26-1,i/13-1)}y("rgba(255,255,255,.4)","rgba(10,20,50,.4)");break}case"ink":{o("#f4f6fa");let p=["#ff5a2a","#ff2d6a","#ffb02e","#12324a"];for(let _=0;_<9;_++){let m=p[_%p.length],v=.14+u()*.72;s.strokeStyle=m,s.lineCap="round",s.lineJoin="round",s.lineWidth=r(.03+u()*.075),s.beginPath();let x=.05+u()*.1,w=u()*7,M=.22+u()*.3;for(let b=0;b<=60;b++)s.lineTo(n(b/60),r(v+Math.sin(b*M+w)*x));s.stroke(),s.strokeStyle="rgba(255,255,255,.35)",s.lineWidth=r(.012),s.beginPath();for(let b=0;b<=60;b++)s.lineTo(n(b/60),r(v-.022+Math.sin(b*M+w)*x));s.stroke()}f(46,.006,.018,["rgba(255,90,42,.5)","rgba(18,50,74,.4)","rgba(255,45,106,.4)"]),y("rgba(255,255,255,.4)","rgba(40,60,90,.32)");break}case"chameleon":{let p=s.createLinearGradient(0,0,t,0),_=["#00e0a8","#00c2ff","#7a4dff","#ff3fb4","#ffb52e","#00e0a8"];_.forEach((w,M)=>p.addColorStop(M/(_.length-1),w)),a(p),s.fillRect(0,0,t,i);let m=s.createLinearGradient(0,0,0,i);m.addColorStop(0,"rgba(255,255,255,.34)"),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(10,0,40,.4)"),a(m),s.fillRect(0,0,t,i);let v=13,x=30;for(let w=0;w<v;w++)for(let M=0;M<x;M++){let b=(M+(w%2?.5:0))*(t/x),D=(w+.5)*(i/v),I=u();s.fillStyle=I>.7?"rgba(255,255,255,.22)":I>.42?"rgba(0,0,0,.16)":"rgba(255,255,255,.05)",s.beginPath(),s.ellipse(b,D,t/x*.62,i/v*.52,0,0,Math.PI),s.fill(),s.strokeStyle="rgba(0,0,0,.18)",s.lineWidth=r(.004),s.stroke()}break}case"magma":{o("#221012"),f(150,.008,.026,["#170b0d","#2e181a","#3a1f1c"]),g(16,30,r(.03),"rgba(255,92,20,.95)",.9),g(16,30,r(.014),"rgba(255,205,90,.95)",.9);for(let p=0;p<16;p++){let _=u()*t,m=r(.12+u()*.76),v=s.createRadialGradient(_,m,0,_,m,r(.16));v.addColorStop(0,"rgba(255,180,60,.75)"),v.addColorStop(1,"rgba(255,60,0,0)"),a(v),s.fillRect(0,0,t,i)}break}case"gold":{o("#f6bb35");for(let p=0;p<40;p++){a(["rgba(255,232,160,.55)","rgba(214,158,40,.30)","rgba(255,250,220,.45)"][u()*3|0]);let _=r(u());s.fillRect(0,_,t,r(.006+u()*.02))}h("#ffeaa6",.05),y("rgba(255,253,232,.65)","rgba(190,130,25,.22)");break}case"planet":{let p=["#e7c48c","#cfa762","#f0d7a6","#b98a4a","#dcb87a","#c69a55"],_=0;for(let m=0;_<i;m++){let v=r(.045+u()*.06);a(p[m%p.length]),s.fillRect(0,_,t,v+1),_+=v}for(let m=0;m<40;m++)a("rgba(255,255,255,.10)"),s.fillRect(0,r(u()),t,r(.006));l(n(.32),r(.62),n(.075),r(.06),"#a9682c"),l(n(.32),r(.62),n(.05),r(.038),"#c98a46"),y("rgba(255,245,220,.35)","rgba(60,35,0,.4)");break}case"galaxy":{o("#0d0722");for(let p=0;p<26;p++){let _=u()*t,m=r(.2+u()*.6),v=s.createRadialGradient(_,m,0,_,m,n(.14));v.addColorStop(0,["rgba(150,90,255,.5)","rgba(60,140,255,.45)","rgba(255,90,190,.4)"][u()*3|0]),v.addColorStop(1,"rgba(0,0,0,0)"),a(v),s.fillRect(0,0,t,i)}for(let p=0;p<3;p++)for(let _=0;_<150;_++){let m=_/150,v=(n(p/3)+n(m*.55)+Math.sin(m*6)*n(.02))%t,x=r(.5+Math.sin(m*3.4+p)*.26);a(_%6?"rgba(255,255,255,.9)":"rgba(180,140,255,.9)");let w=r(.004+u()*.008);s.beginPath(),s.arc(v,x,w,0,7),s.fill()}f(160,.003,.007,["rgba(255,255,255,.85)","rgba(190,210,255,.7)"]);break}case"aurora":{o("#07202c");for(let p=0;p<7;p++){let _=.12+p*.11,m=["rgba(47,240,208,.55)","rgba(90,200,255,.5)","rgba(160,110,255,.45)","rgba(255,120,200,.35)"][p%4],v=s.createLinearGradient(0,r(_-.09),0,r(_+.09));v.addColorStop(0,"rgba(0,0,0,0)"),v.addColorStop(.5,m),v.addColorStop(1,"rgba(0,0,0,0)"),a(v),s.beginPath(),s.moveTo(0,r(_));for(let x=0;x<=48;x++)s.lineTo(n(x/48),r(_+Math.sin(x*.42+p)*.045));s.lineTo(t,r(_+.1)),s.lineTo(0,r(_+.1)),s.closePath(),s.fill()}f(90,.003,.007,["rgba(255,255,255,.8)"]);break}case"diamond":{o("#dff0ff");let p=20,_=10;for(let m=0;m<_;m++)for(let v=0;v<p;v++){let x=u();a(x>.85?"#ffffff":x>.6?"#eaf7ff":x>.3?"#c2e0f7":"#a8cfee");let w=v*(t/p),M=m*(i/_);s.beginPath(),s.moveTo(w+t/p/2,M),s.lineTo(w+t/p,M+i/_/2),s.lineTo(w+t/p/2,M+i/_),s.lineTo(w,M+i/_/2),s.closePath(),s.fill(),s.strokeStyle="rgba(255,255,255,.8)",s.lineWidth=r(.006),s.stroke()}y("rgba(255,255,255,.65)","rgba(80,140,200,.35)");break}default:o("#cccccc")}}var pa=16.666666666666668,ym=1e3/50,fa=class{constructor(e,t={}){this.knobs=e,this.byId=new Map(e.map(i=>[i.id,i])),this.level=new Map(e.map(i=>[i.id,0])),this.order=e.slice().sort((i,n)=>n.gain/n.cost-i.gain/i.cost),this.reduced=[],this.blocked=new Map,this.locked=new Map,this.active=!1,this.budget=t.budget||1e3/60,this._acc=0,this._n=0,this._slow=0,this._elapsed=0,this._good=0,this._nextStepAt=0,this._trial=null,this._lastAvg=0}setBudget(e){this.budget=e}setActive(e){this.active=e,this._acc=this._n=this._slow=this._elapsed=0,this._good=0,this._trial=null,this._nextStepAt=0}applyAll(e){for(let t of this.knobs){let i=Math.max(0,Math.min(t.steps-1,e?.[t.id]??0));this.level.set(t.id,i),t.apply(i)}this.reduced=[]}reset(){for(let e of this.knobs)this.level.set(e.id,0),e.apply(0);this.reduced=[],this.blocked.clear(),this.locked.clear(),this._trial=null,this._good=0}sample(e,t){if(!this.active||e>250||(this._acc+=e,this._n++,this._elapsed+=e,e>this.budget*1.35&&this._slow++,this._elapsed<1e3))return;let i=this._acc/this._n,n=this._slow/this._n;if(this._acc=this._n=this._slow=this._elapsed=0,this._trial){this._resolveTrial(i,t),this._lastAvg=i;return}let r=n>.22||i>this.budget*1.12,a=n<.05&&i<this.budget*.82;r?(this._good=0,t>=this._nextStepAt&&this._stepDown(i,t)):a?++this._good>=6&&(this._good=0,this._stepUp(t)):this._good=0,this._lastAvg=i}_stepDown(e,t){for(let i of this.order){let n=this.level.get(i.id);if(!(n>=i.steps-1)&&!((this.blocked.get(i.id)||0)>t)){this.level.set(i.id,n+1),i.apply(n+1),this.reduced.push(i.id),this._trial={id:i.id,before:e,left:2,acc:0,n:0},this._nextStepAt=t+1500;return}}}_resolveTrial(e,t){let i=this._trial;if(i.acc+=e,i.n++,--i.left>0)return;let n=i.acc/i.n,r=(i.before-n)/i.before;if(this._trial=null,r<.03){let a=this.byId.get(i.id),o=this.level.get(i.id);o>0&&(this.level.set(i.id,o-1),a.apply(o-1));let l=this.reduced.lastIndexOf(i.id);l>=0&&this.reduced.splice(l,1),this.blocked.set(i.id,t+3e4),this._nextStepAt=t}}_stepUp(e){for(let t=this.reduced.length-1;t>=0;t--){let i=this.reduced[t];if((this.locked.get(i)||0)>e)continue;let n=this.byId.get(i),r=this.level.get(i);if(r<=0){this.reduced.splice(t,1);continue}this.level.set(i,r-1),n.apply(r-1),this.reduced.splice(t,1),this.locked.set(i,e+9e4),this._nextStepAt=e+1500;return}}report(){let e={};for(let t of this.knobs)e[t.id]=this.level.get(t.id);return e}};function wu(s){let e=0,t=0,i=1/0,n=r=>{if(t){let a=r-t;a>4&&a<i&&(i=a)}t=r,++e<24?requestAnimationFrame(n):s(Math.min(ym,Math.max(pa,i===1/0?pa:i)))};requestAnimationFrame(n)}var Eu=46,C0=new R(0,1,0),Mm=new R,ga=class{constructor(e){this.canvas=e,this.cb={},this.state="idle",this.level=null,this.timeScale=1,this.clockMs=0,this._t=0,this.activePowerups=new Map,this.coinsCollected=0,this.combo=0,this.comboTimer=0,this.shield=!1,this.radius=.95,this.baseRadius=.95,this.skinDef=null,this.trailDef=null,this.forgive=0,this.wallsPhased=!1,this.phaseAmt=0,this.holesPatched=!1,this.gold={active:!1,timer:0,times:[],coins:[]},this.idleTimer=0,this._idleFired=!1,this.qmode="auto",this.pBudget=700,this._trailBudget=46,this._fxOff=!1,this._sizeTick=0,this._hudAcc=0,this._arrowAcc=0,this._initRenderer(),this._initScene(),this._initParticles(),this._initPerf(),this._geo={},this._texCache={},this._mbLru=[],this.levelGroup=new ct,this.scene.add(this.levelGroup),window.addEventListener("resize",this._onResize),window.addEventListener("orientationchange",this._onResize),typeof ResizeObserver<"u"&&(this._ro=new ResizeObserver(this._onResize),this._ro.observe(this.canvas))}setCallbacks(e){this.cb=e||{}}_initRenderer(){let e=new Ss({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.setSize(this.canvas.clientWidth||window.innerWidth,this.canvas.clientHeight||window.innerHeight,!1),e.outputColorSpace=Ze,e.toneMapping=Tl,e.toneMappingExposure=1.08,e.shadowMap.enabled=!0,e.shadowMap.type=El,this.renderer=e,this.shadowSize=1024}_initScene(){this.scene=new Wr,this.camera=new bt(52,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,26,20),this.camera.lookAt(0,0,0),this.camTarget=new R,this.camPos=new R(0,26,20),this.hemi=new ia(16777215,4473924,1),this.scene.add(this.hemi),this.sun=new na(16777215,2.6),this.sun.position.set(18,42,22),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(this.shadowSize,this.shadowSize),this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.02,this.scene.add(this.sun),this.scene.add(this.sun.target),this.fill=new sa(16777215,.34),this.scene.add(this.fill),this.skyMat=new Zt({side:_t,depthWrite:!1,fog:!1,uniforms:{top:{value:new fe(10477823)},bottom:{value:new fe(14677759)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} ",fragmentShader:`varying vec3 vP; uniform vec3 top; uniform vec3 bottom;
        void main(){ float h = clamp(normalize(vP).y*0.5+0.5,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,0.65)),1.0);} `});let e=new xe(new Kt(1,24,16),this.skyMat);e.scale.setScalar(500),e.frustumCulled=!1,e.renderOrder=-1,this.scene.add(e),this.scene.fog=null}geo(e,t){return this._geo[e]||(this._geo[e]=t())}_own(e){return e.userData=e.userData||{},e.userData._own=!0,e}_wallGeo(e){let t=new kt(3.2,2.5,3.2);t.userData={_own:!0};let i=t.attributes&&t.attributes.position;if(i){let n=new fe(e.wall),r=new fe(e.wallTop),a=i.count,o=new Float32Array(a*3);for(let l=0;l<a;l++){let h=l>=8&&l<=11?r:n;o[l*3]=h.r,o[l*3+1]=h.g,o[l*3+2]=h.b}t.setAttribute("color",new st(o,3))}return t}_applyPerks(e){this.perkMagnet=!1,this.speedPerk=1,this.coinPerk=1;let t=e&&e.perk;t==="shield"?this.shield=!0:t==="magnet"?this.perkMagnet=!0:t==="headstart"?this.speedPerk=1.16:t==="lucky"&&(this.coinPerk=1.2)}_makeEnvCube(e){let t=[],i=new fe(e.sky),n=new fe(e.floorEdge),r=new fe(e.horizon);for(let o=0;o<6;o++){let l=document.createElement("canvas");l.width=l.height=64;let h=l.getContext("2d");if(o===2)h.fillStyle="#"+i.getHexString(),h.fillRect(0,0,64,64);else if(o===3)h.fillStyle="#"+n.getHexString(),h.fillRect(0,0,64,64);else{let c=h.createLinearGradient(0,0,0,64);c.addColorStop(0,"#"+i.getHexString()),c.addColorStop(.55,"#"+r.getHexString()),c.addColorStop(1,"#"+n.getHexString()),h.fillStyle=c,h.fillRect(0,0,64,64)}t.push(l)}let a=new Bn(t);return a.colorSpace=Ze,a.needsUpdate=!0,a}tileWorld(e,t){return{x:(e-(this.level.gw-1)/2)*3.2,z:(t-(this.level.gh-1)/2)*3.2}}worldTile(e,t){return{tx:Math.round(e/3.2+(this.level.gw-1)/2),ty:Math.round(t/3.2+(this.level.gh-1)/2)}}isWall(e,t){let i=this.level.grid;return t<0||e<0||t>=this.level.gh||e>=this.level.gw?!0:i[t][e]===1}_clearLevel(){for(this.levelGroup.traverse(e=>{e.geometry&&e.userData._own&&e.geometry.dispose(),e.material&&e.userData._own&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{t.map?.dispose?.(),t.dispose()})});this.levelGroup.children.length;)this.levelGroup.remove(this.levelGroup.children[0]);this.envCube&&(this.envCube.dispose?.(),this.envCube=null)}loadLevel(e,t,i){this._clearLevel(),this.level=e,this.skinDef=t,this.trailDef=i;let n=e.world;this.forgive=e.forgive||0,this.envCube=this._makeEnvCube(n),this.scene.environment=this.envCube,this.skyMat.uniforms.top.value.set(n.sky),this.skyMat.uniforms.bottom.value.set(n.horizon),this.renderer.setClearColor(new fe(n.horizon),1),this.hemi.color.set(n.hemiSky),this.hemi.groundColor.set(n.hemiGround),this.hemi.intensity=n.hemiInt,this.sun.color.set(n.sun),this.sun.intensity=n.sunInt,this.fill.intensity=n.amb??.34;let r=Math.max(e.gw/2*3.2+3.2,e.gh/2*3.2+3.2),a=this.sun.shadow.camera;a.left=-r,a.right=r,a.top=r,a.bottom=-r,a.near=1,a.far=180,a.updateProjectionMatrix();let o=e.gw*3.2,l=e.gh*3.2,h=new xe(this._own(new kt(o,1.5,l)),this._own(new We({color:n.floor,roughness:.95})));h.position.y=-.75,h.receiveShadow=!0,this.levelGroup.add(h);let c=new xe(this._own(new kt(o+3.2*.6,3.6,l+3.2*.6)),this._own(new We({color:n.floorEdge,roughness:1})));c.position.y=-2.6,c.receiveShadow=!0,this.levelGroup.add(c),this.wallGroup=new ct,this.levelGroup.add(this.wallGroup);let d=[];this.openTiles=[];for(let _=0;_<e.gh;_++)for(let m=0;m<e.gw;m++){if(e.grid[_][m]===0){this.openTiles.push({tx:m,ty:_});continue}let v=!1;for(let[x,w]of[[0,-1],[1,0],[0,1],[-1,0]]){let M=m+x,b=_+w;if(M<0||b<0||M>=e.gw||b>=e.gh||e.grid[b][M]===0){v=!0;break}}v&&d.push([m,_])}let u=this._wallGeo(n),f=this._own(new We({vertexColors:!0,roughness:.75,metalness:n.emissiveWorld?.2:.04,emissive:new fe(n.emissiveWorld?n.wall:0),emissiveIntensity:n.emissiveWorld?.22:0})),g=new jr(u,f,d.length);g.castShadow=!0,g.receiveShadow=!0;let y=new Ae;d.forEach(([_,m],v)=>{let x=this.tileWorld(_,m);y.makeTranslation(x.x,2.5/2,x.z),g.setMatrixAt(v,y)}),g.instanceMatrix.needsUpdate=!0,this.wallGroup.add(g),this.finishMesh=this._makeHole(e.finish,!0,n),this.decoyMeshes=(e.decoys||[]).map(_=>this._makeHole(_,!1,n)),this.coins=(e.coins||[]).map(_=>this._makeCoin(_)),this.coinsCollected=0,this.boostPads=(e.boostPads||[]).map(_=>this._makeBoostPad(_,n)),this.bouncers=(e.bouncers||[]).map(_=>this._makeBouncer(_)),this.crawlers=(e.crawlers||[]).map(_=>this._makeCrawler(_)),this.spikes=(e.spikes||[]).map(_=>this._makeSpike(_)),this.turrets=(e.turrets||[]).map(_=>this._makeTurret(_,n)),this.projectiles=[],this.sizeZones=(e.sizeZones||[]).map(_=>this._makeSizeZone(_)),this.rotators=(e.rotators||[]).map(_=>this._makeRotator(_)),this.movers=(e.movingWalls||[]).map(_=>this._makeMover(_)),this.powerups=(e.powerups||[]).map(_=>this._makePowerup(_)),this._makeMarble(t,i);let p=this.tileWorld(e.start.tx,e.start.ty);this.radius=.95,this.baseRadius=.95,this.marble.position.set(p.x,.95,p.z),this.marble.scale.setScalar(1),this.vel={x:0,z:0},this.activePowerups.clear(),this.shield=!1,this.timeScale=1,this.clockMs=0,this.combo=0,this.comboTimer=0,this.wallsPhased=!1,this.phaseAmt=0,this.wallGroup.position.y=0,this.holesPatched=!1,this.ghost=!1,this.freeze=!1,this._setMarbleGhost(!1),this.gold={active:!1,timer:0,times:[],coins:[],used:!1},this.idleTimer=0,this._idleFired=!1,this.launchTimer=0,this._applyPerks(t),this._updateCameraImmediate(),this._fall=null,this._resolved=!1,this._boosting=!1,this.state="idle"}revive(){let e=this.level.safe,t=null,i=1/0;for(let r of e){let[a,o]=r.split(",").map(Number),l=this.tileWorld(a,o),h=Math.hypot(l.x-this.marble.position.x,l.z-this.marble.position.z);h<i&&(i=h,t=l)}let n=t||this.tileWorld(this.level.start.tx,this.level.start.ty);this.marble.position.set(n.x,.95,n.z),this.marble.scale.setScalar(this.radius/this.baseRadius),this.vel={x:0,z:0},this._fall=null,this._resolved=!1,this.shield=!0,this.activePowerups.set("shield",2.6),this.cb.onPowerups?.(this._activeList()),this.state="playing"}_makeHole(e,t,i){let n=new ct,r=this.tileWorld(e.tx,e.ty);n.position.set(r.x,0,r.z);let a=3.2*.42,o=new xe(this.geo("pit",()=>new yt(1,.6,6,22,1,!0)),this._own(new ut({color:329484,side:Xn})));o.scale.set(a,1,a),o.position.y=-3,n.add(o);let l=new xe(this.geo("disc",()=>new Gn(1,28)),this._own(new ut({color:t?203538:1704710})));l.rotation.x=-Math.PI/2,l.position.y=.02,l.scale.setScalar(a),n.add(l);let h=t?2883486:16722731,c=new xe(this.geo("rim",()=>new ii(1,.14,12,30)),this._own(new We({color:h,emissive:h,emissiveIntensity:t?1.3:1,roughness:.35})));if(c.rotation.x=-Math.PI/2,c.position.y=.06,c.scale.setScalar(a),n.add(c),t){let d=new xe(this.geo("beam",()=>new yt(.82,1,26,22,1,!0)),this._own(new ut({color:2883486,transparent:!0,opacity:.22,side:Xn,depthWrite:!1})));d.position.y=13,d.scale.set(a,1,a),n.add(d);let u=new xe(this.geo("rim2",()=>new ii(1.35,.06,10,30)),this._own(new ut({color:16777215,transparent:!0,opacity:.6})));u.rotation.x=-Math.PI/2,u.position.y=.08,u.scale.setScalar(a),n.add(u),n.userData.beam=d,n.userData.ring2=u}else{let d=new xe(this.geo("warn",()=>new Cs(1.05,1.5,28)),this._own(new ut({color:16722731,transparent:!0,opacity:.4,side:Xn,depthWrite:!1})));d.rotation.x=-Math.PI/2,d.position.y=.04,d.scale.setScalar(a),n.add(d),n.userData.warn=d}return n.userData={...n.userData,tile:e,R:a,baseR:a,isFinish:t,rim:c},this.levelGroup.add(n),n}_makeCoin(e){let t=this.tileWorld(e.tx,e.ty),i=new xe(this.geo("coin",()=>new yt(.46,.46,.14,18)),this._own(new We({color:16765498,emissive:16756224,emissiveIntensity:.5,metalness:1,roughness:.3})));return i.rotation.x=Math.PI/2,i.position.set(t.x,.9,t.z),i.castShadow=!0,i.userData={tx:e.tx,ty:e.ty,collected:!1,baseY:.9,risk:!!e.risk,gold:!1,spin:Math.random()*6},this.levelGroup.add(i),i}_makePowerup(e){let t=Di[e.type]||Di.shield,i=new ct,n=this.tileWorld(e.tx,e.ty);i.position.set(n.x,1.55,n.z);let r=new xe(this.geo("puOrb",()=>new Kt(.66,20,16)),this._own(new We({color:t.color,emissive:t.color,emissiveIntensity:1.1,roughness:.12,metalness:.25})));r.castShadow=!0,i.add(r);let a=new xe(this.geo("puHalo",()=>new ii(1.05,.08,12,28)),this._own(new ut({color:16777215,transparent:!0,opacity:.9})));a.rotation.x=Math.PI/2,i.add(a);let o=new xe(this.geo("puPillar",()=>new yt(.22,.22,3.4,10,1,!0)),this._own(new ut({color:t.color,transparent:!0,opacity:.28,depthWrite:!1})));o.position.y=-1.1,i.add(o);let l=new xe(this.geo("puIcon",()=>new en(1.15,1.15)),this._own(new ut({map:this._iconTex(t),transparent:!0,depthWrite:!1})));return l.position.y=1.3,i.add(l),i.userData={tx:e.tx,ty:e.ty,type:e.type,def:t,collected:!1,orb:r,halo:a,icon:l},this.levelGroup.add(i),i}_iconTex(e){let t="ic_"+e.id;if(this._texCache[t])return this._texCache[t];let i=document.createElement("canvas");i.width=i.height=128;let n=i.getContext("2d"),r=new fe(e.color);n.fillStyle="#"+r.getHexString(),n.beginPath(),n.arc(64,64,54,0,7),n.fill(),n.fillStyle="rgba(255,255,255,0.95)",n.font="70px serif",n.textAlign="center",n.textBaseline="middle",n.fillText(e.icon||"★",64,74);let a=new Li(i);return a.colorSpace=Ze,this._texCache[t]=a,a}_marbleTex(e){let t="mb_"+e,i=this._texCache[t];if(i){let a=this._mbLru.indexOf(t);return a>=0&&this._mbLru.splice(a,1),this._mbLru.push(t),i}let n=document.createElement("canvas");n.width=1024,n.height=512,da(n.getContext("2d"),e,1024,512);let r=new Li(n);for(r.colorSpace=Ze,r.anisotropy=8,r.wrapS=ys,this._texCache[t]=r,this._mbLru.push(t);this._mbLru.length>4;){let a=this._mbLru.shift();this._texCache[a]!==this.marble?.material?.map?(this._texCache[a]?.dispose?.(),delete this._texCache[a]):this._mbLru.push(a)}return r}_makeBoostPad(e,t){let i=new ct,n=this.tileWorld(e.tx,e.ty);i.position.set(n.x,.05,n.z);let r=new xe(this.geo("spPad",()=>new yt(3.2*.36,3.2*.42,.12,24)),this._own(new We({color:530480,emissive:1630463,emissiveIntensity:.95,roughness:.3})));i.add(r);let a=new xe(this.geo("spRing",()=>new ii(3.2*.3,.06,10,28)),this._own(new ut({color:12580863,transparent:!0,opacity:.9})));a.rotation.x=-Math.PI/2,a.position.y=.12,i.add(a);let o=new xe(this.geo("spShaft",()=>new yt(3.2*.22,3.2*.34,2.6,16,1,!0)),this._own(new ut({color:1630463,transparent:!0,opacity:.16,side:Xn,depthWrite:!1})));return o.position.y=1.3,i.add(o),i.userData={tile:e,dir:e.dir,cd:0,ring:a,pad:r},this.levelGroup.add(i),i}_makeBouncer(e){let t=this.tileWorld(e.tx,e.ty),i=new xe(this.geo("bounce",()=>new yt(3.2*.32,3.2*.42,.5,20)),this._own(new We({color:16735152,emissive:16722570,emissiveIntensity:.7,roughness:.3})));return i.position.set(t.x,.25,t.z),i.castShadow=!0,i.userData={tile:e,cd:0,squash:0},this.levelGroup.add(i),i}_makeCrawler(e){let t=new ct,i=new xe(this.geo("crawlBody",()=>new Kt(.78,20,16)),this._own(new We({map:this._tex("toxicFace"),color:16777215,emissive:16722731,emissiveIntensity:.45,roughness:.4})));i.castShadow=!0,t.add(i);for(let r=0;r<6;r++){let a=new xe(this.geo("crawlSpk",()=>new Vn(.16,.4,6)),this._own(new We({color:9180180,emissive:16722731,emissiveIntensity:.5}))),o=r/6*Math.PI*2;a.position.set(Math.cos(o)*.7,-.55,Math.sin(o)*.7),a.rotation.x=Math.PI,t.add(a)}let n=e.path.map(r=>{let a=this.tileWorld(r.tx,r.ty);return new R(a.x,.78,a.z)});return t.userData={pts:n,speed:e.speed,u:0,dir:1,body:i},n.length&&t.position.copy(n[0]),this.levelGroup.add(t),t}_makeSpike(e){let t=new ct,i=this.tileWorld(e.tx,e.ty);t.position.set(i.x,0,i.z);let n=new xe(this.geo("spkBase",()=>new yt(3.2*.36,3.2*.4,.12,16)),this._own(new We({color:1711398,roughness:1})));n.position.y=.02,t.add(n);let r=new xe(this.geo("spkTel",()=>new Gn(3.2*.34,20)),this._own(new ut({color:16722731,transparent:!0,opacity:0,depthWrite:!1})));r.rotation.x=-Math.PI/2,r.position.y=.05,t.add(r);let a=new ct,o=[[0,0],[.5,.5],[-.5,.5],[.5,-.5],[-.5,-.5]];for(let[l,h]of o){let c=new xe(this.geo("spkCone",()=>new Vn(.32,1.5,6)),this._own(new We({color:16722731,emissive:16722731,emissiveIntensity:.55,metalness:.3,roughness:.4})));c.position.set(l,.75,h),a.add(c)}return a.position.y=-1.6,t.add(a),t.userData={tile:e,phase:e.phase,period:e.period,cluster:a,tel:r,up:0},this.levelGroup.add(t),t}_makeTurret(e,t){let i=new ct,n=this.tileWorld(e.tx,e.ty);i.position.set(n.x,0,n.z);let r=new xe(this.geo("tBase",()=>new yt(.66,.78,1,14)),this._own(new We({color:2830912,metalness:.6,roughness:.4})));r.position.y=.5,i.add(r);let a=new xe(this.geo("tBarrel",()=>new yt(.22,.26,1.1,12)),this._own(new We({color:10465480,emissive:16722731,emissiveIntensity:.5,metalness:.7,roughness:.3})));a.rotation.z=Math.PI/2;let o=Math.atan2(e.dir.y,e.dir.x);return a.position.set(e.dir.x*.6,.9,e.dir.y*.6),a.rotation.y=-o,i.add(a),i.userData={tile:e,dir:e.dir,period:e.period,timer:e.phase*e.period},this.levelGroup.add(i),i}_makeSizeZone(e){let t=new ct,i=this.tileWorld(e.tx,e.ty);t.position.set(i.x,.05,i.z);let n=e.kind==="shrink"?4837631:16747069,r=new xe(this.geo("szRing",()=>new ii(3.2*.34,.1,10,24)),this._own(new We({color:n,emissive:n,emissiveIntensity:.8,roughness:.4})));return r.rotation.x=-Math.PI/2,t.add(r),t.userData={tile:e,kind:e.kind,cd:0},this.levelGroup.add(t),t}_makeRotator(e){let t=new ct,i=this.tileWorld(e.tx,e.ty);t.position.set(i.x,.85,i.z);let n=new xe(this.geo("rHub",()=>new yt(.5,.62,1.8,16)),this._own(new We({color:2831174,metalness:.7,roughness:.35})));t.add(n);let r=e.len*3.2,a=new xe(this._own(new kt(r,.62,.72)),this._own(new We({color:16722731,emissive:16722731,emissiveIntensity:.85,roughness:.4})));a.position.x=r/2,a.castShadow=!0,t.add(a);let o=new xe(this.geo("rTip",()=>new Kt(.45,12,10)),this._own(new We({color:16722731,emissive:16722731,emissiveIntensity:1.3})));return o.position.x=r,t.add(o),t.userData={tile:e,len:r,speed:e.speed,angle:Math.random()*6},this.levelGroup.add(t),t}_makeMover(e){let t=this.tileWorld(e.tx,e.ty),i=e.dir.x?[[0,-1],[0,1]]:[[-1,0],[1,0]],n=i.find(([a,o])=>this.isWall(e.tx+a,e.ty+o))||i[0],r=new xe(this._own(new kt(3.2*.96,2.5*.92,3.2*.96)),this._own(new We({color:16722731,emissive:16722731,emissiveIntensity:.55,metalness:.3,roughness:.5})));return r.castShadow=!0,r.receiveShadow=!0,r.position.set(t.x,2.5*.46,t.z),r.userData={tile:e,base:t,retract:{x:n[0],y:n[1]},period:e.period,phase:e.phase,offset:0},this.levelGroup.add(r),r}_makeMarble(e,t){if(!this.marble){this.marble=new xe(new Kt(.95,40,30),new ta),this.marble.castShadow=!0,this.scene.add(this.marble);let i=document.createElement("canvas");i.width=i.height=128;let n=i.getContext("2d"),r=n.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(0,0,0,0.85)"),r.addColorStop(.45,"rgba(0,0,0,0.42)"),r.addColorStop(.78,"rgba(0,0,0,0.12)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,128,128);let a=new Li(i);this.blob=new xe(new en(.95*3.2,.95*3.2),new ut({map:a,transparent:!0,opacity:.55,depthWrite:!1,color:0})),this.blob.rotation.x=-Math.PI/2,this.scene.add(this.blob),this.shieldAura=new xe(new Kt(.95*1.5,20,16),new ut({color:5111715,transparent:!0,opacity:.26,depthWrite:!1,side:Xn})),this.shieldAura.visible=!1,this.marble.add(this.shieldAura),this._initTrail()}this.applySkin(e),this.applyTrail(t)}applySkin(e){this.skinDef=e;let t=this.marble.material,i=e.mat;if(t.map=null,t.transparent=!1,t.opacity=1,t.color=new fe(i.color),t.metalness=i.metalness??0,t.roughness=i.roughness??.2,t.clearcoat=i.clearcoat??0,t.clearcoatRoughness=.08,t.emissive=new fe(i.emissive??0),t.emissiveIntensity=i.emissiveInt??0,t.envMapIntensity=i.envInt??1.1,e.tex){let n=this._marbleTex(e.tex);n.offset.x=0,t.map=n,t.color=new fe(i.tint??16777215);let r=this.level?.world;e.worldTint&&r&&t.color.lerp(new fe(r.accent),e.worldTint)}this._setRing(!!e.ring,i.ringColor??14200944),this._rainbow=!!(e.rainbow||i.rainbow),this._flow=e.flow||0,this._hueShift=e.hueShift||0,!this._flow&&t.map&&(t.map.offset.x=0),t.needsUpdate=!0}_setRing(e,t){e&&!this.ringMesh&&(this.ringMesh=new xe(new ii(.95*1.95,.95*.13,8,48),new We({metalness:.25,roughness:.55})),this.ringMesh.rotation.set(1.32,0,.22),this.marble.add(this.ringMesh)),this.ringMesh&&(this.ringMesh.visible=e,e&&this.ringMesh.material.color.set(t))}applyTrail(e){this.trailDef=e;let t=e&&e.id!=="none";this.trail&&(this.trail.visible=t),t&&(this.trailColor=new fe(e.color),this.trailColor2=new fe(e.color2??e.color),this.trail.material.size=e.size??.9,this.trail.material.blending=e.soft?eu:ra,this.trail.material.needsUpdate=!0),this._trailRainbow=!!(e&&e.rainbow)}_tex(e){if(this._texCache[e])return this._texCache[e];let t=document.createElement("canvas");t.width=t.height=128;let i=t.getContext("2d");if(e==="toxicFace"){i.fillStyle="#ff2b2b",i.fillRect(0,0,128,128),i.fillStyle="#7a0d0d";for(let r=0;r<10;r++)i.beginPath(),i.arc(Math.random()*128,Math.random()*128,6+Math.random()*8,0,7),i.fill();i.fillStyle="#fff",i.beginPath(),i.arc(48,56,14,0,7),i.fill(),i.beginPath(),i.arc(84,56,14,0,7),i.fill(),i.fillStyle="#111",i.beginPath(),i.arc(50,58,6,0,7),i.fill(),i.beginPath(),i.arc(82,58,6,0,7),i.fill(),i.strokeStyle="#111",i.lineWidth=6,i.lineCap="round",i.beginPath(),i.arc(66,96,22,Math.PI+.3,-.3),i.stroke()}let n=new Li(t);return n.colorSpace=Ze,this._texCache[e]=n,n}_initTrail(){let e=Eu,t=new je;t.setAttribute("position",new st(new Float32Array(e*3),3)),t.setAttribute("color",new st(new Float32Array(e*3),3));let i=document.createElement("canvas");i.width=i.height=64;let n=i.getContext("2d"),r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.35,"rgba(255,255,255,.75)"),r.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=r,n.beginPath(),n.arc(32,32,32,0,7),n.fill();let a=new Li(i);this.trail=new bs(t,new Hn({size:.9,map:a,vertexColors:!0,transparent:!0,blending:ra,depthWrite:!1})),this.trail.frustumCulled=!1,this.scene.add(this.trail),this._trailN=e,this._trailHead=0,this._trailLife=new Float32Array(e),this._trailVel=new Float32Array(e*3),this._trailSeed=new Float32Array(e),this.trailColor=new fe(16777215),this.trailColor2=new fe(16777215),this._trailRC=new fe(16777215)}_initParticles(){this.pM=700;let t=new je;this.pPos=new Float32Array(700*3),this.pCol=new Float32Array(700*3),t.setAttribute("position",new st(this.pPos,3)),t.setAttribute("color",new st(this.pCol,3)),this.particles=new bs(t,new Hn({size:.5,vertexColors:!0,transparent:!0,blending:ra,depthWrite:!1})),this.particles.frustumCulled=!1,this.pAlive=0,this._pDirty=!1,this.pVel=new Float32Array(700*3),this.pLife=new Float32Array(700),this.pMax=new Float32Array(700),this.pBase=new Float32Array(700*3),this.pHead=0;for(let i=0;i<700;i++)this.pPos[i*3+1]=-9999;this.scene.add(this.particles)}burst(e,t,i,n,r=16,a=6,o=.6,l=2){this.pBudget<this.pM&&(r=Math.max(2,Math.round(r*(this.pBudget/this.pM)))),this.pAlive+=r;let h=new fe(n);for(let c=0;c<r;c++){let d=this.pHead;this.pHead=(this.pHead+1)%this.pM;let u=Math.random()*Math.PI*2,f=Math.random()*Math.PI,g=a*(.4+Math.random()*.8);this.pVel[d*3]=Math.sin(f)*Math.cos(u)*g,this.pVel[d*3+1]=Math.cos(f)*g*.5+l,this.pVel[d*3+2]=Math.sin(f)*Math.sin(u)*g,this.pPos[d*3]=e,this.pPos[d*3+1]=t,this.pPos[d*3+2]=i,this.pBase[d*3]=h.r,this.pBase[d*3+1]=h.g,this.pBase[d*3+2]=h.b,this.pLife[d]=this.pMax[d]=o*(.6+Math.random()*.6)}}_updateParticles(e){if(this.pAlive<=0){this._pDirty&&(this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0,this._pDirty=!1);return}let t=0;for(let i=0;i<this.pM;i++){if(this.pLife[i]<=0)continue;t++,this.pLife[i]-=e;let n=Math.max(0,this.pLife[i]/this.pMax[i]);this.pVel[i*3+1]-=9*e,this.pVel[i*3]*=.96,this.pVel[i*3+2]*=.96,this.pPos[i*3]+=this.pVel[i*3]*e,this.pPos[i*3+1]+=this.pVel[i*3+1]*e,this.pPos[i*3+2]+=this.pVel[i*3+2]*e,this.pCol[i*3]=this.pBase[i*3]*n,this.pCol[i*3+1]=this.pBase[i*3+1]*n,this.pCol[i*3+2]=this.pBase[i*3+2]*n,this.pLife[i]<=0&&(this.pPos[i*3+1]=-9999,this.pCol[i*3]=this.pCol[i*3+1]=this.pCol[i*3+2]=0,t--)}this.pAlive=t,this._pDirty=!0,this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.geometry.attributes.color.needsUpdate=!0}start(){(this.state==="idle"||this.state==="paused")&&(this.state="playing")}pause(){this.state==="playing"&&(this.state="paused")}resume(){this.state==="paused"&&(this.state="playing")}update(e,t){let i=typeof performance<"u"?performance.now():Date.now(),n=this._lastFrame?i-this._lastFrame:1e3/60;this._lastFrame=i,(this._sizeTick=(this._sizeTick+1)%12)===0&&this._syncSize(),e=Math.min(e,.05),this._t+=e;let r=e*this.timeScale;this.state==="playing"?(this.clockMs+=e*1e3,this._physics(r,t),this._entities(r),this._powerupTick(e),this._goldTick(e),this._phaseTick(e),this._trailUpdate(e),this._checkPickups(),this._checkHoles(),this._checkHazards(),this._idleCheck(e,t),this._hudAcc+=e,this.cb.onHud&&this._hudAcc>=.05&&(this._hudAcc=0,this.cb.onHud(this._hud())),this._arrowAcc+=e,this._arrowAcc>=.06&&(this._arrowAcc=0,this._finishArrow())):this.state==="win"||this.state==="die"?(this._deathAnim(e),this._entities(r*.2),this._trailUpdate(e)):this._idleAnim(e),this._animateDecor(e),this._updateParticles(e),this._camera(e),this.renderer.render(this.scene,this.camera),this._perf(n,i)}_hud(){let e=Math.hypot(this.vel.x,this.vel.z);return{coins:this.coinsCollected,coinTotal:this.level.coinTotal,timeMs:this.clockMs,parMs:this.level.parTimeMs,speed:e,maxSpeed:gi.maxSpeed,boosting:!!this._boosting,gold:this.gold.active}}_physics(e,t){let i=this.level.world,n=t&&t.boost;this._boosting=n;let r=gi.accel*(n?gi.boostMult:1),a=gi.maxSpeed*(n?gi.boostMult:1);this.activePowerups.has("speed")&&(r*=1.4,a*=1.4),r*=this.speedPerk,a*=this.speedPerk;let o=this.baseRadius/this.radius;a*=o,r*=o,this.launchTimer>0&&(this.launchTimer-=e,a=Math.max(a,38));let l=gi.friction;i.sig==="slippery"&&(l*=.45),i.sig==="lowgrav"&&(l*=.62,a*=1.1);let h=0,c=0;t&&(h=t.vec.x*r,c=t.vec.y*r),this.level.current&&(h+=this.level.current.x*this.level.current.strength,c+=this.level.current.y*this.level.current.strength),this.vel.x+=h*e,this.vel.z+=c*e;let d=Math.exp(-l*e);this.vel.x*=d,this.vel.z*=d;let u=Math.hypot(this.vel.x,this.vel.z);if(u>a){let m=a/u;this.vel.x*=m,this.vel.z*=m}let f=Math.hypot(this.vel.x,this.vel.z)*e,g=Math.max(1,Math.ceil(f/(3.2*.3))),y=this.vel.x*e/g,p=this.vel.z*e/g;for(let m=0;m<g;m++)this.marble.position.x+=y,this.marble.position.z+=p,this._resolveWalls();let _=Math.hypot(this.vel.x,this.vel.z);if(_>.01){let m=Mm.set(-this.vel.z,0,this.vel.x).normalize();this.marble.rotateOnWorldAxis(m,_*e/this.radius)}if(this.ghost){let m=this.level.gw*3.2/2-this.radius,v=this.level.gh*3.2/2-this.radius;this.marble.position.x<-m&&(this.marble.position.x=-m,this.vel.x=Math.max(0,this.vel.x)),this.marble.position.x>m&&(this.marble.position.x=m,this.vel.x=Math.min(0,this.vel.x)),this.marble.position.z<-v&&(this.marble.position.z=-v,this.vel.z=Math.max(0,this.vel.z)),this.marble.position.z>v&&(this.marble.position.z=v,this.vel.z=Math.min(0,this.vel.z))}}_circleVsBox(e,t,i,n,r,a,o){let l=i-r,h=i+r,c=n-a,d=n+a,u=Math.max(l,Math.min(e,h)),f=Math.max(c,Math.min(t,d)),g=e-u,y=t-f,p=g*g+y*y;if(p>=o*o)return null;let _=Math.sqrt(p);if(_<1e-5){let m=e-l,v=h-e,x=t-c,w=d-t,M=Math.min(m,v,x,w);M===m?(g=-1,y=0):M===v?(g=1,y=0):M===x?(g=0,y=-1):(g=0,y=1),_=0}else g/=_,y/=_;return{nx:g,nz:y,push:o-_}}_resolveWalls(){if(this.ghost||this.wallsPhased&&this.phaseAmt>.5)return;let e=this.radius,t=this.marble.position.x,i=this.marble.position.z,{tx:n,ty:r}=this.worldTile(t,i);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let l=n+o,h=r+a;if(!this.isWall(l,h))continue;let c=this.tileWorld(l,h),d=this._circleVsBox(this.marble.position.x,this.marble.position.z,c.x,c.z,3.2/2,3.2/2,e);d&&this._applyHit(d)}}_applyHit(e){this.marble.position.x+=e.nx*e.push,this.marble.position.z+=e.nz*e.push;let t=this.vel.x*e.nx+this.vel.z*e.nz;t<0&&(this.vel.x-=(1+gi.wallRestitution)*t*e.nx,this.vel.z-=(1+gi.wallRestitution)*t*e.nz)}_entities(e){this.freeze||this._moveHazards(e);for(let t of this.bouncers){t.userData.cd>0&&(t.userData.cd-=e),t.userData.squash=Math.max(0,t.userData.squash-e*4);let i=t.userData.squash;t.scale.set(1+i*.3,1-i*.5,1+i*.3)}for(let t of this.boostPads)t.userData.cd>0&&(t.userData.cd-=e);for(let t of this.sizeZones)t.userData.cd>0&&(t.userData.cd-=e)}_moveHazards(e){for(let t of this.crawlers){let i=t.userData.pts;if(i.length<2)continue;t.userData.u+=t.userData.dir*t.userData.speed*e/3.2,t.userData.u>=i.length-1&&(t.userData.u=i.length-1,t.userData.dir=-1),t.userData.u<=0&&(t.userData.u=0,t.userData.dir=1);let n=Math.floor(t.userData.u),r=t.userData.u-n,a=i[n],o=i[Math.min(n+1,i.length-1)];t.position.lerpVectors(a,o,r),t.position.y=.78+Math.sin(this._t*4+n)*.08,t.rotation.y+=e*1.5}for(let t of this.spikes){let i=(this._t/t.userData.period+t.userData.phase)%1,n=0,r=0;i<.35?(r=i/.35,n=0):i<.55?(n=(i-.35)/.2,r=1):i<.8&&(n=1-(i-.55)/.25,r=.4),t.userData.up=n,t.userData.cluster.position.y=-1.6+n*1.6,t.userData.tel.material.opacity=.15+r*.5*(.6+.4*Math.sin(this._t*12))}for(let t of this.turrets)t.userData.timer+=e,t.userData.timer>=t.userData.period&&(t.userData.timer=0,this._fire(t));for(let t of this.projectiles){if(!t.alive)continue;t.mesh.position.x+=t.vx*e,t.mesh.position.z+=t.vz*e;let{tx:i,ty:n}=this.worldTile(t.mesh.position.x,t.mesh.position.z);this.isWall(i,n)&&(t.alive=!1,this.levelGroup.remove(t.mesh),this.burst(t.mesh.position.x,.6,t.mesh.position.z,16722731,6,4,.3))}this.projectiles=this.projectiles.filter(t=>t.alive);for(let t of this.rotators)t.userData.angle+=t.userData.speed*e,t.rotation.y=t.userData.angle;for(let t of this.movers||[]){let i=(this._t/t.userData.period+t.userData.phase)%1,n=.5-.5*Math.cos(i*Math.PI*2);t.userData.offset=n,t.position.x=t.userData.base.x+t.userData.retract.x*n*3.2,t.position.z=t.userData.base.z+t.userData.retract.y*n*3.2}}_fire(e){let t=new xe(this.geo("proj",()=>new Kt(.26,12,10)),this._own(new We({color:16722731,emissive:16722731,emissiveIntensity:1.3}))),i=this.tileWorld(e.userData.tile.tx,e.userData.tile.ty);t.position.set(i.x+e.userData.dir.x*3.2*.5,.7,i.z+e.userData.dir.y*3.2*.5),this.levelGroup.add(t);let n=11;this.projectiles.push({mesh:t,vx:e.userData.dir.x*n,vz:e.userData.dir.y*n,alive:!0})}_checkPickups(){let e=this.marble.position.x,t=this.marble.position.z,i=this.activePowerups.has("magnet"),n=i||this.perkMagnet,r=i?3.2*4.2:3.2*3.6,a=i?28:24;for(let o of this.coins){if(o.userData.collected)continue;let l=o.position.x-e,h=o.position.z-t,c=Math.hypot(l,h);if(n&&c<r){let d=a*(1-c/r);o.position.x-=l/(c||1)*d*.016,o.position.z-=h/(c||1)*d*.016,l=o.position.x-e,h=o.position.z-t,c=Math.hypot(l,h)}c<Dl.coin+this.radius*.4&&this._collectCoin(o)}for(let o of this.powerups)o.userData.collected||Math.hypot(o.position.x-e,o.position.z-t)<Dl.powerup+this.radius*.5&&this._collectPowerup(o);for(let o of this.boostPads)if(!(o.userData.cd>0)&&Math.hypot(o.position.x-e,o.position.z-t)<3.2*.5){let l=Math.hypot(this.vel.x,this.vel.z),h,c;l>1.2?(h=this.vel.x/l,c=this.vel.z/l):(h=o.userData.dir.x,c=o.userData.dir.y),this.vel.x=h*40,this.vel.z=c*40,o.userData.cd=.6,this.launchTimer=.65,this.burst(o.position.x,.5,o.position.z,7139583,18,9,.45,3),this.cb.onSfx?.("boost")}for(let o of this.bouncers){if(o.userData.cd>0)continue;let l=e-o.position.x,h=t-o.position.z,c=Math.hypot(l,h);if(c<3.2*.42+this.radius){let d=c<.001?{x:Math.random()-.5,z:Math.random()-.5}:{x:l/c,z:h/c};this.vel.x=d.x*26,this.vel.z=d.z*26,o.userData.cd=.4,o.userData.squash=1,this.burst(o.position.x,.6,o.position.z,16735152,14,8,.4,4),this.cb.onSfx?.("bounce")}}for(let o of this.sizeZones)o.userData.cd>0||Math.hypot(o.position.x-e,o.position.z-t)<3.2*.34&&(o.userData.cd=2,o.userData.kind==="shrink"?this._startPowerup("shrink"):(this.radius=this.baseRadius*1.5,this.activePowerups.set("grow",7),this._applySize()),this.cb.onSfx?.("powerup"))}_collectCoin(e){e.userData.collected=!0,e.visible=!1;let t=e.userData.gold;t||this.coinsCollected++,this.combo++,this.comboTimer=1.4;let i=(this.activePowerups.has("x2")?2:1)*(this.gold.active?2:1)*this.coinPerk;if(this.burst(e.position.x,e.position.y,e.position.z,t?16769357:16765498,12,5,.5,2),this.cb.onCoin?.(this.coinsCollected,i,this.combo),this.cb.onSfx?.("coin",this.combo),!this.gold.active&&!this.gold.used&&!t){this.gold.times.push(this._t),this.gold.times=this.gold.times.filter(o=>this._t-o<Yn.windowSec);let n=this.level.coinTotal||1,r=n>=6&&this.coinsCollected>=Math.ceil(n*Yn.fraction),a=this.gold.times.length>=Yn.minFast;(r||a)&&this._startGoldRush()}}_collectPowerup(e){e.userData.collected=!0,e.visible=!1,this.burst(e.position.x,1.4,e.position.z,e.userData.def.color,28,8,.7,4),this.burst(e.position.x,1.4,e.position.z,16777215,12,5,.5,3),this._startPowerup(e.userData.type),this.cb.onSfx?.("powerup")}forceGoldRush(){!this.gold.active&&!this.gold.used&&this._startGoldRush()}_startPowerup(e){let t=Di[e]||{id:e,dur:7};this.activePowerups.set(e,t.dur),e==="shield"&&(this.shield=!0),e==="slowmo"&&(this.timeScale=.55),e==="shrink"&&(this.radius=this.baseRadius*.55,this._applySize()),e==="patchHoles"&&this._setHolesPatched(!0),e==="phaseWalls"&&(this.wallsPhased=!0),e==="ghost"&&(this.ghost=!0,this._setMarbleGhost(!0)),e==="freeze"&&(this.freeze=!0),this.cb.onPowerupStart?.(t),this.cb.onPowerups?.(this._activeList())}_setMarbleGhost(e){let t=this.marble.material;t.transparent=e,t.opacity=e?.4:1,t.needsUpdate=!0}_applySize(){this.marble.scale.setScalar(this.radius/this.baseRadius)}_setHolesPatched(e){this.holesPatched=e;for(let t of this.decoyMeshes)t.userData.rim.material.emissiveIntensity=e?.1:1,t.userData.warn&&(t.userData.warn.material.opacity=e?0:.4),t.scale.y=e?.1:1}_powerupTick(e){let t=!1;for(let[i,n]of this.activePowerups){let r=n-e;r<=0?(this.activePowerups.delete(i),t=!0,i==="slowmo"&&(this.timeScale=1),(i==="shrink"||i==="grow")&&(this.radius=this.baseRadius,this._applySize()),i==="shield"&&(this.shield=!1),i==="patchHoles"&&this._setHolesPatched(!1),i==="phaseWalls"&&(this.wallsPhased=!1),i==="ghost"&&(this.ghost=!1,this._setMarbleGhost(!1)),i==="freeze"&&(this.freeze=!1),this.cb.onPowerupEnd?.(i)):this.activePowerups.set(i,r)}this.comboTimer>0&&(this.comboTimer-=e,this.comboTimer<=0&&(this.combo=0)),t&&this.cb.onPowerups?.(this._activeList())}_activeList(){return[...this.activePowerups.entries()].map(([e,t])=>({id:e,t,def:Di[e]}))}_phaseTick(e){let t=this.wallsPhased?1:0;this.phaseAmt+=(t-this.phaseAmt)*Math.min(1,e*6),this.wallGroup&&(this.wallGroup.position.y=-this.phaseAmt*(2.5+.6))}_startGoldRush(){this.gold.active=!0,this.gold.used=!0,this.gold.timer=Yn.durationSec,this.gold.times=[];let e=this.openTiles.filter(t=>!(t.tx===this.level.finish.tx&&t.ty===this.level.finish.ty));for(let t=0;t<Yn.fillCount&&e.length;t++){let i=e[Math.floor(Math.random()*e.length)],n=this._makeCoin({tx:i.tx,ty:i.ty});n.userData.gold=!0,n.material.emissive=new fe(16769357),n.material.emissiveIntensity=.9,this.coins.push(n),this.gold.coins.push(n)}this.burst(this.marble.position.x,1.2,this.marble.position.z,16769357,50,10,1,6),this.cb.onGoldRush?.(!0),this.cb.onSfx?.("gold")}_goldTick(e){this.gold.active&&(this.gold.timer-=e,this.gold.timer<=0&&this._endGold())}_endGold(){if(this.gold.active){this.gold.active=!1;for(let e of this.gold.coins)e.userData.collected||(e.visible=!1,e.userData.collected=!0);this.gold.coins=[],this.cb.onGoldRush?.(!1)}}_checkHoles(){let e=this.marble.position.x,t=this.marble.position.z,i=this.finishMesh,n=i.userData.R*(1+this.forgive*.5);if(this.level.biggerGoal&&(n*=1.5),this.activePowerups.has("bigfinish")&&(n*=1.7),Math.hypot(e-i.position.x,t-i.position.z)<n){this._win();return}if(!this.holesPatched){for(let r of this.decoyMeshes)if(Math.hypot(e-r.position.x,t-r.position.z)<r.userData.R){if(this.shield){this._consumeShield(r.position.x,r.position.z);return}this._die("hole",r.position.x,r.position.z);return}}}_checkHazards(){if(this.state!=="playing")return;let e=this.marble.position.x,t=this.marble.position.z,i=this.radius-this.forgive*.15,n=(r,a,o)=>Math.hypot(e-r,t-a)<i+o;for(let r of this.crawlers)if(n(r.position.x,r.position.z,.68))return this._lethal(r.position.x,r.position.z);for(let r of this.spikes)if(r.userData.up>.5&&n(r.position.x,r.position.z,.55))return this._lethal(r.position.x,r.position.z);for(let r of this.projectiles)if(r.alive&&n(r.mesh.position.x,r.mesh.position.z,.3))return r.alive=!1,this.levelGroup.remove(r.mesh),this._lethal(r.mesh.position.x,r.mesh.position.z);for(let r of this.rotators){let a=r.userData.angle,o=r.position.x+Math.cos(a)*r.userData.len,l=r.position.z+Math.sin(a)*r.userData.len;if(Sm(e,t,r.position.x,r.position.z,o,l)<i+.14)return this._lethal(e,t)}for(let r of this.movers||[])if(!(r.userData.offset>.55)&&n(r.position.x,r.position.z,3.2*.46))return this._lethal(r.position.x,r.position.z)}_lethal(e,t){if(this.shield){this._consumeShield(e,t);return}this._die("hazard",e,t)}_consumeShield(e,t){this.shield=!1,this.activePowerups.delete("shield"),this.burst(e,.8,t,5111715,30,10,.7,4),this.cb.onSfx?.("shieldHit"),this.cb.onShieldSave?.(),this.cb.onPowerupEnd?.("shield"),this.cb.onPowerups?.(this._activeList()),this.vel.x*=-.6,this.vel.z*=-.6}_win(){if(this.state!=="playing")return;this.state="win",this._endGold(),this._fall={x:this.finishMesh.position.x,z:this.finishMesh.position.z,t:0};let e=this.coinsCollected,t=this.level.coinTotal||1,i=1;e>=t*Il.coinFractionFor2&&(i=2),e>=t*Il.coinFractionFor3&&(i=3),this.burst(this._fall.x,1.2,this._fall.z,2883486,44,9,.9,5),this.cb.onSfx?.("win"),this._winData={timeMs:this.clockMs,coins:e,coinTotal:t,stars:i}}_die(e,t,i){if(this.state!=="playing")return;this.state="die",this._endGold();let n=Math.hypot(this.marble.position.x-this.finishMesh.position.x,this.marble.position.z-this.finishMesh.position.z)<3.2*2.5;this._fall={x:t??this.marble.position.x,z:i??this.marble.position.z,t:0,reason:e,nearFinish:n},this.burst(this.marble.position.x,.8,this.marble.position.z,this.skinDef?.mat.color??16777215,30,9,.7,5),this.cb.onSfx?.("die")}_deathAnim(e){if(!this._fall)return;this._fall.t+=e;let t=Math.min(1,this._fall.t/.5);this.state==="win"||this._fall.reason==="hole"?(this.marble.position.x+=(this._fall.x-this.marble.position.x)*Math.min(1,e*10),this.marble.position.z+=(this._fall.z-this.marble.position.z)*Math.min(1,e*10),this.marble.position.y=.95-t*(.95+4),this.marble.scale.setScalar(this.radius/this.baseRadius*(1-t*.7))):(this.marble.position.y=.95+Math.sin(t*Math.PI)*2.2,this.marble.scale.setScalar(this.radius/this.baseRadius*(1-t))),t>=1&&!this._resolved&&(this._resolved=!0,this.state==="win"?this.cb.onWin?.(this._winData):this.cb.onDie?.(this._fall.reason,{x:this._fall.x,z:this._fall.z,nearFinish:this._fall.nearFinish}))}beginResolveReset(){this._resolved=!1}_idleCheck(e,t){t&&(Math.abs(t.vec.x)>.05||Math.abs(t.vec.y)>.05)||Math.hypot(this.vel.x,this.vel.z)>.5?(this.idleTimer=0,this._idleFired&&(this._idleFired=!1,this.cb.onActive?.())):(this.idleTimer+=e,this.idleTimer>5&&!this._idleFired&&(this._idleFired=!0,this.cb.onIdle?.()))}_finishArrow(){if(!this.cb.onFinishArrow)return;let e=this.finishMesh.position.x-this.marble.position.x,t=this.finishMesh.position.z-this.marble.position.z;this.cb.onFinishArrow({angle:Math.atan2(t,e),dist:Math.hypot(e,t)})}_animateDecor(e){for(let t of this.coins)t.userData.collected||(t.rotation.z+=e*3,t.position.y=t.userData.baseY+Math.sin(this._t*2+t.userData.spin)*.12);for(let t of this.powerups)t.userData.collected||(t.userData.orb.rotation.y+=e*1.6,t.userData.halo.rotation.z+=e*1.3,t.position.y=1.55+Math.sin(this._t*2)*.18,t.userData.icon&&t.userData.icon.lookAt(this.camera.position));for(let t of this.boostPads){let i=1+.25*Math.sin(this._t*5);t.userData.ring.scale.set(i,i,i),t.userData.pad.material.emissiveIntensity=.7+.4*Math.sin(this._t*5)}if(this.finishMesh?.userData.beam&&(this.finishMesh.userData.rim.rotation.z+=e*.8,this.finishMesh.userData.beam.material.opacity=.18+Math.sin(this._t*3)*.07,this.state==="playing"&&Math.random()<.5&&this.burst(this.finishMesh.position.x+(Math.random()-.5)*1.6,.4+Math.random()*3,this.finishMesh.position.z+(Math.random()-.5)*1.6,2883486,1,1.5,.9,2.5)),this.marble){let t=this.marble.material;if(this._fxOff||(this._flow&&t.map&&(t.map.offset.x=this._t*this._flow%1),this._hueShift&&t.emissive.setHSL(this._t*this._hueShift%1,.8,.45)),this._rainbow){let i=this._t*.15%1;t.emissive.setHSL(i,1,.5),this.skinDef?.tex||t.color.setHSL(i,.7,.5)}}if(this.blob&&this.marble&&(this.blob.position.set(this.marble.position.x,.03,this.marble.position.z),this.blob.scale.setScalar(this.radius/this.baseRadius),this.blob.visible=!(this.wallsPhased&&this.phaseAmt>.5)),this.shieldAura){let t=this.shield&&this.state==="playing";if(this.shieldAura.visible=t,t){let i=1+.07*Math.sin(this._t*6);this.shieldAura.scale.setScalar(i),this.shieldAura.material.opacity=.2+.1*Math.sin(this._t*6)}}}_idleAnim(e){this.marble&&(this.marble.position.y=.95+Math.sin(this._t*2)*.08)}_trailUpdate(e){if(!this.trail||!this.trail.visible)return;let t=this.trailDef||{},i=t.spread??.2,n=t.rise??0,r=t.gravity??0,a=t.decay??2.2,o=t.drag??1.4,l=t.twinkle??0,h=Math.hypot(this.vel.x,this.vel.z),c=this.trail.geometry.attributes.position.array,d=this.trail.geometry.attributes.color.array,u=this._trailVel,f=Math.min(this._trailN,this._trailBudget);for(let _=0;_<this._trailN;_++)this._trailLife[_]-=e*a;if(h>1.5){let _=this._trailHead;this._trailHead=(this._trailHead+1)%f,c[_*3]=this.marble.position.x+(Math.random()-.5)*i,c[_*3+1]=this.marble.position.y+(Math.random()-.5)*i*.5,c[_*3+2]=this.marble.position.z+(Math.random()-.5)*i,u[_*3]=(Math.random()-.5)*i*1.6,u[_*3+1]=n*(.6+Math.random()*.8),u[_*3+2]=(Math.random()-.5)*i*1.6,this._trailSeed[_]=Math.random()*7,this._trailLife[_]=1}let g=this.trailColor;this._trailRainbow&&(g=this._trailRC.setHSL(this._t*.35%1,1,.6));let y=this._trailRainbow?g:this.trailColor2,p=Math.max(0,1-o*e);for(let _=0;_<this._trailN;_++){let m=Math.max(0,this._trailLife[_]);if(m<=0){c[_*3+1]=-9999,d[_*3]=d[_*3+1]=d[_*3+2]=0;continue}u[_*3+1]-=r*e,c[_*3]+=u[_*3]*e,c[_*3+1]+=u[_*3+1]*e,c[_*3+2]+=u[_*3+2]*e,u[_*3]*=p,u[_*3+2]*=p;let v=m;l&&(v*=.55+.45*Math.sin(this._t*14+this._trailSeed[_])*l+.45*(1-l)),d[_*3]=(y.r+(g.r-y.r)*m)*v,d[_*3+1]=(y.g+(g.g-y.g)*m)*v,d[_*3+2]=(y.b+(g.b-y.b)*m)*v}this.trail.geometry.attributes.position.needsUpdate=!0,this.trail.geometry.attributes.color.needsUpdate=!0}_camOffset(){let e=Math.max(this.level.gw,this.level.gh)*3.2;return{h:16+e*.22,d:11+e*.16}}_updateCameraImmediate(){let{h:e,d:t}=this._camOffset();this.camPos.set(this.marble.position.x,e,this.marble.position.z+t),this.camera.position.copy(this.camPos),this.camTarget.copy(this.marble.position),this.camera.lookAt(this.camTarget),this.sun.position.set(this.marble.position.x+18,44,this.marble.position.z+24),this.sun.target.position.copy(this.marble.position)}_camera(e){let{h:t,d:i}=this._camOffset(),n=this.state==="playing"?.35:0,r=this.marble.position.x+this.vel.x*n,a=this.marble.position.z+this.vel.z*n,o=1-Math.exp(-6*e);this.camPos.x+=(r-this.camPos.x)*o,this.camPos.z+=(a+i-this.camPos.z)*o,this.camPos.y+=(t-this.camPos.y)*o,this.camera.position.copy(this.camPos),this.camTarget.x+=(this.marble.position.x-this.camTarget.x)*o,this.camTarget.y+=(0-this.camTarget.y)*o,this.camTarget.z+=(this.marble.position.z-this.camTarget.z)*o,this.camera.lookAt(this.camTarget),this.sun.position.set(this.marble.position.x+18,44,this.marble.position.z+24),this.sun.target.position.set(this.marble.position.x,0,this.marble.position.z),this.sun.target.updateMatrixWorld()}_syncSize(){if(!this.renderer)return;let e=this.canvas.clientWidth||window.innerWidth,t=this.canvas.clientHeight||window.innerHeight;!e||!t||e===this._vw&&t===this._vh||(this._vw=e,this._vh=t,this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1))}_onResize=()=>this._syncSize();_initPerf(){let e=i=>{this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,i))},t=[{id:"pixel",steps:4,gain:3,cost:1,apply:i=>e([2,1.5,1.25,1][i])},{id:"shadow",steps:3,gain:2.6,cost:1.3,apply:i=>{if(i>=2){this.renderer.shadowMap.enabled=!1,this.sun.castShadow=!1;return}this.renderer.shadowMap.enabled=!0,this.sun.castShadow=!0;let n=i===0?2048:1024;this.shadowSize!==n&&(this.shadowSize=n,this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null)}},{id:"parts",steps:3,gain:1.4,cost:1.2,apply:i=>{this.pBudget=[this.pM,340,150][i]}},{id:"trail",steps:3,gain:.8,cost:1.3,apply:i=>{this._trailBudget=[Eu,26,14][i]}},{id:"skinfx",steps:2,gain:.5,cost:1,apply:i=>{this._fxOff=i>0}}];this.perf=new fa(t,{budget:pa}),this.perf.reset(),wu(i=>this.perf.setBudget(i))}setQuality(e){this.qmode=e,e==="high"?(this.perf.setActive(!1),this.perf.reset()):e==="low"?(this.perf.setActive(!1),this.perf.applyAll({pixel:3,shadow:2,parts:2,trail:2,skinfx:1})):(this.perf.reset(),this.perf.setActive(!0))}_perf(e,t){this.perf.sample(e,t)}dispose(){window.removeEventListener("resize",this._onResize),window.removeEventListener("orientationchange",this._onResize),this._ro?.disconnect(),this._clearLevel(),this.renderer.dispose()}};function Sm(s,e,t,i,n,r){let a=n-t,o=r-i,l=a*a+o*o||1e-6,h=((s-t)*a+(e-i)*o)/l;h=Math.max(0,Math.min(1,h));let c=t+h*a,d=i+h*o;return Math.hypot(s-c,e-d)}var _a="marblemaze.save.v1";function Tu(){let s=typeof localStorage<"u"?localStorage:null,e=typeof window<"u"&&window.GamePix&&window.GamePix.localStorage||null;return e?{getItem(t){try{let i=e.getItem(t);if(i!=null)return i}catch{}try{return s?s.getItem(t):null}catch{return null}},setItem(t,i){try{e.setItem(t,i)}catch{}try{s&&s.setItem(t,i)}catch{}}}:s}var Kn=()=>({coins:0,totalCoinsEver:0,maxLevel:1,ownedSkins:Ii.filter(s=>s.unlocked).map(s=>s.id),ownedTrails:Ui.filter(s=>s.unlocked).map(s=>s.id),skin:"pearl",trail:"none",levels:{},settings:{sound:!0,music:!0,control:"auto",tiltSensitivity:1,quality:"auto",difficulty:"normal"},daily:{lastClaimDay:null,streak:0},stats:{runs:0,deaths:0,wins:0,secretsFound:0},seenMechanics:[],director:null}),Te=Kn(),va=null,kl=null;function Au(s){va=s}function Ru(s){Te=Hu(Kn(),s);let e=Kn();for(let t of e.ownedSkins)Te.ownedSkins.includes(t)||Te.ownedSkins.push(t);for(let t of e.ownedTrails)Te.ownedTrails.includes(t)||Te.ownedTrails.push(t)}function Cu(){try{let s=Tu(),e=s&&s.getItem(_a);e&&Ru(JSON.parse(e))}catch(s){console.warn("[storage] load failed, resetting",s),Te=Kn()}return Te}async function Pu(){try{let s=await va.get(_a);s&&Ru(typeof s=="string"?JSON.parse(s):s)}catch(s){console.warn("[storage] remote load failed, starting fresh",s),Te=Kn()}return Te}function Pt(){if(va){if(kl)return;kl=setTimeout(()=>{kl=null;try{Promise.resolve(va.set(_a,JSON.stringify(Te))).catch(()=>{})}catch{}},1e3);return}try{let s=Tu();s&&s.setItem(_a,JSON.stringify(Te))}catch{}}function Qe(){return Te}function Jn(s){return s=Math.max(0,Math.round(s)),Te.coins+=s,Te.totalCoinsEver+=s,Pt(),Te.coins}function Lu(s){return Te.coins<s?!1:(Te.coins-=s,Pt(),!0)}function $n(s){return Te.ownedSkins.includes(s)}function Qn(s){return Te.ownedTrails.includes(s)}function Du(s){$n(s)||(Te.ownedSkins.push(s),Pt())}function Iu(s){Qn(s)||(Te.ownedTrails.push(s),Pt())}function zl(s){$n(s)&&(Te.skin=s,Pt())}function Bl(s){Qn(s)&&(Te.trail=s,Pt())}function Fl(s){let e=s+1;e>Te.maxLevel&&(Te.maxLevel=e,Pt())}function Uu(s,{stars:e,coins:t,timeMs:i}){let n=Te.levels[s]||{stars:0,bestCoins:0,bestTimeMs:1/0},r={stars:Math.max(n.stars,e),bestCoins:Math.max(n.bestCoins,t),bestTimeMs:Math.min(n.bestTimeMs??1/0,i)};return Te.levels[s]=r,Pt(),r}function Nu(s){return Te.levels[s]||{stars:0,bestCoins:0,bestTimeMs:1/0}}function Ou(){return Object.values(Te.levels).reduce((s,e)=>s+(e.stars||0),0)}function ya(s,e){Te.settings[s]=e,Pt()}function ku(){return Te.director}function zu(s){Te.director=s,Pt()}function Hl(s){return Te.seenMechanics.includes(s)}function Gl(s){Te.seenMechanics.includes(s)||(Te.seenMechanics.push(s),Pt())}function xa(s,e=1){Te.stats[s]=(Te.stats[s]||0)+e,Pt()}function Bu(s=new Date){let e=s.getTime()-s.getTimezoneOffset()*6e4;return Math.floor(e/864e5)}function Ma(){let s=Bu(),e=Te.daily.lastClaimDay,t=e!==s,i=Te.daily.streak||0,n;e===null?n=1:e===s?n=i:e===s-1?n=i+1:n=1;let r=(n-1)%Ct.daily.length,a=Ct.daily[r],o=n%Ct.dailySkinAt===0;return{claimable:t,streak:i,nextStreak:n,reward:a,dayInCycle:r,isChest:o}}function Fu(){let s=Ma();if(!s.claimable)return null;let e=Bu();return Te.daily.lastClaimDay=e,Te.daily.streak=s.nextStreak,Jn(s.reward),s}function Hu(s,e){if(Array.isArray(s))return Array.isArray(e)?e.slice():s;if(s&&typeof s=="object"){let t={...s};if(e&&typeof e=="object")for(let i of Object.keys(e))t[i]=i in s?Hu(s[i],e[i]):e[i];return t}return e===void 0?s:e}function Gu(){Te=Kn(),Pt()}var he=s=>document.getElementById(s),ju=s=>"#"+("000000"+(s>>>0).toString(16)).slice(-6),Sa=class{constructor(){this.h={},this.shopTab="skins",this.base=["loading","menu","shop"],this.overlays=["adCurtain","legal","chest","pause","win","lose","daily","settings","tiltPrompt"],this.screens=[...this.base,...this.overlays],this._splitWordmarks(),this._bindStatic()}setHandlers(e){this.h=e}_splitWordmarks(){this._wms=[...document.querySelectorAll(".wm")];for(let e of this._wms)for(let t of e.querySelectorAll(".w")){if(t.querySelector(".c"))continue;let i=t.dataset.t||t.textContent;t.textContent="";for(let n of i){let r=document.createElement("i");r.className="c",r.textContent=n,r.dataset.t=n,t.appendChild(r)}}if(this._measureWordmarks(),typeof ResizeObserver<"u"){this._wmRO=new ResizeObserver(()=>{clearTimeout(this._wmT),this._wmT=setTimeout(()=>this._measureWordmarks(),120)});for(let e of this._wms)this._wmRO.observe(e)}}_measureWordmarks(e){for(let t of e?[e]:this._wms){let i=t.getBoundingClientRect(),n=i.width;if(!n)continue;let r=i.left;t.style.setProperty("--wmw",n.toFixed(2)+"px");for(let a of t.querySelectorAll(".w")){let o=a.getBoundingClientRect();if(o.width){a.style.setProperty("--ww",o.width.toFixed(2)+"px");for(let l of a.querySelectorAll(".c")){let h=l.getBoundingClientRect();l.style.setProperty("--cx",(h.left-o.left).toFixed(2)+"px"),l.style.setProperty("--t",((h.left+h.width*.5-r)/n).toFixed(3))}}}}}showScreen(e){this.clearNotice();for(let t of this.screens)he(t)?.classList.toggle("hidden",t!==e);e==="menu"&&(this.refreshMenu(),this.playWordmark()),e==="shop"&&this.buildShop(this.shopTab)}showOverlay(e){this.clearNotice(),he(e)?.classList.remove("hidden")}hideOverlay(e){he(e)?.classList.add("hidden")}hideOverlays(){for(let e of this.overlays)he(e)?.classList.add("hidden")}visibleOverlay(){for(let e of this.overlays)if(!he(e)?.classList.contains("hidden"))return e;return null}visibleBase(){for(let e of this.base)if(!he(e)?.classList.contains("hidden"))return e;return null}showHUD(e){he("hud").classList.toggle("hidden",!e),e?this.playHudWordmark():this.stopHudWordmark()}_bindStatic(){let e=(r,a)=>{let o=he(r);o&&o.addEventListener("click",()=>{this.h.sfx?.("uiClick"),a()})};e("playBtn",()=>this.h.play?.()),e("shopBtn",()=>this.showScreen("shop")),e("dailyBtn",()=>this.showDaily()),e("settingsBtn",()=>this.showSettings()),e("shopBackBtn",()=>this.showScreen("menu")),e("pauseBtn",()=>this.h.pause?.()),e("resumeBtn",()=>this.h.resume?.()),e("restartBtn",()=>this.h.restart?.()),e("pauseMenuBtn",()=>this.h.toMenu?.()),e("settingsCloseBtn",()=>this.hideOverlays()),e("dailyCloseBtn",()=>this.hideOverlays()),e("legalBtn",()=>this.showOverlay("legal")),e("legalCloseBtn",()=>this.hideOverlay("legal")),e("calibrateBtn",()=>{this.h.calibrate?.(),this.toast("Tilt calibrated")}),e("resetBtn",()=>{let r=he("resetBtn");r.dataset.arm==="1"?(r.dataset.arm="",r.textContent="Reset Progress",Gu(),this.refreshMenu(),this.buildShop(this.shopTab),this.toast("Progress reset")):(r.dataset.arm="1",r.textContent="Tap again to reset!",clearTimeout(this._rstT),this._rstT=setTimeout(()=>{r.dataset.arm="",r.textContent="Reset Progress"},2600))}),e("tiltEnableBtn",()=>this.h.enableTilt?.()),e("tiltTouchBtn",()=>this.h.useTouch?.()),document.querySelectorAll(".shop-tabs .tab").forEach(r=>r.addEventListener("click",()=>{this.h.sfx?.("uiClick"),document.querySelectorAll(".shop-tabs .tab").forEach(a=>a.classList.remove("active")),r.classList.add("active"),this.shopTab=r.dataset.tab,this.buildShop(this.shopTab)})),he("setSound").addEventListener("change",r=>this.h.setSetting?.("sound",r.target.checked)),he("setMusic").addEventListener("change",r=>this.h.setSetting?.("music",r.target.checked)),he("setSens").addEventListener("input",r=>{he("sensVal").textContent=(+r.target.value).toFixed(1),this.h.setSetting?.("tiltSensitivity",+r.target.value)}),this._seg("setControl",r=>this.h.setSetting?.("control",r)),this._seg("setQuality",r=>this.h.setSetting?.("quality",r)),this._seg("setDifficulty",r=>this.h.setSetting?.("difficulty",r));let t=he("boostBtn"),i=r=>{r.preventDefault(),this.h.boost?.(!0)},n=r=>{r.preventDefault(),this.h.boost?.(!1)};t.addEventListener("touchstart",i,{passive:!1}),t.addEventListener("touchend",n,{passive:!1}),t.addEventListener("mousedown",i),t.addEventListener("mouseup",n),t.addEventListener("mouseleave",n)}_seg(e,t){let i=he(e);i.querySelectorAll("button").forEach(n=>n.addEventListener("click",()=>{this.h.sfx?.("uiClick"),i.querySelectorAll("button").forEach(r=>r.classList.remove("active")),n.classList.add("active"),t(n.dataset.v)}))}setSeg(e,t){he(e)?.querySelectorAll("button").forEach(i=>i.classList.toggle("active",i.dataset.v===t))}refreshMenu(){let e=Qe();he("menuCoins").textContent=sn(e.coins),he("shopCoins").textContent=sn(e.coins),he("menuStars").textContent=Ou();let t=Ma();he("dailyDot").classList.toggle("hidden",!t.claimable),he("playLabel").textContent=e.maxLevel>1?`PLAY · Lv ${e.maxLevel}`:"PLAY"}playWordmark(){this._runWordmark(document.querySelector("#menu .wm"),"play")}playHudWordmark(){let e=document.querySelector("#hud .wm");e&&(clearInterval(this._hudWmT),this._hudWmSeen?this._runWordmark(e,"idle"):(this._hudWmSeen=!0,this._runWordmark(e,"play")),this._hudWmT=setInterval(()=>{he("hud").classList.contains("hidden")||this._runWordmark(e,"idle")},26e3))}stopHudWordmark(){clearInterval(this._hudWmT),this._hudWmT=null}_runWordmark(e,t){e&&(e.classList.remove("play","idle"),this._measureWordmarks(e),e.offsetWidth,e.classList.add(t))}setMenuWorld(e){he("menuWorld").textContent=e}setProvider(e){this.provider=e}setCoinBalance(e){he("menuCoins").textContent=sn(e),he("shopCoins").textContent=sn(e)}updateHUD(e){let t=this._hudPrev||(this._hudPrev={});t.level!==e.level&&(t.level=e.level,he("hudLevel").textContent="Level "+e.level),t.coins!==e.coins&&(t.coins=e.coins,he("hudCoins").textContent=`${e.coins}`);let i=(e.timeMs/1e3).toFixed(1);t.time!==i&&(t.time=i,he("hudTime").textContent=i);let n=!!(e.parMs&&e.timeMs>e.parMs);t.over!==n&&(t.over=n,he("hudTimePill").classList.toggle("overtime",n));let r=Math.round(Math.min(100,e.speed/(e.maxSpeed*1.8)*100));t.pct!==r&&(t.pct=r,he("speedBar").style.width=r+"%");let a=!!e.boosting;t.boost!==a&&(t.boost=a,he("boostFlare").classList.toggle("on",a))}finishArrow(e){let t=he("goalArrow");if(!e||e.hide||e.angle==null){this._arrowOn&&(this._arrowOn=!1,t.classList.remove("show"));return}this._arrowOn||(this._arrowOn=!0,t.classList.add("show")),(this._arrowAng===void 0||Math.abs(e.angle-this._arrowAng)>.012)&&(this._arrowAng=e.angle,(this._arrowEl||(this._arrowEl=t.querySelector(".ga-arrow"))).style.transform=`rotate(${e.angle}rad)`)}hideGoalArrow(){he("goalArrow").classList.remove("show")}showChest(e,t){this.showOverlay("chest");let i=he("chestGrid");i.innerHTML="";let n=he("chestInfo"),r=he("chestCollect"),a=2,o=0,l=Array.from({length:9},()=>Math.max(10,Math.round(e*(.5+Math.random()*1.3))));n.textContent="Pick 2 chests!",r.classList.add("hidden");let h=[];for(let c=0;c<9;c++){let d=document.createElement("button");d.className="chest-cell",d.innerHTML='<span class="chest-emoji">?</span>',d.onclick=()=>{a<=0||d.classList.contains("opened")||(d.classList.add("opened"),o+=l[c],a--,d.innerHTML=`<span class="chest-emoji pop">+</span><b>+${l[c]}</b>`,this.h.sfx?.("powerup"),a>0?n.textContent="Pick 1 more!":(n.innerHTML=`You won <b>${o}</b> coins`,r.classList.remove("hidden"),h.forEach((u,f)=>{u.classList.contains("opened")||(u.classList.add("revealed"),u.innerHTML=`<span class="chest-emoji">?</span><small>+${l[f]}</small>`)})))},i.appendChild(d),h.push(d)}r.onclick=()=>{this.h.sfx?.("uiClick"),this.hideOverlay("chest"),t?.(o)}}goldRush(e){document.body.classList.toggle("goldrush",e),e&&this.banner("GOD MODE","GOLD RUSH")}enterGame(){let e=this.screens.map(i=>he(i)).find(i=>i&&!i.classList.contains("hidden")),t=()=>{for(let i of this.screens)he(i)?.classList.add("hidden");this.showHUD(!0)};e?(e.classList.add("screen-exit"),setTimeout(()=>{e.classList.remove("screen-exit"),t()},340)):t()}surprise(e,t){this.banner(e,t)}setPerk(e){let t=he("perkChip");if(t){if(!e||!Is[e]){t.classList.add("hidden");return}t.innerHTML=`<span>${Is[e].label}</span>`,t.classList.remove("hidden")}}showBoostButton(e){he("boostBtn").classList.toggle("hidden",!e)}powerups(e){let t=he("powerupChips");t.innerHTML="";for(let i of e){let n=i.def||Di[i.id]||{name:i.id,dur:1},r=document.createElement("div");r.className="pu-chip";let a=Math.max(0,Math.min(1,i.t/(n.dur||1)));r.innerHTML=`<span>${n.name||i.id}</span>
        <span class="bar" style="width:${a*100}%;background:${ju(n.color||2225151)}"></span>`,t.appendChild(r)}}showWin(e,t){this.hideGoalArrow(),this.showOverlay("win");let i=he("winStars").children;for(let a=0;a<3;a++)i[a].classList.remove("on"),a<e.stars&&setTimeout(()=>{i[a].classList.add("on"),this.h.sfx?.("star",a)},250+a*260);he("winCoins").textContent="+"+e.coinsAwarded,he("winTime").textContent=(e.timeMs/1e3).toFixed(1)+"s",he("winTimeNote").textContent=e.beatPar?"time · medal":"time",he("winMissionRow").classList.toggle("hidden",!t.noteLabel),t.noteLabel&&(he("winMission").textContent=t.noteLabel);let n=he("chestBtn");n.classList.toggle("hidden",!t.canChest),n.onclick=()=>{this.h.sfx?.("uiClick"),n.classList.add("hidden"),t.onChest?.()};let r=he("doubleBtn");r.classList.toggle("hidden",!t.canDouble),r.onclick=()=>{this.h.sfx?.("uiClick"),t.onDouble?.()},he("nextBtn").onclick=()=>{this.h.sfx?.("uiClick"),t.onNext?.()},he("replayBtn").onclick=()=>{this.h.sfx?.("uiClick"),t.onReplay?.()},he("winMenuBtn").onclick=()=>{this.h.sfx?.("uiClick"),t.onMenu?.()}}setWinCoins(e){he("winCoins").textContent="+"+e}disableDouble(){he("doubleBtn").classList.add("hidden")}showLose(e,t){this.hideGoalArrow(),this.showOverlay("lose");let i={hole:["So close!","That hole was RED — avoid red!"],hazard:["So close!","Red means danger. Time it next try."],default:["So close!","You almost had it."]},[n,r]=i[e]||i.default;t.nearFinish&&(n="SO close!",r="You were almost at the goal — one more try!"),he("loseTitle").textContent=n,he("loseSub").textContent=r;let a=he("reviveBtn");a.classList.toggle("hidden",!t.canRevive),a.onclick=()=>{this.h.sfx?.("uiClick"),t.onRevive?.()};let o=he("skipBtn");o.classList.toggle("hidden",!t.canSkip),o.onclick=()=>{this.h.sfx?.("uiClick"),t.onSkip?.()},he("retryBtn").onclick=()=>{this.h.sfx?.("uiClick"),t.onRetry?.()},he("loseMenuBtn").onclick=()=>{this.h.sfx?.("uiClick"),t.onMenu?.()}}buildShop(e){let t=he("shopGrid");t.innerHTML="",he("shopCoins").textContent=sn(Qe().coins),e==="skins"?[...Ii].sort((i,n)=>ua[i.rarity].order-ua[n.rarity].order||i.price-n.price).forEach(i=>t.appendChild(this._skinCard(i))):Ui.forEach(i=>t.appendChild(this._trailCard(i)))}_skinCard(e){let t=$n(e.id),i=Qe().skin===e.id,n=ua[e.rarity],r=document.createElement("div");r.className="card rar-"+e.rarity+(i?" equipped-card":""),r.style.setProperty("--rc",n.color);let a=document.createElement("div");a.className="card-rarity",a.textContent=n.label,r.appendChild(a);let o=document.createElement("div");o.className="card-disc",o.appendChild(wm(e)),r.appendChild(o);let l=document.createElement("div");if(l.className="cname",l.textContent=e.name,r.appendChild(l),e.perk&&Is[e.perk]){let c=document.createElement("div");c.className="card-perk",c.textContent=Is[e.perk].label,r.appendChild(c)}let h=document.createElement("button");if(i)h.className="cbtn equipped",h.textContent="✓ Equipped";else if(t)h.className="cbtn equip",h.textContent="Equip",h.onclick=()=>{this.h.equipSkin?.(e.id),this.buildShop("skins"),this.h.sfx?.("uiClick")};else{let c=Qe().coins>=e.price;h.className="cbtn "+(c?"buy":"locked"),h.innerHTML=`<span class="dot gold"></span> ${sn(e.price)}`,h.onclick=()=>{this.h.buySkin?.(e.id)?(this.buildShop("skins"),this.h.sfx?.("powerup")):(this.toast("Not enough coins"),this.h.sfx?.("uiBack"))}}return r.appendChild(h),r}_trailCard(e){let t=Qn(e.id),i=Qe().trail===e.id,n=document.createElement("div");n.className="card rar-rare"+(i?" equipped-card":""),n.style.setProperty("--rc","#3fa9ff");let r=document.createElement("div");r.className="card-rarity",r.textContent="Trail",n.appendChild(r);let a=document.createElement("div");a.className="card-disc",a.appendChild(bm(e)),n.appendChild(a);let o=document.createElement("div");o.className="cname",o.textContent=e.name,n.appendChild(o);let l=document.createElement("button");if(i)l.className="cbtn equipped",l.textContent="✓ Equipped";else if(t)l.className="cbtn equip",l.textContent="Equip",l.onclick=()=>{this.h.equipTrail?.(e.id),this.buildShop("trails"),this.h.sfx?.("uiClick")};else{let h=Qe().coins>=e.price;l.className="cbtn "+(h?"buy":"locked"),l.innerHTML=`<span class="dot gold"></span> ${sn(e.price)}`,l.onclick=()=>{this.h.buyTrail?.(e.id)?(this.buildShop("trails"),this.h.sfx?.("powerup")):(this.toast("Not enough coins"),this.h.sfx?.("uiBack"))}}return n.appendChild(l),n}showDaily(){this.showOverlay("daily");let e=Ma();he("dailyStreak").innerHTML=`Current streak: <b>${e.streak}</b> day${e.streak===1?"":"s"}`;let t=he("dailyGrid");t.innerHTML="";for(let n=0;n<Ct.daily.length;n++){let r=document.createElement("div"),a=(n+1)%Ct.dailySkinAt===0;r.className="daily-cell"+(a?" chest":"");let o=e.claimable&&n===e.dayInCycle,l=n<e.dayInCycle||!e.claimable&&n<=e.dayInCycle;o?r.classList.add("today"):l&&r.classList.add("claimed"),r.innerHTML=`Day ${n+1}<b>${a?"Chest":"+"+Ct.daily[n]}</b>`,t.appendChild(r)}let i=he("claimBtn");i.disabled=!e.claimable,i.textContent=e.claimable?`Claim +${e.reward}${e.isChest?" + chest":""}`:"Come back tomorrow",i.style.opacity=e.claimable?"1":".5",i.onclick=()=>{if(!e.claimable)return;this.h.sfx?.("powerup");let n=this.h.claimDaily?.();this.refreshMenu(),n&&this.toast(`+${n.reward} coins · streak ${n.nextStreak}`),this.showDaily()}}showSettings(){this.showOverlay("settings");let e=Qe();he("setSound").checked=e.settings.sound,he("setMusic").checked=e.settings.music,he("setSens").value=e.settings.tiltSensitivity,he("sensVal").textContent=(+e.settings.tiltSensitivity).toFixed(1),this.setSeg("setControl",e.settings.control),this.setSeg("setQuality",e.settings.quality),this.setSeg("setDifficulty",e.settings.difficulty||"normal")}_hideNotices(e){for(let i of["toast","banner","tutHint","comboPop"]){let n=he(i);n&&(n.classList.remove("show"),e&&n.classList.add("hidden"))}let t=he("controlHint");t&&(t.style.opacity="0",e&&t.classList.add("hidden"))}_notice(e,t,i,n){return this._nKind&&t<this._nPrio?!1:(clearTimeout(this._nT),this._nT=0,this._hideNotices(!0),this._nKind=e,this._nPrio=t,n(),i>0&&(this._nT=setTimeout(()=>this.clearNotice(e),i)),!0)}clearNotice(e){e&&this._nKind!==e||(clearTimeout(this._nT),this._nT=0,this._hideNotices(!1),this._nKind=null,this._nPrio=0)}tutorialHint(e,t){if(!e){this.clearNotice("tut");return}this._notice("tut",4,0,()=>{let i=he("tutHint");i&&(i.textContent=t||"",i.classList.remove("hidden"),requestAnimationFrame(()=>i.classList.add("show")))})}toast(e,t=1800){this._notice("toast",2,t,()=>{let i=he("toast");i.textContent=e,i.classList.remove("hidden"),requestAnimationFrame(()=>i.classList.add("show"))})}banner(e,t){this._notice("banner",3,1900,()=>{let i=he("banner");i.innerHTML=`<div class="b-new">${e}</div><div class="b-title">${t}</div>`,i.classList.remove("hidden"),requestAnimationFrame(()=>i.classList.add("show"))})}controlHint(e,t=3400){return this._notice("hint",1,t,()=>{let i=he("controlHint");i&&(i.textContent=e,i.classList.remove("hidden"),requestAnimationFrame(()=>{i.style.opacity="1"}))})}combo(e){e<3||this._notice("combo",1,800,()=>{let t=he("comboPop");t.textContent=`Combo ×${e}`,t.style.fontSize=Math.min(30,17+e)+"px",t.classList.remove("hidden","show"),t.offsetWidth,t.classList.add("show")})}adCurtain(e,t){let i=he("adCurtain");if(!i)return;let n=i.querySelector(".ad-msg");n&&e&&(n.textContent=t==="reward"?"Loading reward…":"Advertisement"),i.classList.toggle("hidden",!e)}};function sn(s){return s>=1e4?(s/1e3).toFixed(1)+"k":""+s}var Wu=new Map;function qu(s,e){let t=Wu.get(s);return t||(t=e(),Wu.set(s,t)),t}function bm(s){return qu("t:"+s.id,()=>Em(s))}function wm(s){return qu("s:"+s.id,()=>Tm(s))}function Em(s){let e=document.createElement("canvas");e.width=e.height=120,e.className="swatch-canvas";let t=e.getContext("2d");t.save(),t.beginPath(),t.arc(60,60,58,0,7),t.clip();let i=t.createRadialGradient(60,46,4,60,60,62);if(i.addColorStop(0,"#1b2238"),i.addColorStop(1,"#090d1a"),t.fillStyle=i,t.fillRect(0,0,120,120),s.id!=="none"){let r=Xu(s.color),a=Xu(s.color2??s.color),o=30,l=(s.size??.9)*11;for(let h=0;h<o;h++){let c=h/(o-1),d=Math.PI*.96-c*Math.PI*.72,u=62+Math.cos(d)*40,f=78+Math.sin(d)*40*.62-c*6-(s.rise??0)*(1-c)*7,g=s.rainbow?`hsl(${Math.round(c*300)},100%,62%)`:`rgb(${Math.round(a[0]+(r[0]-a[0])*c)},${Math.round(a[1]+(r[1]-a[1])*c)},${Math.round(a[2]+(r[2]-a[2])*c)})`,y=l*(.3+c*.8),p=t.createRadialGradient(u,f,0,u,f,y);p.addColorStop(0,g),p.addColorStop(.45,g),p.addColorStop(1,"rgba(0,0,0,0)"),t.globalAlpha=.25+c*.7,t.fillStyle=p,t.beginPath(),t.arc(u,f,y,0,7),t.fill()}t.globalAlpha=1}let n=t.createRadialGradient(72,36,2,78,44,26);return n.addColorStop(0,"#ffffff"),n.addColorStop(.5,"#dfe7f7"),n.addColorStop(1,"#8fa2c4"),t.fillStyle=n,t.beginPath(),t.arc(80,44,17,0,7),t.fill(),t.restore(),e}function Xu(s){return[s>>16&255,s>>8&255,s&255]}function Tm(s){let e=document.createElement("canvas");e.width=e.height=120,e.className="swatch-canvas";let t=e.getContext("2d"),i=56,n=60,r=60;if(t.save(),t.beginPath(),t.arc(n,r,i,0,7),t.clip(),s.tex){let o=document.createElement("canvas");o.width=480,o.height=240,da(o.getContext("2d"),s.tex,480,240),t.drawImage(o,120,0,240,240,0,0,120,120)}else if(s.rainbow){let o=t.createLinearGradient(0,0,120,120);o.addColorStop(0,"#2ff0d0"),o.addColorStop(.5,"#49d0ff"),o.addColorStop(1,"#7a3aff"),t.fillStyle=o,t.fillRect(0,0,120,120)}else{let o=t.createRadialGradient(44,40,6,60,60,64);o.addColorStop(0,"#ffffff"),o.addColorStop(.42,ju(s.mat.color)),o.addColorStop(1,"#00000055"),t.fillStyle=o,t.fillRect(0,0,120,120),s.mat.metalness>=.9&&(t.fillStyle="rgba(255,255,255,.3)",t.fillRect(0,80,120,8))}let a=t.createRadialGradient(46,40,2,50,44,40);return a.addColorStop(0,"rgba(255,255,255,.85)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.beginPath(),t.arc(48,42,30,0,7),t.fill(),t.restore(),s.ring&&(t.strokeStyle="#e8c98a",t.lineWidth=6,t.save(),t.translate(n,r),t.rotate(-.4),t.scale(1,.32),t.beginPath(),t.arc(0,0,52,0,7),t.stroke(),t.restore()),e}var ba=class{constructor(){this.raw={x:0,y:0},this.vec={x:0,y:0},this.boost=!1,this.mode="auto",this.activeMode="keys",this.sensitivity=1,this.tiltAvailable="DeviceOrientationEvent"in window,this.tiltPermitted=!1,this.tiltNeutral={beta:40,gamma:0},this._keys=new Set,this._touch={active:!1,ax:0,ay:0,id:null,radius:78},this._touchBoost=!1,this._lastTilt=null,this._bound=!1}isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}attach(){this._bound||(this._bound=!0,window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),window.addEventListener("blur",this._onBlur),window.addEventListener("deviceorientation",this._onTilt),this.mode==="auto"?this.activeMode=this.isTouchDevice()?this.tiltPermitted?"tilt":"touch":"keys":this.activeMode=this.mode)}setMode(e){this.mode=e,e==="auto"?this.activeMode=this.isTouchDevice()?this.tiltPermitted?"tilt":"touch":"keys":this.activeMode=e}setSensitivity(e){this.sensitivity=e}async requestTilt(){if(!this.tiltAvailable)return!1;try{let e=window.DeviceOrientationEvent;if(e&&typeof e.requestPermission=="function"){let t=await e.requestPermission();this.tiltPermitted=t==="granted"}else this.tiltPermitted=!0}catch{this.tiltPermitted=!1}return this.tiltPermitted&&(this.mode==="auto"||this.mode==="tilt")&&(this.activeMode="tilt",this.calibrate()),this.tiltPermitted}calibrate(){this._lastTilt&&(this.tiltNeutral={beta:this._lastTilt.beta,gamma:this._lastTilt.gamma})}setTouchBoost(e){this._touchBoost=e}bindTouchSurface(e){e.addEventListener("touchstart",this._onTouchStart,{passive:!1}),e.addEventListener("touchmove",this._onTouchMove,{passive:!1}),e.addEventListener("touchend",this._onTouchEnd,{passive:!1}),e.addEventListener("touchcancel",this._onTouchEnd,{passive:!1})}update(e){let t=0,i=0;if(this.activeMode==="keys"||this.mode==="auto"){let o=this._keys;if((o.has("a")||o.has("arrowleft"))&&(t-=1),(o.has("d")||o.has("arrowright"))&&(t+=1),(o.has("w")||o.has("arrowup"))&&(i-=1),(o.has("s")||o.has("arrowdown"))&&(i+=1),t||i){let l=Math.hypot(t,i)||1;t/=l,i/=l,this.activeMode=this.mode==="auto"?"keys":this.activeMode}}if(this.activeMode==="touch"&&this._touch.active&&(t=this._touch.ax,i=this._touch.ay),this.activeMode==="tilt"&&this._lastTilt){let l=this._lastTilt.gamma-this.tiltNeutral.gamma,h=this._lastTilt.beta-this.tiltNeutral.beta;t=Yu(l/32,.06),i=Yu(h/32,.06)}t*=this.sensitivity,i*=this.sensitivity;let n=Math.hypot(t,i);n>1&&(t/=n,i/=n),this.raw.x=t,this.raw.y=i;let r=1-Math.exp(-18*e);this.vec.x+=(this.raw.x-this.vec.x)*r,this.vec.y+=(this.raw.y-this.vec.y)*r;let a=this._keys.has("shift");this.boost=a||this._touchBoost}reset(){this.vec.x=0,this.vec.y=0,this.raw.x=0,this.raw.y=0}detach(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),window.removeEventListener("blur",this._onBlur),window.removeEventListener("deviceorientation",this._onTilt),this._bound=!1}_onKeyDown=e=>{let t=e.key.toLowerCase();if(["arrowup","arrowdown","arrowleft","arrowright"," "].includes(t)&&e.preventDefault(),t==="shift"){this._keys.add("shift");return}this._keys.add(t),["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"].includes(t)&&this.mode==="auto"&&(this.activeMode="keys")};_onKeyUp=e=>{let t=e.key.toLowerCase();t==="shift"&&this._keys.delete("shift"),this._keys.delete(t)};_onBlur=()=>{this._keys.clear(),this._touch.active=!1,this._touchBoost=!1};_onTilt=e=>{e.beta==null&&e.gamma==null||(this._lastTilt={beta:e.beta||0,gamma:e.gamma||0})};_onTouchStart=e=>{if(this.activeMode==="tilt")return;e.preventDefault();let t=e.changedTouches[0];this._touch.active=!0,this._touch.id=t.identifier,this._touch.ax=0,this._touch.ay=0,this._touch._ox=t.clientX,this._touch._oy=t.clientY,this.mode==="auto"&&(this.activeMode="touch")};_onTouchMove=e=>{if(this._touch.active){e.preventDefault();for(let t of e.changedTouches){if(t.identifier!==this._touch.id)continue;let i=t.clientX-this._touch._ox,n=t.clientY-this._touch._oy,r=this._touch.radius;this._touch.ax=Math.max(-1,Math.min(1,i/r)),this._touch.ay=Math.max(-1,Math.min(1,n/r))}}};_onTouchEnd=e=>{for(let t of e.changedTouches)t.identifier===this._touch.id&&(this._touch.active=!1,this._touch.ax=0,this._touch.ay=0,this._touch.id=null)}};function Yu(s,e){if(Math.abs(s)<e)return 0;let t=Math.sign(s);return s=(Math.abs(s)-e)/(1-e),t*Math.max(-1,Math.min(1,s))}var Qu="./audio/",Zu={menu:"menu.mp3",playA:"play-a.mp3",playB:"play-b.mp3"},ed={coin:"drop_002.wav",bounce:"error_007.wav",uiClick:"switch_007.wav",powerup:"question_001.wav",win:"confirmation_001.wav",die:"error_006.wav"},Am={boost:{of:"coin",gain:.83,rate:[.5,1.12,.26],lp:[900,6500]},shieldHit:{of:"bounce",gain:.62,rate:.6,lp:[780,780]},gold:{of:"win",gain:.81,rate:.85,over:{rate:1.275,delay:.085,gain:.62}},star:{of:"coin",gain:.98,steps:[1,1.26,1.5],stepGain:[1,1.05,1.16],hp:700}},Rm=30,Cm=.2,td=.52,Xl=2.6,Pm=.45,Je=null,rn,ni,es,Ni={sound:!0,music:!0},Vl=!1,Wl=new Map,Ku=new Map,an=[],Os=0,ts=null,id="playB",nd=!1,Ea=null;function ks(){if(Je)return Je;let s=window.AudioContext||window.webkitAudioContext;if(!s)return null;try{Je=new s({latencyHint:"interactive"})}catch{Je=new s}return rn=Je.createGain(),rn.gain.value=Vl?0:1,rn.connect(Je.destination),ni=Je.createGain(),ni.gain.value=0,ni.connect(rn),es=Je.createGain(),es.gain.value=Ni.sound?td:0,es.connect(rn),Je}function sd(){ks(),Je&&Je.state==="suspended"&&Je.resume(),ts&&ql()}async function rd(){ks()&&await Promise.all(Object.entries(ed).map(async([s,e])=>{if(!Wl.has(s))try{let t=await fetch(Qu+e);if(!t.ok)return;let i=await t.arrayBuffer(),n=await new Promise((r,a)=>{let o=Je.decodeAudioData(i,r,a);o&&o.then&&o.then(r,a)});Wl.set(s,n)}catch{}}))}function wa(s,{rate:e=1,gain:t=1,lp:i=null,hp:n=null,at:r=0}={}){let a=Wl.get(s);if(!a||!Je)return;let o=Je.currentTime+r,l=Je.createBufferSource();l.buffer=a,Array.isArray(e)?(l.playbackRate.setValueAtTime(e[0],o),l.playbackRate.linearRampToValueAtTime(e[1],o+e[2])):l.playbackRate.value=e;let h=l;if(i||n){let d=Je.createBiquadFilter();d.type=i?"lowpass":"highpass",d.Q.value=.7;let u=i||[n,n];d.frequency.setValueAtTime(u[0],o),u[1]!==u[0]&&d.frequency.exponentialRampToValueAtTime(u[1],o+a.duration/(Array.isArray(e)?e[1]:e)*.75),h.connect(d),h=d}let c=Je.createGain();c.gain.value=t,h.connect(c),c.connect(es),l.start(o)}function Ta(s,e){if(!ks()||!Ni.sound)return;let t=Je.currentTime*1e3;if(t-(Ku.get(s)||-1e9)<Rm)return;if(Ku.set(s,t),ed[s]){wa(s,s==="coin"?{rate:1+Math.min(e||0,8)*.025}:{});return}let i=Am[s];if(i){if(i.steps){let n=Math.min(e||0,i.steps.length-1);wa(i.of,{rate:i.steps[n],gain:i.gain*(i.stepGain?i.stepGain[n]:1),hp:i.hp});return}wa(i.of,{rate:i.rate,gain:i.gain,lp:i.lp,hp:i.hp}),i.over&&wa(i.of,{rate:i.over.rate,gain:i.gain*i.over.gain,at:i.over.delay})}}function Ju(){let s=new Audio;s.preload="none",s.crossOrigin="anonymous";let e=Je.createGain();e.gain.value=0,e.connect(ni);let t=null;try{t=Je.createMediaElementSource(s),t.connect(e)}catch{t=null}return{el:s,gain:e,src:t,track:null}}function on(s,e,t){if(!Je)return;let i=Je.currentTime;s.cancelScheduledValues(i),s.setValueAtTime(s.value,i),s.linearRampToValueAtTime(e,i+t)}function jl(){return Ni.music?Cm*(nd?Pm:1):0}function ad(s,e=Xl){if(!ks())return;an.length||(an=[Ju(),Ju()]);let t=an[Os],i=an[Os=(Os+1)%2];i.track=s,i.el.src.indexOf(Zu[s])===-1&&(i.el.src=Qu+Zu[s]),i.el.currentTime=0,i.el.loop=!1,i.src||(i.el.volume=0),i.gain.gain.value=0;let n=i.el.play();if(n&&n.catch&&n.catch(()=>{}),on(i.gain.gain,1,e),i.src||$u(i,1,e),t&&t.el.src){on(t.gain.gain,0,e),t.src||$u(t,0,e);let r=t.el;setTimeout(()=>{try{r.pause()}catch{}},e*1e3+120)}s!=="menu"&&(id=s),on(ni.gain,jl(),.4),Lm()}function $u(s,e,t){let i=s.el.volume,n=performance.now();clearInterval(s.fade),s.fade=setInterval(()=>{let r=Math.min(1,(performance.now()-n)/(t*1e3));try{s.el.volume=Math.max(0,Math.min(1,i+(e-i)*r))}catch{}r>=1&&clearInterval(s.fade)},50)}function Lm(){clearInterval(Ea),Ea=setInterval(()=>{let s=an[Os];!s||!s.el.duration||!isFinite(s.el.duration)||s.el.paused||s.el.duration-s.el.currentTime<=Xl&&ad(od())},250)}function od(){return ts==="menu"?"menu":id==="playA"?"playB":"playA"}function ql(){if(!Ni.music||!ts||!ks())return;let s=an[Os],e=ts==="menu"?"menu":s&&s.track&&s.track!=="menu"?s.track:od();if(s&&s.track===e&&!s.el.paused){on(ni.gain,jl(),.4);return}ad(e,s&&s.track?Xl:1.4)}function Aa(s){if(ts=s,!s){ld();return}ql()}function Oi(s){nd=!!s,ni&&on(ni.gain,jl(),.35)}function ld(){clearInterval(Ea),Ea=null,ni&&on(ni.gain,0,.5),setTimeout(()=>{for(let s of an){try{s.el.pause()}catch{}s.track=null}},600)}function Yl(s){Ni={...Ni,...s},es&&(es.gain.value=Ni.sound?td:0),Ni.music?ts&&ql():ld()}function hd(s){Vl=!!s,rn&&on(rn.gain,Vl?0:1,.12)}var ye="none",_i=!1,vi=!1,si=()=>{},ln=si;function dd(s){ln=s||si}var it={pause:()=>!1,resume:si,hardMute:si};function pd(s){it={...it,...s}}var Zl=si,is=!1,fd=!1,Kl=!1,Jl=si;function Ra(s){!s||!s.name||(s.name==="SDK_ERROR"?fd=!0:s.name==="SDK_GAME_PAUSE"?(Kl=!0,it.hardMute(!0),is=!!it.pause()):s.name==="SDK_GAME_START"?(it.hardMute(!1),is&&(is=!1,it.resume()),Jl()):s.name==="SDK_REWARDED_WATCH_COMPLETE"&&Zl())}async function eh(){window.sdk&&typeof window.sdk.showBanner=="function"&&await new Promise(s=>{let e=!1,t=()=>{e||(e=!0,Jl=si,s())};Kl=!1,Jl=t;try{window.sdk.showBanner()}catch{t();return}setTimeout(()=>{Kl||t()},3e3),setTimeout(t,6e4)})}var $l=!0,Ca=!1,Ql=0,cd=!1;function zs(){it.hardMute(!$l||Ca||Ql>0)}function Im(){let s=window.bridge,e=s.EVENT_NAME,t=s.platform;try{$l=t.isAudioEnabled!==!1,Ca=!!t.isPaused,zs(),t.on(e.AUDIO_STATE_CHANGED,i=>{$l=!!i,zs()}),t.on(e.PAUSE_STATE_CHANGED,i=>{Ca=!!i,zs(),Ca?is=!!it.pause():is&&(is=!1,it.resume())})}catch{}}function hn(s,e){if(ye==="playgama")try{Promise.resolve(window.bridge.platform.sendMessage(s,e)).catch(()=>{})}catch{}}async function md(s,e){let t=window.bridge,i=t.EVENT_NAME,n=t.advertisement;if(s?!n.isRewardedSupported:!n.isInterstitialSupported)return!1;let r=s?i.REWARDED_STATE_CHANGED:i.INTERSTITIAL_STATE_CHANGED;Ql++,zs();let a=!!it.pause(),o=await new Promise(l=>{let h=!1,c=!1,d=null;function u(){if(!h){h=!0,clearTimeout(d);try{n.off(r,f)}catch{}l(c)}}function f(g){s&&g==="rewarded"?(c=!0,clearTimeout(d),d=setTimeout(u,1500)):(g==="closed"||g==="failed")&&u()}try{n.on(r,f)}catch{u();return}try{s?n.showRewarded(e):n.showInterstitial(e)}catch{u();return}setTimeout(u,6e4)});return Ql--,zs(),a&&it.resume(),o}function gd(){return ye==="playgama"}var _d={get:s=>window.bridge.storage.get(s),set:(s,e)=>window.bridge.storage.set(s,e)};function vd(){if(ye==="playgama")try{return window.bridge.platform.language||"en"}catch{}return"en"}function yd(){ye!=="playgama"||cd||(cd=!0,hn("game_ready"))}function xd(s){hn("level_failed",{level:String(s)})}function th(){return!!(window.__y8Sdk&&typeof window.__y8Sdk.showAd=="function")}async function Md(s){return th()?await new Promise(e=>{let t=!1,i=!1,n=!1,r=()=>{it.hardMute(!1),i&&(i=!1,it.resume())},a=()=>{t||(t=!0,r(),e(n))};try{window.__y8Sdk.showAd({...s,beforeAd:()=>{i=!!it.pause(),it.hardMute(!0)},afterAd:()=>r(),adViewed:()=>{n=!0},adDismissed:()=>{n=!1},adBreakDone:()=>a()})}catch{a();return}setTimeout(a,6e4)}):!1}async function Sd(s){let e=!!it.pause();it.hardMute(!0);let t=null;try{t=await s()}catch{t=null}return it.hardMute(!1),e&&it.resume(),t}function bd(){return!!(window.gdsdk&&typeof window.gdsdk.showAd=="function")}function Um(){return!!(window.sdk&&typeof window.sdk.showBanner=="function")}function Pa(s,e){return new Promise(t=>{if(s()){t(!0);return}let i=Date.now(),n=()=>{if(s()){t(!0);return}if(fd||Date.now()-i>=e){t(!1);return}setTimeout(n,80)};setTimeout(n,80)})}async function wd(){if(bd())try{await Promise.race([Promise.resolve(window.gdsdk.showAd()).catch(()=>{}),new Promise(s=>setTimeout(s,6e4))])}catch{}}function Nm(){let s=window.CrazyGames?.SDK?.game,e=t=>{t&&typeof t.muteAudio=="boolean"&&it.hardMute(t.muteAudio)};try{e(s?.settings),s?.addSettingsChangeListener?.(e)}catch{}}function Om(s){let e=s&&s.nodeType===1?s:null;for(;e&&e!==document.body;e=e.parentElement)if(e.scrollHeight>e.clientHeight+1){let t=getComputedStyle(e).overflowY;if(t==="auto"||t==="scroll")return!0}return!1}var ud=!1;function Ed(){if(!ud){ud=!0;try{window.GamePix.loaded?.()}catch{}}}function km(){window.addEventListener("keydown",s=>{(s.key==="ArrowUp"||s.key==="ArrowDown"||s.key===" ")&&s.preventDefault()}),window.addEventListener("wheel",s=>{Om(s.target)||s.preventDefault()},{passive:!1}),Ed()}async function Td(){try{window.bridge&&typeof window.bridge.initialize=="function"?(ye="playgama",await window.bridge.initialize().catch(()=>{}),Im(),_i=!0):window.GamePix?(ye="gamepix",km(),_i=!0):window.CrazyGames?.SDK?(ye="crazygames",await window.CrazyGames.SDK.init().catch(()=>{}),Nm(),_i=!0):window.GD_OPTIONS||window.gdsdk?(ye="gamedistribution",window.__gdHandler=Ra,(window.__gdEvents||[]).forEach(Ra),window.__gdEvents=[],_i=!0):window.__y8||window.__y8Sdk?(ye="y8",_i=!0):window.SDK_OPTIONS||window.sdk&&typeof window.sdk.showBanner=="function"?(ye="gamemonetize",window.__gmHandler=Ra,(window.__gmEvents||[]).forEach(Ra),window.__gmEvents=[],_i=!0):window.PokiSDK?(ye="poki",await window.PokiSDK.init().catch(()=>{}),window.PokiSDK.setDebug?.(!1),_i=!0):(ye="none",_i=!0)}catch{ye="none",_i=!0}return ye}function Ad(){return ye}function Rd(){ye==="poki"&&window.PokiSDK?.gameLoadingStart?.(),ye==="crazygames"&&window.CrazyGames?.SDK?.game?.loadingStart?.()}function Cd(){ye==="poki"&&window.PokiSDK?.gameLoadingFinished?.(),ye==="crazygames"&&window.CrazyGames?.SDK?.game?.loadingStop?.(),ye==="gamepix"&&Ed()}function La(){ye==="poki"&&window.PokiSDK?.gameplayStart?.(),ye==="crazygames"&&window.CrazyGames?.SDK?.game?.gameplayStart?.(),hn("gameplay_started")}function Bs(){ye==="poki"&&window.PokiSDK?.gameplayStop?.(),ye==="crazygames"&&window.CrazyGames?.SDK?.game?.gameplayStop?.(),hn("gameplay_stopped")}function Pd(){if(ye==="poki"&&window.PokiSDK?.happyTime?.(.7),ye==="crazygames"&&window.CrazyGames?.SDK?.game?.happytime?.(),ye==="gamepix")try{window.GamePix.happyMoment?.()}catch{}hn("player_got_achievement")}function Ld(s){if(ye==="gamepix")try{window.GamePix.updateLevel?.(s)}catch{}if(ye==="crazygames")try{window.CrazyGames?.SDK?.game?.setGameContext?.({level:String(s)})}catch{}hn("level_started",{level:String(s)})}function Dd({maxLevel:s,score:e}={}){if(hn("level_completed",s!=null?{level:String(s)}:void 0),ye==="gamepix"&&e!=null)try{window.GamePix.updateScore?.(Math.round(e))}catch{}if(ye==="crazygames"&&s!=null){let t=Math.max(0,Math.min(100,Math.round(s/30*100)));try{window.CrazyGames?.SDK?.game?.reportGameCompletedPercentage?.(t)}catch{}}}function Id(){if(ye==="crazygames")try{window.CrazyGames?.SDK?.game?.clearGameContext?.()}catch{}}function ih(){return ye==="gamedistribution"||ye==="gamemonetize"}function Ud(){return ye==="gamedistribution"}async function Nd(){if(!(!ih()||vi)){vi=!0,ln(!0,"ad");try{ye==="gamedistribution"?await Pa(bd,2500)&&await wd():ye==="gamemonetize"&&await Pa(Um,2500)&&await eh()}catch{}vi=!1,ln(!1,"ad")}}async function nh(){ye==="gamedistribution"&&await sh()}async function sh(){if(!vi){vi=!0,ln(!0,"ad");try{ye==="playgama"?await md(!1,"level_completed"):ye==="poki"?await window.PokiSDK.commercialBreak():ye==="crazygames"?await new Promise(s=>{window.CrazyGames.SDK.ad.requestAd("midgame",{adFinished:s,adError:s,adStarted:si})}):ye==="gamedistribution"?await wd():ye==="gamemonetize"?await eh():ye==="y8"?await Pa(th,2500)&&await Md({type:"next",name:"level-complete"}):ye==="gamepix"&&await Sd(()=>window.GamePix.interstitialAd())}catch{}vi=!1,ln(!1,"ad")}}async function Da(){if(vi)return!1;vi=!0,ln(!0,"reward");let s=!1;try{if(ye==="playgama")s=await md(!0,"reward");else if(ye==="poki")s=await window.PokiSDK.rewardedBreak();else if(ye==="crazygames")s=await new Promise(e=>{window.CrazyGames.SDK.ad.requestAd("rewarded",{adFinished:()=>e(!0),adError:()=>e(!1),adStarted:si})});else if(ye==="gamedistribution")window.gdsdk&&typeof window.gdsdk.showAd=="function"&&(s=await new Promise(e=>{let t=!1,i=!1;Zl=()=>{i=!0};let n=()=>{t||(t=!0,Zl=si,e(i))};try{window.gdsdk.showAd("rewarded").then(()=>setTimeout(n,150)).catch(()=>n())}catch{n()}setTimeout(n,6e4)}));else if(ye==="gamepix"){let e=await Sd(()=>window.GamePix.rewardAd());s=!!(e&&e.success)}else ye==="gamemonetize"?(await eh(),s=!0):ye==="y8"?s=!!await Pa(th,2500)&&!!await Md({type:"reward",name:"reward",beforeReward:e=>{try{e()}catch{}}}):s=!0}catch{s=!1}return vi=!1,ln(!1,"reward"),s}function Bm(s){let e=s>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}var Be=(s,e)=>s+","+e,cn=[[0,-1],[1,0],[0,1],[-1,0]],Od={sizeScale:1,hazardScale:1,decoyScale:1,extraCoins:0,forgive:0,tightness:0,addBoost:!1,biggerGoal:!1,closerFinish:!1,guaranteePowerup:null,slowHazards:1};function kd(s){return s<=7?"small":s<=14?"medium":"large"}function Fm(s,e,t,i){if(i()<.66){let n=t(4);return n===0?{cx:t(s),cy:0}:n===1?{cx:s-1,cy:t(e)}:n===2?{cx:t(s),cy:e-1}:{cx:0,cy:t(e)}}return{cx:t(s),cy:t(e)}}function Hm(s){if(typeof s=="number"){let e=Math.min(1,(s-1)/24);return{stage:s,difficulty:Math.round(760+e*900),mods:{...Od},seedSalt:0,sizeBucket:kd(s)}}return{stage:s.stage,difficulty:s.difficulty??1e3,mods:{...Od,...s.mods||{}},seedSalt:s.seedSalt||0,sizeBucket:s.sizeBucket||kd(s.stage)}}function ah(s){let e=Hm(s),t=e.stage;return t===1?Gm(e):t===2?Vm(e):Wm(e)}function zd(s,e,t){let i=Array.from({length:t},()=>new Array(e).fill(1));return{plan:s,grid:i,gw:e,gh:t}}function Gm(s){let{grid:n}=zd(s,15,3);for(let l=1;l<14;l++)n[1][l]=0;let r={tx:1,ty:1},a={tx:13,ty:1},o=[{tx:5,ty:1},{tx:7,ty:1},{tx:9,ty:1}];return oh(s,n,15,3,r,a,new Set(Fd(n,15,3,r,a)),{coins:o,decoys:[],powerups:[],boostPads:[],bouncers:[],crawlers:[],spikes:[],turrets:[],sizeZones:[],rotators:[],movingWalls:[],portals:[]})}function Vm(s){let{grid:n}=zd(s,17,5);for(let h=1;h<16;h++)n[1][h]=0;n[2][7]=0,n[3][7]=0;let r={tx:1,ty:1},a={tx:15,ty:1},o=[{tx:7,ty:3}],l=[{tx:5,ty:1},{tx:7,ty:1},{tx:11,ty:1},{tx:13,ty:1}];return oh(s,n,17,5,r,a,new Set(Fd(n,17,5,r,a)),{coins:l,decoys:o,powerups:[],boostPads:[],bouncers:[],crawlers:[],spikes:[],turrets:[],sizeZones:[],rotators:[],movingWalls:[],portals:[]})}function Wm(s){let e=s.stage,t=s.mods,i=Bm(e*2654435761+12345+s.seedSalt*7),n=P=>Math.floor(i()*P),r=Ul(e),a=Math.max(0,Math.min(1,(s.difficulty-$e.diffMin)/($e.diffMax-$e.diffMin))),o=Ol[s.sizeBucket]||Ol.medium,l=P=>P[0]+n(P[1]-P[0]+1),h=Math.round(l(o.cols)*t.sizeScale),c=Math.round(l(o.rows)*t.sizeScale);h=Math.max(3,Math.min(17,h)),c=Math.max(3,Math.min(13,c));let d=Math.max(.03,Math.min(.42,.1+(1-a)*.18-(t.tightness||0)*.08)),{grid:u,gw:f,gh:g}=Xm(h,c,d,i),y=e<=7,p=Fm(h,c,n,i),_={tx:p.cx*2+1,ty:p.cy*2+1},m=new Map,v=new Map;Bd(u,f,g,_,m,v);let x=[];for(let P=0;P<c;P++)for(let L=0;L<h;L++){let k=L*2+1,ae=P*2+1,pe=m.get(Be(k,ae));pe!=null&&x.push({tx:k,ty:ae,d:pe})}x.sort((P,L)=>L.d-P.d);let w;if(!x.length)w={tx:f-2,ty:g-2};else if(t.closerFinish&&x.length>3)w=x[Math.floor(x.length*.45)];else{let P=x.filter(L=>L.d>=x[0].d*.8);w=P[n(P.length)]||x[0]}let M=new Set,b=Be(w.tx,w.ty);for(;b!=null;)M.add(b),b=v.get(b);let D=[];for(let P=0;P<g;P++)for(let L=0;L<f;L++)u[P][L]===0&&D.push({tx:L,ty:P});let I=P=>P.tx%2===1&&P.ty%2===1,z=P=>cn.reduce((L,[k,ae])=>L+(u[P.ty+ae]?.[P.tx+k]===0?1:0),0),j=D.filter(P=>I(P)&&z(P)===1&&!Ia(P,_)&&!Ia(P,w)),C=D.filter(P=>!M.has(Be(P.tx,P.ty))),B=new Set([Be(_.tx,_.ty),Be(w.tx,w.ty)]);for(let[P,L]of cn)B.add(Be(_.tx+P,_.ty+L));let H=P=>{for(let L=0;L<40;L++){let k=P[n(P.length)];if(!k)return null;let ae=Be(k.tx,k.ty);if(!B.has(ae))return B.add(ae),k}return null},se=()=>{let P=D.filter(k=>M.has(Be(k.tx,k.ty))&&!B.has(Be(k.tx,k.ty))&&!Ia(k,_)&&!Ia(k,w));if(!P.length)return null;let L=P[n(P.length)];return B.add(Be(L.tx,L.ty)),L},ue=[],ie=[...M].map(P=>{let[L,k]=P.split(",").map(Number);return{tx:L,ty:k,d:m.get(P)||0}}).sort((P,L)=>P.d-L.d);for(let P=2;P<ie.length-2;P+=2){let L=ie[P];!B.has(Be(L.tx,L.ty))&&i()<.8&&(ue.push({tx:L.tx,ty:L.ty}),B.add(Be(L.tx,L.ty)))}let Y=Math.min(12,Math.round(2+a*9));for(let P=0;P<Y;P++){let L=H(j.length&&i()<.6?j:C);L&&ue.push({tx:L.tx,ty:L.ty,risk:!0})}for(let P=0;P<(t.extraCoins||0);P++){let L=se()||H(D);L&&ue.push({tx:L.tx,ty:L.ty})}let te=[];if(r.has("decoys")){let P=Math.round(Math.min(6,1+a*6)*t.decoyScale);for(let L=0;L<P;L++){let k=H(j.length&&i()<.5?j:C);k&&te.push(k)}}let V=["crawlers","spikes","turrets","rotators"].filter(P=>r.has(P)),K=a<.28?1:a<.52?2:a<.76?3:4;t.hazardScale<.5&&(K=Math.min(K,1)),Zm(V,i);let ce=V.slice(0,K),E=Math.round(Math.min(9,a*9)*t.hazardScale),T=[],F=[],Z=[],U=[],X=()=>E>0&&(E--,!0);for(let P of ce){let L=Math.max(1,Math.ceil(E/Math.max(1,ce.length)));for(let k=0;k<L&&E>0;k++)if(P==="crawlers"){let ae=Ym(u,f,g,D,n,_,w,M);ae.length>=2&&X()&&T.push({path:ae,speed:(2+i()*1.4)*(t.slowHazards||1)})}else if(P==="spikes"){let ae=H(C.length?C:D);ae&&X()&&F.push({...ae,phase:i(),period:(1.7+i()*1.1)/(t.slowHazards||1)})}else if(P==="turrets"){let ae=H(C.length?C:D);ae&&X()&&Z.push({...ae,dir:qm(u,ae),period:(1.7+i()*1)/(t.slowHazards||1),phase:i()})}else if(P==="rotators"){let ae=H(C.length?C:D);ae&&X()&&U.push({...ae,len:1+n(2),speed:(i()<.5?1:-1)*(.7+i()*1)*(t.slowHazards||1)})}}let N=[];if(r.has("boostPads")){let P=Math.min(4,1+Math.floor(a*4));for(let L=0;L<P;L++){let k=rh(u,D,n,B,M)||Fs(u,D,n,B);k&&(N.push({tx:k.tx,ty:k.ty,dir:k.dir}),B.add(Be(k.tx,k.ty)))}}if(t.addBoost&&N.length===0){let P=rh(u,D,n,B,M)||Fs(u,D,n,B);P&&(N.push({tx:P.tx,ty:P.ty,dir:P.dir}),B.add(Be(P.tx,P.ty)))}let O=[];if(r.has("bouncers")){let P=Math.min(3,1+Math.floor(a*3));for(let L=0;L<P;L++){let k=H(C.length?C:D);k&&O.push(k)}}let G=[];if(r.has("movingWalls")){let P=Math.min(4,1+Math.floor(a*4));for(let L=0;L<P;L++){let k=Fs(u,D,n,B);k&&(G.push({tx:k.tx,ty:k.ty,dir:k.dir,period:2+i()*1.2,phase:i()}),B.add(Be(k.tx,k.ty)))}}let Q=[];if(r.has("sizeZones")){let P=Math.min(2,1+Math.floor(a*2));for(let L=0;L<P;L++){let k=H(C.length?C:D);k&&Q.push({...k,kind:i()<.5?"shrink":"grow"})}}let J=[];if(r.has("powerups")){let P=Math.min(3,1+Math.floor(a*2.5));for(let L=0;L<P;L++){let k=i()<.5?se():H(C);k&&J.push({...k,type:Nl[n(Nl.length)]})}}if(t.guaranteePowerup){let P=se()||H(D);P&&J.push({...P,type:t.guaranteePowerup})}let S=null;if(Ls(e).sig==="current"){let P=n(4)*Math.PI/2;S={x:Math.cos(P),y:Math.sin(P),strength:5+a*4}}if(y){let P=4+e;for(let k=0;k<P;k++){let ae=se()||H(C.length?C:D);ae&&ue.push({tx:ae.tx,ty:ae.ty})}let L=Ds(e)?.key;if(L==="boostPads"&&!N.length){let k=rh(u,D,n,B,M)||Fs(u,D,n,B);k&&N.push({tx:k.tx,ty:k.ty,dir:k.dir})}if(L==="bouncers"&&!O.length){let k=H(C.length?C:D);k&&O.push(k)}if(L==="powerups"&&!J.length){let k=se()||H(D);k&&J.push({...k,type:"shield"})}if(L==="movingWalls"&&!G.length){let k=Fs(u,D,n,B);k&&G.push({tx:k.tx,ty:k.ty,dir:k.dir,period:2.4,phase:i()})}}return oh(s,u,f,g,_,w,M,{coins:ue,decoys:te,powerups:J,boostPads:N,bouncers:O,crawlers:T,spikes:F,turrets:Z,sizeZones:Q,rotators:U,movingWalls:G,current:S})}function oh(s,e,t,i,n,r,a,o){let l=s.stage,h=Ls(l),c=Ul(l),d=new Set((o.decoys||[]).map(p=>Be(p.tx,p.ty))),u=jm(e,t,i,n,d);o.coins=(o.coins||[]).filter(p=>u.has(Be(p.tx,p.ty))),o.powerups=(o.powerups||[]).filter(p=>u.has(Be(p.tx,p.ty)));let f=o.coins.length,y=(8+(t+i)*.7+(s.difficulty-800)*.01)*1e3;return{level:l,stage:l,world:h,mechanics:c,difficulty:s.difficulty,mods:s.mods,grid:e,gw:t,gh:i,start:n,finish:r,safe:a,coins:o.coins,coinTotal:f,decoys:o.decoys||[],powerups:o.powerups||[],boostPads:o.boostPads||[],bouncers:o.bouncers||[],crawlers:o.crawlers||[],spikes:o.spikes||[],turrets:o.turrets||[],sizeZones:o.sizeZones||[],rotators:o.rotators||[],movingWalls:o.movingWalls||[],portals:o.portals||[],current:o.current||null,biggerGoal:!!s.mods.biggerGoal,forgive:s.mods.forgive||0,parTimeMs:y}}function Xm(s,e,t,i){let n=c=>Math.floor(i()*c),r=s*2+1,a=e*2+1,o=Array.from({length:a},()=>new Array(r).fill(1)),l=Array.from({length:e},()=>new Array(s).fill(!1)),h=[[0,0]];for(l[0][0]=!0,o[1][1]=0;h.length;){let[c,d]=h[h.length-1],u=[];for(let[_,m]of cn){let v=c+_,x=d+m;v>=0&&v<s&&x>=0&&x<e&&!l[x][v]&&u.push([v,x,_,m])}if(!u.length){h.pop();continue}let[f,g,y,p]=u[n(u.length)];l[g][f]=!0,o[g*2+1][f*2+1]=0,o[d*2+1+p][c*2+1+y]=0,h.push([f,g])}for(let c=1;c<a-1;c++)for(let d=1;d<r-1;d++){if(o[c][d]!==1)continue;let u=d%2===0&&c%2===1,f=d%2===1&&c%2===0;if(!u&&!f)continue;(u?o[c][d-1]===0&&o[c][d+1]===0:o[c-1][d]===0&&o[c+1][d]===0)&&i()<t&&(o[c][d]=0)}return{grid:o,gw:r,gh:a}}function Bd(s,e,t,i,n,r){let a=[i];for(n.set(Be(i.tx,i.ty),0),r.set(Be(i.tx,i.ty),null);a.length;){let o=a.shift(),l=n.get(Be(o.tx,o.ty));for(let[h,c]of cn){let d=o.tx+h,u=o.ty+c;if(d<0||u<0||d>=e||u>=t||s[u][d]!==0)continue;let f=Be(d,u);n.has(f)||(n.set(f,l+1),r.set(f,Be(o.tx,o.ty)),a.push({tx:d,ty:u}))}}}function jm(s,e,t,i,n){let r=new Set([Be(i.tx,i.ty)]),a=[i];for(;a.length;){let o=a.shift();for(let[l,h]of cn){let c=o.tx+l,d=o.ty+h;if(c<0||d<0||c>=e||d>=t||s[d][c]!==0)continue;let u=Be(c,d);r.has(u)||n.has(u)||(r.add(u),a.push({tx:c,ty:d}))}}return r}function Fd(s,e,t,i,n){let r=new Map,a=new Map;Bd(s,e,t,i,r,a);let o=[],l=Be(n.tx,n.ty);for(;l!=null;)o.push(l),l=a.get(l);return o}function qm(s,e){for(let[t,i]of cn)if(s[e.ty+i]?.[e.tx+t]===0)return{x:t,y:i};return{x:1,y:0}}function Fs(s,e,t,i){for(let n=0;n<50;n++){let r=e[t(e.length)];if(i.has(Be(r.tx,r.ty)))continue;let a=s[r.ty]?.[r.tx-1]===0&&s[r.ty]?.[r.tx+1]===0,o=s[r.ty-1]?.[r.tx]===0&&s[r.ty+1]?.[r.tx]===0;if(a&&!o)return{tx:r.tx,ty:r.ty,dir:{x:1,y:0}};if(o&&!a)return{tx:r.tx,ty:r.ty,dir:{x:0,y:1}}}return null}function Ym(s,e,t,i,n,r,a,o){let l=g=>!o||!o.has(Be(g.tx,g.ty)),h=g=>l(g)&&Math.abs(g.tx-r.tx)+Math.abs(g.ty-r.ty)>3&&Math.abs(g.tx-a.tx)+Math.abs(g.ty-a.ty)>1,c=null;for(let g=0;g<30;g++){let y=i[n(i.length)];if(h(y)){c=y;break}}if(!c)return[];let d=[c],u=new Set([Be(c.tx,c.ty)]),f=3+n(4);for(let g=0;g<f;g++){let y=cn.map(([p,_])=>({tx:c.tx+p,ty:c.ty+_})).filter(p=>s[p.ty]?.[p.tx]===0&&!u.has(Be(p.tx,p.ty))&&l(p));if(!y.length)break;c=y[n(y.length)],u.add(Be(c.tx,c.ty)),d.push(c)}return d}function rh(s,e,t,i,n){let r=(o,l,h)=>{let c=0,d=o.tx+l,u=o.ty+h;for(;s[u]?.[d]===0;)c++,d+=l,u+=h;return c},a=null;for(let o=0;o<70;o++){let l=e[t(e.length)];if(i.has(Be(l.tx,l.ty)))continue;let h=1+r(l,1,0)+r(l,-1,0),c=1+r(l,0,1)+r(l,0,-1),d=n&&n.has(Be(l.tx,l.ty));if(h>=4&&h>=c){let u={tx:l.tx,ty:l.ty,dir:{x:1,y:0},score:h+(d?3:0)};(!a||u.score>a.score)&&(a=u)}else if(c>=4){let u={tx:l.tx,ty:l.ty,dir:{x:0,y:1},score:c+(d?3:0)};(!a||u.score>a.score)&&(a=u)}if(a&&a.score>=7)break}return a}function Zm(s,e){for(let t=s.length-1;t>0;t--){let i=Math.floor(e()*(t+1));[s[t],s[i]]=[s[i],s[t]]}}function Ia(s,e){return s.tx===e.tx&&s.ty===e.ty}var Lt=(s,e,t)=>Math.max(e,Math.min(t,s)),Ge=s=>Lt(s,0,1),Ua=(s,e,t)=>s+(e-s)*t,lh=()=>typeof performance<"u"?performance.now():Date.now(),Na=class{constructor(e,t){this.onSave=t||(()=>{}),this.skill=e?.skill??$e.startSkill,this.history=e?.history??[],this.frustration=e?.frustration??.25,this.boredom=e?.boredom??.2,this.curiosity=e?.curiosity??.8,this.excitement=.3,this.fatigue=0,this.arch=e?.arch??{explorer:1,speedrunner:1,competitor:1,collector:1,survivor:1},this.baselineDeaths=e?.baselineDeaths??1.5,this.sizeStats=e?.sizeStats??Object.fromEntries(Us.map(i=>[i,{n:0,sat:.5}])),this.interv=e?.interv??{},this.preset=e?.preset??"normal",this.sessions=(e?.sessions??0)+1,this.risk=25,this.riskSmoothed=25,this.confidence=.1,this.modelTrust=e?.modelTrust??.6,this.state="exploring",this.momentum=0,this.riskHist=[],this.sessionLevels=0,this.events=0,this.levelsSinceNovel=0,this._lastIntervention=null,this._riskBeforeInterv=null,this._lastSize="medium",this._exploringSize=null,this.session={winStreak:0,loseStreak:0,deathStreak:0,retries:0,lastDeathSpot:null,repeatedSpot:0,idle:!1,paused:!1,tabBlur:!1,quickDeath:!1,lastDeathAt:null,retrySpeed:3,deathsThisLevel:0,levelStartMs:0,slowPlay:!1}}serialize(){return{skill:this.skill,history:this.history.slice(-50),frustration:this.frustration,boredom:this.boredom,curiosity:this.curiosity,arch:this.arch,baselineDeaths:this.baselineDeaths,sizeStats:this.sizeStats,interv:this.interv,preset:this.preset,sessions:this.sessions,modelTrust:this.modelTrust}}_save(){this.onSave(this.serialize())}setDifficulty(e){Zn[e]&&(this.preset=e,this._save())}_bias(){return(Zn[this.preset]||Zn.normal).bias}_k(){return(Zn[this.preset]||Zn.normal).k}expected(e){return 1/(1+Math.pow(10,(e-this.skill)/400))}estWinProb(e){return Math.round(this.expected(e)*100)}meters(){return{skill01:Ge((this.skill-$e.diffMin)/($e.diffMax-$e.diffMin)),frustration:Ge(this.frustration),boredom:Ge(this.boredom),excitement:Ge(this.excitement),curiosity:Ge(this.curiosity),fatigue:Ge(this.fatigue),momentum:Math.round(this.momentum)}}archetype(){let e="explorer",t=-1;for(let i in this.arch)this.arch[i]>t&&(t=this.arch[i],e=i);return e}noteLevelStart(){this.session.levelStartMs=lh(),this.session.idle=!1,this.session.paused=!1,this.session.quickDeath=!1,this.session.slowPlay=!1,this.session.deathsThisLevel=0,this.sessionLevels++,this.levelsSinceNovel++,this.fatigue=Ge(this.fatigue+.04),this.events++}noteMove(){this.session.idle=!1,this._mom(1)}noteCoin(){this._mom(1.5)}noteIdle(){this.session.idle=!0,this.boredom=Ge(this.boredom+.08),this._mom(-6)}notePause(){this.session.paused=!0}noteTabBlur(){this.session.tabBlur=!0,this._mom(-14)}noteTabFocus(){this.session.tabBlur=!1}noteNearMiss(){this.excitement=Ge(this.excitement+.35),this.boredom=Ge(this.boredom-.1)}noteSecret(){this.excitement=Ge(this.excitement+.4),this.curiosity=Ge(this.curiosity+.2)}noteNovelty(){this.curiosity=Ge(this.curiosity+.5),this.boredom=Ge(this.boredom-.25),this.excitement=Ge(this.excitement+.15),this.levelsSinceNovel=0}noteDeathNow(){this.session.lastDeathAt=lh()}noteRetryNow(){if(this.session.lastDeathAt!=null){let e=(lh()-this.session.lastDeathAt)/1e3;this.session.retrySpeed=e,this._mom(e<1.2?14:e<4?2:e<10?-10:-24),e<1.5&&(this.excitement=Ge(this.excitement+.05)),this.session.lastDeathAt=null}}_mom(e){this.momentum=Lt(this.momentum*.9+e,-100,100),this.events++}recordWin({difficulty:e,timeMs:t,par:i,coins:n,coinTotal:r,deaths:a}){let o=this.expected(e);this.skill=Lt(this.skill+this._k()*(1-o),$e.diffMin-200,$e.diffMax+200),this.history.push({d:e,won:1}),this.session.winStreak++,this.session.loseStreak=0,this.session.deathStreak=0,this.session.retries=0,this.session.repeatedSpot=0,this.session.lastDeathSpot=null;let l=a===0&&o>.82,h=i&&t<=i;this.frustration=Ge(this.frustration-(a>0?.15:.3)),this.boredom=Ge(this.boredom+(l?.16:-.06)+Math.max(0,this.session.winStreak-2)*.06),this.excitement=Ge(this.excitement+(h?.25:.05)+(a>0?.1:0)),this.fatigue=Ge(this.fatigue-(n>=r?.18:.08)),this._mom(22),h&&(this.arch.speedrunner+=2),r&&n>=r&&(this.arch.explorer+=1.5,this.arch.collector+=1.5),a===0&&(this.arch.survivor+=1.2),a>=1&&e>this.skill&&(this.arch.competitor+=2),this._baseline(a),this._scoreSize(+(l?.4:1)),this._finishIntervention(),this._afterOutcome(),this._save()}recordLoss({difficulty:e,timeMs:t,deathSpot:i,nearFinish:n}){let r=this.expected(e);this.skill=Lt(this.skill-this._k()*.55*r,$e.diffMin-200,$e.diffMax+200),this.history.push({d:e,won:0}),this.session.loseStreak++,this.session.winStreak=0,this.session.deathStreak++,this.session.retries++,this.session.deathsThisLevel++,this.session.quickDeath=t<3500;let a=this.session.deathsThisLevel/Math.max(1,this.baselineDeaths);if(this.frustration=Ge(this.frustration+(this.session.quickDeath?.2:.1)*Lt(a,.5,2)),this.boredom=Ge(this.boredom-.1),n&&(this.excitement=Ge(this.excitement+.2)),i&&this.session.lastDeathSpot){let o=Math.hypot(i.x-this.session.lastDeathSpot.x,i.z-this.session.lastDeathSpot.z);this.session.repeatedSpot=o<6?this.session.repeatedSpot+1:0}this.session.lastDeathSpot=i||null,this.arch.survivor=Math.max(1,this.arch.survivor-.3),this._mom(-16),this._scoreSize(-.8),this._finishIntervention(),this._afterOutcome(),this._save()}_baseline(e){this.baselineDeaths=Ua(this.baselineDeaths,e,.12)}_afterOutcome(){this.confidence=Ge(.12+this.sessionLevels*.08+this.events*.004),this._pushRisk(),this._updateState()}_scoreSize(e){let t=this.sizeStats[this._lastSize];if(!t)return;let i=Lt(.5+this.momentum/200+(e>0?.2:-.2)-this.frustration*.3+this.excitement*.2,0,1);t.n++,t.sat=Ua(t.sat,i,.3),this._exploringSize===this._lastSize&&(this._exploringSize=null)}pickSize(){let e=Us[0],t=-1;for(let n of Us)this.sizeStats[n].sat>t&&(t=this.sizeStats[n].sat,e=n);let i=e;if(Math.random()<.2){let n=Us.filter(r=>r!==e);i=n[Math.floor(Math.random()*n.length)],this._exploringSize=i}return this._lastSize=i,i}_beginIntervention(e){this._lastIntervention=e,this._riskBeforeInterv=this.risk}_finishIntervention(){if(!this._lastIntervention||this._riskBeforeInterv==null)return;let e=this.risk-this._riskBeforeInterv,t=this.interv[this._lastIntervention]||{n:0,delta:0};t.delta=(t.delta*t.n+e)/(t.n+1),t.n++,this.interv[this._lastIntervention]=t,this._lastIntervention=null,this._riskBeforeInterv=null}_instRisk(){let e=$e.churn,t=16,i=[],n=(r,a)=>{t+=r,r>0&&i.push({why:a,v:r})};return this.session.deathStreak>=3?n(e.deathStreak3,"repeated deaths"):this.session.deathStreak===2&&n(e.deathStreak2,"two deaths"),this.session.quickDeath&&n(e.quickDeath,"died instantly"),this.session.idle&&n(e.idle5s,"gone quiet"),this.session.repeatedSpot>=1&&n(e.repeatedSpot,"stuck on one spot"),this.session.loseStreak>=4&&n(e.longLoseStreak,"long losing streak"),this.session.tabBlur&&n(e.tabBlur,"looked away"),this.session.retrySpeed>10&&n(18,"slow to retry"),n(this.boredom*30,this.boredom>.5?"getting bored":""),n(Math.max(0,-this.momentum)*.25,""),this.session.winStreak>=1&&n(e.recentWin,""),n(-this.excitement*25,""),i.sort((r,a)=>a.v-r.v),{r:Lt(t,0,100),reason:i[0]?.why||"engaged"}}_pushRisk(){let e=this._instRisk(),t=e.r>this.risk;this.risk=Ua(this.risk,e.r,t?.6:.3),this.riskSmoothed=Ua(this.riskSmoothed,this.risk,.5),this.riskHist.push(this.risk),this.riskHist.length>6&&this.riskHist.shift(),this._lastReason=e.reason}frustrationVelocity(){let e=this.riskHist;return e.length<2?0:Lt((e[e.length-1]-e[0])/Math.max(1,e.length-1),-100,100)}churn(){let e=this.frustrationVelocity(),t=Lt(Math.round(this.riskSmoothed*(.6+.4*this.modelTrust)),0,100),i=Lt(Math.round(this.riskSmoothed+e*1.5),0,100),n=Lt(Math.round(this.riskSmoothed+e*3),0,100),r=t*(.5+.5*this.confidence),a=r>=80?"panic":r>=64?"red":r>=48?"orange":r>=30?"yellow":"green";return{risk:Math.round(this.risk),leaveProb:t,confidence:Math.round(this.confidence*100),zone:a,reason:this._lastReason||"engaged",projection:{s30:i,s60:n},state:this.state,frustration:+this.frustration.toFixed(2),boredom:+this.boredom.toFixed(2),excitement:+this.excitement.toFixed(2),momentum:Math.round(this.momentum),frustrationVelocity:Math.round(e)}}_updateState(){let e=this.meters(),t=this.churn(),i=this.state,n;t.leaveProb>78&&this.confidence>.45?n="leaving":e.frustration>.6?n="frustrated":i==="frustrated"&&e.frustration<=.5?n="recovering":e.boredom>.6?n="bored":e.excitement>.6&&e.skill01>.5?n="challenged":this.sessionLevels<3?n=this.sessionLevels<1?"exploring":"learning":e.skill01>.7&&e.frustration<.3&&e.boredom<.4?n="mastery":n="flow",this.state=n}planNext(e,t={}){let i=this.meters(),n=this.churn(),r=this.archetype();this.excitement=Ge(this.excitement-.06),this.curiosity=Ge(this.curiosity-.12);let a=this.curiosity<.35||this.levelsSinceNovel>=5,o=!!(t.newMechanic||t.worldChanged)||a||this.state==="bored",l;this.state==="leaving"||this.state==="frustrated"?l="rescue":this.state==="bored"?l="challenge":t.newMechanic?l="teach":this.state==="challenged"||this.state==="mastery"?l="challenge":l="flow";let h=this.skill+400*Math.log10((1-$e.targetWinProb)/$e.targetWinProb)+this._bias(),c={sizeScale:1,hazardScale:1,decoyScale:1,extraCoins:0,forgive:0,tightness:0,addBoost:!1,biggerGoal:!1,closerFinish:!1,guaranteePowerup:null,surpriseReward:0,slowHazards:1,novelty:o};if(l==="teach")h+=$e.offsetEasy*.5,c.hazardScale=.6;else if(l==="challenge")h+=$e.offsetHard,c.extraCoins=3,c.tightness=.4,this._beginIntervention("challenge");else if(l==="rescue"){let u=n.zone==="panic"?1.4:n.zone==="red"?1:.7;h+=$e.offsetEasy*u,c.hazardScale=Lt(.95-u*.15,.7,.95),c.decoyScale=.8,c.closerFinish=n.zone==="panic",c.guaranteePowerup="shield",c.addBoost=!0,n.zone==="panic"&&(c.surpriseReward=250),this._beginIntervention("rescue")}i.fatigue>.7&&(c.closerFinish=!0),(l==="rescue"||l==="flow")&&((r==="collector"||r==="explorer")&&(c.extraCoins+=4),r==="speedrunner"&&(c.addBoost=!0),r==="competitor"&&l==="flow"&&(h+=30),r==="survivor"&&(c.hazardScale*=.85)),h=Lt(Math.round(t.scripted?.difficulty??h),$e.diffMin,$e.diffMax);let d=t.scripted?"small":this.pickSize();return o&&(this.levelsSinceNovel=0),this._save(),{stage:e,difficulty:h,sizeBucket:d,mods:c,mode:l,churn:n,meters:i,archetype:r,novelty:o,mission:this._mission(r)}}_mission(e){return{speedrunner:{id:"fast",label:"Beat the par time",reward:40},explorer:{id:"allcoins",label:"Collect every coin",reward:45},collector:{id:"allcoins",label:"Collect every coin",reward:45},survivor:{id:"flawless",label:"Finish without dying",reward:35},competitor:{id:"fast",label:"Beat the par time",reward:40}}[e]||{id:"allcoins",label:"Collect every coin",reward:40}}checkMission(e,t){return e?e.id==="fast"?t.timeMs<=t.parMs:e.id==="allcoins"?t.coinTotal>0&&t.coins>=t.coinTotal:e.id==="flawless"?(t.deaths||0)===0:!1:!1}};var Km=[0,760,800,850,900,950,1e3,1050],hh=class{constructor(){this.canvas=document.getElementById("game"),this.ui=new Sa,this.input=new ba,this.game=new ga(this.canvas),this.director=new Na(ku(),e=>zu(e)),this.stage=1,this.levelData=null,this.run={coinValue:0},this.revivedThisRun=!1,this.deathsThisStage=0,this.winsSinceAd=0,this.lastWin=null,this.lastDifficulty=900,this.lastMods={},this.pendingStart=null,this._last=performance.now()}async boot(){this._wireHandlers(),this.game.setCallbacks(this._gameCallbacks()),dd((n,r)=>this.ui.adCurtain(n,r)),pd({pause:()=>this.game.state==="playing"?(this.pause(),!0):!1,resume:()=>{this.game.state==="paused"&&this.resume()},hardMute:n=>hd(n)});let e=await Td();this.ui.setProvider(e),Rd(),gd()?(Au(_d),await Pu()):Cu();try{document.documentElement.lang=vd()}catch{}let t=Qe();Yl({sound:t.settings.sound,music:t.settings.music}),this.input.setMode(t.settings.control),this.input.setSensitivity(t.settings.tiltSensitivity),this.input.attach(),this.input.bindTouchSurface(this.canvas),this.applyQuality(t.settings.quality);let i=()=>{sd(),window.removeEventListener("pointerdown",i),window.removeEventListener("keydown",i)};if(window.addEventListener("pointerdown",i),window.addEventListener("keydown",i),window.addEventListener("keydown",this._onKey),document.addEventListener("visibilitychange",()=>{document.hidden?(this.director.noteTabBlur(),Ad()==="gamepix"&&this.game.state==="playing"&&this.pause()):this.director.noteTabFocus()}),this.director.setDifficulty(t.settings.difficulty||"normal"),this.ui.refreshMenu(),this.ui.setMenuWorld(Ls(t.maxLevel).name),requestAnimationFrame(this._loop),Cd(),rd(),Aa("menu"),ih()){try{this._loadShowcase()}catch{}this.ui.showScreen("menu")}else this.play()}_loop=e=>{let t=Math.min(.05,(e-this._last)/1e3);this._last=e,this.input.update(t),this.game.update(t,this.input),requestAnimationFrame(this._loop)};_onKey=e=>{let t=e.key.toLowerCase();if(!["r","escape","p","enter"," "].includes(t))return;let i=this.ui.visibleOverlay(),n=this.ui.visibleBase();if(i==="adCurtain")return;let r=e.key==="Enter"||e.key===" ";if(t==="r"){i==="win"?this.startStage(this.stage,{}):i==="lose"?this.startStage(this.stage,{retry:!0}):!i&&!n&&this.game.state==="playing"&&this.restart();return}if(t==="escape"||t==="p"){i==="legal"?this.ui.hideOverlay("legal"):i==="pause"?this.resume():i==="settings"||i==="daily"||i==="chest"?this.ui.hideOverlays():n==="shop"?this.ui.showScreen("menu"):!i&&this.game.state==="playing"&&this.pause();return}r&&(e.key===" "&&e.preventDefault(),i==="win"?this._next():i==="lose"?this.startStage(this.stage,{retry:!0}):i==="pause"?this.resume():n==="menu"&&this.play())};applyQuality(e){e==="low"?this.game.setQuality("low"):e==="high"?this.game.setQuality("high"):this.game.setQuality("auto")}_loadShowcase(){this.levelData=ah({stage:Qe().maxLevel,difficulty:this.director.skill,mods:{}}),this.game.loadLevel(this.levelData,this._skinDef(),this._trailDef()),this.game.state="idle"}_skinDef(){return Ii.find(e=>e.id===Qe().skin)||Ii[0]}_trailDef(){return Ui.find(e=>e.id===Qe().trail)||Ui[0]}_updateControlUI(){this.ui.showBoostButton(this.input.activeMode!=="keys")}_maybeControlHint(){if(this._controlsShown||this._showTut||this._showBoostTut)return;let e=this.input.activeMode;this.ui.controlHint(e==="keys"?"WASD / Arrows  ·  hold Shift to boost":e==="tilt"?"Tilt to steer  ·  hold BOOST":"Drag to steer  ·  hold BOOST")&&(this._controlsShown=!0)}async play(){await Nd(),this.startStage(Qe().maxLevel,{})}async _adThen(e){await nh(),e()}_planFor(e,t){if(t)return{stage:e,difficulty:this.lastDifficulty,sizeBucket:this.lastSizeBucket,mods:{...this.lastMods},seedSalt:0,mission:this.mission,churn:this.director.churn(),novelty:!1};let n={scripted:e<=7?{difficulty:Km[e]}:null,newMechanic:!!Ds(e),worldChanged:(e-1)%ca===0&&e>1},r=this.director.planNext(e,n);return this.lastDifficulty=r.difficulty,this.lastMods=r.mods,this.lastSizeBucket=r.sizeBucket,r}startStage(e,{retry:t=!1}={}){t&&this.director.noteRetryNow(),this.stage=e;let i=this._planFor(e,t);this.curPlan=i,this.mission=i.mission,this.levelData=ah(i),this.run={coinValue:0},this.revivedThisRun=!1,t||(this.deathsThisStage=0),xa("runs"),this.game.loadLevel(this.levelData,this._skinDef(),this._trailDef()),this.game.beginResolveReset(),this.director.noteLevelStart(),Ld(e),Aa("game"),Oi(!1);let n=this.input.mode==="auto"||this.input.mode==="tilt";if(this.input.isTouchDevice()&&n&&this.input.tiltAvailable&&!this.input.tiltPermitted){this.pendingStart=e,this.pendingPlan=i,this.ui.showOverlay("tiltPrompt");return}this.ui.enterGame(),this.ui.powerups([]),this.ui.finishArrow({hide:!0}),this.ui.goldRush(!1),this._updateControlUI(),this._beginPlay(i)}_beginPlay(e){if(this.input.activeMode==="tilt"&&this.input.calibrate(),this.input.reset(),this.game.start(),La(),this.stage===1){this._showTut=!0;let r=this.input.activeMode;this.ui.tutorialHint(!0,r==="keys"?"Hold  D  or  →  to roll!":r==="tilt"?"Tilt to roll!":"Drag to roll!")}else this._showTut=!1,this.ui.tutorialHint(!1);if(this.ui.setPerk(this._skinDef().perk),this.stage===3&&!Hl("shiftHint")){Gl("shiftHint"),this._showBoostTut=!0;let r=this.input.activeMode;this.ui.tutorialHint(!0,r==="keys"?"Hold  Shift  to go FAST!":"Hold  BOOST  to go fast!"),clearTimeout(this._boostTutT),this._boostTutT=setTimeout(()=>{this._showBoostTut&&(this._showBoostTut=!1,this.ui.tutorialHint(!1))},4200)}else this._showBoostTut=!1;let t=this.stage,i=(t-1)%ca===0&&t>1,n=Ds(t);if(i?(this.ui.banner("NEW WORLD",this.levelData.world.name),this.director.noteNovelty()):n&&!Hl(n.key)?(this.ui.banner("NEW",n.label),Gl(n.key),this.director.noteNovelty()):(t%5===0&&this.ui.banner("LEVEL "+t,this.levelData.world.name),e&&e.novelty&&this.director.noteNovelty()),this.ui.setMenuWorld(this.levelData.world.name),this._maybeControlHint(),clearTimeout(this._mT),this.mission&&t>=4&&t-(this._lastMissionNote??-99)>=4&&(this._lastMissionNote=t,this._mT=setTimeout(()=>this.ui.toast(this.mission.label,2e3),2400)),e&&e.mods&&e.mods.surpriseReward){let r=e.mods.surpriseReward;Jn(r),this.ui.setCoinBalance(Qe().coins),setTimeout(()=>this.ui.surprise("LUCKY DROP","+"+r+" coins"),700)}e&&e.churn&&e.churn.zone==="panic"&&(clearTimeout(this._gT),this._gT=setTimeout(()=>this.game.forceGoldRush(),1700)),yd()}pause(){this.game.state==="playing"&&(this.director.notePause(),this.game.pause(),Oi(!0),Bs(),this.ui.showOverlay("pause"))}resume(){this.ui.hideOverlays(),this.ui.showHUD(!0),Oi(!1),this.game.resume(),La()}restart(){this.startStage(this.stage,{retry:!0})}toMenu(){Bs(),Id(),Aa("menu"),Oi(!1),this.game.state="idle",this.ui.showHUD(!1),this.ui.goldRush(!1),this.ui.showScreen("menu"),this.ui.refreshMenu()}_onWin(e){Bs(),Pd(),Oi(!0);let t=this.stage;this.director.recordWin({difficulty:this.lastDifficulty,timeMs:e.timeMs,par:this.levelData.parTimeMs,coins:e.coins,coinTotal:e.coinTotal,deaths:this.deathsThisStage});let i=this.run.coinValue,n=Ct.finishBonus(t),r=e.coins>=e.coinTotal&&e.coinTotal>0?Ct.perfectBonus:0,a=e.timeMs<=this.levelData.parTimeMs,o=a?25:0,l=this.director.checkMission(this.mission,{...e,parMs:this.levelData.parTimeMs,deaths:this.deathsThisStage}),h=l&&this.mission.reward||0,c=Math.round(i+n+r+o+h),d=t%Ct.chestEvery===0,u=Nu(t).bestTimeMs??1/0,f=e.timeMs<u;Uu(t,{stars:e.stars,coins:e.coins,timeMs:e.timeMs}),Fl(t),Jn(c),xa("wins"),this.winsSinceAd++,this.lastWin={awarded:c,doubled:!1},Dd({maxLevel:Qe().maxLevel,score:Qe().totalCoinsEver}),this.ui.setCoinBalance(Qe().coins);let g=t-(this._lastFlavourNote??-99)>=4,y="";l?y=`Mission complete  ·  +${h} coins`:r&&g?y="Perfect run  ·  every coin":a&&f&&u!==1/0&&g&&(y="New best time"),y&&(this._lastFlavourNote=t),this.ui.showWin({...e,coinsAwarded:c,beatPar:a},{canDouble:!0,canChest:d,noteLabel:y,onDouble:()=>this._doubleCoins(),onChest:()=>this._openChest(t),onNext:()=>this._next(),onReplay:()=>this._adThen(()=>this.startStage(t,{})),onMenu:()=>this._adThen(()=>this.toMenu())})}_openChest(e){this.ui.showChest(Ct.chestCoins(e),t=>{Jn(t),this.lastWin.awarded+=t,this.ui.setCoinBalance(Qe().coins),this.ui.setWinCoins(this.lastWin.awarded*(this.lastWin.doubled?2:1)),Ta("win")})}async _doubleCoins(){if(this.lastWin.doubled)return;await Da()?(Jn(this.lastWin.awarded),this.lastWin.doubled=!0,this.ui.setWinCoins(this.lastWin.awarded*2),this.ui.setCoinBalance(Qe().coins),this.ui.disableDouble(),Ta("powerup"),this.ui.toast("Coins doubled")):this.ui.toast("Ad not available")}async _next(){let e=this.stage+1;Ud()?await nh():this.winsSinceAd>=3&&e>5&&this.director.churn().zone==="green"&&(this.winsSinceAd=0,await sh()),this.startStage(e,{})}_onDie(e,t){Bs(),xd(this.stage),Oi(!0),xa("deaths"),this.deathsThisStage++,this.director.noteDeathNow(),t?.nearFinish&&this.director.noteNearMiss(),this.director.recordLoss({difficulty:this.lastDifficulty,timeMs:this.game.clockMs,deathSpot:t,nearFinish:t?.nearFinish}),this.ui.showLose(e,{nearFinish:t?.nearFinish,canRevive:!this.revivedThisRun,canSkip:this.deathsThisStage>=3,onRevive:()=>this._revive(),onSkip:()=>this._skip(),onRetry:()=>this._adThen(()=>this.startStage(this.stage,{retry:!0})),onMenu:()=>this._adThen(()=>this.toMenu())})}async _revive(){if(!await Da()){this.ui.toast("Ad not available");return}this.revivedThisRun=!0,this.ui.hideOverlays(),this.ui.showHUD(!0),Oi(!1),this.game.revive(),La(),this.ui.toast("Revived  ·  shielded")}async _skip(){if(!await Da()){this.ui.toast("Ad not available");return}Fl(this.stage),this.ui.toast("Level skipped"),this.startStage(this.stage+1,{})}_gameCallbacks(){return{onHud:e=>{this._showTut&&e.speed>1.6&&(this._showTut=!1,this.ui.tutorialHint(!1)),this._showBoostTut&&e.boosting&&(this._showBoostTut=!1,this.ui.tutorialHint(!1)),this.ui.updateHUD({level:this.stage,...e})},onCoin:(e,t,i)=>{this.run.coinValue+=t,this.director.noteMove(),i>=3&&this.ui.combo(i)},onPowerupStart:e=>this.ui.toast(e.name,1400),onPowerups:e=>this.ui.powerups(e),onPowerupEnd:()=>{},onWin:e=>this._onWin(e),onDie:(e,t)=>this._onDie(e,t),onSfx:(e,t)=>this._sfx(e,t),onGoldRush:e=>this.ui.goldRush(e),onShieldSave:()=>this.ui.toast("Shield saved you",1500),onFinishArrow:e=>this.ui.finishArrow(e),onIdle:()=>this.director.noteIdle(),onActive:()=>this.director.noteMove()}}_sfx(e,t){Ta(e==="uiBack"?"uiClick":e,t)}_wireHandlers(){this.ui.setHandlers({sfx:(e,t)=>this._sfx(e,t),play:()=>this.play(),pause:()=>this.pause(),resume:()=>this.resume(),restart:()=>this._adThen(()=>this.restart()),toMenu:()=>this._adThen(()=>this.toMenu()),calibrate:()=>this.input.calibrate(),boost:e=>this.input.setTouchBoost(e),enableTilt:async()=>{let e=await this.input.requestTilt();ya("control",e?"tilt":"touch"),e||(this.input.setMode("touch"),this.ui.toast("Using touch controls")),this._resumePendingStart()},useTouch:()=>{this.input.setMode("touch"),ya("control","touch"),this._resumePendingStart()},buySkin:e=>this._buy("skin",e),buyTrail:e=>this._buy("trail",e),equipSkin:e=>{zl(e),this.game.applySkin(this._skinDef())},equipTrail:e=>{Bl(e),this.game.applyTrail(this._trailDef())},claimDaily:()=>Fu(),setSetting:(e,t)=>this._setSetting(e,t)})}_resumePendingStart(){this.ui.enterGame(),this.ui.powerups([]),this.ui.finishArrow({visible:!1}),this.ui.goldRush(!1),this._updateControlUI(),this._beginPlay(this.pendingPlan||{mods:this.lastMods})}_buy(e,t){let n=(e==="skin"?Ii:Ui).find(a=>a.id===t);return n?(e==="skin"?$n(t):Qn(t))?!0:Lu(n.price)?(e==="skin"?(Du(t),zl(t),this.game.applySkin(this._skinDef())):(Iu(t),Bl(t),this.game.applyTrail(this._trailDef())),this.ui.setCoinBalance(Qe().coins),this.ui.toast(`Unlocked ${n.name}!`),!0):!1:!1}_setSetting(e,t){ya(e,t),(e==="sound"||e==="music")&&Yl({[e]:t}),e==="control"&&(this.input.setMode(t),this._updateControlUI()),e==="tiltSensitivity"&&this.input.setSensitivity(t),e==="quality"&&this.applyQuality(t),e==="difficulty"&&this.director.setDifficulty(t)}},Hd=new hh;window.__marble=Hd;Hd.boot();})();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
