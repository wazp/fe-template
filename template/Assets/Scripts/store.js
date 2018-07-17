import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clicked: 0
    },
    getters: {
        clicked: state => state.clicked
    },
    mutations: {
        clickUp(state, payload) {
            state.clicked++
        }
    }
})
