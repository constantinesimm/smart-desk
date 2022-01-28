import BillingService from '@/services/billing.service';

let state = {
  paymentRates: [],
  paymentPeriods: [],
  discounts: []
};

const mutations = {
  SET_PAYMENT_RATES(state, payload) {
    state.paymentRates = payload.paymentRates;
    state.paymentPeriods = payload.paymentPeriods;
    state.discounts = payload.discounts;
  }
};

const actions = {
  getPaymentRatesData({ commit }) {
    return new Promise((resolve, reject) => {
      BillingService
        .getPaymentRatesData()
        .then(response => commit('SET_PAYMENT_RATES', response.data))
        .catch(error => reject(error.message));
    })
  },
  calculatePaymentPlanPrice({}, data) {
    return new Promise((resolve, reject) => {
      BillingService
        .calculatePlanPrice(data)
        .then(response => resolve(response.data))
        .catch(error => reject(error.message));
    })
  }
};

const getters = {
  getPaymentRates: state => state.paymentRates,
  getPaymentPeriods: state => state.paymentPeriods,
  getDiscounts: state => state.discounts
};

export default  {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
