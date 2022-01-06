<template>
  <div tag="section" class="authenticate-page fill-height d-flex align-items-center-justify-content-center">
    <router-view />
    <locale-change-form />
  </div>
</template>

<script>
const LocaleChangeForm = () => import('@/components/core/LocaleChangeForm');
  export default {
    name: 'AuthenticatePage',
    components: {
      LocaleChangeForm
    }
  }
</script>

<style lang="scss" scoped>

</style>
