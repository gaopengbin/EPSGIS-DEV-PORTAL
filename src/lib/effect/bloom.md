# 泛光

<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" >
    <EpsplanetButton container="#earthContainer"  icon="icon-tool_kjcx" type="switch" :position="position" title='泛光'>
      <EpsplanetBloom/>
    </EpsplanetButton>
  </EpsplanetEarth>
</div>

<script setup lang='ts'>
import {ref} from 'vue';
const position = ref({
  left: 10,
  top: 10
});
</script>

:::: details 代码

```vue
<div data-sunwayTheme='light'>
  <EpsplanetEarth :showDefaultBasemap="true" >
    <EpsplanetButton icon="icon-tool_kjcx" type="switch" :position="position" title='雨'>
      <EpsplanetBloom/>
    </EpsplanetButton>
  </EpsplanetEarth>
</div>

<script setup lang='ts'>
import {ref} from 'vue';
const position = ref({
  left: 10,
  top: 10
});
</script>
```

::::

## 标签

```
<epsplanet-bloom></epsplanet-bloom>
```
