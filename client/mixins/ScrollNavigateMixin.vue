<script>
  export default {
    name: 'ScrollNavigateMixin',
    created() {
      this.$eventHub.$on('scroll-to-required-block', this.handleScrollIntoView);
    },
    beforeDestroy() {
      this.$eventHub.$off('scroll-to-required-block');
    }
  }
</script>
