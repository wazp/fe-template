import Vue from 'vue'
import Router from 'vue-router'

import Start from '@Vues/Start'
import Second from '@Vues/Second'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: Start
        },
        {
            path: '/second',
            component: Second
        }
    ]
})
