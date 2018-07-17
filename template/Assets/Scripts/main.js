'use strict'

{{#vue}}
import Vue from 'vue'
import test from '@Components/test.vue'
import './vueImports'

let App = new Vue({ // eslint-disable-line no-unused-vars
    el: '#App',
    components: {
        test
    }
})
{{/vue}}
console.log('main.js done!')
