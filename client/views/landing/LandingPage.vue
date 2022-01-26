<template>
  <v-container fluid>
    <welcome-block />

    <descriptions-block />

    <advantages-block />

    <solutions-block />

    <!--
    <prices-block />
    -->
  </v-container>
</template>

<script>
const LandingHeader = () => import('@/components/landing/core/LandingHeader');
const LandingFooter = () => import('@/components/landing/core/LandingFooter');
const WelcomeBlock = () => import('@/components/landing/WelcomeBlock');
const AdvantagesBlock = () => import('@/components/landing/AdvantagesBlock');
const DescriptionsBlock = () => import('@/components/landing/DescriptionBlock');
//const PricesBlock = () => import('@/components/landing/PricesBlock');
const SolutionsBlock = () => import('@/components/landing/SolutionsBlock');

export default {
  name: 'LandingPage',
  components: {
    LandingHeader,
    LandingFooter,
    WelcomeBlock,
    AdvantagesBlock,
    DescriptionsBlock,
    //PricesBlock,
    SolutionsBlock
  }
}
</script>

<style lang="scss" scoped>

</style>
