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
    <terms-and-privacy-policy-dialog v-if="isTermsAndPolicyDialogVisible"/>
  </div>
</template>

<script>
const LayoutBlank = () => import('@/layouts/Blank.vue')
const LayoutContent = () => import('@/layouts/Content.vue')
const LayoutLanding = () => import('@/layouts/Landing.vue')
const TermsAndPrivacyPolicyDialog = () => import('@/components/core/TermsAndPrivacyPolicyDialog');

export default {
  name: 'App',
  components: {
    LayoutBlank,
    LayoutContent,
    LayoutLanding,
    TermsAndPrivacyPolicyDialog
  },
  data() {
    return {
      isTermsAndPolicyDialogVisible: false
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        if (to.matched.some(record => record.meta.pageTitle)) {
          document.title = this.$vuetify.lang.t(to.meta.pageTitle);
        }
      }
    }
  },
  computed: {
    resolveLayout() {
      if (this.$route.name === null) return null
      if (this.$route.meta.layout === 'blank') return 'layout-blank'
      if (this.$route.meta.layout === 'landing') return 'layout-landing'

      return 'layout-content'
    },
  },
  created() {
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
    handlePrivacyDialogVisible() {
      this.isTermsAndPolicyDialogVisible = !this.isTermsAndPolicyDialogVisible;
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
