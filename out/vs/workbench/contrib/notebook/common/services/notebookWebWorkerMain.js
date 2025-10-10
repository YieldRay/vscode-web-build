/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*//******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

export function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

export var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

export function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

export function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

export function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

export function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

export function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

export function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

export function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

export function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

export function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

export function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

export var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

export function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

export function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

export function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
export function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
export function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

export function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

export function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

export function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

export function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

export function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

export function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

export function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

export function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

export function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

export function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

export function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}

export function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
        env.stack.push({ value: value, dispose: dispose, async: async });
    }
    else if (async) {
        env.stack.push({ async: true });
    }
    return value;

}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

export function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    function next() {
        while (env.stack.length) {
            var rec = env.stack.pop();
            try {
                var result = rec.dispose && rec.dispose.call(rec.value);
                if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
            }
            catch (e) {
                fail(e);
            }
        }
        if (env.hasError) throw env.error;
    }
    return next();
}

export default {
    __extends: __extends,
    __assign: __assign,
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet,
    __classPrivateFieldIn: __classPrivateFieldIn,
    __addDisposableResource: __addDisposableResource,
    __disposeResources: __disposeResources,
};


// out-build/vs/base/common/errors.js
var ErrorHandler = class {
  constructor() {
    this.listeners = [];
    this.unexpectedErrorHandler = function(e) {
      setTimeout(() => {
        if (e.stack) {
          if (ErrorNoTelemetry.isErrorNoTelemetry(e)) {
            throw new ErrorNoTelemetry(e.message + "\n\n" + e.stack);
          }
          throw new Error(e.message + "\n\n" + e.stack);
        }
        throw e;
      }, 0);
    };
  }
  addListener(listener) {
    this.listeners.push(listener);
    return () => {
      this._removeListener(listener);
    };
  }
  emit(e) {
    this.listeners.forEach((listener) => {
      listener(e);
    });
  }
  _removeListener(listener) {
    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }
  setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
    this.unexpectedErrorHandler = newUnexpectedErrorHandler;
  }
  getUnexpectedErrorHandler() {
    return this.unexpectedErrorHandler;
  }
  onUnexpectedError(e) {
    this.unexpectedErrorHandler(e);
    this.emit(e);
  }
  // For external errors, we don't want the listeners to be called
  onUnexpectedExternalError(e) {
    this.unexpectedErrorHandler(e);
  }
};
var errorHandler = new ErrorHandler();
function onUnexpectedError(e) {
  if (!isCancellationError(e)) {
    errorHandler.onUnexpectedError(e);
  }
  return void 0;
}
function transformErrorForSerialization(error) {
  if (error instanceof Error) {
    const { name, message, cause } = error;
    const stack = error.stacktrace || error.stack;
    return {
      $isError: true,
      name,
      message,
      stack,
      noTelemetry: ErrorNoTelemetry.isErrorNoTelemetry(error),
      cause: cause ? transformErrorForSerialization(cause) : void 0,
      code: error.code
    };
  }
  return error;
}
var canceledName = "Canceled";
function isCancellationError(error) {
  if (error instanceof CancellationError) {
    return true;
  }
  return error instanceof Error && error.name === canceledName && error.message === canceledName;
}
var CancellationError = class extends Error {
  constructor() {
    super(canceledName);
    this.name = this.message;
  }
};
var PendingMigrationError = class _PendingMigrationError extends Error {
  static {
    this._name = "PendingMigrationError";
  }
  static is(error) {
    return error instanceof _PendingMigrationError || error instanceof Error && error.name === _PendingMigrationError._name;
  }
  constructor(message) {
    super(message);
    this.name = _PendingMigrationError._name;
  }
};
function illegalState(name) {
  if (name) {
    return new Error(`Illegal state: ${name}`);
  } else {
    return new Error("Illegal state");
  }
}
var ErrorNoTelemetry = class _ErrorNoTelemetry extends Error {
  constructor(msg) {
    super(msg);
    this.name = "CodeExpectedError";
  }
  static fromError(err) {
    if (err instanceof _ErrorNoTelemetry) {
      return err;
    }
    const result = new _ErrorNoTelemetry();
    result.message = err.message;
    result.stack = err.stack;
    return result;
  }
  static isErrorNoTelemetry(err) {
    return err.name === "CodeExpectedError";
  }
};
var BugIndicatingError = class _BugIndicatingError extends Error {
  constructor(message) {
    super(message || "An unexpected bug occurred.");
    Object.setPrototypeOf(this, _BugIndicatingError.prototype);
  }
};

// out-build/vs/base/common/collections.js
var _a;
function groupBy(data, groupFn) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const element of data) {
    const key = groupFn(element);
    let target = result[key];
    if (!target) {
      target = result[key] = [];
    }
    target.push(element);
  }
  return result;
}
var SetWithKey = class {
  static {
    _a = Symbol.toStringTag;
  }
  constructor(values, toKey) {
    this.toKey = toKey;
    this._map = /* @__PURE__ */ new Map();
    this[_a] = "SetWithKey";
    for (const value of values) {
      this.add(value);
    }
  }
  get size() {
    return this._map.size;
  }
  add(value) {
    const key = this.toKey(value);
    this._map.set(key, value);
    return this;
  }
  delete(value) {
    return this._map.delete(this.toKey(value));
  }
  has(value) {
    return this._map.has(this.toKey(value));
  }
  *entries() {
    for (const entry of this._map.values()) {
      yield [entry, entry];
    }
  }
  keys() {
    return this.values();
  }
  *values() {
    for (const entry of this._map.values()) {
      yield entry;
    }
  }
  clear() {
    this._map.clear();
  }
  forEach(callbackfn, thisArg) {
    this._map.forEach((entry) => callbackfn.call(thisArg, entry, entry, this));
  }
  [Symbol.iterator]() {
    return this.values();
  }
};

// out-build/vs/base/common/arraysFind.js
function findLastIdxMonotonous(array, predicate, startIdx = 0, endIdxEx = array.length) {
  let i = startIdx;
  let j = endIdxEx;
  while (i < j) {
    const k = Math.floor((i + j) / 2);
    if (predicate(array[k])) {
      i = k + 1;
    } else {
      j = k;
    }
  }
  return i - 1;
}
var MonotonousArray = class _MonotonousArray {
  static {
    this.assertInvariants = false;
  }
  constructor(_array) {
    this._array = _array;
    this._findLastMonotonousLastIdx = 0;
  }
  /**
   * The predicate must be monotonous, i.e. `arr.map(predicate)` must be like `[true, ..., true, false, ..., false]`!
   * For subsequent calls, current predicate must be weaker than (or equal to) the previous predicate, i.e. more entries must be `true`.
   */
  findLastMonotonous(predicate) {
    if (_MonotonousArray.assertInvariants) {
      if (this._prevFindLastPredicate) {
        for (const item of this._array) {
          if (this._prevFindLastPredicate(item) && !predicate(item)) {
            throw new Error("MonotonousArray: current predicate must be weaker than (or equal to) the previous predicate.");
          }
        }
      }
      this._prevFindLastPredicate = predicate;
    }
    const idx = findLastIdxMonotonous(this._array, predicate, this._findLastMonotonousLastIdx);
    this._findLastMonotonousLastIdx = idx + 1;
    return idx === -1 ? void 0 : this._array[idx];
  }
};

// out-build/vs/base/common/arrays.js
var CompareResult;
(function(CompareResult2) {
  function isLessThan(result) {
    return result < 0;
  }
  CompareResult2.isLessThan = isLessThan;
  function isLessThanOrEqual(result) {
    return result <= 0;
  }
  CompareResult2.isLessThanOrEqual = isLessThanOrEqual;
  function isGreaterThan(result) {
    return result > 0;
  }
  CompareResult2.isGreaterThan = isGreaterThan;
  function isNeitherLessOrGreaterThan(result) {
    return result === 0;
  }
  CompareResult2.isNeitherLessOrGreaterThan = isNeitherLessOrGreaterThan;
  CompareResult2.greaterThan = 1;
  CompareResult2.lessThan = -1;
  CompareResult2.neitherLessOrGreaterThan = 0;
})(CompareResult || (CompareResult = {}));
function compareBy(selector, comparator) {
  return (a, b) => comparator(selector(a), selector(b));
}
var numberComparator = (a, b) => a - b;
var CallbackIterable = class _CallbackIterable {
  static {
    this.empty = new _CallbackIterable((_callback) => {
    });
  }
  constructor(iterate) {
    this.iterate = iterate;
  }
  forEach(handler) {
    this.iterate((item) => {
      handler(item);
      return true;
    });
  }
  toArray() {
    const result = [];
    this.iterate((item) => {
      result.push(item);
      return true;
    });
    return result;
  }
  filter(predicate) {
    return new _CallbackIterable((cb) => this.iterate((item) => predicate(item) ? cb(item) : true));
  }
  map(mapFn) {
    return new _CallbackIterable((cb) => this.iterate((item) => cb(mapFn(item))));
  }
  some(predicate) {
    let result = false;
    this.iterate((item) => {
      result = predicate(item);
      return !result;
    });
    return result;
  }
  findFirst(predicate) {
    let result;
    this.iterate((item) => {
      if (predicate(item)) {
        result = item;
        return false;
      }
      return true;
    });
    return result;
  }
  findLast(predicate) {
    let result;
    this.iterate((item) => {
      if (predicate(item)) {
        result = item;
      }
      return true;
    });
    return result;
  }
  findLastMaxBy(comparator) {
    let result;
    let first = true;
    this.iterate((item) => {
      if (first || CompareResult.isGreaterThan(comparator(item, result))) {
        first = false;
        result = item;
      }
      return true;
    });
    return result;
  }
};

// out-build/vs/base/common/map.js
var _a2;
var _b;
var _c;
var ResourceMapEntry = class {
  constructor(uri, value) {
    this.uri = uri;
    this.value = value;
  }
};
function isEntries(arg) {
  return Array.isArray(arg);
}
var ResourceMap = class _ResourceMap {
  static {
    this.defaultToKey = (resource) => resource.toString();
  }
  constructor(arg, toKey) {
    this[_a2] = "ResourceMap";
    if (arg instanceof _ResourceMap) {
      this.map = new Map(arg.map);
      this.toKey = toKey ?? _ResourceMap.defaultToKey;
    } else if (isEntries(arg)) {
      this.map = /* @__PURE__ */ new Map();
      this.toKey = toKey ?? _ResourceMap.defaultToKey;
      for (const [resource, value] of arg) {
        this.set(resource, value);
      }
    } else {
      this.map = /* @__PURE__ */ new Map();
      this.toKey = arg ?? _ResourceMap.defaultToKey;
    }
  }
  set(resource, value) {
    this.map.set(this.toKey(resource), new ResourceMapEntry(resource, value));
    return this;
  }
  get(resource) {
    return this.map.get(this.toKey(resource))?.value;
  }
  has(resource) {
    return this.map.has(this.toKey(resource));
  }
  get size() {
    return this.map.size;
  }
  clear() {
    this.map.clear();
  }
  delete(resource) {
    return this.map.delete(this.toKey(resource));
  }
  forEach(clb, thisArg) {
    if (typeof thisArg !== "undefined") {
      clb = clb.bind(thisArg);
    }
    for (const [_, entry] of this.map) {
      clb(entry.value, entry.uri, this);
    }
  }
  *values() {
    for (const entry of this.map.values()) {
      yield entry.value;
    }
  }
  *keys() {
    for (const entry of this.map.values()) {
      yield entry.uri;
    }
  }
  *entries() {
    for (const entry of this.map.values()) {
      yield [entry.uri, entry.value];
    }
  }
  *[(_a2 = Symbol.toStringTag, Symbol.iterator)]() {
    for (const [, entry] of this.map) {
      yield [entry.uri, entry.value];
    }
  }
};
var ResourceSet = class {
  constructor(entriesOrKey, toKey) {
    this[_b] = "ResourceSet";
    if (!entriesOrKey || typeof entriesOrKey === "function") {
      this._map = new ResourceMap(entriesOrKey);
    } else {
      this._map = new ResourceMap(toKey);
      entriesOrKey.forEach(this.add, this);
    }
  }
  get size() {
    return this._map.size;
  }
  add(value) {
    this._map.set(value, value);
    return this;
  }
  clear() {
    this._map.clear();
  }
  delete(value) {
    return this._map.delete(value);
  }
  forEach(callbackfn, thisArg) {
    this._map.forEach((_value, key) => callbackfn.call(thisArg, key, key, this));
  }
  has(value) {
    return this._map.has(value);
  }
  entries() {
    return this._map.entries();
  }
  keys() {
    return this._map.keys();
  }
  values() {
    return this._map.keys();
  }
  [(_b = Symbol.toStringTag, Symbol.iterator)]() {
    return this.keys();
  }
};
var Touch;
(function(Touch2) {
  Touch2[Touch2["None"] = 0] = "None";
  Touch2[Touch2["AsOld"] = 1] = "AsOld";
  Touch2[Touch2["AsNew"] = 2] = "AsNew";
})(Touch || (Touch = {}));
var LinkedMap = class {
  constructor() {
    this[_c] = "LinkedMap";
    this._map = /* @__PURE__ */ new Map();
    this._head = void 0;
    this._tail = void 0;
    this._size = 0;
    this._state = 0;
  }
  clear() {
    this._map.clear();
    this._head = void 0;
    this._tail = void 0;
    this._size = 0;
    this._state++;
  }
  isEmpty() {
    return !this._head && !this._tail;
  }
  get size() {
    return this._size;
  }
  get first() {
    return this._head?.value;
  }
  get last() {
    return this._tail?.value;
  }
  has(key) {
    return this._map.has(key);
  }
  get(key, touch = 0) {
    const item = this._map.get(key);
    if (!item) {
      return void 0;
    }
    if (touch !== 0) {
      this.touch(item, touch);
    }
    return item.value;
  }
  set(key, value, touch = 0) {
    let item = this._map.get(key);
    if (item) {
      item.value = value;
      if (touch !== 0) {
        this.touch(item, touch);
      }
    } else {
      item = { key, value, next: void 0, previous: void 0 };
      switch (touch) {
        case 0:
          this.addItemLast(item);
          break;
        case 1:
          this.addItemFirst(item);
          break;
        case 2:
          this.addItemLast(item);
          break;
        default:
          this.addItemLast(item);
          break;
      }
      this._map.set(key, item);
      this._size++;
    }
    return this;
  }
  delete(key) {
    return !!this.remove(key);
  }
  remove(key) {
    const item = this._map.get(key);
    if (!item) {
      return void 0;
    }
    this._map.delete(key);
    this.removeItem(item);
    this._size--;
    return item.value;
  }
  shift() {
    if (!this._head && !this._tail) {
      return void 0;
    }
    if (!this._head || !this._tail) {
      throw new Error("Invalid list");
    }
    const item = this._head;
    this._map.delete(item.key);
    this.removeItem(item);
    this._size--;
    return item.value;
  }
  forEach(callbackfn, thisArg) {
    const state = this._state;
    let current = this._head;
    while (current) {
      if (thisArg) {
        callbackfn.bind(thisArg)(current.value, current.key, this);
      } else {
        callbackfn(current.value, current.key, this);
      }
      if (this._state !== state) {
        throw new Error(`LinkedMap got modified during iteration.`);
      }
      current = current.next;
    }
  }
  keys() {
    const map = this;
    const state = this._state;
    let current = this._head;
    const iterator = {
      [Symbol.iterator]() {
        return iterator;
      },
      next() {
        if (map._state !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        if (current) {
          const result = { value: current.key, done: false };
          current = current.next;
          return result;
        } else {
          return { value: void 0, done: true };
        }
      }
    };
    return iterator;
  }
  values() {
    const map = this;
    const state = this._state;
    let current = this._head;
    const iterator = {
      [Symbol.iterator]() {
        return iterator;
      },
      next() {
        if (map._state !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        if (current) {
          const result = { value: current.value, done: false };
          current = current.next;
          return result;
        } else {
          return { value: void 0, done: true };
        }
      }
    };
    return iterator;
  }
  entries() {
    const map = this;
    const state = this._state;
    let current = this._head;
    const iterator = {
      [Symbol.iterator]() {
        return iterator;
      },
      next() {
        if (map._state !== state) {
          throw new Error(`LinkedMap got modified during iteration.`);
        }
        if (current) {
          const result = { value: [current.key, current.value], done: false };
          current = current.next;
          return result;
        } else {
          return { value: void 0, done: true };
        }
      }
    };
    return iterator;
  }
  [(_c = Symbol.toStringTag, Symbol.iterator)]() {
    return this.entries();
  }
  trimOld(newSize) {
    if (newSize >= this.size) {
      return;
    }
    if (newSize === 0) {
      this.clear();
      return;
    }
    let current = this._head;
    let currentSize = this.size;
    while (current && currentSize > newSize) {
      this._map.delete(current.key);
      current = current.next;
      currentSize--;
    }
    this._head = current;
    this._size = currentSize;
    if (current) {
      current.previous = void 0;
    }
    this._state++;
  }
  trimNew(newSize) {
    if (newSize >= this.size) {
      return;
    }
    if (newSize === 0) {
      this.clear();
      return;
    }
    let current = this._tail;
    let currentSize = this.size;
    while (current && currentSize > newSize) {
      this._map.delete(current.key);
      current = current.previous;
      currentSize--;
    }
    this._tail = current;
    this._size = currentSize;
    if (current) {
      current.next = void 0;
    }
    this._state++;
  }
  addItemFirst(item) {
    if (!this._head && !this._tail) {
      this._tail = item;
    } else if (!this._head) {
      throw new Error("Invalid list");
    } else {
      item.next = this._head;
      this._head.previous = item;
    }
    this._head = item;
    this._state++;
  }
  addItemLast(item) {
    if (!this._head && !this._tail) {
      this._head = item;
    } else if (!this._tail) {
      throw new Error("Invalid list");
    } else {
      item.previous = this._tail;
      this._tail.next = item;
    }
    this._tail = item;
    this._state++;
  }
  removeItem(item) {
    if (item === this._head && item === this._tail) {
      this._head = void 0;
      this._tail = void 0;
    } else if (item === this._head) {
      if (!item.next) {
        throw new Error("Invalid list");
      }
      item.next.previous = void 0;
      this._head = item.next;
    } else if (item === this._tail) {
      if (!item.previous) {
        throw new Error("Invalid list");
      }
      item.previous.next = void 0;
      this._tail = item.previous;
    } else {
      const next = item.next;
      const previous = item.previous;
      if (!next || !previous) {
        throw new Error("Invalid list");
      }
      next.previous = previous;
      previous.next = next;
    }
    item.next = void 0;
    item.previous = void 0;
    this._state++;
  }
  touch(item, touch) {
    if (!this._head || !this._tail) {
      throw new Error("Invalid list");
    }
    if (touch !== 1 && touch !== 2) {
      return;
    }
    if (touch === 1) {
      if (item === this._head) {
        return;
      }
      const next = item.next;
      const previous = item.previous;
      if (item === this._tail) {
        previous.next = void 0;
        this._tail = previous;
      } else {
        next.previous = previous;
        previous.next = next;
      }
      item.previous = void 0;
      item.next = this._head;
      this._head.previous = item;
      this._head = item;
      this._state++;
    } else if (touch === 2) {
      if (item === this._tail) {
        return;
      }
      const next = item.next;
      const previous = item.previous;
      if (item === this._head) {
        next.previous = void 0;
        this._head = next;
      } else {
        next.previous = previous;
        previous.next = next;
      }
      item.next = void 0;
      item.previous = this._tail;
      this._tail.next = item;
      this._tail = item;
      this._state++;
    }
  }
  toJSON() {
    const data = [];
    this.forEach((value, key) => {
      data.push([key, value]);
    });
    return data;
  }
  fromJSON(data) {
    this.clear();
    for (const [key, value] of data) {
      this.set(key, value);
    }
  }
};
var Cache = class extends LinkedMap {
  constructor(limit, ratio = 1) {
    super();
    this._limit = limit;
    this._ratio = Math.min(Math.max(0, ratio), 1);
  }
  get limit() {
    return this._limit;
  }
  set limit(limit) {
    this._limit = limit;
    this.checkTrim();
  }
  get ratio() {
    return this._ratio;
  }
  set ratio(ratio) {
    this._ratio = Math.min(Math.max(0, ratio), 1);
    this.checkTrim();
  }
  get(key, touch = 2) {
    return super.get(key, touch);
  }
  peek(key) {
    return super.get(
      key,
      0
      /* Touch.None */
    );
  }
  set(key, value) {
    super.set(
      key,
      value,
      2
      /* Touch.AsNew */
    );
    return this;
  }
  checkTrim() {
    if (this.size > this._limit) {
      this.trim(Math.round(this._limit * this._ratio));
    }
  }
};
var LRUCache = class extends Cache {
  constructor(limit, ratio = 1) {
    super(limit, ratio);
  }
  trim(newSize) {
    this.trimOld(newSize);
  }
  set(key, value) {
    super.set(key, value);
    this.checkTrim();
    return this;
  }
};
var SetMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  add(key, value) {
    let values = this.map.get(key);
    if (!values) {
      values = /* @__PURE__ */ new Set();
      this.map.set(key, values);
    }
    values.add(value);
  }
  delete(key, value) {
    const values = this.map.get(key);
    if (!values) {
      return;
    }
    values.delete(value);
    if (values.size === 0) {
      this.map.delete(key);
    }
  }
  forEach(key, fn) {
    const values = this.map.get(key);
    if (!values) {
      return;
    }
    values.forEach(fn);
  }
  get(key) {
    const values = this.map.get(key);
    if (!values) {
      return /* @__PURE__ */ new Set();
    }
    return values;
  }
};

// out-build/vs/base/common/types.js
function isIterable(obj) {
  return !!obj && typeof obj[Symbol.iterator] === "function";
}

// out-build/vs/base/common/iterator.js
var Iterable;
(function(Iterable2) {
  function is(thing) {
    return !!thing && typeof thing === "object" && typeof thing[Symbol.iterator] === "function";
  }
  Iterable2.is = is;
  const _empty2 = Object.freeze([]);
  function empty() {
    return _empty2;
  }
  Iterable2.empty = empty;
  function* single(element) {
    yield element;
  }
  Iterable2.single = single;
  function wrap(iterableOrElement) {
    if (is(iterableOrElement)) {
      return iterableOrElement;
    } else {
      return single(iterableOrElement);
    }
  }
  Iterable2.wrap = wrap;
  function from(iterable) {
    return iterable || _empty2;
  }
  Iterable2.from = from;
  function* reverse(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      yield array[i];
    }
  }
  Iterable2.reverse = reverse;
  function isEmpty(iterable) {
    return !iterable || iterable[Symbol.iterator]().next().done === true;
  }
  Iterable2.isEmpty = isEmpty;
  function first(iterable) {
    return iterable[Symbol.iterator]().next().value;
  }
  Iterable2.first = first;
  function some(iterable, predicate) {
    let i = 0;
    for (const element of iterable) {
      if (predicate(element, i++)) {
        return true;
      }
    }
    return false;
  }
  Iterable2.some = some;
  function every(iterable, predicate) {
    let i = 0;
    for (const element of iterable) {
      if (!predicate(element, i++)) {
        return false;
      }
    }
    return true;
  }
  Iterable2.every = every;
  function find(iterable, predicate) {
    for (const element of iterable) {
      if (predicate(element)) {
        return element;
      }
    }
    return void 0;
  }
  Iterable2.find = find;
  function* filter2(iterable, predicate) {
    for (const element of iterable) {
      if (predicate(element)) {
        yield element;
      }
    }
  }
  Iterable2.filter = filter2;
  function* map(iterable, fn) {
    let index = 0;
    for (const element of iterable) {
      yield fn(element, index++);
    }
  }
  Iterable2.map = map;
  function* flatMap(iterable, fn) {
    let index = 0;
    for (const element of iterable) {
      yield* fn(element, index++);
    }
  }
  Iterable2.flatMap = flatMap;
  function* concat(...iterables) {
    for (const item of iterables) {
      if (isIterable(item)) {
        yield* item;
      } else {
        yield item;
      }
    }
  }
  Iterable2.concat = concat;
  function reduce(iterable, reducer, initialValue) {
    let value = initialValue;
    for (const element of iterable) {
      value = reducer(value, element);
    }
    return value;
  }
  Iterable2.reduce = reduce;
  function length(iterable) {
    let count = 0;
    for (const _ of iterable) {
      count++;
    }
    return count;
  }
  Iterable2.length = length;
  function* slice(arr, from2, to = arr.length) {
    if (from2 < -arr.length) {
      from2 = 0;
    }
    if (from2 < 0) {
      from2 += arr.length;
    }
    if (to < 0) {
      to += arr.length;
    } else if (to > arr.length) {
      to = arr.length;
    }
    for (; from2 < to; from2++) {
      yield arr[from2];
    }
  }
  Iterable2.slice = slice;
  function consume(iterable, atMost = Number.POSITIVE_INFINITY) {
    const consumed = [];
    if (atMost === 0) {
      return [consumed, iterable];
    }
    const iterator = iterable[Symbol.iterator]();
    for (let i = 0; i < atMost; i++) {
      const next = iterator.next();
      if (next.done) {
        return [consumed, Iterable2.empty()];
      }
      consumed.push(next.value);
    }
    return [consumed, { [Symbol.iterator]() {
      return iterator;
    } }];
  }
  Iterable2.consume = consume;
  async function asyncToArray(iterable) {
    const result = [];
    for await (const item of iterable) {
      result.push(item);
    }
    return result;
  }
  Iterable2.asyncToArray = asyncToArray;
  async function asyncToArrayFlat(iterable) {
    let result = [];
    for await (const item of iterable) {
      result = result.concat(item);
    }
    return result;
  }
  Iterable2.asyncToArrayFlat = asyncToArrayFlat;
})(Iterable || (Iterable = {}));

// out-build/vs/base/common/lifecycle.js
var TRACK_DISPOSABLES = false;
var disposableTracker = null;
var DisposableTracker = class _DisposableTracker {
  constructor() {
    this.livingDisposables = /* @__PURE__ */ new Map();
  }
  static {
    this.idx = 0;
  }
  getDisposableData(d) {
    let val = this.livingDisposables.get(d);
    if (!val) {
      val = { parent: null, source: null, isSingleton: false, value: d, idx: _DisposableTracker.idx++ };
      this.livingDisposables.set(d, val);
    }
    return val;
  }
  trackDisposable(d) {
    const data = this.getDisposableData(d);
    if (!data.source) {
      data.source = new Error().stack;
    }
  }
  setParent(child, parent) {
    const data = this.getDisposableData(child);
    data.parent = parent;
  }
  markAsDisposed(x) {
    this.livingDisposables.delete(x);
  }
  markAsSingleton(disposable) {
    this.getDisposableData(disposable).isSingleton = true;
  }
  getRootParent(data, cache) {
    const cacheValue = cache.get(data);
    if (cacheValue) {
      return cacheValue;
    }
    const result = data.parent ? this.getRootParent(this.getDisposableData(data.parent), cache) : data;
    cache.set(data, result);
    return result;
  }
  getTrackedDisposables() {
    const rootParentCache = /* @__PURE__ */ new Map();
    const leaking = [...this.livingDisposables.entries()].filter(([, v]) => v.source !== null && !this.getRootParent(v, rootParentCache).isSingleton).flatMap(([k]) => k);
    return leaking;
  }
  computeLeakingDisposables(maxReported = 10, preComputedLeaks) {
    let uncoveredLeakingObjs;
    if (preComputedLeaks) {
      uncoveredLeakingObjs = preComputedLeaks;
    } else {
      const rootParentCache = /* @__PURE__ */ new Map();
      const leakingObjects = [...this.livingDisposables.values()].filter((info) => info.source !== null && !this.getRootParent(info, rootParentCache).isSingleton);
      if (leakingObjects.length === 0) {
        return;
      }
      const leakingObjsSet = new Set(leakingObjects.map((o) => o.value));
      uncoveredLeakingObjs = leakingObjects.filter((l) => {
        return !(l.parent && leakingObjsSet.has(l.parent));
      });
      if (uncoveredLeakingObjs.length === 0) {
        throw new Error("There are cyclic diposable chains!");
      }
    }
    if (!uncoveredLeakingObjs) {
      return void 0;
    }
    function getStackTracePath(leaking) {
      function removePrefix(array, linesToRemove) {
        while (array.length > 0 && linesToRemove.some((regexp) => typeof regexp === "string" ? regexp === array[0] : array[0].match(regexp))) {
          array.shift();
        }
      }
      const lines = leaking.source.split("\n").map((p) => p.trim().replace("at ", "")).filter((l) => l !== "");
      removePrefix(lines, ["Error", /^trackDisposable \(.*\)$/, /^DisposableTracker.trackDisposable \(.*\)$/]);
      return lines.reverse();
    }
    const stackTraceStarts = new SetMap();
    for (const leaking of uncoveredLeakingObjs) {
      const stackTracePath = getStackTracePath(leaking);
      for (let i2 = 0; i2 <= stackTracePath.length; i2++) {
        stackTraceStarts.add(stackTracePath.slice(0, i2).join("\n"), leaking);
      }
    }
    uncoveredLeakingObjs.sort(compareBy((l) => l.idx, numberComparator));
    let message = "";
    let i = 0;
    for (const leaking of uncoveredLeakingObjs.slice(0, maxReported)) {
      i++;
      const stackTracePath = getStackTracePath(leaking);
      const stackTraceFormattedLines = [];
      for (let i2 = 0; i2 < stackTracePath.length; i2++) {
        let line = stackTracePath[i2];
        const starts = stackTraceStarts.get(stackTracePath.slice(0, i2 + 1).join("\n"));
        line = `(shared with ${starts.size}/${uncoveredLeakingObjs.length} leaks) at ${line}`;
        const prevStarts = stackTraceStarts.get(stackTracePath.slice(0, i2).join("\n"));
        const continuations = groupBy([...prevStarts].map((d) => getStackTracePath(d)[i2]), (v) => v);
        delete continuations[stackTracePath[i2]];
        for (const [cont, set] of Object.entries(continuations)) {
          stackTraceFormattedLines.unshift(`    - stacktraces of ${set.length} other leaks continue with ${cont}`);
        }
        stackTraceFormattedLines.unshift(line);
      }
      message += `


==================== Leaking disposable ${i}/${uncoveredLeakingObjs.length}: ${leaking.value.constructor.name} ====================
${stackTraceFormattedLines.join("\n")}
============================================================

`;
    }
    if (uncoveredLeakingObjs.length > maxReported) {
      message += `


... and ${uncoveredLeakingObjs.length - maxReported} more leaking disposables

`;
    }
    return { leaks: uncoveredLeakingObjs, details: message };
  }
};
function setDisposableTracker(tracker) {
  disposableTracker = tracker;
}
if (TRACK_DISPOSABLES) {
  const __is_disposable_tracked__ = "__is_disposable_tracked__";
  setDisposableTracker(new class {
    trackDisposable(x) {
      const stack = new Error("Potentially leaked disposable").stack;
      setTimeout(() => {
        if (!x[__is_disposable_tracked__]) {
          console.log(stack);
        }
      }, 3e3);
    }
    setParent(child, parent) {
      if (child && child !== Disposable.None) {
        try {
          child[__is_disposable_tracked__] = true;
        } catch {
        }
      }
    }
    markAsDisposed(disposable) {
      if (disposable && disposable !== Disposable.None) {
        try {
          disposable[__is_disposable_tracked__] = true;
        } catch {
        }
      }
    }
    markAsSingleton(disposable) {
    }
  }());
}
function trackDisposable(x) {
  disposableTracker?.trackDisposable(x);
  return x;
}
function markAsDisposed(disposable) {
  disposableTracker?.markAsDisposed(disposable);
}
function setParentOfDisposable(child, parent) {
  disposableTracker?.setParent(child, parent);
}
function setParentOfDisposables(children, parent) {
  if (!disposableTracker) {
    return;
  }
  for (const child of children) {
    disposableTracker.setParent(child, parent);
  }
}
function dispose(arg) {
  if (Iterable.is(arg)) {
    const errors = [];
    for (const d of arg) {
      if (d) {
        try {
          d.dispose();
        } catch (e) {
          errors.push(e);
        }
      }
    }
    if (errors.length === 1) {
      throw errors[0];
    } else if (errors.length > 1) {
      throw new AggregateError(errors, "Encountered errors while disposing of store");
    }
    return Array.isArray(arg) ? [] : arg;
  } else if (arg) {
    arg.dispose();
    return arg;
  }
}
function combinedDisposable(...disposables) {
  const parent = toDisposable(() => dispose(disposables));
  setParentOfDisposables(disposables, parent);
  return parent;
}
var FunctionDisposable = class {
  constructor(fn) {
    this._isDisposed = false;
    this._fn = fn;
    trackDisposable(this);
  }
  dispose() {
    if (this._isDisposed) {
      return;
    }
    if (!this._fn) {
      throw new Error(`Unbound disposable context: Need to use an arrow function to preserve the value of this`);
    }
    this._isDisposed = true;
    markAsDisposed(this);
    this._fn();
  }
};
function toDisposable(fn) {
  return new FunctionDisposable(fn);
}
var DisposableStore = class _DisposableStore {
  static {
    this.DISABLE_DISPOSED_WARNING = false;
  }
  constructor() {
    this._toDispose = /* @__PURE__ */ new Set();
    this._isDisposed = false;
    trackDisposable(this);
  }
  /**
   * Dispose of all registered disposables and mark this object as disposed.
   *
   * Any future disposables added to this object will be disposed of on `add`.
   */
  dispose() {
    if (this._isDisposed) {
      return;
    }
    markAsDisposed(this);
    this._isDisposed = true;
    this.clear();
  }
  /**
   * @return `true` if this object has been disposed of.
   */
  get isDisposed() {
    return this._isDisposed;
  }
  /**
   * Dispose of all registered disposables but do not mark this object as disposed.
   */
  clear() {
    if (this._toDispose.size === 0) {
      return;
    }
    try {
      dispose(this._toDispose);
    } finally {
      this._toDispose.clear();
    }
  }
  /**
   * Add a new {@link IDisposable disposable} to the collection.
   */
  add(o) {
    if (!o || o === Disposable.None) {
      return o;
    }
    if (o === this) {
      throw new Error("Cannot register a disposable on itself!");
    }
    setParentOfDisposable(o, this);
    if (this._isDisposed) {
      if (!_DisposableStore.DISABLE_DISPOSED_WARNING) {
        console.warn(new Error("Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!").stack);
      }
    } else {
      this._toDispose.add(o);
    }
    return o;
  }
  /**
   * Deletes a disposable from store and disposes of it. This will not throw or warn and proceed to dispose the
   * disposable even when the disposable is not part in the store.
   */
  delete(o) {
    if (!o) {
      return;
    }
    if (o === this) {
      throw new Error("Cannot dispose a disposable on itself!");
    }
    this._toDispose.delete(o);
    o.dispose();
  }
  /**
   * Deletes the value from the store, but does not dispose it.
   */
  deleteAndLeak(o) {
    if (!o) {
      return;
    }
    if (this._toDispose.has(o)) {
      this._toDispose.delete(o);
      setParentOfDisposable(o, null);
    }
  }
  assertNotDisposed() {
    if (this._isDisposed) {
      onUnexpectedError(new BugIndicatingError("Object disposed"));
    }
  }
};
var Disposable = class {
  static {
    this.None = Object.freeze({ dispose() {
    } });
  }
  constructor() {
    this._store = new DisposableStore();
    trackDisposable(this);
    setParentOfDisposable(this._store, this);
  }
  dispose() {
    markAsDisposed(this);
    this._store.dispose();
  }
  /**
   * Adds `o` to the collection of disposables managed by this object.
   */
  _register(o) {
    if (o === this) {
      throw new Error("Cannot register a disposable on itself!");
    }
    return this._store.add(o);
  }
};

// out-build/vs/base/common/linkedList.js
var Node = class _Node {
  static {
    this.Undefined = new _Node(void 0);
  }
  constructor(element) {
    this.element = element;
    this.next = _Node.Undefined;
    this.prev = _Node.Undefined;
  }
};
var LinkedList = class {
  constructor() {
    this._first = Node.Undefined;
    this._last = Node.Undefined;
    this._size = 0;
  }
  get size() {
    return this._size;
  }
  isEmpty() {
    return this._first === Node.Undefined;
  }
  clear() {
    let node = this._first;
    while (node !== Node.Undefined) {
      const next = node.next;
      node.prev = Node.Undefined;
      node.next = Node.Undefined;
      node = next;
    }
    this._first = Node.Undefined;
    this._last = Node.Undefined;
    this._size = 0;
  }
  unshift(element) {
    return this._insert(element, false);
  }
  push(element) {
    return this._insert(element, true);
  }
  _insert(element, atTheEnd) {
    const newNode = new Node(element);
    if (this._first === Node.Undefined) {
      this._first = newNode;
      this._last = newNode;
    } else if (atTheEnd) {
      const oldLast = this._last;
      this._last = newNode;
      newNode.prev = oldLast;
      oldLast.next = newNode;
    } else {
      const oldFirst = this._first;
      this._first = newNode;
      newNode.next = oldFirst;
      oldFirst.prev = newNode;
    }
    this._size += 1;
    let didRemove = false;
    return () => {
      if (!didRemove) {
        didRemove = true;
        this._remove(newNode);
      }
    };
  }
  shift() {
    if (this._first === Node.Undefined) {
      return void 0;
    } else {
      const res = this._first.element;
      this._remove(this._first);
      return res;
    }
  }
  pop() {
    if (this._last === Node.Undefined) {
      return void 0;
    } else {
      const res = this._last.element;
      this._remove(this._last);
      return res;
    }
  }
  _remove(node) {
    if (node.prev !== Node.Undefined && node.next !== Node.Undefined) {
      const anchor = node.prev;
      anchor.next = node.next;
      node.next.prev = anchor;
    } else if (node.prev === Node.Undefined && node.next === Node.Undefined) {
      this._first = Node.Undefined;
      this._last = Node.Undefined;
    } else if (node.next === Node.Undefined) {
      this._last = this._last.prev;
      this._last.next = Node.Undefined;
    } else if (node.prev === Node.Undefined) {
      this._first = this._first.next;
      this._first.prev = Node.Undefined;
    }
    this._size -= 1;
  }
  *[Symbol.iterator]() {
    let node = this._first;
    while (node !== Node.Undefined) {
      yield node.element;
      node = node.next;
    }
  }
};

// out-build/vs/base/common/stopwatch.js
var performanceNow = globalThis.performance.now.bind(globalThis.performance);
var StopWatch = class _StopWatch {
  static create(highResolution) {
    return new _StopWatch(highResolution);
  }
  constructor(highResolution) {
    this._now = highResolution === false ? Date.now : performanceNow;
    this._startTime = this._now();
    this._stopTime = -1;
  }
  stop() {
    this._stopTime = this._now();
  }
  reset() {
    this._startTime = this._now();
    this._stopTime = -1;
  }
  elapsed() {
    if (this._stopTime !== -1) {
      return this._stopTime - this._startTime;
    }
    return this._now() - this._startTime;
  }
};

// out-build/vs/base/common/event.js
var _enableDisposeWithListenerWarning = false;
var _enableSnapshotPotentialLeakWarning = false;
var Event;
(function(Event2) {
  Event2.None = () => Disposable.None;
  function _addLeakageTraceLogic(options) {
    if (_enableSnapshotPotentialLeakWarning) {
      const { onDidAddListener: origListenerDidAdd } = options;
      const stack = Stacktrace.create();
      let count = 0;
      options.onDidAddListener = () => {
        if (++count === 2) {
          console.warn("snapshotted emitter LIKELY used public and SHOULD HAVE BEEN created with DisposableStore. snapshotted here");
          stack.print();
        }
        origListenerDidAdd?.();
      };
    }
  }
  function defer(event, disposable) {
    return debounce(event, () => void 0, 0, void 0, true, void 0, disposable);
  }
  Event2.defer = defer;
  function once(event) {
    return (listener, thisArgs = null, disposables) => {
      let didFire = false;
      let result = void 0;
      result = event((e) => {
        if (didFire) {
          return;
        } else if (result) {
          result.dispose();
        } else {
          didFire = true;
        }
        return listener.call(thisArgs, e);
      }, null, disposables);
      if (didFire) {
        result.dispose();
      }
      return result;
    };
  }
  Event2.once = once;
  function onceIf(event, condition) {
    return Event2.once(Event2.filter(event, condition));
  }
  Event2.onceIf = onceIf;
  function map(event, map2, disposable) {
    return snapshot((listener, thisArgs = null, disposables) => event((i) => listener.call(thisArgs, map2(i)), null, disposables), disposable);
  }
  Event2.map = map;
  function forEach(event, each, disposable) {
    return snapshot((listener, thisArgs = null, disposables) => event((i) => {
      each(i);
      listener.call(thisArgs, i);
    }, null, disposables), disposable);
  }
  Event2.forEach = forEach;
  function filter2(event, filter3, disposable) {
    return snapshot((listener, thisArgs = null, disposables) => event((e) => filter3(e) && listener.call(thisArgs, e), null, disposables), disposable);
  }
  Event2.filter = filter2;
  function signal(event) {
    return event;
  }
  Event2.signal = signal;
  function any(...events) {
    return (listener, thisArgs = null, disposables) => {
      const disposable = combinedDisposable(...events.map((event) => event((e) => listener.call(thisArgs, e))));
      return addAndReturnDisposable(disposable, disposables);
    };
  }
  Event2.any = any;
  function reduce(event, merge, initial, disposable) {
    let output = initial;
    return map(event, (e) => {
      output = merge(output, e);
      return output;
    }, disposable);
  }
  Event2.reduce = reduce;
  function snapshot(event, disposable) {
    let listener;
    const options = {
      onWillAddFirstListener() {
        listener = event(emitter.fire, emitter);
      },
      onDidRemoveLastListener() {
        listener?.dispose();
      }
    };
    if (!disposable) {
      _addLeakageTraceLogic(options);
    }
    const emitter = new Emitter(options);
    disposable?.add(emitter);
    return emitter.event;
  }
  function addAndReturnDisposable(d, store) {
    if (store instanceof Array) {
      store.push(d);
    } else if (store) {
      store.add(d);
    }
    return d;
  }
  function debounce(event, merge, delay = 100, leading = false, flushOnListenerRemove = false, leakWarningThreshold, disposable) {
    let subscription;
    let output = void 0;
    let handle = void 0;
    let numDebouncedCalls = 0;
    let doFire;
    const options = {
      leakWarningThreshold,
      onWillAddFirstListener() {
        subscription = event((cur) => {
          numDebouncedCalls++;
          output = merge(output, cur);
          if (leading && !handle) {
            emitter.fire(output);
            output = void 0;
          }
          doFire = () => {
            const _output = output;
            output = void 0;
            handle = void 0;
            if (!leading || numDebouncedCalls > 1) {
              emitter.fire(_output);
            }
            numDebouncedCalls = 0;
          };
          if (typeof delay === "number") {
            if (handle) {
              clearTimeout(handle);
            }
            handle = setTimeout(doFire, delay);
          } else {
            if (handle === void 0) {
              handle = null;
              queueMicrotask(doFire);
            }
          }
        });
      },
      onWillRemoveListener() {
        if (flushOnListenerRemove && numDebouncedCalls > 0) {
          doFire?.();
        }
      },
      onDidRemoveLastListener() {
        doFire = void 0;
        subscription.dispose();
      }
    };
    if (!disposable) {
      _addLeakageTraceLogic(options);
    }
    const emitter = new Emitter(options);
    disposable?.add(emitter);
    return emitter.event;
  }
  Event2.debounce = debounce;
  function accumulate(event, delay = 0, disposable) {
    return Event2.debounce(event, (last, e) => {
      if (!last) {
        return [e];
      }
      last.push(e);
      return last;
    }, delay, void 0, true, void 0, disposable);
  }
  Event2.accumulate = accumulate;
  function latch(event, equals3 = (a, b) => a === b, disposable) {
    let firstCall = true;
    let cache;
    return filter2(event, (value) => {
      const shouldEmit = firstCall || !equals3(value, cache);
      firstCall = false;
      cache = value;
      return shouldEmit;
    }, disposable);
  }
  Event2.latch = latch;
  function split(event, isT, disposable) {
    return [
      Event2.filter(event, isT, disposable),
      Event2.filter(event, (e) => !isT(e), disposable)
    ];
  }
  Event2.split = split;
  function buffer(event, flushAfterTimeout = false, _buffer = [], disposable) {
    let buffer2 = _buffer.slice();
    let listener = event((e) => {
      if (buffer2) {
        buffer2.push(e);
      } else {
        emitter.fire(e);
      }
    });
    if (disposable) {
      disposable.add(listener);
    }
    const flush = () => {
      buffer2?.forEach((e) => emitter.fire(e));
      buffer2 = null;
    };
    const emitter = new Emitter({
      onWillAddFirstListener() {
        if (!listener) {
          listener = event((e) => emitter.fire(e));
          if (disposable) {
            disposable.add(listener);
          }
        }
      },
      onDidAddFirstListener() {
        if (buffer2) {
          if (flushAfterTimeout) {
            setTimeout(flush);
          } else {
            flush();
          }
        }
      },
      onDidRemoveLastListener() {
        if (listener) {
          listener.dispose();
        }
        listener = null;
      }
    });
    if (disposable) {
      disposable.add(emitter);
    }
    return emitter.event;
  }
  Event2.buffer = buffer;
  function chain(event, sythensize) {
    const fn = (listener, thisArgs, disposables) => {
      const cs = sythensize(new ChainableSynthesis());
      return event(function(value) {
        const result = cs.evaluate(value);
        if (result !== HaltChainable) {
          listener.call(thisArgs, result);
        }
      }, void 0, disposables);
    };
    return fn;
  }
  Event2.chain = chain;
  const HaltChainable = Symbol("HaltChainable");
  class ChainableSynthesis {
    constructor() {
      this.steps = [];
    }
    map(fn) {
      this.steps.push(fn);
      return this;
    }
    forEach(fn) {
      this.steps.push((v) => {
        fn(v);
        return v;
      });
      return this;
    }
    filter(fn) {
      this.steps.push((v) => fn(v) ? v : HaltChainable);
      return this;
    }
    reduce(merge, initial) {
      let last = initial;
      this.steps.push((v) => {
        last = merge(last, v);
        return last;
      });
      return this;
    }
    latch(equals3 = (a, b) => a === b) {
      let firstCall = true;
      let cache;
      this.steps.push((value) => {
        const shouldEmit = firstCall || !equals3(value, cache);
        firstCall = false;
        cache = value;
        return shouldEmit ? value : HaltChainable;
      });
      return this;
    }
    evaluate(value) {
      for (const step of this.steps) {
        value = step(value);
        if (value === HaltChainable) {
          break;
        }
      }
      return value;
    }
  }
  function fromNodeEventEmitter(emitter, eventName, map2 = (id2) => id2) {
    const fn = (...args) => result.fire(map2(...args));
    const onFirstListenerAdd = () => emitter.on(eventName, fn);
    const onLastListenerRemove = () => emitter.removeListener(eventName, fn);
    const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
    return result.event;
  }
  Event2.fromNodeEventEmitter = fromNodeEventEmitter;
  function fromDOMEventEmitter(emitter, eventName, map2 = (id2) => id2) {
    const fn = (...args) => result.fire(map2(...args));
    const onFirstListenerAdd = () => emitter.addEventListener(eventName, fn);
    const onLastListenerRemove = () => emitter.removeEventListener(eventName, fn);
    const result = new Emitter({ onWillAddFirstListener: onFirstListenerAdd, onDidRemoveLastListener: onLastListenerRemove });
    return result.event;
  }
  Event2.fromDOMEventEmitter = fromDOMEventEmitter;
  function toPromise(event, disposables) {
    let cancelRef;
    const promise = new Promise((resolve2, reject) => {
      const listener = once(event)(resolve2, null, disposables);
      cancelRef = () => listener.dispose();
    });
    promise.cancel = cancelRef;
    return promise;
  }
  Event2.toPromise = toPromise;
  function forward(from, to) {
    return from((e) => to.fire(e));
  }
  Event2.forward = forward;
  function runAndSubscribe(event, handler, initial) {
    handler(initial);
    return event((e) => handler(e));
  }
  Event2.runAndSubscribe = runAndSubscribe;
  class EmitterObserver {
    constructor(_observable, store) {
      this._observable = _observable;
      this._counter = 0;
      this._hasChanged = false;
      const options = {
        onWillAddFirstListener: () => {
          _observable.addObserver(this);
          this._observable.reportChanges();
        },
        onDidRemoveLastListener: () => {
          _observable.removeObserver(this);
        }
      };
      if (!store) {
        _addLeakageTraceLogic(options);
      }
      this.emitter = new Emitter(options);
      if (store) {
        store.add(this.emitter);
      }
    }
    beginUpdate(_observable) {
      this._counter++;
    }
    handlePossibleChange(_observable) {
    }
    handleChange(_observable, _change) {
      this._hasChanged = true;
    }
    endUpdate(_observable) {
      this._counter--;
      if (this._counter === 0) {
        this._observable.reportChanges();
        if (this._hasChanged) {
          this._hasChanged = false;
          this.emitter.fire(this._observable.get());
        }
      }
    }
  }
  function fromObservable(obs, store) {
    const observer = new EmitterObserver(obs, store);
    return observer.emitter.event;
  }
  Event2.fromObservable = fromObservable;
  function fromObservableLight(observable) {
    return (listener, thisArgs, disposables) => {
      let count = 0;
      let didChange = false;
      const observer = {
        beginUpdate() {
          count++;
        },
        endUpdate() {
          count--;
          if (count === 0) {
            observable.reportChanges();
            if (didChange) {
              didChange = false;
              listener.call(thisArgs);
            }
          }
        },
        handlePossibleChange() {
        },
        handleChange() {
          didChange = true;
        }
      };
      observable.addObserver(observer);
      observable.reportChanges();
      const disposable = {
        dispose() {
          observable.removeObserver(observer);
        }
      };
      if (disposables instanceof DisposableStore) {
        disposables.add(disposable);
      } else if (Array.isArray(disposables)) {
        disposables.push(disposable);
      }
      return disposable;
    };
  }
  Event2.fromObservableLight = fromObservableLight;
})(Event || (Event = {}));
var EventProfiling = class _EventProfiling {
  static {
    this.all = /* @__PURE__ */ new Set();
  }
  static {
    this._idPool = 0;
  }
  constructor(name) {
    this.listenerCount = 0;
    this.invocationCount = 0;
    this.elapsedOverall = 0;
    this.durations = [];
    this.name = `${name}_${_EventProfiling._idPool++}`;
    _EventProfiling.all.add(this);
  }
  start(listenerCount) {
    this._stopWatch = new StopWatch();
    this.listenerCount = listenerCount;
  }
  stop() {
    if (this._stopWatch) {
      const elapsed = this._stopWatch.elapsed();
      this.durations.push(elapsed);
      this.elapsedOverall += elapsed;
      this.invocationCount += 1;
      this._stopWatch = void 0;
    }
  }
};
var _globalLeakWarningThreshold = -1;
var LeakageMonitor = class _LeakageMonitor {
  static {
    this._idPool = 1;
  }
  constructor(_errorHandler, threshold, name = (_LeakageMonitor._idPool++).toString(16).padStart(3, "0")) {
    this._errorHandler = _errorHandler;
    this.threshold = threshold;
    this.name = name;
    this._warnCountdown = 0;
  }
  dispose() {
    this._stacks?.clear();
  }
  check(stack, listenerCount) {
    const threshold = this.threshold;
    if (threshold <= 0 || listenerCount < threshold) {
      return void 0;
    }
    if (!this._stacks) {
      this._stacks = /* @__PURE__ */ new Map();
    }
    const count = this._stacks.get(stack.value) || 0;
    this._stacks.set(stack.value, count + 1);
    this._warnCountdown -= 1;
    if (this._warnCountdown <= 0) {
      this._warnCountdown = threshold * 0.5;
      const [topStack, topCount] = this.getMostFrequentStack();
      const message = `[${this.name}] potential listener LEAK detected, having ${listenerCount} listeners already. MOST frequent listener (${topCount}):`;
      console.warn(message);
      console.warn(topStack);
      const error = new ListenerLeakError(message, topStack);
      this._errorHandler(error);
    }
    return () => {
      const count2 = this._stacks.get(stack.value) || 0;
      this._stacks.set(stack.value, count2 - 1);
    };
  }
  getMostFrequentStack() {
    if (!this._stacks) {
      return void 0;
    }
    let topStack;
    let topCount = 0;
    for (const [stack, count] of this._stacks) {
      if (!topStack || topCount < count) {
        topStack = [stack, count];
        topCount = count;
      }
    }
    return topStack;
  }
};
var Stacktrace = class _Stacktrace {
  static create() {
    const err = new Error();
    return new _Stacktrace(err.stack ?? "");
  }
  constructor(value) {
    this.value = value;
  }
  print() {
    console.warn(this.value.split("\n").slice(2).join("\n"));
  }
};
var ListenerLeakError = class extends Error {
  constructor(message, stack) {
    super(message);
    this.name = "ListenerLeakError";
    this.stack = stack;
  }
};
var ListenerRefusalError = class extends Error {
  constructor(message, stack) {
    super(message);
    this.name = "ListenerRefusalError";
    this.stack = stack;
  }
};
var id = 0;
var UniqueContainer = class {
  constructor(value) {
    this.value = value;
    this.id = id++;
  }
};
var compactionThreshold = 2;
var forEachListener = (listeners, fn) => {
  if (listeners instanceof UniqueContainer) {
    fn(listeners);
  } else {
    for (let i = 0; i < listeners.length; i++) {
      const l = listeners[i];
      if (l) {
        fn(l);
      }
    }
  }
};
var Emitter = class {
  constructor(options) {
    this._size = 0;
    this._options = options;
    this._leakageMon = _globalLeakWarningThreshold > 0 || this._options?.leakWarningThreshold ? new LeakageMonitor(options?.onListenerError ?? onUnexpectedError, this._options?.leakWarningThreshold ?? _globalLeakWarningThreshold) : void 0;
    this._perfMon = this._options?._profName ? new EventProfiling(this._options._profName) : void 0;
    this._deliveryQueue = this._options?.deliveryQueue;
  }
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      if (this._deliveryQueue?.current === this) {
        this._deliveryQueue.reset();
      }
      if (this._listeners) {
        if (_enableDisposeWithListenerWarning) {
          const listeners = this._listeners;
          queueMicrotask(() => {
            forEachListener(listeners, (l) => l.stack?.print());
          });
        }
        this._listeners = void 0;
        this._size = 0;
      }
      this._options?.onDidRemoveLastListener?.();
      this._leakageMon?.dispose();
    }
  }
  /**
   * For the public to allow to subscribe
   * to events from this Emitter
   */
  get event() {
    this._event ??= (callback, thisArgs, disposables) => {
      if (this._leakageMon && this._size > this._leakageMon.threshold ** 2) {
        const message = `[${this._leakageMon.name}] REFUSES to accept new listeners because it exceeded its threshold by far (${this._size} vs ${this._leakageMon.threshold})`;
        console.warn(message);
        const tuple = this._leakageMon.getMostFrequentStack() ?? ["UNKNOWN stack", -1];
        const error = new ListenerRefusalError(`${message}. HINT: Stack shows most frequent listener (${tuple[1]}-times)`, tuple[0]);
        const errorHandler2 = this._options?.onListenerError || onUnexpectedError;
        errorHandler2(error);
        return Disposable.None;
      }
      if (this._disposed) {
        return Disposable.None;
      }
      if (thisArgs) {
        callback = callback.bind(thisArgs);
      }
      const contained = new UniqueContainer(callback);
      let removeMonitor;
      let stack;
      if (this._leakageMon && this._size >= Math.ceil(this._leakageMon.threshold * 0.2)) {
        contained.stack = Stacktrace.create();
        removeMonitor = this._leakageMon.check(contained.stack, this._size + 1);
      }
      if (_enableDisposeWithListenerWarning) {
        contained.stack = stack ?? Stacktrace.create();
      }
      if (!this._listeners) {
        this._options?.onWillAddFirstListener?.(this);
        this._listeners = contained;
        this._options?.onDidAddFirstListener?.(this);
      } else if (this._listeners instanceof UniqueContainer) {
        this._deliveryQueue ??= new EventDeliveryQueuePrivate();
        this._listeners = [this._listeners, contained];
      } else {
        this._listeners.push(contained);
      }
      this._options?.onDidAddListener?.(this);
      this._size++;
      const result = toDisposable(() => {
        removeMonitor?.();
        this._removeListener(contained);
      });
      if (disposables instanceof DisposableStore) {
        disposables.add(result);
      } else if (Array.isArray(disposables)) {
        disposables.push(result);
      }
      return result;
    };
    return this._event;
  }
  _removeListener(listener) {
    this._options?.onWillRemoveListener?.(this);
    if (!this._listeners) {
      return;
    }
    if (this._size === 1) {
      this._listeners = void 0;
      this._options?.onDidRemoveLastListener?.(this);
      this._size = 0;
      return;
    }
    const listeners = this._listeners;
    const index = listeners.indexOf(listener);
    if (index === -1) {
      console.log("disposed?", this._disposed);
      console.log("size?", this._size);
      console.log("arr?", JSON.stringify(this._listeners));
      throw new Error("Attempted to dispose unknown listener");
    }
    this._size--;
    listeners[index] = void 0;
    const adjustDeliveryQueue = this._deliveryQueue.current === this;
    if (this._size * compactionThreshold <= listeners.length) {
      let n = 0;
      for (let i = 0; i < listeners.length; i++) {
        if (listeners[i]) {
          listeners[n++] = listeners[i];
        } else if (adjustDeliveryQueue && n < this._deliveryQueue.end) {
          this._deliveryQueue.end--;
          if (n < this._deliveryQueue.i) {
            this._deliveryQueue.i--;
          }
        }
      }
      listeners.length = n;
    }
  }
  _deliver(listener, value) {
    if (!listener) {
      return;
    }
    const errorHandler2 = this._options?.onListenerError || onUnexpectedError;
    if (!errorHandler2) {
      listener.value(value);
      return;
    }
    try {
      listener.value(value);
    } catch (e) {
      errorHandler2(e);
    }
  }
  /** Delivers items in the queue. Assumes the queue is ready to go. */
  _deliverQueue(dq) {
    const listeners = dq.current._listeners;
    while (dq.i < dq.end) {
      this._deliver(listeners[dq.i++], dq.value);
    }
    dq.reset();
  }
  /**
   * To be kept private to fire an event to
   * subscribers
   */
  fire(event) {
    if (this._deliveryQueue?.current) {
      this._deliverQueue(this._deliveryQueue);
      this._perfMon?.stop();
    }
    this._perfMon?.start(this._size);
    if (!this._listeners) {
    } else if (this._listeners instanceof UniqueContainer) {
      this._deliver(this._listeners, event);
    } else {
      const dq = this._deliveryQueue;
      dq.enqueue(this, event, this._listeners.length);
      this._deliverQueue(dq);
    }
    this._perfMon?.stop();
  }
  hasListeners() {
    return this._size > 0;
  }
};
var EventDeliveryQueuePrivate = class {
  constructor() {
    this.i = -1;
    this.end = 0;
  }
  enqueue(emitter, value, end) {
    this.i = 0;
    this.end = end;
    this.current = emitter;
    this.value = value;
  }
  reset() {
    this.i = this.end;
    this.current = void 0;
    this.value = void 0;
  }
};

// out-build/vs/nls.messages.js
function getNLSMessages() {
  return globalThis._VSCODE_NLS_MESSAGES;
}
function getNLSLanguage() {
  return globalThis._VSCODE_NLS_LANGUAGE;
}

// out-build/vs/nls.js
var isPseudo = getNLSLanguage() === "pseudo" || typeof document !== "undefined" && document.location && typeof document.location.hash === "string" && document.location.hash.indexOf("pseudo=true") >= 0;
function _format(message, args) {
  let result;
  if (args.length === 0) {
    result = message;
  } else {
    result = message.replace(/\{(\d+)\}/g, (match2, rest) => {
      const index = rest[0];
      const arg = args[index];
      let result2 = match2;
      if (typeof arg === "string") {
        result2 = arg;
      } else if (typeof arg === "number" || typeof arg === "boolean" || arg === void 0 || arg === null) {
        result2 = String(arg);
      }
      return result2;
    });
  }
  if (isPseudo) {
    result = "\uFF3B" + result.replace(/[aouei]/g, "$&$&") + "\uFF3D";
  }
  return result;
}
function localize(data, message, ...args) {
  if (typeof data === "number") {
    return _format(lookupMessage(data, message), args);
  }
  return _format(message, args);
}
function lookupMessage(index, fallback) {
  const message = getNLSMessages()?.[index];
  if (typeof message !== "string") {
    if (typeof fallback === "string") {
      return fallback;
    }
    throw new Error(`!!! NLS MISSING: ${index} !!!`);
  }
  return message;
}

// out-build/vs/base/common/platform.js
var LANGUAGE_DEFAULT = "en";
var _isWindows = false;
var _isMacintosh = false;
var _isLinux = false;
var _isLinuxSnap = false;
var _isNative = false;
var _isWeb = false;
var _isElectron = false;
var _isIOS = false;
var _isCI = false;
var _isMobile = false;
var _locale = void 0;
var _language = LANGUAGE_DEFAULT;
var _platformLocale = LANGUAGE_DEFAULT;
var _translationsConfigFile = void 0;
var _userAgent = void 0;
var $globalThis = globalThis;
var nodeProcess = void 0;
if (typeof $globalThis.vscode !== "undefined" && typeof $globalThis.vscode.process !== "undefined") {
  nodeProcess = $globalThis.vscode.process;
} else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
  nodeProcess = process;
}
var isElectronProcess = typeof nodeProcess?.versions?.electron === "string";
var isElectronRenderer = isElectronProcess && nodeProcess?.type === "renderer";
if (typeof nodeProcess === "object") {
  _isWindows = nodeProcess.platform === "win32";
  _isMacintosh = nodeProcess.platform === "darwin";
  _isLinux = nodeProcess.platform === "linux";
  _isLinuxSnap = _isLinux && !!nodeProcess.env["SNAP"] && !!nodeProcess.env["SNAP_REVISION"];
  _isElectron = isElectronProcess;
  _isCI = !!nodeProcess.env["CI"] || !!nodeProcess.env["BUILD_ARTIFACTSTAGINGDIRECTORY"] || !!nodeProcess.env["GITHUB_WORKSPACE"];
  _locale = LANGUAGE_DEFAULT;
  _language = LANGUAGE_DEFAULT;
  const rawNlsConfig = nodeProcess.env["VSCODE_NLS_CONFIG"];
  if (rawNlsConfig) {
    try {
      const nlsConfig = JSON.parse(rawNlsConfig);
      _locale = nlsConfig.userLocale;
      _platformLocale = nlsConfig.osLocale;
      _language = nlsConfig.resolvedLanguage || LANGUAGE_DEFAULT;
      _translationsConfigFile = nlsConfig.languagePack?.translationsConfigFile;
    } catch (e) {
    }
  }
  _isNative = true;
} else if (typeof navigator === "object" && !isElectronRenderer) {
  _userAgent = navigator.userAgent;
  _isWindows = _userAgent.indexOf("Windows") >= 0;
  _isMacintosh = _userAgent.indexOf("Macintosh") >= 0;
  _isIOS = (_userAgent.indexOf("Macintosh") >= 0 || _userAgent.indexOf("iPad") >= 0 || _userAgent.indexOf("iPhone") >= 0) && !!navigator.maxTouchPoints && navigator.maxTouchPoints > 0;
  _isLinux = _userAgent.indexOf("Linux") >= 0;
  _isMobile = _userAgent?.indexOf("Mobi") >= 0;
  _isWeb = true;
  _language = getNLSLanguage() || LANGUAGE_DEFAULT;
  _locale = navigator.language.toLowerCase();
  _platformLocale = _locale;
} else {
  console.error("Unable to resolve platform.");
}
var Platform;
(function(Platform2) {
  Platform2[Platform2["Web"] = 0] = "Web";
  Platform2[Platform2["Mac"] = 1] = "Mac";
  Platform2[Platform2["Linux"] = 2] = "Linux";
  Platform2[Platform2["Windows"] = 3] = "Windows";
})(Platform || (Platform = {}));
var _platform = 0;
if (_isMacintosh) {
  _platform = 1;
} else if (_isWindows) {
  _platform = 3;
} else if (_isLinux) {
  _platform = 2;
}
var isWindows = _isWindows;
var isMacintosh = _isMacintosh;
var isLinux = _isLinux;
var isNative = _isNative;
var isWeb = _isWeb;
var isWebWorker = _isWeb && typeof $globalThis.importScripts === "function";
var webWorkerOrigin = isWebWorker ? $globalThis.origin : void 0;
var userAgent = _userAgent;
var language = _language;
var Language;
(function(Language2) {
  function value() {
    return language;
  }
  Language2.value = value;
  function isDefaultVariant() {
    if (language.length === 2) {
      return language === "en";
    } else if (language.length >= 3) {
      return language[0] === "e" && language[1] === "n" && language[2] === "-";
    } else {
      return false;
    }
  }
  Language2.isDefaultVariant = isDefaultVariant;
  function isDefault() {
    return language === "en";
  }
  Language2.isDefault = isDefault;
})(Language || (Language = {}));
var setTimeout0IsFaster = typeof $globalThis.postMessage === "function" && !$globalThis.importScripts;
var setTimeout0 = (() => {
  if (setTimeout0IsFaster) {
    const pending = [];
    $globalThis.addEventListener("message", (e) => {
      if (e.data && e.data.vscodeScheduleAsyncWork) {
        for (let i = 0, len = pending.length; i < len; i++) {
          const candidate = pending[i];
          if (candidate.id === e.data.vscodeScheduleAsyncWork) {
            pending.splice(i, 1);
            candidate.callback();
            return;
          }
        }
      }
    });
    let lastId = 0;
    return (callback) => {
      const myId = ++lastId;
      pending.push({
        id: myId,
        callback
      });
      $globalThis.postMessage({ vscodeScheduleAsyncWork: myId }, "*");
    };
  }
  return (callback) => setTimeout(callback);
})();
var OperatingSystem;
(function(OperatingSystem2) {
  OperatingSystem2[OperatingSystem2["Windows"] = 1] = "Windows";
  OperatingSystem2[OperatingSystem2["Macintosh"] = 2] = "Macintosh";
  OperatingSystem2[OperatingSystem2["Linux"] = 3] = "Linux";
})(OperatingSystem || (OperatingSystem = {}));
var isChrome = !!(userAgent && userAgent.indexOf("Chrome") >= 0);
var isFirefox = !!(userAgent && userAgent.indexOf("Firefox") >= 0);
var isSafari = !!(!isChrome && (userAgent && userAgent.indexOf("Safari") >= 0));
var isEdge = !!(userAgent && userAgent.indexOf("Edg/") >= 0);
var isAndroid = !!(userAgent && userAgent.indexOf("Android") >= 0);

// out-build/vs/base/common/cancellation.js
var shortcutEvent = Object.freeze(function(callback, context) {
  const handle = setTimeout(callback.bind(context), 0);
  return { dispose() {
    clearTimeout(handle);
  } };
});
var CancellationToken;
(function(CancellationToken2) {
  function isCancellationToken(thing) {
    if (thing === CancellationToken2.None || thing === CancellationToken2.Cancelled) {
      return true;
    }
    if (thing instanceof MutableToken) {
      return true;
    }
    if (!thing || typeof thing !== "object") {
      return false;
    }
    return typeof thing.isCancellationRequested === "boolean" && typeof thing.onCancellationRequested === "function";
  }
  CancellationToken2.isCancellationToken = isCancellationToken;
  CancellationToken2.None = Object.freeze({
    isCancellationRequested: false,
    onCancellationRequested: Event.None
  });
  CancellationToken2.Cancelled = Object.freeze({
    isCancellationRequested: true,
    onCancellationRequested: shortcutEvent
  });
})(CancellationToken || (CancellationToken = {}));
var MutableToken = class {
  constructor() {
    this._isCancelled = false;
    this._emitter = null;
  }
  cancel() {
    if (!this._isCancelled) {
      this._isCancelled = true;
      if (this._emitter) {
        this._emitter.fire(void 0);
        this.dispose();
      }
    }
  }
  get isCancellationRequested() {
    return this._isCancelled;
  }
  get onCancellationRequested() {
    if (this._isCancelled) {
      return shortcutEvent;
    }
    if (!this._emitter) {
      this._emitter = new Emitter();
    }
    return this._emitter.event;
  }
  dispose() {
    if (this._emitter) {
      this._emitter.dispose();
      this._emitter = null;
    }
  }
};

// out-build/vs/base/common/cache.js
function identity(t) {
  return t;
}
var LRUCachedFunction = class {
  constructor(arg1, arg2) {
    this.lastCache = void 0;
    this.lastArgKey = void 0;
    if (typeof arg1 === "function") {
      this._fn = arg1;
      this._computeKey = identity;
    } else {
      this._fn = arg2;
      this._computeKey = arg1.getCacheKey;
    }
  }
  get(arg) {
    const key = this._computeKey(arg);
    if (this.lastArgKey !== key) {
      this.lastArgKey = key;
      this.lastCache = this._fn(arg);
    }
    return this.lastCache;
  }
};

// out-build/vs/base/common/lazy.js
var LazyValueState;
(function(LazyValueState2) {
  LazyValueState2[LazyValueState2["Uninitialized"] = 0] = "Uninitialized";
  LazyValueState2[LazyValueState2["Running"] = 1] = "Running";
  LazyValueState2[LazyValueState2["Completed"] = 2] = "Completed";
})(LazyValueState || (LazyValueState = {}));
var Lazy = class {
  constructor(executor) {
    this.executor = executor;
    this._state = LazyValueState.Uninitialized;
  }
  /**
   * True if the lazy value has been resolved.
   */
  get hasValue() {
    return this._state === LazyValueState.Completed;
  }
  /**
   * Get the wrapped value.
   *
   * This will force evaluation of the lazy value if it has not been resolved yet. Lazy values are only
   * resolved once. `getValue` will re-throw exceptions that are hit while resolving the value
   */
  get value() {
    if (this._state === LazyValueState.Uninitialized) {
      this._state = LazyValueState.Running;
      try {
        this._value = this.executor();
      } catch (err) {
        this._error = err;
      } finally {
        this._state = LazyValueState.Completed;
      }
    } else if (this._state === LazyValueState.Running) {
      throw new Error("Cannot read the value of a lazy that is being initialized");
    }
    if (this._error) {
      throw this._error;
    }
    return this._value;
  }
  /**
   * Get the wrapped value without forcing evaluation.
   */
  get rawValue() {
    return this._value;
  }
};

// out-build/vs/base/common/strings.js
function isFalsyOrWhitespace(str) {
  if (!str || typeof str !== "string") {
    return true;
  }
  return str.trim().length === 0;
}
function escapeRegExpCharacters(value) {
  return value.replace(/[\\\{\}\*\+\?\|\^\$\.\[\]\(\)]/g, "\\$&");
}
function createRegExp(searchString, isRegex, options = {}) {
  if (!searchString) {
    throw new Error("Cannot create regex from empty string");
  }
  if (!isRegex) {
    searchString = escapeRegExpCharacters(searchString);
  }
  if (options.wholeWord) {
    if (!/\B/.test(searchString.charAt(0))) {
      searchString = "\\b" + searchString;
    }
    if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
      searchString = searchString + "\\b";
    }
  }
  let modifiers = "";
  if (options.global) {
    modifiers += "g";
  }
  if (!options.matchCase) {
    modifiers += "i";
  }
  if (options.multiline) {
    modifiers += "m";
  }
  if (options.unicode) {
    modifiers += "u";
  }
  return new RegExp(searchString, modifiers);
}
function splitLines(str) {
  return str.split(/\r\n|\r|\n/);
}
function firstNonWhitespaceIndex(str) {
  for (let i = 0, len = str.length; i < len; i++) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return i;
    }
  }
  return -1;
}
function lastNonWhitespaceIndex(str, startIndex = str.length - 1) {
  for (let i = startIndex; i >= 0; i--) {
    const chCode = str.charCodeAt(i);
    if (chCode !== 32 && chCode !== 9) {
      return i;
    }
  }
  return -1;
}
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}
function compareSubstring(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    const codeA = a.charCodeAt(aStart);
    const codeB = b.charCodeAt(bStart);
    if (codeA < codeB) {
      return -1;
    } else if (codeA > codeB) {
      return 1;
    }
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function compareSubstringIgnoreCase(a, b, aStart = 0, aEnd = a.length, bStart = 0, bEnd = b.length) {
  for (; aStart < aEnd && bStart < bEnd; aStart++, bStart++) {
    let codeA = a.charCodeAt(aStart);
    let codeB = b.charCodeAt(bStart);
    if (codeA === codeB) {
      continue;
    }
    if (codeA >= 128 || codeB >= 128) {
      return compareSubstring(a.toLowerCase(), b.toLowerCase(), aStart, aEnd, bStart, bEnd);
    }
    if (isLowerAsciiLetter(codeA)) {
      codeA -= 32;
    }
    if (isLowerAsciiLetter(codeB)) {
      codeB -= 32;
    }
    const diff = codeA - codeB;
    if (diff === 0) {
      continue;
    }
    return diff;
  }
  const aLen = aEnd - aStart;
  const bLen = bEnd - bStart;
  if (aLen < bLen) {
    return -1;
  } else if (aLen > bLen) {
    return 1;
  }
  return 0;
}
function isLowerAsciiLetter(code) {
  return code >= 97 && code <= 122;
}
function isUpperAsciiLetter(code) {
  return code >= 65 && code <= 90;
}
function equalsIgnoreCase(a, b) {
  return a.length === b.length && compareSubstringIgnoreCase(a, b) === 0;
}
function startsWithIgnoreCase(str, candidate) {
  const candidateLength = candidate.length;
  if (candidate.length > str.length) {
    return false;
  }
  return compareSubstringIgnoreCase(str, candidate, 0, candidateLength) === 0;
}
function isHighSurrogate(charCode) {
  return 55296 <= charCode && charCode <= 56319;
}
function isLowSurrogate(charCode) {
  return 56320 <= charCode && charCode <= 57343;
}
function computeCodePoint(highSurrogate, lowSurrogate) {
  return (highSurrogate - 55296 << 10) + (lowSurrogate - 56320) + 65536;
}
function getNextCodePoint(str, len, offset) {
  const charCode = str.charCodeAt(offset);
  if (isHighSurrogate(charCode) && offset + 1 < len) {
    const nextCharCode = str.charCodeAt(offset + 1);
    if (isLowSurrogate(nextCharCode)) {
      return computeCodePoint(charCode, nextCharCode);
    }
  }
  return charCode;
}
var CONTAINS_RTL = void 0;
function makeContainsRtl() {
  return /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA\u07FE-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u088E\u08A0-\u08C9\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDC7\uFDF0-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE35\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDD23\uDE80-\uDEA9\uDEAD-\uDF45\uDF51-\uDF81\uDF86-\uDFF6]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD4B-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
}
function containsRTL(str) {
  if (!CONTAINS_RTL) {
    CONTAINS_RTL = makeContainsRtl();
  }
  return CONTAINS_RTL.test(str);
}
var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
function isBasicASCII(str) {
  return IS_BASIC_ASCII.test(str);
}
var UNUSUAL_LINE_TERMINATORS = /[\u2028\u2029]/;
function containsUnusualLineTerminators(str) {
  return UNUSUAL_LINE_TERMINATORS.test(str);
}
var CSI_SEQUENCE = /(?:\x1b\[|\x9b)[=?>!]?[\d;:]*["$#'* ]?[a-zA-Z@^`{}|~]/;
var OSC_SEQUENCE = /(?:\x1b\]|\x9d).*?(?:\x1b\\|\x07|\x9c)/;
var ESC_SEQUENCE = /\x1b(?:[ #%\(\)\*\+\-\.\/]?[a-zA-Z0-9\|}~@])/;
var CONTROL_SEQUENCES = new RegExp("(?:" + [
  CSI_SEQUENCE.source,
  OSC_SEQUENCE.source,
  ESC_SEQUENCE.source
].join("|") + ")", "g");
var UTF8_BOM_CHARACTER = String.fromCharCode(
  65279
  /* CharCode.UTF8_BOM */
);
function startsWithUTF8BOM(str) {
  return !!(str && str.length > 0 && str.charCodeAt(0) === 65279);
}
var GraphemeBreakType;
(function(GraphemeBreakType2) {
  GraphemeBreakType2[GraphemeBreakType2["Other"] = 0] = "Other";
  GraphemeBreakType2[GraphemeBreakType2["Prepend"] = 1] = "Prepend";
  GraphemeBreakType2[GraphemeBreakType2["CR"] = 2] = "CR";
  GraphemeBreakType2[GraphemeBreakType2["LF"] = 3] = "LF";
  GraphemeBreakType2[GraphemeBreakType2["Control"] = 4] = "Control";
  GraphemeBreakType2[GraphemeBreakType2["Extend"] = 5] = "Extend";
  GraphemeBreakType2[GraphemeBreakType2["Regional_Indicator"] = 6] = "Regional_Indicator";
  GraphemeBreakType2[GraphemeBreakType2["SpacingMark"] = 7] = "SpacingMark";
  GraphemeBreakType2[GraphemeBreakType2["L"] = 8] = "L";
  GraphemeBreakType2[GraphemeBreakType2["V"] = 9] = "V";
  GraphemeBreakType2[GraphemeBreakType2["T"] = 10] = "T";
  GraphemeBreakType2[GraphemeBreakType2["LV"] = 11] = "LV";
  GraphemeBreakType2[GraphemeBreakType2["LVT"] = 12] = "LVT";
  GraphemeBreakType2[GraphemeBreakType2["ZWJ"] = 13] = "ZWJ";
  GraphemeBreakType2[GraphemeBreakType2["Extended_Pictographic"] = 14] = "Extended_Pictographic";
})(GraphemeBreakType || (GraphemeBreakType = {}));
var GraphemeBreakTree = class _GraphemeBreakTree {
  static {
    this._INSTANCE = null;
  }
  static getInstance() {
    if (!_GraphemeBreakTree._INSTANCE) {
      _GraphemeBreakTree._INSTANCE = new _GraphemeBreakTree();
    }
    return _GraphemeBreakTree._INSTANCE;
  }
  constructor() {
    this._data = getGraphemeBreakRawData();
  }
  getGraphemeBreakType(codePoint) {
    if (codePoint < 32) {
      if (codePoint === 10) {
        return 3;
      }
      if (codePoint === 13) {
        return 2;
      }
      return 4;
    }
    if (codePoint < 127) {
      return 0;
    }
    const data = this._data;
    const nodeCount = data.length / 3;
    let nodeIndex = 1;
    while (nodeIndex <= nodeCount) {
      if (codePoint < data[3 * nodeIndex]) {
        nodeIndex = 2 * nodeIndex;
      } else if (codePoint > data[3 * nodeIndex + 1]) {
        nodeIndex = 2 * nodeIndex + 1;
      } else {
        return data[3 * nodeIndex + 2];
      }
    }
    return 0;
  }
};
function getGraphemeBreakRawData() {
  return JSON.parse("[0,0,0,51229,51255,12,44061,44087,12,127462,127487,6,7083,7085,5,47645,47671,12,54813,54839,12,128678,128678,14,3270,3270,5,9919,9923,14,45853,45879,12,49437,49463,12,53021,53047,12,71216,71218,7,128398,128399,14,129360,129374,14,2519,2519,5,4448,4519,9,9742,9742,14,12336,12336,14,44957,44983,12,46749,46775,12,48541,48567,12,50333,50359,12,52125,52151,12,53917,53943,12,69888,69890,5,73018,73018,5,127990,127990,14,128558,128559,14,128759,128760,14,129653,129655,14,2027,2035,5,2891,2892,7,3761,3761,5,6683,6683,5,8293,8293,4,9825,9826,14,9999,9999,14,43452,43453,5,44509,44535,12,45405,45431,12,46301,46327,12,47197,47223,12,48093,48119,12,48989,49015,12,49885,49911,12,50781,50807,12,51677,51703,12,52573,52599,12,53469,53495,12,54365,54391,12,65279,65279,4,70471,70472,7,72145,72147,7,119173,119179,5,127799,127818,14,128240,128244,14,128512,128512,14,128652,128652,14,128721,128722,14,129292,129292,14,129445,129450,14,129734,129743,14,1476,1477,5,2366,2368,7,2750,2752,7,3076,3076,5,3415,3415,5,4141,4144,5,6109,6109,5,6964,6964,5,7394,7400,5,9197,9198,14,9770,9770,14,9877,9877,14,9968,9969,14,10084,10084,14,43052,43052,5,43713,43713,5,44285,44311,12,44733,44759,12,45181,45207,12,45629,45655,12,46077,46103,12,46525,46551,12,46973,46999,12,47421,47447,12,47869,47895,12,48317,48343,12,48765,48791,12,49213,49239,12,49661,49687,12,50109,50135,12,50557,50583,12,51005,51031,12,51453,51479,12,51901,51927,12,52349,52375,12,52797,52823,12,53245,53271,12,53693,53719,12,54141,54167,12,54589,54615,12,55037,55063,12,69506,69509,5,70191,70193,5,70841,70841,7,71463,71467,5,72330,72342,5,94031,94031,5,123628,123631,5,127763,127765,14,127941,127941,14,128043,128062,14,128302,128317,14,128465,128467,14,128539,128539,14,128640,128640,14,128662,128662,14,128703,128703,14,128745,128745,14,129004,129007,14,129329,129330,14,129402,129402,14,129483,129483,14,129686,129704,14,130048,131069,14,173,173,4,1757,1757,1,2200,2207,5,2434,2435,7,2631,2632,5,2817,2817,5,3008,3008,5,3201,3201,5,3387,3388,5,3542,3542,5,3902,3903,7,4190,4192,5,6002,6003,5,6439,6440,5,6765,6770,7,7019,7027,5,7154,7155,7,8205,8205,13,8505,8505,14,9654,9654,14,9757,9757,14,9792,9792,14,9852,9853,14,9890,9894,14,9937,9937,14,9981,9981,14,10035,10036,14,11035,11036,14,42654,42655,5,43346,43347,7,43587,43587,5,44006,44007,7,44173,44199,12,44397,44423,12,44621,44647,12,44845,44871,12,45069,45095,12,45293,45319,12,45517,45543,12,45741,45767,12,45965,45991,12,46189,46215,12,46413,46439,12,46637,46663,12,46861,46887,12,47085,47111,12,47309,47335,12,47533,47559,12,47757,47783,12,47981,48007,12,48205,48231,12,48429,48455,12,48653,48679,12,48877,48903,12,49101,49127,12,49325,49351,12,49549,49575,12,49773,49799,12,49997,50023,12,50221,50247,12,50445,50471,12,50669,50695,12,50893,50919,12,51117,51143,12,51341,51367,12,51565,51591,12,51789,51815,12,52013,52039,12,52237,52263,12,52461,52487,12,52685,52711,12,52909,52935,12,53133,53159,12,53357,53383,12,53581,53607,12,53805,53831,12,54029,54055,12,54253,54279,12,54477,54503,12,54701,54727,12,54925,54951,12,55149,55175,12,68101,68102,5,69762,69762,7,70067,70069,7,70371,70378,5,70720,70721,7,71087,71087,5,71341,71341,5,71995,71996,5,72249,72249,7,72850,72871,5,73109,73109,5,118576,118598,5,121505,121519,5,127245,127247,14,127568,127569,14,127777,127777,14,127872,127891,14,127956,127967,14,128015,128016,14,128110,128172,14,128259,128259,14,128367,128368,14,128424,128424,14,128488,128488,14,128530,128532,14,128550,128551,14,128566,128566,14,128647,128647,14,128656,128656,14,128667,128673,14,128691,128693,14,128715,128715,14,128728,128732,14,128752,128752,14,128765,128767,14,129096,129103,14,129311,129311,14,129344,129349,14,129394,129394,14,129413,129425,14,129466,129471,14,129511,129535,14,129664,129666,14,129719,129722,14,129760,129767,14,917536,917631,5,13,13,2,1160,1161,5,1564,1564,4,1807,1807,1,2085,2087,5,2307,2307,7,2382,2383,7,2497,2500,5,2563,2563,7,2677,2677,5,2763,2764,7,2879,2879,5,2914,2915,5,3021,3021,5,3142,3144,5,3263,3263,5,3285,3286,5,3398,3400,7,3530,3530,5,3633,3633,5,3864,3865,5,3974,3975,5,4155,4156,7,4229,4230,5,5909,5909,7,6078,6085,7,6277,6278,5,6451,6456,7,6744,6750,5,6846,6846,5,6972,6972,5,7074,7077,5,7146,7148,7,7222,7223,5,7416,7417,5,8234,8238,4,8417,8417,5,9000,9000,14,9203,9203,14,9730,9731,14,9748,9749,14,9762,9763,14,9776,9783,14,9800,9811,14,9831,9831,14,9872,9873,14,9882,9882,14,9900,9903,14,9929,9933,14,9941,9960,14,9974,9974,14,9989,9989,14,10006,10006,14,10062,10062,14,10160,10160,14,11647,11647,5,12953,12953,14,43019,43019,5,43232,43249,5,43443,43443,5,43567,43568,7,43696,43696,5,43765,43765,7,44013,44013,5,44117,44143,12,44229,44255,12,44341,44367,12,44453,44479,12,44565,44591,12,44677,44703,12,44789,44815,12,44901,44927,12,45013,45039,12,45125,45151,12,45237,45263,12,45349,45375,12,45461,45487,12,45573,45599,12,45685,45711,12,45797,45823,12,45909,45935,12,46021,46047,12,46133,46159,12,46245,46271,12,46357,46383,12,46469,46495,12,46581,46607,12,46693,46719,12,46805,46831,12,46917,46943,12,47029,47055,12,47141,47167,12,47253,47279,12,47365,47391,12,47477,47503,12,47589,47615,12,47701,47727,12,47813,47839,12,47925,47951,12,48037,48063,12,48149,48175,12,48261,48287,12,48373,48399,12,48485,48511,12,48597,48623,12,48709,48735,12,48821,48847,12,48933,48959,12,49045,49071,12,49157,49183,12,49269,49295,12,49381,49407,12,49493,49519,12,49605,49631,12,49717,49743,12,49829,49855,12,49941,49967,12,50053,50079,12,50165,50191,12,50277,50303,12,50389,50415,12,50501,50527,12,50613,50639,12,50725,50751,12,50837,50863,12,50949,50975,12,51061,51087,12,51173,51199,12,51285,51311,12,51397,51423,12,51509,51535,12,51621,51647,12,51733,51759,12,51845,51871,12,51957,51983,12,52069,52095,12,52181,52207,12,52293,52319,12,52405,52431,12,52517,52543,12,52629,52655,12,52741,52767,12,52853,52879,12,52965,52991,12,53077,53103,12,53189,53215,12,53301,53327,12,53413,53439,12,53525,53551,12,53637,53663,12,53749,53775,12,53861,53887,12,53973,53999,12,54085,54111,12,54197,54223,12,54309,54335,12,54421,54447,12,54533,54559,12,54645,54671,12,54757,54783,12,54869,54895,12,54981,55007,12,55093,55119,12,55243,55291,10,66045,66045,5,68325,68326,5,69688,69702,5,69817,69818,5,69957,69958,7,70089,70092,5,70198,70199,5,70462,70462,5,70502,70508,5,70750,70750,5,70846,70846,7,71100,71101,5,71230,71230,7,71351,71351,5,71737,71738,5,72000,72000,7,72160,72160,5,72273,72278,5,72752,72758,5,72882,72883,5,73031,73031,5,73461,73462,7,94192,94193,7,119149,119149,7,121403,121452,5,122915,122916,5,126980,126980,14,127358,127359,14,127535,127535,14,127759,127759,14,127771,127771,14,127792,127793,14,127825,127867,14,127897,127899,14,127945,127945,14,127985,127986,14,128000,128007,14,128021,128021,14,128066,128100,14,128184,128235,14,128249,128252,14,128266,128276,14,128335,128335,14,128379,128390,14,128407,128419,14,128444,128444,14,128481,128481,14,128499,128499,14,128526,128526,14,128536,128536,14,128543,128543,14,128556,128556,14,128564,128564,14,128577,128580,14,128643,128645,14,128649,128649,14,128654,128654,14,128660,128660,14,128664,128664,14,128675,128675,14,128686,128689,14,128695,128696,14,128705,128709,14,128717,128719,14,128725,128725,14,128736,128741,14,128747,128748,14,128755,128755,14,128762,128762,14,128981,128991,14,129009,129023,14,129160,129167,14,129296,129304,14,129320,129327,14,129340,129342,14,129356,129356,14,129388,129392,14,129399,129400,14,129404,129407,14,129432,129442,14,129454,129455,14,129473,129474,14,129485,129487,14,129648,129651,14,129659,129660,14,129671,129679,14,129709,129711,14,129728,129730,14,129751,129753,14,129776,129782,14,917505,917505,4,917760,917999,5,10,10,3,127,159,4,768,879,5,1471,1471,5,1536,1541,1,1648,1648,5,1767,1768,5,1840,1866,5,2070,2073,5,2137,2139,5,2274,2274,1,2363,2363,7,2377,2380,7,2402,2403,5,2494,2494,5,2507,2508,7,2558,2558,5,2622,2624,7,2641,2641,5,2691,2691,7,2759,2760,5,2786,2787,5,2876,2876,5,2881,2884,5,2901,2902,5,3006,3006,5,3014,3016,7,3072,3072,5,3134,3136,5,3157,3158,5,3260,3260,5,3266,3266,5,3274,3275,7,3328,3329,5,3391,3392,7,3405,3405,5,3457,3457,5,3536,3537,7,3551,3551,5,3636,3642,5,3764,3772,5,3895,3895,5,3967,3967,7,3993,4028,5,4146,4151,5,4182,4183,7,4226,4226,5,4253,4253,5,4957,4959,5,5940,5940,7,6070,6070,7,6087,6088,7,6158,6158,4,6432,6434,5,6448,6449,7,6679,6680,5,6742,6742,5,6754,6754,5,6783,6783,5,6912,6915,5,6966,6970,5,6978,6978,5,7042,7042,7,7080,7081,5,7143,7143,7,7150,7150,7,7212,7219,5,7380,7392,5,7412,7412,5,8203,8203,4,8232,8232,4,8265,8265,14,8400,8412,5,8421,8432,5,8617,8618,14,9167,9167,14,9200,9200,14,9410,9410,14,9723,9726,14,9733,9733,14,9745,9745,14,9752,9752,14,9760,9760,14,9766,9766,14,9774,9774,14,9786,9786,14,9794,9794,14,9823,9823,14,9828,9828,14,9833,9850,14,9855,9855,14,9875,9875,14,9880,9880,14,9885,9887,14,9896,9897,14,9906,9916,14,9926,9927,14,9935,9935,14,9939,9939,14,9962,9962,14,9972,9972,14,9978,9978,14,9986,9986,14,9997,9997,14,10002,10002,14,10017,10017,14,10055,10055,14,10071,10071,14,10133,10135,14,10548,10549,14,11093,11093,14,12330,12333,5,12441,12442,5,42608,42610,5,43010,43010,5,43045,43046,5,43188,43203,7,43302,43309,5,43392,43394,5,43446,43449,5,43493,43493,5,43571,43572,7,43597,43597,7,43703,43704,5,43756,43757,5,44003,44004,7,44009,44010,7,44033,44059,12,44089,44115,12,44145,44171,12,44201,44227,12,44257,44283,12,44313,44339,12,44369,44395,12,44425,44451,12,44481,44507,12,44537,44563,12,44593,44619,12,44649,44675,12,44705,44731,12,44761,44787,12,44817,44843,12,44873,44899,12,44929,44955,12,44985,45011,12,45041,45067,12,45097,45123,12,45153,45179,12,45209,45235,12,45265,45291,12,45321,45347,12,45377,45403,12,45433,45459,12,45489,45515,12,45545,45571,12,45601,45627,12,45657,45683,12,45713,45739,12,45769,45795,12,45825,45851,12,45881,45907,12,45937,45963,12,45993,46019,12,46049,46075,12,46105,46131,12,46161,46187,12,46217,46243,12,46273,46299,12,46329,46355,12,46385,46411,12,46441,46467,12,46497,46523,12,46553,46579,12,46609,46635,12,46665,46691,12,46721,46747,12,46777,46803,12,46833,46859,12,46889,46915,12,46945,46971,12,47001,47027,12,47057,47083,12,47113,47139,12,47169,47195,12,47225,47251,12,47281,47307,12,47337,47363,12,47393,47419,12,47449,47475,12,47505,47531,12,47561,47587,12,47617,47643,12,47673,47699,12,47729,47755,12,47785,47811,12,47841,47867,12,47897,47923,12,47953,47979,12,48009,48035,12,48065,48091,12,48121,48147,12,48177,48203,12,48233,48259,12,48289,48315,12,48345,48371,12,48401,48427,12,48457,48483,12,48513,48539,12,48569,48595,12,48625,48651,12,48681,48707,12,48737,48763,12,48793,48819,12,48849,48875,12,48905,48931,12,48961,48987,12,49017,49043,12,49073,49099,12,49129,49155,12,49185,49211,12,49241,49267,12,49297,49323,12,49353,49379,12,49409,49435,12,49465,49491,12,49521,49547,12,49577,49603,12,49633,49659,12,49689,49715,12,49745,49771,12,49801,49827,12,49857,49883,12,49913,49939,12,49969,49995,12,50025,50051,12,50081,50107,12,50137,50163,12,50193,50219,12,50249,50275,12,50305,50331,12,50361,50387,12,50417,50443,12,50473,50499,12,50529,50555,12,50585,50611,12,50641,50667,12,50697,50723,12,50753,50779,12,50809,50835,12,50865,50891,12,50921,50947,12,50977,51003,12,51033,51059,12,51089,51115,12,51145,51171,12,51201,51227,12,51257,51283,12,51313,51339,12,51369,51395,12,51425,51451,12,51481,51507,12,51537,51563,12,51593,51619,12,51649,51675,12,51705,51731,12,51761,51787,12,51817,51843,12,51873,51899,12,51929,51955,12,51985,52011,12,52041,52067,12,52097,52123,12,52153,52179,12,52209,52235,12,52265,52291,12,52321,52347,12,52377,52403,12,52433,52459,12,52489,52515,12,52545,52571,12,52601,52627,12,52657,52683,12,52713,52739,12,52769,52795,12,52825,52851,12,52881,52907,12,52937,52963,12,52993,53019,12,53049,53075,12,53105,53131,12,53161,53187,12,53217,53243,12,53273,53299,12,53329,53355,12,53385,53411,12,53441,53467,12,53497,53523,12,53553,53579,12,53609,53635,12,53665,53691,12,53721,53747,12,53777,53803,12,53833,53859,12,53889,53915,12,53945,53971,12,54001,54027,12,54057,54083,12,54113,54139,12,54169,54195,12,54225,54251,12,54281,54307,12,54337,54363,12,54393,54419,12,54449,54475,12,54505,54531,12,54561,54587,12,54617,54643,12,54673,54699,12,54729,54755,12,54785,54811,12,54841,54867,12,54897,54923,12,54953,54979,12,55009,55035,12,55065,55091,12,55121,55147,12,55177,55203,12,65024,65039,5,65520,65528,4,66422,66426,5,68152,68154,5,69291,69292,5,69633,69633,5,69747,69748,5,69811,69814,5,69826,69826,5,69932,69932,7,70016,70017,5,70079,70080,7,70095,70095,5,70196,70196,5,70367,70367,5,70402,70403,7,70464,70464,5,70487,70487,5,70709,70711,7,70725,70725,7,70833,70834,7,70843,70844,7,70849,70849,7,71090,71093,5,71103,71104,5,71227,71228,7,71339,71339,5,71344,71349,5,71458,71461,5,71727,71735,5,71985,71989,7,71998,71998,5,72002,72002,7,72154,72155,5,72193,72202,5,72251,72254,5,72281,72283,5,72344,72345,5,72766,72766,7,72874,72880,5,72885,72886,5,73023,73029,5,73104,73105,5,73111,73111,5,92912,92916,5,94095,94098,5,113824,113827,4,119142,119142,7,119155,119162,4,119362,119364,5,121476,121476,5,122888,122904,5,123184,123190,5,125252,125258,5,127183,127183,14,127340,127343,14,127377,127386,14,127491,127503,14,127548,127551,14,127744,127756,14,127761,127761,14,127769,127769,14,127773,127774,14,127780,127788,14,127796,127797,14,127820,127823,14,127869,127869,14,127894,127895,14,127902,127903,14,127943,127943,14,127947,127950,14,127972,127972,14,127988,127988,14,127992,127994,14,128009,128011,14,128019,128019,14,128023,128041,14,128064,128064,14,128102,128107,14,128174,128181,14,128238,128238,14,128246,128247,14,128254,128254,14,128264,128264,14,128278,128299,14,128329,128330,14,128348,128359,14,128371,128377,14,128392,128393,14,128401,128404,14,128421,128421,14,128433,128434,14,128450,128452,14,128476,128478,14,128483,128483,14,128495,128495,14,128506,128506,14,128519,128520,14,128528,128528,14,128534,128534,14,128538,128538,14,128540,128542,14,128544,128549,14,128552,128555,14,128557,128557,14,128560,128563,14,128565,128565,14,128567,128576,14,128581,128591,14,128641,128642,14,128646,128646,14,128648,128648,14,128650,128651,14,128653,128653,14,128655,128655,14,128657,128659,14,128661,128661,14,128663,128663,14,128665,128666,14,128674,128674,14,128676,128677,14,128679,128685,14,128690,128690,14,128694,128694,14,128697,128702,14,128704,128704,14,128710,128714,14,128716,128716,14,128720,128720,14,128723,128724,14,128726,128727,14,128733,128735,14,128742,128744,14,128746,128746,14,128749,128751,14,128753,128754,14,128756,128758,14,128761,128761,14,128763,128764,14,128884,128895,14,128992,129003,14,129008,129008,14,129036,129039,14,129114,129119,14,129198,129279,14,129293,129295,14,129305,129310,14,129312,129319,14,129328,129328,14,129331,129338,14,129343,129343,14,129351,129355,14,129357,129359,14,129375,129387,14,129393,129393,14,129395,129398,14,129401,129401,14,129403,129403,14,129408,129412,14,129426,129431,14,129443,129444,14,129451,129453,14,129456,129465,14,129472,129472,14,129475,129482,14,129484,129484,14,129488,129510,14,129536,129647,14,129652,129652,14,129656,129658,14,129661,129663,14,129667,129670,14,129680,129685,14,129705,129708,14,129712,129718,14,129723,129727,14,129731,129733,14,129744,129750,14,129754,129759,14,129768,129775,14,129783,129791,14,917504,917504,4,917506,917535,4,917632,917759,4,918000,921599,4,0,9,4,11,12,4,14,31,4,169,169,14,174,174,14,1155,1159,5,1425,1469,5,1473,1474,5,1479,1479,5,1552,1562,5,1611,1631,5,1750,1756,5,1759,1764,5,1770,1773,5,1809,1809,5,1958,1968,5,2045,2045,5,2075,2083,5,2089,2093,5,2192,2193,1,2250,2273,5,2275,2306,5,2362,2362,5,2364,2364,5,2369,2376,5,2381,2381,5,2385,2391,5,2433,2433,5,2492,2492,5,2495,2496,7,2503,2504,7,2509,2509,5,2530,2531,5,2561,2562,5,2620,2620,5,2625,2626,5,2635,2637,5,2672,2673,5,2689,2690,5,2748,2748,5,2753,2757,5,2761,2761,7,2765,2765,5,2810,2815,5,2818,2819,7,2878,2878,5,2880,2880,7,2887,2888,7,2893,2893,5,2903,2903,5,2946,2946,5,3007,3007,7,3009,3010,7,3018,3020,7,3031,3031,5,3073,3075,7,3132,3132,5,3137,3140,7,3146,3149,5,3170,3171,5,3202,3203,7,3262,3262,7,3264,3265,7,3267,3268,7,3271,3272,7,3276,3277,5,3298,3299,5,3330,3331,7,3390,3390,5,3393,3396,5,3402,3404,7,3406,3406,1,3426,3427,5,3458,3459,7,3535,3535,5,3538,3540,5,3544,3550,7,3570,3571,7,3635,3635,7,3655,3662,5,3763,3763,7,3784,3789,5,3893,3893,5,3897,3897,5,3953,3966,5,3968,3972,5,3981,3991,5,4038,4038,5,4145,4145,7,4153,4154,5,4157,4158,5,4184,4185,5,4209,4212,5,4228,4228,7,4237,4237,5,4352,4447,8,4520,4607,10,5906,5908,5,5938,5939,5,5970,5971,5,6068,6069,5,6071,6077,5,6086,6086,5,6089,6099,5,6155,6157,5,6159,6159,5,6313,6313,5,6435,6438,7,6441,6443,7,6450,6450,5,6457,6459,5,6681,6682,7,6741,6741,7,6743,6743,7,6752,6752,5,6757,6764,5,6771,6780,5,6832,6845,5,6847,6862,5,6916,6916,7,6965,6965,5,6971,6971,7,6973,6977,7,6979,6980,7,7040,7041,5,7073,7073,7,7078,7079,7,7082,7082,7,7142,7142,5,7144,7145,5,7149,7149,5,7151,7153,5,7204,7211,7,7220,7221,7,7376,7378,5,7393,7393,7,7405,7405,5,7415,7415,7,7616,7679,5,8204,8204,5,8206,8207,4,8233,8233,4,8252,8252,14,8288,8292,4,8294,8303,4,8413,8416,5,8418,8420,5,8482,8482,14,8596,8601,14,8986,8987,14,9096,9096,14,9193,9196,14,9199,9199,14,9201,9202,14,9208,9210,14,9642,9643,14,9664,9664,14,9728,9729,14,9732,9732,14,9735,9741,14,9743,9744,14,9746,9746,14,9750,9751,14,9753,9756,14,9758,9759,14,9761,9761,14,9764,9765,14,9767,9769,14,9771,9773,14,9775,9775,14,9784,9785,14,9787,9791,14,9793,9793,14,9795,9799,14,9812,9822,14,9824,9824,14,9827,9827,14,9829,9830,14,9832,9832,14,9851,9851,14,9854,9854,14,9856,9861,14,9874,9874,14,9876,9876,14,9878,9879,14,9881,9881,14,9883,9884,14,9888,9889,14,9895,9895,14,9898,9899,14,9904,9905,14,9917,9918,14,9924,9925,14,9928,9928,14,9934,9934,14,9936,9936,14,9938,9938,14,9940,9940,14,9961,9961,14,9963,9967,14,9970,9971,14,9973,9973,14,9975,9977,14,9979,9980,14,9982,9985,14,9987,9988,14,9992,9996,14,9998,9998,14,10000,10001,14,10004,10004,14,10013,10013,14,10024,10024,14,10052,10052,14,10060,10060,14,10067,10069,14,10083,10083,14,10085,10087,14,10145,10145,14,10175,10175,14,11013,11015,14,11088,11088,14,11503,11505,5,11744,11775,5,12334,12335,5,12349,12349,14,12951,12951,14,42607,42607,5,42612,42621,5,42736,42737,5,43014,43014,5,43043,43044,7,43047,43047,7,43136,43137,7,43204,43205,5,43263,43263,5,43335,43345,5,43360,43388,8,43395,43395,7,43444,43445,7,43450,43451,7,43454,43456,7,43561,43566,5,43569,43570,5,43573,43574,5,43596,43596,5,43644,43644,5,43698,43700,5,43710,43711,5,43755,43755,7,43758,43759,7,43766,43766,5,44005,44005,5,44008,44008,5,44012,44012,7,44032,44032,11,44060,44060,11,44088,44088,11,44116,44116,11,44144,44144,11,44172,44172,11,44200,44200,11,44228,44228,11,44256,44256,11,44284,44284,11,44312,44312,11,44340,44340,11,44368,44368,11,44396,44396,11,44424,44424,11,44452,44452,11,44480,44480,11,44508,44508,11,44536,44536,11,44564,44564,11,44592,44592,11,44620,44620,11,44648,44648,11,44676,44676,11,44704,44704,11,44732,44732,11,44760,44760,11,44788,44788,11,44816,44816,11,44844,44844,11,44872,44872,11,44900,44900,11,44928,44928,11,44956,44956,11,44984,44984,11,45012,45012,11,45040,45040,11,45068,45068,11,45096,45096,11,45124,45124,11,45152,45152,11,45180,45180,11,45208,45208,11,45236,45236,11,45264,45264,11,45292,45292,11,45320,45320,11,45348,45348,11,45376,45376,11,45404,45404,11,45432,45432,11,45460,45460,11,45488,45488,11,45516,45516,11,45544,45544,11,45572,45572,11,45600,45600,11,45628,45628,11,45656,45656,11,45684,45684,11,45712,45712,11,45740,45740,11,45768,45768,11,45796,45796,11,45824,45824,11,45852,45852,11,45880,45880,11,45908,45908,11,45936,45936,11,45964,45964,11,45992,45992,11,46020,46020,11,46048,46048,11,46076,46076,11,46104,46104,11,46132,46132,11,46160,46160,11,46188,46188,11,46216,46216,11,46244,46244,11,46272,46272,11,46300,46300,11,46328,46328,11,46356,46356,11,46384,46384,11,46412,46412,11,46440,46440,11,46468,46468,11,46496,46496,11,46524,46524,11,46552,46552,11,46580,46580,11,46608,46608,11,46636,46636,11,46664,46664,11,46692,46692,11,46720,46720,11,46748,46748,11,46776,46776,11,46804,46804,11,46832,46832,11,46860,46860,11,46888,46888,11,46916,46916,11,46944,46944,11,46972,46972,11,47000,47000,11,47028,47028,11,47056,47056,11,47084,47084,11,47112,47112,11,47140,47140,11,47168,47168,11,47196,47196,11,47224,47224,11,47252,47252,11,47280,47280,11,47308,47308,11,47336,47336,11,47364,47364,11,47392,47392,11,47420,47420,11,47448,47448,11,47476,47476,11,47504,47504,11,47532,47532,11,47560,47560,11,47588,47588,11,47616,47616,11,47644,47644,11,47672,47672,11,47700,47700,11,47728,47728,11,47756,47756,11,47784,47784,11,47812,47812,11,47840,47840,11,47868,47868,11,47896,47896,11,47924,47924,11,47952,47952,11,47980,47980,11,48008,48008,11,48036,48036,11,48064,48064,11,48092,48092,11,48120,48120,11,48148,48148,11,48176,48176,11,48204,48204,11,48232,48232,11,48260,48260,11,48288,48288,11,48316,48316,11,48344,48344,11,48372,48372,11,48400,48400,11,48428,48428,11,48456,48456,11,48484,48484,11,48512,48512,11,48540,48540,11,48568,48568,11,48596,48596,11,48624,48624,11,48652,48652,11,48680,48680,11,48708,48708,11,48736,48736,11,48764,48764,11,48792,48792,11,48820,48820,11,48848,48848,11,48876,48876,11,48904,48904,11,48932,48932,11,48960,48960,11,48988,48988,11,49016,49016,11,49044,49044,11,49072,49072,11,49100,49100,11,49128,49128,11,49156,49156,11,49184,49184,11,49212,49212,11,49240,49240,11,49268,49268,11,49296,49296,11,49324,49324,11,49352,49352,11,49380,49380,11,49408,49408,11,49436,49436,11,49464,49464,11,49492,49492,11,49520,49520,11,49548,49548,11,49576,49576,11,49604,49604,11,49632,49632,11,49660,49660,11,49688,49688,11,49716,49716,11,49744,49744,11,49772,49772,11,49800,49800,11,49828,49828,11,49856,49856,11,49884,49884,11,49912,49912,11,49940,49940,11,49968,49968,11,49996,49996,11,50024,50024,11,50052,50052,11,50080,50080,11,50108,50108,11,50136,50136,11,50164,50164,11,50192,50192,11,50220,50220,11,50248,50248,11,50276,50276,11,50304,50304,11,50332,50332,11,50360,50360,11,50388,50388,11,50416,50416,11,50444,50444,11,50472,50472,11,50500,50500,11,50528,50528,11,50556,50556,11,50584,50584,11,50612,50612,11,50640,50640,11,50668,50668,11,50696,50696,11,50724,50724,11,50752,50752,11,50780,50780,11,50808,50808,11,50836,50836,11,50864,50864,11,50892,50892,11,50920,50920,11,50948,50948,11,50976,50976,11,51004,51004,11,51032,51032,11,51060,51060,11,51088,51088,11,51116,51116,11,51144,51144,11,51172,51172,11,51200,51200,11,51228,51228,11,51256,51256,11,51284,51284,11,51312,51312,11,51340,51340,11,51368,51368,11,51396,51396,11,51424,51424,11,51452,51452,11,51480,51480,11,51508,51508,11,51536,51536,11,51564,51564,11,51592,51592,11,51620,51620,11,51648,51648,11,51676,51676,11,51704,51704,11,51732,51732,11,51760,51760,11,51788,51788,11,51816,51816,11,51844,51844,11,51872,51872,11,51900,51900,11,51928,51928,11,51956,51956,11,51984,51984,11,52012,52012,11,52040,52040,11,52068,52068,11,52096,52096,11,52124,52124,11,52152,52152,11,52180,52180,11,52208,52208,11,52236,52236,11,52264,52264,11,52292,52292,11,52320,52320,11,52348,52348,11,52376,52376,11,52404,52404,11,52432,52432,11,52460,52460,11,52488,52488,11,52516,52516,11,52544,52544,11,52572,52572,11,52600,52600,11,52628,52628,11,52656,52656,11,52684,52684,11,52712,52712,11,52740,52740,11,52768,52768,11,52796,52796,11,52824,52824,11,52852,52852,11,52880,52880,11,52908,52908,11,52936,52936,11,52964,52964,11,52992,52992,11,53020,53020,11,53048,53048,11,53076,53076,11,53104,53104,11,53132,53132,11,53160,53160,11,53188,53188,11,53216,53216,11,53244,53244,11,53272,53272,11,53300,53300,11,53328,53328,11,53356,53356,11,53384,53384,11,53412,53412,11,53440,53440,11,53468,53468,11,53496,53496,11,53524,53524,11,53552,53552,11,53580,53580,11,53608,53608,11,53636,53636,11,53664,53664,11,53692,53692,11,53720,53720,11,53748,53748,11,53776,53776,11,53804,53804,11,53832,53832,11,53860,53860,11,53888,53888,11,53916,53916,11,53944,53944,11,53972,53972,11,54000,54000,11,54028,54028,11,54056,54056,11,54084,54084,11,54112,54112,11,54140,54140,11,54168,54168,11,54196,54196,11,54224,54224,11,54252,54252,11,54280,54280,11,54308,54308,11,54336,54336,11,54364,54364,11,54392,54392,11,54420,54420,11,54448,54448,11,54476,54476,11,54504,54504,11,54532,54532,11,54560,54560,11,54588,54588,11,54616,54616,11,54644,54644,11,54672,54672,11,54700,54700,11,54728,54728,11,54756,54756,11,54784,54784,11,54812,54812,11,54840,54840,11,54868,54868,11,54896,54896,11,54924,54924,11,54952,54952,11,54980,54980,11,55008,55008,11,55036,55036,11,55064,55064,11,55092,55092,11,55120,55120,11,55148,55148,11,55176,55176,11,55216,55238,9,64286,64286,5,65056,65071,5,65438,65439,5,65529,65531,4,66272,66272,5,68097,68099,5,68108,68111,5,68159,68159,5,68900,68903,5,69446,69456,5,69632,69632,7,69634,69634,7,69744,69744,5,69759,69761,5,69808,69810,7,69815,69816,7,69821,69821,1,69837,69837,1,69927,69931,5,69933,69940,5,70003,70003,5,70018,70018,7,70070,70078,5,70082,70083,1,70094,70094,7,70188,70190,7,70194,70195,7,70197,70197,7,70206,70206,5,70368,70370,7,70400,70401,5,70459,70460,5,70463,70463,7,70465,70468,7,70475,70477,7,70498,70499,7,70512,70516,5,70712,70719,5,70722,70724,5,70726,70726,5,70832,70832,5,70835,70840,5,70842,70842,5,70845,70845,5,70847,70848,5,70850,70851,5,71088,71089,7,71096,71099,7,71102,71102,7,71132,71133,5,71219,71226,5,71229,71229,5,71231,71232,5,71340,71340,7,71342,71343,7,71350,71350,7,71453,71455,5,71462,71462,7,71724,71726,7,71736,71736,7,71984,71984,5,71991,71992,7,71997,71997,7,71999,71999,1,72001,72001,1,72003,72003,5,72148,72151,5,72156,72159,7,72164,72164,7,72243,72248,5,72250,72250,1,72263,72263,5,72279,72280,7,72324,72329,1,72343,72343,7,72751,72751,7,72760,72765,5,72767,72767,5,72873,72873,7,72881,72881,7,72884,72884,7,73009,73014,5,73020,73021,5,73030,73030,1,73098,73102,7,73107,73108,7,73110,73110,7,73459,73460,5,78896,78904,4,92976,92982,5,94033,94087,7,94180,94180,5,113821,113822,5,118528,118573,5,119141,119141,5,119143,119145,5,119150,119154,5,119163,119170,5,119210,119213,5,121344,121398,5,121461,121461,5,121499,121503,5,122880,122886,5,122907,122913,5,122918,122922,5,123566,123566,5,125136,125142,5,126976,126979,14,126981,127182,14,127184,127231,14,127279,127279,14,127344,127345,14,127374,127374,14,127405,127461,14,127489,127490,14,127514,127514,14,127538,127546,14,127561,127567,14,127570,127743,14,127757,127758,14,127760,127760,14,127762,127762,14,127766,127768,14,127770,127770,14,127772,127772,14,127775,127776,14,127778,127779,14,127789,127791,14,127794,127795,14,127798,127798,14,127819,127819,14,127824,127824,14,127868,127868,14,127870,127871,14,127892,127893,14,127896,127896,14,127900,127901,14,127904,127940,14,127942,127942,14,127944,127944,14,127946,127946,14,127951,127955,14,127968,127971,14,127973,127984,14,127987,127987,14,127989,127989,14,127991,127991,14,127995,127999,5,128008,128008,14,128012,128014,14,128017,128018,14,128020,128020,14,128022,128022,14,128042,128042,14,128063,128063,14,128065,128065,14,128101,128101,14,128108,128109,14,128173,128173,14,128182,128183,14,128236,128237,14,128239,128239,14,128245,128245,14,128248,128248,14,128253,128253,14,128255,128258,14,128260,128263,14,128265,128265,14,128277,128277,14,128300,128301,14,128326,128328,14,128331,128334,14,128336,128347,14,128360,128366,14,128369,128370,14,128378,128378,14,128391,128391,14,128394,128397,14,128400,128400,14,128405,128406,14,128420,128420,14,128422,128423,14,128425,128432,14,128435,128443,14,128445,128449,14,128453,128464,14,128468,128475,14,128479,128480,14,128482,128482,14,128484,128487,14,128489,128494,14,128496,128498,14,128500,128505,14,128507,128511,14,128513,128518,14,128521,128525,14,128527,128527,14,128529,128529,14,128533,128533,14,128535,128535,14,128537,128537,14]");
}
var CodePoint;
(function(CodePoint2) {
  CodePoint2[CodePoint2["zwj"] = 8205] = "zwj";
  CodePoint2[CodePoint2["emojiVariantSelector"] = 65039] = "emojiVariantSelector";
  CodePoint2[CodePoint2["enclosingKeyCap"] = 8419] = "enclosingKeyCap";
  CodePoint2[CodePoint2["space"] = 32] = "space";
})(CodePoint || (CodePoint = {}));
var AmbiguousCharacters = class _AmbiguousCharacters {
  static {
    this.ambiguousCharacterData = new Lazy(() => {
      return JSON.parse('{"_common":[8232,32,8233,32,5760,32,8192,32,8193,32,8194,32,8195,32,8196,32,8197,32,8198,32,8200,32,8201,32,8202,32,8287,32,8199,32,8239,32,2042,95,65101,95,65102,95,65103,95,8208,45,8209,45,8210,45,65112,45,1748,45,8259,45,727,45,8722,45,10134,45,11450,45,1549,44,1643,44,184,44,42233,44,894,59,2307,58,2691,58,1417,58,1795,58,1796,58,5868,58,65072,58,6147,58,6153,58,8282,58,1475,58,760,58,42889,58,8758,58,720,58,42237,58,451,33,11601,33,660,63,577,63,2429,63,5038,63,42731,63,119149,46,8228,46,1793,46,1794,46,42510,46,68176,46,1632,46,1776,46,42232,46,1373,96,65287,96,8219,96,1523,96,8242,96,1370,96,8175,96,65344,96,900,96,8189,96,8125,96,8127,96,8190,96,697,96,884,96,712,96,714,96,715,96,756,96,699,96,701,96,700,96,702,96,42892,96,1497,96,2036,96,2037,96,5194,96,5836,96,94033,96,94034,96,65339,91,10088,40,10098,40,12308,40,64830,40,65341,93,10089,41,10099,41,12309,41,64831,41,10100,123,119060,123,10101,125,65342,94,8270,42,1645,42,8727,42,66335,42,5941,47,8257,47,8725,47,8260,47,9585,47,10187,47,10744,47,119354,47,12755,47,12339,47,11462,47,20031,47,12035,47,65340,92,65128,92,8726,92,10189,92,10741,92,10745,92,119311,92,119355,92,12756,92,20022,92,12034,92,42872,38,708,94,710,94,5869,43,10133,43,66203,43,8249,60,10094,60,706,60,119350,60,5176,60,5810,60,5120,61,11840,61,12448,61,42239,61,8250,62,10095,62,707,62,119351,62,5171,62,94015,62,8275,126,732,126,8128,126,8764,126,65372,124,65293,45,118002,50,120784,50,120794,50,120804,50,120814,50,120824,50,130034,50,42842,50,423,50,1000,50,42564,50,5311,50,42735,50,119302,51,118003,51,120785,51,120795,51,120805,51,120815,51,120825,51,130035,51,42923,51,540,51,439,51,42858,51,11468,51,1248,51,94011,51,71882,51,118004,52,120786,52,120796,52,120806,52,120816,52,120826,52,130036,52,5070,52,71855,52,118005,53,120787,53,120797,53,120807,53,120817,53,120827,53,130037,53,444,53,71867,53,118006,54,120788,54,120798,54,120808,54,120818,54,120828,54,130038,54,11474,54,5102,54,71893,54,119314,55,118007,55,120789,55,120799,55,120809,55,120819,55,120829,55,130039,55,66770,55,71878,55,2819,56,2538,56,2666,56,125131,56,118008,56,120790,56,120800,56,120810,56,120820,56,120830,56,130040,56,547,56,546,56,66330,56,2663,57,2920,57,2541,57,3437,57,118009,57,120791,57,120801,57,120811,57,120821,57,120831,57,130041,57,42862,57,11466,57,71884,57,71852,57,71894,57,9082,97,65345,97,119834,97,119886,97,119938,97,119990,97,120042,97,120094,97,120146,97,120198,97,120250,97,120302,97,120354,97,120406,97,120458,97,593,97,945,97,120514,97,120572,97,120630,97,120688,97,120746,97,65313,65,117974,65,119808,65,119860,65,119912,65,119964,65,120016,65,120068,65,120120,65,120172,65,120224,65,120276,65,120328,65,120380,65,120432,65,913,65,120488,65,120546,65,120604,65,120662,65,120720,65,5034,65,5573,65,42222,65,94016,65,66208,65,119835,98,119887,98,119939,98,119991,98,120043,98,120095,98,120147,98,120199,98,120251,98,120303,98,120355,98,120407,98,120459,98,388,98,5071,98,5234,98,5551,98,65314,66,8492,66,117975,66,119809,66,119861,66,119913,66,120017,66,120069,66,120121,66,120173,66,120225,66,120277,66,120329,66,120381,66,120433,66,42932,66,914,66,120489,66,120547,66,120605,66,120663,66,120721,66,5108,66,5623,66,42192,66,66178,66,66209,66,66305,66,65347,99,8573,99,119836,99,119888,99,119940,99,119992,99,120044,99,120096,99,120148,99,120200,99,120252,99,120304,99,120356,99,120408,99,120460,99,7428,99,1010,99,11429,99,43951,99,66621,99,128844,67,71913,67,71922,67,65315,67,8557,67,8450,67,8493,67,117976,67,119810,67,119862,67,119914,67,119966,67,120018,67,120174,67,120226,67,120278,67,120330,67,120382,67,120434,67,1017,67,11428,67,5087,67,42202,67,66210,67,66306,67,66581,67,66844,67,8574,100,8518,100,119837,100,119889,100,119941,100,119993,100,120045,100,120097,100,120149,100,120201,100,120253,100,120305,100,120357,100,120409,100,120461,100,1281,100,5095,100,5231,100,42194,100,8558,68,8517,68,117977,68,119811,68,119863,68,119915,68,119967,68,120019,68,120071,68,120123,68,120175,68,120227,68,120279,68,120331,68,120383,68,120435,68,5024,68,5598,68,5610,68,42195,68,8494,101,65349,101,8495,101,8519,101,119838,101,119890,101,119942,101,120046,101,120098,101,120150,101,120202,101,120254,101,120306,101,120358,101,120410,101,120462,101,43826,101,1213,101,8959,69,65317,69,8496,69,117978,69,119812,69,119864,69,119916,69,120020,69,120072,69,120124,69,120176,69,120228,69,120280,69,120332,69,120384,69,120436,69,917,69,120492,69,120550,69,120608,69,120666,69,120724,69,11577,69,5036,69,42224,69,71846,69,71854,69,66182,69,119839,102,119891,102,119943,102,119995,102,120047,102,120099,102,120151,102,120203,102,120255,102,120307,102,120359,102,120411,102,120463,102,43829,102,42905,102,383,102,7837,102,1412,102,119315,70,8497,70,117979,70,119813,70,119865,70,119917,70,120021,70,120073,70,120125,70,120177,70,120229,70,120281,70,120333,70,120385,70,120437,70,42904,70,988,70,120778,70,5556,70,42205,70,71874,70,71842,70,66183,70,66213,70,66853,70,65351,103,8458,103,119840,103,119892,103,119944,103,120048,103,120100,103,120152,103,120204,103,120256,103,120308,103,120360,103,120412,103,120464,103,609,103,7555,103,397,103,1409,103,117980,71,119814,71,119866,71,119918,71,119970,71,120022,71,120074,71,120126,71,120178,71,120230,71,120282,71,120334,71,120386,71,120438,71,1292,71,5056,71,5107,71,42198,71,65352,104,8462,104,119841,104,119945,104,119997,104,120049,104,120101,104,120153,104,120205,104,120257,104,120309,104,120361,104,120413,104,120465,104,1211,104,1392,104,5058,104,65320,72,8459,72,8460,72,8461,72,117981,72,119815,72,119867,72,119919,72,120023,72,120179,72,120231,72,120283,72,120335,72,120387,72,120439,72,919,72,120494,72,120552,72,120610,72,120668,72,120726,72,11406,72,5051,72,5500,72,42215,72,66255,72,731,105,9075,105,65353,105,8560,105,8505,105,8520,105,119842,105,119894,105,119946,105,119998,105,120050,105,120102,105,120154,105,120206,105,120258,105,120310,105,120362,105,120414,105,120466,105,120484,105,618,105,617,105,953,105,8126,105,890,105,120522,105,120580,105,120638,105,120696,105,120754,105,1110,105,42567,105,1231,105,43893,105,5029,105,71875,105,65354,106,8521,106,119843,106,119895,106,119947,106,119999,106,120051,106,120103,106,120155,106,120207,106,120259,106,120311,106,120363,106,120415,106,120467,106,1011,106,1112,106,65322,74,117983,74,119817,74,119869,74,119921,74,119973,74,120025,74,120077,74,120129,74,120181,74,120233,74,120285,74,120337,74,120389,74,120441,74,42930,74,895,74,1032,74,5035,74,5261,74,42201,74,119844,107,119896,107,119948,107,120000,107,120052,107,120104,107,120156,107,120208,107,120260,107,120312,107,120364,107,120416,107,120468,107,8490,75,65323,75,117984,75,119818,75,119870,75,119922,75,119974,75,120026,75,120078,75,120130,75,120182,75,120234,75,120286,75,120338,75,120390,75,120442,75,922,75,120497,75,120555,75,120613,75,120671,75,120729,75,11412,75,5094,75,5845,75,42199,75,66840,75,1472,108,8739,73,9213,73,65512,73,1633,108,1777,73,66336,108,125127,108,118001,108,120783,73,120793,73,120803,73,120813,73,120823,73,130033,73,65321,73,8544,73,8464,73,8465,73,117982,108,119816,73,119868,73,119920,73,120024,73,120128,73,120180,73,120232,73,120284,73,120336,73,120388,73,120440,73,65356,108,8572,73,8467,108,119845,108,119897,108,119949,108,120001,108,120053,108,120105,73,120157,73,120209,73,120261,73,120313,73,120365,73,120417,73,120469,73,448,73,120496,73,120554,73,120612,73,120670,73,120728,73,11410,73,1030,73,1216,73,1493,108,1503,108,1575,108,126464,108,126592,108,65166,108,65165,108,1994,108,11599,73,5825,73,42226,73,93992,73,66186,124,66313,124,119338,76,8556,76,8466,76,117985,76,119819,76,119871,76,119923,76,120027,76,120079,76,120131,76,120183,76,120235,76,120287,76,120339,76,120391,76,120443,76,11472,76,5086,76,5290,76,42209,76,93974,76,71843,76,71858,76,66587,76,66854,76,65325,77,8559,77,8499,77,117986,77,119820,77,119872,77,119924,77,120028,77,120080,77,120132,77,120184,77,120236,77,120288,77,120340,77,120392,77,120444,77,924,77,120499,77,120557,77,120615,77,120673,77,120731,77,1018,77,11416,77,5047,77,5616,77,5846,77,42207,77,66224,77,66321,77,119847,110,119899,110,119951,110,120003,110,120055,110,120107,110,120159,110,120211,110,120263,110,120315,110,120367,110,120419,110,120471,110,1400,110,1404,110,65326,78,8469,78,117987,78,119821,78,119873,78,119925,78,119977,78,120029,78,120081,78,120185,78,120237,78,120289,78,120341,78,120393,78,120445,78,925,78,120500,78,120558,78,120616,78,120674,78,120732,78,11418,78,42208,78,66835,78,3074,111,3202,111,3330,111,3458,111,2406,111,2662,111,2790,111,3046,111,3174,111,3302,111,3430,111,3664,111,3792,111,4160,111,1637,111,1781,111,65359,111,8500,111,119848,111,119900,111,119952,111,120056,111,120108,111,120160,111,120212,111,120264,111,120316,111,120368,111,120420,111,120472,111,7439,111,7441,111,43837,111,959,111,120528,111,120586,111,120644,111,120702,111,120760,111,963,111,120532,111,120590,111,120648,111,120706,111,120764,111,11423,111,4351,111,1413,111,1505,111,1607,111,126500,111,126564,111,126596,111,65259,111,65260,111,65258,111,65257,111,1726,111,64428,111,64429,111,64427,111,64426,111,1729,111,64424,111,64425,111,64423,111,64422,111,1749,111,3360,111,4125,111,66794,111,71880,111,71895,111,66604,111,1984,79,2534,79,2918,79,12295,79,70864,79,71904,79,118000,79,120782,79,120792,79,120802,79,120812,79,120822,79,130032,79,65327,79,117988,79,119822,79,119874,79,119926,79,119978,79,120030,79,120082,79,120134,79,120186,79,120238,79,120290,79,120342,79,120394,79,120446,79,927,79,120502,79,120560,79,120618,79,120676,79,120734,79,11422,79,1365,79,11604,79,4816,79,2848,79,66754,79,42227,79,71861,79,66194,79,66219,79,66564,79,66838,79,9076,112,65360,112,119849,112,119901,112,119953,112,120005,112,120057,112,120109,112,120161,112,120213,112,120265,112,120317,112,120369,112,120421,112,120473,112,961,112,120530,112,120544,112,120588,112,120602,112,120646,112,120660,112,120704,112,120718,112,120762,112,120776,112,11427,112,65328,80,8473,80,117989,80,119823,80,119875,80,119927,80,119979,80,120031,80,120083,80,120187,80,120239,80,120291,80,120343,80,120395,80,120447,80,929,80,120504,80,120562,80,120620,80,120678,80,120736,80,11426,80,5090,80,5229,80,42193,80,66197,80,119850,113,119902,113,119954,113,120006,113,120058,113,120110,113,120162,113,120214,113,120266,113,120318,113,120370,113,120422,113,120474,113,1307,113,1379,113,1382,113,8474,81,117990,81,119824,81,119876,81,119928,81,119980,81,120032,81,120084,81,120188,81,120240,81,120292,81,120344,81,120396,81,120448,81,11605,81,119851,114,119903,114,119955,114,120007,114,120059,114,120111,114,120163,114,120215,114,120267,114,120319,114,120371,114,120423,114,120475,114,43847,114,43848,114,7462,114,11397,114,43905,114,119318,82,8475,82,8476,82,8477,82,117991,82,119825,82,119877,82,119929,82,120033,82,120189,82,120241,82,120293,82,120345,82,120397,82,120449,82,422,82,5025,82,5074,82,66740,82,5511,82,42211,82,94005,82,65363,115,119852,115,119904,115,119956,115,120008,115,120060,115,120112,115,120164,115,120216,115,120268,115,120320,115,120372,115,120424,115,120476,115,42801,115,445,115,1109,115,43946,115,71873,115,66632,115,65331,83,117992,83,119826,83,119878,83,119930,83,119982,83,120034,83,120086,83,120138,83,120190,83,120242,83,120294,83,120346,83,120398,83,120450,83,1029,83,1359,83,5077,83,5082,83,42210,83,94010,83,66198,83,66592,83,119853,116,119905,116,119957,116,120009,116,120061,116,120113,116,120165,116,120217,116,120269,116,120321,116,120373,116,120425,116,120477,116,8868,84,10201,84,128872,84,65332,84,117993,84,119827,84,119879,84,119931,84,119983,84,120035,84,120087,84,120139,84,120191,84,120243,84,120295,84,120347,84,120399,84,120451,84,932,84,120507,84,120565,84,120623,84,120681,84,120739,84,11430,84,5026,84,42196,84,93962,84,71868,84,66199,84,66225,84,66325,84,119854,117,119906,117,119958,117,120010,117,120062,117,120114,117,120166,117,120218,117,120270,117,120322,117,120374,117,120426,117,120478,117,42911,117,7452,117,43854,117,43858,117,651,117,965,117,120534,117,120592,117,120650,117,120708,117,120766,117,1405,117,66806,117,71896,117,8746,85,8899,85,117994,85,119828,85,119880,85,119932,85,119984,85,120036,85,120088,85,120140,85,120192,85,120244,85,120296,85,120348,85,120400,85,120452,85,1357,85,4608,85,66766,85,5196,85,42228,85,94018,85,71864,85,8744,118,8897,118,65366,118,8564,118,119855,118,119907,118,119959,118,120011,118,120063,118,120115,118,120167,118,120219,118,120271,118,120323,118,120375,118,120427,118,120479,118,7456,118,957,118,120526,118,120584,118,120642,118,120700,118,120758,118,1141,118,1496,118,71430,118,43945,118,71872,118,119309,86,1639,86,1783,86,8548,86,117995,86,119829,86,119881,86,119933,86,119985,86,120037,86,120089,86,120141,86,120193,86,120245,86,120297,86,120349,86,120401,86,120453,86,1140,86,11576,86,5081,86,5167,86,42719,86,42214,86,93960,86,71840,86,66845,86,623,119,119856,119,119908,119,119960,119,120012,119,120064,119,120116,119,120168,119,120220,119,120272,119,120324,119,120376,119,120428,119,120480,119,7457,119,1121,119,1309,119,1377,119,71434,119,71438,119,71439,119,43907,119,71910,87,71919,87,117996,87,119830,87,119882,87,119934,87,119986,87,120038,87,120090,87,120142,87,120194,87,120246,87,120298,87,120350,87,120402,87,120454,87,1308,87,5043,87,5076,87,42218,87,5742,120,10539,120,10540,120,10799,120,65368,120,8569,120,119857,120,119909,120,119961,120,120013,120,120065,120,120117,120,120169,120,120221,120,120273,120,120325,120,120377,120,120429,120,120481,120,5441,120,5501,120,5741,88,9587,88,66338,88,71916,88,65336,88,8553,88,117997,88,119831,88,119883,88,119935,88,119987,88,120039,88,120091,88,120143,88,120195,88,120247,88,120299,88,120351,88,120403,88,120455,88,42931,88,935,88,120510,88,120568,88,120626,88,120684,88,120742,88,11436,88,11613,88,5815,88,42219,88,66192,88,66228,88,66327,88,66855,88,611,121,7564,121,65369,121,119858,121,119910,121,119962,121,120014,121,120066,121,120118,121,120170,121,120222,121,120274,121,120326,121,120378,121,120430,121,120482,121,655,121,7935,121,43866,121,947,121,8509,121,120516,121,120574,121,120632,121,120690,121,120748,121,1199,121,4327,121,71900,121,65337,89,117998,89,119832,89,119884,89,119936,89,119988,89,120040,89,120092,89,120144,89,120196,89,120248,89,120300,89,120352,89,120404,89,120456,89,933,89,978,89,120508,89,120566,89,120624,89,120682,89,120740,89,11432,89,1198,89,5033,89,5053,89,42220,89,94019,89,71844,89,66226,89,119859,122,119911,122,119963,122,120015,122,120067,122,120119,122,120171,122,120223,122,120275,122,120327,122,120379,122,120431,122,120483,122,7458,122,43923,122,71876,122,71909,90,66293,90,65338,90,8484,90,8488,90,117999,90,119833,90,119885,90,119937,90,119989,90,120041,90,120197,90,120249,90,120301,90,120353,90,120405,90,120457,90,918,90,120493,90,120551,90,120609,90,120667,90,120725,90,5059,90,42204,90,71849,90,65282,34,65283,35,65284,36,65285,37,65286,38,65290,42,65291,43,65294,46,65295,47,65296,48,65298,50,65299,51,65300,52,65301,53,65302,54,65303,55,65304,56,65305,57,65308,60,65309,61,65310,62,65312,64,65316,68,65318,70,65319,71,65324,76,65329,81,65330,82,65333,85,65334,86,65335,87,65343,95,65346,98,65348,100,65350,102,65355,107,65357,109,65358,110,65361,113,65362,114,65364,116,65365,117,65367,119,65370,122,65371,123,65373,125,119846,109],"_default":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8217,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"cs":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"de":[65374,126,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"es":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"fr":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"it":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ja":[8211,45,8218,44,65281,33,8216,96,8245,96,180,96,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65292,44,65297,49,65307,59],"ko":[8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pl":[65374,126,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"pt-BR":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"qps-ploc":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"ru":[65374,126,8218,44,65306,58,65281,33,8216,96,8245,96,180,96,12494,47,305,105,921,73,1009,112,215,120,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"tr":[160,32,8211,45,65374,126,8218,44,65306,58,65281,33,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65288,40,65289,41,65292,44,65297,49,65307,59,65311,63],"zh-hans":[160,32,65374,126,8218,44,8245,96,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89,65297,49],"zh-hant":[8211,45,65374,126,8218,44,180,96,12494,47,1047,51,1073,54,1072,97,1040,65,1068,98,1042,66,1089,99,1057,67,1077,101,1045,69,1053,72,305,105,1050,75,921,73,1052,77,1086,111,1054,79,1009,112,1088,112,1056,80,1075,114,1058,84,215,120,1093,120,1061,88,1091,121,1059,89]}');
    });
  }
  static {
    this.cache = new LRUCachedFunction({ getCacheKey: JSON.stringify }, (locales) => {
      function arrayToMap(arr) {
        const result = /* @__PURE__ */ new Map();
        for (let i = 0; i < arr.length; i += 2) {
          result.set(arr[i], arr[i + 1]);
        }
        return result;
      }
      function mergeMaps(map1, map2) {
        const result = new Map(map1);
        for (const [key, value] of map2) {
          result.set(key, value);
        }
        return result;
      }
      function intersectMaps(map1, map2) {
        if (!map1) {
          return map2;
        }
        const result = /* @__PURE__ */ new Map();
        for (const [key, value] of map1) {
          if (map2.has(key)) {
            result.set(key, value);
          }
        }
        return result;
      }
      const data = this.ambiguousCharacterData.value;
      let filteredLocales = locales.filter((l) => !l.startsWith("_") && l in data);
      if (filteredLocales.length === 0) {
        filteredLocales = ["_default"];
      }
      let languageSpecificMap = void 0;
      for (const locale of filteredLocales) {
        const map2 = arrayToMap(data[locale]);
        languageSpecificMap = intersectMaps(languageSpecificMap, map2);
      }
      const commonMap = arrayToMap(data["_common"]);
      const map = mergeMaps(commonMap, languageSpecificMap);
      return new _AmbiguousCharacters(map);
    });
  }
  static getInstance(locales) {
    return _AmbiguousCharacters.cache.get(Array.from(locales));
  }
  static {
    this._locales = new Lazy(() => Object.keys(_AmbiguousCharacters.ambiguousCharacterData.value).filter((k) => !k.startsWith("_")));
  }
  static getLocales() {
    return _AmbiguousCharacters._locales.value;
  }
  constructor(confusableDictionary) {
    this.confusableDictionary = confusableDictionary;
  }
  isAmbiguous(codePoint) {
    return this.confusableDictionary.has(codePoint);
  }
  containsAmbiguousCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      const codePoint = str.codePointAt(i);
      if (typeof codePoint === "number" && this.isAmbiguous(codePoint)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Returns the non basic ASCII code point that the given code point can be confused,
   * or undefined if such code point does note exist.
   */
  getPrimaryConfusable(codePoint) {
    return this.confusableDictionary.get(codePoint);
  }
  getConfusableCodePoints() {
    return new Set(this.confusableDictionary.keys());
  }
};
var InvisibleCharacters = class _InvisibleCharacters {
  static getRawData() {
    return JSON.parse('{"_common":[11,12,13,127,847,1564,4447,4448,6068,6069,6155,6156,6157,6158,7355,7356,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8204,8205,8206,8207,8234,8235,8236,8237,8238,8239,8287,8288,8289,8290,8291,8292,8293,8294,8295,8296,8297,8298,8299,8300,8301,8302,8303,10240,12644,65024,65025,65026,65027,65028,65029,65030,65031,65032,65033,65034,65035,65036,65037,65038,65039,65279,65440,65520,65521,65522,65523,65524,65525,65526,65527,65528,65532,78844,119155,119156,119157,119158,119159,119160,119161,119162,917504,917505,917506,917507,917508,917509,917510,917511,917512,917513,917514,917515,917516,917517,917518,917519,917520,917521,917522,917523,917524,917525,917526,917527,917528,917529,917530,917531,917532,917533,917534,917535,917536,917537,917538,917539,917540,917541,917542,917543,917544,917545,917546,917547,917548,917549,917550,917551,917552,917553,917554,917555,917556,917557,917558,917559,917560,917561,917562,917563,917564,917565,917566,917567,917568,917569,917570,917571,917572,917573,917574,917575,917576,917577,917578,917579,917580,917581,917582,917583,917584,917585,917586,917587,917588,917589,917590,917591,917592,917593,917594,917595,917596,917597,917598,917599,917600,917601,917602,917603,917604,917605,917606,917607,917608,917609,917610,917611,917612,917613,917614,917615,917616,917617,917618,917619,917620,917621,917622,917623,917624,917625,917626,917627,917628,917629,917630,917631,917760,917761,917762,917763,917764,917765,917766,917767,917768,917769,917770,917771,917772,917773,917774,917775,917776,917777,917778,917779,917780,917781,917782,917783,917784,917785,917786,917787,917788,917789,917790,917791,917792,917793,917794,917795,917796,917797,917798,917799,917800,917801,917802,917803,917804,917805,917806,917807,917808,917809,917810,917811,917812,917813,917814,917815,917816,917817,917818,917819,917820,917821,917822,917823,917824,917825,917826,917827,917828,917829,917830,917831,917832,917833,917834,917835,917836,917837,917838,917839,917840,917841,917842,917843,917844,917845,917846,917847,917848,917849,917850,917851,917852,917853,917854,917855,917856,917857,917858,917859,917860,917861,917862,917863,917864,917865,917866,917867,917868,917869,917870,917871,917872,917873,917874,917875,917876,917877,917878,917879,917880,917881,917882,917883,917884,917885,917886,917887,917888,917889,917890,917891,917892,917893,917894,917895,917896,917897,917898,917899,917900,917901,917902,917903,917904,917905,917906,917907,917908,917909,917910,917911,917912,917913,917914,917915,917916,917917,917918,917919,917920,917921,917922,917923,917924,917925,917926,917927,917928,917929,917930,917931,917932,917933,917934,917935,917936,917937,917938,917939,917940,917941,917942,917943,917944,917945,917946,917947,917948,917949,917950,917951,917952,917953,917954,917955,917956,917957,917958,917959,917960,917961,917962,917963,917964,917965,917966,917967,917968,917969,917970,917971,917972,917973,917974,917975,917976,917977,917978,917979,917980,917981,917982,917983,917984,917985,917986,917987,917988,917989,917990,917991,917992,917993,917994,917995,917996,917997,917998,917999],"cs":[173,8203,12288],"de":[173,8203,12288],"es":[8203,12288],"fr":[173,8203,12288],"it":[160,173,12288],"ja":[173],"ko":[173,12288],"pl":[173,8203,12288],"pt-BR":[173,8203,12288],"qps-ploc":[160,173,8203,12288],"ru":[173,12288],"tr":[160,173,8203,12288],"zh-hans":[160,173,8203,12288],"zh-hant":[173,12288]}');
  }
  static {
    this._data = void 0;
  }
  static getData() {
    if (!this._data) {
      this._data = new Set([...Object.values(_InvisibleCharacters.getRawData())].flat());
    }
    return this._data;
  }
  static isInvisibleCharacter(codePoint) {
    return _InvisibleCharacters.getData().has(codePoint);
  }
  static containsInvisibleCharacter(str) {
    for (let i = 0; i < str.length; i++) {
      const codePoint = str.codePointAt(i);
      if (typeof codePoint === "number" && (_InvisibleCharacters.isInvisibleCharacter(codePoint) || codePoint === 32)) {
        return true;
      }
    }
    return false;
  }
  static get codePoints() {
    return _InvisibleCharacters.getData();
  }
};

// out-build/vs/base/common/worker/webWorker.js
var DEFAULT_CHANNEL = "default";
var INITIALIZE = "$initialize";
var MessageType;
(function(MessageType2) {
  MessageType2[MessageType2["Request"] = 0] = "Request";
  MessageType2[MessageType2["Reply"] = 1] = "Reply";
  MessageType2[MessageType2["SubscribeEvent"] = 2] = "SubscribeEvent";
  MessageType2[MessageType2["Event"] = 3] = "Event";
  MessageType2[MessageType2["UnsubscribeEvent"] = 4] = "UnsubscribeEvent";
})(MessageType || (MessageType = {}));
var RequestMessage = class {
  constructor(vsWorker, req, channel, method, args) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.channel = channel;
    this.method = method;
    this.args = args;
    this.type = 0;
  }
};
var ReplyMessage = class {
  constructor(vsWorker, seq, res, err) {
    this.vsWorker = vsWorker;
    this.seq = seq;
    this.res = res;
    this.err = err;
    this.type = 1;
  }
};
var SubscribeEventMessage = class {
  constructor(vsWorker, req, channel, eventName, arg) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.channel = channel;
    this.eventName = eventName;
    this.arg = arg;
    this.type = 2;
  }
};
var EventMessage = class {
  constructor(vsWorker, req, event) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.event = event;
    this.type = 3;
  }
};
var UnsubscribeEventMessage = class {
  constructor(vsWorker, req) {
    this.vsWorker = vsWorker;
    this.req = req;
    this.type = 4;
  }
};
var WebWorkerProtocol = class {
  constructor(handler) {
    this._workerId = -1;
    this._handler = handler;
    this._lastSentReq = 0;
    this._pendingReplies = /* @__PURE__ */ Object.create(null);
    this._pendingEmitters = /* @__PURE__ */ new Map();
    this._pendingEvents = /* @__PURE__ */ new Map();
  }
  setWorkerId(workerId) {
    this._workerId = workerId;
  }
  sendMessage(channel, method, args) {
    const req = String(++this._lastSentReq);
    return new Promise((resolve2, reject) => {
      this._pendingReplies[req] = {
        resolve: resolve2,
        reject
      };
      this._send(new RequestMessage(this._workerId, req, channel, method, args));
    });
  }
  listen(channel, eventName, arg) {
    let req = null;
    const emitter = new Emitter({
      onWillAddFirstListener: () => {
        req = String(++this._lastSentReq);
        this._pendingEmitters.set(req, emitter);
        this._send(new SubscribeEventMessage(this._workerId, req, channel, eventName, arg));
      },
      onDidRemoveLastListener: () => {
        this._pendingEmitters.delete(req);
        this._send(new UnsubscribeEventMessage(this._workerId, req));
        req = null;
      }
    });
    return emitter.event;
  }
  handleMessage(message) {
    if (!message || !message.vsWorker) {
      return;
    }
    if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
      return;
    }
    this._handleMessage(message);
  }
  createProxyToRemoteChannel(channel, sendMessageBarrier) {
    const handler = {
      get: (target, name) => {
        if (typeof name === "string" && !target[name]) {
          if (propertyIsDynamicEvent(name)) {
            target[name] = (arg) => {
              return this.listen(channel, name, arg);
            };
          } else if (propertyIsEvent(name)) {
            target[name] = this.listen(channel, name, void 0);
          } else if (name.charCodeAt(0) === 36) {
            target[name] = async (...myArgs) => {
              await sendMessageBarrier?.();
              return this.sendMessage(channel, name, myArgs);
            };
          }
        }
        return target[name];
      }
    };
    return new Proxy(/* @__PURE__ */ Object.create(null), handler);
  }
  _handleMessage(msg) {
    switch (msg.type) {
      case 1:
        return this._handleReplyMessage(msg);
      case 0:
        return this._handleRequestMessage(msg);
      case 2:
        return this._handleSubscribeEventMessage(msg);
      case 3:
        return this._handleEventMessage(msg);
      case 4:
        return this._handleUnsubscribeEventMessage(msg);
    }
  }
  _handleReplyMessage(replyMessage) {
    if (!this._pendingReplies[replyMessage.seq]) {
      console.warn("Got reply to unknown seq");
      return;
    }
    const reply = this._pendingReplies[replyMessage.seq];
    delete this._pendingReplies[replyMessage.seq];
    if (replyMessage.err) {
      let err = replyMessage.err;
      if (replyMessage.err.$isError) {
        err = new Error();
        err.name = replyMessage.err.name;
        err.message = replyMessage.err.message;
        err.stack = replyMessage.err.stack;
      }
      reply.reject(err);
      return;
    }
    reply.resolve(replyMessage.res);
  }
  _handleRequestMessage(requestMessage) {
    const req = requestMessage.req;
    const result = this._handler.handleMessage(requestMessage.channel, requestMessage.method, requestMessage.args);
    result.then((r) => {
      this._send(new ReplyMessage(this._workerId, req, r, void 0));
    }, (e) => {
      if (e.detail instanceof Error) {
        e.detail = transformErrorForSerialization(e.detail);
      }
      this._send(new ReplyMessage(this._workerId, req, void 0, transformErrorForSerialization(e)));
    });
  }
  _handleSubscribeEventMessage(msg) {
    const req = msg.req;
    const disposable = this._handler.handleEvent(msg.channel, msg.eventName, msg.arg)((event) => {
      this._send(new EventMessage(this._workerId, req, event));
    });
    this._pendingEvents.set(req, disposable);
  }
  _handleEventMessage(msg) {
    if (!this._pendingEmitters.has(msg.req)) {
      console.warn("Got event for unknown req");
      return;
    }
    this._pendingEmitters.get(msg.req).fire(msg.event);
  }
  _handleUnsubscribeEventMessage(msg) {
    if (!this._pendingEvents.has(msg.req)) {
      console.warn("Got unsubscribe for unknown req");
      return;
    }
    this._pendingEvents.get(msg.req).dispose();
    this._pendingEvents.delete(msg.req);
  }
  _send(msg) {
    const transfer = [];
    if (msg.type === 0) {
      for (let i = 0; i < msg.args.length; i++) {
        if (msg.args[i] instanceof ArrayBuffer) {
          transfer.push(msg.args[i]);
        }
      }
    } else if (msg.type === 1) {
      if (msg.res instanceof ArrayBuffer) {
        transfer.push(msg.res);
      }
    }
    this._handler.sendMessage(msg, transfer);
  }
};
function propertyIsEvent(name) {
  return name[0] === "o" && name[1] === "n" && isUpperAsciiLetter(name.charCodeAt(2));
}
function propertyIsDynamicEvent(name) {
  return /^onDynamic/.test(name) && isUpperAsciiLetter(name.charCodeAt(9));
}
var WebWorkerServer = class {
  constructor(postMessage, requestHandlerFactory) {
    this._localChannels = /* @__PURE__ */ new Map();
    this._remoteChannels = /* @__PURE__ */ new Map();
    this._protocol = new WebWorkerProtocol({
      sendMessage: (msg, transfer) => {
        postMessage(msg, transfer);
      },
      handleMessage: (channel, method, args) => this._handleMessage(channel, method, args),
      handleEvent: (channel, eventName, arg) => this._handleEvent(channel, eventName, arg)
    });
    this.requestHandler = requestHandlerFactory(this);
  }
  onmessage(msg) {
    this._protocol.handleMessage(msg);
  }
  _handleMessage(channel, method, args) {
    if (channel === DEFAULT_CHANNEL && method === INITIALIZE) {
      return this.initialize(args[0]);
    }
    const requestHandler = channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel);
    if (!requestHandler) {
      return Promise.reject(new Error(`Missing channel ${channel} on worker thread`));
    }
    if (typeof requestHandler[method] !== "function") {
      return Promise.reject(new Error(`Missing method ${method} on worker thread channel ${channel}`));
    }
    try {
      return Promise.resolve(requestHandler[method].apply(requestHandler, args));
    } catch (e) {
      return Promise.reject(e);
    }
  }
  _handleEvent(channel, eventName, arg) {
    const requestHandler = channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel);
    if (!requestHandler) {
      throw new Error(`Missing channel ${channel} on worker thread`);
    }
    if (propertyIsDynamicEvent(eventName)) {
      const event = requestHandler[eventName].call(requestHandler, arg);
      if (typeof event !== "function") {
        throw new Error(`Missing dynamic event ${eventName} on request handler.`);
      }
      return event;
    }
    if (propertyIsEvent(eventName)) {
      const event = requestHandler[eventName];
      if (typeof event !== "function") {
        throw new Error(`Missing event ${eventName} on request handler.`);
      }
      return event;
    }
    throw new Error(`Malformed event name ${eventName}`);
  }
  setChannel(channel, handler) {
    this._localChannels.set(channel, handler);
  }
  getChannel(channel) {
    if (!this._remoteChannels.has(channel)) {
      const inst = this._protocol.createProxyToRemoteChannel(channel);
      this._remoteChannels.set(channel, inst);
    }
    return this._remoteChannels.get(channel);
  }
  async initialize(workerId) {
    this._protocol.setWorkerId(workerId);
  }
};

// out-build/vs/base/common/worker/webWorkerBootstrap.js
var initialized = false;
function initialize(factory) {
  if (initialized) {
    throw new Error("WebWorker already initialized!");
  }
  initialized = true;
  const webWorkerServer = new WebWorkerServer((msg) => globalThis.postMessage(msg), (workerServer) => factory(workerServer));
  globalThis.onmessage = (e) => {
    webWorkerServer.onmessage(e.data);
  };
  return webWorkerServer;
}
function bootstrapWebWorker(factory) {
  globalThis.onmessage = (_e) => {
    if (!initialized) {
      initialize(factory);
    }
  };
}

// out-build/vs/base/common/diff/diffChange.js
var DiffChange = class {
  /**
   * Constructs a new DiffChange with the given sequence information
   * and content.
   */
  constructor(originalStart, originalLength, modifiedStart, modifiedLength) {
    this.originalStart = originalStart;
    this.originalLength = originalLength;
    this.modifiedStart = modifiedStart;
    this.modifiedLength = modifiedLength;
  }
  /**
   * The end point (exclusive) of the change in the original sequence.
   */
  getOriginalEnd() {
    return this.originalStart + this.originalLength;
  }
  /**
   * The end point (exclusive) of the change in the modified sequence.
   */
  getModifiedEnd() {
    return this.modifiedStart + this.modifiedLength;
  }
};

// out-build/vs/base/common/buffer.js
var hasBuffer = typeof Buffer !== "undefined";
var indexOfTable = new Lazy(() => new Uint8Array(256));
var textEncoder;
var textDecoder;
var VSBuffer = class _VSBuffer {
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static alloc(byteLength) {
    if (hasBuffer) {
      return new _VSBuffer(Buffer.allocUnsafe(byteLength));
    } else {
      return new _VSBuffer(new Uint8Array(byteLength));
    }
  }
  /**
   * When running in a nodejs context, if `actual` is not a nodejs Buffer, the backing store for
   * the returned `VSBuffer` instance might use a nodejs Buffer allocated from node's Buffer pool,
   * which is not transferrable.
   */
  static wrap(actual) {
    if (hasBuffer && !Buffer.isBuffer(actual)) {
      actual = Buffer.from(actual.buffer, actual.byteOffset, actual.byteLength);
    }
    return new _VSBuffer(actual);
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static fromString(source, options) {
    const dontUseNodeBuffer = options?.dontUseNodeBuffer || false;
    if (!dontUseNodeBuffer && hasBuffer) {
      return new _VSBuffer(Buffer.from(source));
    } else {
      if (!textEncoder) {
        textEncoder = new TextEncoder();
      }
      return new _VSBuffer(textEncoder.encode(source));
    }
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static fromByteArray(source) {
    const result = _VSBuffer.alloc(source.length);
    for (let i = 0, len = source.length; i < len; i++) {
      result.buffer[i] = source[i];
    }
    return result;
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  static concat(buffers, totalLength) {
    if (typeof totalLength === "undefined") {
      totalLength = 0;
      for (let i = 0, len = buffers.length; i < len; i++) {
        totalLength += buffers[i].byteLength;
      }
    }
    const ret = _VSBuffer.alloc(totalLength);
    let offset = 0;
    for (let i = 0, len = buffers.length; i < len; i++) {
      const element = buffers[i];
      ret.set(element, offset);
      offset += element.byteLength;
    }
    return ret;
  }
  static isNativeBuffer(buffer) {
    return hasBuffer && Buffer.isBuffer(buffer);
  }
  constructor(buffer) {
    this.buffer = buffer;
    this.byteLength = this.buffer.byteLength;
  }
  /**
   * When running in a nodejs context, the backing store for the returned `VSBuffer` instance
   * might use a nodejs Buffer allocated from node's Buffer pool, which is not transferrable.
   */
  clone() {
    const result = _VSBuffer.alloc(this.byteLength);
    result.set(this);
    return result;
  }
  toString() {
    if (hasBuffer) {
      return this.buffer.toString();
    } else {
      if (!textDecoder) {
        textDecoder = new TextDecoder();
      }
      return textDecoder.decode(this.buffer);
    }
  }
  slice(start, end) {
    return new _VSBuffer(this.buffer.subarray(start, end));
  }
  set(array, offset) {
    if (array instanceof _VSBuffer) {
      this.buffer.set(array.buffer, offset);
    } else if (array instanceof Uint8Array) {
      this.buffer.set(array, offset);
    } else if (array instanceof ArrayBuffer) {
      this.buffer.set(new Uint8Array(array), offset);
    } else if (ArrayBuffer.isView(array)) {
      this.buffer.set(new Uint8Array(array.buffer, array.byteOffset, array.byteLength), offset);
    } else {
      throw new Error(`Unknown argument 'array'`);
    }
  }
  readUInt32BE(offset) {
    return readUInt32BE(this.buffer, offset);
  }
  writeUInt32BE(value, offset) {
    writeUInt32BE(this.buffer, value, offset);
  }
  readUInt32LE(offset) {
    return readUInt32LE(this.buffer, offset);
  }
  writeUInt32LE(value, offset) {
    writeUInt32LE(this.buffer, value, offset);
  }
  readUInt8(offset) {
    return readUInt8(this.buffer, offset);
  }
  writeUInt8(value, offset) {
    writeUInt8(this.buffer, value, offset);
  }
  indexOf(subarray, offset = 0) {
    return binaryIndexOf(this.buffer, subarray instanceof _VSBuffer ? subarray.buffer : subarray, offset);
  }
  equals(other) {
    if (this === other) {
      return true;
    }
    if (this.byteLength !== other.byteLength) {
      return false;
    }
    return this.buffer.every((value, index) => value === other.buffer[index]);
  }
};
function binaryIndexOf(haystack, needle, offset = 0) {
  const needleLen = needle.byteLength;
  const haystackLen = haystack.byteLength;
  if (needleLen === 0) {
    return 0;
  }
  if (needleLen === 1) {
    return haystack.indexOf(needle[0]);
  }
  if (needleLen > haystackLen - offset) {
    return -1;
  }
  const table = indexOfTable.value;
  table.fill(needle.length);
  for (let i2 = 0; i2 < needle.length; i2++) {
    table[needle[i2]] = needle.length - i2 - 1;
  }
  let i = offset + needle.length - 1;
  let j = i;
  let result = -1;
  while (i < haystackLen) {
    if (haystack[i] === needle[j]) {
      if (j === 0) {
        result = i;
        break;
      }
      i--;
      j--;
    } else {
      i += Math.max(needle.length - j, table[haystack[i]]);
      j = needle.length - 1;
    }
  }
  return result;
}
function readUInt16LE(source, offset) {
  return source[offset + 0] << 0 >>> 0 | source[offset + 1] << 8 >>> 0;
}
function writeUInt16LE(destination, value, offset) {
  destination[offset + 0] = value & 255;
  value = value >>> 8;
  destination[offset + 1] = value & 255;
}
function readUInt32BE(source, offset) {
  return source[offset] * 2 ** 24 + source[offset + 1] * 2 ** 16 + source[offset + 2] * 2 ** 8 + source[offset + 3];
}
function writeUInt32BE(destination, value, offset) {
  destination[offset + 3] = value;
  value = value >>> 8;
  destination[offset + 2] = value;
  value = value >>> 8;
  destination[offset + 1] = value;
  value = value >>> 8;
  destination[offset] = value;
}
function readUInt32LE(source, offset) {
  return source[offset + 0] << 0 >>> 0 | source[offset + 1] << 8 >>> 0 | source[offset + 2] << 16 >>> 0 | source[offset + 3] << 24 >>> 0;
}
function writeUInt32LE(destination, value, offset) {
  destination[offset + 0] = value & 255;
  value = value >>> 8;
  destination[offset + 1] = value & 255;
  value = value >>> 8;
  destination[offset + 2] = value & 255;
  value = value >>> 8;
  destination[offset + 3] = value & 255;
}
function readUInt8(source, offset) {
  return source[offset];
}
function writeUInt8(destination, value, offset) {
  destination[offset] = value;
}
function decodeBase64(encoded) {
  let building = 0;
  let remainder = 0;
  let bufi = 0;
  const buffer = new Uint8Array(Math.floor(encoded.length / 4 * 3));
  const append = (value) => {
    switch (remainder) {
      case 3:
        buffer[bufi++] = building | value;
        remainder = 0;
        break;
      case 2:
        buffer[bufi++] = building | value >>> 2;
        building = value << 6;
        remainder = 3;
        break;
      case 1:
        buffer[bufi++] = building | value >>> 4;
        building = value << 4;
        remainder = 2;
        break;
      default:
        building = value << 2;
        remainder = 1;
    }
  };
  for (let i = 0; i < encoded.length; i++) {
    const code = encoded.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      append(code - 65);
    } else if (code >= 97 && code <= 122) {
      append(code - 97 + 26);
    } else if (code >= 48 && code <= 57) {
      append(code - 48 + 52);
    } else if (code === 43 || code === 45) {
      append(62);
    } else if (code === 47 || code === 95) {
      append(63);
    } else if (code === 61) {
      break;
    } else {
      throw new SyntaxError(`Unexpected base64 character ${encoded[i]}`);
    }
  }
  const unpadded = bufi;
  while (remainder > 0) {
    append(0);
  }
  return VSBuffer.wrap(buffer).slice(0, unpadded);
}
var base64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64UrlSafeAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function encodeBase64({ buffer }, padded = true, urlSafe = false) {
  const dictionary = urlSafe ? base64UrlSafeAlphabet : base64Alphabet;
  let output = "";
  const remainder = buffer.byteLength % 3;
  let i = 0;
  for (; i < buffer.byteLength - remainder; i += 3) {
    const a = buffer[i + 0];
    const b = buffer[i + 1];
    const c = buffer[i + 2];
    output += dictionary[a >>> 2];
    output += dictionary[(a << 4 | b >>> 4) & 63];
    output += dictionary[(b << 2 | c >>> 6) & 63];
    output += dictionary[c & 63];
  }
  if (remainder === 1) {
    const a = buffer[i + 0];
    output += dictionary[a >>> 2];
    output += dictionary[a << 4 & 63];
    if (padded) {
      output += "==";
    }
  } else if (remainder === 2) {
    const a = buffer[i + 0];
    const b = buffer[i + 1];
    output += dictionary[a >>> 2];
    output += dictionary[(a << 4 | b >>> 4) & 63];
    output += dictionary[b << 2 & 63];
    if (padded) {
      output += "=";
    }
  }
  return output;
}
var hexChars = "0123456789abcdef";
function encodeHex({ buffer }) {
  let result = "";
  for (let i = 0; i < buffer.length; i++) {
    const byte = buffer[i];
    result += hexChars[byte >>> 4];
    result += hexChars[byte & 15];
  }
  return result;
}

// out-build/vs/base/common/hash.js
function hash(obj) {
  return doHash(obj, 0);
}
function doHash(obj, hashVal) {
  switch (typeof obj) {
    case "object":
      if (obj === null) {
        return numberHash(349, hashVal);
      } else if (Array.isArray(obj)) {
        return arrayHash(obj, hashVal);
      }
      return objectHash(obj, hashVal);
    case "string":
      return stringHash(obj, hashVal);
    case "boolean":
      return booleanHash(obj, hashVal);
    case "number":
      return numberHash(obj, hashVal);
    case "undefined":
      return numberHash(937, hashVal);
    default:
      return numberHash(617, hashVal);
  }
}
function numberHash(val, initialHashVal) {
  return (initialHashVal << 5) - initialHashVal + val | 0;
}
function booleanHash(b, initialHashVal) {
  return numberHash(b ? 433 : 863, initialHashVal);
}
function stringHash(s, hashVal) {
  hashVal = numberHash(149417, hashVal);
  for (let i = 0, length = s.length; i < length; i++) {
    hashVal = numberHash(s.charCodeAt(i), hashVal);
  }
  return hashVal;
}
function arrayHash(arr, initialHashVal) {
  initialHashVal = numberHash(104579, initialHashVal);
  return arr.reduce((hashVal, item) => doHash(item, hashVal), initialHashVal);
}
function objectHash(obj, initialHashVal) {
  initialHashVal = numberHash(181387, initialHashVal);
  return Object.keys(obj).sort().reduce((hashVal, key) => {
    hashVal = stringHash(key, hashVal);
    return doHash(obj[key], hashVal);
  }, initialHashVal);
}
var SHA1Constant;
(function(SHA1Constant2) {
  SHA1Constant2[SHA1Constant2["BLOCK_SIZE"] = 64] = "BLOCK_SIZE";
  SHA1Constant2[SHA1Constant2["UNICODE_REPLACEMENT"] = 65533] = "UNICODE_REPLACEMENT";
})(SHA1Constant || (SHA1Constant = {}));
function leftRotate(value, bits, totalBits = 32) {
  const delta = totalBits - bits;
  const mask = ~((1 << delta) - 1);
  return (value << bits | (mask & value) >>> delta) >>> 0;
}
function toHexString(bufferOrValue, bitsize = 32) {
  if (bufferOrValue instanceof ArrayBuffer) {
    return encodeHex(VSBuffer.wrap(new Uint8Array(bufferOrValue)));
  }
  return (bufferOrValue >>> 0).toString(16).padStart(bitsize / 4, "0");
}
var StringSHA1 = class _StringSHA1 {
  static {
    this._bigBlock32 = new DataView(new ArrayBuffer(320));
  }
  // 80 * 4 = 320
  constructor() {
    this._h0 = 1732584193;
    this._h1 = 4023233417;
    this._h2 = 2562383102;
    this._h3 = 271733878;
    this._h4 = 3285377520;
    this._buff = new Uint8Array(
      64 + 3
      /* to fit any utf-8 */
    );
    this._buffDV = new DataView(this._buff.buffer);
    this._buffLen = 0;
    this._totalLen = 0;
    this._leftoverHighSurrogate = 0;
    this._finished = false;
  }
  update(str) {
    const strLen = str.length;
    if (strLen === 0) {
      return;
    }
    const buff = this._buff;
    let buffLen = this._buffLen;
    let leftoverHighSurrogate = this._leftoverHighSurrogate;
    let charCode;
    let offset;
    if (leftoverHighSurrogate !== 0) {
      charCode = leftoverHighSurrogate;
      offset = -1;
      leftoverHighSurrogate = 0;
    } else {
      charCode = str.charCodeAt(0);
      offset = 0;
    }
    while (true) {
      let codePoint = charCode;
      if (isHighSurrogate(charCode)) {
        if (offset + 1 < strLen) {
          const nextCharCode = str.charCodeAt(offset + 1);
          if (isLowSurrogate(nextCharCode)) {
            offset++;
            codePoint = computeCodePoint(charCode, nextCharCode);
          } else {
            codePoint = 65533;
          }
        } else {
          leftoverHighSurrogate = charCode;
          break;
        }
      } else if (isLowSurrogate(charCode)) {
        codePoint = 65533;
      }
      buffLen = this._push(buff, buffLen, codePoint);
      offset++;
      if (offset < strLen) {
        charCode = str.charCodeAt(offset);
      } else {
        break;
      }
    }
    this._buffLen = buffLen;
    this._leftoverHighSurrogate = leftoverHighSurrogate;
  }
  _push(buff, buffLen, codePoint) {
    if (codePoint < 128) {
      buff[buffLen++] = codePoint;
    } else if (codePoint < 2048) {
      buff[buffLen++] = 192 | (codePoint & 1984) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    } else if (codePoint < 65536) {
      buff[buffLen++] = 224 | (codePoint & 61440) >>> 12;
      buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    } else {
      buff[buffLen++] = 240 | (codePoint & 1835008) >>> 18;
      buff[buffLen++] = 128 | (codePoint & 258048) >>> 12;
      buff[buffLen++] = 128 | (codePoint & 4032) >>> 6;
      buff[buffLen++] = 128 | (codePoint & 63) >>> 0;
    }
    if (buffLen >= 64) {
      this._step();
      buffLen -= 64;
      this._totalLen += 64;
      buff[0] = buff[64 + 0];
      buff[1] = buff[64 + 1];
      buff[2] = buff[64 + 2];
    }
    return buffLen;
  }
  digest() {
    if (!this._finished) {
      this._finished = true;
      if (this._leftoverHighSurrogate) {
        this._leftoverHighSurrogate = 0;
        this._buffLen = this._push(
          this._buff,
          this._buffLen,
          65533
          /* SHA1Constant.UNICODE_REPLACEMENT */
        );
      }
      this._totalLen += this._buffLen;
      this._wrapUp();
    }
    return toHexString(this._h0) + toHexString(this._h1) + toHexString(this._h2) + toHexString(this._h3) + toHexString(this._h4);
  }
  _wrapUp() {
    this._buff[this._buffLen++] = 128;
    this._buff.subarray(this._buffLen).fill(0);
    if (this._buffLen > 56) {
      this._step();
      this._buff.fill(0);
    }
    const ml = 8 * this._totalLen;
    this._buffDV.setUint32(56, Math.floor(ml / 4294967296), false);
    this._buffDV.setUint32(60, ml % 4294967296, false);
    this._step();
  }
  _step() {
    const bigBlock32 = _StringSHA1._bigBlock32;
    const data = this._buffDV;
    for (let j = 0; j < 64; j += 4) {
      bigBlock32.setUint32(j, data.getUint32(j, false), false);
    }
    for (let j = 64; j < 320; j += 4) {
      bigBlock32.setUint32(j, leftRotate(bigBlock32.getUint32(j - 12, false) ^ bigBlock32.getUint32(j - 32, false) ^ bigBlock32.getUint32(j - 56, false) ^ bigBlock32.getUint32(j - 64, false), 1), false);
    }
    let a = this._h0;
    let b = this._h1;
    let c = this._h2;
    let d = this._h3;
    let e = this._h4;
    let f, k;
    let temp;
    for (let j = 0; j < 80; j++) {
      if (j < 20) {
        f = b & c | ~b & d;
        k = 1518500249;
      } else if (j < 40) {
        f = b ^ c ^ d;
        k = 1859775393;
      } else if (j < 60) {
        f = b & c | b & d | c & d;
        k = 2400959708;
      } else {
        f = b ^ c ^ d;
        k = 3395469782;
      }
      temp = leftRotate(a, 5) + f + e + k + bigBlock32.getUint32(j * 4, false) & 4294967295;
      e = d;
      d = c;
      c = leftRotate(b, 30);
      b = a;
      a = temp;
    }
    this._h0 = this._h0 + a & 4294967295;
    this._h1 = this._h1 + b & 4294967295;
    this._h2 = this._h2 + c & 4294967295;
    this._h3 = this._h3 + d & 4294967295;
    this._h4 = this._h4 + e & 4294967295;
  }
};

// out-build/vs/base/common/diff/diff.js
var Debug = class {
  static Assert(condition, message) {
    if (!condition) {
      throw new Error(message);
    }
  }
};
var MyArray = class {
  /**
   * Copies a range of elements from an Array starting at the specified source index and pastes
   * them to another Array starting at the specified destination index. The length and the indexes
   * are specified as 64-bit integers.
   * sourceArray:
   *		The Array that contains the data to copy.
   * sourceIndex:
   *		A 64-bit integer that represents the index in the sourceArray at which copying begins.
   * destinationArray:
   *		The Array that receives the data.
   * destinationIndex:
   *		A 64-bit integer that represents the index in the destinationArray at which storing begins.
   * length:
   *		A 64-bit integer that represents the number of elements to copy.
   */
  static Copy(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    for (let i = 0; i < length; i++) {
      destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
  }
  static Copy2(sourceArray, sourceIndex, destinationArray, destinationIndex, length) {
    for (let i = 0; i < length; i++) {
      destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
    }
  }
};
var LocalConstants;
(function(LocalConstants2) {
  LocalConstants2[LocalConstants2["MaxDifferencesHistory"] = 1447] = "MaxDifferencesHistory";
})(LocalConstants || (LocalConstants = {}));
var DiffChangeHelper = class {
  /**
   * Constructs a new DiffChangeHelper for the given DiffSequences.
   */
  constructor() {
    this.m_changes = [];
    this.m_originalStart = 1073741824;
    this.m_modifiedStart = 1073741824;
    this.m_originalCount = 0;
    this.m_modifiedCount = 0;
  }
  /**
   * Marks the beginning of the next change in the set of differences.
   */
  MarkNextChange() {
    if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
      this.m_changes.push(new DiffChange(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount));
    }
    this.m_originalCount = 0;
    this.m_modifiedCount = 0;
    this.m_originalStart = 1073741824;
    this.m_modifiedStart = 1073741824;
  }
  /**
   * Adds the original element at the given position to the elements
   * affected by the current change. The modified index gives context
   * to the change position with respect to the original sequence.
   * @param originalIndex The index of the original element to add.
   * @param modifiedIndex The index of the modified element that provides corresponding position in the modified sequence.
   */
  AddOriginalElement(originalIndex, modifiedIndex) {
    this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
    this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
    this.m_originalCount++;
  }
  /**
   * Adds the modified element at the given position to the elements
   * affected by the current change. The original index gives context
   * to the change position with respect to the modified sequence.
   * @param originalIndex The index of the original element that provides corresponding position in the original sequence.
   * @param modifiedIndex The index of the modified element to add.
   */
  AddModifiedElement(originalIndex, modifiedIndex) {
    this.m_originalStart = Math.min(this.m_originalStart, originalIndex);
    this.m_modifiedStart = Math.min(this.m_modifiedStart, modifiedIndex);
    this.m_modifiedCount++;
  }
  /**
   * Retrieves all of the changes marked by the class.
   */
  getChanges() {
    if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
      this.MarkNextChange();
    }
    return this.m_changes;
  }
  /**
   * Retrieves all of the changes marked by the class in the reverse order
   */
  getReverseChanges() {
    if (this.m_originalCount > 0 || this.m_modifiedCount > 0) {
      this.MarkNextChange();
    }
    this.m_changes.reverse();
    return this.m_changes;
  }
};
var LcsDiff = class _LcsDiff {
  /**
   * Constructs the DiffFinder
   */
  constructor(originalSequence, modifiedSequence, continueProcessingPredicate = null) {
    this.ContinueProcessingPredicate = continueProcessingPredicate;
    this._originalSequence = originalSequence;
    this._modifiedSequence = modifiedSequence;
    const [originalStringElements, originalElementsOrHash, originalHasStrings] = _LcsDiff._getElements(originalSequence);
    const [modifiedStringElements, modifiedElementsOrHash, modifiedHasStrings] = _LcsDiff._getElements(modifiedSequence);
    this._hasStrings = originalHasStrings && modifiedHasStrings;
    this._originalStringElements = originalStringElements;
    this._originalElementsOrHash = originalElementsOrHash;
    this._modifiedStringElements = modifiedStringElements;
    this._modifiedElementsOrHash = modifiedElementsOrHash;
    this.m_forwardHistory = [];
    this.m_reverseHistory = [];
  }
  static _isStringArray(arr) {
    return arr.length > 0 && typeof arr[0] === "string";
  }
  static _getElements(sequence) {
    const elements = sequence.getElements();
    if (_LcsDiff._isStringArray(elements)) {
      const hashes = new Int32Array(elements.length);
      for (let i = 0, len = elements.length; i < len; i++) {
        hashes[i] = stringHash(elements[i], 0);
      }
      return [elements, hashes, true];
    }
    if (elements instanceof Int32Array) {
      return [[], elements, false];
    }
    return [[], new Int32Array(elements), false];
  }
  ElementsAreEqual(originalIndex, newIndex) {
    if (this._originalElementsOrHash[originalIndex] !== this._modifiedElementsOrHash[newIndex]) {
      return false;
    }
    return this._hasStrings ? this._originalStringElements[originalIndex] === this._modifiedStringElements[newIndex] : true;
  }
  ElementsAreStrictEqual(originalIndex, newIndex) {
    if (!this.ElementsAreEqual(originalIndex, newIndex)) {
      return false;
    }
    const originalElement = _LcsDiff._getStrictElement(this._originalSequence, originalIndex);
    const modifiedElement = _LcsDiff._getStrictElement(this._modifiedSequence, newIndex);
    return originalElement === modifiedElement;
  }
  static _getStrictElement(sequence, index) {
    if (typeof sequence.getStrictElement === "function") {
      return sequence.getStrictElement(index);
    }
    return null;
  }
  OriginalElementsAreEqual(index1, index2) {
    if (this._originalElementsOrHash[index1] !== this._originalElementsOrHash[index2]) {
      return false;
    }
    return this._hasStrings ? this._originalStringElements[index1] === this._originalStringElements[index2] : true;
  }
  ModifiedElementsAreEqual(index1, index2) {
    if (this._modifiedElementsOrHash[index1] !== this._modifiedElementsOrHash[index2]) {
      return false;
    }
    return this._hasStrings ? this._modifiedStringElements[index1] === this._modifiedStringElements[index2] : true;
  }
  ComputeDiff(pretty) {
    return this._ComputeDiff(0, this._originalElementsOrHash.length - 1, 0, this._modifiedElementsOrHash.length - 1, pretty);
  }
  /**
   * Computes the differences between the original and modified input
   * sequences on the bounded range.
   * @returns An array of the differences between the two input sequences.
   */
  _ComputeDiff(originalStart, originalEnd, modifiedStart, modifiedEnd, pretty) {
    const quitEarlyArr = [false];
    let changes = this.ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr);
    if (pretty) {
      changes = this.PrettifyChanges(changes);
    }
    return {
      quitEarly: quitEarlyArr[0],
      changes
    };
  }
  /**
   * Private helper method which computes the differences on the bounded range
   * recursively.
   * @returns An array of the differences between the two input sequences.
   */
  ComputeDiffRecursive(originalStart, originalEnd, modifiedStart, modifiedEnd, quitEarlyArr) {
    quitEarlyArr[0] = false;
    while (originalStart <= originalEnd && modifiedStart <= modifiedEnd && this.ElementsAreEqual(originalStart, modifiedStart)) {
      originalStart++;
      modifiedStart++;
    }
    while (originalEnd >= originalStart && modifiedEnd >= modifiedStart && this.ElementsAreEqual(originalEnd, modifiedEnd)) {
      originalEnd--;
      modifiedEnd--;
    }
    if (originalStart > originalEnd || modifiedStart > modifiedEnd) {
      let changes;
      if (modifiedStart <= modifiedEnd) {
        Debug.Assert(originalStart === originalEnd + 1, "originalStart should only be one more than originalEnd");
        changes = [
          new DiffChange(originalStart, 0, modifiedStart, modifiedEnd - modifiedStart + 1)
        ];
      } else if (originalStart <= originalEnd) {
        Debug.Assert(modifiedStart === modifiedEnd + 1, "modifiedStart should only be one more than modifiedEnd");
        changes = [
          new DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, 0)
        ];
      } else {
        Debug.Assert(originalStart === originalEnd + 1, "originalStart should only be one more than originalEnd");
        Debug.Assert(modifiedStart === modifiedEnd + 1, "modifiedStart should only be one more than modifiedEnd");
        changes = [];
      }
      return changes;
    }
    const midOriginalArr = [0];
    const midModifiedArr = [0];
    const result = this.ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr);
    const midOriginal = midOriginalArr[0];
    const midModified = midModifiedArr[0];
    if (result !== null) {
      return result;
    } else if (!quitEarlyArr[0]) {
      const leftChanges = this.ComputeDiffRecursive(originalStart, midOriginal, modifiedStart, midModified, quitEarlyArr);
      let rightChanges = [];
      if (!quitEarlyArr[0]) {
        rightChanges = this.ComputeDiffRecursive(midOriginal + 1, originalEnd, midModified + 1, modifiedEnd, quitEarlyArr);
      } else {
        rightChanges = [
          new DiffChange(midOriginal + 1, originalEnd - (midOriginal + 1) + 1, midModified + 1, modifiedEnd - (midModified + 1) + 1)
        ];
      }
      return this.ConcatenateChanges(leftChanges, rightChanges);
    }
    return [
      new DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
    ];
  }
  WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr) {
    let forwardChanges = null;
    let reverseChanges = null;
    let changeHelper = new DiffChangeHelper();
    let diagonalMin = diagonalForwardStart;
    let diagonalMax = diagonalForwardEnd;
    let diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalForwardOffset;
    let lastOriginalIndex = -1073741824;
    let historyIndex = this.m_forwardHistory.length - 1;
    do {
      const diagonal = diagonalRelative + diagonalForwardBase;
      if (diagonal === diagonalMin || diagonal < diagonalMax && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
        originalIndex = forwardPoints[diagonal + 1];
        modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
        if (originalIndex < lastOriginalIndex) {
          changeHelper.MarkNextChange();
        }
        lastOriginalIndex = originalIndex;
        changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex);
        diagonalRelative = diagonal + 1 - diagonalForwardBase;
      } else {
        originalIndex = forwardPoints[diagonal - 1] + 1;
        modifiedIndex = originalIndex - diagonalRelative - diagonalForwardOffset;
        if (originalIndex < lastOriginalIndex) {
          changeHelper.MarkNextChange();
        }
        lastOriginalIndex = originalIndex - 1;
        changeHelper.AddOriginalElement(originalIndex, modifiedIndex + 1);
        diagonalRelative = diagonal - 1 - diagonalForwardBase;
      }
      if (historyIndex >= 0) {
        forwardPoints = this.m_forwardHistory[historyIndex];
        diagonalForwardBase = forwardPoints[0];
        diagonalMin = 1;
        diagonalMax = forwardPoints.length - 1;
      }
    } while (--historyIndex >= -1);
    forwardChanges = changeHelper.getReverseChanges();
    if (quitEarlyArr[0]) {
      let originalStartPoint = midOriginalArr[0] + 1;
      let modifiedStartPoint = midModifiedArr[0] + 1;
      if (forwardChanges !== null && forwardChanges.length > 0) {
        const lastForwardChange = forwardChanges[forwardChanges.length - 1];
        originalStartPoint = Math.max(originalStartPoint, lastForwardChange.getOriginalEnd());
        modifiedStartPoint = Math.max(modifiedStartPoint, lastForwardChange.getModifiedEnd());
      }
      reverseChanges = [
        new DiffChange(originalStartPoint, originalEnd - originalStartPoint + 1, modifiedStartPoint, modifiedEnd - modifiedStartPoint + 1)
      ];
    } else {
      changeHelper = new DiffChangeHelper();
      diagonalMin = diagonalReverseStart;
      diagonalMax = diagonalReverseEnd;
      diagonalRelative = midOriginalArr[0] - midModifiedArr[0] - diagonalReverseOffset;
      lastOriginalIndex = 1073741824;
      historyIndex = deltaIsEven ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
      do {
        const diagonal = diagonalRelative + diagonalReverseBase;
        if (diagonal === diagonalMin || diagonal < diagonalMax && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1]) {
          originalIndex = reversePoints[diagonal + 1] - 1;
          modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
          if (originalIndex > lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }
          lastOriginalIndex = originalIndex + 1;
          changeHelper.AddOriginalElement(originalIndex + 1, modifiedIndex + 1);
          diagonalRelative = diagonal + 1 - diagonalReverseBase;
        } else {
          originalIndex = reversePoints[diagonal - 1];
          modifiedIndex = originalIndex - diagonalRelative - diagonalReverseOffset;
          if (originalIndex > lastOriginalIndex) {
            changeHelper.MarkNextChange();
          }
          lastOriginalIndex = originalIndex;
          changeHelper.AddModifiedElement(originalIndex + 1, modifiedIndex + 1);
          diagonalRelative = diagonal - 1 - diagonalReverseBase;
        }
        if (historyIndex >= 0) {
          reversePoints = this.m_reverseHistory[historyIndex];
          diagonalReverseBase = reversePoints[0];
          diagonalMin = 1;
          diagonalMax = reversePoints.length - 1;
        }
      } while (--historyIndex >= -1);
      reverseChanges = changeHelper.getChanges();
    }
    return this.ConcatenateChanges(forwardChanges, reverseChanges);
  }
  /**
   * Given the range to compute the diff on, this method finds the point:
   * (midOriginal, midModified)
   * that exists in the middle of the LCS of the two sequences and
   * is the point at which the LCS problem may be broken down recursively.
   * This method will try to keep the LCS trace in memory. If the LCS recursion
   * point is calculated and the full trace is available in memory, then this method
   * will return the change list.
   * @param originalStart The start bound of the original sequence range
   * @param originalEnd The end bound of the original sequence range
   * @param modifiedStart The start bound of the modified sequence range
   * @param modifiedEnd The end bound of the modified sequence range
   * @param midOriginal The middle point of the original sequence range
   * @param midModified The middle point of the modified sequence range
   * @returns The diff changes, if available, otherwise null
   */
  ComputeRecursionPoint(originalStart, originalEnd, modifiedStart, modifiedEnd, midOriginalArr, midModifiedArr, quitEarlyArr) {
    let originalIndex = 0, modifiedIndex = 0;
    let diagonalForwardStart = 0, diagonalForwardEnd = 0;
    let diagonalReverseStart = 0, diagonalReverseEnd = 0;
    originalStart--;
    modifiedStart--;
    midOriginalArr[0] = 0;
    midModifiedArr[0] = 0;
    this.m_forwardHistory = [];
    this.m_reverseHistory = [];
    const maxDifferences = originalEnd - originalStart + (modifiedEnd - modifiedStart);
    const numDiagonals = maxDifferences + 1;
    const forwardPoints = new Int32Array(numDiagonals);
    const reversePoints = new Int32Array(numDiagonals);
    const diagonalForwardBase = modifiedEnd - modifiedStart;
    const diagonalReverseBase = originalEnd - originalStart;
    const diagonalForwardOffset = originalStart - modifiedStart;
    const diagonalReverseOffset = originalEnd - modifiedEnd;
    const delta = diagonalReverseBase - diagonalForwardBase;
    const deltaIsEven = delta % 2 === 0;
    forwardPoints[diagonalForwardBase] = originalStart;
    reversePoints[diagonalReverseBase] = originalEnd;
    quitEarlyArr[0] = false;
    for (let numDifferences = 1; numDifferences <= maxDifferences / 2 + 1; numDifferences++) {
      let furthestOriginalIndex = 0;
      let furthestModifiedIndex = 0;
      diagonalForwardStart = this.ClipDiagonalBound(diagonalForwardBase - numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
      diagonalForwardEnd = this.ClipDiagonalBound(diagonalForwardBase + numDifferences, numDifferences, diagonalForwardBase, numDiagonals);
      for (let diagonal = diagonalForwardStart; diagonal <= diagonalForwardEnd; diagonal += 2) {
        if (diagonal === diagonalForwardStart || diagonal < diagonalForwardEnd && forwardPoints[diagonal - 1] < forwardPoints[diagonal + 1]) {
          originalIndex = forwardPoints[diagonal + 1];
        } else {
          originalIndex = forwardPoints[diagonal - 1] + 1;
        }
        modifiedIndex = originalIndex - (diagonal - diagonalForwardBase) - diagonalForwardOffset;
        const tempOriginalIndex = originalIndex;
        while (originalIndex < originalEnd && modifiedIndex < modifiedEnd && this.ElementsAreEqual(originalIndex + 1, modifiedIndex + 1)) {
          originalIndex++;
          modifiedIndex++;
        }
        forwardPoints[diagonal] = originalIndex;
        if (originalIndex + modifiedIndex > furthestOriginalIndex + furthestModifiedIndex) {
          furthestOriginalIndex = originalIndex;
          furthestModifiedIndex = modifiedIndex;
        }
        if (!deltaIsEven && Math.abs(diagonal - diagonalReverseBase) <= numDifferences - 1) {
          if (originalIndex >= reversePoints[diagonal]) {
            midOriginalArr[0] = originalIndex;
            midModifiedArr[0] = modifiedIndex;
            if (tempOriginalIndex <= reversePoints[diagonal] && 1447 > 0 && numDifferences <= 1447 + 1) {
              return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
            } else {
              return null;
            }
          }
        }
      }
      const matchLengthOfLongest = (furthestOriginalIndex - originalStart + (furthestModifiedIndex - modifiedStart) - numDifferences) / 2;
      if (this.ContinueProcessingPredicate !== null && !this.ContinueProcessingPredicate(furthestOriginalIndex, matchLengthOfLongest)) {
        quitEarlyArr[0] = true;
        midOriginalArr[0] = furthestOriginalIndex;
        midModifiedArr[0] = furthestModifiedIndex;
        if (matchLengthOfLongest > 0 && 1447 > 0 && numDifferences <= 1447 + 1) {
          return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
        } else {
          originalStart++;
          modifiedStart++;
          return [
            new DiffChange(originalStart, originalEnd - originalStart + 1, modifiedStart, modifiedEnd - modifiedStart + 1)
          ];
        }
      }
      diagonalReverseStart = this.ClipDiagonalBound(diagonalReverseBase - numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
      diagonalReverseEnd = this.ClipDiagonalBound(diagonalReverseBase + numDifferences, numDifferences, diagonalReverseBase, numDiagonals);
      for (let diagonal = diagonalReverseStart; diagonal <= diagonalReverseEnd; diagonal += 2) {
        if (diagonal === diagonalReverseStart || diagonal < diagonalReverseEnd && reversePoints[diagonal - 1] >= reversePoints[diagonal + 1]) {
          originalIndex = reversePoints[diagonal + 1] - 1;
        } else {
          originalIndex = reversePoints[diagonal - 1];
        }
        modifiedIndex = originalIndex - (diagonal - diagonalReverseBase) - diagonalReverseOffset;
        const tempOriginalIndex = originalIndex;
        while (originalIndex > originalStart && modifiedIndex > modifiedStart && this.ElementsAreEqual(originalIndex, modifiedIndex)) {
          originalIndex--;
          modifiedIndex--;
        }
        reversePoints[diagonal] = originalIndex;
        if (deltaIsEven && Math.abs(diagonal - diagonalForwardBase) <= numDifferences) {
          if (originalIndex <= forwardPoints[diagonal]) {
            midOriginalArr[0] = originalIndex;
            midModifiedArr[0] = modifiedIndex;
            if (tempOriginalIndex >= forwardPoints[diagonal] && 1447 > 0 && numDifferences <= 1447 + 1) {
              return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
            } else {
              return null;
            }
          }
        }
      }
      if (numDifferences <= 1447) {
        let temp = new Int32Array(diagonalForwardEnd - diagonalForwardStart + 2);
        temp[0] = diagonalForwardBase - diagonalForwardStart + 1;
        MyArray.Copy2(forwardPoints, diagonalForwardStart, temp, 1, diagonalForwardEnd - diagonalForwardStart + 1);
        this.m_forwardHistory.push(temp);
        temp = new Int32Array(diagonalReverseEnd - diagonalReverseStart + 2);
        temp[0] = diagonalReverseBase - diagonalReverseStart + 1;
        MyArray.Copy2(reversePoints, diagonalReverseStart, temp, 1, diagonalReverseEnd - diagonalReverseStart + 1);
        this.m_reverseHistory.push(temp);
      }
    }
    return this.WALKTRACE(diagonalForwardBase, diagonalForwardStart, diagonalForwardEnd, diagonalForwardOffset, diagonalReverseBase, diagonalReverseStart, diagonalReverseEnd, diagonalReverseOffset, forwardPoints, reversePoints, originalIndex, originalEnd, midOriginalArr, modifiedIndex, modifiedEnd, midModifiedArr, deltaIsEven, quitEarlyArr);
  }
  /**
   * Shifts the given changes to provide a more intuitive diff.
   * While the first element in a diff matches the first element after the diff,
   * we shift the diff down.
   *
   * @param changes The list of changes to shift
   * @returns The shifted changes
   */
  PrettifyChanges(changes) {
    for (let i = 0; i < changes.length; i++) {
      const change = changes[i];
      const originalStop = i < changes.length - 1 ? changes[i + 1].originalStart : this._originalElementsOrHash.length;
      const modifiedStop = i < changes.length - 1 ? changes[i + 1].modifiedStart : this._modifiedElementsOrHash.length;
      const checkOriginal = change.originalLength > 0;
      const checkModified = change.modifiedLength > 0;
      while (change.originalStart + change.originalLength < originalStop && change.modifiedStart + change.modifiedLength < modifiedStop && (!checkOriginal || this.OriginalElementsAreEqual(change.originalStart, change.originalStart + change.originalLength)) && (!checkModified || this.ModifiedElementsAreEqual(change.modifiedStart, change.modifiedStart + change.modifiedLength))) {
        const startStrictEqual = this.ElementsAreStrictEqual(change.originalStart, change.modifiedStart);
        const endStrictEqual = this.ElementsAreStrictEqual(change.originalStart + change.originalLength, change.modifiedStart + change.modifiedLength);
        if (endStrictEqual && !startStrictEqual) {
          break;
        }
        change.originalStart++;
        change.modifiedStart++;
      }
      const mergedChangeArr = [null];
      if (i < changes.length - 1 && this.ChangesOverlap(changes[i], changes[i + 1], mergedChangeArr)) {
        changes[i] = mergedChangeArr[0];
        changes.splice(i + 1, 1);
        i--;
        continue;
      }
    }
    for (let i = changes.length - 1; i >= 0; i--) {
      const change = changes[i];
      let originalStop = 0;
      let modifiedStop = 0;
      if (i > 0) {
        const prevChange = changes[i - 1];
        originalStop = prevChange.originalStart + prevChange.originalLength;
        modifiedStop = prevChange.modifiedStart + prevChange.modifiedLength;
      }
      const checkOriginal = change.originalLength > 0;
      const checkModified = change.modifiedLength > 0;
      let bestDelta = 0;
      let bestScore = this._boundaryScore(change.originalStart, change.originalLength, change.modifiedStart, change.modifiedLength);
      for (let delta = 1; ; delta++) {
        const originalStart = change.originalStart - delta;
        const modifiedStart = change.modifiedStart - delta;
        if (originalStart < originalStop || modifiedStart < modifiedStop) {
          break;
        }
        if (checkOriginal && !this.OriginalElementsAreEqual(originalStart, originalStart + change.originalLength)) {
          break;
        }
        if (checkModified && !this.ModifiedElementsAreEqual(modifiedStart, modifiedStart + change.modifiedLength)) {
          break;
        }
        const touchingPreviousChange = originalStart === originalStop && modifiedStart === modifiedStop;
        const score = (touchingPreviousChange ? 5 : 0) + this._boundaryScore(originalStart, change.originalLength, modifiedStart, change.modifiedLength);
        if (score > bestScore) {
          bestScore = score;
          bestDelta = delta;
        }
      }
      change.originalStart -= bestDelta;
      change.modifiedStart -= bestDelta;
      const mergedChangeArr = [null];
      if (i > 0 && this.ChangesOverlap(changes[i - 1], changes[i], mergedChangeArr)) {
        changes[i - 1] = mergedChangeArr[0];
        changes.splice(i, 1);
        i++;
        continue;
      }
    }
    if (this._hasStrings) {
      for (let i = 1, len = changes.length; i < len; i++) {
        const aChange = changes[i - 1];
        const bChange = changes[i];
        const matchedLength = bChange.originalStart - aChange.originalStart - aChange.originalLength;
        const aOriginalStart = aChange.originalStart;
        const bOriginalEnd = bChange.originalStart + bChange.originalLength;
        const abOriginalLength = bOriginalEnd - aOriginalStart;
        const aModifiedStart = aChange.modifiedStart;
        const bModifiedEnd = bChange.modifiedStart + bChange.modifiedLength;
        const abModifiedLength = bModifiedEnd - aModifiedStart;
        if (matchedLength < 5 && abOriginalLength < 20 && abModifiedLength < 20) {
          const t = this._findBetterContiguousSequence(aOriginalStart, abOriginalLength, aModifiedStart, abModifiedLength, matchedLength);
          if (t) {
            const [originalMatchStart, modifiedMatchStart] = t;
            if (originalMatchStart !== aChange.originalStart + aChange.originalLength || modifiedMatchStart !== aChange.modifiedStart + aChange.modifiedLength) {
              aChange.originalLength = originalMatchStart - aChange.originalStart;
              aChange.modifiedLength = modifiedMatchStart - aChange.modifiedStart;
              bChange.originalStart = originalMatchStart + matchedLength;
              bChange.modifiedStart = modifiedMatchStart + matchedLength;
              bChange.originalLength = bOriginalEnd - bChange.originalStart;
              bChange.modifiedLength = bModifiedEnd - bChange.modifiedStart;
            }
          }
        }
      }
    }
    return changes;
  }
  _findBetterContiguousSequence(originalStart, originalLength, modifiedStart, modifiedLength, desiredLength) {
    if (originalLength < desiredLength || modifiedLength < desiredLength) {
      return null;
    }
    const originalMax = originalStart + originalLength - desiredLength + 1;
    const modifiedMax = modifiedStart + modifiedLength - desiredLength + 1;
    let bestScore = 0;
    let bestOriginalStart = 0;
    let bestModifiedStart = 0;
    for (let i = originalStart; i < originalMax; i++) {
      for (let j = modifiedStart; j < modifiedMax; j++) {
        const score = this._contiguousSequenceScore(i, j, desiredLength);
        if (score > 0 && score > bestScore) {
          bestScore = score;
          bestOriginalStart = i;
          bestModifiedStart = j;
        }
      }
    }
    if (bestScore > 0) {
      return [bestOriginalStart, bestModifiedStart];
    }
    return null;
  }
  _contiguousSequenceScore(originalStart, modifiedStart, length) {
    let score = 0;
    for (let l = 0; l < length; l++) {
      if (!this.ElementsAreEqual(originalStart + l, modifiedStart + l)) {
        return 0;
      }
      score += this._originalStringElements[originalStart + l].length;
    }
    return score;
  }
  _OriginalIsBoundary(index) {
    if (index <= 0 || index >= this._originalElementsOrHash.length - 1) {
      return true;
    }
    return this._hasStrings && /^\s*$/.test(this._originalStringElements[index]);
  }
  _OriginalRegionIsBoundary(originalStart, originalLength) {
    if (this._OriginalIsBoundary(originalStart) || this._OriginalIsBoundary(originalStart - 1)) {
      return true;
    }
    if (originalLength > 0) {
      const originalEnd = originalStart + originalLength;
      if (this._OriginalIsBoundary(originalEnd - 1) || this._OriginalIsBoundary(originalEnd)) {
        return true;
      }
    }
    return false;
  }
  _ModifiedIsBoundary(index) {
    if (index <= 0 || index >= this._modifiedElementsOrHash.length - 1) {
      return true;
    }
    return this._hasStrings && /^\s*$/.test(this._modifiedStringElements[index]);
  }
  _ModifiedRegionIsBoundary(modifiedStart, modifiedLength) {
    if (this._ModifiedIsBoundary(modifiedStart) || this._ModifiedIsBoundary(modifiedStart - 1)) {
      return true;
    }
    if (modifiedLength > 0) {
      const modifiedEnd = modifiedStart + modifiedLength;
      if (this._ModifiedIsBoundary(modifiedEnd - 1) || this._ModifiedIsBoundary(modifiedEnd)) {
        return true;
      }
    }
    return false;
  }
  _boundaryScore(originalStart, originalLength, modifiedStart, modifiedLength) {
    const originalScore = this._OriginalRegionIsBoundary(originalStart, originalLength) ? 1 : 0;
    const modifiedScore = this._ModifiedRegionIsBoundary(modifiedStart, modifiedLength) ? 1 : 0;
    return originalScore + modifiedScore;
  }
  /**
   * Concatenates the two input DiffChange lists and returns the resulting
   * list.
   * @param The left changes
   * @param The right changes
   * @returns The concatenated list
   */
  ConcatenateChanges(left, right) {
    const mergedChangeArr = [];
    if (left.length === 0 || right.length === 0) {
      return right.length > 0 ? right : left;
    } else if (this.ChangesOverlap(left[left.length - 1], right[0], mergedChangeArr)) {
      const result = new Array(left.length + right.length - 1);
      MyArray.Copy(left, 0, result, 0, left.length - 1);
      result[left.length - 1] = mergedChangeArr[0];
      MyArray.Copy(right, 1, result, left.length, right.length - 1);
      return result;
    } else {
      const result = new Array(left.length + right.length);
      MyArray.Copy(left, 0, result, 0, left.length);
      MyArray.Copy(right, 0, result, left.length, right.length);
      return result;
    }
  }
  /**
   * Returns true if the two changes overlap and can be merged into a single
   * change
   * @param left The left change
   * @param right The right change
   * @param mergedChange The merged change if the two overlap, null otherwise
   * @returns True if the two changes overlap
   */
  ChangesOverlap(left, right, mergedChangeArr) {
    Debug.Assert(left.originalStart <= right.originalStart, "Left change is not less than or equal to right change");
    Debug.Assert(left.modifiedStart <= right.modifiedStart, "Left change is not less than or equal to right change");
    if (left.originalStart + left.originalLength >= right.originalStart || left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
      const originalStart = left.originalStart;
      let originalLength = left.originalLength;
      const modifiedStart = left.modifiedStart;
      let modifiedLength = left.modifiedLength;
      if (left.originalStart + left.originalLength >= right.originalStart) {
        originalLength = right.originalStart + right.originalLength - left.originalStart;
      }
      if (left.modifiedStart + left.modifiedLength >= right.modifiedStart) {
        modifiedLength = right.modifiedStart + right.modifiedLength - left.modifiedStart;
      }
      mergedChangeArr[0] = new DiffChange(originalStart, originalLength, modifiedStart, modifiedLength);
      return true;
    } else {
      mergedChangeArr[0] = null;
      return false;
    }
  }
  /**
   * Helper method used to clip a diagonal index to the range of valid
   * diagonals. This also decides whether or not the diagonal index,
   * if it exceeds the boundary, should be clipped to the boundary or clipped
   * one inside the boundary depending on the Even/Odd status of the boundary
   * and numDifferences.
   * @param diagonal The index of the diagonal to clip.
   * @param numDifferences The current number of differences being iterated upon.
   * @param diagonalBaseIndex The base reference diagonal.
   * @param numDiagonals The total number of diagonals.
   * @returns The clipped diagonal index.
   */
  ClipDiagonalBound(diagonal, numDifferences, diagonalBaseIndex, numDiagonals) {
    if (diagonal >= 0 && diagonal < numDiagonals) {
      return diagonal;
    }
    const diagonalsBelow = diagonalBaseIndex;
    const diagonalsAbove = numDiagonals - diagonalBaseIndex - 1;
    const diffEven = numDifferences % 2 === 0;
    if (diagonal < 0) {
      const lowerBoundEven = diagonalsBelow % 2 === 0;
      return diffEven === lowerBoundEven ? 0 : 1;
    } else {
      const upperBoundEven = diagonalsAbove % 2 === 0;
      return diffEven === upperBoundEven ? numDiagonals - 1 : numDiagonals - 2;
    }
  }
};
var precomputedEqualityArray = new Uint32Array(65536);
var computeLevenshteinDistanceForShortStrings = (firstString, secondString) => {
  const firstStringLength = firstString.length;
  const secondStringLength = secondString.length;
  const lastBitMask = 1 << firstStringLength - 1;
  let positiveVector = -1;
  let negativeVector = 0;
  let distance = firstStringLength;
  let index = firstStringLength;
  while (index--) {
    precomputedEqualityArray[firstString.charCodeAt(index)] |= 1 << index;
  }
  for (index = 0; index < secondStringLength; index++) {
    let equalityMask = precomputedEqualityArray[secondString.charCodeAt(index)];
    const combinedVector = equalityMask | negativeVector;
    equalityMask |= (equalityMask & positiveVector) + positiveVector ^ positiveVector;
    negativeVector |= ~(equalityMask | positiveVector);
    positiveVector &= equalityMask;
    if (negativeVector & lastBitMask) {
      distance++;
    }
    if (positiveVector & lastBitMask) {
      distance--;
    }
    negativeVector = negativeVector << 1 | 1;
    positiveVector = positiveVector << 1 | ~(combinedVector | negativeVector);
    negativeVector &= combinedVector;
  }
  index = firstStringLength;
  while (index--) {
    precomputedEqualityArray[firstString.charCodeAt(index)] = 0;
  }
  return distance;
};
function computeLevenshteinDistanceForLongStrings(firstString, secondString) {
  const firstStringLength = firstString.length;
  const secondStringLength = secondString.length;
  const horizontalBitArray = [];
  const verticalBitArray = [];
  const horizontalSize = Math.ceil(firstStringLength / 32);
  const verticalSize = Math.ceil(secondStringLength / 32);
  for (let i = 0; i < horizontalSize; i++) {
    horizontalBitArray[i] = -1;
    verticalBitArray[i] = 0;
  }
  let verticalIndex = 0;
  for (; verticalIndex < verticalSize - 1; verticalIndex++) {
    let negativeVector2 = 0;
    let positiveVector2 = -1;
    const start2 = verticalIndex * 32;
    const verticalLength2 = Math.min(32, secondStringLength) + start2;
    for (let k = start2; k < verticalLength2; k++) {
      precomputedEqualityArray[secondString.charCodeAt(k)] |= 1 << k;
    }
    for (let i = 0; i < firstStringLength; i++) {
      const equalityMask = precomputedEqualityArray[firstString.charCodeAt(i)];
      const previousBit = horizontalBitArray[i / 32 | 0] >>> i & 1;
      const matchBit = verticalBitArray[i / 32 | 0] >>> i & 1;
      const combinedVector = equalityMask | negativeVector2;
      const combinedHorizontalVector = ((equalityMask | matchBit) & positiveVector2) + positiveVector2 ^ positiveVector2 | equalityMask | matchBit;
      let positiveHorizontalVector = negativeVector2 | ~(combinedHorizontalVector | positiveVector2);
      let negativeHorizontalVector = positiveVector2 & combinedHorizontalVector;
      if (positiveHorizontalVector >>> 31 ^ previousBit) {
        horizontalBitArray[i / 32 | 0] ^= 1 << i;
      }
      if (negativeHorizontalVector >>> 31 ^ matchBit) {
        verticalBitArray[i / 32 | 0] ^= 1 << i;
      }
      positiveHorizontalVector = positiveHorizontalVector << 1 | previousBit;
      negativeHorizontalVector = negativeHorizontalVector << 1 | matchBit;
      positiveVector2 = negativeHorizontalVector | ~(combinedVector | positiveHorizontalVector);
      negativeVector2 = positiveHorizontalVector & combinedVector;
    }
    for (let k = start2; k < verticalLength2; k++) {
      precomputedEqualityArray[secondString.charCodeAt(k)] = 0;
    }
  }
  let negativeVector = 0;
  let positiveVector = -1;
  const start = verticalIndex * 32;
  const verticalLength = Math.min(32, secondStringLength - start) + start;
  for (let k = start; k < verticalLength; k++) {
    precomputedEqualityArray[secondString.charCodeAt(k)] |= 1 << k;
  }
  let distance = secondStringLength;
  for (let i = 0; i < firstStringLength; i++) {
    const equalityMask = precomputedEqualityArray[firstString.charCodeAt(i)];
    const previousBit = horizontalBitArray[i / 32 | 0] >>> i & 1;
    const matchBit = verticalBitArray[i / 32 | 0] >>> i & 1;
    const combinedVector = equalityMask | negativeVector;
    const combinedHorizontalVector = ((equalityMask | matchBit) & positiveVector) + positiveVector ^ positiveVector | equalityMask | matchBit;
    let positiveHorizontalVector = negativeVector | ~(combinedHorizontalVector | positiveVector);
    let negativeHorizontalVector = positiveVector & combinedHorizontalVector;
    distance += positiveHorizontalVector >>> secondStringLength - 1 & 1;
    distance -= negativeHorizontalVector >>> secondStringLength - 1 & 1;
    if (positiveHorizontalVector >>> 31 ^ previousBit) {
      horizontalBitArray[i / 32 | 0] ^= 1 << i;
    }
    if (negativeHorizontalVector >>> 31 ^ matchBit) {
      verticalBitArray[i / 32 | 0] ^= 1 << i;
    }
    positiveHorizontalVector = positiveHorizontalVector << 1 | previousBit;
    negativeHorizontalVector = negativeHorizontalVector << 1 | matchBit;
    positiveVector = negativeHorizontalVector | ~(combinedVector | positiveHorizontalVector);
    negativeVector = positiveHorizontalVector & combinedVector;
  }
  for (let k = start; k < verticalLength; k++) {
    precomputedEqualityArray[secondString.charCodeAt(k)] = 0;
  }
  return distance;
}
function computeLevenshteinDistance(firstString, secondString) {
  if (firstString.length < secondString.length) {
    const temp = secondString;
    secondString = firstString;
    firstString = temp;
  }
  if (secondString.length === 0) {
    return firstString.length;
  }
  if (firstString.length <= 32) {
    return computeLevenshteinDistanceForShortStrings(firstString, secondString);
  }
  return computeLevenshteinDistanceForLongStrings(firstString, secondString);
}

// out-build/vs/base/common/process.js
var safeProcess;
var vscodeGlobal = globalThis.vscode;
if (typeof vscodeGlobal !== "undefined" && typeof vscodeGlobal.process !== "undefined") {
  const sandboxProcess = vscodeGlobal.process;
  safeProcess = {
    get platform() {
      return sandboxProcess.platform;
    },
    get arch() {
      return sandboxProcess.arch;
    },
    get env() {
      return sandboxProcess.env;
    },
    cwd() {
      return sandboxProcess.cwd();
    }
  };
} else if (typeof process !== "undefined" && typeof process?.versions?.node === "string") {
  safeProcess = {
    get platform() {
      return process.platform;
    },
    get arch() {
      return process.arch;
    },
    get env() {
      return process.env;
    },
    cwd() {
      return process.env["VSCODE_CWD"] || process.cwd();
    }
  };
} else {
  safeProcess = {
    // Supported
    get platform() {
      return isWindows ? "win32" : isMacintosh ? "darwin" : "linux";
    },
    get arch() {
      return void 0;
    },
    // Unsupported
    get env() {
      return {};
    },
    cwd() {
      return "/";
    }
  };
}
var cwd = safeProcess.cwd;
var env = safeProcess.env;
var platform = safeProcess.platform;
var arch = safeProcess.arch;

// out-build/vs/base/common/path.js
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;
var ErrorInvalidArgType = class extends Error {
  constructor(name, expected, actual) {
    let determiner;
    if (typeof expected === "string" && expected.indexOf("not ") === 0) {
      determiner = "must not be";
      expected = expected.replace(/^not /, "");
    } else {
      determiner = "must be";
    }
    const type = name.indexOf(".") !== -1 ? "property" : "argument";
    let msg = `The "${name}" ${type} ${determiner} of type ${expected}`;
    msg += `. Received type ${typeof actual}`;
    super(msg);
    this.code = "ERR_INVALID_ARG_TYPE";
  }
};
function validateObject(pathObject, name) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new ErrorInvalidArgType(name, "Object", pathObject);
  }
}
function validateString(value, name) {
  if (typeof value !== "string") {
    throw new ErrorInvalidArgType(name, "string", value);
  }
}
var platformIsWin32 = platform === "win32";
function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
function isWindowsDeviceRoot(code) {
  return code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z || code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z;
}
function normalizeString(path, allowAboveRoot, separator, isPathSeparator3) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code = 0;
  for (let i = 0; i <= path.length; ++i) {
    if (i < path.length) {
      code = path.charCodeAt(i);
    } else if (isPathSeparator3(code)) {
      break;
    } else {
      code = CHAR_FORWARD_SLASH;
    }
    if (isPathSeparator3(code)) {
      if (lastSlash === i - 1 || dots === 1) {
      } else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i;
            dots = 0;
            continue;
          } else if (res.length !== 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? `${separator}..` : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `${separator}${path.slice(lastSlash + 1, i)}`;
        } else {
          res = path.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
function formatExt(ext) {
  return ext ? `${ext[0] === "." ? "" : "."}${ext}` : "";
}
function _format2(sep2, pathObject) {
  validateObject(pathObject, "pathObject");
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || `${pathObject.name || ""}${formatExt(pathObject.ext)}`;
  if (!dir) {
    return base;
  }
  return dir === pathObject.root ? `${dir}${base}` : `${dir}${sep2}${base}`;
}
var win32 = {
  // path.resolve([from ...], to)
  resolve(...pathSegments) {
    let resolvedDevice = "";
    let resolvedTail = "";
    let resolvedAbsolute = false;
    for (let i = pathSegments.length - 1; i >= -1; i--) {
      let path;
      if (i >= 0) {
        path = pathSegments[i];
        validateString(path, `paths[${i}]`);
        if (path.length === 0) {
          continue;
        }
      } else if (resolvedDevice.length === 0) {
        path = cwd();
      } else {
        path = env[`=${resolvedDevice}`] || cwd();
        if (path === void 0 || path.slice(0, 2).toLowerCase() !== resolvedDevice.toLowerCase() && path.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
          path = `${resolvedDevice}\\`;
        }
      }
      const len = path.length;
      let rootEnd = 0;
      let device = "";
      let isAbsolute2 = false;
      const code = path.charCodeAt(0);
      if (len === 1) {
        if (isPathSeparator(code)) {
          rootEnd = 1;
          isAbsolute2 = true;
        }
      } else if (isPathSeparator(code)) {
        isAbsolute2 = true;
        if (isPathSeparator(path.charCodeAt(1))) {
          let j = 2;
          let last = j;
          while (j < len && !isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            const firstPart = path.slice(last, j);
            last = j;
            while (j < len && isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j < len && j !== last) {
              last = j;
              while (j < len && !isPathSeparator(path.charCodeAt(j))) {
                j++;
              }
              if (j === len || j !== last) {
                device = `\\\\${firstPart}\\${path.slice(last, j)}`;
                rootEnd = j;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
          isAbsolute2 = true;
          rootEnd = 3;
        }
      }
      if (device.length > 0) {
        if (resolvedDevice.length > 0) {
          if (device.toLowerCase() !== resolvedDevice.toLowerCase()) {
            continue;
          }
        } else {
          resolvedDevice = device;
        }
      }
      if (resolvedAbsolute) {
        if (resolvedDevice.length > 0) {
          break;
        }
      } else {
        resolvedTail = `${path.slice(rootEnd)}\\${resolvedTail}`;
        resolvedAbsolute = isAbsolute2;
        if (isAbsolute2 && resolvedDevice.length > 0) {
          break;
        }
      }
    }
    resolvedTail = normalizeString(resolvedTail, !resolvedAbsolute, "\\", isPathSeparator);
    return resolvedAbsolute ? `${resolvedDevice}\\${resolvedTail}` : `${resolvedDevice}${resolvedTail}` || ".";
  },
  normalize(path) {
    validateString(path, "path");
    const len = path.length;
    if (len === 0) {
      return ".";
    }
    let rootEnd = 0;
    let device;
    let isAbsolute2 = false;
    const code = path.charCodeAt(0);
    if (len === 1) {
      return isPosixPathSeparator(code) ? "\\" : path;
    }
    if (isPathSeparator(code)) {
      isAbsolute2 = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          const firstPart = path.slice(last, j);
          last = j;
          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            }
            if (j !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j)}`;
              rootEnd = j;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      device = path.slice(0, 2);
      rootEnd = 2;
      if (len > 2 && isPathSeparator(path.charCodeAt(2))) {
        isAbsolute2 = true;
        rootEnd = 3;
      }
    }
    let tail = rootEnd < len ? normalizeString(path.slice(rootEnd), !isAbsolute2, "\\", isPathSeparator) : "";
    if (tail.length === 0 && !isAbsolute2) {
      tail = ".";
    }
    if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
      tail += "\\";
    }
    if (!isAbsolute2 && device === void 0 && path.includes(":")) {
      if (tail.length >= 2 && isWindowsDeviceRoot(tail.charCodeAt(0)) && tail.charCodeAt(1) === CHAR_COLON) {
        return `.\\${tail}`;
      }
      let index = path.indexOf(":");
      do {
        if (index === len - 1 || isPathSeparator(path.charCodeAt(index + 1))) {
          return `.\\${tail}`;
        }
      } while ((index = path.indexOf(":", index + 1)) !== -1);
    }
    if (device === void 0) {
      return isAbsolute2 ? `\\${tail}` : tail;
    }
    return isAbsolute2 ? `${device}\\${tail}` : `${device}${tail}`;
  },
  isAbsolute(path) {
    validateString(path, "path");
    const len = path.length;
    if (len === 0) {
      return false;
    }
    const code = path.charCodeAt(0);
    return isPathSeparator(code) || // Possible device root
    len > 2 && isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON && isPathSeparator(path.charCodeAt(2));
  },
  join(...paths) {
    if (paths.length === 0) {
      return ".";
    }
    let joined;
    let firstPart;
    for (let i = 0; i < paths.length; ++i) {
      const arg = paths[i];
      validateString(arg, "path");
      if (arg.length > 0) {
        if (joined === void 0) {
          joined = firstPart = arg;
        } else {
          joined += `\\${arg}`;
        }
      }
    }
    if (joined === void 0) {
      return ".";
    }
    let needsReplace = true;
    let slashCount = 0;
    if (typeof firstPart === "string" && isPathSeparator(firstPart.charCodeAt(0))) {
      ++slashCount;
      const firstLen = firstPart.length;
      if (firstLen > 1 && isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2))) {
            ++slashCount;
          } else {
            needsReplace = false;
          }
        }
      }
    }
    if (needsReplace) {
      while (slashCount < joined.length && isPathSeparator(joined.charCodeAt(slashCount))) {
        slashCount++;
      }
      if (slashCount >= 2) {
        joined = `\\${joined.slice(slashCount)}`;
      }
    }
    return win32.normalize(joined);
  },
  // It will solve the relative path from `from` to `to`, for instance:
  //  from = 'C:\\orandea\\test\\aaa'
  //  to = 'C:\\orandea\\impl\\bbb'
  // The output of the function should be: '..\\..\\impl\\bbb'
  relative(from, to) {
    validateString(from, "from");
    validateString(to, "to");
    if (from === to) {
      return "";
    }
    const fromOrig = win32.resolve(from);
    const toOrig = win32.resolve(to);
    if (fromOrig === toOrig) {
      return "";
    }
    from = fromOrig.toLowerCase();
    to = toOrig.toLowerCase();
    if (from === to) {
      return "";
    }
    if (fromOrig.length !== from.length || toOrig.length !== to.length) {
      const fromSplit = fromOrig.split("\\");
      const toSplit = toOrig.split("\\");
      if (fromSplit[fromSplit.length - 1] === "") {
        fromSplit.pop();
      }
      if (toSplit[toSplit.length - 1] === "") {
        toSplit.pop();
      }
      const fromLen2 = fromSplit.length;
      const toLen2 = toSplit.length;
      const length2 = fromLen2 < toLen2 ? fromLen2 : toLen2;
      let i2;
      for (i2 = 0; i2 < length2; i2++) {
        if (fromSplit[i2].toLowerCase() !== toSplit[i2].toLowerCase()) {
          break;
        }
      }
      if (i2 === 0) {
        return toOrig;
      } else if (i2 === length2) {
        if (toLen2 > length2) {
          return toSplit.slice(i2).join("\\");
        }
        if (fromLen2 > length2) {
          return "..\\".repeat(fromLen2 - 1 - i2) + "..";
        }
        return "";
      }
      return "..\\".repeat(fromLen2 - i2) + toSplit.slice(i2).join("\\");
    }
    let fromStart = 0;
    while (fromStart < from.length && from.charCodeAt(fromStart) === CHAR_BACKWARD_SLASH) {
      fromStart++;
    }
    let fromEnd = from.length;
    while (fromEnd - 1 > fromStart && from.charCodeAt(fromEnd - 1) === CHAR_BACKWARD_SLASH) {
      fromEnd--;
    }
    const fromLen = fromEnd - fromStart;
    let toStart = 0;
    while (toStart < to.length && to.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      toStart++;
    }
    let toEnd = to.length;
    while (toEnd - 1 > toStart && to.charCodeAt(toEnd - 1) === CHAR_BACKWARD_SLASH) {
      toEnd--;
    }
    const toLen = toEnd - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_BACKWARD_SLASH) {
        lastCommonSep = i;
      }
    }
    if (i !== length) {
      if (lastCommonSep === -1) {
        return toOrig;
      }
    } else {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i + 1);
        }
        if (i === 2) {
          return toOrig.slice(toStart + i);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 2) {
          lastCommonSep = 3;
        }
      }
      if (lastCommonSep === -1) {
        lastCommonSep = 0;
      }
    }
    let out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_BACKWARD_SLASH) {
        out += out.length === 0 ? ".." : "\\..";
      }
    }
    toStart += lastCommonSep;
    if (out.length > 0) {
      return `${out}${toOrig.slice(toStart, toEnd)}`;
    }
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH) {
      ++toStart;
    }
    return toOrig.slice(toStart, toEnd);
  },
  toNamespacedPath(path) {
    if (typeof path !== "string" || path.length === 0) {
      return path;
    }
    const resolvedPath = win32.resolve(path);
    if (resolvedPath.length <= 2) {
      return path;
    }
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0)) && resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
      return `\\\\?\\${resolvedPath}`;
    }
    return resolvedPath;
  },
  dirname(path) {
    validateString(path, "path");
    const len = path.length;
    if (len === 0) {
      return ".";
    }
    let rootEnd = -1;
    let offset = 0;
    const code = path.charCodeAt(0);
    if (len === 1) {
      return isPathSeparator(code) ? path : ".";
    }
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              return path;
            }
            if (j !== last) {
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      rootEnd = len > 2 && isPathSeparator(path.charCodeAt(2)) ? 3 : 2;
      offset = rootEnd;
    }
    let end = -1;
    let matchedSlash = true;
    for (let i = len - 1; i >= offset; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1) {
      if (rootEnd === -1) {
        return ".";
      }
      end = rootEnd;
    }
    return path.slice(0, end);
  },
  basename(path, suffix) {
    if (suffix !== void 0) {
      validateString(suffix, "suffix");
    }
    validateString(path, "path");
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (path.length >= 2 && isWindowsDeviceRoot(path.charCodeAt(0)) && path.charCodeAt(1) === CHAR_COLON) {
      start = 2;
    }
    if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
      if (suffix === path) {
        return "";
      }
      let extIdx = suffix.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= start; --i) {
        const code = path.charCodeAt(i);
        if (isPathSeparator(code)) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === suffix.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    for (i = path.length - 1; i >= start; --i) {
      if (isPathSeparator(path.charCodeAt(i))) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1) {
      return "";
    }
    return path.slice(start, end);
  },
  extname(path) {
    validateString(path, "path");
    let start = 0;
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    if (path.length >= 2 && path.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path.charCodeAt(0))) {
      start = startPart = 2;
    }
    for (let i = path.length - 1; i >= start; --i) {
      const code = path.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: _format2.bind(null, "\\"),
  parse(path) {
    validateString(path, "path");
    const ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0) {
      return ret;
    }
    const len = path.length;
    let rootEnd = 0;
    let code = path.charCodeAt(0);
    if (len === 1) {
      if (isPathSeparator(code)) {
        ret.root = ret.dir = path;
        return ret;
      }
      ret.base = ret.name = path;
      return ret;
    }
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j = 2;
        let last = j;
        while (j < len && !isPathSeparator(path.charCodeAt(j))) {
          j++;
        }
        if (j < len && j !== last) {
          last = j;
          while (j < len && isPathSeparator(path.charCodeAt(j))) {
            j++;
          }
          if (j < len && j !== last) {
            last = j;
            while (j < len && !isPathSeparator(path.charCodeAt(j))) {
              j++;
            }
            if (j === len) {
              rootEnd = j;
            } else if (j !== last) {
              rootEnd = j + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code) && path.charCodeAt(1) === CHAR_COLON) {
      if (len <= 2) {
        ret.root = ret.dir = path;
        return ret;
      }
      rootEnd = 2;
      if (isPathSeparator(path.charCodeAt(2))) {
        if (len === 3) {
          ret.root = ret.dir = path;
          return ret;
        }
        rootEnd = 3;
      }
    }
    if (rootEnd > 0) {
      ret.root = path.slice(0, rootEnd);
    }
    let startDot = -1;
    let startPart = rootEnd;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for (; i >= rootEnd; --i) {
      code = path.charCodeAt(i);
      if (isPathSeparator(code)) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (end !== -1) {
      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(startPart, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
        ret.ext = path.slice(startDot, end);
      }
    }
    if (startPart > 0 && startPart !== rootEnd) {
      ret.dir = path.slice(0, startPart - 1);
    } else {
      ret.dir = ret.root;
    }
    return ret;
  },
  sep: "\\",
  delimiter: ";",
  win32: null,
  posix: null
};
var posixCwd = (() => {
  if (platformIsWin32) {
    const regexp = /\\/g;
    return () => {
      const cwd2 = cwd().replace(regexp, "/");
      return cwd2.slice(cwd2.indexOf("/"));
    };
  }
  return () => cwd();
})();
var posix = {
  // path.resolve([from ...], to)
  resolve(...pathSegments) {
    let resolvedPath = "";
    let resolvedAbsolute = false;
    for (let i = pathSegments.length - 1; i >= 0 && !resolvedAbsolute; i--) {
      const path = pathSegments[i];
      validateString(path, `paths[${i}]`);
      if (path.length === 0) {
        continue;
      }
      resolvedPath = `${path}/${resolvedPath}`;
      resolvedAbsolute = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    if (!resolvedAbsolute) {
      const cwd2 = posixCwd();
      resolvedPath = `${cwd2}/${resolvedPath}`;
      resolvedAbsolute = cwd2.charCodeAt(0) === CHAR_FORWARD_SLASH;
    }
    resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute, "/", isPosixPathSeparator);
    if (resolvedAbsolute) {
      return `/${resolvedPath}`;
    }
    return resolvedPath.length > 0 ? resolvedPath : ".";
  },
  normalize(path) {
    validateString(path, "path");
    if (path.length === 0) {
      return ".";
    }
    const isAbsolute2 = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    const trailingSeparator = path.charCodeAt(path.length - 1) === CHAR_FORWARD_SLASH;
    path = normalizeString(path, !isAbsolute2, "/", isPosixPathSeparator);
    if (path.length === 0) {
      if (isAbsolute2) {
        return "/";
      }
      return trailingSeparator ? "./" : ".";
    }
    if (trailingSeparator) {
      path += "/";
    }
    return isAbsolute2 ? `/${path}` : path;
  },
  isAbsolute(path) {
    validateString(path, "path");
    return path.length > 0 && path.charCodeAt(0) === CHAR_FORWARD_SLASH;
  },
  join(...paths) {
    if (paths.length === 0) {
      return ".";
    }
    const path = [];
    for (let i = 0; i < paths.length; ++i) {
      const arg = paths[i];
      validateString(arg, "path");
      if (arg.length > 0) {
        path.push(arg);
      }
    }
    if (path.length === 0) {
      return ".";
    }
    return posix.normalize(path.join("/"));
  },
  relative(from, to) {
    validateString(from, "from");
    validateString(to, "to");
    if (from === to) {
      return "";
    }
    from = posix.resolve(from);
    to = posix.resolve(to);
    if (from === to) {
      return "";
    }
    const fromStart = 1;
    const fromEnd = from.length;
    const fromLen = fromEnd - fromStart;
    const toStart = 1;
    const toLen = to.length - toStart;
    const length = fromLen < toLen ? fromLen : toLen;
    let lastCommonSep = -1;
    let i = 0;
    for (; i < length; i++) {
      const fromCode = from.charCodeAt(fromStart + i);
      if (fromCode !== to.charCodeAt(toStart + i)) {
        break;
      } else if (fromCode === CHAR_FORWARD_SLASH) {
        lastCommonSep = i;
      }
    }
    if (i === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i) === CHAR_FORWARD_SLASH) {
          return to.slice(toStart + i + 1);
        }
        if (i === 0) {
          return to.slice(toStart + i);
        }
      } else if (fromLen > length) {
        if (from.charCodeAt(fromStart + i) === CHAR_FORWARD_SLASH) {
          lastCommonSep = i;
        } else if (i === 0) {
          lastCommonSep = 0;
        }
      }
    }
    let out = "";
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        out += out.length === 0 ? ".." : "/..";
      }
    }
    return `${out}${to.slice(toStart + lastCommonSep)}`;
  },
  toNamespacedPath(path) {
    return path;
  },
  dirname(path) {
    validateString(path, "path");
    if (path.length === 0) {
      return ".";
    }
    const hasRoot = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    let end = -1;
    let matchedSlash = true;
    for (let i = path.length - 1; i >= 1; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1) {
      return hasRoot ? "/" : ".";
    }
    if (hasRoot && end === 1) {
      return "//";
    }
    return path.slice(0, end);
  },
  basename(path, suffix) {
    if (suffix !== void 0) {
      validateString(suffix, "suffix");
    }
    validateString(path, "path");
    let start = 0;
    let end = -1;
    let matchedSlash = true;
    let i;
    if (suffix !== void 0 && suffix.length > 0 && suffix.length <= path.length) {
      if (suffix === path) {
        return "";
      }
      let extIdx = suffix.length - 1;
      let firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        const code = path.charCodeAt(i);
        if (code === CHAR_FORWARD_SLASH) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === suffix.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path.length;
      }
      return path.slice(start, end);
    }
    for (i = path.length - 1; i >= 0; --i) {
      if (path.charCodeAt(i) === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1) {
      return "";
    }
    return path.slice(start, end);
  },
  extname(path) {
    validateString(path, "path");
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let preDotState = 0;
    for (let i = path.length - 1; i >= 0; --i) {
      const char = path[i];
      if (char === "/") {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (char === ".") {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
    preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path.slice(startDot, end);
  },
  format: _format2.bind(null, "/"),
  parse(path) {
    validateString(path, "path");
    const ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0) {
      return ret;
    }
    const isAbsolute2 = path.charCodeAt(0) === CHAR_FORWARD_SLASH;
    let start;
    if (isAbsolute2) {
      ret.root = "/";
      start = 1;
    } else {
      start = 0;
    }
    let startDot = -1;
    let startPart = 0;
    let end = -1;
    let matchedSlash = true;
    let i = path.length - 1;
    let preDotState = 0;
    for (; i >= start; --i) {
      const code = path.charCodeAt(i);
      if (code === CHAR_FORWARD_SLASH) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === CHAR_DOT) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (end !== -1) {
      const start2 = startPart === 0 && isAbsolute2 ? 1 : startPart;
      if (startDot === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        ret.base = ret.name = path.slice(start2, end);
      } else {
        ret.name = path.slice(start2, startDot);
        ret.base = path.slice(start2, end);
        ret.ext = path.slice(startDot, end);
      }
    }
    if (startPart > 0) {
      ret.dir = path.slice(0, startPart - 1);
    } else if (isAbsolute2) {
      ret.dir = "/";
    }
    return ret;
  },
  sep: "/",
  delimiter: ":",
  win32: null,
  posix: null
};
posix.win32 = win32.win32 = win32;
posix.posix = win32.posix = posix;
var normalize = platformIsWin32 ? win32.normalize : posix.normalize;
var isAbsolute = platformIsWin32 ? win32.isAbsolute : posix.isAbsolute;
var join = platformIsWin32 ? win32.join : posix.join;
var resolve = platformIsWin32 ? win32.resolve : posix.resolve;
var relative = platformIsWin32 ? win32.relative : posix.relative;
var dirname = platformIsWin32 ? win32.dirname : posix.dirname;
var basename = platformIsWin32 ? win32.basename : posix.basename;
var extname = platformIsWin32 ? win32.extname : posix.extname;
var format = platformIsWin32 ? win32.format : posix.format;
var parse = platformIsWin32 ? win32.parse : posix.parse;
var toNamespacedPath = platformIsWin32 ? win32.toNamespacedPath : posix.toNamespacedPath;
var sep = platformIsWin32 ? win32.sep : posix.sep;
var delimiter = platformIsWin32 ? win32.delimiter : posix.delimiter;

// out-build/vs/base/common/uri.js
var _schemePattern = /^\w[\w\d+.-]*$/;
var _singleSlashStart = /^\//;
var _doubleSlashStart = /^\/\//;
function _validateUri(ret, _strict) {
  if (!ret.scheme && _strict) {
    throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${ret.authority}", path: "${ret.path}", query: "${ret.query}", fragment: "${ret.fragment}"}`);
  }
  if (ret.scheme && !_schemePattern.test(ret.scheme)) {
    throw new Error("[UriError]: Scheme contains illegal characters.");
  }
  if (ret.path) {
    if (ret.authority) {
      if (!_singleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
      }
    } else {
      if (_doubleSlashStart.test(ret.path)) {
        throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
      }
    }
  }
}
function _schemeFix(scheme, _strict) {
  if (!scheme && !_strict) {
    return "file";
  }
  return scheme;
}
function _referenceResolution(scheme, path) {
  switch (scheme) {
    case "https":
    case "http":
    case "file":
      if (!path) {
        path = _slash;
      } else if (path[0] !== _slash) {
        path = _slash + path;
      }
      break;
  }
  return path;
}
var _empty = "";
var _slash = "/";
var _regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
var URI = class _URI {
  static isUri(thing) {
    if (thing instanceof _URI) {
      return true;
    }
    if (!thing || typeof thing !== "object") {
      return false;
    }
    return typeof thing.authority === "string" && typeof thing.fragment === "string" && typeof thing.path === "string" && typeof thing.query === "string" && typeof thing.scheme === "string" && typeof thing.fsPath === "string" && typeof thing.with === "function" && typeof thing.toString === "function";
  }
  /**
   * @internal
   */
  constructor(schemeOrData, authority, path, query, fragment, _strict = false) {
    if (typeof schemeOrData === "object") {
      this.scheme = schemeOrData.scheme || _empty;
      this.authority = schemeOrData.authority || _empty;
      this.path = schemeOrData.path || _empty;
      this.query = schemeOrData.query || _empty;
      this.fragment = schemeOrData.fragment || _empty;
    } else {
      this.scheme = _schemeFix(schemeOrData, _strict);
      this.authority = authority || _empty;
      this.path = _referenceResolution(this.scheme, path || _empty);
      this.query = query || _empty;
      this.fragment = fragment || _empty;
      _validateUri(this, _strict);
    }
  }
  // ---- filesystem path -----------------------
  /**
   * Returns a string representing the corresponding file system path of this URI.
   * Will handle UNC paths, normalizes windows drive letters to lower-case, and uses the
   * platform specific path separator.
   *
   * * Will *not* validate the path for invalid characters and semantics.
   * * Will *not* look at the scheme of this URI.
   * * The result shall *not* be used for display purposes but for accessing a file on disk.
   *
   *
   * The *difference* to `URI#path` is the use of the platform specific separator and the handling
   * of UNC paths. See the below sample of a file-uri with an authority (UNC path).
   *
   * ```ts
      const u = URI.parse('file://server/c$/folder/file.txt')
      u.authority === 'server'
      u.path === '/shares/c$/file.txt'
      u.fsPath === '\\server\c$\folder\file.txt'
  ```
   *
   * Using `URI#path` to read a file (using fs-apis) would not be enough because parts of the path,
   * namely the server name, would be missing. Therefore `URI#fsPath` exists - it's sugar to ease working
   * with URIs that represent files on disk (`file` scheme).
   */
  get fsPath() {
    return uriToFsPath(this, false);
  }
  // ---- modify to new -------------------------
  with(change) {
    if (!change) {
      return this;
    }
    let { scheme, authority, path, query, fragment } = change;
    if (scheme === void 0) {
      scheme = this.scheme;
    } else if (scheme === null) {
      scheme = _empty;
    }
    if (authority === void 0) {
      authority = this.authority;
    } else if (authority === null) {
      authority = _empty;
    }
    if (path === void 0) {
      path = this.path;
    } else if (path === null) {
      path = _empty;
    }
    if (query === void 0) {
      query = this.query;
    } else if (query === null) {
      query = _empty;
    }
    if (fragment === void 0) {
      fragment = this.fragment;
    } else if (fragment === null) {
      fragment = _empty;
    }
    if (scheme === this.scheme && authority === this.authority && path === this.path && query === this.query && fragment === this.fragment) {
      return this;
    }
    return new Uri(scheme, authority, path, query, fragment);
  }
  // ---- parse & validate ------------------------
  /**
   * Creates a new URI from a string, e.g. `http://www.example.com/some/path`,
   * `file:///usr/home`, or `scheme:with/path`.
   *
   * @param value A string which represents an URI (see `URI#toString`).
   */
  static parse(value, _strict = false) {
    const match2 = _regexp.exec(value);
    if (!match2) {
      return new Uri(_empty, _empty, _empty, _empty, _empty);
    }
    return new Uri(match2[2] || _empty, percentDecode(match2[4] || _empty), percentDecode(match2[5] || _empty), percentDecode(match2[7] || _empty), percentDecode(match2[9] || _empty), _strict);
  }
  /**
   * Creates a new URI from a file system path, e.g. `c:\my\files`,
   * `/usr/home`, or `\\server\share\some\path`.
   *
   * The *difference* between `URI#parse` and `URI#file` is that the latter treats the argument
   * as path, not as stringified-uri. E.g. `URI.file(path)` is **not the same as**
   * `URI.parse('file://' + path)` because the path might contain characters that are
   * interpreted (# and ?). See the following sample:
   * ```ts
  const good = URI.file('/coding/c#/project1');
  good.scheme === 'file';
  good.path === '/coding/c#/project1';
  good.fragment === '';
  const bad = URI.parse('file://' + '/coding/c#/project1');
  bad.scheme === 'file';
  bad.path === '/coding/c'; // path is now broken
  bad.fragment === '/project1';
  ```
   *
   * @param path A file system path (see `URI#fsPath`)
   */
  static file(path) {
    let authority = _empty;
    if (isWindows) {
      path = path.replace(/\\/g, _slash);
    }
    if (path[0] === _slash && path[1] === _slash) {
      const idx = path.indexOf(_slash, 2);
      if (idx === -1) {
        authority = path.substring(2);
        path = _slash;
      } else {
        authority = path.substring(2, idx);
        path = path.substring(idx) || _slash;
      }
    }
    return new Uri("file", authority, path, _empty, _empty);
  }
  /**
   * Creates new URI from uri components.
   *
   * Unless `strict` is `true` the scheme is defaults to be `file`. This function performs
   * validation and should be used for untrusted uri components retrieved from storage,
   * user input, command arguments etc
   */
  static from(components, strict) {
    const result = new Uri(components.scheme, components.authority, components.path, components.query, components.fragment, strict);
    return result;
  }
  /**
   * Join a URI path with path fragments and normalizes the resulting path.
   *
   * @param uri The input URI.
   * @param pathFragment The path fragment to add to the URI path.
   * @returns The resulting URI.
   */
  static joinPath(uri, ...pathFragment) {
    if (!uri.path) {
      throw new Error(`[UriError]: cannot call joinPath on URI without path`);
    }
    let newPath;
    if (isWindows && uri.scheme === "file") {
      newPath = _URI.file(win32.join(uriToFsPath(uri, true), ...pathFragment)).path;
    } else {
      newPath = posix.join(uri.path, ...pathFragment);
    }
    return uri.with({ path: newPath });
  }
  // ---- printing/externalize ---------------------------
  /**
   * Creates a string representation for this URI. It's guaranteed that calling
   * `URI.parse` with the result of this function creates an URI which is equal
   * to this URI.
   *
   * * The result shall *not* be used for display purposes but for externalization or transport.
   * * The result will be encoded using the percentage encoding and encoding happens mostly
   * ignore the scheme-specific encoding rules.
   *
   * @param skipEncoding Do not encode the result, default is `false`
   */
  toString(skipEncoding = false) {
    return _asFormatted(this, skipEncoding);
  }
  toJSON() {
    return this;
  }
  static revive(data) {
    if (!data) {
      return data;
    } else if (data instanceof _URI) {
      return data;
    } else {
      const result = new Uri(data);
      result._formatted = data.external ?? null;
      result._fsPath = data._sep === _pathSepMarker ? data.fsPath ?? null : null;
      return result;
    }
  }
  [Symbol.for("debug.description")]() {
    return `URI(${this.toString()})`;
  }
};
var _pathSepMarker = isWindows ? 1 : void 0;
var Uri = class extends URI {
  constructor() {
    super(...arguments);
    this._formatted = null;
    this._fsPath = null;
  }
  get fsPath() {
    if (!this._fsPath) {
      this._fsPath = uriToFsPath(this, false);
    }
    return this._fsPath;
  }
  toString(skipEncoding = false) {
    if (!skipEncoding) {
      if (!this._formatted) {
        this._formatted = _asFormatted(this, false);
      }
      return this._formatted;
    } else {
      return _asFormatted(this, true);
    }
  }
  toJSON() {
    const res = {
      $mid: 1
      /* MarshalledId.Uri */
    };
    if (this._fsPath) {
      res.fsPath = this._fsPath;
      res._sep = _pathSepMarker;
    }
    if (this._formatted) {
      res.external = this._formatted;
    }
    if (this.path) {
      res.path = this.path;
    }
    if (this.scheme) {
      res.scheme = this.scheme;
    }
    if (this.authority) {
      res.authority = this.authority;
    }
    if (this.query) {
      res.query = this.query;
    }
    if (this.fragment) {
      res.fragment = this.fragment;
    }
    return res;
  }
};
var encodeTable = {
  [
    58
    /* CharCode.Colon */
  ]: "%3A",
  // gen-delims
  [
    47
    /* CharCode.Slash */
  ]: "%2F",
  [
    63
    /* CharCode.QuestionMark */
  ]: "%3F",
  [
    35
    /* CharCode.Hash */
  ]: "%23",
  [
    91
    /* CharCode.OpenSquareBracket */
  ]: "%5B",
  [
    93
    /* CharCode.CloseSquareBracket */
  ]: "%5D",
  [
    64
    /* CharCode.AtSign */
  ]: "%40",
  [
    33
    /* CharCode.ExclamationMark */
  ]: "%21",
  // sub-delims
  [
    36
    /* CharCode.DollarSign */
  ]: "%24",
  [
    38
    /* CharCode.Ampersand */
  ]: "%26",
  [
    39
    /* CharCode.SingleQuote */
  ]: "%27",
  [
    40
    /* CharCode.OpenParen */
  ]: "%28",
  [
    41
    /* CharCode.CloseParen */
  ]: "%29",
  [
    42
    /* CharCode.Asterisk */
  ]: "%2A",
  [
    43
    /* CharCode.Plus */
  ]: "%2B",
  [
    44
    /* CharCode.Comma */
  ]: "%2C",
  [
    59
    /* CharCode.Semicolon */
  ]: "%3B",
  [
    61
    /* CharCode.Equals */
  ]: "%3D",
  [
    32
    /* CharCode.Space */
  ]: "%20"
};
function encodeURIComponentFast(uriComponent, isPath, isAuthority) {
  let res = void 0;
  let nativeEncodePos = -1;
  for (let pos = 0; pos < uriComponent.length; pos++) {
    const code = uriComponent.charCodeAt(pos);
    if (code >= 97 && code <= 122 || code >= 65 && code <= 90 || code >= 48 && code <= 57 || code === 45 || code === 46 || code === 95 || code === 126 || isPath && code === 47 || isAuthority && code === 91 || isAuthority && code === 93 || isAuthority && code === 58) {
      if (nativeEncodePos !== -1) {
        res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
        nativeEncodePos = -1;
      }
      if (res !== void 0) {
        res += uriComponent.charAt(pos);
      }
    } else {
      if (res === void 0) {
        res = uriComponent.substr(0, pos);
      }
      const escaped = encodeTable[code];
      if (escaped !== void 0) {
        if (nativeEncodePos !== -1) {
          res += encodeURIComponent(uriComponent.substring(nativeEncodePos, pos));
          nativeEncodePos = -1;
        }
        res += escaped;
      } else if (nativeEncodePos === -1) {
        nativeEncodePos = pos;
      }
    }
  }
  if (nativeEncodePos !== -1) {
    res += encodeURIComponent(uriComponent.substring(nativeEncodePos));
  }
  return res !== void 0 ? res : uriComponent;
}
function encodeURIComponentMinimal(path) {
  let res = void 0;
  for (let pos = 0; pos < path.length; pos++) {
    const code = path.charCodeAt(pos);
    if (code === 35 || code === 63) {
      if (res === void 0) {
        res = path.substr(0, pos);
      }
      res += encodeTable[code];
    } else {
      if (res !== void 0) {
        res += path[pos];
      }
    }
  }
  return res !== void 0 ? res : path;
}
function uriToFsPath(uri, keepDriveLetterCasing) {
  let value;
  if (uri.authority && uri.path.length > 1 && uri.scheme === "file") {
    value = `//${uri.authority}${uri.path}`;
  } else if (uri.path.charCodeAt(0) === 47 && (uri.path.charCodeAt(1) >= 65 && uri.path.charCodeAt(1) <= 90 || uri.path.charCodeAt(1) >= 97 && uri.path.charCodeAt(1) <= 122) && uri.path.charCodeAt(2) === 58) {
    if (!keepDriveLetterCasing) {
      value = uri.path[1].toLowerCase() + uri.path.substr(2);
    } else {
      value = uri.path.substr(1);
    }
  } else {
    value = uri.path;
  }
  if (isWindows) {
    value = value.replace(/\//g, "\\");
  }
  return value;
}
function _asFormatted(uri, skipEncoding) {
  const encoder = !skipEncoding ? encodeURIComponentFast : encodeURIComponentMinimal;
  let res = "";
  let { scheme, authority, path, query, fragment } = uri;
  if (scheme) {
    res += scheme;
    res += ":";
  }
  if (authority || scheme === "file") {
    res += _slash;
    res += _slash;
  }
  if (authority) {
    let idx = authority.indexOf("@");
    if (idx !== -1) {
      const userinfo = authority.substr(0, idx);
      authority = authority.substr(idx + 1);
      idx = userinfo.lastIndexOf(":");
      if (idx === -1) {
        res += encoder(userinfo, false, false);
      } else {
        res += encoder(userinfo.substr(0, idx), false, false);
        res += ":";
        res += encoder(userinfo.substr(idx + 1), false, true);
      }
      res += "@";
    }
    authority = authority.toLowerCase();
    idx = authority.lastIndexOf(":");
    if (idx === -1) {
      res += encoder(authority, false, true);
    } else {
      res += encoder(authority.substr(0, idx), false, true);
      res += authority.substr(idx);
    }
  }
  if (path) {
    if (path.length >= 3 && path.charCodeAt(0) === 47 && path.charCodeAt(2) === 58) {
      const code = path.charCodeAt(1);
      if (code >= 65 && code <= 90) {
        path = `/${String.fromCharCode(code + 32)}:${path.substr(3)}`;
      }
    } else if (path.length >= 2 && path.charCodeAt(1) === 58) {
      const code = path.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        path = `${String.fromCharCode(code + 32)}:${path.substr(2)}`;
      }
    }
    res += encoder(path, true, false);
  }
  if (query) {
    res += "?";
    res += encoder(query, false, false);
  }
  if (fragment) {
    res += "#";
    res += !skipEncoding ? encodeURIComponentFast(fragment, false, false) : fragment;
  }
  return res;
}
function decodeURIComponentGraceful(str) {
  try {
    return decodeURIComponent(str);
  } catch {
    if (str.length > 3) {
      return str.substr(0, 3) + decodeURIComponentGraceful(str.substr(3));
    } else {
      return str;
    }
  }
}
var _rEncodedAsHex = /(%[0-9A-Za-z][0-9A-Za-z])+/g;
function percentDecode(str) {
  if (!str.match(_rEncodedAsHex)) {
    return str;
  }
  return str.replace(_rEncodedAsHex, (match2) => decodeURIComponentGraceful(match2));
}

// out-build/vs/editor/common/core/position.js
var Position = class _Position {
  constructor(lineNumber, column) {
    this.lineNumber = lineNumber;
    this.column = column;
  }
  /**
   * Create a new position from this position.
   *
   * @param newLineNumber new line number
   * @param newColumn new column
   */
  with(newLineNumber = this.lineNumber, newColumn = this.column) {
    if (newLineNumber === this.lineNumber && newColumn === this.column) {
      return this;
    } else {
      return new _Position(newLineNumber, newColumn);
    }
  }
  /**
   * Derive a new position from this position.
   *
   * @param deltaLineNumber line number delta
   * @param deltaColumn column delta
   */
  delta(deltaLineNumber = 0, deltaColumn = 0) {
    return this.with(Math.max(1, this.lineNumber + deltaLineNumber), Math.max(1, this.column + deltaColumn));
  }
  /**
   * Test if this position equals other position
   */
  equals(other) {
    return _Position.equals(this, other);
  }
  /**
   * Test if position `a` equals position `b`
   */
  static equals(a, b) {
    if (!a && !b) {
      return true;
    }
    return !!a && !!b && a.lineNumber === b.lineNumber && a.column === b.column;
  }
  /**
   * Test if this position is before other position.
   * If the two positions are equal, the result will be false.
   */
  isBefore(other) {
    return _Position.isBefore(this, other);
  }
  /**
   * Test if position `a` is before position `b`.
   * If the two positions are equal, the result will be false.
   */
  static isBefore(a, b) {
    if (a.lineNumber < b.lineNumber) {
      return true;
    }
    if (b.lineNumber < a.lineNumber) {
      return false;
    }
    return a.column < b.column;
  }
  /**
   * Test if this position is before other position.
   * If the two positions are equal, the result will be true.
   */
  isBeforeOrEqual(other) {
    return _Position.isBeforeOrEqual(this, other);
  }
  /**
   * Test if position `a` is before position `b`.
   * If the two positions are equal, the result will be true.
   */
  static isBeforeOrEqual(a, b) {
    if (a.lineNumber < b.lineNumber) {
      return true;
    }
    if (b.lineNumber < a.lineNumber) {
      return false;
    }
    return a.column <= b.column;
  }
  /**
   * A function that compares positions, useful for sorting
   */
  static compare(a, b) {
    const aLineNumber = a.lineNumber | 0;
    const bLineNumber = b.lineNumber | 0;
    if (aLineNumber === bLineNumber) {
      const aColumn = a.column | 0;
      const bColumn = b.column | 0;
      return aColumn - bColumn;
    }
    return aLineNumber - bLineNumber;
  }
  /**
   * Clone this position.
   */
  clone() {
    return new _Position(this.lineNumber, this.column);
  }
  /**
   * Convert to a human-readable representation.
   */
  toString() {
    return "(" + this.lineNumber + "," + this.column + ")";
  }
  // ---
  /**
   * Create a `Position` from an `IPosition`.
   */
  static lift(pos) {
    return new _Position(pos.lineNumber, pos.column);
  }
  /**
   * Test if `obj` is an `IPosition`.
   */
  static isIPosition(obj) {
    return obj && typeof obj.lineNumber === "number" && typeof obj.column === "number";
  }
  toJSON() {
    return {
      lineNumber: this.lineNumber,
      column: this.column
    };
  }
};

// out-build/vs/editor/common/core/range.js
var Range = class _Range {
  constructor(startLineNumber, startColumn, endLineNumber, endColumn) {
    if (startLineNumber > endLineNumber || startLineNumber === endLineNumber && startColumn > endColumn) {
      this.startLineNumber = endLineNumber;
      this.startColumn = endColumn;
      this.endLineNumber = startLineNumber;
      this.endColumn = startColumn;
    } else {
      this.startLineNumber = startLineNumber;
      this.startColumn = startColumn;
      this.endLineNumber = endLineNumber;
      this.endColumn = endColumn;
    }
  }
  /**
   * Test if this range is empty.
   */
  isEmpty() {
    return _Range.isEmpty(this);
  }
  /**
   * Test if `range` is empty.
   */
  static isEmpty(range) {
    return range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn;
  }
  /**
   * Test if position is in this range. If the position is at the edges, will return true.
   */
  containsPosition(position) {
    return _Range.containsPosition(this, position);
  }
  /**
   * Test if `position` is in `range`. If the position is at the edges, will return true.
   */
  static containsPosition(range, position) {
    if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
      return false;
    }
    if (position.lineNumber === range.startLineNumber && position.column < range.startColumn) {
      return false;
    }
    if (position.lineNumber === range.endLineNumber && position.column > range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if `position` is in `range`. If the position is at the edges, will return false.
   * @internal
   */
  static strictContainsPosition(range, position) {
    if (position.lineNumber < range.startLineNumber || position.lineNumber > range.endLineNumber) {
      return false;
    }
    if (position.lineNumber === range.startLineNumber && position.column <= range.startColumn) {
      return false;
    }
    if (position.lineNumber === range.endLineNumber && position.column >= range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if range is in this range. If the range is equal to this range, will return true.
   */
  containsRange(range) {
    return _Range.containsRange(this, range);
  }
  /**
   * Test if `otherRange` is in `range`. If the ranges are equal, will return true.
   */
  static containsRange(range, otherRange) {
    if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn < range.startColumn) {
      return false;
    }
    if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn > range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if `range` is strictly in this range. `range` must start after and end before this range for the result to be true.
   */
  strictContainsRange(range) {
    return _Range.strictContainsRange(this, range);
  }
  /**
   * Test if `otherRange` is strictly in `range` (must start after, and end before). If the ranges are equal, will return false.
   */
  static strictContainsRange(range, otherRange) {
    if (otherRange.startLineNumber < range.startLineNumber || otherRange.endLineNumber < range.startLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber > range.endLineNumber || otherRange.endLineNumber > range.endLineNumber) {
      return false;
    }
    if (otherRange.startLineNumber === range.startLineNumber && otherRange.startColumn <= range.startColumn) {
      return false;
    }
    if (otherRange.endLineNumber === range.endLineNumber && otherRange.endColumn >= range.endColumn) {
      return false;
    }
    return true;
  }
  /**
   * A reunion of the two ranges.
   * The smallest position will be used as the start point, and the largest one as the end point.
   */
  plusRange(range) {
    return _Range.plusRange(this, range);
  }
  /**
   * A reunion of the two ranges.
   * The smallest position will be used as the start point, and the largest one as the end point.
   */
  static plusRange(a, b) {
    let startLineNumber;
    let startColumn;
    let endLineNumber;
    let endColumn;
    if (b.startLineNumber < a.startLineNumber) {
      startLineNumber = b.startLineNumber;
      startColumn = b.startColumn;
    } else if (b.startLineNumber === a.startLineNumber) {
      startLineNumber = b.startLineNumber;
      startColumn = Math.min(b.startColumn, a.startColumn);
    } else {
      startLineNumber = a.startLineNumber;
      startColumn = a.startColumn;
    }
    if (b.endLineNumber > a.endLineNumber) {
      endLineNumber = b.endLineNumber;
      endColumn = b.endColumn;
    } else if (b.endLineNumber === a.endLineNumber) {
      endLineNumber = b.endLineNumber;
      endColumn = Math.max(b.endColumn, a.endColumn);
    } else {
      endLineNumber = a.endLineNumber;
      endColumn = a.endColumn;
    }
    return new _Range(startLineNumber, startColumn, endLineNumber, endColumn);
  }
  /**
   * A intersection of the two ranges.
   */
  intersectRanges(range) {
    return _Range.intersectRanges(this, range);
  }
  /**
   * A intersection of the two ranges.
   */
  static intersectRanges(a, b) {
    let resultStartLineNumber = a.startLineNumber;
    let resultStartColumn = a.startColumn;
    let resultEndLineNumber = a.endLineNumber;
    let resultEndColumn = a.endColumn;
    const otherStartLineNumber = b.startLineNumber;
    const otherStartColumn = b.startColumn;
    const otherEndLineNumber = b.endLineNumber;
    const otherEndColumn = b.endColumn;
    if (resultStartLineNumber < otherStartLineNumber) {
      resultStartLineNumber = otherStartLineNumber;
      resultStartColumn = otherStartColumn;
    } else if (resultStartLineNumber === otherStartLineNumber) {
      resultStartColumn = Math.max(resultStartColumn, otherStartColumn);
    }
    if (resultEndLineNumber > otherEndLineNumber) {
      resultEndLineNumber = otherEndLineNumber;
      resultEndColumn = otherEndColumn;
    } else if (resultEndLineNumber === otherEndLineNumber) {
      resultEndColumn = Math.min(resultEndColumn, otherEndColumn);
    }
    if (resultStartLineNumber > resultEndLineNumber) {
      return null;
    }
    if (resultStartLineNumber === resultEndLineNumber && resultStartColumn > resultEndColumn) {
      return null;
    }
    return new _Range(resultStartLineNumber, resultStartColumn, resultEndLineNumber, resultEndColumn);
  }
  /**
   * Test if this range equals other.
   */
  equalsRange(other) {
    return _Range.equalsRange(this, other);
  }
  /**
   * Test if range `a` equals `b`.
   */
  static equalsRange(a, b) {
    if (!a && !b) {
      return true;
    }
    return !!a && !!b && a.startLineNumber === b.startLineNumber && a.startColumn === b.startColumn && a.endLineNumber === b.endLineNumber && a.endColumn === b.endColumn;
  }
  /**
   * Return the end position (which will be after or equal to the start position)
   */
  getEndPosition() {
    return _Range.getEndPosition(this);
  }
  /**
   * Return the end position (which will be after or equal to the start position)
   */
  static getEndPosition(range) {
    return new Position(range.endLineNumber, range.endColumn);
  }
  /**
   * Return the start position (which will be before or equal to the end position)
   */
  getStartPosition() {
    return _Range.getStartPosition(this);
  }
  /**
   * Return the start position (which will be before or equal to the end position)
   */
  static getStartPosition(range) {
    return new Position(range.startLineNumber, range.startColumn);
  }
  /**
   * Transform to a user presentable string representation.
   */
  toString() {
    return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
  }
  /**
   * Create a new range using this range's start position, and using endLineNumber and endColumn as the end position.
   */
  setEndPosition(endLineNumber, endColumn) {
    return new _Range(this.startLineNumber, this.startColumn, endLineNumber, endColumn);
  }
  /**
   * Create a new range using this range's end position, and using startLineNumber and startColumn as the start position.
   */
  setStartPosition(startLineNumber, startColumn) {
    return new _Range(startLineNumber, startColumn, this.endLineNumber, this.endColumn);
  }
  /**
   * Create a new empty range using this range's start position.
   */
  collapseToStart() {
    return _Range.collapseToStart(this);
  }
  /**
   * Create a new empty range using this range's start position.
   */
  static collapseToStart(range) {
    return new _Range(range.startLineNumber, range.startColumn, range.startLineNumber, range.startColumn);
  }
  /**
   * Create a new empty range using this range's end position.
   */
  collapseToEnd() {
    return _Range.collapseToEnd(this);
  }
  /**
   * Create a new empty range using this range's end position.
   */
  static collapseToEnd(range) {
    return new _Range(range.endLineNumber, range.endColumn, range.endLineNumber, range.endColumn);
  }
  /**
   * Moves the range by the given amount of lines.
   */
  delta(lineCount) {
    return new _Range(this.startLineNumber + lineCount, this.startColumn, this.endLineNumber + lineCount, this.endColumn);
  }
  isSingleLine() {
    return this.startLineNumber === this.endLineNumber;
  }
  // ---
  static fromPositions(start, end = start) {
    return new _Range(start.lineNumber, start.column, end.lineNumber, end.column);
  }
  static lift(range) {
    if (!range) {
      return null;
    }
    return new _Range(range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn);
  }
  /**
   * Test if `obj` is an `IRange`.
   */
  static isIRange(obj) {
    return obj && typeof obj.startLineNumber === "number" && typeof obj.startColumn === "number" && typeof obj.endLineNumber === "number" && typeof obj.endColumn === "number";
  }
  /**
   * Test if the two ranges are touching in any way.
   */
  static areIntersectingOrTouching(a, b) {
    if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn) {
      return false;
    }
    if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if the two ranges are intersecting. If the ranges are touching it returns true.
   */
  static areIntersecting(a, b) {
    if (a.endLineNumber < b.startLineNumber || a.endLineNumber === b.startLineNumber && a.endColumn <= b.startColumn) {
      return false;
    }
    if (b.endLineNumber < a.startLineNumber || b.endLineNumber === a.startLineNumber && b.endColumn <= a.startColumn) {
      return false;
    }
    return true;
  }
  /**
   * Test if the two ranges are intersecting, but not touching at all.
   */
  static areOnlyIntersecting(a, b) {
    if (a.endLineNumber < b.startLineNumber - 1 || a.endLineNumber === b.startLineNumber && a.endColumn < b.startColumn - 1) {
      return false;
    }
    if (b.endLineNumber < a.startLineNumber - 1 || b.endLineNumber === a.startLineNumber && b.endColumn < a.startColumn - 1) {
      return false;
    }
    return true;
  }
  /**
   * A function that compares ranges, useful for sorting ranges
   * It will first compare ranges on the startPosition and then on the endPosition
   */
  static compareRangesUsingStarts(a, b) {
    if (a && b) {
      const aStartLineNumber = a.startLineNumber | 0;
      const bStartLineNumber = b.startLineNumber | 0;
      if (aStartLineNumber === bStartLineNumber) {
        const aStartColumn = a.startColumn | 0;
        const bStartColumn = b.startColumn | 0;
        if (aStartColumn === bStartColumn) {
          const aEndLineNumber = a.endLineNumber | 0;
          const bEndLineNumber = b.endLineNumber | 0;
          if (aEndLineNumber === bEndLineNumber) {
            const aEndColumn = a.endColumn | 0;
            const bEndColumn = b.endColumn | 0;
            return aEndColumn - bEndColumn;
          }
          return aEndLineNumber - bEndLineNumber;
        }
        return aStartColumn - bStartColumn;
      }
      return aStartLineNumber - bStartLineNumber;
    }
    const aExists = a ? 1 : 0;
    const bExists = b ? 1 : 0;
    return aExists - bExists;
  }
  /**
   * A function that compares ranges, useful for sorting ranges
   * It will first compare ranges on the endPosition and then on the startPosition
   */
  static compareRangesUsingEnds(a, b) {
    if (a.endLineNumber === b.endLineNumber) {
      if (a.endColumn === b.endColumn) {
        if (a.startLineNumber === b.startLineNumber) {
          return a.startColumn - b.startColumn;
        }
        return a.startLineNumber - b.startLineNumber;
      }
      return a.endColumn - b.endColumn;
    }
    return a.endLineNumber - b.endLineNumber;
  }
  /**
   * Test if the range spans multiple lines.
   */
  static spansMultipleLines(range) {
    return range.endLineNumber > range.startLineNumber;
  }
  toJSON() {
    return this;
  }
};

// out-build/vs/base/common/objects.js
function filter(obj, predicate) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const [key, value] of Object.entries(obj)) {
    if (predicate(key, value)) {
      result[key] = value;
    }
  }
  return result;
}

// out-build/vs/editor/common/model.js
var OverviewRulerLane;
(function(OverviewRulerLane2) {
  OverviewRulerLane2[OverviewRulerLane2["Left"] = 1] = "Left";
  OverviewRulerLane2[OverviewRulerLane2["Center"] = 2] = "Center";
  OverviewRulerLane2[OverviewRulerLane2["Right"] = 4] = "Right";
  OverviewRulerLane2[OverviewRulerLane2["Full"] = 7] = "Full";
})(OverviewRulerLane || (OverviewRulerLane = {}));
var GlyphMarginLane;
(function(GlyphMarginLane2) {
  GlyphMarginLane2[GlyphMarginLane2["Left"] = 1] = "Left";
  GlyphMarginLane2[GlyphMarginLane2["Center"] = 2] = "Center";
  GlyphMarginLane2[GlyphMarginLane2["Right"] = 3] = "Right";
})(GlyphMarginLane || (GlyphMarginLane = {}));
var MinimapPosition;
(function(MinimapPosition2) {
  MinimapPosition2[MinimapPosition2["Inline"] = 1] = "Inline";
  MinimapPosition2[MinimapPosition2["Gutter"] = 2] = "Gutter";
})(MinimapPosition || (MinimapPosition = {}));
var MinimapSectionHeaderStyle;
(function(MinimapSectionHeaderStyle2) {
  MinimapSectionHeaderStyle2[MinimapSectionHeaderStyle2["Normal"] = 1] = "Normal";
  MinimapSectionHeaderStyle2[MinimapSectionHeaderStyle2["Underlined"] = 2] = "Underlined";
})(MinimapSectionHeaderStyle || (MinimapSectionHeaderStyle = {}));
var TextDirection;
(function(TextDirection2) {
  TextDirection2[TextDirection2["LTR"] = 0] = "LTR";
  TextDirection2[TextDirection2["RTL"] = 1] = "RTL";
})(TextDirection || (TextDirection = {}));
var InjectedTextCursorStops;
(function(InjectedTextCursorStops2) {
  InjectedTextCursorStops2[InjectedTextCursorStops2["Both"] = 0] = "Both";
  InjectedTextCursorStops2[InjectedTextCursorStops2["Right"] = 1] = "Right";
  InjectedTextCursorStops2[InjectedTextCursorStops2["Left"] = 2] = "Left";
  InjectedTextCursorStops2[InjectedTextCursorStops2["None"] = 3] = "None";
})(InjectedTextCursorStops || (InjectedTextCursorStops = {}));
var EndOfLinePreference;
(function(EndOfLinePreference2) {
  EndOfLinePreference2[EndOfLinePreference2["TextDefined"] = 0] = "TextDefined";
  EndOfLinePreference2[EndOfLinePreference2["LF"] = 1] = "LF";
  EndOfLinePreference2[EndOfLinePreference2["CRLF"] = 2] = "CRLF";
})(EndOfLinePreference || (EndOfLinePreference = {}));
var DefaultEndOfLine;
(function(DefaultEndOfLine2) {
  DefaultEndOfLine2[DefaultEndOfLine2["LF"] = 1] = "LF";
  DefaultEndOfLine2[DefaultEndOfLine2["CRLF"] = 2] = "CRLF";
})(DefaultEndOfLine || (DefaultEndOfLine = {}));
var EndOfLineSequence;
(function(EndOfLineSequence2) {
  EndOfLineSequence2[EndOfLineSequence2["LF"] = 0] = "LF";
  EndOfLineSequence2[EndOfLineSequence2["CRLF"] = 1] = "CRLF";
})(EndOfLineSequence || (EndOfLineSequence = {}));
var FindMatch = class {
  /**
   * @internal
   */
  constructor(range, matches) {
    this._findMatchBrand = void 0;
    this.range = range;
    this.matches = matches;
  }
};
var TrackedRangeStickiness;
(function(TrackedRangeStickiness2) {
  TrackedRangeStickiness2[TrackedRangeStickiness2["AlwaysGrowsWhenTypingAtEdges"] = 0] = "AlwaysGrowsWhenTypingAtEdges";
  TrackedRangeStickiness2[TrackedRangeStickiness2["NeverGrowsWhenTypingAtEdges"] = 1] = "NeverGrowsWhenTypingAtEdges";
  TrackedRangeStickiness2[TrackedRangeStickiness2["GrowsOnlyWhenTypingBefore"] = 2] = "GrowsOnlyWhenTypingBefore";
  TrackedRangeStickiness2[TrackedRangeStickiness2["GrowsOnlyWhenTypingAfter"] = 3] = "GrowsOnlyWhenTypingAfter";
})(TrackedRangeStickiness || (TrackedRangeStickiness = {}));
var PositionAffinity;
(function(PositionAffinity2) {
  PositionAffinity2[PositionAffinity2["Left"] = 0] = "Left";
  PositionAffinity2[PositionAffinity2["Right"] = 1] = "Right";
  PositionAffinity2[PositionAffinity2["None"] = 2] = "None";
  PositionAffinity2[PositionAffinity2["LeftOfInjectedText"] = 3] = "LeftOfInjectedText";
  PositionAffinity2[PositionAffinity2["RightOfInjectedText"] = 4] = "RightOfInjectedText";
})(PositionAffinity || (PositionAffinity = {}));
var ModelConstants;
(function(ModelConstants2) {
  ModelConstants2[ModelConstants2["FIRST_LINE_DETECTION_LENGTH_LIMIT"] = 1e3] = "FIRST_LINE_DETECTION_LENGTH_LIMIT";
})(ModelConstants || (ModelConstants = {}));
var SearchData = class {
  constructor(regex, wordSeparators, simpleSearch) {
    this.regex = regex;
    this.wordSeparators = wordSeparators;
    this.simpleSearch = simpleSearch;
  }
};
var ApplyEditsResult = class {
  constructor(reverseEdits, changes, trimAutoWhitespaceLineNumbers) {
    this.reverseEdits = reverseEdits;
    this.changes = changes;
    this.trimAutoWhitespaceLineNumbers = trimAutoWhitespaceLineNumbers;
  }
};

// out-build/vs/editor/common/model/pieceTreeTextBuffer/rbTreeBase.js
var TreeNode = class {
  constructor(piece, color) {
    this.piece = piece;
    this.color = color;
    this.size_left = 0;
    this.lf_left = 0;
    this.parent = this;
    this.left = this;
    this.right = this;
  }
  next() {
    if (this.right !== SENTINEL) {
      return leftest(this.right);
    }
    let node = this;
    while (node.parent !== SENTINEL) {
      if (node.parent.left === node) {
        break;
      }
      node = node.parent;
    }
    if (node.parent === SENTINEL) {
      return SENTINEL;
    } else {
      return node.parent;
    }
  }
  prev() {
    if (this.left !== SENTINEL) {
      return righttest(this.left);
    }
    let node = this;
    while (node.parent !== SENTINEL) {
      if (node.parent.right === node) {
        break;
      }
      node = node.parent;
    }
    if (node.parent === SENTINEL) {
      return SENTINEL;
    } else {
      return node.parent;
    }
  }
  detach() {
    this.parent = null;
    this.left = null;
    this.right = null;
  }
};
var NodeColor;
(function(NodeColor2) {
  NodeColor2[NodeColor2["Black"] = 0] = "Black";
  NodeColor2[NodeColor2["Red"] = 1] = "Red";
})(NodeColor || (NodeColor = {}));
var SENTINEL = new TreeNode(
  null,
  0
  /* NodeColor.Black */
);
SENTINEL.parent = SENTINEL;
SENTINEL.left = SENTINEL;
SENTINEL.right = SENTINEL;
SENTINEL.color = 0;
function leftest(node) {
  while (node.left !== SENTINEL) {
    node = node.left;
  }
  return node;
}
function righttest(node) {
  while (node.right !== SENTINEL) {
    node = node.right;
  }
  return node;
}
function calculateSize(node) {
  if (node === SENTINEL) {
    return 0;
  }
  return node.size_left + node.piece.length + calculateSize(node.right);
}
function calculateLF(node) {
  if (node === SENTINEL) {
    return 0;
  }
  return node.lf_left + node.piece.lineFeedCnt + calculateLF(node.right);
}
function resetSentinel() {
  SENTINEL.parent = SENTINEL;
}
function leftRotate2(tree, x) {
  const y = x.right;
  y.size_left += x.size_left + (x.piece ? x.piece.length : 0);
  y.lf_left += x.lf_left + (x.piece ? x.piece.lineFeedCnt : 0);
  x.right = y.left;
  if (y.left !== SENTINEL) {
    y.left.parent = x;
  }
  y.parent = x.parent;
  if (x.parent === SENTINEL) {
    tree.root = y;
  } else if (x.parent.left === x) {
    x.parent.left = y;
  } else {
    x.parent.right = y;
  }
  y.left = x;
  x.parent = y;
}
function rightRotate(tree, y) {
  const x = y.left;
  y.left = x.right;
  if (x.right !== SENTINEL) {
    x.right.parent = y;
  }
  x.parent = y.parent;
  y.size_left -= x.size_left + (x.piece ? x.piece.length : 0);
  y.lf_left -= x.lf_left + (x.piece ? x.piece.lineFeedCnt : 0);
  if (y.parent === SENTINEL) {
    tree.root = x;
  } else if (y === y.parent.right) {
    y.parent.right = x;
  } else {
    y.parent.left = x;
  }
  x.right = y;
  y.parent = x;
}
function rbDelete(tree, z) {
  let x;
  let y;
  if (z.left === SENTINEL) {
    y = z;
    x = y.right;
  } else if (z.right === SENTINEL) {
    y = z;
    x = y.left;
  } else {
    y = leftest(z.right);
    x = y.right;
  }
  if (y === tree.root) {
    tree.root = x;
    x.color = 0;
    z.detach();
    resetSentinel();
    tree.root.parent = SENTINEL;
    return;
  }
  const yWasRed = y.color === 1;
  if (y === y.parent.left) {
    y.parent.left = x;
  } else {
    y.parent.right = x;
  }
  if (y === z) {
    x.parent = y.parent;
    recomputeTreeMetadata(tree, x);
  } else {
    if (y.parent === z) {
      x.parent = y;
    } else {
      x.parent = y.parent;
    }
    recomputeTreeMetadata(tree, x);
    y.left = z.left;
    y.right = z.right;
    y.parent = z.parent;
    y.color = z.color;
    if (z === tree.root) {
      tree.root = y;
    } else {
      if (z === z.parent.left) {
        z.parent.left = y;
      } else {
        z.parent.right = y;
      }
    }
    if (y.left !== SENTINEL) {
      y.left.parent = y;
    }
    if (y.right !== SENTINEL) {
      y.right.parent = y;
    }
    y.size_left = z.size_left;
    y.lf_left = z.lf_left;
    recomputeTreeMetadata(tree, y);
  }
  z.detach();
  if (x.parent.left === x) {
    const newSizeLeft = calculateSize(x);
    const newLFLeft = calculateLF(x);
    if (newSizeLeft !== x.parent.size_left || newLFLeft !== x.parent.lf_left) {
      const delta = newSizeLeft - x.parent.size_left;
      const lf_delta = newLFLeft - x.parent.lf_left;
      x.parent.size_left = newSizeLeft;
      x.parent.lf_left = newLFLeft;
      updateTreeMetadata(tree, x.parent, delta, lf_delta);
    }
  }
  recomputeTreeMetadata(tree, x.parent);
  if (yWasRed) {
    resetSentinel();
    return;
  }
  let w;
  while (x !== tree.root && x.color === 0) {
    if (x === x.parent.left) {
      w = x.parent.right;
      if (w.color === 1) {
        w.color = 0;
        x.parent.color = 1;
        leftRotate2(tree, x.parent);
        w = x.parent.right;
      }
      if (w.left.color === 0 && w.right.color === 0) {
        w.color = 1;
        x = x.parent;
      } else {
        if (w.right.color === 0) {
          w.left.color = 0;
          w.color = 1;
          rightRotate(tree, w);
          w = x.parent.right;
        }
        w.color = x.parent.color;
        x.parent.color = 0;
        w.right.color = 0;
        leftRotate2(tree, x.parent);
        x = tree.root;
      }
    } else {
      w = x.parent.left;
      if (w.color === 1) {
        w.color = 0;
        x.parent.color = 1;
        rightRotate(tree, x.parent);
        w = x.parent.left;
      }
      if (w.left.color === 0 && w.right.color === 0) {
        w.color = 1;
        x = x.parent;
      } else {
        if (w.left.color === 0) {
          w.right.color = 0;
          w.color = 1;
          leftRotate2(tree, w);
          w = x.parent.left;
        }
        w.color = x.parent.color;
        x.parent.color = 0;
        w.left.color = 0;
        rightRotate(tree, x.parent);
        x = tree.root;
      }
    }
  }
  x.color = 0;
  resetSentinel();
}
function fixInsert(tree, x) {
  recomputeTreeMetadata(tree, x);
  while (x !== tree.root && x.parent.color === 1) {
    if (x.parent === x.parent.parent.left) {
      const y = x.parent.parent.right;
      if (y.color === 1) {
        x.parent.color = 0;
        y.color = 0;
        x.parent.parent.color = 1;
        x = x.parent.parent;
      } else {
        if (x === x.parent.right) {
          x = x.parent;
          leftRotate2(tree, x);
        }
        x.parent.color = 0;
        x.parent.parent.color = 1;
        rightRotate(tree, x.parent.parent);
      }
    } else {
      const y = x.parent.parent.left;
      if (y.color === 1) {
        x.parent.color = 0;
        y.color = 0;
        x.parent.parent.color = 1;
        x = x.parent.parent;
      } else {
        if (x === x.parent.left) {
          x = x.parent;
          rightRotate(tree, x);
        }
        x.parent.color = 0;
        x.parent.parent.color = 1;
        leftRotate2(tree, x.parent.parent);
      }
    }
  }
  tree.root.color = 0;
}
function updateTreeMetadata(tree, x, delta, lineFeedCntDelta) {
  while (x !== tree.root && x !== SENTINEL) {
    if (x.parent.left === x) {
      x.parent.size_left += delta;
      x.parent.lf_left += lineFeedCntDelta;
    }
    x = x.parent;
  }
}
function recomputeTreeMetadata(tree, x) {
  let delta = 0;
  let lf_delta = 0;
  if (x === tree.root) {
    return;
  }
  while (x !== tree.root && x === x.parent.right) {
    x = x.parent;
  }
  if (x === tree.root) {
    return;
  }
  x = x.parent;
  delta = calculateSize(x.left) - x.size_left;
  lf_delta = calculateLF(x.left) - x.lf_left;
  x.size_left += delta;
  x.lf_left += lf_delta;
  while (x !== tree.root && (delta !== 0 || lf_delta !== 0)) {
    if (x.parent.left === x) {
      x.parent.size_left += delta;
      x.parent.lf_left += lf_delta;
    }
    x = x.parent;
  }
}

// out-build/vs/base/common/date.js
var minute = 60;
var hour = minute * 60;
var day = hour * 24;
var week = day * 7;
var month = day * 30;
var year = day * 365;
var safeIntl = {
  DateTimeFormat(locales, options) {
    return new Lazy(() => {
      try {
        return new Intl.DateTimeFormat(locales, options);
      } catch {
        return new Intl.DateTimeFormat(void 0, options);
      }
    });
  },
  Collator(locales, options) {
    return new Lazy(() => {
      try {
        return new Intl.Collator(locales, options);
      } catch {
        return new Intl.Collator(void 0, options);
      }
    });
  },
  Segmenter(locales, options) {
    return new Lazy(() => {
      try {
        return new Intl.Segmenter(locales, options);
      } catch {
        return new Intl.Segmenter(void 0, options);
      }
    });
  },
  Locale(tag, options) {
    return new Lazy(() => {
      try {
        return new Intl.Locale(tag, options);
      } catch {
        return new Intl.Locale(LANGUAGE_DEFAULT, options);
      }
    });
  },
  NumberFormat(locales, options) {
    return new Lazy(() => {
      try {
        return new Intl.NumberFormat(locales, options);
      } catch {
        return new Intl.NumberFormat(void 0, options);
      }
    });
  }
};

// out-build/vs/base/common/uint.js
var Constants;
(function(Constants2) {
  Constants2[Constants2["MAX_SAFE_SMALL_INTEGER"] = 1073741824] = "MAX_SAFE_SMALL_INTEGER";
  Constants2[Constants2["MIN_SAFE_SMALL_INTEGER"] = -1073741824] = "MIN_SAFE_SMALL_INTEGER";
  Constants2[Constants2["MAX_UINT_8"] = 255] = "MAX_UINT_8";
  Constants2[Constants2["MAX_UINT_16"] = 65535] = "MAX_UINT_16";
  Constants2[Constants2["MAX_UINT_32"] = 4294967295] = "MAX_UINT_32";
  Constants2[Constants2["UNICODE_SUPPLEMENTARY_PLANE_BEGIN"] = 65536] = "UNICODE_SUPPLEMENTARY_PLANE_BEGIN";
})(Constants || (Constants = {}));
function toUint8(v) {
  if (v < 0) {
    return 0;
  }
  if (v > 255) {
    return 255;
  }
  return v | 0;
}
function toUint32(v) {
  if (v < 0) {
    return 0;
  }
  if (v > 4294967295) {
    return 4294967295;
  }
  return v | 0;
}

// out-build/vs/editor/common/core/characterClassifier.js
var CharacterClassifier = class _CharacterClassifier {
  constructor(_defaultValue) {
    const defaultValue = toUint8(_defaultValue);
    this._defaultValue = defaultValue;
    this._asciiMap = _CharacterClassifier._createAsciiMap(defaultValue);
    this._map = /* @__PURE__ */ new Map();
  }
  static _createAsciiMap(defaultValue) {
    const asciiMap = new Uint8Array(256);
    asciiMap.fill(defaultValue);
    return asciiMap;
  }
  set(charCode, _value) {
    const value = toUint8(_value);
    if (charCode >= 0 && charCode < 256) {
      this._asciiMap[charCode] = value;
    } else {
      this._map.set(charCode, value);
    }
  }
  get(charCode) {
    if (charCode >= 0 && charCode < 256) {
      return this._asciiMap[charCode];
    } else {
      return this._map.get(charCode) || this._defaultValue;
    }
  }
  clear() {
    this._asciiMap.fill(this._defaultValue);
    this._map.clear();
  }
};
var Boolean2;
(function(Boolean3) {
  Boolean3[Boolean3["False"] = 0] = "False";
  Boolean3[Boolean3["True"] = 1] = "True";
})(Boolean2 || (Boolean2 = {}));

// out-build/vs/editor/common/core/wordCharacterClassifier.js
var WordCharacterClass;
(function(WordCharacterClass2) {
  WordCharacterClass2[WordCharacterClass2["Regular"] = 0] = "Regular";
  WordCharacterClass2[WordCharacterClass2["Whitespace"] = 1] = "Whitespace";
  WordCharacterClass2[WordCharacterClass2["WordSeparator"] = 2] = "WordSeparator";
})(WordCharacterClass || (WordCharacterClass = {}));
var WordCharacterClassifier = class extends CharacterClassifier {
  constructor(wordSeparators, intlSegmenterLocales) {
    super(
      0
      /* WordCharacterClass.Regular */
    );
    this._segmenter = null;
    this._cachedLine = null;
    this._cachedSegments = [];
    this.intlSegmenterLocales = intlSegmenterLocales;
    if (this.intlSegmenterLocales.length > 0) {
      this._segmenter = safeIntl.Segmenter(this.intlSegmenterLocales, { granularity: "word" });
    } else {
      this._segmenter = null;
    }
    for (let i = 0, len = wordSeparators.length; i < len; i++) {
      this.set(
        wordSeparators.charCodeAt(i),
        2
        /* WordCharacterClass.WordSeparator */
      );
    }
    this.set(
      32,
      1
      /* WordCharacterClass.Whitespace */
    );
    this.set(
      9,
      1
      /* WordCharacterClass.Whitespace */
    );
  }
  findPrevIntlWordBeforeOrAtOffset(line, offset) {
    let candidate = null;
    for (const segment of this._getIntlSegmenterWordsOnLine(line)) {
      if (segment.index > offset) {
        break;
      }
      candidate = segment;
    }
    return candidate;
  }
  findNextIntlWordAtOrAfterOffset(lineContent, offset) {
    for (const segment of this._getIntlSegmenterWordsOnLine(lineContent)) {
      if (segment.index < offset) {
        continue;
      }
      return segment;
    }
    return null;
  }
  _getIntlSegmenterWordsOnLine(line) {
    if (!this._segmenter) {
      return [];
    }
    if (this._cachedLine === line) {
      return this._cachedSegments;
    }
    this._cachedLine = line;
    this._cachedSegments = this._filterWordSegments(this._segmenter.value.segment(line));
    return this._cachedSegments;
  }
  _filterWordSegments(segments) {
    const result = [];
    for (const segment of segments) {
      if (this._isWordLike(segment)) {
        result.push(segment);
      }
    }
    return result;
  }
  _isWordLike(segment) {
    if (segment.isWordLike) {
      return true;
    }
    return false;
  }
};
var wordClassifierCache = new LRUCache(10);
function getMapForWordSeparators(wordSeparators, intlSegmenterLocales) {
  const key = `${wordSeparators}/${intlSegmenterLocales.join(",")}`;
  let result = wordClassifierCache.get(key);
  if (!result) {
    result = new WordCharacterClassifier(wordSeparators, intlSegmenterLocales);
    wordClassifierCache.set(key, result);
  }
  return result;
}

// out-build/vs/editor/common/model/textModelSearch.js
var SearchParams = class {
  constructor(searchString, isRegex, matchCase, wordSeparators) {
    this.searchString = searchString;
    this.isRegex = isRegex;
    this.matchCase = matchCase;
    this.wordSeparators = wordSeparators;
  }
  parseSearchRequest() {
    if (this.searchString === "") {
      return null;
    }
    let multiline;
    if (this.isRegex) {
      multiline = isMultilineRegexSource(this.searchString);
    } else {
      multiline = this.searchString.indexOf("\n") >= 0;
    }
    let regex = null;
    try {
      regex = createRegExp(this.searchString, this.isRegex, {
        matchCase: this.matchCase,
        wholeWord: false,
        multiline,
        global: true,
        unicode: true
      });
    } catch (err) {
      return null;
    }
    if (!regex) {
      return null;
    }
    let canUseSimpleSearch = !this.isRegex && !multiline;
    if (canUseSimpleSearch && this.searchString.toLowerCase() !== this.searchString.toUpperCase()) {
      canUseSimpleSearch = this.matchCase;
    }
    return new SearchData(regex, this.wordSeparators ? getMapForWordSeparators(this.wordSeparators, []) : null, canUseSimpleSearch ? this.searchString : null);
  }
};
function isMultilineRegexSource(searchString) {
  if (!searchString || searchString.length === 0) {
    return false;
  }
  for (let i = 0, len = searchString.length; i < len; i++) {
    const chCode = searchString.charCodeAt(i);
    if (chCode === 10) {
      return true;
    }
    if (chCode === 92) {
      i++;
      if (i >= len) {
        break;
      }
      const nextChCode = searchString.charCodeAt(i);
      if (nextChCode === 110 || nextChCode === 114 || nextChCode === 87) {
        return true;
      }
    }
  }
  return false;
}
function createFindMatch(range, rawMatches, captureMatches) {
  if (!captureMatches) {
    return new FindMatch(range, null);
  }
  const matches = [];
  for (let i = 0, len = rawMatches.length; i < len; i++) {
    matches[i] = rawMatches[i];
  }
  return new FindMatch(range, matches);
}
function leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  if (matchStartIndex === 0) {
    return true;
  }
  const charBefore = text.charCodeAt(matchStartIndex - 1);
  if (wordSeparators.get(charBefore) !== 0) {
    return true;
  }
  if (charBefore === 13 || charBefore === 10) {
    return true;
  }
  if (matchLength > 0) {
    const firstCharInMatch = text.charCodeAt(matchStartIndex);
    if (wordSeparators.get(firstCharInMatch) !== 0) {
      return true;
    }
  }
  return false;
}
function rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  if (matchStartIndex + matchLength === textLength) {
    return true;
  }
  const charAfter = text.charCodeAt(matchStartIndex + matchLength);
  if (wordSeparators.get(charAfter) !== 0) {
    return true;
  }
  if (charAfter === 13 || charAfter === 10) {
    return true;
  }
  if (matchLength > 0) {
    const lastCharInMatch = text.charCodeAt(matchStartIndex + matchLength - 1);
    if (wordSeparators.get(lastCharInMatch) !== 0) {
      return true;
    }
  }
  return false;
}
function isValidMatch(wordSeparators, text, textLength, matchStartIndex, matchLength) {
  return leftIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength) && rightIsWordBounday(wordSeparators, text, textLength, matchStartIndex, matchLength);
}
var Searcher = class {
  constructor(wordSeparators, searchRegex) {
    this._wordSeparators = wordSeparators;
    this._searchRegex = searchRegex;
    this._prevMatchStartIndex = -1;
    this._prevMatchLength = 0;
  }
  reset(lastIndex) {
    this._searchRegex.lastIndex = lastIndex;
    this._prevMatchStartIndex = -1;
    this._prevMatchLength = 0;
  }
  next(text) {
    const textLength = text.length;
    let m;
    do {
      if (this._prevMatchStartIndex + this._prevMatchLength === textLength) {
        return null;
      }
      m = this._searchRegex.exec(text);
      if (!m) {
        return null;
      }
      const matchStartIndex = m.index;
      const matchLength = m[0].length;
      if (matchStartIndex === this._prevMatchStartIndex && matchLength === this._prevMatchLength) {
        if (matchLength === 0) {
          if (getNextCodePoint(text, textLength, this._searchRegex.lastIndex) > 65535) {
            this._searchRegex.lastIndex += 2;
          } else {
            this._searchRegex.lastIndex += 1;
          }
          continue;
        }
        return null;
      }
      this._prevMatchStartIndex = matchStartIndex;
      this._prevMatchLength = matchLength;
      if (!this._wordSeparators || isValidMatch(this._wordSeparators, text, textLength, matchStartIndex, matchLength)) {
        return m;
      }
    } while (m);
    return null;
  }
};

// out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeBase.js
var AverageBufferSize = 65535;
function createUintArray(arr) {
  let r;
  if (arr[arr.length - 1] < 65536) {
    r = new Uint16Array(arr.length);
  } else {
    r = new Uint32Array(arr.length);
  }
  r.set(arr, 0);
  return r;
}
var LineStarts = class {
  constructor(lineStarts, cr, lf, crlf, isBasicASCII2) {
    this.lineStarts = lineStarts;
    this.cr = cr;
    this.lf = lf;
    this.crlf = crlf;
    this.isBasicASCII = isBasicASCII2;
  }
};
function createLineStartsFast(str, readonly = true) {
  const r = [0];
  let rLength = 1;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    if (chr === 13) {
      if (i + 1 < len && str.charCodeAt(i + 1) === 10) {
        r[rLength++] = i + 2;
        i++;
      } else {
        r[rLength++] = i + 1;
      }
    } else if (chr === 10) {
      r[rLength++] = i + 1;
    }
  }
  if (readonly) {
    return createUintArray(r);
  } else {
    return r;
  }
}
function createLineStarts(r, str) {
  r.length = 0;
  r[0] = 0;
  let rLength = 1;
  let cr = 0, lf = 0, crlf = 0;
  let isBasicASCII2 = true;
  for (let i = 0, len = str.length; i < len; i++) {
    const chr = str.charCodeAt(i);
    if (chr === 13) {
      if (i + 1 < len && str.charCodeAt(i + 1) === 10) {
        crlf++;
        r[rLength++] = i + 2;
        i++;
      } else {
        cr++;
        r[rLength++] = i + 1;
      }
    } else if (chr === 10) {
      lf++;
      r[rLength++] = i + 1;
    } else {
      if (isBasicASCII2) {
        if (chr !== 9 && (chr < 32 || chr > 126)) {
          isBasicASCII2 = false;
        }
      }
    }
  }
  const result = new LineStarts(createUintArray(r), cr, lf, crlf, isBasicASCII2);
  r.length = 0;
  return result;
}
var Piece = class {
  constructor(bufferIndex, start, end, lineFeedCnt, length) {
    this.bufferIndex = bufferIndex;
    this.start = start;
    this.end = end;
    this.lineFeedCnt = lineFeedCnt;
    this.length = length;
  }
};
var StringBuffer = class {
  constructor(buffer, lineStarts) {
    this.buffer = buffer;
    this.lineStarts = lineStarts;
  }
};
var PieceTreeSnapshot = class {
  constructor(tree, BOM) {
    this._pieces = [];
    this._tree = tree;
    this._BOM = BOM;
    this._index = 0;
    if (tree.root !== SENTINEL) {
      tree.iterate(tree.root, (node) => {
        if (node !== SENTINEL) {
          this._pieces.push(node.piece);
        }
        return true;
      });
    }
  }
  read() {
    if (this._pieces.length === 0) {
      if (this._index === 0) {
        this._index++;
        return this._BOM;
      } else {
        return null;
      }
    }
    if (this._index > this._pieces.length - 1) {
      return null;
    }
    if (this._index === 0) {
      return this._BOM + this._tree.getPieceContent(this._pieces[this._index++]);
    }
    return this._tree.getPieceContent(this._pieces[this._index++]);
  }
};
var PieceTreeSearchCache = class {
  constructor(limit) {
    this._limit = limit;
    this._cache = [];
  }
  get(offset) {
    for (let i = this._cache.length - 1; i >= 0; i--) {
      const nodePos = this._cache[i];
      if (nodePos.nodeStartOffset <= offset && nodePos.nodeStartOffset + nodePos.node.piece.length >= offset) {
        return nodePos;
      }
    }
    return null;
  }
  get2(lineNumber) {
    for (let i = this._cache.length - 1; i >= 0; i--) {
      const nodePos = this._cache[i];
      if (nodePos.nodeStartLineNumber && nodePos.nodeStartLineNumber < lineNumber && nodePos.nodeStartLineNumber + nodePos.node.piece.lineFeedCnt >= lineNumber) {
        return nodePos;
      }
    }
    return null;
  }
  set(nodePosition) {
    if (this._cache.length >= this._limit) {
      this._cache.shift();
    }
    this._cache.push(nodePosition);
  }
  validate(offset) {
    let hasInvalidVal = false;
    const tmp = this._cache;
    for (let i = 0; i < tmp.length; i++) {
      const nodePos = tmp[i];
      if (nodePos.node.parent === null || nodePos.nodeStartOffset >= offset) {
        tmp[i] = null;
        hasInvalidVal = true;
        continue;
      }
    }
    if (hasInvalidVal) {
      const newArr = [];
      for (const entry of tmp) {
        if (entry !== null) {
          newArr.push(entry);
        }
      }
      this._cache = newArr;
    }
  }
};
var PieceTreeBase = class {
  constructor(chunks, eol, eolNormalized) {
    this.create(chunks, eol, eolNormalized);
  }
  create(chunks, eol, eolNormalized) {
    this._buffers = [
      new StringBuffer("", [0])
    ];
    this._lastChangeBufferPos = { line: 0, column: 0 };
    this.root = SENTINEL;
    this._lineCnt = 1;
    this._length = 0;
    this._EOL = eol;
    this._EOLLength = eol.length;
    this._EOLNormalized = eolNormalized;
    let lastNode = null;
    for (let i = 0, len = chunks.length; i < len; i++) {
      if (chunks[i].buffer.length > 0) {
        if (!chunks[i].lineStarts) {
          chunks[i].lineStarts = createLineStartsFast(chunks[i].buffer);
        }
        const piece = new Piece(i + 1, { line: 0, column: 0 }, { line: chunks[i].lineStarts.length - 1, column: chunks[i].buffer.length - chunks[i].lineStarts[chunks[i].lineStarts.length - 1] }, chunks[i].lineStarts.length - 1, chunks[i].buffer.length);
        this._buffers.push(chunks[i]);
        lastNode = this.rbInsertRight(lastNode, piece);
      }
    }
    this._searchCache = new PieceTreeSearchCache(1);
    this._lastVisitedLine = { lineNumber: 0, value: "" };
    this.computeBufferMetadata();
  }
  normalizeEOL(eol) {
    const averageBufferSize = AverageBufferSize;
    const min = averageBufferSize - Math.floor(averageBufferSize / 3);
    const max = min * 2;
    let tempChunk = "";
    let tempChunkLen = 0;
    const chunks = [];
    this.iterate(this.root, (node) => {
      const str = this.getNodeContent(node);
      const len = str.length;
      if (tempChunkLen <= min || tempChunkLen + len < max) {
        tempChunk += str;
        tempChunkLen += len;
        return true;
      }
      const text = tempChunk.replace(/\r\n|\r|\n/g, eol);
      chunks.push(new StringBuffer(text, createLineStartsFast(text)));
      tempChunk = str;
      tempChunkLen = len;
      return true;
    });
    if (tempChunkLen > 0) {
      const text = tempChunk.replace(/\r\n|\r|\n/g, eol);
      chunks.push(new StringBuffer(text, createLineStartsFast(text)));
    }
    this.create(chunks, eol, true);
  }
  // #region Buffer API
  getEOL() {
    return this._EOL;
  }
  setEOL(newEOL) {
    this._EOL = newEOL;
    this._EOLLength = this._EOL.length;
    this.normalizeEOL(newEOL);
  }
  createSnapshot(BOM) {
    return new PieceTreeSnapshot(this, BOM);
  }
  equal(other) {
    if (this.getLength() !== other.getLength()) {
      return false;
    }
    if (this.getLineCount() !== other.getLineCount()) {
      return false;
    }
    let offset = 0;
    const ret = this.iterate(this.root, (node) => {
      if (node === SENTINEL) {
        return true;
      }
      const str = this.getNodeContent(node);
      const len = str.length;
      const startPosition = other.nodeAt(offset);
      const endPosition = other.nodeAt(offset + len);
      const val = other.getValueInRange2(startPosition, endPosition);
      offset += len;
      return str === val;
    });
    return ret;
  }
  getOffsetAt(lineNumber, column) {
    let leftLen = 0;
    let x = this.root;
    while (x !== SENTINEL) {
      if (x.left !== SENTINEL && x.lf_left + 1 >= lineNumber) {
        x = x.left;
      } else if (x.lf_left + x.piece.lineFeedCnt + 1 >= lineNumber) {
        leftLen += x.size_left;
        const accumualtedValInCurrentIndex = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
        return leftLen += accumualtedValInCurrentIndex + column - 1;
      } else {
        lineNumber -= x.lf_left + x.piece.lineFeedCnt;
        leftLen += x.size_left + x.piece.length;
        x = x.right;
      }
    }
    return leftLen;
  }
  getPositionAt(offset) {
    offset = Math.floor(offset);
    offset = Math.max(0, offset);
    let x = this.root;
    let lfCnt = 0;
    const originalOffset = offset;
    while (x !== SENTINEL) {
      if (x.size_left !== 0 && x.size_left >= offset) {
        x = x.left;
      } else if (x.size_left + x.piece.length >= offset) {
        const out = this.getIndexOf(x, offset - x.size_left);
        lfCnt += x.lf_left + out.index;
        if (out.index === 0) {
          const lineStartOffset = this.getOffsetAt(lfCnt + 1, 1);
          const column = originalOffset - lineStartOffset;
          return new Position(lfCnt + 1, column + 1);
        }
        return new Position(lfCnt + 1, out.remainder + 1);
      } else {
        offset -= x.size_left + x.piece.length;
        lfCnt += x.lf_left + x.piece.lineFeedCnt;
        if (x.right === SENTINEL) {
          const lineStartOffset = this.getOffsetAt(lfCnt + 1, 1);
          const column = originalOffset - offset - lineStartOffset;
          return new Position(lfCnt + 1, column + 1);
        } else {
          x = x.right;
        }
      }
    }
    return new Position(1, 1);
  }
  getValueInRange(range, eol) {
    if (range.startLineNumber === range.endLineNumber && range.startColumn === range.endColumn) {
      return "";
    }
    const startPosition = this.nodeAt2(range.startLineNumber, range.startColumn);
    const endPosition = this.nodeAt2(range.endLineNumber, range.endColumn);
    const value = this.getValueInRange2(startPosition, endPosition);
    if (eol) {
      if (eol !== this._EOL || !this._EOLNormalized) {
        return value.replace(/\r\n|\r|\n/g, eol);
      }
      if (eol === this.getEOL() && this._EOLNormalized) {
        if (eol === "\r\n") {
        }
        return value;
      }
      return value.replace(/\r\n|\r|\n/g, eol);
    }
    return value;
  }
  getValueInRange2(startPosition, endPosition) {
    if (startPosition.node === endPosition.node) {
      const node = startPosition.node;
      const buffer2 = this._buffers[node.piece.bufferIndex].buffer;
      const startOffset2 = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start);
      return buffer2.substring(startOffset2 + startPosition.remainder, startOffset2 + endPosition.remainder);
    }
    let x = startPosition.node;
    const buffer = this._buffers[x.piece.bufferIndex].buffer;
    const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
    let ret = buffer.substring(startOffset + startPosition.remainder, startOffset + x.piece.length);
    x = x.next();
    while (x !== SENTINEL) {
      const buffer2 = this._buffers[x.piece.bufferIndex].buffer;
      const startOffset2 = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
      if (x === endPosition.node) {
        ret += buffer2.substring(startOffset2, startOffset2 + endPosition.remainder);
        break;
      } else {
        ret += buffer2.substr(startOffset2, x.piece.length);
      }
      x = x.next();
    }
    return ret;
  }
  getLinesContent() {
    const lines = [];
    let linesLength = 0;
    let currentLine = "";
    let danglingCR = false;
    this.iterate(this.root, (node) => {
      if (node === SENTINEL) {
        return true;
      }
      const piece = node.piece;
      let pieceLength = piece.length;
      if (pieceLength === 0) {
        return true;
      }
      const buffer = this._buffers[piece.bufferIndex].buffer;
      const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
      const pieceStartLine = piece.start.line;
      const pieceEndLine = piece.end.line;
      let pieceStartOffset = lineStarts[pieceStartLine] + piece.start.column;
      if (danglingCR) {
        if (buffer.charCodeAt(pieceStartOffset) === 10) {
          pieceStartOffset++;
          pieceLength--;
        }
        lines[linesLength++] = currentLine;
        currentLine = "";
        danglingCR = false;
        if (pieceLength === 0) {
          return true;
        }
      }
      if (pieceStartLine === pieceEndLine) {
        if (!this._EOLNormalized && buffer.charCodeAt(pieceStartOffset + pieceLength - 1) === 13) {
          danglingCR = true;
          currentLine += buffer.substr(pieceStartOffset, pieceLength - 1);
        } else {
          currentLine += buffer.substr(pieceStartOffset, pieceLength);
        }
        return true;
      }
      currentLine += this._EOLNormalized ? buffer.substring(pieceStartOffset, Math.max(pieceStartOffset, lineStarts[pieceStartLine + 1] - this._EOLLength)) : buffer.substring(pieceStartOffset, lineStarts[pieceStartLine + 1]).replace(/(\r\n|\r|\n)$/, "");
      lines[linesLength++] = currentLine;
      for (let line = pieceStartLine + 1; line < pieceEndLine; line++) {
        currentLine = this._EOLNormalized ? buffer.substring(lineStarts[line], lineStarts[line + 1] - this._EOLLength) : buffer.substring(lineStarts[line], lineStarts[line + 1]).replace(/(\r\n|\r|\n)$/, "");
        lines[linesLength++] = currentLine;
      }
      if (!this._EOLNormalized && buffer.charCodeAt(lineStarts[pieceEndLine] + piece.end.column - 1) === 13) {
        danglingCR = true;
        if (piece.end.column === 0) {
          linesLength--;
        } else {
          currentLine = buffer.substr(lineStarts[pieceEndLine], piece.end.column - 1);
        }
      } else {
        currentLine = buffer.substr(lineStarts[pieceEndLine], piece.end.column);
      }
      return true;
    });
    if (danglingCR) {
      lines[linesLength++] = currentLine;
      currentLine = "";
    }
    lines[linesLength++] = currentLine;
    return lines;
  }
  getLength() {
    return this._length;
  }
  getLineCount() {
    return this._lineCnt;
  }
  getLineContent(lineNumber) {
    if (this._lastVisitedLine.lineNumber === lineNumber) {
      return this._lastVisitedLine.value;
    }
    this._lastVisitedLine.lineNumber = lineNumber;
    if (lineNumber === this._lineCnt) {
      this._lastVisitedLine.value = this.getLineRawContent(lineNumber);
    } else if (this._EOLNormalized) {
      this._lastVisitedLine.value = this.getLineRawContent(lineNumber, this._EOLLength);
    } else {
      this._lastVisitedLine.value = this.getLineRawContent(lineNumber).replace(/(\r\n|\r|\n)$/, "");
    }
    return this._lastVisitedLine.value;
  }
  _getCharCode(nodePos) {
    if (nodePos.remainder === nodePos.node.piece.length) {
      const matchingNode = nodePos.node.next();
      if (!matchingNode) {
        return 0;
      }
      const buffer = this._buffers[matchingNode.piece.bufferIndex];
      const startOffset = this.offsetInBuffer(matchingNode.piece.bufferIndex, matchingNode.piece.start);
      return buffer.buffer.charCodeAt(startOffset);
    } else {
      const buffer = this._buffers[nodePos.node.piece.bufferIndex];
      const startOffset = this.offsetInBuffer(nodePos.node.piece.bufferIndex, nodePos.node.piece.start);
      const targetOffset = startOffset + nodePos.remainder;
      return buffer.buffer.charCodeAt(targetOffset);
    }
  }
  getLineCharCode(lineNumber, index) {
    const nodePos = this.nodeAt2(lineNumber, index + 1);
    return this._getCharCode(nodePos);
  }
  getLineLength(lineNumber) {
    if (lineNumber === this.getLineCount()) {
      const startOffset = this.getOffsetAt(lineNumber, 1);
      return this.getLength() - startOffset;
    }
    return this.getOffsetAt(lineNumber + 1, 1) - this.getOffsetAt(lineNumber, 1) - this._EOLLength;
  }
  getCharCode(offset) {
    const nodePos = this.nodeAt(offset);
    return this._getCharCode(nodePos);
  }
  getNearestChunk(offset) {
    const nodePos = this.nodeAt(offset);
    if (nodePos.remainder === nodePos.node.piece.length) {
      const matchingNode = nodePos.node.next();
      if (!matchingNode || matchingNode === SENTINEL) {
        return "";
      }
      const buffer = this._buffers[matchingNode.piece.bufferIndex];
      const startOffset = this.offsetInBuffer(matchingNode.piece.bufferIndex, matchingNode.piece.start);
      return buffer.buffer.substring(startOffset, startOffset + matchingNode.piece.length);
    } else {
      const buffer = this._buffers[nodePos.node.piece.bufferIndex];
      const startOffset = this.offsetInBuffer(nodePos.node.piece.bufferIndex, nodePos.node.piece.start);
      const targetOffset = startOffset + nodePos.remainder;
      const targetEnd = startOffset + nodePos.node.piece.length;
      return buffer.buffer.substring(targetOffset, targetEnd);
    }
  }
  findMatchesInNode(node, searcher, startLineNumber, startColumn, startCursor, endCursor, searchData, captureMatches, limitResultCount, resultLen, result) {
    const buffer = this._buffers[node.piece.bufferIndex];
    const startOffsetInBuffer = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start);
    const start = this.offsetInBuffer(node.piece.bufferIndex, startCursor);
    const end = this.offsetInBuffer(node.piece.bufferIndex, endCursor);
    let m;
    const ret = { line: 0, column: 0 };
    let searchText;
    let offsetInBuffer;
    if (searcher._wordSeparators) {
      searchText = buffer.buffer.substring(start, end);
      offsetInBuffer = (offset) => offset + start;
      searcher.reset(0);
    } else {
      searchText = buffer.buffer;
      offsetInBuffer = (offset) => offset;
      searcher.reset(start);
    }
    do {
      m = searcher.next(searchText);
      if (m) {
        if (offsetInBuffer(m.index) >= end) {
          return resultLen;
        }
        this.positionInBuffer(node, offsetInBuffer(m.index) - startOffsetInBuffer, ret);
        const lineFeedCnt = this.getLineFeedCnt(node.piece.bufferIndex, startCursor, ret);
        const retStartColumn = ret.line === startCursor.line ? ret.column - startCursor.column + startColumn : ret.column + 1;
        const retEndColumn = retStartColumn + m[0].length;
        result[resultLen++] = createFindMatch(new Range(startLineNumber + lineFeedCnt, retStartColumn, startLineNumber + lineFeedCnt, retEndColumn), m, captureMatches);
        if (offsetInBuffer(m.index) + m[0].length >= end) {
          return resultLen;
        }
        if (resultLen >= limitResultCount) {
          return resultLen;
        }
      }
    } while (m);
    return resultLen;
  }
  findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount) {
    const result = [];
    let resultLen = 0;
    const searcher = new Searcher(searchData.wordSeparators, searchData.regex);
    let startPosition = this.nodeAt2(searchRange.startLineNumber, searchRange.startColumn);
    if (startPosition === null) {
      return [];
    }
    const endPosition = this.nodeAt2(searchRange.endLineNumber, searchRange.endColumn);
    if (endPosition === null) {
      return [];
    }
    let start = this.positionInBuffer(startPosition.node, startPosition.remainder);
    const end = this.positionInBuffer(endPosition.node, endPosition.remainder);
    if (startPosition.node === endPosition.node) {
      this.findMatchesInNode(startPosition.node, searcher, searchRange.startLineNumber, searchRange.startColumn, start, end, searchData, captureMatches, limitResultCount, resultLen, result);
      return result;
    }
    let startLineNumber = searchRange.startLineNumber;
    let currentNode = startPosition.node;
    while (currentNode !== endPosition.node) {
      const lineBreakCnt = this.getLineFeedCnt(currentNode.piece.bufferIndex, start, currentNode.piece.end);
      if (lineBreakCnt >= 1) {
        const lineStarts = this._buffers[currentNode.piece.bufferIndex].lineStarts;
        const startOffsetInBuffer = this.offsetInBuffer(currentNode.piece.bufferIndex, currentNode.piece.start);
        const nextLineStartOffset = lineStarts[start.line + lineBreakCnt];
        const startColumn3 = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn : 1;
        resultLen = this.findMatchesInNode(currentNode, searcher, startLineNumber, startColumn3, start, this.positionInBuffer(currentNode, nextLineStartOffset - startOffsetInBuffer), searchData, captureMatches, limitResultCount, resultLen, result);
        if (resultLen >= limitResultCount) {
          return result;
        }
        startLineNumber += lineBreakCnt;
      }
      const startColumn2 = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn - 1 : 0;
      if (startLineNumber === searchRange.endLineNumber) {
        const text = this.getLineContent(startLineNumber).substring(startColumn2, searchRange.endColumn - 1);
        resultLen = this._findMatchesInLine(searchData, searcher, text, searchRange.endLineNumber, startColumn2, resultLen, result, captureMatches, limitResultCount);
        return result;
      }
      resultLen = this._findMatchesInLine(searchData, searcher, this.getLineContent(startLineNumber).substr(startColumn2), startLineNumber, startColumn2, resultLen, result, captureMatches, limitResultCount);
      if (resultLen >= limitResultCount) {
        return result;
      }
      startLineNumber++;
      startPosition = this.nodeAt2(startLineNumber, 1);
      currentNode = startPosition.node;
      start = this.positionInBuffer(startPosition.node, startPosition.remainder);
    }
    if (startLineNumber === searchRange.endLineNumber) {
      const startColumn2 = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn - 1 : 0;
      const text = this.getLineContent(startLineNumber).substring(startColumn2, searchRange.endColumn - 1);
      resultLen = this._findMatchesInLine(searchData, searcher, text, searchRange.endLineNumber, startColumn2, resultLen, result, captureMatches, limitResultCount);
      return result;
    }
    const startColumn = startLineNumber === searchRange.startLineNumber ? searchRange.startColumn : 1;
    resultLen = this.findMatchesInNode(endPosition.node, searcher, startLineNumber, startColumn, start, end, searchData, captureMatches, limitResultCount, resultLen, result);
    return result;
  }
  _findMatchesInLine(searchData, searcher, text, lineNumber, deltaOffset, resultLen, result, captureMatches, limitResultCount) {
    const wordSeparators = searchData.wordSeparators;
    if (!captureMatches && searchData.simpleSearch) {
      const searchString = searchData.simpleSearch;
      const searchStringLen = searchString.length;
      const textLength = text.length;
      let lastMatchIndex = -searchStringLen;
      while ((lastMatchIndex = text.indexOf(searchString, lastMatchIndex + searchStringLen)) !== -1) {
        if (!wordSeparators || isValidMatch(wordSeparators, text, textLength, lastMatchIndex, searchStringLen)) {
          result[resultLen++] = new FindMatch(new Range(lineNumber, lastMatchIndex + 1 + deltaOffset, lineNumber, lastMatchIndex + 1 + searchStringLen + deltaOffset), null);
          if (resultLen >= limitResultCount) {
            return resultLen;
          }
        }
      }
      return resultLen;
    }
    let m;
    searcher.reset(0);
    do {
      m = searcher.next(text);
      if (m) {
        result[resultLen++] = createFindMatch(new Range(lineNumber, m.index + 1 + deltaOffset, lineNumber, m.index + 1 + m[0].length + deltaOffset), m, captureMatches);
        if (resultLen >= limitResultCount) {
          return resultLen;
        }
      }
    } while (m);
    return resultLen;
  }
  // #endregion
  // #region Piece Table
  insert(offset, value, eolNormalized = false) {
    this._EOLNormalized = this._EOLNormalized && eolNormalized;
    this._lastVisitedLine.lineNumber = 0;
    this._lastVisitedLine.value = "";
    if (this.root !== SENTINEL) {
      const { node, remainder, nodeStartOffset } = this.nodeAt(offset);
      const piece = node.piece;
      const bufferIndex = piece.bufferIndex;
      const insertPosInBuffer = this.positionInBuffer(node, remainder);
      if (node.piece.bufferIndex === 0 && piece.end.line === this._lastChangeBufferPos.line && piece.end.column === this._lastChangeBufferPos.column && nodeStartOffset + piece.length === offset && value.length < AverageBufferSize) {
        this.appendToNode(node, value);
        this.computeBufferMetadata();
        return;
      }
      if (nodeStartOffset === offset) {
        this.insertContentToNodeLeft(value, node);
        this._searchCache.validate(offset);
      } else if (nodeStartOffset + node.piece.length > offset) {
        const nodesToDel = [];
        let newRightPiece = new Piece(piece.bufferIndex, insertPosInBuffer, piece.end, this.getLineFeedCnt(piece.bufferIndex, insertPosInBuffer, piece.end), this.offsetInBuffer(bufferIndex, piece.end) - this.offsetInBuffer(bufferIndex, insertPosInBuffer));
        if (this.shouldCheckCRLF() && this.endWithCR(value)) {
          const headOfRight = this.nodeCharCodeAt(node, remainder);
          if (headOfRight === 10) {
            const newStart = { line: newRightPiece.start.line + 1, column: 0 };
            newRightPiece = new Piece(newRightPiece.bufferIndex, newStart, newRightPiece.end, this.getLineFeedCnt(newRightPiece.bufferIndex, newStart, newRightPiece.end), newRightPiece.length - 1);
            value += "\n";
          }
        }
        if (this.shouldCheckCRLF() && this.startWithLF(value)) {
          const tailOfLeft = this.nodeCharCodeAt(node, remainder - 1);
          if (tailOfLeft === 13) {
            const previousPos = this.positionInBuffer(node, remainder - 1);
            this.deleteNodeTail(node, previousPos);
            value = "\r" + value;
            if (node.piece.length === 0) {
              nodesToDel.push(node);
            }
          } else {
            this.deleteNodeTail(node, insertPosInBuffer);
          }
        } else {
          this.deleteNodeTail(node, insertPosInBuffer);
        }
        const newPieces = this.createNewPieces(value);
        if (newRightPiece.length > 0) {
          this.rbInsertRight(node, newRightPiece);
        }
        let tmpNode = node;
        for (let k = 0; k < newPieces.length; k++) {
          tmpNode = this.rbInsertRight(tmpNode, newPieces[k]);
        }
        this.deleteNodes(nodesToDel);
      } else {
        this.insertContentToNodeRight(value, node);
      }
    } else {
      const pieces = this.createNewPieces(value);
      let node = this.rbInsertLeft(null, pieces[0]);
      for (let k = 1; k < pieces.length; k++) {
        node = this.rbInsertRight(node, pieces[k]);
      }
    }
    this.computeBufferMetadata();
  }
  delete(offset, cnt) {
    this._lastVisitedLine.lineNumber = 0;
    this._lastVisitedLine.value = "";
    if (cnt <= 0 || this.root === SENTINEL) {
      return;
    }
    const startPosition = this.nodeAt(offset);
    const endPosition = this.nodeAt(offset + cnt);
    const startNode = startPosition.node;
    const endNode = endPosition.node;
    if (startNode === endNode) {
      const startSplitPosInBuffer2 = this.positionInBuffer(startNode, startPosition.remainder);
      const endSplitPosInBuffer2 = this.positionInBuffer(startNode, endPosition.remainder);
      if (startPosition.nodeStartOffset === offset) {
        if (cnt === startNode.piece.length) {
          const next = startNode.next();
          rbDelete(this, startNode);
          this.validateCRLFWithPrevNode(next);
          this.computeBufferMetadata();
          return;
        }
        this.deleteNodeHead(startNode, endSplitPosInBuffer2);
        this._searchCache.validate(offset);
        this.validateCRLFWithPrevNode(startNode);
        this.computeBufferMetadata();
        return;
      }
      if (startPosition.nodeStartOffset + startNode.piece.length === offset + cnt) {
        this.deleteNodeTail(startNode, startSplitPosInBuffer2);
        this.validateCRLFWithNextNode(startNode);
        this.computeBufferMetadata();
        return;
      }
      this.shrinkNode(startNode, startSplitPosInBuffer2, endSplitPosInBuffer2);
      this.computeBufferMetadata();
      return;
    }
    const nodesToDel = [];
    const startSplitPosInBuffer = this.positionInBuffer(startNode, startPosition.remainder);
    this.deleteNodeTail(startNode, startSplitPosInBuffer);
    this._searchCache.validate(offset);
    if (startNode.piece.length === 0) {
      nodesToDel.push(startNode);
    }
    const endSplitPosInBuffer = this.positionInBuffer(endNode, endPosition.remainder);
    this.deleteNodeHead(endNode, endSplitPosInBuffer);
    if (endNode.piece.length === 0) {
      nodesToDel.push(endNode);
    }
    const secondNode = startNode.next();
    for (let node = secondNode; node !== SENTINEL && node !== endNode; node = node.next()) {
      nodesToDel.push(node);
    }
    const prev = startNode.piece.length === 0 ? startNode.prev() : startNode;
    this.deleteNodes(nodesToDel);
    this.validateCRLFWithNextNode(prev);
    this.computeBufferMetadata();
  }
  insertContentToNodeLeft(value, node) {
    const nodesToDel = [];
    if (this.shouldCheckCRLF() && this.endWithCR(value) && this.startWithLF(node)) {
      const piece = node.piece;
      const newStart = { line: piece.start.line + 1, column: 0 };
      const nPiece = new Piece(piece.bufferIndex, newStart, piece.end, this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end), piece.length - 1);
      node.piece = nPiece;
      value += "\n";
      updateTreeMetadata(this, node, -1, -1);
      if (node.piece.length === 0) {
        nodesToDel.push(node);
      }
    }
    const newPieces = this.createNewPieces(value);
    let newNode = this.rbInsertLeft(node, newPieces[newPieces.length - 1]);
    for (let k = newPieces.length - 2; k >= 0; k--) {
      newNode = this.rbInsertLeft(newNode, newPieces[k]);
    }
    this.validateCRLFWithPrevNode(newNode);
    this.deleteNodes(nodesToDel);
  }
  insertContentToNodeRight(value, node) {
    if (this.adjustCarriageReturnFromNext(value, node)) {
      value += "\n";
    }
    const newPieces = this.createNewPieces(value);
    const newNode = this.rbInsertRight(node, newPieces[0]);
    let tmpNode = newNode;
    for (let k = 1; k < newPieces.length; k++) {
      tmpNode = this.rbInsertRight(tmpNode, newPieces[k]);
    }
    this.validateCRLFWithPrevNode(newNode);
  }
  positionInBuffer(node, remainder, ret) {
    const piece = node.piece;
    const bufferIndex = node.piece.bufferIndex;
    const lineStarts = this._buffers[bufferIndex].lineStarts;
    const startOffset = lineStarts[piece.start.line] + piece.start.column;
    const offset = startOffset + remainder;
    let low = piece.start.line;
    let high = piece.end.line;
    let mid = 0;
    let midStop = 0;
    let midStart = 0;
    while (low <= high) {
      mid = low + (high - low) / 2 | 0;
      midStart = lineStarts[mid];
      if (mid === high) {
        break;
      }
      midStop = lineStarts[mid + 1];
      if (offset < midStart) {
        high = mid - 1;
      } else if (offset >= midStop) {
        low = mid + 1;
      } else {
        break;
      }
    }
    if (ret) {
      ret.line = mid;
      ret.column = offset - midStart;
      return null;
    }
    return {
      line: mid,
      column: offset - midStart
    };
  }
  getLineFeedCnt(bufferIndex, start, end) {
    if (end.column === 0) {
      return end.line - start.line;
    }
    const lineStarts = this._buffers[bufferIndex].lineStarts;
    if (end.line === lineStarts.length - 1) {
      return end.line - start.line;
    }
    const nextLineStartOffset = lineStarts[end.line + 1];
    const endOffset = lineStarts[end.line] + end.column;
    if (nextLineStartOffset > endOffset + 1) {
      return end.line - start.line;
    }
    const previousCharOffset = endOffset - 1;
    const buffer = this._buffers[bufferIndex].buffer;
    if (buffer.charCodeAt(previousCharOffset) === 13) {
      return end.line - start.line + 1;
    } else {
      return end.line - start.line;
    }
  }
  offsetInBuffer(bufferIndex, cursor) {
    const lineStarts = this._buffers[bufferIndex].lineStarts;
    return lineStarts[cursor.line] + cursor.column;
  }
  deleteNodes(nodes) {
    for (let i = 0; i < nodes.length; i++) {
      rbDelete(this, nodes[i]);
    }
  }
  createNewPieces(text) {
    if (text.length > AverageBufferSize) {
      const newPieces = [];
      while (text.length > AverageBufferSize) {
        const lastChar = text.charCodeAt(AverageBufferSize - 1);
        let splitText;
        if (lastChar === 13 || lastChar >= 55296 && lastChar <= 56319) {
          splitText = text.substring(0, AverageBufferSize - 1);
          text = text.substring(AverageBufferSize - 1);
        } else {
          splitText = text.substring(0, AverageBufferSize);
          text = text.substring(AverageBufferSize);
        }
        const lineStarts3 = createLineStartsFast(splitText);
        newPieces.push(new Piece(
          this._buffers.length,
          /* buffer index */
          { line: 0, column: 0 },
          { line: lineStarts3.length - 1, column: splitText.length - lineStarts3[lineStarts3.length - 1] },
          lineStarts3.length - 1,
          splitText.length
        ));
        this._buffers.push(new StringBuffer(splitText, lineStarts3));
      }
      const lineStarts2 = createLineStartsFast(text);
      newPieces.push(new Piece(
        this._buffers.length,
        /* buffer index */
        { line: 0, column: 0 },
        { line: lineStarts2.length - 1, column: text.length - lineStarts2[lineStarts2.length - 1] },
        lineStarts2.length - 1,
        text.length
      ));
      this._buffers.push(new StringBuffer(text, lineStarts2));
      return newPieces;
    }
    let startOffset = this._buffers[0].buffer.length;
    const lineStarts = createLineStartsFast(text, false);
    let start = this._lastChangeBufferPos;
    if (this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 1] === startOffset && startOffset !== 0 && this.startWithLF(text) && this.endWithCR(this._buffers[0].buffer)) {
      this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line, column: this._lastChangeBufferPos.column + 1 };
      start = this._lastChangeBufferPos;
      for (let i = 0; i < lineStarts.length; i++) {
        lineStarts[i] += startOffset + 1;
      }
      this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
      this._buffers[0].buffer += "_" + text;
      startOffset += 1;
    } else {
      if (startOffset !== 0) {
        for (let i = 0; i < lineStarts.length; i++) {
          lineStarts[i] += startOffset;
        }
      }
      this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
      this._buffers[0].buffer += text;
    }
    const endOffset = this._buffers[0].buffer.length;
    const endIndex = this._buffers[0].lineStarts.length - 1;
    const endColumn = endOffset - this._buffers[0].lineStarts[endIndex];
    const endPos = { line: endIndex, column: endColumn };
    const newPiece = new Piece(
      0,
      /** todo@peng */
      start,
      endPos,
      this.getLineFeedCnt(0, start, endPos),
      endOffset - startOffset
    );
    this._lastChangeBufferPos = endPos;
    return [newPiece];
  }
  getLinesRawContent() {
    return this.getContentOfSubTree(this.root);
  }
  getLineRawContent(lineNumber, endOffset = 0) {
    let x = this.root;
    let ret = "";
    const cache = this._searchCache.get2(lineNumber);
    if (cache) {
      x = cache.node;
      const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - cache.nodeStartLineNumber - 1);
      const buffer = this._buffers[x.piece.bufferIndex].buffer;
      const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
      if (cache.nodeStartLineNumber + x.piece.lineFeedCnt === lineNumber) {
        ret = buffer.substring(startOffset + prevAccumulatedValue, startOffset + x.piece.length);
      } else {
        const accumulatedValue = this.getAccumulatedValue(x, lineNumber - cache.nodeStartLineNumber);
        return buffer.substring(startOffset + prevAccumulatedValue, startOffset + accumulatedValue - endOffset);
      }
    } else {
      let nodeStartOffset = 0;
      const originalLineNumber = lineNumber;
      while (x !== SENTINEL) {
        if (x.left !== SENTINEL && x.lf_left >= lineNumber - 1) {
          x = x.left;
        } else if (x.lf_left + x.piece.lineFeedCnt > lineNumber - 1) {
          const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
          const accumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 1);
          const buffer = this._buffers[x.piece.bufferIndex].buffer;
          const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
          nodeStartOffset += x.size_left;
          this._searchCache.set({
            node: x,
            nodeStartOffset,
            nodeStartLineNumber: originalLineNumber - (lineNumber - 1 - x.lf_left)
          });
          return buffer.substring(startOffset + prevAccumulatedValue, startOffset + accumulatedValue - endOffset);
        } else if (x.lf_left + x.piece.lineFeedCnt === lineNumber - 1) {
          const prevAccumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
          const buffer = this._buffers[x.piece.bufferIndex].buffer;
          const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
          ret = buffer.substring(startOffset + prevAccumulatedValue, startOffset + x.piece.length);
          break;
        } else {
          lineNumber -= x.lf_left + x.piece.lineFeedCnt;
          nodeStartOffset += x.size_left + x.piece.length;
          x = x.right;
        }
      }
    }
    x = x.next();
    while (x !== SENTINEL) {
      const buffer = this._buffers[x.piece.bufferIndex].buffer;
      if (x.piece.lineFeedCnt > 0) {
        const accumulatedValue = this.getAccumulatedValue(x, 0);
        const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
        ret += buffer.substring(startOffset, startOffset + accumulatedValue - endOffset);
        return ret;
      } else {
        const startOffset = this.offsetInBuffer(x.piece.bufferIndex, x.piece.start);
        ret += buffer.substr(startOffset, x.piece.length);
      }
      x = x.next();
    }
    return ret;
  }
  computeBufferMetadata() {
    let x = this.root;
    let lfCnt = 1;
    let len = 0;
    while (x !== SENTINEL) {
      lfCnt += x.lf_left + x.piece.lineFeedCnt;
      len += x.size_left + x.piece.length;
      x = x.right;
    }
    this._lineCnt = lfCnt;
    this._length = len;
    this._searchCache.validate(this._length);
  }
  // #region node operations
  getIndexOf(node, accumulatedValue) {
    const piece = node.piece;
    const pos = this.positionInBuffer(node, accumulatedValue);
    const lineCnt = pos.line - piece.start.line;
    if (this.offsetInBuffer(piece.bufferIndex, piece.end) - this.offsetInBuffer(piece.bufferIndex, piece.start) === accumulatedValue) {
      const realLineCnt = this.getLineFeedCnt(node.piece.bufferIndex, piece.start, pos);
      if (realLineCnt !== lineCnt) {
        return { index: realLineCnt, remainder: 0 };
      }
    }
    return { index: lineCnt, remainder: pos.column };
  }
  getAccumulatedValue(node, index) {
    if (index < 0) {
      return 0;
    }
    const piece = node.piece;
    const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
    const expectedLineStartIndex = piece.start.line + index + 1;
    if (expectedLineStartIndex > piece.end.line) {
      return lineStarts[piece.end.line] + piece.end.column - lineStarts[piece.start.line] - piece.start.column;
    } else {
      return lineStarts[expectedLineStartIndex] - lineStarts[piece.start.line] - piece.start.column;
    }
  }
  deleteNodeTail(node, pos) {
    const piece = node.piece;
    const originalLFCnt = piece.lineFeedCnt;
    const originalEndOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
    const newEnd = pos;
    const newEndOffset = this.offsetInBuffer(piece.bufferIndex, newEnd);
    const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, piece.start, newEnd);
    const lf_delta = newLineFeedCnt - originalLFCnt;
    const size_delta = newEndOffset - originalEndOffset;
    const newLength = piece.length + size_delta;
    node.piece = new Piece(piece.bufferIndex, piece.start, newEnd, newLineFeedCnt, newLength);
    updateTreeMetadata(this, node, size_delta, lf_delta);
  }
  deleteNodeHead(node, pos) {
    const piece = node.piece;
    const originalLFCnt = piece.lineFeedCnt;
    const originalStartOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
    const newStart = pos;
    const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end);
    const newStartOffset = this.offsetInBuffer(piece.bufferIndex, newStart);
    const lf_delta = newLineFeedCnt - originalLFCnt;
    const size_delta = originalStartOffset - newStartOffset;
    const newLength = piece.length + size_delta;
    node.piece = new Piece(piece.bufferIndex, newStart, piece.end, newLineFeedCnt, newLength);
    updateTreeMetadata(this, node, size_delta, lf_delta);
  }
  shrinkNode(node, start, end) {
    const piece = node.piece;
    const originalStartPos = piece.start;
    const originalEndPos = piece.end;
    const oldLength = piece.length;
    const oldLFCnt = piece.lineFeedCnt;
    const newEnd = start;
    const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, piece.start, newEnd);
    const newLength = this.offsetInBuffer(piece.bufferIndex, start) - this.offsetInBuffer(piece.bufferIndex, originalStartPos);
    node.piece = new Piece(piece.bufferIndex, piece.start, newEnd, newLineFeedCnt, newLength);
    updateTreeMetadata(this, node, newLength - oldLength, newLineFeedCnt - oldLFCnt);
    const newPiece = new Piece(piece.bufferIndex, end, originalEndPos, this.getLineFeedCnt(piece.bufferIndex, end, originalEndPos), this.offsetInBuffer(piece.bufferIndex, originalEndPos) - this.offsetInBuffer(piece.bufferIndex, end));
    const newNode = this.rbInsertRight(node, newPiece);
    this.validateCRLFWithPrevNode(newNode);
  }
  appendToNode(node, value) {
    if (this.adjustCarriageReturnFromNext(value, node)) {
      value += "\n";
    }
    const hitCRLF = this.shouldCheckCRLF() && this.startWithLF(value) && this.endWithCR(node);
    const startOffset = this._buffers[0].buffer.length;
    this._buffers[0].buffer += value;
    const lineStarts = createLineStartsFast(value, false);
    for (let i = 0; i < lineStarts.length; i++) {
      lineStarts[i] += startOffset;
    }
    if (hitCRLF) {
      const prevStartOffset = this._buffers[0].lineStarts[this._buffers[0].lineStarts.length - 2];
      this._buffers[0].lineStarts.pop();
      this._lastChangeBufferPos = { line: this._lastChangeBufferPos.line - 1, column: startOffset - prevStartOffset };
    }
    this._buffers[0].lineStarts = this._buffers[0].lineStarts.concat(lineStarts.slice(1));
    const endIndex = this._buffers[0].lineStarts.length - 1;
    const endColumn = this._buffers[0].buffer.length - this._buffers[0].lineStarts[endIndex];
    const newEnd = { line: endIndex, column: endColumn };
    const newLength = node.piece.length + value.length;
    const oldLineFeedCnt = node.piece.lineFeedCnt;
    const newLineFeedCnt = this.getLineFeedCnt(0, node.piece.start, newEnd);
    const lf_delta = newLineFeedCnt - oldLineFeedCnt;
    node.piece = new Piece(node.piece.bufferIndex, node.piece.start, newEnd, newLineFeedCnt, newLength);
    this._lastChangeBufferPos = newEnd;
    updateTreeMetadata(this, node, value.length, lf_delta);
  }
  nodeAt(offset) {
    let x = this.root;
    const cache = this._searchCache.get(offset);
    if (cache) {
      return {
        node: cache.node,
        nodeStartOffset: cache.nodeStartOffset,
        remainder: offset - cache.nodeStartOffset
      };
    }
    let nodeStartOffset = 0;
    while (x !== SENTINEL) {
      if (x.size_left > offset) {
        x = x.left;
      } else if (x.size_left + x.piece.length >= offset) {
        nodeStartOffset += x.size_left;
        const ret = {
          node: x,
          remainder: offset - x.size_left,
          nodeStartOffset
        };
        this._searchCache.set(ret);
        return ret;
      } else {
        offset -= x.size_left + x.piece.length;
        nodeStartOffset += x.size_left + x.piece.length;
        x = x.right;
      }
    }
    return null;
  }
  nodeAt2(lineNumber, column) {
    let x = this.root;
    let nodeStartOffset = 0;
    while (x !== SENTINEL) {
      if (x.left !== SENTINEL && x.lf_left >= lineNumber - 1) {
        x = x.left;
      } else if (x.lf_left + x.piece.lineFeedCnt > lineNumber - 1) {
        const prevAccumualtedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
        const accumulatedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 1);
        nodeStartOffset += x.size_left;
        return {
          node: x,
          remainder: Math.min(prevAccumualtedValue + column - 1, accumulatedValue),
          nodeStartOffset
        };
      } else if (x.lf_left + x.piece.lineFeedCnt === lineNumber - 1) {
        const prevAccumualtedValue = this.getAccumulatedValue(x, lineNumber - x.lf_left - 2);
        if (prevAccumualtedValue + column - 1 <= x.piece.length) {
          return {
            node: x,
            remainder: prevAccumualtedValue + column - 1,
            nodeStartOffset
          };
        } else {
          column -= x.piece.length - prevAccumualtedValue;
          break;
        }
      } else {
        lineNumber -= x.lf_left + x.piece.lineFeedCnt;
        nodeStartOffset += x.size_left + x.piece.length;
        x = x.right;
      }
    }
    x = x.next();
    while (x !== SENTINEL) {
      if (x.piece.lineFeedCnt > 0) {
        const accumulatedValue = this.getAccumulatedValue(x, 0);
        const nodeStartOffset2 = this.offsetOfNode(x);
        return {
          node: x,
          remainder: Math.min(column - 1, accumulatedValue),
          nodeStartOffset: nodeStartOffset2
        };
      } else {
        if (x.piece.length >= column - 1) {
          const nodeStartOffset2 = this.offsetOfNode(x);
          return {
            node: x,
            remainder: column - 1,
            nodeStartOffset: nodeStartOffset2
          };
        } else {
          column -= x.piece.length;
        }
      }
      x = x.next();
    }
    return null;
  }
  nodeCharCodeAt(node, offset) {
    if (node.piece.lineFeedCnt < 1) {
      return -1;
    }
    const buffer = this._buffers[node.piece.bufferIndex];
    const newOffset = this.offsetInBuffer(node.piece.bufferIndex, node.piece.start) + offset;
    return buffer.buffer.charCodeAt(newOffset);
  }
  offsetOfNode(node) {
    if (!node) {
      return 0;
    }
    let pos = node.size_left;
    while (node !== this.root) {
      if (node.parent.right === node) {
        pos += node.parent.size_left + node.parent.piece.length;
      }
      node = node.parent;
    }
    return pos;
  }
  // #endregion
  // #region CRLF
  shouldCheckCRLF() {
    return !(this._EOLNormalized && this._EOL === "\n");
  }
  startWithLF(val) {
    if (typeof val === "string") {
      return val.charCodeAt(0) === 10;
    }
    if (val === SENTINEL || val.piece.lineFeedCnt === 0) {
      return false;
    }
    const piece = val.piece;
    const lineStarts = this._buffers[piece.bufferIndex].lineStarts;
    const line = piece.start.line;
    const startOffset = lineStarts[line] + piece.start.column;
    if (line === lineStarts.length - 1) {
      return false;
    }
    const nextLineOffset = lineStarts[line + 1];
    if (nextLineOffset > startOffset + 1) {
      return false;
    }
    return this._buffers[piece.bufferIndex].buffer.charCodeAt(startOffset) === 10;
  }
  endWithCR(val) {
    if (typeof val === "string") {
      return val.charCodeAt(val.length - 1) === 13;
    }
    if (val === SENTINEL || val.piece.lineFeedCnt === 0) {
      return false;
    }
    return this.nodeCharCodeAt(val, val.piece.length - 1) === 13;
  }
  validateCRLFWithPrevNode(nextNode) {
    if (this.shouldCheckCRLF() && this.startWithLF(nextNode)) {
      const node = nextNode.prev();
      if (this.endWithCR(node)) {
        this.fixCRLF(node, nextNode);
      }
    }
  }
  validateCRLFWithNextNode(node) {
    if (this.shouldCheckCRLF() && this.endWithCR(node)) {
      const nextNode = node.next();
      if (this.startWithLF(nextNode)) {
        this.fixCRLF(node, nextNode);
      }
    }
  }
  fixCRLF(prev, next) {
    const nodesToDel = [];
    const lineStarts = this._buffers[prev.piece.bufferIndex].lineStarts;
    let newEnd;
    if (prev.piece.end.column === 0) {
      newEnd = { line: prev.piece.end.line - 1, column: lineStarts[prev.piece.end.line] - lineStarts[prev.piece.end.line - 1] - 1 };
    } else {
      newEnd = { line: prev.piece.end.line, column: prev.piece.end.column - 1 };
    }
    const prevNewLength = prev.piece.length - 1;
    const prevNewLFCnt = prev.piece.lineFeedCnt - 1;
    prev.piece = new Piece(prev.piece.bufferIndex, prev.piece.start, newEnd, prevNewLFCnt, prevNewLength);
    updateTreeMetadata(this, prev, -1, -1);
    if (prev.piece.length === 0) {
      nodesToDel.push(prev);
    }
    const newStart = { line: next.piece.start.line + 1, column: 0 };
    const newLength = next.piece.length - 1;
    const newLineFeedCnt = this.getLineFeedCnt(next.piece.bufferIndex, newStart, next.piece.end);
    next.piece = new Piece(next.piece.bufferIndex, newStart, next.piece.end, newLineFeedCnt, newLength);
    updateTreeMetadata(this, next, -1, -1);
    if (next.piece.length === 0) {
      nodesToDel.push(next);
    }
    const pieces = this.createNewPieces("\r\n");
    this.rbInsertRight(prev, pieces[0]);
    for (let i = 0; i < nodesToDel.length; i++) {
      rbDelete(this, nodesToDel[i]);
    }
  }
  adjustCarriageReturnFromNext(value, node) {
    if (this.shouldCheckCRLF() && this.endWithCR(value)) {
      const nextNode = node.next();
      if (this.startWithLF(nextNode)) {
        value += "\n";
        if (nextNode.piece.length === 1) {
          rbDelete(this, nextNode);
        } else {
          const piece = nextNode.piece;
          const newStart = { line: piece.start.line + 1, column: 0 };
          const newLength = piece.length - 1;
          const newLineFeedCnt = this.getLineFeedCnt(piece.bufferIndex, newStart, piece.end);
          nextNode.piece = new Piece(piece.bufferIndex, newStart, piece.end, newLineFeedCnt, newLength);
          updateTreeMetadata(this, nextNode, -1, -1);
        }
        return true;
      }
    }
    return false;
  }
  // #endregion
  // #endregion
  // #region Tree operations
  iterate(node, callback) {
    if (node === SENTINEL) {
      return callback(SENTINEL);
    }
    const leftRet = this.iterate(node.left, callback);
    if (!leftRet) {
      return leftRet;
    }
    return callback(node) && this.iterate(node.right, callback);
  }
  getNodeContent(node) {
    if (node === SENTINEL) {
      return "";
    }
    const buffer = this._buffers[node.piece.bufferIndex];
    const piece = node.piece;
    const startOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
    const endOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
    const currentContent = buffer.buffer.substring(startOffset, endOffset);
    return currentContent;
  }
  getPieceContent(piece) {
    const buffer = this._buffers[piece.bufferIndex];
    const startOffset = this.offsetInBuffer(piece.bufferIndex, piece.start);
    const endOffset = this.offsetInBuffer(piece.bufferIndex, piece.end);
    const currentContent = buffer.buffer.substring(startOffset, endOffset);
    return currentContent;
  }
  /**
   *      node              node
   *     /  \              /  \
   *    a   b    <----   a    b
   *                         /
   *                        z
   */
  rbInsertRight(node, p) {
    const z = new TreeNode(
      p,
      1
      /* NodeColor.Red */
    );
    z.left = SENTINEL;
    z.right = SENTINEL;
    z.parent = SENTINEL;
    z.size_left = 0;
    z.lf_left = 0;
    const x = this.root;
    if (x === SENTINEL) {
      this.root = z;
      z.color = 0;
    } else if (node.right === SENTINEL) {
      node.right = z;
      z.parent = node;
    } else {
      const nextNode = leftest(node.right);
      nextNode.left = z;
      z.parent = nextNode;
    }
    fixInsert(this, z);
    return z;
  }
  /**
   *      node              node
   *     /  \              /  \
   *    a   b     ---->   a    b
   *                       \
   *                        z
   */
  rbInsertLeft(node, p) {
    const z = new TreeNode(
      p,
      1
      /* NodeColor.Red */
    );
    z.left = SENTINEL;
    z.right = SENTINEL;
    z.parent = SENTINEL;
    z.size_left = 0;
    z.lf_left = 0;
    if (this.root === SENTINEL) {
      this.root = z;
      z.color = 0;
    } else if (node.left === SENTINEL) {
      node.left = z;
      z.parent = node;
    } else {
      const prevNode = righttest(node.left);
      prevNode.right = z;
      z.parent = prevNode;
    }
    fixInsert(this, z);
    return z;
  }
  getContentOfSubTree(node) {
    let str = "";
    this.iterate(node, (node2) => {
      str += this.getNodeContent(node2);
      return true;
    });
    return str;
  }
};

// out-build/vs/editor/common/core/misc/eolCounter.js
var StringEOL;
(function(StringEOL2) {
  StringEOL2[StringEOL2["Unknown"] = 0] = "Unknown";
  StringEOL2[StringEOL2["Invalid"] = 3] = "Invalid";
  StringEOL2[StringEOL2["LF"] = 1] = "LF";
  StringEOL2[StringEOL2["CRLF"] = 2] = "CRLF";
})(StringEOL || (StringEOL = {}));
function countEOL(text) {
  let eolCount = 0;
  let firstLineLength = 0;
  let lastLineStart = 0;
  let eol = 0;
  for (let i = 0, len = text.length; i < len; i++) {
    const chr = text.charCodeAt(i);
    if (chr === 13) {
      if (eolCount === 0) {
        firstLineLength = i;
      }
      eolCount++;
      if (i + 1 < len && text.charCodeAt(i + 1) === 10) {
        eol |= 2;
        i++;
      } else {
        eol |= 3;
      }
      lastLineStart = i + 1;
    } else if (chr === 10) {
      eol |= 1;
      if (eolCount === 0) {
        firstLineLength = i;
      }
      eolCount++;
      lastLineStart = i + 1;
    }
  }
  if (eolCount === 0) {
    firstLineLength = text.length;
  }
  return [eolCount, firstLineLength, text.length - lastLineStart, eol];
}

// out-build/vs/editor/common/core/stringBuilder.js
var _utf16LE_TextDecoder;
function getUTF16LE_TextDecoder() {
  if (!_utf16LE_TextDecoder) {
    _utf16LE_TextDecoder = new TextDecoder("UTF-16LE");
  }
  return _utf16LE_TextDecoder;
}
function decodeUTF16LE(source, offset, len) {
  const view = new Uint16Array(source.buffer, offset, len);
  if (len > 0 && (view[0] === 65279 || view[0] === 65534)) {
    return compatDecodeUTF16LE(source, offset, len);
  }
  return getUTF16LE_TextDecoder().decode(view);
}
function compatDecodeUTF16LE(source, offset, len) {
  const result = [];
  let resultLen = 0;
  for (let i = 0; i < len; i++) {
    const charCode = readUInt16LE(source, offset);
    offset += 2;
    result[resultLen++] = String.fromCharCode(charCode);
  }
  return result.join("");
}

// out-build/vs/editor/common/core/textChange.js
function escapeNewLine(str) {
  return str.replace(/\n/g, "\\n").replace(/\r/g, "\\r");
}
var TextChange = class _TextChange {
  get oldLength() {
    return this.oldText.length;
  }
  get oldEnd() {
    return this.oldPosition + this.oldText.length;
  }
  get newLength() {
    return this.newText.length;
  }
  get newEnd() {
    return this.newPosition + this.newText.length;
  }
  constructor(oldPosition, oldText, newPosition, newText) {
    this.oldPosition = oldPosition;
    this.oldText = oldText;
    this.newPosition = newPosition;
    this.newText = newText;
  }
  toString() {
    if (this.oldText.length === 0) {
      return `(insert@${this.oldPosition} "${escapeNewLine(this.newText)}")`;
    }
    if (this.newText.length === 0) {
      return `(delete@${this.oldPosition} "${escapeNewLine(this.oldText)}")`;
    }
    return `(replace@${this.oldPosition} "${escapeNewLine(this.oldText)}" with "${escapeNewLine(this.newText)}")`;
  }
  static _writeStringSize(str) {
    return 4 + 2 * str.length;
  }
  static _writeString(b, str, offset) {
    const len = str.length;
    writeUInt32BE(b, len, offset);
    offset += 4;
    for (let i = 0; i < len; i++) {
      writeUInt16LE(b, str.charCodeAt(i), offset);
      offset += 2;
    }
    return offset;
  }
  static _readString(b, offset) {
    const len = readUInt32BE(b, offset);
    offset += 4;
    return decodeUTF16LE(b, offset, len);
  }
  writeSize() {
    return 4 + 4 + _TextChange._writeStringSize(this.oldText) + _TextChange._writeStringSize(this.newText);
  }
  write(b, offset) {
    writeUInt32BE(b, this.oldPosition, offset);
    offset += 4;
    writeUInt32BE(b, this.newPosition, offset);
    offset += 4;
    offset = _TextChange._writeString(b, this.oldText, offset);
    offset = _TextChange._writeString(b, this.newText, offset);
    return offset;
  }
  static read(b, offset, dest) {
    const oldPosition = readUInt32BE(b, offset);
    offset += 4;
    const newPosition = readUInt32BE(b, offset);
    offset += 4;
    const oldText = _TextChange._readString(b, offset);
    offset += _TextChange._writeStringSize(oldText);
    const newText = _TextChange._readString(b, offset);
    offset += _TextChange._writeStringSize(newText);
    dest.push(new _TextChange(oldPosition, oldText, newPosition, newText));
    return offset;
  }
};

// out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBuffer.js
var PieceTreeTextBuffer = class _PieceTreeTextBuffer extends Disposable {
  get onDidChangeContent() {
    return this._onDidChangeContent.event;
  }
  constructor(chunks, BOM, eol, containsRTL2, containsUnusualLineTerminators2, isBasicASCII2, eolNormalized) {
    super();
    this._onDidChangeContent = this._register(new Emitter());
    this._BOM = BOM;
    this._mightContainNonBasicASCII = !isBasicASCII2;
    this._mightContainRTL = containsRTL2;
    this._mightContainUnusualLineTerminators = containsUnusualLineTerminators2;
    this._pieceTree = new PieceTreeBase(chunks, eol, eolNormalized);
  }
  // #region TextBuffer
  equals(other) {
    if (!(other instanceof _PieceTreeTextBuffer)) {
      return false;
    }
    if (this._BOM !== other._BOM) {
      return false;
    }
    if (this.getEOL() !== other.getEOL()) {
      return false;
    }
    return this._pieceTree.equal(other._pieceTree);
  }
  mightContainRTL() {
    return this._mightContainRTL;
  }
  mightContainUnusualLineTerminators() {
    return this._mightContainUnusualLineTerminators;
  }
  resetMightContainUnusualLineTerminators() {
    this._mightContainUnusualLineTerminators = false;
  }
  mightContainNonBasicASCII() {
    return this._mightContainNonBasicASCII;
  }
  getBOM() {
    return this._BOM;
  }
  getEOL() {
    return this._pieceTree.getEOL();
  }
  createSnapshot(preserveBOM) {
    return this._pieceTree.createSnapshot(preserveBOM ? this._BOM : "");
  }
  getOffsetAt(lineNumber, column) {
    return this._pieceTree.getOffsetAt(lineNumber, column);
  }
  getPositionAt(offset) {
    return this._pieceTree.getPositionAt(offset);
  }
  getRangeAt(start, length) {
    const end = start + length;
    const startPosition = this.getPositionAt(start);
    const endPosition = this.getPositionAt(end);
    return new Range(startPosition.lineNumber, startPosition.column, endPosition.lineNumber, endPosition.column);
  }
  getValueInRange(range, eol = 0) {
    if (range.isEmpty()) {
      return "";
    }
    const lineEnding = this._getEndOfLine(eol);
    return this._pieceTree.getValueInRange(range, lineEnding);
  }
  getValueLengthInRange(range, eol = 0) {
    if (range.isEmpty()) {
      return 0;
    }
    if (range.startLineNumber === range.endLineNumber) {
      return range.endColumn - range.startColumn;
    }
    const startOffset = this.getOffsetAt(range.startLineNumber, range.startColumn);
    const endOffset = this.getOffsetAt(range.endLineNumber, range.endColumn);
    let eolOffsetCompensation = 0;
    const desiredEOL = this._getEndOfLine(eol);
    const actualEOL = this.getEOL();
    if (desiredEOL.length !== actualEOL.length) {
      const delta = desiredEOL.length - actualEOL.length;
      const eolCount = range.endLineNumber - range.startLineNumber;
      eolOffsetCompensation = delta * eolCount;
    }
    return endOffset - startOffset + eolOffsetCompensation;
  }
  getCharacterCountInRange(range, eol = 0) {
    if (this._mightContainNonBasicASCII) {
      let result = 0;
      const fromLineNumber = range.startLineNumber;
      const toLineNumber = range.endLineNumber;
      for (let lineNumber = fromLineNumber; lineNumber <= toLineNumber; lineNumber++) {
        const lineContent = this.getLineContent(lineNumber);
        const fromOffset = lineNumber === fromLineNumber ? range.startColumn - 1 : 0;
        const toOffset = lineNumber === toLineNumber ? range.endColumn - 1 : lineContent.length;
        for (let offset = fromOffset; offset < toOffset; offset++) {
          if (isHighSurrogate(lineContent.charCodeAt(offset))) {
            result = result + 1;
            offset = offset + 1;
          } else {
            result = result + 1;
          }
        }
      }
      result += this._getEndOfLine(eol).length * (toLineNumber - fromLineNumber);
      return result;
    }
    return this.getValueLengthInRange(range, eol);
  }
  getNearestChunk(offset) {
    return this._pieceTree.getNearestChunk(offset);
  }
  getLength() {
    return this._pieceTree.getLength();
  }
  getLineCount() {
    return this._pieceTree.getLineCount();
  }
  getLinesContent() {
    return this._pieceTree.getLinesContent();
  }
  getLineContent(lineNumber) {
    return this._pieceTree.getLineContent(lineNumber);
  }
  getLineCharCode(lineNumber, index) {
    return this._pieceTree.getLineCharCode(lineNumber, index);
  }
  getCharCode(offset) {
    return this._pieceTree.getCharCode(offset);
  }
  getLineLength(lineNumber) {
    return this._pieceTree.getLineLength(lineNumber);
  }
  getLineMinColumn(lineNumber) {
    return 1;
  }
  getLineMaxColumn(lineNumber) {
    return this.getLineLength(lineNumber) + 1;
  }
  getLineFirstNonWhitespaceColumn(lineNumber) {
    const result = firstNonWhitespaceIndex(this.getLineContent(lineNumber));
    if (result === -1) {
      return 0;
    }
    return result + 1;
  }
  getLineLastNonWhitespaceColumn(lineNumber) {
    const result = lastNonWhitespaceIndex(this.getLineContent(lineNumber));
    if (result === -1) {
      return 0;
    }
    return result + 2;
  }
  _getEndOfLine(eol) {
    switch (eol) {
      case 1:
        return "\n";
      case 2:
        return "\r\n";
      case 0:
        return this.getEOL();
      default:
        throw new Error("Unknown EOL preference");
    }
  }
  setEOL(newEOL) {
    this._pieceTree.setEOL(newEOL);
  }
  applyEdits(rawOperations, recordTrimAutoWhitespace, computeUndoEdits) {
    let mightContainRTL = this._mightContainRTL;
    let mightContainUnusualLineTerminators = this._mightContainUnusualLineTerminators;
    let mightContainNonBasicASCII = this._mightContainNonBasicASCII;
    let canReduceOperations = true;
    let operations = [];
    for (let i = 0; i < rawOperations.length; i++) {
      const op = rawOperations[i];
      if (canReduceOperations && op._isTracked) {
        canReduceOperations = false;
      }
      const validatedRange = op.range;
      if (op.text) {
        let textMightContainNonBasicASCII = true;
        if (!mightContainNonBasicASCII) {
          textMightContainNonBasicASCII = !isBasicASCII(op.text);
          mightContainNonBasicASCII = textMightContainNonBasicASCII;
        }
        if (!mightContainRTL && textMightContainNonBasicASCII) {
          mightContainRTL = containsRTL(op.text);
        }
        if (!mightContainUnusualLineTerminators && textMightContainNonBasicASCII) {
          mightContainUnusualLineTerminators = containsUnusualLineTerminators(op.text);
        }
      }
      let validText = "";
      let eolCount = 0;
      let firstLineLength = 0;
      let lastLineLength = 0;
      if (op.text) {
        let strEOL;
        [eolCount, firstLineLength, lastLineLength, strEOL] = countEOL(op.text);
        const bufferEOL = this.getEOL();
        const expectedStrEOL = bufferEOL === "\r\n" ? 2 : 1;
        if (strEOL === 0 || strEOL === expectedStrEOL) {
          validText = op.text;
        } else {
          validText = op.text.replace(/\r\n|\r|\n/g, bufferEOL);
        }
      }
      operations[i] = {
        sortIndex: i,
        identifier: op.identifier || null,
        range: validatedRange,
        rangeOffset: this.getOffsetAt(validatedRange.startLineNumber, validatedRange.startColumn),
        rangeLength: this.getValueLengthInRange(validatedRange),
        text: validText,
        eolCount,
        firstLineLength,
        lastLineLength,
        forceMoveMarkers: Boolean(op.forceMoveMarkers),
        isAutoWhitespaceEdit: op.isAutoWhitespaceEdit || false
      };
    }
    operations.sort(_PieceTreeTextBuffer._sortOpsAscending);
    let hasTouchingRanges = false;
    for (let i = 0, count = operations.length - 1; i < count; i++) {
      const rangeEnd = operations[i].range.getEndPosition();
      const nextRangeStart = operations[i + 1].range.getStartPosition();
      if (nextRangeStart.isBeforeOrEqual(rangeEnd)) {
        if (nextRangeStart.isBefore(rangeEnd)) {
          throw new Error("Overlapping ranges are not allowed!");
        }
        hasTouchingRanges = true;
      }
    }
    if (canReduceOperations) {
      operations = this._reduceOperations(operations);
    }
    const reverseRanges = computeUndoEdits || recordTrimAutoWhitespace ? _PieceTreeTextBuffer._getInverseEditRanges(operations) : [];
    const newTrimAutoWhitespaceCandidates = [];
    if (recordTrimAutoWhitespace) {
      for (let i = 0; i < operations.length; i++) {
        const op = operations[i];
        const reverseRange = reverseRanges[i];
        if (op.isAutoWhitespaceEdit && op.range.isEmpty()) {
          for (let lineNumber = reverseRange.startLineNumber; lineNumber <= reverseRange.endLineNumber; lineNumber++) {
            let currentLineContent = "";
            if (lineNumber === reverseRange.startLineNumber) {
              currentLineContent = this.getLineContent(op.range.startLineNumber);
              if (firstNonWhitespaceIndex(currentLineContent) !== -1) {
                continue;
              }
            }
            newTrimAutoWhitespaceCandidates.push({ lineNumber, oldContent: currentLineContent });
          }
        }
      }
    }
    let reverseOperations = null;
    if (computeUndoEdits) {
      let reverseRangeDeltaOffset = 0;
      reverseOperations = [];
      for (let i = 0; i < operations.length; i++) {
        const op = operations[i];
        const reverseRange = reverseRanges[i];
        const bufferText = this.getValueInRange(op.range);
        const reverseRangeOffset = op.rangeOffset + reverseRangeDeltaOffset;
        reverseRangeDeltaOffset += op.text.length - bufferText.length;
        reverseOperations[i] = {
          sortIndex: op.sortIndex,
          identifier: op.identifier,
          range: reverseRange,
          text: bufferText,
          textChange: new TextChange(op.rangeOffset, bufferText, reverseRangeOffset, op.text)
        };
      }
      if (!hasTouchingRanges) {
        reverseOperations.sort((a, b) => a.sortIndex - b.sortIndex);
      }
    }
    this._mightContainRTL = mightContainRTL;
    this._mightContainUnusualLineTerminators = mightContainUnusualLineTerminators;
    this._mightContainNonBasicASCII = mightContainNonBasicASCII;
    const contentChanges = this._doApplyEdits(operations);
    let trimAutoWhitespaceLineNumbers = null;
    if (recordTrimAutoWhitespace && newTrimAutoWhitespaceCandidates.length > 0) {
      newTrimAutoWhitespaceCandidates.sort((a, b) => b.lineNumber - a.lineNumber);
      trimAutoWhitespaceLineNumbers = [];
      for (let i = 0, len = newTrimAutoWhitespaceCandidates.length; i < len; i++) {
        const lineNumber = newTrimAutoWhitespaceCandidates[i].lineNumber;
        if (i > 0 && newTrimAutoWhitespaceCandidates[i - 1].lineNumber === lineNumber) {
          continue;
        }
        const prevContent = newTrimAutoWhitespaceCandidates[i].oldContent;
        const lineContent = this.getLineContent(lineNumber);
        if (lineContent.length === 0 || lineContent === prevContent || firstNonWhitespaceIndex(lineContent) !== -1) {
          continue;
        }
        trimAutoWhitespaceLineNumbers.push(lineNumber);
      }
    }
    this._onDidChangeContent.fire();
    return new ApplyEditsResult(reverseOperations, contentChanges, trimAutoWhitespaceLineNumbers);
  }
  /**
   * Transform operations such that they represent the same logic edit,
   * but that they also do not cause OOM crashes.
   */
  _reduceOperations(operations) {
    if (operations.length < 1e3) {
      return operations;
    }
    return [this._toSingleEditOperation(operations)];
  }
  _toSingleEditOperation(operations) {
    let forceMoveMarkers = false;
    const firstEditRange = operations[0].range;
    const lastEditRange = operations[operations.length - 1].range;
    const entireEditRange = new Range(firstEditRange.startLineNumber, firstEditRange.startColumn, lastEditRange.endLineNumber, lastEditRange.endColumn);
    let lastEndLineNumber = firstEditRange.startLineNumber;
    let lastEndColumn = firstEditRange.startColumn;
    const result = [];
    for (let i = 0, len = operations.length; i < len; i++) {
      const operation = operations[i];
      const range = operation.range;
      forceMoveMarkers = forceMoveMarkers || operation.forceMoveMarkers;
      result.push(this.getValueInRange(new Range(lastEndLineNumber, lastEndColumn, range.startLineNumber, range.startColumn)));
      if (operation.text.length > 0) {
        result.push(operation.text);
      }
      lastEndLineNumber = range.endLineNumber;
      lastEndColumn = range.endColumn;
    }
    const text = result.join("");
    const [eolCount, firstLineLength, lastLineLength] = countEOL(text);
    return {
      sortIndex: 0,
      identifier: operations[0].identifier,
      range: entireEditRange,
      rangeOffset: this.getOffsetAt(entireEditRange.startLineNumber, entireEditRange.startColumn),
      rangeLength: this.getValueLengthInRange(
        entireEditRange,
        0
        /* EndOfLinePreference.TextDefined */
      ),
      text,
      eolCount,
      firstLineLength,
      lastLineLength,
      forceMoveMarkers,
      isAutoWhitespaceEdit: false
    };
  }
  _doApplyEdits(operations) {
    operations.sort(_PieceTreeTextBuffer._sortOpsDescending);
    const contentChanges = [];
    for (let i = 0; i < operations.length; i++) {
      const op = operations[i];
      const startLineNumber = op.range.startLineNumber;
      const startColumn = op.range.startColumn;
      const endLineNumber = op.range.endLineNumber;
      const endColumn = op.range.endColumn;
      if (startLineNumber === endLineNumber && startColumn === endColumn && op.text.length === 0) {
        continue;
      }
      if (op.text) {
        this._pieceTree.delete(op.rangeOffset, op.rangeLength);
        this._pieceTree.insert(op.rangeOffset, op.text, true);
      } else {
        this._pieceTree.delete(op.rangeOffset, op.rangeLength);
      }
      const contentChangeRange = new Range(startLineNumber, startColumn, endLineNumber, endColumn);
      contentChanges.push({
        range: contentChangeRange,
        rangeLength: op.rangeLength,
        text: op.text,
        rangeOffset: op.rangeOffset,
        forceMoveMarkers: op.forceMoveMarkers
      });
    }
    return contentChanges;
  }
  findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount) {
    return this._pieceTree.findMatchesLineByLine(searchRange, searchData, captureMatches, limitResultCount);
  }
  // #endregion
  // #region helper
  // testing purpose.
  getPieceTree() {
    return this._pieceTree;
  }
  static _getInverseEditRange(range, text) {
    const startLineNumber = range.startLineNumber;
    const startColumn = range.startColumn;
    const [eolCount, firstLineLength, lastLineLength] = countEOL(text);
    let resultRange;
    if (text.length > 0) {
      const lineCount = eolCount + 1;
      if (lineCount === 1) {
        resultRange = new Range(startLineNumber, startColumn, startLineNumber, startColumn + firstLineLength);
      } else {
        resultRange = new Range(startLineNumber, startColumn, startLineNumber + lineCount - 1, lastLineLength + 1);
      }
    } else {
      resultRange = new Range(startLineNumber, startColumn, startLineNumber, startColumn);
    }
    return resultRange;
  }
  /**
   * Assumes `operations` are validated and sorted ascending
   */
  static _getInverseEditRanges(operations) {
    const result = [];
    let prevOpEndLineNumber = 0;
    let prevOpEndColumn = 0;
    let prevOp = null;
    for (let i = 0, len = operations.length; i < len; i++) {
      const op = operations[i];
      let startLineNumber;
      let startColumn;
      if (prevOp) {
        if (prevOp.range.endLineNumber === op.range.startLineNumber) {
          startLineNumber = prevOpEndLineNumber;
          startColumn = prevOpEndColumn + (op.range.startColumn - prevOp.range.endColumn);
        } else {
          startLineNumber = prevOpEndLineNumber + (op.range.startLineNumber - prevOp.range.endLineNumber);
          startColumn = op.range.startColumn;
        }
      } else {
        startLineNumber = op.range.startLineNumber;
        startColumn = op.range.startColumn;
      }
      let resultRange;
      if (op.text.length > 0) {
        const lineCount = op.eolCount + 1;
        if (lineCount === 1) {
          resultRange = new Range(startLineNumber, startColumn, startLineNumber, startColumn + op.firstLineLength);
        } else {
          resultRange = new Range(startLineNumber, startColumn, startLineNumber + lineCount - 1, op.lastLineLength + 1);
        }
      } else {
        resultRange = new Range(startLineNumber, startColumn, startLineNumber, startColumn);
      }
      prevOpEndLineNumber = resultRange.endLineNumber;
      prevOpEndColumn = resultRange.endColumn;
      result.push(resultRange);
      prevOp = op;
    }
    return result;
  }
  static _sortOpsAscending(a, b) {
    const r = Range.compareRangesUsingEnds(a.range, b.range);
    if (r === 0) {
      return a.sortIndex - b.sortIndex;
    }
    return r;
  }
  static _sortOpsDescending(a, b) {
    const r = Range.compareRangesUsingEnds(a.range, b.range);
    if (r === 0) {
      return b.sortIndex - a.sortIndex;
    }
    return -r;
  }
};

// out-build/vs/editor/common/model/pieceTreeTextBuffer/pieceTreeTextBufferBuilder.js
var PieceTreeTextBufferFactory = class {
  constructor(_chunks, _bom, _cr, _lf, _crlf, _containsRTL, _containsUnusualLineTerminators, _isBasicASCII, _normalizeEOL) {
    this._chunks = _chunks;
    this._bom = _bom;
    this._cr = _cr;
    this._lf = _lf;
    this._crlf = _crlf;
    this._containsRTL = _containsRTL;
    this._containsUnusualLineTerminators = _containsUnusualLineTerminators;
    this._isBasicASCII = _isBasicASCII;
    this._normalizeEOL = _normalizeEOL;
  }
  _getEOL(defaultEOL) {
    const totalEOLCount = this._cr + this._lf + this._crlf;
    const totalCRCount = this._cr + this._crlf;
    if (totalEOLCount === 0) {
      return defaultEOL === 1 ? "\n" : "\r\n";
    }
    if (totalCRCount > totalEOLCount / 2) {
      return "\r\n";
    }
    return "\n";
  }
  create(defaultEOL) {
    const eol = this._getEOL(defaultEOL);
    const chunks = this._chunks;
    if (this._normalizeEOL && (eol === "\r\n" && (this._cr > 0 || this._lf > 0) || eol === "\n" && (this._cr > 0 || this._crlf > 0))) {
      for (let i = 0, len = chunks.length; i < len; i++) {
        const str = chunks[i].buffer.replace(/\r\n|\r|\n/g, eol);
        const newLineStart = createLineStartsFast(str);
        chunks[i] = new StringBuffer(str, newLineStart);
      }
    }
    const textBuffer = new PieceTreeTextBuffer(chunks, this._bom, eol, this._containsRTL, this._containsUnusualLineTerminators, this._isBasicASCII, this._normalizeEOL);
    return { textBuffer, disposable: textBuffer };
  }
  getFirstLineText(lengthLimit) {
    return this._chunks[0].buffer.substr(0, lengthLimit).split(/\r\n|\r|\n/)[0];
  }
};
var PieceTreeTextBufferBuilder = class {
  constructor() {
    this.chunks = [];
    this.BOM = "";
    this._hasPreviousChar = false;
    this._previousChar = 0;
    this._tmpLineStarts = [];
    this.cr = 0;
    this.lf = 0;
    this.crlf = 0;
    this.containsRTL = false;
    this.containsUnusualLineTerminators = false;
    this.isBasicASCII = true;
  }
  acceptChunk(chunk) {
    if (chunk.length === 0) {
      return;
    }
    if (this.chunks.length === 0) {
      if (startsWithUTF8BOM(chunk)) {
        this.BOM = UTF8_BOM_CHARACTER;
        chunk = chunk.substr(1);
      }
    }
    const lastChar = chunk.charCodeAt(chunk.length - 1);
    if (lastChar === 13 || lastChar >= 55296 && lastChar <= 56319) {
      this._acceptChunk1(chunk.substr(0, chunk.length - 1), false);
      this._hasPreviousChar = true;
      this._previousChar = lastChar;
    } else {
      this._acceptChunk1(chunk, false);
      this._hasPreviousChar = false;
      this._previousChar = lastChar;
    }
  }
  _acceptChunk1(chunk, allowEmptyStrings) {
    if (!allowEmptyStrings && chunk.length === 0) {
      return;
    }
    if (this._hasPreviousChar) {
      this._acceptChunk2(String.fromCharCode(this._previousChar) + chunk);
    } else {
      this._acceptChunk2(chunk);
    }
  }
  _acceptChunk2(chunk) {
    const lineStarts = createLineStarts(this._tmpLineStarts, chunk);
    this.chunks.push(new StringBuffer(chunk, lineStarts.lineStarts));
    this.cr += lineStarts.cr;
    this.lf += lineStarts.lf;
    this.crlf += lineStarts.crlf;
    if (!lineStarts.isBasicASCII) {
      this.isBasicASCII = false;
      if (!this.containsRTL) {
        this.containsRTL = containsRTL(chunk);
      }
      if (!this.containsUnusualLineTerminators) {
        this.containsUnusualLineTerminators = containsUnusualLineTerminators(chunk);
      }
    }
  }
  finish(normalizeEOL = true) {
    this._finish();
    return new PieceTreeTextBufferFactory(this.chunks, this.BOM, this.cr, this.lf, this.crlf, this.containsRTL, this.containsUnusualLineTerminators, this.isBasicASCII, normalizeEOL);
  }
  _finish() {
    if (this.chunks.length === 0) {
      this._acceptChunk1("", true);
    }
    if (this._hasPreviousChar) {
      this._hasPreviousChar = false;
      const lastChunk = this.chunks[this.chunks.length - 1];
      lastChunk.buffer += String.fromCharCode(this._previousChar);
      const newLineStarts = createLineStartsFast(lastChunk.buffer);
      lastChunk.lineStarts = newLineStarts;
      if (this._previousChar === 13) {
        this.cr++;
      }
    }
  }
};

// out-build/vs/base/common/extpath.js
function isPathSeparator2(code) {
  return code === 47 || code === 92;
}
function toSlashes(osPath) {
  return osPath.replace(/[\\/]/g, posix.sep);
}
function toPosixPath(osPath) {
  if (osPath.indexOf("/") === -1) {
    osPath = toSlashes(osPath);
  }
  if (/^[a-zA-Z]:(\/|$)/.test(osPath)) {
    osPath = "/" + osPath;
  }
  return osPath;
}
function getRoot(path, sep2 = posix.sep) {
  if (!path) {
    return "";
  }
  const len = path.length;
  const firstLetter = path.charCodeAt(0);
  if (isPathSeparator2(firstLetter)) {
    if (isPathSeparator2(path.charCodeAt(1))) {
      if (!isPathSeparator2(path.charCodeAt(2))) {
        let pos2 = 3;
        const start = pos2;
        for (; pos2 < len; pos2++) {
          if (isPathSeparator2(path.charCodeAt(pos2))) {
            break;
          }
        }
        if (start !== pos2 && !isPathSeparator2(path.charCodeAt(pos2 + 1))) {
          pos2 += 1;
          for (; pos2 < len; pos2++) {
            if (isPathSeparator2(path.charCodeAt(pos2))) {
              return path.slice(0, pos2 + 1).replace(/[\\/]/g, sep2);
            }
          }
        }
      }
    }
    return sep2;
  } else if (isWindowsDriveLetter(firstLetter)) {
    if (path.charCodeAt(1) === 58) {
      if (isPathSeparator2(path.charCodeAt(2))) {
        return path.slice(0, 2) + sep2;
      } else {
        return path.slice(0, 2);
      }
    }
  }
  let pos = path.indexOf("://");
  if (pos !== -1) {
    pos += 3;
    for (; pos < len; pos++) {
      if (isPathSeparator2(path.charCodeAt(pos))) {
        return path.slice(0, pos + 1);
      }
    }
  }
  return "";
}
function isEqualOrParent(base, parentCandidate, ignoreCase, separator = sep) {
  if (base === parentCandidate) {
    return true;
  }
  if (!base || !parentCandidate) {
    return false;
  }
  if (parentCandidate.length > base.length) {
    return false;
  }
  if (ignoreCase) {
    const beginsWith = startsWithIgnoreCase(base, parentCandidate);
    if (!beginsWith) {
      return false;
    }
    if (parentCandidate.length === base.length) {
      return true;
    }
    let sepOffset = parentCandidate.length;
    if (parentCandidate.charAt(parentCandidate.length - 1) === separator) {
      sepOffset--;
    }
    return base.charAt(sepOffset) === separator;
  }
  if (parentCandidate.charAt(parentCandidate.length - 1) !== separator) {
    parentCandidate += separator;
  }
  return base.indexOf(parentCandidate) === 0;
}
function isWindowsDriveLetter(char0) {
  return char0 >= 65 && char0 <= 90 || char0 >= 97 && char0 <= 122;
}

// out-build/vs/base/common/network.js
var Schemas;
(function(Schemas2) {
  Schemas2.inMemory = "inmemory";
  Schemas2.vscode = "vscode";
  Schemas2.internal = "private";
  Schemas2.walkThrough = "walkThrough";
  Schemas2.walkThroughSnippet = "walkThroughSnippet";
  Schemas2.http = "http";
  Schemas2.https = "https";
  Schemas2.file = "file";
  Schemas2.mailto = "mailto";
  Schemas2.untitled = "untitled";
  Schemas2.data = "data";
  Schemas2.command = "command";
  Schemas2.vscodeRemote = "vscode-remote";
  Schemas2.vscodeRemoteResource = "vscode-remote-resource";
  Schemas2.vscodeManagedRemoteResource = "vscode-managed-remote-resource";
  Schemas2.vscodeUserData = "vscode-userdata";
  Schemas2.vscodeCustomEditor = "vscode-custom-editor";
  Schemas2.vscodeNotebookCell = "vscode-notebook-cell";
  Schemas2.vscodeNotebookCellMetadata = "vscode-notebook-cell-metadata";
  Schemas2.vscodeNotebookCellMetadataDiff = "vscode-notebook-cell-metadata-diff";
  Schemas2.vscodeNotebookCellOutput = "vscode-notebook-cell-output";
  Schemas2.vscodeNotebookCellOutputDiff = "vscode-notebook-cell-output-diff";
  Schemas2.vscodeNotebookMetadata = "vscode-notebook-metadata";
  Schemas2.vscodeInteractiveInput = "vscode-interactive-input";
  Schemas2.vscodeSettings = "vscode-settings";
  Schemas2.vscodeWorkspaceTrust = "vscode-workspace-trust";
  Schemas2.vscodeTerminal = "vscode-terminal";
  Schemas2.vscodeChatCodeBlock = "vscode-chat-code-block";
  Schemas2.vscodeChatCodeCompareBlock = "vscode-chat-code-compare-block";
  Schemas2.vscodeChatEditor = "vscode-chat-editor";
  Schemas2.vscodeChatInput = "chatSessionInput";
  Schemas2.vscodeChatSession = "vscode-chat-session";
  Schemas2.webviewPanel = "webview-panel";
  Schemas2.vscodeWebview = "vscode-webview";
  Schemas2.extension = "extension";
  Schemas2.vscodeFileResource = "vscode-file";
  Schemas2.tmp = "tmp";
  Schemas2.vsls = "vsls";
  Schemas2.vscodeSourceControl = "vscode-scm";
  Schemas2.commentsInput = "comment";
  Schemas2.codeSetting = "code-setting";
  Schemas2.outputChannel = "output";
  Schemas2.accessibleView = "accessible-view";
  Schemas2.chatEditingSnapshotScheme = "chat-editing-snapshot-text-model";
  Schemas2.chatEditingModel = "chat-editing-text-model";
})(Schemas || (Schemas = {}));
var connectionTokenQueryName = "tkn";
var RemoteAuthoritiesImpl = class {
  constructor() {
    this._hosts = /* @__PURE__ */ Object.create(null);
    this._ports = /* @__PURE__ */ Object.create(null);
    this._connectionTokens = /* @__PURE__ */ Object.create(null);
    this._preferredWebSchema = "http";
    this._delegate = null;
    this._serverRootPath = "/";
  }
  setPreferredWebSchema(schema) {
    this._preferredWebSchema = schema;
  }
  setDelegate(delegate) {
    this._delegate = delegate;
  }
  setServerRootPath(product, serverBasePath) {
    this._serverRootPath = posix.join(serverBasePath ?? "/", getServerProductSegment(product));
  }
  getServerRootPath() {
    return this._serverRootPath;
  }
  get _remoteResourcesPath() {
    return posix.join(this._serverRootPath, Schemas.vscodeRemoteResource);
  }
  set(authority, host, port) {
    this._hosts[authority] = host;
    this._ports[authority] = port;
  }
  setConnectionToken(authority, connectionToken) {
    this._connectionTokens[authority] = connectionToken;
  }
  getPreferredWebSchema() {
    return this._preferredWebSchema;
  }
  rewrite(uri) {
    if (this._delegate) {
      try {
        return this._delegate(uri);
      } catch (err) {
        onUnexpectedError(err);
        return uri;
      }
    }
    const authority = uri.authority;
    let host = this._hosts[authority];
    if (host && host.indexOf(":") !== -1 && host.indexOf("[") === -1) {
      host = `[${host}]`;
    }
    const port = this._ports[authority];
    const connectionToken = this._connectionTokens[authority];
    let query = `path=${encodeURIComponent(uri.path)}`;
    if (typeof connectionToken === "string") {
      query += `&${connectionTokenQueryName}=${encodeURIComponent(connectionToken)}`;
    }
    return URI.from({
      scheme: isWeb ? this._preferredWebSchema : Schemas.vscodeRemoteResource,
      authority: `${host}:${port}`,
      path: this._remoteResourcesPath,
      query
    });
  }
};
var RemoteAuthorities = new RemoteAuthoritiesImpl();
function getServerProductSegment(product) {
  return `${product.quality ?? "oss"}-${product.commit ?? "dev"}`;
}
var VSCODE_AUTHORITY = "vscode-app";
var FileAccessImpl = class _FileAccessImpl {
  static {
    this.FALLBACK_AUTHORITY = VSCODE_AUTHORITY;
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  asBrowserUri(resourcePath) {
    const uri = this.toUri(resourcePath);
    return this.uriToBrowserUri(uri);
  }
  /**
   * Returns a URI to use in contexts where the browser is responsible
   * for loading (e.g. fetch()) or when used within the DOM.
   *
   * **Note:** use `dom.ts#asCSSUrl` whenever the URL is to be used in CSS context.
   */
  uriToBrowserUri(uri) {
    if (uri.scheme === Schemas.vscodeRemote) {
      return RemoteAuthorities.rewrite(uri);
    }
    if (
      // ...only ever for `file` resources
      uri.scheme === Schemas.file && // ...and we run in native environments
      (isNative || // ...or web worker extensions on desktop
      webWorkerOrigin === `${Schemas.vscodeFileResource}://${_FileAccessImpl.FALLBACK_AUTHORITY}`)
    ) {
      return uri.with({
        scheme: Schemas.vscodeFileResource,
        // We need to provide an authority here so that it can serve
        // as origin for network and loading matters in chromium.
        // If the URI is not coming with an authority already, we
        // add our own
        authority: uri.authority || _FileAccessImpl.FALLBACK_AUTHORITY,
        query: null,
        fragment: null
      });
    }
    return uri;
  }
  /**
   * Returns the `file` URI to use in contexts where node.js
   * is responsible for loading.
   */
  asFileUri(resourcePath) {
    const uri = this.toUri(resourcePath);
    return this.uriToFileUri(uri);
  }
  /**
   * Returns the `file` URI to use in contexts where node.js
   * is responsible for loading.
   */
  uriToFileUri(uri) {
    if (uri.scheme === Schemas.vscodeFileResource) {
      return uri.with({
        scheme: Schemas.file,
        // Only preserve the `authority` if it is different from
        // our fallback authority. This ensures we properly preserve
        // Windows UNC paths that come with their own authority.
        authority: uri.authority !== _FileAccessImpl.FALLBACK_AUTHORITY ? uri.authority : null,
        query: null,
        fragment: null
      });
    }
    return uri;
  }
  toUri(uriOrModule) {
    if (URI.isUri(uriOrModule)) {
      return uriOrModule;
    }
    if (globalThis._VSCODE_FILE_ROOT) {
      const rootUriOrPath = globalThis._VSCODE_FILE_ROOT;
      if (/^\w[\w\d+.-]*:\/\//.test(rootUriOrPath)) {
        return URI.joinPath(URI.parse(rootUriOrPath, true), uriOrModule);
      }
      const modulePath = join(rootUriOrPath, uriOrModule);
      return URI.file(modulePath);
    }
    throw new Error("Cannot determine URI for module id!");
  }
};
var FileAccess = new FileAccessImpl();
var CacheControlheaders = Object.freeze({
  "Cache-Control": "no-cache, no-store"
});
var DocumentPolicyheaders = Object.freeze({
  "Document-Policy": "include-js-call-stacks-in-crash-reports"
});
var COI;
(function(COI2) {
  const coiHeaders = /* @__PURE__ */ new Map([
    ["1", { "Cross-Origin-Opener-Policy": "same-origin" }],
    ["2", { "Cross-Origin-Embedder-Policy": "require-corp" }],
    ["3", { "Cross-Origin-Opener-Policy": "same-origin", "Cross-Origin-Embedder-Policy": "require-corp" }]
  ]);
  COI2.CoopAndCoep = Object.freeze(coiHeaders.get("3"));
  const coiSearchParamName = "vscode-coi";
  function getHeadersFromQuery(url) {
    let params;
    if (typeof url === "string") {
      params = new URL(url).searchParams;
    } else if (url instanceof URL) {
      params = url.searchParams;
    } else if (URI.isUri(url)) {
      params = new URL(url.toString(true)).searchParams;
    }
    const value = params?.get(coiSearchParamName);
    if (!value) {
      return void 0;
    }
    return coiHeaders.get(value);
  }
  COI2.getHeadersFromQuery = getHeadersFromQuery;
  function addSearchParam(urlOrSearch, coop, coep) {
    if (!globalThis.crossOriginIsolated) {
      return;
    }
    const value = coop && coep ? "3" : coep ? "2" : "1";
    if (urlOrSearch instanceof URLSearchParams) {
      urlOrSearch.set(coiSearchParamName, value);
    } else {
      urlOrSearch[coiSearchParamName] = value;
    }
  }
  COI2.addSearchParam = addSearchParam;
})(COI || (COI = {}));

// out-build/vs/base/common/resources.js
function originalFSPath(uri) {
  return uriToFsPath(uri, true);
}
var ExtUri = class {
  constructor(_ignorePathCasing) {
    this._ignorePathCasing = _ignorePathCasing;
  }
  compare(uri1, uri2, ignoreFragment = false) {
    if (uri1 === uri2) {
      return 0;
    }
    return compare(this.getComparisonKey(uri1, ignoreFragment), this.getComparisonKey(uri2, ignoreFragment));
  }
  isEqual(uri1, uri2, ignoreFragment = false) {
    if (uri1 === uri2) {
      return true;
    }
    if (!uri1 || !uri2) {
      return false;
    }
    return this.getComparisonKey(uri1, ignoreFragment) === this.getComparisonKey(uri2, ignoreFragment);
  }
  getComparisonKey(uri, ignoreFragment = false) {
    return uri.with({
      path: this._ignorePathCasing(uri) ? uri.path.toLowerCase() : void 0,
      fragment: ignoreFragment ? null : void 0
    }).toString();
  }
  ignorePathCasing(uri) {
    return this._ignorePathCasing(uri);
  }
  isEqualOrParent(base, parentCandidate, ignoreFragment = false) {
    if (base.scheme === parentCandidate.scheme) {
      if (base.scheme === Schemas.file) {
        return isEqualOrParent(originalFSPath(base), originalFSPath(parentCandidate), this._ignorePathCasing(base)) && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
      }
      if (isEqualAuthority(base.authority, parentCandidate.authority)) {
        return isEqualOrParent(base.path, parentCandidate.path, this._ignorePathCasing(base), "/") && base.query === parentCandidate.query && (ignoreFragment || base.fragment === parentCandidate.fragment);
      }
    }
    return false;
  }
  // --- path math
  joinPath(resource, ...pathFragment) {
    return URI.joinPath(resource, ...pathFragment);
  }
  basenameOrAuthority(resource) {
    return basename2(resource) || resource.authority;
  }
  basename(resource) {
    return posix.basename(resource.path);
  }
  extname(resource) {
    return posix.extname(resource.path);
  }
  dirname(resource) {
    if (resource.path.length === 0) {
      return resource;
    }
    let dirname3;
    if (resource.scheme === Schemas.file) {
      dirname3 = URI.file(dirname(originalFSPath(resource))).path;
    } else {
      dirname3 = posix.dirname(resource.path);
      if (resource.authority && dirname3.length && dirname3.charCodeAt(0) !== 47) {
        console.error(`dirname("${resource.toString})) resulted in a relative path`);
        dirname3 = "/";
      }
    }
    return resource.with({
      path: dirname3
    });
  }
  normalizePath(resource) {
    if (!resource.path.length) {
      return resource;
    }
    let normalizedPath;
    if (resource.scheme === Schemas.file) {
      normalizedPath = URI.file(normalize(originalFSPath(resource))).path;
    } else {
      normalizedPath = posix.normalize(resource.path);
    }
    return resource.with({
      path: normalizedPath
    });
  }
  relativePath(from, to) {
    if (from.scheme !== to.scheme || !isEqualAuthority(from.authority, to.authority)) {
      return void 0;
    }
    if (from.scheme === Schemas.file) {
      const relativePath2 = relative(originalFSPath(from), originalFSPath(to));
      return isWindows ? toSlashes(relativePath2) : relativePath2;
    }
    let fromPath = from.path || "/";
    const toPath = to.path || "/";
    if (this._ignorePathCasing(from)) {
      let i = 0;
      for (const len = Math.min(fromPath.length, toPath.length); i < len; i++) {
        if (fromPath.charCodeAt(i) !== toPath.charCodeAt(i)) {
          if (fromPath.charAt(i).toLowerCase() !== toPath.charAt(i).toLowerCase()) {
            break;
          }
        }
      }
      fromPath = toPath.substr(0, i) + fromPath.substr(i);
    }
    return posix.relative(fromPath, toPath);
  }
  resolvePath(base, path) {
    if (base.scheme === Schemas.file) {
      const newURI = URI.file(resolve(originalFSPath(base), path));
      return base.with({
        authority: newURI.authority,
        path: newURI.path
      });
    }
    path = toPosixPath(path);
    return base.with({
      path: posix.resolve(base.path, path)
    });
  }
  // --- misc
  isAbsolutePath(resource) {
    return !!resource.path && resource.path[0] === "/";
  }
  isEqualAuthority(a1, a2) {
    return a1 === a2 || a1 !== void 0 && a2 !== void 0 && equalsIgnoreCase(a1, a2);
  }
  hasTrailingPathSeparator(resource, sep2 = sep) {
    if (resource.scheme === Schemas.file) {
      const fsp = originalFSPath(resource);
      return fsp.length > getRoot(fsp).length && fsp[fsp.length - 1] === sep2;
    } else {
      const p = resource.path;
      return p.length > 1 && p.charCodeAt(p.length - 1) === 47 && !/^[a-zA-Z]:(\/$|\\$)/.test(resource.fsPath);
    }
  }
  removeTrailingPathSeparator(resource, sep2 = sep) {
    if (hasTrailingPathSeparator(resource, sep2)) {
      return resource.with({ path: resource.path.substr(0, resource.path.length - 1) });
    }
    return resource;
  }
  addTrailingPathSeparator(resource, sep2 = sep) {
    let isRootSep = false;
    if (resource.scheme === Schemas.file) {
      const fsp = originalFSPath(resource);
      isRootSep = fsp !== void 0 && fsp.length === getRoot(fsp).length && fsp[fsp.length - 1] === sep2;
    } else {
      sep2 = "/";
      const p = resource.path;
      isRootSep = p.length === 1 && p.charCodeAt(p.length - 1) === 47;
    }
    if (!isRootSep && !hasTrailingPathSeparator(resource, sep2)) {
      return resource.with({ path: resource.path + "/" });
    }
    return resource;
  }
};
var extUri = new ExtUri(() => false);
var extUriBiasedIgnorePathCase = new ExtUri((uri) => {
  return uri.scheme === Schemas.file ? !isLinux : true;
});
var extUriIgnorePathCase = new ExtUri((_) => true);
var isEqual = extUri.isEqual.bind(extUri);
var isEqualOrParent2 = extUri.isEqualOrParent.bind(extUri);
var getComparisonKey = extUri.getComparisonKey.bind(extUri);
var basenameOrAuthority = extUri.basenameOrAuthority.bind(extUri);
var basename2 = extUri.basename.bind(extUri);
var extname2 = extUri.extname.bind(extUri);
var dirname2 = extUri.dirname.bind(extUri);
var joinPath = extUri.joinPath.bind(extUri);
var normalizePath = extUri.normalizePath.bind(extUri);
var relativePath = extUri.relativePath.bind(extUri);
var resolvePath = extUri.resolvePath.bind(extUri);
var isAbsolutePath = extUri.isAbsolutePath.bind(extUri);
var isEqualAuthority = extUri.isEqualAuthority.bind(extUri);
var hasTrailingPathSeparator = extUri.hasTrailingPathSeparator.bind(extUri);
var removeTrailingPathSeparator = extUri.removeTrailingPathSeparator.bind(extUri);
var addTrailingPathSeparator = extUri.addTrailingPathSeparator.bind(extUri);
var DataUri;
(function(DataUri2) {
  DataUri2.META_DATA_LABEL = "label";
  DataUri2.META_DATA_DESCRIPTION = "description";
  DataUri2.META_DATA_SIZE = "size";
  DataUri2.META_DATA_MIME = "mime";
  function parseMetaData(dataUri) {
    const metadata = /* @__PURE__ */ new Map();
    const meta = dataUri.path.substring(dataUri.path.indexOf(";") + 1, dataUri.path.lastIndexOf(";"));
    meta.split(";").forEach((property) => {
      const [key, value] = property.split(":");
      if (key && value) {
        metadata.set(key, value);
      }
    });
    const mime = dataUri.path.substring(0, dataUri.path.indexOf(";"));
    if (mime) {
      metadata.set(DataUri2.META_DATA_MIME, mime);
    }
    return metadata;
  }
  DataUri2.parseMetaData = parseMetaData;
})(DataUri || (DataUri = {}));

// out-build/vs/base/common/symbols.js
var MicrotaskDelay = Symbol("MicrotaskDelay");

// out-build/vs/base/common/async.js
var runWhenGlobalIdle;
var _runWhenIdle;
(function() {
  const safeGlobal = globalThis;
  if (typeof safeGlobal.requestIdleCallback !== "function" || typeof safeGlobal.cancelIdleCallback !== "function") {
    _runWhenIdle = (_targetWindow, runner, timeout) => {
      setTimeout0(() => {
        if (disposed) {
          return;
        }
        const end = Date.now() + 15;
        const deadline = {
          didTimeout: true,
          timeRemaining() {
            return Math.max(0, end - Date.now());
          }
        };
        runner(Object.freeze(deadline));
      });
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
        }
      };
    };
  } else {
    _runWhenIdle = (targetWindow, runner, timeout) => {
      const handle = targetWindow.requestIdleCallback(runner, typeof timeout === "number" ? { timeout } : void 0);
      let disposed = false;
      return {
        dispose() {
          if (disposed) {
            return;
          }
          disposed = true;
          targetWindow.cancelIdleCallback(handle);
        }
      };
    };
  }
  runWhenGlobalIdle = (runner, timeout) => _runWhenIdle(globalThis, runner, timeout);
})();
var DeferredOutcome;
(function(DeferredOutcome2) {
  DeferredOutcome2[DeferredOutcome2["Resolved"] = 0] = "Resolved";
  DeferredOutcome2[DeferredOutcome2["Rejected"] = 1] = "Rejected";
})(DeferredOutcome || (DeferredOutcome = {}));
var DeferredPromise = class {
  get isRejected() {
    return this.outcome?.outcome === 1;
  }
  get isResolved() {
    return this.outcome?.outcome === 0;
  }
  get isSettled() {
    return !!this.outcome;
  }
  get value() {
    return this.outcome?.outcome === 0 ? this.outcome?.value : void 0;
  }
  constructor() {
    this.p = new Promise((c, e) => {
      this.completeCallback = c;
      this.errorCallback = e;
    });
  }
  complete(value) {
    if (this.isSettled) {
      return Promise.resolve();
    }
    return new Promise((resolve2) => {
      this.completeCallback(value);
      this.outcome = { outcome: 0, value };
      resolve2();
    });
  }
  error(err) {
    if (this.isSettled) {
      return Promise.resolve();
    }
    return new Promise((resolve2) => {
      this.errorCallback(err);
      this.outcome = { outcome: 1, value: err };
      resolve2();
    });
  }
  settleWith(promise) {
    return promise.then((value) => this.complete(value), (error) => this.error(error));
  }
  cancel() {
    return this.error(new CancellationError());
  }
};
var Promises;
(function(Promises2) {
  async function settled(promises) {
    let firstError = void 0;
    const result = await Promise.all(promises.map((promise) => promise.then((value) => value, (error) => {
      if (!firstError) {
        firstError = error;
      }
      return void 0;
    })));
    if (typeof firstError !== "undefined") {
      throw firstError;
    }
    return result;
  }
  Promises2.settled = settled;
  function withAsyncBody(bodyFn) {
    return new Promise(async (resolve2, reject) => {
      try {
        await bodyFn(resolve2, reject);
      } catch (error) {
        reject(error);
      }
    });
  }
  Promises2.withAsyncBody = withAsyncBody;
})(Promises || (Promises = {}));
var AsyncIterableSourceState;
(function(AsyncIterableSourceState2) {
  AsyncIterableSourceState2[AsyncIterableSourceState2["Initial"] = 0] = "Initial";
  AsyncIterableSourceState2[AsyncIterableSourceState2["DoneOK"] = 1] = "DoneOK";
  AsyncIterableSourceState2[AsyncIterableSourceState2["DoneError"] = 2] = "DoneError";
})(AsyncIterableSourceState || (AsyncIterableSourceState = {}));
var AsyncIterableObject = class _AsyncIterableObject {
  static fromArray(items) {
    return new _AsyncIterableObject((writer) => {
      writer.emitMany(items);
    });
  }
  static fromPromise(promise) {
    return new _AsyncIterableObject(async (emitter) => {
      emitter.emitMany(await promise);
    });
  }
  static fromPromisesResolveOrder(promises) {
    return new _AsyncIterableObject(async (emitter) => {
      await Promise.all(promises.map(async (p) => emitter.emitOne(await p)));
    });
  }
  static merge(iterables) {
    return new _AsyncIterableObject(async (emitter) => {
      await Promise.all(iterables.map(async (iterable) => {
        for await (const item of iterable) {
          emitter.emitOne(item);
        }
      }));
    });
  }
  static {
    this.EMPTY = _AsyncIterableObject.fromArray([]);
  }
  constructor(executor, onReturn) {
    this._state = 0;
    this._results = [];
    this._error = null;
    this._onReturn = onReturn;
    this._onStateChanged = new Emitter();
    queueMicrotask(async () => {
      const writer = {
        emitOne: (item) => this.emitOne(item),
        emitMany: (items) => this.emitMany(items),
        reject: (error) => this.reject(error)
      };
      try {
        await Promise.resolve(executor(writer));
        this.resolve();
      } catch (err) {
        this.reject(err);
      } finally {
        writer.emitOne = void 0;
        writer.emitMany = void 0;
        writer.reject = void 0;
      }
    });
  }
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      next: async () => {
        do {
          if (this._state === 2) {
            throw this._error;
          }
          if (i < this._results.length) {
            return { done: false, value: this._results[i++] };
          }
          if (this._state === 1) {
            return { done: true, value: void 0 };
          }
          await Event.toPromise(this._onStateChanged.event);
        } while (true);
      },
      return: async () => {
        this._onReturn?.();
        return { done: true, value: void 0 };
      }
    };
  }
  static map(iterable, mapFn) {
    return new _AsyncIterableObject(async (emitter) => {
      for await (const item of iterable) {
        emitter.emitOne(mapFn(item));
      }
    });
  }
  map(mapFn) {
    return _AsyncIterableObject.map(this, mapFn);
  }
  static filter(iterable, filterFn) {
    return new _AsyncIterableObject(async (emitter) => {
      for await (const item of iterable) {
        if (filterFn(item)) {
          emitter.emitOne(item);
        }
      }
    });
  }
  filter(filterFn) {
    return _AsyncIterableObject.filter(this, filterFn);
  }
  static coalesce(iterable) {
    return _AsyncIterableObject.filter(iterable, (item) => !!item);
  }
  coalesce() {
    return _AsyncIterableObject.coalesce(this);
  }
  static async toPromise(iterable) {
    const result = [];
    for await (const item of iterable) {
      result.push(item);
    }
    return result;
  }
  toPromise() {
    return _AsyncIterableObject.toPromise(this);
  }
  /**
   * The value will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  emitOne(value) {
    if (this._state !== 0) {
      return;
    }
    this._results.push(value);
    this._onStateChanged.fire();
  }
  /**
   * The values will be appended at the end.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  emitMany(values) {
    if (this._state !== 0) {
      return;
    }
    this._results = this._results.concat(values);
    this._onStateChanged.fire();
  }
  /**
   * Calling `resolve()` will mark the result array as complete.
   *
   * **NOTE** `resolve()` must be called, otherwise all consumers of this iterable will hang indefinitely, similar to a non-resolved promise.
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  resolve() {
    if (this._state !== 0) {
      return;
    }
    this._state = 1;
    this._onStateChanged.fire();
  }
  /**
   * Writing an error will permanently invalidate this iterable.
   * The current users will receive an error thrown, as will all future users.
   *
   * **NOTE** If `resolve()` or `reject()` have already been called, this method has no effect.
   */
  reject(error) {
    if (this._state !== 0) {
      return;
    }
    this._state = 2;
    this._error = error;
    this._onStateChanged.fire();
  }
};
var ProducerConsumer = class {
  constructor() {
    this._unsatisfiedConsumers = [];
    this._unconsumedValues = [];
  }
  get hasFinalValue() {
    return !!this._finalValue;
  }
  produce(value) {
    this._ensureNoFinalValue();
    if (this._unsatisfiedConsumers.length > 0) {
      const deferred = this._unsatisfiedConsumers.shift();
      this._resolveOrRejectDeferred(deferred, value);
    } else {
      this._unconsumedValues.push(value);
    }
  }
  produceFinal(value) {
    this._ensureNoFinalValue();
    this._finalValue = value;
    for (const deferred of this._unsatisfiedConsumers) {
      this._resolveOrRejectDeferred(deferred, value);
    }
    this._unsatisfiedConsumers.length = 0;
  }
  _ensureNoFinalValue() {
    if (this._finalValue) {
      throw new BugIndicatingError("ProducerConsumer: cannot produce after final value has been set");
    }
  }
  _resolveOrRejectDeferred(deferred, value) {
    if (value.ok) {
      deferred.complete(value.value);
    } else {
      deferred.error(value.error);
    }
  }
  consume() {
    if (this._unconsumedValues.length > 0 || this._finalValue) {
      const value = this._unconsumedValues.length > 0 ? this._unconsumedValues.shift() : this._finalValue;
      if (value.ok) {
        return Promise.resolve(value.value);
      } else {
        return Promise.reject(value.error);
      }
    } else {
      const deferred = new DeferredPromise();
      this._unsatisfiedConsumers.push(deferred);
      return deferred.p;
    }
  }
};
var AsyncIterableProducer = class _AsyncIterableProducer {
  constructor(executor, _onReturn) {
    this._onReturn = _onReturn;
    this._producerConsumer = new ProducerConsumer();
    this._iterator = {
      next: () => this._producerConsumer.consume(),
      return: () => {
        this._onReturn?.();
        return Promise.resolve({ done: true, value: void 0 });
      },
      throw: async (e) => {
        this._finishError(e);
        return { done: true, value: void 0 };
      }
    };
    queueMicrotask(async () => {
      const p = executor({
        emitOne: (value) => this._producerConsumer.produce({ ok: true, value: { done: false, value } }),
        emitMany: (values) => {
          for (const value of values) {
            this._producerConsumer.produce({ ok: true, value: { done: false, value } });
          }
        },
        reject: (error) => this._finishError(error)
      });
      if (!this._producerConsumer.hasFinalValue) {
        try {
          await p;
          this._finishOk();
        } catch (error) {
          this._finishError(error);
        }
      }
    });
  }
  static fromArray(items) {
    return new _AsyncIterableProducer((writer) => {
      writer.emitMany(items);
    });
  }
  static fromPromise(promise) {
    return new _AsyncIterableProducer(async (emitter) => {
      emitter.emitMany(await promise);
    });
  }
  static fromPromisesResolveOrder(promises) {
    return new _AsyncIterableProducer(async (emitter) => {
      await Promise.all(promises.map(async (p) => emitter.emitOne(await p)));
    });
  }
  static merge(iterables) {
    return new _AsyncIterableProducer(async (emitter) => {
      await Promise.all(iterables.map(async (iterable) => {
        for await (const item of iterable) {
          emitter.emitOne(item);
        }
      }));
    });
  }
  static {
    this.EMPTY = _AsyncIterableProducer.fromArray([]);
  }
  static map(iterable, mapFn) {
    return new _AsyncIterableProducer(async (emitter) => {
      for await (const item of iterable) {
        emitter.emitOne(mapFn(item));
      }
    });
  }
  map(mapFn) {
    return _AsyncIterableProducer.map(this, mapFn);
  }
  static coalesce(iterable) {
    return _AsyncIterableProducer.filter(iterable, (item) => !!item);
  }
  coalesce() {
    return _AsyncIterableProducer.coalesce(this);
  }
  static filter(iterable, filterFn) {
    return new _AsyncIterableProducer(async (emitter) => {
      for await (const item of iterable) {
        if (filterFn(item)) {
          emitter.emitOne(item);
        }
      }
    });
  }
  filter(filterFn) {
    return _AsyncIterableProducer.filter(this, filterFn);
  }
  _finishOk() {
    if (!this._producerConsumer.hasFinalValue) {
      this._producerConsumer.produceFinal({ ok: true, value: { done: true, value: void 0 } });
    }
  }
  _finishError(error) {
    if (!this._producerConsumer.hasFinalValue) {
      this._producerConsumer.produceFinal({ ok: false, error });
    }
  }
  [Symbol.asyncIterator]() {
    return this._iterator;
  }
};
var AsyncReaderEndOfStream = Symbol("AsyncReaderEndOfStream");

// out-build/vs/base/common/glob.js
var CACHE = new LRUCache(1e4);

// out-build/vs/base/common/mime.js
var Mimes = Object.freeze({
  text: "text/plain",
  binary: "application/octet-stream",
  unknown: "application/unknown",
  markdown: "text/markdown",
  latex: "text/latex",
  uriList: "text/uri-list",
  html: "text/html"
});

// out-build/vs/platform/contextkey/common/scanner.js
var TokenType;
(function(TokenType2) {
  TokenType2[TokenType2["LParen"] = 0] = "LParen";
  TokenType2[TokenType2["RParen"] = 1] = "RParen";
  TokenType2[TokenType2["Neg"] = 2] = "Neg";
  TokenType2[TokenType2["Eq"] = 3] = "Eq";
  TokenType2[TokenType2["NotEq"] = 4] = "NotEq";
  TokenType2[TokenType2["Lt"] = 5] = "Lt";
  TokenType2[TokenType2["LtEq"] = 6] = "LtEq";
  TokenType2[TokenType2["Gt"] = 7] = "Gt";
  TokenType2[TokenType2["GtEq"] = 8] = "GtEq";
  TokenType2[TokenType2["RegexOp"] = 9] = "RegexOp";
  TokenType2[TokenType2["RegexStr"] = 10] = "RegexStr";
  TokenType2[TokenType2["True"] = 11] = "True";
  TokenType2[TokenType2["False"] = 12] = "False";
  TokenType2[TokenType2["In"] = 13] = "In";
  TokenType2[TokenType2["Not"] = 14] = "Not";
  TokenType2[TokenType2["And"] = 15] = "And";
  TokenType2[TokenType2["Or"] = 16] = "Or";
  TokenType2[TokenType2["Str"] = 17] = "Str";
  TokenType2[TokenType2["QuotedStr"] = 18] = "QuotedStr";
  TokenType2[TokenType2["Error"] = 19] = "Error";
  TokenType2[TokenType2["EOF"] = 20] = "EOF";
})(TokenType || (TokenType = {}));
function hintDidYouMean(...meant) {
  switch (meant.length) {
    case 1:
      return localize(1846, null, meant[0]);
    case 2:
      return localize(1847, null, meant[0], meant[1]);
    case 3:
      return localize(1848, null, meant[0], meant[1], meant[2]);
    default:
      return void 0;
  }
}
var hintDidYouForgetToOpenOrCloseQuote = localize(1849, null);
var hintDidYouForgetToEscapeSlash = localize(1850, null);
var Scanner = class _Scanner {
  constructor() {
    this._input = "";
    this._start = 0;
    this._current = 0;
    this._tokens = [];
    this._errors = [];
    this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
  }
  static getLexeme(token) {
    switch (token.type) {
      case 0:
        return "(";
      case 1:
        return ")";
      case 2:
        return "!";
      case 3:
        return token.isTripleEq ? "===" : "==";
      case 4:
        return token.isTripleEq ? "!==" : "!=";
      case 5:
        return "<";
      case 6:
        return "<=";
      case 7:
        return ">=";
      case 8:
        return ">=";
      case 9:
        return "=~";
      case 10:
        return token.lexeme;
      case 11:
        return "true";
      case 12:
        return "false";
      case 13:
        return "in";
      case 14:
        return "not";
      case 15:
        return "&&";
      case 16:
        return "||";
      case 17:
        return token.lexeme;
      case 18:
        return token.lexeme;
      case 19:
        return token.lexeme;
      case 20:
        return "EOF";
      default:
        throw illegalState(`unhandled token type: ${JSON.stringify(token)}; have you forgotten to add a case?`);
    }
  }
  static {
    this._regexFlags = new Set(["i", "g", "s", "m", "y", "u"].map((ch) => ch.charCodeAt(0)));
  }
  static {
    this._keywords = /* @__PURE__ */ new Map([
      [
        "not",
        14
        /* TokenType.Not */
      ],
      [
        "in",
        13
        /* TokenType.In */
      ],
      [
        "false",
        12
        /* TokenType.False */
      ],
      [
        "true",
        11
        /* TokenType.True */
      ]
    ]);
  }
  get errors() {
    return this._errors;
  }
  reset(value) {
    this._input = value;
    this._start = 0;
    this._current = 0;
    this._tokens = [];
    this._errors = [];
    return this;
  }
  scan() {
    while (!this._isAtEnd()) {
      this._start = this._current;
      const ch = this._advance();
      switch (ch) {
        case 40:
          this._addToken(
            0
            /* TokenType.LParen */
          );
          break;
        case 41:
          this._addToken(
            1
            /* TokenType.RParen */
          );
          break;
        case 33:
          if (this._match(
            61
            /* CharCode.Equals */
          )) {
            const isTripleEq = this._match(
              61
              /* CharCode.Equals */
            );
            this._tokens.push({ type: 4, offset: this._start, isTripleEq });
          } else {
            this._addToken(
              2
              /* TokenType.Neg */
            );
          }
          break;
        case 39:
          this._quotedString();
          break;
        case 47:
          this._regex();
          break;
        case 61:
          if (this._match(
            61
            /* CharCode.Equals */
          )) {
            const isTripleEq = this._match(
              61
              /* CharCode.Equals */
            );
            this._tokens.push({ type: 3, offset: this._start, isTripleEq });
          } else if (this._match(
            126
            /* CharCode.Tilde */
          )) {
            this._addToken(
              9
              /* TokenType.RegexOp */
            );
          } else {
            this._error(hintDidYouMean("==", "=~"));
          }
          break;
        case 60:
          this._addToken(
            this._match(
              61
              /* CharCode.Equals */
            ) ? 6 : 5
            /* TokenType.Lt */
          );
          break;
        case 62:
          this._addToken(
            this._match(
              61
              /* CharCode.Equals */
            ) ? 8 : 7
            /* TokenType.Gt */
          );
          break;
        case 38:
          if (this._match(
            38
            /* CharCode.Ampersand */
          )) {
            this._addToken(
              15
              /* TokenType.And */
            );
          } else {
            this._error(hintDidYouMean("&&"));
          }
          break;
        case 124:
          if (this._match(
            124
            /* CharCode.Pipe */
          )) {
            this._addToken(
              16
              /* TokenType.Or */
            );
          } else {
            this._error(hintDidYouMean("||"));
          }
          break;
        // TODO@ulugbekna: 1) rewrite using a regex 2) reconsider what characters are considered whitespace, including unicode, nbsp, etc.
        case 32:
        case 13:
        case 9:
        case 10:
        case 160:
          break;
        default:
          this._string();
      }
    }
    this._start = this._current;
    this._addToken(
      20
      /* TokenType.EOF */
    );
    return Array.from(this._tokens);
  }
  _match(expected) {
    if (this._isAtEnd()) {
      return false;
    }
    if (this._input.charCodeAt(this._current) !== expected) {
      return false;
    }
    this._current++;
    return true;
  }
  _advance() {
    return this._input.charCodeAt(this._current++);
  }
  _peek() {
    return this._isAtEnd() ? 0 : this._input.charCodeAt(this._current);
  }
  _addToken(type) {
    this._tokens.push({ type, offset: this._start });
  }
  _error(additional) {
    const offset = this._start;
    const lexeme = this._input.substring(this._start, this._current);
    const errToken = { type: 19, offset: this._start, lexeme };
    this._errors.push({ offset, lexeme, additionalInfo: additional });
    this._tokens.push(errToken);
  }
  _string() {
    this.stringRe.lastIndex = this._start;
    const match2 = this.stringRe.exec(this._input);
    if (match2) {
      this._current = this._start + match2[0].length;
      const lexeme = this._input.substring(this._start, this._current);
      const keyword = _Scanner._keywords.get(lexeme);
      if (keyword) {
        this._addToken(keyword);
      } else {
        this._tokens.push({ type: 17, lexeme, offset: this._start });
      }
    }
  }
  // captures the lexeme without the leading and trailing '
  _quotedString() {
    while (this._peek() !== 39 && !this._isAtEnd()) {
      this._advance();
    }
    if (this._isAtEnd()) {
      this._error(hintDidYouForgetToOpenOrCloseQuote);
      return;
    }
    this._advance();
    this._tokens.push({ type: 18, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
  }
  /*
   * Lexing a regex expression: /.../[igsmyu]*
   * Based on https://github.com/microsoft/TypeScript/blob/9247ef115e617805983740ba795d7a8164babf89/src/compiler/scanner.ts#L2129-L2181
   *
   * Note that we want slashes within a regex to be escaped, e.g., /file:\\/\\/\\// should match `file:///`
   */
  _regex() {
    let p = this._current;
    let inEscape = false;
    let inCharacterClass = false;
    while (true) {
      if (p >= this._input.length) {
        this._current = p;
        this._error(hintDidYouForgetToEscapeSlash);
        return;
      }
      const ch = this._input.charCodeAt(p);
      if (inEscape) {
        inEscape = false;
      } else if (ch === 47 && !inCharacterClass) {
        p++;
        break;
      } else if (ch === 91) {
        inCharacterClass = true;
      } else if (ch === 92) {
        inEscape = true;
      } else if (ch === 93) {
        inCharacterClass = false;
      }
      p++;
    }
    while (p < this._input.length && _Scanner._regexFlags.has(this._input.charCodeAt(p))) {
      p++;
    }
    this._current = p;
    const lexeme = this._input.substring(this._start, this._current);
    this._tokens.push({ type: 10, lexeme, offset: this._start });
  }
  _isAtEnd() {
    return this._current >= this._input.length;
  }
};

// out-build/vs/platform/instantiation/common/instantiation.js
var _util;
(function(_util2) {
  _util2.serviceIds = /* @__PURE__ */ new Map();
  _util2.DI_TARGET = "$di$target";
  _util2.DI_DEPENDENCIES = "$di$dependencies";
  function getServiceDependencies(ctor) {
    return ctor[_util2.DI_DEPENDENCIES] || [];
  }
  _util2.getServiceDependencies = getServiceDependencies;
})(_util || (_util = {}));
var IInstantiationService = createDecorator("instantiationService");
function storeServiceDependency(id2, target, index) {
  if (target[_util.DI_TARGET] === target) {
    target[_util.DI_DEPENDENCIES].push({ id: id2, index });
  } else {
    target[_util.DI_DEPENDENCIES] = [{ id: id2, index }];
    target[_util.DI_TARGET] = target;
  }
}
function createDecorator(serviceId) {
  if (_util.serviceIds.has(serviceId)) {
    return _util.serviceIds.get(serviceId);
  }
  const id2 = function(target, key, index) {
    if (arguments.length !== 3) {
      throw new Error("@IServiceName-decorator can only be used to decorate a parameter");
    }
    storeServiceDependency(id2, target, index);
  };
  id2.toString = () => serviceId;
  _util.serviceIds.set(serviceId, id2);
  return id2;
}

// out-build/vs/platform/contextkey/common/contextkey.js
var CONSTANT_VALUES = /* @__PURE__ */ new Map();
CONSTANT_VALUES.set("false", false);
CONSTANT_VALUES.set("true", true);
CONSTANT_VALUES.set("isMac", isMacintosh);
CONSTANT_VALUES.set("isLinux", isLinux);
CONSTANT_VALUES.set("isWindows", isWindows);
CONSTANT_VALUES.set("isWeb", isWeb);
CONSTANT_VALUES.set("isMacNative", isMacintosh && !isWeb);
CONSTANT_VALUES.set("isEdge", isEdge);
CONSTANT_VALUES.set("isFirefox", isFirefox);
CONSTANT_VALUES.set("isChrome", isChrome);
CONSTANT_VALUES.set("isSafari", isSafari);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var ContextKeyExprType;
(function(ContextKeyExprType2) {
  ContextKeyExprType2[ContextKeyExprType2["False"] = 0] = "False";
  ContextKeyExprType2[ContextKeyExprType2["True"] = 1] = "True";
  ContextKeyExprType2[ContextKeyExprType2["Defined"] = 2] = "Defined";
  ContextKeyExprType2[ContextKeyExprType2["Not"] = 3] = "Not";
  ContextKeyExprType2[ContextKeyExprType2["Equals"] = 4] = "Equals";
  ContextKeyExprType2[ContextKeyExprType2["NotEquals"] = 5] = "NotEquals";
  ContextKeyExprType2[ContextKeyExprType2["And"] = 6] = "And";
  ContextKeyExprType2[ContextKeyExprType2["Regex"] = 7] = "Regex";
  ContextKeyExprType2[ContextKeyExprType2["NotRegex"] = 8] = "NotRegex";
  ContextKeyExprType2[ContextKeyExprType2["Or"] = 9] = "Or";
  ContextKeyExprType2[ContextKeyExprType2["In"] = 10] = "In";
  ContextKeyExprType2[ContextKeyExprType2["NotIn"] = 11] = "NotIn";
  ContextKeyExprType2[ContextKeyExprType2["Greater"] = 12] = "Greater";
  ContextKeyExprType2[ContextKeyExprType2["GreaterEquals"] = 13] = "GreaterEquals";
  ContextKeyExprType2[ContextKeyExprType2["Smaller"] = 14] = "Smaller";
  ContextKeyExprType2[ContextKeyExprType2["SmallerEquals"] = 15] = "SmallerEquals";
})(ContextKeyExprType || (ContextKeyExprType = {}));
var defaultConfig = {
  regexParsingWithErrorRecovery: true
};
var errorEmptyString = localize(1826, null);
var hintEmptyString = localize(1827, null);
var errorNoInAfterNot = localize(1828, null);
var errorClosingParenthesis = localize(1829, null);
var errorUnexpectedToken = localize(1830, null);
var hintUnexpectedToken = localize(1831, null);
var errorUnexpectedEOF = localize(1832, null);
var hintUnexpectedEOF = localize(1833, null);
var Parser = class _Parser {
  static {
    this._parseError = new Error();
  }
  get lexingErrors() {
    return this._scanner.errors;
  }
  get parsingErrors() {
    return this._parsingErrors;
  }
  constructor(_config = defaultConfig) {
    this._config = _config;
    this._scanner = new Scanner();
    this._tokens = [];
    this._current = 0;
    this._parsingErrors = [];
    this._flagsGYRe = /g|y/g;
  }
  /**
   * Parse a context key expression.
   *
   * @param input the expression to parse
   * @returns the parsed expression or `undefined` if there's an error - call `lexingErrors` and `parsingErrors` to see the errors
   */
  parse(input) {
    if (input === "") {
      this._parsingErrors.push({ message: errorEmptyString, offset: 0, lexeme: "", additionalInfo: hintEmptyString });
      return void 0;
    }
    this._tokens = this._scanner.reset(input).scan();
    this._current = 0;
    this._parsingErrors = [];
    try {
      const expr = this._expr();
      if (!this._isAtEnd()) {
        const peek = this._peek();
        const additionalInfo = peek.type === 17 ? hintUnexpectedToken : void 0;
        this._parsingErrors.push({ message: errorUnexpectedToken, offset: peek.offset, lexeme: Scanner.getLexeme(peek), additionalInfo });
        throw _Parser._parseError;
      }
      return expr;
    } catch (e) {
      if (!(e === _Parser._parseError)) {
        throw e;
      }
      return void 0;
    }
  }
  _expr() {
    return this._or();
  }
  _or() {
    const expr = [this._and()];
    while (this._matchOne(
      16
      /* TokenType.Or */
    )) {
      const right = this._and();
      expr.push(right);
    }
    return expr.length === 1 ? expr[0] : ContextKeyExpr.or(...expr);
  }
  _and() {
    const expr = [this._term()];
    while (this._matchOne(
      15
      /* TokenType.And */
    )) {
      const right = this._term();
      expr.push(right);
    }
    return expr.length === 1 ? expr[0] : ContextKeyExpr.and(...expr);
  }
  _term() {
    if (this._matchOne(
      2
      /* TokenType.Neg */
    )) {
      const peek = this._peek();
      switch (peek.type) {
        case 11:
          this._advance();
          return ContextKeyFalseExpr.INSTANCE;
        case 12:
          this._advance();
          return ContextKeyTrueExpr.INSTANCE;
        case 0: {
          this._advance();
          const expr = this._expr();
          this._consume(1, errorClosingParenthesis);
          return expr?.negate();
        }
        case 17:
          this._advance();
          return ContextKeyNotExpr.create(peek.lexeme);
        default:
          throw this._errExpectedButGot(`KEY | true | false | '(' expression ')'`, peek);
      }
    }
    return this._primary();
  }
  _primary() {
    const peek = this._peek();
    switch (peek.type) {
      case 11:
        this._advance();
        return ContextKeyExpr.true();
      case 12:
        this._advance();
        return ContextKeyExpr.false();
      case 0: {
        this._advance();
        const expr = this._expr();
        this._consume(1, errorClosingParenthesis);
        return expr;
      }
      case 17: {
        const key = peek.lexeme;
        this._advance();
        if (this._matchOne(
          9
          /* TokenType.RegexOp */
        )) {
          const expr = this._peek();
          if (!this._config.regexParsingWithErrorRecovery) {
            this._advance();
            if (expr.type !== 10) {
              throw this._errExpectedButGot(`REGEX`, expr);
            }
            const regexLexeme = expr.lexeme;
            const closingSlashIndex = regexLexeme.lastIndexOf("/");
            const flags = closingSlashIndex === regexLexeme.length - 1 ? void 0 : this._removeFlagsGY(regexLexeme.substring(closingSlashIndex + 1));
            let regexp;
            try {
              regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
            } catch (e) {
              throw this._errExpectedButGot(`REGEX`, expr);
            }
            return ContextKeyRegexExpr.create(key, regexp);
          }
          switch (expr.type) {
            case 10:
            case 19: {
              const lexemeReconstruction = [expr.lexeme];
              this._advance();
              let followingToken = this._peek();
              let parenBalance = 0;
              for (let i = 0; i < expr.lexeme.length; i++) {
                if (expr.lexeme.charCodeAt(i) === 40) {
                  parenBalance++;
                } else if (expr.lexeme.charCodeAt(i) === 41) {
                  parenBalance--;
                }
              }
              while (!this._isAtEnd() && followingToken.type !== 15 && followingToken.type !== 16) {
                switch (followingToken.type) {
                  case 0:
                    parenBalance++;
                    break;
                  case 1:
                    parenBalance--;
                    break;
                  case 10:
                  case 18:
                    for (let i = 0; i < followingToken.lexeme.length; i++) {
                      if (followingToken.lexeme.charCodeAt(i) === 40) {
                        parenBalance++;
                      } else if (expr.lexeme.charCodeAt(i) === 41) {
                        parenBalance--;
                      }
                    }
                }
                if (parenBalance < 0) {
                  break;
                }
                lexemeReconstruction.push(Scanner.getLexeme(followingToken));
                this._advance();
                followingToken = this._peek();
              }
              const regexLexeme = lexemeReconstruction.join("");
              const closingSlashIndex = regexLexeme.lastIndexOf("/");
              const flags = closingSlashIndex === regexLexeme.length - 1 ? void 0 : this._removeFlagsGY(regexLexeme.substring(closingSlashIndex + 1));
              let regexp;
              try {
                regexp = new RegExp(regexLexeme.substring(1, closingSlashIndex), flags);
              } catch (e) {
                throw this._errExpectedButGot(`REGEX`, expr);
              }
              return ContextKeyExpr.regex(key, regexp);
            }
            case 18: {
              const serializedValue = expr.lexeme;
              this._advance();
              let regex = null;
              if (!isFalsyOrWhitespace(serializedValue)) {
                const start = serializedValue.indexOf("/");
                const end = serializedValue.lastIndexOf("/");
                if (start !== end && start >= 0) {
                  const value = serializedValue.slice(start + 1, end);
                  const caseIgnoreFlag = serializedValue[end + 1] === "i" ? "i" : "";
                  try {
                    regex = new RegExp(value, caseIgnoreFlag);
                  } catch (_e) {
                    throw this._errExpectedButGot(`REGEX`, expr);
                  }
                }
              }
              if (regex === null) {
                throw this._errExpectedButGot("REGEX", expr);
              }
              return ContextKeyRegexExpr.create(key, regex);
            }
            default:
              throw this._errExpectedButGot("REGEX", this._peek());
          }
        }
        if (this._matchOne(
          14
          /* TokenType.Not */
        )) {
          this._consume(13, errorNoInAfterNot);
          const right = this._value();
          return ContextKeyExpr.notIn(key, right);
        }
        const maybeOp = this._peek().type;
        switch (maybeOp) {
          case 3: {
            this._advance();
            const right = this._value();
            if (this._previous().type === 18) {
              return ContextKeyExpr.equals(key, right);
            }
            switch (right) {
              case "true":
                return ContextKeyExpr.has(key);
              case "false":
                return ContextKeyExpr.not(key);
              default:
                return ContextKeyExpr.equals(key, right);
            }
          }
          case 4: {
            this._advance();
            const right = this._value();
            if (this._previous().type === 18) {
              return ContextKeyExpr.notEquals(key, right);
            }
            switch (right) {
              case "true":
                return ContextKeyExpr.not(key);
              case "false":
                return ContextKeyExpr.has(key);
              default:
                return ContextKeyExpr.notEquals(key, right);
            }
          }
          // TODO: ContextKeyExpr.smaller(key, right) accepts only `number` as `right` AND during eval of this node, we just eval to `false` if `right` is not a number
          // consequently, package.json linter should _warn_ the user if they're passing undesired things to ops
          case 5:
            this._advance();
            return ContextKeySmallerExpr.create(key, this._value());
          case 6:
            this._advance();
            return ContextKeySmallerEqualsExpr.create(key, this._value());
          case 7:
            this._advance();
            return ContextKeyGreaterExpr.create(key, this._value());
          case 8:
            this._advance();
            return ContextKeyGreaterEqualsExpr.create(key, this._value());
          case 13:
            this._advance();
            return ContextKeyExpr.in(key, this._value());
          default:
            return ContextKeyExpr.has(key);
        }
      }
      case 20:
        this._parsingErrors.push({ message: errorUnexpectedEOF, offset: peek.offset, lexeme: "", additionalInfo: hintUnexpectedEOF });
        throw _Parser._parseError;
      default:
        throw this._errExpectedButGot(`true | false | KEY 
	| KEY '=~' REGEX 
	| KEY ('==' | '!=' | '<' | '<=' | '>' | '>=' | 'in' | 'not' 'in') value`, this._peek());
    }
  }
  _value() {
    const token = this._peek();
    switch (token.type) {
      case 17:
      case 18:
        this._advance();
        return token.lexeme;
      case 11:
        this._advance();
        return "true";
      case 12:
        this._advance();
        return "false";
      case 13:
        this._advance();
        return "in";
      default:
        return "";
    }
  }
  _removeFlagsGY(flags) {
    return flags.replaceAll(this._flagsGYRe, "");
  }
  // careful: this can throw if current token is the initial one (ie index = 0)
  _previous() {
    return this._tokens[this._current - 1];
  }
  _matchOne(token) {
    if (this._check(token)) {
      this._advance();
      return true;
    }
    return false;
  }
  _advance() {
    if (!this._isAtEnd()) {
      this._current++;
    }
    return this._previous();
  }
  _consume(type, message) {
    if (this._check(type)) {
      return this._advance();
    }
    throw this._errExpectedButGot(message, this._peek());
  }
  _errExpectedButGot(expected, got, additionalInfo) {
    const message = localize(1834, null, expected, Scanner.getLexeme(got));
    const offset = got.offset;
    const lexeme = Scanner.getLexeme(got);
    this._parsingErrors.push({ message, offset, lexeme, additionalInfo });
    return _Parser._parseError;
  }
  _check(type) {
    return this._peek().type === type;
  }
  _peek() {
    return this._tokens[this._current];
  }
  _isAtEnd() {
    return this._peek().type === 20;
  }
};
var ContextKeyExpr = class {
  static false() {
    return ContextKeyFalseExpr.INSTANCE;
  }
  static true() {
    return ContextKeyTrueExpr.INSTANCE;
  }
  static has(key) {
    return ContextKeyDefinedExpr.create(key);
  }
  static equals(key, value) {
    return ContextKeyEqualsExpr.create(key, value);
  }
  static notEquals(key, value) {
    return ContextKeyNotEqualsExpr.create(key, value);
  }
  static regex(key, value) {
    return ContextKeyRegexExpr.create(key, value);
  }
  static in(key, value) {
    return ContextKeyInExpr.create(key, value);
  }
  static notIn(key, value) {
    return ContextKeyNotInExpr.create(key, value);
  }
  static not(key) {
    return ContextKeyNotExpr.create(key);
  }
  static and(...expr) {
    return ContextKeyAndExpr.create(expr, null, true);
  }
  static or(...expr) {
    return ContextKeyOrExpr.create(expr, null, true);
  }
  static greater(key, value) {
    return ContextKeyGreaterExpr.create(key, value);
  }
  static greaterEquals(key, value) {
    return ContextKeyGreaterEqualsExpr.create(key, value);
  }
  static smaller(key, value) {
    return ContextKeySmallerExpr.create(key, value);
  }
  static smallerEquals(key, value) {
    return ContextKeySmallerEqualsExpr.create(key, value);
  }
  static {
    this._parser = new Parser({ regexParsingWithErrorRecovery: false });
  }
  static deserialize(serialized) {
    if (serialized === void 0 || serialized === null) {
      return void 0;
    }
    const expr = this._parser.parse(serialized);
    return expr;
  }
};
function cmp(a, b) {
  return a.cmp(b);
}
var ContextKeyFalseExpr = class _ContextKeyFalseExpr {
  static {
    this.INSTANCE = new _ContextKeyFalseExpr();
  }
  constructor() {
    this.type = 0;
  }
  cmp(other) {
    return this.type - other.type;
  }
  equals(other) {
    return other.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return false;
  }
  serialize() {
    return "false";
  }
  keys() {
    return [];
  }
  map(mapFnc) {
    return this;
  }
  negate() {
    return ContextKeyTrueExpr.INSTANCE;
  }
};
var ContextKeyTrueExpr = class _ContextKeyTrueExpr {
  static {
    this.INSTANCE = new _ContextKeyTrueExpr();
  }
  constructor() {
    this.type = 1;
  }
  cmp(other) {
    return this.type - other.type;
  }
  equals(other) {
    return other.type === this.type;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return true;
  }
  serialize() {
    return "true";
  }
  keys() {
    return [];
  }
  map(mapFnc) {
    return this;
  }
  negate() {
    return ContextKeyFalseExpr.INSTANCE;
  }
};
var ContextKeyDefinedExpr = class _ContextKeyDefinedExpr {
  static create(key, negated = null) {
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      return constantValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
    }
    return new _ContextKeyDefinedExpr(key, negated);
  }
  constructor(key, negated) {
    this.key = key;
    this.negated = negated;
    this.type = 2;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp1(this.key, other.key);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.key);
    if (typeof constantValue === "boolean") {
      return constantValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return !!context.getValue(this.key);
  }
  serialize() {
    return this.key;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapDefined(this.key);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyNotExpr.create(this.key, this);
    }
    return this.negated;
  }
};
var ContextKeyEqualsExpr = class _ContextKeyEqualsExpr {
  static create(key, value, negated = null) {
    if (typeof value === "boolean") {
      return value ? ContextKeyDefinedExpr.create(key, negated) : ContextKeyNotExpr.create(key, negated);
    }
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      const trueValue = constantValue ? "true" : "false";
      return value === trueValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
    }
    return new _ContextKeyEqualsExpr(key, value, negated);
  }
  constructor(key, value, negated) {
    this.key = key;
    this.value = value;
    this.negated = negated;
    this.type = 4;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.value, other.key, other.value);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.value === other.value;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.key);
    if (typeof constantValue === "boolean") {
      const trueValue = constantValue ? "true" : "false";
      return this.value === trueValue ? ContextKeyTrueExpr.INSTANCE : ContextKeyFalseExpr.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return context.getValue(this.key) == this.value;
  }
  serialize() {
    return `${this.key} == '${this.value}'`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapEquals(this.key, this.value);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyNotEqualsExpr.create(this.key, this.value, this);
    }
    return this.negated;
  }
};
var ContextKeyInExpr = class _ContextKeyInExpr {
  static create(key, valueKey) {
    return new _ContextKeyInExpr(key, valueKey);
  }
  constructor(key, valueKey) {
    this.key = key;
    this.valueKey = valueKey;
    this.type = 10;
    this.negated = null;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.valueKey, other.key, other.valueKey);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.valueKey === other.valueKey;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    const source = context.getValue(this.valueKey);
    const item = context.getValue(this.key);
    if (Array.isArray(source)) {
      return source.includes(item);
    }
    if (typeof item === "string" && typeof source === "object" && source !== null) {
      return hasOwnProperty.call(source, item);
    }
    return false;
  }
  serialize() {
    return `${this.key} in '${this.valueKey}'`;
  }
  keys() {
    return [this.key, this.valueKey];
  }
  map(mapFnc) {
    return mapFnc.mapIn(this.key, this.valueKey);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyNotInExpr.create(this.key, this.valueKey);
    }
    return this.negated;
  }
};
var ContextKeyNotInExpr = class _ContextKeyNotInExpr {
  static create(key, valueKey) {
    return new _ContextKeyNotInExpr(key, valueKey);
  }
  constructor(key, valueKey) {
    this.key = key;
    this.valueKey = valueKey;
    this.type = 11;
    this._negated = ContextKeyInExpr.create(key, valueKey);
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return this._negated.cmp(other._negated);
  }
  equals(other) {
    if (other.type === this.type) {
      return this._negated.equals(other._negated);
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return !this._negated.evaluate(context);
  }
  serialize() {
    return `${this.key} not in '${this.valueKey}'`;
  }
  keys() {
    return this._negated.keys();
  }
  map(mapFnc) {
    return mapFnc.mapNotIn(this.key, this.valueKey);
  }
  negate() {
    return this._negated;
  }
};
var ContextKeyNotEqualsExpr = class _ContextKeyNotEqualsExpr {
  static create(key, value, negated = null) {
    if (typeof value === "boolean") {
      if (value) {
        return ContextKeyNotExpr.create(key, negated);
      }
      return ContextKeyDefinedExpr.create(key, negated);
    }
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      const falseValue = constantValue ? "true" : "false";
      return value === falseValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
    }
    return new _ContextKeyNotEqualsExpr(key, value, negated);
  }
  constructor(key, value, negated) {
    this.key = key;
    this.value = value;
    this.negated = negated;
    this.type = 5;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.value, other.key, other.value);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.value === other.value;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.key);
    if (typeof constantValue === "boolean") {
      const falseValue = constantValue ? "true" : "false";
      return this.value === falseValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return context.getValue(this.key) != this.value;
  }
  serialize() {
    return `${this.key} != '${this.value}'`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapNotEquals(this.key, this.value);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyEqualsExpr.create(this.key, this.value, this);
    }
    return this.negated;
  }
};
var ContextKeyNotExpr = class _ContextKeyNotExpr {
  static create(key, negated = null) {
    const constantValue = CONSTANT_VALUES.get(key);
    if (typeof constantValue === "boolean") {
      return constantValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
    }
    return new _ContextKeyNotExpr(key, negated);
  }
  constructor(key, negated) {
    this.key = key;
    this.negated = negated;
    this.type = 3;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp1(this.key, other.key);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key;
    }
    return false;
  }
  substituteConstants() {
    const constantValue = CONSTANT_VALUES.get(this.key);
    if (typeof constantValue === "boolean") {
      return constantValue ? ContextKeyFalseExpr.INSTANCE : ContextKeyTrueExpr.INSTANCE;
    }
    return this;
  }
  evaluate(context) {
    return !context.getValue(this.key);
  }
  serialize() {
    return `!${this.key}`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapNot(this.key);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyDefinedExpr.create(this.key, this);
    }
    return this.negated;
  }
};
function withFloatOrStr(value, callback) {
  if (typeof value === "string") {
    const n = parseFloat(value);
    if (!isNaN(n)) {
      value = n;
    }
  }
  if (typeof value === "string" || typeof value === "number") {
    return callback(value);
  }
  return ContextKeyFalseExpr.INSTANCE;
}
var ContextKeyGreaterExpr = class _ContextKeyGreaterExpr {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _ContextKeyGreaterExpr(key, value, negated));
  }
  constructor(key, value, negated) {
    this.key = key;
    this.value = value;
    this.negated = negated;
    this.type = 12;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.value, other.key, other.value);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.value === other.value;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.value === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.key)) > this.value;
  }
  serialize() {
    return `${this.key} > ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapGreater(this.key, this.value);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeySmallerEqualsExpr.create(this.key, this.value, this);
    }
    return this.negated;
  }
};
var ContextKeyGreaterEqualsExpr = class _ContextKeyGreaterEqualsExpr {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _ContextKeyGreaterEqualsExpr(key, value, negated));
  }
  constructor(key, value, negated) {
    this.key = key;
    this.value = value;
    this.negated = negated;
    this.type = 13;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.value, other.key, other.value);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.value === other.value;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.value === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.key)) >= this.value;
  }
  serialize() {
    return `${this.key} >= ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapGreaterEquals(this.key, this.value);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeySmallerExpr.create(this.key, this.value, this);
    }
    return this.negated;
  }
};
var ContextKeySmallerExpr = class _ContextKeySmallerExpr {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _ContextKeySmallerExpr(key, value, negated));
  }
  constructor(key, value, negated) {
    this.key = key;
    this.value = value;
    this.negated = negated;
    this.type = 14;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.value, other.key, other.value);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.value === other.value;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.value === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.key)) < this.value;
  }
  serialize() {
    return `${this.key} < ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapSmaller(this.key, this.value);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyGreaterEqualsExpr.create(this.key, this.value, this);
    }
    return this.negated;
  }
};
var ContextKeySmallerEqualsExpr = class _ContextKeySmallerEqualsExpr {
  static create(key, _value, negated = null) {
    return withFloatOrStr(_value, (value) => new _ContextKeySmallerEqualsExpr(key, value, negated));
  }
  constructor(key, value, negated) {
    this.key = key;
    this.value = value;
    this.negated = negated;
    this.type = 15;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return cmp2(this.key, this.value, other.key, other.value);
  }
  equals(other) {
    if (other.type === this.type) {
      return this.key === other.key && this.value === other.value;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    if (typeof this.value === "string") {
      return false;
    }
    return parseFloat(context.getValue(this.key)) <= this.value;
  }
  serialize() {
    return `${this.key} <= ${this.value}`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapSmallerEquals(this.key, this.value);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyGreaterExpr.create(this.key, this.value, this);
    }
    return this.negated;
  }
};
var ContextKeyRegexExpr = class _ContextKeyRegexExpr {
  static create(key, regexp) {
    return new _ContextKeyRegexExpr(key, regexp);
  }
  constructor(key, regexp) {
    this.key = key;
    this.regexp = regexp;
    this.type = 7;
    this.negated = null;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    if (this.key < other.key) {
      return -1;
    }
    if (this.key > other.key) {
      return 1;
    }
    const thisSource = this.regexp ? this.regexp.source : "";
    const otherSource = other.regexp ? other.regexp.source : "";
    if (thisSource < otherSource) {
      return -1;
    }
    if (thisSource > otherSource) {
      return 1;
    }
    return 0;
  }
  equals(other) {
    if (other.type === this.type) {
      const thisSource = this.regexp ? this.regexp.source : "";
      const otherSource = other.regexp ? other.regexp.source : "";
      return this.key === other.key && thisSource === otherSource;
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    const value = context.getValue(this.key);
    return this.regexp ? this.regexp.test(value) : false;
  }
  serialize() {
    const value = this.regexp ? `/${this.regexp.source}/${this.regexp.flags}` : "/invalid/";
    return `${this.key} =~ ${value}`;
  }
  keys() {
    return [this.key];
  }
  map(mapFnc) {
    return mapFnc.mapRegex(this.key, this.regexp);
  }
  negate() {
    if (!this.negated) {
      this.negated = ContextKeyNotRegexExpr.create(this);
    }
    return this.negated;
  }
};
var ContextKeyNotRegexExpr = class _ContextKeyNotRegexExpr {
  static create(actual) {
    return new _ContextKeyNotRegexExpr(actual);
  }
  constructor(_actual) {
    this._actual = _actual;
    this.type = 8;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    return this._actual.cmp(other._actual);
  }
  equals(other) {
    if (other.type === this.type) {
      return this._actual.equals(other._actual);
    }
    return false;
  }
  substituteConstants() {
    return this;
  }
  evaluate(context) {
    return !this._actual.evaluate(context);
  }
  serialize() {
    return `!(${this._actual.serialize()})`;
  }
  keys() {
    return this._actual.keys();
  }
  map(mapFnc) {
    return new _ContextKeyNotRegexExpr(this._actual.map(mapFnc));
  }
  negate() {
    return this._actual;
  }
};
function eliminateConstantsInArray(arr) {
  let newArr = null;
  for (let i = 0, len = arr.length; i < len; i++) {
    const newExpr = arr[i].substituteConstants();
    if (arr[i] !== newExpr) {
      if (newArr === null) {
        newArr = [];
        for (let j = 0; j < i; j++) {
          newArr[j] = arr[j];
        }
      }
    }
    if (newArr !== null) {
      newArr[i] = newExpr;
    }
  }
  if (newArr === null) {
    return arr;
  }
  return newArr;
}
var ContextKeyAndExpr = class _ContextKeyAndExpr {
  static create(_expr, negated, extraRedundantCheck) {
    return _ContextKeyAndExpr._normalizeArr(_expr, negated, extraRedundantCheck);
  }
  constructor(expr, negated) {
    this.expr = expr;
    this.negated = negated;
    this.type = 6;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    if (this.expr.length < other.expr.length) {
      return -1;
    }
    if (this.expr.length > other.expr.length) {
      return 1;
    }
    for (let i = 0, len = this.expr.length; i < len; i++) {
      const r = cmp(this.expr[i], other.expr[i]);
      if (r !== 0) {
        return r;
      }
    }
    return 0;
  }
  equals(other) {
    if (other.type === this.type) {
      if (this.expr.length !== other.expr.length) {
        return false;
      }
      for (let i = 0, len = this.expr.length; i < len; i++) {
        if (!this.expr[i].equals(other.expr[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  substituteConstants() {
    const exprArr = eliminateConstantsInArray(this.expr);
    if (exprArr === this.expr) {
      return this;
    }
    return _ContextKeyAndExpr.create(exprArr, this.negated, false);
  }
  evaluate(context) {
    for (let i = 0, len = this.expr.length; i < len; i++) {
      if (!this.expr[i].evaluate(context)) {
        return false;
      }
    }
    return true;
  }
  static _normalizeArr(arr, negated, extraRedundantCheck) {
    const expr = [];
    let hasTrue = false;
    for (const e of arr) {
      if (!e) {
        continue;
      }
      if (e.type === 1) {
        hasTrue = true;
        continue;
      }
      if (e.type === 0) {
        return ContextKeyFalseExpr.INSTANCE;
      }
      if (e.type === 6) {
        expr.push(...e.expr);
        continue;
      }
      expr.push(e);
    }
    if (expr.length === 0 && hasTrue) {
      return ContextKeyTrueExpr.INSTANCE;
    }
    if (expr.length === 0) {
      return void 0;
    }
    if (expr.length === 1) {
      return expr[0];
    }
    expr.sort(cmp);
    for (let i = 1; i < expr.length; i++) {
      if (expr[i - 1].equals(expr[i])) {
        expr.splice(i, 1);
        i--;
      }
    }
    if (expr.length === 1) {
      return expr[0];
    }
    while (expr.length > 1) {
      const lastElement = expr[expr.length - 1];
      if (lastElement.type !== 9) {
        break;
      }
      expr.pop();
      const secondToLastElement = expr.pop();
      const isFinished = expr.length === 0;
      const resultElement = ContextKeyOrExpr.create(lastElement.expr.map((el) => _ContextKeyAndExpr.create([el, secondToLastElement], null, extraRedundantCheck)), null, isFinished);
      if (resultElement) {
        expr.push(resultElement);
        expr.sort(cmp);
      }
    }
    if (expr.length === 1) {
      return expr[0];
    }
    if (extraRedundantCheck) {
      for (let i = 0; i < expr.length; i++) {
        for (let j = i + 1; j < expr.length; j++) {
          if (expr[i].negate().equals(expr[j])) {
            return ContextKeyFalseExpr.INSTANCE;
          }
        }
      }
      if (expr.length === 1) {
        return expr[0];
      }
    }
    return new _ContextKeyAndExpr(expr, negated);
  }
  serialize() {
    return this.expr.map((e) => e.serialize()).join(" && ");
  }
  keys() {
    const result = [];
    for (const expr of this.expr) {
      result.push(...expr.keys());
    }
    return result;
  }
  map(mapFnc) {
    return new _ContextKeyAndExpr(this.expr.map((expr) => expr.map(mapFnc)), null);
  }
  negate() {
    if (!this.negated) {
      const result = [];
      for (const expr of this.expr) {
        result.push(expr.negate());
      }
      this.negated = ContextKeyOrExpr.create(result, this, true);
    }
    return this.negated;
  }
};
var ContextKeyOrExpr = class _ContextKeyOrExpr {
  static create(_expr, negated, extraRedundantCheck) {
    return _ContextKeyOrExpr._normalizeArr(_expr, negated, extraRedundantCheck);
  }
  constructor(expr, negated) {
    this.expr = expr;
    this.negated = negated;
    this.type = 9;
  }
  cmp(other) {
    if (other.type !== this.type) {
      return this.type - other.type;
    }
    if (this.expr.length < other.expr.length) {
      return -1;
    }
    if (this.expr.length > other.expr.length) {
      return 1;
    }
    for (let i = 0, len = this.expr.length; i < len; i++) {
      const r = cmp(this.expr[i], other.expr[i]);
      if (r !== 0) {
        return r;
      }
    }
    return 0;
  }
  equals(other) {
    if (other.type === this.type) {
      if (this.expr.length !== other.expr.length) {
        return false;
      }
      for (let i = 0, len = this.expr.length; i < len; i++) {
        if (!this.expr[i].equals(other.expr[i])) {
          return false;
        }
      }
      return true;
    }
    return false;
  }
  substituteConstants() {
    const exprArr = eliminateConstantsInArray(this.expr);
    if (exprArr === this.expr) {
      return this;
    }
    return _ContextKeyOrExpr.create(exprArr, this.negated, false);
  }
  evaluate(context) {
    for (let i = 0, len = this.expr.length; i < len; i++) {
      if (this.expr[i].evaluate(context)) {
        return true;
      }
    }
    return false;
  }
  static _normalizeArr(arr, negated, extraRedundantCheck) {
    let expr = [];
    let hasFalse = false;
    if (arr) {
      for (let i = 0, len = arr.length; i < len; i++) {
        const e = arr[i];
        if (!e) {
          continue;
        }
        if (e.type === 0) {
          hasFalse = true;
          continue;
        }
        if (e.type === 1) {
          return ContextKeyTrueExpr.INSTANCE;
        }
        if (e.type === 9) {
          expr = expr.concat(e.expr);
          continue;
        }
        expr.push(e);
      }
      if (expr.length === 0 && hasFalse) {
        return ContextKeyFalseExpr.INSTANCE;
      }
      expr.sort(cmp);
    }
    if (expr.length === 0) {
      return void 0;
    }
    if (expr.length === 1) {
      return expr[0];
    }
    for (let i = 1; i < expr.length; i++) {
      if (expr[i - 1].equals(expr[i])) {
        expr.splice(i, 1);
        i--;
      }
    }
    if (expr.length === 1) {
      return expr[0];
    }
    if (extraRedundantCheck) {
      for (let i = 0; i < expr.length; i++) {
        for (let j = i + 1; j < expr.length; j++) {
          if (expr[i].negate().equals(expr[j])) {
            return ContextKeyTrueExpr.INSTANCE;
          }
        }
      }
      if (expr.length === 1) {
        return expr[0];
      }
    }
    return new _ContextKeyOrExpr(expr, negated);
  }
  serialize() {
    return this.expr.map((e) => e.serialize()).join(" || ");
  }
  keys() {
    const result = [];
    for (const expr of this.expr) {
      result.push(...expr.keys());
    }
    return result;
  }
  map(mapFnc) {
    return new _ContextKeyOrExpr(this.expr.map((expr) => expr.map(mapFnc)), null);
  }
  negate() {
    if (!this.negated) {
      const result = [];
      for (const expr of this.expr) {
        result.push(expr.negate());
      }
      while (result.length > 1) {
        const LEFT = result.shift();
        const RIGHT = result.shift();
        const all = [];
        for (const left of getTerminals(LEFT)) {
          for (const right of getTerminals(RIGHT)) {
            all.push(ContextKeyAndExpr.create([left, right], null, false));
          }
        }
        result.unshift(_ContextKeyOrExpr.create(all, null, false));
      }
      this.negated = _ContextKeyOrExpr.create(result, this, true);
    }
    return this.negated;
  }
};
var RawContextKey = class _RawContextKey extends ContextKeyDefinedExpr {
  static {
    this._info = [];
  }
  static all() {
    return _RawContextKey._info.values();
  }
  constructor(key, defaultValue, metaOrHide) {
    super(key, null);
    this._defaultValue = defaultValue;
    if (typeof metaOrHide === "object") {
      _RawContextKey._info.push({ ...metaOrHide, key });
    } else if (metaOrHide !== true) {
      _RawContextKey._info.push({ key, description: metaOrHide, type: defaultValue !== null && defaultValue !== void 0 ? typeof defaultValue : void 0 });
    }
  }
  bindTo(target) {
    return target.createKey(this.key, this._defaultValue);
  }
  getValue(target) {
    return target.getContextKeyValue(this.key);
  }
  toNegated() {
    return this.negate();
  }
  isEqualTo(value) {
    return ContextKeyEqualsExpr.create(this.key, value);
  }
  notEqualsTo(value) {
    return ContextKeyNotEqualsExpr.create(this.key, value);
  }
  greater(value) {
    return ContextKeyGreaterExpr.create(this.key, value);
  }
};
var IContextKeyService = createDecorator("contextKeyService");
function cmp1(key1, key2) {
  if (key1 < key2) {
    return -1;
  }
  if (key1 > key2) {
    return 1;
  }
  return 0;
}
function cmp2(key1, value1, key2, value2) {
  if (key1 < key2) {
    return -1;
  }
  if (key1 > key2) {
    return 1;
  }
  if (value1 < value2) {
    return -1;
  }
  if (value1 > value2) {
    return 1;
  }
  return 0;
}
function getTerminals(node) {
  if (node.type === 9) {
    return node.expr;
  }
  return [node];
}

// out-build/vs/platform/instantiation/common/descriptors.js
var SyncDescriptor = class {
  constructor(ctor, staticArguments = [], supportsDelayedInstantiation = false) {
    this.ctor = ctor;
    this.staticArguments = staticArguments;
    this.supportsDelayedInstantiation = supportsDelayedInstantiation;
  }
};

// out-build/vs/platform/instantiation/common/extensions.js
var _registry = [];
var InstantiationType;
(function(InstantiationType2) {
  InstantiationType2[InstantiationType2["Eager"] = 0] = "Eager";
  InstantiationType2[InstantiationType2["Delayed"] = 1] = "Delayed";
})(InstantiationType || (InstantiationType = {}));
function registerSingleton(id2, ctorOrDescriptor, supportsDelayedInstantiation) {
  if (!(ctorOrDescriptor instanceof SyncDescriptor)) {
    ctorOrDescriptor = new SyncDescriptor(ctorOrDescriptor, [], Boolean(supportsDelayedInstantiation));
  }
  _registry.push([id2, ctorOrDescriptor]);
}

// out-build/vs/workbench/services/notebook/common/notebookDocumentService.js
var INotebookDocumentService = createDecorator("notebookDocumentService");
var _lengths = ["W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f"];
var _padRegexp = new RegExp(`^[${_lengths.join("")}]+`);
var _radix = 7;
function parse2(cell) {
  if (cell.scheme !== Schemas.vscodeNotebookCell) {
    return void 0;
  }
  const idx = cell.fragment.indexOf("s");
  if (idx < 0) {
    return void 0;
  }
  const handle = parseInt(cell.fragment.substring(0, idx).replace(_padRegexp, ""), _radix);
  const _scheme = decodeBase64(cell.fragment.substring(idx + 1)).toString();
  if (isNaN(handle)) {
    return void 0;
  }
  return {
    handle,
    notebook: cell.with({ scheme: _scheme, fragment: null })
  };
}
function generate(notebook, handle) {
  const s = handle.toString(_radix);
  const p = s.length < _lengths.length ? _lengths[s.length - 1] : "z";
  const fragment = `${p}${s}s${encodeBase64(VSBuffer.fromString(notebook.scheme), true, true)}`;
  return notebook.with({ scheme: Schemas.vscodeNotebookCell, fragment });
}
function parseMetadataUri(metadata) {
  if (metadata.scheme !== Schemas.vscodeNotebookMetadata) {
    return void 0;
  }
  const _scheme = decodeBase64(metadata.fragment).toString();
  return metadata.with({ scheme: _scheme, fragment: null });
}
function generateMetadataUri(notebook) {
  const fragment = `${encodeBase64(VSBuffer.fromString(notebook.scheme), true, true)}`;
  return notebook.with({ scheme: Schemas.vscodeNotebookMetadata, fragment });
}
function extractCellOutputDetails(uri) {
  if (uri.scheme !== Schemas.vscodeNotebookCellOutput) {
    return;
  }
  const params = new URLSearchParams(uri.query);
  const openIn = params.get("openIn");
  if (!openIn) {
    return;
  }
  const outputId = params.get("outputId") ?? void 0;
  const parsedCell = parse2(uri.with({ scheme: Schemas.vscodeNotebookCell, query: null }));
  const outputIndex = params.get("outputIndex") ? parseInt(params.get("outputIndex") || "", 10) : void 0;
  const notebookUri = parsedCell ? parsedCell.notebook : uri.with({
    scheme: params.get("notebookScheme") || Schemas.file,
    fragment: null,
    query: null
  });
  const cellIndex = params.get("cellIndex") ? parseInt(params.get("cellIndex") || "", 10) : void 0;
  return {
    notebook: notebookUri,
    openIn,
    outputId,
    outputIndex,
    cellHandle: parsedCell?.handle,
    cellFragment: uri.fragment,
    cellIndex
  };
}
var NotebookDocumentWorkbenchService = class {
  constructor() {
    this._documents = new ResourceMap();
  }
  getNotebook(uri) {
    if (uri.scheme === Schemas.vscodeNotebookCell) {
      const cellUri = parse2(uri);
      if (cellUri) {
        const document2 = this._documents.get(cellUri.notebook);
        if (document2) {
          return document2;
        }
      }
    }
    if (uri.scheme === Schemas.vscodeNotebookCellOutput) {
      const parsedData = extractCellOutputDetails(uri);
      if (parsedData) {
        const document2 = this._documents.get(parsedData.notebook);
        if (document2) {
          return document2;
        }
      }
    }
    return this._documents.get(uri);
  }
  addNotebookDocument(document2) {
    this._documents.set(document2.uri, document2);
  }
  removeNotebookDocument(document2) {
    this._documents.delete(document2.uri);
  }
};
registerSingleton(
  INotebookDocumentService,
  NotebookDocumentWorkbenchService,
  1
  /* InstantiationType.Delayed */
);

// out-build/vs/workbench/contrib/notebook/common/notebookCommon.js
var CellKind;
(function(CellKind2) {
  CellKind2[CellKind2["Markup"] = 1] = "Markup";
  CellKind2[CellKind2["Code"] = 2] = "Code";
})(CellKind || (CellKind = {}));
var NOTEBOOK_DISPLAY_ORDER = [
  "application/json",
  "application/javascript",
  "text/html",
  "image/svg+xml",
  Mimes.latex,
  Mimes.markdown,
  "image/png",
  "image/jpeg",
  Mimes.text
];
var ACCESSIBLE_NOTEBOOK_DISPLAY_ORDER = [
  Mimes.latex,
  Mimes.markdown,
  "application/json",
  "text/html",
  "image/svg+xml",
  "image/png",
  "image/jpeg",
  Mimes.text
];
var NotebookRunState;
(function(NotebookRunState2) {
  NotebookRunState2[NotebookRunState2["Running"] = 1] = "Running";
  NotebookRunState2[NotebookRunState2["Idle"] = 2] = "Idle";
})(NotebookRunState || (NotebookRunState = {}));
var NotebookCellExecutionState;
(function(NotebookCellExecutionState2) {
  NotebookCellExecutionState2[NotebookCellExecutionState2["Unconfirmed"] = 1] = "Unconfirmed";
  NotebookCellExecutionState2[NotebookCellExecutionState2["Pending"] = 2] = "Pending";
  NotebookCellExecutionState2[NotebookCellExecutionState2["Executing"] = 3] = "Executing";
})(NotebookCellExecutionState || (NotebookCellExecutionState = {}));
var NotebookExecutionState;
(function(NotebookExecutionState2) {
  NotebookExecutionState2[NotebookExecutionState2["Unconfirmed"] = 1] = "Unconfirmed";
  NotebookExecutionState2[NotebookExecutionState2["Pending"] = 2] = "Pending";
  NotebookExecutionState2[NotebookExecutionState2["Executing"] = 3] = "Executing";
})(NotebookExecutionState || (NotebookExecutionState = {}));
var NotebookRendererMatch;
(function(NotebookRendererMatch2) {
  NotebookRendererMatch2[NotebookRendererMatch2["WithHardKernelDependency"] = 0] = "WithHardKernelDependency";
  NotebookRendererMatch2[NotebookRendererMatch2["WithOptionalKernelDependency"] = 1] = "WithOptionalKernelDependency";
  NotebookRendererMatch2[NotebookRendererMatch2["Pure"] = 2] = "Pure";
  NotebookRendererMatch2[NotebookRendererMatch2["Never"] = 3] = "Never";
})(NotebookRendererMatch || (NotebookRendererMatch = {}));
var RendererMessagingSpec;
(function(RendererMessagingSpec2) {
  RendererMessagingSpec2["Always"] = "always";
  RendererMessagingSpec2["Never"] = "never";
  RendererMessagingSpec2["Optional"] = "optional";
})(RendererMessagingSpec || (RendererMessagingSpec = {}));
var NotebookCellsChangeType;
(function(NotebookCellsChangeType2) {
  NotebookCellsChangeType2[NotebookCellsChangeType2["ModelChange"] = 1] = "ModelChange";
  NotebookCellsChangeType2[NotebookCellsChangeType2["Move"] = 2] = "Move";
  NotebookCellsChangeType2[NotebookCellsChangeType2["ChangeCellLanguage"] = 5] = "ChangeCellLanguage";
  NotebookCellsChangeType2[NotebookCellsChangeType2["Initialize"] = 6] = "Initialize";
  NotebookCellsChangeType2[NotebookCellsChangeType2["ChangeCellMetadata"] = 7] = "ChangeCellMetadata";
  NotebookCellsChangeType2[NotebookCellsChangeType2["Output"] = 8] = "Output";
  NotebookCellsChangeType2[NotebookCellsChangeType2["OutputItem"] = 9] = "OutputItem";
  NotebookCellsChangeType2[NotebookCellsChangeType2["ChangeCellContent"] = 10] = "ChangeCellContent";
  NotebookCellsChangeType2[NotebookCellsChangeType2["ChangeDocumentMetadata"] = 11] = "ChangeDocumentMetadata";
  NotebookCellsChangeType2[NotebookCellsChangeType2["ChangeCellInternalMetadata"] = 12] = "ChangeCellInternalMetadata";
  NotebookCellsChangeType2[NotebookCellsChangeType2["ChangeCellMime"] = 13] = "ChangeCellMime";
  NotebookCellsChangeType2[NotebookCellsChangeType2["Unknown"] = 100] = "Unknown";
})(NotebookCellsChangeType || (NotebookCellsChangeType = {}));
var SelectionStateType;
(function(SelectionStateType2) {
  SelectionStateType2[SelectionStateType2["Handle"] = 0] = "Handle";
  SelectionStateType2[SelectionStateType2["Index"] = 1] = "Index";
})(SelectionStateType || (SelectionStateType = {}));
var CellEditType;
(function(CellEditType2) {
  CellEditType2[CellEditType2["Replace"] = 1] = "Replace";
  CellEditType2[CellEditType2["Output"] = 2] = "Output";
  CellEditType2[CellEditType2["Metadata"] = 3] = "Metadata";
  CellEditType2[CellEditType2["CellLanguage"] = 4] = "CellLanguage";
  CellEditType2[CellEditType2["DocumentMetadata"] = 5] = "DocumentMetadata";
  CellEditType2[CellEditType2["Move"] = 6] = "Move";
  CellEditType2[CellEditType2["OutputItems"] = 7] = "OutputItems";
  CellEditType2[CellEditType2["PartialMetadata"] = 8] = "PartialMetadata";
  CellEditType2[CellEditType2["PartialInternalMetadata"] = 9] = "PartialInternalMetadata";
})(CellEditType || (CellEditType = {}));
var NotebookMetadataUri;
(function(NotebookMetadataUri2) {
  NotebookMetadataUri2.scheme = Schemas.vscodeNotebookMetadata;
  function generate2(notebook) {
    return generateMetadataUri(notebook);
  }
  NotebookMetadataUri2.generate = generate2;
  function parse4(metadata) {
    return parseMetadataUri(metadata);
  }
  NotebookMetadataUri2.parse = parse4;
})(NotebookMetadataUri || (NotebookMetadataUri = {}));
var CellUri;
(function(CellUri2) {
  CellUri2.scheme = Schemas.vscodeNotebookCell;
  function generate2(notebook, handle) {
    return generate(notebook, handle);
  }
  CellUri2.generate = generate2;
  function parse4(cell) {
    return parse2(cell);
  }
  CellUri2.parse = parse4;
  function generateCellOutputUriWithId(notebook, outputId) {
    return notebook.with({
      scheme: Schemas.vscodeNotebookCellOutput,
      query: new URLSearchParams({
        openIn: "editor",
        outputId: outputId ?? "",
        notebookScheme: notebook.scheme !== Schemas.file ? notebook.scheme : ""
      }).toString()
    });
  }
  CellUri2.generateCellOutputUriWithId = generateCellOutputUriWithId;
  function generateCellOutputUriWithIndex(notebook, cellUri, outputIndex) {
    return notebook.with({
      scheme: Schemas.vscodeNotebookCellOutput,
      fragment: cellUri.fragment,
      query: new URLSearchParams({
        openIn: "notebook",
        outputIndex: String(outputIndex)
      }).toString()
    });
  }
  CellUri2.generateCellOutputUriWithIndex = generateCellOutputUriWithIndex;
  function generateOutputEditorUri(notebook, cellId, cellIndex, outputId, outputIndex) {
    return notebook.with({
      scheme: Schemas.vscodeNotebookCellOutput,
      query: new URLSearchParams({
        openIn: "notebookOutputEditor",
        notebook: notebook.toString(),
        cellIndex: String(cellIndex),
        outputId,
        outputIndex: String(outputIndex)
      }).toString()
    });
  }
  CellUri2.generateOutputEditorUri = generateOutputEditorUri;
  function parseCellOutputUri(uri) {
    return extractCellOutputDetails(uri);
  }
  CellUri2.parseCellOutputUri = parseCellOutputUri;
  function generateCellPropertyUri(notebook, handle, scheme) {
    return CellUri2.generate(notebook, handle).with({ scheme });
  }
  CellUri2.generateCellPropertyUri = generateCellPropertyUri;
  function parseCellPropertyUri(uri, propertyScheme) {
    if (uri.scheme !== propertyScheme) {
      return void 0;
    }
    return CellUri2.parse(uri.with({ scheme: CellUri2.scheme }));
  }
  CellUri2.parseCellPropertyUri = parseCellPropertyUri;
})(CellUri || (CellUri = {}));
var NOTEBOOK_EDITOR_CURSOR_BOUNDARY = new RawContextKey("notebookEditorCursorAtBoundary", "none");
var NOTEBOOK_EDITOR_CURSOR_LINE_BOUNDARY = new RawContextKey("notebookEditorCursorAtLineBoundary", "none");
var NotebookEditorPriority;
(function(NotebookEditorPriority2) {
  NotebookEditorPriority2["default"] = "default";
  NotebookEditorPriority2["option"] = "option";
})(NotebookEditorPriority || (NotebookEditorPriority = {}));
var NotebookFindScopeType;
(function(NotebookFindScopeType2) {
  NotebookFindScopeType2["Cells"] = "cells";
  NotebookFindScopeType2["Text"] = "text";
  NotebookFindScopeType2["None"] = "none";
})(NotebookFindScopeType || (NotebookFindScopeType = {}));
var CellStatusbarAlignment;
(function(CellStatusbarAlignment2) {
  CellStatusbarAlignment2[CellStatusbarAlignment2["Left"] = 1] = "Left";
  CellStatusbarAlignment2[CellStatusbarAlignment2["Right"] = 2] = "Right";
})(CellStatusbarAlignment || (CellStatusbarAlignment = {}));
var NotebookWorkingCopyTypeIdentifier = class _NotebookWorkingCopyTypeIdentifier {
  static {
    this._prefix = "notebook/";
  }
  static create(notebookType, viewType) {
    return `${_NotebookWorkingCopyTypeIdentifier._prefix}${notebookType}/${viewType ?? notebookType}`;
  }
  static parse(candidate) {
    if (candidate.startsWith(_NotebookWorkingCopyTypeIdentifier._prefix)) {
      const split = candidate.substring(_NotebookWorkingCopyTypeIdentifier._prefix.length).split("/");
      if (split.length === 2) {
        return { notebookType: split[0], viewType: split[1] };
      }
    }
    return void 0;
  }
};
var textDecoder2 = new TextDecoder();
var MOVE_CURSOR_1_LINE_COMMAND = `${String.fromCharCode(27)}[A`;
var MOVE_CURSOR_1_LINE_COMMAND_BYTES = MOVE_CURSOR_1_LINE_COMMAND.split("").map((c) => c.charCodeAt(0));
var BACKSPACE_CHARACTER = "\b".charCodeAt(0);
var CARRIAGE_RETURN_CHARACTER = "\r".charCodeAt(0);

// out-build/vs/editor/common/core/wordHelper.js
var USUAL_WORD_SEPARATORS = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
function createWordRegExp(allowInWords = "") {
  let source = "(-?\\d*\\.\\d\\w*)|([^";
  for (const sep2 of USUAL_WORD_SEPARATORS) {
    if (allowInWords.indexOf(sep2) >= 0) {
      continue;
    }
    source += "\\" + sep2;
  }
  source += "\\s]+)";
  return new RegExp(source, "g");
}
var DEFAULT_WORD_REGEXP = createWordRegExp();
function ensureValidWordDefinition(wordDefinition) {
  let result = DEFAULT_WORD_REGEXP;
  if (wordDefinition && wordDefinition instanceof RegExp) {
    if (!wordDefinition.global) {
      let flags = "g";
      if (wordDefinition.ignoreCase) {
        flags += "i";
      }
      if (wordDefinition.multiline) {
        flags += "m";
      }
      if (wordDefinition.unicode) {
        flags += "u";
      }
      result = new RegExp(wordDefinition.source, flags);
    } else {
      result = wordDefinition;
    }
  }
  result.lastIndex = 0;
  return result;
}
var _defaultConfig = new LinkedList();
_defaultConfig.unshift({
  maxLen: 1e3,
  windowSize: 15,
  timeBudget: 150
});
function getWordAtText(column, wordDefinition, text, textOffset, config) {
  wordDefinition = ensureValidWordDefinition(wordDefinition);
  if (!config) {
    config = Iterable.first(_defaultConfig);
  }
  if (text.length > config.maxLen) {
    let start = column - config.maxLen / 2;
    if (start < 0) {
      start = 0;
    } else {
      textOffset += start;
    }
    text = text.substring(start, column + config.maxLen / 2);
    return getWordAtText(column, wordDefinition, text, textOffset, config);
  }
  const t1 = Date.now();
  const pos = column - 1 - textOffset;
  let prevRegexIndex = -1;
  let match2 = null;
  for (let i = 1; ; i++) {
    if (Date.now() - t1 >= config.timeBudget) {
      break;
    }
    const regexIndex = pos - config.windowSize * i;
    wordDefinition.lastIndex = Math.max(0, regexIndex);
    const thisMatch = _findRegexMatchEnclosingPosition(wordDefinition, text, pos, prevRegexIndex);
    if (!thisMatch && match2) {
      break;
    }
    match2 = thisMatch;
    if (regexIndex <= 0) {
      break;
    }
    prevRegexIndex = regexIndex;
  }
  if (match2) {
    const result = {
      word: match2[0],
      startColumn: textOffset + 1 + match2.index,
      endColumn: textOffset + 1 + match2.index + match2[0].length
    };
    wordDefinition.lastIndex = 0;
    return result;
  }
  return null;
}
function _findRegexMatchEnclosingPosition(wordDefinition, text, pos, stopPos) {
  let match2;
  while (match2 = wordDefinition.exec(text)) {
    const matchIndex = match2.index || 0;
    if (matchIndex <= pos && wordDefinition.lastIndex >= pos) {
      return match2;
    } else if (stopPos > 0 && matchIndex > stopPos) {
      return null;
    }
  }
  return null;
}

// out-build/vs/editor/common/model/prefixSumComputer.js
var PrefixSumComputer = class {
  constructor(values) {
    this.values = values;
    this.prefixSum = new Uint32Array(values.length);
    this.prefixSumValidIndex = new Int32Array(1);
    this.prefixSumValidIndex[0] = -1;
  }
  getCount() {
    return this.values.length;
  }
  insertValues(insertIndex, insertValues) {
    insertIndex = toUint32(insertIndex);
    const oldValues = this.values;
    const oldPrefixSum = this.prefixSum;
    const insertValuesLen = insertValues.length;
    if (insertValuesLen === 0) {
      return false;
    }
    this.values = new Uint32Array(oldValues.length + insertValuesLen);
    this.values.set(oldValues.subarray(0, insertIndex), 0);
    this.values.set(oldValues.subarray(insertIndex), insertIndex + insertValuesLen);
    this.values.set(insertValues, insertIndex);
    if (insertIndex - 1 < this.prefixSumValidIndex[0]) {
      this.prefixSumValidIndex[0] = insertIndex - 1;
    }
    this.prefixSum = new Uint32Array(this.values.length);
    if (this.prefixSumValidIndex[0] >= 0) {
      this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
    }
    return true;
  }
  setValue(index, value) {
    index = toUint32(index);
    value = toUint32(value);
    if (this.values[index] === value) {
      return false;
    }
    this.values[index] = value;
    if (index - 1 < this.prefixSumValidIndex[0]) {
      this.prefixSumValidIndex[0] = index - 1;
    }
    return true;
  }
  removeValues(startIndex, count) {
    startIndex = toUint32(startIndex);
    count = toUint32(count);
    const oldValues = this.values;
    const oldPrefixSum = this.prefixSum;
    if (startIndex >= oldValues.length) {
      return false;
    }
    const maxCount = oldValues.length - startIndex;
    if (count >= maxCount) {
      count = maxCount;
    }
    if (count === 0) {
      return false;
    }
    this.values = new Uint32Array(oldValues.length - count);
    this.values.set(oldValues.subarray(0, startIndex), 0);
    this.values.set(oldValues.subarray(startIndex + count), startIndex);
    this.prefixSum = new Uint32Array(this.values.length);
    if (startIndex - 1 < this.prefixSumValidIndex[0]) {
      this.prefixSumValidIndex[0] = startIndex - 1;
    }
    if (this.prefixSumValidIndex[0] >= 0) {
      this.prefixSum.set(oldPrefixSum.subarray(0, this.prefixSumValidIndex[0] + 1));
    }
    return true;
  }
  getTotalSum() {
    if (this.values.length === 0) {
      return 0;
    }
    return this._getPrefixSum(this.values.length - 1);
  }
  /**
   * Returns the sum of the first `index + 1` many items.
   * @returns `SUM(0 <= j <= index, values[j])`.
   */
  getPrefixSum(index) {
    if (index < 0) {
      return 0;
    }
    index = toUint32(index);
    return this._getPrefixSum(index);
  }
  _getPrefixSum(index) {
    if (index <= this.prefixSumValidIndex[0]) {
      return this.prefixSum[index];
    }
    let startIndex = this.prefixSumValidIndex[0] + 1;
    if (startIndex === 0) {
      this.prefixSum[0] = this.values[0];
      startIndex++;
    }
    if (index >= this.values.length) {
      index = this.values.length - 1;
    }
    for (let i = startIndex; i <= index; i++) {
      this.prefixSum[i] = this.prefixSum[i - 1] + this.values[i];
    }
    this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], index);
    return this.prefixSum[index];
  }
  getIndexOf(sum) {
    sum = Math.floor(sum);
    this.getTotalSum();
    let low = 0;
    let high = this.values.length - 1;
    let mid = 0;
    let midStop = 0;
    let midStart = 0;
    while (low <= high) {
      mid = low + (high - low) / 2 | 0;
      midStop = this.prefixSum[mid];
      midStart = midStop - this.values[mid];
      if (sum < midStart) {
        high = mid - 1;
      } else if (sum >= midStop) {
        low = mid + 1;
      } else {
        break;
      }
    }
    return new PrefixSumIndexOfResult(mid, sum - midStart);
  }
};
var PrefixSumIndexOfResult = class {
  constructor(index, remainder) {
    this.index = index;
    this.remainder = remainder;
    this._prefixSumIndexOfResultBrand = void 0;
    this.index = index;
    this.remainder = remainder;
  }
};

// out-build/vs/editor/common/model/mirrorTextModel.js
var MirrorTextModel = class {
  constructor(uri, lines, eol, versionId) {
    this._uri = uri;
    this._lines = lines;
    this._eol = eol;
    this._versionId = versionId;
    this._lineStarts = null;
    this._cachedTextValue = null;
  }
  dispose() {
    this._lines.length = 0;
  }
  get version() {
    return this._versionId;
  }
  getText() {
    if (this._cachedTextValue === null) {
      this._cachedTextValue = this._lines.join(this._eol);
    }
    return this._cachedTextValue;
  }
  onEvents(e) {
    if (e.eol && e.eol !== this._eol) {
      this._eol = e.eol;
      this._lineStarts = null;
    }
    const changes = e.changes;
    for (const change of changes) {
      this._acceptDeleteRange(change.range);
      this._acceptInsertText(new Position(change.range.startLineNumber, change.range.startColumn), change.text);
    }
    this._versionId = e.versionId;
    this._cachedTextValue = null;
  }
  _ensureLineStarts() {
    if (!this._lineStarts) {
      const eolLength = this._eol.length;
      const linesLength = this._lines.length;
      const lineStartValues = new Uint32Array(linesLength);
      for (let i = 0; i < linesLength; i++) {
        lineStartValues[i] = this._lines[i].length + eolLength;
      }
      this._lineStarts = new PrefixSumComputer(lineStartValues);
    }
  }
  /**
   * All changes to a line's text go through this method
   */
  _setLineText(lineIndex, newValue) {
    this._lines[lineIndex] = newValue;
    if (this._lineStarts) {
      this._lineStarts.setValue(lineIndex, this._lines[lineIndex].length + this._eol.length);
    }
  }
  _acceptDeleteRange(range) {
    if (range.startLineNumber === range.endLineNumber) {
      if (range.startColumn === range.endColumn) {
        return;
      }
      this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.startLineNumber - 1].substring(range.endColumn - 1));
      return;
    }
    this._setLineText(range.startLineNumber - 1, this._lines[range.startLineNumber - 1].substring(0, range.startColumn - 1) + this._lines[range.endLineNumber - 1].substring(range.endColumn - 1));
    this._lines.splice(range.startLineNumber, range.endLineNumber - range.startLineNumber);
    if (this._lineStarts) {
      this._lineStarts.removeValues(range.startLineNumber, range.endLineNumber - range.startLineNumber);
    }
  }
  _acceptInsertText(position, insertText) {
    if (insertText.length === 0) {
      return;
    }
    const insertLines = splitLines(insertText);
    if (insertLines.length === 1) {
      this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0] + this._lines[position.lineNumber - 1].substring(position.column - 1));
      return;
    }
    insertLines[insertLines.length - 1] += this._lines[position.lineNumber - 1].substring(position.column - 1);
    this._setLineText(position.lineNumber - 1, this._lines[position.lineNumber - 1].substring(0, position.column - 1) + insertLines[0]);
    const newLengths = new Uint32Array(insertLines.length - 1);
    for (let i = 1; i < insertLines.length; i++) {
      this._lines.splice(position.lineNumber + i - 1, 0, insertLines[i]);
      newLengths[i - 1] = insertLines[i].length + this._eol.length;
    }
    if (this._lineStarts) {
      this._lineStarts.insertValues(position.lineNumber, newLengths);
    }
  }
};

// out-build/vs/editor/common/services/textModelSync/textModelSync.impl.js
var STOP_SYNC_MODEL_DELTA_TIME_MS = 60 * 1e3;
var MirrorModel = class extends MirrorTextModel {
  get uri() {
    return this._uri;
  }
  get eol() {
    return this._eol;
  }
  getValue() {
    return this.getText();
  }
  findMatches(regex) {
    const matches = [];
    for (let i = 0; i < this._lines.length; i++) {
      const line = this._lines[i];
      const offsetToAdd = this.offsetAt(new Position(i + 1, 1));
      const iteratorOverMatches = line.matchAll(regex);
      for (const match2 of iteratorOverMatches) {
        if (match2.index || match2.index === 0) {
          match2.index = match2.index + offsetToAdd;
        }
        matches.push(match2);
      }
    }
    return matches;
  }
  getLinesContent() {
    return this._lines.slice(0);
  }
  getLineCount() {
    return this._lines.length;
  }
  getLineContent(lineNumber) {
    return this._lines[lineNumber - 1];
  }
  getWordAtPosition(position, wordDefinition) {
    const wordAtText = getWordAtText(position.column, ensureValidWordDefinition(wordDefinition), this._lines[position.lineNumber - 1], 0);
    if (wordAtText) {
      return new Range(position.lineNumber, wordAtText.startColumn, position.lineNumber, wordAtText.endColumn);
    }
    return null;
  }
  getWordUntilPosition(position, wordDefinition) {
    const wordAtPosition = this.getWordAtPosition(position, wordDefinition);
    if (!wordAtPosition) {
      return {
        word: "",
        startColumn: position.column,
        endColumn: position.column
      };
    }
    return {
      word: this._lines[position.lineNumber - 1].substring(wordAtPosition.startColumn - 1, position.column - 1),
      startColumn: wordAtPosition.startColumn,
      endColumn: position.column
    };
  }
  words(wordDefinition) {
    const lines = this._lines;
    const wordenize = this._wordenize.bind(this);
    let lineNumber = 0;
    let lineText = "";
    let wordRangesIdx = 0;
    let wordRanges = [];
    return {
      *[Symbol.iterator]() {
        while (true) {
          if (wordRangesIdx < wordRanges.length) {
            const value = lineText.substring(wordRanges[wordRangesIdx].start, wordRanges[wordRangesIdx].end);
            wordRangesIdx += 1;
            yield value;
          } else {
            if (lineNumber < lines.length) {
              lineText = lines[lineNumber];
              wordRanges = wordenize(lineText, wordDefinition);
              wordRangesIdx = 0;
              lineNumber += 1;
            } else {
              break;
            }
          }
        }
      }
    };
  }
  getLineWords(lineNumber, wordDefinition) {
    const content = this._lines[lineNumber - 1];
    const ranges = this._wordenize(content, wordDefinition);
    const words = [];
    for (const range of ranges) {
      words.push({
        word: content.substring(range.start, range.end),
        startColumn: range.start + 1,
        endColumn: range.end + 1
      });
    }
    return words;
  }
  _wordenize(content, wordDefinition) {
    const result = [];
    let match2;
    wordDefinition.lastIndex = 0;
    while (match2 = wordDefinition.exec(content)) {
      if (match2[0].length === 0) {
        break;
      }
      result.push({ start: match2.index, end: match2.index + match2[0].length });
    }
    return result;
  }
  getValueInRange(range) {
    range = this._validateRange(range);
    if (range.startLineNumber === range.endLineNumber) {
      return this._lines[range.startLineNumber - 1].substring(range.startColumn - 1, range.endColumn - 1);
    }
    const lineEnding = this._eol;
    const startLineIndex = range.startLineNumber - 1;
    const endLineIndex = range.endLineNumber - 1;
    const resultLines = [];
    resultLines.push(this._lines[startLineIndex].substring(range.startColumn - 1));
    for (let i = startLineIndex + 1; i < endLineIndex; i++) {
      resultLines.push(this._lines[i]);
    }
    resultLines.push(this._lines[endLineIndex].substring(0, range.endColumn - 1));
    return resultLines.join(lineEnding);
  }
  offsetAt(position) {
    position = this._validatePosition(position);
    this._ensureLineStarts();
    return this._lineStarts.getPrefixSum(position.lineNumber - 2) + (position.column - 1);
  }
  positionAt(offset) {
    offset = Math.floor(offset);
    offset = Math.max(0, offset);
    this._ensureLineStarts();
    const out = this._lineStarts.getIndexOf(offset);
    const lineLength = this._lines[out.index].length;
    return {
      lineNumber: 1 + out.index,
      column: 1 + Math.min(out.remainder, lineLength)
    };
  }
  _validateRange(range) {
    const start = this._validatePosition({ lineNumber: range.startLineNumber, column: range.startColumn });
    const end = this._validatePosition({ lineNumber: range.endLineNumber, column: range.endColumn });
    if (start.lineNumber !== range.startLineNumber || start.column !== range.startColumn || end.lineNumber !== range.endLineNumber || end.column !== range.endColumn) {
      return {
        startLineNumber: start.lineNumber,
        startColumn: start.column,
        endLineNumber: end.lineNumber,
        endColumn: end.column
      };
    }
    return range;
  }
  _validatePosition(position) {
    if (!Position.isIPosition(position)) {
      throw new Error("bad position");
    }
    let { lineNumber, column } = position;
    let hasChanged = false;
    if (lineNumber < 1) {
      lineNumber = 1;
      column = 1;
      hasChanged = true;
    } else if (lineNumber > this._lines.length) {
      lineNumber = this._lines.length;
      column = this._lines[lineNumber - 1].length + 1;
      hasChanged = true;
    } else {
      const maxCharacter = this._lines[lineNumber - 1].length + 1;
      if (column < 1) {
        column = 1;
        hasChanged = true;
      } else if (column > maxCharacter) {
        column = maxCharacter;
        hasChanged = true;
      }
    }
    if (!hasChanged) {
      return position;
    } else {
      return { lineNumber, column };
    }
  }
};

// out-build/vs/workbench/contrib/notebook/common/services/notebookCellMatching.js
function matchCellBasedOnSimilarties(modifiedCells, originalCells) {
  const cache = {
    modifiedToOriginal: /* @__PURE__ */ new Map(),
    originalToModified: /* @__PURE__ */ new Map()
  };
  const results = [];
  const mappedOriginalCellToModifiedCell = /* @__PURE__ */ new Map();
  const mappedModifiedIndexes = /* @__PURE__ */ new Set();
  const originalIndexWithMostEdits = /* @__PURE__ */ new Map();
  const canOriginalIndexBeMappedToModifiedIndex = (originalIndex, value) => {
    if (mappedOriginalCellToModifiedCell.has(originalIndex)) {
      return false;
    }
    const existingEdits = originalIndexWithMostEdits.get(originalIndex)?.dist ?? Number.MAX_SAFE_INTEGER;
    return value.editCount < existingEdits;
  };
  const trackMappedIndexes = (modifiedIndex, originalIndex) => {
    mappedOriginalCellToModifiedCell.set(originalIndex, modifiedIndex);
    mappedModifiedIndexes.add(modifiedIndex);
  };
  for (let i = 0; i < modifiedCells.length; i++) {
    const modifiedCell = modifiedCells[i];
    const { index, editCount: dist, percentage } = computeClosestCell({ cell: modifiedCell, index: i }, originalCells, true, cache, canOriginalIndexBeMappedToModifiedIndex);
    if (index >= 0 && dist === 0) {
      trackMappedIndexes(i, index);
      results.push({ modified: i, original: index, dist, percentage, possibleOriginal: index });
    } else {
      originalIndexWithMostEdits.set(index, { dist, modifiedIndex: i });
      results.push({ modified: i, original: -1, dist, percentage, possibleOriginal: index });
    }
  }
  results.forEach((result, i) => {
    if (result.original >= 0) {
      return;
    }
    const previousMatchedCell = i > 0 ? results.slice(0, i).reverse().find((r) => r.original >= 0) : void 0;
    const previousMatchedOriginalIndex = previousMatchedCell?.original ?? -1;
    const previousMatchedModifiedIndex = previousMatchedCell?.modified ?? -1;
    const matchedCell = results.slice(i + 1).find((r) => r.original >= 0);
    const unavailableIndexes = /* @__PURE__ */ new Set();
    const nextMatchedModifiedIndex = results.findIndex((item, idx) => idx > i && item.original >= 0);
    const nextMatchedOriginalIndex = nextMatchedModifiedIndex >= 0 ? results[nextMatchedModifiedIndex].original : -1;
    originalCells.forEach((_, i2) => {
      if (mappedOriginalCellToModifiedCell.has(i2)) {
        unavailableIndexes.add(i2);
        return;
      }
      if (matchedCell && i2 >= matchedCell.original) {
        unavailableIndexes.add(i2);
      }
      if (nextMatchedOriginalIndex >= 0 && i2 > nextMatchedOriginalIndex) {
        unavailableIndexes.add(i2);
      }
    });
    const modifiedCell = modifiedCells[i];
    if (result.original === -1 && result.possibleOriginal >= 0 && !unavailableIndexes.has(result.possibleOriginal) && canOriginalIndexBeMappedToModifiedIndex(result.possibleOriginal, { editCount: result.dist })) {
      trackMappedIndexes(i, result.possibleOriginal);
      result.original = result.possibleOriginal;
      return;
    }
    if (previousMatchedOriginalIndex > 0 && previousMatchedModifiedIndex > 0 && previousMatchedOriginalIndex === previousMatchedModifiedIndex) {
      if ((nextMatchedModifiedIndex >= 0 ? nextMatchedModifiedIndex : modifiedCells.length - 1) === (nextMatchedOriginalIndex >= 0 ? nextMatchedOriginalIndex : originalCells.length - 1) && !unavailableIndexes.has(i) && i < originalCells.length) {
        const remainingModifiedItems = (nextMatchedModifiedIndex >= 0 ? nextMatchedModifiedIndex : modifiedCells.length) - previousMatchedModifiedIndex;
        const remainingOriginalItems = (nextMatchedOriginalIndex >= 0 ? nextMatchedOriginalIndex : originalCells.length) - previousMatchedOriginalIndex;
        if (remainingModifiedItems === remainingOriginalItems && modifiedCell.cellKind === originalCells[i].cellKind) {
          trackMappedIndexes(i, i);
          result.original = i;
          return;
        }
      }
    }
    const { index, percentage } = computeClosestCell({ cell: modifiedCell, index: i }, originalCells, false, cache, (originalIndex, originalValue) => {
      if (unavailableIndexes.has(originalIndex)) {
        return false;
      }
      if (nextMatchedModifiedIndex > 0 || previousMatchedOriginalIndex > 0) {
        const matchesForThisOriginalIndex = cache.originalToModified.get(originalIndex);
        if (matchesForThisOriginalIndex && previousMatchedOriginalIndex < originalIndex) {
          const betterMatch = Array.from(matchesForThisOriginalIndex).find(([modifiedIndex, value]) => {
            if (modifiedIndex === i) {
              return false;
            }
            if (modifiedIndex >= nextMatchedModifiedIndex) {
              return false;
            }
            if (mappedModifiedIndexes.has(i)) {
              return false;
            }
            return value.editCount < originalValue.editCount;
          });
          if (betterMatch) {
            return false;
          }
        }
      }
      return !unavailableIndexes.has(originalIndex);
    });
    if (index >= 0 && i > 0 && results[i - 1].original === index - 1) {
      trackMappedIndexes(i, index);
      results[i].original = index;
      return;
    }
    const nextOriginalCell = i > 0 && originalCells.length > results[i - 1].original ? results[i - 1].original + 1 : -1;
    const nextOriginalCellValue = i > 0 && nextOriginalCell >= 0 && nextOriginalCell < originalCells.length ? originalCells[nextOriginalCell].getValue() : void 0;
    if (index >= 0 && i > 0 && typeof nextOriginalCellValue === "string" && !mappedOriginalCellToModifiedCell.has(nextOriginalCell)) {
      if (modifiedCell.getValue().includes(nextOriginalCellValue) || nextOriginalCellValue.includes(modifiedCell.getValue())) {
        trackMappedIndexes(i, nextOriginalCell);
        results[i].original = nextOriginalCell;
        return;
      }
    }
    if (percentage < 90 || i === 0 && results.length === 1) {
      trackMappedIndexes(i, index);
      results[i].original = index;
      return;
    }
  });
  return results;
}
function computeClosestCell({ cell, index: cellIndex }, arr, ignoreEmptyCells, cache, canOriginalIndexBeMappedToModifiedIndex) {
  let min_edits = Infinity;
  let min_index = -1;
  const internalId = cell.internalMetadata?.internalId;
  if (internalId) {
    const internalIdIndex = arr.findIndex((cell2) => cell2.internalMetadata?.internalId === internalId);
    if (internalIdIndex >= 0) {
      return { index: internalIdIndex, editCount: 0, percentage: Number.MAX_SAFE_INTEGER };
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].cellKind !== cell.cellKind) {
      continue;
    }
    const str = arr[i].getValue();
    const cacheEntry = cache.modifiedToOriginal.get(cellIndex) ?? /* @__PURE__ */ new Map();
    const value = cacheEntry.get(i) ?? { editCount: computeNumberOfEdits(cell, arr[i]) };
    cacheEntry.set(i, value);
    cache.modifiedToOriginal.set(cellIndex, cacheEntry);
    const originalCacheEntry = cache.originalToModified.get(i) ?? /* @__PURE__ */ new Map();
    originalCacheEntry.set(cellIndex, value);
    cache.originalToModified.set(i, originalCacheEntry);
    if (!canOriginalIndexBeMappedToModifiedIndex(i, value)) {
      continue;
    }
    if (str.length === 0 && ignoreEmptyCells) {
      continue;
    }
    if (str === cell.getValue() && cell.getValue().length > 0) {
      return { index: i, editCount: 0, percentage: 0 };
    }
    if (value.editCount < min_edits) {
      min_edits = value.editCount;
      min_index = i;
    }
  }
  if (min_index === -1) {
    return { index: -1, editCount: Number.MAX_SAFE_INTEGER, percentage: Number.MAX_SAFE_INTEGER };
  }
  const percentage = !cell.getValue().length && !arr[min_index].getValue().length ? 0 : cell.getValue().length ? min_edits * 100 / cell.getValue().length : Number.MAX_SAFE_INTEGER;
  return { index: min_index, editCount: min_edits, percentage };
}
function computeNumberOfEdits(modified, original) {
  if (modified.getValue() === original.getValue()) {
    return 0;
  }
  return computeLevenshteinDistance(modified.getValue(), original.getValue());
}

// out-build/vs/base/common/uuid.js
var generateUuid = function() {
  if (typeof crypto.randomUUID === "function") {
    return crypto.randomUUID.bind(crypto);
  }
  const _data = new Uint8Array(16);
  const _hex = [];
  for (let i = 0; i < 256; i++) {
    _hex.push(i.toString(16).padStart(2, "0"));
  }
  return function generateUuid2() {
    crypto.getRandomValues(_data);
    _data[6] = _data[6] & 15 | 64;
    _data[8] = _data[8] & 63 | 128;
    let i = 0;
    let result = "";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += "-";
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    result += _hex[_data[i++]];
    return result;
  };
}();

// out-build/vs/workbench/contrib/notebook/common/notebookDiff.js
function computeDiff(originalModel, modifiedModel, diffResult) {
  const cellChanges = diffResult.cellsDiff.changes;
  const cellDiffInfo = [];
  let originalCellIndex = 0;
  let modifiedCellIndex = 0;
  let firstChangeIndex = -1;
  for (let i = 0; i < cellChanges.length; i++) {
    const change = cellChanges[i];
    for (let j = 0; j < change.originalStart - originalCellIndex; j++) {
      const originalCell = originalModel.cells[originalCellIndex + j];
      const modifiedCell = modifiedModel.cells[modifiedCellIndex + j];
      if (originalCell.getHashValue() === modifiedCell.getHashValue()) {
        cellDiffInfo.push({
          originalCellIndex: originalCellIndex + j,
          modifiedCellIndex: modifiedCellIndex + j,
          type: "unchanged"
        });
      } else {
        if (firstChangeIndex === -1) {
          firstChangeIndex = cellDiffInfo.length;
        }
        cellDiffInfo.push({
          originalCellIndex: originalCellIndex + j,
          modifiedCellIndex: modifiedCellIndex + j,
          type: "modified"
        });
      }
    }
    const modifiedLCS = computeModifiedLCS(change, originalModel, modifiedModel);
    if (modifiedLCS.length && firstChangeIndex === -1) {
      firstChangeIndex = cellDiffInfo.length;
    }
    cellDiffInfo.push(...modifiedLCS);
    originalCellIndex = change.originalStart + change.originalLength;
    modifiedCellIndex = change.modifiedStart + change.modifiedLength;
  }
  for (let i = originalCellIndex; i < originalModel.cells.length; i++) {
    cellDiffInfo.push({
      originalCellIndex: i,
      modifiedCellIndex: i - originalCellIndex + modifiedCellIndex,
      type: "unchanged"
    });
  }
  return {
    cellDiffInfo,
    firstChangeIndex
  };
}
function computeModifiedLCS(change, originalModel, modifiedModel) {
  const result = [];
  const modifiedLen = Math.min(change.originalLength, change.modifiedLength);
  for (let j = 0; j < modifiedLen; j++) {
    const originalCell = originalModel.cells[change.originalStart + j];
    const modifiedCell = modifiedModel.cells[change.modifiedStart + j];
    if (originalCell.cellKind !== modifiedCell.cellKind) {
      result.push({
        originalCellIndex: change.originalStart + j,
        type: "delete"
      });
      result.push({
        modifiedCellIndex: change.modifiedStart + j,
        type: "insert"
      });
    } else {
      const isTheSame = originalCell.equal(modifiedCell);
      result.push({
        originalCellIndex: change.originalStart + j,
        modifiedCellIndex: change.modifiedStart + j,
        type: isTheSame ? "unchanged" : "modified"
      });
    }
  }
  for (let j = modifiedLen; j < change.originalLength; j++) {
    result.push({
      originalCellIndex: change.originalStart + j,
      type: "delete"
    });
  }
  for (let j = modifiedLen; j < change.modifiedLength; j++) {
    result.push({
      modifiedCellIndex: change.modifiedStart + j,
      type: "insert"
    });
  }
  return result;
}

// out-build/vs/workbench/contrib/notebook/common/services/notebookWebWorker.js
var PREFIX_FOR_UNMATCHED_ORIGINAL_CELLS = `unmatchedOriginalCell`;
var MirrorCell = class {
  get eol() {
    return this._eol === "\r\n" ? 2 : 1;
  }
  constructor(handle, uri, source, _eol, versionId, language2, cellKind, outputs, metadata, internalMetadata) {
    this.handle = handle;
    this._eol = _eol;
    this.language = language2;
    this.cellKind = cellKind;
    this.outputs = outputs;
    this.metadata = metadata;
    this.internalMetadata = internalMetadata;
    this.textModel = new MirrorModel(uri, source, _eol, versionId);
  }
  onEvents(e) {
    this.textModel.onEvents(e);
    this._hash = void 0;
  }
  getValue() {
    return this.textModel.getValue();
  }
  getLinesContent() {
    return this.textModel.getLinesContent();
  }
  getComparisonValue() {
    return this._hash ??= this._getHash();
  }
  _getHash() {
    let hashValue = numberHash(104579, 0);
    hashValue = doHash(this.language, hashValue);
    hashValue = doHash(this.getValue(), hashValue);
    hashValue = doHash(this.metadata, hashValue);
    hashValue = doHash(this.internalMetadata?.internalId || "", hashValue);
    for (const op of this.outputs) {
      hashValue = doHash(op.metadata, hashValue);
      for (const output of op.outputs) {
        hashValue = doHash(output.mime, hashValue);
      }
    }
    const digests = this.outputs.flatMap((op) => op.outputs.map((o) => hash(Array.from(o.data.buffer))));
    for (const digest of digests) {
      hashValue = numberHash(digest, hashValue);
    }
    return hashValue;
  }
};
var MirrorNotebookDocument = class {
  constructor(uri, cells, metadata, transientDocumentMetadata) {
    this.uri = uri;
    this.cells = cells;
    this.metadata = metadata;
    this.transientDocumentMetadata = transientDocumentMetadata;
  }
  acceptModelChanged(event) {
    event.rawEvents.forEach((e) => {
      if (e.kind === NotebookCellsChangeType.ModelChange) {
        this._spliceNotebookCells(e.changes);
      } else if (e.kind === NotebookCellsChangeType.Move) {
        const cells = this.cells.splice(e.index, 1);
        this.cells.splice(e.newIdx, 0, ...cells);
      } else if (e.kind === NotebookCellsChangeType.Output) {
        const cell = this.cells[e.index];
        cell.outputs = e.outputs;
      } else if (e.kind === NotebookCellsChangeType.ChangeCellLanguage) {
        this._assertIndex(e.index);
        const cell = this.cells[e.index];
        cell.language = e.language;
      } else if (e.kind === NotebookCellsChangeType.ChangeCellMetadata) {
        this._assertIndex(e.index);
        const cell = this.cells[e.index];
        cell.metadata = e.metadata;
      } else if (e.kind === NotebookCellsChangeType.ChangeCellInternalMetadata) {
        this._assertIndex(e.index);
        const cell = this.cells[e.index];
        cell.internalMetadata = e.internalMetadata;
      } else if (e.kind === NotebookCellsChangeType.ChangeDocumentMetadata) {
        this.metadata = e.metadata;
      }
    });
  }
  _assertIndex(index) {
    if (index < 0 || index >= this.cells.length) {
      throw new Error(`Illegal index ${index}. Cells length: ${this.cells.length}`);
    }
  }
  _spliceNotebookCells(splices) {
    splices.reverse().forEach((splice) => {
      const cellDtos = splice[2];
      const newCells = cellDtos.map((cell) => {
        return new MirrorCell(cell.handle, URI.parse(cell.url), cell.source, cell.eol, cell.versionId, cell.language, cell.cellKind, cell.outputs, cell.metadata);
      });
      this.cells.splice(splice[0], splice[1], ...newCells);
    });
  }
};
var CellSequence = class _CellSequence {
  static create(textModel) {
    const hashValue = textModel.cells.map((c) => c.getComparisonValue());
    return new _CellSequence(hashValue);
  }
  static createWithCellId(cells, includeCellContents) {
    const hashValue = cells.map((c) => {
      if (includeCellContents) {
        return `${doHash(c.internalMetadata?.internalId, numberHash(104579, 0))}#${c.getComparisonValue()}`;
      } else {
        return `${doHash(c.internalMetadata?.internalId, numberHash(104579, 0))}}`;
      }
    });
    return new _CellSequence(hashValue);
  }
  constructor(hashValue) {
    this.hashValue = hashValue;
  }
  getElements() {
    return this.hashValue;
  }
};
var NotebookWorker = class {
  constructor() {
    this._models = /* @__PURE__ */ Object.create(null);
  }
  dispose() {
  }
  $acceptNewModel(uri, metadata, transientDocumentMetadata, cells) {
    this._models[uri] = new MirrorNotebookDocument(URI.parse(uri), cells.map((dto) => new MirrorCell(dto.handle, URI.parse(dto.url), dto.source, dto.eol, dto.versionId, dto.language, dto.cellKind, dto.outputs, dto.metadata, dto.internalMetadata)), metadata, transientDocumentMetadata);
  }
  $acceptModelChanged(strURL, event) {
    const model = this._models[strURL];
    model?.acceptModelChanged(event);
  }
  $acceptCellModelChanged(strURL, handle, event) {
    const model = this._models[strURL];
    model.cells.find((cell) => cell.handle === handle)?.onEvents(event);
  }
  $acceptRemovedModel(strURL) {
    if (!this._models[strURL]) {
      return;
    }
    delete this._models[strURL];
  }
  async $computeDiff(originalUrl, modifiedUrl) {
    const original = this._getModel(originalUrl);
    const modified = this._getModel(modifiedUrl);
    const originalModel = new NotebookTextModelFacade(original);
    const modifiedModel = new NotebookTextModelFacade(modified);
    const originalMetadata = filter(original.metadata, (key) => !original.transientDocumentMetadata[key]);
    const modifiedMetadata = filter(modified.metadata, (key) => !modified.transientDocumentMetadata[key]);
    const metadataChanged = JSON.stringify(originalMetadata) !== JSON.stringify(modifiedMetadata);
    const originalDiff = new LcsDiff(CellSequence.create(original), CellSequence.create(modified)).ComputeDiff(false);
    if (originalDiff.changes.length === 0) {
      return {
        metadataChanged,
        cellsDiff: originalDiff
      };
    }
    const cellMapping = computeDiff(originalModel, modifiedModel, { cellsDiff: { changes: originalDiff.changes, quitEarly: false }, metadataChanged: false }).cellDiffInfo;
    if (cellMapping.every((c) => c.type === "modified")) {
      return {
        metadataChanged,
        cellsDiff: originalDiff
      };
    }
    let diffUsingCellIds = this.canComputeDiffWithCellIds(original, modified);
    if (!diffUsingCellIds) {
      const result = matchCellBasedOnSimilarties(modified.cells, original.cells);
      if (result.some((c) => c.original !== -1)) {
        this.updateCellIdsBasedOnMappings(result, original.cells, modified.cells);
        diffUsingCellIds = true;
      }
    }
    if (!diffUsingCellIds) {
      return {
        metadataChanged,
        cellsDiff: originalDiff
      };
    }
    const cellsInsertedOrDeletedDiff = new LcsDiff(CellSequence.createWithCellId(original.cells), CellSequence.createWithCellId(modified.cells)).ComputeDiff(false);
    const cellDiffInfo = computeDiff(originalModel, modifiedModel, { cellsDiff: { changes: cellsInsertedOrDeletedDiff.changes, quitEarly: false }, metadataChanged: false }).cellDiffInfo;
    let processedIndex = 0;
    const changes = [];
    cellsInsertedOrDeletedDiff.changes.forEach((change) => {
      if (!change.originalLength && change.modifiedLength) {
        const changeIndex = cellDiffInfo.findIndex((c) => c.type === "insert" && c.modifiedCellIndex === change.modifiedStart);
        cellDiffInfo.slice(processedIndex, changeIndex).forEach((c) => {
          if (c.type === "unchanged" || c.type === "modified") {
            const originalCell = original.cells[c.originalCellIndex];
            const modifiedCell = modified.cells[c.modifiedCellIndex];
            const changed = c.type === "modified" || originalCell.getComparisonValue() !== modifiedCell.getComparisonValue();
            if (changed) {
              changes.push(new DiffChange(c.originalCellIndex, 1, c.modifiedCellIndex, 1));
            }
          }
        });
        changes.push(change);
        processedIndex = changeIndex + 1;
      } else if (change.originalLength && !change.modifiedLength) {
        const changeIndex = cellDiffInfo.findIndex((c) => c.type === "delete" && c.originalCellIndex === change.originalStart);
        cellDiffInfo.slice(processedIndex, changeIndex).forEach((c) => {
          if (c.type === "unchanged" || c.type === "modified") {
            const originalCell = original.cells[c.originalCellIndex];
            const modifiedCell = modified.cells[c.modifiedCellIndex];
            const changed = c.type === "modified" || originalCell.getComparisonValue() !== modifiedCell.getComparisonValue();
            if (changed) {
              changes.push(new DiffChange(c.originalCellIndex, 1, c.modifiedCellIndex, 1));
            }
          }
        });
        changes.push(change);
        processedIndex = changeIndex + 1;
      } else {
        const changeIndex = cellDiffInfo.findIndex((c) => c.type === "delete" && c.originalCellIndex === change.originalStart || c.type === "insert" && c.modifiedCellIndex === change.modifiedStart);
        cellDiffInfo.slice(processedIndex, changeIndex).forEach((c) => {
          if (c.type === "unchanged" || c.type === "modified") {
            const originalCell = original.cells[c.originalCellIndex];
            const modifiedCell = modified.cells[c.modifiedCellIndex];
            const changed = c.type === "modified" || originalCell.getComparisonValue() !== modifiedCell.getComparisonValue();
            if (changed) {
              changes.push(new DiffChange(c.originalCellIndex, 1, c.modifiedCellIndex, 1));
            }
          }
        });
        changes.push(change);
        processedIndex = changeIndex + 1;
      }
    });
    cellDiffInfo.slice(processedIndex).forEach((c) => {
      if (c.type === "unchanged" || c.type === "modified") {
        const originalCell = original.cells[c.originalCellIndex];
        const modifiedCell = modified.cells[c.modifiedCellIndex];
        const changed = c.type === "modified" || originalCell.getComparisonValue() !== modifiedCell.getComparisonValue();
        if (changed) {
          changes.push(new DiffChange(c.originalCellIndex, 1, c.modifiedCellIndex, 1));
        }
      }
    });
    return {
      metadataChanged,
      cellsDiff: {
        changes,
        quitEarly: false
      }
    };
  }
  canComputeDiffWithCellIds(original, modified) {
    return this.canComputeDiffWithCellInternalIds(original, modified) || this.canComputeDiffWithCellMetadataIds(original, modified);
  }
  canComputeDiffWithCellInternalIds(original, modified) {
    const originalCellIndexIds = original.cells.map((cell, index) => ({ index, id: cell.internalMetadata?.internalId || "" }));
    const modifiedCellIndexIds = modified.cells.map((cell, index) => ({ index, id: cell.internalMetadata?.internalId || "" }));
    if (originalCellIndexIds.some((c) => !c.id) || modifiedCellIndexIds.some((c) => !c.id)) {
      return false;
    }
    return originalCellIndexIds.some((c) => modifiedCellIndexIds.find((m) => m.id === c.id));
  }
  canComputeDiffWithCellMetadataIds(original, modified) {
    const originalCellIndexIds = original.cells.map((cell, index) => ({ index, id: cell.metadata?.id || "" }));
    const modifiedCellIndexIds = modified.cells.map((cell, index) => ({ index, id: cell.metadata?.id || "" }));
    if (originalCellIndexIds.some((c) => !c.id) || modifiedCellIndexIds.some((c) => !c.id)) {
      return false;
    }
    if (originalCellIndexIds.every((c) => !modifiedCellIndexIds.find((m) => m.id === c.id))) {
      return false;
    }
    original.cells.map((cell, index) => {
      cell.internalMetadata = cell.internalMetadata || {};
      cell.internalMetadata.internalId = cell.metadata?.id || "";
    });
    modified.cells.map((cell, index) => {
      cell.internalMetadata = cell.internalMetadata || {};
      cell.internalMetadata.internalId = cell.metadata?.id || "";
    });
    return true;
  }
  isOriginalCellMatchedWithModifiedCell(originalCell) {
    return (originalCell.internalMetadata?.internalId || "").startsWith(PREFIX_FOR_UNMATCHED_ORIGINAL_CELLS);
  }
  updateCellIdsBasedOnMappings(mappings, originalCells, modifiedCells) {
    const uuids = /* @__PURE__ */ new Map();
    originalCells.map((cell, index) => {
      cell.internalMetadata = cell.internalMetadata || { internalId: "" };
      cell.internalMetadata.internalId = `${PREFIX_FOR_UNMATCHED_ORIGINAL_CELLS}${generateUuid()}`;
      const found = mappings.find((r) => r.original === index);
      if (found) {
        cell.internalMetadata.internalId = generateUuid();
        uuids.set(found.modified, cell.internalMetadata.internalId);
      }
    });
    modifiedCells.map((cell, index) => {
      cell.internalMetadata = cell.internalMetadata || { internalId: "" };
      cell.internalMetadata.internalId = uuids.get(index) ?? generateUuid();
    });
    return true;
  }
  $canPromptRecommendation(modelUrl) {
    const model = this._getModel(modelUrl);
    const cells = model.cells;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      if (cell.cellKind === CellKind.Markup) {
        continue;
      }
      if (cell.language !== "python") {
        continue;
      }
      const searchParams = new SearchParams("import\\s*pandas|from\\s*pandas", true, false, null);
      const searchData = searchParams.parseSearchRequest();
      if (!searchData) {
        continue;
      }
      const builder = new PieceTreeTextBufferBuilder();
      builder.acceptChunk(cell.getValue());
      const bufferFactory = builder.finish(true);
      const textBuffer = bufferFactory.create(cell.eol).textBuffer;
      const lineCount = textBuffer.getLineCount();
      const maxLineCount = Math.min(lineCount, 20);
      const range = new Range(1, 1, maxLineCount, textBuffer.getLineLength(maxLineCount) + 1);
      const cellMatches = textBuffer.findMatchesLineByLine(range, searchData, true, 1);
      if (cellMatches.length > 0) {
        return true;
      }
    }
    return false;
  }
  _getModel(uri) {
    return this._models[uri];
  }
};
function create() {
  return new NotebookWorker();
}
var NotebookTextModelFacade = class {
  constructor(notebook) {
    this.notebook = notebook;
    this.cells = notebook.cells.map((cell) => new NotebookCellTextModelFacade(cell));
  }
};
var NotebookCellTextModelFacade = class {
  get cellKind() {
    return this.cell.cellKind;
  }
  constructor(cell) {
    this.cell = cell;
  }
  getHashValue() {
    return this.cell.getComparisonValue();
  }
  equal(cell) {
    if (cell.cellKind !== this.cellKind) {
      return false;
    }
    return this.getHashValue() === cell.getHashValue();
  }
};

// out-build/vs/workbench/contrib/notebook/common/services/notebookWebWorkerMain.js
bootstrapWebWorker(create);

//# sourceMappingURL=notebookWebWorkerMain.js.map
