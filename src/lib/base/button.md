# 按钮

:::: details 代码

```html
<!-- 触发型按钮这样使用 -->
<epsplanet-button v-for="(item, i) in comps" :key="i" :icon="item.icon" :title="item.label" :position="item.position" :panel="item.panel" :type="item.type">
  <template v-slot="data">
    <component :is="item.component" :btnClass="data.btnClass"></component>
  </template>
</epsplanet-button>
```
::::

## 标签

```
<epsplanet-button></epsplanet-button>
```

## 按钮属性

| 属性     | 说明                                                  | 类型   | 可选 | 默认             |
| -------- | ----------------------------------------------------- | ------ | ---- | ---------------- |
| icon     | 图标                                                  | string | 是   | -                |
| btnName  | 按钮文字                                              | string | 是   | -                |
| title    | 作为按钮悬浮文字和弹框标题                            | string | 是   | -                |
| position | 按钮位置（在 toolbar 内不生效）                       | object | 是   | '{left:0,top:0}' |
| type     | 按钮类型（panel:弹框；switch:开关；trigger:触发一次） | string | 是   | panel            |
| panel    | 弹框属性                                              | object | 是   | 见下表           |

::: warning
图标和文字不能同时存在
:::

## 弹框属性

| 属性     | 说明                                   | 类型   | 可选 | 默认               |
| -------- | -------------------------------------- | ------ | ---- | ------------------ |
| size     | 弹框尺寸(不设置尺寸默认按组件大小撑开) | object | 是   | undefined          |
| position | 弹框位置                               | object | 是   | '{left:10,top:10}' |

## slot 插槽

| 属性 | 说明                                                 | 类型   | 可选 | 默认 |
| ---- | ---------------------------------------------------- | ------ | ---- | ---- |
| data | 用于传递按钮的 class,针对按钮的 type='trigger'时使用 | object | 是   | -    |
