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
              required
              outlined
              autocomplete="off"
              :label="$vuetify.lang.t('$vuetify.auth.emailLabel')"
              placeholder="john@example.com"
              :prepend-inner-icon="icons.mdiEmailOutline"
              hide-details="auto"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="form.secret"
              :rules="validateRules.secret"
              required
              outlined
              autocomplete="off"
              :type="isPasswordVisible ? 'text' : 'password'"
              :label="$vuetify.lang.t('$vuetify.auth.secretLabel')"
              placeholder="············"
              :prepend-inner-icon="icons.mdiLockOutline"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              hide-details="auto"
              @click:append="isPasswordVisible = !isPasswordVisible"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="form.firstName"
              :rules="validateRules.firstName"
              required
              outlined
              :label="$vuetify.lang.t('$vuetify.auth.namesLabel.first')"
              placeholder="John"
              :prepend-inner-icon="icons.mdiAccountOutline"
              hide-details="auto"
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="form.lastName"
              :rules="validateRules.lastName"
              required
              outlined
              :label="$vuetify.lang.t('$vuetify.auth.namesLabel.last')"
              hide-details="auto"
              :prepend-inner-icon="icons.mdiAccountOutline"
              placeholder="Doe"
              class="mb-3"
            ></v-text-field>

            <div class="d-flex align-items-center justify-content-center">
              <v-checkbox
                hide-details
                class="mt-1"
                :rules="[v => !!v || $vuetify.lang.t('$vuetify.auth.validate.termsAndPolicy')]"
                required
                v-model="form.agreeTermsAndPrivacy"
              >
                <template #label>
                  <div class="d-flex align-center flex-wrap">
                    <span class="me-2">{{ $vuetify.lang.t('$vuetify.auth.register.terms.agree') }}</span>
                  </div>
                </template>
              </v-checkbox>
              <a @click="termsDialogIsVisible = true" class="d-flex align-end justify-center" style="font-size: 16px">
                {{ $vuetify.lang.t('$vuetify.auth.register.terms.text') }}
              </a>
            </div>

            <v-btn
              block
              color="primary"
              class="mt-6"
              :disabled="!formValid && isLoadingButton"
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
            class="ms-1"
          >
            <v-icon :color="$vuetify.theme.dark ? link.colorInDark:link.color">
              {{ link.icon }}
            </v-icon>
          </v-btn>
        </v-card-actions>
        <terms-and-privacy-dialog :handle-dialog-visible="termsDialogIsVisible" v-on:close-terms-dialog="handleCloseTermsDialog" />
      </v-card>

    </div>

    <!-- background triangle shape  -->
    <img
      class="auth-mask-bg"
      height="190"
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
        firstName: '',
        lastName: '',
        email: '',
        secret: '',
        agreeTermsAndPrivacy: false
      },
      formValid: false,
      isPasswordVisible: false,
      termsDialogIsVisible: false
    }
  },
  methods: {
    handleCloseTermsDialog(val) {
      this.termsDialogIsVisible = val;
    },
    submitRegister() {
      this.triggerLoading();
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';
</style>
