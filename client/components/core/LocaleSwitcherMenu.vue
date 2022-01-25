<template>
  <div :class="['app-locale-switcher', classList]">
    <v-divider :vertical="verticalDivider" v-if="dividerVisible" />

    <div class="app-navbar-locale">
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            text
            color="white"
            v-on="on"
            v-bind="attrs"
          >
            <img v-if="checkViewMode.icon || checkViewMode.full" height="25" width="25" :src="localesList[selectedLocale].icon" :class="{'mr-3': checkViewMode.full }" />

            <span v-if="checkViewMode.label || checkViewMode.full">{{ localesList[selectedLocale].label }}</span>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in localesList"
            :key="index"
          >
            <v-list-item-title @click="handleSelectLocale(index)" class="d-flex justify-space-between cursor-pointer">
              <img v-if="checkViewMode.icon || checkViewMode.full" height="25" width="25" :src="item.icon" :class="{'mr-3': checkViewMode.full }" />

              <span v-if="checkViewMode.label || checkViewMode.full">
                {{ item.label }}
              </span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <v-divider :vertical="verticalDivider" v-if="dividerVisible" />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import IconsMixin from '@/mixins/IconsMixin';

  export default {
    name: 'LocaleSwitcherMenu',
    props: {
      classList: String,
      view: {
        type: String,
        enum: ['icon', 'label', 'full'],
        default: 'full'
      },
      dividerVisible: {
        type: Boolean,
        default: false
      },
      dividerDirection: {
        type: String,
        enum: ['', 'vertical'],
        default: ''
      }
    },
    mixins: [IconsMixin],
    data() {
      return {
        defaultLocale: 0,
        selectedLocale: null
      }
    },
    computed: {
      ...mapGetters({
        appStateLocale: 'app/getSelectedLocale'
      }),
      checkViewMode() {
        return {
          full: this.view === 'full',
          icon: this.view === 'icon',
          label: this.view === 'label'
        }
      },
      verticalDivider() {
        return this.dividerDirection === 'vertical'
      },
      localesList() {
        return [
          { label: 'English', value: 'en', icon: this.flags.enFlagIcon },
          { label: 'Українська', value: 'uk', icon: this.flags.ukFlagIcon },
          { label: 'Русский', value: 'ru', icon: this.flags.ruFlagIcon },
        ]
      }
    },
    mounted() {
      const browserLang = navigator.language || navigator.userLanguage;
      if (this.appStateLocale === null) {
        const userLocale = this.localesList.findIndex(ln => ln.value === browserLang.toLowerCase().split('-').shift());

        this.handleSelectLocale(userLocale !== -1 ? userLocale : this.defaultLocale);
      } else this.handleSelectLocale(this.localesList.findIndex(ln => ln.value === this.appStateLocale));
    },
    methods: {
      handleSelectLocale(idx) {
        this.selectedLocale = idx;
        this.$vuetify.lang.current = this.localesList[idx].value;
        this.$store.dispatch('app/changeLocale', this.localesList[idx].value);
      }
    }
  }
</script>

<style scoped>

</style>
