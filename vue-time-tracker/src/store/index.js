/**
 * Created by nadila_sx on 2017/4/14.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

