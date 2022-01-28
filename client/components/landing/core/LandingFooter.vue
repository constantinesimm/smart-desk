<template>
  <v-footer class="landing-footer">
    <v-row justify="center">
      <v-col cols="3" class="text-left footer-column">
        <h4 class="brand-title">SmartDesk</h4>
        <div>© {{ $vuetify.lang.t('$vuetify.landing.footer.copyright') }} {{ new Date().getFullYear() === 2022 ? new Date().getFullYear() : `2022 - ${ new Date().getFullYear() }` }}</div>
      </v-col>

      <v-col cols="2" class="footer-column">
        <div @click="handleTermsDialog('0')" class="cursor-pointer links terms-link">
          {{ $vuetify.lang.t('$vuetify.landing.footer.terms') }}
        </div>

        <div @click="handleTermsDialog('1')" class="cursor-pointer terms-link">
          {{ $vuetify.lang.t('$vuetify.landing.footer.privacyPolicy') }}
        </div>
      </v-col>

      <v-col cols="3" class="footer-column">
        <locale-switcher-menu view="full" :divider-visible="false" title-color="primary" />
        <a href="mailto:contact@smart-desk.io" class="text-decoration-none">
          <i class="fas fa-at fa-lg"></i>
          contact@smart-desk.io
        </a>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
  import LocaleSwitcherMenu from '@/components/core/LocaleSwitcherMenu';
  export default {
    name: 'LandingFooter',
    components: {
      LocaleSwitcherMenu
    },
    methods: {
      handleTermsDialog(val) {
        this.$eventHub.$emit('handle-terms-and-privacy', val);
      },
    }
  }
</script>

<style lang="scss" scoped>
  .landing-footer {
    height: 64px;
    box-shadow: rgb(94 86 105 / 28%) 0px -10px 14px 0px !important;

    .footer-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0 5px 0!important;

      .brand-title, .links {
        padding-bottom: 3px;
      }

      .terms-link {
        display: flex;
        justify-content: center;

        &:hover {
          color: #377fea;
        }
      }
    }
  }
</style>
