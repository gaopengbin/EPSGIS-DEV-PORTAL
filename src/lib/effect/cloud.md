# 云

<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" >
    <EpsplanetButton container="#earthContainer" icon="icon-tool_kjcx" type="panel" :position="position" :panel="panel" title='云'>
      <EpsplanetCloud/>
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
  size: {
    width: '300px',
    height: '300px'
  },
  position: {
    left: 10,
    top: 10
  }
});
</script>

:::: details 代码

```vue
<template>
  <div data-sunwayTheme="light">
    <EpsplanetEarth :showDefaultBasemap="true">
      <EpsplanetButton icon="icon-tool_kjcx" type="panel" :position="position" :panel="panel" title="云">
        <EpsplanetCloud />
      </EpsplanetButton>
    </EpsplanetEarth>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const position = ref({
  left: 10,
  top: 10,
});
const panel = ref({
  size: {
    width: "300px",
    height: "300px",
  },
  position: {
    left: 10,
    top: 10,
  },
});
</script>
```

::::

## 标签

```
<epsplanet-cloud></epsplanet-cloud>
```
