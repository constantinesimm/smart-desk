<template>
  <div id="smartDesk-app">
    <component :is="resolveLayout">
      <transition
        name="fade"
        mode="out-in"
        @beforeLeave="beforeLeave"
        @enter="enter"
        @afterEnter="afterEnter"
      >

        <router-view/>

      </transition>
    </component>

    <terms-and-privacy-policy-dialog v-if="isTermsAndPolicyDialogVisible" :show-tab="isTermsAndPolicyDialogTab" />
  </div>
</template>

<script>
const IndexLayout = () => import('@/layouts/IndexLayout');
const BlankLayout = () => import('@/layouts/BlankLayout');
const ContentLayout = () => import('@/layouts/ContentLayout');
const TermsAndPrivacyPolicyDialog = () => import('@/components/core/TermsAndPrivacyPolicyDialog');

export default {
  name: 'App',
  components: {
    IndexLayout,
    BlankLayout,
    ContentLayout,
    TermsAndPrivacyPolicyDialog
  },
  data() {
    return {
      isTermsAndPolicyDialogVisible: false,
      isTermsAndPolicyDialogTab: null
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (to.query.lang !== undefined) {
          this.$store.dispatch('app/changeLocale', to.query.lang);
          this.$vuetify.lang.current = to.query.lang;
          this.$router.replace(to.path);
        }
        if (to.matched.some(record => record.meta.pageTitle)) {
          document.title = this.$vuetify.lang.t(to.meta.pageTitle);
        }
      }
    }
  },
  computed: {
    resolveLayout() {
      return this.$route.meta.layout !== undefined ? `${ this.$route.meta.layout }-layout` : 'index-layout';
    },
  },
  created() {
    console.log('this.$route', this.$route)
    console.log('this.router', this.$router)
    this.$eventHub.$on('session-expired-tooltip', this.handleExpiredSession);
    this.$eventHub.$on('handle-terms-and-privacy', this.handlePrivacyDialogVisible);
  },
  beforeDestroy() {
    this.$eventHub.$off('session-expired-tooltip');
    this.$eventHub.$off('handle-terms-and-privacy')
  },
  methods: {
    handleExpiredSession() {
      this.$showError(this.$vuetify.lang.t('$vuetify.sessionExpired'))
      this.$store.commit('user/SET_LOGOUT');

      setTimeout(() => {
        this.$router.push({ name: 'LoginPage' });
      }, 2000);
    },
    handlePrivacyDialogVisible(tab) {
      if (tab) this.isTermsAndPolicyDialogTab = Number(tab);
      this.isTermsAndPolicyDialogVisible = !this.isTermsAndPolicyDialogVisible;

      if (!this.isTermsAndPolicyDialogVisible) this.isTermsAndPolicyDialogTab = null;
    },
    beforeLeave(element) {
      this.prevHeight = getComputedStyle(element).height;
    },
    enter(element) {
      const { height } = getComputedStyle(element);

      element.style.height = this.prevHeight;

      setTimeout(() => {
        element.style.height = height;
      });
    },
    afterEnter(element) {
      element.style.height = 'auto';
    },
  }
}
</script>

<style lang="scss">
#smartDesk-app {
  background: #f4f5fa;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
