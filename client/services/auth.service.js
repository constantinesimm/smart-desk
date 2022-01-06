import ApiClient from '@/libs/http-client';

const basePath = '/api/users/auth';

export default {
  localLogin(data) {
    return ApiClient.post(`${ basePath }/local/login`, data);
  },
  localLogout() {
    return ApiClient.get(`${ basePath }/local/logout`);
  },
  localRegister(data) {
    return ApiClient.post(`${ basePath }/local/register`, data);
  },
  localRegisterConfirm(data) {
    return ApiClient.put(`${ basePath }/local/register/confirm`, data);
  },
  localPasswordReset(data) {
    return ApiClient.post(`${ basePath }/local/password/reset`, data);
  },
  localPasswordUpdate(data) {
    return ApiClient.put(`${ basePath }/local/password/update`, data);
  },
  verificateToken(token) {
    return ApiClient.get(`${ basePath }/token/verificate/${token}`);
  },
  socialLoginGoogle(data) {
    return ApiClient.post(`${ basePath }/social/google`, data);
  },
  socialLoginFacebook(data) {
    return ApiClient.post(`${ basePath }/social/facebook`, data);
  }
}
