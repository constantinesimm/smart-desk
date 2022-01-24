<template>
  <shadow-card form-type="register">
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
            <template v-slot:label>
              <a @click="handleTermsDialog" class="d-flex align-end justify-center" style="font-size: 12px">
                {{ $vuetify.lang.t('$vuetify.auth.register.terms') }}
              </a>
            </template>
          </v-checkbox>
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
  </shadow-card>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  import FormValidationMixin from '@/mixins/FormValidationMixin';
  const ShadowCard = () => import('@/components/app/auth/ShadowCard');

  export default {
    name: 'RegisterForm',
    mixins: [IconsMixin, FormValidationMixin],
    components: {
      ShadowCard
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
      handleTermsDialog(val) {
        this.$eventHub.$emit('handle-terms-and-privacy');
      },
      submitRegister() {
        this.triggerLoading();

        Object.assign(this.form, { language: this.$vuetify.lang.current });

        this.$store
          .dispatch('user/localRegister', this.form)
          .then(({ message }) => this.$showSuccess(message))
          .catch(error => this.$showError(error))
          .finally(() => {
            this.triggerLoading();
            this.$router.push({ name: 'LoginPage' });
          });
      }
    }
  }
</script>
