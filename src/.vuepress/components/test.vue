<template>
    <el-row class="tac">
        <el-col :span="4">
            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-sub-menu v-for="(item, i) in list" :index="i + 1">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </template>
                    <el-menu-item v-for="(child, j) in item.children" :index="`${i + 1}-${j + 1}`"
                        @click="hanleClick(child)">
                        <span @click="url = child.url">{{ child.title }}</span>
                    </el-menu-item>
                </el-sub-menu>
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
    url.value = baseUrl + item.url
}
// const baseUrl = (window as any).apidoc
const baseUrl = 'http://localhost/apidoc'
const url = ref(baseUrl + '/Obj.Pin.html')
const list = [
    {
        title: '标绘',
        icon: 'el-icon-location',
        children: [
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
            }
        ]
    },
    {
        title: '测量',
        icon: 'el-icon-location',
        children: [
            {
                title: 'Measure',
                url: '/Analyzation.Measurement.html'
            },
        ]
    }
]
</script>
<style lang="scss">
.tac {
    // width: 400px;
}
</style>