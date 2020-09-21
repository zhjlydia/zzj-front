/** @format */

import Vue from 'vue'
import Vuex, {GetterTree, MutationTree, Store, ActionTree} from 'vuex'
import * as article from './modules/article'
import * as home from './modules/home'
import * as repository from './modules/repository'

Vue.use(Vuex)

export interface State {
  jobs: number
}

const state: State = {
  jobs: 0
}

const getters: GetterTree<State, State> = {
  pending: state => state.jobs > 0
}

const mutations: MutationTree<State> = {
  begin(state: State) {
    state.jobs++
  },
  end(state: State, error?: Error) {
    state.jobs--
    if (error) {
      console.log(error)
    }
  }
}

const actions: ActionTree<State, State> = {}

export default new Store({
  state,
  mutations,
  actions,
  getters,
  modules: {home, article, repository}
})
