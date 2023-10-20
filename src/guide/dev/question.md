---
# title: Example
containerClass: full-container
# sidebar: false
breadcrumb: false
pageInfo: false
contributors: false
editLink: false
lastUpdated: false
prev: false
next: false
comment: false
footer: false

backtotop: false
---

<!-- <iframe src="http://127.0.0.1:8081"></iframe> -->
<!-- <iframe src="https://gaopengbin.github.io/EPSGIS-DEV-EXAMPLE"></iframe> -->
<!-- <iframe src="https://docs.qq.com/doc/DTHFzdlJNQ1RUU01F"></iframe> -->

<PDF src="/EPSGIS-DEV-PORTAL/question.pdf" :pdfWidth="pdfWidth"/>

<el-button-group style="position: absolute; top: 90px; right: 25px;">
<el-button type="primary" @click="zoomIn">放大</el-button>
<el-button type="primary" @click="zoomOut">缩小</el-button>
<el-button type="primary" @click="download">下载</el-button>
</el-button-group>

<script setup>
    import {ref} from 'vue';
    import PDF from "pdf-vue3";
    const pdfWidth = ref('70%')
    const zoomIn=()=>{
        pdfWidth.value = parseInt(pdfWidth.value) + 10 + '%'
    }
    const zoomOut=()=>{
        pdfWidth.value = parseInt(pdfWidth.value) - 10 + '%'
    }
    const download=()=>{
        window.open('/EPSGIS-DEV-PORTAL/question.pdf')
    }
</script>
