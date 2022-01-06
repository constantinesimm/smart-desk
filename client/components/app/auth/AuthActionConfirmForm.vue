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
            {{ $vuetify.lang.t(`$vuetify.auth.${ content }.title`)  }} 👋🏻
          </p>
          <p class="mb-2" v-if="!showLoaderProgress">
            {{ $vuetify.lang.t(`$vuetify.auth.${ content }.subtitle`) }}
          </p>
        </v-card-text>

        <v-card-text
            v-if="showLoaderProgress"
            class="d-flex align-center justify-center flex-wrap mt-2"
          >
            {{ $vuetify.lang.t(`$vuetify.auth.${ content }.loaderTitle`) }}
          <v-progress-linear
            indeterminate
            color="primary"
            class="mb-0"
          ></v-progress-linear>

        </v-card-text>

        <v-card-text v-else>
          <v-form
            ref="authActionForm"
            v-model="formValid"
            lazy-validation
          >
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
              class="mb-3"
              required
              outlined
              dense
            ></v-text-field>

            <v-text-field
              v-model="form.confirmSecret"
              :rules="validateRules.confirmSecret"
              :type="isPasswordVisible ? 'text' : 'password'"
              :label="$vuetify.lang.t('$vuetify.auth.confirmSecretLabel')"
              :prepend-inner-icon="icons.mdiLockOutline"
              :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
              @click:append="isPasswordVisible = !isPasswordVisible"
              placeholder="············"
              hide-details="auto"
              autocomplete="off"
              class="mb-3"
              required
              outlined
              dense
            ></v-text-field>

            <v-btn
              block
              color="primary"
              class="mt-6"
              :disabled="disableSubmitForm"
              :loading="isLoadingButton"
              @click="submitFormData"
            >
              {{ $vuetify.lang.t(`$vuetify.auth.${ content }.submitBtn`) }}
            </v-btn>
          </v-form>
        </v-card-text>

      </v-card>
    </div>
  </div>
</template>

<script>
import IconsMixin from '@/mixins/IconsMixin';
import FormValidationMixin from '@/mixins/FormValidationMixin';

export default {
  name: 'AuthActionConfirmForm',
  mixins: [IconsMixin, FormValidationMixin],
  data() {
    return {
      formValid: false,
      form: {
        userId: '',
        email: '',
        secret: '',
        confirmSecret: ''
      },
      isLoadingButton: false,
      isPasswordVisible: false,
      contentType: {
        'PasswordChangePage': 'passwordChange',
        'RegisterConfirmPage': 'registerComplete'
      },
      allowedPages: ['PasswordChangePage', 'RegisterConfirmPage'],
      showLoaderProgress: false
    }
  },
  computed: {
    content() {
      const { name } = this.$route;

      return this.contentType[name];
    },
    disableSubmitForm() {
      const checkForm = Object.keys(this.form).some(key => !this.form[key].length);

      return !this.formValid || this.isLoadingButton || checkForm;
    }
  },
  mounted() {
    const { name, query } = this.$route;

    if (!this.allowedPages.includes(name) || !query.token) {
      return this.handleLogoutAndRedirect('Forbidden');
    }

    this.showLoaderProgress = true;

    this.validateServiceToken();
  },
  methods: {
    handleLogoutAndRedirect(msg) {
      this.$showError(msg);
      this.$store.commit('user/SET_LOGOUT');
      this.$router.push({ name: 'LoginPage' });
    },
    validateServiceToken() {
      const token = this.$route.query['token'];

      this.$store
        .dispatch('user/verificateToken', token)
        .then(response => {
          this.form.email = response.email;
          this.form.userId = response.userId;

          this.$vuetify.lang.current = response.language;
          this.showLoaderProgress = false;
        })
        .catch(error => this.handleLogoutAndRedirect(error))
    },
    submitFormData() {
      const request = this.content === 'passwordChange' ? 'user/localPasswordUpdate' : 'user/localRegisterConfirm';

      this.isLoadingButton = true;

      this.$store
        .dispatch(request, this.form)
        .then(({message}) => {
          this.$showSuccess(message);
          this.$router.push({ name: 'DashboardPage' });
        })
        .catch(error => this.$showError(error))
        .finally(() => this.isLoadingButton = false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/plugins/vuetify/default-preset/preset/pages/auth.scss';

.loading-progress {
  box-shadow: 0 2px 14px 3px rgb(94 86 105 / 53%)!important;
}
</style>
