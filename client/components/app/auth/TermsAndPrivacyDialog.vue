<template>
  <v-dialog
    v-model="isDialogVisible"
    width="500"
  >
    <v-card>
      <v-card-title>
        Privacy Policy
      </v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="handleCloseDialog"
        >
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import IconsMixin from '@/mixins/IconsMixin';

export default {
  name: 'TermsAndPrivacyDialog',
  mixins: [IconsMixin],
  props: {
    handleDialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
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
      this.$emit('close-terms-dialog', false)
    }
  }
}
</script>
