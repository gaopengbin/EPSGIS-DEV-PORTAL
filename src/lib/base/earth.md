# 地球
<div style="height:40vh">
<EpsplanetEarth :showDefaultBasemap="true" />
</div>

:::: details 代码

```vue
<template>
  <EpsplanetEarth :showDefaultBasemap="true" />
</template>
```

::::


## epsplanet-earth 属性

| 属性                | 说明         | 类型    | 可选 | 默认                   |
| ------------------- | ------------ | ------- | ---- | ---------------------- |
| container           | 容器名       | string  | 必须 | -                      |
| showCompass         | 指北针       | boolean | 是   | false                  |
| compassStyle        | 指北针位置   | object  | 是   | '{top:30,right:30} '   |
| showDistanceLegend  | 比例尺       | boolean | 是   | false                  |
| distanceLegendStyle | 比例尺位置   | boolean | 是   | '{right:30,bottom:20}' |
| showDefaultBasemap  | 显示默认底图 | boolean | 是   | true                   |

## epsplanet-earth 事件

| 事件名  | 说明         | 参数              |
| ------- | ------------ | ----------------- |
| onReady | 地球创建完成 | earth(earth 对象) |

<!-- ## epsplanet-earth 方法

| 方法名 | 说明 | 参数 |
| ------ | ---- | ---- | -->
