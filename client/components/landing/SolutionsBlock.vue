<template>
  <v-container id="solutions">
    <v-card class="px-5 py-10" elevation="0">
      <v-card-title class="justify-center text-h5 font-weight-bold">
        {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.title') }}
      </v-card-title>

      <v-card-subtitle>
        {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.subtitle') }}
      </v-card-subtitle>

      <v-divider class="mt-10" />

      <v-card-text class="my-5">
        <v-row justify="center">
          <v-col md="5" cols="10" class="order-last order-md-first">
            <img :src="landing.solutionsVisualRedactor" width="300px" />
          </v-col>
          <v-col md="5" cols="10">
            <h5 class="title">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.visualRedactor.title') }}
            </h5>
            <div class="text">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.visualRedactor.text') }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />

      <v-card-text class="my-5">
        <v-row justify="center">
          <v-col md="5" cols="10">
            <h5 class="title">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.chatCommunicate.title') }}
            </h5>
            <div class="text" v-html="$vuetify.lang.t('$vuetify.landing.solutionsBlock.chatCommunicate.text')"></div>
          </v-col>

          <v-col md="5" cols="10">
            <img :src="landing.solutionsChatCommunicate" width="300px" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />

      <v-card-text class="my-5">
        <v-row justify="center">
          <v-col md="5" cols="10" class="order-last order-md-first">
            <img :src="landing.solutionsStatistics" width="300px" />
          </v-col>
          <v-col md="5" cols="10">
            <h5 class="title">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.gatherStatistics.title') }}
            </h5>
            <div class="text">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.gatherStatistics.text') }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />

      <v-card-text class="my-5">
        <v-row justify="center">
          <v-col md="5" cols="10">
            <h5 class="title">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.segmentUsers.title') }}
            </h5>
            <div class="text">
              {{ $vuetify.lang.t('$vuetify.landing.solutionsBlock.segmentUsers.text') }}
            </div>
          </v-col>

          <v-col md="5" cols="10">
            <img src="https://d2s30hray1l0uq.cloudfront.net/frontend/Customer-Segmentation.jpg" width="300px" />
          </v-col>
        </v-row>
      </v-card-text>

    </v-card>
  </v-container>
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
  .text-h5 {
    font-family: "Ubuntu", sans-serif !important;
    font-size: 1.5em;
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
