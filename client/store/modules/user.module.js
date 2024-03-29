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
    state = payload;
  },
  SESSION_EXPIRED(state, payload) {
    state = payload;
  },
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
  socialLoginGoogle({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  socialLoginFacebook({ commit }, data) {
    return new Promise((resolve, reject) => {

    })
  },
  sessionExpired({ commit }, errMessage) {
    this._vm.$showError(errMessage);
    commit('SESSION_EXPIRED', initialState);
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
