<template>
    <el-row class="tac">
        <el-col :span="4" class="side">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :unique-opened="true">
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
        <el-col :span="20">
            <iframe :src=url />
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
import { ref } from 'vue';
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const hanleClick = (item) => {
    console.log(item)
    if (item.url.startsWith('http')) {
        url.value = item.url
        return
    }
    url.value = baseUrl + item.url
}
// const baseUrl = (window as any).apidoc
const baseUrl = 'http://localhost/apidoc'
const url = ref(baseUrl + '/Obj.Pin.html')
const list = [
    {
        title: '相机',
        icon: 'Camera',
        children: [
            {
                title: 'Camera',
                url: '/Camera.html'
            }
        ]
    },
    {
        title: 'Cesium对象',
        icon: 'PictureRounded',
        children: [
            {
                title: 'czm',
                url: '/Earth.html?classFilter=Eart#czm'
            },
            {
                title: 'viewer',
                url: 'https://cesium.com/learn/cesiumjs/ref-doc/Viewer.html'
            },
            {
                title: 'scene',
                url: 'https://cesium.com/learn/cesiumjs/ref-doc/Scene.html'
            },
            {
                title: 'camera',
                url: 'https://cesium.com/learn/cesiumjs/ref-doc/Camera.html'
            },
        ]
    },
    {
        title: '场景树',
        icon: 'Memo',
        children: [
            {
                title: 'sceneTree',
                url: '/SceneTree.Tree.html'
            },
            {
                title: 'obj',
                url: '/Obj.html',
                children: [
                    {
                        title: 'PlotBase',
                        url: '/Obj.PlotBase.html'
                    },
                    {
                        title: 'Pin',
                        url: '/Obj.Pin.html'
                    },
                    {
                        title: 'Polyline',
                        url: '/Obj.Polyline.html'
                    },
                    {
                        title: 'Polygon',
                        url: '/Obj.Polygon.html'
                    },
                    {
                        title: 'ODLines',
                        url: '/Obj.ODLines.html'
                    },
                    {
                        title: 'Path',
                        url: '/Obj.Path.html'
                    },
                    {
                        title: 'Road',
                        url: '/Obj.Road.html'
                    },
                    {
                        title: 'Scanline',
                        url: '/Obj.Scanline.html'
                    },
                    {
                        title: 'GroundImage',
                        url: '/Obj.GroundImage.html'
                    },
                    {
                        title: 'Model',
                        url: '/Obj.Model.html'
                    },
                    {
                        title: 'CustomPrimitive',
                        url: '/Obj.CustomPrimitive.html'
                    },
                    {
                        title: 'CustomGroundRectangle',
                        url: '/Obj.CustomGroundRectangle.html'
                    },
                    {
                        title: 'Forest',
                        url: '/Obj.Forest.html'
                    },
                    {
                        title: 'Surface',
                        url: '/Obj.Surface.html'
                    },
                    {
                        title: 'Wall',
                        url: '/Obj.Wall.html'
                    },
                    {
                        title: 'Water',
                        url: '/Obj.Water.html'
                    },
                    {
                        title: 'Viewshed',
                        url: '/Obj.Viewshed.html'
                    },
                    {
                        title: 'CutSurface',
                        url: '/Obj.CutSurface.html'
                    },
                    {
                        title: 'FlattenedPolygonCollection',
                        url: '/Obj.FlattenedPolygonCollection.html'
                    },
                    {
                        title: 'ClippingPlane',
                        url: '/Obj.ClippingPlane.html'
                    },
                    {
                        title: 'ClassificationPolygon',
                        url: '/Obj.ClassificationPolygon.html'
                    },
                    {
                        title: 'CameraVideo',
                        url: '/Obj.CameraVideo.html'
                    },
                    {
                        title: 'Imagery',
                        url: '/Obj.Imagery.html'
                    },
                    {
                        title: 'Tileset',
                        url: '/Obj.Tileset.html'
                    },
                    {
                        title: 'Terrain',
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
                title: 'analyzation',
                url: '/Analyzation.html'
            },
            {
                title: 'cutFillComputing',
                url: '/Analyzation.CutFillComputing.html'
            },
            {
                title: 'measurement',
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
                title: 'effect',
                url: '/effect.html'
            },
            {
                title: 'shadow',
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
                title: 'Interaction',
                url: '/XbsjInteraction.html'
            },
            {
                title: 'picking',
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
                title: 'postProcess',
                url: '/PostProcess.html'
            },
            {
                title: 'ambientOcclusion',
                url: '/AmbientOcclusionStage.html'
            },
            {
                title: 'bloom',
                url: '/BloomStage.html'
            },
            {
                title: 'depthOfField',
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
                title: 'terrainEffect',
                url: '/TerrainEffect.html'
            },
            {
                title: 'restrict',
                url: '/TerrainEffect.Restrict.html'
            },
            {
                title: 'baseColor',
                url: '/TerrainEffect.html#baseColor'
            },
            {
                title: 'depthTest',
                url: '/TerrainEffect.html#depthTest'
            },
            {
                title: 'logDepth',
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
                title: 'weather',
                url: '/Weather.html'
            },
            {
                title: 'skyBox',
                url: '/Weather.SkyBox.html'
            },
            {
                title: 'cloud',
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
                title: 'IonDefaultAccessToken',
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