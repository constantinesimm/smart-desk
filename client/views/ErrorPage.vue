<template>
  <div id="misc">
    <img
      class="misc-mask"
      height="226"
      :src="require(`@/assets/images/misc/misc-mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <v-img
      class="misc-tree"
      src="@/assets/images/misc/tree-4.png"
    ></v-img>

    <div class="page-title text-center px-5">
      <h2 class="text-2xl font-weight-semibold text--primary d-flex align-center justify-center">
        <span class="me-2">
          {{ $vuetify.lang.t('$vuetify.error.title') }}
        </span>
        <v-icon color="warning">
          {{ icons.mdiAlert }}
        </v-icon>
      </h2>
      <p class="text-sm">
        {{ $vuetify.lang.t('$vuetify.error.subtitle') }}
      </p>

      <div class="misc-character d-flex justify-center">
        <v-img
          max-width="700"
          src="@/assets/images/3d-characters/error.png"
        ></v-img>
      </div>

      <v-btn
        color="primary"
        to="/"
        class="mb-4"
      >
        {{ $vuetify.lang.t('$vuetify.error.btnText') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
import IconsMixin from '@/mixins/IconsMixin';

export default {
  name: 'ErrorPage',
  mixins: [IconsMixin],
  data() {
    return {}
  },
}
</script>

<style lang="scss">
@import '~@/plugins/vuetify/default-preset/preset/misc.scss';
</style>
