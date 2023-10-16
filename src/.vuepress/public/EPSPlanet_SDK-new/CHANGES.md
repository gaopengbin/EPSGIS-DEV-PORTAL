Change Log
==========



### 1.6.3 - 2021-5-24
##### Fixes :jojo:
* 增加矢量数据模型
* 增加授权机制

### 1.6.2 - 2021-4-20
##### Fixes :jojo:
* 增加wms的属性过滤

### 1.6.2 - 2021-4-13
##### Fixes :wrench:
* 增加模型动画支持

### 1.6.1 - 2021-10-21
##### Fixes :zh、gpb
* 让3dtiles数据的allowPicking属性生效
* 3dtiles加载采用共享纹理模式
* WMS图层透明度支持 
* WMS,WMTS url补充proxy属性
* WMTS补充format属性

### 1.6.0 - 2021-4-13
##### Fixes :wrench:
* 升级到Cesium1.80

### 1.5.16 - 2021-4-1
##### Fixes :wrench:
* 修复Polygon.ground属性的文档说明，默认值是false

### 1.5.15 - 2021-3-29
##### Fixes :wrench:
* 修复Gltf的纹理坐标偏移扩展会出现缝隙的问题

### 1.5.14 - 2021-3-23
##### Fixes :wrench:
* 修复ODLines.color设置不能生效的问题

### 1.5.13 - 2021-3-16
##### Fixes :wrench:
* OD线集群增加双向流动
* OD线和OD线集群可以设置线条背景色
### 1.5.12 - 2021-3-15
##### Fixes :wrench:
* 距离测量和面积测量的回调函数改进
### 1.5.11 - 2021-3-10
##### Fixes :wrench:
* tileset增加colorBlendAmount和colorBlendMode属性

### 1.5.10 - 2021-3-6
##### Fixes :wrench:
* 修复扫描线附近不能拾取其他物体的问题

### 1.5.9 - 2021-3-5
##### Fixes :wrench:
* OD先增加双向控制属性bidirectional

### 1.5.8 - 2021-2-26
##### Additions :tada:
* OD线的材质增加bgColor属性(背景色)

### 1.5.7 - 2021-2-19
* 修复Model的silhouetteColor属性设置不起作用的问题
* 完善xbsjStyle的范例说明
* 影像类型增加GoogleEarth

### 1.5.6 - 2021-1-21
##### Fixes :wrench:
* 点测量的回调改进，只在左键点击时才发出
##### Additions :tada:
* 折线和多边形增加最大最小可视海拔高度

### 1.5.5 - 2021-1-20
##### Fixes :wrench:
* 修复加载场景时，场景中KML的show属性为false时，依然可见的问题
##### Additions :tada:
* 多边形增加hole

### 1.5.4 - 2021-1-16
##### Additions :tada:
* 视角管理器增加播放功能

### 1.5.3 - 2021-1-13
##### Fixes :wrench:
* 修复importScript加载js文件报错的问题
* 修复3dtiles进行位置偏移后导致深度测试不对的问题

### 1.5.2 - 2020-12-31
##### Fixes :wrench:
* 修复Cesium官方地形不能展示高程的问题
* 修复键盘漫游时编辑框输入时仍然会导致按键响应的问题

### 1.5.1 - 2020-12-7
##### Fixes :wrench:
* 修复bug 因为创建arcgisMapService的url为空导致的 '<'报错
* MVVM框架适配Vue3.0
* 修复上一个版本材质底色不起作用的问题

### 1.5.0 - 2020-11-24
##### Fixes :wrench:
* Cesium升级到1.75
* 影像类型支持ArcGIS和WMS
* 修复Array.prototype中增加的方法导致for in使用上出现问题
* 修复安卓移动端加载跨平台纹理数据时出现白模的问题
* 修复含有跨平台纹理的3dtiles加载后再开启双面显示时的崩溃问题

### 1.4.28 - 2020-11-18
##### Additions :tada:
* Cesium升级到1.75
* 影像类型支持ArcGIS和WMS

### 1.4.27 - 2020-11-10
##### Fixes :wrench:
* 1.4.26版存在编译错误，修复并重新发布，1.4.26版废弃

### 1.4.26 - 2020-11-10
##### Additions :tada:
* 视频融合增加maskUrl属性，用来设置掩码图像路径

### 1.4.25 - 2020-11-6
##### Fixes :wrench:
* 修复标绘按钮创建报错的问题
* 修复控制clock不起作用的bug(wcx)

