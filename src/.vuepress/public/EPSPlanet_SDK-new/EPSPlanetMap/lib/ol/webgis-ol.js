var Cr = Object.defineProperty;
var Pr = (i, e, t) => e in i ? Cr(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var fe = (i, e, t) => (Pr(i, typeof e != "symbol" ? e + "" : e, t), t), ee = (i, e, t) => {
  if (!e.has(i))
    throw TypeError("Cannot " + t);
};
var l = (i, e, t) => (ee(i, e, "read from private field"), t ? t.call(i) : e.get(i)), c = (i, e, t) => {
  if (e.has(i))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(i) : e.set(i, t);
}, u = (i, e, t, r) => (ee(i, e, "write to private field"), r ? r.call(i, t) : e.set(i, t), t), ge = (i, e, t, r) => ({
  set _(s) {
    u(i, e, s, t);
  },
  get _() {
    return l(i, e, r);
  }
}), h = (i, e, t) => (ee(i, e, "access private method"), t);
import { Map as Sr, View as Lr } from "ol";
import Or from "ol/proj/Projection";
import { Projection as ze, addProjection as qe, addCoordinateTransforms as Xt, get as jr, transform as Er } from "ol/proj";
import * as C from "ol/layer";
import * as f from "ol/source";
import * as b from "ol/format";
import * as x from "ol/style.js";
import { defaults as Ir } from "ol/control/defaults";
import ce from "ol/style/Style";
import Tr from "ol/style/Text";
import Je from "ol/tilegrid/TileGrid";
import _r from "ol/tilegrid/WMTS";
import { getTopLeft as xr, getWidth as Dr, containsCoordinate as Ar } from "ol/extent";
import Fr from "ol/control/Zoom";
import Gr from "ol-ext/control/LayerShop";
import Nr from "ol-ext/control/LayerSwitcher";
import { listen as Wr } from "ol/events";
import Vr from "ol-ext/control/EditBar";
import Br from "ol-ext/control/Toggle";
import Ze from "ol-ext/control/Notification";
import ke from "ol/layer/Vector";
import Xe from "ol/source/Vector";
import { getArea as Rr } from "ol/sphere";
import Ke from "ol/style/Circle";
import re from "ol/style/Stroke";
import ve from "ol/style/Fill";
import Hr from "ol/format/EsriJSON";
import we from "ol/format/GeoJSON";
import Ur from "ol/interaction/Select";
import zr from "ol/interaction/Modify";
import qr from "ol-ext/control/Button";
import Jr from "ol/interaction/DoubleClickZoom";
import { register as Zr } from "ol/proj/proj4";
import be from "proj4";
import { v4 as kr } from "uuid";
import Xr from "ol-ext/control/Overview";
import Kr from "ol-ext/control/Swipe";
import { unByKey as Yr } from "ol/Observable";
import Qr from "ol/Feature";
import ti from "ol/geom/Point";
import { easeOut as ye } from "ol/easing";
import ei from "ol-ext/featureAnimation/Show";
import { MousePosition as ri } from "ol/control";
class ii {
  /**
   * 获取样式的函数，主要用于创建需要动态获取属性的样式
   * @param config 相关配置信息
   * @returns
   */
  constructor(e) {
    const t = Object.assign({}, e), r = new ce(t);
    return (s) => {
      const a = r.getText();
      return a.setFeature && a.setFeature(s), r;
    };
  }
}
var mt, G, pt, ie;
class si extends Tr {
  constructor(t) {
    super(t);
    /**
     * 获取当前指定的属性值
     * @param {string} template 
     * @returns 
     */
    c(this, pt);
    /** 当前样式对应的feature */
    c(this, mt, void 0);
    // 原始内容
    c(this, G, void 0);
    u(this, G, t.text);
  }
  /**
   * 设置feature
   * @param {Feature} feature
   */
  setFeature(t) {
    u(this, mt, t);
  }
  /**
   * 重写获取文字值的方法
   * 如果text是数组，需要注意写法，应该是一行文字，一行样式，如果没有样式，要写一个空行，如：
   *                  [
                          "张三",
                          "bold 13px Calibri,sans-serif",
                          "\n",
                          "",  这个代表回车的样式
                          "李四",
                          "italic 11px Calibri,sans-serif"
                      ]
   * @returns 
   */
  getText() {
    try {
      let t;
      return Array.isArray(l(this, G)) ? t = l(this, G).map((r) => h(this, pt, ie).call(this, r)) : t = h(this, pt, ie).call(this, l(this, G)), t;
    } catch (t) {
      console.error(t);
      return;
    }
  }
}
mt = new WeakMap(), G = new WeakMap(), pt = new WeakSet(), ie = function(t) {
  return t.replace(/\{(.+?)\}/g, (...r) => {
    var s;
    return (s = l(this, mt)) == null ? void 0 : s.get(r[1]);
  });
};
var p = {}, he = {}, de = {}, Pt = {};
Pt.forEachPoint = function(i) {
  return function(e, t, r) {
    var s = e.length, a = r || 2, n;
    t ? n = t : a !== 2 ? n = e.slice() : n = new Array(s);
    for (var o = 0; o < s; o += a)
      i(e, n, o);
    return n;
  };
};
var Ye = Pt.forEachPoint, Me = [
  1289059486e-2,
  836237787e-2,
  5591021,
  348198983e-2,
  167804312e-2,
  0
], Ot = [75, 60, 45, 30, 15, 0], ai = [
  [
    1410526172116255e-23,
    898305509648872e-20,
    -1.9939833816331,
    200.9824383106796,
    -187.2403703815547,
    91.6087516669843,
    -23.38765649603339,
    2.57121317296198,
    -0.03801003308653,
    173379812e-1
  ],
  [
    -7435856389565537e-24,
    8983055097726239e-21,
    -0.78625201886289,
    96.32687599759846,
    -1.85204757529826,
    -59.36935905485877,
    47.40033549296737,
    -16.50741931063887,
    2.28786674699375,
    1026014486e-2
  ],
  [
    -3030883460898826e-23,
    898305509983578e-20,
    0.30071316287616,
    59.74293618442277,
    7.357984074871,
    -25.38371002664745,
    13.45380521110908,
    -3.29883767235584,
    0.32710905363475,
    685681737e-2
  ],
  [
    -1981981304930552e-23,
    8983055099779535e-21,
    0.03278182852591,
    40.31678527705744,
    0.65659298677277,
    -4.44255534477492,
    0.85341911805263,
    0.12923347998204,
    -0.04625736007561,
    448277706e-2
  ],
  [
    309191371068437e-23,
    8983055096812155e-21,
    6995724062e-14,
    23.10934304144901,
    -23663490511e-14,
    -0.6321817810242,
    -0.00663494467273,
    0.03430082397953,
    -0.00466043876332,
    25551644e-1
  ],
  [
    2890871144776878e-24,
    8983055095805407e-21,
    -3068298e-14,
    7.47137025468032,
    -353937994e-14,
    -0.02145144861037,
    -1234426596e-14,
    10322952773e-14,
    -323890364e-14,
    826088.5
  ]
], $e = [
  [
    -0.0015702102444,
    111320.7020616939,
    1704480524535203,
    -10338987376042340,
    26112667856603880,
    -35149669176653700,
    26595700718403920,
    -10725012454188240,
    1800819912950474,
    82.5
  ],
  [
    8277824516172526e-19,
    111320.7020463578,
    6477955746671607e-7,
    -4082003173641316e-6,
    1077490566351142e-5,
    -1517187553151559e-5,
    1205306533862167e-5,
    -5124939663577472e-6,
    9133119359512032e-7,
    67.5
  ],
  [
    0.00337398766765,
    111320.7020202162,
    4481351045890365e-9,
    -2339375119931662e-8,
    7968221547186455e-8,
    -1159649932797253e-7,
    9723671115602145e-8,
    -4366194633752821e-8,
    8477230501135234e-9,
    52.5
  ],
  [
    0.00220636496208,
    111320.7020209128,
    51751.86112841131,
    3796837749470245e-9,
    992013.7397791013,
    -122195221711287e-8,
    1340652697009075e-9,
    -620943.6990984312,
    144416.9293806241,
    37.5
  ],
  [
    -3441963504368392e-19,
    111320.7020576856,
    278.2353980772752,
    2485758690035394e-9,
    6070.750963243378,
    54821.18345352118,
    9540.606633304236,
    -2710.55326746645,
    1405.483844121726,
    22.5
  ],
  [
    -3218135878613132e-19,
    111320.7020701615,
    0.00369383431289,
    823725.6402795718,
    0.46104986909093,
    2351.343141331292,
    1.58060784298199,
    8.77738589078284,
    0.37238884252424,
    7.45
  ]
];
function ni(i, e, t) {
  return i = Math.max(i, e), i = Math.min(i, t), i;
}
function oi(i, e, t) {
  for (var r = t - e; i > t; )
    i -= r;
  for (; i < e; )
    i += r;
  return i;
}
function Qe(i, e, t, r) {
  var s = i[t], a = i[t + 1], n = r[0] + r[1] * Math.abs(s), o = Math.abs(a) / r[9], d = r[2] + r[3] * o + r[4] * o * o + r[5] * o * o * o + r[6] * o * o * o * o + r[7] * o * o * o * o * o + r[8] * o * o * o * o * o * o;
  e[t] = n * (s < 0 ? -1 : 1), e[t + 1] = d * (a < 0 ? -1 : 1);
}
de.forward = Ye(function(i, e, t) {
  var r = oi(i[t], -180, 180), s = ni(i[t + 1], -74, 74), a = null, n;
  for (n = 0; n < Ot.length; ++n)
    if (s >= Ot[n]) {
      a = $e[n];
      break;
    }
  if (a === null) {
    for (n = Ot.length - 1; n >= 0; --n)
      if (s <= -Ot[n]) {
        a = $e[n];
        break;
      }
  }
  e[t] = r, e[t + 1] = s, Qe(e, e, t, a);
});
de.inverse = Ye(function(i, e, t) {
  for (var r = Math.abs(i[t + 1]), s = null, a = 0; a < Me.length; a++)
    if (r >= Me[a]) {
      s = ai[a];
      break;
    }
  Qe(i, e, t, s);
});
var ue = {}, tr = Pt.forEachPoint, Tt = 6378137, Ce = 85.0511287798, _t = Math.PI / 180;
ue.forward = tr(function(i, e, t) {
  var r = Math.max(Math.min(Ce, i[t + 1]), -Ce), s = Math.sin(r * _t);
  e[t] = Tt * i[t] * _t, e[t + 1] = Tt * Math.log((1 + s) / (1 - s)) / 2;
});
ue.inverse = tr(function(i, e, t) {
  e[t] = i[t] / Tt / _t, e[t + 1] = (2 * Math.atan(Math.exp(i[t + 1] / Tt)) - Math.PI / 2) / _t;
});
he.baiduMercator = de;
he.sphericalMercator = ue;
var me = {}, St = {}, Kt = {}, er = Pt.forEachPoint, y = Math.PI, Pe = 6378245, Se = 0.006693421622965943;
function rr(i, e) {
  var t = li(i - 105, e - 35), r = ci(i - 105, e - 35), s = e / 180 * y, a = Math.sin(s);
  a = 1 - Se * a * a;
  var n = Math.sqrt(a);
  return t = t * 180 / (Pe * (1 - Se) / (a * n) * y), r = r * 180 / (Pe / n * Math.cos(s) * y), [r, t];
}
function ir(i, e) {
  return i < 72.004 || i > 137.8347 || e < 0.8293 || e > 55.8271;
}
function li(i, e) {
  var t = -100 + 2 * i + 3 * e + 0.2 * e * e + 0.1 * i * e + 0.2 * Math.sqrt(Math.abs(i));
  return t += (20 * Math.sin(6 * i * y) + 20 * Math.sin(2 * i * y)) * 2 / 3, t += (20 * Math.sin(e * y) + 40 * Math.sin(e / 3 * y)) * 2 / 3, t += (160 * Math.sin(e / 12 * y) + 320 * Math.sin(e * y / 30)) * 2 / 3, t;
}
function ci(i, e) {
  var t = 300 + i + 2 * e + 0.1 * i * i + 0.1 * i * e + 0.1 * Math.sqrt(Math.abs(i));
  return t += (20 * Math.sin(6 * i * y) + 20 * Math.sin(2 * i * y)) * 2 / 3, t += (20 * Math.sin(i * y) + 40 * Math.sin(i / 3 * y)) * 2 / 3, t += (150 * Math.sin(i / 12 * y) + 300 * Math.sin(i / 30 * y)) * 2 / 3, t;
}
Kt.toWGS84 = er(function(i, e, t) {
  var r = i[t], s = i[t + 1];
  if (!ir(r, s)) {
    var a = rr(r, s);
    r = r - a[0], s = s - a[1];
  }
  e[t] = r, e[t + 1] = s;
});
Kt.fromWGS84 = er(function(i, e, t) {
  var r = i[t], s = i[t + 1];
  if (!ir(r, s)) {
    var a = rr(r, s);
    r = r + a[0], s = s + a[1];
  }
  e[t] = r, e[t + 1] = s;
});
var sr = Pt.forEachPoint, ar = Kt, hi = Math.PI, xt = hi * 3e3 / 180, di = St.toGCJ02 = sr(function(i, e, t) {
  var r = i[t] - 65e-4, s = i[t + 1] - 6e-3, a = Math.sqrt(r * r + s * s) - 2e-5 * Math.sin(s * xt), n = Math.atan2(s, r) - 3e-6 * Math.cos(r * xt);
  return e[t] = a * Math.cos(n), e[t + 1] = a * Math.sin(n), e;
}), ui = St.fromGCJ02 = sr(function(i, e, t) {
  var r = i[t], s = i[t + 1], a = Math.sqrt(r * r + s * s) + 2e-5 * Math.sin(s * xt), n = Math.atan2(s, r) + 3e-6 * Math.cos(r * xt);
  return e[t] = a * Math.cos(n) + 65e-4, e[t + 1] = a * Math.sin(n) + 6e-3, e;
});
St.toWGS84 = function(i, e, t) {
  var r = di(i, e, t);
  return ar.toWGS84(r, r, t);
};
St.fromWGS84 = function(i, e, t) {
  var r = ar.fromWGS84(i, e, t);
  return ui(r, r, t);
};
me.bd09 = St;
me.gcj02 = Kt;
var _ = he, Lt = me;
p.smerc2bmerc = function(i, e, t) {
  var r = _.sphericalMercator.inverse(i, e, t);
  return r = Lt.bd09.fromWGS84(r, r, t), _.baiduMercator.forward(r, r, t);
};
p.bmerc2smerc = function(i, e, t) {
  var r = _.baiduMercator.inverse(i, e, t);
  return r = Lt.bd09.toWGS84(r, r, t), _.sphericalMercator.forward(r, r, t);
};
p.bmerc2ll = function(i, e, t) {
  var r = _.baiduMercator.inverse(i, e, t);
  return Lt.bd09.toWGS84(r, r, t);
};
p.ll2bmerc = function(i, e, t) {
  var r = Lt.bd09.fromWGS84(i, e, t);
  return _.baiduMercator.forward(r, r, t);
};
p.ll2smerc = _.sphericalMercator.forward;
p.smerc2ll = _.sphericalMercator.inverse;
p.datum = Lt;
p.projection = _;
const Yt = new ze({
  // baidu或者BD:09
  code: "BD:09",
  extent: [-2003772637e-2, -1170804166e-2, 2003772637e-2, 1247410417e-2],
  units: "m",
  axisOrientation: "neu",
  global: !1
});
qe(Yt);
Xt("EPSG:4326", Yt, p.ll2bmerc, p.bmerc2ll);
Xt("EPSG:3857", Yt, p.smerc2bmerc, p.bmerc2smerc);
var Qt = function(i) {
  return function(e, t, r) {
    var s = e.length, a = r || 2, n;
    t ? n = t : a !== 2 ? n = e.slice() : n = new Array(s);
    for (var o = 0; o < s; o += a)
      i(e, n, o);
    return n;
  };
}, dt = {}, M = Math.PI, Le = 6378245, Oe = 0.006693421622965943;
function nr(i, e) {
  var t = mi(i - 105, e - 35), r = pi(i - 105, e - 35), s = e / 180 * M, a = Math.sin(s);
  a = 1 - Oe * a * a;
  var n = Math.sqrt(a);
  return t = t * 180 / (Le * (1 - Oe) / (a * n) * M), r = r * 180 / (Le / n * Math.cos(s) * M), [r, t];
}
function or(i, e) {
  return i < 72.004 || i > 137.8347 || e < 0.8293 || e > 55.8271;
}
function mi(i, e) {
  var t = -100 + 2 * i + 3 * e + 0.2 * e * e + 0.1 * i * e + 0.2 * Math.sqrt(Math.abs(i));
  return t += (20 * Math.sin(6 * i * M) + 20 * Math.sin(2 * i * M)) * 2 / 3, t += (20 * Math.sin(e * M) + 40 * Math.sin(e / 3 * M)) * 2 / 3, t += (160 * Math.sin(e / 12 * M) + 320 * Math.sin(e * M / 30)) * 2 / 3, t;
}
function pi(i, e) {
  var t = 300 + i + 2 * e + 0.1 * i * i + 0.1 * i * e + 0.1 * Math.sqrt(Math.abs(i));
  return t += (20 * Math.sin(6 * i * M) + 20 * Math.sin(2 * i * M)) * 2 / 3, t += (20 * Math.sin(i * M) + 40 * Math.sin(i / 3 * M)) * 2 / 3, t += (150 * Math.sin(i / 12 * M) + 300 * Math.sin(i / 30 * M)) * 2 / 3, t;
}
dt.toWGS84 = Qt(function(i, e, t) {
  var r = i[t], s = i[t + 1];
  if (!or(r, s)) {
    var a = nr(r, s);
    r = r - a[0], s = s - a[1];
  }
  e[t] = r, e[t + 1] = s;
});
dt.fromWGS84 = Qt(function(i, e, t) {
  var r = i[t], s = i[t + 1];
  if (!or(r, s)) {
    var a = nr(r, s);
    r = r + a[0], s = s + a[1];
  }
  e[t] = r, e[t + 1] = s;
});
var te = {}, Dt = 6378137, je = 85.0511287798, At = Math.PI / 180;
te.forward = Qt(function(i, e, t) {
  var r = Math.max(Math.min(je, i[t + 1]), -je), s = Math.sin(r * At);
  e[t] = Dt * i[t] * At, e[t + 1] = Dt * Math.log((1 + s) / (1 - s)) / 2;
});
te.inverse = Qt(function(i, e, t) {
  e[t] = i[t] / Dt / At, e[t + 1] = (2 * Math.atan(Math.exp(i[t + 1] / Dt)) - Math.PI / 2) / At;
});
p.ll2gmerc = function(i, e, t) {
  let r = dt.fromWGS84(i, e, t);
  return p.ll2smerc(r, r, t);
};
p.gmerc2ll = function(i, e, t) {
  let r = p.smerc2ll(i, i, t);
  return dt.toWGS84(r, e, t);
};
p.smerc2gmerc = function(i, e, t) {
  let r = p.smerc2ll(i, i, t);
  return r = dt.fromWGS84(r, r, t), p.ll2smerc(r, r, t);
};
p.gmerc2smerc = function(i, e, t) {
  let r = p.smerc2ll(i, i, t);
  return r = dt.toWGS84(r, r, t), p.ll2smerc(r, r, t);
};
p.ll2smerc = te.forward;
p.smerc2ll = te.inverse;
const fi = [-20037508342789244e-9, -20037508342789244e-9, 20037508342789244e-9, 20037508342789244e-9], pe = new ze({
  code: "GCJ-02",
  extent: fi,
  units: "m"
});
qe(pe);
Xt("EPSG:4326", pe, p.ll2gmerc, p.gmerc2ll);
Xt("EPSG:3857", pe, p.smerc2gmerc, p.gmerc2smerc);
const gi = {
  // 地图
  map: Sr,
  view: Lr,
  // 投影
  projection: Or,
  // 默认控件
  defaults: Ir,
  // defaults: _Control.defaults,
  // 图层
  graticule: C.Graticule,
  group: C.Group,
  heatmap: C.Heatmap,
  image: C.Image,
  layer: C.Layer,
  mapboxvector: C.MapboxVector,
  tile: C.Tile,
  vector: C.Vector,
  vectorimage: C.VectorImage,
  vectortile: C.VectorTile,
  webglpoints: C.WebGLPoints,
  webgltile: C.WebGLTile,
  // 数据源
  "bingmaps-source": f.BingMaps,
  "cartodb-source": f.CartoDB,
  "cluster-source": f.Cluster,
  "datatile-source": f.DataTile,
  "geotiff-source": f.GeoTIFF,
  "iiif-source": f.IIIF,
  // imagesource-source': _Source.Image, 基类 // 防止与图层的配置重复
  "imagearcgisrest-source": f.ImageArcGISRest,
  "imagecanvas-source": f.ImageCanvas,
  "imagemapguide-source": f.ImageMapGuide,
  "imagestatic-source": f.ImageStatic,
  "imagewms-source": f.ImageWMS,
  "osm-source": f.OSM,
  "raster-source": f.Raster,
  // source-source': _Source.Source, 基类
  "stamen-source": f.Stamen,
  // 'tile-source'-source': _Source.Tile, 基类 // 防止与图层的配置重复
  "tilearcgisrest-source": f.TileArcGISRest,
  "tiledebug-source": f.TileDebug,
  "tileimage-source": f.TileImage,
  "tilejson-source": f.TileJSON,
  "tilewms-source": f.TileWMS,
  "urltile-source": f.UrlTile,
  "utfgrid-source": f.UTFGrid,
  "vector-source": f.Vector,
  // 防止与图层的配置重复
  "vectortile-source": f.VectorTile,
  // 防止与图层的配置重复
  "wmts-source": f.WMTS,
  tilegrid: Je,
  "wmts-tilegrid": _r,
  "xyz-source": f.XYZ,
  "zoomify-source": f.Zoomify,
  // 要素格式方式
  esrijson: b.EsriJSON,
  geojson: b.GeoJSON,
  gml: b.GML,
  gpx: b.GPX,
  igc: b.IGC,
  iiifinfo: b.IIIFInfo,
  kml: b.KML,
  mvt: b.MVT,
  ows: b.OWS,
  polyline: b.Polyline,
  topojson: b.TopoJSON,
  wfs: b.WFS,
  wkb: b.WKB,
  wkt: b.WKT,
  wmscapabilities: b.WMSCapabilities,
  wmsgetfeatureinfo: b.WMSGetFeatureInfo,
  wmtscapabilities: b.WMTSCapabilities,
  // 样式
  circle: x.Circle,
  fill: x.Fill,
  icon: x.Icon,
  iconimage: x.IconImage,
  // 'image-style': _Style.Image, 基类 // 防止与图层的配置重复
  regularshape: x.RegularShape,
  stroke: x.Stroke,
  style: x.Style,
  text: x.Text,
  "style-fn": ii,
  "text-fn": si
}, q = (i, e) => {
  var r;
  if (i === null || typeof i != "object" || e == "params" || e == "props")
    return i;
  i.type == "wmts-source" && (i.projection = i.projection ?? "EPSG:3857", i.tileGrid.projection = i.projection, i.tileGrid.matrixSet = i.matrixSet);
  const t = JSON.parse(JSON.stringify(i));
  try {
    if (Array.isArray(t)) {
      for (let a = 0; a < t.length; a++)
        t[a] = q(t[a]);
      return t;
    }
    Object.keys(t).forEach((a) => {
      t[a] = q(t[a], a);
    }), e == "source" && (t.crossOrigin = "anonymous"), e = t.type || e;
    const s = vi(e);
    if (!s)
      throw new Error(`Cannot find a constructor of type ${e}`);
    if (i.type == "wmts-tilegrid") {
      let a = wi(t);
      t.origin = a.origin, t.resolutions || (t.resolutions = a.resolutions), t.matrixIds = a.matrixIds;
    }
    return ((r = i.sourceType) == null ? void 0 : r.indexOf("百度")) > -1 && (t.source = bi(t.sourceType)), new s(t);
  } catch (s) {
    return console.error(s), t;
  }
};
window.getObject = q;
const vi = (i) => {
  if (i)
    return gi[i.toLowerCase()];
}, wi = (i) => {
  const e = i.projection ?? "EPSG:3857", t = i.maxZoom ?? 18, r = i.minZoom ?? 0, s = i.tileSize ?? 256, a = i.matrixSet ?? "EPSG:3857", o = jr(e).getExtent(), d = xr(o), m = [], $ = Dr(o) / s, w = t - r + 1, g = new Array(w), L = new Array(w);
  for (let v = r; v <= t; v++)
    a.indexOf("EPSG") > -1 ? L[v - r] = e + ":" + v : L[v - r] = v, i.tileTool == "geoserver" ? g[v - r] = $ / Math.pow(2, v + 1) : g[v - r] = $ / Math.pow(2, v), m.push(d);
  return {
    origin: d,
    origins: m,
    matrixIds: L,
    resolutions: g
  };
}, bi = (i) => {
  for (var e = [], t = 0; t < 19; t++)
    e[t] = Math.pow(2, 18 - t);
  var r = new Je({
    origin: [0, 0],
    resolutions: e
  });
  return new f.TileImage({
    crossOrigin: "Anonymous",
    projection: Yt,
    tileGrid: r,
    tileUrlFunction: function(a) {
      if (!a)
        return "";
      var n = a[0], o = a[1], d = -a[2] - 1;
      return o < 0 && (o = "M" + -o), d < 0 && (d = "M" + -d), i == "百度矢量底图" ? "http://online3.map.bdimg.com/tile/?qt=tile&x=" + o + "&y=" + d + "&z=" + n + "&styles=pl&udt=20170809&scaler=1&p=1" : i == "百度影像底图" ? "http://shangetu" + Math.round(Math.random() * 3) + ".map.bdimg.com/it/u=x=" + o + ";y=" + d + ";z=" + n + ";v=009;type=sate&fm=46&udt=20170919" : i == "百度影像注记" ? "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + o + "&y=" + d + "&z=" + n + "&styles=sl&udt=20170919&scaler=1&p=1" : i == "百度矢量注记" ? "http://online3.map.bdimg.com/onlinelabel/?qt=tile&x=" + o + "&y=" + d + "&z=" + n + "&styles=pl&udt=20170919&scaler=1&p=1" : "http://online3.map.bdimg.com/tile/?qt=tile&x=" + o + "&y=" + d + "&z=" + n + "&styles=pl&udt=20170809&scaler=1&p=1";
    }
  });
};
var O = /* @__PURE__ */ ((i) => (i[i.none = 0] = "none", i[i.funOnly = 1] = "funOnly", i[i.propOnly = 2] = "propOnly", i[i.always = 3] = "always", i))(O || {});
const S = (i) => (e) => (e.prototype._manifest = yi(i), customElements.define(i.tagName, e), e), yi = (i) => (i = Object.assign({
  hasConfig: !1,
  mode: O.always
}, i), i), Ee = (i) => {
  Promise ? Promise.resolve().then(i) : requestAnimationFrame ? requestAnimationFrame(i) : setTimeout(i, 0);
};
const Mi = `<div class="error">\r
    <div class="info">\r
        <div>\r
            <p>软件未授权，请联系软件提供商，获取授权码！</p>\r
            <a href="">刷新</a>\r
        </div>\r
    </div>\r
</div>`, $i = `<div class="develop">\r
    开发预览版，有限期至【】@山维科技\r
</div>`;
var k, N, Ft, lr, Gt, cr, X, Nt, hr, j, E, Wt, dr, K, Et;
const Z = class {
  constructor() {
    /**
     * 脱密
     * @param str 
     * @param pwd 
     * @returns 
     */
    c(this, Ft);
    /**
     * 验证授权
     * @param licenses 
     */
    c(this, Gt);
    // 服务器时间
    /**
     * 获取服务器时间
     * @returns 
     */
    c(this, Nt);
    /**
     * 右下角显示开发版内容
     */
    c(this, Wt);
    /**
     * 显示未授权
     */
    c(this, K);
    c(this, N, "开发版");
    c(this, X, null);
    c(this, j, null);
    c(this, E, null);
    if (new.target === Z)
      return l(Z, k) || u(Z, k, this), l(Z, k);
  }
  // 授权类型
  /**
   * 授权类型
   */
  get authtype() {
    return l(this, N);
  }
  /**
   * 是否授权
   */
  get authorized() {
    return h(this, Gt, cr).call(this);
  }
};
let jt = Z;
k = new WeakMap(), N = new WeakMap(), Ft = new WeakSet(), lr = function(e, t) {
  try {
    if (!e || e.length < 8)
      return "";
    t || (t = "sunway_webgis_auth_code"), t = encodeURIComponent(t);
    let r = "";
    for (let w = 0; w < t.length; w += 1)
      r += t.charCodeAt(w).toString();
    let s = Math.floor(r.length / 5), a = parseInt(r.charAt(s) + r.charAt(s * 2) + r.charAt(s * 3) + r.charAt(s * 4) + r.charAt(s * 5)), n = Math.round(t.length / 2), o = Math.pow(2, 31) - 1, d = parseInt(e.substring(e.length - 8, e.length), 16);
    for (e = e.substring(0, e.length - 8), r += d; r.length > 10; )
      r = (parseInt(r.substring(0, 10)) + parseInt(r.substring(10, r.length))).toString();
    r = (a * r + n) % o;
    let m = "", $ = "";
    for (let w = 0; w < e.length; w += 2)
      m = parseInt(e.substring(w, w + 2), 16) ^ Math.floor(r / o * 255), $ += String.fromCharCode(m), r = (a * r + n) % o;
    return decodeURIComponent($);
  } catch {
    return "";
  }
}, Gt = new WeakSet(), cr = function() {
  const e = h(this, Ft, lr).call(this, window.licenses), t = e.split("|")[0], r = e.split("|")[1];
  u(this, N, e.split("|")[2]);
  let s = window.location.hostname.toUpperCase();
  if (s === "LOCALHOST" || s == "127.0.0.1")
    return !0;
  let a = !1;
  if (t.split(",").forEach((m) => {
    if (m.toUpperCase() === s) {
      a = !0;
      return;
    }
  }), !a)
    return h(this, K, Et).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  if (typeof r > "u")
    return h(this, K, Et).call(this, "软件未授权，请联系软件提供商，获取授权码！"), !1;
  const o = h(this, Nt, hr).call(this), d = new Date(r);
  return o.getTime() > d.getTime() ? (h(this, K, Et).call(this, l(this, N) + "有限期至【" + r + "】已过期，请重新授权！@山维科技"), !1) : (l(this, N) != "正式版" && h(this, Wt, dr).call(this, "开发预览版，有限期至【" + r + "】@山维科技"), !0);
}, X = new WeakMap(), Nt = new WeakSet(), hr = function() {
  if (!l(this, X)) {
    const e = new window.XMLHttpRequest();
    e.open("GET", "/", !1), e.send(null);
    const t = e.getResponseHeader("Date");
    u(this, X, new Date(t));
  }
  return l(this, X);
}, j = new WeakMap(), E = new WeakMap(), Wt = new WeakSet(), dr = function(e) {
  l(this, E) || (u(this, E, document.createElement("div")), l(this, E).style.zIndex = "999", l(this, E).classList.add("auth"), l(this, E).innerHTML = $i, document.body.appendChild(l(this, E)));
  const t = l(this, E).getElementsByClassName("develop")[0];
  t.innerHTML = e;
}, K = new WeakSet(), Et = function(e) {
  l(this, j) || (u(this, j, document.createElement("div")), l(this, j).style.zIndex = "1000", l(this, j).classList.add("auth"), l(this, j).innerHTML = Mi, document.body.appendChild(l(this, j)));
  const t = l(this, j).getElementsByTagName("p")[0];
  t.innerHTML = e;
}, // 单例模式
c(jt, k, void 0);
var Y, Q, tt, et, ft, rt, it, gt, W, Vt, vt, se, Bt, ur, Rt, mr, st, It, at, Ht, pr, wt, ae, Ut, fr, bt, ne, zt, gr, qt, vr, V, D, J;
class I extends HTMLElement {
  // 需要双向绑定的属性
  constructor() {
    super();
    /**
     * 加载config
     * 当config不存在时，从文件加载config
     */
    c(this, vt);
    /**
     * loading状态改变
     */
    c(this, Bt);
    /**
     * 初始化方法，用于初始化Dom
     */
    c(this, Rt);
    /**
     * 对象劫持
     * @param {any} value 
     * @returns {any}
     */
    c(this, st);
    /**
     * 延迟执行刷新 防抖 
     * 主要是防止数组的length也会触发刷新
     * @returns 
     */
    c(this, Ht);
    /**
     * 刷新所有 #labelTag 标签内容 该处为全部刷新，防止遗漏
     * {{}}已经被 #labelTag 标签替换
     */
    c(this, wt);
    /**
     * 绑定属性
     * @param att 需要绑定的属性 如 value
     */
    c(this, Ut);
    /**
     * 获取指定属性值
     * @param {string} origin 需要获取的属性 如a.b
     * @returns 对应属性的值
     */
    c(this, bt);
    /**
     * 设置$data中的属性
     * @param key 
     * @param value 
     */
    c(this, zt);
    /**
     * 给dom绑定$this，指向当前组件
     */
    c(this, qt);
    /**
     * 组件初始化方法，只初始化一次
     * 需要判断所有必要条件添加完成再进行初始化
     */
    c(this, D);
    // 任意的string索引List
    // 一些私有属性
    c(this, Y, void 0);
    c(this, Q, void 0);
    c(this, tt, void 0);
    c(this, et, void 0);
    c(this, ft, void 0);
    c(this, rt, void 0);
    c(this, it, "w-l");
    // label标签的名称
    c(this, gt, !1);
    // 渲染是否完成
    c(this, W, O.none);
    //组件模式
    c(this, Vt, ["value", "src", "title"]);
    c(this, at, !1);
    /**
     * 组件初始化状态，设置多个用于防抖
     * unInited 未初始化
     * initing 正在初始化
     * inited 已经初始化
     */
    c(this, V, "unInited");
    new jt().authorized && (this.manifest.hasConfig && h(this, vt, se).call(this, this.getAttribute("config") || this.getAttribute("configUrl")), u(this, W, this.manifest.mode ?? O.always), Ee(() => {
      h(this, Rt, mr).call(this), h(this, D, J).call(this);
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
    return l(this, Y);
  }
  set mapConfig(t) {
    !l(this, Y) && t && (u(this, Y, t), h(this, D, J).call(this));
  }
  /**
   * 组件所在地图的原型，如果组件本身为地图，则指向自身
   */
  get mapView() {
    return l(this, Q);
  }
  set mapView(t) {
    !l(this, Q) && t && (u(this, Q, t), h(this, D, J).call(this));
  }
  /**
    * 当前组件所在地图
    */
  get map() {
    return l(this, tt);
  }
  set map(t) {
    !l(this, tt) && t && (u(this, tt, t), h(this, D, J).call(this));
  }
  /**
    * 当前组件的配置
    */
  get config() {
    return l(this, et);
  }
  set config(t) {
    if (typeof t == "string") {
      h(this, vt, se).call(this, t);
      return;
    } else
      typeof t == "object" && !l(this, et) && t && (u(this, et, t), h(this, D, J).call(this));
  }
  /**
   * 加载中
   */
  get loading() {
    return !!l(this, ft);
  }
  set loading(t) {
    u(this, ft, t), h(this, Bt, ur).call(this);
  }
  /**
   * 用于渲染html的数据
   */
  get $data() {
    return l(this, rt);
  }
  set $data(t) {
    (l(this, W) & O.propOnly) == O.propOnly ? (u(this, rt, h(this, st, It).call(this, t)), h(this, wt, ae).call(this)) : u(this, rt, t);
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
Y = new WeakMap(), Q = new WeakMap(), tt = new WeakMap(), et = new WeakMap(), ft = new WeakMap(), rt = new WeakMap(), it = new WeakMap(), gt = new WeakMap(), W = new WeakMap(), Vt = new WeakMap(), vt = new WeakSet(), se = async function(t) {
  if (!this.config && t) {
    this.loading = !0;
    const r = await fetch(t);
    this.config = r && r.ok && await r.json() || {}, this.loading = !1;
  }
}, Bt = new WeakSet(), ur = function() {
  this.loading ? this.classList.add("loading") : this.classList.remove("loading");
}, Rt = new WeakSet(), mr = function() {
  const t = this.manifest.className || this.manifest.tagName;
  if (this.classList.add(t), this.manifest.template) {
    let r = this.manifest.template;
    (l(this, W) & O.propOnly) == O.propOnly && (r = r.replace(/\{\{(.+?)\}\}/g, (...s) => `<${l(this, it)}>${s[1]}</${l(this, it)}>`)), this.innerHTML = r, (l(this, W) & O.funOnly) == O.funOnly && h(this, qt, vr).call(this);
  }
  u(this, gt, !0);
}, st = new WeakSet(), It = function(t) {
  return typeof t == "object" && t !== null ? (Object.keys(t).forEach((r) => {
    t[r] = h(this, st, It).call(this, t[r]);
  }), new Proxy(t, {
    set: (r, s, a) => (r[s] = h(this, st, It).call(this, a), h(this, Ht, pr).call(this), !0)
    // get: (obj, p) => {
    //     // 判断是否需要刷新dom
    //     return obj[p];
    // },
  })) : t;
}, at = new WeakMap(), Ht = new WeakSet(), pr = function() {
  l(this, at) || (u(this, at, !0), Ee(() => {
    h(this, wt, ae).call(this), u(this, at, !1);
  }));
}, wt = new WeakSet(), ae = function() {
  l(this, Vt).forEach((r) => {
    h(this, Ut, fr).call(this, r);
  }), this.querySelectorAll(l(this, it)).forEach((r) => {
    const s = h(this, bt, ne).call(this, r.origin);
    String(s) !== r.innerHTML && (r.innerHTML = s);
  });
}, Ut = new WeakSet(), fr = function(t) {
  const r = `s-${t}`;
  this.querySelectorAll(`[${r}]`).forEach((a) => {
    const n = a.getAttribute(r), o = h(this, bt, ne).call(this, n);
    o !== a[t] && (a[t] = o);
  });
}, bt = new WeakSet(), ne = function(t) {
  try {
    return t.split(".").reduce((r, s) => r[s], this.$data);
  } catch (r) {
    console.error(r);
    return;
  }
}, zt = new WeakSet(), gr = function(t, r) {
  let s = this.$data, a = t.split(".");
  for (let n = 0; n < a.length; n++) {
    const o = a[n];
    n == a.length - 1 ? s[o] = r : s = s[o];
  }
}, qt = new WeakSet(), vr = function() {
  this.querySelectorAll("*").forEach((r) => {
    r.$this || (r.$this = this, r.$set = (s, a) => {
      h(this, zt, gr).call(this, s, a);
    });
  });
}, V = new WeakMap(), D = new WeakSet(), J = async function() {
  l(this, gt) && (l(this, V) === "initing" || l(this, V) === "inited" || this.isReady() && (u(this, V, "initing"), this.loading = !0, await this.onInit(), this.loading = !1, u(this, V, "inited"), this.afterInit()));
};
class wr extends I {
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
    const e = this.mapConfig.widgetManager || "webgis-widget-manager", t = document.createElement(e);
    t.startup({
      mapView: this,
      map: this.map,
      config: this.mapConfig.widgets,
      mapConfig: this.mapConfig
    }), this.childNodes[0] ? this.insertBefore(t, this.childNodes[0]) : this.appendChild(t);
  }
}
var Ci = Object.defineProperty, Pi = Object.getOwnPropertyDescriptor, Si = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Pi(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && Ci(e, t, s), s;
};
let Ie = class extends wr {
  constructor() {
    super();
  }
  async onInit() {
    const i = q(this.config.map, "map");
    i.setTarget(this), this.map = i, this.getObject = q;
  }
};
Ie = Si([
  S({
    tagName: "ol-map",
    className: "ol-map",
    hasConfig: !0
  })
], Ie);
var Li = Object.defineProperty, Oi = Object.getOwnPropertyDescriptor, ji = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Oi(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && Li(e, t, s), s;
};
let Te = class extends I {
  constructor() {
    super();
  }
  async onInit() {
    let i = new Fr({
      target: this
    });
    this.map.addControl(i);
  }
};
Te = ji([
  S({
    tagName: "ol-zoom-widget",
    className: "ol-zoom-widget"
  })
], Te);
var Ei = Object.defineProperty, Ii = Object.getOwnPropertyDescriptor, Ti = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ii(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && Ei(e, t, s), s;
}, B, Be;
let _e = (Be = class extends I {
  //记录打开透明度滑条的图层id
  constructor() {
    super();
    c(this, B, []);
  }
  async onInit() {
    let e = new Gr({
      target: this,
      noScroll: !0,
      collapsed: !1,
      trash: !1,
      extent: !0,
      // ol-ext插件的类型写错了
      show_progress: !1,
      // 判断需要展示的图层
      displayInLayerSwitcher: (t) => t.get("listMode") !== "hide"
    });
    e.on("drawlist", (t) => {
      const r = t.li, s = r.getElementsByClassName("ol-layerswitcher-buttons")[0], a = r.getElementsByClassName("layerswitcher-opacity")[0];
      let n = document.createElement("div");
      n.title = "透明度", n.innerHTML = "%";
      const o = t.layer;
      a.style.display = l(this, B).includes(o.ol_uid) ? "block" : "none", n.onclick = () => {
        a.style.display === "block" ? (a.style.display = "none", u(this, B, l(this, B).filter((m) => m !== o.ol_uid))) : (a.style.display = "block", l(this, B).push(o.ol_uid));
      }, s.appendChild(n);
    }), this.map.addControl(e);
  }
}, B = new WeakMap(), Be);
_e = Ti([
  S({
    tagName: "ol-layer-list",
    className: "ol-layer-list"
  })
], _e);
var _i = Object.defineProperty, xi = Object.getOwnPropertyDescriptor, Di = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? xi(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && _i(e, t, s), s;
};
let xe = class extends I {
  constructor() {
    super();
  }
  async onInit() {
    let i = new Ai({
      target: this
    });
    this.map.addControl(i);
  }
};
xe = Di([
  S({
    tagName: "ol-basemap-list",
    className: "ol-basemap-list"
  })
], xe);
class Ai extends Nr {
  constructor(e) {
    e = e || {}, e.switcherClass = ((e.switcherClass || "") + " ol-layerswitcher-image").trim(), e.mouseover = e.mouseover !== !1, super(e);
  }
  drawList(e, t) {
    e.style.height = "auto", t.getArray().filter((s) => s.get("isBasemap")).forEach((s) => {
      if (this.displayInLayerSwitcher(s)) {
        let a = document.createElement("img");
        a.src = s.get("thumbnail") || "images/thumbnail.png";
        let n = document.createElement("p");
        n.innerHTML = s.get("title") || s.get("name");
        let o = document.createElement("li");
        o.className = "ol-imgcontainer" + (s.getVisible() ? " ol-visible" : ""), o.appendChild(a), o.appendChild(n), o.onclick = () => {
          this.switchLayerVisibility(s, t);
        }, this._setLayerForLI(o, s), this.testLayerVisibility(s) || o.classList.add("ol-layer-hidden"), e.appendChild(o);
      }
    });
  }
  /** Disable overflow
  */
  overflow() {
  }
}
const Fi = "<div>{{coordinate}} 比例尺 {{scale}}</div>";
var Gi = Object.defineProperty, Ni = Object.getOwnPropertyDescriptor, Wi = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ni(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && Gi(e, t, s), s;
};
let De = class extends I {
  constructor() {
    super();
  }
  async onInit() {
    this.$data = {
      coordinate: "",
      scale: ""
    };
    const i = this.map.getViewport();
    Wr(i, "pointermove", this.handleMouseMove, this), this.map.on("moveend", this.moveEnd.bind(this));
  }
  // 鼠标移动
  handleMouseMove(i) {
    const e = this.map.getEventPixel(i), t = this.map.getCoordinateFromPixelInternal(e);
    t && (this.$data.coordinate = `${t[0].toFixed(3)} ${t[1].toFixed(3)}`);
  }
  // 比例尺变化
  moveEnd() {
    const i = this.getScale();
    (i ?? !1) && (this.$data.scale = `1:${i.toLocaleString()}`);
  }
  /**
   * 获取比例尺
   * @return {number} 比例尺.
   */
  getScale() {
    const i = this.map.getView(), e = 25.4 / 0.28, t = 1e3 / 25.4;
    var r = 1;
    return i.getProjection().getUnits() != "metric" ? r = i.getResolution() * i.getProjection().getMetersPerUnit() * t * e : r = i.getResolution() * t * e, Math.round(r);
  }
};
De = Wi([
  S({
    tagName: "ol-coordinate",
    className: "ol-coordinate",
    template: Fi
  })
], De);
const Vi = `<div class="attribute">\r
    <table class="table">\r
\r
    </table>\r
    <div>\r
        <button class="btn" onclick="$this.delete()">删除</button>\r
        <button class="btn" onclick="$this.upload()">提交</button>\r
    </div>\r
</div>\r
<input class="shp-upload" multiple type="file" onchange="$this.readFile(event)" id="shp-upload" name="shp-upload"\r
    accept=".shp,.prj,.dbf,.shx">\r
<!-- <input class="shp-upload" type="file" onchange="$this.readFile(event)" id="shp-upload" name="shp-upload" accept=".zip"> -->`;
var Bi = Object.defineProperty, Ri = Object.getOwnPropertyDescriptor, Hi = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Ri(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && Bi(e, t, s), s;
}, P, nt, A, F, ot, yt, Jt, lt, Mt, oe, Zt, br, R, ut, $t, le, kt, yr, Re;
let Ae = (Re = class extends I {
  constructor() {
    super();
    c(this, Mt);
    // 编辑属性
    c(this, Zt);
    // 隐藏属性编辑框
    c(this, R);
    // 显示属性编辑框
    c(this, $t);
    // 获取字段的输入框或展示框
    c(this, kt);
    c(this, P, void 0);
    c(this, nt, void 0);
    //当前图层
    c(this, A, void 0);
    c(this, F, void 0);
    fe(this, "notification");
    c(this, ot, void 0);
    c(this, yt, []);
    // 投影列表
    c(this, Jt, 0);
    //投影的索引
    c(this, lt, void 0);
  }
  async onInit() {
    const e = new ke({
      source: new Xe(),
      style: function(m) {
        return new ce({
          image: new Ke({
            radius: 5,
            stroke: new re({ width: 1.5, color: m.get("color") || [255, 128, 0] }),
            fill: new ve({ color: (m.get("color") || [255, 128, 0]).concat([0.3]) })
          }),
          stroke: new re({ width: 2.5, color: m.get("color") || [255, 128, 0] }),
          fill: new ve({ color: (m.get("color") || [255, 128, 0]).concat([0.3]) })
        });
      }
    });
    e.set("listMode", "hide"), this.map.addLayer(e), u(this, nt, e);
    let t = {
      edition: !0,
      select: !1,
      delete: !1,
      info: !1,
      drawPoint: !0,
      drawLine: !0,
      drawPolygon: !0,
      drawHole: !0,
      drawRegular: !0,
      transform: !0,
      split: !0,
      offset: !0
    };
    t = Object.assign(t, this.config.tools);
    const r = new Vr({
      source: e.getSource(),
      target: this,
      // edition: false,
      interactions: {
        Select: !1,
        //&& _select,// 不展示选择
        Delete: !1,
        Info: !1,
        DrawPoint: t.drawPoint && {
          title: "绘制点"
        },
        DrawLine: t.drawLine && {
          title: "绘制线"
        },
        DrawPolygon: t.drawPolygon && {
          title: "绘制面"
        },
        DrawHole: t.drawHole && {
          title: "绘制岛面"
        },
        DrawRegular: t.drawRegular && {
          title: "绘制多边形",
          ptsLabel: "边"
        },
        Transform: t.transform && {
          title: "旋转/缩放"
        },
        Split: t.split && {
          title: "打断"
        },
        Offset: t.offset && {
          title: "偏移"
        },
        UndoDraw: "回退",
        FinishDraw: "完成"
      }
    }), s = new Ur({
      layers: [e]
      // 指定图层
    });
    s.on("change:active", () => {
      s.getActive() || (s.getFeatures().clear(), h(this, R, ut).call(this));
    }), s.on("select", (m) => {
      h(this, Zt, br).call(this, m);
    }), u(this, F, new zr({
      features: s.getFeatures()
    })), this.map.addInteraction(l(this, F)), l(this, F).setActive(!1);
    const a = new Br({
      // className: 'attr-edit',
      html: '<div class="attr-edit">☰</div>',
      title: "属性编辑",
      interaction: s
    });
    r.addControl(a);
    const n = this.map.interactions.getArray().find((m) => m instanceof Jr);
    [
      r.getInteraction("DrawPoint"),
      r.getInteraction("DrawLine"),
      r.getInteraction("DrawPolygon"),
      r.getInteraction("DrawHole"),
      r.getInteraction("DrawRegular")
    ].forEach((m) => {
      m == null || m.on("drawend", ($) => {
        n.setActive(!1), h(this, Mt, oe).call(this, $.feature), setTimeout(() => {
          n.setActive(!0);
        }, 0);
      });
    }), u(this, lt, s);
    const d = new qr({
      html: '<div class="upload"><label>➜</label></div>',
      title: "上传shp",
      handleClick: () => this.uploadShp()
    });
    r.addControl(d), this.map.addControl(r), this.notification = new Ze({}), this.map.addControl(this.notification);
  }
  // 上传shp
  uploadShp() {
    u(this, ot, l(this, ot) || this.getElementsByClassName("shp-upload")[0]), l(this, ot).click();
  }
  // 读取shp文件
  async readFile(e) {
    var s;
    const t = e.currentTarget, r = t.files;
    if (r.length !== 0) {
      this.loading = !0;
      try {
        let a, n;
        for (let g = 0; g < r.length; g++) {
          const [L, v] = r[g].name.split(".");
          if (v.toLowerCase() === "shp") {
            a = L, n = r[g];
            break;
          }
        }
        if (!n)
          throw new Error("没有找到shp文件");
        const o = await this.loadFile(n);
        if (!o)
          throw new Error("读取文件失败");
        let d = await window.shp(o).then((g) => g, (g) => {
          throw new Error(g);
        }), m;
        for (let g = 0; g < r.length; g++) {
          const [L, v] = r[g].name.split(".");
          if (v.toLowerCase() === "prj" && L == a) {
            m = r[g];
            break;
          }
        }
        let $;
        if (m) {
          let g = await this.loadFile(m, "text");
          g = g.replace("Gauss_Kruger", "Transverse_Mercator");
          let L = l(this, yt).find(($r) => $r.prj === g), v;
          L ? v = L.name : (v = `ESRI:${ge(this, Jt)._++}`, l(this, yt).push({
            name: v,
            prj: g
          }), be.defs(v, g), Zr(be));
          const Mr = this.map.getView().getProjection().getCode();
          $ = new we().readFeatures(d, {
            dataProjection: v,
            // 元数据的投影坐标
            featureProjection: Mr
            // 规定要素以哪种坐标显示
          });
        } else
          $ = new we().readFeatures(d);
        const w = $[0];
        if (w) {
          l(this, nt).getSource().addFeature(w);
          const g = (s = w.getGeometry()) == null ? void 0 : s.getExtent();
          this.map.getView().fit(g, { padding: [50, 50, 50, 50], duration: 1e3 }), h(this, Mt, oe).call(this, w);
        } else
          throw new Error("没有找到上传的图形");
      } catch (a) {
        console.error(a), this.notification.show(a);
      } finally {
        t.value = null, this.loading = !1;
      }
    }
  }
  // 读取blob文件
  loadFile(e, t) {
    return new Promise((r, s) => {
      const a = new FileReader();
      switch (t) {
        case "text":
          a.readAsText(e);
          break;
        case "buffer":
          a.readAsArrayBuffer(e);
          break;
        case "binary":
          a.readAsBinaryString(e);
          break;
        default:
          a.readAsDataURL(e);
          break;
      }
      a.onload = (n) => {
        var d;
        let o = (d = n.target) == null ? void 0 : d.result;
        r(o);
      }, a.onerror = (n) => {
        a.abort(), s(n);
      };
    });
  }
  // 删除指定图形
  delete() {
    l(this, nt).getSource().removeFeature(l(this, A)), u(this, A, null), h(this, R, ut).call(this);
  }
  // 获取日期部分
  getDate(e) {
    let t;
    if (e)
      typeof e == "string" ? t = new Date(e) : t = e;
    else
      return "";
    const r = t.getFullYear(), s = t.getMonth() + 1, a = t.getDate();
    return `${this.pad(r, 4)}-${this.pad(s)}-${this.pad(a)}`;
  }
  // 补零
  pad(e, t = 2, r = "0") {
    return e.toString().padStart(t, r);
  }
  // 获取时间部分
  getTime(e) {
    let t;
    if (e)
      typeof e == "string" ? t = new Date(e) : t = e;
    else
      return "";
    return t.toLocaleTimeString("zh-cn", { hour: "numeric", minute: "numeric", hour12: !1 });
  }
  // 获取默认值
  getDefaultValue(e, t) {
    let r = "";
    try {
      switch (t == null ? void 0 : t.toLowerCase()) {
        case "$guid":
          r = `{${kr()}}`;
          break;
        case "$date":
          let s = /* @__PURE__ */ new Date();
          r = `${this.getDate(s)} ${this.getTime(s)}`;
          break;
        case "$area":
          const a = e.getGeometry();
          a && (r = Rr(a, {
            projection: this.map.getView().getProjection()
          }).toFixed(3));
          break;
        default:
          r = t || "";
          break;
      }
    } catch (s) {
      console.error(s);
    }
    return r;
  }
  // 提交
  upload() {
    if (!l(this, A)) {
      this.notification.show("请先绘制一个图形");
      return;
    }
    let e = new Hr().writeFeaturesObject([l(this, A)], {
      featureProjection: this.map.getView().getProjection()
    });
    e = this.beforeUpload(e);
    let t = `features=${JSON.stringify(e.features)}&rollbackOnFailure=true&f=pjson`;
    const r = this.config.layer.url + "/addFeatures";
    fetch(r, {
      method: "POST",
      body: t,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then((s) => s.json()).then((s) => {
      if (s.error) {
        const a = s.error.details[0] || s.error.message;
        this.notification.show(`提交失败 ${a}`), console.error(s.error), this.afterUpload(!1);
      } else
        this.notification.show("提交完成"), this.delete(), this.map.getAllLayers().forEach((a) => {
          var n;
          ((n = a.get("type")) == null ? void 0 : n.toLowerCase()) === "image" && a.getSource().refresh();
        }), this.afterUpload(!0);
    }).catch((s) => {
      console.error(s), this.afterUpload(!1);
    });
  }
  beforeUpload(e) {
    return e;
  }
  afterUpload(e) {
  }
}, P = new WeakMap(), nt = new WeakMap(), A = new WeakMap(), F = new WeakMap(), ot = new WeakMap(), yt = new WeakMap(), Jt = new WeakMap(), lt = new WeakMap(), Mt = new WeakSet(), oe = function(e) {
  l(this, lt).setActive(!0), l(this, lt).getFeatures().extend([e]), h(this, $t, le).call(this, e);
}, Zt = new WeakSet(), br = function(e) {
  const t = e.target.getFeatures(), r = t.getLength();
  if (r === 0)
    h(this, R, ut).call(this);
  else if (r > 1)
    h(this, R, ut).call(this);
  else {
    const s = t.getArray()[0];
    h(this, $t, le).call(this, s);
  }
}, R = new WeakSet(), ut = function() {
  l(this, F).setActive(!1), u(this, P, l(this, P) || this.getElementsByClassName("attribute")[0]), l(this, P).style.display = "none";
}, $t = new WeakSet(), le = function(e) {
  l(this, F).setActive(!0), u(this, A, e);
  let t = this.config.layer.fields || [], r = document.createElement("table");
  r.classList.add("table"), t.forEach((s) => {
    let a = document.createElement("tr"), n = document.createElement("td");
    n.innerHTML = s.alias || s.name;
    let o = document.createElement("td");
    o.appendChild(h(this, kt, yr).call(this, e, s)), a.appendChild(n), a.appendChild(o), a.style.display = s.isDisplay === !1 ? "none" : "table-row", r.appendChild(a);
  }), u(this, P, l(this, P) || this.getElementsByClassName("attribute")[0]), l(this, P).replaceChild(r, l(this, P).firstChild), l(this, P).style.display = "block";
}, kt = new WeakSet(), yr = function(e, t) {
  var s, a;
  let r = e.get(t.name) || this.getDefaultValue(e, t.defaultValue);
  if (e.set(t.name, r), ((s = t.type) == null ? void 0 : s.toLowerCase()) === "date") {
    let n = document.createElement("div"), o = document.createElement("input");
    o.type = "date", o.value = this.getDate(r);
    let d = document.createElement("input");
    return d.type = "time", d.value = this.getTime(r), d.oninput = o.oninput = () => {
      e.set(t.name, `${o.value} ${d.value}`);
    }, t.editable == !1 && (o.readOnly = !0, d.readOnly = !0), n.appendChild(o), n.appendChild(d), n.classList.add("date-time"), n;
  } else {
    let n = document.createElement("input");
    t.editable == !1 && (n.readOnly = !0);
    let o;
    switch ((a = t.type) == null ? void 0 : a.toLowerCase()) {
      case "string":
        o = "text";
        break;
      case "guid":
        o = "text";
        break;
      case "int":
        o = "number";
        break;
      case "double":
        o = "number";
        break;
      default:
        o = "text";
        break;
    }
    return n.type = o, n.oninput = (d) => {
      e.set(t.name, d.target.value);
    }, n.value = r, n;
  }
}, Re);
Ae = Hi([
  S({
    tagName: "ol-edit-bar",
    className: "ol-edit-bar",
    template: Vi
  })
], Ae);
const Ui = `<div s-title="title" class="btn" onclick="$this.btnClick(event)">\r
    <div class="arrow">&#8678</div>\r
</div>`;
var zi = Object.defineProperty, qi = Object.getOwnPropertyDescriptor, Ji = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? qi(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && zi(e, t, s), s;
};
let Fe = class extends I {
  constructor() {
    super();
  }
  async onInit() {
    this.$data = {
      title: "显示鹰眼图",
      display: !1
    }, this.classList.add("overview-hide");
    const i = this.mapConfig.map.layers.filter((r) => r.isBasemap === !0), e = q(i, "map");
    let t = new Xr({
      target: this,
      layers: e,
      rotation: !0,
      panAnimation: !0,
      minZoom: 0,
      maxZoom: 20
    });
    this.map.addControl(t);
  }
  // 按钮点击事件
  btnClick() {
    this.$data.display = !this.$data.display, this.$data.display ? (this.$data.title = "隐藏鹰眼图", this.classList.remove("overview-hide")) : (this.$data.title = "显示鹰眼图", this.classList.add("overview-hide"));
  }
};
Fe = Ji([
  S({
    tagName: "ol-overview",
    className: "ol-overview",
    template: Ui
  })
], Fe);
const Zi = `<div class="header">\r
    <label>卷帘开关</label>\r
    <input type="checkbox" class="switch" id="switch" onclick="$this.switchChange(event)">\r
    <label for="switch"></label>\r
</div>\r
<div class="left">\r
    <div class="title">左侧</div>\r
    <div class="layer-list-left">\r
    </div>\r
</div>\r
<div class="right">\r
    <div class="title">右侧</div>\r
    <div class="layer-list-right">\r
    </div>\r
</div>`;
var ki = Object.defineProperty, Xi = Object.getOwnPropertyDescriptor, Ki = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? Xi(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && ki(e, t, s), s;
}, H, U, T, ct, He;
let Ge = (He = class extends I {
  constructor() {
    super();
    c(this, H, void 0);
    c(this, U, void 0);
    c(this, T, void 0);
    c(this, ct, []);
  }
  async onInit() {
    u(this, T, new Kr()), this.drawList();
    let e = this.map.getLayerGroup().getLayers();
    e.on("change:length", () => {
      this.drawList(), this.listen(e);
    }), this.listen(e);
  }
  removeListeners() {
    l(this, ct).forEach((e) => {
      Yr(e);
    }), u(this, ct, []);
  }
  listen(e) {
    this.removeListeners(), e.getArray().forEach((t) => {
      l(this, ct).push(t.on("change:visible", () => {
        this.drawList();
      }));
    });
  }
  switchChange(e) {
    e.target.checked ? this.map.addControl(l(this, T)) : this.map.removeControl(l(this, T));
  }
  // 绘制列表
  drawList() {
    u(this, H, l(this, H) || this.getElementsByClassName("layer-list-left")[0]), u(this, U, l(this, U) || this.getElementsByClassName("layer-list-right")[0]);
    let e = [];
    this.getLayers(this.map.getLayers(), e), l(this, H).innerHTML = "", l(this, H).appendChild(this.createUl(e, "left")), l(this, U).innerHTML = "", l(this, U).appendChild(this.createUl(e, "right"));
  }
  getLayers(e, t) {
    e.getArray().forEach((r) => {
      r.getLayers && r.getVisible() ? this.getLayers(r.getLayers(), t) : r.getVisible() && t.push(r);
    });
  }
  createUl(e, t) {
    const r = document.createElement("ul");
    return e.forEach((s) => {
      let a = s.ol_uid, n = s.get("title");
      const o = s.get("isBasemap");
      if (a && n) {
        a = `${t}_${a}`, n = o ? `${n}（底图）` : n;
        const d = document.createElement("li");
        d.innerHTML = `<div class="checkbox"><input type="checkbox" id="${a}">
                <label for="${a}" title="${n}"><span>${n}</span></label></div>`;
        const m = d.getElementsByTagName("input")[0];
        m.onclick = ($) => {
          let w = $.target.checked;
          this.onLayerClick({
            layer: s,
            type: t,
            checked: w
          });
        }, m.checked = this.getCheckBoxState(s, t), r.appendChild(d);
      }
    }), r;
  }
  // 获取选择框状态
  getCheckBoxState(e, t) {
    const r = l(this, T).layers;
    for (var s = 0; s < r.length; s++)
      if (r[s].layer === e && r[s].right === (t === "right"))
        return !0;
    return !1;
  }
  // layer选择事件
  onLayerClick(e) {
    if (l(this, T).removeLayer(e.layer), e.checked) {
      const r = `${e.type === "right" ? "left" : "right"}_${e.layer.ol_uid}`, s = document.getElementById(r);
      s.checked = !1, l(this, T).addLayer(e.layer, e.type === "right");
    }
  }
}, H = new WeakMap(), U = new WeakMap(), T = new WeakMap(), ct = new WeakMap(), He);
Ge = Ki([
  S({
    tagName: "ol-swipe",
    className: "ol-swipe-widget",
    template: Zi
  })
], Ge);
var z, ht;
class Yi extends ei {
  constructor(t) {
    t = t || {};
    super(t);
    // 任意的string索引List
    c(this, z, 0);
    c(this, ht, 0);
  }
  // 线宽由粗到细 由不透明到透明 半径由小变大
  animate(t) {
    const r = this.easing_(t.elapsed);
    if (r) {
      let s = t.style, a, n;
      for (a = 0; a < s.length; a++)
        n = s[a].getImage(), n && n.getRadius && (u(this, ht, l(this, ht) || n.getRadius()), n.setRadius(l(this, ht) * r), n.setOpacity(1 - r), u(this, z, l(this, z) || n.getStroke().getWidth()), n.getStroke().setWidth(l(this, z) - l(this, z) * r));
      this.drawGeom_(t, t.geom);
    }
    return t.time <= this.duration_;
  }
}
z = new WeakMap(), ht = new WeakMap();
const Qi = `<div class="row">\r
    <div class="label">坐标系:</div>\r
    <div class="div">\r
        <select s-value="prj" name="prj" onchange="$this.$data.prj=value">\r
            <option value="4326">地理坐标（经纬度）</option>\r
            <option value="3857">投影坐标（平面坐标）</option>\r
        </select>\r
    </div>\r
</div>\r
<div class="row">\r
    <div class="label">X:</div>\r
    <div class="div">\r
        <input type="number" s-value="x" oninput="$this.$data.x=value">\r
    </div>\r
\r
</div>\r
<div class="row">\r
    <div class="label">Y:</div>\r
    <div class="div">\r
        <input type="number" s-value="y" oninput="$this.$data.y=value">\r
    </div>\r
</div>\r
<div class="row btn">\r
    <button onclick="$this.submit()">定位</button>\r
</div>`;
var ts = Object.defineProperty, es = Object.getOwnPropertyDescriptor, rs = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? es(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && ts(e, t, s), s;
}, Ct, Ue;
let Ne = (Ue = class extends I {
  constructor() {
    super();
    c(this, Ct, void 0);
  }
  async onInit() {
    this.$data = {
      x: null,
      y: null,
      prj: "4326"
    }, this.notification = new Ze({}), this.map.addControl(this.notification), u(this, Ct, new ke({
      source: new Xe()
    })), l(this, Ct).setMap(this.map);
  }
  submit() {
    if (this.$data.x && this.$data.y) {
      const e = Er([this.$data.x, this.$data.y], `EPSG:${this.$data.prj}`, this.map.getView().getProjection()), t = this.map.getView().getProjection().getExtent();
      Ar(t, e) ? (this.map.getView().animate({
        center: e,
        //动画结尾的视图中心
        // zoom:7, //这里可以指定到具体等级
        duration: 100
        //动画的持续时间
      }), this.pulse(e)) : this.notification.show("坐标超出地图范围！");
    } else
      this.notification.show("请输入坐标！");
  }
  // 多圈动画
  pulse(e) {
    for (let t = 0; t < 4; t++)
      setTimeout(() => {
        this.pulseFeature(e);
      }, t * 500);
  }
  // 动画效果
  pulseFeature(e, t = 3e3) {
    let r = new Qr(new ti(e));
    r.setStyle(new ce({
      image: new Ke({
        radius: 24,
        stroke: new re({
          color: "rgb(255,0,0)",
          width: 3
        })
      })
    })), this.map.animateFeature(r, new Yi({
      fade: ye,
      duration: t,
      easing: ye
    }));
  }
}, Ct = new WeakMap(), Ue);
Ne = rs([
  S({
    tagName: "ol-location",
    className: "ol-location",
    template: Qi
  })
], Ne);
const is = `<fieldset>\r
    <legend>\r
        数据解析\r
    </legend>\r
    <div>\r
        <button onclick="$this.add(event)">测试加一</button>\r
        结果：{{a}}\r
    </div>\r
\r
    <div>\r
        <button onclick="$this.changeName(event)">测试人名</button>\r
        你是：{{b}}\r
    </div>\r
\r
\r
    <div>\r
        <button onclick="$this.changeValue(event)">测试多重属性</button>\r
        c.d.e : {{c.d.e}}\r
    </div>\r
\r
\r
    <div>\r
        <button onclick="$this.changeArr(event)">测试数组</button>\r
        数组长度：{{f.length}}\r
    </div>\r
</fieldset>\r
\r
\r
<fieldset>\r
    <legend>\r
        事件数据绑定\r
    </legend>\r
    <div>\r
        <input oninput="$this.$data.aa=value">\r
        <br>\r
        结果：{{aa}}\r
    </div>\r
</fieldset>\r
\r
<fieldset>\r
    <legend>\r
        属性绑定 + 直接赋值\r
    </legend>\r
    <div>\r
        <input s-value="bb" oninput="$this.$data.bb=value">\r
        <br>\r
        结果：{{bb}}\r
    </div>\r
</fieldset>\r
\r
<fieldset>\r
    <legend>\r
        属性绑定 + 绑定赋值\r
    </legend>\r
    <div>\r
        <input s-value="cc" oninput="$set('cc',value)">\r
        <!-- <input s-value="cc" oninput="console.log(this)"> -->\r
        <br>\r
        结果：{{cc}}\r
    </div>\r
</fieldset>`;
var ss = Object.defineProperty, as = Object.getOwnPropertyDescriptor, ns = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? as(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && ss(e, t, s), s;
};
let We = class extends I {
  constructor() {
    super();
  }
  async onInit() {
    this.$data = {
      a: 1,
      b: "张三",
      c: {
        d: {
          e: 1
        }
      },
      f: [1],
      aa: "123",
      bb: "start",
      cc: "121"
    };
  }
  hello(i) {
    console.log(i), this.$data.c.d = "和了了了了了了";
  }
  changeName() {
    this.$data.b = this.$data.b == "张三" ? "李四" : "张三";
  }
  changeValue() {
    this.$data.c.d = {
      // e: parseInt(String(Math.random() * 10))
      e: this.$data.c.d.e + 1
    };
  }
  changeArr() {
    this.$data.f.push(1);
  }
  add() {
    this.$data.a++;
  }
  kill() {
    return "hello";
  }
};
We = ns([
  S({
    tagName: "ol-hello-world",
    className: "ol-hello-world",
    template: is
    // mode: Mode.none
  })
], We);
var os = Object.defineProperty, ls = Object.getOwnPropertyDescriptor, cs = (i, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? ls(e, t) : e, a = i.length - 1, n; a >= 0; a--)
    (n = i[a]) && (s = (r ? n(e, t, s) : n(s)) || s);
  return r && s && os(e, t, s), s;
};
let Ve = class extends wr {
  constructor() {
    super();
  }
  async onInit() {
    const i = q(this.config.map, "map");
    i.setTarget(this), i.addControl(new ri()), this.map = i;
  }
};
Ve = cs([
  S({
    tagName: "ol-map-test",
    className: "ol-map-test",
    hasConfig: !0
  })
], Ve);
export {
  xe as BasemapList,
  De as Coordinate,
  Ae as EditBar,
  We as HelloWorld,
  _e as LayerList,
  Ne as Location,
  Ie as MapView,
  Ve as MapViewTest,
  gi as Objects,
  Fe as Overview,
  ii as StyleFn,
  Ge as Swipe,
  si as TextFn,
  Te as ZoomWidget,
  vi as getConstructor,
  q as getObject
};
