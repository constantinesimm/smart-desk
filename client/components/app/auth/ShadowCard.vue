<template>
  <v-card class="shadow-card">

    <!-- Logotype -->
    <v-card-title class="d-flex align-center justify-center py-7">
      <v-tooltip top transition="scale-transition">
        <template #activator="{ on, attrs }">
          <a :href="landingUrl">
            <animated-logotypes :height="125" :width="125" />
          </a>
        </template>
      </v-tooltip>
    </v-card-title>

    <!-- Title -->
    <v-card-text>
      <p class="text-2xl font-weight-semibold text--primary mb-2">
        {{ $vuetify.lang.t(`${ translatePath }.title`) }} 👋🏻
      </p>
      <p class="mb-2">
        {{ $vuetify.lang.t(`${ translatePath }.subtitle`) }}
      </p>
    </v-card-text>

    <!-- Form -->
    <slot />

    <!-- create new account  -->
    <v-card-text
      v-if="isLoginForm"
      class="d-flex align-center justify-center flex-wrap mt-2"
    >
      <span class="me-2">
        {{ $vuetify.lang.t('$vuetify.auth.login.registerQuestion') }}
      </span>
      <router-link :to="{ name:'RegisterPage' }">
        {{ $vuetify.lang.t('$vuetify.auth.login.registerLink') }}
      </router-link>
    </v-card-text>

    <v-card-text
      v-if="isRegisterForm || isPasswordRecovery"
      class="d-flex align-center justify-center flex-wrap mt-2"
    >
      <span class="me-2">
        {{ $vuetify.lang.t('$vuetify.auth.register.loginQuestion') }}
      </span>
      <router-link :to="{ name:'LoginPage' }">
        {{ $vuetify.lang.t('$vuetify.auth.register.loginLink') }}
      </router-link>
    </v-card-text>

    <!-- Social Networks logib btns -->
    <v-row
      v-if="isSocialButtonsVisible"
      class="d-flex justify-center"
    >
      <v-card-text class="d-flex align-center mt-2">
        <v-divider></v-divider>
        <span class="mx-5">{{ $vuetify.lang.t('$vuetify.auth.socialDelimiter') }}</span>
        <v-divider></v-divider>
      </v-card-text>

      <!-- social links -->
      <social-login-buttons v-if="isSocialButtonsVisible" />
    </v-row>
  </v-card>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  const AnimatedLogotypes = () => import('@/components/core/AnimatedLogotypes');
  const SocialLoginButtons = () => import('@/components/app/auth/SocialLoginButtons');

  export default {
    name: 'ShadowCard',
    mixins: [IconsMixin],
    props: {
      formType: {
        type: String,
        enum: ['login', 'register', 'passwordReset', 'passwordChange', 'registerComplete'],
        required: true
      }
    },
    components: {
      AnimatedLogotypes,
      SocialLoginButtons
    },
    data() {
      return {}
    },
    computed: {
      landingUrl() {
        return process.env.VUE_APP_URL.replace('app.', '')
      },
      translatePath() {
        return `$vuetify.auth.${ this.formType }`
      },
      isLoginForm() {
        return this.formType === 'login'
      },
      isRegisterForm() {
        return this.formType === 'register'
      },
      isPasswordRecovery() {
        return this.formType === 'passwordReset'
      },
      isSocialButtonsVisible() {
        return this.isLoginForm || this.isRegisterForm || this.isPasswordRecovery;
      },
    }
  }
</script>
