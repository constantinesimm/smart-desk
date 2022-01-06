<template>
  <div id="smartBot-app">
    <component
      :is="resolveLayout"
    >
      <router-view />
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
  mounted() {
    console.log('this.resolveLayout', this.resolveLayout)
  },
}
</script>

<style lang="scss">
  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
