<template>
  <v-container fluid class="bg-wrapper d-flex" id="welcome">
    <v-row justify="center" align-content="center" align="center" class="mt-5 pb-10">
      <v-col md="6" cols="10" class="order-md-last">
        <h2 class="white--text text-md-left mb-3 font-weight-bold" v-html="$vuetify.lang.t('$vuetify.landing.welcomeBlock.title')" />
        <div class="white--text text-md-left" v-html="$vuetify.lang.t('$vuetify.landing.welcomeBlock.subtitle')" />

        <v-row justify-md="start" justify-sm="center" class="mt-13">
          <v-col
            v-for="(item, idx) in messengers" :key="idx"
            cols="4" md="3"
          >
            <v-card class="messengers-shadow-card">
              <v-card-text :class="`messenger-icon ${ item.toLowerCase() } px-0 pb-0`">
                <i :class="`fab fa-${ item.toLowerCase() } ${ adaptiveSizes.messengerIcons }`"></i>
              </v-card-text>
              <v-card-text :class="`px-0 pt-2 font-weight-bold text-caption text-sm-body-2 text-md-body-1 messenger-title ${ item.toLowerCase() }`">
                {{ item.split('-')[0] }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row justify="center" class="welcome-button">
          <a :href="`${ appUrls.registerPage }&rate=free`" class="shadow-button mt-10 v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--large hover-primary-rounded">
            <v-icon dark left color="white" class="hover-primary-rounded-icon">
              {{ icons.mdiHeadSnowflakeOutline }}
            </v-icon>

            {{ $vuetify.lang.t('$vuetify.landing.welcomeBlock.button') }}
          </a>
        </v-row>
      </v-col>

      <v-col md="4" cols="10" class="d-flex justify-space-around order-md-first">
        <animated-logotypes animation-file="appLogo" :height="adaptiveSizes.robotAnimation" :width="adaptiveSizes.robotAnimation" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  import UrlAndLocaleMixin from '@/mixins/UrlAndLocaleMixin';
  const AnimatedLogotypes = () => import('@/components/core/AnimatedLogotypes');

  export default {
    name: 'WelcomeBlock',
    mixins: [IconsMixin, UrlAndLocaleMixin],
    components: {
      AnimatedLogotypes
    },
    data() {
      return {
        messengers: ['Telegram', 'Viber', 'Facebook-messenger']
      }
    },
    computed: {
      adaptiveSizes() {
        const condition = this.$vuetify.breakpoint.width < 768;
        return {
          robotAnimation: condition ? 200 : 350,
          messengerIcons: condition ? 'fa-3x' : 'fa-5x',
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bg-wrapper {
    background-image: url('../../assets/images/welcome_background.svg');
    min-height: 550px;
    height: 100vh;
    background-position: center center;
    background-attachment: scroll;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .messengers-shadow-card {
    box-shadow: 0 0 10px 8px #ddd8e599!important;
  }

  .messenger {
    &-icon, &-title {
      &.telegram {
        color: #0088cc!important;
      }

      &.viber {
        color: #665CAC!important;
      }

      &.facebook-messenger {
        background: linear-gradient(to bottom, #00b2ff, #006aff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }

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
</style>
