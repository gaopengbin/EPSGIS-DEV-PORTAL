<template>
    <el-row class="tac">
        <el-col :span="4" class="side">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                :unique-opened="true">
                <el-menu-item @click="isPdf = true">
                    <span>SDK结构图</span>
                </el-menu-item>
                <template v-for="(item, i) in list">

                    <el-sub-menu :index="i + 1" v-if="item.children">
                        <template #title>
                            <el-icon>
                                <component :is="'ElIcon'+item.icon"></component>
                                <!-- <location /> -->
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="(child, j) in item.children">

                            <el-sub-menu v-if="child.children">
                                <template #title>
                                    <!-- <el-icon>
                                        <component :is="child.icon"></component>
                                        <location />
                                    </el-icon> -->
                                    <span>{{ child.title }}</span>
                                </template>
                                <template v-for="(child2, k) in child.children">
                                    <el-menu-item :index="`${i + 1}-${j + 1}-${k + 1}`" @click="hanleClick(child2)">
                                        <span>{{ child2.title }}</span>
                                    </el-menu-item>
                                </template>
                            </el-sub-menu>

                            <el-menu-item :index="`${i + 1}-${j + 1}`" @click="hanleClick(child)" v-else>
                                <span>{{ child.title }}</span>
                            </el-menu-item>
                        </template>

                    </el-sub-menu>
                    <!-- <el-menu-item v-else :index="i + 1" @click="hanleClick(item)">
                        <el-icon>
                            <location />
                        </el-icon>
                        <span @click="url = item.url">{{ item.title }}</span>
                    </el-menu-item> -->
                </template>

            </el-menu>
        </el-col>
        <el-col :span="20" style="overflow: auto;">
            <!-- <PDF src="/EPSGIS-DEV-PORTAL/sdk.pdf" v-show="isPdf" /> -->
            <img src="./api.jpg" style="pointer-events: none;" v-show="isPdf">
            <iframe :src=url v-if="!isPdf" />
        </el-col>
    </el-row>
</template>
  
