import AuthService from '@/services/auth.service';

const initialState = {
  isAuthenticated: false,
  authToken: null,
  user: {}
};

let state = {
  isAuthenticated: false,
  authToken: null,
  user: {}
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_AUTH_TOKEN(state, payload) {
    state.authToken = payload;
    state.isAuthenticated = payload;
  },
  SET_LOGOUT(state) {
    state = initialState;
  }
};

const actions = {
  localLogin({ commit, rootState }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .localLogin(data)
        .then(response => {
          const { message, token, user } = response.data;

          commit('SET_AUTH_TOKEN', token);
          commit('SET_USER', user);
          if (rootState.app.selectedLang !== user.language) {
            commit('app/CHANGE_LOCALE', user.language, { root: true });
          }

          return resolve({ message });
        })
        .catch(error => reject(error.message))
    })
  },
  localLogout({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  localRegister({ commit }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .localRegister(data)
        .then(response => resolve(response.data))
        .catch(error => reject(error.message))
    })
  },
  localRegisterConfirm({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  localPasswordReset({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  localPasswordUpdate({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  verificateToken({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  socialLoginGoogle({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  socialLoginFacebook({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  }
};

const getters = {
  getAuthToken: state => state.authToken,
  getUser: state => state.user,
};

export default  {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
