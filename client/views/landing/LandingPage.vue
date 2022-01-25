<template>
  <v-app>
    <landing-header style="position:fixed;top: 0; background: #0f4cb5"/>

    <v-main class="main-content">
      <welcome-block />

      <descriptions-block />

      <advantages-block />

      <solutions-block style="background: #f2f2f2"  />

      <prices-block />
    </v-main>

    <landing-footer />
  </v-app>
</template>

<script>
const LandingHeader = () => import('@/components/landing/core/LandingHeader');
const LandingFooter = () => import('@/components/landing/core/LandingFooter');
const WelcomeBlock = () => import('@/components/landing/WelcomeBlock');
const AdvantagesBlock = () => import('@/components/landing/AdvantagesBlock');
const DescriptionsBlock = () => import('@/components/landing/DescriptionBlock');
const PricesBlock = () => import('@/components/landing/PricesBlock');
const SolutionsBlock = () => import('@/components/landing/SolutionsBlock');

export default {
  name: 'LandingPage',
  components: {
    LandingHeader,
    LandingFooter,
    WelcomeBlock,
    AdvantagesBlock,
    DescriptionsBlock,
    PricesBlock,
    SolutionsBlock
  }
}
</script>

<style lang="scss" scoped>
  .main-content {
    padding: 0!important;
  }

  .fixed-top {
    position: fixed;
    top: 0;
  }
</style>
