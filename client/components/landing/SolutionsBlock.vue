<template>
  <div class="block-wrapper">
    <v-container>
      <v-row class="mb-10">
        <v-col>
          <h2 class="pb-5">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.title') }}
          </h2>
          <div class="subtitle">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.subtitle') }}
          </div>
        </v-col>
      </v-row>

      <v-divider inset />

      <v-row justify="center" class="mt-5 mb-5">
        <v-col cols="4">
          <img :src="landing.solutionsVisualRedactor" width="300px" />
        </v-col>

        <v-col cols="4">
          <h5 class="title">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.visualRedactor.title') }}
          </h5>
          <div class="text">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.visualRedactor.text') }}
          </div>
        </v-col>
      </v-row>

      <v-divider inset />

      <v-row justify="center" class="mt-5 mb-5">
        <v-col cols="4" align-self="center">
          <h5 class="title">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.chatCommunicate.title') }}
          </h5>
          <div class="text" v-html="$vuetify.lang.t('$vuetify.landing.solutionsBlock.chatCommunicate.text')" />
        </v-col>

        <v-col cols="4">
          <img :src="landing.solutionsChatCommunicate" width="300px" />
        </v-col>
      </v-row>

      <v-divider inset />

      <v-row justify="center" class="mt-5 mb-5">
        <v-col cols="4">
          <img :src="landing.solutionsStatistics" width="300px" />
        </v-col>

        <v-col cols="4">
          <h5 class="title">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.gatherStatistics.title') }}
          </h5>
          <div class="text">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.gatherStatistics.text') }}
          </div>
        </v-col>
      </v-row>

      <v-divider inset />

      <v-row justify="center" align-content="center" class="mt-5">
        <v-col cols="4">
          <h5 class="title">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.segmentUsers.title') }}
          </h5>
          <div class="text">
            {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.segmentUsers.text') }}
          </div>
        </v-col>

        <v-col cols="4">
          <img src="https://d2s30hray1l0uq.cloudfront.net/frontend/Customer-Segmentation.jpg" width="300px" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';

  export default {
    name: 'SolutionsBlock',
    mixins: [IconsMixin]
  }
</script>

<style lang="scss" scoped>
  .block-wrapper {
    padding: 50px 0;
  }
  .title {
    font-size: 16px!important;
    font-weight: bold;
    text-align: left;
  }
  .text {
    font-size: 14px;
    text-align: left;
  }
</style>
