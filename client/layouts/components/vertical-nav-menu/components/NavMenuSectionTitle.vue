<template>
  <v-subheader>
    <span
      class="title-wrapper"
    >
      <span>{{ title }}</span>
    </span>
  </v-subheader>
</template>

<script>
export default {
  name: 'NavMenuSectionTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@include theme(v-subheader) using ($material) {
  white-space: nowrap;
  position: relative;

  .v-icon {
    color: map-deep-get($material, 'dividers');
  }

  .title-wrapper {
    width: 100%;
    position: absolute;
    left: 0;
    border-bottom: 1px solid map-deep-get($material, 'dividers');
    line-height: 0.1em;
  }

  .title-wrapper span {
    background: map-deep-get($material, 'background');
    padding: 0 10px;
    font-size: 0.75rem;
    margin-left: 16px;
  }
}

.vertical-nav-menu-items {
  .v-subheader:not(:first-child) {
    margin-top: 18px;
  }
}
</style>
