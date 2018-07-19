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
console.log('main.js done!')
