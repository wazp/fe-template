'use strict'

{{#vue}}
import Vue from 'vue'
{{#vuex}}
import store from '@/Scripts/store'
{{/vuex}}
{{#router}}
import router from '@/Scripts/router'
{{/router}}
import first from '@Components/first.vue'
import './vueImports'
{{/vue}}
import toggle from '@/Scripts/custom/toggle.js'
import accordion from '@/Scripts/custom/accordion.js'
import { slider } from '@/Scripts/custom/slider.js'

{{#vue}}
let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    {{#router}}
    router,
    {{/router}}
    {{#vuex}}
    store,
    {{/vuex}}
    components: {
        first
    }
})
{{/vue}}

slider()
accordion()
toggle()

console.log('main.js done!')
