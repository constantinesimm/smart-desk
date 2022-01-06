<template>
  <div id="smartBot-app">
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
  </div>
</template>

<script>
const LayoutBlank = () => import('@/layouts/Blank.vue')
const LayoutContent = () => import('@/layouts/Content.vue')

export default {
  name: 'App',
  components: { LayoutBlank, LayoutContent },
  data() {
    return {}
  },
  computed: {
    resolveLayout() {
      if (this.$route.name === null) return null
      if (this.$route.meta.layout === 'blank') return 'layout-blank'

      return 'layout-content'
    },
  },
  created() {
    this.$eventHub.$on('session-expired-tooltip', this.handleExpiredSession)
  },
  beforeDestroy() {
    this.$eventHub.$off('session-expired-tooltip');
  },
  methods: {
    handleExpiredSession() {
      this.$showError(this.$vuetify.lang.t('$vuetify.sessionExpired'))
      this.$store.commit('user/SET_LOGOUT');

      setTimeout(() => {
        this.$router.push({ name: 'LoginPage' });
      }, 2000);
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
#smartBot-app {
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
