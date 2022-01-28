<template>
  <v-container fluid class="landing-page">
    <welcome-block />

    <descriptions-block />

    <solutions-block />

    <prices-block />
  </v-container>
</template>

<script>
const WelcomeBlock = () => import('@/components/landing/WelcomeBlock');
const DescriptionsBlock = () => import('@/components/landing/DescriptionBlock');
const SolutionsBlock = () => import('@/components/landing/SolutionsBlock');
const PricesBlock = () => import('@/components/landing/PricesBlock');

export default {
  name: 'LandingPage',
  components: {
    WelcomeBlock,
    DescriptionsBlock,
    SolutionsBlock,
    PricesBlock,
  }
}
</script>

<style lang="scss" scoped>
  .landing-page {
    padding: unset;
  }
</style>
