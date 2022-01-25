<template>
  <div class="block-wrapper">
    <v-container>
      <v-row class="welcome-label" justify="center">
        <v-col cols="12">
          <h1 class="welcome-label__text pb-10" v-html="$vuetify.lang.t('$vuetify.landing.welcomeBlock.title')" />
          <div class="welcome-label__subtext pb-10" v-html="$vuetify.lang.t('$vuetify.landing.welcomeBlock.subtitle')" />
        </v-col>
      </v-row>

      <v-row class="welcome-button">
        <v-col>
          <a :href="appUrls.registerPage" class="shadow-button mt-10 v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--large hover-primary-rounded">
            <v-icon dark left color="white" class="hover-primary-rounded-icon">
              {{ icons.mdiHeadSnowflakeOutline }}
            </v-icon>

            {{ $vuetify.lang.t('$vuetify.landing.welcomeBlock.button') }}
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  import UrlAndLocaleMixin from '@/mixins/UrlAndLocaleMixin';

  export default {
    name: 'WelcomeBlock',
    mixins: [IconsMixin, UrlAndLocaleMixin],
  }
</script>

<style lang="scss" scoped>
.block-wrapper {
  background-image: url('../../assets/images/welcome_background.svg');
  min-height: 550px;
  height: 100vh;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;

  .welcome-label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: calc((550px / 2) - 50px);

    &__text, &__subtext {
      color: #ffffff;
      font-family: "Ubuntu", sans-serif;
    }
  }

  .welcome-button {
    .shadow-button {
      &:hover {
        box-shadow: 0 0 10px 8px #ddd8e599;
        font-family: "Ubuntu", sans-serif;
      }
    }
    .hover-primary-rounded {
      color: #ffffff;
      background: #0f4cb5;
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
}
</style>
