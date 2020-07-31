import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import * as mutations from './mutations'
// import * as actions from './actions'
import * as getters from './mapGetters'
import createLogger from 'vuex/dist/logger'
Vue.use(Vuex)
const debug = process.env.Node_env !== 'production'
console.log(mutations)
export default new Vuex.Store({
    state,
    mutations,
    // actions,
    getters,
    strick: debug, // 开启vuex 严格模式
    plugins: debug ? [createLogger()] : []
})
