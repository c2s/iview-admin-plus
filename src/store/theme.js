export default {
  state: {
    MainThemeSetting: localStorage.getItem('YLD_THEME') ? localStorage.getItem('YLD_THEME') : 'primary', // 系统风格
    MainThemeColor: localStorage.getItem('MAIN_THEME_COLOR') ? localStorage.getItem('MAIN_THEME_COLOR') : null // 系统颜色
  },
  getters: {
    getTheme: state => {
      return state.MainThemeSetting
    },
    getThemeColor: state => {
      return state.MainThemeColor
    }
  },
  mutations: {
    setTheme (state, payload) {
      state.MainThemeSetting = payload
    },
    setThemeColor (state, payload) {
      state.MainThemeColor = payload
    }
  },
  actions: {
    theme ({ state, commit }, payload) {
      return new Promise((resolve) => {
        localStorage.setItem('YLD_THEME', payload)
        commit('setTheme', payload)
        resolve()
      })
    },
    themeColor ({ state, commit }, payload) {
      return new Promise((resolve) => {
        localStorage.setItem('MAIN_THEME_COLOR', payload)
        commit('setThemeColor', payload)
        resolve()
      })
    }
  }
}
