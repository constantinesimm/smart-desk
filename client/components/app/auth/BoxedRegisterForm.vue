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
              :src="require('@/assets/animation.gif')"
              height="150px"
              width="150px"
              alt="logo"
            ></v-img>
          </router-link>
        </v-card-title>

        <!-- title -->
        <v-card-text>
          <p class="text-2xl font-weight-semibold text--primary mb-2">
            {{ $vuetify.lang.t('$vuetify.auth.register.title') }} 🚀
          </p>
          <p class="mb-2">
            {{ $vuetify.lang.t('$vuetify.auth.register.subtitle') }}
          </p>
        </v-card-text>

        <!-- login form -->
        <v-card-text>
          <v-form
            ref="registerForm"
            v-model="formValid"
            lazy-validation
          >
            <v-text-field
              v-model="form.email"
              :rules="validateRules.email"
              :label="$vuetify.lang.t('$vuetify.auth.emailLabel')"
              :prepend-inner-icon="icons.mdiEmailOutline"
              placeholder="john@example.com"
              autocomplete="off"
              hide-details="auto"
              class="mb-3"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="form.firstName"
              :rules="validateRules.firstName"
              :prepend-inner-icon="icons.mdiAccountOutline"
              :label="$vuetify.lang.t('$vuetify.auth.namesLabel.first')"
              hide-details="auto"
              placeholder="John"
              class="mb-3"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="form.lastName"
              :rules="validateRules.lastName"
              :prepend-inner-icon="icons.mdiAccountOutline"
              :label="$vuetify.lang.t('$vuetify.auth.namesLabel.last')"
              hide-details="auto"
              placeholder="Doe"
              class="mb-3"
              required
              outlined
              dense
            ></v-text-field>

            <div class="d-flex align-items-center justify-content-center">
              <v-checkbox
                :rules="[v => !!v || $vuetify.lang.t('$vuetify.auth.validate.termsAndPolicy')]"
                v-model="agreeTermsAndPrivacy"
                hide-details="auto"
                class="mt-1"
                required
              >
              </v-checkbox>
              <a @click="termsDialogIsVisible = true" class="d-flex align-end justify-center" style="font-size: 12px">
                {{ $vuetify.lang.t('$vuetify.auth.register.terms') }}
              </a>
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
              :disabled="!formValid || isLoadingButton || !agreeTermsAndPrivacy"
              :loading="isLoadingButton"
              @click="submitRegister"
            >
              {{ $vuetify.lang.t('$vuetify.auth.register.formButton') }}
            </v-btn>
          </v-form>
        </v-card-text>

        <!-- create new account  -->
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            {{ $vuetify.lang.t('$vuetify.auth.register.loginQuestion') }}
          </span>
          <router-link :to="{ name:'LoginPage' }">
            {{ $vuetify.lang.t('$vuetify.auth.register.loginLink') }}
          </router-link>
        </v-card-text>

        <!-- divider -->
        <v-card-text class="d-flex align-center mt-2">
          <v-divider></v-divider>
          <span class="mx-5">{{ $vuetify.lang.t('$vuetify.auth.socialDelimiter') }}</span>
          <v-divider></v-divider>
        </v-card-text>

        <!-- social link -->
        <v-card-actions class="d-flex justify-center">
          <v-btn
            v-for="link in socialLink"
            :key="link.icon"
            icon
            x-large
            class="ms-1"
          >
            <v-icon x-large :color="$vuetify.theme.dark ? link.colorInDark:link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
        <terms-and-privacy-dialog :handle-dialog-visible="termsDialogIsVisible" v-on:close-terms-dialog="handleCloseTermsDialog" />
      </v-card>

    </div>
  </div>
</template>

<script>
import IconsMixin from '@/mixins/IconsMixin';
import FormValidationMixin from '@/mixins/FormValidationMixin';

const TermsAndPrivacyDialog = () => import('@/components/app/auth/TermsAndPrivacyDialog')

export default {
  name: 'BoxedRegisterForm',
  mixins: [IconsMixin, FormValidationMixin],
  components: {
    TermsAndPrivacyDialog
  },
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
      },
      agreeTermsAndPrivacy: false,
      formValid: false,
      termsDialogIsVisible: false
    }
  },
  methods: {
    handleCloseTermsDialog(val) {
      this.termsDialogIsVisible = val;
    },
    submitRegister() {
      this.triggerLoading();

      Object.assign(this.form, { language: this.$vuetify.lang.current });

      this.$store
        .dispatch('user/localRegister', this.form)
        .then(({ message }) => this.$showSuccess(message))
        .catch(error => this.$showError(error))
        .finally(() => this.triggerLoading());
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