<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import PDF from "pdf-vue3";
import { ref } from 'vue';
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const hanleClick = (item) => {
    console.log(item)
    isPdf.value = false
    if (item.url.startsWith('http')||item.url.startsWith('../')) {
        url.value = item.url
        return
    }
    url.value = baseUrl + item.url
}
const isPdf = ref(true)
// const baseUrl = (window as any).apidoc
// const baseUrl = 'http://192.168.3.22/apidoc'
const baseUrl = '../Documentation'
const url = ref('/sdk.pdf')
// const url = ref(baseUrl + '/Obj.Pin.html')
const list = [
    {
        title: '相机',
        icon: 'Camera',
        children: [
            {
                title: 'Camera(相机)',
                url: '/Camera.html'
            }
        ]
    },
    {
        title: 'Cesium对象',
        icon: 'PictureRounded',
        children: [
            {
                title: 'czm(Cesium)',
                url: '/Earth.html?classFilter=Eart#czm'
            },
            {
                title: 'viewer(视图)',
                url: '../Demos/last/Cesium/Documentation/Viewer.html'
                // url: 'https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html'
            },
            {
                title: 'scene(场景)',
                url: '../Demos/last/Cesium/Documentation/Scene.html'
                // url: 'https://cesium.com/learn/cesiumjs/ref-doc/Scene.html'
            },
            {
                title: 'camera(相机)',
                url: '../Demos/last/Cesium/Documentation/Camera.html'
                // url: 'https://cesium.com/learn/cesiumjs/ref-doc/Camera.html'
            },
        ]
    },
    {
        title: '场景树',
        icon: 'Memo',
        children: [
            {
                title: 'sceneTree(场景树)',
                url: '/SceneTree.Tree.html'
            },
            {
                title: 'obj(场景中对象)',
                url: '/Obj.html',
                children: [
                    {
                        title: 'PlotBase(标绘基类)',
                        url: '/Obj.PlotBase.html'
                    },
                    {
                        title: 'Pin(点标)',
                        url: '/Obj.Pin.html'
                    },
                    {
                        title: 'Polyline(折线)',
                        url: '/Obj.Polyline.html'
                    },
                    {
                        title: 'Polygon(多边形)',
                        url: '/Obj.Polygon.html'
                    },
                    {
                        title: 'ODLines(OD线)',
                        url: '/Obj.ODLines.html'
                    },
                    {
                        title: 'Path(路径)',
                        url: '/Obj.Path.html'
                    },
                    {
                        title: 'Road(贴地道路)',
                        url: '/Obj.Road.html'
                    },
                    {
                        title: 'Scanline(扫描线)',
                        url: '/Obj.Scanline.html'
                    },
                    {
                        title: 'GroundImage(贴地图片)',
                        url: '/Obj.GroundImage.html'
                    },
                    {
                        title: 'Model(模型gltf)',
                        url: '/Obj.Model.html'
                    },
                    {
                        title: 'CustomPrimitive(自定义图元)',
                        url: '/Obj.CustomPrimitive.html'
                    },
                    {
                        title: 'CustomGroundRectangle(自定义贴地矩形)',
                        url: '/Obj.CustomGroundRectangle.html'
                    },
                    {
                        title: 'Forest(森林)',
                        url: '/Obj.Forest.html'
                    },
                    {
                        title: 'Surface(填充面)',
                        url: '/Obj.Surface.html'
                    },
                    {
                        title: 'Wall(墙)',
                        url: '/Obj.Wall.html'
                    },
                    {
                        title: 'Water(水面)',
                        url: '/Obj.Water.html'
                    },
                    {
                        title: 'Viewshed(可视域)',
                        url: '/Obj.Viewshed.html'
                    },
                    {
                        title: 'CutSurface(挖坑)',
                        url: '/Obj.CutSurface.html'
                    },
                    {
                        title: 'FlattenedPolygonCollection(压平)',
                        url: '/Obj.FlattenedPolygonCollection.html'
                    },
                    {
                        title: 'ClippingPlane(裁切)',
                        url: '/Obj.ClippingPlane.html'
                    },
                    {
                        title: 'ClassificationPolygon(单体化)',
                        url: '/Obj.ClassificationPolygon.html'
                    },
                    {
                        title: 'CameraVideo(视频融合)',
                        url: '/Obj.CameraVideo.html'
                    },
                    {
                        title: 'Imagery(影像)',
                        url: '/Obj.Imagery.html'
                    },
                    {
                        title: 'Tileset(3dtiles数据)',
                        url: '/Obj.Tileset.html'
                    },
                    {
                        title: 'Terrain(地形)',
                        url: '/Obj.Terrain.html'
                    }
                ]
            },
        ]
    },
    {
        title: '分析工具',
        icon: 'DataAnalysis',
        children: [
            {
                title: 'analyzation(分析工具)',
                url: '/Analyzation.html'
            },
            {
                title: 'cutFillComputing(挖填方)',
                url: '/Analyzation.CutFillComputing.html'
            },
            {
                title: 'measurement(测量)',
                url: '/Analyzation.Measurement.html'
            }
        ]
    },
    {
        title: '视角管理器',
        icon: 'VideoCamera',
        children: [
            {
                title: 'cameraViewManager',
                url: '/CameraView.Manager.html'
            },
        ]
    },
    {
        title: '特效',
        icon: 'MagicStick',
        // url: '/effect.html',
        children: [
            {
                title: 'effect(特效)',
                url: '/effect.html'
            },
            {
                title: 'shadow(阴影)',
                url: '/effect.Shadow.html'
            },
        ]
    },
    {
        title: '交互操作',
        icon: 'Pointer',
        // url: '/effect.html',
        children: [
            {
                title: 'Interaction(交互操作)',
                url: '/XbsjInteraction.html'
            },
            {
                title: 'picking(拾取)',
                url: '/Picking.html'
            },
        ]
    },
    {
        title: '后处理',
        icon: 'Help',
        // url: '/effect.html',
        children: [
            {
                title: 'postProcess(后处理)',
                url: '/PostProcess.html'
            },
            {
                title: 'ambientOcclusion(环境光遮蔽)',
                url: '/AmbientOcclusionStage.html'
            },
            {
                title: 'bloom(泛光)',
                url: '/BloomStage.html'
            },
            {
                title: 'depthOfField(景深)',
                url: '/DepthOfFieldStage.html'
            },
        ]
    },
    {
        title: '地形特效',
        icon: 'Picture',
        // url: '/effect.html',
        children: [
            {
                title: 'terrainEffect(地形特效)',
                url: '/TerrainEffect.html'
            },
            {
                title: 'restrict(地表限制/地表挖坑)',
                url: '/TerrainEffect.Restrict.html'
            },
            {
                title: 'baseColor(地表基础色)',
                url: '/TerrainEffect.html#baseColor'
            },
            {
                title: 'depthTest(地表深度测试)',
                url: '/TerrainEffect.html#depthTest'
            },
            {
                title: 'logDepth(对数深度)',
                url: '/TerrainEffect.html#logDepth'
            },
        ]
    },
    {
        title: '天气',
        icon: 'PartlyCloudy',
        // url: '/effect.html',
        children: [
            {
                title: 'weather(天气)',
                url: '/Weather.html'
            },
            {
                title: 'skyBox(天空盒)',
                url: '/Weather.SkyBox.html'
            },
            {
                title: 'cloud(云层)',
                url: '/Weather.WorldCloud.html'
            },
        ]
    },
    {
        title: 'Cesium Ion Token',
        icon: 'PictureRounded',
        // url: '/effect.html',
        children: [
            {
                title: 'IonDefaultAccessToken(默认token)',
                url: '/Earth.html?classFilter=Earth#ionDefaultAccessToken'
            },
        ]
    },
]
</script>
<style lang="scss">
.tac {
    .el-col {
        max-height: 90vh;
    }

    .side {
        overflow: auto;
    }

    // overflow: auto;
}
</style>