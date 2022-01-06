let state = {
  selectedLang: null
};

const mutations = {
  CHANGE_LOCALE(state, payload) {
    state.selectedLang = payload;
  }
};

const actions = {
  changeLocale({ commit }, data) {
    commit('CHANGE_LOCALE', data);
  }
};

const getters = {
  getSelectedLocale: state => state.selectedLang
};

export default  {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
