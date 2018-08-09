'use strict'

{{#vue}}
import Vue from 'vue'
{{#vuex}}
import store from '@/Scripts/store'
{{/vuex}}
{{#router}}
import router from '@/Scripts/router'
{{/router}}
import icon from '@/Vue/Components/icon.vue'
import first from '@Components/first.vue'
import './vueImports'
{{/vue}}
import accordion from '@/Scripts/custom/accordion.js'
import { slider } from '@/Scripts/custom/slider.js'

{{#vue}}
// generate svg sprite
const files = require.context('@/Images/svg/symbol/', false, /.*\.svg$/)
files.keys().forEach(files)

let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    {{#router}}
    router,
    {{/router}}
    {{#vuex}}
    store,
    {{/vuex}}
    components: {
        icon,
        first
    }
})
{{/vue}}

accordion()
slider()

console.log('main.js done!')
