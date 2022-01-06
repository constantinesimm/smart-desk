<template>
  <v-menu
    open-on-hover
    bottom
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark plain
        v-bind="attrs"
        v-on="on"
      >
        {{ $vuetify.lang.t('$vuetify.locale.switcherLabel') }}
      </v-btn>
      <span>{{ $vuetify.lang.current }}</span>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in localesList"
        :key="index"
      >
        <v-list-item-title @click="handleLocaleChange(item.value)">{{ item.label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
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
    if (this.storedLocale === null) {
      const checkAvailableLocale = this.localesList.filter(ln => ln.value === browserLang.toLowerCase().split('-').shift());

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
