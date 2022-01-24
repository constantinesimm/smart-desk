import AuthService from '@/services/auth.service';
import router from '@/router';

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
    state.isAuthenticated = true;
  },
  SET_LOGOUT(state, payload) {
    state.authToken = payload.authToken;
    state.isAuthenticated = payload.isAuthenticated;
    state.user = payload.user;
  },
};

const actions = {
  localLogin({ commit, rootState }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .localLogin(data)
        .then(response => {
          const { message, action, token, user } = response.data;

          if (action === 'sign-in') {
            commit('SET_AUTH_TOKEN', token);
            commit('SET_USER', user);
            if (rootState.app.selectedLang !== user.language) {
              commit('app/CHANGE_LOCALE', user.language, { root: true });
            }
          }

          return resolve({ message });
        })
        .catch(error => reject(error.message))
    })
  },
  localLogout({ commit }) {
    return new Promise((resolve, reject) => {
      AuthService
        .localLogout()
        .then(response => {
          commit('SET_LOGOUT', initialState);

          return resolve({ message: response.data.message });
        })
        .catch(error => reject(error.message));
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
  localRegisterConfirm({ commit, rootState }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .localRegisterConfirm(data)
        .then(response => {
          const { message, token, user } = response.data;

          commit('SET_AUTH_TOKEN', token);
          commit('SET_USER', user);
          if (rootState.app.selectedLang !== user.language) {
            commit('app/CHANGE_LOCALE', user.language, { root: true });
          }

          return resolve({ message });
        })
        .catch(error => reject(error.message));
    })
  },
  localPasswordReset({ commit }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .localPasswordReset(data)
        .then(response => resolve(response.data))
        .catch(error => reject(error.message));
    })
  },
  localPasswordUpdate({ commit, rootState }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .localPasswordUpdate(data)
        .then(response => {
          const { message, token, user } = response.data;

          commit('SET_AUTH_TOKEN', token);
          commit('SET_USER', user);
          if (rootState.app.selectedLang !== user.language) {
            commit('app/CHANGE_LOCALE', user.language, { root: true });
          }

          return resolve({ message });
        })
        .catch(error => reject(error.message));
    })
  },
  verificateToken({ commit }, token) {
    return new Promise((resolve, reject) => {
      AuthService
        .verificateToken(token)
        .then(response => {
          commit('app/CHANGE_LOCALE', response.data.language, { root: true });

          return resolve(response.data);
        })
        .catch(error => reject(error.message));
    })
  },
  socialLoginGoogle({ commit, rootState }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .socialLoginGoogle(data)
        .then(response => {
          const { message, token, user } = response.data;

          commit('SET_AUTH_TOKEN', token);
          commit('SET_USER', user);
          if (rootState.app.selectedLang !== user.language) {
            commit('app/CHANGE_LOCALE', user.language, { root: true });
          }

          return resolve(message);
        })
        .catch(error => reject(error.message));
    })
  },
  socialLoginFacebook({ commit, rootState }, data) {
    return new Promise((resolve, reject) => {
      AuthService
        .socialLoginFacebook(data)
        .then(response => {
          const { message, token, user } = response.data;

          commit('SET_AUTH_TOKEN', token);
          commit('SET_USER', user);
          if (rootState.app.selectedLang !== user.language) {
            commit('app/CHANGE_LOCALE', user.language, { root: true });
          }

          return resolve(message);
        })
        .catch(error => reject(error.message));
    })
  },
  sessionExpired({ commit }, errMessage) {
    this._vm.$showError(errMessage);
    commit('SET_LOGOUT', initialState);
    router.replace('/auth/login');
  }
};

const getters = {
  getAuthToken: state => state.authToken,
  getUser: state => state.user,
  getAuthStatus: state => state.isAuthenticated
};

export default  {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
