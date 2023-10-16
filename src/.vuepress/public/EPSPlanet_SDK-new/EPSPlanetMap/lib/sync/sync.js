var ee = Object.defineProperty;
var ie = (c, t, e) => t in c ? ee(c, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[t] = e;
var R = (c, t, e) => (ie(c, typeof t != "symbol" ? t + "" : t, e), e), Pt = (c, t, e) => {
  if (!t.has(c))
    throw TypeError("Cannot " + e);
};
var n = (c, t, e) => (Pt(c, t, "read from private field"), e ? e.call(c) : t.get(c)), a = (c, t, e) => {
  if (t.has(c))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(c) : t.set(c, e);
}, l = (c, t, e, i) => (Pt(c, t, "write to private field"), i ? i.call(c, e) : t.set(c, e), e), Ht = (c, t, e, i) => ({
  set _(s) {
    l(c, t, s, e);
  },
  get _() {
    return n(c, t, i);
  }
}), h = (c, t, e) => (Pt(c, t, "access private method"), e);
import { Feature as ne } from "ol";
import { transform as Wt } from "ol/proj";
import { unByKey as se } from "ol/Observable.js";
import ae from "ol/source/Vector";
import re from "ol/layer/Vector";
import { Polygon as oe } from "ol/geom";
import * as ce from "cesium";
function f(c) {
  return c * 180 / Math.PI;
}
function b(c) {
  return c * Math.PI / 180;
}
function le(c) {
  const t = 90.7142857142857, e = 1e3 / 25.4;
  return c * e * t;
}
var j, E, T, V, F, y, L, it, Ut, nt, Nt, st, _t;
class he {
  // 同步工具使用的投影
  constructor(t, e, i) {
    /**
     * 地图变更事件
     * @returns 
     */
    a(this, it);
    // 移除
    a(this, nt);
    // 移除全部
    a(this, st);
    a(this, j, void 0);
    a(this, E, void 0);
    //地图
    a(this, T, !1);
    // 是否正在更新，正在更新的不需要触发视图更改事件
    a(this, V, null);
    R(this, "enable", !0);
    // #toLonLat: any;
    // #fromLonLat: any;
    a(this, F, void 0);
    // 更新其他地图的方法
    a(this, y, void 0);
    // 当前map的投影
    a(this, L, "EPSG:4326");
    // graphic对象，用于添加或删除graphic
    R(this, "graphics", {
      // 添加 直接结构参数
      add: ({ geometry: t, symbol: e }) => {
        console.log(t), console.log(e);
        let i = new ne({
          // geometry: new Polygon([[
          //     [117, 45],
          //     [118, 45],
          //     [118, 46],
          //     [117, 45],
          //     [117, 45]
          // ]]).transform(this.#syncPrj, this.#mapPrj)
          geometry: new oe(t).transform(n(this, L), n(this, y)),
          symbol: e
        });
        const s = new ae(), r = new re({
          source: s,
          style: {
            "fill-color": "rgba(255, 255, 255, 0.2)",
            "stroke-color": "#ffcc33",
            "stroke-width": 2,
            "circle-radius": 7,
            "circle-fill-color": "#ffcc33"
          }
        });
        n(this, E).addLayer(r), s.addFeature(i);
      },
      remove: h(this, nt, Nt),
      removeAll: h(this, st, _t)
    });
    l(this, j, e), l(this, E, t), l(this, F, i), l(this, V, t.getView().on("propertychange", () => h(this, it, Ut).call(this))), l(this, y, n(this, E).getView().getProjection());
  }
  // id不可更改
  get id() {
    return n(this, j);
  }
  /**
   * 获取当前位置信息
   */
  get syncInfo() {
    const t = n(this, E).getView();
    if (!t)
      return;
    const e = t.getCenter();
    if (e == null)
      return;
    let i = t.getResolution() || 1;
    const s = t.getProjection().getMetersPerUnit() ?? 1;
    i = i * s;
    const r = Wt(e, n(this, y), n(this, L)), o = f(t.getRotation());
    return {
      resolution: i,
      // 当每单位米数为1时的地图分辨率
      rotation: o,
      // 旋转
      tilt: null,
      //倾斜角度 ol没有该参数
      longitude: r[0],
      // 中心经度
      latitude: r[1]
      // 中心纬度
    };
  }
  /**
   * 更新地图
   */
  update(t) {
    if (!t)
      return;
    l(this, T, !0);
    const e = n(this, E).getView();
    let i = e.getProjection().getMetersPerUnit() ?? 1;
    const s = Wt([t.longitude, t.latitude], n(this, L), n(this, y));
    e.setCenter(s);
    const r = t.resolution / i, o = e.getResolution() || 1;
    Math.abs(r - o) / o > 0.01 && e.setResolution(r);
    const d = b(t.rotation);
    Math.abs(d - e.getRotation()) > 0.01 && e.setRotation(d), l(this, T, !1);
  }
  // 销毁对象
  destroy() {
    se(n(this, V)), l(this, V, null);
  }
}
j = new WeakMap(), E = new WeakMap(), T = new WeakMap(), V = new WeakMap(), F = new WeakMap(), y = new WeakMap(), L = new WeakMap(), it = new WeakSet(), Ut = function() {
  !this.enable || n(this, T) || n(this, F).call(this, this);
}, nt = new WeakSet(), Nt = function(t) {
  console.log(t);
}, st = new WeakSet(), _t = function() {
};
let u = window.Cesium || ce;
var G, p, O, q, H, I, W, at, kt, rt, zt, ot, xt, ct, Bt, K, Dt, lt, jt, ht, Ft, ut, Gt, X, Rt, dt, qt, gt, It;
class ue {
  // 记录视角的角度
  // #dataSource: Cesium.GeoJsonDataSource;
  constructor(t, e, i) {
    /**
     * 获取 2d 位置信息
     * @returns 
     */
    a(this, at);
    /**
     * 获取 2.5d 位置信息
     * @returns 
     */
    a(this, rt);
    /**
     * 获取 3d 位置信息
     * @returns 
     */
    a(this, ot);
    /**
     * 获取画布给定像素的3D位置
     * @param scene 
     * @param pixel 
     * @returns 
     */
    a(this, ct);
    /**
     * 获取屏幕中心点的3D位置
     * @param scene 
     * @returns 
     */
    a(this, K);
    /**
     * 更新2D地图
     * @param syncInfo 
     */
    a(this, lt);
    /**
     * 更新2.5D地图
     * @param syncInfo 
     */
    a(this, ht);
    /**
     * 更新三维地图
     * @param syncInfo 
     */
    a(this, ut);
    /**
     * 检查基础相机状态是否已更改，如果更改则并同步
     * 检查完成后需要记录相机状态
     * @param {boolean=} opt_dontSync 不要同步视图,只需要记录当前状态
     */
    a(this, X);
    /**
     * 根据分辨率和纬度值计算摄像机和中心点之间的距离
     * @param resolution 
     * @param latitude 弧度制
     * @param scene 
     * @param metersPerUnit 
     * @returns 
     */
    a(this, dt);
    /**
     * 根据距离（相机到位置）和纬度值计算分辨率
     * @param distance 
     * @param latitude 弧度制
     * @param scene 
     * @param metersPerUnit 
     * @returns 
     */
    a(this, gt);
    a(this, G, void 0);
    a(this, p, void 0);
    //地图
    a(this, O, []);
    R(this, "enable", !0);
    a(this, q, void 0);
    a(this, H, !1);
    // 可以开始渲染
    a(this, I, void 0);
    // 更新其他地图的方法
    a(this, W, 0);
    l(this, G, e), l(this, p, t), l(this, I, i);
    let s = t.scene.preRender.addEventListener(() => {
      n(this, H) && h(this, X, Rt).call(this);
    }), r = t.camera.moveStart.addEventListener(() => {
      l(this, H, this.enable);
    }), o = t.camera.moveEnd.addEventListener(() => {
      l(this, H, !1);
    });
    l(this, O, [
      s,
      r,
      o
    ]);
  }
  // id不可更改
  get id() {
    return n(this, G);
  }
  // /**
  //  * 更新其他地图，该方法需要被重写
  //  */
  // updateOthersMap(sync: any) {
  //     console.log(sync);
  // }
  /**
   * 获取当前位置信息
   */
  get syncInfo() {
    if (n(this, p).scene.mode === u.SceneMode.SCENE3D)
      return h(this, ot, xt).call(this);
    if (n(this, p).scene.mode === u.SceneMode.SCENE2D)
      return h(this, at, kt).call(this);
    if (n(this, p).scene.mode === u.SceneMode.COLUMBUS_VIEW)
      return h(this, rt, zt).call(this);
  }
  /**
   * 更新地图
   */
  update(t) {
    if (t) {
      switch (n(this, p).scene.mode) {
        case u.SceneMode.SCENE3D:
          h(this, ut, Gt).call(this, t);
          break;
        case u.SceneMode.SCENE2D:
          h(this, lt, jt).call(this, t);
          break;
        case u.SceneMode.COLUMBUS_VIEW:
          h(this, ht, Ft).call(this, t);
          break;
      }
      h(this, X, Rt).call(this, !0);
    }
  }
  // 销毁对象
  destroy() {
    n(this, O).forEach((t) => {
      t();
    }), l(this, O, []);
  }
}
G = new WeakMap(), p = new WeakMap(), O = new WeakMap(), q = new WeakMap(), H = new WeakMap(), I = new WeakMap(), W = new WeakMap(), at = new WeakSet(), kt = function() {
  const t = n(this, p).scene, e = t.canvas, i = t.camera.positionCartographic, s = (i == null ? void 0 : i.latitude) || 0, r = (i == null ? void 0 : i.longitude) || 0;
  return {
    resolution: i.height / e.clientWidth,
    // 当每单位米数为1时的地图分辨率
    rotation: 0,
    // 旋转
    tilt: 0,
    //倾斜角度
    longitude: f(r),
    // 中心经度 角度制
    latitude: f(s)
    // 中心纬度 角度制
  };
}, rt = new WeakSet(), zt = function() {
  const t = n(this, p).scene, e = t.canvas, i = h(this, K, Dt).call(this, t);
  let s;
  i ? s = u.Cartographic.fromCartesian(i) : s = t.camera.positionCartographic;
  let r = t.camera.positionCartographic.height;
  r = r / Math.sin(Math.abs(t.camera.pitch));
  const o = (s == null ? void 0 : s.latitude) || 0, d = (s == null ? void 0 : s.longitude) || 0, g = r / e.clientWidth, m = t.camera.pitch + u.Math.PI_OVER_TWO;
  return {
    resolution: g,
    // 当每单位米数为1时的地图分辨率
    rotation: -f(t.camera.heading),
    // 旋转
    tilt: f(m),
    //倾斜角度
    longitude: f(d),
    // 中心经度 角度制
    latitude: f(o)
    // 中心纬度 角度制
  };
}, ot = new WeakSet(), xt = function() {
  const t = n(this, p).scene, e = u.Ellipsoid.WGS84, i = h(this, K, Dt).call(this, t);
  let s, r, o = i;
  if (o) {
    const St = t.camera.up, B = t.camera.right, yt = new u.Cartesian3(-o.y, o.x, 0), Vt = u.Cartesian3.angleBetween(B, yt);
    s = u.Cartesian3.cross(o, St, new u.Cartesian3()).z < 0 ? Vt : -Vt;
    const te = t.camera.position, Lt = new u.Cartesian3();
    e.geocentricSurfaceNormal(o, Lt);
    const $ = new u.Cartesian3();
    u.Cartesian3.subtract(te, o, $), u.Cartesian3.normalize($, $);
    const Ot = Math.acos(u.Cartesian3.dot(Lt, $));
    r = isNaN(Ot) ? 0 : Ot;
  } else {
    const St = t.globe, B = t.camera.positionCartographic.clone(), yt = St.getHeight(B);
    B.height = yt || 0, o = u.Ellipsoid.WGS84.cartographicToCartesian(B), s = t.camera.heading, r = t.camera.pitch + u.Math.PI_OVER_TWO;
  }
  const d = u.Cartesian3.distance(o, t.camera.position), g = e.cartesianToCartographic(o), m = (g == null ? void 0 : g.latitude) || 0, D = (g == null ? void 0 : g.longitude) || 0, M = h(this, gt, It).call(this, d, m, t);
  return l(this, W, r), {
    resolution: M,
    // 当每单位米数为1时的地图分辨率
    rotation: f(s),
    // 旋转
    tilt: f(r),
    //倾斜角度
    longitude: f(D),
    // 中心经度 角度制
    latitude: f(m)
    // 中心纬度 角度制
  };
}, ct = new WeakSet(), Bt = function(t, e) {
  const i = t.camera.getPickRay(e);
  return t.globe.pick(i, t) || t.camera.pickEllipsoid(e);
}, K = new WeakSet(), Dt = function(t) {
  const e = t.canvas, i = new u.Cartesian2(
    e.clientWidth / 2,
    e.clientHeight / 2
  );
  return h(this, ct, Bt).call(this, t, i);
}, lt = new WeakSet(), jt = function(t) {
  const e = n(this, p).scene, i = e.canvas, s = t.resolution * i.clientWidth;
  e.camera.setView({
    destination: u.Cartesian3.fromDegrees(t.longitude, t.latitude, s)
  });
}, ht = new WeakSet(), Ft = function(t) {
  const e = n(this, p).scene, i = e.canvas, s = t.tilt === null ? e.camera.pitch : b(t.tilt - 90);
  let r = Math.abs(s);
  const o = t.resolution * i.clientWidth / Math.sin(r), d = -b(t.rotation), g = u.Cartesian3.fromDegrees(t.longitude, t.latitude, o);
  e.camera.setView({
    destination: g,
    orientation: {
      heading: d,
      // 朝向
      pitch: s,
      // 俯仰
      roll: void 0
    }
  }), e.camera.moveDown(o * Math.cos(r));
}, ut = new WeakSet(), Gt = function(t) {
  const e = n(this, p).scene, i = new u.Cartographic(b(t.longitude), b(t.latitude));
  if (e.globe) {
    const m = e.globe.getHeight(i);
    i.height = m || 0;
  }
  const s = u.Ellipsoid.WGS84.cartographicToCartesian(i), r = -b(t.rotation), o = t.tilt === null ? n(this, W) - u.Math.PI_OVER_TWO : b(t.tilt - 90), d = {
    pitch: o,
    heading: r,
    // 朝向
    roll: void 0
    // 翻滚
  };
  e.camera.setView({
    destination: s,
    orientation: d
  });
  const g = h(this, dt, qt).call(this, t.resolution, b(t.latitude), e);
  l(this, W, o + u.Math.PI_OVER_TWO), e.camera.moveBackward(g);
}, X = new WeakSet(), Rt = function(t = !1) {
  const e = n(this, q), i = n(this, p).camera.viewMatrix;
  (!e || !u.Matrix4.equalsEpsilon(e, i, 1e-5)) && (l(this, q, i.clone()), t !== !0 && n(this, I).call(this, this));
}, dt = new WeakSet(), qt = function(t, e, i) {
  const s = i.canvas;
  let o = i.camera.frustum.fovy;
  console.assert(!isNaN(o));
  const d = t * s.clientHeight, g = Math.cos(Math.abs(e));
  return d * g / 2 / Math.tan(o / 2);
}, gt = new WeakSet(), It = function(t, e, i) {
  const s = i.canvas;
  let o = i.camera.frustum.fovy || 1;
  console.assert(!isNaN(o));
  const d = 2 * t * Math.tan(o / 2), g = Math.cos(Math.abs(e));
  return d / g / s.clientHeight;
};
var J, U, pt, S, N, Q, mt, Kt, Y, At, Z, Tt;
class de {
  // 更新其他地图的方法
  constructor(t, e, i) {
    /**
     * 地图变更事件
     * @returns 
     */
    a(this, mt);
    /**
     * 判断是否为SceneView
     */
    a(this, Y);
    /**
     * 移除监听
     */
    a(this, Z);
    a(this, J, void 0);
    a(this, U, void 0);
    //地图
    a(this, pt, !1);
    // 是否正在更新，正在更新的不需要触发视图更改事件
    a(this, S, null);
    a(this, N, null);
    R(this, "enable", !0);
    a(this, Q, void 0);
    l(this, J, e), l(this, U, t), l(this, Q, i), l(this, N, t.watch("interacting,animation", (s) => {
      !s || n(this, S) || l(this, S, t.watch("viewpoint", () => {
        h(this, mt, Kt).call(this);
      }));
    }));
  }
  // id不可更改
  get id() {
    return n(this, J);
  }
  /**
   * 获取当前位置信息
   */
  get syncInfo() {
    const t = n(this, U);
    let e, i = null;
    h(this, Y, At).call(this, t) ? (e = -t.camera.heading, i = t.camera.tilt) : e = t.rotation;
    const s = t.center.longitude || 0, r = t.center.latitude || 0;
    return {
      resolution: t.resolution,
      // 当每单位米数为1时的地图分辨率
      rotation: e,
      // 旋转
      tilt: i,
      //倾斜角度 2d没有该参数
      longitude: s,
      // 中心经度
      latitude: r
      // 中心纬度
    };
  }
  /**
   * 更新地图
   */
  async update(t) {
    if (!t)
      return;
    h(this, Z, Tt).call(this);
    const e = n(this, U), i = {
      type: "point",
      // autocasts as new Point()
      longitude: t.longitude,
      latitude: t.latitude
    };
    e.center = i, e.scale = le(t.resolution), h(this, Y, At).call(this, e) ? (e.camera.heading = -t.rotation, e.camera.tilt = t.tilt ?? e.camera.tilt) : e.rotation = t.rotation;
  }
  // 销毁对象
  destroy() {
    var t;
    h(this, Z, Tt).call(this), (t = n(this, N)) == null || t.remove(), l(this, N, null);
  }
}
J = new WeakMap(), U = new WeakMap(), pt = new WeakMap(), S = new WeakMap(), N = new WeakMap(), Q = new WeakMap(), mt = new WeakSet(), Kt = function() {
  !this.enable || n(this, pt) || n(this, Q).call(this, this);
}, Y = new WeakSet(), At = function(t) {
  return t.type === "3d";
}, Z = new WeakSet(), Tt = function() {
  var t;
  n(this, S) && ((t = n(this, S)) == null || t.remove(), l(this, S, null));
};
const ge = `<div class="error">\r
    <div class="info">\r
        <div>\r
            <p>软件未授权，请联系软件提供商，获取授权码！</p>\r
            <a href="">刷新</a>\r
        </div>\r
    </div>\r
</div>`, pe = `<div class="develop">\r
    开发预览版，有限期至【】@山维科技\r
</div>`;
var _, P, ft, Xt, vt, Jt, k, Mt, Qt, C, w, Ct, Yt, z, et;
const A = class {
  constructor() {
    /**
     * 脱密
     * @param str 
     * @param pwd 
     * @returns 
     */
    a(this, ft);
    /**
     * 验证授权
     * @param licenses 
     */
    a(this, vt);
    // 服务器时间
    /**
     * 获取服务器时间
     * @returns 
     */
    a(this, Mt);
    /**
     * 右下角显示开发版内容
     */
    a(this, Ct);
    /**
     * 显示未授权
     */
    a(this, z);
    a(this, P, "开发版");
    a(this, k, null);
    a(this, C, null);
    a(this, w, null);
    if (new.target === A)
      return n(A, _) || l(A, _, this), n(A, _);
  }
  // 授权类型
  /**
   * 授权类型
   */
  get authtype() {
    return n(this, P);
  }
  /**
   * 是否授权
   */
  get authorized() {
    return h(this, vt, Jt).call(this);
  }
};
let tt = A;
_ = new WeakMap(), P = new WeakMap(), ft = new WeakSet(), Xt = function(t, e) {
  try {
    if (!t || t.length < 8)
      return "";
    e || (e = "sunway_webgis_auth_code"), e = encodeURIComponent(e);
    let i = "";
    for (let M = 0; M < e.length; M += 1)
      i += e.charCodeAt(M).toString();
    let s = Math.floor(i.length / 5), r = parseInt(i.charAt(s) + i.charAt(s * 2) + i.charAt(s * 3) + i.charAt(s * 4) + i.charAt(s * 5)), o = Math.round(e.length / 2), d = Math.pow(2, 31) - 1, g = parseInt(t.substring(t.length - 8, t.length), 16);
    for (t = t.substring(0, t.length - 8), i += g; i.length > 10; )
      i = (parseInt(i.substring(0, 10)) + parseInt(i.substring(10, i.length))).toString();
    i = (r * i + o) % d;
    let m = "", D = "";
    for (let M = 0; M < t.length; M += 2)
      m = parseInt(t.substring(M, M + 2), 16) ^ Math.floor(i / d * 255), D += String.fromCharCode(m), i = (r * i + o) % d;
    return decodeURIComponent(D);
  } catch {
    return "";
  }
}, vt = new WeakSet(), Jt = function() {
  const t = h(this, ft, Xt).call(this, window.licenses), e = t.split("|")[0], i = t.split("|")[1];
  l(this, P, t.split("|")[2]);
  let s = window.location.hostname.toUpperCase();
  if (s === "LOCALHOST" || s == "127.0.0.1")
    return !0;
  let r = !1;
  if (e.split(",").forEach((m) => {
    if (m.toUpperCase() === s) {
      r = !0;
      return;
    }
  }), !r)
    return h(this, z, et).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  if (typeof i > "u")
    return h(this, z, et).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  const d = h(this, Mt, Qt).call(this), g = new Date(i);
  return d.getTime() > g.getTime() ? (h(this, z, et).call(this, n(this, P) + "有限期至【" + i + "】已过期，请重新授权！@山维科技"), !1) : (n(this, P) != "正式版" && h(this, Ct, Yt).call(this, "开发预览版，有限期至【" + i + "】@山维科技"), !0);
}, k = new WeakMap(), Mt = new WeakSet(), Qt = function() {
  if (!n(this, k)) {
    const t = new window.XMLHttpRequest();
    t.open("GET", "/", !1), t.send(null);
    const e = t.getResponseHeader("Date");
    l(this, k, new Date(e));
  }
  return n(this, k);
}, C = new WeakMap(), w = new WeakMap(), Ct = new WeakSet(), Yt = function(t) {
  n(this, w) || (l(this, w, document.createElement("div")), n(this, w).style.zIndex = "999", n(this, w).classList.add("auth"), n(this, w).innerHTML = pe, document.body.appendChild(n(this, w)));
  const e = n(this, w).getElementsByClassName("develop")[0];
  e.innerHTML = t;
}, z = new WeakSet(), et = function(t) {
  n(this, C) || (l(this, C, document.createElement("div")), n(this, C).style.zIndex = "1000", n(this, C).classList.add("auth"), n(this, C).innerHTML = ge, document.body.appendChild(n(this, C)));
  const e = n(this, C).getElementsByTagName("p")[0];
  e.innerHTML = t;
}, // 单例模式
a(tt, _, void 0);
var v, wt, x, bt, Zt, Et, $t;
class ye {
  constructor(t, e) {
    /**
     * 更新除发出事件的所有其他的地图
     */
    a(this, bt);
    /**
     * 获取地图同步器的构造函数
     * @param map 
     * @returns 
     */
    a(this, Et);
    // [x: string]: any; // 任意的string索引List
    a(this, v, []);
    a(this, wt, 1);
    //是否启用同步
    a(this, x, !1);
    R(this, "graphics", {
      add: (t) => {
        n(this, v).forEach((e) => {
          var i;
          (i = e == null ? void 0 : e.graphics) == null || i.add(t);
        });
      },
      remove: (t) => {
        n(this, v).forEach((e) => {
          var i;
          (i = e == null ? void 0 : e.graphics) == null || i.remove(t);
        });
      },
      removeAll: () => {
        n(this, v).forEach((t) => {
          var e;
          (e = t == null ? void 0 : t.graphics) == null || e.removeAll();
        });
      }
    });
    new tt().authorized && (this.enable = (e == null ? void 0 : e.enable) ?? !0, t.forEach((i) => {
      this.addMap(i);
    }));
  }
  set enable(t) {
    n(this, x) !== t && l(this, x, t);
  }
  get enable() {
    return n(this, x);
  }
  // 添加地图
  addMap(t) {
    const e = h(this, Et, $t).call(this, t), i = Ht(this, wt)._++, s = new e(t, i, h(this, bt, Zt).bind(this));
    n(this, v).push(s);
  }
  // 删除地图
  removeMap(t) {
    this.enable && (t.enableSynchronizer = !1);
  }
  // 高亮
  highlight(t) {
    n(this, v).forEach((e) => {
      e == null || e.highlight(t);
    });
  }
  // 移除高亮
  unhighlight(t) {
    n(this, v).forEach((e) => {
      e == null || e.unhighlight(t);
    });
  }
  unHighlightAll(t) {
    n(this, v).forEach((e) => {
      e == null || e.unhighlight(t);
    });
  }
  // 移除全部高亮
}
v = new WeakMap(), wt = new WeakMap(), x = new WeakMap(), bt = new WeakSet(), Zt = function(t) {
  if (!this.enable)
    return;
  const e = t.syncInfo;
  if (!e)
    return;
  n(this, v).filter((s) => s.id !== t.id).forEach((s) => {
    s == null || s.update(e);
  });
}, Et = new WeakSet(), $t = function(t) {
  var e;
  if (t.ol_uid)
    return he;
  if (t.cesiumWidget)
    return ue;
  if ((e = t.map) != null && e.basemap)
    return de;
  throw new Error("cannot get map type");
};
export {
  ye as Synchronizer
};
