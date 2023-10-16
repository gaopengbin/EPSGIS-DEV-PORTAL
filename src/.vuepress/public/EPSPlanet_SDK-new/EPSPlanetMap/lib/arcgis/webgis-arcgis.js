var tt = (s, i, t) => {
  if (!i.has(s))
    throw TypeError("Cannot " + t);
};
var r = (s, i, t) => (tt(s, i, "read from private field"), t ? t.call(s) : i.get(s)), a = (s, i, t) => {
  if (i.has(s))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(s) : i.set(s, t);
}, l = (s, i, t, e) => (tt(s, i, "write to private field"), e ? e.call(s, t) : i.set(s, t), t);
var o = (s, i, t) => (tt(s, i, "access private method"), t);
import ht from "@arcgis/core/Map";
import bt from "@arcgis/core/views/SceneView";
import Ot from "@arcgis/core/views/MapView";
var p = /* @__PURE__ */ ((s) => (s[s.none = 0] = "none", s[s.funOnly = 1] = "funOnly", s[s.propOnly = 2] = "propOnly", s[s.always = 3] = "always", s))(p || {});
const lt = (s) => (i) => (i.prototype._manifest = At(s), customElements.define(s.tagName, i), i), At = (s) => (s = Object.assign({
  hasConfig: !1,
  mode: p.always
}, s), s), rt = (s) => {
  Promise ? Promise.resolve().then(s) : requestAnimationFrame ? requestAnimationFrame(s) : setTimeout(s, 0);
};
const It = `<div class="error">\r
    <div class="info">\r
        <div>\r
            <p>软件未授权，请联系软件提供商，获取授权码！</p>\r
            <a href="">刷新</a>\r
        </div>\r
    </div>\r
</div>`, Lt = `<div class="develop">\r
    开发预览版，有限期至【】@山维科技\r
</div>`;
var O, w, z, ct, U, ft, A, F, pt, g, d, G, gt, I, q;
const b = class {
  constructor() {
    /**
     * 脱密
     * @param str 
     * @param pwd 
     * @returns 
     */
    a(this, z);
    /**
     * 验证授权
     * @param licenses 
     */
    a(this, U);
    // 服务器时间
    /**
     * 获取服务器时间
     * @returns 
     */
    a(this, F);
    /**
     * 右下角显示开发版内容
     */
    a(this, G);
    /**
     * 显示未授权
     */
    a(this, I);
    a(this, w, "开发版");
    a(this, A, null);
    a(this, g, null);
    a(this, d, null);
    if (new.target === b)
      return r(b, O) || l(b, O, this), r(b, O);
  }
  // 授权类型
  /**
   * 授权类型
   */
  get authtype() {
    return r(this, w);
  }
  /**
   * 是否授权
   */
  get authorized() {
    return o(this, U, ft).call(this);
  }
};
let x = b;
O = new WeakMap(), w = new WeakMap(), z = new WeakSet(), ct = function(i, t) {
  try {
    if (!i || i.length < 8)
      return "";
    t || (t = "sunway_webgis_auth_code"), t = encodeURIComponent(t);
    let e = "";
    for (let u = 0; u < t.length; u += 1)
      e += t.charCodeAt(u).toString();
    let n = Math.floor(e.length / 5), h = parseInt(e.charAt(n) + e.charAt(n * 2) + e.charAt(n * 3) + e.charAt(n * 4) + e.charAt(n * 5)), c = Math.round(t.length / 2), f = Math.pow(2, 31) - 1, k = parseInt(i.substring(i.length - 8, i.length), 16);
    for (i = i.substring(0, i.length - 8), e += k; e.length > 10; )
      e = (parseInt(e.substring(0, 10)) + parseInt(e.substring(10, e.length))).toString();
    e = (h * e + c) % f;
    let j = "", nt = "";
    for (let u = 0; u < i.length; u += 2)
      j = parseInt(i.substring(u, u + 2), 16) ^ Math.floor(e / f * 255), nt += String.fromCharCode(j), e = (h * e + c) % f;
    return decodeURIComponent(nt);
  } catch {
    return "";
  }
}, U = new WeakSet(), ft = function() {
  const i = o(this, z, ct).call(this, window.licenses), t = i.split("|")[0], e = i.split("|")[1];
  l(this, w, i.split("|")[2]);
  let n = window.location.hostname.toUpperCase();
  if (n === "LOCALHOST" || n == "127.0.0.1")
    return !0;
  let h = !1;
  if (t.split(",").forEach((j) => {
    if (j.toUpperCase() === n) {
      h = !0;
      return;
    }
  }), !h)
    return o(this, I, q).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  if (typeof e > "u")
    return o(this, I, q).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  const f = o(this, F, pt).call(this), k = new Date(e);
  return f.getTime() > k.getTime() ? (o(this, I, q).call(this, r(this, w) + "有限期至【" + e + "】已过期，请重新授权！@山维科技"), !1) : (r(this, w) != "正式版" && o(this, G, gt).call(this, "开发预览版，有限期至【" + e + "】@山维科技"), !0);
}, A = new WeakMap(), F = new WeakSet(), pt = function() {
  if (!r(this, A)) {
    const i = new window.XMLHttpRequest();
    i.open("GET", "/", !1), i.send(null);
    const t = i.getResponseHeader("Date");
    l(this, A, new Date(t));
  }
  return r(this, A);
}, g = new WeakMap(), d = new WeakMap(), G = new WeakSet(), gt = function(i) {
  r(this, d) || (l(this, d, document.createElement("div")), r(this, d).style.zIndex = "999", r(this, d).classList.add("auth"), r(this, d).innerHTML = Lt, document.body.appendChild(r(this, d)));
  const t = r(this, d).getElementsByClassName("develop")[0];
  t.innerHTML = i;
}, I = new WeakSet(), q = function(i) {
  r(this, g) || (l(this, g, document.createElement("div")), r(this, g).style.zIndex = "1000", r(this, g).classList.add("auth"), r(this, g).innerHTML = It, document.body.appendChild(r(this, g)));
  const t = r(this, g).getElementsByTagName("p")[0];
  t.innerHTML = i;
}, // 单例模式
a(x, O, void 0);
var L, T, $, M, V, _, E, D, y, W, P, et, X, dt, J, ut, H, B, S, K, mt, N, it, Q, wt, R, st, Y, yt, Z, Ct, C, m, v;
class Tt extends HTMLElement {
  // 需要双向绑定的属性
  constructor() {
    super();
    /**
     * 加载config
     * 当config不存在时，从文件加载config
     */
    a(this, P);
    /**
     * loading状态改变
     */
    a(this, X);
    /**
     * 初始化方法，用于初始化Dom
     */
    a(this, J);
    /**
     * 对象劫持
     * @param {any} value 
     * @returns {any}
     */
    a(this, H);
    /**
     * 延迟执行刷新 防抖 
     * 主要是防止数组的length也会触发刷新
     * @returns 
     */
    a(this, K);
    /**
     * 刷新所有 #labelTag 标签内容 该处为全部刷新，防止遗漏
     * {{}}已经被 #labelTag 标签替换
     */
    a(this, N);
    /**
     * 绑定属性
     * @param att 需要绑定的属性 如 value
     */
    a(this, Q);
    /**
     * 获取指定属性值
     * @param {string} origin 需要获取的属性 如a.b
     * @returns 对应属性的值
     */
    a(this, R);
    /**
     * 设置$data中的属性
     * @param key 
     * @param value 
     */
    a(this, Y);
    /**
     * 给dom绑定$this，指向当前组件
     */
    a(this, Z);
    /**
     * 组件初始化方法，只初始化一次
     * 需要判断所有必要条件添加完成再进行初始化
     */
    a(this, m);
    // 任意的string索引List
    // 一些私有属性
    a(this, L, void 0);
    a(this, T, void 0);
    a(this, $, void 0);
    a(this, M, void 0);
    a(this, V, void 0);
    a(this, _, void 0);
    a(this, E, "w-l");
    // label标签的名称
    a(this, D, !1);
    // 渲染是否完成
    a(this, y, p.none);
    //组件模式
    a(this, W, ["value", "src", "title"]);
    a(this, S, !1);
    /**
     * 组件初始化状态，设置多个用于防抖
     * unInited 未初始化
     * initing 正在初始化
     * inited 已经初始化
     */
    a(this, C, "unInited");
    new x().authorized && (this.manifest.hasConfig && o(this, P, et).call(this, this.getAttribute("config") || this.getAttribute("configUrl")), l(this, y, this.manifest.mode ?? p.always), rt(() => {
      o(this, J, ut).call(this), o(this, m, v).call(this);
    }));
  }
  /**
   * 手动启动初始化的方法
   * @param args 初始化的必要参数
   */
  startup(t) {
    this.mapView = t.mapView, this.map = t.map, this.mapConfig = t.mapConfig, this.config = t.config;
  }
  /**
   * 组件的创建参数
   */
  get manifest() {
    return this._manifest;
  }
  /**
   * 当前组件所在地图的配置 类似于之前的appConfig
   */
  get mapConfig() {
    return r(this, L);
  }
  set mapConfig(t) {
    !r(this, L) && t && (l(this, L, t), o(this, m, v).call(this));
  }
  /**
   * 组件所在地图的原型，如果组件本身为地图，则指向自身
   */
  get mapView() {
    return r(this, T);
  }
  set mapView(t) {
    !r(this, T) && t && (l(this, T, t), o(this, m, v).call(this));
  }
  /**
    * 当前组件所在地图
    */
  get map() {
    return r(this, $);
  }
  set map(t) {
    !r(this, $) && t && (l(this, $, t), o(this, m, v).call(this));
  }
  /**
    * 当前组件的配置
    */
  get config() {
    return r(this, M);
  }
  set config(t) {
    if (typeof t == "string") {
      o(this, P, et).call(this, t);
      return;
    } else
      typeof t == "object" && !r(this, M) && t && (l(this, M, t), o(this, m, v).call(this));
  }
  /**
   * 加载中
   */
  get loading() {
    return !!r(this, V);
  }
  set loading(t) {
    l(this, V, t), o(this, X, dt).call(this);
  }
  /**
   * 用于渲染html的数据
   */
  get $data() {
    return r(this, _);
  }
  set $data(t) {
    (r(this, y) & p.propOnly) == p.propOnly ? (l(this, _, o(this, H, B).call(this, t)), o(this, N, it).call(this)) : l(this, _, t);
  }
  /**
   * 是否可以开始初始化，该方法可以被重写
   * @returns 是否可以开始初始化
   */
  isReady() {
    return !!(this.map && this.mapView && this.mapConfig && (this.config || !this.manifest.hasConfig));
  }
  /**
   * 组件初始化方法
   */
  async onInit() {
  }
  /**
   * 初始化完成之后调用的方法，该方法可以被重写
   */
  afterInit() {
  }
  /**
   * 当组件被打开
   */
  onOpen() {
  }
  /**
   * 当组件被关闭
   */
  onClose() {
  }
}
L = new WeakMap(), T = new WeakMap(), $ = new WeakMap(), M = new WeakMap(), V = new WeakMap(), _ = new WeakMap(), E = new WeakMap(), D = new WeakMap(), y = new WeakMap(), W = new WeakMap(), P = new WeakSet(), et = async function(t) {
  if (!this.config && t) {
    this.loading = !0;
    const e = await fetch(t);
    this.config = e && e.ok && await e.json() || {}, this.loading = !1;
  }
}, X = new WeakSet(), dt = function() {
  this.loading ? this.classList.add("loading") : this.classList.remove("loading");
}, J = new WeakSet(), ut = function() {
  const t = this.manifest.className || this.manifest.tagName;
  if (this.classList.add(t), this.manifest.template) {
    let e = this.manifest.template;
    (r(this, y) & p.propOnly) == p.propOnly && (e = e.replace(/\{\{(.+?)\}\}/g, (...n) => `<${r(this, E)}>${n[1]}</${r(this, E)}>`)), this.innerHTML = e, (r(this, y) & p.funOnly) == p.funOnly && o(this, Z, Ct).call(this);
  }
  l(this, D, !0);
}, H = new WeakSet(), B = function(t) {
  return typeof t == "object" && t !== null ? (Object.keys(t).forEach((e) => {
    t[e] = o(this, H, B).call(this, t[e]);
  }), new Proxy(t, {
    set: (e, n, h) => (e[n] = o(this, H, B).call(this, h), o(this, K, mt).call(this), !0)
    // get: (obj, p) => {
    //     // 判断是否需要刷新dom
    //     return obj[p];
    // },
  })) : t;
}, S = new WeakMap(), K = new WeakSet(), mt = function() {
  r(this, S) || (l(this, S, !0), rt(() => {
    o(this, N, it).call(this), l(this, S, !1);
  }));
}, N = new WeakSet(), it = function() {
  r(this, W).forEach((e) => {
    o(this, Q, wt).call(this, e);
  }), this.querySelectorAll(r(this, E)).forEach((e) => {
    const n = o(this, R, st).call(this, e.origin);
    String(n) !== e.innerHTML && (e.innerHTML = n);
  });
}, Q = new WeakSet(), wt = function(t) {
  const e = `s-${t}`;
  this.querySelectorAll(`[${e}]`).forEach((h) => {
    const c = h.getAttribute(e), f = o(this, R, st).call(this, c);
    f !== h[t] && (h[t] = f);
  });
}, R = new WeakSet(), st = function(t) {
  try {
    return t.split(".").reduce((e, n) => e[n], this.$data);
  } catch (e) {
    console.error(e);
    return;
  }
}, Y = new WeakSet(), yt = function(t, e) {
  let n = this.$data, h = t.split(".");
  for (let c = 0; c < h.length; c++) {
    const f = h[c];
    c == h.length - 1 ? n[f] = e : n = n[f];
  }
}, Z = new WeakSet(), Ct = function() {
  this.querySelectorAll("*").forEach((e) => {
    e.$this || (e.$this = this, e.$set = (n, h) => {
      o(this, Y, yt).call(this, n, h);
    });
  });
}, C = new WeakMap(), m = new WeakSet(), v = async function() {
  r(this, D) && (r(this, C) === "initing" || r(this, C) === "inited" || this.isReady() && (l(this, C, "initing"), this.loading = !0, await this.onInit(), this.loading = !1, l(this, C, "inited"), this.afterInit()));
};
class vt extends Tt {
  constructor() {
    super();
  }
  /**
   * 重写基类的isReady方法
   * 地图只需要加载config就可以初始化了
   * @returns 是否可以开始初始化
   */
  isReady() {
    return !!this.config;
  }
  /**
   * 加载该map的其他组件
   */
  afterInit() {
    this.mapConfig = this.config, this.mapView = this;
    const i = this.mapConfig.widgetManager || "webgis-widget-manager", t = document.createElement(i);
    t.startup({
      mapView: this,
      map: this.map,
      config: this.mapConfig.widgets,
      mapConfig: this.mapConfig
    }), this.childNodes[0] ? this.insertBefore(t, this.childNodes[0]) : this.appendChild(t);
  }
}
var $t = Object.defineProperty, Mt = Object.getOwnPropertyDescriptor, _t = (s, i, t, e) => {
  for (var n = e > 1 ? void 0 : e ? Mt(i, t) : i, h = s.length - 1, c; h >= 0; h--)
    (c = s[h]) && (n = (e ? c(i, t, n) : c(n)) || n);
  return e && n && $t(i, t, n), n;
};
let at = class extends vt {
  constructor() {
    super();
  }
  async onInit() {
    const s = new ht({
      basemap: "satellite",
      ground: "world-elevation"
    }), i = new bt({
      scale: 123456789,
      container: this,
      map: s,
      spatialReference: {
        wkid: 3857
      }
    });
    this.map = i;
  }
};
at = _t([
  lt({
    tagName: "arcgis-map",
    className: "arcgis-map",
    hasConfig: !0
  })
], at);
var Et = Object.defineProperty, Ht = Object.getOwnPropertyDescriptor, St = (s, i, t, e) => {
  for (var n = e > 1 ? void 0 : e ? Ht(i, t) : i, h = s.length - 1, c; h >= 0; h--)
    (c = s[h]) && (n = (e ? c(i, t, n) : c(n)) || n);
  return e && n && Et(i, t, n), n;
};
let ot = class extends vt {
  constructor() {
    super();
  }
  async onInit() {
    const s = new ht({
      basemap: "satellite"
    }), i = new Ot({
      scale: 123456789,
      container: this,
      map: s,
      spatialReference: {
        wkid: 3857
      }
    });
    this.map = i;
  }
};
ot = St([
  lt({
    tagName: "arcgis2d-map",
    className: "arcgis2d-map",
    hasConfig: !0
  })
], ot);
export {
  ot as ArcGIS2DMapView,
  at as ArcGISMapView
};
