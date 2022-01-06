import Axios from 'axios';
import store from '@/store';

const options = {
  baseURL: process.env.VUE_APP_API,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
  }
};

const httpClient = Axios.create(options);

httpClient.interceptors.request.use(config => {
  if (store.getters['app/getSelectedLocale']) config.headers['Accept-Language'] = store.getters['app/getSelectedLocale'];
  if (store.getters['user/getAuthToken']) config.headers['authorization'] = store.getters['user/getAuthToken'];

  return config;
});

httpClient.interceptors.response.use(response => {
  if (response.config.headers['authorization']) {
    store.commit('user/SET_AUTH_TOKEN', response.config.headers['authorization']);
  }

  return response;
}, error => {
  const { data, status } = error.response;

  if (status === 401) store.dispatch('user/sessionExpired');

  return Promise.reject(data);
})

const ApiClient = {
  get(url, conf = {}) {
    return httpClient.get(url, conf)
  },

  put(url, data = {}, conf = {}) {
    return httpClient.put(url, data, conf)
  },

  delete(url, data = {}, conf = {}) {
    return httpClient.delete(url, data)
  },

  post(url, data = {}, conf = {}) {
    return httpClient.post(url, data, conf)
  }

}

export default ApiClient;
