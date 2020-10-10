import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    status: '',
    token: sessionStorage.getItem('token') || '',
    current_preview: '',
    preview_status: 'pause'
  },
  mutations: {
    auth_success(state, token) {
      state.status = 'success'
      state.token = token
    },
    auth_error(state) {
      state.status = 'error'
    },
    auth_clear(state) {
      state.status = ''
      state.token = ''
    },
    player_play(state, fileUrl) {
      state.preview_status = 'play'
      state.current_preview = fileUrl
    },
    player_pause(state) {
      state.preview_status = 'pause'
    },
    player_stop(state) {
      state.preview_status = 'pause'
    }
  },
  actions: {
    login({ commit }, url) {
      return new Promise((resolve, reject) => {
        const parsedUrl = new URL(url)
        const params = parsedUrl.hash.replace('#', '').split('&')
        const paramsMap = new Map(params.map(param => {
          return param.split('=')
        }))
        if (paramsMap.has('error')) {
          commit('auth_error', paramsMap.get('error'))
          reject(new Error('auth_error'))
        } else {
          const token = paramsMap.get('access_token')
          sessionStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          commit('auth_success', token)
          resolve()
        }
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit('auth_clear')
        sessionStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    toggle_preview({ commit }, fileUrl) {
      if (this.state.preview_status === 'play' && this.state.current_preview === fileUrl) {
        commit('player_pause')
      } else {
        commit('player_play', fileUrl)
      }
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authUrl: () => {
      const clientId = '54ecf7a090bc48e88038c911ce66b95a'
      const redirectUri = 'http://poznan.baloo.ml:8081/authorize'
      const scope = ['user-top-read']
      const responseType = 'token'
      const showDialog = false

      const url = new URL('/authorize', 'https://accounts.spotify.com')
      url.searchParams.append('client_id', clientId)
      url.searchParams.append('redirect_uri', redirectUri)
      url.searchParams.append('scope', scope.join('%20'))
      url.searchParams.append('response_type', responseType)
      url.searchParams.append('show_dialog', showDialog)

      return url.toString()
    }
  },
  modules: {
  }
})
