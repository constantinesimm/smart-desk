<template>
  <v-dialog
    v-model="isDialogVisible"
    persistent
    max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $vuetify.lang.t('$vuetify.auth.passwordReset.title')  }}</span>
      </v-card-title>
      <v-card-text>
        {{ $vuetify.lang.t('$vuetify.auth.passwordReset.subtitle') }}
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-form
                ref="passwordRecoveryForm"
                v-model="formValid"
                lazy-validation
              >
                <v-text-field
                  v-model="email"
                  autocomplete="off"
                  outlined
                  :label="$vuetify.lang.t('$vuetify.auth.emailLabel')"
                  :rules="validateRules.email"
                  placeholder="john@example.com"
                  :prepend-inner-icon="icons.mdiEmailOutline"
                  hide-details="auto"
                  class="mb-3"
                ></v-text-field>
              </v-form>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          outlined
          :disabled="isLoadingButton"
          @click="handleCloseDialog"
        >
          {{ $vuetify.lang.t('$vuetify.auth.passwordReset.cancelBtn') }}
        </v-btn>
        <v-btn
          color="success"
          :disabled="!formValid && isLoadingButton"
          :loading="isLoadingButton"
          @click="submitPassRecovery"
        >
          {{ $vuetify.lang.t('$vuetify.auth.passwordReset.submitBtn') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import IconsMixin from '@/mixins/IconsMixin';
import FormValidationMixin from '@/mixins/FormValidationMixin';

export default {
  name: 'PasswordRecoveryForm',
  mixins: [IconsMixin, FormValidationMixin],
  props: {
    handleDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      email: '',
      formValid: false,
      isDialogVisible: false
    }
  },
  watch: {
    'handleDialogVisible'(newVal, oldVal) {
      if (!!newVal && newVal !== oldVal) this.isDialogVisible = true;
    }
  },
  methods: {
    handleCloseDialog() {
      this.isDialogVisible = false;
      this.$emit('close-recovery-dialog', false)
    },
    submitPassRecovery() {
      this.triggerLoading();
    }
  }
}
</script>
