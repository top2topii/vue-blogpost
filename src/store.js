import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        delta: undefined
    },
    mutation: {
        setDelta(state, payload) {
            state.delta = payload
        }
    },
    getters: {
        delta: ({delta}) => delta
    }
})

export default store