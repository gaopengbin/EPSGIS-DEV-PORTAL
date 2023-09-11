
function createComponentNav() {
    const data = [
        {
            name: '基础组件',
            path: '/lib/base/',
            doc: [
                'button',
                'toolbar',
                'earth',
                'statusBar',
                'layerlist',
            ]
        },
        {
            name: '特效组件',
            path: '/lib/effect/',
            doc: [
                'cloud',
                'rain',
                'snow',
                'bloom',
                'blackWhite',
                '亮度',
                '轮廓',
                '阴影',
                '夜视',
                '马赛克',
            ]
        },
        {
            name: '分析组件',
            path: '/lib/analysis/',
            doc: [
                '地形着色',
                '等高线',
                '开挖',
                '可视域',
                '控高',
                '剖面',
                '剖切',
                '通视',
                '压平',
                '淹没',
            ]
        },
        {
            name: '标绘组件',
            path: '/lib/plot/',
            doc: [
                '点标',
                '折线',
                '多边形',
                '矩形',
                '圆',
                '平滑多边形',
                '单箭头',
                '双箭头',
                '水面',
                '贴地道路',
                '贴地图片',
                '粒子喷射',
                '立体形',
                '模型库',
                '单体化',
            ]
        },
        {
            name: '测量组件',
            path: '/lib/measure/',
            doc: [
                '点位',
                '高度',
                '空间距离',
                '贴地距离',
                '空间面积',
                '立面面积',
                '方位角',
                '清除测量结果',
            ]
        },
        {
            name: '功能组件',
            path: '/lib/tool/',
            doc: [
                '场景截图',
                '地下模式',
                '底图切换',
                '飞行轨迹',
                '卷帘对比',
                '模型拾取',
                '视角恢复',
                '视频投放',
                '双屏对比',
                '通用查询',
                '外部数据',
                '微观拾取',
            ]
        },
    ]
    // {
    //     text: '基础组件',
    //     // link: '/components/base/',
    //     collapsable: true,
    //     sidebarDepth: 0,
    //     children: [
    //       '/components/base/button.md',
    //       'toolbar.md',
    //       'earth.md',
    //       'statusBar.md',
    //       'layerlist.md',
    //     ]
    //   },
    let navs: any = []
    data.forEach(item => {
        let obj = {}
        let children: any = []
        item.doc.forEach(d => children.push(item.path + d + '.md'))
        obj = {
            text: item.name,
            collapsable: true,
            sidebarDepth: 0,
            children: children
        }
        navs.push(obj)
    })
    console.log(navs)
    return navs
}

export { createComponentNav }