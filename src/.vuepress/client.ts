import * as Icons from '@element-plus/icons-vue'
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// import Epsplanet from 'epsplanet'
import 'epsplanet/es/style.css'
import './styles/font/iconfont.css'



export default defineClientConfig({
    enhance({ app }) {
        // debugger
        let interval = setInterval(() => {
            if (app._container) {
                // XE.ready().then(() => {
                    import('epsplanet').then(Epsplanet => {
                        console.log(Epsplanet)
                        app.use(Epsplanet.default)
                    })
                // })
                clearInterval(interval)
            }
        }, 1000)

        app.use(ElementPlus)
        for (const icon in Icons) {
            // eslint-disable-next-line import/namespace
            app.component('ElIcon' + icon, Icons[icon])
        }

        // if(typeof window !== 'undefined') {
        //     (window as any).apidoc = 'http://localhost/apidoc'
        // }
    }
})
