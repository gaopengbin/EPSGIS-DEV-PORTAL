# 工具条

<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" @onReady="ready">
      <epsplanet-toolbar :mode="mode1" :position="position1">
        <epsplanet-button v-for="(item, i) in components" :key="i" :icon="item.icon" :title="item.label"
            :position="item.position" :type="item.type" :panel="item.panel" container="#earthContainer">
            <template >
                <component :is="item.component" ></component>
            </template>
        </epsplanet-button>
    </epsplanet-toolbar>
      <epsplanet-toolbar :mode="mode2" :position="position2">
        <epsplanet-button v-for="(item, i) in components" :key="i" :icon="item.icon" :title="item.label"
            :position="item.position" :type="item.type" :panel="item.panel" container="#earthContainer">
            <template >
                <component :is="item.component" ></component>
            </template>
        </epsplanet-button>
    </epsplanet-toolbar>
  </EpsplanetEarth>
</div>

<script setup>
import { ref } from 'vue'

const mode1 = ref('vertical')
const mode2 = ref('horizontal')
const position1 = ref({ top: 30, left: 10 })
const position2 = ref({ top: 0, left: 30 })
const components = ref([
  {
    label: '水淹分析',
    component: 'EpsplanetFlood',
    icon: 'icon-tool_dxhz_dianbiao',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '点标',
    component: 'EpsplanetPoint',
    icon: 'icon-tool_dxhz_dianbiao',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '折线',
    component: 'EpsplanetPolyline',
    icon: 'icon-tool_dxhz_zhexian',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '多边形',
    component: 'EpsplanetPolygon',
    icon: 'icon-tool_dxhz_dbx',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '贴地图片',
    component: 'EpsplanetGroundImage',
    icon: 'icon-tool_dxhz_dbx',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '贴地道路',
    component: 'EpsplanetGroundRoad',
    icon: 'icon-tool_dxhz_dbx',
    panel: {
      position: { top: 50, left: 50 }
    }
  }
]);
</script>

:::: details 代码

```vue
<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" @onReady="ready">
      <epsplanet-toolbar :mode="mode1" :position="position1">
        <epsplanet-button v-for="(item, i) in components" :key="i" :icon="item.icon" :title="item.label"
            :position="item.position" :type="item.type" :panel="item.panel" container="#earthContainer">
            <template v-slot="data">
                <component :is="item.component" :btnClass="data.btnClass"></component>
            </template>
        </epsplanet-button>
    </epsplanet-toolbar>
      <epsplanet-toolbar :mode="mode2" :position="position2">
        <epsplanet-button v-for="(item, i) in components" :key="i" :icon="item.icon" :title="item.label"
            :position="item.position" :type="item.type" :panel="item.panel" container="#earthContainer">
            <template v-slot="data">
                <component :is="item.component" :btnClass="data.btnClass"></component>
            </template>
        </epsplanet-button>
    </epsplanet-toolbar>
  </EpsplanetEarth>
</div>

<script setup>
import { ref } from 'vue'

const mode1 = ref('vertical')
const mode2 = ref('horizontal')
const position1 = ref({ top: 30, left: 10 })
const position2 = ref({ top: 0, left: 30 })
const components = ref([
  {
    label: '水淹分析',
    component: 'EpsplanetFlood',
    icon: 'icon-tool_dxhz_dianbiao',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '点标',
    component: 'EpsplanetPoint',
    icon: 'icon-tool_dxhz_dianbiao',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '折线',
    component: 'EpsplanetPolyline',
    icon: 'icon-tool_dxhz_zhexian',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '多边形',
    component: 'EpsplanetPolygon',
    icon: 'icon-tool_dxhz_dbx',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '贴地图片',
    component: 'EpsplanetGroundImage',
    icon: 'icon-tool_dxhz_dbx',
    panel: {
      position: { top: 50, left: 50 }
    }
  },
  {
    label: '贴地道路',
    component: 'EpsplanetGroundRoad',
    icon: 'icon-tool_dxhz_dbx',
    panel: {
      position: { top: 50, left: 50 }
    }
  }
]);
</script>

```

::::

## 标签

```
<epsplanet-toolbar></epsplanet-toolbar>
```

## 工具条属性

| 属性        | 说明                         | 类型    | 可选 | 默认           |
| ----------- | ---------------------------- | ------- | ---- | -------------- |
| mode        | 模式（vertical、horizontal） | string  | 是   | vertical       |
| position    | 位置                         | object  | 是   | '{top:0,left:0}' |
| collapsable | 可折叠                       | boolean | 是   | false          |
