# 状态栏

<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" @onReady="ready">
      <EpsplanetStatusbar v-if="earthReady"/>
  </EpsplanetEarth>
</div>

<script setup>
import {ref} from 'vue';
const earthReady = ref(false)
const ready = (earth)=>{
  earthReady.value = true
}
</script>

:::: details 代码

```vue
<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" @onReady="ready">
      <EpsplanetStatusbar v-if="earthReady"/>
  </EpsplanetEarth>
</div>

<script setup>
import {ref} from 'vue';
const earthReady = ref(false)
const ready = (earth)=>{
  earthReady.value = true
}
</script>
```

::::

## 标签

``` vue
<epsplanet-status-bar></epsplanet-status-bar>
```