<template>
  <div class="auth-wrapper auth-form">
    <div class="auth-inner">
      <v-card class="auth-card">
        <!-- logo -->
        <v-card-title class="d-flex align-center justify-center py-7">
          <router-link
            to="/"
            class="d-flex align-center"
          >
            <v-img
              :src="require('@/assets/logotype.png')"
              max-height="45px"
              max-width="45px"
              alt="logo"
              contain
              class="me-3 "
            ></v-img>

            <h2 class="text-2xl font-weight-semibold">
              Smart Bot
            </h2>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            {{ $vuetify.lang.t('$vuetify.auth.login.title') }} 👋🏻
          </p>
          <p class="mb-2">
            {{ $vuetify.lang.t('$vuetify.auth.login.subtitle') }}
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form
            ref="loginForm"
            v-model="formValid"
            lazy-validation
          >
            <v-text-field
              v-model="form.email"
              :rules="validateRules.email"
              :label="$vuetify.lang.t('$vuetify.auth.emailLabel')"
              :prepend-inner-icon="icons.mdiEmailOutline"
              placeholder="john@example.com"
              hide-details="auto"
              autocomplete="off"
              class="mb-3"
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="form.secret"
              :rules="validateRules.secret"
              :type="isPasswordVisible ? 'text' : 'password'"
              :label="$vuetify.lang.t('$vuetify.auth.secretLabel')"
              :prepend-inner-icon="icons.mdiLockOutline"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              @click:append="isPasswordVisible = !isPasswordVisible"
              placeholder="············"
              hide-details="auto"
              autocomplete="off"
              outlined
              dense
            ></v-text-field>

            <div class="d-flex align-center justify-end flex-wrap">
              <!-- forgot link -->
              <router-link
                :to="{ name: 'PasswordRestorePage' }"
                class="mt-1"
              >
                {{ $vuetify.lang.t('$vuetify.auth.login.forgotPassLink') }}
              </router-link>
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
              :disabled="!formValid || isLoadingButton"
              :loading="isLoadingButton"
              @click="submitLogin"
            >
              {{ $vuetify.lang.t('$vuetify.auth.login.formButton') }}
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            {{ $vuetify.lang.t('$vuetify.auth.login.registerQuestion') }}
          </span>
          <router-link :to="{ name:'RegisterPage' }">
            {{ $vuetify.lang.t('$vuetify.auth.login.registerLink') }}
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">{{ $vuetify.lang.t('$vuetify.auth.socialDelimiter') }}</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social links -->
        <v-card-actions class="d-flex justify-center">
          <v-btn
            v-for="link in socialLink"
            :key="link.icon"
            icon
            x-large
            class="ms-1"
          >
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark : link.color" x-large>
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="173"
      :src="require(`@/assets/images/misc/mask-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
    >

    <!-- tree -->
    <v-img
      class="auth-tree"
      width="247"
      height="185"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <!-- tree  -->
    <v-img
      class="auth-tree-3"
      width="377"
      height="289"
      src="@/assets/images/misc/tree-3.png"
    ></v-img>
  </div>
</template>

<script>
import IconsMixin from '@/mixins/IconsMixin';
import FormValidationMixin from '@/mixins/FormValidationMixin';
const PasswordRecoveryForm = () => import('@/components/app/auth/PasswordRecoveryForm');

export default {
  name: 'BoxedLoginForm',
  mixins: [IconsMixin, FormValidationMixin],
  components: {
    PasswordRecoveryForm
  },
  data() {
    return {
      form: {
        email: '',
        secret: ''
      },
      formValid: false,
      passwordRecoveryIsVisible: false,
      isPasswordVisible: false,
    }
  },
  methods: {
    handleCloseRecoveryDialog(val) {
      this.passwordRecoveryIsVisible = val;
    },
    submitLogin() {
      this.triggerLoading();

      this.$store
        .dispatch('user/localLogin', this.form)
        .then(({ message }) => this.$showSuccess(message))
        .catch(error => this.$showError(error))
        .finally(() => this.triggerLoading());
    }
  }
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
