<script>
  export default {
    name: 'FormValidationMixin',
    data() {
      return {
        isLoadingButton: false,
        validateRules: {
          email: [
            v => !!v || this.$vuetify.lang.t('$vuetify.auth.validate.required'),
            v => /.+@.+\..+/.test(v) || this.$vuetify.lang.t('$vuetify.auth.validate.format.email'),
          ],
          secret: [
            v => !!v || this.$vuetify.lang.t('$vuetify.auth.validate.required'),
            v => /^[a-zA-Z0-9]{6,14}$/.test(v) || this.$vuetify.lang.t('$vuetify.auth.validate.format.secret')
          ],
          confirmSecret: [
            v => !!v || this.$vuetify.lang.t('$vuetify.auth.validate.required'),
            v => v === this.passwordConfirmationRule || this.$vuetify.lang.t('$vuetify.auth.validate.format.confirmSecret')
          ],
          firstName: [
            v => !!v || this.$vuetify.lang.t('$vuetify.auth.validate.required'),
            v => (v && /^[a-zA-Z]{3,15}$/.test(v)) || this.$vuetify.lang.t('$vuetify.auth.validate.format.names'),
          ],
          lastName: [
            v => !!v || this.$vuetify.lang.t('$vuetify.auth.validate.required'),
            v => (v && /^[a-zA-Z]{3,15}$/.test(v)) || this.$vuetify.lang.t('$vuetify.auth.validate.format.names'),
          ],
        }
      }
    },
    computed: {
      passwordConfirmationRule() {
        return this.form.secret;
      }
    },
    methods: {
      triggerLoading() {
        this.isLoadingButton = !this.isLoadingButton;
      },
    }
  }
</script>

<style lang="scss" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
