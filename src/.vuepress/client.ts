import * as Icons from '@element-plus/icons-vue'
import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

export default defineClientConfig({
    enhance({ app }) {
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
