import ApiClient from '@/libs/http-client';

const basePath = '/api/billing';

export default {
  getPaymentRatesData() {
    return ApiClient.get(`${ basePath }/payment-plan`)
  },
  calculatePlanPrice(data) {
    return ApiClient.post(`${ basePath }/payment-plan/calculate`, data);
  }
}
