import * as Icons from '@element-plus/icons-vue'
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
// import Epsplanet from 'epsplanet'
import 'epsplanet/es/style.css'



export default defineClientConfig({
    enhance({ app }) {
        let script = document.createElement('script')
        script.src = 'http://localhost:5173/EPSPlanet_SDK/XbsjEarth/XbsjEarth.js'
        document.body.appendChild(script)
        script.onload = () => {
            XE.ready().then(() => {
                import('epsplanet').then(Epsplanet => {
                    console.log(Epsplanet)
                    app.use(Epsplanet.default)
                })

            })
            // app.use(Epsplanet)
        }
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
