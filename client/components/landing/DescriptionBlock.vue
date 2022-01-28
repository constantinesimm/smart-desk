<template>
  <v-container id="advantages">
    <v-card class="px-5 py-10" elevation="0">
      <v-card-text>
        <v-row justify="center">
          <v-col cols="10" md="5" align-self="center">
            <h2 class="text-center pb-2">
              {{ $vuetify.lang.t('$vuetify.landing.descriptionBlock.chatbot.title') }}
            </h2>
            <div class="text-left" v-html="$vuetify.lang.t('$vuetify.landing.descriptionBlock.chatbot.text')" />
          </v-col>

          <v-col cols="10" md="5">
            <img :src="landing.descriptionChatbot" width="100%" />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="px-5 py-10" elevation="0">
      <v-card-title class="justify-center text-h5 font-weight-bold">
        {{ $vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.title') }}
      </v-card-title>
      <v-card-subtitle>
        {{ $vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.subtitle') }}
      </v-card-subtitle>

      <v-divider class="mt-10" />

      <v-card-text v-for="(row, idx) in oportunitieBlockContent" :key="idx">
        <v-row justify="center">
          <v-col cols="10" md="5" v-for="(column, idx) in row" :key="idx">
            <v-row>
              <v-col cols="2">
                <img :src="column.icon" width="35" />
              </v-col>

              <v-col cols="10">
                <h4 class="text-left pb-2">
                  {{ column.title }}
                </h4>
                <div class="text-left" v-html="column.text" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>


  </v-container>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';

  export default {
    name: 'DescriptionBlock',
    mixins: [IconsMixin],
    data() {
      return {}
    },
    computed: {
      oportunitieBlockContent() {
        return [
          [
            {
              icon: this.landing.icons.automationIcon,
              title: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.automation.title'),
              text: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.automation.text'),
            },
            {
              icon: this.landing.icons.supportIcon,
              title: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.support.title'),
              text: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.support.text'),
            },
          ],
          [
            {
              icon: this.landing.icons.salesIcon,
              title: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.sales.title'),
              text: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.sales.text'),
            },
            {
              icon: this.landing.icons.communicationIcon,
              title: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.communication.title'),
              text: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.communication.text'),
            },
          ],
          [
            {
              icon: this.landing.icons.marketingIcon,
              title: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.marketing.title'),
              text: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.marketing.text'),
            },
            {
              icon: this.landing.icons.efficiencyIcon,
              title: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.efficiency.title'),
              text: this.$vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.efficiency.text'),
            },
          ],
        ]
      },
      appUrls() {
        const baseUrl = process.env.VUE_APP_URL;

        return {
          loginPage: `${baseUrl}/auth/login`,
          registerPage: `${baseUrl}/auth/register`
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .description-container {
    padding: 90px 0;

    .opportunities {
      &-wrapper {
        padding: 0 200px;
      }

      &-header {
        &__title {}

        &__subtitle {}
      }

      &-grid {
        &__container {

        }

        &__item {
          .item {
            &__icon {
              img {
                width: 35px;
              }
            }

            &__description {
              .description {
                &__title {}

                &__text {}
              }
            }
          }
        }
      }
    }
  }
</style>
