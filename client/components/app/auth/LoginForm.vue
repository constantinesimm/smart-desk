<template>
  <shadow-card form-type="login">
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
  </shadow-card>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  import FormValidationMixin from '@/mixins/FormValidationMixin';
  const ShadowCard = () => import('@/components/app/auth/ShadowCard');

  export default {
    name: 'LoginForm',
    mixins: [IconsMixin, FormValidationMixin],
    components: {
      ShadowCard
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
          .then(({ message }) => {
            this.$showSuccess(message);

            this.$router.push({ name: 'DashboardPage' });
          })
          .catch(error => this.$showError(error))
          .finally(() => this.triggerLoading());
      }
    }
  }
</script>
