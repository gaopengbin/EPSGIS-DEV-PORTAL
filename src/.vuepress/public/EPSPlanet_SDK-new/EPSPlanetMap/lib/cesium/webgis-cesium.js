var tt = (s, i, t) => {
  if (!i.has(s))
    throw TypeError("Cannot " + t);
};
var n = (s, i, t) => (tt(s, i, "read from private field"), t ? t.call(s) : i.get(s)), r = (s, i, t) => {
  if (i.has(s))
    throw TypeError("Cannot add the same private member more than once");
  i instanceof WeakSet ? i.add(s) : i.set(s, t);
}, l = (s, i, t, e) => (tt(s, i, "write to private field"), e ? e.call(s, t) : i.set(s, t), t);
var o = (s, i, t) => (tt(s, i, "access private method"), t);
import * as yt from "cesium";
var d = /* @__PURE__ */ ((s) => (s[s.none = 0] = "none", s[s.funOnly = 1] = "funOnly", s[s.propOnly = 2] = "propOnly", s[s.always = 3] = "always", s))(d || {});
const wt = (s) => (i) => (i.prototype._manifest = Ct(s), customElements.define(s.tagName, i), i), Ct = (s) => (s = Object.assign({
  hasConfig: !1,
  mode: d.always
}, s), s), rt = (s) => {
  Promise ? Promise.resolve().then(s) : requestAnimationFrame ? requestAnimationFrame(s) : setTimeout(s, 0);
};
const bt = `<div class="error">\r
    <div class="info">\r
        <div>\r
            <p>软件未授权，请联系软件提供商，获取授权码！</p>\r
            <a href="">刷新</a>\r
        </div>\r
    </div>\r
</div>`, vt = `<div class="develop">\r
    开发预览版，有限期至【】@山维科技\r
</div>`;
var A, y, U, ot, z, ht, I, F, lt, u, g, W, ct, L, B;
const v = class {
  constructor() {
    /**
     * 脱密
     * @param str 
     * @param pwd 
     * @returns 
     */
    r(this, U);
    /**
     * 验证授权
     * @param licenses 
     */
    r(this, z);
    // 服务器时间
    /**
     * 获取服务器时间
     * @returns 
     */
    r(this, F);
    /**
     * 右下角显示开发版内容
     */
    r(this, W);
    /**
     * 显示未授权
     */
    r(this, L);
    r(this, y, "开发版");
    r(this, I, null);
    r(this, u, null);
    r(this, g, null);
    if (new.target === v)
      return n(v, A) || l(v, A, this), n(v, A);
  }
  // 授权类型
  /**
   * 授权类型
   */
  get authtype() {
    return n(this, y);
  }
  /**
   * 是否授权
   */
  get authorized() {
    return o(this, z, ht).call(this);
  }
};
let j = v;
A = new WeakMap(), y = new WeakMap(), U = new WeakSet(), ot = function(i, t) {
  try {
    if (!i || i.length < 8)
      return "";
    t || (t = "sunway_webgis_auth_code"), t = encodeURIComponent(t);
    let e = "";
    for (let p = 0; p < t.length; p += 1)
      e += t.charCodeAt(p).toString();
    let a = Math.floor(e.length / 5), h = parseInt(e.charAt(a) + e.charAt(a * 2) + e.charAt(a * 3) + e.charAt(a * 4) + e.charAt(a * 5)), c = Math.round(t.length / 2), f = Math.pow(2, 31) - 1, k = parseInt(i.substring(i.length - 8, i.length), 16);
    for (i = i.substring(0, i.length - 8), e += k; e.length > 10; )
      e = (parseInt(e.substring(0, 10)) + parseInt(e.substring(10, e.length))).toString();
    e = (h * e + c) % f;
    let x = "", nt = "";
    for (let p = 0; p < i.length; p += 2)
      x = parseInt(i.substring(p, p + 2), 16) ^ Math.floor(e / f * 255), nt += String.fromCharCode(x), e = (h * e + c) % f;
    return decodeURIComponent(nt);
  } catch {
    return "";
  }
}, z = new WeakSet(), ht = function() {
  const i = o(this, U, ot).call(this, window.licenses), t = i.split("|")[0], e = i.split("|")[1];
  l(this, y, i.split("|")[2]);
  let a = window.location.hostname.toUpperCase();
  if (a === "LOCALHOST" || a == "127.0.0.1")
    return !0;
  let h = !1;
  if (t.split(",").forEach((x) => {
    if (x.toUpperCase() === a) {
      h = !0;
      return;
    }
  }), !h)
    return o(this, L, B).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  if (typeof e > "u")
    return o(this, L, B).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  const f = o(this, F, lt).call(this), k = new Date(e);
  return f.getTime() > k.getTime() ? (o(this, L, B).call(this, n(this, y) + "有限期至【" + e + "】已过期，请重新授权！@山维科技"), !1) : (n(this, y) != "正式版" && o(this, W, ct).call(this, "开发预览版，有限期至【" + e + "】@山维科技"), !0);
}, I = new WeakMap(), F = new WeakSet(), lt = function() {
  if (!n(this, I)) {
    const i = new window.XMLHttpRequest();
    i.open("GET", "/", !1), i.send(null);
    const t = i.getResponseHeader("Date");
    l(this, I, new Date(t));
  }
  return n(this, I);
}, u = new WeakMap(), g = new WeakMap(), W = new WeakSet(), ct = function(i) {
  n(this, g) || (l(this, g, document.createElement("div")), n(this, g).style.zIndex = "999", n(this, g).classList.add("auth"), n(this, g).innerHTML = vt, document.body.appendChild(n(this, g)));
  const t = n(this, g).getElementsByClassName("develop")[0];
  t.innerHTML = i;
}, L = new WeakSet(), B = function(i) {
  n(this, u) || (l(this, u, document.createElement("div")), n(this, u).style.zIndex = "1000", n(this, u).classList.add("auth"), n(this, u).innerHTML = bt, document.body.appendChild(n(this, u)));
  const t = n(this, u).getElementsByTagName("p")[0];
  t.innerHTML = i;
}, // 单例模式
r(j, A, void 0);
var O, M, T, E, _, S, H, $, w, G, R, et, X, ft, J, dt, P, q, V, K, ut, D, it, Q, gt, N, st, Y, pt, Z, mt, C, m, b;
class At extends HTMLElement {
  // 需要双向绑定的属性
  constructor() {
    super();
    /**
     * 加载config
     * 当config不存在时，从文件加载config
     */
    r(this, R);
    /**
     * loading状态改变
     */
    r(this, X);
    /**
     * 初始化方法，用于初始化Dom
     */
    r(this, J);
    /**
     * 对象劫持
     * @param {any} value 
     * @returns {any}
     */
    r(this, P);
    /**
     * 延迟执行刷新 防抖 
     * 主要是防止数组的length也会触发刷新
     * @returns 
     */
    r(this, K);
    /**
     * 刷新所有 #labelTag 标签内容 该处为全部刷新，防止遗漏
     * {{}}已经被 #labelTag 标签替换
     */
    r(this, D);
    /**
     * 绑定属性
     * @param att 需要绑定的属性 如 value
     */
    r(this, Q);
    /**
     * 获取指定属性值
     * @param {string} origin 需要获取的属性 如a.b
     * @returns 对应属性的值
     */
    r(this, N);
    /**
     * 设置$data中的属性
     * @param key 
     * @param value 
     */
    r(this, Y);
    /**
     * 给dom绑定$this，指向当前组件
     */
    r(this, Z);
    /**
     * 组件初始化方法，只初始化一次
     * 需要判断所有必要条件添加完成再进行初始化
     */
    r(this, m);
    // 任意的string索引List
    // 一些私有属性
    r(this, O, void 0);
    r(this, M, void 0);
    r(this, T, void 0);
    r(this, E, void 0);
    r(this, _, void 0);
    r(this, S, void 0);
    r(this, H, "w-l");
    // label标签的名称
    r(this, $, !1);
    // 渲染是否完成
    r(this, w, d.none);
    //组件模式
    r(this, G, ["value", "src", "title"]);
    r(this, V, !1);
    /**
     * 组件初始化状态，设置多个用于防抖
     * unInited 未初始化
     * initing 正在初始化
     * inited 已经初始化
     */
    r(this, C, "unInited");
    new j().authorized && (this.manifest.hasConfig && o(this, R, et).call(this, this.getAttribute("config") || this.getAttribute("configUrl")), l(this, w, this.manifest.mode ?? d.always), rt(() => {
      o(this, J, dt).call(this), o(this, m, b).call(this);
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
    return n(this, O);
  }
  set mapConfig(t) {
    !n(this, O) && t && (l(this, O, t), o(this, m, b).call(this));
  }
  /**
   * 组件所在地图的原型，如果组件本身为地图，则指向自身
   */
  get mapView() {
    return n(this, M);
  }
  set mapView(t) {
    !n(this, M) && t && (l(this, M, t), o(this, m, b).call(this));
  }
  /**
    * 当前组件所在地图
    */
  get map() {
    return n(this, T);
  }
  set map(t) {
    !n(this, T) && t && (l(this, T, t), o(this, m, b).call(this));
  }
  /**
    * 当前组件的配置
    */
  get config() {
    return n(this, E);
  }
  set config(t) {
    if (typeof t == "string") {
      o(this, R, et).call(this, t);
      return;
    } else
      typeof t == "object" && !n(this, E) && t && (l(this, E, t), o(this, m, b).call(this));
  }
  /**
   * 加载中
   */
  get loading() {
    return !!n(this, _);
  }
  set loading(t) {
    l(this, _, t), o(this, X, ft).call(this);
  }
  /**
   * 用于渲染html的数据
   */
  get $data() {
    return n(this, S);
  }
  set $data(t) {
    (n(this, w) & d.propOnly) == d.propOnly ? (l(this, S, o(this, P, q).call(this, t)), o(this, D, it).call(this)) : l(this, S, t);
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
O = new WeakMap(), M = new WeakMap(), T = new WeakMap(), E = new WeakMap(), _ = new WeakMap(), S = new WeakMap(), H = new WeakMap(), $ = new WeakMap(), w = new WeakMap(), G = new WeakMap(), R = new WeakSet(), et = async function(t) {
  if (!this.config && t) {
    this.loading = !0;
    const e = await fetch(t);
    this.config = e && e.ok && await e.json() || {}, this.loading = !1;
  }
}, X = new WeakSet(), ft = function() {
  this.loading ? this.classList.add("loading") : this.classList.remove("loading");
}, J = new WeakSet(), dt = function() {
  const t = this.manifest.className || this.manifest.tagName;
  if (this.classList.add(t), this.manifest.template) {
    let e = this.manifest.template;
    (n(this, w) & d.propOnly) == d.propOnly && (e = e.replace(/\{\{(.+?)\}\}/g, (...a) => `<${n(this, H)}>${a[1]}</${n(this, H)}>`)), this.innerHTML = e, (n(this, w) & d.funOnly) == d.funOnly && o(this, Z, mt).call(this);
  }
  l(this, $, !0);
}, P = new WeakSet(), q = function(t) {
  return typeof t == "object" && t !== null ? (Object.keys(t).forEach((e) => {
    t[e] = o(this, P, q).call(this, t[e]);
  }), new Proxy(t, {
    set: (e, a, h) => (e[a] = o(this, P, q).call(this, h), o(this, K, ut).call(this), !0)
    // get: (obj, p) => {
    //     // 判断是否需要刷新dom
    //     return obj[p];
    // },
  })) : t;
}, V = new WeakMap(), K = new WeakSet(), ut = function() {
  n(this, V) || (l(this, V, !0), rt(() => {
    o(this, D, it).call(this), l(this, V, !1);
  }));
}, D = new WeakSet(), it = function() {
  n(this, G).forEach((e) => {
    o(this, Q, gt).call(this, e);
  }), this.querySelectorAll(n(this, H)).forEach((e) => {
    const a = o(this, N, st).call(this, e.origin);
    String(a) !== e.innerHTML && (e.innerHTML = a);
  });
}, Q = new WeakSet(), gt = function(t) {
  const e = `s-${t}`;
  this.querySelectorAll(`[${e}]`).forEach((h) => {
    const c = h.getAttribute(e), f = o(this, N, st).call(this, c);
    f !== h[t] && (h[t] = f);
  });
}, N = new WeakSet(), st = function(t) {
  try {
    return t.split(".").reduce((e, a) => e[a], this.$data);
  } catch (e) {
    console.error(e);
    return;
  }
}, Y = new WeakSet(), pt = function(t, e) {
  let a = this.$data, h = t.split(".");
  for (let c = 0; c < h.length; c++) {
    const f = h[c];
    c == h.length - 1 ? a[f] = e : a = a[f];
  }
}, Z = new WeakSet(), mt = function() {
  this.querySelectorAll("*").forEach((e) => {
    e.$this || (e.$this = this, e.$set = (a, h) => {
      o(this, Y, pt).call(this, a, h);
    });
  });
}, C = new WeakMap(), m = new WeakSet(), b = async function() {
  n(this, $) && (n(this, C) === "initing" || n(this, C) === "inited" || this.isReady() && (l(this, C, "initing"), this.loading = !0, await this.onInit(), this.loading = !1, l(this, C, "inited"), this.afterInit()));
};
class It extends At {
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
var Lt = Object.defineProperty, Ot = Object.getOwnPropertyDescriptor, Mt = (s, i, t, e) => {
  for (var a = e > 1 ? void 0 : e ? Ot(i, t) : i, h = s.length - 1, c; h >= 0; h--)
    (c = s[h]) && (a = (e ? c(i, t, a) : c(a)) || a);
  return e && a && Lt(i, t, a), a;
};
let at = class extends It {
  constructor() {
    super();
  }
  async onInit() {
    window.CESIUM_BASE_URL = "./third_party/Cesium/";
    const s = new yt.Viewer(this, {
      // terrainProvider: Cesium.createWorldTerrain()
      homeButton: !0,
      timeline: !1,
      //是否显示时间线控件
      sceneModePicker: !0,
      //是否显示投影方式控件
      animation: !1
      //是否显示动画控件
    });
    s.cesiumWidget.creditContainer.style.display = "none", s.baseLayerPicker.viewModel.selectedImagery = s.baseLayerPicker.viewModel.imageryProviderViewModels[3], s.scene.debugShowFramesPerSecond = !0, this.map = s;
  }
};
at = Mt([
  wt({
    tagName: "cesium-map",
    className: "cesium-map",
    hasConfig: !0
  })
], at);
export {
  at as MapView
};