### 1.4.24 - 2020-10-12
##### Additions :tada:
* 新增动态响应式属性相机的fov角度
* 恢复强制太阳光方向属性的设置，使用Cesium的DiectionalLight来实现
* 场景保存时支持对拾取颜色的存储和读取

### 1.4.23 - 2020-9-25
##### Additions :tada:
* Pin中新增iframe相关属性，用来打开一个信息框，该信息框的内容一个网址
##### Fixes :wrench:
* 修复部分带动画的gltf模型加载后崩溃的问题

### 1.4.22 - 2020-9-18
##### Additions :tada:
* Picking增加hoveredPickedObj，clickedPickedObj属性

### 1.4.21 - 2020-9-3
##### Fixes :wrench:
* 修复面积测量始终出现一个0平方米的标签的问题
* 3dtiels的内置科技感shader完善，增加部分注释，方便客户自行修改
* 修正clock，修复gltf动画加载后动画播放不正常的问题(wcx)
* 修复包括跨平台压缩纹理(BASIS)的3dtiles数据在EarthSDK示例中不能展示的问题

### 1.4.20 - 2020-8-14
##### Additions :tada:
* 增加CustomPrimitive.createDynamicCountour和CustomPrimitive.createDynamicCountour2方法

### 1.4.19 - 2020-8-13
##### Additions :tada:
* 增加CustomPrimitive.createDynamicPoi和CustomPrimitive.creatNumberPoi方法
##### Fixes :wrench:
* 修复Pin的背景会被填充棉遮挡的问题
* 自定义图元针对imageUrl属性，采用共享纹理模式，即imageUrl相同的纹理，讲只加载一次
* XbsjEliipsoidTerrainProvider增加tilingScheme属性，方便进行墨卡托分块测试

### 1.4.18 - 2020-8-4
##### Fixes :wrench:
* 部分bug修复

### 1.4.17 - 2020-8-3
##### Fixes :wrench:
* 修复earth.destroy()报错的问题

### 1.4.16 - 2020-8-2
##### Additions :tada:
* 增加对flv格式的支持，如果flv视频资源没有后缀flv后缀名，路径中需要加入 -.flv
* 增加div转canvas的方法
##### Fixes :wrench:
* 修复支持ogg等视频不能播放的问题
* 修复js文件重复加载报错的问题(感谢vue-cesium大神zouyaoji)

### 1.4.15 - 2020-7-18
##### Additions :tada:
* 增加时间轴功能(wcx)

### 1.4.14 - 2020-7-13
##### Fixes :wrench:
* 修复上一个版本视频融合编辑无反应的问题
* 修复挖坑面保存后，偶尔打开失效的问题

### 1.4.13 - 2020-7-9
##### Additions :tada:
* 视频融合支持贴jpg/png图片、mp4视频、m3u8直播视频
* 自定义图元中imageUrl和videoUrl属性统一，imageUrl可以加载jpg/png/mp4/m3u8链接，videoUrl去除
* 自定义贴地矩形可以支持视频直播
##### Fixes :wrench:
* 修复自定义贴图矩形设置图片地址导致崩溃的问题

### 1.4.12 - 2020-7-7
##### Fixes :wrench:
* 修复自定义图元加载某些obj文件性能缓慢的问题

### 1.4.11 - 2020-7-7
##### Fixes :wrench:
* 修复自定义图元obj模型重复加载的问题
* 非手机端自动调整分辨率，避免出现锯齿

### 1.4.10 - 2020-7-1
##### Additions :tada:
* 增加对BASIS纹理的支持

### 1.4.9 - 2020-6-28
##### Fixes :wrench:
* 修复自定义图元读取obj文件时法向和纹理坐标的顺序反了的问题
* obj文件读取时考虑顶点颜色和四边形的情况
##### Additions :tada:
* 增加对google地形数据加载的支持

### 1.4.8 - 2020-6-20
##### Additions :tada:
* 自定义图元中增加objUrl和videoUrl属性，分别用来加载obj文件，和mp4视频

### 1.4.7 - 2020-6-20
##### Fixes :wrench:
* 修复一下useWebXR属性不准的问题，只有vr真正启动以后才会是true！

### 1.4.6 - 2020-6-18
##### Additions :tada:
* Camera中增加useWebXR属性

