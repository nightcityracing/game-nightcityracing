var Module = typeof GameModule !== "undefined" ? GameModule : {};
var moduleOverrides = {};
var key;
for (key in Module) {
    if (Module.hasOwnProperty(key)) {
        moduleOverrides[key] = Module[key]
    }
}
var arguments_ = [];
var thisProgram = "./this.program";
var quit_ = function(status, toThrow) {
    throw toThrow
};
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_HAS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;
ENVIRONMENT_IS_WEB = typeof window === "object";
ENVIRONMENT_IS_WORKER = typeof importScripts === "function";
ENVIRONMENT_HAS_NODE = typeof process === "object" && typeof process.versions === "object" && typeof process.versions.node === "string";
ENVIRONMENT_IS_NODE = ENVIRONMENT_HAS_NODE && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
var scriptDirectory = "";
function locateFile(path) {
    if (Module["locateFile"]) {
        return Module["locateFile"](path, scriptDirectory)
    }
    return scriptDirectory + path
}
var read_, readAsync, readBinary, setWindowTitle;
var nodeFS;
var nodePath;
if (ENVIRONMENT_IS_NODE) {
    scriptDirectory = __dirname + "/";
    read_ = function shell_read(filename, binary) {
        if (!nodeFS)
            nodeFS = require("fs");
        if (!nodePath)
            nodePath = require("path");
        filename = nodePath["normalize"](filename);
        return nodeFS["readFileSync"](filename, binary ? null : "utf8")
    }
    ;
    readBinary = function readBinary(filename) {
        var ret = read_(filename, true);
        if (!ret.buffer) {
            ret = new Uint8Array(ret)
        }
        assert(ret.buffer);
        return ret
    }
    ;
    if (process["argv"].length > 1) {
        thisProgram = process["argv"][1].replace(/\\/g, "/")
    }
    arguments_ = process["argv"].slice(2);
    if (typeof module !== "undefined") {
        module["exports"] = Module
    }
    process["on"]("uncaughtException", function(ex) {
        if (!(ex instanceof ExitStatus)) {
            throw ex
        }
    });
    process["on"]("unhandledRejection", abort);
    quit_ = function(status) {
        process["exit"](status)
    }
    ;
    Module["inspect"] = function() {
        return "[Emscripten Module object]"
    }
} else if (ENVIRONMENT_IS_SHELL) {
    if (typeof read != "undefined") {
        read_ = function shell_read(f) {
            return read(f)
        }
    }
    readBinary = function readBinary(f) {
        var data;
        if (typeof readbuffer === "function") {
            return new Uint8Array(readbuffer(f))
        }
        data = read(f, "binary");
        assert(typeof data === "object");
        return data
    }
    ;
    if (typeof scriptArgs != "undefined") {
        arguments_ = scriptArgs
    } else if (typeof arguments != "undefined") {
        arguments_ = arguments
    }
    if (typeof quit === "function") {
        quit_ = function(status) {
            quit(status)
        }
    }
    if (typeof print !== "undefined") {
        if (typeof console === "undefined")
            console = {};
        console.log = print;
        console.warn = console.error = typeof printErr !== "undefined" ? printErr : print
    }
} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
    if (ENVIRONMENT_IS_WORKER) {
        scriptDirectory = self.location.href
    } else if (document.currentScript) {
        scriptDirectory = document.currentScript.src
    }
    if (scriptDirectory.indexOf("blob:") !== 0) {
        scriptDirectory = scriptDirectory.substr(0, scriptDirectory.lastIndexOf("/") + 1)
    } else {
        scriptDirectory = ""
    }
    {
        read_ = function shell_read(url) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, false);
            xhr.send(null);
            return xhr.responseText
        }
        ;
        if (ENVIRONMENT_IS_WORKER) {
            readBinary = function readBinary(url) {
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                xhr.responseType = "arraybuffer";
                xhr.send(null);
                return new Uint8Array(xhr.response)
            }
        }
        readAsync = function readAsync(url, onload, onerror) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.responseType = "arraybuffer";
            xhr.onload = function xhr_onload() {
                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
                    onload(xhr.response);
                    return
                }
                onerror()
            }
            ;
            xhr.onerror = onerror;
            xhr.send(null)
        }
    }
    setWindowTitle = function(title) {
        document.title = title
    }
} else {}
var out = Module["print"] || console.log.bind(console);
var err = Module["printErr"] || console.warn.bind(console);
for (key in moduleOverrides) {
    if (moduleOverrides.hasOwnProperty(key)) {
        Module[key] = moduleOverrides[key]
    }
}
moduleOverrides = null;
if (Module["arguments"])
    arguments_ = Module["arguments"];
if (Module["thisProgram"])
    thisProgram = Module["thisProgram"];
if (Module["quit"])
    quit_ = Module["quit"];
var STACK_ALIGN = 16;
function dynamicAlloc(size) {
    var ret = HEAP32[DYNAMICTOP_PTR >> 2];
    var end = ret + size + 15 & -16;
    if (end > _emscripten_get_heap_size()) {
        abort()
    }
    HEAP32[DYNAMICTOP_PTR >> 2] = end;
    return ret
}
function alignMemory(size, factor) {
    if (!factor)
        factor = STACK_ALIGN;
    return Math.ceil(size / factor) * factor
}
function getNativeTypeSize(type) {
    switch (type) {
    case "i1":
    case "i8":
        return 1;
    case "i16":
        return 2;
    case "i32":
        return 4;
    case "i64":
        return 8;
    case "float":
        return 4;
    case "double":
        return 8;
    default:
        {
            if (type[type.length - 1] === "*") {
                return 4
            } else if (type[0] === "i") {
                var bits = parseInt(type.substr(1));
                assert(bits % 8 === 0, "getNativeTypeSize invalid bits " + bits + ", type " + type);
                return bits / 8
            } else {
                return 0
            }
        }
    }
}
function warnOnce(text) {
    if (!warnOnce.shown)
        warnOnce.shown = {};
    if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text)
    }
}
function convertJsFunctionToWasm(func, sig) {
    var typeSection = [1, 0, 1, 96];
    var sigRet = sig.slice(0, 1);
    var sigParam = sig.slice(1);
    var typeCodes = {
        "i": 127,
        "j": 126,
        "f": 125,
        "d": 124
    };
    typeSection.push(sigParam.length);
    for (var i = 0; i < sigParam.length; ++i) {
        typeSection.push(typeCodes[sigParam[i]])
    }
    if (sigRet == "v") {
        typeSection.push(0)
    } else {
        typeSection = typeSection.concat([1, typeCodes[sigRet]])
    }
    typeSection[1] = typeSection.length - 2;
    var bytes = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(typeSection, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0]));
    var module = new WebAssembly.Module(bytes);
    var instance = new WebAssembly.Instance(module,{
        "e": {
            "f": func
        }
    });
    var wrappedFunc = instance.exports["f"];
    return wrappedFunc
}
function addFunctionWasm(func, sig) {
    var table = wasmTable;
    var ret = table.length;
    try {
        table.grow(1)
    } catch (err) {
        if (!err instanceof RangeError) {
            throw err
        }
        throw "Unable to grow wasm table. Use a higher value for RESERVED_FUNCTION_POINTERS or set ALLOW_TABLE_GROWTH."
    }
    try {
        table.set(ret, func)
    } catch (err) {
        if (!err instanceof TypeError) {
            throw err
        }
        assert(typeof sig !== "undefined", "Missing signature argument to addFunction");
        var wrapped = convertJsFunctionToWasm(func, sig);
        table.set(ret, wrapped)
    }
    return ret
}
function removeFunctionWasm(index) {}
var funcWrappers = {};
function makeBigInt(low, high, unsigned) {
    return unsigned ? +(low >>> 0) + +(high >>> 0) * 4294967296 : +(low >>> 0) + +(high | 0) * 4294967296
}
function dynCall(sig, ptr, args) {
    if (args && args.length) {
        return Module["dynCall_" + sig].apply(null, [ptr].concat(args))
    } else {
        return Module["dynCall_" + sig].call(null, ptr)
    }
}
var tempRet0 = 0;
var setTempRet0 = function(value) {
    tempRet0 = value
};
var getTempRet0 = function() {
    return tempRet0
};
var Runtime = {};
var wasmBinary;
if (Module["wasmBinary"])
    wasmBinary = Module["wasmBinary"];
var noExitRuntime;
if (Module["noExitRuntime"])
    noExitRuntime = Module["noExitRuntime"];
if (typeof WebAssembly !== "object") {
    err("no native wasm support detected")
}
function setValue(ptr, value, type, noSafe) {
    type = type || "i8";
    if (type.charAt(type.length - 1) === "*")
        type = "i32";
    switch (type) {
    case "i1":
        HEAP8[ptr >> 0] = value;
        break;
    case "i8":
        HEAP8[ptr >> 0] = value;
        break;
    case "i16":
        HEAP16[ptr >> 1] = value;
        break;
    case "i32":
        HEAP32[ptr >> 2] = value;
        break;
    case "i64":
        tempI64 = [value >>> 0, (tempDouble = value,
        +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
        HEAP32[ptr >> 2] = tempI64[0],
        HEAP32[ptr + 4 >> 2] = tempI64[1];
        break;
    case "float":
        HEAPF32[ptr >> 2] = value;
        break;
    case "double":
        HEAPF64[ptr >> 3] = value;
        break;
    default:
        abort("invalid type for setValue: " + type)
    }
}
var wasmMemory;
var wasmTable = new WebAssembly.Table({
    "initial": 4781,
    "maximum": 4781 + 0,
    "element": "anyfunc"
});
var ABORT = false;
var EXITSTATUS = 0;
function assert(condition, text) {
    if (!condition) {
        abort("Assertion failed: " + text)
    }
}
function getCFunc(ident) {
    var func = Module["_" + ident];
    assert(func, "Cannot call unknown function " + ident + ", make sure it is exported");
    return func
}
function ccall(ident, returnType, argTypes, args, opts) {
    var toC = {
        "string": function(str) {
            var ret = 0;
            if (str !== null && str !== undefined && str !== 0) {
                var len = (str.length << 2) + 1;
                ret = stackAlloc(len);
                stringToUTF8(str, ret, len)
            }
            return ret
        },
        "array": function(arr) {
            var ret = stackAlloc(arr.length);
            writeArrayToMemory(arr, ret);
            return ret
        }
    };
    function convertReturnValue(ret) {
        if (returnType === "string")
            return UTF8ToString(ret);
        if (returnType === "boolean")
            return Boolean(ret);
        return ret
    }
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    if (args) {
        for (var i = 0; i < args.length; i++) {
            var converter = toC[argTypes[i]];
            if (converter) {
                if (stack === 0)
                    stack = stackSave();
                cArgs[i] = converter(args[i])
            } else {
                cArgs[i] = args[i]
            }
        }
    }
    var ret = func.apply(null, cArgs);
    ret = convertReturnValue(ret);
    if (stack !== 0)
        stackRestore(stack);
    return ret
}
function cwrap(ident, returnType, argTypes, opts) {
    argTypes = argTypes || [];
    var numericArgs = argTypes.every(function(type) {
        return type === "number"
    });
    var numericRet = returnType !== "string";
    if (numericRet && numericArgs && !opts) {
        return getCFunc(ident)
    }
    return function() {
        return ccall(ident, returnType, argTypes, arguments, opts)
    }
}
var ALLOC_NORMAL = 0;
var ALLOC_STACK = 1;
var ALLOC_DYNAMIC = 2;
var ALLOC_NONE = 3;
function allocate(slab, types, allocator, ptr) {
    var zeroinit, size;
    if (typeof slab === "number") {
        zeroinit = true;
        size = slab
    } else {
        zeroinit = false;
        size = slab.length
    }
    var singleType = typeof types === "string" ? types : null;
    var ret;
    if (allocator == ALLOC_NONE) {
        ret = ptr
    } else {
        ret = [_malloc, stackAlloc, dynamicAlloc][allocator](Math.max(size, singleType ? 1 : types.length))
    }
    if (zeroinit) {
        var stop;
        ptr = ret;
        assert((ret & 3) == 0);
        stop = ret + (size & ~3);
        for (; ptr < stop; ptr += 4) {
            HEAP32[ptr >> 2] = 0
        }
        stop = ret + size;
        while (ptr < stop) {
            HEAP8[ptr++ >> 0] = 0
        }
        return ret
    }
    if (singleType === "i8") {
        if (slab.subarray || slab.slice) {
            HEAPU8.set(slab, ret)
        } else {
            HEAPU8.set(new Uint8Array(slab), ret)
        }
        return ret
    }
    var i = 0, type, typeSize, previousType;
    while (i < size) {
        var curr = slab[i];
        type = singleType || types[i];
        if (type === 0) {
            i++;
            continue
        }
        if (type == "i64")
            type = "i32";
        setValue(ret + i, curr, type);
        if (previousType !== type) {
            typeSize = getNativeTypeSize(type);
            previousType = type
        }
        i += typeSize
    }
    return ret
}
var UTF8Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf8") : undefined;
function UTF8ArrayToString(u8Array, idx, maxBytesToRead) {
    var endIdx = idx + maxBytesToRead;
    var endPtr = idx;
    while (u8Array[endPtr] && !(endPtr >= endIdx))
        ++endPtr;
    if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
        return UTF8Decoder.decode(u8Array.subarray(idx, endPtr))
    } else {
        var str = "";
        while (idx < endPtr) {
            var u0 = u8Array[idx++];
            if (!(u0 & 128)) {
                str += String.fromCharCode(u0);
                continue
            }
            var u1 = u8Array[idx++] & 63;
            if ((u0 & 224) == 192) {
                str += String.fromCharCode((u0 & 31) << 6 | u1);
                continue
            }
            var u2 = u8Array[idx++] & 63;
            if ((u0 & 240) == 224) {
                u0 = (u0 & 15) << 12 | u1 << 6 | u2
            } else {
                u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u8Array[idx++] & 63
            }
            if (u0 < 65536) {
                str += String.fromCharCode(u0)
            } else {
                var ch = u0 - 65536;
                str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)
            }
        }
    }
    return str
}
function UTF8ToString(ptr, maxBytesToRead) {
    return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : ""
}
function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
    if (!(maxBytesToWrite > 0))
        return 0;
    var startIdx = outIdx;
    var endIdx = outIdx + maxBytesToWrite - 1;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343) {
            var u1 = str.charCodeAt(++i);
            u = 65536 + ((u & 1023) << 10) | u1 & 1023
        }
        if (u <= 127) {
            if (outIdx >= endIdx)
                break;
            outU8Array[outIdx++] = u
        } else if (u <= 2047) {
            if (outIdx + 1 >= endIdx)
                break;
            outU8Array[outIdx++] = 192 | u >> 6;
            outU8Array[outIdx++] = 128 | u & 63
        } else if (u <= 65535) {
            if (outIdx + 2 >= endIdx)
                break;
            outU8Array[outIdx++] = 224 | u >> 12;
            outU8Array[outIdx++] = 128 | u >> 6 & 63;
            outU8Array[outIdx++] = 128 | u & 63
        } else {
            if (outIdx + 3 >= endIdx)
                break;
            outU8Array[outIdx++] = 240 | u >> 18;
            outU8Array[outIdx++] = 128 | u >> 12 & 63;
            outU8Array[outIdx++] = 128 | u >> 6 & 63;
            outU8Array[outIdx++] = 128 | u & 63
        }
    }
    outU8Array[outIdx] = 0;
    return outIdx - startIdx
}
function stringToUTF8(str, outPtr, maxBytesToWrite) {
    return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)
}
function lengthBytesUTF8(str) {
    var len = 0;
    for (var i = 0; i < str.length; ++i) {
        var u = str.charCodeAt(i);
        if (u >= 55296 && u <= 57343)
            u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;
        if (u <= 127)
            ++len;
        else if (u <= 2047)
            len += 2;
        else if (u <= 65535)
            len += 3;
        else
            len += 4
    }
    return len
}
var UTF16Decoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-16le") : undefined;
function allocateUTF8OnStack(str) {
    var size = lengthBytesUTF8(str) + 1;
    var ret = stackAlloc(size);
    stringToUTF8Array(str, HEAP8, ret, size);
    return ret
}
function writeArrayToMemory(array, buffer) {
    HEAP8.set(array, buffer)
}
function writeAsciiToMemory(str, buffer, dontAddNull) {
    for (var i = 0; i < str.length; ++i) {
        HEAP8[buffer++ >> 0] = str.charCodeAt(i)
    }
    if (!dontAddNull)
        HEAP8[buffer >> 0] = 0
}
var WASM_PAGE_SIZE = 65536;
function alignUp(x, multiple) {
    if (x % multiple > 0) {
        x += multiple - x % multiple
    }
    return x
}
var buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;
function updateGlobalBufferAndViews(buf) {
    buffer = buf;
    Module["HEAP8"] = HEAP8 = new Int8Array(buf);
    Module["HEAP16"] = HEAP16 = new Int16Array(buf);
    Module["HEAP32"] = HEAP32 = new Int32Array(buf);
    Module["HEAPU8"] = HEAPU8 = new Uint8Array(buf);
    Module["HEAPU16"] = HEAPU16 = new Uint16Array(buf);
    Module["HEAPU32"] = HEAPU32 = new Uint32Array(buf);
    Module["HEAPF32"] = HEAPF32 = new Float32Array(buf);
    Module["HEAPF64"] = HEAPF64 = new Float64Array(buf)
}
var STACK_BASE = 98739600
  , DYNAMIC_BASE = 98739600
  , DYNAMICTOP_PTR = 95242288;
var INITIAL_TOTAL_MEMORY = Module["TOTAL_MEMORY"] || 103809024;
if (Module["wasmMemory"]) {
    wasmMemory = Module["wasmMemory"]
} else {
    wasmMemory = new WebAssembly.Memory({
        "initial": INITIAL_TOTAL_MEMORY / WASM_PAGE_SIZE
    })
}
if (wasmMemory) {
    buffer = wasmMemory.buffer
}
INITIAL_TOTAL_MEMORY = buffer.byteLength;
updateGlobalBufferAndViews(buffer);
HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;
function callRuntimeCallbacks(callbacks) {
    while (callbacks.length > 0) {
        var callback = callbacks.shift();
        if (typeof callback == "function") {
            callback();
            continue
        }
        var func = callback.func;
        if (typeof func === "number") {
            if (callback.arg === undefined) {
                Module["dynCall_v"](func)
            } else {
                Module["dynCall_vi"](func, callback.arg)
            }
        } else {
            func(callback.arg === undefined ? null : callback.arg)
        }
    }
}
var __ATPRERUN__ = [];
var __ATINIT__ = [];
var __ATMAIN__ = [];
var __ATEXIT__ = [];
var __ATPOSTRUN__ = [];
var runtimeInitialized = false;
var runtimeExited = false;
function preRun() {
    if (Module["preRun"]) {
        if (typeof Module["preRun"] == "function")
            Module["preRun"] = [Module["preRun"]];
        while (Module["preRun"].length) {
            addOnPreRun(Module["preRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPRERUN__)
}
function initRuntime() {
    runtimeInitialized = true;
    if (!Module["noFSInit"] && !FS.init.initialized)
        FS.init();
    TTY.init();
    SOCKFS.root = FS.mount(SOCKFS, {}, null);
    callRuntimeCallbacks(__ATINIT__)
}
function preMain() {
    FS.ignorePermissions = false;
    callRuntimeCallbacks(__ATMAIN__)
}
function exitRuntime() {
    runtimeExited = true
}
function postRun() {
    if (Module["postRun"]) {
        if (typeof Module["postRun"] == "function")
            Module["postRun"] = [Module["postRun"]];
        while (Module["postRun"].length) {
            addOnPostRun(Module["postRun"].shift())
        }
    }
    callRuntimeCallbacks(__ATPOSTRUN__)
}
function addOnPreRun(cb) {
    __ATPRERUN__.unshift(cb)
}
function addOnPreMain(cb) {
    __ATMAIN__.unshift(cb)
}
function addOnExit(cb) {}
function addOnPostRun(cb) {
    __ATPOSTRUN__.unshift(cb)
}
function unSign(value, bits, ignore) {
    if (value >= 0) {
        return value
    }
    return bits <= 32 ? 2 * Math.abs(1 << bits - 1) + value : Math.pow(2, bits) + value
}
function reSign(value, bits, ignore) {
    if (value <= 0) {
        return value
    }
    var half = bits <= 32 ? Math.abs(1 << bits - 1) : Math.pow(2, bits - 1);
    if (value >= half && (bits <= 32 || value > half)) {
        value = -2 * half + value
    }
    return value
}
var Math_abs = Math.abs;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_min = Math.min;
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null;
function getUniqueRunDependency(id) {
    return id
}
function addRunDependency(id) {
    runDependencies++;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
}
function removeRunDependency(id) {
    runDependencies--;
    if (Module["monitorRunDependencies"]) {
        Module["monitorRunDependencies"](runDependencies)
    }
    if (runDependencies == 0) {
        if (runDependencyWatcher !== null) {
            clearInterval(runDependencyWatcher);
            runDependencyWatcher = null
        }
        if (dependenciesFulfilled) {
            var callback = dependenciesFulfilled;
            dependenciesFulfilled = null;
            callback()
        }
    }
}
Module["preloadedImages"] = {};
Module["preloadedAudios"] = {};
function abort(what) {
    if (Module["onAbort"]) {
        Module["onAbort"](what)
    }
    what += "";
    out(what);
    err(what);
    ABORT = true;
    EXITSTATUS = 1;
    what = "abort(" + what + "). Build with -s ASSERTIONS=1 for more info.";
    throw new WebAssembly.RuntimeError(what)
}
var dataURIPrefix = "data:application/octet-stream;base64,";
function isDataURI(filename) {
    return String.prototype.startsWith ? filename.startsWith(dataURIPrefix) : filename.indexOf(dataURIPrefix) === 0
}
var wasmBinaryFile = "index.wasm";
if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile)
}
function getBinary() {
    try {
        if (wasmBinary) {
            return new Uint8Array(wasmBinary)
        }
        if (readBinary) {
            return readBinary(wasmBinaryFile)
        } else {
            throw "both async and sync fetching of the wasm failed"
        }
    } catch (err) {
        abort(err)
    }
}
function getBinaryPromise() {
    if (!wasmBinary && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === "function") {
        return fetch(wasmBinaryFile, {
            credentials: "same-origin",
            mode: "cors",
            headers: {
                "Content-Type": "application/wasm"
            }
        }).then(function(response) {
            if (!response["ok"]) {
                throw "failed to load wasm binary file at '" + wasmBinaryFile + "'"
            }
            return response["arrayBuffer"]()
        }).catch(function() {
            return getBinary()
        })
    }
    return new Promise(function(resolve, reject) {
        resolve(getBinary())
    }
    )
}
function createWasm() {
    var info = {
        "env": asmLibraryArg,
        "wasi_unstable": asmLibraryArg
    };
    function receiveInstance(instance, module) {
        var exports = instance.exports;
        Module["asm"] = exports;
        removeRunDependency("wasm-instantiate")
    }
    addRunDependency("wasm-instantiate");
    function receiveInstantiatedSource(output) {
        receiveInstance(output["instance"])
    }
    function instantiateArrayBuffer(receiver) {
        return getBinaryPromise().then(function(binary) {
            return WebAssembly.instantiate(binary, info)
        }).then(receiver, function(reason) {
            err("failed to asynchronously prepare wasm: " + reason);
            abort(reason)
        })
    }
    function instantiateAsync() {
        if (!wasmBinary && typeof WebAssembly.instantiateStreaming === "function" && !isDataURI(wasmBinaryFile) && typeof fetch === "function") {
            fetch(wasmBinaryFile, {
                credentials: "same-origin",
                mode: "cors",
                headers: {
                    "Content-Type": "application/wasm"
                }
            }).then(function(response) {
                var result = WebAssembly.instantiateStreaming(response, info);
                return result.then(receiveInstantiatedSource, function(reason) {
                    err("wasm streaming compile failed: " + reason);
                    err("falling back to ArrayBuffer instantiation");
                    instantiateArrayBuffer(receiveInstantiatedSource)
                })
            })
        } else {
            return instantiateArrayBuffer(receiveInstantiatedSource)
        }
    }
    if (Module["instantiateWasm"]) {
        try {
            var exports = Module["instantiateWasm"](info, receiveInstance);
            return exports
        } catch (e) {
            err("Module.instantiateWasm callback failed with error: " + e);
            return false
        }
    }
    instantiateAsync();
    return {}
}
var tempDouble;
var tempI64;
var ASM_CONSTS = {
    143778: function($0) {
        LogError(UTF8ToString($0))
    },
    212485: function() {
        return document.pointerLockElement != null ? 1 : 0
    },
    216001: function($0) {
        console.log(UTF8ToString($0))
    },
    216102: function($0, $1, $2, $3) {
        JS_TrackAnalyticsEvent(UTF8ToString($0), UTF8ToString($1), $2 ? UTF8ToString($2) : null, $3 ? UTF8ToString($3) : null)
    },
    227277: function($0, $1) {
        var buff = new Uint8Array(Module.HEAPU8.buffer,$0,$1);
        return stringToUTF8Array(navigator.userAgent, buff, 0, $1)
    },
    227457: function($0) {
        var ctx = $0;
        var libwebrtc = {};
        libwebrtc.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.msRTCConnection || window.webkitRTCPeerConnection;
        libwebrtc.RTCIceCandidate = window.RTCIceCandidate || window.mozRTCIceCandidate || window.msRTCIceCandidate || window.webkitRTCIceCandidate;
        libwebrtc.RTCSessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.msRTCSessionDescription || window.webkitRTCSessionDescription;
        if (!libwebrtc.RTCPeerConnection || !libwebrtc.RTCIceCandidate || !libwebrtc.RTCSessionDescription)
            return 0;
        "createOffer createAnswer".split(" ").forEach(function(method) {
            var native = libwebrtc.RTCPeerConnection.prototype[method];
            if (native.length == 0)
                return;
            libwebrtc.RTCPeerConnection.prototype[method] = function() {
                var self = this;
                if (arguments.length == 0 || arguments.length == 1 && typeof arguments[0] === "object") {
                    var opts = arguments.length === 1 ? arguments[0] : undefined;
                    return new Promise(function(resolve, reject) {
                        native.apply(self, [resolve, reject, opts])
                    }
                    )
                } else {
                    return native.apply(this, arguments)
                }
            }
        });
        "setLocalDescription setRemoteDescription addIceCandidate".split(" ").forEach(function(method) {
            var native = libwebrtc.RTCPeerConnection.prototype[method];
            libwebrtc.RTCPeerConnection.prototype[method] = function() {
                var self = this;
                var opts = arguments.length === 1 ? arguments[0] : undefined;
                if (arguments.length > 1) {
                    return native.apply(this, arguments)
                } else {
                    return new Promise(function(resolve, reject) {
                        native.apply(self, [opts, resolve, reject])
                    }
                    )
                }
            }
        });
        libwebrtc.connections = new Map;
        libwebrtc.channels = new Map;
        libwebrtc.libwebrtc_helper = Module.cwrap("libwebrtc_helper", "number", ["number", "number", "number", "number", "number", "number", "number"]);
        libwebrtc.options = {};
        function verify_connection(obj) {
            if (obj.id === undefined) {
                if (libwebrtc.connections.size == 1)
                    return libwebrtc.connections.values().next().value;
                return null
            }
            if (!libwebrtc.connections.has("" + obj.id)) {
                return null
            }
            return obj
        }
        var connection_id_generator = 1;
        libwebrtc.create = function() {
            var connection = new libwebrtc.RTCPeerConnection(libwebrtc.options,null);
            connection.destroy = libwebrtc.destroy;
            connection.ondatachannel = libwebrtc.on_datachannel;
            connection.onicecandidate = libwebrtc.on_candidate;
            connection.onsignalingstatechange = libwebrtc.on_signalstatechange;
            connection.oniceconnectionstatechange = libwebrtc.on_icestatechange;
            connection.id = connection_id_generator++;
            libwebrtc.connections.set("" + connection.id, connection);
            return connection
        }
        ;
        libwebrtc.create_channel = function(connection, name) {
            var channel = connection.createDataChannel(name);
            channel.parent = connection;
            channel.user_data = connection.user_data;
            channel.binaryType = "arraybuffer";
            channel.onopen = libwebrtc.on_channel_connected;
            channel.onclose = libwebrtc.on_channel_close;
            channel.onmessage = libwebrtc.on_channel_message;
            channel.onerror = libwebrtc.on_channel_error;
            channel._id = libwebrtc.channels.size + 1;
            libwebrtc.channels.set(channel._id, channel);
            return channel
        }
        ;
        libwebrtc.on_sdp = function() {
            if (!libwebrtc.initialized)
                return;
            var conn = verify_connection(this);
            if (!conn) {
                return
            }
            var sdp = conn.localDescription.sdp;
            var stack = stackSave();
            libwebrtc.libwebrtc_helper(ctx, conn.id, 0, 1, conn.user_data, allocate(intArrayFromString(sdp), "i8", ALLOC_STACK), sdp.length);
            stackRestore(stack)
        }
        ;
        libwebrtc.on_candidate = function(event) {
            if (!libwebrtc.initialized)
                return;
            if (!event)
                return;
            var conn = verify_connection(this);
            if (!conn) {
                return
            }
            if (conn.iceConnectionState != "new" && conn.iceConnectionState != "checking" && conn.iceConnectionState == "connected") {
                return
            }
            if (!event.candidate) {
                return
            }
            if (true) {
                var stack = stackSave();
                libwebrtc.libwebrtc_helper(ctx, conn.id, 0, 2, conn.user_data, allocate(intArrayFromString(event.candidate.candidate), "i8", ALLOC_STACK), event.candidate.candidate.length);
                stackRestore(stack)
            }
        }
        ;
        libwebrtc.on_signalstatechange = function(event) {
            if (!libwebrtc.initialized)
                return
        }
        ;
        libwebrtc.on_icestatechange = function(event) {
            var conn = verify_connection(this);
            if (!conn) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            if (conn.iceConnectionState === "failed" || conn.iceConnectionState === "disconnected") {
                try {
                    conn.close()
                } catch (e) {}
            } else if (conn.iceConnectionState === "closed") {
                libwebrtc.on_disconnected.call(conn, event)
            } else if (conn.iceConnectionState === "connected") {
                libwebrtc.libwebrtc_helper(ctx, conn.id, 0, 3, conn.user_data, 0, 0)
            }
        }
        ;
        libwebrtc.on_disconnected = function(event) {
            var conn = verify_connection(this);
            if (!conn) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            var stack = stackSave();
            libwebrtc.libwebrtc_helper(ctx, conn.id, 0, 4, conn.user_data, 0, 0);
            stackRestore(stack);
            conn.destroy()
        }
        ;
        libwebrtc.on_datachannel = function(event) {
            var conn = verify_connection(this);
            if (!conn) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            var channel = event.channel;
            channel.parent = conn;
            channel.user_data = conn.user_data;
            channel.binaryType = "arraybuffer";
            channel.onopen = libwebrtc.on_channel_accept;
            channel.onclose = libwebrtc.on_channel_close;
            channel.onmessage = libwebrtc.on_channel_message;
            channel.onerror = libwebrtc.on_channel_error;
            channel._id = libwebrtc.channels.size + 1;
            libwebrtc.channels.set(channel._id, channel)
        }
        ;
        libwebrtc.on_channel_accept = function(event) {
            if (this._id === undefined) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            if (!verify_connection(this.parent))
                return;
            var stack = stackSave();
            libwebrtc.libwebrtc_helper(ctx, this.parent.id, this._id, 5, this.user_data, allocate(intArrayFromString(this.label), "i8", ALLOC_STACK), this.label.length);
            stackRestore(stack)
        }
        ;
        libwebrtc.on_channel_connected = function(event) {
            if (this._id === undefined) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            if (!verify_connection(this.parent))
                return;
            var stack = stackSave();
            libwebrtc.libwebrtc_helper(ctx, this.parent.id, this._id, 6, this.user_data, allocate(intArrayFromString(this.label), "i8", ALLOC_STACK), this.label.length);
            stackRestore(stack)
        }
        ;
        libwebrtc.on_channel_message = function(event) {
            if (this._id === undefined) {
                return
            }
            var stack = stackSave();
            var len = event.data.byteLength;
            if (!libwebrtc.initialized)
                return;
            if (!verify_connection(this.parent))
                return;
            var ptr = allocate(len, "i8", ALLOC_STACK);
            var data = new Uint8Array(event.data);
            for (var i = 0, buf = ptr; i < len; ++i) {
                setValue(buf, data[i], "i8");
                buf++
            }
            libwebrtc.libwebrtc_helper(ctx, this.parent.id, this._id, 7, this.user_data, ptr, len);
            stackRestore(stack)
        }
        ;
        libwebrtc.on_channel_error = function(event) {
            if (this._id === undefined) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            this.close()
        }
        ;
        libwebrtc.on_channel_close = function(event) {
            if (this._id === undefined) {
                return
            }
            if (!libwebrtc.initialized)
                return;
            if (!verify_connection(this.parent))
                return;
            var stack = stackSave();
            libwebrtc.libwebrtc_helper(ctx, this.parent.id, this._id, 8, this.user_data, 0, 0);
            stackRestore(stack)
        }
        ;
        libwebrtc.destroy = function() {
            var conn = verify_connection(this);
            if (!conn) {
                return
            }
            libwebrtc.connections.delete("" + conn.id);
            conn.ondatachannel = undefined;
            conn.onicecandidate = undefined;
            conn.onsignalingstatechange = undefined;
            conn.oniceconnectionstatechange = undefined;
            if (libwebrtc.initialized)
                libwebrtc.libwebrtc_helper(ctx, conn.id, 0, 10, conn.user_data, 0, 0);
            try {
                conn.close()
            } catch (e) {}
        }
        ;
        libwebrtc.initialized = true;
        Module.__libwebrtc = libwebrtc;
        return 1
    },
    235368: function() {
        Module.__libwebrtc.channels.forEach(function(chan, key) {
            chan.onopen = undefined;
            chan.onclose = undefined;
            chan.chan = undefined;
            chan.onerror = undefined;
            chan.onmessage = undefined
        });
        Module.__libwebrtc.connections.forEach(function(conn, key) {
            conn.destroy = undefined;
            conn.ondatachannel = undefined;
            conn.onicecandidate = undefined;
            conn.onsignalingstatechange = undefined;
            conn.oniceconnectionstatechange = undefined
        });
        Module.__libwebrtc.channels.forEach(function(chan, key) {
            try {
                chan.close()
            } catch (e) {}
        });
        Module.__libwebrtc.connections.forEach(function(conn, key) {
            try {
                conn.close()
            } catch (e) {}
        });
        Module.__libwebrtc.connections.clear();
        Module.__libwebrtc.channels.clear();
        Module.__libwebrtc.initialized = false
    },
    236122: function() {
        Module.__libwebrtc.options.iceServers = []
    },
    236170: function($0) {
        var server = {};
        server.urls = "stun:" + UTF8ToString($0);
        Module.__libwebrtc.options.iceServers.push(server)
    },
    236287: function($0) {
        var connection = Module.__libwebrtc.create();
        connection.user_data = $0;
        return connection.id
    },
    236388: function($0) {
        var connection = Module.__libwebrtc.connections.get("" + $0);
        if (!connection) {
            return 0
        }
        connection.default_channel = Module.__libwebrtc.create_channel(connection, "default");
        connection.createOffer({}).then(function(offer) {
            connection.setLocalDescription(new Module.__libwebrtc.RTCSessionDescription(offer)).then(function() {
                Module.__libwebrtc.on_sdp.call(connection)
            }).catch(function(error) {})
        }).catch(function(error) {});
        return 1
    },
    236849: function($0, $1) {
        var connection = Module.__libwebrtc.connections.get("" + $0);
        if (!connection) {
            return 0
        }
        var offer = {};
        offer.type = "offer";
        offer.sdp = UTF8ToString($1);
        connection.setRemoteDescription(new Module.__libwebrtc.RTCSessionDescription(offer)).then(function() {
            connection.createAnswer().then(function(offer) {
                connection.setLocalDescription(new Module.__libwebrtc.RTCSessionDescription(offer)).then(function() {
                    Module.__libwebrtc.on_sdp.call(connection)
                }).catch(function(error) {})
            }).catch(function(error) {})
        }).catch(function(error) {});
        return 1
    },
    237430: function($0, $1) {
        var connection = Module.__libwebrtc.connections.get("" + $0);
        if (!connection) {
            return 0
        }
        var offer = {};
        offer.type = "answer";
        offer.sdp = UTF8ToString($1);
        connection.setRemoteDescription(new Module.__libwebrtc.RTCSessionDescription(offer)).then(function() {}).catch(function(error) {});
        return 1
    },
    237747: function($0, $1) {
        var connection = Module.__libwebrtc.connections.get("" + $0);
        if (!connection) {
            return 0
        }
        var options = {};
        options.candidate = UTF8ToString($1);
        options.sdpMid = "";
        options.sdpMLineIndex = 0;
        if (connection.iceConnectionState == "checking" || connection.iceConnectionState == "connected" || connection.iceConnectionState == "new") {
            connection.addIceCandidate(new Module.__libwebrtc.RTCIceCandidate(options))
        } else {}
    },
    238183: function($0, $1) {
        var connection = Module.__libwebrtc.connections.get("" + $0);
        if (!connection) {
            return 0
        }
        var channel;
        if (connection.default_channel) {
            channel = connection.default_channel;
            connection.default_channel = 0
        } else {
            channel = Module.__libwebrtc.create_channel(connection, UTF8ToString($1))
        }
        return channel._id
    },
    238502: function($0, $1, $2) {
        var channel = Module.__libwebrtc.channels.get($0);
        if (!channel) {
            return -1
        }
        var data_in = new Uint8Array(Module.HEAPU8.buffer,$1,$2);
        var data = new Uint8Array($2);
        data.set(data_in);
        try {
            channel.send(data)
        } catch (e) {}
        return $2
    },
    238758: function($0) {
        var connection = Module.__libwebrtc.connections.get("" + $0);
        if (!connection) {
            return -1
        }
        Module.__libwebrtc.connections.delete("" + connection.id);
        try {
            connection.close()
        } catch (e) {}
    },
    238960: function($0) {
        var libwebsocket = {};
        var ctx = $0;
        libwebsocket.sockets = new Map;
        libwebsocket.lws_helper = Module.cwrap("lws_helper", "number", ["number", "number", "number", "number", "number", "number", "number"]);
        libwebsocket.connect = function(url, protocol, user_data) {
            try {
                var socket = new WebSocket(url,protocol);
                socket.binaryType = "arraybuffer";
                socket.user_data = user_data;
                socket.protocol_id = 0;
                socket.destroy = this.destroy;
                socket.onopen = this.on_connect;
                socket.onmessage = this.on_message;
                socket.onclose = this.on_close;
                socket.onerror = this.on_error;
                socket.id = this.sockets.size + 1;
                this.sockets.set(socket.id, socket);
                return socket
            } catch (e) {
                Module.print("Socket creation failed:" + e);
                return 0
            }
        }
        ;
        libwebsocket.on_connect = function() {
            if (!libwebsocket.initialized)
                return;
            var stack = stackSave();
            var ret = libwebsocket.lws_helper(0, ctx, this.id, 9, this.user_data, allocate(intArrayFromString(this.protocol), "i8", ALLOC_STACK), this.protocol.length);
            if (!ret) {
                ret = libwebsocket.lws_helper(this.protocol_id, ctx, this.id, 3, this.user_data, 0, 0)
            }
            if (ret) {
                this.close()
            }
            stackRestore(stack)
        }
        ;
        libwebsocket.on_message = function(event) {
            if (!libwebsocket.initialized)
                return;
            var stack = stackSave();
            var len = event.data.byteLength;
            var ptr = allocate(len, "i8", ALLOC_STACK);
            var data = new Uint8Array(event.data);
            for (var i = 0, buf = ptr; i < len; ++i) {
                setValue(buf, data[i], "i8");
                buf++
            }
            if (libwebsocket.lws_helper(this.protocol_id, ctx, this.id, 6, this.user_data, ptr, len)) {
                this.close()
            }
            stackRestore(stack)
        }
        ;
        libwebsocket.on_close = function() {
            if (!libwebsocket.initialized)
                return;
            this.destroy()
        }
        ;
        libwebsocket.on_error = function(event) {
            this.close()
        }
        ;
        libwebsocket.destroy = function() {
            this.onopen = undefined;
            this.onmessage = undefined;
            this.onclose = undefined;
            this.onerror = undefined;
            libwebsocket.sockets.delete(this.id);
            if (!libwebsocket.initialized)
                return;
            libwebsocket.lws_helper(this.protocol_id, ctx, this.id, 11, this.user_data, 0, 0)
        }
        ;
        libwebsocket.initialized = true;
        Module.__libwebsocket = libwebsocket
    },
    241097: function() {
        Module.__libwebsocket.sockets.forEach(function(socket, key) {
            socket.onopen = undefined;
            socket.onmessage = undefined;
            socket.onclose = undefined;
            socket.onerror = undefined;
            socket.destroy = undefined
        });
        Module.__libwebsocket.sockets.clear();
        Module.__libwebsocket.initialized = false
    },
    241391: function($0, $1, $2) {
        var socket = Module.__libwebsocket.connect(UTF8ToString($0), UTF8ToString($1), $2);
        if (!socket) {
            return 0
        }
        return socket.id
    },
    241528: function($0, $1, $2) {
        var socket = Module.__libwebsocket.sockets.get($0);
        if (!socket) {
            return -1
        }
        var data_in = new Uint8Array(Module.HEAPU8.buffer,$1,$2);
        var data = new Uint8Array($2);
        data.set(data_in);
        socket.send(data);
        return $2
    },
    265567: function() {
        if (Module["canvas"]) {
            Module["canvas"].style["cursor"] = "none"
        }
    },
    266402: function() {
        if (typeof AudioContext !== "undefined") {
            return 1
        } else if (typeof webkitAudioContext !== "undefined") {
            return 1
        }
        return 0
    },
    267532: function() {
        if (typeof navigator.mediaDevices !== "undefined" && typeof navigator.mediaDevices.getUserMedia !== "undefined") {
            return 1
        } else if (typeof navigator.webkitGetUserMedia !== "undefined") {
            return 1
        }
        return 0
    },
    267765: function() {
        return screen.width
    },
    268582: function($0) {
        if (Module["canvas"]) {
            Module["canvas"].style["cursor"] = UTF8ToString($0)
        }
        return 0
    },
    269223: function($0) {
        if (typeof SDL2 === "undefined") {
            SDL2 = {}
        }
        if (!$0) {
            SDL2.audio = {}
        } else {
            SDL2.capture = {}
        }
        if (!SDL2.audioContext) {
            if (typeof AudioContext !== "undefined") {
                SDL2.audioContext = new AudioContext
            } else if (typeof webkitAudioContext !== "undefined") {
                SDL2.audioContext = new webkitAudioContext
            }
        }
        return SDL2.audioContext === undefined ? -1 : 0
    },
    269618: function() {
        return screen.height
    },
    270629: function() {
        return SDL2.audioContext.sampleRate
    },
    270684: function($0) {
        if (typeof Module["setWindowTitle"] !== "undefined") {
            Module["setWindowTitle"](UTF8ToString($0))
        }
        return 0
    },
    270950: function($0, $1, $2, $3) {
        var have_microphone = function(stream) {
            if (SDL2.capture.silenceTimer !== undefined) {
                clearTimeout(SDL2.capture.silenceTimer);
                SDL2.capture.silenceTimer = undefined
            }
            SDL2.capture.mediaStreamNode = SDL2.audioContext.createMediaStreamSource(stream);
            SDL2.capture.scriptProcessorNode = SDL2.audioContext.createScriptProcessor($1, $0, 1);
            SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {
                if (SDL2 === undefined || SDL2.capture === undefined) {
                    return
                }
                audioProcessingEvent.outputBuffer.getChannelData(0).fill(0);
                SDL2.capture.currentCaptureBuffer = audioProcessingEvent.inputBuffer;
                Runtime.dynCall("vi", $2, [$3])
            }
            ;
            SDL2.capture.mediaStreamNode.connect(SDL2.capture.scriptProcessorNode);
            SDL2.capture.scriptProcessorNode.connect(SDL2.audioContext.destination);
            SDL2.capture.stream = stream
        };
        var no_microphone = function(error) {};
        SDL2.capture.silenceBuffer = SDL2.audioContext.createBuffer($0, $1, SDL2.audioContext.sampleRate);
        SDL2.capture.silenceBuffer.getChannelData(0).fill(0);
        var silence_callback = function() {
            SDL2.capture.currentCaptureBuffer = SDL2.capture.silenceBuffer;
            Runtime.dynCall("vi", $2, [$3])
        };
        SDL2.capture.silenceTimer = setTimeout(silence_callback, $1 / SDL2.audioContext.sampleRate * 1e3);
        if (navigator.mediaDevices !== undefined && navigator.mediaDevices.getUserMedia !== undefined) {
            navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            }).then(have_microphone).catch(no_microphone)
        } else if (navigator.webkitGetUserMedia !== undefined) {
            navigator.webkitGetUserMedia({
                audio: true,
                video: false
            }, have_microphone, no_microphone)
        }
    },
    272778: function($0, $1, $2, $3) {
        SDL2.audio.scriptProcessorNode = SDL2.audioContext["createScriptProcessor"]($1, 0, $0);
        SDL2.audio.scriptProcessorNode["onaudioprocess"] = function(e) {
            if (SDL2 === undefined || SDL2.audio === undefined) {
                return
            }
            SDL2.audio.currentOutputBuffer = e["outputBuffer"];
            Runtime.dynCall("vi", $2, [$3])
        }
        ;
        SDL2.audio.scriptProcessorNode["connect"](SDL2.audioContext["destination"])
    },
    273303: function($0, $1) {
        var numChannels = SDL2.capture.currentCaptureBuffer.numberOfChannels;
        for (var c = 0; c < numChannels; ++c) {
            var channelData = SDL2.capture.currentCaptureBuffer.getChannelData(c);
            if (channelData.length != $1) {
                throw "Web Audio capture buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
            }
            if (numChannels == 1) {
                for (var j = 0; j < $1; ++j) {
                    setValue($0 + j * 4, channelData[j], "float")
                }
            } else {
                for (var j = 0; j < $1; ++j) {
                    setValue($0 + (j * numChannels + c) * 4, channelData[j], "float")
                }
            }
        }
    },
    274037: function($0, $1) {
        var numChannels = SDL2.audio.currentOutputBuffer["numberOfChannels"];
        for (var c = 0; c < numChannels; ++c) {
            var channelData = SDL2.audio.currentOutputBuffer["getChannelData"](c);
            if (channelData.length != $1) {
                throw "Web Audio output buffer length mismatch! Destination size: " + channelData.length + " samples vs expected " + $1 + " samples!"
            }
            for (var j = 0; j < $1; ++j) {
                channelData[j] = HEAPF32[$0 + (j * numChannels + c << 2) >> 2]
            }
        }
    },
    274789: function($0) {
        if ($0) {
            if (SDL2.capture.silenceTimer !== undefined) {
                clearTimeout(SDL2.capture.silenceTimer)
            }
            if (SDL2.capture.stream !== undefined) {
                var tracks = SDL2.capture.stream.getAudioTracks();
                for (var i = 0; i < tracks.length; i++) {
                    SDL2.capture.stream.removeTrack(tracks[i])
                }
                SDL2.capture.stream = undefined
            }
            if (SDL2.capture.scriptProcessorNode !== undefined) {
                SDL2.capture.scriptProcessorNode.onaudioprocess = function(audioProcessingEvent) {}
                ;
                SDL2.capture.scriptProcessorNode.disconnect();
                SDL2.capture.scriptProcessorNode = undefined
            }
            if (SDL2.capture.mediaStreamNode !== undefined) {
                SDL2.capture.mediaStreamNode.disconnect();
                SDL2.capture.mediaStreamNode = undefined
            }
            if (SDL2.capture.silenceBuffer !== undefined) {
                SDL2.capture.silenceBuffer = undefined
            }
            SDL2.capture = undefined
        } else {
            if (SDL2.audio.scriptProcessorNode != undefined) {
                SDL2.audio.scriptProcessorNode.disconnect();
                SDL2.audio.scriptProcessorNode = undefined
            }
            SDL2.audio = undefined
        }
        if (SDL2.audioContext !== undefined && SDL2.audio === undefined && SDL2.capture === undefined) {
            SDL2.audioContext.close();
            SDL2.audioContext = undefined
        }
    },
    292779: function($0, $1) {
        try {
            window.localStorage.setItem(UTF8ToString($0), UTF8ToString($1))
        } catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {}
        }
    },
    294377: function($0) {
        var json = window.localStorage.getItem(UTF8ToString($0));
        if (json == undefined || typeof json != "string")
            return null;
        var heap_str = _malloc(json.length + 1);
        stringToUTF8(json, heap_str, json.length + 1);
        return heap_str
    },
    299028: function() {
        window.__swiff_xhr_requests = {};
        window.__swiff_xhr_cbid = 0
    },
    299962: function($0, $1, $2, $3, $4) {
        var url = UTF8ToString($0);
        var headerlist = UTF8ToString($1);
        var POST_body_ptr = $2;
        var POST_body_size = $3;
        var headers = [];
        if (headerlist.length > 0) {
            var headers_packed = headerlist.split("\n");
            for (var i = 0; i < headers_packed.length; ++i)
                headers[i] = headers_packed[i].split(": ")
        }
        var method = POST_body_ptr != 0 ? "POST" : "GET";
        var cb_id = window.__swiff_xhr_cbid++;
        var JSONP_callback_name;
        if (method === "GET" && POST_body_size == 0 && headers.length == 0) {
            var parts = url.split("?");
            if (parts.length == 2) {
                var keyvalues = parts[1].split("&");
                for (var i = 0; i < keyvalues.length; ++i) {
                    var keyvalue = keyvalues[i].split("=");
                    if (keyvalue[0] === "callback") {
                        JSONP_callback_name = decodeURIComponent(keyvalue[1]);
                        break
                    }
                }
            }
        }
        if (JSONP_callback_name) {
            window[JSONP_callback_name] = function(response) {
                window.__swiff_xhr_requests[cb_id] = StringToUTF8ArrayBuffer(JSON.stringify(response));
                delete window[JSONP_callback_name]
            }
            ;
            jQuery.ajax({
                url: url,
                jsonp: "callback",
                jsonpCallback: JSONP_callback_name,
                dataType: "jsonp",
                cache: true,
                error: function(e) {
                    window.__swiff_xhr_requests[cb_id] = 500;
                    delete window[JSONP_callback_name]
                }
            })
        } else {
            var req = new XMLHttpRequest;
            req.open(method, url, true);
            for (var i = 0; i < headers.length; ++i) {
                var header = headers[i];
                req.setRequestHeader(header[0], header[1])
            }
            req.responseType = "arraybuffer";
            req.onload = function() {
                var data = req.response;
                if (!(req.status >= 200 && req.status < 300 || req.status === 304) || req.response === null)
                    window.__swiff_xhr_requests[cb_id] = req.status;
                else
                    window.__swiff_xhr_requests[cb_id] = req.response
            }
            ;
            if (method == "POST") {
                var POST_body_view = new Uint8Array(Module.HEAPU8.buffer,POST_body_ptr,POST_body_size);
                req.send(POST_body_view)
            } else {
                req.send()
            }
        }
        return cb_id
    },
    303224: function($0, $1) {
        var cb_id = $0;
        var resp = new Uint32Array(Module.HEAPU32.buffer,$1,3);
        var result = window.__swiff_xhr_requests[cb_id];
        if (result === undefined)
            return 0;
        delete window.__swiff_xhr_requests[cb_id];
        if (typeof result === "number") {
            resp[0] = 0;
            resp[1] = 1;
            resp[2] = result;
            return -1
        }
        var buffer_ptr = Module._malloc(result.byteLength);
        Module.HEAPU8.set(new Uint8Array(result), buffer_ptr);
        resp[0] = buffer_ptr;
        resp[1] = result.byteLength;
        resp[2] = 200;
        return 1
    },
    314140: function($0) {
        Module._free($0)
    }
};
var _readAsmConstArgsArray = [];
function readAsmConstArgs(sigPtr, buf) {
    var args = _readAsmConstArgsArray;
    args.length = 0;
    while (1) {
        var ch = HEAPU8[sigPtr++];
        if (!ch)
            return args;
        if (ch === "d".charCodeAt(0) || ch === "f".charCodeAt(0)) {
            buf = alignMemory(buf, 8);
            args.push(HEAPF64[buf >> 3]);
            buf += 8
        } else if (ch === "i".charCodeAt(0)) {
            buf = alignMemory(buf, 4);
            args.push(HEAP32[buf >> 2]);
            buf += 4
        }
    }
}
function _emscripten_asm_const_iii(code, sigPtr, argbuf) {
    var args = readAsmConstArgs(sigPtr, argbuf);
    return ASM_CONSTS[code].apply(null, args)
}
__ATINIT__.push({
    func: function() {
        ___wasm_call_ctors()
    }
});
function demangle(func) {
    return func
}
function demangleAll(text) {
    var regex = /\b_Z[\w\d_]+/g;
    return text.replace(regex, function(x) {
        var y = demangle(x);
        return x === y ? x : y + " [" + x + "]"
    })
}
function jsStackTrace() {
    var err = new Error;
    if (!err.stack) {
        try {
            throw new Error(0)
        } catch (e) {
            err = e
        }
        if (!err.stack) {
            return "(no stack trace available)"
        }
    }
    return err.stack.toString()
}
function stackTrace() {
    var js = jsStackTrace();
    if (Module["extraStackTrace"])
        js += "\n" + Module["extraStackTrace"]();
    return demangleAll(js)
}
function _emscripten_set_main_loop_timing(mode, value) {
    Browser.mainLoop.timingMode = mode;
    Browser.mainLoop.timingValue = value;
    if (!Browser.mainLoop.func) {
        return 1
    }
    if (mode == 0) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setTimeout() {
            var timeUntilNextTick = Math.max(0, Browser.mainLoop.tickStartTime + value - _emscripten_get_now()) | 0;
            setTimeout(Browser.mainLoop.runner, timeUntilNextTick)
        }
        ;
        Browser.mainLoop.method = "timeout"
    } else if (mode == 1) {
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_rAF() {
            Browser.requestAnimationFrame(Browser.mainLoop.runner)
        }
        ;
        Browser.mainLoop.method = "rAF"
    } else if (mode == 2) {
        if (typeof setImmediate === "undefined") {
            var setImmediates = [];
            var emscriptenMainLoopMessageId = "setimmediate";
            var Browser_setImmediate_messageHandler = function(event) {
                if (event.data === emscriptenMainLoopMessageId || event.data.target === emscriptenMainLoopMessageId) {
                    event.stopPropagation();
                    setImmediates.shift()()
                }
            };
            addEventListener("message", Browser_setImmediate_messageHandler, true);
            setImmediate = function Browser_emulated_setImmediate(func) {
                setImmediates.push(func);
                if (ENVIRONMENT_IS_WORKER) {
                    if (Module["setImmediates"] === undefined)
                        Module["setImmediates"] = [];
                    Module["setImmediates"].push(func);
                    postMessage({
                        target: emscriptenMainLoopMessageId
                    })
                } else
                    postMessage(emscriptenMainLoopMessageId, "*")
            }
        }
        Browser.mainLoop.scheduler = function Browser_mainLoop_scheduler_setImmediate() {
            setImmediate(Browser.mainLoop.runner)
        }
        ;
        Browser.mainLoop.method = "immediate"
    }
    return 0
}
function _emscripten_get_now() {
    abort()
}
function _emscripten_set_main_loop(func, fps, simulateInfiniteLoop, arg, noSetTiming) {
    noExitRuntime = true;
    assert(!Browser.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters.");
    Browser.mainLoop.func = func;
    Browser.mainLoop.arg = arg;
    var browserIterationFunc;
    if (typeof arg !== "undefined") {
        browserIterationFunc = function() {
            Module["dynCall_vi"](func, arg)
        }
    } else {
        browserIterationFunc = function() {
            Module["dynCall_v"](func)
        }
    }
    var thisMainLoopId = Browser.mainLoop.currentlyRunningMainloop;
    Browser.mainLoop.runner = function Browser_mainLoop_runner() {
        if (ABORT)
            return;
        if (Browser.mainLoop.queue.length > 0) {
            var start = Date.now();
            var blocker = Browser.mainLoop.queue.shift();
            blocker.func(blocker.arg);
            if (Browser.mainLoop.remainingBlockers) {
                var remaining = Browser.mainLoop.remainingBlockers;
                var next = remaining % 1 == 0 ? remaining - 1 : Math.floor(remaining);
                if (blocker.counted) {
                    Browser.mainLoop.remainingBlockers = next
                } else {
                    next = next + .5;
                    Browser.mainLoop.remainingBlockers = (8 * remaining + next) / 9
                }
            }
            console.log('main loop blocker "' + blocker.name + '" took ' + (Date.now() - start) + " ms");
            Browser.mainLoop.updateStatus();
            if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop)
                return;
            setTimeout(Browser.mainLoop.runner, 0);
            return
        }
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop)
            return;
        Browser.mainLoop.currentFrameNumber = Browser.mainLoop.currentFrameNumber + 1 | 0;
        if (Browser.mainLoop.timingMode == 1 && Browser.mainLoop.timingValue > 1 && Browser.mainLoop.currentFrameNumber % Browser.mainLoop.timingValue != 0) {
            Browser.mainLoop.scheduler();
            return
        } else if (Browser.mainLoop.timingMode == 0) {
            Browser.mainLoop.tickStartTime = _emscripten_get_now()
        }
        if (Browser.mainLoop.method === "timeout" && Module.ctx) {
            err("Looks like you are rendering without using requestAnimationFrame for the main loop. You should use 0 for the frame rate in emscripten_set_main_loop in order to use requestAnimationFrame, as that can greatly improve your frame rates!");
            Browser.mainLoop.method = ""
        }
        Browser.mainLoop.runIter(browserIterationFunc);
        if (thisMainLoopId < Browser.mainLoop.currentlyRunningMainloop)
            return;
        if (typeof SDL === "object" && SDL.audio && SDL.audio.queueNewAudioData)
            SDL.audio.queueNewAudioData();
        Browser.mainLoop.scheduler()
    }
    ;
    if (!noSetTiming) {
        if (fps && fps > 0)
            _emscripten_set_main_loop_timing(0, 1e3 / fps);
        else
            _emscripten_set_main_loop_timing(1, 1);
        Browser.mainLoop.scheduler()
    }
    if (simulateInfiniteLoop) {
        throw "SimulateInfiniteLoop"
    }
}
var Browser = {
    mainLoop: {
        scheduler: null,
        method: "",
        currentlyRunningMainloop: 0,
        func: null,
        arg: 0,
        timingMode: 0,
        timingValue: 0,
        currentFrameNumber: 0,
        queue: [],
        pause: function() {
            Browser.mainLoop.scheduler = null;
            Browser.mainLoop.currentlyRunningMainloop++
        },
        resume: function() {
            Browser.mainLoop.currentlyRunningMainloop++;
            var timingMode = Browser.mainLoop.timingMode;
            var timingValue = Browser.mainLoop.timingValue;
            var func = Browser.mainLoop.func;
            Browser.mainLoop.func = null;
            _emscripten_set_main_loop(func, 0, false, Browser.mainLoop.arg, true);
            _emscripten_set_main_loop_timing(timingMode, timingValue);
            Browser.mainLoop.scheduler()
        },
        updateStatus: function() {
            if (Module["setStatus"]) {
                var message = Module["statusMessage"] || "Please wait...";
                var remaining = Browser.mainLoop.remainingBlockers;
                var expected = Browser.mainLoop.expectedBlockers;
                if (remaining) {
                    if (remaining < expected) {
                        Module["setStatus"](message + " (" + (expected - remaining) + "/" + expected + ")")
                    } else {
                        Module["setStatus"](message)
                    }
                } else {
                    Module["setStatus"]("")
                }
            }
        },
        runIter: function(func) {
            if (ABORT)
                return;
            if (Module["preMainLoop"]) {
                var preRet = Module["preMainLoop"]();
                if (preRet === false) {
                    return
                }
            }
            try {
                func()
            } catch (e) {
                if (e instanceof ExitStatus) {
                    return
                } else {
                    if (e && typeof e === "object" && e.stack)
                        err("exception thrown: " + [e, e.stack]);
                    throw e
                }
            }
            if (Module["postMainLoop"])
                Module["postMainLoop"]()
        }
    },
    isFullscreen: false,
    pointerLock: false,
    moduleContextCreatedCallbacks: [],
    workers: [],
    init: function() {
        if (!Module["preloadPlugins"])
            Module["preloadPlugins"] = [];
        if (Browser.initted)
            return;
        Browser.initted = true;
        try {
            new Blob;
            Browser.hasBlobConstructor = true
        } catch (e) {
            Browser.hasBlobConstructor = false;
            console.log("warning: no blob constructor, cannot create blobs with mimetypes")
        }
        Browser.BlobBuilder = typeof MozBlobBuilder != "undefined" ? MozBlobBuilder : typeof WebKitBlobBuilder != "undefined" ? WebKitBlobBuilder : !Browser.hasBlobConstructor ? console.log("warning: no BlobBuilder") : null;
        Browser.URLObject = typeof window != "undefined" ? window.URL ? window.URL : window.webkitURL : undefined;
        if (!Module.noImageDecoding && typeof Browser.URLObject === "undefined") {
            console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available.");
            Module.noImageDecoding = true
        }
        var imagePlugin = {};
        imagePlugin["canHandle"] = function imagePlugin_canHandle(name) {
            return !Module.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(name)
        }
        ;
        imagePlugin["handle"] = function imagePlugin_handle(byteArray, name, onload, onerror) {
            var b = null;
            if (Browser.hasBlobConstructor) {
                try {
                    b = new Blob([byteArray],{
                        type: Browser.getMimetype(name)
                    });
                    if (b.size !== byteArray.length) {
                        b = new Blob([new Uint8Array(byteArray).buffer],{
                            type: Browser.getMimetype(name)
                        })
                    }
                } catch (e) {
                    warnOnce("Blob constructor present but fails: " + e + "; falling back to blob builder")
                }
            }
            if (!b) {
                var bb = new Browser.BlobBuilder;
                bb.append(new Uint8Array(byteArray).buffer);
                b = bb.getBlob()
            }
            var url = Browser.URLObject.createObjectURL(b);
            var img = new Image;
            img.onload = function img_onload() {
                assert(img.complete, "Image " + name + " could not be decoded");
                var canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);
                Module["preloadedImages"][name] = canvas;
                Browser.URLObject.revokeObjectURL(url);
                if (onload)
                    onload(byteArray)
            }
            ;
            img.onerror = function img_onerror(event) {
                console.log("Image " + url + " could not be decoded");
                if (onerror)
                    onerror()
            }
            ;
            img.src = url
        }
        ;
        Module["preloadPlugins"].push(imagePlugin);
        var audioPlugin = {};
        audioPlugin["canHandle"] = function audioPlugin_canHandle(name) {
            return !Module.noAudioDecoding && name.substr(-4)in {
                ".ogg": 1,
                ".wav": 1,
                ".mp3": 1
            }
        }
        ;
        audioPlugin["handle"] = function audioPlugin_handle(byteArray, name, onload, onerror) {
            var done = false;
            function finish(audio) {
                if (done)
                    return;
                done = true;
                Module["preloadedAudios"][name] = audio;
                if (onload)
                    onload(byteArray)
            }
            function fail() {
                if (done)
                    return;
                done = true;
                Module["preloadedAudios"][name] = new Audio;
                if (onerror)
                    onerror()
            }
            if (Browser.hasBlobConstructor) {
                try {
                    var b = new Blob([byteArray],{
                        type: Browser.getMimetype(name)
                    })
                } catch (e) {
                    return fail()
                }
                var url = Browser.URLObject.createObjectURL(b);
                var audio = new Audio;
                audio.addEventListener("canplaythrough", function() {
                    finish(audio)
                }, false);
                audio.onerror = function audio_onerror(event) {
                    if (done)
                        return;
                    console.log("warning: browser could not fully decode audio " + name + ", trying slower base64 approach");
                    function encode64(data) {
                        var BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        var PAD = "=";
                        var ret = "";
                        var leftchar = 0;
                        var leftbits = 0;
                        for (var i = 0; i < data.length; i++) {
                            leftchar = leftchar << 8 | data[i];
                            leftbits += 8;
                            while (leftbits >= 6) {
                                var curr = leftchar >> leftbits - 6 & 63;
                                leftbits -= 6;
                                ret += BASE[curr]
                            }
                        }
                        if (leftbits == 2) {
                            ret += BASE[(leftchar & 3) << 4];
                            ret += PAD + PAD
                        } else if (leftbits == 4) {
                            ret += BASE[(leftchar & 15) << 2];
                            ret += PAD
                        }
                        return ret
                    }
                    audio.src = "data:audio/x-" + name.substr(-3) + ";base64," + encode64(byteArray);
                    finish(audio)
                }
                ;
                audio.src = url;
                Browser.safeSetTimeout(function() {
                    finish(audio)
                }, 1e4)
            } else {
                return fail()
            }
        }
        ;
        Module["preloadPlugins"].push(audioPlugin);
        function pointerLockChange() {
            Browser.pointerLock = document["pointerLockElement"] === Module["canvas"] || document["mozPointerLockElement"] === Module["canvas"] || document["webkitPointerLockElement"] === Module["canvas"] || document["msPointerLockElement"] === Module["canvas"]
        }
        var canvas = Module["canvas"];
        if (canvas) {
            canvas.requestPointerLock = canvas["requestPointerLock"] || canvas["mozRequestPointerLock"] || canvas["webkitRequestPointerLock"] || canvas["msRequestPointerLock"] || function() {}
            ;
            canvas.exitPointerLock = document["exitPointerLock"] || document["mozExitPointerLock"] || document["webkitExitPointerLock"] || document["msExitPointerLock"] || function() {}
            ;
            canvas.exitPointerLock = canvas.exitPointerLock.bind(document);
            document.addEventListener("pointerlockchange", pointerLockChange, false);
            document.addEventListener("mozpointerlockchange", pointerLockChange, false);
            document.addEventListener("webkitpointerlockchange", pointerLockChange, false);
            document.addEventListener("mspointerlockchange", pointerLockChange, false);
            if (Module["elementPointerLock"]) {
                canvas.addEventListener("click", function(ev) {
                    if (!Browser.pointerLock && Module["canvas"].requestPointerLock) {
                        Module["canvas"].requestPointerLock();
                        ev.preventDefault()
                    }
                }, false)
            }
        }
    },
    createContext: function(canvas, useWebGL, setInModule, webGLContextAttributes) {
        if (useWebGL && Module.ctx && canvas == Module.canvas)
            return Module.ctx;
        var ctx;
        var contextHandle;
        if (useWebGL) {
            var contextAttributes = {
                antialias: false,
                alpha: false,
                majorVersion: 1
            };
            if (webGLContextAttributes) {
                for (var attribute in webGLContextAttributes) {
                    contextAttributes[attribute] = webGLContextAttributes[attribute]
                }
            }
            if (typeof GL !== "undefined") {
                contextHandle = GL.createContext(canvas, contextAttributes);
                if (contextHandle) {
                    ctx = GL.getContext(contextHandle).GLctx
                }
            }
        } else {
            ctx = canvas.getContext("2d")
        }
        if (!ctx)
            return null;
        if (setInModule) {
            if (!useWebGL)
                assert(typeof GLctx === "undefined", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it");
            Module.ctx = ctx;
            if (useWebGL)
                GL.makeContextCurrent(contextHandle);
            Module.useWebGL = useWebGL;
            Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
                callback()
            });
            Browser.init()
        }
        return ctx
    },
    destroyContext: function(canvas, useWebGL, setInModule) {},
    fullscreenHandlersInstalled: false,
    lockPointer: undefined,
    resizeCanvas: undefined,
    requestFullscreen: function(lockPointer, resizeCanvas, vrDevice) {
        Browser.lockPointer = lockPointer;
        Browser.resizeCanvas = resizeCanvas;
        Browser.vrDevice = vrDevice;
        if (typeof Browser.lockPointer === "undefined")
            Browser.lockPointer = true;
        if (typeof Browser.resizeCanvas === "undefined")
            Browser.resizeCanvas = false;
        if (typeof Browser.vrDevice === "undefined")
            Browser.vrDevice = null;
        var canvas = Module["canvas"];
        function fullscreenChange() {
            Browser.isFullscreen = false;
            var canvasContainer = canvas.parentNode;
            if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvasContainer) {
                canvas.exitFullscreen = Browser.exitFullscreen;
                if (Browser.lockPointer)
                    canvas.requestPointerLock();
                Browser.isFullscreen = true;
                if (Browser.resizeCanvas) {
                    Browser.setFullscreenCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            } else {
                canvasContainer.parentNode.insertBefore(canvas, canvasContainer);
                canvasContainer.parentNode.removeChild(canvasContainer);
                if (Browser.resizeCanvas) {
                    Browser.setWindowedCanvasSize()
                } else {
                    Browser.updateCanvasDimensions(canvas)
                }
            }
            if (Module["onFullScreen"])
                Module["onFullScreen"](Browser.isFullscreen);
            if (Module["onFullscreen"])
                Module["onFullscreen"](Browser.isFullscreen)
        }
        if (!Browser.fullscreenHandlersInstalled) {
            Browser.fullscreenHandlersInstalled = true;
            document.addEventListener("fullscreenchange", fullscreenChange, false);
            document.addEventListener("mozfullscreenchange", fullscreenChange, false);
            document.addEventListener("webkitfullscreenchange", fullscreenChange, false);
            document.addEventListener("MSFullscreenChange", fullscreenChange, false)
        }
        var canvasContainer = document.createElement("div");
        canvas.parentNode.insertBefore(canvasContainer, canvas);
        canvasContainer.appendChild(canvas);
        canvasContainer.requestFullscreen = canvasContainer["requestFullscreen"] || canvasContainer["mozRequestFullScreen"] || canvasContainer["msRequestFullscreen"] || (canvasContainer["webkitRequestFullscreen"] ? function() {
            canvasContainer["webkitRequestFullscreen"](Element["ALLOW_KEYBOARD_INPUT"])
        }
        : null) || (canvasContainer["webkitRequestFullScreen"] ? function() {
            canvasContainer["webkitRequestFullScreen"](Element["ALLOW_KEYBOARD_INPUT"])
        }
        : null);
        if (vrDevice) {
            canvasContainer.requestFullscreen({
                vrDisplay: vrDevice
            })
        } else {
            canvasContainer.requestFullscreen()
        }
    },
    exitFullscreen: function() {
        if (!Browser.isFullscreen) {
            return false
        }
        var CFS = document["exitFullscreen"] || document["cancelFullScreen"] || document["mozCancelFullScreen"] || document["msExitFullscreen"] || document["webkitCancelFullScreen"] || function() {}
        ;
        CFS.apply(document, []);
        return true
    },
    nextRAF: 0,
    fakeRequestAnimationFrame: function(func) {
        var now = Date.now();
        if (Browser.nextRAF === 0) {
            Browser.nextRAF = now + 1e3 / 60
        } else {
            while (now + 2 >= Browser.nextRAF) {
                Browser.nextRAF += 1e3 / 60
            }
        }
        var delay = Math.max(Browser.nextRAF - now, 0);
        setTimeout(func, delay)
    },
    requestAnimationFrame: function(func) {
        if (typeof requestAnimationFrame === "function") {
            requestAnimationFrame(func);
            return
        }
        var RAF = Browser.fakeRequestAnimationFrame;
        RAF(func)
    },
    safeCallback: function(func) {
        return function() {
            if (!ABORT)
                return func.apply(null, arguments)
        }
    },
    allowAsyncCallbacks: true,
    queuedAsyncCallbacks: [],
    pauseAsyncCallbacks: function() {
        Browser.allowAsyncCallbacks = false
    },
    resumeAsyncCallbacks: function() {
        Browser.allowAsyncCallbacks = true;
        if (Browser.queuedAsyncCallbacks.length > 0) {
            var callbacks = Browser.queuedAsyncCallbacks;
            Browser.queuedAsyncCallbacks = [];
            callbacks.forEach(function(func) {
                func()
            })
        }
    },
    safeRequestAnimationFrame: function(func) {
        return Browser.requestAnimationFrame(function() {
            if (ABORT)
                return;
            if (Browser.allowAsyncCallbacks) {
                func()
            } else {
                Browser.queuedAsyncCallbacks.push(func)
            }
        })
    },
    safeSetTimeout: function(func, timeout) {
        noExitRuntime = true;
        return setTimeout(function() {
            if (ABORT)
                return;
            if (Browser.allowAsyncCallbacks) {
                func()
            } else {
                Browser.queuedAsyncCallbacks.push(func)
            }
        }, timeout)
    },
    safeSetInterval: function(func, timeout) {
        noExitRuntime = true;
        return setInterval(function() {
            if (ABORT)
                return;
            if (Browser.allowAsyncCallbacks) {
                func()
            }
        }, timeout)
    },
    getMimetype: function(name) {
        return {
            "jpg": "image/jpeg",
            "jpeg": "image/jpeg",
            "png": "image/png",
            "bmp": "image/bmp",
            "ogg": "audio/ogg",
            "wav": "audio/wav",
            "mp3": "audio/mpeg"
        }[name.substr(name.lastIndexOf(".") + 1)]
    },
    getUserMedia: function(func) {
        if (!window.getUserMedia) {
            window.getUserMedia = navigator["getUserMedia"] || navigator["mozGetUserMedia"]
        }
        window.getUserMedia(func)
    },
    getMovementX: function(event) {
        return event["movementX"] || event["mozMovementX"] || event["webkitMovementX"] || 0
    },
    getMovementY: function(event) {
        return event["movementY"] || event["mozMovementY"] || event["webkitMovementY"] || 0
    },
    getMouseWheelDelta: function(event) {
        var delta = 0;
        switch (event.type) {
        case "DOMMouseScroll":
            delta = event.detail / 3;
            break;
        case "mousewheel":
            delta = event.wheelDelta / 120;
            break;
        case "wheel":
            delta = event.deltaY;
            switch (event.deltaMode) {
            case 0:
                delta /= 100;
                break;
            case 1:
                delta /= 3;
                break;
            case 2:
                delta *= 80;
                break;
            default:
                throw "unrecognized mouse wheel delta mode: " + event.deltaMode
            }
            break;
        default:
            throw "unrecognized mouse wheel event: " + event.type
        }
        return delta
    },
    mouseX: 0,
    mouseY: 0,
    mouseMovementX: 0,
    mouseMovementY: 0,
    touches: {},
    lastTouches: {},
    calculateMouseEvent: function(event) {
        if (Browser.pointerLock) {
            if (event.type != "mousemove" && "mozMovementX"in event) {
                Browser.mouseMovementX = Browser.mouseMovementY = 0
            } else {
                Browser.mouseMovementX = Browser.getMovementX(event);
                Browser.mouseMovementY = Browser.getMovementY(event)
            }
            if (typeof SDL != "undefined") {
                Browser.mouseX = SDL.mouseX + Browser.mouseMovementX;
                Browser.mouseY = SDL.mouseY + Browser.mouseMovementY
            } else {
                Browser.mouseX += Browser.mouseMovementX;
                Browser.mouseY += Browser.mouseMovementY
            }
        } else {
            var rect = Module["canvas"].getBoundingClientRect();
            var cw = Module["canvas"].width;
            var ch = Module["canvas"].height;
            var scrollX = typeof window.scrollX !== "undefined" ? window.scrollX : window.pageXOffset;
            var scrollY = typeof window.scrollY !== "undefined" ? window.scrollY : window.pageYOffset;
            if (event.type === "touchstart" || event.type === "touchend" || event.type === "touchmove") {
                var touch = event.touch;
                if (touch === undefined) {
                    return
                }
                var adjustedX = touch.pageX - (scrollX + rect.left);
                var adjustedY = touch.pageY - (scrollY + rect.top);
                adjustedX = adjustedX * (cw / rect.width);
                adjustedY = adjustedY * (ch / rect.height);
                var coords = {
                    x: adjustedX,
                    y: adjustedY
                };
                if (event.type === "touchstart") {
                    Browser.lastTouches[touch.identifier] = coords;
                    Browser.touches[touch.identifier] = coords
                } else if (event.type === "touchend" || event.type === "touchmove") {
                    var last = Browser.touches[touch.identifier];
                    if (!last)
                        last = coords;
                    Browser.lastTouches[touch.identifier] = last;
                    Browser.touches[touch.identifier] = coords
                }
                return
            }
            var x = event.pageX - (scrollX + rect.left);
            var y = event.pageY - (scrollY + rect.top);
            x = x * (cw / rect.width);
            y = y * (ch / rect.height);
            Browser.mouseMovementX = x - Browser.mouseX;
            Browser.mouseMovementY = y - Browser.mouseY;
            Browser.mouseX = x;
            Browser.mouseY = y
        }
    },
    asyncLoad: function(url, onload, onerror, noRunDep) {
        var dep = !noRunDep ? getUniqueRunDependency("al " + url) : "";
        readAsync(url, function(arrayBuffer) {
            assert(arrayBuffer, 'Loading data file "' + url + '" failed (no arrayBuffer).');
            onload(new Uint8Array(arrayBuffer));
            if (dep)
                removeRunDependency(dep)
        }, function(event) {
            if (onerror) {
                onerror()
            } else {
                throw 'Loading data file "' + url + '" failed.'
            }
        });
        if (dep)
            addRunDependency(dep)
    },
    resizeListeners: [],
    updateResizeListeners: function() {
        var canvas = Module["canvas"];
        Browser.resizeListeners.forEach(function(listener) {
            listener(canvas.width, canvas.height)
        })
    },
    setCanvasSize: function(width, height, noUpdates) {
        var canvas = Module["canvas"];
        Browser.updateCanvasDimensions(canvas, width, height);
        if (!noUpdates)
            Browser.updateResizeListeners()
    },
    windowedWidth: 0,
    windowedHeight: 0,
    setFullscreenCanvasSize: function() {
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[SDL.screen >> 2];
            flags = flags | 8388608;
            HEAP32[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    setWindowedCanvasSize: function() {
        if (typeof SDL != "undefined") {
            var flags = HEAPU32[SDL.screen >> 2];
            flags = flags & ~8388608;
            HEAP32[SDL.screen >> 2] = flags
        }
        Browser.updateCanvasDimensions(Module["canvas"]);
        Browser.updateResizeListeners()
    },
    updateCanvasDimensions: function(canvas, wNative, hNative) {
        if (wNative && hNative) {
            canvas.widthNative = wNative;
            canvas.heightNative = hNative
        } else {
            wNative = canvas.widthNative;
            hNative = canvas.heightNative
        }
        var w = wNative;
        var h = hNative;
        if (Module["forcedAspectRatio"] && Module["forcedAspectRatio"] > 0) {
            if (w / h < Module["forcedAspectRatio"]) {
                w = Math.round(h * Module["forcedAspectRatio"])
            } else {
                h = Math.round(w / Module["forcedAspectRatio"])
            }
        }
        if ((document["fullscreenElement"] || document["mozFullScreenElement"] || document["msFullscreenElement"] || document["webkitFullscreenElement"] || document["webkitCurrentFullScreenElement"]) === canvas.parentNode && typeof screen != "undefined") {
            var factor = Math.min(screen.width / w, screen.height / h);
            w = Math.round(w * factor);
            h = Math.round(h * factor)
        }
        if (Browser.resizeCanvas) {
            if (canvas.width != w)
                canvas.width = w;
            if (canvas.height != h)
                canvas.height = h;
            if (typeof canvas.style != "undefined") {
                canvas.style.removeProperty("width");
                canvas.style.removeProperty("height")
            }
        } else {
            if (canvas.width != wNative)
                canvas.width = wNative;
            if (canvas.height != hNative)
                canvas.height = hNative;
            if (typeof canvas.style != "undefined") {
                if (w != wNative || h != hNative) {
                    canvas.style.setProperty("width", w + "px", "important");
                    canvas.style.setProperty("height", h + "px", "important")
                } else {
                    canvas.style.removeProperty("width");
                    canvas.style.removeProperty("height")
                }
            }
        }
    },
    wgetRequests: {},
    nextWgetRequestHandle: 0,
    getNextWgetRequestHandle: function() {
        var handle = Browser.nextWgetRequestHandle;
        Browser.nextWgetRequestHandle++;
        return handle
    }
};
function ___setErrNo(value) {
    if (Module["___errno_location"])
        HEAP32[Module["___errno_location"]() >> 2] = value;
    return value
}
var PATH = {
    splitPath: function(filename) {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1)
    },
    normalizeArray: function(parts, allowAboveRoot) {
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
            var last = parts[i];
            if (last === ".") {
                parts.splice(i, 1)
            } else if (last === "..") {
                parts.splice(i, 1);
                up++
            } else if (up) {
                parts.splice(i, 1);
                up--
            }
        }
        if (allowAboveRoot) {
            for (; up; up--) {
                parts.unshift("..")
            }
        }
        return parts
    },
    normalize: function(path) {
        var isAbsolute = path.charAt(0) === "/"
          , trailingSlash = path.substr(-1) === "/";
        path = PATH.normalizeArray(path.split("/").filter(function(p) {
            return !!p
        }), !isAbsolute).join("/");
        if (!path && !isAbsolute) {
            path = "."
        }
        if (path && trailingSlash) {
            path += "/"
        }
        return (isAbsolute ? "/" : "") + path
    },
    dirname: function(path) {
        var result = PATH.splitPath(path)
          , root = result[0]
          , dir = result[1];
        if (!root && !dir) {
            return "."
        }
        if (dir) {
            dir = dir.substr(0, dir.length - 1)
        }
        return root + dir
    },
    basename: function(path) {
        if (path === "/")
            return "/";
        var lastSlash = path.lastIndexOf("/");
        if (lastSlash === -1)
            return path;
        return path.substr(lastSlash + 1)
    },
    extname: function(path) {
        return PATH.splitPath(path)[3]
    },
    join: function() {
        var paths = Array.prototype.slice.call(arguments, 0);
        return PATH.normalize(paths.join("/"))
    },
    join2: function(l, r) {
        return PATH.normalize(l + "/" + r)
    }
};
var PATH_FS = {
    resolve: function() {
        var resolvedPath = ""
          , resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
            var path = i >= 0 ? arguments[i] : FS.cwd();
            if (typeof path !== "string") {
                throw new TypeError("Arguments to path.resolve must be strings")
            } else if (!path) {
                return ""
            }
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charAt(0) === "/"
        }
        resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter(function(p) {
            return !!p
        }), !resolvedAbsolute).join("/");
        return (resolvedAbsolute ? "/" : "") + resolvedPath || "."
    },
    relative: function(from, to) {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
            var start = 0;
            for (; start < arr.length; start++) {
                if (arr[start] !== "")
                    break
            }
            var end = arr.length - 1;
            for (; end >= 0; end--) {
                if (arr[end] !== "")
                    break
            }
            if (start > end)
                return [];
            return arr.slice(start, end - start + 1)
        }
        var fromParts = trim(from.split("/"));
        var toParts = trim(to.split("/"));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
            if (fromParts[i] !== toParts[i]) {
                samePartsLength = i;
                break
            }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
            outputParts.push("..")
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join("/")
    }
};
var TTY = {
    ttys: [],
    init: function() {},
    shutdown: function() {},
    register: function(dev, ops) {
        TTY.ttys[dev] = {
            input: [],
            output: [],
            ops: ops
        };
        FS.registerDevice(dev, TTY.stream_ops)
    },
    stream_ops: {
        open: function(stream) {
            var tty = TTY.ttys[stream.node.rdev];
            if (!tty) {
                throw new FS.ErrnoError(43)
            }
            stream.tty = tty;
            stream.seekable = false
        },
        close: function(stream) {
            stream.tty.ops.flush(stream.tty)
        },
        flush: function(stream) {
            stream.tty.ops.flush(stream.tty)
        },
        read: function(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.get_char) {
                throw new FS.ErrnoError(60)
            }
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
                var result;
                try {
                    result = stream.tty.ops.get_char(stream.tty)
                } catch (e) {
                    throw new FS.ErrnoError(29)
                }
                if (result === undefined && bytesRead === 0) {
                    throw new FS.ErrnoError(6)
                }
                if (result === null || result === undefined)
                    break;
                bytesRead++;
                buffer[offset + i] = result
            }
            if (bytesRead) {
                stream.node.timestamp = Date.now()
            }
            return bytesRead
        },
        write: function(stream, buffer, offset, length, pos) {
            if (!stream.tty || !stream.tty.ops.put_char) {
                throw new FS.ErrnoError(60)
            }
            try {
                for (var i = 0; i < length; i++) {
                    stream.tty.ops.put_char(stream.tty, buffer[offset + i])
                }
            } catch (e) {
                throw new FS.ErrnoError(29)
            }
            if (length) {
                stream.node.timestamp = Date.now()
            }
            return i
        }
    },
    default_tty_ops: {
        get_char: function(tty) {
            if (!tty.input.length) {
                var result = null;
                if (ENVIRONMENT_IS_NODE) {
                    var BUFSIZE = 256;
                    var buf = Buffer.alloc ? Buffer.alloc(BUFSIZE) : new Buffer(BUFSIZE);
                    var bytesRead = 0;
                    try {
                        bytesRead = nodeFS.readSync(process.stdin.fd, buf, 0, BUFSIZE, null)
                    } catch (e) {
                        if (e.toString().indexOf("EOF") != -1)
                            bytesRead = 0;
                        else
                            throw e
                    }
                    if (bytesRead > 0) {
                        result = buf.slice(0, bytesRead).toString("utf-8")
                    } else {
                        result = null
                    }
                } else if (typeof window != "undefined" && typeof window.prompt == "function") {
                    result = window.prompt("Input: ");
                    if (result !== null) {
                        result += "\n"
                    }
                } else if (typeof readline == "function") {
                    result = readline();
                    if (result !== null) {
                        result += "\n"
                    }
                }
                if (!result) {
                    return null
                }
                tty.input = intArrayFromString(result, true)
            }
            return tty.input.shift()
        },
        put_char: function(tty, val) {
            if (val === null || val === 10) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0)
                    tty.output.push(val)
            }
        },
        flush: function(tty) {
            if (tty.output && tty.output.length > 0) {
                out(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    },
    default_tty1_ops: {
        put_char: function(tty, val) {
            if (val === null || val === 10) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            } else {
                if (val != 0)
                    tty.output.push(val)
            }
        },
        flush: function(tty) {
            if (tty.output && tty.output.length > 0) {
                err(UTF8ArrayToString(tty.output, 0));
                tty.output = []
            }
        }
    }
};
var MEMFS = {
    ops_table: null,
    mount: function(mount) {
        return MEMFS.createNode(null, "/", 16384 | 511, 0)
    },
    createNode: function(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
            throw new FS.ErrnoError(63)
        }
        if (!MEMFS.ops_table) {
            MEMFS.ops_table = {
                dir: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        lookup: MEMFS.node_ops.lookup,
                        mknod: MEMFS.node_ops.mknod,
                        rename: MEMFS.node_ops.rename,
                        unlink: MEMFS.node_ops.unlink,
                        rmdir: MEMFS.node_ops.rmdir,
                        readdir: MEMFS.node_ops.readdir,
                        symlink: MEMFS.node_ops.symlink
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek
                    }
                },
                file: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: {
                        llseek: MEMFS.stream_ops.llseek,
                        read: MEMFS.stream_ops.read,
                        write: MEMFS.stream_ops.write,
                        allocate: MEMFS.stream_ops.allocate,
                        mmap: MEMFS.stream_ops.mmap,
                        msync: MEMFS.stream_ops.msync
                    }
                },
                link: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr,
                        readlink: MEMFS.node_ops.readlink
                    },
                    stream: {}
                },
                chrdev: {
                    node: {
                        getattr: MEMFS.node_ops.getattr,
                        setattr: MEMFS.node_ops.setattr
                    },
                    stream: FS.chrdev_stream_ops
                }
            }
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
            node.node_ops = MEMFS.ops_table.dir.node;
            node.stream_ops = MEMFS.ops_table.dir.stream;
            node.contents = {}
        } else if (FS.isFile(node.mode)) {
            node.node_ops = MEMFS.ops_table.file.node;
            node.stream_ops = MEMFS.ops_table.file.stream;
            node.usedBytes = 0;
            node.contents = null
        } else if (FS.isLink(node.mode)) {
            node.node_ops = MEMFS.ops_table.link.node;
            node.stream_ops = MEMFS.ops_table.link.stream
        } else if (FS.isChrdev(node.mode)) {
            node.node_ops = MEMFS.ops_table.chrdev.node;
            node.stream_ops = MEMFS.ops_table.chrdev.stream
        }
        node.timestamp = Date.now();
        if (parent) {
            parent.contents[name] = node
        }
        return node
    },
    getFileDataAsRegularArray: function(node) {
        if (node.contents && node.contents.subarray) {
            var arr = [];
            for (var i = 0; i < node.usedBytes; ++i)
                arr.push(node.contents[i]);
            return arr
        }
        return node.contents
    },
    getFileDataAsTypedArray: function(node) {
        if (!node.contents)
            return new Uint8Array;
        if (node.contents.subarray)
            return node.contents.subarray(0, node.usedBytes);
        return new Uint8Array(node.contents)
    },
    expandFileStorage: function(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity)
            return;
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2 : 1.125) | 0);
        if (prevCapacity != 0)
            newCapacity = Math.max(newCapacity, 256);
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity);
        if (node.usedBytes > 0)
            node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
        return
    },
    resizeFileStorage: function(node, newSize) {
        if (node.usedBytes == newSize)
            return;
        if (newSize == 0) {
            node.contents = null;
            node.usedBytes = 0;
            return
        }
        if (!node.contents || node.contents.subarray) {
            var oldContents = node.contents;
            node.contents = new Uint8Array(new ArrayBuffer(newSize));
            if (oldContents) {
                node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)))
            }
            node.usedBytes = newSize;
            return
        }
        if (!node.contents)
            node.contents = [];
        if (node.contents.length > newSize)
            node.contents.length = newSize;
        else
            while (node.contents.length < newSize)
                node.contents.push(0);
        node.usedBytes = newSize
    },
    node_ops: {
        getattr: function(node) {
            var attr = {};
            attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
            attr.ino = node.id;
            attr.mode = node.mode;
            attr.nlink = 1;
            attr.uid = 0;
            attr.gid = 0;
            attr.rdev = node.rdev;
            if (FS.isDir(node.mode)) {
                attr.size = 4096
            } else if (FS.isFile(node.mode)) {
                attr.size = node.usedBytes
            } else if (FS.isLink(node.mode)) {
                attr.size = node.link.length
            } else {
                attr.size = 0
            }
            attr.atime = new Date(node.timestamp);
            attr.mtime = new Date(node.timestamp);
            attr.ctime = new Date(node.timestamp);
            attr.blksize = 4096;
            attr.blocks = Math.ceil(attr.size / attr.blksize);
            return attr
        },
        setattr: function(node, attr) {
            if (attr.mode !== undefined) {
                node.mode = attr.mode
            }
            if (attr.timestamp !== undefined) {
                node.timestamp = attr.timestamp
            }
            if (attr.size !== undefined) {
                MEMFS.resizeFileStorage(node, attr.size)
            }
        },
        lookup: function(parent, name) {
            throw FS.genericErrors[44]
        },
        mknod: function(parent, name, mode, dev) {
            return MEMFS.createNode(parent, name, mode, dev)
        },
        rename: function(old_node, new_dir, new_name) {
            if (FS.isDir(old_node.mode)) {
                var new_node;
                try {
                    new_node = FS.lookupNode(new_dir, new_name)
                } catch (e) {}
                if (new_node) {
                    for (var i in new_node.contents) {
                        throw new FS.ErrnoError(55)
                    }
                }
            }
            delete old_node.parent.contents[old_node.name];
            old_node.name = new_name;
            new_dir.contents[new_name] = old_node;
            old_node.parent = new_dir
        },
        unlink: function(parent, name) {
            delete parent.contents[name]
        },
        rmdir: function(parent, name) {
            var node = FS.lookupNode(parent, name);
            for (var i in node.contents) {
                throw new FS.ErrnoError(55)
            }
            delete parent.contents[name]
        },
        readdir: function(node) {
            var entries = [".", ".."];
            for (var key in node.contents) {
                if (!node.contents.hasOwnProperty(key)) {
                    continue
                }
                entries.push(key)
            }
            return entries
        },
        symlink: function(parent, newname, oldpath) {
            var node = MEMFS.createNode(parent, newname, 511 | 40960, 0);
            node.link = oldpath;
            return node
        },
        readlink: function(node) {
            if (!FS.isLink(node.mode)) {
                throw new FS.ErrnoError(28)
            }
            return node.link
        }
    },
    stream_ops: {
        read: function(stream, buffer, offset, length, position) {
            var contents = stream.node.contents;
            if (position >= stream.node.usedBytes)
                return 0;
            var size = Math.min(stream.node.usedBytes - position, length);
            if (size > 8 && contents.subarray) {
                buffer.set(contents.subarray(position, position + size), offset)
            } else {
                for (var i = 0; i < size; i++)
                    buffer[offset + i] = contents[position + i]
            }
            return size
        },
        write: function(stream, buffer, offset, length, position, canOwn) {
            if (buffer.buffer === HEAP8.buffer) {
                canOwn = false
            }
            if (!length)
                return 0;
            var node = stream.node;
            node.timestamp = Date.now();
            if (buffer.subarray && (!node.contents || node.contents.subarray)) {
                if (canOwn) {
                    node.contents = buffer.subarray(offset, offset + length);
                    node.usedBytes = length;
                    return length
                } else if (node.usedBytes === 0 && position === 0) {
                    node.contents = new Uint8Array(buffer.subarray(offset, offset + length));
                    node.usedBytes = length;
                    return length
                } else if (position + length <= node.usedBytes) {
                    node.contents.set(buffer.subarray(offset, offset + length), position);
                    return length
                }
            }
            MEMFS.expandFileStorage(node, position + length);
            if (node.contents.subarray && buffer.subarray)
                node.contents.set(buffer.subarray(offset, offset + length), position);
            else {
                for (var i = 0; i < length; i++) {
                    node.contents[position + i] = buffer[offset + i]
                }
            }
            node.usedBytes = Math.max(node.usedBytes, position + length);
            return length
        },
        llseek: function(stream, offset, whence) {
            var position = offset;
            if (whence === 1) {
                position += stream.position
            } else if (whence === 2) {
                if (FS.isFile(stream.node.mode)) {
                    position += stream.node.usedBytes
                }
            }
            if (position < 0) {
                throw new FS.ErrnoError(28)
            }
            return position
        },
        allocate: function(stream, offset, length) {
            MEMFS.expandFileStorage(stream.node, offset + length);
            stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length)
        },
        mmap: function(stream, buffer, offset, length, position, prot, flags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43)
            }
            var ptr;
            var allocated;
            var contents = stream.node.contents;
            if (!(flags & 2) && contents.buffer === buffer.buffer) {
                allocated = false;
                ptr = contents.byteOffset
            } else {
                if (position > 0 || position + length < stream.node.usedBytes) {
                    if (contents.subarray) {
                        contents = contents.subarray(position, position + length)
                    } else {
                        contents = Array.prototype.slice.call(contents, position, position + length)
                    }
                }
                allocated = true;
                var fromHeap = buffer.buffer == HEAP8.buffer;
                ptr = _malloc(length);
                if (!ptr) {
                    throw new FS.ErrnoError(48)
                }
                (fromHeap ? HEAP8 : buffer).set(contents, ptr)
            }
            return {
                ptr: ptr,
                allocated: allocated
            }
        },
        msync: function(stream, buffer, offset, length, mmapFlags) {
            if (!FS.isFile(stream.node.mode)) {
                throw new FS.ErrnoError(43)
            }
            if (mmapFlags & 2) {
                return 0
            }
            var bytesWritten = MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
            return 0
        }
    }
};
var FS = {
    root: null,
    mounts: [],
    devices: {},
    streams: [],
    nextInode: 1,
    nameTable: null,
    currentPath: "/",
    initialized: false,
    ignorePermissions: true,
    trackingDelegate: {},
    tracking: {
        openFlags: {
            READ: 1,
            WRITE: 2
        }
    },
    ErrnoError: null,
    genericErrors: {},
    filesystems: null,
    syncFSRequests: 0,
    handleFSError: function(e) {
        if (!(e instanceof FS.ErrnoError))
            throw e + " : " + stackTrace();
        return ___setErrNo(e.errno)
    },
    lookupPath: function(path, opts) {
        path = PATH_FS.resolve(FS.cwd(), path);
        opts = opts || {};
        if (!path)
            return {
                path: "",
                node: null
            };
        var defaults = {
            follow_mount: true,
            recurse_count: 0
        };
        for (var key in defaults) {
            if (opts[key] === undefined) {
                opts[key] = defaults[key]
            }
        }
        if (opts.recurse_count > 8) {
            throw new FS.ErrnoError(32)
        }
        var parts = PATH.normalizeArray(path.split("/").filter(function(p) {
            return !!p
        }), false);
        var current = FS.root;
        var current_path = "/";
        for (var i = 0; i < parts.length; i++) {
            var islast = i === parts.length - 1;
            if (islast && opts.parent) {
                break
            }
            current = FS.lookupNode(current, parts[i]);
            current_path = PATH.join2(current_path, parts[i]);
            if (FS.isMountpoint(current)) {
                if (!islast || islast && opts.follow_mount) {
                    current = current.mounted.root
                }
            }
            if (!islast || opts.follow) {
                var count = 0;
                while (FS.isLink(current.mode)) {
                    var link = FS.readlink(current_path);
                    current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
                    var lookup = FS.lookupPath(current_path, {
                        recurse_count: opts.recurse_count
                    });
                    current = lookup.node;
                    if (count++ > 40) {
                        throw new FS.ErrnoError(32)
                    }
                }
            }
        }
        return {
            path: current_path,
            node: current
        }
    },
    getPath: function(node) {
        var path;
        while (true) {
            if (FS.isRoot(node)) {
                var mount = node.mount.mountpoint;
                if (!path)
                    return mount;
                return mount[mount.length - 1] !== "/" ? mount + "/" + path : mount + path
            }
            path = path ? node.name + "/" + path : node.name;
            node = node.parent
        }
    },
    hashName: function(parentid, name) {
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
            hash = (hash << 5) - hash + name.charCodeAt(i) | 0
        }
        return (parentid + hash >>> 0) % FS.nameTable.length
    },
    hashAddNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node
    },
    hashRemoveNode: function(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
            FS.nameTable[hash] = node.name_next
        } else {
            var current = FS.nameTable[hash];
            while (current) {
                if (current.name_next === node) {
                    current.name_next = node.name_next;
                    break
                }
                current = current.name_next
            }
        }
    },
    lookupNode: function(parent, name) {
        var err = FS.mayLookup(parent);
        if (err) {
            throw new FS.ErrnoError(err,parent)
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
            var nodeName = node.name;
            if (node.parent.id === parent.id && nodeName === name) {
                return node
            }
        }
        return FS.lookup(parent, name)
    },
    createNode: function(parent, name, mode, rdev) {
        if (!FS.FSNode) {
            FS.FSNode = function(parent, name, mode, rdev) {
                if (!parent) {
                    parent = this
                }
                this.parent = parent;
                this.mount = parent.mount;
                this.mounted = null;
                this.id = FS.nextInode++;
                this.name = name;
                this.mode = mode;
                this.node_ops = {};
                this.stream_ops = {};
                this.rdev = rdev
            }
            ;
            FS.FSNode.prototype = {};
            var readMode = 292 | 73;
            var writeMode = 146;
            Object.defineProperties(FS.FSNode.prototype, {
                read: {
                    get: function() {
                        return (this.mode & readMode) === readMode
                    },
                    set: function(val) {
                        val ? this.mode |= readMode : this.mode &= ~readMode
                    }
                },
                write: {
                    get: function() {
                        return (this.mode & writeMode) === writeMode
                    },
                    set: function(val) {
                        val ? this.mode |= writeMode : this.mode &= ~writeMode
                    }
                },
                isFolder: {
                    get: function() {
                        return FS.isDir(this.mode)
                    }
                },
                isDevice: {
                    get: function() {
                        return FS.isChrdev(this.mode)
                    }
                }
            })
        }
        var node = new FS.FSNode(parent,name,mode,rdev);
        FS.hashAddNode(node);
        return node
    },
    destroyNode: function(node) {
        FS.hashRemoveNode(node)
    },
    isRoot: function(node) {
        return node === node.parent
    },
    isMountpoint: function(node) {
        return !!node.mounted
    },
    isFile: function(mode) {
        return (mode & 61440) === 32768
    },
    isDir: function(mode) {
        return (mode & 61440) === 16384
    },
    isLink: function(mode) {
        return (mode & 61440) === 40960
    },
    isChrdev: function(mode) {
        return (mode & 61440) === 8192
    },
    isBlkdev: function(mode) {
        return (mode & 61440) === 24576
    },
    isFIFO: function(mode) {
        return (mode & 61440) === 4096
    },
    isSocket: function(mode) {
        return (mode & 49152) === 49152
    },
    flagModes: {
        "r": 0,
        "rs": 1052672,
        "r+": 2,
        "w": 577,
        "wx": 705,
        "xw": 705,
        "w+": 578,
        "wx+": 706,
        "xw+": 706,
        "a": 1089,
        "ax": 1217,
        "xa": 1217,
        "a+": 1090,
        "ax+": 1218,
        "xa+": 1218
    },
    modeStringToFlags: function(str) {
        var flags = FS.flagModes[str];
        if (typeof flags === "undefined") {
            throw new Error("Unknown file open mode: " + str)
        }
        return flags
    },
    flagsToPermissionString: function(flag) {
        var perms = ["r", "w", "rw"][flag & 3];
        if (flag & 512) {
            perms += "w"
        }
        return perms
    },
    nodePermissions: function(node, perms) {
        if (FS.ignorePermissions) {
            return 0
        }
        if (perms.indexOf("r") !== -1 && !(node.mode & 292)) {
            return 2
        } else if (perms.indexOf("w") !== -1 && !(node.mode & 146)) {
            return 2
        } else if (perms.indexOf("x") !== -1 && !(node.mode & 73)) {
            return 2
        }
        return 0
    },
    mayLookup: function(dir) {
        var err = FS.nodePermissions(dir, "x");
        if (err)
            return err;
        if (!dir.node_ops.lookup)
            return 2;
        return 0
    },
    mayCreate: function(dir, name) {
        try {
            var node = FS.lookupNode(dir, name);
            return 20
        } catch (e) {}
        return FS.nodePermissions(dir, "wx")
    },
    mayDelete: function(dir, name, isdir) {
        var node;
        try {
            node = FS.lookupNode(dir, name)
        } catch (e) {
            return e.errno
        }
        var err = FS.nodePermissions(dir, "wx");
        if (err) {
            return err
        }
        if (isdir) {
            if (!FS.isDir(node.mode)) {
                return 54
            }
            if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
                return 10
            }
        } else {
            if (FS.isDir(node.mode)) {
                return 31
            }
        }
        return 0
    },
    mayOpen: function(node, flags) {
        if (!node) {
            return 44
        }
        if (FS.isLink(node.mode)) {
            return 32
        } else if (FS.isDir(node.mode)) {
            if (FS.flagsToPermissionString(flags) !== "r" || flags & 512) {
                return 31
            }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags))
    },
    MAX_OPEN_FDS: 4096,
    nextfd: function(fd_start, fd_end) {
        fd_start = fd_start || 0;
        fd_end = fd_end || FS.MAX_OPEN_FDS;
        for (var fd = fd_start; fd <= fd_end; fd++) {
            if (!FS.streams[fd]) {
                return fd
            }
        }
        throw new FS.ErrnoError(33)
    },
    getStream: function(fd) {
        return FS.streams[fd]
    },
    createStream: function(stream, fd_start, fd_end) {
        if (!FS.FSStream) {
            FS.FSStream = function() {}
            ;
            FS.FSStream.prototype = {};
            Object.defineProperties(FS.FSStream.prototype, {
                object: {
                    get: function() {
                        return this.node
                    },
                    set: function(val) {
                        this.node = val
                    }
                },
                isRead: {
                    get: function() {
                        return (this.flags & 2097155) !== 1
                    }
                },
                isWrite: {
                    get: function() {
                        return (this.flags & 2097155) !== 0
                    }
                },
                isAppend: {
                    get: function() {
                        return this.flags & 1024
                    }
                }
            })
        }
        var newStream = new FS.FSStream;
        for (var p in stream) {
            newStream[p] = stream[p]
        }
        stream = newStream;
        var fd = FS.nextfd(fd_start, fd_end);
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream
    },
    closeStream: function(fd) {
        FS.streams[fd] = null
    },
    chrdev_stream_ops: {
        open: function(stream) {
            var device = FS.getDevice(stream.node.rdev);
            stream.stream_ops = device.stream_ops;
            if (stream.stream_ops.open) {
                stream.stream_ops.open(stream)
            }
        },
        llseek: function() {
            throw new FS.ErrnoError(70)
        }
    },
    major: function(dev) {
        return dev >> 8
    },
    minor: function(dev) {
        return dev & 255
    },
    makedev: function(ma, mi) {
        return ma << 8 | mi
    },
    registerDevice: function(dev, ops) {
        FS.devices[dev] = {
            stream_ops: ops
        }
    },
    getDevice: function(dev) {
        return FS.devices[dev]
    },
    getMounts: function(mount) {
        var mounts = [];
        var check = [mount];
        while (check.length) {
            var m = check.pop();
            mounts.push(m);
            check.push.apply(check, m.mounts)
        }
        return mounts
    },
    syncfs: function(populate, callback) {
        if (typeof populate === "function") {
            callback = populate;
            populate = false
        }
        FS.syncFSRequests++;
        if (FS.syncFSRequests > 1) {
            console.log("warning: " + FS.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work")
        }
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
        function doCallback(err) {
            FS.syncFSRequests--;
            return callback(err)
        }
        function done(err) {
            if (err) {
                if (!done.errored) {
                    done.errored = true;
                    return doCallback(err)
                }
                return
            }
            if (++completed >= mounts.length) {
                doCallback(null)
            }
        }
        mounts.forEach(function(mount) {
            if (!mount.type.syncfs) {
                return done(null)
            }
            mount.type.syncfs(mount, populate, done)
        })
    },
    mount: function(type, opts, mountpoint) {
        var root = mountpoint === "/";
        var pseudo = !mountpoint;
        var node;
        if (root && FS.root) {
            throw new FS.ErrnoError(10)
        } else if (!root && !pseudo) {
            var lookup = FS.lookupPath(mountpoint, {
                follow_mount: false
            });
            mountpoint = lookup.path;
            node = lookup.node;
            if (FS.isMountpoint(node)) {
                throw new FS.ErrnoError(10)
            }
            if (!FS.isDir(node.mode)) {
                throw new FS.ErrnoError(54)
            }
        }
        var mount = {
            type: type,
            opts: opts,
            mountpoint: mountpoint,
            mounts: []
        };
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
        if (root) {
            FS.root = mountRoot
        } else if (node) {
            node.mounted = mount;
            if (node.mount) {
                node.mount.mounts.push(mount)
            }
        }
        return mountRoot
    },
    unmount: function(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, {
            follow_mount: false
        });
        if (!FS.isMountpoint(lookup.node)) {
            throw new FS.ErrnoError(28)
        }
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
        Object.keys(FS.nameTable).forEach(function(hash) {
            var current = FS.nameTable[hash];
            while (current) {
                var next = current.name_next;
                if (mounts.indexOf(current.mount) !== -1) {
                    FS.destroyNode(current)
                }
                current = next
            }
        });
        node.mounted = null;
        var idx = node.mount.mounts.indexOf(mount);
        node.mount.mounts.splice(idx, 1)
    },
    lookup: function(parent, name) {
        return parent.node_ops.lookup(parent, name)
    },
    mknod: function(path, mode, dev) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === "." || name === "..") {
            throw new FS.ErrnoError(28)
        }
        var err = FS.mayCreate(parent, name);
        if (err) {
            throw new FS.ErrnoError(err)
        }
        if (!parent.node_ops.mknod) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.mknod(parent, name, mode, dev)
    },
    create: function(path, mode) {
        mode = mode !== undefined ? mode : 438;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0)
    },
    mkdir: function(path, mode) {
        mode = mode !== undefined ? mode : 511;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0)
    },
    mkdirTree: function(path, mode) {
        var dirs = path.split("/");
        var d = "";
        for (var i = 0; i < dirs.length; ++i) {
            if (!dirs[i])
                continue;
            d += "/" + dirs[i];
            try {
                FS.mkdir(d, mode)
            } catch (e) {
                if (e.errno != 20)
                    throw e
            }
        }
    },
    mkdev: function(path, mode, dev) {
        if (typeof dev === "undefined") {
            dev = mode;
            mode = 438
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev)
    },
    symlink: function(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
            throw new FS.ErrnoError(44)
        }
        var lookup = FS.lookupPath(newpath, {
            parent: true
        });
        var parent = lookup.node;
        if (!parent) {
            throw new FS.ErrnoError(44)
        }
        var newname = PATH.basename(newpath);
        var err = FS.mayCreate(parent, newname);
        if (err) {
            throw new FS.ErrnoError(err)
        }
        if (!parent.node_ops.symlink) {
            throw new FS.ErrnoError(63)
        }
        return parent.node_ops.symlink(parent, newname, oldpath)
    },
    rename: function(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        var lookup, old_dir, new_dir;
        try {
            lookup = FS.lookupPath(old_path, {
                parent: true
            });
            old_dir = lookup.node;
            lookup = FS.lookupPath(new_path, {
                parent: true
            });
            new_dir = lookup.node
        } catch (e) {
            throw new FS.ErrnoError(10)
        }
        if (!old_dir || !new_dir)
            throw new FS.ErrnoError(44);
        if (old_dir.mount !== new_dir.mount) {
            throw new FS.ErrnoError(75)
        }
        var old_node = FS.lookupNode(old_dir, old_name);
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(28)
        }
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== ".") {
            throw new FS.ErrnoError(55)
        }
        var new_node;
        try {
            new_node = FS.lookupNode(new_dir, new_name)
        } catch (e) {}
        if (old_node === new_node) {
            return
        }
        var isdir = FS.isDir(old_node.mode);
        var err = FS.mayDelete(old_dir, old_name, isdir);
        if (err) {
            throw new FS.ErrnoError(err)
        }
        err = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
        if (err) {
            throw new FS.ErrnoError(err)
        }
        if (!old_dir.node_ops.rename) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) {
            throw new FS.ErrnoError(10)
        }
        if (new_dir !== old_dir) {
            err = FS.nodePermissions(old_dir, "w");
            if (err) {
                throw new FS.ErrnoError(err)
            }
        }
        try {
            if (FS.trackingDelegate["willMovePath"]) {
                FS.trackingDelegate["willMovePath"](old_path, new_path)
            }
        } catch (e) {
            console.log("FS.trackingDelegate['willMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message)
        }
        FS.hashRemoveNode(old_node);
        try {
            old_dir.node_ops.rename(old_node, new_dir, new_name)
        } catch (e) {
            throw e
        } finally {
            FS.hashAddNode(old_node)
        }
        try {
            if (FS.trackingDelegate["onMovePath"])
                FS.trackingDelegate["onMovePath"](old_path, new_path)
        } catch (e) {
            console.log("FS.trackingDelegate['onMovePath']('" + old_path + "', '" + new_path + "') threw an exception: " + e.message)
        }
    },
    rmdir: function(path) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, true);
        if (err) {
            throw new FS.ErrnoError(err)
        }
        if (!parent.node_ops.rmdir) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        try {
            if (FS.trackingDelegate["willDeletePath"]) {
                FS.trackingDelegate["willDeletePath"](path)
            }
        } catch (e) {
            console.log("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message)
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
        try {
            if (FS.trackingDelegate["onDeletePath"])
                FS.trackingDelegate["onDeletePath"](path)
        } catch (e) {
            console.log("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message)
        }
    },
    readdir: function(path) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
            throw new FS.ErrnoError(54)
        }
        return node.node_ops.readdir(node)
    },
    unlink: function(path) {
        var lookup = FS.lookupPath(path, {
            parent: true
        });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var err = FS.mayDelete(parent, name, false);
        if (err) {
            throw new FS.ErrnoError(err)
        }
        if (!parent.node_ops.unlink) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10)
        }
        try {
            if (FS.trackingDelegate["willDeletePath"]) {
                FS.trackingDelegate["willDeletePath"](path)
            }
        } catch (e) {
            console.log("FS.trackingDelegate['willDeletePath']('" + path + "') threw an exception: " + e.message)
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
        try {
            if (FS.trackingDelegate["onDeletePath"])
                FS.trackingDelegate["onDeletePath"](path)
        } catch (e) {
            console.log("FS.trackingDelegate['onDeletePath']('" + path + "') threw an exception: " + e.message)
        }
    },
    readlink: function(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
            throw new FS.ErrnoError(44)
        }
        if (!link.node_ops.readlink) {
            throw new FS.ErrnoError(28)
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link))
    },
    stat: function(path, dontFollow) {
        var lookup = FS.lookupPath(path, {
            follow: !dontFollow
        });
        var node = lookup.node;
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (!node.node_ops.getattr) {
            throw new FS.ErrnoError(63)
        }
        return node.node_ops.getattr(node)
    },
    lstat: function(path) {
        return FS.stat(path, true)
    },
    chmod: function(path, mode, dontFollow) {
        var node;
        if (typeof path === "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            mode: mode & 4095 | node.mode & ~4095,
            timestamp: Date.now()
        })
    },
    lchmod: function(path, mode) {
        FS.chmod(path, mode, true)
    },
    fchmod: function(fd, mode) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        FS.chmod(stream.node, mode)
    },
    chown: function(path, uid, gid, dontFollow) {
        var node;
        if (typeof path === "string") {
            var lookup = FS.lookupPath(path, {
                follow: !dontFollow
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        node.node_ops.setattr(node, {
            timestamp: Date.now()
        })
    },
    lchown: function(path, uid, gid) {
        FS.chown(path, uid, gid, true)
    },
    fchown: function(fd, uid, gid) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        FS.chown(stream.node, uid, gid)
    },
    truncate: function(path, len) {
        if (len < 0) {
            throw new FS.ErrnoError(28)
        }
        var node;
        if (typeof path === "string") {
            var lookup = FS.lookupPath(path, {
                follow: true
            });
            node = lookup.node
        } else {
            node = path
        }
        if (!node.node_ops.setattr) {
            throw new FS.ErrnoError(63)
        }
        if (FS.isDir(node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!FS.isFile(node.mode)) {
            throw new FS.ErrnoError(28)
        }
        var err = FS.nodePermissions(node, "w");
        if (err) {
            throw new FS.ErrnoError(err)
        }
        node.node_ops.setattr(node, {
            size: len,
            timestamp: Date.now()
        })
    },
    ftruncate: function(fd, len) {
        var stream = FS.getStream(fd);
        if (!stream) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(28)
        }
        FS.truncate(stream.node, len)
    },
    utime: function(path, atime, mtime) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        var node = lookup.node;
        node.node_ops.setattr(node, {
            timestamp: Math.max(atime, mtime)
        })
    },
    open: function(path, flags, mode, fd_start, fd_end) {
        if (path === "") {
            throw new FS.ErrnoError(44)
        }
        flags = typeof flags === "string" ? FS.modeStringToFlags(flags) : flags;
        mode = typeof mode === "undefined" ? 438 : mode;
        if (flags & 64) {
            mode = mode & 4095 | 32768
        } else {
            mode = 0
        }
        var node;
        if (typeof path === "object") {
            node = path
        } else {
            path = PATH.normalize(path);
            try {
                var lookup = FS.lookupPath(path, {
                    follow: !(flags & 131072)
                });
                node = lookup.node
            } catch (e) {}
        }
        var created = false;
        if (flags & 64) {
            if (node) {
                if (flags & 128) {
                    throw new FS.ErrnoError(20)
                }
            } else {
                node = FS.mknod(path, mode, 0);
                created = true
            }
        }
        if (!node) {
            throw new FS.ErrnoError(44)
        }
        if (FS.isChrdev(node.mode)) {
            flags &= ~512
        }
        if (flags & 65536 && !FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54)
        }
        if (!created) {
            var err = FS.mayOpen(node, flags);
            if (err) {
                throw new FS.ErrnoError(err)
            }
        }
        if (flags & 512) {
            FS.truncate(node, 0)
        }
        flags &= ~(128 | 512);
        var stream = FS.createStream({
            node: node,
            path: FS.getPath(node),
            flags: flags,
            seekable: true,
            position: 0,
            stream_ops: node.stream_ops,
            ungotten: [],
            error: false
        }, fd_start, fd_end);
        if (stream.stream_ops.open) {
            stream.stream_ops.open(stream)
        }
        if (Module["logReadFiles"] && !(flags & 1)) {
            if (!FS.readFiles)
                FS.readFiles = {};
            if (!(path in FS.readFiles)) {
                FS.readFiles[path] = 1;
                console.log("FS.trackingDelegate error on read file: " + path)
            }
        }
        try {
            if (FS.trackingDelegate["onOpenFile"]) {
                var trackingFlags = 0;
                if ((flags & 2097155) !== 1) {
                    trackingFlags |= FS.tracking.openFlags.READ
                }
                if ((flags & 2097155) !== 0) {
                    trackingFlags |= FS.tracking.openFlags.WRITE
                }
                FS.trackingDelegate["onOpenFile"](path, trackingFlags)
            }
        } catch (e) {
            console.log("FS.trackingDelegate['onOpenFile']('" + path + "', flags) threw an exception: " + e.message)
        }
        return stream
    },
    close: function(stream) {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (stream.getdents)
            stream.getdents = null;
        try {
            if (stream.stream_ops.close) {
                stream.stream_ops.close(stream)
            }
        } catch (e) {
            throw e
        } finally {
            FS.closeStream(stream.fd)
        }
        stream.fd = null
    },
    isClosed: function(stream) {
        return stream.fd === null
    },
    llseek: function(stream, offset, whence) {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
            throw new FS.ErrnoError(70)
        }
        if (whence != 0 && whence != 1 && whence != 2) {
            throw new FS.ErrnoError(28)
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position
    },
    read: function(stream, buffer, offset, length, position) {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.read) {
            throw new FS.ErrnoError(28)
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking)
            stream.position += bytesRead;
        return bytesRead
    },
    write: function(stream, buffer, offset, length, position, canOwn) {
        if (length < 0 || position < 0) {
            throw new FS.ErrnoError(28)
        }
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(31)
        }
        if (!stream.stream_ops.write) {
            throw new FS.ErrnoError(28)
        }
        if (stream.flags & 1024) {
            FS.llseek(stream, 0, 2)
        }
        var seeking = typeof position !== "undefined";
        if (!seeking) {
            position = stream.position
        } else if (!stream.seekable) {
            throw new FS.ErrnoError(70)
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking)
            stream.position += bytesWritten;
        try {
            if (stream.path && FS.trackingDelegate["onWriteToFile"])
                FS.trackingDelegate["onWriteToFile"](stream.path)
        } catch (e) {
            console.log("FS.trackingDelegate['onWriteToFile']('" + stream.path + "') threw an exception: " + e.message)
        }
        return bytesWritten
    },
    allocate: function(stream, offset, length) {
        if (FS.isClosed(stream)) {
            throw new FS.ErrnoError(8)
        }
        if (offset < 0 || length <= 0) {
            throw new FS.ErrnoError(28)
        }
        if ((stream.flags & 2097155) === 0) {
            throw new FS.ErrnoError(8)
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
            throw new FS.ErrnoError(43)
        }
        if (!stream.stream_ops.allocate) {
            throw new FS.ErrnoError(138)
        }
        stream.stream_ops.allocate(stream, offset, length)
    },
    mmap: function(stream, buffer, offset, length, position, prot, flags) {
        if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) {
            throw new FS.ErrnoError(2)
        }
        if ((stream.flags & 2097155) === 1) {
            throw new FS.ErrnoError(2)
        }
        if (!stream.stream_ops.mmap) {
            throw new FS.ErrnoError(43)
        }
        return stream.stream_ops.mmap(stream, buffer, offset, length, position, prot, flags)
    },
    msync: function(stream, buffer, offset, length, mmapFlags) {
        if (!stream || !stream.stream_ops.msync) {
            return 0
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags)
    },
    munmap: function(stream) {
        return 0
    },
    ioctl: function(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
            throw new FS.ErrnoError(59)
        }
        return stream.stream_ops.ioctl(stream, cmd, arg)
    },
    readFile: function(path, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "r";
        opts.encoding = opts.encoding || "binary";
        if (opts.encoding !== "utf8" && opts.encoding !== "binary") {
            throw new Error('Invalid encoding type "' + opts.encoding + '"')
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === "utf8") {
            ret = UTF8ArrayToString(buf, 0)
        } else if (opts.encoding === "binary") {
            ret = buf
        }
        FS.close(stream);
        return ret
    },
    writeFile: function(path, data, opts) {
        opts = opts || {};
        opts.flags = opts.flags || "w";
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data === "string") {
            var buf = new Uint8Array(lengthBytesUTF8(data) + 1);
            var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
            FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn)
        } else if (ArrayBuffer.isView(data)) {
            FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn)
        } else {
            throw new Error("Unsupported data type")
        }
        FS.close(stream)
    },
    cwd: function() {
        return FS.currentPath
    },
    chdir: function(path) {
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        if (lookup.node === null) {
            throw new FS.ErrnoError(44)
        }
        if (!FS.isDir(lookup.node.mode)) {
            throw new FS.ErrnoError(54)
        }
        var err = FS.nodePermissions(lookup.node, "x");
        if (err) {
            throw new FS.ErrnoError(err)
        }
        FS.currentPath = lookup.path
    },
    createDefaultDirectories: function() {
        FS.mkdir("/tmp");
        FS.mkdir("/home");
        FS.mkdir("/home/web_user")
    },
    createDefaultDevices: function() {
        FS.mkdir("/dev");
        FS.registerDevice(FS.makedev(1, 3), {
            read: function() {
                return 0
            },
            write: function(stream, buffer, offset, length, pos) {
                return length
            }
        });
        FS.mkdev("/dev/null", FS.makedev(1, 3));
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev("/dev/tty", FS.makedev(5, 0));
        FS.mkdev("/dev/tty1", FS.makedev(6, 0));
        var random_device;
        if (typeof crypto === "object" && typeof crypto["getRandomValues"] === "function") {
            var randomBuffer = new Uint8Array(1);
            random_device = function() {
                crypto.getRandomValues(randomBuffer);
                return randomBuffer[0]
            }
        } else if (ENVIRONMENT_IS_NODE) {
            try {
                var crypto_module = require("crypto");
                random_device = function() {
                    return crypto_module["randomBytes"](1)[0]
                }
            } catch (e) {}
        } else {}
        if (!random_device) {
            random_device = function() {
                abort("random_device")
            }
        }
        FS.createDevice("/dev", "random", random_device);
        FS.createDevice("/dev", "urandom", random_device);
        FS.mkdir("/dev/shm");
        FS.mkdir("/dev/shm/tmp")
    },
    createSpecialDirectories: function() {
        FS.mkdir("/proc");
        FS.mkdir("/proc/self");
        FS.mkdir("/proc/self/fd");
        FS.mount({
            mount: function() {
                var node = FS.createNode("/proc/self", "fd", 16384 | 511, 73);
                node.node_ops = {
                    lookup: function(parent, name) {
                        var fd = +name;
                        var stream = FS.getStream(fd);
                        if (!stream)
                            throw new FS.ErrnoError(8);
                        var ret = {
                            parent: null,
                            mount: {
                                mountpoint: "fake"
                            },
                            node_ops: {
                                readlink: function() {
                                    return stream.path
                                }
                            }
                        };
                        ret.parent = ret;
                        return ret
                    }
                };
                return node
            }
        }, {}, "/proc/self/fd")
    },
    createStandardStreams: function() {
        if (Module["stdin"]) {
            FS.createDevice("/dev", "stdin", Module["stdin"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdin")
        }
        if (Module["stdout"]) {
            FS.createDevice("/dev", "stdout", null, Module["stdout"])
        } else {
            FS.symlink("/dev/tty", "/dev/stdout")
        }
        if (Module["stderr"]) {
            FS.createDevice("/dev", "stderr", null, Module["stderr"])
        } else {
            FS.symlink("/dev/tty1", "/dev/stderr")
        }
        var stdin = FS.open("/dev/stdin", "r");
        var stdout = FS.open("/dev/stdout", "w");
        var stderr = FS.open("/dev/stderr", "w")
    },
    ensureErrnoError: function() {
        if (FS.ErrnoError)
            return;
        FS.ErrnoError = function ErrnoError(errno, node) {
            this.node = node;
            this.setErrno = function(errno) {
                this.errno = errno
            }
            ;
            this.setErrno(errno);
            this.message = "FS error"
        }
        ;
        FS.ErrnoError.prototype = new Error;
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        [44].forEach(function(code) {
            FS.genericErrors[code] = new FS.ErrnoError(code);
            FS.genericErrors[code].stack = "<generic error, no stack>"
        })
    },
    staticInit: function() {
        FS.ensureErrnoError();
        FS.nameTable = new Array(4096);
        FS.mount(MEMFS, {}, "/");
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
        FS.filesystems = {
            "MEMFS": MEMFS
        }
    },
    init: function(input, output, error) {
        FS.init.initialized = true;
        FS.ensureErrnoError();
        Module["stdin"] = input || Module["stdin"];
        Module["stdout"] = output || Module["stdout"];
        Module["stderr"] = error || Module["stderr"];
        FS.createStandardStreams()
    },
    quit: function() {
        FS.init.initialized = false;
        var fflush = Module["_fflush"];
        if (fflush)
            fflush(0);
        for (var i = 0; i < FS.streams.length; i++) {
            var stream = FS.streams[i];
            if (!stream) {
                continue
            }
            FS.close(stream)
        }
    },
    getMode: function(canRead, canWrite) {
        var mode = 0;
        if (canRead)
            mode |= 292 | 73;
        if (canWrite)
            mode |= 146;
        return mode
    },
    joinPath: function(parts, forceRelative) {
        var path = PATH.join.apply(null, parts);
        if (forceRelative && path[0] == "/")
            path = path.substr(1);
        return path
    },
    absolutePath: function(relative, base) {
        return PATH_FS.resolve(base, relative)
    },
    standardizePath: function(path) {
        return PATH.normalize(path)
    },
    findObject: function(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (ret.exists) {
            return ret.object
        } else {
            ___setErrNo(ret.error);
            return null
        }
    },
    analyzePath: function(path, dontResolveLastLink) {
        try {
            var lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            path = lookup.path
        } catch (e) {}
        var ret = {
            isRoot: false,
            exists: false,
            error: 0,
            name: null,
            path: null,
            object: null,
            parentExists: false,
            parentPath: null,
            parentObject: null
        };
        try {
            var lookup = FS.lookupPath(path, {
                parent: true
            });
            ret.parentExists = true;
            ret.parentPath = lookup.path;
            ret.parentObject = lookup.node;
            ret.name = PATH.basename(path);
            lookup = FS.lookupPath(path, {
                follow: !dontResolveLastLink
            });
            ret.exists = true;
            ret.path = lookup.path;
            ret.object = lookup.node;
            ret.name = lookup.node.name;
            ret.isRoot = lookup.path === "/"
        } catch (e) {
            ret.error = e.errno
        }
        return ret
    },
    createFolder: function(parent, name, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.mkdir(path, mode)
    },
    createPath: function(parent, path, canRead, canWrite) {
        parent = typeof parent === "string" ? parent : FS.getPath(parent);
        var parts = path.split("/").reverse();
        while (parts.length) {
            var part = parts.pop();
            if (!part)
                continue;
            var current = PATH.join2(parent, part);
            try {
                FS.mkdir(current)
            } catch (e) {}
            parent = current
        }
        return current
    },
    createFile: function(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(canRead, canWrite);
        return FS.create(path, mode)
    },
    createDataFile: function(parent, name, data, canRead, canWrite, canOwn) {
        var path = name ? PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name) : parent;
        var mode = FS.getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
            if (typeof data === "string") {
                var arr = new Array(data.length);
                for (var i = 0, len = data.length; i < len; ++i)
                    arr[i] = data.charCodeAt(i);
                data = arr
            }
            FS.chmod(node, mode | 146);
            var stream = FS.open(node, "w");
            FS.write(stream, data, 0, data.length, 0, canOwn);
            FS.close(stream);
            FS.chmod(node, mode)
        }
        return node
    },
    createDevice: function(parent, name, input, output) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        var mode = FS.getMode(!!input, !!output);
        if (!FS.createDevice.major)
            FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        FS.registerDevice(dev, {
            open: function(stream) {
                stream.seekable = false
            },
            close: function(stream) {
                if (output && output.buffer && output.buffer.length) {
                    output(10)
                }
            },
            read: function(stream, buffer, offset, length, pos) {
                var bytesRead = 0;
                for (var i = 0; i < length; i++) {
                    var result;
                    try {
                        result = input()
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                    if (result === undefined && bytesRead === 0) {
                        throw new FS.ErrnoError(6)
                    }
                    if (result === null || result === undefined)
                        break;
                    bytesRead++;
                    buffer[offset + i] = result
                }
                if (bytesRead) {
                    stream.node.timestamp = Date.now()
                }
                return bytesRead
            },
            write: function(stream, buffer, offset, length, pos) {
                for (var i = 0; i < length; i++) {
                    try {
                        output(buffer[offset + i])
                    } catch (e) {
                        throw new FS.ErrnoError(29)
                    }
                }
                if (length) {
                    stream.node.timestamp = Date.now()
                }
                return i
            }
        });
        return FS.mkdev(path, mode, dev)
    },
    createLink: function(parent, name, target, canRead, canWrite) {
        var path = PATH.join2(typeof parent === "string" ? parent : FS.getPath(parent), name);
        return FS.symlink(target, path)
    },
    forceLoadFile: function(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents)
            return true;
        var success = true;
        if (typeof XMLHttpRequest !== "undefined") {
            throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")
        } else if (read_) {
            try {
                obj.contents = intArrayFromString(read_(obj.url), true);
                obj.usedBytes = obj.contents.length
            } catch (e) {
                success = false
            }
        } else {
            throw new Error("Cannot load without read() or XMLHttpRequest.")
        }
        if (!success)
            ___setErrNo(29);
        return success
    },
    createLazyFile: function(parent, name, url, canRead, canWrite) {
        function LazyUint8Array() {
            this.lengthKnown = false;
            this.chunks = []
        }
        LazyUint8Array.prototype.get = function LazyUint8Array_get(idx) {
            if (idx > this.length - 1 || idx < 0) {
                return undefined
            }
            var chunkOffset = idx % this.chunkSize;
            var chunkNum = idx / this.chunkSize | 0;
            return this.getter(chunkNum)[chunkOffset]
        }
        ;
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
            this.getter = getter
        }
        ;
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
            var xhr = new XMLHttpRequest;
            xhr.open("HEAD", url, false);
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            var datalength = Number(xhr.getResponseHeader("Content-length"));
            var header;
            var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
            var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
            var chunkSize = 1024 * 1024;
            if (!hasByteServing)
                chunkSize = datalength;
            var doXHR = function(from, to) {
                if (from > to)
                    throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
                if (to > datalength - 1)
                    throw new Error("only " + datalength + " bytes available! programmer error!");
                var xhr = new XMLHttpRequest;
                xhr.open("GET", url, false);
                if (datalength !== chunkSize)
                    xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
                if (typeof Uint8Array != "undefined")
                    xhr.responseType = "arraybuffer";
                if (xhr.overrideMimeType) {
                    xhr.overrideMimeType("text/plain; charset=x-user-defined")
                }
                xhr.send(null);
                if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304))
                    throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
                if (xhr.response !== undefined) {
                    return new Uint8Array(xhr.response || [])
                } else {
                    return intArrayFromString(xhr.responseText || "", true)
                }
            };
            var lazyArray = this;
            lazyArray.setDataGetter(function(chunkNum) {
                var start = chunkNum * chunkSize;
                var end = (chunkNum + 1) * chunkSize - 1;
                end = Math.min(end, datalength - 1);
                if (typeof lazyArray.chunks[chunkNum] === "undefined") {
                    lazyArray.chunks[chunkNum] = doXHR(start, end)
                }
                if (typeof lazyArray.chunks[chunkNum] === "undefined")
                    throw new Error("doXHR failed!");
                return lazyArray.chunks[chunkNum]
            });
            if (usesGzip || !datalength) {
                chunkSize = datalength = 1;
                datalength = this.getter(0).length;
                chunkSize = datalength;
                console.log("LazyFiles on gzip forces download of the whole file when length is accessed")
            }
            this._length = datalength;
            this._chunkSize = chunkSize;
            this.lengthKnown = true
        }
        ;
        if (typeof XMLHttpRequest !== "undefined") {
            if (!ENVIRONMENT_IS_WORKER)
                throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
            var lazyArray = new LazyUint8Array;
            Object.defineProperties(lazyArray, {
                length: {
                    get: function() {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._length
                    }
                },
                chunkSize: {
                    get: function() {
                        if (!this.lengthKnown) {
                            this.cacheLength()
                        }
                        return this._chunkSize
                    }
                }
            });
            var properties = {
                isDevice: false,
                contents: lazyArray
            }
        } else {
            var properties = {
                isDevice: false,
                url: url
            }
        }
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        if (properties.contents) {
            node.contents = properties.contents
        } else if (properties.url) {
            node.contents = null;
            node.url = properties.url
        }
        Object.defineProperties(node, {
            usedBytes: {
                get: function() {
                    return this.contents.length
                }
            }
        });
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach(function(key) {
            var fn = node.stream_ops[key];
            stream_ops[key] = function forceLoadLazyFile() {
                if (!FS.forceLoadFile(node)) {
                    throw new FS.ErrnoError(29)
                }
                return fn.apply(null, arguments)
            }
        });
        stream_ops.read = function stream_ops_read(stream, buffer, offset, length, position) {
            if (!FS.forceLoadFile(node)) {
                throw new FS.ErrnoError(29)
            }
            var contents = stream.node.contents;
            if (position >= contents.length)
                return 0;
            var size = Math.min(contents.length - position, length);
            if (contents.slice) {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents[position + i]
                }
            } else {
                for (var i = 0; i < size; i++) {
                    buffer[offset + i] = contents.get(position + i)
                }
            }
            return size
        }
        ;
        node.stream_ops = stream_ops;
        return node
    },
    createPreloadedFile: function(parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) {
        Browser.init();
        var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
        var dep = getUniqueRunDependency("cp " + fullname);
        function processData(byteArray) {
            function finish(byteArray) {
                if (preFinish)
                    preFinish();
                if (!dontCreateFile) {
                    FS.createDataFile(parent, name, byteArray, canRead, canWrite, canOwn)
                }
                if (onload)
                    onload();
                removeRunDependency(dep)
            }
            var handled = false;
            Module["preloadPlugins"].forEach(function(plugin) {
                if (handled)
                    return;
                if (plugin["canHandle"](fullname)) {
                    plugin["handle"](byteArray, fullname, finish, function() {
                        if (onerror)
                            onerror();
                        removeRunDependency(dep)
                    });
                    handled = true
                }
            });
            if (!handled)
                finish(byteArray)
        }
        addRunDependency(dep);
        if (typeof url == "string") {
            Browser.asyncLoad(url, function(byteArray) {
                processData(byteArray)
            }, onerror)
        } else {
            processData(url)
        }
    },
    indexedDB: function() {
        return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
    },
    DB_NAME: function() {
        return "EM_FS_" + window.location.pathname
    },
    DB_VERSION: 20,
    DB_STORE_NAME: "FILE_DATA",
    saveFilesToDB: function(paths, onload, onerror) {
        onload = onload || function() {}
        ;
        onerror = onerror || function() {}
        ;
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = function openRequest_onupgradeneeded() {
            console.log("creating db");
            var db = openRequest.result;
            db.createObjectStore(FS.DB_STORE_NAME)
        }
        ;
        openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            var transaction = db.transaction([FS.DB_STORE_NAME], "readwrite");
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0
              , fail = 0
              , total = paths.length;
            function finish() {
                if (fail == 0)
                    onload();
                else
                    onerror()
            }
            paths.forEach(function(path) {
                var putRequest = files.put(FS.analyzePath(path).object.contents, path);
                putRequest.onsuccess = function putRequest_onsuccess() {
                    ok++;
                    if (ok + fail == total)
                        finish()
                }
                ;
                putRequest.onerror = function putRequest_onerror() {
                    fail++;
                    if (ok + fail == total)
                        finish()
                }
            });
            transaction.onerror = onerror
        }
        ;
        openRequest.onerror = onerror
    },
    loadFilesFromDB: function(paths, onload, onerror) {
        onload = onload || function() {}
        ;
        onerror = onerror || function() {}
        ;
        var indexedDB = FS.indexedDB();
        try {
            var openRequest = indexedDB.open(FS.DB_NAME(), FS.DB_VERSION)
        } catch (e) {
            return onerror(e)
        }
        openRequest.onupgradeneeded = onerror;
        openRequest.onsuccess = function openRequest_onsuccess() {
            var db = openRequest.result;
            try {
                var transaction = db.transaction([FS.DB_STORE_NAME], "readonly")
            } catch (e) {
                onerror(e);
                return
            }
            var files = transaction.objectStore(FS.DB_STORE_NAME);
            var ok = 0
              , fail = 0
              , total = paths.length;
            function finish() {
                if (fail == 0)
                    onload();
                else
                    onerror()
            }
            paths.forEach(function(path) {
                var getRequest = files.get(path);
                getRequest.onsuccess = function getRequest_onsuccess() {
                    if (FS.analyzePath(path).exists) {
                        FS.unlink(path)
                    }
                    FS.createDataFile(PATH.dirname(path), PATH.basename(path), getRequest.result, true, true, true);
                    ok++;
                    if (ok + fail == total)
                        finish()
                }
                ;
                getRequest.onerror = function getRequest_onerror() {
                    fail++;
                    if (ok + fail == total)
                        finish()
                }
            });
            transaction.onerror = onerror
        }
        ;
        openRequest.onerror = onerror
    }
};
var SYS = {
    exited: false,
    style: null,
    loading: null,
    timeBase: null,
    fakeTime: 0,
    initialized: false,
    css: '@font-face {\tfont-family: "Open Sans";\tfont-weight: normal;\tfont-style: normal;}.btn {\tdisplay: inline-block;\tmargin-bottom: 0;\tfont-weight: 400;\ttext-align: center;\tvertical-align: middle;\tcursor: pointer;\tbackground-image: none;\tborder: 1px solid transparent;\twhite-space: nowrap;\tpadding: 6px 12px;\tfont-size: 14px;\tline-height: 1.428571429;\tborder-radius: 4px;}.btn-success {\tcolor: #fff;\tbackground-color: #5cb85c;\tborder-color: #4cae4c;}.btn-success:hover {\tbackground-color: #47a447;\tborder-color: #398439;}#eula-frame {\tdisplay: none;\tposition: absolute;\ttop: 0;\tleft: 0;\tbottom: 0;\tright: 0;\toverflow-y: auto;}#eula-frame-inner {\tmax-width: 940px;\tmargin: 0 auto;\tpadding: 5em 0;\tbackground: rgba(0, 0, 0, 0.9);\tcolor: #eee;\tfont-size: 1.2em;}#eula-frame p {\tfont-family: "Helvetica Neue", Helvetica, Arial, sans-serif;}#eula {\tcolor: #ccc;\theight: 25em;\tmargin: 3em 0;\toverflow-y: scroll;\twhite-space: pre-wrap;}#dialog {\tdisplay: none;\tposition: absolute;\ttop: 50%;\tleft: 50%;\tmargin-top: -5em;\tmargin-left: -12em;\twidth: 24em;\tbackground: #2a2a2a;}#dialog .title {\tmargin: 0;\tpadding: 0.2em 0.5em;\tbackground: #333;\tcolor: #fff;\tfont-family: "Open Sans";\tfont-weight: bold;\ttext-transform: uppercase;}#dialog .description {\tmargin: 0;\tpadding: 0.5em;\tcolor: #fff;\tfont-family: "Helvetica Neue", Helvetica, Arial, sans-serif;}#loading {\tdisplay: none;\tposition: absolute;\ttop: 0;\tleft: 0;\tbottom: 0;\tright: 0;\tz-index: 1;}#loading-progress {\tposition: absolute;\ttop: 50%;\tleft: 50%;\tmargin-top: -1em;\tmargin-left: -12em;\tpadding: 0.4em;\twidth: 24em;\tbackground: rgba(0, 0, 0, 0.7);}#loading-progress .description {\ttext-align: center;\tcolor: #fff;\tfont-family: "Open Sans";\ttext-shadow: 1px 1px 2px #000;\ttext-transform: uppercase;}#loading-progress .bar-wrapper {\tbackground: #222;\tborder-radius: 2px;}#loading-progress .bar {\twidth: 0;\tbackground: #2dbb30;\tbox-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);}',
    LoadingDescription: function(desc) {
        var progress = document.getElementById("loading-progress");
        var description = progress.querySelector(".description");
        if (!desc) {
            SYS.loading.style.display = "none";
            SYS.LoadingProgress(0)
        } else {
            SYS.loading.style.display = "block"
        }
        description.innerHTML = desc
    },
    LoadingProgress: function(frac) {
        var progress = document.getElementById("loading-progress");
        var bar = progress.querySelector(".bar");
        bar.style.width = frac * 100 + "%"
    }
};
var SYSC = {
    Print: function(str) {
        str = allocate(intArrayFromString(str + "\n"), "i8", ALLOC_STACK);
        console.log(str)
    },
    Error: function(level, err) {
        if (level === "fatal") {
            level = 0
        } else if (level === "drop") {
            level = 1
        } else if (level === "serverdisconnect") {
            level = 2
        } else if (level === "disconnect") {
            level = 3
        } else {
            level = 0
        }
        err = allocate(intArrayFromString(err + "\n"), "i8", ALLOC_STACK);
        _Com_Error(level, err)
    }
};
function _Sys_Cwd() {
    var cwd = allocate(intArrayFromString(FS.cwd()), "i8", ALLOC_STACK);
    return cwd
}
function _Sys_Dirname(path) {
    path = UTF8ToString(path);
    path = PATH.dirname(path);
    var dirname = allocate(intArrayFromString(path), "i8", ALLOC_STACK);
    return dirname
}
function _Sys_ErrorDialog(error) {
    error = UTF8ToString(error);
    var handler = Module["exitHandler"];
    if (handler) {
        SYS.exited = true;
        handler(error);
        return
    }
    var title = SYS.dialog.querySelector(".title");
    title.className = "title error";
    title.innerHTML = "Error";
    var description = SYS.dialog.querySelector(".description");
    description.innerHTML = error;
    SYS.dialog.style.display = "block"
}
function _Sys_FreeFileList(list) {
    if (!list) {
        return
    }
    var ptr;
    for (var i = 0; ptr = HEAP32[list + i * 4 >> 2]; i++) {
        _free(ptr)
    }
    _free(list)
}
function _Sys_ListFiles(directory, ext, filter, numfiles, dironly) {
    directory = UTF8ToString(directory);
    ext = UTF8ToString(ext);
    if (ext === "/") {
        ext = null;
        dironly = true
    }
    var contents;
    try {
        contents = FS.readdir(directory)
    } catch (e) {
        HEAP32[numfiles >> 2] = 0;
        return null
    }
    var matches = [];
    for (var i = 0; i < contents.length; i++) {
        var name = contents[i];
        var stat = FS.stat(PATH.join(directory, name));
        if (dironly && !FS.isDir(stat.mode)) {
            continue
        }
        if (!ext || name.lastIndexOf(ext) === name.length - ext.length) {
            matches.push(name)
        }
    }
    HEAP32[numfiles >> 2] = matches.length;
    if (!matches.length) {
        return null
    }
    var list = _malloc((matches.length + 1) * 4);
    var i;
    for (i = 0; i < matches.length; i++) {
        var filename = _malloc(matches[i].length + 1);
        stringToUTF8(matches[i], filename, matches[i].length + 1);
        HEAP32[list + i * 4 >> 2] = filename
    }
    HEAP32[list + i * 4 >> 2] = 0;
    return list
}
function _Sys_Milliseconds() {
    return Math.floor(Date.now() - SYS.timeBase) | 0
}
function _Sys_Mkdir(directory) {
    directory = UTF8ToString(directory);
    try {
        FS.mkdir(directory, 511)
    } catch (e) {
        if (!(e instanceof FS.ErrnoError)) {
            SYSC.Error("drop", e.message)
        }
        return e.errno === ERRNO_CODES.EEXIST
    }
    return true
}
function _Sys_PlatformExit() {}
function _Sys_PlatformInit() {
    SYS.timeBase = Date.now();
    if (SYS.initialized)
        return;
    var style = document.createElement("style");
    style.setAttribute("type", "text/css");
    style.innerHTML = SYS.css;
    SYS.style = document.getElementsByTagName("head")[0].appendChild(style);
    var dialog = document.createElement("div");
    dialog.id = "dialog";
    dialog.innerHTML = '<h4 class="title"></h4>' + '<p class="description"></p>';
    SYS.dialog = Module["viewport"].appendChild(dialog);
    var loading = document.createElement("div");
    loading.id = "loading";
    loading.innerHTML = '<div id="loading-progress">' + '\t<div class="description"></div>' + '\t<div class="bar-wrapper"><div class="bar">&nbsp;</div></div>' + "</div>";
    SYS.loading = Module["viewport"].appendChild(loading)
}
function _atexit(func, arg) {
    __ATEXIT__.unshift({
        func: func,
        arg: arg
    })
}
function ___cxa_atexit() {
    return _atexit.apply(null, arguments)
}
function ___lock() {}
var ERRNO_CODES = {
    EPERM: 63,
    ENOENT: 44,
    ESRCH: 71,
    EINTR: 27,
    EIO: 29,
    ENXIO: 60,
    E2BIG: 1,
    ENOEXEC: 45,
    EBADF: 8,
    ECHILD: 12,
    EAGAIN: 6,
    EWOULDBLOCK: 6,
    ENOMEM: 48,
    EACCES: 2,
    EFAULT: 21,
    ENOTBLK: 105,
    EBUSY: 10,
    EEXIST: 20,
    EXDEV: 75,
    ENODEV: 43,
    ENOTDIR: 54,
    EISDIR: 31,
    EINVAL: 28,
    ENFILE: 41,
    EMFILE: 33,
    ENOTTY: 59,
    ETXTBSY: 74,
    EFBIG: 22,
    ENOSPC: 51,
    ESPIPE: 70,
    EROFS: 69,
    EMLINK: 34,
    EPIPE: 64,
    EDOM: 18,
    ERANGE: 68,
    ENOMSG: 49,
    EIDRM: 24,
    ECHRNG: 106,
    EL2NSYNC: 156,
    EL3HLT: 107,
    EL3RST: 108,
    ELNRNG: 109,
    EUNATCH: 110,
    ENOCSI: 111,
    EL2HLT: 112,
    EDEADLK: 16,
    ENOLCK: 46,
    EBADE: 113,
    EBADR: 114,
    EXFULL: 115,
    ENOANO: 104,
    EBADRQC: 103,
    EBADSLT: 102,
    EDEADLOCK: 16,
    EBFONT: 101,
    ENOSTR: 100,
    ENODATA: 116,
    ETIME: 117,
    ENOSR: 118,
    ENONET: 119,
    ENOPKG: 120,
    EREMOTE: 121,
    ENOLINK: 47,
    EADV: 122,
    ESRMNT: 123,
    ECOMM: 124,
    EPROTO: 65,
    EMULTIHOP: 36,
    EDOTDOT: 125,
    EBADMSG: 9,
    ENOTUNIQ: 126,
    EBADFD: 127,
    EREMCHG: 128,
    ELIBACC: 129,
    ELIBBAD: 130,
    ELIBSCN: 131,
    ELIBMAX: 132,
    ELIBEXEC: 133,
    ENOSYS: 52,
    ENOTEMPTY: 55,
    ENAMETOOLONG: 37,
    ELOOP: 32,
    EOPNOTSUPP: 138,
    EPFNOSUPPORT: 139,
    ECONNRESET: 15,
    ENOBUFS: 42,
    EAFNOSUPPORT: 5,
    EPROTOTYPE: 67,
    ENOTSOCK: 57,
    ENOPROTOOPT: 50,
    ESHUTDOWN: 140,
    ECONNREFUSED: 14,
    EADDRINUSE: 3,
    ECONNABORTED: 13,
    ENETUNREACH: 40,
    ENETDOWN: 38,
    ETIMEDOUT: 73,
    EHOSTDOWN: 142,
    EHOSTUNREACH: 23,
    EINPROGRESS: 26,
    EALREADY: 7,
    EDESTADDRREQ: 17,
    EMSGSIZE: 35,
    EPROTONOSUPPORT: 66,
    ESOCKTNOSUPPORT: 137,
    EADDRNOTAVAIL: 4,
    ENETRESET: 39,
    EISCONN: 30,
    ENOTCONN: 53,
    ETOOMANYREFS: 141,
    EUSERS: 136,
    EDQUOT: 19,
    ESTALE: 72,
    ENOTSUP: 138,
    ENOMEDIUM: 148,
    EILSEQ: 25,
    EOVERFLOW: 61,
    ECANCELED: 11,
    ENOTRECOVERABLE: 56,
    EOWNERDEAD: 62,
    ESTRPIPE: 135
};
var SOCKFS = {
    mount: function(mount) {
        Module["websocket"] = Module["websocket"] && "object" === typeof Module["websocket"] ? Module["websocket"] : {};
        Module["websocket"]._callbacks = {};
        Module["websocket"]["on"] = function(event, callback) {
            if ("function" === typeof callback) {
                this._callbacks[event] = callback
            }
            return this
        }
        ;
        Module["websocket"].emit = function(event, param) {
            if ("function" === typeof this._callbacks[event]) {
                this._callbacks[event].call(this, param)
            }
        }
        ;
        return FS.createNode(null, "/", 16384 | 511, 0)
    },
    createSocket: function(family, type, protocol) {
        var streaming = type == 1;
        if (protocol) {
            assert(streaming == (protocol == 6))
        }
        var sock = {
            family: family,
            type: type,
            protocol: protocol,
            server: null,
            error: null,
            peers: {},
            pending: [],
            recv_queue: [],
            sock_ops: SOCKFS.websocket_sock_ops
        };
        var name = SOCKFS.nextname();
        var node = FS.createNode(SOCKFS.root, name, 49152, 0);
        node.sock = sock;
        var stream = FS.createStream({
            path: name,
            node: node,
            flags: FS.modeStringToFlags("r+"),
            seekable: false,
            stream_ops: SOCKFS.stream_ops
        });
        sock.stream = stream;
        return sock
    },
    getSocket: function(fd) {
        var stream = FS.getStream(fd);
        if (!stream || !FS.isSocket(stream.node.mode)) {
            return null
        }
        return stream.node.sock
    },
    stream_ops: {
        poll: function(stream) {
            var sock = stream.node.sock;
            return sock.sock_ops.poll(sock)
        },
        ioctl: function(stream, request, varargs) {
            var sock = stream.node.sock;
            return sock.sock_ops.ioctl(sock, request, varargs)
        },
        read: function(stream, buffer, offset, length, position) {
            var sock = stream.node.sock;
            var msg = sock.sock_ops.recvmsg(sock, length);
            if (!msg) {
                return 0
            }
            buffer.set(msg.buffer, offset);
            return msg.buffer.length
        },
        write: function(stream, buffer, offset, length, position) {
            var sock = stream.node.sock;
            return sock.sock_ops.sendmsg(sock, buffer, offset, length)
        },
        close: function(stream) {
            var sock = stream.node.sock;
            sock.sock_ops.close(sock)
        }
    },
    nextname: function() {
        if (!SOCKFS.nextname.current) {
            SOCKFS.nextname.current = 0
        }
        return "socket[" + SOCKFS.nextname.current++ + "]"
    },
    websocket_sock_ops: {
        createPeer: function(sock, addr, port) {
            var ws;
            if (typeof addr === "object") {
                ws = addr;
                addr = null;
                port = null
            }
            if (ws) {
                if (ws._socket) {
                    addr = ws._socket.remoteAddress;
                    port = ws._socket.remotePort
                } else {
                    var result = /ws[s]?:\/\/([^:]+):(\d+)/.exec(ws.url);
                    if (!result) {
                        throw new Error("WebSocket URL must be in the format ws(s)://address:port")
                    }
                    addr = result[1];
                    port = parseInt(result[2], 10)
                }
            } else {
                try {
                    var runtimeConfig = Module["websocket"] && "object" === typeof Module["websocket"];
                    var url = "ws:#".replace("#", "//");
                    if (runtimeConfig) {
                        if ("string" === typeof Module["websocket"]["url"]) {
                            url = Module["websocket"]["url"]
                        }
                    }
                    if (url === "ws://" || url === "wss://") {
                        var parts = addr.split("/");
                        url = url + parts[0] + ":" + port + "/" + parts.slice(1).join("/")
                    }
                    var subProtocols = "binary";
                    if (runtimeConfig) {
                        if ("string" === typeof Module["websocket"]["subprotocol"]) {
                            subProtocols = Module["websocket"]["subprotocol"]
                        }
                    }
                    var opts = undefined;
                    if (subProtocols !== "null") {
                        subProtocols = subProtocols.replace(/^ +| +$/g, "").split(/ *, */);
                        opts = ENVIRONMENT_IS_NODE ? {
                            "protocol": subProtocols.toString()
                        } : subProtocols
                    }
                    if (runtimeConfig && null === Module["websocket"]["subprotocol"]) {
                        subProtocols = "null";
                        opts = undefined
                    }
                    var WebSocketConstructor;
                    if (ENVIRONMENT_IS_NODE) {
                        WebSocketConstructor = require("ws")
                    } else if (ENVIRONMENT_IS_WEB) {
                        WebSocketConstructor = window["WebSocket"]
                    } else {
                        WebSocketConstructor = WebSocket
                    }
                    ws = new WebSocketConstructor(url,opts);
                    ws.binaryType = "arraybuffer"
                } catch (e) {
                    throw new FS.ErrnoError(ERRNO_CODES.EHOSTUNREACH)
                }
            }
            var peer = {
                addr: addr,
                port: port,
                socket: ws,
                dgram_send_queue: []
            };
            SOCKFS.websocket_sock_ops.addPeer(sock, peer);
            SOCKFS.websocket_sock_ops.handlePeerEvents(sock, peer);
            if (sock.type === 2 && typeof sock.sport !== "undefined") {
                peer.dgram_send_queue.push(new Uint8Array([255, 255, 255, 255, "p".charCodeAt(0), "o".charCodeAt(0), "r".charCodeAt(0), "t".charCodeAt(0), (sock.sport & 65280) >> 8, sock.sport & 255]))
            }
            return peer
        },
        getPeer: function(sock, addr, port) {
            return sock.peers[addr + ":" + port]
        },
        addPeer: function(sock, peer) {
            sock.peers[peer.addr + ":" + peer.port] = peer
        },
        removePeer: function(sock, peer) {
            delete sock.peers[peer.addr + ":" + peer.port]
        },
        handlePeerEvents: function(sock, peer) {
            var first = true;
            var handleOpen = function() {
                Module["websocket"].emit("open", sock.stream.fd);
                try {
                    var queued = peer.dgram_send_queue.shift();
                    while (queued) {
                        peer.socket.send(queued);
                        queued = peer.dgram_send_queue.shift()
                    }
                } catch (e) {
                    peer.socket.close()
                }
            };
            function handleMessage(data) {
                if (typeof data === "string") {
                    var encoder = new TextEncoder;
                    data = encoder.encode(data)
                } else {
                    assert(data.byteLength !== undefined);
                    if (data.byteLength == 0) {
                        return
                    } else {
                        data = new Uint8Array(data)
                    }
                }
                var wasfirst = first;
                first = false;
                if (wasfirst && data.length === 10 && data[0] === 255 && data[1] === 255 && data[2] === 255 && data[3] === 255 && data[4] === "p".charCodeAt(0) && data[5] === "o".charCodeAt(0) && data[6] === "r".charCodeAt(0) && data[7] === "t".charCodeAt(0)) {
                    var newport = data[8] << 8 | data[9];
                    SOCKFS.websocket_sock_ops.removePeer(sock, peer);
                    peer.port = newport;
                    SOCKFS.websocket_sock_ops.addPeer(sock, peer);
                    return
                }
                sock.recv_queue.push({
                    addr: peer.addr,
                    port: peer.port,
                    data: data
                });
                Module["websocket"].emit("message", sock.stream.fd)
            }
            if (ENVIRONMENT_IS_NODE) {
                peer.socket.on("open", handleOpen);
                peer.socket.on("message", function(data, flags) {
                    if (!flags.binary) {
                        return
                    }
                    handleMessage(new Uint8Array(data).buffer)
                });
                peer.socket.on("close", function() {
                    Module["websocket"].emit("close", sock.stream.fd)
                });
                peer.socket.on("error", function(error) {
                    sock.error = ERRNO_CODES.ECONNREFUSED;
                    Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
                })
            } else {
                peer.socket.onopen = handleOpen;
                peer.socket.onclose = function() {
                    Module["websocket"].emit("close", sock.stream.fd)
                }
                ;
                peer.socket.onmessage = function peer_socket_onmessage(event) {
                    handleMessage(event.data)
                }
                ;
                peer.socket.onerror = function(error) {
                    sock.error = ERRNO_CODES.ECONNREFUSED;
                    Module["websocket"].emit("error", [sock.stream.fd, sock.error, "ECONNREFUSED: Connection refused"])
                }
            }
        },
        poll: function(sock) {
            if (sock.type === 1 && sock.server) {
                return sock.pending.length ? 64 | 1 : 0
            }
            var mask = 0;
            var dest = sock.type === 1 ? SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport) : null;
            if (sock.recv_queue.length || !dest || dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
                mask |= 64 | 1
            }
            if (!dest || dest && dest.socket.readyState === dest.socket.OPEN) {
                mask |= 4
            }
            if (dest && dest.socket.readyState === dest.socket.CLOSING || dest && dest.socket.readyState === dest.socket.CLOSED) {
                mask |= 16
            }
            return mask
        },
        ioctl: function(sock, request, arg) {
            switch (request) {
            case 21531:
                var bytes = 0;
                if (sock.recv_queue.length) {
                    bytes = sock.recv_queue[0].data.length
                }
                HEAP32[arg >> 2] = bytes;
                return 0;
            default:
                return ERRNO_CODES.EINVAL
            }
        },
        close: function(sock) {
            if (sock.server) {
                try {
                    sock.server.close()
                } catch (e) {}
                sock.server = null
            }
            var peers = Object.keys(sock.peers);
            for (var i = 0; i < peers.length; i++) {
                var peer = sock.peers[peers[i]];
                try {
                    peer.socket.close()
                } catch (e) {}
                SOCKFS.websocket_sock_ops.removePeer(sock, peer)
            }
            return 0
        },
        bind: function(sock, addr, port) {
            if (typeof sock.saddr !== "undefined" || typeof sock.sport !== "undefined") {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL)
            }
            sock.saddr = addr;
            sock.sport = port;
            if (sock.type === 2) {
                if (sock.server) {
                    sock.server.close();
                    sock.server = null
                }
                try {
                    sock.sock_ops.listen(sock, 0)
                } catch (e) {
                    if (!(e instanceof FS.ErrnoError))
                        throw e;
                    if (e.errno !== ERRNO_CODES.EOPNOTSUPP)
                        throw e
                }
            }
        },
        connect: function(sock, addr, port) {
            if (sock.server) {
                throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP)
            }
            if (typeof sock.daddr !== "undefined" && typeof sock.dport !== "undefined") {
                var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                if (dest) {
                    if (dest.socket.readyState === dest.socket.CONNECTING) {
                        throw new FS.ErrnoError(ERRNO_CODES.EALREADY)
                    } else {
                        throw new FS.ErrnoError(ERRNO_CODES.EISCONN)
                    }
                }
            }
            var peer = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port);
            sock.daddr = peer.addr;
            sock.dport = peer.port;
            throw new FS.ErrnoError(ERRNO_CODES.EINPROGRESS)
        },
        listen: function(sock, backlog) {
            if (!ENVIRONMENT_IS_NODE) {
                throw new FS.ErrnoError(ERRNO_CODES.EOPNOTSUPP)
            }
            if (sock.server) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL)
            }
            var WebSocketServer = require("ws").Server;
            var host = sock.saddr;
            sock.server = new WebSocketServer({
                host: host,
                port: sock.sport
            });
            Module["websocket"].emit("listen", sock.stream.fd);
            sock.server.on("connection", function(ws) {
                if (sock.type === 1) {
                    var newsock = SOCKFS.createSocket(sock.family, sock.type, sock.protocol);
                    var peer = SOCKFS.websocket_sock_ops.createPeer(newsock, ws);
                    newsock.daddr = peer.addr;
                    newsock.dport = peer.port;
                    sock.pending.push(newsock);
                    Module["websocket"].emit("connection", newsock.stream.fd)
                } else {
                    SOCKFS.websocket_sock_ops.createPeer(sock, ws);
                    Module["websocket"].emit("connection", sock.stream.fd)
                }
            });
            sock.server.on("closed", function() {
                Module["websocket"].emit("close", sock.stream.fd);
                sock.server = null
            });
            sock.server.on("error", function(error) {
                sock.error = ERRNO_CODES.EHOSTUNREACH;
                Module["websocket"].emit("error", [sock.stream.fd, sock.error, "EHOSTUNREACH: Host is unreachable"])
            })
        },
        accept: function(listensock) {
            if (!listensock.server) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL)
            }
            var newsock = listensock.pending.shift();
            newsock.stream.flags = listensock.stream.flags;
            return newsock
        },
        getname: function(sock, peer) {
            var addr, port;
            if (peer) {
                if (sock.daddr === undefined || sock.dport === undefined) {
                    throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN)
                }
                addr = sock.daddr;
                port = sock.dport
            } else {
                addr = sock.saddr || 0;
                port = sock.sport || 0
            }
            return {
                addr: addr,
                port: port
            }
        },
        sendmsg: function(sock, buffer, offset, length, addr, port) {
            if (sock.type === 2) {
                if (addr === undefined || port === undefined) {
                    addr = sock.daddr;
                    port = sock.dport
                }
                if (addr === undefined || port === undefined) {
                    throw new FS.ErrnoError(ERRNO_CODES.EDESTADDRREQ)
                }
            } else {
                addr = sock.daddr;
                port = sock.dport
            }
            var dest = SOCKFS.websocket_sock_ops.getPeer(sock, addr, port);
            if (sock.type === 1) {
                if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                    throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN)
                } else if (dest.socket.readyState === dest.socket.CONNECTING) {
                    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
                }
            }
            if (ArrayBuffer.isView(buffer)) {
                offset += buffer.byteOffset;
                buffer = buffer.buffer
            }
            var data;
            data = buffer.slice(offset, offset + length);
            if (sock.type === 2) {
                if (!dest || dest.socket.readyState !== dest.socket.OPEN) {
                    if (!dest || dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                        dest = SOCKFS.websocket_sock_ops.createPeer(sock, addr, port)
                    }
                    dest.dgram_send_queue.push(data);
                    return length
                }
            }
            try {
                dest.socket.send(data);
                return length
            } catch (e) {
                throw new FS.ErrnoError(ERRNO_CODES.EINVAL)
            }
        },
        recvmsg: function(sock, length) {
            if (sock.type === 1 && sock.server) {
                throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN)
            }
            var queued = sock.recv_queue.shift();
            if (!queued) {
                if (sock.type === 1) {
                    var dest = SOCKFS.websocket_sock_ops.getPeer(sock, sock.daddr, sock.dport);
                    if (!dest) {
                        throw new FS.ErrnoError(ERRNO_CODES.ENOTCONN)
                    } else if (dest.socket.readyState === dest.socket.CLOSING || dest.socket.readyState === dest.socket.CLOSED) {
                        return null
                    } else {
                        throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
                    }
                } else {
                    throw new FS.ErrnoError(ERRNO_CODES.EAGAIN)
                }
            }
            var queuedLength = queued.data.byteLength || queued.data.length;
            var queuedOffset = queued.data.byteOffset || 0;
            var queuedBuffer = queued.data.buffer || queued.data;
            var bytesRead = Math.min(length, queuedLength);
            var res = {
                buffer: new Uint8Array(queuedBuffer,queuedOffset,bytesRead),
                addr: queued.addr,
                port: queued.port
            };
            if (sock.type === 1 && bytesRead < queuedLength) {
                var bytesRemaining = queuedLength - bytesRead;
                queued.data = new Uint8Array(queuedBuffer,queuedOffset + bytesRead,bytesRemaining);
                sock.recv_queue.unshift(queued)
            }
            return res
        }
    }
};
function __inet_pton4_raw(str) {
    var b = str.split(".");
    for (var i = 0; i < 4; i++) {
        var tmp = Number(b[i]);
        if (isNaN(tmp))
            return null;
        b[i] = tmp
    }
    return (b[0] | b[1] << 8 | b[2] << 16 | b[3] << 24) >>> 0
}
function __inet_pton6_raw(str) {
    var words;
    var w, offset, z;
    var valid6regx = /^((?=.*::)(?!.*::.+::)(::)?([\dA-F]{1,4}:(:|\b)|){5}|([\dA-F]{1,4}:){6})((([\dA-F]{1,4}((?!\3)::|:\b|$))|(?!\2\3)){2}|(((2[0-4]|1\d|[1-9])?\d|25[0-5])\.?\b){4})$/i;
    var parts = [];
    if (!valid6regx.test(str)) {
        return null
    }
    if (str === "::") {
        return [0, 0, 0, 0, 0, 0, 0, 0]
    }
    if (str.indexOf("::") === 0) {
        str = str.replace("::", "Z:")
    } else {
        str = str.replace("::", ":Z:")
    }
    if (str.indexOf(".") > 0) {
        str = str.replace(new RegExp("[.]","g"), ":");
        words = str.split(":");
        words[words.length - 4] = parseInt(words[words.length - 4]) + parseInt(words[words.length - 3]) * 256;
        words[words.length - 3] = parseInt(words[words.length - 2]) + parseInt(words[words.length - 1]) * 256;
        words = words.slice(0, words.length - 2)
    } else {
        words = str.split(":")
    }
    offset = 0;
    z = 0;
    for (w = 0; w < words.length; w++) {
        if (typeof words[w] === "string") {
            if (words[w] === "Z") {
                for (z = 0; z < 8 - words.length + 1; z++) {
                    parts[w + z] = 0
                }
                offset = z - 1
            } else {
                parts[w + offset] = _htons(parseInt(words[w], 16))
            }
        } else {
            parts[w + offset] = words[w]
        }
    }
    return [parts[1] << 16 | parts[0], parts[3] << 16 | parts[2], parts[5] << 16 | parts[4], parts[7] << 16 | parts[6]]
}
var DNS = {
    address_map: {
        id: 1,
        addrs: {},
        names: {}
    },
    lookup_name: function(name) {
        var res = __inet_pton4_raw(name);
        if (res !== null) {
            return name
        }
        res = __inet_pton6_raw(name);
        if (res !== null) {
            return name
        }
        var addr;
        if (DNS.address_map.addrs[name]) {
            addr = DNS.address_map.addrs[name]
        } else {
            var id = DNS.address_map.id++;
            assert(id < 65535, "exceeded max address mappings of 65535");
            addr = "172.29." + (id & 255) + "." + (id & 65280);
            DNS.address_map.names[addr] = name;
            DNS.address_map.addrs[name] = addr
        }
        return addr
    },
    lookup_addr: function(addr) {
        if (DNS.address_map.names[addr]) {
            return DNS.address_map.names[addr]
        }
        return null
    }
};
function __inet_ntop4_raw(addr) {
    return (addr & 255) + "." + (addr >> 8 & 255) + "." + (addr >> 16 & 255) + "." + (addr >> 24 & 255)
}
function __inet_ntop6_raw(ints) {
    var str = "";
    var word = 0;
    var longest = 0;
    var lastzero = 0;
    var zstart = 0;
    var len = 0;
    var i = 0;
    var parts = [ints[0] & 65535, ints[0] >> 16, ints[1] & 65535, ints[1] >> 16, ints[2] & 65535, ints[2] >> 16, ints[3] & 65535, ints[3] >> 16];
    var hasipv4 = true;
    var v4part = "";
    for (i = 0; i < 5; i++) {
        if (parts[i] !== 0) {
            hasipv4 = false;
            break
        }
    }
    if (hasipv4) {
        v4part = __inet_ntop4_raw(parts[6] | parts[7] << 16);
        if (parts[5] === -1) {
            str = "::ffff:";
            str += v4part;
            return str
        }
        if (parts[5] === 0) {
            str = "::";
            if (v4part === "0.0.0.0")
                v4part = "";
            if (v4part === "0.0.0.1")
                v4part = "1";
            str += v4part;
            return str
        }
    }
    for (word = 0; word < 8; word++) {
        if (parts[word] === 0) {
            if (word - lastzero > 1) {
                len = 0
            }
            lastzero = word;
            len++
        }
        if (len > longest) {
            longest = len;
            zstart = word - longest + 1
        }
    }
    for (word = 0; word < 8; word++) {
        if (longest > 1) {
            if (parts[word] === 0 && word >= zstart && word < zstart + longest) {
                if (word === zstart) {
                    str += ":";
                    if (zstart === 0)
                        str += ":"
                }
                continue
            }
        }
        str += Number(_ntohs(parts[word] & 65535)).toString(16);
        str += word < 7 ? ":" : ""
    }
    return str
}
function __read_sockaddr(sa, salen) {
    var family = HEAP16[sa >> 1];
    var port = _ntohs(HEAPU16[sa + 2 >> 1]);
    var addr;
    switch (family) {
    case 2:
        if (salen !== 16) {
            return {
                errno: 28
            }
        }
        addr = HEAP32[sa + 4 >> 2];
        addr = __inet_ntop4_raw(addr);
        break;
    case 10:
        if (salen !== 28) {
            return {
                errno: 28
            }
        }
        addr = [HEAP32[sa + 8 >> 2], HEAP32[sa + 12 >> 2], HEAP32[sa + 16 >> 2], HEAP32[sa + 20 >> 2]];
        addr = __inet_ntop6_raw(addr);
        break;
    default:
        return {
            errno: 5
        }
    }
    return {
        family: family,
        addr: addr,
        port: port
    }
}
function __write_sockaddr(sa, family, addr, port) {
    switch (family) {
    case 2:
        addr = __inet_pton4_raw(addr);
        HEAP16[sa >> 1] = family;
        HEAP32[sa + 4 >> 2] = addr;
        HEAP16[sa + 2 >> 1] = _htons(port);
        break;
    case 10:
        addr = __inet_pton6_raw(addr);
        HEAP32[sa >> 2] = family;
        HEAP32[sa + 8 >> 2] = addr[0];
        HEAP32[sa + 12 >> 2] = addr[1];
        HEAP32[sa + 16 >> 2] = addr[2];
        HEAP32[sa + 20 >> 2] = addr[3];
        HEAP16[sa + 2 >> 1] = _htons(port);
        HEAP32[sa + 4 >> 2] = 0;
        HEAP32[sa + 24 >> 2] = 0;
        break;
    default:
        return {
            errno: 5
        }
    }
    return {}
}
var SYSCALLS = {
    DEFAULT_POLLMASK: 5,
    mappings: {},
    umask: 511,
    calculateAt: function(dirfd, path) {
        if (path[0] !== "/") {
            var dir;
            if (dirfd === -100) {
                dir = FS.cwd()
            } else {
                var dirstream = FS.getStream(dirfd);
                if (!dirstream)
                    throw new FS.ErrnoError(8);
                dir = dirstream.path
            }
            path = PATH.join2(dir, path)
        }
        return path
    },
    doStat: function(func, path, buf) {
        try {
            var stat = func(path)
        } catch (e) {
            if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
                return -54
            }
            throw e
        }
        HEAP32[buf >> 2] = stat.dev;
        HEAP32[buf + 4 >> 2] = 0;
        HEAP32[buf + 8 >> 2] = stat.ino;
        HEAP32[buf + 12 >> 2] = stat.mode;
        HEAP32[buf + 16 >> 2] = stat.nlink;
        HEAP32[buf + 20 >> 2] = stat.uid;
        HEAP32[buf + 24 >> 2] = stat.gid;
        HEAP32[buf + 28 >> 2] = stat.rdev;
        HEAP32[buf + 32 >> 2] = 0;
        tempI64 = [stat.size >>> 0, (tempDouble = stat.size,
        +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
        HEAP32[buf + 40 >> 2] = tempI64[0],
        HEAP32[buf + 44 >> 2] = tempI64[1];
        HEAP32[buf + 48 >> 2] = 4096;
        HEAP32[buf + 52 >> 2] = stat.blocks;
        HEAP32[buf + 56 >> 2] = stat.atime.getTime() / 1e3 | 0;
        HEAP32[buf + 60 >> 2] = 0;
        HEAP32[buf + 64 >> 2] = stat.mtime.getTime() / 1e3 | 0;
        HEAP32[buf + 68 >> 2] = 0;
        HEAP32[buf + 72 >> 2] = stat.ctime.getTime() / 1e3 | 0;
        HEAP32[buf + 76 >> 2] = 0;
        tempI64 = [stat.ino >>> 0, (tempDouble = stat.ino,
        +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
        HEAP32[buf + 80 >> 2] = tempI64[0],
        HEAP32[buf + 84 >> 2] = tempI64[1];
        return 0
    },
    doMsync: function(addr, stream, len, flags) {
        var buffer = new Uint8Array(HEAPU8.subarray(addr, addr + len));
        FS.msync(stream, buffer, 0, len, flags)
    },
    doMkdir: function(path, mode) {
        path = PATH.normalize(path);
        if (path[path.length - 1] === "/")
            path = path.substr(0, path.length - 1);
        FS.mkdir(path, mode, 0);
        return 0
    },
    doMknod: function(path, mode, dev) {
        switch (mode & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
            break;
        default:
            return -28
        }
        FS.mknod(path, mode, dev);
        return 0
    },
    doReadlink: function(path, buf, bufsize) {
        if (bufsize <= 0)
            return -28;
        var ret = FS.readlink(path);
        var len = Math.min(bufsize, lengthBytesUTF8(ret));
        var endChar = HEAP8[buf + len];
        stringToUTF8(ret, buf, bufsize + 1);
        HEAP8[buf + len] = endChar;
        return len
    },
    doAccess: function(path, amode) {
        if (amode & ~7) {
            return -28
        }
        var node;
        var lookup = FS.lookupPath(path, {
            follow: true
        });
        node = lookup.node;
        if (!node) {
            return -44
        }
        var perms = "";
        if (amode & 4)
            perms += "r";
        if (amode & 2)
            perms += "w";
        if (amode & 1)
            perms += "x";
        if (perms && FS.nodePermissions(node, perms)) {
            return -2
        }
        return 0
    },
    doDup: function(path, flags, suggestFD) {
        var suggest = FS.getStream(suggestFD);
        if (suggest)
            FS.close(suggest);
        return FS.open(path, flags, 0, suggestFD, suggestFD).fd
    },
    doReadv: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov + i * 8 >> 2];
            var len = HEAP32[iov + (i * 8 + 4) >> 2];
            var curr = FS.read(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
                return -1;
            ret += curr;
            if (curr < len)
                break
        }
        return ret
    },
    doWritev: function(stream, iov, iovcnt, offset) {
        var ret = 0;
        for (var i = 0; i < iovcnt; i++) {
            var ptr = HEAP32[iov + i * 8 >> 2];
            var len = HEAP32[iov + (i * 8 + 4) >> 2];
            var curr = FS.write(stream, HEAP8, ptr, len, offset);
            if (curr < 0)
                return -1;
            ret += curr
        }
        return ret
    },
    varargs: 0,
    get: function(varargs) {
        SYSCALLS.varargs += 4;
        var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];
        return ret
    },
    getStr: function() {
        var ret = UTF8ToString(SYSCALLS.get());
        return ret
    },
    getStreamFromFD: function(fd) {
        if (fd === undefined)
            fd = SYSCALLS.get();
        var stream = FS.getStream(fd);
        if (!stream)
            throw new FS.ErrnoError(8);
        return stream
    },
    get64: function() {
        var low = SYSCALLS.get()
          , high = SYSCALLS.get();
        return low
    },
    getZero: function() {
        SYSCALLS.get()
    }
};
function ___syscall102(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var call = SYSCALLS.get()
          , socketvararg = SYSCALLS.get();
        SYSCALLS.varargs = socketvararg;
        var getSocketFromFD = function() {
            var socket = SOCKFS.getSocket(SYSCALLS.get());
            if (!socket)
                throw new FS.ErrnoError(8);
            return socket
        };
        var getSocketAddress = function(allowNull) {
            var addrp = SYSCALLS.get()
              , addrlen = SYSCALLS.get();
            if (allowNull && addrp === 0)
                return null;
            var info = __read_sockaddr(addrp, addrlen);
            if (info.errno)
                throw new FS.ErrnoError(info.errno);
            info.addr = DNS.lookup_addr(info.addr) || info.addr;
            return info
        };
        switch (call) {
        case 1:
            {
                var domain = SYSCALLS.get()
                  , type = SYSCALLS.get()
                  , protocol = SYSCALLS.get();
                var sock = SOCKFS.createSocket(domain, type, protocol);
                return sock.stream.fd
            }
        case 2:
            {
                var sock = getSocketFromFD()
                  , info = getSocketAddress();
                sock.sock_ops.bind(sock, info.addr, info.port);
                return 0
            }
        case 3:
            {
                var sock = getSocketFromFD()
                  , info = getSocketAddress();
                sock.sock_ops.connect(sock, info.addr, info.port);
                return 0
            }
        case 4:
            {
                var sock = getSocketFromFD()
                  , backlog = SYSCALLS.get();
                sock.sock_ops.listen(sock, backlog);
                return 0
            }
        case 5:
            {
                var sock = getSocketFromFD()
                  , addr = SYSCALLS.get()
                  , addrlen = SYSCALLS.get();
                var newsock = sock.sock_ops.accept(sock);
                if (addr) {
                    var res = __write_sockaddr(addr, newsock.family, DNS.lookup_name(newsock.daddr), newsock.dport)
                }
                return newsock.stream.fd
            }
        case 6:
            {
                var sock = getSocketFromFD()
                  , addr = SYSCALLS.get()
                  , addrlen = SYSCALLS.get();
                var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.saddr || "0.0.0.0"), sock.sport);
                return 0
            }
        case 7:
            {
                var sock = getSocketFromFD()
                  , addr = SYSCALLS.get()
                  , addrlen = SYSCALLS.get();
                if (!sock.daddr) {
                    return -53
                }
                var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(sock.daddr), sock.dport);
                return 0
            }
        case 11:
            {
                var sock = getSocketFromFD()
                  , message = SYSCALLS.get()
                  , length = SYSCALLS.get()
                  , flags = SYSCALLS.get()
                  , dest = getSocketAddress(true);
                if (!dest) {
                    return FS.write(sock.stream, HEAP8, message, length)
                } else {
                    return sock.sock_ops.sendmsg(sock, HEAP8, message, length, dest.addr, dest.port)
                }
            }
        case 12:
            {
                var sock = getSocketFromFD()
                  , buf = SYSCALLS.get()
                  , len = SYSCALLS.get()
                  , flags = SYSCALLS.get()
                  , addr = SYSCALLS.get()
                  , addrlen = SYSCALLS.get();
                var msg = sock.sock_ops.recvmsg(sock, len);
                if (!msg)
                    return 0;
                if (addr) {
                    var res = __write_sockaddr(addr, sock.family, DNS.lookup_name(msg.addr), msg.port)
                }
                HEAPU8.set(msg.buffer, buf);
                return msg.buffer.byteLength
            }
        case 14:
            {
                return -50
            }
        case 15:
            {
                var sock = getSocketFromFD()
                  , level = SYSCALLS.get()
                  , optname = SYSCALLS.get()
                  , optval = SYSCALLS.get()
                  , optlen = SYSCALLS.get();
                if (level === 1) {
                    if (optname === 4) {
                        HEAP32[optval >> 2] = sock.error;
                        HEAP32[optlen >> 2] = 4;
                        sock.error = null;
                        return 0
                    }
                }
                return -50
            }
        case 16:
            {
                var sock = getSocketFromFD()
                  , message = SYSCALLS.get()
                  , flags = SYSCALLS.get();
                var iov = HEAP32[message + 8 >> 2];
                var num = HEAP32[message + 12 >> 2];
                var addr, port;
                var name = HEAP32[message >> 2];
                var namelen = HEAP32[message + 4 >> 2];
                if (name) {
                    var info = __read_sockaddr(name, namelen);
                    if (info.errno)
                        return -info.errno;
                    port = info.port;
                    addr = DNS.lookup_addr(info.addr) || info.addr
                }
                var total = 0;
                for (var i = 0; i < num; i++) {
                    total += HEAP32[iov + (8 * i + 4) >> 2]
                }
                var view = new Uint8Array(total);
                var offset = 0;
                for (var i = 0; i < num; i++) {
                    var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
                    var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
                    for (var j = 0; j < iovlen; j++) {
                        view[offset++] = HEAP8[iovbase + j >> 0]
                    }
                }
                return sock.sock_ops.sendmsg(sock, view, 0, total, addr, port)
            }
        case 17:
            {
                var sock = getSocketFromFD()
                  , message = SYSCALLS.get()
                  , flags = SYSCALLS.get();
                var iov = HEAP32[message + 8 >> 2];
                var num = HEAP32[message + 12 >> 2];
                var total = 0;
                for (var i = 0; i < num; i++) {
                    total += HEAP32[iov + (8 * i + 4) >> 2]
                }
                var msg = sock.sock_ops.recvmsg(sock, total);
                if (!msg)
                    return 0;
                var name = HEAP32[message >> 2];
                if (name) {
                    var res = __write_sockaddr(name, sock.family, DNS.lookup_name(msg.addr), msg.port)
                }
                var bytesRead = 0;
                var bytesRemaining = msg.buffer.byteLength;
                for (var i = 0; bytesRemaining > 0 && i < num; i++) {
                    var iovbase = HEAP32[iov + (8 * i + 0) >> 2];
                    var iovlen = HEAP32[iov + (8 * i + 4) >> 2];
                    if (!iovlen) {
                        continue
                    }
                    var length = Math.min(iovlen, bytesRemaining);
                    var buf = msg.buffer.subarray(bytesRead, bytesRead + length);
                    HEAPU8.set(buf, iovbase + bytesRead);
                    bytesRead += length;
                    bytesRemaining -= length
                }
                return bytesRead
            }
        default:
            {
                return -52
            }
        }
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return -e.errno
    }
}
function ___syscall195(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var path = SYSCALLS.getStr()
          , buf = SYSCALLS.get();
        return SYSCALLS.doStat(FS.stat, path, buf)
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return -e.errno
    }
}
function ___syscall221(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD()
          , cmd = SYSCALLS.get();
        switch (cmd) {
        case 0:
            {
                var arg = SYSCALLS.get();
                if (arg < 0) {
                    return -28
                }
                var newStream;
                newStream = FS.open(stream.path, stream.flags, 0, arg);
                return newStream.fd
            }
        case 1:
        case 2:
            return 0;
        case 3:
            return stream.flags;
        case 4:
            {
                var arg = SYSCALLS.get();
                stream.flags |= arg;
                return 0
            }
        case 12:
            {
                var arg = SYSCALLS.get();
                var offset = 0;
                HEAP16[arg + offset >> 1] = 2;
                return 0
            }
        case 13:
        case 14:
            return 0;
        case 16:
        case 8:
            return -28;
        case 9:
            ___setErrNo(28);
            return -1;
        default:
            {
                return -28
            }
        }
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return -e.errno
    }
}
function ___syscall5(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var pathname = SYSCALLS.getStr()
          , flags = SYSCALLS.get()
          , mode = SYSCALLS.get();
        var stream = FS.open(pathname, flags, mode);
        return stream.fd
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return -e.errno
    }
}
function ___syscall54(which, varargs) {
    SYSCALLS.varargs = varargs;
    try {
        var stream = SYSCALLS.getStreamFromFD()
          , op = SYSCALLS.get();
        switch (op) {
        case 21509:
        case 21505:
            {
                if (!stream.tty)
                    return -59;
                return 0
            }
        case 21510:
        case 21511:
        case 21512:
        case 21506:
        case 21507:
        case 21508:
            {
                if (!stream.tty)
                    return -59;
                return 0
            }
        case 21519:
            {
                if (!stream.tty)
                    return -59;
                var argp = SYSCALLS.get();
                HEAP32[argp >> 2] = 0;
                return 0
            }
        case 21520:
            {
                if (!stream.tty)
                    return -59;
                return -28
            }
        case 21531:
            {
                var argp = SYSCALLS.get();
                return FS.ioctl(stream, op, argp)
            }
        case 21523:
            {
                if (!stream.tty)
                    return -59;
                return 0
            }
        case 21524:
            {
                if (!stream.tty)
                    return -59;
                return 0
            }
        default:
            abort("bad ioctl syscall " + op)
        }
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return -e.errno
    }
}
function ___unlock() {}
function _abort() {
    abort()
}
var AL = {
    QUEUE_INTERVAL: 25,
    QUEUE_LOOKAHEAD: .1,
    DEVICE_NAME: "Emscripten OpenAL",
    CAPTURE_DEVICE_NAME: "Emscripten OpenAL capture",
    ALC_EXTENSIONS: {
        ALC_SOFT_pause_device: true,
        ALC_SOFT_HRTF: true
    },
    AL_EXTENSIONS: {
        AL_EXT_float32: true,
        AL_SOFT_loop_points: true,
        AL_SOFT_source_length: true,
        AL_EXT_source_distance_model: true,
        AL_SOFT_source_spatialize: true
    },
    _alcErr: 0,
    alcErr: 0,
    deviceRefCounts: {},
    alcStringCache: {},
    paused: false,
    stringCache: {},
    contexts: {},
    currentCtx: null,
    buffers: {
        0: {
            id: 0,
            refCount: 0,
            audioBuf: null,
            frequency: 0,
            bytesPerSample: 2,
            channels: 1,
            length: 0
        }
    },
    paramArray: [],
    _nextId: 1,
    newId: function() {
        return AL.freeIds.length > 0 ? AL.freeIds.pop() : AL._nextId++
    },
    freeIds: [],
    scheduleContextAudio: function(ctx) {
        if (Browser.mainLoop.timingMode === 1 && document["visibilityState"] != "visible") {
            return
        }
        for (var i in ctx.sources) {
            AL.scheduleSourceAudio(ctx.sources[i])
        }
    },
    scheduleSourceAudio: function(src, lookahead) {
        if (Browser.mainLoop.timingMode === 1 && document["visibilityState"] != "visible") {
            return
        }
        if (src.state !== 4114) {
            return
        }
        var currentTime = AL.updateSourceTime(src);
        var startTime = src.bufStartTime;
        var startOffset = src.bufOffset;
        var bufCursor = src.bufsProcessed;
        for (var i = 0; i < src.audioQueue.length; i++) {
            var audioSrc = src.audioQueue[i];
            startTime = audioSrc._startTime + audioSrc._duration;
            startOffset = 0;
            bufCursor += audioSrc._skipCount + 1
        }
        if (!lookahead) {
            lookahead = AL.QUEUE_LOOKAHEAD
        }
        var lookaheadTime = currentTime + lookahead;
        var skipCount = 0;
        while (startTime < lookaheadTime) {
            if (bufCursor >= src.bufQueue.length) {
                if (src.looping) {
                    bufCursor %= src.bufQueue.length
                } else {
                    break
                }
            }
            var buf = src.bufQueue[bufCursor % src.bufQueue.length];
            if (buf.length === 0) {
                skipCount++;
                if (skipCount === src.bufQueue.length) {
                    break
                }
            } else {
                var audioSrc = src.context.audioCtx.createBufferSource();
                audioSrc.buffer = buf.audioBuf;
                audioSrc.playbackRate.value = src.playbackRate;
                if (buf.audioBuf._loopStart || buf.audioBuf._loopEnd) {
                    audioSrc.loopStart = buf.audioBuf._loopStart;
                    audioSrc.loopEnd = buf.audioBuf._loopEnd
                }
                var duration = 0;
                if (src.type === 4136 && src.looping) {
                    duration = Number.POSITIVE_INFINITY;
                    audioSrc.loop = true;
                    if (buf.audioBuf._loopStart) {
                        audioSrc.loopStart = buf.audioBuf._loopStart
                    }
                    if (buf.audioBuf._loopEnd) {
                        audioSrc.loopEnd = buf.audioBuf._loopEnd
                    }
                } else {
                    duration = (buf.audioBuf.duration - startOffset) / src.playbackRate
                }
                audioSrc._startOffset = startOffset;
                audioSrc._duration = duration;
                audioSrc._skipCount = skipCount;
                skipCount = 0;
                audioSrc.connect(src.gain);
                if (typeof audioSrc.start !== "undefined") {
                    startTime = Math.max(startTime, src.context.audioCtx.currentTime);
                    audioSrc.start(startTime, startOffset)
                } else if (typeof audioSrc.noteOn !== "undefined") {
                    startTime = Math.max(startTime, src.context.audioCtx.currentTime);
                    audioSrc.noteOn(startTime)
                }
                audioSrc._startTime = startTime;
                src.audioQueue.push(audioSrc);
                startTime += duration
            }
            startOffset = 0;
            bufCursor++
        }
    },
    updateSourceTime: function(src) {
        var currentTime = src.context.audioCtx.currentTime;
        if (src.state !== 4114) {
            return currentTime
        }
        if (!isFinite(src.bufStartTime)) {
            src.bufStartTime = currentTime - src.bufOffset / src.playbackRate;
            src.bufOffset = 0
        }
        var nextStartTime = 0;
        while (src.audioQueue.length) {
            var audioSrc = src.audioQueue[0];
            src.bufsProcessed += audioSrc._skipCount;
            nextStartTime = audioSrc._startTime + audioSrc._duration;
            if (currentTime < nextStartTime) {
                break
            }
            src.audioQueue.shift();
            src.bufStartTime = nextStartTime;
            src.bufOffset = 0;
            src.bufsProcessed++
        }
        if (src.bufsProcessed >= src.bufQueue.length && !src.looping) {
            AL.setSourceState(src, 4116)
        } else if (src.type === 4136 && src.looping) {
            var buf = src.bufQueue[0];
            if (buf.length === 0) {
                src.bufOffset = 0
            } else {
                var delta = (currentTime - src.bufStartTime) * src.playbackRate;
                var loopStart = buf.audioBuf._loopStart || 0;
                var loopEnd = buf.audioBuf._loopEnd || buf.audioBuf.duration;
                if (loopEnd <= loopStart) {
                    loopEnd = buf.audioBuf.duration
                }
                if (delta < loopEnd) {
                    src.bufOffset = delta
                } else {
                    src.bufOffset = loopStart + (delta - loopStart) % (loopEnd - loopStart)
                }
            }
        } else if (src.audioQueue[0]) {
            src.bufOffset = (currentTime - src.audioQueue[0]._startTime) * src.playbackRate
        } else {
            if (src.type !== 4136 && src.looping) {
                var srcDuration = AL.sourceDuration(src) / src.playbackRate;
                if (srcDuration > 0) {
                    src.bufStartTime += Math.floor((currentTime - src.bufStartTime) / srcDuration) * srcDuration
                }
            }
            for (var i = 0; i < src.bufQueue.length; i++) {
                if (src.bufsProcessed >= src.bufQueue.length) {
                    if (src.looping) {
                        src.bufsProcessed %= src.bufQueue.length
                    } else {
                        AL.setSourceState(src, 4116);
                        break
                    }
                }
                var buf = src.bufQueue[src.bufsProcessed];
                if (buf.length > 0) {
                    nextStartTime = src.bufStartTime + buf.audioBuf.duration / src.playbackRate;
                    if (currentTime < nextStartTime) {
                        src.bufOffset = (currentTime - src.bufStartTime) * src.playbackRate;
                        break
                    }
                    src.bufStartTime = nextStartTime
                }
                src.bufOffset = 0;
                src.bufsProcessed++
            }
        }
        return currentTime
    },
    cancelPendingSourceAudio: function(src) {
        AL.updateSourceTime(src);
        for (var i = 1; i < src.audioQueue.length; i++) {
            var audioSrc = src.audioQueue[i];
            audioSrc.stop()
        }
        if (src.audioQueue.length > 1) {
            src.audioQueue.length = 1
        }
    },
    stopSourceAudio: function(src) {
        for (var i = 0; i < src.audioQueue.length; i++) {
            src.audioQueue[i].stop()
        }
        src.audioQueue.length = 0
    },
    setSourceState: function(src, state) {
        if (state === 4114) {
            if (src.state === 4114 || src.state == 4116) {
                src.bufsProcessed = 0;
                src.bufOffset = 0
            } else {}
            AL.stopSourceAudio(src);
            src.state = 4114;
            src.bufStartTime = Number.NEGATIVE_INFINITY;
            AL.scheduleSourceAudio(src)
        } else if (state === 4115) {
            if (src.state === 4114) {
                AL.updateSourceTime(src);
                AL.stopSourceAudio(src);
                src.state = 4115
            }
        } else if (state === 4116) {
            if (src.state !== 4113) {
                src.state = 4116;
                src.bufsProcessed = src.bufQueue.length;
                src.bufStartTime = Number.NEGATIVE_INFINITY;
                src.bufOffset = 0;
                AL.stopSourceAudio(src)
            }
        } else if (state === 4113) {
            if (src.state !== 4113) {
                src.state = 4113;
                src.bufsProcessed = 0;
                src.bufStartTime = Number.NEGATIVE_INFINITY;
                src.bufOffset = 0;
                AL.stopSourceAudio(src)
            }
        }
    },
    initSourcePanner: function(src) {
        if (src.type === 4144) {
            return
        }
        var templateBuf = AL.buffers[0];
        for (var i = 0; i < src.bufQueue.length; i++) {
            if (src.bufQueue[i].id !== 0) {
                templateBuf = src.bufQueue[i];
                break
            }
        }
        if (src.spatialize === 1 || src.spatialize === 2 && templateBuf.channels === 1) {
            if (src.panner) {
                return
            }
            src.panner = src.context.audioCtx.createPanner();
            AL.updateSourceGlobal(src);
            AL.updateSourceSpace(src);
            src.panner.connect(src.context.gain);
            src.gain.disconnect();
            src.gain.connect(src.panner)
        } else {
            if (!src.panner) {
                return
            }
            src.panner.disconnect();
            src.gain.disconnect();
            src.gain.connect(src.context.gain);
            src.panner = null
        }
    },
    updateContextGlobal: function(ctx) {
        for (var i in ctx.sources) {
            AL.updateSourceGlobal(ctx.sources[i])
        }
    },
    updateSourceGlobal: function(src) {
        var panner = src.panner;
        if (!panner) {
            return
        }
        panner.refDistance = src.refDistance;
        panner.maxDistance = src.maxDistance;
        panner.rolloffFactor = src.rolloffFactor;
        panner.panningModel = src.context.hrtf ? "HRTF" : "equalpower";
        var distanceModel = src.context.sourceDistanceModel ? src.distanceModel : src.context.distanceModel;
        switch (distanceModel) {
        case 0:
            panner.distanceModel = "inverse";
            panner.refDistance = 3.40282e38;
            break;
        case 53249:
        case 53250:
            panner.distanceModel = "inverse";
            break;
        case 53251:
        case 53252:
            panner.distanceModel = "linear";
            break;
        case 53253:
        case 53254:
            panner.distanceModel = "exponential";
            break
        }
    },
    updateListenerSpace: function(ctx) {
        var listener = ctx.audioCtx.listener;
        if (listener.positionX) {
            listener.positionX.value = ctx.listener.position[0];
            listener.positionY.value = ctx.listener.position[1];
            listener.positionZ.value = ctx.listener.position[2]
        } else {
            listener.setPosition(ctx.listener.position[0], ctx.listener.position[1], ctx.listener.position[2])
        }
        if (listener.forwardX) {
            listener.forwardX.value = ctx.listener.direction[0];
            listener.forwardY.value = ctx.listener.direction[1];
            listener.forwardZ.value = ctx.listener.direction[2];
            listener.upX.value = ctx.listener.up[0];
            listener.upY.value = ctx.listener.up[1];
            listener.upZ.value = ctx.listener.up[2]
        } else {
            listener.setOrientation(ctx.listener.direction[0], ctx.listener.direction[1], ctx.listener.direction[2], ctx.listener.up[0], ctx.listener.up[1], ctx.listener.up[2])
        }
        for (var i in ctx.sources) {
            AL.updateSourceSpace(ctx.sources[i])
        }
    },
    updateSourceSpace: function(src) {
        if (!src.panner) {
            return
        }
        var panner = src.panner;
        var posX = src.position[0];
        var posY = src.position[1];
        var posZ = src.position[2];
        var dirX = src.direction[0];
        var dirY = src.direction[1];
        var dirZ = src.direction[2];
        var listener = src.context.listener;
        var lPosX = listener.position[0];
        var lPosY = listener.position[1];
        var lPosZ = listener.position[2];
        if (src.relative) {
            var lBackX = -listener.direction[0];
            var lBackY = -listener.direction[1];
            var lBackZ = -listener.direction[2];
            var lUpX = listener.up[0];
            var lUpY = listener.up[1];
            var lUpZ = listener.up[2];
            var inverseMagnitude = function(x, y, z) {
                var length = Math.sqrt(x * x + y * y + z * z);
                if (length < Number.EPSILON) {
                    return 0
                }
                return 1 / length
            };
            var invMag = inverseMagnitude(lBackX, lBackY, lBackZ);
            lBackX *= invMag;
            lBackY *= invMag;
            lBackZ *= invMag;
            invMag = inverseMagnitude(lUpX, lUpY, lUpZ);
            lUpX *= invMag;
            lUpY *= invMag;
            lUpZ *= invMag;
            var lRightX = lUpY * lBackZ - lUpZ * lBackY;
            var lRightY = lUpZ * lBackX - lUpX * lBackZ;
            var lRightZ = lUpX * lBackY - lUpY * lBackX;
            invMag = inverseMagnitude(lRightX, lRightY, lRightZ);
            lRightX *= invMag;
            lRightY *= invMag;
            lRightZ *= invMag;
            lUpX = lBackY * lRightZ - lBackZ * lRightY;
            lUpY = lBackZ * lRightX - lBackX * lRightZ;
            lUpZ = lBackX * lRightY - lBackY * lRightX;
            var oldX = dirX;
            var oldY = dirY;
            var oldZ = dirZ;
            dirX = oldX * lRightX + oldY * lUpX + oldZ * lBackX;
            dirY = oldX * lRightY + oldY * lUpY + oldZ * lBackY;
            dirZ = oldX * lRightZ + oldY * lUpZ + oldZ * lBackZ;
            oldX = posX;
            oldY = posY;
            oldZ = posZ;
            posX = oldX * lRightX + oldY * lUpX + oldZ * lBackX;
            posY = oldX * lRightY + oldY * lUpY + oldZ * lBackY;
            posZ = oldX * lRightZ + oldY * lUpZ + oldZ * lBackZ;
            posX += lPosX;
            posY += lPosY;
            posZ += lPosZ
        }
        {
            panner.setPosition(posX, posY, posZ)
        }
        {
            panner.setOrientation(dirX, dirY, dirZ)
        }
    },
    updateSourceRate: function(src) {
        if (src.state === 4114) {
            AL.cancelPendingSourceAudio(src);
            var audioSrc = src.audioQueue[0];
            if (!audioSrc) {
                return
            }
            var duration;
            if (src.type === 4136 && src.looping) {
                duration = Number.POSITIVE_INFINITY
            } else {
                duration = (audioSrc.buffer.duration - audioSrc._startOffset) / src.playbackRate
            }
            audioSrc._duration = duration;
            audioSrc.playbackRate.value = src.playbackRate;
            AL.scheduleSourceAudio(src)
        }
    },
    sourceDuration: function(src) {
        var length = 0;
        for (var i = 0; i < src.bufQueue.length; i++) {
            var audioBuf = src.bufQueue[i].audioBuf;
            length += audioBuf ? audioBuf.duration : 0
        }
        return length
    },
    sourceTell: function(src) {
        AL.updateSourceTime(src);
        var offset = 0;
        for (var i = 0; i < src.bufsProcessed; i++) {
            offset += src.bufQueue[i].audioBuf.duration
        }
        offset += src.bufOffset;
        return offset
    },
    sourceSeek: function(src, offset) {
        var playing = src.state == 4114;
        if (playing) {
            AL.setSourceState(src, 4113)
        }
        if (src.bufQueue[src.bufsProcessed].audioBuf !== null) {
            src.bufsProcessed = 0;
            while (offset > src.bufQueue[src.bufsProcessed].audioBuf.duration) {
                offset -= src.bufQueue[src.bufsProcessed].audiobuf.duration;
                src.bufsProcessed++
            }
            src.bufOffset = offset
        }
        if (playing) {
            AL.setSourceState(src, 4114)
        }
    },
    getGlobalParam: function(funcname, param) {
        if (!AL.currentCtx) {
            return null
        }
        switch (param) {
        case 49152:
            return AL.currentCtx.dopplerFactor;
        case 49155:
            return AL.currentCtx.speedOfSound;
        case 53248:
            return AL.currentCtx.distanceModel;
        default:
            AL.currentCtx.err = 40962;
            return null
        }
    },
    setGlobalParam: function(funcname, param, value) {
        if (!AL.currentCtx) {
            return
        }
        switch (param) {
        case 49152:
            if (!Number.isFinite(value) || value < 0) {
                AL.currentCtx.err = 40963;
                return
            }
            AL.currentCtx.dopplerFactor = value;
            AL.updateListenerSpace(AL.currentCtx);
            break;
        case 49155:
            if (!Number.isFinite(value) || value <= 0) {
                AL.currentCtx.err = 40963;
                return
            }
            AL.currentCtx.speedOfSound = value;
            AL.updateListenerSpace(AL.currentCtx);
            break;
        case 53248:
            switch (value) {
            case 0:
            case 53249:
            case 53250:
            case 53251:
            case 53252:
            case 53253:
            case 53254:
                AL.currentCtx.distanceModel = value;
                AL.updateContextGlobal(AL.currentCtx);
                break;
            default:
                AL.currentCtx.err = 40963;
                return
            }
            break;
        default:
            AL.currentCtx.err = 40962;
            return
        }
    },
    getListenerParam: function(funcname, param) {
        if (!AL.currentCtx) {
            return null
        }
        switch (param) {
        case 4100:
            return AL.currentCtx.listener.position;
        case 4102:
            return AL.currentCtx.listener.velocity;
        case 4111:
            return AL.currentCtx.listener.direction.concat(AL.currentCtx.listener.up);
        case 4106:
            return AL.currentCtx.gain.gain.value;
        default:
            AL.currentCtx.err = 40962;
            return null
        }
    },
    setListenerParam: function(funcname, param, value) {
        if (!AL.currentCtx) {
            return
        }
        if (value === null) {
            AL.currentCtx.err = 40962;
            return
        }
        var listener = AL.currentCtx.listener;
        switch (param) {
        case 4100:
            if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                AL.currentCtx.err = 40963;
                return
            }
            listener.position[0] = value[0];
            listener.position[1] = value[1];
            listener.position[2] = value[2];
            AL.updateListenerSpace(AL.currentCtx);
            break;
        case 4102:
            if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                AL.currentCtx.err = 40963;
                return
            }
            listener.velocity[0] = value[0];
            listener.velocity[1] = value[1];
            listener.velocity[2] = value[2];
            AL.updateListenerSpace(AL.currentCtx);
            break;
        case 4106:
            if (!Number.isFinite(value) || value < 0) {
                AL.currentCtx.err = 40963;
                return
            }
            AL.currentCtx.gain.gain.value = value;
            break;
        case 4111:
            if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2]) || !Number.isFinite(value[3]) || !Number.isFinite(value[4]) || !Number.isFinite(value[5])) {
                AL.currentCtx.err = 40963;
                return
            }
            listener.direction[0] = value[0];
            listener.direction[1] = value[1];
            listener.direction[2] = value[2];
            listener.up[0] = value[3];
            listener.up[1] = value[4];
            listener.up[2] = value[5];
            AL.updateListenerSpace(AL.currentCtx);
            break;
        default:
            AL.currentCtx.err = 40962;
            return
        }
    },
    getBufferParam: function(funcname, bufferId, param) {
        if (!AL.currentCtx) {
            return
        }
        var buf = AL.buffers[bufferId];
        if (!buf || bufferId === 0) {
            AL.currentCtx.err = 40961;
            return
        }
        switch (param) {
        case 8193:
            return buf.frequency;
        case 8194:
            return buf.bytesPerSample * 8;
        case 8195:
            return buf.channels;
        case 8196:
            return buf.length * buf.bytesPerSample * buf.channels;
        case 8213:
            if (buf.length === 0) {
                return [0, 0]
            } else {
                return [(buf.audioBuf._loopStart || 0) * buf.frequency, (buf.audioBuf._loopEnd || buf.length) * buf.frequency]
            }
        default:
            AL.currentCtx.err = 40962;
            return null
        }
    },
    setBufferParam: function(funcname, bufferId, param, value) {
        if (!AL.currentCtx) {
            return
        }
        var buf = AL.buffers[bufferId];
        if (!buf || bufferId === 0) {
            AL.currentCtx.err = 40961;
            return
        }
        if (value === null) {
            AL.currentCtx.err = 40962;
            return
        }
        switch (param) {
        case 8196:
            if (value !== 0) {
                AL.currentCtx.err = 40963;
                return
            }
            break;
        case 8213:
            if (value[0] < 0 || value[0] > buf.length || value[1] < 0 || value[1] > buf.Length || value[0] >= value[1]) {
                AL.currentCtx.err = 40963;
                return
            }
            if (buf.refCount > 0) {
                AL.currentCtx.err = 40964;
                return
            }
            if (buf.audioBuf) {
                buf.audioBuf._loopStart = value[0] / buf.frequency;
                buf.audioBuf._loopEnd = value[1] / buf.frequency
            }
            break;
        default:
            AL.currentCtx.err = 40962;
            return
        }
    },
    getSourceParam: function(funcname, sourceId, param) {
        if (!AL.currentCtx) {
            return null
        }
        var src = AL.currentCtx.sources[sourceId];
        if (!src) {
            AL.currentCtx.err = 40961;
            return null
        }
        switch (param) {
        case 514:
            return src.relative;
        case 4097:
            return src.coneInnerAngle;
        case 4098:
            return src.coneOuterAngle;
        case 4099:
            return src.pitch;
        case 4100:
            return src.position;
        case 4101:
            return src.direction;
        case 4102:
            return src.velocity;
        case 4103:
            return src.looping;
        case 4105:
            if (src.type === 4136) {
                return src.bufQueue[0].id
            } else {
                return 0
            }
        case 4106:
            return src.gain.gain.value;
        case 4109:
            return src.minGain;
        case 4110:
            return src.maxGain;
        case 4112:
            return src.state;
        case 4117:
            if (src.bufQueue.length === 1 && src.bufQueue[0].id === 0) {
                return 0
            } else {
                return src.bufQueue.length
            }
        case 4118:
            if (src.bufQueue.length === 1 && src.bufQueue[0].id === 0 || src.looping) {
                return 0
            } else {
                return src.bufsProcessed
            }
        case 4128:
            return src.refDistance;
        case 4129:
            return src.rolloffFactor;
        case 4130:
            return src.coneOuterGain;
        case 4131:
            return src.maxDistance;
        case 4132:
            return AL.sourceTell(src);
        case 4133:
            var offset = AL.sourceTell(src);
            if (offset > 0) {
                offset *= src.bufQueue[0].frequency
            }
            return offset;
        case 4134:
            var offset = AL.sourceTell(src);
            if (offset > 0) {
                offset *= src.bufQueue[0].frequency * src.bufQueue[0].bytesPerSample
            }
            return offset;
        case 4135:
            return src.type;
        case 4628:
            return src.spatialize;
        case 8201:
            var length = 0;
            var bytesPerFrame = 0;
            for (var i = 0; i < src.bufQueue.length; i++) {
                length += src.bufQueue[i].length;
                if (src.bufQueue[i].id !== 0) {
                    bytesPerFrame = src.bufQueue[i].bytesPerSample * src.bufQueue[i].channels
                }
            }
            return length * bytesPerFrame;
        case 8202:
            var length = 0;
            for (var i = 0; i < src.bufQueue.length; i++) {
                length += src.bufQueue[i].length
            }
            return length;
        case 8203:
            return AL.sourceDuration(src);
        case 53248:
            return src.distanceModel;
        default:
            AL.currentCtx.err = 40962;
            return null
        }
    },
    setSourceParam: function(funcname, sourceId, param, value) {
        if (!AL.currentCtx) {
            return
        }
        var src = AL.currentCtx.sources[sourceId];
        if (!src) {
            AL.currentCtx.err = 40961;
            return
        }
        if (value === null) {
            AL.currentCtx.err = 40962;
            return
        }
        switch (param) {
        case 514:
            if (value === 1) {
                src.relative = true;
                AL.updateSourceSpace(src)
            } else if (value === 0) {
                src.relative = false;
                AL.updateSourceSpace(src)
            } else {
                AL.currentCtx.err = 40963;
                return
            }
            break;
        case 4097:
            if (!Number.isFinite(value)) {
                AL.currentCtx.err = 40963;
                return
            }
            src.coneInnerAngle = value;
            if (src.panner) {
                src.panner.coneInnerAngle = value % 360
            }
            break;
        case 4098:
            if (!Number.isFinite(value)) {
                AL.currentCtx.err = 40963;
                return
            }
            src.coneOuterAngle = value;
            if (src.panner) {
                src.panner.coneOuterAngle = value % 360
            }
            break;
        case 4099:
            if (!Number.isFinite(value) || value <= 0) {
                AL.currentCtx.err = 40963;
                return
            }
            if (src.pitch === value) {
                break
            }
            src.pitch = value;
            AL.updateSourceRate(src);
            break;
        case 4100:
            if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                AL.currentCtx.err = 40963;
                return
            }
            src.position[0] = value[0];
            src.position[1] = value[1];
            src.position[2] = value[2];
            AL.updateSourceSpace(src);
            break;
        case 4101:
            if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                AL.currentCtx.err = 40963;
                return
            }
            src.direction[0] = value[0];
            src.direction[1] = value[1];
            src.direction[2] = value[2];
            AL.updateSourceSpace(src);
            break;
        case 4102:
            if (!Number.isFinite(value[0]) || !Number.isFinite(value[1]) || !Number.isFinite(value[2])) {
                AL.currentCtx.err = 40963;
                return
            }
            src.velocity[0] = value[0];
            src.velocity[1] = value[1];
            src.velocity[2] = value[2];
            AL.updateSourceSpace(src);
            break;
        case 4103:
            if (value === 1) {
                src.looping = true;
                AL.updateSourceTime(src);
                if (src.type === 4136 && src.audioQueue.length > 0) {
                    var audioSrc = src.audioQueue[0];
                    audioSrc.loop = true;
                    audioSrc._duration = Number.POSITIVE_INFINITY
                }
            } else if (value === 0) {
                src.looping = false;
                var currentTime = AL.updateSourceTime(src);
                if (src.type === 4136 && src.audioQueue.length > 0) {
                    var audioSrc = src.audioQueue[0];
                    audioSrc.loop = false;
                    audioSrc._duration = src.bufQueue[0].audioBuf.duration / src.playbackRate;
                    audioSrc._startTime = currentTime - src.bufOffset / src.playbackRate
                }
            } else {
                AL.currentCtx.err = 40963;
                return
            }
            break;
        case 4105:
            if (src.state === 4114 || src.state === 4115) {
                AL.currentCtx.err = 40964;
                return
            }
            if (value === 0) {
                for (var i in src.bufQueue) {
                    src.bufQueue[i].refCount--
                }
                src.bufQueue.length = 1;
                src.bufQueue[0] = AL.buffers[0];
                src.bufsProcessed = 0;
                src.type = 4144
            } else {
                var buf = AL.buffers[value];
                if (!buf) {
                    AL.currentCtx.err = 40963;
                    return
                }
                for (var i in src.bufQueue) {
                    src.bufQueue[i].refCount--
                }
                src.bufQueue.length = 0;
                buf.refCount++;
                src.bufQueue = [buf];
                src.bufsProcessed = 0;
                src.type = 4136
            }
            AL.initSourcePanner(src);
            AL.scheduleSourceAudio(src);
            break;
        case 4106:
            if (!Number.isFinite(value) || value < 0) {
                AL.currentCtx.err = 40963;
                return
            }
            src.gain.gain.value = value;
            break;
        case 4109:
            if (!Number.isFinite(value) || value < 0 || value > Math.min(src.maxGain, 1)) {
                AL.currentCtx.err = 40963;
                return
            }
            src.minGain = value;
            break;
        case 4110:
            if (!Number.isFinite(value) || value < Math.max(0, src.minGain) || value > 1) {
                AL.currentCtx.err = 40963;
                return
            }
            src.maxGain = value;
            break;
        case 4128:
            if (!Number.isFinite(value) || value < 0) {
                AL.currentCtx.err = 40963;
                return
            }
            src.refDistance = value;
            if (src.panner) {
                src.panner.refDistance = value
            }
            break;
        case 4129:
            if (!Number.isFinite(value) || value < 0) {
                AL.currentCtx.err = 40963;
                return
            }
            src.rolloffFactor = value;
            if (src.panner) {
                src.panner.rolloffFactor = value
            }
            break;
        case 4130:
            if (!Number.isFinite(value) || value < 0 || value > 1) {
                AL.currentCtx.err = 40963;
                return
            }
            src.coneOuterGain = value;
            if (src.panner) {
                src.panner.coneOuterGain = value
            }
            break;
        case 4131:
            if (!Number.isFinite(value) || value < 0) {
                AL.currentCtx.err = 40963;
                return
            }
            src.maxDistance = value;
            if (src.panner) {
                src.panner.maxDistance = value
            }
            break;
        case 4132:
            if (value < 0 || value > AL.sourceDuration(src)) {
                AL.currentCtx.err = 40963;
                return
            }
            AL.sourceSeek(src, value);
            break;
        case 4133:
            var srcLen = AL.sourceDuration(src);
            if (srcLen > 0) {
                var frequency;
                for (var bufId in src.bufQueue) {
                    if (bufId !== 0) {
                        frequency = src.bufQueue[bufId].frequency;
                        break
                    }
                }
                value /= frequency
            }
            if (value < 0 || value > srcLen) {
                AL.currentCtx.err = 40963;
                return
            }
            AL.sourceSeek(src, value);
            break;
        case 4134:
            var srcLen = AL.sourceDuration(src);
            if (srcLen > 0) {
                var bytesPerSec;
                for (var bufId in src.bufQueue) {
                    if (bufId !== 0) {
                        var buf = src.bufQueue[bufId];
                        bytesPerSec = buf.frequency * buf.bytesPerSample * buf.channels;
                        break
                    }
                }
                value /= bytesPerSec
            }
            if (value < 0 || value > srcLen) {
                AL.currentCtx.err = 40963;
                return
            }
            AL.sourceSeek(src, value);
            break;
        case 4628:
            if (value !== 0 && value !== 1 && value !== 2) {
                AL.currentCtx.err = 40963;
                return
            }
            src.spatialize = value;
            AL.initSourcePanner(src);
            break;
        case 8201:
        case 8202:
        case 8203:
            AL.currentCtx.err = 40964;
            break;
        case 53248:
            switch (value) {
            case 0:
            case 53249:
            case 53250:
            case 53251:
            case 53252:
            case 53253:
            case 53254:
                src.distanceModel = value;
                if (AL.currentCtx.sourceDistanceModel) {
                    AL.updateContextGlobal(AL.currentCtx)
                }
                break;
            default:
                AL.currentCtx.err = 40963;
                return
            }
            break;
        default:
            AL.currentCtx.err = 40962;
            return
        }
    },
    captures: {},
    sharedCaptureAudioCtx: null,
    requireValidCaptureDevice: function(deviceId, funcname) {
        if (deviceId === 0) {
            AL.alcErr = 40961;
            return null
        }
        var c = AL.captures[deviceId];
        if (!c) {
            AL.alcErr = 40961;
            return null
        }
        var err = c.mediaStreamError;
        if (err) {
            AL.alcErr = 40961;
            return null
        }
        return c
    }
};
function _alBufferData(bufferId, format, pData, size, freq) {
    if (!AL.currentCtx) {
        return
    }
    var buf = AL.buffers[bufferId];
    if (!buf) {
        AL.currentCtx.err = 40963;
        return
    }
    if (freq <= 0) {
        AL.currentCtx.err = 40963;
        return
    }
    var audioBuf = null;
    try {
        switch (format) {
        case 4352:
            if (size > 0) {
                audioBuf = AL.currentCtx.audioCtx.createBuffer(1, size, freq);
                var channel0 = audioBuf.getChannelData(0);
                for (var i = 0; i < size; ++i) {
                    channel0[i] = HEAPU8[pData++] * .0078125 - 1
                }
            }
            buf.bytesPerSample = 1;
            buf.channels = 1;
            buf.length = size;
            break;
        case 4353:
            if (size > 0) {
                audioBuf = AL.currentCtx.audioCtx.createBuffer(1, size >> 1, freq);
                var channel0 = audioBuf.getChannelData(0);
                pData >>= 1;
                for (var i = 0; i < size >> 1; ++i) {
                    channel0[i] = HEAP16[pData++] * 30517578125e-15
                }
            }
            buf.bytesPerSample = 2;
            buf.channels = 1;
            buf.length = size >> 1;
            break;
        case 4354:
            if (size > 0) {
                audioBuf = AL.currentCtx.audioCtx.createBuffer(2, size >> 1, freq);
                var channel0 = audioBuf.getChannelData(0);
                var channel1 = audioBuf.getChannelData(1);
                for (var i = 0; i < size >> 1; ++i) {
                    channel0[i] = HEAPU8[pData++] * .0078125 - 1;
                    channel1[i] = HEAPU8[pData++] * .0078125 - 1
                }
            }
            buf.bytesPerSample = 1;
            buf.channels = 2;
            buf.length = size >> 1;
            break;
        case 4355:
            if (size > 0) {
                audioBuf = AL.currentCtx.audioCtx.createBuffer(2, size >> 2, freq);
                var channel0 = audioBuf.getChannelData(0);
                var channel1 = audioBuf.getChannelData(1);
                pData >>= 1;
                for (var i = 0; i < size >> 2; ++i) {
                    channel0[i] = HEAP16[pData++] * 30517578125e-15;
                    channel1[i] = HEAP16[pData++] * 30517578125e-15
                }
            }
            buf.bytesPerSample = 2;
            buf.channels = 2;
            buf.length = size >> 2;
            break;
        case 65552:
            if (size > 0) {
                audioBuf = AL.currentCtx.audioCtx.createBuffer(1, size >> 2, freq);
                var channel0 = audioBuf.getChannelData(0);
                pData >>= 2;
                for (var i = 0; i < size >> 2; ++i) {
                    channel0[i] = HEAPF32[pData++]
                }
            }
            buf.bytesPerSample = 4;
            buf.channels = 1;
            buf.length = size >> 2;
            break;
        case 65553:
            if (size > 0) {
                audioBuf = AL.currentCtx.audioCtx.createBuffer(2, size >> 3, freq);
                var channel0 = audioBuf.getChannelData(0);
                var channel1 = audioBuf.getChannelData(1);
                pData >>= 2;
                for (var i = 0; i < size >> 3; ++i) {
                    channel0[i] = HEAPF32[pData++];
                    channel1[i] = HEAPF32[pData++]
                }
            }
            buf.bytesPerSample = 4;
            buf.channels = 2;
            buf.length = size >> 3;
            break;
        default:
            AL.currentCtx.err = 40963;
            return
        }
        buf.frequency = freq;
        buf.audioBuf = audioBuf
    } catch (e) {
        AL.currentCtx.err = 40963;
        return
    }
}
function _alDeleteBuffers(count, pBufferIds) {
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var bufId = HEAP32[pBufferIds + i * 4 >> 2];
        if (bufId === 0) {
            continue
        }
        if (!AL.buffers[bufId]) {
            AL.currentCtx.err = 40961;
            return
        }
        if (AL.buffers[bufId].refCount) {
            AL.currentCtx.err = 40964;
            return
        }
    }
    for (var i = 0; i < count; ++i) {
        var bufId = HEAP32[pBufferIds + i * 4 >> 2];
        if (bufId === 0) {
            continue
        }
        AL.deviceRefCounts[AL.buffers[bufId].deviceId]--;
        delete AL.buffers[bufId];
        AL.freeIds.push(bufId)
    }
}
function _alSourcei(sourceId, param, value) {
    switch (param) {
    case 514:
    case 4097:
    case 4098:
    case 4103:
    case 4105:
    case 4128:
    case 4129:
    case 4131:
    case 4132:
    case 4133:
    case 4134:
    case 4628:
    case 8201:
    case 8202:
    case 53248:
        AL.setSourceParam("alSourcei", sourceId, param, value);
        break;
    default:
        AL.setSourceParam("alSourcei", sourceId, param, null);
        break
    }
}
function _alDeleteSources(count, pSourceIds) {
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var srcId = HEAP32[pSourceIds + i * 4 >> 2];
        if (!AL.currentCtx.sources[srcId]) {
            AL.currentCtx.err = 40961;
            return
        }
    }
    for (var i = 0; i < count; ++i) {
        var srcId = HEAP32[pSourceIds + i * 4 >> 2];
        AL.setSourceState(AL.currentCtx.sources[srcId], 4116);
        _alSourcei(srcId, 4105, 0);
        delete AL.currentCtx.sources[srcId];
        AL.freeIds.push(srcId)
    }
}
function _alDistanceModel(model) {
    AL.setGlobalParam("alDistanceModel", 53248, model)
}
function _alDopplerFactor(value) {
    AL.setGlobalParam("alDopplerFactor", 49152, value)
}
function _alGenBuffers(count, pBufferIds) {
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var buf = {
            deviceId: AL.currentCtx.deviceId,
            id: AL.newId(),
            refCount: 0,
            audioBuf: null,
            frequency: 0,
            bytesPerSample: 2,
            channels: 1,
            length: 0
        };
        AL.deviceRefCounts[buf.deviceId]++;
        AL.buffers[buf.id] = buf;
        HEAP32[pBufferIds + i * 4 >> 2] = buf.id
    }
}
function _alGenSources(count, pSourceIds) {
    if (!AL.currentCtx) {
        return
    }
    for (var i = 0; i < count; ++i) {
        var gain = AL.currentCtx.audioCtx.createGain();
        gain.connect(AL.currentCtx.gain);
        var src = {
            context: AL.currentCtx,
            id: AL.newId(),
            type: 4144,
            state: 4113,
            bufQueue: [AL.buffers[0]],
            audioQueue: [],
            looping: false,
            pitch: 1,
            dopplerShift: 1,
            gain: gain,
            minGain: 0,
            maxGain: 1,
            panner: null,
            bufsProcessed: 0,
            bufStartTime: Number.NEGATIVE_INFINITY,
            bufOffset: 0,
            relative: false,
            refDistance: 1,
            maxDistance: 3.40282e38,
            rolloffFactor: 1,
            position: [0, 0, 0],
            velocity: [0, 0, 0],
            direction: [0, 0, 0],
            coneOuterGain: 0,
            coneInnerAngle: 360,
            coneOuterAngle: 360,
            distanceModel: 53250,
            spatialize: 2,
            get playbackRate() {
                return this.pitch * this.dopplerShift
            }
        };
        AL.currentCtx.sources[src.id] = src;
        HEAP32[pSourceIds + i * 4 >> 2] = src.id
    }
}
function _alGetError() {
    if (!AL.currentCtx) {
        return 40964
    } else {
        var err = AL.currentCtx.err;
        AL.currentCtx.err = 0;
        return err
    }
}
function _alGetSourcef(sourceId, param, pValue) {
    var val = AL.getSourceParam("alGetSourcef", sourceId, param);
    if (val === null) {
        return
    }
    if (!pValue) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
    case 4097:
    case 4098:
    case 4099:
    case 4106:
    case 4109:
    case 4110:
    case 4128:
    case 4129:
    case 4130:
    case 4131:
    case 4132:
    case 4133:
    case 4134:
    case 8203:
        HEAPF32[pValue >> 2] = val;
        break;
    default:
        AL.currentCtx.err = 40962;
        return
    }
}
function _alGetSourcei(sourceId, param, pValue) {
    var val = AL.getSourceParam("alGetSourcei", sourceId, param);
    if (val === null) {
        return
    }
    if (!pValue) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
    case 514:
    case 4097:
    case 4098:
    case 4103:
    case 4105:
    case 4112:
    case 4117:
    case 4118:
    case 4128:
    case 4129:
    case 4131:
    case 4132:
    case 4133:
    case 4134:
    case 4135:
    case 4628:
    case 8201:
    case 8202:
    case 53248:
        HEAP32[pValue >> 2] = val;
        break;
    default:
        AL.currentCtx.err = 40962;
        return
    }
}
function _alListenerf(param, value) {
    switch (param) {
    case 4106:
        AL.setListenerParam("alListenerf", param, value);
        break;
    default:
        AL.setListenerParam("alListenerf", param, null);
        break
    }
}
function _alListenerfv(param, pValues) {
    if (!AL.currentCtx) {
        return
    }
    if (!pValues) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
    case 4100:
    case 4102:
        AL.paramArray[0] = HEAPF32[pValues >> 2];
        AL.paramArray[1] = HEAPF32[pValues + 4 >> 2];
        AL.paramArray[2] = HEAPF32[pValues + 8 >> 2];
        AL.setListenerParam("alListenerfv", param, AL.paramArray);
        break;
    case 4111:
        AL.paramArray[0] = HEAPF32[pValues >> 2];
        AL.paramArray[1] = HEAPF32[pValues + 4 >> 2];
        AL.paramArray[2] = HEAPF32[pValues + 8 >> 2];
        AL.paramArray[3] = HEAPF32[pValues + 12 >> 2];
        AL.paramArray[4] = HEAPF32[pValues + 16 >> 2];
        AL.paramArray[5] = HEAPF32[pValues + 20 >> 2];
        AL.setListenerParam("alListenerfv", param, AL.paramArray);
        break;
    default:
        AL.setListenerParam("alListenerfv", param, null);
        break
    }
}
function _alSource3f(sourceId, param, value0, value1, value2) {
    switch (param) {
    case 4100:
    case 4101:
    case 4102:
        AL.paramArray[0] = value0;
        AL.paramArray[1] = value1;
        AL.paramArray[2] = value2;
        AL.setSourceParam("alSource3f", sourceId, param, AL.paramArray);
        break;
    default:
        AL.setSourceParam("alSource3f", sourceId, param, null);
        break
    }
}
function _alSourcePause(sourceId) {
    if (!AL.currentCtx) {
        return
    }
    var src = AL.currentCtx.sources[sourceId];
    if (!src) {
        AL.currentCtx.err = 40961;
        return
    }
    AL.setSourceState(src, 4115)
}
function _alSourcePlay(sourceId) {
    if (!AL.currentCtx) {
        return
    }
    var src = AL.currentCtx.sources[sourceId];
    if (!src) {
        AL.currentCtx.err = 40961;
        return
    }
    AL.setSourceState(src, 4114)
}
function _alSourceStop(sourceId) {
    if (!AL.currentCtx) {
        return
    }
    var src = AL.currentCtx.sources[sourceId];
    if (!src) {
        AL.currentCtx.err = 40961;
        return
    }
    AL.setSourceState(src, 4116)
}
function _alSourcef(sourceId, param, value) {
    switch (param) {
    case 4097:
    case 4098:
    case 4099:
    case 4106:
    case 4109:
    case 4110:
    case 4128:
    case 4129:
    case 4130:
    case 4131:
    case 4132:
    case 4133:
    case 4134:
    case 8203:
        AL.setSourceParam("alSourcef", sourceId, param, value);
        break;
    default:
        AL.setSourceParam("alSourcef", sourceId, param, null);
        break
    }
}
function _alSourcefv(sourceId, param, pValues) {
    if (!AL.currentCtx) {
        return
    }
    if (!pValues) {
        AL.currentCtx.err = 40963;
        return
    }
    switch (param) {
    case 4097:
    case 4098:
    case 4099:
    case 4106:
    case 4109:
    case 4110:
    case 4128:
    case 4129:
    case 4130:
    case 4131:
    case 4132:
    case 4133:
    case 4134:
    case 8203:
        var val = HEAPF32[pValues >> 2];
        AL.setSourceParam("alSourcefv", sourceId, param, val);
        break;
    case 4100:
    case 4101:
    case 4102:
        AL.paramArray[0] = HEAPF32[pValues >> 2];
        AL.paramArray[1] = HEAPF32[pValues + 4 >> 2];
        AL.paramArray[2] = HEAPF32[pValues + 8 >> 2];
        AL.setSourceParam("alSourcefv", sourceId, param, AL.paramArray);
        break;
    default:
        AL.setSourceParam("alSourcefv", sourceId, param, null);
        break
    }
}
function _alSpeedOfSound(value) {
    AL.setGlobalParam("alSpeedOfSound", 49155, value)
}
function _alcCloseDevice(deviceId) {
    if (!(deviceId in AL.deviceRefCounts) || AL.deviceRefCounts[deviceId] > 0) {
        return 0
    }
    delete AL.deviceRefCounts[deviceId];
    AL.freeIds.push(deviceId);
    return 1
}
function _alcCreateContext(deviceId, pAttrList) {
    if (!(deviceId in AL.deviceRefCounts)) {
        AL.alcErr = 40961;
        return 0
    }
    var options = null;
    var attrs = [];
    var hrtf = null;
    pAttrList >>= 2;
    if (pAttrList) {
        var attr = 0;
        var val = 0;
        while (true) {
            attr = HEAP32[pAttrList++];
            attrs.push(attr);
            if (attr === 0) {
                break
            }
            val = HEAP32[pAttrList++];
            attrs.push(val);
            switch (attr) {
            case 4103:
                if (!options) {
                    options = {}
                }
                options.sampleRate = val;
                break;
            case 4112:
            case 4113:
                break;
            case 6546:
                switch (val) {
                case 0:
                    hrtf = false;
                    break;
                case 1:
                    hrtf = true;
                    break;
                case 2:
                    break;
                default:
                    AL.alcErr = 40964;
                    return 0
                }
                break;
            case 6550:
                if (val !== 0) {
                    AL.alcErr = 40964;
                    return 0
                }
                break;
            default:
                AL.alcErr = 40964;
                return 0
            }
        }
    }
    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ac = null;
    try {
        if (options) {
            ac = new AudioContext(options)
        } else {
            ac = new AudioContext
        }
    } catch (e) {
        if (e.name === "NotSupportedError") {
            AL.alcErr = 40964
        } else {
            AL.alcErr = 40961
        }
        return 0
    }
    if (typeof ac.createGain === "undefined") {
        ac.createGain = ac.createGainNode
    }
    var gain = ac.createGain();
    gain.connect(ac.destination);
    var ctx = {
        deviceId: deviceId,
        id: AL.newId(),
        attrs: attrs,
        audioCtx: ac,
        listener: {
            position: [0, 0, 0],
            velocity: [0, 0, 0],
            direction: [0, 0, 0],
            up: [0, 0, 0]
        },
        sources: [],
        interval: setInterval(function() {
            AL.scheduleContextAudio(ctx)
        }, AL.QUEUE_INTERVAL),
        gain: gain,
        distanceModel: 53250,
        speedOfSound: 343.3,
        dopplerFactor: 1,
        sourceDistanceModel: false,
        hrtf: hrtf || false,
        _err: 0,
        get err() {
            return this._err
        },
        set err(val) {
            if (this._err === 0 || val === 0) {
                this._err = val
            }
        }
    };
    AL.deviceRefCounts[deviceId]++;
    AL.contexts[ctx.id] = ctx;
    if (hrtf !== null) {
        for (var ctxId in AL.contexts) {
            var c = AL.contexts[ctxId];
            if (c.deviceId === deviceId) {
                c.hrtf = hrtf;
                AL.updateContextGlobal(c)
            }
        }
    }
    return ctx.id
}
function _alcDestroyContext(contextId) {
    var ctx = AL.contexts[contextId];
    if (AL.currentCtx === ctx) {
        AL.alcErr = 40962;
        return
    }
    if (AL.contexts[contextId].interval) {
        clearInterval(AL.contexts[contextId].interval)
    }
    AL.deviceRefCounts[ctx.deviceId]--;
    delete AL.contexts[contextId];
    AL.freeIds.push(contextId)
}
function _alcMakeContextCurrent(contextId) {
    if (contextId === 0) {
        AL.currentCtx = null;
        return 0
    } else {
        AL.currentCtx = AL.contexts[contextId];
        return 1
    }
}
function _alcOpenDevice(pDeviceName) {
    if (pDeviceName) {
        var name = UTF8ToString(pDeviceName);
        if (name !== AL.DEVICE_NAME) {
            return 0
        }
    }
    if (typeof AudioContext !== "undefined" || typeof webkitAudioContext !== "undefined") {
        var deviceId = AL.newId();
        AL.deviceRefCounts[deviceId] = 0;
        return deviceId
    } else {
        return 0
    }
}
var ___tm_current = 95242304;
var ___tm_timezone = (stringToUTF8("GMT", 95242352, 4),
95242352);
function _tzset() {
    if (_tzset.called)
        return;
    _tzset.called = true;
    HEAP32[__get_timezone() >> 2] = (new Date).getTimezoneOffset() * 60;
    var currentYear = (new Date).getFullYear();
    var winter = new Date(currentYear,0,1);
    var summer = new Date(currentYear,6,1);
    HEAP32[__get_daylight() >> 2] = Number(winter.getTimezoneOffset() != summer.getTimezoneOffset());
    function extractZone(date) {
        var match = date.toTimeString().match(/\(([A-Za-z ]+)\)$/);
        return match ? match[1] : "GMT"
    }
    var winterName = extractZone(winter);
    var summerName = extractZone(summer);
    var winterNamePtr = allocate(intArrayFromString(winterName), "i8", ALLOC_NORMAL);
    var summerNamePtr = allocate(intArrayFromString(summerName), "i8", ALLOC_NORMAL);
    if (summer.getTimezoneOffset() < winter.getTimezoneOffset()) {
        HEAP32[__get_tzname() >> 2] = winterNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = summerNamePtr
    } else {
        HEAP32[__get_tzname() >> 2] = summerNamePtr;
        HEAP32[__get_tzname() + 4 >> 2] = winterNamePtr
    }
}
function _localtime_r(time, tmPtr) {
    _tzset();
    var date = new Date(HEAP32[time >> 2] * 1e3);
    HEAP32[tmPtr >> 2] = date.getSeconds();
    HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
    HEAP32[tmPtr + 8 >> 2] = date.getHours();
    HEAP32[tmPtr + 12 >> 2] = date.getDate();
    HEAP32[tmPtr + 16 >> 2] = date.getMonth();
    HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
    HEAP32[tmPtr + 24 >> 2] = date.getDay();
    var start = new Date(date.getFullYear(),0,1);
    var yday = (date.getTime() - start.getTime()) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday;
    HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
    var summerOffset = new Date(date.getFullYear(),6,1).getTimezoneOffset();
    var winterOffset = start.getTimezoneOffset();
    var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
    HEAP32[tmPtr + 32 >> 2] = dst;
    var zonePtr = HEAP32[__get_tzname() + (dst ? 4 : 0) >> 2];
    HEAP32[tmPtr + 40 >> 2] = zonePtr;
    return tmPtr
}
function _asctime_r(tmPtr, buf) {
    var date = {
        tm_sec: HEAP32[tmPtr >> 2],
        tm_min: HEAP32[tmPtr + 4 >> 2],
        tm_hour: HEAP32[tmPtr + 8 >> 2],
        tm_mday: HEAP32[tmPtr + 12 >> 2],
        tm_mon: HEAP32[tmPtr + 16 >> 2],
        tm_year: HEAP32[tmPtr + 20 >> 2],
        tm_wday: HEAP32[tmPtr + 24 >> 2]
    };
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var s = days[date.tm_wday] + " " + months[date.tm_mon] + (date.tm_mday < 10 ? "  " : " ") + date.tm_mday + (date.tm_hour < 10 ? " 0" : " ") + date.tm_hour + (date.tm_min < 10 ? ":0" : ":") + date.tm_min + (date.tm_sec < 10 ? ":0" : ":") + date.tm_sec + " " + (1900 + date.tm_year) + "\n";
    stringToUTF8(s, buf, 26);
    return buf
}
function _ctime_r(time, buf) {
    var stack = stackSave();
    var rv = _asctime_r(_localtime_r(time, stackAlloc(44)), buf);
    stackRestore(stack);
    return rv
}
function _ctime(timer) {
    return _ctime_r(timer, ___tm_current)
}
var EGL = {
    errorCode: 12288,
    defaultDisplayInitialized: false,
    currentContext: 0,
    currentReadSurface: 0,
    currentDrawSurface: 0,
    contextAttributes: {
        alpha: false,
        depth: false,
        stencil: false,
        antialias: false
    },
    stringCache: {},
    setErrorCode: function(code) {
        EGL.errorCode = code
    },
    chooseConfig: function(display, attribList, config, config_size, numConfigs) {
        if (display != 62e3) {
            EGL.setErrorCode(12296);
            return 0
        }
        if (attribList) {
            for (; ; ) {
                var param = HEAP32[attribList >> 2];
                if (param == 12321) {
                    var alphaSize = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.alpha = alphaSize > 0
                } else if (param == 12325) {
                    var depthSize = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.depth = depthSize > 0
                } else if (param == 12326) {
                    var stencilSize = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.stencil = stencilSize > 0
                } else if (param == 12337) {
                    var samples = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.antialias = samples > 0
                } else if (param == 12338) {
                    var samples = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.antialias = samples == 1
                } else if (param == 12544) {
                    var requestedPriority = HEAP32[attribList + 4 >> 2];
                    EGL.contextAttributes.lowLatency = requestedPriority != 12547
                } else if (param == 12344) {
                    break
                }
                attribList += 8
            }
        }
        if ((!config || !config_size) && !numConfigs) {
            EGL.setErrorCode(12300);
            return 0
        }
        if (numConfigs) {
            HEAP32[numConfigs >> 2] = 1
        }
        if (config && config_size > 0) {
            HEAP32[config >> 2] = 62002
        }
        EGL.setErrorCode(12288);
        return 1
    }
};
function _eglBindAPI(api) {
    if (api == 12448) {
        EGL.setErrorCode(12288);
        return 1
    } else {
        EGL.setErrorCode(12300);
        return 0
    }
}
function _eglChooseConfig(display, attrib_list, configs, config_size, numConfigs) {
    return EGL.chooseConfig(display, attrib_list, configs, config_size, numConfigs)
}
var GL = {
    counter: 1,
    lastError: 0,
    buffers: [],
    mappedBuffers: {},
    programs: [],
    framebuffers: [],
    renderbuffers: [],
    textures: [],
    uniforms: [],
    shaders: [],
    vaos: [],
    contexts: {},
    currentContext: null,
    offscreenCanvases: {},
    timerQueriesEXT: [],
    programInfos: {},
    stringCache: {},
    unpackAlignment: 4,
    init: function() {
        GL.miniTempBuffer = new Float32Array(GL.MINI_TEMP_BUFFER_SIZE);
        for (var i = 0; i < GL.MINI_TEMP_BUFFER_SIZE; i++) {
            GL.miniTempBufferViews[i] = GL.miniTempBuffer.subarray(0, i + 1)
        }
    },
    recordError: function recordError(errorCode) {
        if (!GL.lastError) {
            GL.lastError = errorCode
        }
    },
    getNewId: function(table) {
        var ret = GL.counter++;
        for (var i = table.length; i < ret; i++) {
            table[i] = null
        }
        return ret
    },
    MINI_TEMP_BUFFER_SIZE: 256,
    miniTempBuffer: null,
    miniTempBufferViews: [0],
    getSource: function(shader, count, string, length) {
        var source = "";
        for (var i = 0; i < count; ++i) {
            var len = length ? HEAP32[length + i * 4 >> 2] : -1;
            source += UTF8ToString(HEAP32[string + i * 4 >> 2], len < 0 ? undefined : len)
        }
        return source
    },
    createContext: function(canvas, webGLContextAttributes) {
        var ctx = canvas.getContext("webgl", webGLContextAttributes) || canvas.getContext("experimental-webgl", webGLContextAttributes);
        if (!ctx)
            return 0;
        var handle = GL.registerContext(ctx, webGLContextAttributes);
        return handle
    },
    registerContext: function(ctx, webGLContextAttributes) {
        var handle = _malloc(8);
        var context = {
            handle: handle,
            attributes: webGLContextAttributes,
            version: webGLContextAttributes.majorVersion,
            GLctx: ctx
        };
        if (ctx.canvas)
            ctx.canvas.GLctxObject = context;
        GL.contexts[handle] = context;
        if (typeof webGLContextAttributes.enableExtensionsByDefault === "undefined" || webGLContextAttributes.enableExtensionsByDefault) {
            GL.initExtensions(context)
        }
        return handle
    },
    makeContextCurrent: function(contextHandle) {
        GL.currentContext = GL.contexts[contextHandle];
        Module.ctx = GLctx = GL.currentContext && GL.currentContext.GLctx;
        return !(contextHandle && !GLctx)
    },
    getContext: function(contextHandle) {
        return GL.contexts[contextHandle]
    },
    deleteContext: function(contextHandle) {
        if (GL.currentContext === GL.contexts[contextHandle])
            GL.currentContext = null;
        if (typeof JSEvents === "object")
            JSEvents.removeAllHandlersOnTarget(GL.contexts[contextHandle].GLctx.canvas);
        if (GL.contexts[contextHandle] && GL.contexts[contextHandle].GLctx.canvas)
            GL.contexts[contextHandle].GLctx.canvas.GLctxObject = undefined;
        _free(GL.contexts[contextHandle]);
        GL.contexts[contextHandle] = null
    },
    acquireInstancedArraysExtension: function(ctx) {
        var ext = ctx.getExtension("ANGLE_instanced_arrays");
        if (ext) {
            ctx["vertexAttribDivisor"] = function(index, divisor) {
                ext["vertexAttribDivisorANGLE"](index, divisor)
            }
            ;
            ctx["drawArraysInstanced"] = function(mode, first, count, primcount) {
                ext["drawArraysInstancedANGLE"](mode, first, count, primcount)
            }
            ;
            ctx["drawElementsInstanced"] = function(mode, count, type, indices, primcount) {
                ext["drawElementsInstancedANGLE"](mode, count, type, indices, primcount)
            }
        }
    },
    acquireVertexArrayObjectExtension: function(ctx) {
        var ext = ctx.getExtension("OES_vertex_array_object");
        if (ext) {
            ctx["createVertexArray"] = function() {
                return ext["createVertexArrayOES"]()
            }
            ;
            ctx["deleteVertexArray"] = function(vao) {
                ext["deleteVertexArrayOES"](vao)
            }
            ;
            ctx["bindVertexArray"] = function(vao) {
                ext["bindVertexArrayOES"](vao)
            }
            ;
            ctx["isVertexArray"] = function(vao) {
                return ext["isVertexArrayOES"](vao)
            }
        }
    },
    acquireDrawBuffersExtension: function(ctx) {
        var ext = ctx.getExtension("WEBGL_draw_buffers");
        if (ext) {
            ctx["drawBuffers"] = function(n, bufs) {
                ext["drawBuffersWEBGL"](n, bufs)
            }
        }
    },
    initExtensions: function(context) {
        if (!context)
            context = GL.currentContext;
        if (context.initExtensionsDone)
            return;
        context.initExtensionsDone = true;
        var GLctx = context.GLctx;
        if (context.version < 2) {
            GL.acquireInstancedArraysExtension(GLctx);
            GL.acquireVertexArrayObjectExtension(GLctx);
            GL.acquireDrawBuffersExtension(GLctx)
        }
        GLctx.disjointTimerQueryExt = GLctx.getExtension("EXT_disjoint_timer_query");
        var automaticallyEnabledExtensions = ["OES_texture_float", "OES_texture_half_float", "OES_standard_derivatives", "OES_vertex_array_object", "WEBGL_compressed_texture_s3tc", "WEBGL_depth_texture", "OES_element_index_uint", "EXT_texture_filter_anisotropic", "EXT_frag_depth", "WEBGL_draw_buffers", "ANGLE_instanced_arrays", "OES_texture_float_linear", "OES_texture_half_float_linear", "EXT_blend_minmax", "EXT_shader_texture_lod", "WEBGL_compressed_texture_pvrtc", "EXT_color_buffer_half_float", "WEBGL_color_buffer_float", "EXT_sRGB", "WEBGL_compressed_texture_etc1", "EXT_disjoint_timer_query", "WEBGL_compressed_texture_etc", "WEBGL_compressed_texture_astc", "EXT_color_buffer_float", "WEBGL_compressed_texture_s3tc_srgb", "EXT_disjoint_timer_query_webgl2", "WEBKIT_WEBGL_compressed_texture_pvrtc"];
        var exts = GLctx.getSupportedExtensions() || [];
        exts.forEach(function(ext) {
            if (automaticallyEnabledExtensions.indexOf(ext) != -1) {
                GLctx.getExtension(ext)
            }
        })
    },
    populateUniformTable: function(program) {
        var p = GL.programs[program];
        var ptable = GL.programInfos[program] = {
            uniforms: {},
            maxUniformLength: 0,
            maxAttributeLength: -1,
            maxUniformBlockNameLength: -1
        };
        var utable = ptable.uniforms;
        var numUniforms = GLctx.getProgramParameter(p, 35718);
        for (var i = 0; i < numUniforms; ++i) {
            var u = GLctx.getActiveUniform(p, i);
            var name = u.name;
            ptable.maxUniformLength = Math.max(ptable.maxUniformLength, name.length + 1);
            if (name.slice(-1) == "]") {
                name = name.slice(0, name.lastIndexOf("["))
            }
            var loc = GLctx.getUniformLocation(p, name);
            if (loc) {
                var id = GL.getNewId(GL.uniforms);
                utable[name] = [u.size, id];
                GL.uniforms[id] = loc;
                for (var j = 1; j < u.size; ++j) {
                    var n = name + "[" + j + "]";
                    loc = GLctx.getUniformLocation(p, n);
                    id = GL.getNewId(GL.uniforms);
                    GL.uniforms[id] = loc
                }
            }
        }
    }
};
function _eglCreateContext(display, config, hmm, contextAttribs) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    var glesContextVersion = 1;
    for (; ; ) {
        var param = HEAP32[contextAttribs >> 2];
        if (param == 12440) {
            glesContextVersion = HEAP32[contextAttribs + 4 >> 2]
        } else if (param == 12344) {
            break
        } else {
            EGL.setErrorCode(12292);
            return 0
        }
        contextAttribs += 8
    }
    if (glesContextVersion != 2) {
        EGL.setErrorCode(12293);
        return 0
    }
    EGL.contextAttributes.majorVersion = glesContextVersion - 1;
    EGL.contextAttributes.minorVersion = 0;
    EGL.context = GL.createContext(Module["canvas"], EGL.contextAttributes);
    if (EGL.context != 0) {
        EGL.setErrorCode(12288);
        GL.makeContextCurrent(EGL.context);
        Module.useWebGL = true;
        Browser.moduleContextCreatedCallbacks.forEach(function(callback) {
            callback()
        });
        GL.makeContextCurrent(null);
        return 62004
    } else {
        EGL.setErrorCode(12297);
        return 0
    }
}
function _eglCreateWindowSurface(display, config, win, attrib_list) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0
    }
    EGL.setErrorCode(12288);
    return 62006
}
function _eglDestroyContext(display, context) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (context != 62004) {
        EGL.setErrorCode(12294);
        return 0
    }
    GL.deleteContext(EGL.context);
    EGL.setErrorCode(12288);
    if (EGL.currentContext == context) {
        EGL.currentContext = 0
    }
    return 1
}
function _eglDestroySurface(display, surface) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (surface != 62006) {
        EGL.setErrorCode(12301);
        return 1
    }
    if (EGL.currentReadSurface == surface) {
        EGL.currentReadSurface = 0
    }
    if (EGL.currentDrawSurface == surface) {
        EGL.currentDrawSurface = 0
    }
    EGL.setErrorCode(12288);
    return 1
}
function _eglGetConfigAttrib(display, config, attribute, value) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (config != 62002) {
        EGL.setErrorCode(12293);
        return 0
    }
    if (!value) {
        EGL.setErrorCode(12300);
        return 0
    }
    EGL.setErrorCode(12288);
    switch (attribute) {
    case 12320:
        HEAP32[value >> 2] = EGL.contextAttributes.alpha ? 32 : 24;
        return 1;
    case 12321:
        HEAP32[value >> 2] = EGL.contextAttributes.alpha ? 8 : 0;
        return 1;
    case 12322:
        HEAP32[value >> 2] = 8;
        return 1;
    case 12323:
        HEAP32[value >> 2] = 8;
        return 1;
    case 12324:
        HEAP32[value >> 2] = 8;
        return 1;
    case 12325:
        HEAP32[value >> 2] = EGL.contextAttributes.depth ? 24 : 0;
        return 1;
    case 12326:
        HEAP32[value >> 2] = EGL.contextAttributes.stencil ? 8 : 0;
        return 1;
    case 12327:
        HEAP32[value >> 2] = 12344;
        return 1;
    case 12328:
        HEAP32[value >> 2] = 62002;
        return 1;
    case 12329:
        HEAP32[value >> 2] = 0;
        return 1;
    case 12330:
        HEAP32[value >> 2] = 4096;
        return 1;
    case 12331:
        HEAP32[value >> 2] = 16777216;
        return 1;
    case 12332:
        HEAP32[value >> 2] = 4096;
        return 1;
    case 12333:
        HEAP32[value >> 2] = 0;
        return 1;
    case 12334:
        HEAP32[value >> 2] = 0;
        return 1;
    case 12335:
        HEAP32[value >> 2] = 12344;
        return 1;
    case 12337:
        HEAP32[value >> 2] = EGL.contextAttributes.antialias ? 4 : 0;
        return 1;
    case 12338:
        HEAP32[value >> 2] = EGL.contextAttributes.antialias ? 1 : 0;
        return 1;
    case 12339:
        HEAP32[value >> 2] = 4;
        return 1;
    case 12340:
        HEAP32[value >> 2] = 12344;
        return 1;
    case 12341:
    case 12342:
    case 12343:
        HEAP32[value >> 2] = -1;
        return 1;
    case 12345:
    case 12346:
        HEAP32[value >> 2] = 0;
        return 1;
    case 12347:
        HEAP32[value >> 2] = 0;
        return 1;
    case 12348:
        HEAP32[value >> 2] = 1;
        return 1;
    case 12349:
    case 12350:
        HEAP32[value >> 2] = 0;
        return 1;
    case 12351:
        HEAP32[value >> 2] = 12430;
        return 1;
    case 12352:
        HEAP32[value >> 2] = 4;
        return 1;
    case 12354:
        HEAP32[value >> 2] = 0;
        return 1;
    default:
        EGL.setErrorCode(12292);
        return 0
    }
}
function _eglGetDisplay(nativeDisplayType) {
    EGL.setErrorCode(12288);
    return 62e3
}
function _eglGetError() {
    return EGL.errorCode
}
function _eglGetProcAddress(name_) {
    return _emscripten_GetProcAddress(name_)
}
function _eglInitialize(display, majorVersion, minorVersion) {
    if (display == 62e3) {
        if (majorVersion) {
            HEAP32[majorVersion >> 2] = 1
        }
        if (minorVersion) {
            HEAP32[minorVersion >> 2] = 4
        }
        EGL.defaultDisplayInitialized = true;
        EGL.setErrorCode(12288);
        return 1
    } else {
        EGL.setErrorCode(12296);
        return 0
    }
}
function _eglMakeCurrent(display, draw, read, context) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (context != 0 && context != 62004) {
        EGL.setErrorCode(12294);
        return 0
    }
    if (read != 0 && read != 62006 || draw != 0 && draw != 62006) {
        EGL.setErrorCode(12301);
        return 0
    }
    GL.makeContextCurrent(context ? EGL.context : null);
    EGL.currentContext = context;
    EGL.currentDrawSurface = draw;
    EGL.currentReadSurface = read;
    EGL.setErrorCode(12288);
    return 1
}
function _eglQueryString(display, name) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    EGL.setErrorCode(12288);
    if (EGL.stringCache[name])
        return EGL.stringCache[name];
    var ret;
    switch (name) {
    case 12371:
        ret = allocate(intArrayFromString("Emscripten"), "i8", ALLOC_NORMAL);
        break;
    case 12372:
        ret = allocate(intArrayFromString("1.4 Emscripten EGL"), "i8", ALLOC_NORMAL);
        break;
    case 12373:
        ret = allocate(intArrayFromString(""), "i8", ALLOC_NORMAL);
        break;
    case 12429:
        ret = allocate(intArrayFromString("OpenGL_ES"), "i8", ALLOC_NORMAL);
        break;
    default:
        EGL.setErrorCode(12300);
        return 0
    }
    EGL.stringCache[name] = ret;
    return ret
}
function _eglSwapBuffers() {
    if (!EGL.defaultDisplayInitialized) {
        EGL.setErrorCode(12289)
    } else if (!Module.ctx) {
        EGL.setErrorCode(12290)
    } else if (Module.ctx.isContextLost()) {
        EGL.setErrorCode(12302)
    } else {
        EGL.setErrorCode(12288);
        return 1
    }
    return 0
}
function _eglSwapInterval(display, interval) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    if (interval == 0)
        _emscripten_set_main_loop_timing(0, 0);
    else
        _emscripten_set_main_loop_timing(1, interval);
    EGL.setErrorCode(12288);
    return 1
}
function _eglTerminate(display) {
    if (display != 62e3) {
        EGL.setErrorCode(12296);
        return 0
    }
    EGL.currentContext = 0;
    EGL.currentReadSurface = 0;
    EGL.currentDrawSurface = 0;
    EGL.defaultDisplayInitialized = false;
    EGL.setErrorCode(12288);
    return 1
}
function _eglWaitClient() {
    EGL.setErrorCode(12288);
    return 1
}
function _eglWaitGL() {
    return _eglWaitClient.apply(null, arguments)
}
function _eglWaitNative(nativeEngineId) {
    EGL.setErrorCode(12288);
    return 1
}
var JSEvents = {
    keyEvent: 0,
    mouseEvent: 0,
    wheelEvent: 0,
    uiEvent: 0,
    focusEvent: 0,
    deviceOrientationEvent: 0,
    deviceMotionEvent: 0,
    fullscreenChangeEvent: 0,
    pointerlockChangeEvent: 0,
    visibilityChangeEvent: 0,
    touchEvent: 0,
    previousFullscreenElement: null,
    previousScreenX: null,
    previousScreenY: null,
    removeEventListenersRegistered: false,
    removeAllEventListeners: function() {
        for (var i = JSEvents.eventHandlers.length - 1; i >= 0; --i) {
            JSEvents._removeHandler(i)
        }
        JSEvents.eventHandlers = [];
        JSEvents.deferredCalls = []
    },
    registerRemoveEventListeners: function() {
        if (!JSEvents.removeEventListenersRegistered) {
            __ATEXIT__.push(JSEvents.removeAllEventListeners);
            JSEvents.removeEventListenersRegistered = true
        }
    },
    deferredCalls: [],
    deferCall: function(targetFunction, precedence, argsList) {
        function arraysHaveEqualContent(arrA, arrB) {
            if (arrA.length != arrB.length)
                return false;
            for (var i in arrA) {
                if (arrA[i] != arrB[i])
                    return false
            }
            return true
        }
        for (var i in JSEvents.deferredCalls) {
            var call = JSEvents.deferredCalls[i];
            if (call.targetFunction == targetFunction && arraysHaveEqualContent(call.argsList, argsList)) {
                return
            }
        }
        JSEvents.deferredCalls.push({
            targetFunction: targetFunction,
            precedence: precedence,
            argsList: argsList
        });
        JSEvents.deferredCalls.sort(function(x, y) {
            return x.precedence < y.precedence
        })
    },
    removeDeferredCalls: function(targetFunction) {
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            if (JSEvents.deferredCalls[i].targetFunction == targetFunction) {
                JSEvents.deferredCalls.splice(i, 1);
                --i
            }
        }
    },
    canPerformEventHandlerRequests: function() {
        return JSEvents.inEventHandler && JSEvents.currentEventHandler.allowsDeferredCalls
    },
    runDeferredCalls: function() {
        if (!JSEvents.canPerformEventHandlerRequests()) {
            return
        }
        for (var i = 0; i < JSEvents.deferredCalls.length; ++i) {
            var call = JSEvents.deferredCalls[i];
            JSEvents.deferredCalls.splice(i, 1);
            --i;
            call.targetFunction.apply(this, call.argsList)
        }
    },
    inEventHandler: 0,
    currentEventHandler: null,
    eventHandlers: [],
    isInternetExplorer: function() {
        return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0
    },
    removeAllHandlersOnTarget: function(target, eventTypeString) {
        for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
            if (JSEvents.eventHandlers[i].target == target && (!eventTypeString || eventTypeString == JSEvents.eventHandlers[i].eventTypeString)) {
                JSEvents._removeHandler(i--)
            }
        }
    },
    _removeHandler: function(i) {
        var h = JSEvents.eventHandlers[i];
        h.target.removeEventListener(h.eventTypeString, h.eventListenerFunc, h.useCapture);
        JSEvents.eventHandlers.splice(i, 1)
    },
    registerOrRemoveHandler: function(eventHandler) {
        var jsEventHandler = function jsEventHandler(event) {
            ++JSEvents.inEventHandler;
            JSEvents.currentEventHandler = eventHandler;
            JSEvents.runDeferredCalls();
            eventHandler.handlerFunc(event);
            JSEvents.runDeferredCalls();
            --JSEvents.inEventHandler
        };
        if (eventHandler.callbackfunc) {
            eventHandler.eventListenerFunc = jsEventHandler;
            eventHandler.target.addEventListener(eventHandler.eventTypeString, jsEventHandler, eventHandler.useCapture);
            JSEvents.eventHandlers.push(eventHandler);
            JSEvents.registerRemoveEventListeners()
        } else {
            for (var i = 0; i < JSEvents.eventHandlers.length; ++i) {
                if (JSEvents.eventHandlers[i].target == eventHandler.target && JSEvents.eventHandlers[i].eventTypeString == eventHandler.eventTypeString) {
                    JSEvents._removeHandler(i--)
                }
            }
        }
    },
    getBoundingClientRectOrZeros: function(target) {
        return target.getBoundingClientRect ? target.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    },
    pageScrollPos: function() {
        if (pageXOffset > 0 || pageYOffset > 0) {
            return [pageXOffset, pageYOffset]
        }
        if (typeof document.documentElement.scrollLeft !== "undefined" || typeof document.documentElement.scrollTop !== "undefined") {
            return [document.documentElement.scrollLeft, document.documentElement.scrollTop]
        }
        return [document.body.scrollLeft | 0, document.body.scrollTop | 0]
    },
    getNodeNameForTarget: function(target) {
        if (!target)
            return "";
        if (target == window)
            return "#window";
        if (target == screen)
            return "#screen";
        return target && target.nodeName ? target.nodeName : ""
    },
    tick: function() {
        if (window["performance"] && window["performance"]["now"])
            return window["performance"]["now"]();
        else
            return Date.now()
    },
    fullscreenEnabled: function() {
        return document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled
    }
};
var __currentFullscreenStrategy = {};
var __specialEventTargets = [0, typeof document !== "undefined" ? document : 0, typeof window !== "undefined" ? window : 0];
function __findEventTarget(target) {
    try {
        if (!target)
            return window;
        if (typeof target === "number")
            target = __specialEventTargets[target] || UTF8ToString(target);
        if (target === "#window")
            return window;
        else if (target === "#document")
            return document;
        else if (target === "#screen")
            return screen;
        else if (target === "#canvas")
            return Module["canvas"];
        return typeof target === "string" ? document.getElementById(target) : target
    } catch (e) {
        return null
    }
}
function __findCanvasEventTarget(target) {
    if (typeof target === "number")
        target = UTF8ToString(target);
    if (!target || target === "#canvas") {
        if (typeof GL !== "undefined" && GL.offscreenCanvases["canvas"])
            return GL.offscreenCanvases["canvas"];
        return Module["canvas"]
    }
    if (typeof GL !== "undefined" && GL.offscreenCanvases[target])
        return GL.offscreenCanvases[target];
    return __findEventTarget(target)
}
function _emscripten_get_canvas_element_size(target, width, height) {
    var canvas = __findCanvasEventTarget(target);
    if (!canvas)
        return -4;
    HEAP32[width >> 2] = canvas.width;
    HEAP32[height >> 2] = canvas.height
}
function __get_canvas_element_size(target) {
    var stackTop = stackSave();
    var w = stackAlloc(8);
    var h = w + 4;
    var targetInt = stackAlloc(target.id.length + 1);
    stringToUTF8(target.id, targetInt, target.id.length + 1);
    var ret = _emscripten_get_canvas_element_size(targetInt, w, h);
    var size = [HEAP32[w >> 2], HEAP32[h >> 2]];
    stackRestore(stackTop);
    return size
}
function _emscripten_set_canvas_element_size(target, width, height) {
    var canvas = __findCanvasEventTarget(target);
    if (!canvas)
        return -4;
    canvas.width = width;
    canvas.height = height;
    return 0
}
function __set_canvas_element_size(target, width, height) {
    if (!target.controlTransferredOffscreen) {
        target.width = width;
        target.height = height
    } else {
        var stackTop = stackSave();
        var targetInt = stackAlloc(target.id.length + 1);
        stringToUTF8(target.id, targetInt, target.id.length + 1);
        _emscripten_set_canvas_element_size(targetInt, width, height);
        stackRestore(stackTop)
    }
}
function __registerRestoreOldStyle(canvas) {
    var canvasSize = __get_canvas_element_size(canvas);
    var oldWidth = canvasSize[0];
    var oldHeight = canvasSize[1];
    var oldCssWidth = canvas.style.width;
    var oldCssHeight = canvas.style.height;
    var oldBackgroundColor = canvas.style.backgroundColor;
    var oldDocumentBackgroundColor = document.body.style.backgroundColor;
    var oldPaddingLeft = canvas.style.paddingLeft;
    var oldPaddingRight = canvas.style.paddingRight;
    var oldPaddingTop = canvas.style.paddingTop;
    var oldPaddingBottom = canvas.style.paddingBottom;
    var oldMarginLeft = canvas.style.marginLeft;
    var oldMarginRight = canvas.style.marginRight;
    var oldMarginTop = canvas.style.marginTop;
    var oldMarginBottom = canvas.style.marginBottom;
    var oldDocumentBodyMargin = document.body.style.margin;
    var oldDocumentOverflow = document.documentElement.style.overflow;
    var oldDocumentScroll = document.body.scroll;
    var oldImageRendering = canvas.style.imageRendering;
    function restoreOldStyle() {
        var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        if (!fullscreenElement) {
            document.removeEventListener("fullscreenchange", restoreOldStyle);
            document.removeEventListener("mozfullscreenchange", restoreOldStyle);
            document.removeEventListener("webkitfullscreenchange", restoreOldStyle);
            document.removeEventListener("MSFullscreenChange", restoreOldStyle);
            __set_canvas_element_size(canvas, oldWidth, oldHeight);
            canvas.style.width = oldCssWidth;
            canvas.style.height = oldCssHeight;
            canvas.style.backgroundColor = oldBackgroundColor;
            if (!oldDocumentBackgroundColor)
                document.body.style.backgroundColor = "white";
            document.body.style.backgroundColor = oldDocumentBackgroundColor;
            canvas.style.paddingLeft = oldPaddingLeft;
            canvas.style.paddingRight = oldPaddingRight;
            canvas.style.paddingTop = oldPaddingTop;
            canvas.style.paddingBottom = oldPaddingBottom;
            canvas.style.marginLeft = oldMarginLeft;
            canvas.style.marginRight = oldMarginRight;
            canvas.style.marginTop = oldMarginTop;
            canvas.style.marginBottom = oldMarginBottom;
            document.body.style.margin = oldDocumentBodyMargin;
            document.documentElement.style.overflow = oldDocumentOverflow;
            document.body.scroll = oldDocumentScroll;
            canvas.style.imageRendering = oldImageRendering;
            if (canvas.GLctxObject)
                canvas.GLctxObject.GLctx.viewport(0, 0, oldWidth, oldHeight);
            if (__currentFullscreenStrategy.canvasResizedCallback) {
                dynCall_iiii(__currentFullscreenStrategy.canvasResizedCallback, 37, 0, __currentFullscreenStrategy.canvasResizedCallbackUserData)
            }
        }
    }
    document.addEventListener("fullscreenchange", restoreOldStyle);
    document.addEventListener("mozfullscreenchange", restoreOldStyle);
    document.addEventListener("webkitfullscreenchange", restoreOldStyle);
    document.addEventListener("MSFullscreenChange", restoreOldStyle);
    return restoreOldStyle
}
function __setLetterbox(element, topBottom, leftRight) {
    if (JSEvents.isInternetExplorer()) {
        element.style.marginLeft = element.style.marginRight = leftRight + "px";
        element.style.marginTop = element.style.marginBottom = topBottom + "px"
    } else {
        element.style.paddingLeft = element.style.paddingRight = leftRight + "px";
        element.style.paddingTop = element.style.paddingBottom = topBottom + "px"
    }
}
function _JSEvents_resizeCanvasForFullscreen(target, strategy) {
    var restoreOldStyle = __registerRestoreOldStyle(target);
    var cssWidth = strategy.softFullscreen ? innerWidth : screen.width;
    var cssHeight = strategy.softFullscreen ? innerHeight : screen.height;
    var rect = target.getBoundingClientRect();
    var windowedCssWidth = rect.right - rect.left;
    var windowedCssHeight = rect.bottom - rect.top;
    var canvasSize = __get_canvas_element_size(target);
    var windowedRttWidth = canvasSize[0];
    var windowedRttHeight = canvasSize[1];
    if (strategy.scaleMode == 3) {
        __setLetterbox(target, (cssHeight - windowedCssHeight) / 2, (cssWidth - windowedCssWidth) / 2);
        cssWidth = windowedCssWidth;
        cssHeight = windowedCssHeight
    } else if (strategy.scaleMode == 2) {
        if (cssWidth * windowedRttHeight < windowedRttWidth * cssHeight) {
            var desiredCssHeight = windowedRttHeight * cssWidth / windowedRttWidth;
            __setLetterbox(target, (cssHeight - desiredCssHeight) / 2, 0);
            cssHeight = desiredCssHeight
        } else {
            var desiredCssWidth = windowedRttWidth * cssHeight / windowedRttHeight;
            __setLetterbox(target, 0, (cssWidth - desiredCssWidth) / 2);
            cssWidth = desiredCssWidth
        }
    }
    if (!target.style.backgroundColor)
        target.style.backgroundColor = "black";
    if (!document.body.style.backgroundColor)
        document.body.style.backgroundColor = "black";
    target.style.width = cssWidth + "px";
    target.style.height = cssHeight + "px";
    if (strategy.filteringMode == 1) {
        target.style.imageRendering = "optimizeSpeed";
        target.style.imageRendering = "-moz-crisp-edges";
        target.style.imageRendering = "-o-crisp-edges";
        target.style.imageRendering = "-webkit-optimize-contrast";
        target.style.imageRendering = "optimize-contrast";
        target.style.imageRendering = "crisp-edges";
        target.style.imageRendering = "pixelated"
    }
    var dpiScale = strategy.canvasResolutionScaleMode == 2 ? devicePixelRatio : 1;
    if (strategy.canvasResolutionScaleMode != 0) {
        var newWidth = cssWidth * dpiScale | 0;
        var newHeight = cssHeight * dpiScale | 0;
        __set_canvas_element_size(target, newWidth, newHeight);
        if (target.GLctxObject)
            target.GLctxObject.GLctx.viewport(0, 0, newWidth, newHeight)
    }
    return restoreOldStyle
}
function _JSEvents_requestFullscreen(target, strategy) {
    if (strategy.scaleMode != 0 || strategy.canvasResolutionScaleMode != 0) {
        _JSEvents_resizeCanvasForFullscreen(target, strategy)
    }
    if (target.requestFullscreen) {
        target.requestFullscreen()
    } else if (target.msRequestFullscreen) {
        target.msRequestFullscreen()
    } else if (target.mozRequestFullScreen) {
        target.mozRequestFullScreen()
    } else if (target.mozRequestFullscreen) {
        target.mozRequestFullscreen()
    } else if (target.webkitRequestFullscreen) {
        target.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
    } else {
        return JSEvents.fullscreenEnabled() ? -3 : -1
    }
    if (strategy.canvasResizedCallback) {
        dynCall_iiii(strategy.canvasResizedCallback, 37, 0, strategy.canvasResizedCallbackUserData)
    }
    return 0
}
function _emscripten_exit_fullscreen() {
    if (!JSEvents.fullscreenEnabled())
        return -1;
    JSEvents.removeDeferredCalls(_JSEvents_requestFullscreen);
    var d = __specialEventTargets[1];
    if (d.exitFullscreen) {
        d.fullscreenElement && d.exitFullscreen()
    } else if (d.msExitFullscreen) {
        d.msFullscreenElement && d.msExitFullscreen()
    } else if (d.mozCancelFullScreen) {
        d.mozFullScreenElement && d.mozCancelFullScreen()
    } else if (d.webkitExitFullscreen) {
        d.webkitFullscreenElement && d.webkitExitFullscreen()
    } else {
        return -1
    }
    return 0
}
function __requestPointerLock(target) {
    if (target.requestPointerLock) {
        target.requestPointerLock()
    } else if (target.mozRequestPointerLock) {
        target.mozRequestPointerLock()
    } else if (target.webkitRequestPointerLock) {
        target.webkitRequestPointerLock()
    } else if (target.msRequestPointerLock) {
        target.msRequestPointerLock()
    } else {
        if (document.body.requestPointerLock || document.body.mozRequestPointerLock || document.body.webkitRequestPointerLock || document.body.msRequestPointerLock) {
            return -3
        } else {
            return -1
        }
    }
    return 0
}
function _emscripten_exit_pointerlock() {
    JSEvents.removeDeferredCalls(__requestPointerLock);
    if (document.exitPointerLock) {
        document.exitPointerLock()
    } else if (document.msExitPointerLock) {
        document.msExitPointerLock()
    } else if (document.mozExitPointerLock) {
        document.mozExitPointerLock()
    } else if (document.webkitExitPointerLock) {
        document.webkitExitPointerLock()
    } else {
        return -1
    }
    return 0
}
function _emscripten_exit_with_live_runtime() {
    noExitRuntime = true
}
function _emscripten_force_exit(status) {
    noExitRuntime = false;
    exit(status)
}
function _emscripten_get_device_pixel_ratio() {
    return devicePixelRatio || 1
}
function _emscripten_get_element_css_size(target, width, height) {
    target = target ? __findEventTarget(target) : Module["canvas"];
    if (!target)
        return -4;
    if (target.getBoundingClientRect) {
        var rect = target.getBoundingClientRect();
        HEAPF64[width >> 3] = rect.right - rect.left;
        HEAPF64[height >> 3] = rect.bottom - rect.top
    } else {
        HEAPF64[width >> 3] = target.clientWidth;
        HEAPF64[height >> 3] = target.clientHeight
    }
    return 0
}
function _emscripten_get_heap_size() {
    return HEAP8.length
}
function _emscripten_get_sbrk_ptr() {
    return 95242288
}
function _emscripten_glActiveTexture(x0) {
    GLctx["activeTexture"](x0)
}
function _emscripten_glAttachShader(program, shader) {
    GLctx.attachShader(GL.programs[program], GL.shaders[shader])
}
function _emscripten_glBeginQueryEXT(target, id) {
    GLctx.disjointTimerQueryExt["beginQueryEXT"](target, GL.timerQueriesEXT[id])
}
function _emscripten_glBindAttribLocation(program, index, name) {
    GLctx.bindAttribLocation(GL.programs[program], index, UTF8ToString(name))
}
function _emscripten_glBindBuffer(target, buffer) {
    GLctx.bindBuffer(target, GL.buffers[buffer])
}
function _emscripten_glBindFramebuffer(target, framebuffer) {
    GLctx.bindFramebuffer(target, GL.framebuffers[framebuffer])
}
function _emscripten_glBindRenderbuffer(target, renderbuffer) {
    GLctx.bindRenderbuffer(target, GL.renderbuffers[renderbuffer])
}
function _emscripten_glBindTexture(target, texture) {
    GLctx.bindTexture(target, GL.textures[texture])
}
function _emscripten_glBindVertexArrayOES(vao) {
    GLctx["bindVertexArray"](GL.vaos[vao])
}
function _emscripten_glBlendColor(x0, x1, x2, x3) {
    GLctx["blendColor"](x0, x1, x2, x3)
}
function _emscripten_glBlendEquation(x0) {
    GLctx["blendEquation"](x0)
}
function _emscripten_glBlendEquationSeparate(x0, x1) {
    GLctx["blendEquationSeparate"](x0, x1)
}
function _emscripten_glBlendFunc(x0, x1) {
    GLctx["blendFunc"](x0, x1)
}
function _emscripten_glBlendFuncSeparate(x0, x1, x2, x3) {
    GLctx["blendFuncSeparate"](x0, x1, x2, x3)
}
function _emscripten_glBufferData(target, size, data, usage) {
    GLctx.bufferData(target, data ? HEAPU8.subarray(data, data + size) : size, usage)
}
function _emscripten_glBufferSubData(target, offset, size, data) {
    GLctx.bufferSubData(target, offset, HEAPU8.subarray(data, data + size))
}
function _emscripten_glCheckFramebufferStatus(x0) {
    return GLctx["checkFramebufferStatus"](x0)
}
function _emscripten_glClear(x0) {
    GLctx["clear"](x0)
}
function _emscripten_glClearColor(x0, x1, x2, x3) {
    GLctx["clearColor"](x0, x1, x2, x3)
}
function _emscripten_glClearDepthf(x0) {
    GLctx["clearDepth"](x0)
}
function _emscripten_glClearStencil(x0) {
    GLctx["clearStencil"](x0)
}
function _emscripten_glColorMask(red, green, blue, alpha) {
    GLctx.colorMask(!!red, !!green, !!blue, !!alpha)
}
function _emscripten_glCompileShader(shader) {
    GLctx.compileShader(GL.shaders[shader])
}
function _emscripten_glCompressedTexImage2D(target, level, internalFormat, width, height, border, imageSize, data) {
    GLctx["compressedTexImage2D"](target, level, internalFormat, width, height, border, data ? HEAPU8.subarray(data, data + imageSize) : null)
}
function _emscripten_glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    GLctx["compressedTexSubImage2D"](target, level, xoffset, yoffset, width, height, format, data ? HEAPU8.subarray(data, data + imageSize) : null)
}
function _emscripten_glCopyTexImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}
function _emscripten_glCopyTexSubImage2D(x0, x1, x2, x3, x4, x5, x6, x7) {
    GLctx["copyTexSubImage2D"](x0, x1, x2, x3, x4, x5, x6, x7)
}
function _emscripten_glCreateProgram() {
    var id = GL.getNewId(GL.programs);
    var program = GLctx.createProgram();
    program.name = id;
    GL.programs[id] = program;
    return id
}
function _emscripten_glCreateShader(shaderType) {
    var id = GL.getNewId(GL.shaders);
    GL.shaders[id] = GLctx.createShader(shaderType);
    return id
}
function _emscripten_glCullFace(x0) {
    GLctx["cullFace"](x0)
}
function _emscripten_glDeleteBuffers(n, buffers) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[buffers + i * 4 >> 2];
        var buffer = GL.buffers[id];
        if (!buffer)
            continue;
        GLctx.deleteBuffer(buffer);
        buffer.name = 0;
        GL.buffers[id] = null;
        if (id == GL.currArrayBuffer)
            GL.currArrayBuffer = 0;
        if (id == GL.currElementArrayBuffer)
            GL.currElementArrayBuffer = 0
    }
}
function _emscripten_glDeleteFramebuffers(n, framebuffers) {
    for (var i = 0; i < n; ++i) {
        var id = HEAP32[framebuffers + i * 4 >> 2];
        var framebuffer = GL.framebuffers[id];
        if (!framebuffer)
            continue;
        GLctx.deleteFramebuffer(framebuffer);
        framebuffer.name = 0;
        GL.framebuffers[id] = null
    }
}
function _emscripten_glDeleteProgram(id) {
    if (!id)
        return;
    var program = GL.programs[id];
    if (!program) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteProgram(program);
    program.name = 0;
    GL.programs[id] = null;
    GL.programInfos[id] = null
}
function _emscripten_glDeleteQueriesEXT(n, ids) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[ids + i * 4 >> 2];
        var query = GL.timerQueriesEXT[id];
        if (!query)
            continue;
        GLctx.disjointTimerQueryExt["deleteQueryEXT"](query);
        GL.timerQueriesEXT[id] = null
    }
}
function _emscripten_glDeleteRenderbuffers(n, renderbuffers) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[renderbuffers + i * 4 >> 2];
        var renderbuffer = GL.renderbuffers[id];
        if (!renderbuffer)
            continue;
        GLctx.deleteRenderbuffer(renderbuffer);
        renderbuffer.name = 0;
        GL.renderbuffers[id] = null
    }
}
function _emscripten_glDeleteShader(id) {
    if (!id)
        return;
    var shader = GL.shaders[id];
    if (!shader) {
        GL.recordError(1281);
        return
    }
    GLctx.deleteShader(shader);
    GL.shaders[id] = null
}
function _emscripten_glDeleteTextures(n, textures) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[textures + i * 4 >> 2];
        var texture = GL.textures[id];
        if (!texture)
            continue;
        GLctx.deleteTexture(texture);
        texture.name = 0;
        GL.textures[id] = null
    }
}
function _emscripten_glDeleteVertexArraysOES(n, vaos) {
    for (var i = 0; i < n; i++) {
        var id = HEAP32[vaos + i * 4 >> 2];
        GLctx["deleteVertexArray"](GL.vaos[id]);
        GL.vaos[id] = null
    }
}
function _emscripten_glDepthFunc(x0) {
    GLctx["depthFunc"](x0)
}
function _emscripten_glDepthMask(flag) {
    GLctx.depthMask(!!flag)
}
function _emscripten_glDepthRangef(x0, x1) {
    GLctx["depthRange"](x0, x1)
}
function _emscripten_glDetachShader(program, shader) {
    GLctx.detachShader(GL.programs[program], GL.shaders[shader])
}
function _emscripten_glDisable(x0) {
    GLctx["disable"](x0)
}
function _emscripten_glDisableVertexAttribArray(index) {
    GLctx.disableVertexAttribArray(index)
}
function _emscripten_glDrawArrays(mode, first, count) {
    GLctx.drawArrays(mode, first, count)
}
function _emscripten_glDrawArraysInstancedANGLE(mode, first, count, primcount) {
    GLctx["drawArraysInstanced"](mode, first, count, primcount)
}
var __tempFixedLengthArray = [];
function _emscripten_glDrawBuffersWEBGL(n, bufs) {
    var bufArray = __tempFixedLengthArray[n];
    for (var i = 0; i < n; i++) {
        bufArray[i] = HEAP32[bufs + i * 4 >> 2]
    }
    GLctx["drawBuffers"](bufArray)
}
function _emscripten_glDrawElements(mode, count, type, indices) {
    GLctx.drawElements(mode, count, type, indices)
}
function _emscripten_glDrawElementsInstancedANGLE(mode, count, type, indices, primcount) {
    GLctx["drawElementsInstanced"](mode, count, type, indices, primcount)
}
function _emscripten_glEnable(x0) {
    GLctx["enable"](x0)
}
function _emscripten_glEnableVertexAttribArray(index) {
    GLctx.enableVertexAttribArray(index)
}
function _emscripten_glEndQueryEXT(target) {
    GLctx.disjointTimerQueryExt["endQueryEXT"](target)
}
function _emscripten_glFinish() {
    GLctx["finish"]()
}
function _emscripten_glFlush() {
    GLctx["flush"]()
}
function _emscripten_glFramebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer) {
    GLctx.framebufferRenderbuffer(target, attachment, renderbuffertarget, GL.renderbuffers[renderbuffer])
}
function _emscripten_glFramebufferTexture2D(target, attachment, textarget, texture, level) {
    GLctx.framebufferTexture2D(target, attachment, textarget, GL.textures[texture], level)
}
function _emscripten_glFrontFace(x0) {
    GLctx["frontFace"](x0)
}
function __glGenObject(n, buffers, createFunction, objectTable) {
    for (var i = 0; i < n; i++) {
        var buffer = GLctx[createFunction]();
        var id = buffer && GL.getNewId(objectTable);
        if (buffer) {
            buffer.name = id;
            objectTable[id] = buffer
        } else {
            GL.recordError(1282)
        }
        HEAP32[buffers + i * 4 >> 2] = id
    }
}
function _emscripten_glGenBuffers(n, buffers) {
    __glGenObject(n, buffers, "createBuffer", GL.buffers)
}
function _emscripten_glGenFramebuffers(n, ids) {
    __glGenObject(n, ids, "createFramebuffer", GL.framebuffers)
}
function _emscripten_glGenQueriesEXT(n, ids) {
    for (var i = 0; i < n; i++) {
        var query = GLctx.disjointTimerQueryExt["createQueryEXT"]();
        if (!query) {
            GL.recordError(1282);
            while (i < n)
                HEAP32[ids + i++ * 4 >> 2] = 0;
            return
        }
        var id = GL.getNewId(GL.timerQueriesEXT);
        query.name = id;
        GL.timerQueriesEXT[id] = query;
        HEAP32[ids + i * 4 >> 2] = id
    }
}
function _emscripten_glGenRenderbuffers(n, renderbuffers) {
    __glGenObject(n, renderbuffers, "createRenderbuffer", GL.renderbuffers)
}
function _emscripten_glGenTextures(n, textures) {
    __glGenObject(n, textures, "createTexture", GL.textures)
}
function _emscripten_glGenVertexArraysOES(n, arrays) {
    __glGenObject(n, arrays, "createVertexArray", GL.vaos)
}
function _emscripten_glGenerateMipmap(x0) {
    GLctx["generateMipmap"](x0)
}
function _emscripten_glGetActiveAttrib(program, index, bufSize, length, size, type, name) {
    program = GL.programs[program];
    var info = GLctx.getActiveAttrib(program, index);
    if (!info)
        return;
    var numBytesWrittenExclNull = bufSize > 0 && name ? stringToUTF8(info.name, name, bufSize) : 0;
    if (length)
        HEAP32[length >> 2] = numBytesWrittenExclNull;
    if (size)
        HEAP32[size >> 2] = info.size;
    if (type)
        HEAP32[type >> 2] = info.type
}
function _emscripten_glGetActiveUniform(program, index, bufSize, length, size, type, name) {
    program = GL.programs[program];
    var info = GLctx.getActiveUniform(program, index);
    if (!info)
        return;
    var numBytesWrittenExclNull = bufSize > 0 && name ? stringToUTF8(info.name, name, bufSize) : 0;
    if (length)
        HEAP32[length >> 2] = numBytesWrittenExclNull;
    if (size)
        HEAP32[size >> 2] = info.size;
    if (type)
        HEAP32[type >> 2] = info.type
}
function _emscripten_glGetAttachedShaders(program, maxCount, count, shaders) {
    var result = GLctx.getAttachedShaders(GL.programs[program]);
    var len = result.length;
    if (len > maxCount) {
        len = maxCount
    }
    HEAP32[count >> 2] = len;
    for (var i = 0; i < len; ++i) {
        var id = GL.shaders.indexOf(result[i]);
        HEAP32[shaders + i * 4 >> 2] = id
    }
}
function _emscripten_glGetAttribLocation(program, name) {
    return GLctx.getAttribLocation(GL.programs[program], UTF8ToString(name))
}
function emscriptenWebGLGet(name_, p, type) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    var ret = undefined;
    switch (name_) {
    case 36346:
        ret = 1;
        break;
    case 36344:
        if (type != 0 && type != 1) {
            GL.recordError(1280)
        }
        return;
    case 36345:
        ret = 0;
        break;
    case 34466:
        var formats = GLctx.getParameter(34467);
        ret = formats ? formats.length : 0;
        break
    }
    if (ret === undefined) {
        var result = GLctx.getParameter(name_);
        switch (typeof result) {
        case "number":
            ret = result;
            break;
        case "boolean":
            ret = result ? 1 : 0;
            break;
        case "string":
            GL.recordError(1280);
            return;
        case "object":
            if (result === null) {
                switch (name_) {
                case 34964:
                case 35725:
                case 34965:
                case 36006:
                case 36007:
                case 32873:
                case 34229:
                case 34068:
                    {
                        ret = 0;
                        break
                    }
                default:
                    {
                        GL.recordError(1280);
                        return
                    }
                }
            } else if (result instanceof Float32Array || result instanceof Uint32Array || result instanceof Int32Array || result instanceof Array) {
                for (var i = 0; i < result.length; ++i) {
                    switch (type) {
                    case 0:
                        HEAP32[p + i * 4 >> 2] = result[i];
                        break;
                    case 2:
                        HEAPF32[p + i * 4 >> 2] = result[i];
                        break;
                    case 4:
                        HEAP8[p + i >> 0] = result[i] ? 1 : 0;
                        break
                    }
                }
                return
            } else {
                try {
                    ret = result.name | 0
                } catch (e) {
                    GL.recordError(1280);
                    err("GL_INVALID_ENUM in glGet" + type + "v: Unknown object returned from WebGL getParameter(" + name_ + ")! (error: " + e + ")");
                    return
                }
            }
            break;
        default:
            GL.recordError(1280);
            err("GL_INVALID_ENUM in glGet" + type + "v: Native code calling glGet" + type + "v(" + name_ + ") and it returns " + result + " of type " + typeof result + "!");
            return
        }
    }
    switch (type) {
    case 1:
        tempI64 = [ret >>> 0, (tempDouble = ret,
        +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
        HEAP32[p >> 2] = tempI64[0],
        HEAP32[p + 4 >> 2] = tempI64[1];
        break;
    case 0:
        HEAP32[p >> 2] = ret;
        break;
    case 2:
        HEAPF32[p >> 2] = ret;
        break;
    case 4:
        HEAP8[p >> 0] = ret ? 1 : 0;
        break
    }
}
function _emscripten_glGetBooleanv(name_, p) {
    emscriptenWebGLGet(name_, p, 4)
}
function _emscripten_glGetBufferParameteriv(target, value, data) {
    if (!data) {
        GL.recordError(1281);
        return
    }
    HEAP32[data >> 2] = GLctx.getBufferParameter(target, value)
}
function _emscripten_glGetError() {
    var error = GLctx.getError() || GL.lastError;
    GL.lastError = 0;
    return error
}
function _emscripten_glGetFloatv(name_, p) {
    emscriptenWebGLGet(name_, p, 2)
}
function _emscripten_glGetFramebufferAttachmentParameteriv(target, attachment, pname, params) {
    var result = GLctx.getFramebufferAttachmentParameter(target, attachment, pname);
    if (result instanceof WebGLRenderbuffer || result instanceof WebGLTexture) {
        result = result.name | 0
    }
    HEAP32[params >> 2] = result
}
function _emscripten_glGetIntegerv(name_, p) {
    emscriptenWebGLGet(name_, p, 0)
}
function _emscripten_glGetProgramInfoLog(program, maxLength, length, infoLog) {
    var log = GLctx.getProgramInfoLog(GL.programs[program]);
    if (log === null)
        log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length)
        HEAP32[length >> 2] = numBytesWrittenExclNull
}
function _emscripten_glGetProgramiv(program, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (program >= GL.counter) {
        GL.recordError(1281);
        return
    }
    var ptable = GL.programInfos[program];
    if (!ptable) {
        GL.recordError(1282);
        return
    }
    if (pname == 35716) {
        var log = GLctx.getProgramInfoLog(GL.programs[program]);
        if (log === null)
            log = "(unknown error)";
        HEAP32[p >> 2] = log.length + 1
    } else if (pname == 35719) {
        HEAP32[p >> 2] = ptable.maxUniformLength
    } else if (pname == 35722) {
        if (ptable.maxAttributeLength == -1) {
            program = GL.programs[program];
            var numAttribs = GLctx.getProgramParameter(program, 35721);
            ptable.maxAttributeLength = 0;
            for (var i = 0; i < numAttribs; ++i) {
                var activeAttrib = GLctx.getActiveAttrib(program, i);
                ptable.maxAttributeLength = Math.max(ptable.maxAttributeLength, activeAttrib.name.length + 1)
            }
        }
        HEAP32[p >> 2] = ptable.maxAttributeLength
    } else if (pname == 35381) {
        if (ptable.maxUniformBlockNameLength == -1) {
            program = GL.programs[program];
            var numBlocks = GLctx.getProgramParameter(program, 35382);
            ptable.maxUniformBlockNameLength = 0;
            for (var i = 0; i < numBlocks; ++i) {
                var activeBlockName = GLctx.getActiveUniformBlockName(program, i);
                ptable.maxUniformBlockNameLength = Math.max(ptable.maxUniformBlockNameLength, activeBlockName.length + 1)
            }
        }
        HEAP32[p >> 2] = ptable.maxUniformBlockNameLength
    } else {
        HEAP32[p >> 2] = GLctx.getProgramParameter(GL.programs[program], pname)
    }
}
function _emscripten_glGetQueryObjecti64vEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.timerQueriesEXT[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    tempI64 = [ret >>> 0, (tempDouble = ret,
    +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
    HEAP32[params >> 2] = tempI64[0],
    HEAP32[params + 4 >> 2] = tempI64[1]
}
function _emscripten_glGetQueryObjectivEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.timerQueriesEXT[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    HEAP32[params >> 2] = ret
}
function _emscripten_glGetQueryObjectui64vEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.timerQueriesEXT[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    tempI64 = [ret >>> 0, (tempDouble = ret,
    +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
    HEAP32[params >> 2] = tempI64[0],
    HEAP32[params + 4 >> 2] = tempI64[1]
}
function _emscripten_glGetQueryObjectuivEXT(id, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var query = GL.timerQueriesEXT[id];
    var param = GLctx.disjointTimerQueryExt["getQueryObjectEXT"](query, pname);
    var ret;
    if (typeof param == "boolean") {
        ret = param ? 1 : 0
    } else {
        ret = param
    }
    HEAP32[params >> 2] = ret
}
function _emscripten_glGetQueryivEXT(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx.disjointTimerQueryExt["getQueryEXT"](target, pname)
}
function _emscripten_glGetRenderbufferParameteriv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx.getRenderbufferParameter(target, pname)
}
function _emscripten_glGetShaderInfoLog(shader, maxLength, length, infoLog) {
    var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
    if (log === null)
        log = "(unknown error)";
    var numBytesWrittenExclNull = maxLength > 0 && infoLog ? stringToUTF8(log, infoLog, maxLength) : 0;
    if (length)
        HEAP32[length >> 2] = numBytesWrittenExclNull
}
function _emscripten_glGetShaderPrecisionFormat(shaderType, precisionType, range, precision) {
    var result = GLctx.getShaderPrecisionFormat(shaderType, precisionType);
    HEAP32[range >> 2] = result.rangeMin;
    HEAP32[range + 4 >> 2] = result.rangeMax;
    HEAP32[precision >> 2] = result.precision
}
function _emscripten_glGetShaderSource(shader, bufSize, length, source) {
    var result = GLctx.getShaderSource(GL.shaders[shader]);
    if (!result)
        return;
    var numBytesWrittenExclNull = bufSize > 0 && source ? stringToUTF8(result, source, bufSize) : 0;
    if (length)
        HEAP32[length >> 2] = numBytesWrittenExclNull
}
function _emscripten_glGetShaderiv(shader, pname, p) {
    if (!p) {
        GL.recordError(1281);
        return
    }
    if (pname == 35716) {
        var log = GLctx.getShaderInfoLog(GL.shaders[shader]);
        if (log === null)
            log = "(unknown error)";
        HEAP32[p >> 2] = log.length + 1
    } else if (pname == 35720) {
        var source = GLctx.getShaderSource(GL.shaders[shader]);
        var sourceLength = source === null || source.length == 0 ? 0 : source.length + 1;
        HEAP32[p >> 2] = sourceLength
    } else {
        HEAP32[p >> 2] = GLctx.getShaderParameter(GL.shaders[shader], pname)
    }
}
function stringToNewUTF8(jsString) {
    var length = lengthBytesUTF8(jsString) + 1;
    var cString = _malloc(length);
    stringToUTF8(jsString, cString, length);
    return cString
}
function _emscripten_glGetString(name_) {
    if (GL.stringCache[name_])
        return GL.stringCache[name_];
    var ret;
    switch (name_) {
    case 7939:
        var exts = GLctx.getSupportedExtensions() || [];
        exts = exts.concat(exts.map(function(e) {
            return "GL_" + e
        }));
        ret = stringToNewUTF8(exts.join(" "));
        break;
    case 7936:
    case 7937:
    case 37445:
    case 37446:
        var s = GLctx.getParameter(name_);
        if (!s) {
            GL.recordError(1280)
        }
        ret = stringToNewUTF8(s);
        break;
    case 7938:
        var glVersion = GLctx.getParameter(GLctx.VERSION);
        {
            glVersion = "OpenGL ES 2.0 (" + glVersion + ")"
        }
        ret = stringToNewUTF8(glVersion);
        break;
    case 35724:
        var glslVersion = GLctx.getParameter(GLctx.SHADING_LANGUAGE_VERSION);
        var ver_re = /^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/;
        var ver_num = glslVersion.match(ver_re);
        if (ver_num !== null) {
            if (ver_num[1].length == 3)
                ver_num[1] = ver_num[1] + "0";
            glslVersion = "OpenGL ES GLSL ES " + ver_num[1] + " (" + glslVersion + ")"
        }
        ret = stringToNewUTF8(glslVersion);
        break;
    default:
        GL.recordError(1280);
        return 0
    }
    GL.stringCache[name_] = ret;
    return ret
}
function _emscripten_glGetTexParameterfv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAPF32[params >> 2] = GLctx.getTexParameter(target, pname)
}
function _emscripten_glGetTexParameteriv(target, pname, params) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    HEAP32[params >> 2] = GLctx.getTexParameter(target, pname)
}
function _emscripten_glGetUniformLocation(program, name) {
    name = UTF8ToString(name);
    var arrayIndex = 0;
    if (name[name.length - 1] == "]") {
        var leftBrace = name.lastIndexOf("[");
        arrayIndex = name[leftBrace + 1] != "]" ? parseInt(name.slice(leftBrace + 1)) : 0;
        name = name.slice(0, leftBrace)
    }
    var uniformInfo = GL.programInfos[program] && GL.programInfos[program].uniforms[name];
    if (uniformInfo && arrayIndex >= 0 && arrayIndex < uniformInfo[0]) {
        return uniformInfo[1] + arrayIndex
    } else {
        return -1
    }
}
function emscriptenWebGLGetUniform(program, location, params, type) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var data = GLctx.getUniform(GL.programs[program], GL.uniforms[location]);
    if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
        case 0:
            HEAP32[params >> 2] = data;
            break;
        case 2:
            HEAPF32[params >> 2] = data;
            break;
        default:
            throw "internal emscriptenWebGLGetUniform() error, bad type: " + type
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            switch (type) {
            case 0:
                HEAP32[params + i * 4 >> 2] = data[i];
                break;
            case 2:
                HEAPF32[params + i * 4 >> 2] = data[i];
                break;
            default:
                throw "internal emscriptenWebGLGetUniform() error, bad type: " + type
            }
        }
    }
}
function _emscripten_glGetUniformfv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 2)
}
function _emscripten_glGetUniformiv(program, location, params) {
    emscriptenWebGLGetUniform(program, location, params, 0)
}
function _emscripten_glGetVertexAttribPointerv(index, pname, pointer) {
    if (!pointer) {
        GL.recordError(1281);
        return
    }
    HEAP32[pointer >> 2] = GLctx.getVertexAttribOffset(index, pname)
}
function emscriptenWebGLGetVertexAttrib(index, pname, params, type) {
    if (!params) {
        GL.recordError(1281);
        return
    }
    var data = GLctx.getVertexAttrib(index, pname);
    if (pname == 34975) {
        HEAP32[params >> 2] = data["name"]
    } else if (typeof data == "number" || typeof data == "boolean") {
        switch (type) {
        case 0:
            HEAP32[params >> 2] = data;
            break;
        case 2:
            HEAPF32[params >> 2] = data;
            break;
        case 5:
            HEAP32[params >> 2] = Math.fround(data);
            break;
        default:
            throw "internal emscriptenWebGLGetVertexAttrib() error, bad type: " + type
        }
    } else {
        for (var i = 0; i < data.length; i++) {
            switch (type) {
            case 0:
                HEAP32[params + i * 4 >> 2] = data[i];
                break;
            case 2:
                HEAPF32[params + i * 4 >> 2] = data[i];
                break;
            case 5:
                HEAP32[params + i * 4 >> 2] = Math.fround(data[i]);
                break;
            default:
                throw "internal emscriptenWebGLGetVertexAttrib() error, bad type: " + type
            }
        }
    }
}
function _emscripten_glGetVertexAttribfv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 2)
}
function _emscripten_glGetVertexAttribiv(index, pname, params) {
    emscriptenWebGLGetVertexAttrib(index, pname, params, 5)
}
function _emscripten_glHint(x0, x1) {
    GLctx["hint"](x0, x1)
}
function _emscripten_glIsBuffer(buffer) {
    var b = GL.buffers[buffer];
    if (!b)
        return 0;
    return GLctx.isBuffer(b)
}
function _emscripten_glIsEnabled(x0) {
    return GLctx["isEnabled"](x0)
}
function _emscripten_glIsFramebuffer(framebuffer) {
    var fb = GL.framebuffers[framebuffer];
    if (!fb)
        return 0;
    return GLctx.isFramebuffer(fb)
}
function _emscripten_glIsProgram(program) {
    program = GL.programs[program];
    if (!program)
        return 0;
    return GLctx.isProgram(program)
}
function _emscripten_glIsQueryEXT(id) {
    var query = GL.timerQueriesEXT[id];
    if (!query)
        return 0;
    return GLctx.disjointTimerQueryExt["isQueryEXT"](query)
}
function _emscripten_glIsRenderbuffer(renderbuffer) {
    var rb = GL.renderbuffers[renderbuffer];
    if (!rb)
        return 0;
    return GLctx.isRenderbuffer(rb)
}
function _emscripten_glIsShader(shader) {
    var s = GL.shaders[shader];
    if (!s)
        return 0;
    return GLctx.isShader(s)
}
function _emscripten_glIsTexture(id) {
    var texture = GL.textures[id];
    if (!texture)
        return 0;
    return GLctx.isTexture(texture)
}
function _emscripten_glIsVertexArrayOES(array) {
    var vao = GL.vaos[array];
    if (!vao)
        return 0;
    return GLctx["isVertexArray"](vao)
}
function _emscripten_glLineWidth(x0) {
    GLctx["lineWidth"](x0)
}
function _emscripten_glLinkProgram(program) {
    GLctx.linkProgram(GL.programs[program]);
    GL.populateUniformTable(program)
}
function _emscripten_glPixelStorei(pname, param) {
    if (pname == 3317) {
        GL.unpackAlignment = param
    }
    GLctx.pixelStorei(pname, param)
}
function _emscripten_glPolygonOffset(x0, x1) {
    GLctx["polygonOffset"](x0, x1)
}
function _emscripten_glQueryCounterEXT(id, target) {
    GLctx.disjointTimerQueryExt["queryCounterEXT"](GL.timerQueriesEXT[id], target)
}
function __computeUnpackAlignedImageSize(width, height, sizePerPixel, alignment) {
    function roundedToNextMultipleOf(x, y) {
        return x + y - 1 & -y
    }
    var plainRowSize = width * sizePerPixel;
    var alignedRowSize = roundedToNextMultipleOf(plainRowSize, alignment);
    return height * alignedRowSize
}
var __colorChannelsInGlTextureFormat = {
    6402: 1,
    6406: 1,
    6407: 3,
    6408: 4,
    6409: 1,
    6410: 2,
    35904: 3,
    35906: 4
};
var __sizeOfGlTextureElementType = {
    5121: 1,
    5123: 2,
    5125: 4,
    5126: 4,
    32819: 2,
    32820: 2,
    33635: 2,
    34042: 4,
    36193: 2
};
function emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) {
    var sizePerPixel = __colorChannelsInGlTextureFormat[format] * __sizeOfGlTextureElementType[type];
    if (!sizePerPixel) {
        GL.recordError(1280);
        return
    }
    var bytes = __computeUnpackAlignedImageSize(width, height, sizePerPixel, GL.unpackAlignment);
    var end = pixels + bytes;
    switch (type) {
    case 5121:
        return HEAPU8.subarray(pixels, end);
    case 5126:
        return HEAPF32.subarray(pixels >> 2, end >> 2);
    case 5125:
    case 34042:
        return HEAPU32.subarray(pixels >> 2, end >> 2);
    case 5123:
    case 33635:
    case 32819:
    case 32820:
    case 36193:
        return HEAPU16.subarray(pixels >> 1, end >> 1);
    default:
        GL.recordError(1280)
    }
}
function _emscripten_glReadPixels(x, y, width, height, format, type, pixels) {
    var pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, format);
    if (!pixelData) {
        GL.recordError(1280);
        return
    }
    GLctx.readPixels(x, y, width, height, format, type, pixelData)
}
function _emscripten_glReleaseShaderCompiler() {}
function _emscripten_glRenderbufferStorage(x0, x1, x2, x3) {
    GLctx["renderbufferStorage"](x0, x1, x2, x3)
}
function _emscripten_glSampleCoverage(value, invert) {
    GLctx.sampleCoverage(value, !!invert)
}
function _emscripten_glScissor(x0, x1, x2, x3) {
    GLctx["scissor"](x0, x1, x2, x3)
}
function _emscripten_glShaderBinary() {
    GL.recordError(1280)
}
function _emscripten_glShaderSource(shader, count, string, length) {
    var source = GL.getSource(shader, count, string, length);
    GLctx.shaderSource(GL.shaders[shader], source)
}
function _emscripten_glStencilFunc(x0, x1, x2) {
    GLctx["stencilFunc"](x0, x1, x2)
}
function _emscripten_glStencilFuncSeparate(x0, x1, x2, x3) {
    GLctx["stencilFuncSeparate"](x0, x1, x2, x3)
}
function _emscripten_glStencilMask(x0) {
    GLctx["stencilMask"](x0)
}
function _emscripten_glStencilMaskSeparate(x0, x1) {
    GLctx["stencilMaskSeparate"](x0, x1)
}
function _emscripten_glStencilOp(x0, x1, x2) {
    GLctx["stencilOp"](x0, x1, x2)
}
function _emscripten_glStencilOpSeparate(x0, x1, x2, x3) {
    GLctx["stencilOpSeparate"](x0, x1, x2, x3)
}
function _emscripten_glTexImage2D(target, level, internalFormat, width, height, border, format, type, pixels) {
    GLctx.texImage2D(target, level, internalFormat, width, height, border, format, type, pixels ? emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, internalFormat) : null)
}
function _emscripten_glTexParameterf(x0, x1, x2) {
    GLctx["texParameterf"](x0, x1, x2)
}
function _emscripten_glTexParameterfv(target, pname, params) {
    var param = HEAPF32[params >> 2];
    GLctx.texParameterf(target, pname, param)
}
function _emscripten_glTexParameteri(x0, x1, x2) {
    GLctx["texParameteri"](x0, x1, x2)
}
function _emscripten_glTexParameteriv(target, pname, params) {
    var param = HEAP32[params >> 2];
    GLctx.texParameteri(target, pname, param)
}
function _emscripten_glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
    var pixelData = null;
    if (pixels)
        pixelData = emscriptenWebGLGetTexPixelData(type, format, width, height, pixels, 0);
    GLctx.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixelData)
}
function _emscripten_glUniform1f(location, v0) {
    GLctx.uniform1f(GL.uniforms[location], v0)
}
function _emscripten_glUniform1fv(location, count, value) {
    if (count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[count - 1];
        for (var i = 0; i < count; ++i) {
            view[i] = HEAPF32[value + 4 * i >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 4 >> 2)
    }
    GLctx.uniform1fv(GL.uniforms[location], view)
}
function _emscripten_glUniform1i(location, v0) {
    GLctx.uniform1i(GL.uniforms[location], v0)
}
function _emscripten_glUniform1iv(location, count, value) {
    GLctx.uniform1iv(GL.uniforms[location], HEAP32.subarray(value >> 2, value + count * 4 >> 2))
}
function _emscripten_glUniform2f(location, v0, v1) {
    GLctx.uniform2f(GL.uniforms[location], v0, v1)
}
function _emscripten_glUniform2fv(location, count, value) {
    if (2 * count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[2 * count - 1];
        for (var i = 0; i < 2 * count; i += 2) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 8 >> 2)
    }
    GLctx.uniform2fv(GL.uniforms[location], view)
}
function _emscripten_glUniform2i(location, v0, v1) {
    GLctx.uniform2i(GL.uniforms[location], v0, v1)
}
function _emscripten_glUniform2iv(location, count, value) {
    GLctx.uniform2iv(GL.uniforms[location], HEAP32.subarray(value >> 2, value + count * 8 >> 2))
}
function _emscripten_glUniform3f(location, v0, v1, v2) {
    GLctx.uniform3f(GL.uniforms[location], v0, v1, v2)
}
function _emscripten_glUniform3fv(location, count, value) {
    if (3 * count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[3 * count - 1];
        for (var i = 0; i < 3 * count; i += 3) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 12 >> 2)
    }
    GLctx.uniform3fv(GL.uniforms[location], view)
}
function _emscripten_glUniform3i(location, v0, v1, v2) {
    GLctx.uniform3i(GL.uniforms[location], v0, v1, v2)
}
function _emscripten_glUniform3iv(location, count, value) {
    GLctx.uniform3iv(GL.uniforms[location], HEAP32.subarray(value >> 2, value + count * 12 >> 2))
}
function _emscripten_glUniform4f(location, v0, v1, v2, v3) {
    GLctx.uniform4f(GL.uniforms[location], v0, v1, v2, v3)
}
function _emscripten_glUniform4fv(location, count, value) {
    if (4 * count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[4 * count - 1];
        for (var i = 0; i < 4 * count; i += 4) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2)
    }
    GLctx.uniform4fv(GL.uniforms[location], view)
}
function _emscripten_glUniform4i(location, v0, v1, v2, v3) {
    GLctx.uniform4i(GL.uniforms[location], v0, v1, v2, v3)
}
function _emscripten_glUniform4iv(location, count, value) {
    GLctx.uniform4iv(GL.uniforms[location], HEAP32.subarray(value >> 2, value + count * 16 >> 2))
}
function _emscripten_glUniformMatrix2fv(location, count, transpose, value) {
    if (4 * count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[4 * count - 1];
        for (var i = 0; i < 4 * count; i += 4) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 16 >> 2)
    }
    GLctx.uniformMatrix2fv(GL.uniforms[location], !!transpose, view)
}
function _emscripten_glUniformMatrix3fv(location, count, transpose, value) {
    if (9 * count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[9 * count - 1];
        for (var i = 0; i < 9 * count; i += 9) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
            view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
            view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
            view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
            view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
            view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 36 >> 2)
    }
    GLctx.uniformMatrix3fv(GL.uniforms[location], !!transpose, view)
}
function _emscripten_glUniformMatrix4fv(location, count, transpose, value) {
    if (16 * count <= GL.MINI_TEMP_BUFFER_SIZE) {
        var view = GL.miniTempBufferViews[16 * count - 1];
        for (var i = 0; i < 16 * count; i += 16) {
            view[i] = HEAPF32[value + 4 * i >> 2];
            view[i + 1] = HEAPF32[value + (4 * i + 4) >> 2];
            view[i + 2] = HEAPF32[value + (4 * i + 8) >> 2];
            view[i + 3] = HEAPF32[value + (4 * i + 12) >> 2];
            view[i + 4] = HEAPF32[value + (4 * i + 16) >> 2];
            view[i + 5] = HEAPF32[value + (4 * i + 20) >> 2];
            view[i + 6] = HEAPF32[value + (4 * i + 24) >> 2];
            view[i + 7] = HEAPF32[value + (4 * i + 28) >> 2];
            view[i + 8] = HEAPF32[value + (4 * i + 32) >> 2];
            view[i + 9] = HEAPF32[value + (4 * i + 36) >> 2];
            view[i + 10] = HEAPF32[value + (4 * i + 40) >> 2];
            view[i + 11] = HEAPF32[value + (4 * i + 44) >> 2];
            view[i + 12] = HEAPF32[value + (4 * i + 48) >> 2];
            view[i + 13] = HEAPF32[value + (4 * i + 52) >> 2];
            view[i + 14] = HEAPF32[value + (4 * i + 56) >> 2];
            view[i + 15] = HEAPF32[value + (4 * i + 60) >> 2]
        }
    } else {
        var view = HEAPF32.subarray(value >> 2, value + count * 64 >> 2)
    }
    GLctx.uniformMatrix4fv(GL.uniforms[location], !!transpose, view)
}
function _emscripten_glUseProgram(program) {
    GLctx.useProgram(GL.programs[program])
}
function _emscripten_glValidateProgram(program) {
    GLctx.validateProgram(GL.programs[program])
}
function _emscripten_glVertexAttrib1f(x0, x1) {
    GLctx["vertexAttrib1f"](x0, x1)
}
function _emscripten_glVertexAttrib1fv(index, v) {
    GLctx.vertexAttrib1f(index, HEAPF32[v >> 2])
}
function _emscripten_glVertexAttrib2f(x0, x1, x2) {
    GLctx["vertexAttrib2f"](x0, x1, x2)
}
function _emscripten_glVertexAttrib2fv(index, v) {
    GLctx.vertexAttrib2f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2])
}
function _emscripten_glVertexAttrib3f(x0, x1, x2, x3) {
    GLctx["vertexAttrib3f"](x0, x1, x2, x3)
}
function _emscripten_glVertexAttrib3fv(index, v) {
    GLctx.vertexAttrib3f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2])
}
function _emscripten_glVertexAttrib4f(x0, x1, x2, x3, x4) {
    GLctx["vertexAttrib4f"](x0, x1, x2, x3, x4)
}
function _emscripten_glVertexAttrib4fv(index, v) {
    GLctx.vertexAttrib4f(index, HEAPF32[v >> 2], HEAPF32[v + 4 >> 2], HEAPF32[v + 8 >> 2], HEAPF32[v + 12 >> 2])
}
function _emscripten_glVertexAttribDivisorANGLE(index, divisor) {
    GLctx["vertexAttribDivisor"](index, divisor)
}
function _emscripten_glVertexAttribPointer(index, size, type, normalized, stride, ptr) {
    GLctx.vertexAttribPointer(index, size, type, !!normalized, stride, ptr)
}
function _emscripten_glViewport(x0, x1, x2, x3) {
    GLctx["viewport"](x0, x1, x2, x3)
}
function __reallyNegative(x) {
    return x < 0 || x === 0 && 1 / x === -Infinity
}
function __formatString(format, varargs) {
    assert((varargs & 3) === 0);
    var textIndex = format;
    var argIndex = varargs;
    function prepVararg(ptr, type) {
        if (type === "double" || type === "i64") {
            if (ptr & 7) {
                assert((ptr & 7) === 4);
                ptr += 4
            }
        } else {
            assert((ptr & 3) === 0)
        }
        return ptr
    }
    function getNextArg(type) {
        var ret;
        argIndex = prepVararg(argIndex, type);
        if (type === "double") {
            ret = HEAPF64[argIndex >> 3];
            argIndex += 8
        } else if (type == "i64") {
            ret = [HEAP32[argIndex >> 2], HEAP32[argIndex + 4 >> 2]];
            argIndex += 8
        } else {
            assert((argIndex & 3) === 0);
            type = "i32";
            ret = HEAP32[argIndex >> 2];
            argIndex += 4
        }
        return ret
    }
    var ret = [];
    var curr, next, currArg;
    while (1) {
        var startTextIndex = textIndex;
        curr = HEAP8[textIndex >> 0];
        if (curr === 0)
            break;
        next = HEAP8[textIndex + 1 >> 0];
        if (curr == 37) {
            var flagAlwaysSigned = false;
            var flagLeftAlign = false;
            var flagAlternative = false;
            var flagZeroPad = false;
            var flagPadSign = false;
            flagsLoop: while (1) {
                switch (next) {
                case 43:
                    flagAlwaysSigned = true;
                    break;
                case 45:
                    flagLeftAlign = true;
                    break;
                case 35:
                    flagAlternative = true;
                    break;
                case 48:
                    if (flagZeroPad) {
                        break flagsLoop
                    } else {
                        flagZeroPad = true;
                        break
                    }
                case 32:
                    flagPadSign = true;
                    break;
                default:
                    break flagsLoop
                }
                textIndex++;
                next = HEAP8[textIndex + 1 >> 0]
            }
            var width = 0;
            if (next == 42) {
                width = getNextArg("i32");
                textIndex++;
                next = HEAP8[textIndex + 1 >> 0]
            } else {
                while (next >= 48 && next <= 57) {
                    width = width * 10 + (next - 48);
                    textIndex++;
                    next = HEAP8[textIndex + 1 >> 0]
                }
            }
            var precisionSet = false
              , precision = -1;
            if (next == 46) {
                precision = 0;
                precisionSet = true;
                textIndex++;
                next = HEAP8[textIndex + 1 >> 0];
                if (next == 42) {
                    precision = getNextArg("i32");
                    textIndex++
                } else {
                    while (1) {
                        var precisionChr = HEAP8[textIndex + 1 >> 0];
                        if (precisionChr < 48 || precisionChr > 57)
                            break;
                        precision = precision * 10 + (precisionChr - 48);
                        textIndex++
                    }
                }
                next = HEAP8[textIndex + 1 >> 0]
            }
            if (precision < 0) {
                precision = 6;
                precisionSet = false
            }
            var argSize;
            switch (String.fromCharCode(next)) {
            case "h":
                var nextNext = HEAP8[textIndex + 2 >> 0];
                if (nextNext == 104) {
                    textIndex++;
                    argSize = 1
                } else {
                    argSize = 2
                }
                break;
            case "l":
                var nextNext = HEAP8[textIndex + 2 >> 0];
                if (nextNext == 108) {
                    textIndex++;
                    argSize = 8
                } else {
                    argSize = 4
                }
                break;
            case "L":
            case "q":
            case "j":
                argSize = 8;
                break;
            case "z":
            case "t":
            case "I":
                argSize = 4;
                break;
            default:
                argSize = null
            }
            if (argSize)
                textIndex++;
            next = HEAP8[textIndex + 1 >> 0];
            switch (String.fromCharCode(next)) {
            case "d":
            case "i":
            case "u":
            case "o":
            case "x":
            case "X":
            case "p":
                {
                    var signed = next == 100 || next == 105;
                    argSize = argSize || 4;
                    currArg = getNextArg("i" + argSize * 8);
                    var argText;
                    if (argSize == 8) {
                        currArg = makeBigInt(currArg[0], currArg[1], next == 117)
                    }
                    if (argSize <= 4) {
                        var limit = Math.pow(256, argSize) - 1;
                        currArg = (signed ? reSign : unSign)(currArg & limit, argSize * 8)
                    }
                    var currAbsArg = Math.abs(currArg);
                    var prefix = "";
                    if (next == 100 || next == 105) {
                        argText = reSign(currArg, 8 * argSize, 1).toString(10)
                    } else if (next == 117) {
                        argText = unSign(currArg, 8 * argSize, 1).toString(10);
                        currArg = Math.abs(currArg)
                    } else if (next == 111) {
                        argText = (flagAlternative ? "0" : "") + currAbsArg.toString(8)
                    } else if (next == 120 || next == 88) {
                        prefix = flagAlternative && currArg != 0 ? "0x" : "";
                        if (currArg < 0) {
                            currArg = -currArg;
                            argText = (currAbsArg - 1).toString(16);
                            var buffer = [];
                            for (var i = 0; i < argText.length; i++) {
                                buffer.push((15 - parseInt(argText[i], 16)).toString(16))
                            }
                            argText = buffer.join("");
                            while (argText.length < argSize * 2)
                                argText = "f" + argText
                        } else {
                            argText = currAbsArg.toString(16)
                        }
                        if (next == 88) {
                            prefix = prefix.toUpperCase();
                            argText = argText.toUpperCase()
                        }
                    } else if (next == 112) {
                        if (currAbsArg === 0) {
                            argText = "(nil)"
                        } else {
                            prefix = "0x";
                            argText = currAbsArg.toString(16)
                        }
                    }
                    if (precisionSet) {
                        while (argText.length < precision) {
                            argText = "0" + argText
                        }
                    }
                    if (currArg >= 0) {
                        if (flagAlwaysSigned) {
                            prefix = "+" + prefix
                        } else if (flagPadSign) {
                            prefix = " " + prefix
                        }
                    }
                    if (argText.charAt(0) == "-") {
                        prefix = "-" + prefix;
                        argText = argText.substr(1)
                    }
                    while (prefix.length + argText.length < width) {
                        if (flagLeftAlign) {
                            argText += " "
                        } else {
                            if (flagZeroPad) {
                                argText = "0" + argText
                            } else {
                                prefix = " " + prefix
                            }
                        }
                    }
                    argText = prefix + argText;
                    argText.split("").forEach(function(chr) {
                        ret.push(chr.charCodeAt(0))
                    });
                    break
                }
            case "f":
            case "F":
            case "e":
            case "E":
            case "g":
            case "G":
                {
                    currArg = getNextArg("double");
                    var argText;
                    if (isNaN(currArg)) {
                        argText = "nan";
                        flagZeroPad = false
                    } else if (!isFinite(currArg)) {
                        argText = (currArg < 0 ? "-" : "") + "inf";
                        flagZeroPad = false
                    } else {
                        var isGeneral = false;
                        var effectivePrecision = Math.min(precision, 20);
                        if (next == 103 || next == 71) {
                            isGeneral = true;
                            precision = precision || 1;
                            var exponent = parseInt(currArg.toExponential(effectivePrecision).split("e")[1], 10);
                            if (precision > exponent && exponent >= -4) {
                                next = (next == 103 ? "f" : "F").charCodeAt(0);
                                precision -= exponent + 1
                            } else {
                                next = (next == 103 ? "e" : "E").charCodeAt(0);
                                precision--
                            }
                            effectivePrecision = Math.min(precision, 20)
                        }
                        if (next == 101 || next == 69) {
                            argText = currArg.toExponential(effectivePrecision);
                            if (/[eE][-+]\d$/.test(argText)) {
                                argText = argText.slice(0, -1) + "0" + argText.slice(-1)
                            }
                        } else if (next == 102 || next == 70) {
                            argText = currArg.toFixed(effectivePrecision);
                            if (currArg === 0 && __reallyNegative(currArg)) {
                                argText = "-" + argText
                            }
                        }
                        var parts = argText.split("e");
                        if (isGeneral && !flagAlternative) {
                            while (parts[0].length > 1 && parts[0].indexOf(".") != -1 && (parts[0].slice(-1) == "0" || parts[0].slice(-1) == ".")) {
                                parts[0] = parts[0].slice(0, -1)
                            }
                        } else {
                            if (flagAlternative && argText.indexOf(".") == -1)
                                parts[0] += ".";
                            while (precision > effectivePrecision++)
                                parts[0] += "0"
                        }
                        argText = parts[0] + (parts.length > 1 ? "e" + parts[1] : "");
                        if (next == 69)
                            argText = argText.toUpperCase();
                        if (currArg >= 0) {
                            if (flagAlwaysSigned) {
                                argText = "+" + argText
                            } else if (flagPadSign) {
                                argText = " " + argText
                            }
                        }
                    }
                    while (argText.length < width) {
                        if (flagLeftAlign) {
                            argText += " "
                        } else {
                            if (flagZeroPad && (argText[0] == "-" || argText[0] == "+")) {
                                argText = argText[0] + "0" + argText.slice(1)
                            } else {
                                argText = (flagZeroPad ? "0" : " ") + argText
                            }
                        }
                    }
                    if (next < 97)
                        argText = argText.toUpperCase();
                    argText.split("").forEach(function(chr) {
                        ret.push(chr.charCodeAt(0))
                    });
                    break
                }
            case "s":
                {
                    var arg = getNextArg("i8*");
                    var argLength = arg ? _strlen(arg) : "(null)".length;
                    if (precisionSet)
                        argLength = Math.min(argLength, precision);
                    if (!flagLeftAlign) {
                        while (argLength < width--) {
                            ret.push(32)
                        }
                    }
                    if (arg) {
                        for (var i = 0; i < argLength; i++) {
                            ret.push(HEAPU8[arg++ >> 0])
                        }
                    } else {
                        ret = ret.concat(intArrayFromString("(null)".substr(0, argLength), true))
                    }
                    if (flagLeftAlign) {
                        while (argLength < width--) {
                            ret.push(32)
                        }
                    }
                    break
                }
            case "c":
                {
                    if (flagLeftAlign)
                        ret.push(getNextArg("i8"));
                    while (--width > 0) {
                        ret.push(32)
                    }
                    if (!flagLeftAlign)
                        ret.push(getNextArg("i8"));
                    break
                }
            case "n":
                {
                    var ptr = getNextArg("i32*");
                    HEAP32[ptr >> 2] = ret.length;
                    break
                }
            case "%":
                {
                    ret.push(curr);
                    break
                }
            default:
                {
                    for (var i = startTextIndex; i < textIndex + 2; i++) {
                        ret.push(HEAP8[i >> 0])
                    }
                }
            }
            textIndex += 2
        } else {
            ret.push(curr);
            textIndex += 1
        }
    }
    return ret
}
function __emscripten_traverse_stack(args) {
    if (!args || !args.callee || !args.callee.name) {
        return [null, "", ""]
    }
    var funstr = args.callee.toString();
    var funcname = args.callee.name;
    var str = "(";
    var first = true;
    for (var i in args) {
        var a = args[i];
        if (!first) {
            str += ", "
        }
        first = false;
        if (typeof a === "number" || typeof a === "string") {
            str += a
        } else {
            str += "(" + typeof a + ")"
        }
    }
    str += ")";
    var caller = args.callee.caller;
    args = caller ? caller.arguments : [];
    if (first)
        str = "";
    return [args, funcname, str]
}
function _emscripten_get_callstack_js(flags) {
    var callstack = jsStackTrace();
    var iThisFunc = callstack.lastIndexOf("_emscripten_log");
    var iThisFunc2 = callstack.lastIndexOf("_emscripten_get_callstack");
    var iNextLine = callstack.indexOf("\n", Math.max(iThisFunc, iThisFunc2)) + 1;
    callstack = callstack.slice(iNextLine);
    if (flags & 8 && typeof emscripten_source_map === "undefined") {
        warnOnce('Source map information is not available, emscripten_log with EM_LOG_C_STACK will be ignored. Build with "--pre-js $EMSCRIPTEN/src/emscripten-source-map.min.js" linker flag to add source map loading to code.');
        flags ^= 8;
        flags |= 16
    }
    var stack_args = null;
    if (flags & 128) {
        stack_args = __emscripten_traverse_stack(arguments);
        while (stack_args[1].indexOf("_emscripten_") >= 0)
            stack_args = __emscripten_traverse_stack(stack_args[0])
    }
    var lines = callstack.split("\n");
    callstack = "";
    var newFirefoxRe = new RegExp("\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");
    var firefoxRe = new RegExp("\\s*(.*?)@(.*):(.*)(:(.*))?");
    var chromeRe = new RegExp("\\s*at (.*?) \\((.*):(.*):(.*)\\)");
    for (var l in lines) {
        var line = lines[l];
        var jsSymbolName = "";
        var file = "";
        var lineno = 0;
        var column = 0;
        var parts = chromeRe.exec(line);
        if (parts && parts.length == 5) {
            jsSymbolName = parts[1];
            file = parts[2];
            lineno = parts[3];
            column = parts[4]
        } else {
            parts = newFirefoxRe.exec(line);
            if (!parts)
                parts = firefoxRe.exec(line);
            if (parts && parts.length >= 4) {
                jsSymbolName = parts[1];
                file = parts[2];
                lineno = parts[3];
                column = parts[4] | 0
            } else {
                callstack += line + "\n";
                continue
            }
        }
        var cSymbolName = flags & 32 ? demangle(jsSymbolName) : jsSymbolName;
        if (!cSymbolName) {
            cSymbolName = jsSymbolName
        }
        var haveSourceMap = false;
        if (flags & 8) {
            var orig = emscripten_source_map.originalPositionFor({
                line: lineno,
                column: column
            });
            haveSourceMap = orig && orig.source;
            if (haveSourceMap) {
                if (flags & 64) {
                    orig.source = orig.source.substring(orig.source.replace(/\\/g, "/").lastIndexOf("/") + 1)
                }
                callstack += "    at " + cSymbolName + " (" + orig.source + ":" + orig.line + ":" + orig.column + ")\n"
            }
        }
        if (flags & 16 || !haveSourceMap) {
            if (flags & 64) {
                file = file.substring(file.replace(/\\/g, "/").lastIndexOf("/") + 1)
            }
            callstack += (haveSourceMap ? "     = " + jsSymbolName : "    at " + cSymbolName) + " (" + file + ":" + lineno + ":" + column + ")\n"
        }
        if (flags & 128 && stack_args[0]) {
            if (stack_args[1] == jsSymbolName && stack_args[2].length > 0) {
                callstack = callstack.replace(/\s+$/, "");
                callstack += " with values: " + stack_args[1] + stack_args[2] + "\n"
            }
            stack_args = __emscripten_traverse_stack(stack_args[0])
        }
    }
    callstack = callstack.replace(/\s+$/, "");
    return callstack
}
function _emscripten_log_js(flags, str) {
    if (flags & 24) {
        str = str.replace(/\s+$/, "");
        str += (str.length > 0 ? "\n" : "") + _emscripten_get_callstack_js(flags)
    }
    if (flags & 1) {
        if (flags & 4) {
            console.error(str)
        } else if (flags & 2) {
            console.warn(str)
        } else {
            console.log(str)
        }
    } else if (flags & 6) {
        err(str)
    } else {
        out(str)
    }
}
function _emscripten_log(flags, varargs) {
    var format = HEAP32[varargs >> 2];
    varargs += 4;
    var str = "";
    if (format) {
        var result = __formatString(format, varargs);
        for (var i = 0; i < result.length; ++i) {
            str += String.fromCharCode(result[i])
        }
    }
    _emscripten_log_js(flags, str)
}
var setjmpId = 0;
function _saveSetjmp(env, label, table, size) {
    env = env | 0;
    label = label | 0;
    table = table | 0;
    size = size | 0;
    var i = 0;
    setjmpId = setjmpId + 1 | 0;
    HEAP32[env >> 2] = setjmpId;
    while ((i | 0) < (size | 0)) {
        if ((HEAP32[table + (i << 3) >> 2] | 0) == 0) {
            HEAP32[table + (i << 3) >> 2] = setjmpId;
            HEAP32[table + ((i << 3) + 4) >> 2] = label;
            HEAP32[table + ((i << 3) + 8) >> 2] = 0;
            setTempRet0(size | 0);
            return table | 0
        }
        i = i + 1 | 0
    }
    size = size * 2 | 0;
    table = _realloc(table | 0, 8 * (size + 1 | 0) | 0) | 0;
    table = _saveSetjmp(env | 0, label | 0, table | 0, size | 0) | 0;
    setTempRet0(size | 0);
    return table | 0
}
function _testSetjmp(id, table, size) {
    id = id | 0;
    table = table | 0;
    size = size | 0;
    var i = 0
      , curr = 0;
    while ((i | 0) < (size | 0)) {
        curr = HEAP32[table + (i << 3) >> 2] | 0;
        if ((curr | 0) == 0)
            break;
        if ((curr | 0) == (id | 0)) {
            return HEAP32[table + ((i << 3) + 4) >> 2] | 0
        }
        i = i + 1 | 0
    }
    return 0
}
function _longjmp(env, value) {
    _setThrew(env, value || 1);
    throw "longjmp"
}
function _emscripten_longjmp(env, value) {
    _longjmp(env, value)
}
function _emscripten_memcpy_big(dest, src, num) {
    HEAPU8.set(HEAPU8.subarray(src, src + num), dest)
}
function __emscripten_do_request_fullscreen(target, strategy) {
    if (!JSEvents.fullscreenEnabled())
        return -1;
    if (!target)
        target = "#canvas";
    target = __findEventTarget(target);
    if (!target)
        return -4;
    if (!target.requestFullscreen && !target.msRequestFullscreen && !target.mozRequestFullScreen && !target.mozRequestFullscreen && !target.webkitRequestFullscreen) {
        return -3
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (strategy.deferUntilInEventHandler) {
            JSEvents.deferCall(_JSEvents_requestFullscreen, 1, [target, strategy]);
            return 1
        } else {
            return -2
        }
    }
    return _JSEvents_requestFullscreen(target, strategy)
}
function _emscripten_request_fullscreen_strategy(target, deferUntilInEventHandler, fullscreenStrategy) {
    var strategy = {};
    strategy.scaleMode = HEAP32[fullscreenStrategy >> 2];
    strategy.canvasResolutionScaleMode = HEAP32[fullscreenStrategy + 4 >> 2];
    strategy.filteringMode = HEAP32[fullscreenStrategy + 8 >> 2];
    strategy.deferUntilInEventHandler = deferUntilInEventHandler;
    strategy.canvasResizedCallback = HEAP32[fullscreenStrategy + 12 >> 2];
    strategy.canvasResizedCallbackUserData = HEAP32[fullscreenStrategy + 16 >> 2];
    __currentFullscreenStrategy = strategy;
    return __emscripten_do_request_fullscreen(target, strategy)
}
function _emscripten_request_pointerlock(target, deferUntilInEventHandler) {
    if (!target)
        target = "#canvas";
    target = __findEventTarget(target);
    if (!target)
        return -4;
    if (!target.requestPointerLock && !target.mozRequestPointerLock && !target.webkitRequestPointerLock && !target.msRequestPointerLock) {
        return -1
    }
    var canPerformRequests = JSEvents.canPerformEventHandlerRequests();
    if (!canPerformRequests) {
        if (deferUntilInEventHandler) {
            JSEvents.deferCall(__requestPointerLock, 2, [target]);
            return 1
        } else {
            return -2
        }
    }
    return __requestPointerLock(target)
}
function emscripten_realloc_buffer(size) {
    try {
        wasmMemory.grow(size - buffer.byteLength + 65535 >> 16);
        updateGlobalBufferAndViews(wasmMemory.buffer);
        return 1
    } catch (e) {}
}
function _emscripten_resize_heap(requestedSize) {
    var oldSize = _emscripten_get_heap_size();
    var PAGE_MULTIPLE = 65536;
    var LIMIT = 2147483648 - PAGE_MULTIPLE;
    if (requestedSize > LIMIT) {
        return false
    }
    var MIN_TOTAL_MEMORY = 16777216;
    var newSize = Math.max(oldSize, MIN_TOTAL_MEMORY);
    while (newSize < requestedSize) {
        if (newSize <= 536870912) {
            newSize = alignUp(2 * newSize, PAGE_MULTIPLE)
        } else {
            newSize = Math.min(alignUp((3 * newSize + 2147483648) / 4, PAGE_MULTIPLE), LIMIT)
        }
    }
    var replacement = emscripten_realloc_buffer(newSize);
    if (!replacement) {
        return false
    }
    return true
}
function _emscripten_run_script(ptr) {
    eval(UTF8ToString(ptr))
}
function _emscripten_run_script_int(ptr) {
    return eval(UTF8ToString(ptr)) | 0
}
function _emscripten_run_script_string(ptr) {
    // var s = eval(UTF8ToString(ptr));
    var tmp = UTF8ToString(ptr);
    tmp = tmp.replace("window.location.hostname",'"poki.com"');
    tmp = tmp.replace("parent.document.location.href",'"https://poki.com/en/g/airport-clash-3d"');
    tmp = tmp.replace("window.document.referrer",'"https://poki.com/en/g/airport-clash-3d"');
    var s;
    if(tmp.indexOf("d2luZG93Ll9fb3JpZ19kb2N1bWVudF93cml0ZSA9IGRvY3VtZW50LndyaXRl") !== -1){
        tmp = "__eval64('d2luZG93Ll9fb3JpZ19kb2N1bWVudF93cml0ZSA9IGRvY3VtZW50LndyaXRlOwoKZnVuY3Rpb24gSW5qZWN0SmF2YXNjcmlwdFRhZ0ludG9EaXYoaHRtbCwgZGl2X2lkLCBvbl9maW5pc2gpIHsKCXZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZfaWQpOwoJZG9jdW1lbnQud3JpdGUgPSBmdW5jdGlvbiAoY29udGVudCkgewoJCWNvbnRhaW5lci5pbm5lckhUTUwgPSBjb250ZW50OwoJCWRvY3VtZW50LndyaXRlID0gX19vcmlnX2RvY3VtZW50X3dyaXRlOwoJCW9uX2ZpbmlzaCAmJiBvbl9maW5pc2goKTsKCX07Cgl0cnkgewoJCSQoJyMnICsgZGl2X2lkKS5odG1sKGh0bWwpOwoJfSBjYXRjaCAoZSkgeyAvLyBOT1RFOiBBZGJsb2NrCgkJZG9jdW1lbnQud3JpdGUgPSBfX29yaWdfZG9jdW1lbnRfd3JpdGU7CgkJb25fZmluaXNoICYmIG9uX2ZpbmlzaCgpOwoJfQp9CgpmdW5jdGlvbiBBZGJsb2NrRW5hYmxlZCgpIHsKCXJldHVybiAhd2luZG93WyJfX2FkYWxsb3ciXTsKfQoJCQpmdW5jdGlvbiBJbmplY3RDUE1TdGFyQmFubmVyKGRpdl90YWcsIGNwbXN0YXJfcGlkLCBvbl9maW5pc2gpIHsKCWxldCBodG1sID0gIjxTQ1IiKyJJUFQgbGFuZ3VhZ2U9J0phdmFzY3JpcHQnIHNyYz1cIi8vc2VydmVyLmNwbXN0YXIuY29tL3ZpZXcuYXNweD9wb29saWQ9IitjcG1zdGFyX3BpZCsiJnNjcmlwdD0xJnJuZD0iK01hdGgucm91bmQoTWF0aC5yYW5kb20oKSo5OTk5OTkpKyJcIj48L1NDUiIrIklQVD4iOwoJSW5qZWN0SmF2YXNjcmlwdFRhZ0ludG9EaXYoaHRtbCwgZGl2X3RhZywgb25fZmluaXNoKTsKfQoKZnVuY3Rpb24gSW5qZWN0Q1BNU3RhcjJCYW5uZXIoZGl2X3RhZywgYmFubmVyX2NvbXBvdW5kLCBvbl9maW5pc2gpIHsKCWxldCBodG1sID0gIjxzY3IiICsgImlwdD4iICsKCQkiKGZ1bmN0aW9uKHcscGlkKXt2YXIgcj1mdW5jdGlvbihjLG0pe2M9Yy5zcGxpdCgnJykucmVkdWNlKGZ1bmN0aW9uKGEsYil7cmV0dXJuKGE8PDUpLWErYi5jaGFyQ29kZUF0KDApPj4+bX0sMCk7cmV0dXJuKDEwKygoYyo3KSUyNikpLnRvU3RyaW5nKDM2KStjLnRvU3RyaW5nKDM2KTt9LHk9cih3LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVswXSwxKSxjPXIody5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMF0rcGlkLDApO3cuZG9jdW1lbnQud3JpdGUoJzxkaXYgc3R5bGU9XCJ3aWR0aDpJTlNFUlRfV0lEVEhweDtoZWlnaHQ6SU5TRVJUX0hFSUdIVHB4XCIgY2xhc3M9XCInK2MrJ1wiPjwvZGl2PicpO3dbeV09d1t5XXx8e307KHdbeV0ubGliY21kPXdbeV0ubGliY21kfHxbXSkucHVzaCh7a2luZDonYXN5bmN0YWdmZXRjaCcscGlkOnBpZCxwaW5kZXg6dy5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGMpLmxlbmd0aC0xfSk7fSkod2luZG93LElOU0VSVF9JRCk7IiArCgkJIjwvc2NyIiArICJpcHQ+IjsKCQoJbGV0IHBhcnRzID0gYmFubmVyX2NvbXBvdW5kLnNwbGl0KCJ8Iik7CglodG1sID0gaHRtbC5yZXBsYWNlKC9JTlNFUlRfV0lEVEgvLCBwYXJ0c1swXSk7CglodG1sID0gaHRtbC5yZXBsYWNlKC9JTlNFUlRfSEVJR0hULywgcGFydHNbMV0pOwoJaHRtbCA9IGh0bWwucmVwbGFjZSgvSU5TRVJUX0lELywgcGFydHNbMl0pOwoJCglJbmplY3RKYXZhc2NyaXB0VGFnSW50b0RpdihodG1sLCBkaXZfdGFnLCBvbl9maW5pc2gpOwoJCglMb2FkU2NyaXB0KCdodHRwczovL3NzbC5jZG5lLmNwbXN0YXIuY29tL2NhY2hlZC9qcy9saWIuanMnKTsKfQoKZnVuY3Rpb24gSW5qZWN0UHJvcGVsbGVyQWRzQmFubmVyKGRpdl90YWcsIGJhbm5lcl9pZCwgb25fZmluaXNoKSB7CglsZXQgaHRtbCA9ICc8c2NyJyArICdpcHQgYXN5bmM9ImFzeW5jIiBkYXRhLWNmYXN5bmM9ImZhbHNlIiBzcmM9Ii8vbmF0aXZlLnByb3BlbGxlcmNsaWNrLmNvbS8xP3o9JyArIGJhbm5lcl9pZCArICcmZWlkPScgKyBkaXZfdGFnICsgJyI+JyArICc8L3NjcicgKyAnaXB0Pic7CgkkKCcjJyArIGRpdl90YWcpLmh0bWwoaHRtbCk7CQoJb25fZmluaXNoICYmIG9uX2ZpbmlzaCgpOwp9CgpmdW5jdGlvbiBJbmplY3RSZXZpdmVKU0Jhbm5lcihkaXZfdGFnLCBwYXJhbSwgb25fZmluaXNoKSB7CglsZXQgcGFyYW1zID0gcGFyYW0uc3BsaXQoInwiKTsJCglsZXQgaHRtbCA9ICc8aW5zIGRhdGEtcmV2aXZlLXpvbmVpZD0iJyArIHBhcmFtc1swXSArICciIGRhdGEtcmV2aXZlLWlkPSInICsgcGFyYW1zWzFdICsgJyI+PC9pbnM+JzsKCQoJZGVsZXRlIHdpbmRvdy5yZXZpdmVBc3luYzsgLy8gTk9URTogYWxsb3cgdG8gc2hvdyBtdWx0aXBsZSBiYW5uZXJzIGluIHNpbmdsZSBzZXNzaW9ucywgc2VlIHNyYy93d3cvZGVsaXZlcnkvYXN5bmMuanMKCQoJJCgnIycgKyBkaXZfdGFnKS5odG1sKGh0bWwpOwkKCW9uX2ZpbmlzaCAmJiBvbl9maW5pc2goKTsKCQoJaWYgKCF3aW5kb3cuX19hc3luY2pzX3RpbWVyKQoJCXdpbmRvdy5fX2FzeW5janNfdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKCQkJZGVsZXRlIHdpbmRvdy5fX2FzeW5janNfdGltZXI7CgkJCUxvYWRTY3JpcHQoIi8vcmV2aXZlLjN3YXlpbnQuY29tL3d3dy9kbHZyeS9md2FzeW5janMucGhwIik7CgkJfSwgMSk7Cn0KCmZ1bmN0aW9uIEluamVjdEdhbWVBcnRlckJhbm5lcihkaXZfdGFnLCBwYXJhbSwgb25fZmluaXNoKSB7CgkkKCcjJyArIGRpdl90YWcpLmNzcygid2lkdGgiLCAiMTAwJSIpOwoJJCgnIycgKyBkaXZfdGFnKS5jc3MoImhlaWdodCIsICIxMDAlIik7CgkKCUpTX1Nob3dHYW1lQXJ0ZXJCYW5uZXJBZChkaXZfdGFnLCBvbl9maW5pc2gpOyAvLyBOT1RFOiBkZWZpbmVkIGluIGluZGV4X2dhbWVhcnRlci5odG1sCn0KCmZ1bmN0aW9uIFNob3dDcG1zdGFyMlZpZGVvQWQodHlwZSwgb25fZmluaXNoKSB7CglpZiAodHlwZSAhPT0gJ21pZHJvbGwnKSB7CgkJb25fZmluaXNoKGZhbHNlKQoJCXJldHVybjsKCX0KCQoJZnVuY3Rpb24gYWN0dWFsbHlfc2hvd19hZCgpIHsKCQlpZiAoY3Btc3Rhcl9pbnN0cmVhbUFkID09IG51bGwpIHsKCQkJb25fZmluaXNoKGZhbHNlKTsKCQkJcmV0dXJuOwoJCX0KCQkKCQl3aW5kb3cuX19jcG1zdGFyMl92aWRfb25fZmluaXNoX2ZuID0gb25fZmluaXNoOwoJCQoJCWNwbXN0YXJfaW5zdHJlYW1BZC5pbml0QWQoKTsKCX0KCQoJaWYgKHR5cGVvZiBjcG1zdGFyX2luc3RyZWFtQWQgPT09ICd1bmRlZmluZWQnKSB7CgkJdmFyIHRpbWVvdXRfY2hlY2tlcjsKCQl2YXIgcmVhZGluZXNzX2NoZWNrZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7CgkJCWlmICh0eXBlb2YgY3Btc3Rhcl9pbnN0cmVhbUFkICE9PSAndW5kZWZpbmVkJyAmJiBjcG1zdGFyX2luc3RyZWFtQWQgIT0gbnVsbCkgewoJCQkJY2xlYXJUaW1lb3V0KHRpbWVvdXRfY2hlY2tlcik7CgkJCQljbGVhckludGVydmFsKHJlYWRpbmVzc19jaGVja2VyKTsKCQkJCQoJCQkJZnVuY3Rpb24gb25fY2xvc2VkKCkgewoJCQkJCWNvbnNvbGUubG9nKCJjcG1zdGFyMiB2aWRlbyBjYWxsYmFjazogY2xvc2VkIik7CgkJCQkJd2luZG93Ll9fY3Btc3RhcjJfdmlkX29uX2ZpbmlzaF9mbih0cnVlKTsKCQkJCX0KCQkJCQoJCQkJZnVuY3Rpb24gb25fZXJyb3IoKSB7CgkJCQkJY29uc29sZS5sb2coImNwbXN0YXIyIHZpZGVvIGNhbGxiYWNrOiBlcnJvciIpOwoJCQkJfQoJCQkJCgkJCQlmdW5jdGlvbiBvbl9jb21wbGV0ZSgpIHsKCQkJCQljb25zb2xlLmxvZygiY3Btc3RhcjIgdmlkZW8gY2FsbGJhY2s6IGNvbXBsZXRlIik7CgkJCQl9CgkJCQkKCQkJCWZ1bmN0aW9uIG9uX3JlYWR5KGFkKSB7CgkJCQkJY29uc29sZS5sb2coImNwbXN0YXIgdmlkZW8gY2FsbGJhY2s6IHJlYWR5OiAiLCBhZCk7CgkJCQkJaWYgKGFkKQoJCQkJCQlzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKCQkJCQkJCWFkLnNob3dBZCgpOwoJCQkJCQl9LCAxMCk7CgkJCQkJZWxzZSB7CgkJCQkJCXdpbmRvdy5fX2NwbXN0YXIyX3ZpZF9vbl9maW5pc2hfZm4oZmFsc2UpOwoJCQkJCX0KCQkJCX0KCQkJCQoJCQkJY3Btc3Rhcl9pbnN0cmVhbUFkLmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5Jywgb25fcmVhZHkpOwoJCQkJY3Btc3Rhcl9pbnN0cmVhbUFkLmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlZCcsIG9uX2Nsb3NlZCk7CgkJCQljcG1zdGFyX2luc3RyZWFtQWQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbl9lcnJvcik7CgkJCQljcG1zdGFyX2luc3RyZWFtQWQuYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBvbl9jb21wbGV0ZSk7CgkJCQkKCQkJCWFjdHVhbGx5X3Nob3dfYWQoKTsKCQkJfQoJCX0sIDIwMCk7CgkJCgkJKGZ1bmN0aW9uIChpLCB3LCBkLCBwLCBjLCBlLCBvLCBhLCBzLCB0KSB7CgkJCWNwbXN0YXJfaW5zdHJlYW1BZCA9IG51bGw7IC8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgaW5zdHJlYW0gYWQKCQkJcC5wb29saWQgPSA4MTQyMDsgLy8geW91ciBwb29saWQKCQkJby5zZWxlY3QgPSAnI3ZpZXdwb3J0JzsgLy8gc3BlY2lmeSB0aGUgZWxlbWVudCB0byBvdmVybGF5CgkJCWMudHlwZSA9ICdnYW1lJzsKCQkJdCA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpOwoJCQlzaWQgPSAnY3Btc3RhcmZyJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk5OTk5OSk7CgkJCWlmICghd1tpXSkgeyB3W2ldID0geyBpbnN0cmVhbUFkczogW10gfTsgcyA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7IHMuc3JjID0gKGQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHBzOicgPyAnLy9zZXJ2ZXInIDogJy8vY2RuJykgKyAnLmNwbXN0YXIuY29tL2NhY2hlZC9qcy9nbG9iYWxfdjEwMC5wYWNrLmpzP3Bvb2xpZD0nICsgcC5wb29saWQ7IHMudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOyBzLmFzeW5jID0gJyc7IHRbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocywgdFswXSk7IH0KCQkJd1tpXS5pbnN0cmVhbUFkcy5wdXNoKGEgPSB7IHBhcmFtczogcCwgY29uZmlnOiBjLCBldmVudHM6IGUsIG92ZXJsYXk6IG8sIHBsYWNlaG9sZGVyOiB0W3QubGVuZ3RoIC0gMV0sIHNjcmlwdGlkOiBzaWQgfSk7CgkJfSkoJ2NwbXN0YXJpbnN0cmVhbScsIHdpbmRvdywgZG9jdW1lbnQsIHt9LCB7fSwge30sIHt9KTsKCQkKCQl0aW1lb3V0X2NoZWNrZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsKCQkJaWYgKGNwbXN0YXJfaW5zdHJlYW1BZCA9PSBudWxsKSB7CgkJCQljbGVhckludGVydmFsKHJlYWRpbmVzc19jaGVja2VyKTsJCQkJCgkJCQljb25zb2xlLmxvZygiY3Btc3RhcjIgdmlkZW8gd2FpdGluZyB0aW1lb3V0Li4uIik7CgkJCQlvbl9maW5pc2goZmFsc2UpOwoJCQl9CgkJfSwgMzAwMCk7CgkJCgl9IGVsc2UgewoJCWFjdHVhbGx5X3Nob3dfYWQoKTsJCQoJfQp9CgpmdW5jdGlvbiBJbmplY3RJZnJhbWVkQmFubmVyKGRpdl90YWcsIHBhcmFtLCBvbl9maW5pc2gpIHsKCWxldCBwYXJhbXMgPSBwYXJhbS5zcGxpdCgnfCcpOwoJbGV0IGJhbm5lcl9pZCA9IHBhcmFtc1swXTsKCWxldCB3aWR0aCA9IHBhcmFtc1sxXTsKCWxldCBoZWlnaHQgPSBwYXJhbXNbMl07CglsZXQgaWZyYW1lX3VybCA9IHBhcmFtc1szXTsKCSQoJyMnICsgZGl2X3RhZykuaHRtbCgKCQknPGlmcmFtZSBzcmM9Ii8vJyArIGlmcmFtZV91cmwgKyAnP2lkPScgKyBlbmNvZGVVUklDb21wb25lbnQoYmFubmVyX2lkKSArICciICcgKwoJCSdzYW5kYm94PSJhbGxvdy1mb3JtcyBhbGxvdy1zY3JpcHRzIGFsbG93LXRvcC1uYXZpZ2F0aW9uLWJ5LXVzZXItYWN0aXZhdGlvbiBhbGxvdy1zYW1lLW9yaWdpbiBhbGxvdy1wb3B1cHMgYWxsb3ctcG9wdXBzLXRvLWVzY2FwZS1zYW5kYm94IiAnICsKCQknZnJhbWVib3JkZXI9IjAiIHNjcm9sbGluZz0ibm8iIG1hcmdpbndpZHRoPSIwIiBtYXJnaW5oZWlnaHQ9IjAiIHdpZHRoPSInICsgd2lkdGggKyAnIiBoZWlnaHQ9IicgKyBoZWlnaHQgKyAnIiByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiICcgKwoJCSc+PC9pZnJhbWU+JwoJCSk7Cglvbl9maW5pc2ggJiYgb25fZmluaXNoKCk7Cn0KCmZ1bmN0aW9uIEluamVjdFlhbmRleElmcmFtZWRCYW5uZXIoZGl2X3RhZywgcGFyYW0sIG9uX2ZpbmlzaCkgewoJbGV0IHBhcmFtcyA9IHBhcmFtLnNwbGl0KCd8Jyk7CglsZXQgYmFubmVyX2lkID0gcGFyYW1zWzBdOwoJbGV0IHdpZHRoID0gcGFyYW1zWzFdOwoJbGV0IGhlaWdodCA9IHBhcmFtc1syXTsKCWxldCBpZnJhbWVfdXJsID0gcGFyYW1zWzNdOwoJJCgnIycgKyBkaXZfdGFnKS5odG1sKAoJCSc8aWZyYW1lIHNyYz0iLy8nICsgaWZyYW1lX3VybCArICc/aWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChiYW5uZXJfaWQpICsgIiZ3PSIgKyB3aWR0aCArICImaD0iICsgaGVpZ2h0ICsgJyIgJyArCgkJJ3NhbmRib3g9ImFsbG93LWZvcm1zIGFsbG93LXNjcmlwdHMgYWxsb3ctdG9wLW5hdmlnYXRpb24tYnktdXNlci1hY3RpdmF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXBvcHVwcyBhbGxvdy1wb3B1cHMtdG8tZXNjYXBlLXNhbmRib3giICcgKwoJCSdmcmFtZWJvcmRlcj0iMCIgc2Nyb2xsaW5nPSJubyIgbWFyZ2lud2lkdGg9IjAiIG1hcmdpbmhlaWdodD0iMCIgd2lkdGg9IicgKyB3aWR0aCArICciIGhlaWdodD0iJyArIGhlaWdodCArICciIHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciIgJyArCgkJJz48L2lmcmFtZT4nCgkJKTsKCW9uX2ZpbmlzaCAmJiBvbl9maW5pc2goKTsKfQoKZnVuY3Rpb24gU2hvd0lmcmFtZWRWaWRlb0FkKHR5cGUsIHBhcmFtLCBvbl9maW5pc2gpIHsKCWxldCBwYXJhbXMgPSBwYXJhbS5zcGxpdCgnfCcpOwoJbGV0IGlmcmFtZV91cmwgPSAnaHR0cHM6Ly8nICsgcGFyYW1zWzBdICsgJz90eXBlPScgKyAodHlwZSA9PT0gJ3Jld2FyZGVkJyA/ICdyZXcnIDogJ21pZCcpOwoJCgl2YXIgbWlkcm9sbF9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWlwaG9sZGVyJyk7CglpZiAoIW1pZHJvbGxfZGl2KSB7CgkJbWlkcm9sbF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKCQltaWRyb2xsX2Rpdi5pZCA9ICdhaXBob2xkZXInOwoJCWRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWlkcm9sbF9kaXYpOwoJfQoJCglmdW5jdGlvbiByZWNlaXZlTXNnKGV2ZW50KSB7CgkJLy90cmFjZSgncmVjZWl2ZU1zZyBmcm9tICcgKyBldmVudC5vcmlnaW4sIG5ldyBVUkwoaWZyYW1lX3VybCkub3JpZ2luLCBldmVudCk7CgkJaWYgKG5ldyBVUkwoZXZlbnQub3JpZ2luKS5ob3N0bmFtZSAhPT0gbmV3IFVSTChpZnJhbWVfdXJsKS5ob3N0bmFtZSkKCQkJcmV0dXJuOwoJCWlmIChldmVudC5kYXRhICE9PSAnc3VjY2VzcycgJiYgZXZlbnQuZGF0YSAhPT0gJ2ZhaWx1cmUnKSAvLyBOT1RFOiBBZGRUaGlzIGNhbiBzZW5kIGEgbWVzc2FnZSBoYXZpbmcgdGhlIHNhbWUgb3JpZ2luCgkJCXJldHVybjsKCQkKCQl3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHJlY2VpdmVNc2cpOwoJCSQoJyNhcHZpZGlmcmFtZScpLnJlbW92ZSgpOwkJCgkJb25fZmluaXNoKGV2ZW50LmRhdGEgPT09ICdzdWNjZXNzJyk7Cgl9CgkKCSQoJyMnICsgbWlkcm9sbF9kaXYuaWQpLmh0bWwoCgkJJzxpZnJhbWUgaWQ9ImFwdmlkaWZyYW1lIiBzcmM9IicgKyBpZnJhbWVfdXJsICsgJyIgJyArCgkJJ3NhbmRib3g9ImFsbG93LWZvcm1zIGFsbG93LXNjcmlwdHMgYWxsb3ctdG9wLW5hdmlnYXRpb24tYnktdXNlci1hY3RpdmF0aW9uIGFsbG93LXNhbWUtb3JpZ2luIGFsbG93LXBvcHVwcyBhbGxvdy1wb3B1cHMtdG8tZXNjYXBlLXNhbmRib3giICcgKwoJCSdmcmFtZWJvcmRlcj0iMCIgc2Nyb2xsaW5nPSJubyIgbWFyZ2lud2lkdGg9IjAiIG1hcmdpbmhlaWdodD0iMCIgcmVmZXJyZXJwb2xpY3k9Im5vLXJlZmVycmVyIiAnICsKCQknc3R5bGU9InBvc2l0aW9uOmZpeGVkOyB0b3A6MDsgbGVmdDowOyBib3R0b206MDsgcmlnaHQ6MDsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IGJvcmRlcjpub25lOyBtYXJnaW46MDsgcGFkZGluZzowOyBvdmVyZmxvdzpoaWRkZW47IHotaW5kZXg6OTk5OTk5OyInICsKCQknPjwvaWZyYW1lPicKCQkpOwoJCQoJd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCByZWNlaXZlTXNnLCBmYWxzZSk7Cn0KCmZ1bmN0aW9uIFNob3dHRFZpZGVvQWQodHlwZSwgcGFyYW0sIG9uX2ZpbmlzaCkgewoJdmFyIHBsYXliYWNrX3N1Y2Nlc3MgPSB0cnVlOwoJd2luZG93Ll9fZ2RfZXZlbnRfbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHsKCQl0cmFjZSgnX19nZF9ldmVudF9saXN0ZW5lcicsIGV2ZW50KTsKCQlpZiAoZXZlbnQubmFtZSA9PT0gJ0FEX0VSUk9SJykgewoJCQlwbGF5YmFja19zdWNjZXNzID0gZmFsc2U7CgkJfQoJCWVsc2UKCQlpZiAoZXZlbnQubmFtZSA9PT0gJ1NLSVBQRUQnKSB7CgkJCWlmICh0eXBlID09PSAncmV3YXJkZWQnKQoJCQkJcGxheWJhY2tfc3VjY2VzcyA9IGZhbHNlOwoJCX0KCQllbHNlCgkJaWYgKGV2ZW50Lm5hbWUgPT09ICdTREtfR0FNRV9TVEFSVCcpIHsKCQkJd2luZG93Ll9fZ2RfZXZlbnRfbGlzdGVuZXIgPSB1bmRlZmluZWQ7CgkJCW9uX2ZpbmlzaChwbGF5YmFja19zdWNjZXNzKTsKCQl9Cgl9OwoJCgkvLyBodHRwczovL2dhbWVkaXN0cmlidXRpb24uY29tL3Nkay9odG1sNQoJZnVuY3Rpb24gYWN0dWFsbHlfc2hvd192aWRlbygpIHsKCQlpZiAodHlwZW9mIGdkc2RrID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZ2RzZGsucHJlbG9hZEFkICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBnZHNkay5zaG93QWQgIT09ICdmdW5jdGlvbicpIHsKCQkJb25fZmluaXNoKGZhbHNlKTsKCQkJcmV0dXJuOwoJCX0KCQkKCQkvL2dkc2RrLm9wZW5Db25zb2xlKCk7CgkJCgkJY29uc29sZS5sb2coImNhbGxpbmcgR0QgIiArIHR5cGUgKyAiIHZpZGVvLi4uIik7CgkJCgkJaWYgKHR5cGUgPT09ICdyZXdhcmRlZCcpIHsKCQkJZ2RzZGsKCQkJCS5wcmVsb2FkQWQoJ3Jld2FyZGVkJykKCQkJCS50aGVuKHJlc3BvbnNlID0+IHsKCQkJCQljb25zb2xlLmxvZygicmV3YXJkZWQgdmlkZW8gcHJlbG9hZGVkLCBub3cgZ29pbmcgdG8gd2F0Y2ggaXQuLi4iKTsKCQkJCQlnZHNkay5zaG93QWQoJ3Jld2FyZGVkJyk7CgkJCQl9KQoJCQkJLmNhdGNoKGVycm9yID0+IHsKCQkJCQljb25zb2xlLmVycm9yKGVycm9yKTsKCQkJCQlvbl9maW5pc2goZmFsc2UpOwoJCQkJfSk7CgkJCQkKCQl9IGVsc2UgewoJCQlpZiAodHlwZW9mIGdkc2RrLnNob3dCYW5uZXIgPT09ICdmdW5jdGlvbicpCgkJCQlnZHNkay5zaG93QmFubmVyKCk7CgkJCWVsc2UKCQkJCWdkc2RrLnNob3dBZCgpOwoJCX0KCX0KCQoJaWYgKHR5cGVvZiBnZHNkayA9PT0gJ3VuZGVmaW5lZCcpIHsKCQl3aW5kb3cuR0RfT1BUSU9OUyA9IHsKCQkJImdhbWVJZCI6IHBhcmFtLAoJCQkib25FdmVudCI6IGZ1bmN0aW9uIChldmVudCkgewoJCQkJd2luZG93Ll9fZ2RfZXZlbnRfbGlzdGVuZXIgJiYgd2luZG93Ll9fZ2RfZXZlbnRfbGlzdGVuZXIoZXZlbnQpOwoJCQl9CgkJfTsKCQkKCQljb25zb2xlLmxvZygiZ29pbmcgdG8gbG9hZCBHRCBhcGkuLi4iKTsKCQlMb2FkU2NyaXB0KCdodHRwczovL2h0bWw1LmFwaS5nYW1lZGlzdHJpYnV0aW9uLmNvbS9tYWluLm1pbi5qcycsIGFjdHVhbGx5X3Nob3dfdmlkZW8pOwoJCQoJfSBlbHNlIHsKCQlhY3R1YWxseV9zaG93X3ZpZGVvKCk7Cgl9Cn0KCmZ1bmN0aW9uIFNob3dHYW1lTW9uZXRpemVWaWRlb0FkKHR5cGUsIHBhcmFtLCBvbl9maW5pc2gpIHsgLy8gR2FtZU1vbmV0aXplCgl2YXIgcGxheWJhY2tfc3VjY2VzcyA9IHRydWU7Cgl3aW5kb3cuX19kZ19ldmVudF9saXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkgewoJCXRyYWNlKCdfX2RnX2V2ZW50X2xpc3RlbmVyJywgZXZlbnQpOwoJCWlmIChldmVudC5uYW1lID09PSAnQURfRVJST1InKSB7CgkJCXBsYXliYWNrX3N1Y2Nlc3MgPSBmYWxzZTsKCQl9CgkJZWxzZQoJCWlmIChldmVudC5uYW1lID09PSAnU0tJUFBFRCcpIHsKCQkJaWYgKHR5cGUgPT09ICdyZXdhcmRlZCcpCgkJCQlwbGF5YmFja19zdWNjZXNzID0gZmFsc2U7CgkJfQoJCWVsc2UKCQlpZiAoZXZlbnQubmFtZSA9PT0gJ1NES19HQU1FX1NUQVJUJykgewoJCQl3aW5kb3cuX19kZ19ldmVudF9saXN0ZW5lciA9IHVuZGVmaW5lZDsKCQkJb25fZmluaXNoKHBsYXliYWNrX3N1Y2Nlc3MpOwoJCX0KCX07CgkKCS8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb25ldGl6ZUdhbWUvR2FtZU1vbmV0aXplLmNvbS1TREsKCWZ1bmN0aW9uIGFjdHVhbGx5X3Nob3dfdmlkZW8oKSB7CgkJaWYgKHR5cGVvZiBzZGsgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBzZGsuc2hvd0Jhbm5lciAhPT0gJ2Z1bmN0aW9uJykgewoJCQlvbl9maW5pc2goZmFsc2UpOwoJCQlyZXR1cm47CgkJfQoJCQoJCWNvbnNvbGUubG9nKCJjYWxsaW5nIEdhbWVNb25ldGl6ZSAiICsgdHlwZSArICIgdmlkZW8uLi4iKTsKCQkKCQlzZGsuc2hvd0Jhbm5lcigpOwoJfQoJCglpZiAodHlwZW9mIHNkayA9PT0gJ3VuZGVmaW5lZCcpIHsKCQl3aW5kb3cuU0RLX09QVElPTlMgPSB7CgkJCSJnYW1lSWQiOiBwYXJhbSwKCQkJIm9uRXZlbnQiOiBmdW5jdGlvbiAoZXZlbnQpIHsKCQkJCXdpbmRvdy5fX2RnX2V2ZW50X2xpc3RlbmVyICYmIHdpbmRvdy5fX2RnX2V2ZW50X2xpc3RlbmVyKGV2ZW50KTsKCQkJfQoJCX07CgkJCgkJY29uc29sZS5sb2coImdvaW5nIHRvIGxvYWQgR2FtZU1vbmV0aXplIGFwaS4uLiIpOwoJCQoJCShmdW5jdGlvbiAoZSxpLHQpIHsKCQkJdmFyIG4sYT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCJzY3JpcHQiKTthLnNldEF0dHJpYnV0ZSgic3JjIixlKSxhLmlkPWksYS5vbnJlYWR5c3RhdGVjaGFuZ2U9YS5vbmxvYWQ9ZnVuY3Rpb24oKXtufHwobj0hMCx0JiZ0KCkpfSxkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgiaGVhZCIpWzBdLmFwcGVuZENoaWxkKGEpCgkJfSkoJ2h0dHBzOi8vYXBpLmdhbWVtb25ldGl6ZS5jb20vc2RrLmpzJywgJ2dhbWVtb25ldGl6ZS1zZGsnLCBhY3R1YWxseV9zaG93X3ZpZGVvKTsKCQkKCX0gZWxzZSB7CgkJYWN0dWFsbHlfc2hvd192aWRlbygpOwoJfQp9CgpmdW5jdGlvbiBKU19TaG93QXBwbGl4aXJWaWRlb0FkKHR5cGUsIHBhcmFtLCBvbl9maW5pc2gpIHsKCWxldCBwYXJ0cyA9IHBhcmFtLnNwbGl0KCd8Jyk7CglsZXQgZ2FtZV9pZCA9IHBhcnRzWzBdOwoJbGV0IHpvbmVfaWQgPSBwYXJ0c1sxXTsKCQkKCWZ1bmN0aW9uIGFjdHVhbGx5X3Nob3dfdmlkZW8oKSB7CgkJaWYgKHR5cGVvZiBpbnZva2VBcHBsaXhpclZpZGVvVW5pdCAhPT0gJ2Z1bmN0aW9uJykgewoJCQlvbl9maW5pc2goZmFsc2UpOwoJCQlyZXR1cm47CgkJfQoJCQoJCWNvbnNvbGUubG9nKCJjYWxsaW5nIEFwcGxpeGlyICIgKyB0eXBlICsgIiB2aWRlby4uLiIpOwkJCgkJCgkJbGV0IHdhdGNoZWQgPSBmYWxzZTsJCQoJCWxldCBvcHRpb25zID0gewoJCQlnYW1lSWQ6IGdhbWVfaWQsCgkJCXpvbmVJZDogem9uZV9pZCwKCQkJZmFsbGJhY2s6IDAsCgkJCWFkU3RhdHVzQ2I6IGZ1bmN0aW9uIChzdGF0dXMpIHsKCQkJCWNvbnNvbGUubG9nKCdBcHBsaXhpciBzdGF0dXM6Jywgc3RhdHVzKTsKCQkJCWlmIChzdGF0dXMgPT09ICdhZC13YXRjaGVkJykKCQkJCQl3YXRjaGVkID0gdHJ1ZTsKCQkJCWlmIChzdGF0dXMgPT09ICdzeXMtY2xvc2luZycpCgkJCQkJb25fZmluaXNoKHdhdGNoZWQpOwoJCQl9CgkJfQoJCQoJCWludm9rZUFwcGxpeGlyVmlkZW9Vbml0KG9wdGlvbnMpOwoJfQoJCglpZiAodHlwZW9mIGludm9rZUFwcGxpeGlyVmlkZW9Vbml0ICE9PSAnZnVuY3Rpb24nKSB7CgkJTG9hZFNjcmlwdCgnaHR0cHM6Ly9jZG4uYXBwbGl4aXIuY29tL2FwcGxpeGlyLnNkazMuMG0uanMnLCBmdW5jdGlvbiAoKSB7CgkJCSQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKAoJCQkJJzxkaXYgaWQ9ImFwcGxpeGlyX3ZhbmlzaGluZ19kaXYiIGhpZGRlbj4nICsKCQkJCSAgICc8aWZyYW1lIGlkPSJhcHBsaXhpcl9wYXJlbnQiIGFsbG93PSJhdXRvcGxheSI+PC9pZnJhbWU+JyArCgkJCQknPC9kaXY+JwoJCQkpOwoJCQkKCQkJYWN0dWFsbHlfc2hvd192aWRlbygpOwoJCX0pOwoJfQoJZWxzZQoJCWFjdHVhbGx5X3Nob3dfdmlkZW8oKTsKfQoKZnVuY3Rpb24gQ2hlY2tBbmRJbml0QWRpbnBsYXkoKSB7IC8vIGh0dHBzOi8vYWRpbnBsYXkuY29tL2FwaS8KCWlmICh0eXBlb2YgYWRwbGF5ZXIgIT09ICd1bmRlZmluZWQnKQoJCXJldHVybjsKCQoJbGV0IGFpcHRhZyA9IHdpbmRvdy5haXB0YWcgfHwge307ICAgCglhaXB0YWcuY21kID0gYWlwdGFnLmNtZCB8fCBbXTsKCWFpcHRhZy5jbWQuZGlzcGxheSA9IGFpcHRhZy5jbWQuZGlzcGxheSB8fCBbXTsKCWFpcHRhZy5jbWQucGxheWVyID0gYWlwdGFnLmNtZC5wbGF5ZXIgfHwgW107CQoJYWlwdGFnLmdkcHJTaG93Q29uc2VudFRvb2wgPSB0cnVlOwoJCgl2YXIgbWlkcm9sbF9kaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWlwaG9sZGVyJyk7CglpZiAoIW1pZHJvbGxfZGl2KSB7CgkJbWlkcm9sbF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJkaXYiKTsKCQltaWRyb2xsX2Rpdi5pZCA9ICdhaXBob2xkZXInOwoJCWRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWlkcm9sbF9kaXYpOwoJfQoKCWFpcHRhZy5jbWQucGxheWVyLnB1c2goZnVuY3Rpb24oKSB7CgkJYWRwbGF5ZXIgPSBuZXcgYWlwUGxheWVyKHsKCQkJQURfV0lEVEg6IDk2MCwKCQkJQURfSEVJR0hUOiA1NDAsCgkJCUFEX0ZVTExTQ1JFRU46IHRydWUsCgkJCUFEX0NFTlRFUlBMQVlFUjogZmFsc2UsCgkJCUxPQURJTkdfVEVYVDogJ2xvYWRpbmcgdmlkZW8nLAoJCQlQUkVST0xMX0VMRU06IGZ1bmN0aW9uKCkge3JldHVybiBtaWRyb2xsX2Rpdjt9LAoJCQlBSVBfQ09NUExFVEU6IGZ1bmN0aW9uICgpIHsKCQkJCXRyYWNlKCdBSVBfQ09NUExFVEUnKTsKCQkJCWlmICh0eXBlb2YgX19hZGlucGxheV9vbl92aWRlb19jb21wbGV0ZSA9PT0gJ2Z1bmN0aW9uJykgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAoJCQkJCV9fYWRpbnBsYXlfb25fdmlkZW9fY29tcGxldGUodHJ1ZSk7CgkJCQkJX19hZGlucGxheV9vbl92aWRlb19jb21wbGV0ZSA9IG51bGw7CgkJCQl9CgkJCX0sCgkJCUFJUF9SRU1PVkU6IGZ1bmN0aW9uICgpIHsKCQkJCXRyYWNlKCdBSVBfUkVNT1ZFJyk7CgkJCX0sCgkJCUFJUF9SRVdBUkRFRENPTVBMRVRFOiBmdW5jdGlvbiAoZXZ0KSB7CgkJCQl0cmFjZSgnQUlQX1JFV0FSREVEQ09NUExFVEUnLCBldnQpOwoJCQkJaWYgKHR5cGVvZiBfX2FkaW5wbGF5X29uX3ZpZGVvX2NvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCgkJCQkJX19hZGlucGxheV9vbl92aWRlb19jb21wbGV0ZShldnQgPT09ICdjbG9zZWQnKTsgLy8gY2xvc2VkL3RpbWVvdXQKCQkJCQlfX2FkaW5wbGF5X29uX3ZpZGVvX2NvbXBsZXRlID0gbnVsbDsKCQkJCX0KCQkJfQoJCX0pOwoJfSk7CgkKCXdpbmRvdy5haXB0YWcgPSBhaXB0YWc7CgkJICAgICAgICAgICAgICAKCUxvYWRTY3JpcHQoJy8vYXBpLmFkaW5wbGF5LmNvbS9saWJzL2FpcHRhZy9wdWIvQ1NIL2NsYXNoM2QuY29tL3RhZy5taW4uanMnKTsKfSAKCmZ1bmN0aW9uIFNob3dBZGlucGxheVZpZGVvQWQodHlwZSwgb25fZmluaXNoKSB7CglDaGVja0FuZEluaXRBZGlucGxheSgpOwoJCglfX2FkaW5wbGF5X29uX3ZpZGVvX2NvbXBsZXRlID0gZnVuY3Rpb24gKHJlc3VsdCkgewoJCW9uX2ZpbmlzaChyZXN1bHQpOwoJfTsKCQoJaWYgKHR5cGUgPT09ICdyZXdhcmRlZCcgJiYgZmFsc2UpIC8vIEZJWE1FCgkJYWlwdGFnLmNtZC5wbGF5ZXIucHVzaChmdW5jdGlvbigpIHsKCQkJYWRwbGF5ZXIuc3RhcnRSZXdhcmRlZEFkKCk7CgkJfSk7CgllbHNlCgkJYWlwdGFnLmNtZC5wbGF5ZXIucHVzaChmdW5jdGlvbigpIHsKCQkJYWRwbGF5ZXIuc3RhcnRQcmVSb2xsKCk7CgkJfSk7Cn0KCmZ1bmN0aW9uIEluamVjdEFkaW5wbGF5QmFubmVyKGRpdl90YWcsIHBhcmFtLCBvbl9maW5pc2gpIHsKCUNoZWNrQW5kSW5pdEFkaW5wbGF5KCk7CgkKCWxldCBwYXJhbXMgPSBwYXJhbS5zcGxpdCgnfCcpOwoJJCgnIycgKyBkaXZfdGFnKS5odG1sKCc8ZGl2IGlkPSInICsgcGFyYW1zWzBdICsgJyI+Jyk7CglhaXB0YWcuY21kLmRpc3BsYXkucHVzaChmdW5jdGlvbigpIHsgYWlwRGlzcGxheVRhZy5kaXNwbGF5KHBhcmFtc1swXSk7IH0pOwoJb25fZmluaXNoICYmIG9uX2ZpbmlzaCgpOwp9CgpmdW5jdGlvbiBJbmplY3RCYW5uZXIodGFnLCBhZG5ldHdvcmtfaWQsIHBhcmFtLCBvbl9maW5pc2gpIHsKCWlmIChhZG5ldHdvcmtfaWQgPT09ICJpZnJhbWUiKQoJCUluamVjdElmcmFtZWRCYW5uZXIodGFnLCBwYXJhbSwgb25fZmluaXNoKTsKCWVsc2UgaWYgKGFkbmV0d29ya19pZCA9PT0gImFkaW5wbGF5IikKCQlJbmplY3RBZGlucGxheUJhbm5lcih0YWcsIHBhcmFtLCBvbl9maW5pc2gpOwoJZWxzZSBpZiAoYWRuZXR3b3JrX2lkID09PSAieWFuZGV4cnRiIikKCQlJbmplY3RZYW5kZXhJZnJhbWVkQmFubmVyKHRhZywgcGFyYW0sIG9uX2ZpbmlzaCk7CgllbHNlIGlmIChhZG5ldHdvcmtfaWQgPT09ICJjcG1zdGFyIikKCQlJbmplY3RDUE1TdGFyQmFubmVyKHRhZywgcGFyYW0sIG9uX2ZpbmlzaCk7CgllbHNlIGlmIChhZG5ldHdvcmtfaWQgPT09ICJjcG1zdGFyMiIpCgkJSW5qZWN0Q1BNU3RhcjJCYW5uZXIodGFnLCBwYXJhbSwgb25fZmluaXNoKTsKCWVsc2UgaWYgKGFkbmV0d29ya19pZCA9PT0gInJldml2ZWpzIikKCQlJbmplY3RSZXZpdmVKU0Jhbm5lcih0YWcsIHBhcmFtLCBvbl9maW5pc2gpOwoJZWxzZSBpZiAoYWRuZXR3b3JrX2lkID09PSAicHJvcGVsbGVyYWRzIikKCQlJbmplY3RQcm9wZWxsZXJBZHNCYW5uZXIodGFnLCBwYXJhbSwgb25fZmluaXNoKTsKCWVsc2UKCQlvbl9maW5pc2goKTsKCQoJZ3RhZygnZXZlbnQnLCAnYm5yX3Nob3duJywgewoJCSdldmVudF9jYXRlZ29yeSc6ICdtb25ldGl6YXRpb24nLAoJCSdldmVudF9sYWJlbCc6IGFkbmV0d29ya19pZAoJfSk7Cn0KCmZ1bmN0aW9uIEpTX0luamVjdEJhbm5lcnMoZnVsbF9zaXplLCBtaWRibG9ja19zaXplLCBsYW5kc2NhcGUsIGFkbmV0d29yazEsIGJhbm5lcjFfcGFyYW0sIGFkbmV0d29yazIsIGJhbm5lcjJfcGFyYW0pIHsgICAgCgkkKCcjYmJveCcpLnJlbW92ZSgpOwoKfQoKZnVuY3Rpb24gSlNfSGlkZUJhbm5lcnMoKSB7Cglkb2N1bWVudC53cml0ZSA9IF9fb3JpZ19kb2N1bWVudF93cml0ZTsgICAgCgkkKCcjYmJveCcpLnJlbW92ZSgpOwoJdHJ5IHsgaWYgKHR5cGVvZiBwYXJlbnQuSlNfSGlkZUFkc2Vuc2VCYW5uZXJzID09PSAnZnVuY3Rpb24nKSBwYXJlbnQuSlNfSGlkZUFkc2Vuc2VCYW5uZXJzKCk7IH0gY2F0Y2ggKGUpIHt9Cn0KCmZ1bmN0aW9uIEpTX1Nob3dWaWRlb0FkKGFkbmV0d29ya19pZCwgdHlwZSwgcGFyYW0pIHsKCWZ1bmN0aW9uIG9uX2ZpbmlzaChzdWNjZXNzKSB7CgkJZ3RhZygnZXZlbnQnLCAnYWR2aWRlb18nICsgKHN1Y2Nlc3MgPyAic2hvd24iIDogImZhaWx1cmUiKSwgewoJCQknZXZlbnRfY2F0ZWdvcnknOiAnbW9uZXRpemF0aW9uJywKCQkJJ2V2ZW50X2xhYmVsJzogYWRuZXR3b3JrX2lkICsgIl8iICsgdHlwZQoJCX0pOwoJCQoJCWxldCBzdGFjayA9IHN0YWNrU2F2ZSgpOwoJCU1vZHVsZS5fb25fYWR2aWRlb19maW5pc2hlZCgoc3VjY2VzcyA/IDEgOiAwKSB8IDApOyAvLyBOT1RFOiBkZWZpbmVkIGluIFBsYXllclNETC5jcHAKCQlzdGFja1Jlc3RvcmUoc3RhY2spOwoJfQoJCglKU19IaWRlQmFubmVycygpOwkJCglvbl9maW5pc2godHJ1ZSk7CgkKfQoKZnVuY3Rpb24gSlNfVHJhY2tBbmFseXRpY3NFdmVudChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbF9vcHQsIHZhbHVlX29wdCkgewoJbGV0IG9wdHMgPSB7J2V2ZW50X2NhdGVnb3J5JzogY2F0ZWdvcnl9OwoJaWYgKHR5cGVvZiBsYWJlbF9vcHQgPT09ICdzdHJpbmcnKSAgICAgICAgCgkJb3B0cy5ldmVudF9sYWJlbCA9IGxhYmVsX29wdDsKCWlmICh0eXBlb2YgdmFsdWVfb3B0ID09PSAnc3RyaW5nJyAmJiAhaXNOYU4ocGFyc2VJbnQodmFsdWVfb3B0KSkpCgkJb3B0cy52YWx1ZSA9IHBhcnNlSW50KHZhbHVlX29wdCkgfCAwOwoJZ3RhZygnZXZlbnQnLCBhY3Rpb24sIG9wdHMpOwp9CgpmdW5jdGlvbiBKU19Pbk1hdGNoRmluaXNoZWQoKSB7Cgl0cnkgeyBpZiAodHlwZW9mIHBhcmVudC5KU19Pbk1hdGNoRmluaXNoZWQgPT09ICdmdW5jdGlvbicpIHBhcmVudC5KU19Pbk1hdGNoRmluaXNoZWQoKTsgfSBjYXRjaCAoZSkge30KfQoKZnVuY3Rpb24gSlNfU2hvd0VtYmVkUHJvbXB0KCkgewoJbGV0IHVybCA9ICIvL2NsYXNoM2QuY29tL2VtYmVkLyIgKyBHQU1FX0lEICsgIi8iOwoJcHJvbXB0KCdVc2VzIENsb3VkZmxhcmUgQ0ROLiBNb2JpbGUgcmVhZHkgKGxhbmRzY2FwZSBhbmQgcG9ydHJhaXQpLiBSZXNpemVhYmxlLCBzZXQgYW55IHdpZHRoL2hlaWdodCB5b3UgbGlrZSAoMTAwMHg2MDAgZm9yIGV4LiknLCAnPGlmcmFtZSBzcmM9IicgKyB1cmwgKyAnIiBzdHlsZT0id2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsiIHJlZmVycmVycG9saWN5PSJvcmlnaW4iIGZyYW1lYm9yZGVyPSIwIiBzY3JvbGxpbmc9Im5vIiBhbGxvd2Z1bGxzY3JlZW49InRydWUiPjwvaWZyYW1lPicpOwp9CgpmdW5jdGlvbiBKU19TaG93QXNzZXRzUHJvbXB0KCkgewoJbGV0IHVybCA9ICJodHRwOi8vY2xhc2gzZC5jb20vYXNzZXRzLyIgKyBHQU1FX0lEICsgImNsYXNoaGVyb2VzX2Fzc2V0cy56aXAiOwoJcHJvbXB0KCdSZXNvdXJjZSBmb3Igd2VibWFzdGVycy4gVGhpcyBhcmNoaXZlIGNvbnRhaW5zOiBoaWdoIHJlc29sdXRpb24gaWNvbnMsIGxvZ28gYW5kIHNjcmVlbnNob3RzOicsIHVybCk7Cn0K')";
        s = eval(tmp);
    } else {
        s = eval(tmp);
    }
    
    console.log("--fx--",tmp);
    if (s == null) {
        return 0
    }
    s += "";
    var me = _emscripten_run_script_string;
    var len = lengthBytesUTF8(s);
    if (!me.bufferSize || me.bufferSize < len + 1) {
        if (me.bufferSize)
            _free(me.buffer);
        me.bufferSize = len + 1;
        me.buffer = _malloc(me.bufferSize)
    }
    stringToUTF8(s, me.buffer, me.bufferSize);
    return me.buffer
}
function __registerFocusEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.focusEvent)
        JSEvents.focusEvent = _malloc(256);
    var focusEventHandlerFunc = function(ev) {
        var e = ev || event;
        var nodeName = JSEvents.getNodeNameForTarget(e.target);
        var id = e.target.id ? e.target.id : "";
        var focusEvent = JSEvents.focusEvent;
        stringToUTF8(nodeName, focusEvent + 0, 128);
        stringToUTF8(id, focusEvent + 128, 128);
        if (dynCall_iiii(callbackfunc, eventTypeId, focusEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: __findEventTarget(target),
        allowsDeferredCalls: false,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: focusEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_blur_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerFocusEventCallback(target, userData, useCapture, callbackfunc, 12, "blur", targetThread);
    return 0
}
function _emscripten_set_element_css_size(target, width, height) {
    target = target ? __findEventTarget(target) : Module["canvas"];
    if (!target)
        return -4;
    target.style.width = width + "px";
    target.style.height = height + "px";
    return 0
}
function _emscripten_set_focus_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerFocusEventCallback(target, userData, useCapture, callbackfunc, 13, "focus", targetThread);
    return 0
}
function __fillFullscreenChangeEventData(eventStruct, e) {
    var fullscreenElement = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    var isFullscreen = !!fullscreenElement;
    HEAP32[eventStruct >> 2] = isFullscreen;
    HEAP32[eventStruct + 4 >> 2] = JSEvents.fullscreenEnabled();
    var reportedElement = isFullscreen ? fullscreenElement : JSEvents.previousFullscreenElement;
    var nodeName = JSEvents.getNodeNameForTarget(reportedElement);
    var id = reportedElement && reportedElement.id ? reportedElement.id : "";
    stringToUTF8(nodeName, eventStruct + 8, 128);
    stringToUTF8(id, eventStruct + 136, 128);
    HEAP32[eventStruct + 264 >> 2] = reportedElement ? reportedElement.clientWidth : 0;
    HEAP32[eventStruct + 268 >> 2] = reportedElement ? reportedElement.clientHeight : 0;
    HEAP32[eventStruct + 272 >> 2] = screen.width;
    HEAP32[eventStruct + 276 >> 2] = screen.height;
    if (isFullscreen) {
        JSEvents.previousFullscreenElement = fullscreenElement
    }
}
function __registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.fullscreenChangeEvent)
        JSEvents.fullscreenChangeEvent = _malloc(280);
    var fullscreenChangeEventhandlerFunc = function(ev) {
        var e = ev || event;
        var fullscreenChangeEvent = JSEvents.fullscreenChangeEvent;
        __fillFullscreenChangeEventData(fullscreenChangeEvent, e);
        if (dynCall_iiii(callbackfunc, eventTypeId, fullscreenChangeEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: false,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: fullscreenChangeEventhandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_fullscreenchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (!JSEvents.fullscreenEnabled())
        return -1;
    target = target ? __findEventTarget(target) : __specialEventTargets[1];
    if (!target)
        return -4;
    __registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "fullscreenchange", targetThread);
    __registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "mozfullscreenchange", targetThread);
    __registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "webkitfullscreenchange", targetThread);
    __registerFullscreenChangeEventCallback(target, userData, useCapture, callbackfunc, 19, "msfullscreenchange", targetThread);
    return 0
}
function __registerKeyEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.keyEvent)
        JSEvents.keyEvent = _malloc(164);
    var keyEventHandlerFunc = function(ev) {
        var e = ev || event;
        var keyEventData = JSEvents.keyEvent;
        stringToUTF8(e.key ? e.key : "", keyEventData + 0, 32);
        stringToUTF8(e.code ? e.code : "", keyEventData + 32, 32);
        HEAP32[keyEventData + 64 >> 2] = e.location;
        HEAP32[keyEventData + 68 >> 2] = e.ctrlKey;
        HEAP32[keyEventData + 72 >> 2] = e.shiftKey;
        HEAP32[keyEventData + 76 >> 2] = e.altKey;
        HEAP32[keyEventData + 80 >> 2] = e.metaKey;
        HEAP32[keyEventData + 84 >> 2] = e.repeat;
        stringToUTF8(e.locale ? e.locale : "", keyEventData + 88, 32);
        stringToUTF8(e.char ? e.char : "", keyEventData + 120, 32);
        HEAP32[keyEventData + 152 >> 2] = e.charCode;
        HEAP32[keyEventData + 156 >> 2] = e.keyCode;
        HEAP32[keyEventData + 160 >> 2] = e.which;
        if (dynCall_iiii(callbackfunc, eventTypeId, keyEventData, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: __findEventTarget(target),
        allowsDeferredCalls: JSEvents.isInternetExplorer() ? false : true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: keyEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_keydown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerKeyEventCallback(target, userData, useCapture, callbackfunc, 2, "keydown", targetThread);
    return 0
}
function _emscripten_set_keypress_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerKeyEventCallback(target, userData, useCapture, callbackfunc, 1, "keypress", targetThread);
    return 0
}
function _emscripten_set_keyup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerKeyEventCallback(target, userData, useCapture, callbackfunc, 3, "keyup", targetThread);
    return 0
}
function __fillMouseEventData(eventStruct, e, target) {
    HEAPF64[eventStruct >> 3] = JSEvents.tick();
    HEAP32[eventStruct + 8 >> 2] = e.screenX;
    HEAP32[eventStruct + 12 >> 2] = e.screenY;
    HEAP32[eventStruct + 16 >> 2] = e.clientX;
    HEAP32[eventStruct + 20 >> 2] = e.clientY;
    HEAP32[eventStruct + 24 >> 2] = e.ctrlKey;
    HEAP32[eventStruct + 28 >> 2] = e.shiftKey;
    HEAP32[eventStruct + 32 >> 2] = e.altKey;
    HEAP32[eventStruct + 36 >> 2] = e.metaKey;
    HEAP16[eventStruct + 40 >> 1] = e.button;
    HEAP16[eventStruct + 42 >> 1] = e.buttons;
    HEAP32[eventStruct + 44 >> 2] = e["movementX"] || e["mozMovementX"] || e["webkitMovementX"] || e.screenX - JSEvents.previousScreenX;
    HEAP32[eventStruct + 48 >> 2] = e["movementY"] || e["mozMovementY"] || e["webkitMovementY"] || e.screenY - JSEvents.previousScreenY;
    if (Module["canvas"]) {
        var rect = Module["canvas"].getBoundingClientRect();
        HEAP32[eventStruct + 60 >> 2] = e.clientX - rect.left;
        HEAP32[eventStruct + 64 >> 2] = e.clientY - rect.top
    } else {
        HEAP32[eventStruct + 60 >> 2] = 0;
        HEAP32[eventStruct + 64 >> 2] = 0
    }
    if (target) {
        var rect = JSEvents.getBoundingClientRectOrZeros(target);
        HEAP32[eventStruct + 52 >> 2] = e.clientX - rect.left;
        HEAP32[eventStruct + 56 >> 2] = e.clientY - rect.top
    } else {
        HEAP32[eventStruct + 52 >> 2] = 0;
        HEAP32[eventStruct + 56 >> 2] = 0
    }
    if (e.type !== "wheel" && e.type !== "mousewheel") {
        JSEvents.previousScreenX = e.screenX;
        JSEvents.previousScreenY = e.screenY
    }
}
function __registerMouseEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.mouseEvent)
        JSEvents.mouseEvent = _malloc(72);
    target = __findEventTarget(target);
    var mouseEventHandlerFunc = function(ev) {
        var e = ev || event;
        __fillMouseEventData(JSEvents.mouseEvent, e, target);
        if (dynCall_iiii(callbackfunc, eventTypeId, JSEvents.mouseEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString != "mousemove" && eventTypeString != "mouseenter" && eventTypeString != "mouseleave",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: mouseEventHandlerFunc,
        useCapture: useCapture
    };
    if (JSEvents.isInternetExplorer() && eventTypeString == "mousedown")
        eventHandler.allowsDeferredCalls = false;
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_mousedown_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerMouseEventCallback(target, userData, useCapture, callbackfunc, 5, "mousedown", targetThread);
    return 0
}
function _emscripten_set_mouseenter_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerMouseEventCallback(target, userData, useCapture, callbackfunc, 33, "mouseenter", targetThread);
    return 0
}
function _emscripten_set_mouseleave_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerMouseEventCallback(target, userData, useCapture, callbackfunc, 34, "mouseleave", targetThread);
    return 0
}
function _emscripten_set_mousemove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerMouseEventCallback(target, userData, useCapture, callbackfunc, 8, "mousemove", targetThread);
    return 0
}
function _emscripten_set_mouseup_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerMouseEventCallback(target, userData, useCapture, callbackfunc, 6, "mouseup", targetThread);
    return 0
}
function __fillPointerlockChangeEventData(eventStruct, e) {
    var pointerLockElement = document.pointerLockElement || document.mozPointerLockElement || document.webkitPointerLockElement || document.msPointerLockElement;
    var isPointerlocked = !!pointerLockElement;
    HEAP32[eventStruct >> 2] = isPointerlocked;
    var nodeName = JSEvents.getNodeNameForTarget(pointerLockElement);
    var id = pointerLockElement && pointerLockElement.id ? pointerLockElement.id : "";
    stringToUTF8(nodeName, eventStruct + 4, 128);
    stringToUTF8(id, eventStruct + 132, 128)
}
function __registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.pointerlockChangeEvent)
        JSEvents.pointerlockChangeEvent = _malloc(260);
    var pointerlockChangeEventHandlerFunc = function(ev) {
        var e = ev || event;
        var pointerlockChangeEvent = JSEvents.pointerlockChangeEvent;
        __fillPointerlockChangeEventData(pointerlockChangeEvent, e);
        if (dynCall_iiii(callbackfunc, eventTypeId, pointerlockChangeEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: false,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: pointerlockChangeEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_pointerlockchange_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    if (!document || !document.body || !document.body.requestPointerLock && !document.body.mozRequestPointerLock && !document.body.webkitRequestPointerLock && !document.body.msRequestPointerLock) {
        return -1
    }
    target = target ? __findEventTarget(target) : __specialEventTargets[1];
    if (!target)
        return -4;
    __registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "pointerlockchange", targetThread);
    __registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mozpointerlockchange", targetThread);
    __registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "webkitpointerlockchange", targetThread);
    __registerPointerlockChangeEventCallback(target, userData, useCapture, callbackfunc, 20, "mspointerlockchange", targetThread);
    return 0
}
function __registerUiEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.uiEvent)
        JSEvents.uiEvent = _malloc(36);
    if (eventTypeString == "scroll" && !target) {
        target = document
    } else {
        target = __findEventTarget(target)
    }
    var uiEventHandlerFunc = function(ev) {
        var e = ev || event;
        if (e.target != target) {
            return
        }
        var scrollPos = JSEvents.pageScrollPos();
        var uiEvent = JSEvents.uiEvent;
        HEAP32[uiEvent >> 2] = e.detail;
        HEAP32[uiEvent + 4 >> 2] = document.body.clientWidth;
        HEAP32[uiEvent + 8 >> 2] = document.body.clientHeight;
        HEAP32[uiEvent + 12 >> 2] = innerWidth;
        HEAP32[uiEvent + 16 >> 2] = innerHeight;
        HEAP32[uiEvent + 20 >> 2] = outerWidth;
        HEAP32[uiEvent + 24 >> 2] = outerHeight;
        HEAP32[uiEvent + 28 >> 2] = scrollPos[0];
        HEAP32[uiEvent + 32 >> 2] = scrollPos[1];
        if (dynCall_iiii(callbackfunc, eventTypeId, uiEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: false,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: uiEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_resize_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerUiEventCallback(target, userData, useCapture, callbackfunc, 10, "resize", targetThread);
    return 0
}
function __registerTouchEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.touchEvent)
        JSEvents.touchEvent = _malloc(1684);
    target = __findEventTarget(target);
    var touchEventHandlerFunc = function(ev) {
        var e = ev || event;
        var touches = {};
        for (var i = 0; i < e.touches.length; ++i) {
            var touch = e.touches[i];
            touch.changed = false;
            touches[touch.identifier] = touch
        }
        for (var i = 0; i < e.changedTouches.length; ++i) {
            var touch = e.changedTouches[i];
            touches[touch.identifier] = touch;
            touch.changed = true
        }
        for (var i = 0; i < e.targetTouches.length; ++i) {
            var touch = e.targetTouches[i];
            touches[touch.identifier].onTarget = true
        }
        var touchEvent = JSEvents.touchEvent;
        var ptr = touchEvent;
        HEAP32[ptr + 4 >> 2] = e.ctrlKey;
        HEAP32[ptr + 8 >> 2] = e.shiftKey;
        HEAP32[ptr + 12 >> 2] = e.altKey;
        HEAP32[ptr + 16 >> 2] = e.metaKey;
        ptr += 20;
        var canvasRect = Module["canvas"] ? Module["canvas"].getBoundingClientRect() : undefined;
        var targetRect = JSEvents.getBoundingClientRectOrZeros(target);
        var numTouches = 0;
        for (var i in touches) {
            var t = touches[i];
            HEAP32[ptr >> 2] = t.identifier;
            HEAP32[ptr + 4 >> 2] = t.screenX;
            HEAP32[ptr + 8 >> 2] = t.screenY;
            HEAP32[ptr + 12 >> 2] = t.clientX;
            HEAP32[ptr + 16 >> 2] = t.clientY;
            HEAP32[ptr + 20 >> 2] = t.pageX;
            HEAP32[ptr + 24 >> 2] = t.pageY;
            HEAP32[ptr + 28 >> 2] = t.changed;
            HEAP32[ptr + 32 >> 2] = t.onTarget;
            if (canvasRect) {
                HEAP32[ptr + 44 >> 2] = t.clientX - canvasRect.left;
                HEAP32[ptr + 48 >> 2] = t.clientY - canvasRect.top
            } else {
                HEAP32[ptr + 44 >> 2] = 0;
                HEAP32[ptr + 48 >> 2] = 0
            }
            HEAP32[ptr + 36 >> 2] = t.clientX - targetRect.left;
            HEAP32[ptr + 40 >> 2] = t.clientY - targetRect.top;
            ptr += 52;
            if (++numTouches >= 32) {
                break
            }
        }
        HEAP32[touchEvent >> 2] = numTouches;
        if (dynCall_iiii(callbackfunc, eventTypeId, touchEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: eventTypeString == "touchstart" || eventTypeString == "touchend",
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: touchEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_touchcancel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerTouchEventCallback(target, userData, useCapture, callbackfunc, 25, "touchcancel", targetThread);
    return 0
}
function _emscripten_set_touchend_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerTouchEventCallback(target, userData, useCapture, callbackfunc, 23, "touchend", targetThread);
    return 0
}
function _emscripten_set_touchmove_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerTouchEventCallback(target, userData, useCapture, callbackfunc, 24, "touchmove", targetThread);
    return 0
}
function _emscripten_set_touchstart_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    __registerTouchEventCallback(target, userData, useCapture, callbackfunc, 22, "touchstart", targetThread);
    return 0
}
function __fillVisibilityChangeEventData(eventStruct, e) {
    var visibilityStates = ["hidden", "visible", "prerender", "unloaded"];
    var visibilityState = visibilityStates.indexOf(document.visibilityState);
    HEAP32[eventStruct >> 2] = document.hidden;
    HEAP32[eventStruct + 4 >> 2] = visibilityState
}
function __registerVisibilityChangeEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.visibilityChangeEvent)
        JSEvents.visibilityChangeEvent = _malloc(8);
    var visibilityChangeEventHandlerFunc = function(ev) {
        var e = ev || event;
        var visibilityChangeEvent = JSEvents.visibilityChangeEvent;
        __fillVisibilityChangeEventData(visibilityChangeEvent, e);
        if (dynCall_iiii(callbackfunc, eventTypeId, visibilityChangeEvent, userData))
            e.preventDefault()
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: false,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: visibilityChangeEventHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_visibilitychange_callback_on_thread(userData, useCapture, callbackfunc, targetThread) {
    if (!__specialEventTargets[1]) {
        return -4
    }
    __registerVisibilityChangeEventCallback(__specialEventTargets[1], userData, useCapture, callbackfunc, 21, "visibilitychange", targetThread);
    return 0
}
function __registerWheelEventCallback(target, userData, useCapture, callbackfunc, eventTypeId, eventTypeString, targetThread) {
    if (!JSEvents.wheelEvent)
        JSEvents.wheelEvent = _malloc(104);
    var wheelHandlerFunc = function(ev) {
        var e = ev || event;
        var wheelEvent = JSEvents.wheelEvent;
        __fillMouseEventData(wheelEvent, e, target);
        HEAPF64[wheelEvent + 72 >> 3] = e["deltaX"];
        HEAPF64[wheelEvent + 80 >> 3] = e["deltaY"];
        HEAPF64[wheelEvent + 88 >> 3] = e["deltaZ"];
        HEAP32[wheelEvent + 96 >> 2] = e["deltaMode"];
        if (dynCall_iiii(callbackfunc, eventTypeId, wheelEvent, userData))
            e.preventDefault()
    };
    var mouseWheelHandlerFunc = function(ev) {
        var e = ev || event;
        __fillMouseEventData(JSEvents.wheelEvent, e, target);
        HEAPF64[JSEvents.wheelEvent + 72 >> 3] = e["wheelDeltaX"] || 0;
        HEAPF64[JSEvents.wheelEvent + 80 >> 3] = -(e["wheelDeltaY"] || e["wheelDelta"]);
        HEAPF64[JSEvents.wheelEvent + 88 >> 3] = 0;
        HEAP32[JSEvents.wheelEvent + 96 >> 2] = 0;
        var shouldCancel = dynCall_iiii(callbackfunc, eventTypeId, JSEvents.wheelEvent, userData);
        if (shouldCancel) {
            e.preventDefault()
        }
    };
    var eventHandler = {
        target: target,
        allowsDeferredCalls: true,
        eventTypeString: eventTypeString,
        callbackfunc: callbackfunc,
        handlerFunc: eventTypeString == "wheel" ? wheelHandlerFunc : mouseWheelHandlerFunc,
        useCapture: useCapture
    };
    JSEvents.registerOrRemoveHandler(eventHandler)
}
function _emscripten_set_wheel_callback_on_thread(target, userData, useCapture, callbackfunc, targetThread) {
    target = __findEventTarget(target);
    if (typeof target.onwheel !== "undefined") {
        __registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "wheel", targetThread);
        return 0
    } else if (typeof target.onmousewheel !== "undefined") {
        __registerWheelEventCallback(target, userData, useCapture, callbackfunc, 9, "mousewheel", targetThread);
        return 0
    } else {
        return -1
    }
}
var ENV = {};
function _emscripten_get_environ() {
    if (!_emscripten_get_environ.strings) {
        var env = {
            "USER": "web_user",
            "LOGNAME": "web_user",
            "PATH": "/",
            "PWD": "/",
            "HOME": "/home/web_user",
            "LANG": (typeof navigator === "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
            "_": thisProgram
        };
        for (var x in ENV) {
            env[x] = ENV[x]
        }
        var strings = [];
        for (var x in env) {
            strings.push(x + "=" + env[x])
        }
        _emscripten_get_environ.strings = strings
    }
    return _emscripten_get_environ.strings
}
function _environ_get(__environ, environ_buf) {
    var strings = _emscripten_get_environ();
    var bufSize = 0;
    strings.forEach(function(string, i) {
        var ptr = environ_buf + bufSize;
        HEAP32[__environ + i * 4 >> 2] = ptr;
        writeAsciiToMemory(string, ptr);
        bufSize += string.length + 1
    });
    return 0
}
function _environ_sizes_get(penviron_count, penviron_buf_size) {
    var strings = _emscripten_get_environ();
    HEAP32[penviron_count >> 2] = strings.length;
    var bufSize = 0;
    strings.forEach(function(string) {
        bufSize += string.length + 1
    });
    HEAP32[penviron_buf_size >> 2] = bufSize;
    return 0
}
function _exit(status) {
    exit(status)
}
function _fd_close(fd) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        FS.close(stream);
        return 0
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return e.errno
    }
}
function _fd_read(fd, iov, iovcnt, pnum) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doReadv(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return e.errno
    }
}
function _fd_seek(fd, offset_low, offset_high, whence, newOffset) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var HIGH_OFFSET = 4294967296;
        var offset = offset_high * HIGH_OFFSET + (offset_low >>> 0);
        var DOUBLE_LIMIT = 9007199254740992;
        if (offset <= -DOUBLE_LIMIT || offset >= DOUBLE_LIMIT) {
            return -61
        }
        FS.llseek(stream, offset, whence);
        tempI64 = [stream.position >>> 0, (tempDouble = stream.position,
        +Math_abs(tempDouble) >= 1 ? tempDouble > 0 ? (Math_min(+Math_floor(tempDouble / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math_ceil((tempDouble - +(~~tempDouble >>> 0)) / 4294967296) >>> 0 : 0)],
        HEAP32[newOffset >> 2] = tempI64[0],
        HEAP32[newOffset + 4 >> 2] = tempI64[1];
        if (stream.getdents && offset === 0 && whence === 0)
            stream.getdents = null;
        return 0
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return e.errno
    }
}
function _fd_write(fd, iov, iovcnt, pnum) {
    try {
        var stream = SYSCALLS.getStreamFromFD(fd);
        var num = SYSCALLS.doWritev(stream, iov, iovcnt);
        HEAP32[pnum >> 2] = num;
        return 0
    } catch (e) {
        if (typeof FS === "undefined" || !(e instanceof FS.ErrnoError))
            abort(e);
        return e.errno
    }
}
function _getTempRet0() {
    return getTempRet0() | 0
}
function _gettimeofday(ptr) {
    var now = Date.now();
    HEAP32[ptr >> 2] = now / 1e3 | 0;
    HEAP32[ptr + 4 >> 2] = now % 1e3 * 1e3 | 0;
    return 0
}
function _usleep(useconds) {
    var msec = useconds / 1e3;
    if ((ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && self["performance"] && self["performance"]["now"]) {
        var start = self["performance"]["now"]();
        while (self["performance"]["now"]() - start < msec) {}
    } else {
        var start = Date.now();
        while (Date.now() - start < msec) {}
    }
    return 0
}
function _nanosleep(rqtp, rmtp) {
    if (rqtp === 0) {
        ___setErrNo(28);
        return -1
    }
    var seconds = HEAP32[rqtp >> 2];
    var nanoseconds = HEAP32[rqtp + 4 >> 2];
    if (nanoseconds < 0 || nanoseconds > 999999999 || seconds < 0) {
        ___setErrNo(28);
        return -1
    }
    if (rmtp !== 0) {
        HEAP32[rmtp >> 2] = 0;
        HEAP32[rmtp + 4 >> 2] = 0
    }
    return _usleep(seconds * 1e6 + nanoseconds / 1e3)
}
function _roundf(d) {
    d = +d;
    return d >= +0 ? +Math_floor(d + +.5) : +Math_ceil(d - +.5)
}
function _setTempRet0($i) {
    setTempRet0($i | 0)
}
var __sigalrm_handler = 0;
function _signal(sig, func) {
    if (sig == 14) {
        __sigalrm_handler = func
    } else {}
    return 0
}
function __isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
function __arraySum(array, index) {
    var sum = 0;
    for (var i = 0; i <= index; sum += array[i++])
        ;
    return sum
}
var __MONTH_DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var __MONTH_DAYS_REGULAR = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function __addDays(date, days) {
    var newDate = new Date(date.getTime());
    while (days > 0) {
        var leap = __isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[currentMonth];
        if (days > daysInCurrentMonth - newDate.getDate()) {
            days -= daysInCurrentMonth - newDate.getDate() + 1;
            newDate.setDate(1);
            if (currentMonth < 11) {
                newDate.setMonth(currentMonth + 1)
            } else {
                newDate.setMonth(0);
                newDate.setFullYear(newDate.getFullYear() + 1)
            }
        } else {
            newDate.setDate(newDate.getDate() + days);
            return newDate
        }
    }
    return newDate
}
function _strptime(buf, format, tm) {
    var pattern = UTF8ToString(format);
    var SPECIAL_CHARS = "\\!@#$^&*()+=-[]/{}|:<>?,.";
    for (var i = 0, ii = SPECIAL_CHARS.length; i < ii; ++i) {
        pattern = pattern.replace(new RegExp("\\" + SPECIAL_CHARS[i],"g"), "\\" + SPECIAL_CHARS[i])
    }
    var EQUIVALENT_MATCHERS = {
        "%A": "%a",
        "%B": "%b",
        "%c": "%a %b %d %H:%M:%S %Y",
        "%D": "%m\\/%d\\/%y",
        "%e": "%d",
        "%F": "%Y-%m-%d",
        "%h": "%b",
        "%R": "%H\\:%M",
        "%r": "%I\\:%M\\:%S\\s%p",
        "%T": "%H\\:%M\\:%S",
        "%x": "%m\\/%d\\/(?:%y|%Y)",
        "%X": "%H\\:%M\\:%S"
    };
    for (var matcher in EQUIVALENT_MATCHERS) {
        pattern = pattern.replace(matcher, EQUIVALENT_MATCHERS[matcher])
    }
    var DATE_PATTERNS = {
        "%a": "(?:Sun(?:day)?)|(?:Mon(?:day)?)|(?:Tue(?:sday)?)|(?:Wed(?:nesday)?)|(?:Thu(?:rsday)?)|(?:Fri(?:day)?)|(?:Sat(?:urday)?)",
        "%b": "(?:Jan(?:uary)?)|(?:Feb(?:ruary)?)|(?:Mar(?:ch)?)|(?:Apr(?:il)?)|May|(?:Jun(?:e)?)|(?:Jul(?:y)?)|(?:Aug(?:ust)?)|(?:Sep(?:tember)?)|(?:Oct(?:ober)?)|(?:Nov(?:ember)?)|(?:Dec(?:ember)?)",
        "%C": "\\d\\d",
        "%d": "0[1-9]|[1-9](?!\\d)|1\\d|2\\d|30|31",
        "%H": "\\d(?!\\d)|[0,1]\\d|20|21|22|23",
        "%I": "\\d(?!\\d)|0\\d|10|11|12",
        "%j": "00[1-9]|0?[1-9](?!\\d)|0?[1-9]\\d(?!\\d)|[1,2]\\d\\d|3[0-6]\\d",
        "%m": "0[1-9]|[1-9](?!\\d)|10|11|12",
        "%M": "0\\d|\\d(?!\\d)|[1-5]\\d",
        "%n": "\\s",
        "%p": "AM|am|PM|pm|A\\.M\\.|a\\.m\\.|P\\.M\\.|p\\.m\\.",
        "%S": "0\\d|\\d(?!\\d)|[1-5]\\d|60",
        "%U": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
        "%W": "0\\d|\\d(?!\\d)|[1-4]\\d|50|51|52|53",
        "%w": "[0-6]",
        "%y": "\\d\\d",
        "%Y": "\\d\\d\\d\\d",
        "%%": "%",
        "%t": "\\s"
    };
    var MONTH_NUMBERS = {
        JAN: 0,
        FEB: 1,
        MAR: 2,
        APR: 3,
        MAY: 4,
        JUN: 5,
        JUL: 6,
        AUG: 7,
        SEP: 8,
        OCT: 9,
        NOV: 10,
        DEC: 11
    };
    var DAY_NUMBERS_SUN_FIRST = {
        SUN: 0,
        MON: 1,
        TUE: 2,
        WED: 3,
        THU: 4,
        FRI: 5,
        SAT: 6
    };
    var DAY_NUMBERS_MON_FIRST = {
        MON: 0,
        TUE: 1,
        WED: 2,
        THU: 3,
        FRI: 4,
        SAT: 5,
        SUN: 6
    };
    for (var datePattern in DATE_PATTERNS) {
        pattern = pattern.replace(datePattern, "(" + datePattern + DATE_PATTERNS[datePattern] + ")")
    }
    var capture = [];
    for (var i = pattern.indexOf("%"); i >= 0; i = pattern.indexOf("%")) {
        capture.push(pattern[i + 1]);
        pattern = pattern.replace(new RegExp("\\%" + pattern[i + 1],"g"), "")
    }
    var matches = new RegExp("^" + pattern,"i").exec(UTF8ToString(buf));
    function initDate() {
        function fixup(value, min, max) {
            return typeof value !== "number" || isNaN(value) ? min : value >= min ? value <= max ? value : max : min
        }
        return {
            year: fixup(HEAP32[tm + 20 >> 2] + 1900, 1970, 9999),
            month: fixup(HEAP32[tm + 16 >> 2], 0, 11),
            day: fixup(HEAP32[tm + 12 >> 2], 1, 31),
            hour: fixup(HEAP32[tm + 8 >> 2], 0, 23),
            min: fixup(HEAP32[tm + 4 >> 2], 0, 59),
            sec: fixup(HEAP32[tm >> 2], 0, 59)
        }
    }
    if (matches) {
        var date = initDate();
        var value;
        var getMatch = function(symbol) {
            var pos = capture.indexOf(symbol);
            if (pos >= 0) {
                return matches[pos + 1]
            }
            return
        };
        if (value = getMatch("S")) {
            date.sec = parseInt(value)
        }
        if (value = getMatch("M")) {
            date.min = parseInt(value)
        }
        if (value = getMatch("H")) {
            date.hour = parseInt(value)
        } else if (value = getMatch("I")) {
            var hour = parseInt(value);
            if (value = getMatch("p")) {
                hour += value.toUpperCase()[0] === "P" ? 12 : 0
            }
            date.hour = hour
        }
        if (value = getMatch("Y")) {
            date.year = parseInt(value)
        } else if (value = getMatch("y")) {
            var year = parseInt(value);
            if (value = getMatch("C")) {
                year += parseInt(value) * 100
            } else {
                year += year < 69 ? 2e3 : 1900
            }
            date.year = year
        }
        if (value = getMatch("m")) {
            date.month = parseInt(value) - 1
        } else if (value = getMatch("b")) {
            date.month = MONTH_NUMBERS[value.substring(0, 3).toUpperCase()] || 0
        }
        if (value = getMatch("d")) {
            date.day = parseInt(value)
        } else if (value = getMatch("j")) {
            var day = parseInt(value);
            var leapYear = __isLeapYear(date.year);
            for (var month = 0; month < 12; ++month) {
                var daysUntilMonth = __arraySum(leapYear ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, month - 1);
                if (day <= daysUntilMonth + (leapYear ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR)[month]) {
                    date.day = day - daysUntilMonth
                }
            }
        } else if (value = getMatch("a")) {
            var weekDay = value.substring(0, 3).toUpperCase();
            if (value = getMatch("U")) {
                var weekDayNumber = DAY_NUMBERS_SUN_FIRST[weekDay];
                var weekNumber = parseInt(value);
                var janFirst = new Date(date.year,0,1);
                var endDate;
                if (janFirst.getDay() === 0) {
                    endDate = __addDays(janFirst, weekDayNumber + 7 * (weekNumber - 1))
                } else {
                    endDate = __addDays(janFirst, 7 - janFirst.getDay() + weekDayNumber + 7 * (weekNumber - 1))
                }
                date.day = endDate.getDate();
                date.month = endDate.getMonth()
            } else if (value = getMatch("W")) {
                var weekDayNumber = DAY_NUMBERS_MON_FIRST[weekDay];
                var weekNumber = parseInt(value);
                var janFirst = new Date(date.year,0,1);
                var endDate;
                if (janFirst.getDay() === 1) {
                    endDate = __addDays(janFirst, weekDayNumber + 7 * (weekNumber - 1))
                } else {
                    endDate = __addDays(janFirst, 7 - janFirst.getDay() + 1 + weekDayNumber + 7 * (weekNumber - 1))
                }
                date.day = endDate.getDate();
                date.month = endDate.getMonth()
            }
        }
        var fullDate = new Date(date.year,date.month,date.day,date.hour,date.min,date.sec,0);
        HEAP32[tm >> 2] = fullDate.getSeconds();
        HEAP32[tm + 4 >> 2] = fullDate.getMinutes();
        HEAP32[tm + 8 >> 2] = fullDate.getHours();
        HEAP32[tm + 12 >> 2] = fullDate.getDate();
        HEAP32[tm + 16 >> 2] = fullDate.getMonth();
        HEAP32[tm + 20 >> 2] = fullDate.getFullYear() - 1900;
        HEAP32[tm + 24 >> 2] = fullDate.getDay();
        HEAP32[tm + 28 >> 2] = __arraySum(__isLeapYear(fullDate.getFullYear()) ? __MONTH_DAYS_LEAP : __MONTH_DAYS_REGULAR, fullDate.getMonth() - 1) + fullDate.getDate() - 1;
        HEAP32[tm + 32 >> 2] = 0;
        return buf + intArrayFromString(matches[0]).length - 1
    }
    return 0
}
function _time(ptr) {
    var ret = Date.now() / 1e3 | 0;
    if (ptr) {
        HEAP32[ptr >> 2] = ret
    }
    return ret
}
function _timegm(tmPtr) {
    _tzset();
    var time = Date.UTC(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
    var date = new Date(time);
    HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
    var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
    var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
    HEAP32[tmPtr + 28 >> 2] = yday;
    return date.getTime() / 1e3 | 0
}
Module["requestFullscreen"] = function Module_requestFullscreen(lockPointer, resizeCanvas, vrDevice) {
    Browser.requestFullscreen(lockPointer, resizeCanvas, vrDevice)
}
;
Module["requestAnimationFrame"] = function Module_requestAnimationFrame(func) {
    Browser.requestAnimationFrame(func)
}
;
Module["setCanvasSize"] = function Module_setCanvasSize(width, height, noUpdates) {
    Browser.setCanvasSize(width, height, noUpdates)
}
;
Module["pauseMainLoop"] = function Module_pauseMainLoop() {
    Browser.mainLoop.pause()
}
;
Module["resumeMainLoop"] = function Module_resumeMainLoop() {
    Browser.mainLoop.resume()
}
;
Module["getUserMedia"] = function Module_getUserMedia() {
    Browser.getUserMedia()
}
;
Module["createContext"] = function Module_createContext(canvas, useWebGL, setInModule, webGLContextAttributes) {
    return Browser.createContext(canvas, useWebGL, setInModule, webGLContextAttributes)
}
;
if (ENVIRONMENT_IS_NODE) {
    _emscripten_get_now = function _emscripten_get_now_actual() {
        var t = process["hrtime"]();
        return t[0] * 1e3 + t[1] / 1e6
    }
} else if (typeof dateNow !== "undefined") {
    _emscripten_get_now = dateNow
} else if (typeof performance === "object" && performance && typeof performance["now"] === "function") {
    _emscripten_get_now = function() {
        return performance["now"]()
    }
} else {
    _emscripten_get_now = Date.now
}
FS.staticInit();
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
var GLctx;
GL.init();
for (var i = 0; i < 32; i++)
    __tempFixedLengthArray.push(new Array(i));
var ASSERTIONS = false;
function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull)
        u8array.length = numBytesWritten;
    return u8array
}
var asmLibraryArg = {
    "Sys_Cwd": _Sys_Cwd,
    "Sys_Dirname": _Sys_Dirname,
    "Sys_ErrorDialog": _Sys_ErrorDialog,
    "Sys_FreeFileList": _Sys_FreeFileList,
    "Sys_ListFiles": _Sys_ListFiles,
    "Sys_Milliseconds": _Sys_Milliseconds,
    "Sys_Mkdir": _Sys_Mkdir,
    "Sys_PlatformExit": _Sys_PlatformExit,
    "Sys_PlatformInit": _Sys_PlatformInit,
    "__cxa_atexit": ___cxa_atexit,
    "__lock": ___lock,
    "__syscall102": ___syscall102,
    "__syscall195": ___syscall195,
    "__syscall221": ___syscall221,
    "__syscall5": ___syscall5,
    "__syscall54": ___syscall54,
    "__unlock": ___unlock,
    "abort": _abort,
    "alBufferData": _alBufferData,
    "alDeleteBuffers": _alDeleteBuffers,
    "alDeleteSources": _alDeleteSources,
    "alDistanceModel": _alDistanceModel,
    "alDopplerFactor": _alDopplerFactor,
    "alGenBuffers": _alGenBuffers,
    "alGenSources": _alGenSources,
    "alGetError": _alGetError,
    "alGetSourcef": _alGetSourcef,
    "alGetSourcei": _alGetSourcei,
    "alListenerf": _alListenerf,
    "alListenerfv": _alListenerfv,
    "alSource3f": _alSource3f,
    "alSourcePause": _alSourcePause,
    "alSourcePlay": _alSourcePlay,
    "alSourceStop": _alSourceStop,
    "alSourcef": _alSourcef,
    "alSourcefv": _alSourcefv,
    "alSourcei": _alSourcei,
    "alSpeedOfSound": _alSpeedOfSound,
    "alcCloseDevice": _alcCloseDevice,
    "alcCreateContext": _alcCreateContext,
    "alcDestroyContext": _alcDestroyContext,
    "alcMakeContextCurrent": _alcMakeContextCurrent,
    "alcOpenDevice": _alcOpenDevice,
    "ctime": _ctime,
    "eglBindAPI": _eglBindAPI,
    "eglChooseConfig": _eglChooseConfig,
    "eglCreateContext": _eglCreateContext,
    "eglCreateWindowSurface": _eglCreateWindowSurface,
    "eglDestroyContext": _eglDestroyContext,
    "eglDestroySurface": _eglDestroySurface,
    "eglGetConfigAttrib": _eglGetConfigAttrib,
    "eglGetDisplay": _eglGetDisplay,
    "eglGetError": _eglGetError,
    "eglGetProcAddress": _eglGetProcAddress,
    "eglInitialize": _eglInitialize,
    "eglMakeCurrent": _eglMakeCurrent,
    "eglQueryString": _eglQueryString,
    "eglSwapBuffers": _eglSwapBuffers,
    "eglSwapInterval": _eglSwapInterval,
    "eglTerminate": _eglTerminate,
    "eglWaitGL": _eglWaitGL,
    "eglWaitNative": _eglWaitNative,
    "emscripten_asm_const_iii": _emscripten_asm_const_iii,
    "emscripten_exit_fullscreen": _emscripten_exit_fullscreen,
    "emscripten_exit_pointerlock": _emscripten_exit_pointerlock,
    "emscripten_exit_with_live_runtime": _emscripten_exit_with_live_runtime,
    "emscripten_force_exit": _emscripten_force_exit,
    "emscripten_get_device_pixel_ratio": _emscripten_get_device_pixel_ratio,
    "emscripten_get_element_css_size": _emscripten_get_element_css_size,
    "emscripten_get_now": _emscripten_get_now,
    "emscripten_get_sbrk_ptr": _emscripten_get_sbrk_ptr,
    "emscripten_glActiveTexture": _emscripten_glActiveTexture,
    "emscripten_glAttachShader": _emscripten_glAttachShader,
    "emscripten_glBeginQueryEXT": _emscripten_glBeginQueryEXT,
    "emscripten_glBindAttribLocation": _emscripten_glBindAttribLocation,
    "emscripten_glBindBuffer": _emscripten_glBindBuffer,
    "emscripten_glBindFramebuffer": _emscripten_glBindFramebuffer,
    "emscripten_glBindRenderbuffer": _emscripten_glBindRenderbuffer,
    "emscripten_glBindTexture": _emscripten_glBindTexture,
    "emscripten_glBindVertexArrayOES": _emscripten_glBindVertexArrayOES,
    "emscripten_glBlendColor": _emscripten_glBlendColor,
    "emscripten_glBlendEquation": _emscripten_glBlendEquation,
    "emscripten_glBlendEquationSeparate": _emscripten_glBlendEquationSeparate,
    "emscripten_glBlendFunc": _emscripten_glBlendFunc,
    "emscripten_glBlendFuncSeparate": _emscripten_glBlendFuncSeparate,
    "emscripten_glBufferData": _emscripten_glBufferData,
    "emscripten_glBufferSubData": _emscripten_glBufferSubData,
    "emscripten_glCheckFramebufferStatus": _emscripten_glCheckFramebufferStatus,
    "emscripten_glClear": _emscripten_glClear,
    "emscripten_glClearColor": _emscripten_glClearColor,
    "emscripten_glClearDepthf": _emscripten_glClearDepthf,
    "emscripten_glClearStencil": _emscripten_glClearStencil,
    "emscripten_glColorMask": _emscripten_glColorMask,
    "emscripten_glCompileShader": _emscripten_glCompileShader,
    "emscripten_glCompressedTexImage2D": _emscripten_glCompressedTexImage2D,
    "emscripten_glCompressedTexSubImage2D": _emscripten_glCompressedTexSubImage2D,
    "emscripten_glCopyTexImage2D": _emscripten_glCopyTexImage2D,
    "emscripten_glCopyTexSubImage2D": _emscripten_glCopyTexSubImage2D,
    "emscripten_glCreateProgram": _emscripten_glCreateProgram,
    "emscripten_glCreateShader": _emscripten_glCreateShader,
    "emscripten_glCullFace": _emscripten_glCullFace,
    "emscripten_glDeleteBuffers": _emscripten_glDeleteBuffers,
    "emscripten_glDeleteFramebuffers": _emscripten_glDeleteFramebuffers,
    "emscripten_glDeleteProgram": _emscripten_glDeleteProgram,
    "emscripten_glDeleteQueriesEXT": _emscripten_glDeleteQueriesEXT,
    "emscripten_glDeleteRenderbuffers": _emscripten_glDeleteRenderbuffers,
    "emscripten_glDeleteShader": _emscripten_glDeleteShader,
    "emscripten_glDeleteTextures": _emscripten_glDeleteTextures,
    "emscripten_glDeleteVertexArraysOES": _emscripten_glDeleteVertexArraysOES,
    "emscripten_glDepthFunc": _emscripten_glDepthFunc,
    "emscripten_glDepthMask": _emscripten_glDepthMask,
    "emscripten_glDepthRangef": _emscripten_glDepthRangef,
    "emscripten_glDetachShader": _emscripten_glDetachShader,
    "emscripten_glDisable": _emscripten_glDisable,
    "emscripten_glDisableVertexAttribArray": _emscripten_glDisableVertexAttribArray,
    "emscripten_glDrawArrays": _emscripten_glDrawArrays,
    "emscripten_glDrawArraysInstancedANGLE": _emscripten_glDrawArraysInstancedANGLE,
    "emscripten_glDrawBuffersWEBGL": _emscripten_glDrawBuffersWEBGL,
    "emscripten_glDrawElements": _emscripten_glDrawElements,
    "emscripten_glDrawElementsInstancedANGLE": _emscripten_glDrawElementsInstancedANGLE,
    "emscripten_glEnable": _emscripten_glEnable,
    "emscripten_glEnableVertexAttribArray": _emscripten_glEnableVertexAttribArray,
    "emscripten_glEndQueryEXT": _emscripten_glEndQueryEXT,
    "emscripten_glFinish": _emscripten_glFinish,
    "emscripten_glFlush": _emscripten_glFlush,
    "emscripten_glFramebufferRenderbuffer": _emscripten_glFramebufferRenderbuffer,
    "emscripten_glFramebufferTexture2D": _emscripten_glFramebufferTexture2D,
    "emscripten_glFrontFace": _emscripten_glFrontFace,
    "emscripten_glGenBuffers": _emscripten_glGenBuffers,
    "emscripten_glGenFramebuffers": _emscripten_glGenFramebuffers,
    "emscripten_glGenQueriesEXT": _emscripten_glGenQueriesEXT,
    "emscripten_glGenRenderbuffers": _emscripten_glGenRenderbuffers,
    "emscripten_glGenTextures": _emscripten_glGenTextures,
    "emscripten_glGenVertexArraysOES": _emscripten_glGenVertexArraysOES,
    "emscripten_glGenerateMipmap": _emscripten_glGenerateMipmap,
    "emscripten_glGetActiveAttrib": _emscripten_glGetActiveAttrib,
    "emscripten_glGetActiveUniform": _emscripten_glGetActiveUniform,
    "emscripten_glGetAttachedShaders": _emscripten_glGetAttachedShaders,
    "emscripten_glGetAttribLocation": _emscripten_glGetAttribLocation,
    "emscripten_glGetBooleanv": _emscripten_glGetBooleanv,
    "emscripten_glGetBufferParameteriv": _emscripten_glGetBufferParameteriv,
    "emscripten_glGetError": _emscripten_glGetError,
    "emscripten_glGetFloatv": _emscripten_glGetFloatv,
    "emscripten_glGetFramebufferAttachmentParameteriv": _emscripten_glGetFramebufferAttachmentParameteriv,
    "emscripten_glGetIntegerv": _emscripten_glGetIntegerv,
    "emscripten_glGetProgramInfoLog": _emscripten_glGetProgramInfoLog,
    "emscripten_glGetProgramiv": _emscripten_glGetProgramiv,
    "emscripten_glGetQueryObjecti64vEXT": _emscripten_glGetQueryObjecti64vEXT,
    "emscripten_glGetQueryObjectivEXT": _emscripten_glGetQueryObjectivEXT,
    "emscripten_glGetQueryObjectui64vEXT": _emscripten_glGetQueryObjectui64vEXT,
    "emscripten_glGetQueryObjectuivEXT": _emscripten_glGetQueryObjectuivEXT,
    "emscripten_glGetQueryivEXT": _emscripten_glGetQueryivEXT,
    "emscripten_glGetRenderbufferParameteriv": _emscripten_glGetRenderbufferParameteriv,
    "emscripten_glGetShaderInfoLog": _emscripten_glGetShaderInfoLog,
    "emscripten_glGetShaderPrecisionFormat": _emscripten_glGetShaderPrecisionFormat,
    "emscripten_glGetShaderSource": _emscripten_glGetShaderSource,
    "emscripten_glGetShaderiv": _emscripten_glGetShaderiv,
    "emscripten_glGetString": _emscripten_glGetString,
    "emscripten_glGetTexParameterfv": _emscripten_glGetTexParameterfv,
    "emscripten_glGetTexParameteriv": _emscripten_glGetTexParameteriv,
    "emscripten_glGetUniformLocation": _emscripten_glGetUniformLocation,
    "emscripten_glGetUniformfv": _emscripten_glGetUniformfv,
    "emscripten_glGetUniformiv": _emscripten_glGetUniformiv,
    "emscripten_glGetVertexAttribPointerv": _emscripten_glGetVertexAttribPointerv,
    "emscripten_glGetVertexAttribfv": _emscripten_glGetVertexAttribfv,
    "emscripten_glGetVertexAttribiv": _emscripten_glGetVertexAttribiv,
    "emscripten_glHint": _emscripten_glHint,
    "emscripten_glIsBuffer": _emscripten_glIsBuffer,
    "emscripten_glIsEnabled": _emscripten_glIsEnabled,
    "emscripten_glIsFramebuffer": _emscripten_glIsFramebuffer,
    "emscripten_glIsProgram": _emscripten_glIsProgram,
    "emscripten_glIsQueryEXT": _emscripten_glIsQueryEXT,
    "emscripten_glIsRenderbuffer": _emscripten_glIsRenderbuffer,
    "emscripten_glIsShader": _emscripten_glIsShader,
    "emscripten_glIsTexture": _emscripten_glIsTexture,
    "emscripten_glIsVertexArrayOES": _emscripten_glIsVertexArrayOES,
    "emscripten_glLineWidth": _emscripten_glLineWidth,
    "emscripten_glLinkProgram": _emscripten_glLinkProgram,
    "emscripten_glPixelStorei": _emscripten_glPixelStorei,
    "emscripten_glPolygonOffset": _emscripten_glPolygonOffset,
    "emscripten_glQueryCounterEXT": _emscripten_glQueryCounterEXT,
    "emscripten_glReadPixels": _emscripten_glReadPixels,
    "emscripten_glReleaseShaderCompiler": _emscripten_glReleaseShaderCompiler,
    "emscripten_glRenderbufferStorage": _emscripten_glRenderbufferStorage,
    "emscripten_glSampleCoverage": _emscripten_glSampleCoverage,
    "emscripten_glScissor": _emscripten_glScissor,
    "emscripten_glShaderBinary": _emscripten_glShaderBinary,
    "emscripten_glShaderSource": _emscripten_glShaderSource,
    "emscripten_glStencilFunc": _emscripten_glStencilFunc,
    "emscripten_glStencilFuncSeparate": _emscripten_glStencilFuncSeparate,
    "emscripten_glStencilMask": _emscripten_glStencilMask,
    "emscripten_glStencilMaskSeparate": _emscripten_glStencilMaskSeparate,
    "emscripten_glStencilOp": _emscripten_glStencilOp,
    "emscripten_glStencilOpSeparate": _emscripten_glStencilOpSeparate,
    "emscripten_glTexImage2D": _emscripten_glTexImage2D,
    "emscripten_glTexParameterf": _emscripten_glTexParameterf,
    "emscripten_glTexParameterfv": _emscripten_glTexParameterfv,
    "emscripten_glTexParameteri": _emscripten_glTexParameteri,
    "emscripten_glTexParameteriv": _emscripten_glTexParameteriv,
    "emscripten_glTexSubImage2D": _emscripten_glTexSubImage2D,
    "emscripten_glUniform1f": _emscripten_glUniform1f,
    "emscripten_glUniform1fv": _emscripten_glUniform1fv,
    "emscripten_glUniform1i": _emscripten_glUniform1i,
    "emscripten_glUniform1iv": _emscripten_glUniform1iv,
    "emscripten_glUniform2f": _emscripten_glUniform2f,
    "emscripten_glUniform2fv": _emscripten_glUniform2fv,
    "emscripten_glUniform2i": _emscripten_glUniform2i,
    "emscripten_glUniform2iv": _emscripten_glUniform2iv,
    "emscripten_glUniform3f": _emscripten_glUniform3f,
    "emscripten_glUniform3fv": _emscripten_glUniform3fv,
    "emscripten_glUniform3i": _emscripten_glUniform3i,
    "emscripten_glUniform3iv": _emscripten_glUniform3iv,
    "emscripten_glUniform4f": _emscripten_glUniform4f,
    "emscripten_glUniform4fv": _emscripten_glUniform4fv,
    "emscripten_glUniform4i": _emscripten_glUniform4i,
    "emscripten_glUniform4iv": _emscripten_glUniform4iv,
    "emscripten_glUniformMatrix2fv": _emscripten_glUniformMatrix2fv,
    "emscripten_glUniformMatrix3fv": _emscripten_glUniformMatrix3fv,
    "emscripten_glUniformMatrix4fv": _emscripten_glUniformMatrix4fv,
    "emscripten_glUseProgram": _emscripten_glUseProgram,
    "emscripten_glValidateProgram": _emscripten_glValidateProgram,
    "emscripten_glVertexAttrib1f": _emscripten_glVertexAttrib1f,
    "emscripten_glVertexAttrib1fv": _emscripten_glVertexAttrib1fv,
    "emscripten_glVertexAttrib2f": _emscripten_glVertexAttrib2f,
    "emscripten_glVertexAttrib2fv": _emscripten_glVertexAttrib2fv,
    "emscripten_glVertexAttrib3f": _emscripten_glVertexAttrib3f,
    "emscripten_glVertexAttrib3fv": _emscripten_glVertexAttrib3fv,
    "emscripten_glVertexAttrib4f": _emscripten_glVertexAttrib4f,
    "emscripten_glVertexAttrib4fv": _emscripten_glVertexAttrib4fv,
    "emscripten_glVertexAttribDivisorANGLE": _emscripten_glVertexAttribDivisorANGLE,
    "emscripten_glVertexAttribPointer": _emscripten_glVertexAttribPointer,
    "emscripten_glViewport": _emscripten_glViewport,
    "emscripten_log": _emscripten_log,
    "emscripten_longjmp": _emscripten_longjmp,
    "emscripten_memcpy_big": _emscripten_memcpy_big,
    "emscripten_request_fullscreen_strategy": _emscripten_request_fullscreen_strategy,
    "emscripten_request_pointerlock": _emscripten_request_pointerlock,
    "emscripten_resize_heap": _emscripten_resize_heap,
    "emscripten_run_script": _emscripten_run_script,
    "emscripten_run_script_int": _emscripten_run_script_int,
    "emscripten_run_script_string": _emscripten_run_script_string,
    "emscripten_set_blur_callback_on_thread": _emscripten_set_blur_callback_on_thread,
    "emscripten_set_canvas_element_size": _emscripten_set_canvas_element_size,
    "emscripten_set_element_css_size": _emscripten_set_element_css_size,
    "emscripten_set_focus_callback_on_thread": _emscripten_set_focus_callback_on_thread,
    "emscripten_set_fullscreenchange_callback_on_thread": _emscripten_set_fullscreenchange_callback_on_thread,
    "emscripten_set_keydown_callback_on_thread": _emscripten_set_keydown_callback_on_thread,
    "emscripten_set_keypress_callback_on_thread": _emscripten_set_keypress_callback_on_thread,
    "emscripten_set_keyup_callback_on_thread": _emscripten_set_keyup_callback_on_thread,
    "emscripten_set_main_loop": _emscripten_set_main_loop,
    "emscripten_set_mousedown_callback_on_thread": _emscripten_set_mousedown_callback_on_thread,
    "emscripten_set_mouseenter_callback_on_thread": _emscripten_set_mouseenter_callback_on_thread,
    "emscripten_set_mouseleave_callback_on_thread": _emscripten_set_mouseleave_callback_on_thread,
    "emscripten_set_mousemove_callback_on_thread": _emscripten_set_mousemove_callback_on_thread,
    "emscripten_set_mouseup_callback_on_thread": _emscripten_set_mouseup_callback_on_thread,
    "emscripten_set_pointerlockchange_callback_on_thread": _emscripten_set_pointerlockchange_callback_on_thread,
    "emscripten_set_resize_callback_on_thread": _emscripten_set_resize_callback_on_thread,
    "emscripten_set_touchcancel_callback_on_thread": _emscripten_set_touchcancel_callback_on_thread,
    "emscripten_set_touchend_callback_on_thread": _emscripten_set_touchend_callback_on_thread,
    "emscripten_set_touchmove_callback_on_thread": _emscripten_set_touchmove_callback_on_thread,
    "emscripten_set_touchstart_callback_on_thread": _emscripten_set_touchstart_callback_on_thread,
    "emscripten_set_visibilitychange_callback_on_thread": _emscripten_set_visibilitychange_callback_on_thread,
    "emscripten_set_wheel_callback_on_thread": _emscripten_set_wheel_callback_on_thread,
    "environ_get": _environ_get,
    "environ_sizes_get": _environ_sizes_get,
    "exit": _exit,
    "fd_close": _fd_close,
    "fd_read": _fd_read,
    "fd_seek": _fd_seek,
    "fd_write": _fd_write,
    "getTempRet0": _getTempRet0,
    "gettimeofday": _gettimeofday,
    "invoke_ii": invoke_ii,
    "invoke_iii": invoke_iii,
    "invoke_iiii": invoke_iiii,
    "invoke_vi": invoke_vi,
    "invoke_viii": invoke_viii,
    "memory": wasmMemory,
    "nanosleep": _nanosleep,
    "roundf": _roundf,
    "saveSetjmp": _saveSetjmp,
    "setTempRet0": _setTempRet0,
    "signal": _signal,
    "strptime": _strptime,
    "table": wasmTable,
    "testSetjmp": _testSetjmp,
    "time": _time,
    "timegm": _timegm
};
var asm = createWasm();
Module["asm"] = asm;
var ___wasm_call_ctors = Module["___wasm_call_ctors"] = function() {
    return Module["asm"]["__wasm_call_ctors"].apply(null, arguments)
}
;
var _atof = Module["_atof"] = function() {
    return Module["asm"]["atof"].apply(null, arguments)
}
;
var _strlen = Module["_strlen"] = function() {
    return Module["asm"]["strlen"].apply(null, arguments)
}
;
var _fopen = Module["_fopen"] = function() {
    return Module["asm"]["fopen"].apply(null, arguments)
}
;
var _Com_Error = Module["_Com_Error"] = function() {
    return Module["asm"]["Com_Error"].apply(null, arguments)
}
;
var _free = Module["_free"] = function() {
    return Module["asm"]["free"].apply(null, arguments)
}
;
var _strstr = Module["_strstr"] = function() {
    return Module["asm"]["strstr"].apply(null, arguments)
}
;
var ___errno_location = Module["___errno_location"] = function() {
    return Module["asm"]["__errno_location"].apply(null, arguments)
}
;
var _malloc = Module["_malloc"] = function() {
    return Module["asm"]["malloc"].apply(null, arguments)
}
;
var __Z11engine_mainiPPKc = Module["__Z11engine_mainiPPKc"] = function() {
    return Module["asm"]["_Z11engine_mainiPPKc"].apply(null, arguments)
}
;
var _realloc = Module["_realloc"] = function() {
    return Module["asm"]["realloc"].apply(null, arguments)
}
;
var _on_advideo_finished = Module["_on_advideo_finished"] = function() {
    return Module["asm"]["on_advideo_finished"].apply(null, arguments)
}
;
var _main = Module["_main"] = function() {
    return Module["asm"]["main"].apply(null, arguments)
}
;
var _libwebrtc_helper = Module["_libwebrtc_helper"] = function() {
    return Module["asm"]["libwebrtc_helper"].apply(null, arguments)
}
;
var _lws_helper = Module["_lws_helper"] = function() {
    return Module["asm"]["lws_helper"].apply(null, arguments)
}
;
var _emscripten_GetProcAddress = Module["_emscripten_GetProcAddress"] = function() {
    return Module["asm"]["emscripten_GetProcAddress"].apply(null, arguments)
}
;
var _htons = Module["_htons"] = function() {
    return Module["asm"]["htons"].apply(null, arguments)
}
;
var _ntohs = Module["_ntohs"] = function() {
    return Module["asm"]["ntohs"].apply(null, arguments)
}
;
var __get_tzname = Module["__get_tzname"] = function() {
    return Module["asm"]["_get_tzname"].apply(null, arguments)
}
;
var __get_daylight = Module["__get_daylight"] = function() {
    return Module["asm"]["_get_daylight"].apply(null, arguments)
}
;
var __get_timezone = Module["__get_timezone"] = function() {
    return Module["asm"]["_get_timezone"].apply(null, arguments)
}
;
var _setThrew = Module["_setThrew"] = function() {
    return Module["asm"]["setThrew"].apply(null, arguments)
}
;
var dynCall_ii = Module["dynCall_ii"] = function() {
    return Module["asm"]["dynCall_ii"].apply(null, arguments)
}
;
var dynCall_iii = Module["dynCall_iii"] = function() {
    return Module["asm"]["dynCall_iii"].apply(null, arguments)
}
;
var dynCall_iiii = Module["dynCall_iiii"] = function() {
    return Module["asm"]["dynCall_iiii"].apply(null, arguments)
}
;
var dynCall_vi = Module["dynCall_vi"] = function() {
    return Module["asm"]["dynCall_vi"].apply(null, arguments)
}
;
var dynCall_viii = Module["dynCall_viii"] = function() {
    return Module["asm"]["dynCall_viii"].apply(null, arguments)
}
;
var stackSave = Module["stackSave"] = function() {
    return Module["asm"]["stackSave"].apply(null, arguments)
}
;
var stackAlloc = Module["stackAlloc"] = function() {
    return Module["asm"]["stackAlloc"].apply(null, arguments)
}
;
var stackRestore = Module["stackRestore"] = function() {
    return Module["asm"]["stackRestore"].apply(null, arguments)
}
;
var __growWasmMemory = Module["__growWasmMemory"] = function() {
    return Module["asm"]["__growWasmMemory"].apply(null, arguments)
}
;
var dynCall_v = Module["dynCall_v"] = function() {
    return Module["asm"]["dynCall_v"].apply(null, arguments)
}
;
var dynCall_vii = Module["dynCall_vii"] = function() {
    return Module["asm"]["dynCall_vii"].apply(null, arguments)
}
;
var dynCall_viiii = Module["dynCall_viiii"] = function() {
    return Module["asm"]["dynCall_viiii"].apply(null, arguments)
}
;
var dynCall_viiiii = Module["dynCall_viiiii"] = function() {
    return Module["asm"]["dynCall_viiiii"].apply(null, arguments)
}
;
var dynCall_iiiii = Module["dynCall_iiiii"] = function() {
    return Module["asm"]["dynCall_iiiii"].apply(null, arguments)
}
;
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = function() {
    return Module["asm"]["dynCall_iiiiiii"].apply(null, arguments)
}
;
var dynCall_iiiiii = Module["dynCall_iiiiii"] = function() {
    return Module["asm"]["dynCall_iiiiii"].apply(null, arguments)
}
;
var dynCall_fi = Module["dynCall_fi"] = function() {
    return Module["asm"]["dynCall_fi"].apply(null, arguments)
}
;
var dynCall_vif = Module["dynCall_vif"] = function() {
    return Module["asm"]["dynCall_vif"].apply(null, arguments)
}
;
var dynCall_viiff = Module["dynCall_viiff"] = function() {
    return Module["asm"]["dynCall_viiff"].apply(null, arguments)
}
;
var dynCall_iififi = Module["dynCall_iififi"] = function() {
    return Module["asm"]["dynCall_iififi"].apply(null, arguments)
}
;
var dynCall_iiiififi = Module["dynCall_iiiififi"] = function() {
    return Module["asm"]["dynCall_iiiififi"].apply(null, arguments)
}
;
var dynCall_vifff = Module["dynCall_vifff"] = function() {
    return Module["asm"]["dynCall_vifff"].apply(null, arguments)
}
;
var dynCall_iiiiiiii = Module["dynCall_iiiiiiii"] = function() {
    return Module["asm"]["dynCall_iiiiiiii"].apply(null, arguments)
}
;
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = function() {
    return Module["asm"]["dynCall_viiiiiii"].apply(null, arguments)
}
;
var dynCall_jiji = Module["dynCall_jiji"] = function() {
    return Module["asm"]["dynCall_jiji"].apply(null, arguments)
}
;
var dynCall_ji = Module["dynCall_ji"] = function() {
    return Module["asm"]["dynCall_ji"].apply(null, arguments)
}
;
var dynCall_i = Module["dynCall_i"] = function() {
    return Module["asm"]["dynCall_i"].apply(null, arguments)
}
;
var dynCall_viid = Module["dynCall_viid"] = function() {
    return Module["asm"]["dynCall_viid"].apply(null, arguments)
}
;
var dynCall_viidd = Module["dynCall_viidd"] = function() {
    return Module["asm"]["dynCall_viidd"].apply(null, arguments)
}
;
var dynCall_viidii = Module["dynCall_viidii"] = function() {
    return Module["asm"]["dynCall_viidii"].apply(null, arguments)
}
;
var dynCall_iif = Module["dynCall_iif"] = function() {
    return Module["asm"]["dynCall_iif"].apply(null, arguments)
}
;
var dynCall_vid = Module["dynCall_vid"] = function() {
    return Module["asm"]["dynCall_vid"].apply(null, arguments)
}
;
var dynCall_di = Module["dynCall_di"] = function() {
    return Module["asm"]["dynCall_di"].apply(null, arguments)
}
;
var dynCall_viif = Module["dynCall_viif"] = function() {
    return Module["asm"]["dynCall_viif"].apply(null, arguments)
}
;
var dynCall_iiiiiiiiii = Module["dynCall_iiiiiiiiii"] = function() {
    return Module["asm"]["dynCall_iiiiiiiiii"].apply(null, arguments)
}
;
var dynCall_iiif = Module["dynCall_iiif"] = function() {
    return Module["asm"]["dynCall_iiif"].apply(null, arguments)
}
;
var dynCall_jii = Module["dynCall_jii"] = function() {
    return Module["asm"]["dynCall_jii"].apply(null, arguments)
}
;
var dynCall_fii = Module["dynCall_fii"] = function() {
    return Module["asm"]["dynCall_fii"].apply(null, arguments)
}
;
var dynCall_fiii = Module["dynCall_fiii"] = function() {
    return Module["asm"]["dynCall_fiii"].apply(null, arguments)
}
;
var dynCall_fifii = Module["dynCall_fifii"] = function() {
    return Module["asm"]["dynCall_fifii"].apply(null, arguments)
}
;
var dynCall_viffii = Module["dynCall_viffii"] = function() {
    return Module["asm"]["dynCall_viffii"].apply(null, arguments)
}
;
var dynCall_iiffii = Module["dynCall_iiffii"] = function() {
    return Module["asm"]["dynCall_iiffii"].apply(null, arguments)
}
;
var dynCall_iiiiiji = Module["dynCall_iiiiiji"] = function() {
    return Module["asm"]["dynCall_iiiiiji"].apply(null, arguments)
}
;
var dynCall_iiiij = Module["dynCall_iiiij"] = function() {
    return Module["asm"]["dynCall_iiiij"].apply(null, arguments)
}
;
var dynCall_viiiiii = Module["dynCall_viiiiii"] = function() {
    return Module["asm"]["dynCall_viiiiii"].apply(null, arguments)
}
;
var dynCall_viff = Module["dynCall_viff"] = function() {
    return Module["asm"]["dynCall_viff"].apply(null, arguments)
}
;
var dynCall_viiffff = Module["dynCall_viiffff"] = function() {
    return Module["asm"]["dynCall_viiffff"].apply(null, arguments)
}
;
var dynCall_vij = Module["dynCall_vij"] = function() {
    return Module["asm"]["dynCall_vij"].apply(null, arguments)
}
;
var dynCall_iiiiiiiiiii = Module["dynCall_iiiiiiiiiii"] = function() {
    return Module["asm"]["dynCall_iiiiiiiiiii"].apply(null, arguments)
}
;
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = function() {
    return Module["asm"]["dynCall_viiiiiiiiii"].apply(null, arguments)
}
;
var dynCall_iidiiii = Module["dynCall_iidiiii"] = function() {
    return Module["asm"]["dynCall_iidiiii"].apply(null, arguments)
}
;
var dynCall_vffff = Module["dynCall_vffff"] = function() {
    return Module["asm"]["dynCall_vffff"].apply(null, arguments)
}
;
var dynCall_vf = Module["dynCall_vf"] = function() {
    return Module["asm"]["dynCall_vf"].apply(null, arguments)
}
;
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = function() {
    return Module["asm"]["dynCall_viiiiiiii"].apply(null, arguments)
}
;
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = function() {
    return Module["asm"]["dynCall_viiiiiiiii"].apply(null, arguments)
}
;
var dynCall_vff = Module["dynCall_vff"] = function() {
    return Module["asm"]["dynCall_vff"].apply(null, arguments)
}
;
var dynCall_vfi = Module["dynCall_vfi"] = function() {
    return Module["asm"]["dynCall_vfi"].apply(null, arguments)
}
;
var dynCall_viffff = Module["dynCall_viffff"] = function() {
    return Module["asm"]["dynCall_viffff"].apply(null, arguments)
}
;
function invoke_vi(index, a1) {
    var sp = stackSave();
    try {
        dynCall_vi(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_viii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        dynCall_viii(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iii(index, a1, a2) {
    var sp = stackSave();
    try {
        return dynCall_iii(index, a1, a2)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_ii(index, a1) {
    var sp = stackSave();
    try {
        return dynCall_ii(index, a1)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
function invoke_iiii(index, a1, a2, a3) {
    var sp = stackSave();
    try {
        return dynCall_iiii(index, a1, a2, a3)
    } catch (e) {
        stackRestore(sp);
        if (e !== e + 0 && e !== "longjmp")
            throw e;
        _setThrew(1, 0)
    }
}
Module["asm"] = asm;
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;
Module["addOnPreMain"] = addOnPreMain;
Module["addOnExit"] = addOnExit;
Module["addRunDependency"] = addRunDependency;
Module["removeRunDependency"] = removeRunDependency;
Module["FS_createPreloadedFile"] = FS.createPreloadedFile;
Module["print"] = out;
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;
var calledRun;
function ExitStatus(status) {
    this.name = "ExitStatus";
    this.message = "Program terminated with exit(" + status + ")";
    this.status = status
}
var calledMain = false;
dependenciesFulfilled = function runCaller() {
    if (!calledRun)
        run();
    if (!calledRun)
        dependenciesFulfilled = runCaller
}
;
function callMain(args) {
    var entryFunction = Module["_main"];
    args = args || [];
    var argc = args.length + 1;
    var argv = stackAlloc((argc + 1) * 4);
    HEAP32[argv >> 2] = allocateUTF8OnStack(thisProgram);
    for (var i = 1; i < argc; i++) {
        HEAP32[(argv >> 2) + i] = allocateUTF8OnStack(args[i - 1])
    }
    HEAP32[(argv >> 2) + argc] = 0;
    try {
        var ret = entryFunction(argc, argv);
        exit(ret, true)
    } catch (e) {
        if (e instanceof ExitStatus) {
            return
        } else if (e == "SimulateInfiniteLoop") {
            noExitRuntime = true;
            return
        } else {
            if (typeof JS_OnException === "function")
                JS_OnException(e);
            var toLog = e;
            if (e && typeof e === "object" && e.stack) {
                toLog = [e, e.stack]
            }
            err("exception thrown: " + toLog);
            quit_(1, e)
        }
    } finally {
        calledMain = true
    }
}
function run(args) {
    args = args || arguments_;
    if (runDependencies > 0) {
        return
    }
    preRun();
    if (runDependencies > 0)
        return;
    function doRun() {
        if (calledRun)
            return;
        calledRun = true;
        if (ABORT)
            return;
        initRuntime();
        preMain();
        if (Module["onRuntimeInitialized"])
            Module["onRuntimeInitialized"]();
        if (shouldRunNow)
            callMain(args);
        postRun()
    }
    if (Module["setStatus"]) {
        Module["setStatus"]("Running...");
        setTimeout(function() {
            setTimeout(function() {
                Module["setStatus"]("")
            }, 1);
            doRun()
        }, 1)
    } else {
        doRun()
    }
}
Module["run"] = run;
function exit(status, implicit) {
    if (implicit && noExitRuntime && status === 0) {
        return
    }
    if (noExitRuntime) {} else {
        ABORT = true;
        EXITSTATUS = status;
        exitRuntime();
        if (Module["onExit"])
            Module["onExit"](status)
    }
    quit_(status, new ExitStatus(status))
}
if (Module["preInit"]) {
    if (typeof Module["preInit"] == "function")
        Module["preInit"] = [Module["preInit"]];
    while (Module["preInit"].length > 0) {
        Module["preInit"].pop()()
    }
}
var shouldRunNow = true;
if (Module["noInitialRun"])
    shouldRunNow = false;
noExitRuntime = true;
run();
