<template>
  <div class="locale-select">
    <v-select
      :label="$vuetify.lang.t('$vuetify.locale.switcherLabel')"
      :items="localesList"
      item-value="value"
      item-text="label"
      v-model="selectedLocale"
      @change="handleLocaleChange(selectedLocale)"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LocaleChangeForm',
  data() {
    return {
      defaultLocale: 'en',
      selectedLocale: '',
      localesList: [
        { value: 'en', label:'English'},
        { value: 'uk', label:'Українська'},
        { value: 'ru', label:'Русский'}
      ]
    }
  },
  computed: {
    ...mapGetters({
      storedLocale: 'app/getSelectedLocale'
    })
  },
  mounted() {
    const browserLang = navigator.language || navigator.userLanguage;
    console.log(this.$vuetify.lang)
    console.log('this.storedLocale', this.storedLocale)
    if (this.storedLocale === null) {
      const checkAvailableLocale = this.localesList.filter(ln => ln.value === browserLang.toLowerCase().split('-').shift());
      console.log(checkAvailableLocale)
      if (checkAvailableLocale.length) {
        this.handleLocaleChange(checkAvailableLocale.shift().value);
      } else this.handleLocaleChange(this.defaultLocale);
    } else this.handleLocaleChange(this.storedLocale);
  },
  methods: {
    handleLocaleChange(locale) {
      this.$vuetify.lang.current = locale;
      this.selectedLocale = locale;
      this.$store.dispatch('app/changeLocale', locale);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
