'use strict'

{{#vue}}
import Vue from 'vue'
{{#vuex}}
import store from '@/Scripts/store'
{{/vuex}}
import test from '@Components/test.vue'
import './vueImports'

let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    {{#vuex}}
    store,
    {{/vuex}}
    components: {
        test
    }
})
{{/vue}}
console.log('main.js done!')
