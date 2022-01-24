<template>
  <shadow-card form-type="passwordReset">
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
            {{ icons.mdiCheckOutline }}
          </v-icon>
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
    name: 'PasswordRecoveryForm',
    mixins: [IconsMixin, FormValidationMixin],
    components: {
      ShadowCard
    },
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

            this.$router.push({ name: 'LoginPage' });
          })
          .catch(error => this.$showError(error))
          .finally(() => this.triggerLoading());
      }
    }
  }
</script>
