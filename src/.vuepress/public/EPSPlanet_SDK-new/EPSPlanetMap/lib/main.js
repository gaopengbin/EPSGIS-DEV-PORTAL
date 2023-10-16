var Bt = Object.defineProperty;
var Rt = (r, e, t) => e in r ? Bt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var u = (r, e, t) => (Rt(r, typeof e != "symbol" ? e + "" : e, t), t), pt = (r, e, t) => {
  if (!e.has(r))
    throw TypeError("Cannot " + t);
};
var n = (r, e, t) => (pt(r, e, "read from private field"), t ? t.call(r) : e.get(r)), h = (r, e, t) => {
  if (e.has(r))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(r) : e.set(r, t);
}, d = (r, e, t, i) => (pt(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t);
var c = (r, e, t) => (pt(r, e, "access private method"), t);
const jt = `<div class="error">\r
    <div class="info">\r
        <div>\r
            <p>软件未授权，请联系软件提供商，获取授权码！</p>\r
            <a href="">刷新</a>\r
        </div>\r
    </div>\r
</div>`, Vt = `<div class="develop">\r
    开发预览版，有限期至【】@山维科技\r
</div>`;
var N, E, tt, Et, et, Ct, O, it, It, v, x, st, Pt, T, Q;
const M = class {
  constructor() {
    /**
     * 脱密
     * @param str 
     * @param pwd 
     * @returns 
     */
    h(this, tt);
    /**
     * 验证授权
     * @param licenses 
     */
    h(this, et);
    // 服务器时间
    /**
     * 获取服务器时间
     * @returns 
     */
    h(this, it);
    /**
     * 右下角显示开发版内容
     */
    h(this, st);
    /**
     * 显示未授权
     */
    h(this, T);
    h(this, E, "开发版");
    h(this, O, null);
    h(this, v, null);
    h(this, x, null);
    if (new.target === M)
      return n(M, N) || d(M, N, this), n(M, N);
  }
  // 授权类型
  /**
   * 授权类型
   */
  get authtype() {
    return n(this, E);
  }
  /**
   * 是否授权
   */
  get authorized() {
    return c(this, et, Ct).call(this);
  }
};
let W = M;
N = new WeakMap(), E = new WeakMap(), tt = new WeakSet(), Et = function(e, t) {
  try {
    if (!e || e.length < 8)
      return "";
    t || (t = "sunway_webgis_auth_code"), t = encodeURIComponent(t);
    let i = "";
    for (let m = 0; m < t.length; m += 1)
      i += t.charCodeAt(m).toString();
    let s = Math.floor(i.length / 5), o = parseInt(i.charAt(s) + i.charAt(s * 2) + i.charAt(s * 3) + i.charAt(s * 4) + i.charAt(s * 5)), l = Math.round(t.length / 2), a = Math.pow(2, 31) - 1, p = parseInt(e.substring(e.length - 8, e.length), 16);
    for (e = e.substring(0, e.length - 8), i += p; i.length > 10; )
      i = (parseInt(i.substring(0, 10)) + parseInt(i.substring(10, i.length))).toString();
    i = (o * i + l) % a;
    let w = "", Y = "";
    for (let m = 0; m < e.length; m += 2)
      w = parseInt(e.substring(m, m + 2), 16) ^ Math.floor(i / a * 255), Y += String.fromCharCode(w), i = (o * i + l) % a;
    return decodeURIComponent(Y);
  } catch {
    return "";
  }
}, et = new WeakSet(), Ct = function() {
  const e = c(this, tt, Et).call(this, window.licenses), t = e.split("|")[0], i = e.split("|")[1];
  d(this, E, e.split("|")[2]);
  let s = window.location.hostname.toUpperCase();
  if (s === "LOCALHOST" || s == "127.0.0.1")
    return !0;
  let o = !1;
  if (t.split(",").forEach((w) => {
    if (w.toUpperCase() === s) {
      o = !0;
      return;
    }
  }), !o)
    return c(this, T, Q).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  if (typeof i > "u")
    return c(this, T, Q).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  const a = c(this, it, It).call(this), p = new Date(i);
  return a.getTime() > p.getTime() ? (c(this, T, Q).call(this, n(this, E) + "有限期至【" + i + "】已过期，请重新授权！@山维科技"), !1) : (n(this, E) != "正式版" && c(this, st, Pt).call(this, "开发预览版，有限期至【" + i + "】@山维科技"), !0);
}, O = new WeakMap(), it = new WeakSet(), It = function() {
  if (!n(this, O)) {
    const e = new window.XMLHttpRequest();
    e.open("GET", "/", !1), e.send(null);
    const t = e.getResponseHeader("Date");
    d(this, O, new Date(t));
  }
  return n(this, O);
}, v = new WeakMap(), x = new WeakMap(), st = new WeakSet(), Pt = function(e) {
  n(this, x) || (d(this, x, document.createElement("div")), n(this, x).style.zIndex = "999", n(this, x).classList.add("auth"), n(this, x).innerHTML = Vt, document.body.appendChild(n(this, x)));
  const t = n(this, x).getElementsByClassName("develop")[0];
  t.innerHTML = e;
}, T = new WeakSet(), Q = function(e) {
  n(this, v) || (d(this, v, document.createElement("div")), n(this, v).style.zIndex = "1000", n(this, v).classList.add("auth"), n(this, v).innerHTML = jt, document.body.appendChild(n(this, v)));
  const t = n(this, v).getElementsByTagName("p")[0];
  t.innerHTML = e;
}, // 单例模式
h(W, N, void 0);
class K {
  /**
   * 加载js文件
   * @param src 需要加载的js的地址
   * @param isModule 是否是ES6
   * @returns 
   */
  static loadScript(e, t = !1) {
    return new Promise((i) => {
      if (e === "") {
        i(!1);
        return;
      }
      const s = document.createElement("script");
      s.type = "text/javascript", s.async = !1, s.onload = () => {
        s.remove(), i(!0);
      }, s.onerror = () => {
        s.remove(), i(!1);
      }, t && (s.type = "module"), s.src = e, document.head.append ? document.head.append(s) : document.getElementsByTagName("head")[0].appendChild(s);
    });
  }
  /**
   * 加载css文件
   * @param href 
   * @returns 
   */
  static loadCSS(e) {
    return new Promise((t) => {
      if (e === "") {
        t(!1);
        return;
      }
      const i = document.createElement("link");
      i.rel = "stylesheet", i.href = e, i.onload = () => {
        t(!0);
      }, i.onerror = () => {
        t(!1);
      }, document.head.append ? document.head.append(i) : document.getElementsByTagName("head")[0].appendChild(i);
    });
  }
  /**
   * 加载json
   * @param url 
   * @returns 
   */
  static async loadJSON(e) {
    return await (await fetch(e)).json();
  }
}
const Xt = async () => {
  const r = window.isDebug;
  let e = "configs/setting.json";
  r && (e = "configs/debug.json");
  const t = await K.loadJSON(e), i = window;
  if (i.licenses = i.licenses || t.licenses, new W().authorized) {
    let s = [];
    t.include.forEach((o) => {
      t.modules[o].forEach((a) => {
        switch (a.type) {
          case "css":
            s.push(K.loadCSS(a.url));
            break;
          case "js":
            s.push(K.loadScript(a.url));
            break;
          case "module":
            s.push(K.loadScript(a.url, !0));
            break;
        }
      });
    }), await Promise.all(s);
  }
};
var U;
class Ht extends HTMLElement {
  constructor() {
    super();
    /**
     * 原始属性
     */
    h(this, U, void 0);
    d(this, U, this.innerHTML.trim());
  }
  get origin() {
    return n(this, U);
  }
}
U = new WeakMap();
customElements.define("w-l", Ht);
var y = /* @__PURE__ */ ((r) => (r[r.none = 0] = "none", r[r.funOnly = 1] = "funOnly", r[r.propOnly = 2] = "propOnly", r[r.always = 3] = "always", r))(y || {});
const Lt = (r) => (e) => (e.prototype._manifest = Yt(r), customElements.define(r.tagName, e), e), Yt = (r) => (r = Object.assign({
  hasConfig: !1,
  mode: y.always
}, r), r), bt = (r) => {
  Promise ? Promise.resolve().then(r) : requestAnimationFrame ? requestAnimationFrame(r) : setTimeout(r, 0);
};
var A, _, D, $, q, B, R, F, C, nt, k, gt, rt, Nt, ot, Ot, j, Z, V, at, Tt, G, ut, ht, At, J, mt, lt, _t, ct, Dt, I, S, L;
class Mt extends HTMLElement {
  // 需要双向绑定的属性
  constructor() {
    super();
    /**
     * 加载config
     * 当config不存在时，从文件加载config
     */
    h(this, k);
    /**
     * loading状态改变
     */
    h(this, rt);
    /**
     * 初始化方法，用于初始化Dom
     */
    h(this, ot);
    /**
     * 对象劫持
     * @param {any} value 
     * @returns {any}
     */
    h(this, j);
    /**
     * 延迟执行刷新 防抖 
     * 主要是防止数组的length也会触发刷新
     * @returns 
     */
    h(this, at);
    /**
     * 刷新所有 #labelTag 标签内容 该处为全部刷新，防止遗漏
     * {{}}已经被 #labelTag 标签替换
     */
    h(this, G);
    /**
     * 绑定属性
     * @param att 需要绑定的属性 如 value
     */
    h(this, ht);
    /**
     * 获取指定属性值
     * @param {string} origin 需要获取的属性 如a.b
     * @returns 对应属性的值
     */
    h(this, J);
    /**
     * 设置$data中的属性
     * @param key 
     * @param value 
     */
    h(this, lt);
    /**
     * 给dom绑定$this，指向当前组件
     */
    h(this, ct);
    /**
     * 组件初始化方法，只初始化一次
     * 需要判断所有必要条件添加完成再进行初始化
     */
    h(this, S);
    // 任意的string索引List
    // 一些私有属性
    h(this, A, void 0);
    h(this, _, void 0);
    h(this, D, void 0);
    h(this, $, void 0);
    h(this, q, void 0);
    h(this, B, void 0);
    h(this, R, "w-l");
    // label标签的名称
    h(this, F, !1);
    // 渲染是否完成
    h(this, C, y.none);
    //组件模式
    h(this, nt, ["value", "src", "title"]);
    h(this, V, !1);
    /**
     * 组件初始化状态，设置多个用于防抖
     * unInited 未初始化
     * initing 正在初始化
     * inited 已经初始化
     */
    h(this, I, "unInited");
    new W().authorized && (this.manifest.hasConfig && c(this, k, gt).call(this, this.getAttribute("config") || this.getAttribute("configUrl")), d(this, C, this.manifest.mode ?? y.always), bt(() => {
      c(this, ot, Ot).call(this), c(this, S, L).call(this);
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
    return n(this, A);
  }
  set mapConfig(t) {
    !n(this, A) && t && (d(this, A, t), c(this, S, L).call(this));
  }
  /**
   * 组件所在地图的原型，如果组件本身为地图，则指向自身
   */
  get mapView() {
    return n(this, _);
  }
  set mapView(t) {
    !n(this, _) && t && (d(this, _, t), c(this, S, L).call(this));
  }
  /**
    * 当前组件所在地图
    */
  get map() {
    return n(this, D);
  }
  set map(t) {
    !n(this, D) && t && (d(this, D, t), c(this, S, L).call(this));
  }
  /**
    * 当前组件的配置
    */
  get config() {
    return n(this, $);
  }
  set config(t) {
    if (typeof t == "string") {
      c(this, k, gt).call(this, t);
      return;
    } else
      typeof t == "object" && !n(this, $) && t && (d(this, $, t), c(this, S, L).call(this));
  }
  /**
   * 加载中
   */
  get loading() {
    return !!n(this, q);
  }
  set loading(t) {
    d(this, q, t), c(this, rt, Nt).call(this);
  }
  /**
   * 用于渲染html的数据
   */
  get $data() {
    return n(this, B);
  }
  set $data(t) {
    (n(this, C) & y.propOnly) == y.propOnly ? (d(this, B, c(this, j, Z).call(this, t)), c(this, G, ut).call(this)) : d(this, B, t);
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
A = new WeakMap(), _ = new WeakMap(), D = new WeakMap(), $ = new WeakMap(), q = new WeakMap(), B = new WeakMap(), R = new WeakMap(), F = new WeakMap(), C = new WeakMap(), nt = new WeakMap(), k = new WeakSet(), gt = async function(t) {
  if (!this.config && t) {
    this.loading = !0;
    const i = await fetch(t);
    this.config = i && i.ok && await i.json() || {}, this.loading = !1;
  }
}, rt = new WeakSet(), Nt = function() {
  this.loading ? this.classList.add("loading") : this.classList.remove("loading");
}, ot = new WeakSet(), Ot = function() {
  const t = this.manifest.className || this.manifest.tagName;
  if (this.classList.add(t), this.manifest.template) {
    let i = this.manifest.template;
    (n(this, C) & y.propOnly) == y.propOnly && (i = i.replace(/\{\{(.+?)\}\}/g, (...s) => `<${n(this, R)}>${s[1]}</${n(this, R)}>`)), this.innerHTML = i, (n(this, C) & y.funOnly) == y.funOnly && c(this, ct, Dt).call(this);
  }
  d(this, F, !0);
}, j = new WeakSet(), Z = function(t) {
  return typeof t == "object" && t !== null ? (Object.keys(t).forEach((i) => {
    t[i] = c(this, j, Z).call(this, t[i]);
  }), new Proxy(t, {
    set: (i, s, o) => (i[s] = c(this, j, Z).call(this, o), c(this, at, Tt).call(this), !0)
    // get: (obj, p) => {
    //     // 判断是否需要刷新dom
    //     return obj[p];
    // },
  })) : t;
}, V = new WeakMap(), at = new WeakSet(), Tt = function() {
  n(this, V) || (d(this, V, !0), bt(() => {
    c(this, G, ut).call(this), d(this, V, !1);
  }));
}, G = new WeakSet(), ut = function() {
  n(this, nt).forEach((i) => {
    c(this, ht, At).call(this, i);
  }), this.querySelectorAll(n(this, R)).forEach((i) => {
    const s = c(this, J, mt).call(this, i.origin);
    String(s) !== i.innerHTML && (i.innerHTML = s);
  });
}, ht = new WeakSet(), At = function(t) {
  const i = `s-${t}`;
  this.querySelectorAll(`[${i}]`).forEach((o) => {
    const l = o.getAttribute(i), a = c(this, J, mt).call(this, l);
    a !== o[t] && (o[t] = a);
  });
}, J = new WeakSet(), mt = function(t) {
  try {
    return t.split(".").reduce((i, s) => i[s], this.$data);
  } catch (i) {
    console.error(i);
    return;
  }
}, lt = new WeakSet(), _t = function(t, i) {
  let s = this.$data, o = t.split(".");
  for (let l = 0; l < o.length; l++) {
    const a = o[l];
    l == o.length - 1 ? s[a] = i : s = s[a];
  }
}, ct = new WeakSet(), Dt = function() {
  this.querySelectorAll("*").forEach((i) => {
    i.$this || (i.$this = this, i.$set = (s, o) => {
      c(this, lt, _t).call(this, s, o);
    });
  });
}, I = new WeakMap(), S = new WeakSet(), L = async function() {
  n(this, F) && (n(this, I) === "initing" || n(this, I) === "inited" || this.isReady() && (d(this, I, "initing"), this.loading = !0, await this.onInit(), this.loading = !1, d(this, I, "inited"), this.afterInit()));
};
const Wt = (r) => {
  let e = {};
  return [
    "left",
    "top",
    "right",
    "bottom",
    "width",
    "height",
    "margin",
    "margin-left",
    "margin-top",
    "margin-right",
    "margin-bottom",
    "padding",
    "padding-left",
    "padding-top",
    "padding-right",
    "padding-bottom",
    "z-index"
  ].forEach((i) => {
    typeof r[i] == "number" ? e[i] = r[i] + "px" : typeof r[i] < "u" && (e[i] = r[i]);
  }), e;
}, ft = (r) => {
  let e = "";
  for (const t in r)
    r.hasOwnProperty(t) && (e += `${t}:${r[t]};`);
  return e;
};
var Ut = Object.defineProperty, qt = Object.getOwnPropertyDescriptor, Ft = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? qt(e, t) : e, o = r.length - 1, l; o >= 0; o--)
    (l = r[o]) && (s = (i ? l(e, t, s) : l(s)) || s);
  return i && s && Ut(e, t, s), s;
}, dt, $t, St;
let vt = (St = class extends Mt {
  constructor() {
    super();
    /**
     * 添加参数默认值
     * @param {WidgetConfig} widgetConfig 
     * @returns {WidgetConfig}
     */
    h(this, dt);
  }
  async onInit() {
    this.config.forEach((e) => {
      this.addWidget(e);
    });
  }
  /**
   * 添加widget到当前dom
   * @param {WidgetConfig}_config 
   */
  addWidget(e) {
    e = c(this, dt, $t).call(this, e);
    try {
      if (e.inPanel) {
        const t = this.createIcon(e);
        this.appendChild(t);
      } else {
        const t = this.createWidget(e);
        this.appendChild(t);
      }
    } catch (t) {
      console.error(t);
    }
  }
  /**
   * 创建一个widget图标
   * @param {WidgetConfig} _config 
   * @returns {BaseWidget}
   */
  createIcon(e) {
    const t = document.createElement("webgis-widget-icon");
    t.startup({
      mapView: this.mapView,
      map: this.map,
      config: e,
      mapConfig: this.mapConfig
    });
    const { width: i, height: s, ...o } = e.position, l = ft(o);
    return t.setAttribute("style", l), t.title = e.label || e.tagName, t;
  }
  /**
   * 创建一个widget
   * @param {WidgetConfig}_config 
   * @returns {BaseWidget}
   */
  createWidget(e) {
    if (!e.tagName)
      throw new Error("tagName不能为空");
    const t = document.createElement(e.tagName);
    if (!t.startup)
      throw new Error(`没有找到tagName为${e.tagName}的组件`);
    t.startup({
      mapView: this.mapView,
      map: this.map,
      config: e.config,
      mapConfig: this.mapConfig
    });
    const i = e.position, s = ft(i);
    return t.setAttribute("style", s), t.style.zIndex = t.style.zIndex || "1", t;
  }
}, dt = new WeakSet(), $t = function(e) {
  return e = Object.assign({
    label: "",
    tagName: "",
    position: {},
    inPanel: !1,
    icon: "",
    config: {}
  }, e), e.position = Object.assign({
    left: "auto",
    right: "auto",
    bottom: "auto",
    top: "auto"
    /** 不需要设置默认宽高 */
    // width: 'auto',
    // height: 'auto',
    // 'z-index': 1
  }, Wt(e.position)), e;
}, St);
vt = Ft([
  Lt({
    tagName: "webgis-widget-manager",
    className: "webgis-widget-manager",
    hasConfig: !0
  })
], vt);
const kt = `<div>\r
    <!-- 图标 -->\r
    <div class="widget-icon" onclick="$this.iconClick(event)">\r
        <img s-src="icon">\r
    </div>\r
    <!-- 组件 -->\r
    <div class="widget-panel">\r
        <!-- 标题 -->\r
        <div class="widget-header">\r
            <div class="widget-label"></div>\r
            <div class="close-btn" onclick="$this.closeWidget()"></div>\r
        </div>\r
        <!-- 内容 -->\r
        <div class="widget-content"></div>\r
    </div>\r
</div>`;
class b {
  static getPosition(e, t) {
    var i = this.getBoundingClientRect(e);
    if (i = { x: i.left, y: i.top, w: i.right - i.left, h: i.bottom - i.top }, t) {
      var s = this.docScroll(e.ownerDocument);
      i.x += s.x, i.y += s.y;
    }
    return i;
  }
  static getBoundingClientRect(e) {
    var t = { x: 0, y: 0, width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 }, i;
    try {
      i = e.getBoundingClientRect();
    } catch {
      return t;
    }
    return typeof i.left > "u" ? t : i;
  }
  static docScroll(e) {
    var t = e.parentWindow || e.defaultView;
    return "pageXOffset" in t ? { x: t.pageXOffset, y: t.pageYOffset } : e.documentElement ? { x: e.documentElement.scrollLeft, y: e.documentElement.scrollTop } : { x: 0, y: 0 };
  }
  static getPadBorderExtents(e) {
    let t = window.getComputedStyle(e);
    return {
      l: parseInt(t.paddingLeft) + parseInt(t.borderLeft),
      t: parseInt(t.paddingTop) + parseInt(t.borderTop),
      r: parseInt(t.paddingRight) + parseInt(t.borderRight),
      b: parseInt(t.paddingBottom) + parseInt(t.borderBottom),
      w: parseInt(t.paddingLeft) + parseInt(t.borderLeft) + parseInt(t.paddingRight) + parseInt(t.borderRight),
      h: parseInt(t.paddingTop) + parseInt(t.borderTop) + parseInt(t.paddingBottom) + parseInt(t.borderBottom)
    };
  }
  static getMarginExtents(e) {
    let t = window.getComputedStyle(e);
    return {
      l: parseInt(t.marginLeft),
      t: parseInt(t.marginTop),
      r: parseInt(t.marginRight),
      b: parseInt(t.marginBottom),
      w: parseInt(t.marginLeft) + parseInt(t.marginRight),
      h: parseInt(t.marginTop) + parseInt(t.marginBottom)
    };
  }
}
class Gt {
  constructor(e, t) {
    // 拖拽控件的dom节点
    u(this, "domNode");
    // 拖拽控件的容器 
    u(this, "container");
    // 最小尺寸
    u(this, "minSize", {
      w: 20,
      h: 20
    });
    // 切换此小部件是否关心maxHeight和maxWidth
    u(this, "constrainMax", !1);
    // 最大尺寸
    u(this, "maxSize", {
      w: 0,
      h: 0
    });
    // 是否固定宽高比
    u(this, "fixedAspect", !1);
    // 开始的尺寸
    u(this, "startSize");
    // 是否允许修改 x y 尺寸
    u(this, "_resizeX", !0);
    u(this, "_resizeY", !0);
    // 鼠标起始点
    u(this, "startPoint", { x: 0, y: 0 });
    // domNode的起始位置
    u(this, "startPosition");
    u(this, "_isSizing", !1);
    this.container = e, t && (this.minSize = t.minSize || this.minSize, this.maxSize = t.maxSize || this.maxSize, this.constrainMax = t.constrainMax || this.constrainMax, this.fixedAspect = t.fixedAspect || this.fixedAspect), this.init();
  }
  init() {
    this.domNode = document.createElement("div"), this.domNode.className = "resize-handle", this.container.appendChild(this.domNode), this.domNode.addEventListener("mousedown", (e) => this._beginSizing(e));
  }
  _beginSizing(e) {
    if (e.preventDefault(), this._isSizing)
      return;
    this.startPoint = { x: e.clientX, y: e.clientY };
    let t = b.getPosition(this.container, !0);
    this.startPosition = { l: t.x, t: t.y };
    let i = b.getPadBorderExtents(this.container), s = b.getMarginExtents(this.container);
    this.startSize = {
      w: this.container.offsetWidth,
      h: this.container.offsetHeight,
      //ResizeHelper.resize expects a bounding box of the
      //border box, so let's keep track of padding/border
      //width/height as well
      pbw: i.w,
      pbh: i.h,
      mw: s.w,
      mh: s.h
    }, this._isSizing = !0, this._endSizing = this._endSizing.bind(this), this._updateSizing = this._updateSizing.bind(this), document.addEventListener("mouseup", this._endSizing), document.addEventListener("mousemove", this._updateSizing), e.stopPropagation();
  }
  _updateSizing(e) {
    var t, i, s, o;
    if (e.preventDefault(), this._isSizing) {
      let l = this._getNewCoords(e, this.startPosition), a = l.w, p = l.h;
      a >= 0 && (a = Math.max(a - ((t = this.startSize) == null ? void 0 : t.pbw) - ((i = this.startSize) == null ? void 0 : i.mw), 0)), p >= 0 && (p = Math.max(p - ((s = this.startSize) == null ? void 0 : s.pbh) - ((o = this.startSize) == null ? void 0 : o.mh), 0)), this.container.style.width = a + "px", this.container.style.height = p + "px";
    }
  }
  _endSizing(e) {
    e.preventDefault(), this._isSizing = !1, document.removeEventListener("mouseup", this._endSizing), document.removeEventListener("mousemove", this._updateSizing);
  }
  _getNewCoords(e, t) {
    var p, w, Y, m, wt, yt;
    try {
      if (!e.clientX || !e.clientY)
        return !1;
    } catch {
      return !1;
    }
    var i = ((p = this.startPoint) == null ? void 0 : p.x) - e.clientX, s = ((w = this.startPoint) == null ? void 0 : w.y) - e.clientY, o = ((Y = this.startSize) == null ? void 0 : Y.w) - (this._resizeX ? i : 0), l = ((m = this.startSize) == null ? void 0 : m.h) - (this._resizeY ? s : 0), a = this._checkConstraints(o, l);
    return t = t || this.startPosition, t && this._resizeX && (a.l = t.l + i, a.w != o && (a.l += o - a.w), a.t = t.t), a.w += (wt = this.startSize) == null ? void 0 : wt.pbw, a.h += (yt = this.startSize) == null ? void 0 : yt.pbh, a;
  }
  // 检查尺寸是否超出最大值和最小值
  _checkConstraints(e, t) {
    var p, w;
    if (this.minSize) {
      var i = this.minSize;
      e < i.w && (e = i.w), t < i.h && (t = i.h);
    }
    if (this.constrainMax && this.maxSize) {
      var s = this.maxSize;
      e > s.w && (e = s.w), t > s.h && (t = s.h);
    }
    if (this.fixedAspect) {
      var o = (p = this.startSize) == null ? void 0 : p.w, l = (w = this.startSize) == null ? void 0 : w.h, a = o * t - l * e;
      a < 0 ? e = t * o / l : a > 0 && (t = e * l / o);
    }
    return { w: e, h: t };
  }
}
var Jt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, Qt = (r, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? Kt(e, t) : e, o = r.length - 1, l; o >= 0; o--)
    (l = r[o]) && (s = (i ? l(e, t, s) : l(s)) || s);
  return i && s && Jt(e, t, s), s;
}, g, z, X, H, f, P, zt;
let xt = (zt = class extends Mt {
  // 观察器
  constructor() {
    super();
    h(this, g, null);
    h(this, z, null);
    h(this, X, !1);
    u(this, "group", "default");
    // 所在组，同组互斥
    // 鼠标起始点
    h(this, H, { x: 0, y: 0 });
    // panel的起始位置
    h(this, f, {
      x: 0,
      y: 0,
      w: 0,
      h: 0
    });
    h(this, P, void 0);
    d(this, P, new ResizeObserver(this.resize.bind(this)));
  }
  async onInit() {
    this.$data = {
      icon: `${this.config.icon || "icons/default.png"}`
    }, this.group = this.config.group || "default", this.config.position = Object.assign({
      width: "300px",
      height: "300px"
    }, this.config.position);
  }
  // 初始化Panel
  initPanel() {
    d(this, z, this.createWidget(this.config)), d(this, g, this.getElementsByClassName("widget-panel")[0]);
    const { width: e, height: t } = this.config.position, i = ft({
      width: e,
      height: t
    });
    n(this, g).setAttribute("style", i);
    let s = n(this, g).getElementsByClassName("widget-label")[0];
    s.innerHTML = this.title, n(this, g).getElementsByClassName("widget-content")[0].appendChild(n(this, z)), n(this, g).getElementsByClassName("widget-header")[0].addEventListener("mousedown", this.onMouseDown.bind(this)), new Gt(n(this, g));
    const a = this.getPanelXY();
    this.setPosition(a.left, a.top);
  }
  // 根据图标所在位置计算panel的初始位置
  // 最终的位置只要left 和 top
  getPanelXY() {
    var p;
    let e = ((p = this.config.panel) == null ? void 0 : p.position) || {};
    const t = b.getPosition(this.parentElement, !0), i = this.getElementsByClassName("widget-icon")[0], s = b.getPosition(i, !0), o = b.getPosition(n(this, g), !0);
    let l, a;
    return e.left ?? !1 ? l = parseInt(e.left) : e.right ?? !1 ? l = t.w - o.w - parseInt(e.right) : s.x > t.w / 2 ? l = s.x - o.w - 5 : l = s.x + s.w + 5, e.top ?? !1 ? a = parseInt(e.top) : e.bottom ?? !1 ? a = t.w - o.h - parseInt(e.bottom) : a = s.y, {
      left: l,
      top: a
    };
  }
  iconClick() {
    n(this, X) ? this.closeWidget() : this.openWidget();
  }
  openWidget() {
    var e;
    this.closeOthers(), this.classList.add("webgis-widget-icon-open"), n(this, z) || this.initPanel(), (e = n(this, z)) == null || e.onOpen(), d(this, X, !0), n(this, P).observe(this.parentElement);
  }
  closeWidget() {
    var e;
    this.classList.remove("webgis-widget-icon-open"), n(this, P).unobserve(this.parentElement), (e = n(this, z)) == null || e.onClose(), d(this, X, !1);
  }
  // 关闭其他同组的widget
  closeOthers() {
    var t;
    const e = (t = this.parentNode) == null ? void 0 : t.querySelectorAll("webgis-widget-icon");
    e == null || e.forEach((i) => {
      this.group == i.group && i.closeWidget();
    });
  }
  /**
   * 创建一个widget
   * @param {WidgetConfig}_config 
   * @returns {BaseWidget}
   */
  createWidget(e) {
    if (!e.tagName)
      throw new Error("tagName不能为空");
    const t = document.createElement(e.tagName);
    if (!t.startup)
      throw new Error(`没有找到tagName为${e.tagName}的组件`);
    return t.startup({
      mapView: this.mapView,
      map: this.map,
      config: e.config,
      mapConfig: this.mapConfig
    }), t;
  }
  // 销毁
  destroy() {
    n(this, P).disconnect(), this.remove();
  }
  // 重置位置
  resize() {
    d(this, f, b.getPosition(n(this, g), !0)), this.setPosition(n(this, f).x, n(this, f).y);
  }
  onMouseDown(e) {
    e.preventDefault(), n(this, g).classList.add("panel-dragging"), d(this, H, { x: e.clientX, y: e.clientY }), d(this, f, b.getPosition(n(this, g), !0)), this.onMouseMove = this.onMouseMove.bind(this), this.onMouseUp = this.onMouseUp.bind(this), document.addEventListener("mousemove", this.onMouseMove), document.addEventListener("mouseup", this.onMouseUp);
  }
  onMouseMove(e) {
    e.preventDefault();
    let t = n(this, H).x - e.clientX, i = n(this, H).y - e.clientY, s = n(this, f).x - t, o = n(this, f).y - i;
    this.setPosition(s, o);
  }
  setPosition(e, t) {
    let i = this.checkConstraints(e, t), s = b.getPosition(this, !0);
    n(this, g).style.left = i.x - s.x + "px", n(this, g).style.top = i.y - s.y + "px";
  }
  onMouseUp(e) {
    e.preventDefault(), n(this, g).classList.remove("panel-dragging"), document.removeEventListener("mousemove", this.onMouseMove), document.removeEventListener("mouseup", this.onMouseUp);
  }
  // 检查约束条件
  checkConstraints(e, t) {
    const i = b.getPosition(this.parentElement, !0), s = i.x, o = i.w - n(this, f).w, l = i.y, a = i.h - n(this, f).h;
    return e = Math.max(s, Math.min(o, e)), t = Math.max(l, Math.min(a, t)), { x: e, y: t };
  }
}, g = new WeakMap(), z = new WeakMap(), X = new WeakMap(), H = new WeakMap(), f = new WeakMap(), P = new WeakMap(), zt);
xt = Qt([
  Lt({
    tagName: "webgis-widget-icon",
    className: "webgis-widget-icon",
    template: kt,
    hasConfig: !0
  })
], xt);
Xt().then(() => {
  console.log("初始化完成");
});
export {
  Ht as BaseLabel,
  xt as WidgetIcon,
  vt as WidgetManager
};