### 1.4.5 - 2020-6-15
##### Fixes :wrench:
* Model增加lightColor属性
* XbsjCzmObj对象增加customProp属性

### 1.4.4 - 2020-6-11
##### Fixes :wrench:
* 修复在3dtiles数据上挖坑不能保存的问题
* 多边形增加面积计算的函数getTotalArea

### 1.4.3 - 2020-6-10

##### Additions :tada:
* 增加天空盒和背景图片的设置(https://www.bilibili.com/video/BV1XT4y1E7Bs/)

##### Fixes :wrench:
* 修复升级到Cesium1.70，挖坑以后看不见地下物体的问题

### 1.4.2 - 2020-6-4
##### Fixes :wrench:
* 修复部分自定义标绘出不来的问题
* 改进小物体的漫游交互体验，避免缩放时突然小时，避免中键转动视角失效等问题

### 1.4.1 - 2020-6-3
##### Fixes :wrench:
* 增加Cesium的地表透明效果

### 1.4.0 - 2020-6-3
##### Fixes :wrench:
* Cesium升级到1.70

### 1.3.10 - 2020-5-26
##### Fixes :wrench:
* 修复ODLines渲染性能下降的问题

### 1.3.9 - 2020-5-26
##### Additions :tada:
* 增加对顶点纹理坐标偏移的扩展(SUNWAY_vertex_texture_transform)
##### Fixes :wrench:
* 修复实例模型数量为1时程序异常的问题
* 修复部分没有根矩阵的3dtiles数据不能显示的问题

### 1.3.8 - 2020-5-15
##### Fixes :wrench:
* 填充面的飞入功能改进
* 修复填充面较小时导致面片不显示的问题

### 1.3.7 - 2020-5-13
##### Additions :tada:
* Earth增加了ionDefaultAccessToken属性，方便存储accessToken。
* 增加对GeoJSON/KML/Czml的支持
* CutSurface类增加terrainDiscard属性，开启后可以进行地形挖坑，但是目前只能挖一个地形的坑
* 增加雾效，可以调整颜色和强度，可以保存

##### Fixes :wrench:
* 修复后处理模式的雨雪特效的不能保存的问题
* 修复贴地图像(GroundImage)关闭循环播放时程序崩溃的问题
* 填充面和挖坑中增加默认纹理
* 修复挖坑的飞入功能

### 1.3.6 - 2020-4-19
##### Fixes :wrench:
* 键盘漫游改进

### 1.3.5 - 2020-4-18
##### Fixes :wrench:
* ODLines改进

### 1.3.4 - 2020-4-18
##### Fixes :wrench:
* 示例改进
* ODLines改进

### 1.3.3 - 2020-3-31
##### Fixes :wrench:
* 补充填充面等功能的文档注释
* 增加填充面等面积计算的接口
* 多边形增加拉伸高度(extrudedHeight)
* 修复挖坑填充面没有name属性的问题

### 1.3.2 - 2020-3-27
##### Additions :tada:
* 增加填充面 视频介绍：https://www.bilibili.com/video/BV12E411H7YJ?p=16
* 增加挖坑 视频介绍：https://www.bilibili.com/video/BV12E411H7YJ?p=22
* 挖填方分析（体积测量）功能改进 视频介绍： https://www.bilibili.com/video/BV12E411H7YJ?p=20
* 增加ab2AB方法

### 1.3.1 - 2020-3-11
##### Additions :tada:
* 增加分类单体对象(ClassificationPrimitive)
* ODLines增加translucentPass属性，用以改进渲染效果

##### Fixes :wrench:
* 完善道路(Road)、挡土墙(Wall)等对象的show属性等
* 修复场景配置道路等数据时导致场景崩溃的问题

### 1.3.0 - 2020-3-9
##### Additions :tada:
* 升级到Cesium 1.66
* 增加道路(Road)、挡土墙(Wall)等对象

### 1.2.28 - 2020-2-25
##### Fixes :wrench:
* 避免GroundImage创建时设置show属性不起作用
* 避免GroundImage设置图像之前的闪跳

### 1.2.27 - 2020-2-25
##### Additions :tada:
* 地表透明模式下使用POI时，会出现POI被融合的问题，此处增加了Cesium.BillboardCollection.xbsjForceRSOpaqueDepthMask属性，设置为true即可。但是会导致位置拾取不准确。

### 1.2.26 - 2020-2-20

##### Fixes :wrench:
* 修复点云渲染性能慢的问题

### 1.2.25 - 2020-2-3

##### Additions :tada:
* 视频融合支持直接播放m3u8格式视频
* 增加winPos的api文档说明

### 1.2.24 - 2020-1-14

##### Fixes :wrench:
* 折线和多边形的创建操作改进，右键取消上一个点，shift+右键结束操作
* 修复XbsjCzmObj的派生类不能定义defaultOptions的问题
* Forest中增加TreeMeta，以给树的类型增加名称，方便管理

### 1.2.23 - 2020-1-6

##### Additions :tada:
* 增加Forest类型，可以自动加载树模型数据

##### Fixes :wrench:
* 修复位置拾取过程中点击右键时报错的问题
* 不进行XbsjCzmObj类型的严格限定，让有onclick和onclickout函数的对象都可以进行拾取操作
* GroundImage增加不透明度属性
* 修复给无光照3dtiles数据设置科技感会崩溃的问题
* 修复水面引起的3dtiles反射贴图不能生效且发暗的问题

### 1.2.22 - 2019-12-23

##### Fixes :wrench:
* 修改number导致的earth不能加载问题

### 1.2.21 - 2019-12-23

##### Fixes :wrench:
* ODLines的属性posititons变更为positions
* 修复指北针左键操作不了，只有中键和右键能用的问题
* 修复贴地面不停地更新时，不能隐藏
* Pin增加指示线条

### 1.2.20 - 2019-12-10
##### Additions :tada:
* 自定义图元增加拾取功能

##### Fixes :wrench:
* 修复pin的extText和point不受near和far属性控制的问题
* 修复不同图元拾取时指向同一个回调的问题
* 解决CzmObject的子Object的拾取问题

### 1.2.19 - 2019-12-9
##### Additions :tada:
* 修正跨域访问图像导致图像不能加载的问题，目前替换成Cesium加载图片的模式，按照Cesium的规则来加载图片
* 新增热力图类XE.Obj.HeatMap

### 1.2.18 - 2019-12-6
##### Additions :tada:
* 自定义图元和自定义贴地矩形增加imageUrl属性

### 1.2.17 - 2019-12-5
##### Fixes :wrench:
* 修复bug：拖拽pin的json时如果enabled设置为false，div标签仍然可见

### 1.2.16 - 2019-12-4
##### Fixes :wrench:
* 修复destroyEvalString导致对象不能完全销毁的问题
* 避免evalString等报错导致程序卡死
* 继续完善文档注释
* 修复模型的相机绑定属性不起作用的问题

### 1.2.13 - 2019-12-3

##### Fixes :wrench:
* 修复3dtiles拾取问题
* 修复环境贴图报错问题

### 1.2.10 - 2019-11-30

##### Fixes :wrench:
* 修复模型、3ditles数据显示不完整的问题

### 1.2.9 - 2019-11-29

##### Additions :tada:

* 折线和多边形类型增加depthTest属性，当地表透明时建议开启
* 折线和多边形增加拾取响应

##### Fixes :wrench:
* 修复地形开启半透明以后，导致拾取时模型闪烁的问题
* 修复对非draco顶点压缩模式模型和3dtiles数据进行加载时显示错乱的问题，但是进行模型压平时仍然会有问题
* 完善CzmObject对象的说明文档

### 1.2.8 - 2019-11-26

##### Major Announcements :loudspeaker:
* HeatMap类变更为GroundImage
* Pin的winPos属性从2个元素的数组变成4个元素的数组，即从[left, bottom]变成[left, top, right, bottom]，需要把之前winPos[1]改成winPos[3]
* SceneTree.Group类增加setAllChildrenEnabled方法，以替代enabled这个只写属性，目的是避免把enabled当成响应式属性来使用
* 通过3dtiles的style设置偏移量的功能，需要使用EarthSDK自带的Cesium，如果替换Cesium，此功能将不可用

##### Additions :tada:
* EarthUI和EarthSDK增加了pin里面的extText相关属性
* EarthUI增加了控制图层树checkbox显隐的属性
* EarthUI标绘增加了平行搜寻区功能
* 增加任意多边形框选功能
* 3dtiles的style可以设置部件偏移
* Pin中增加extText、isDivImage属性，改造winPos属性
* czmObject类型增加evalString、preUpdateEvalString等属性
* tileset和model可以设置环境贴图
* 进一步完善标绘的编辑功能，目前编辑时不会出现黄线
* 自定义图元类增加registerEditing方法，调用之后可进行编辑

##### Fixes :wrench:
* 修复强制光照经度、纬度不对的问题
* 修复外置图标打开看不见的问题
* 修复销毁地球时，有对象清理不掉的问题
* 修复Pin的enable属性不起作用等问题
* 修复场景树节点中ref属性不能保存的问题
* 修复odlines中enabled属性不起作用的问题
* 修复自定义图元移动后消失的问题

### 1.2.7 - 2019-11-9

##### Fixes :wrench:
* 修复旋转角度不对的问题

### 1.2.6 - 2019-11-9

##### Additions :tada:
* EarthUI标绘新增了贝塞尔2次曲线和贝塞尔3次曲线功能

##### Fixes :wrench:
* 完善数字城市的示例，通过自定义图元类增加多种可视化效果
* 修复视域分析等的旋转角度不对的问题
* 修复视域分析等示例中旋转角度表示错误
* 修复pin-div示例中出现了滚动条问题
* 修复扫描线点击示例中点击和拖动起冲突问题
* 把示例和视景器中的强制光照中的经度、纬度修改为滑动条，并把高度去掉

### 1.2.5 - 2019-11-6

##### Fixes :wrench:
* 修复registerPolygonCreatingWithHeight带来的属性变化问题
* 完善数字工厂的示例
* 完善自定义图元示例

### 1.2.4 - 2019-11-2

##### Additions :tada:
* 把mapv和cesium结合的示例加到了EarthSDK中；
* Cesium自定义材质增加了几个按钮；
* EarthUI标绘中增加了折线和圆弧；
* 新增了5个Cesium自定义Primitive相关的示例；
* 增加自定义图元功能和相关示例；
* 增加数字城市和数字工厂的示例；
* EarthUI标绘增加更多标绘按钮；

##### Fixes :wrench:
* 改进地形限制功能，创建时不再需要确定高度；
* 把tileset的skipLevelOfDetail属性修改为了false；
* 修复大雁塔等（无光照模型）不能启用阴影的问题;
* 修复启用阴影后崩溃的问题；
* 影像属性中增加最小最大级别限制；
* 修复PBR材质让部分属性生效；
* 修复点云大小不能设置的问题，并且让3dtiles中其他属性的设置也同时生效；
* 改进旋转编辑的UI交互，让旋转轴清晰可见，并在三维中直接实时动态显示测量结果；
* 修正旋转编辑时角度范围，从-270 - +90变更为-180 - +180；
* 地形限制的编辑交互中不需要设置高度；
* 修复动态加载js文件时报错的问题；

### 1.2.3 - 2019-10-21

##### Additions :tada:
* 增加了强制光照示例；
* EarthUI中增加了强制光照功能；
* EarthUI中模型的属性窗口增加了材质底色属性；

##### Fixes :wrench:
* 材质颜色修正

### 1.2.2 - 2019-10-21

##### Additions :tada:
* Model中增加luminanceAtZenith属性；
* 增加强制光照效果，可以任意修改太阳光方向；
* 影像纠偏示例增加了一些提示；
* 增加了热力图和水面示例；
* EarthUI中增加了水面功能；

##### Fixes :wrench:
* 修复引入Cesium1.62以后模型加载变灰的问题
* 修复引入Cesium1.62以后锯齿严重的问题
* 修复旋转用gltf重复加载问题

### 1.2.1 - 2019-10-18

##### Additions :tada:
* 底层Cesium.js独立拆分，可以替换成客户自行开发的Cesium来使用！
* 新增贴地图片轮换功能（动态热力图）；
* 新增水面效果，相关属性有：基础水面颜色、与反射的融合参数、水流方向和速度控制等；
* 新增3dtiles强制双面显示功能；

##### Fixes :wrench:
* 地表限制可以指定为任意多边形，包括凹多边形，且无论是否远离地球，边界都清晰可见；
* 修复点选后，取消选择状态时，不能取消物体的选择状态的问题；
* 修复大平面近视点的裁切问题；
* 默认的Cesium升级至1.62版；
* 修改版权声明为免费的条款
* 修复3dtiles的style样式设置问题
* 接口调整 effect.baseColor -> terrainEffect.baseColor；

### 1.1.0 - 2019-9-1

##### Additions :tada:
* 增加Path/Pin等对象
* 完善大量示例
* 完善响应式属性的设计

### 1.0.0 - 2019-08-01
* 初始版本


