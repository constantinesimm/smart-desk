<template>
  <div class="auth-page_wrapper">
    <div class="auth-page_inner">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthenticatePage',
    created() {
      console.log('AuthenticatePage', this.$route);
    }
  }
</script>

<style lang="scss" scoped>
  .auth-page {
    &_wrapper {
      display: flex;
      min-height: calc(var(--vh, 1vh) * 100);
      width: 100%;
      flex-basis: 100%;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      padding: 1.5rem;

      a {
        text-decoration: unset;
      }
    }

    &_inner {
      width: 28rem;
      z-index: 1;

      .shadow-card {
        border-radius: 20px;
        box-shadow: 0 2px 14px 3px rgb(94 86 105 / 53%);
        padding: 0.9375rem 0.875rem;
      }
    }
  }
</style>
