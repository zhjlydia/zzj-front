/** @format */
import {ActionTree, GetterTree, MutationTree} from 'vuex'
import axios from 'axios'
import {State as Root} from '..'

export interface State {
  repositories: any
  loading: boolean
}

export const state: State = {
  repositories: [],
  loading: false
}

export const mutations: MutationTree<State> = {
  M_SET_REPOSITORIES(state: State, repositories: any) {
    state.repositories = repositories
  },

  M_SET_Loading(state: State, loading: boolean) {
    state.loading = loading
  }
}
export const actions: ActionTree<State, Root> = {
  async fetch({state, commit}) {
    commit('M_SET_Loading', true)
    try {
      const res: any = await axios.get('https://api.github.com/users/zhjlydia/repos')
      console.log(res)
      //   commit('M_SET_ARTICLES', articles)
    } catch (error) {
      throw new Error(error.message)
    } finally {
      commit('M_SET_Loading', false)
    }
  }
}

export const namespaced = true
