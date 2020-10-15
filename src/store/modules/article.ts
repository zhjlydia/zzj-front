/** @format */
import {ActionTree, GetterTree, MutationTree} from 'vuex'
import Article from '@/model/article'
import {PaginationData} from '@/model/common'
import {State as Root} from '..'
import http from '@/apis'
import Category from '@/model/category'

export interface State {
  id: number
  articles: Article[]
  index: number
  size: number
  total: number
  listLoading: boolean
  articleDetail: Article

  categories: Category[]
  currentCategory: number
}

export const state: State = {
  id: 0,
  articles: [],
  index: 0,
  size: 5,
  total: 0,
  listLoading: false,
  articleDetail: null,

  categories: [],
  currentCategory: -1
}

export const getters: GetterTree<State, Root> = {
  /**
   * 列表是否可继续加载
   */
  loadListAbled: state => state.index * state.size < state.total && !state.listLoading
}

export const mutations: MutationTree<State> = {
  M_SET_ID(state: State, id: number) {
    state.id = id
  },
  M_SET_ARTICLES(state: State, articles: Article[]) {
    state.articles = articles
  },
  M_SET_PAGE(state: State, {index, size, total}) {
    if (index !== undefined) {
      state.index = index
    }
    if (size !== undefined) {
      state.size = size
    }
    if (total !== undefined) {
      state.total = total
    }
  },
  M_SET_List_Loading(state: State, loading: boolean) {
    state.listLoading = loading
  },
  M_SET_ARTICLE_DETAIL(state: State, articleDetail: Article) {
    state.articleDetail = articleDetail
  },
  M_SET_CATEGORIES(state: State, categories: Category[]) {
    state.categories = categories
  },
  M_SET_CURRENTCATEGORY(state: State, category: number) {
    state.currentCategory = category
  }
}
export const actions: ActionTree<State, Root> = {
  async fetchList({state, commit}, reset?: boolean) {
    if (reset) {
      commit('M_SET_PAGE', {index: 0})
      commit('M_SET_ARTICLES', [])
    }
    commit('M_SET_List_Loading', true)
    try {
      let params = {index: state.index + 1, size: state.size}
      if (state.currentCategory > 0) {
        params = Object.assign(params, {category: state.currentCategory})
      }
      const res: PaginationData<Article.RawData> = await http.get('article/all', {
        params
      })
      let articles: Article[] = res.list
        ? state.articles.concat(
            res.list.map((item: Article.RawData) => {
              return new Article(item)
            })
          )
        : state.articles
      commit('M_SET_ARTICLES', articles)
      commit('M_SET_PAGE', {index: res.index, size: res.size, total: res.total})
    } catch (error) {
      throw new Error(error.message)
    } finally {
      commit('M_SET_List_Loading', false)
    }
  },
  async fetchDetail({state, commit, dispatch}) {
    if (!state.id) {
      return
    }
    const res: Article.RawData = await http.get(`article/${state.id}`)
    let articleDetail: Article = new Article(res)
    commit('M_SET_ARTICLE_DETAIL', articleDetail)
    dispatch('log')
  },
  async resetArticleDetail({commit}) {
    commit('M_SET_ARTICLE_DETAIL', null)
  },
  async fetchCategory({commit}) {
    const defaultCategory: Category[] = [{id: -1, title: '全部'}]
    const res: Category.RawData[] = await http.get('category/all',{ params: {module:'article'} })
    let categories: Category[] = res
      ? defaultCategory.concat(
          res.map((item: Category.RawData) => {
            return new Category(item)
          })
        )
      : defaultCategory
    commit('M_SET_CATEGORIES', categories)
  },
  async log({state, commit}) {
    if (!state.id) {
      return
    }
    await http.post(`log`,{targetId:state.id,module:'article'})
  }
}

export const namespaced = true
