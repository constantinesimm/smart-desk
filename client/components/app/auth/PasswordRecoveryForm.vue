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
            {{ $vuetify.lang.t('$vuetify.auth.passwordReset.title')  }} 👋🏻
          </p>
          <p class="mb-2">
            {{ $vuetify.lang.t('$vuetify.auth.passwordReset.subtitle') }}
          </p>
        </v-card-text>

        <!-- recovery form -->
        <v-card-text>
          <v-form
            ref="passwordRecoveryForm"
            class="pa-4 pb-7"
            v-model="formValid"
            lazy-validation
          >
            <v-text-field
              v-model="email"
              :label="$vuetify.lang.t('$vuetify.auth.emailLabel')"
              :prepend-inner-icon="icons.mdiEmailOutline"
              :rules="validateRules.email"
              placeholder="john@example.com"
              autocomplete="off"
              hide-details="auto"
              class="mb-3"
              required
              outlined
              dense
            ></v-text-field>

            <v-btn
              block
              :disabled="disableSubmit"
              :loading="isLoadingButton"
              color="success"
              class="white--text"
              @click="submitPassRecovery"
            >
              {{ $vuetify.lang.t('$vuetify.auth.passwordReset.submitBtn') }}
              <v-icon right dark>
                {{ icons.mdiMinusCircleOutline }}
              </v-icon>
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            {{ $vuetify.lang.t('$vuetify.auth.register.loginQuestion') }}
          </span>
          <router-link :to="{ name:'LoginPage' }">
            {{ $vuetify.lang.t('$vuetify.auth.register.loginLink') }}
          </router-link>
        </v-card-text>
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

export default {
  name: 'PasswordRecoveryForm',
  mixins: [IconsMixin, FormValidationMixin],
  data() {
    return {
      email: '',
      formValid: false
    }
  },
  computed: {
    disableSubmit() {
      return !this.formValid || this.isLoadingButton || !this.email.length
    }
  },
  methods: {
    submitPassRecovery() {
      this.triggerLoading();

      this.$store
        .dispatch('user/localPasswordReset', { email: this.email })
        .then(({ message }) => {
          this.$showSuccess(message);
          this.triggerLoading();
        })
        .catch(error => this.$showError(error));
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
