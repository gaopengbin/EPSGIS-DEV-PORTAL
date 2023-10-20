# 图层树

<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" @onReady="ready">
  <EpsplanetButton container="#earthContainer" icon="icon-tool_kjcx" type="panel" :position="position" :panel="panel" title='图层树'>
      <EpsplanetLayerList/>
    </EpsplanetButton>
  </EpsplanetEarth>
</div>

<script setup lang='ts'>
import {ref} from 'vue';
const position = ref({
  left: 10,
  top: 10
});
const panel = ref({
  position: {
    left: 10,
    top: 10
  }
});

const ready = (earth:any)=>{
    console.log(earth)
  earth.sceneTree.root.children.push(
    {
    czmObject: {
      xbsjType: 'Imagery',
      name: '贺兰山东麓',
      rectangle: [
        1.8549608612104038, 0.6759967905155257, 1.8554696069610521,
        0.6763643920091744
      ],
      xbsjImageryProvider: {
        ArcGisMapServerImageryProvider: {
          url: 'http://120.48.115.17:6080/arcgis/rest/services/Map/MapServer'
        },
        type: 'ArcGisMapServerImageryProvider'
      }
    }
  },
  {
    czmObject: {
      "xbsjType": "Tileset",
      "xbsjGuid": "d3266895-4795-41a1-92f3-46be5edc6532",
      "name": "大雁塔",
      "url": "/EPSGIS-DEV-PORTAL/Demos/last/assets/dayanta/tileset.json",
    //   "xbsjPosition": [
    //     1.9017002809975097,
    //     0.5972446887154512,
    //     3.0624089850964736e-9
    //   ],
    }
  }
  )
}
</script>

:::: details 代码

```vue
<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" @onReady="ready">
  <EpsplanetButton icon="icon-tool_kjcx" type="panel" :position="position" :panel="panel" title='图层树'>
      <EpsplanetLayerList/>
    </EpsplanetButton>
  </EpsplanetEarth>
</div>

<script setup lang='ts'>
import {ref} from 'vue';
const position = ref({
  left: 10,
  top: 10
});
const panel = ref({
  position: {
    left: 10,
    top: 10
  }
});

const ready = (earth:any)=>{
  earth.sceneTree.root.children.push(
    {
    czmObject: {
      xbsjType: 'Imagery',
      name: '贺兰山东麓',
      rectangle: [
        1.8549608612104038, 0.6759967905155257, 1.8554696069610521,
        0.6763643920091744
      ],
      xbsjImageryProvider: {
        ArcGisMapServerImageryProvider: {
          url: 'http://120.48.115.17:6080/arcgis/rest/services/Map/MapServer'
        },
        type: 'ArcGisMapServerImageryProvider'
      }
    }
  },
  {
    czmObject: {
      "xbsjType": "Tileset",
      "name": "大雁塔",
      "url": "/EPSGIS-DEV-PORTAL/Demos/last/assets/dayanta/tileset.json",
      "xbsjPosition": [
        1.9017002809975097,
        0.5972446887154512,
        3.0624089850964736e-9
      ],
    }
  }
  )
}
</script>
```

::::

## 标签

```vue
<epsplanet-layer-list></epsplanet-layer-list>
```
