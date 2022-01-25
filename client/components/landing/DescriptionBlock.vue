<template>
  <v-container style="padding-bottom: 90px">
    <v-row justify="center" style="padding-bottom: 90px">
      <v-col cols="4" align-self="center">
        <v-card elevation="0">
          <h2 class="text-left pb-2">
            {{ $vuetify.lang.t('$vuetify.landing.descriptionBlock.chatbot.title') }}
          </h2>
          <div class="text-left" v-html="$vuetify.lang.t('$vuetify.landing.descriptionBlock.chatbot.text')" />
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-card elevation="0">
          <img :src="landing.descriptionChatbot" width="100%" />
        </v-card>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-container>
        <v-row justify="center" class="mb-5">
          <v-col>
            <h2>
              {{ $vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.title') }}
            </h2>
            <div class="subtitle">
              {{ $vuetify.lang.t('$vuetify.landing.descriptionBlock.opportunity.subtitle') }}
            </div>
          </v-col>
        </v-row>

        <v-row justify="center" v-for="(row, idx) in oportunitieBlockContent" :key="idx">
          <v-col cols="4" v-for="(column, idx) in row" :key="idx">
            <v-card elevation="0">
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
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
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
