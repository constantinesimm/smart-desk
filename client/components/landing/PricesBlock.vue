<template>
  <v-container id="prices">
    <v-card class="px-5 py-10 pricing-plans-card">
      <v-card-title class="justify-center text-h5 font-weight-bold">
        {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.title') }}
      </v-card-title>

      <v-card-subtitle v-html="$vuetify.lang.t('$vuetify.landing.pricingBlock.subtitle')" />

      <v-divider class="my-10" />

      <v-card-text class="pt-5 pb-5">
        <switch-service-period @select-service-period="setServicePeriod" />
      </v-card-text>

      <v-card-text>
        <v-row justify="center">
          <v-col md="4" cols="10" v-for="(rateCard, idx) in paymentRateCards" :key="idx">
            <v-card>
              <v-card-text>
                <h1 :class="`text-2xl font-weight-medium ${ rateCard.color }--text`">
                  {{ rateCard.title }}
                </h1>

                <p>
                  {{ rateCard.description }}
                </p>

                <div class="d-flex justify-center">
                  <animated-logotypes :height="175" :width="175" :animation-file="`${ rateCard.anination }`" />
                </div>

                <div class="annual-price mt-5">
                  <div class="plan-price d-flex align-center justify-center">
                    <sup class="text-md-h6">₴</sup>
                    <span class="text-h4 primary--text font-weight-bold">
                      {{ rateCard.ratePrice[selectedServicePeriod === 30 ? 'total' : 'discount'] }}
                    </span>
                  </div>
                  <div>
                    <span v-if="selectedServicePeriod === 365" class="text-h6 secondary--text text-decoration-line-through font-weight-bold">
                      {{ rateCard.ratePrice['total'] }}
                    </span>
                  </div>
                </div>

                <v-divider class="mt-3" />

              </v-card-text>

              <v-card-text>
                <v-list dense>
                  <v-list-item-group color="primary">
                    <v-list-item v-for="(item, idx) in rateCard.features" :key="idx" class="d-flex justify-space-between">
                      <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                      </v-list-item-content>

                      <v-list-item-icon>
                        <i
                          v-if="item.type === 'icon'"
                          :class="item.value"
                          :style="{'color': item.color }"
                        ></i>

                        <span
                          class="text-h5 font-weight-bold"
                          v-else :style="{'color': item.color }"
                        >
                          {{ item.value }}
                        </span>

                      </v-list-item-icon>
                    </v-list-item>
                  </v-list-item-group>

                  <v-list-item class="mt-5">
                    <v-btn
                      block
                      :color="rateCard.color"
                      @click="handleRegisterPageRedirect(rateCard.name)"
                    >
                      {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.plans.selectButton') }}
                    </v-btn>
                  </v-list-item>

                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-text class="pricing-plans-newbie-offer my-16">
        <v-row>
          <v-col class="mx-auto" md="10" cols="12">
            <div class="pricing-trial-content d-flex justify-space-between flex-column flex-md-row">
              <div class="text-center text-md-left mt-7">
                <p class="text-2xl font-weight-medium primary--text mb-2">
                  {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.newbieOffer.title') }}
                </p>
                <p class="text-base" v-html="$vuetify.lang.t('$vuetify.landing.pricingBlock.newbieOffer.description')" />

                <a :href="`${ appUrls.registerPage }&rate=free`" class="shadow-button mb-5 v-btn v-btn--is-elevated theme--light v-size--large hover-primary-rounded">
                  {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.newbieOffer.button') }}
                </a>
              </div>

              <AnimatedLogotypes animation-file="appLogoBot" :height="150" :width="150" />
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  import { mapGetters } from 'vuex';
  import UrlAndLocaleMixin from '@/mixins/UrlAndLocaleMixin';
  const AnimatedLogotypes = () => import('@/components/core/AnimatedLogotypes');
  import SwitchServicePeriod from '@/components/landing/core/SwitchServicePeriod';

  export default {
    name: 'PricesBlock',
    mixins: [UrlAndLocaleMixin],
    components: {
      AnimatedLogotypes,
      SwitchServicePeriod
    },
    data() {
      return {
        selectedServicePeriod: 365,
        ratesPrice: {
          padawan: {
            discount: 0,
            total: 0
          },
          jedi: {
            discount: 0,
            total: 0
          },
          master: {
            discount: 0,
            total: 0
          },
        }
      }
    },
    computed: {
      ...mapGetters({
        paymentRates: 'billing/getPaymentRates'
      }),
      paymentRateCards() {
        const cardColor = {
          padawan: 'success',
          jedi: 'primary',
          master: 'secondary'
        };

        return this.paymentRates.map(rate => {
          const features = Object.keys(rate.features).map(item => {
            const featureValue = rate.features[item];

            const type = typeof featureValue === 'number' && featureValue !== 1000 ? 'number' : 'icon';
            const color = (featureValue === 1000 || type === 'number') ? '#377fea' : !featureValue ? '#ff4c51' : '#56ca00';
            const value = type === 'number' ? featureValue : featureValue === 1000 ? 'fas fa-infinity fa-lg' : !featureValue ? 'fas fa-times fa-lg' : 'fas fa-check fa-lg';

            return {
              title: this.$vuetify.lang.t(`$vuetify.landing.pricingBlock.plans.features.${ item }`),
              type,
              color,
              value
            }
          })
          return {
            name: rate.name,
            anination: rate.name,
            color: cardColor[rate.name],
            title: this.$vuetify.lang.t(`$vuetify.landing.pricingBlock.plans.${ rate.name }.title`),
            description: this.$vuetify.lang.t(`$vuetify.landing.pricingBlock.plans.${ rate.name }.description`),
            ratePrice: this.ratesPrice[rate.name],
            features
          }
        })
      }
    },
    beforeCreate() {
      this.$store.dispatch('billing/getPaymentRatesData');
    },
    methods: {
      setServicePeriod(period) {
        this.selectedServicePeriod = period;

        this.$store
          .dispatch('billing/calculatePaymentPlanPrice', { paymentPeriod: period })
          .then(response => {
            response.map(rate => {
              this.ratesPrice[rate.name].total = rate.totalPrice;
              this.ratesPrice[rate.name].discount = period === 30 ? 0 : rate.discountPrice
            })
          });
      },
      handleRegisterPageRedirect(rateName) {
        window.document.location.replace(`${ this.appUrls.registerPage }&rate=${ rateName }&period=${ this.selectedServicePeriod }`)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .pricing-plans-card {
    box-shadow: rgb(94 86 105 / 28%) 0px 0px 18px 4px !important;
  }
</style>
