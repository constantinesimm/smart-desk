<template>
  <div class="block-wrapper">
    <v-container>
      <v-card class="pricing-plans">
        <v-card-text class="pricing-plans-headers">
          <v-row class="pb-10">
            <div class="mx-auto col-sm-8 col-md-6 col-12">
              <h1 class="font-weight-medium mb-5 mt-15">
                {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.title') }}
              </h1>

              <p class="mb-5" v-html="$vuetify.lang.t('$vuetify.landing.pricingBlock.subtitle')"></p>
            </div>
          </v-row>

          <v-divider />

          <v-row justify="center" class="mt-10 mb-10">
            <div class="d-flex flex-column">

              <p class="mb-3" style="font-size: 18px" v-html="$vuetify.lang.t('$vuetify.landing.pricingBlock.paymentPeriodTitle')"></p>

              <div class="d-flex align-center justify-center">
                <span
                  @click="pricingPlan.period = 'month'"
                  :class="['font-weight-semibold mr-5 period-label__month', { 'text-decoration-underline': pricingPlan.period === 'month' }]"
                  style="color: #377fea"
                >
                  <v-expand-x-transition>
                    <i v-if="pricingPlan.period === 'month'" class="fas fa-check fa-lg"></i>
                  </v-expand-x-transition>

                  {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.paymentPeriodMonth') }}
                </span>

                <span
                  @click="pricingPlan.period = 'year'"
                  :class="['font-weight-semibold ml-5 period-label__year', { 'text-decoration-underline': pricingPlan.period === 'year' }]"
                  style="color: #56ca00"
                >
                  <v-expand-x-transition>
                    <i v-if="pricingPlan.period === 'year'" class="fas fa-check fa-lg"></i>
                  </v-expand-x-transition>

                  {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.paymentPeriodYear') }}
                </span>
              </div>
            </div>
          </v-row>

          <v-row justify="center mt-15 mb-10">
            <div class="d-flex flex-column align-center justify-center">
              <p class="mb-3" style="font-size: 18px">
                {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.selectBots') }}
              </p>

              <div class="messengers-list d-flex flex-row justify-space-around mt-2">
                <div
                  @click="pricingPlan.messengers.telegram = !pricingPlan.messengers.telegram"
                  :class="['d-flex flex-row justify-center align-center msg-item telegram-icon mr-2', pricingPlan.messengers.telegram ? 'checked' : 'unchecked' ]">
                  <i class="fab fa-telegram fa-3x"></i>
                  <span class="ml-2"> Telegram </span>
                </div>

                <div
                  @click="pricingPlan.messengers.viber = !pricingPlan.messengers.viber"
                  :class="['d-flex flex-row justify-center align-center msg-item viber-icon mr-5 ml-5', pricingPlan.messengers.viber ? 'checked' : 'unchecked' ]">
                  <i class="fab fa-viber fa-3x"></i>

                  <span class="ml-2"> Viber </span>
                </div>

                <div
                  @click="pricingPlan.messengers['fb-messenger'] = !pricingPlan.messengers['fb-messenger']"
                  :class="['d-flex flex-row justify-center align-center msg-item fb-messenger-icon ml-2', pricingPlan.messengers['fb-messenger'] ? 'checked' : 'unchecked' ]"
                >
                  <i class="fab fa-facebook-messenger fa-3x"></i>

                  <span class="ml-2"> FB Messenger </span>
                </div>
              </div>
            </div>
          </v-row>
        </v-card-text>

        <v-divider />

        <v-card-text class="mt-3 pb-15 pricing-plans-items">
          <v-row>
            <div class="d-flex mx-auto col-sm-8 col-md-12 col-lg-10 offset-sm-2 offset-lg-2 col">
              <v-col md="4" cols="12" v-for="(planName, idx) in Object.keys(plansDescription)" :key="planName-idx">
                <v-card class="pricing-plans-items__card">
                  <v-card-text class="pricing-plans-items__card-header">
                    <div class="d-flex justify-center">
                      <AnimatedLogotypes :animation-file="planName" :width="200" :height="200" />
                    </div>
                    <h1 :class="['text-2xl font-weight-medium', `text-color__${ planName === 'padawan' ? 'success' : planName === 'jedi' ? 'primary' : 'secondary' }`]"> {{ plansDescription[planName].title }} </h1>
                    <p>{{ plansDescription[planName].description }}</p>

                    <v-divider />

                    <div class="annual-plan mt-2 mb-2">
                      <div class="plan-price d-flex align-center justify-center">
                        <sup class="text-sm text-primary">$</sup>
                        <span class="pricing-basic-value text-5xl primary--text font-weight-semibold"> 0 </span>
                        <sub class="pricing-duration text-sm mb-n3">/month</sub>
                      </div>
                    </div>

                    <v-divider />
                  </v-card-text>

                  <v-card-text class="pricing-plans-items__card-body">
                    <div class="pb-2">
                      <div class="d-flex flex-column features-list">
                        <div class="features-list-item" v-for="(item, i) in Object.keys(plansDescription[planName].features)" :key="i">
                          <div class="features-list-item__content d-flex flex-row justify-space-between pt-3 pb-3">
                            {{ plansDescription[planName].features[item].title }}

                            <i
                              v-if="plansDescription[planName].features[item].type === 'icon'"
                              :class="plansDescription[planName].features[item].value"
                              :style="{'color': plansDescription[planName].features[item].color }"
                            >

                            </i>
                            <span
                              v-else
                              :style="{'color': plansDescription[planName].features[item].color, 'font-size': '24px' }"
                            >
                              {{ plansDescription[planName].features[item].value }}
                            </span>

                          </div>

                          <v-divider />

                        </div>
                      </div>
                    </div>
                    <v-btn
                      :color="planName === 'padawan' ? 'success' : planName === 'jedi' ? 'primary' : 'secondary'"
                      rounded
                      block
                    >
                      {{ $vuetify.lang.t('$vuetify.landing.pricingBlock.plans.selectButton') }}
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </div>
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

                  <a class="shadow-button mb-5 v-btn v-btn--is-elevated theme--light v-size--large hover-primary-rounded">
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
  </div>
</template>

<script>
  const AnimatedLogotypes = () => import('@/components/core/AnimatedLogotypes');

  export default {
    name: 'PricesBlock',
    components: {
      AnimatedLogotypes,
    },
    data() {
      return {
        featuresList: {
          demoBots: '',
          realBots: '',
          botsConstructor: '',
          botsAnalytics: '',
          customersMailing: '',
          accessTransfer: '',
          employeesAccess: '',
          crmIntegrations: ''
        },
        pricingPlan: {
          period: '',
          messengers: {
            telegram: false,
            viber: false,
            'fb-messenger': false
          }
        }
      }
    },
    computed: {
      plansDescription() {
        return {
          padawan: {
            title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.padawan.title'),
            description: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.padawan.description'),
            features: {
              demoBots: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.demoBotsTitle'),
                type: 'icon',
                color: '#377fea',
                value: 'fas fa-infinity fa-lg'
              },
              realBots: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.realBotsTitle'),
                type: 'number',
                color: '#377fea',
                value: 1
              },
              botsConstructor: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.botsConstructor'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              botsAnalytics: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.botsAnalytics'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              },
              customersMailing: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.customersMailing'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              },
              accessTransfer: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.accessTransfer'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              },
              employeesAccess: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.employeesAccess'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              },
              crmIntegrations: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.crmIntegrations'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              }
            }
          },
          jedi: {
            title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.jedi.title'),
            description: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.jedi.description'),
            features: {
              demoBots: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.demoBotsTitle'),
                type: 'icon',
                color: '#377fea',
                value: 'fas fa-infinity fa-lg'
              },
              realBots: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.realBotsTitle'),
                type: 'number',
                color: '#377fea',
                value: 5
              },
              botsConstructor: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.botsConstructor'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              botsAnalytics: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.botsAnalytics'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              customersMailing: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.customersMailing'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              accessTransfer: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.accessTransfer'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              employeesAccess: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.employeesAccess'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              },
              crmIntegrations: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.crmIntegrations'),
                type: 'icon',
                color: '#ff4c51',
                value: 'fas fa-times fa-lg'
              }
            }
          },
          yoda: {
            title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.yoda.title'),
            description: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.yoda.description'),
            features: {
              demoBots: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.demoBotsTitle'),
                type: 'icon',
                color: '#377fea',
                value: 'fas fa-infinity fa-lg'
              },
              realBots: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.realBotsTitle'),
                type: 'number',
                color: '#377fea',
                value: 20
              },
              botsConstructor: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.botsConstructor'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              botsAnalytics: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.botsAnalytics'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              customersMailing: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.customersMailing'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              accessTransfer: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.accessTransfer'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              employeesAccess: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.employeesAccess'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              },
              crmIntegrations: {
                title: this.$vuetify.lang.t('$vuetify.landing.pricingBlock.plans.features.crmIntegrations'),
                type: 'icon',
                color: '#56ca00',
                value: 'fas fa-check fa-lg'
              }
            }
          }
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .block-wrapper {
    padding: 50px 0;

    .pricing-plans {
      box-shadow: rgb(94 86 105 / 28%) 0px 0px 18px 4px !important;

      &-headers {

        .period-label {
          &__year, &__month {
            font-size: 18px;
            font-weight: bold;
            cursor: pointer;
          }
        }

        .messengers-list {
          .msg-item {
            span {
              font-size: 16px;
              font-weight: 600;
            }

            &:hover {
              cursor: pointer;
            }

            &.telegram-icon.checked {
              i, span {
                color: #377fea;
              }
            }
            &.viber-icon.checked {
              i, span {
                color: #9155fd;
              };
            }
            &.fb-messenger-icon.checked {
              i, span {
                color: #00c6ff;
              };
            }

            &.telegram-icon.unchecked, &.viber-icon.unchecked, &.fb-messenger-icon.unchecked {
              i, span {
                color: #8a8d93;
              }
            }
          }
        }
      }

      &-items__card {
        box-shadow: rgb(94 86 105 / 28%) 0px 0px 18px 4px !important;

        &-header {
          .text-color {
            &__success {
              color: #56ca00!important;
            }

            &__primary {
              color: #377fea!important;
            }

            &__secondary {
              color: #8a8d93!important;
            }
          }
        }

        &-body {
          .features-list {
            width: 100%;

            &-item {
              &__content, &__icon {
                width: inherit;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
      }

      &-newbie-offer {
        background-color: #377fea1a;
      }
    }



    .shadow-button {
      &:hover {
        box-shadow: 0 0 10px 8px #ddd8e599;
        font-family: "Ubuntu", sans-serif;
      }
    }
    .hover-primary-rounded {
      color: #ffffff;
      background: #0f4cb5db;
      border: 1px solid #ffffff;
      border-radius: 28px;
      font-family: "Ubuntu", sans-serif;

      &:hover {
        color: #377fea;
        background: #ffffffd1;

        .hover-primary-icon, .hover-primary-rounded-icon {
          font-family: "Ubuntu", sans-serif;
          color: #377fea!important;
        }
      }
    }
  }
</style>
