import googleAuth from 'vue-google-oauth2';

const connectPlugins = Vue => {

  Vue.use(googleAuth, {
    clientId: process.env.VUE_APP_GOOGLE_CLIENT_ID,
    scope: 'profile email',
    prompt: 'select_account'
  });

};

export default connectPlugins;
