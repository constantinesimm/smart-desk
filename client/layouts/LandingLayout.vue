<template>
  <v-app>
    <v-app-bar color="#0a47b0" dark app>
      <v-toolbar-title>SmartDesk</v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="v-app-bar__nav hidden-sm-and-down">
        <v-btn
          small
          class="shadow-hover ml-1 mr-1"
          v-for="(link, i) in navigateLinks" :key="i"
          :text="link.type.text"
          :outlined="link.type.outlined"
          :rounded="link.type.rounded"
          :color="link.type.color"
          :style="link.type.style"
          @click="link.method(link.link)"
        >
          <v-icon v-if="link.type.icon" class="pr-2">
            {{ icons[`${ link.type.icon }`] }}
          </v-icon>

          {{ link.title }}
        </v-btn>
      </div>

      <v-app-bar-nav-icon class="hidden-md-and-up" @click="mobileNavMenu = !mobileNavMenu"></v-app-bar-nav-icon>

      <v-navigation-drawer
        v-model="mobileNavMenu"
        color="blue darken-4"
        width="100%"
        height="auto"
        absolute
        temporary
      >
        <v-list dense>
          <v-subheader class="d-flex justify-center mb-3">
            <v-app-bar-nav-icon @click="mobileNavMenu = !mobileNavMenu" style="position: absolute; right: 15px">
              <v-icon> {{ icons.mdiCloseThick }} </v-icon>
            </v-app-bar-nav-icon>

            <span class="v-subheader__title">SmartDesk</span>
          </v-subheader>

          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(link, i) in navigateLinks" :key="i">

              <v-list-item-content>
                <v-list-item-title class="d-flex justify-center">

                  <v-btn
                    class="shadow-hover"
                    :text="link.type.text"
                    :outlined="link.type.outlined"
                    :rounded="link.type.rounded"
                    :color="link.type.color"
                    :style="link.type.style"
                    @click="link.method(link.link)"
                  >
                    <v-icon v-if="link.type.icon" class="pr-2">
                      {{ icons[`${ link.type.icon }`] }}
                    </v-icon>

                    {{ link.title }}
                  </v-btn>

                </v-list-item-title>
              </v-list-item-content>

            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <locale-switcher-menu view="icon" divider-direction="vertical" :divider-visible="true" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  import UrlAndLocaleMixin from '@/mixins/UrlAndLocaleMixin';
  const LocaleSwitcherMenu = () => import('@/components/core/LocaleSwitcherMenu');

  export default {
    name: 'LandingLayout',
    mixins: [IconsMixin, UrlAndLocaleMixin],
    components: {
      LocaleSwitcherMenu
    },
    data() {
      return {
        mobileNavMenu: false,
        selectedItem: '',
      }
    },
    mounted() {
      console.log()
    },
    computed: {
      navigateLinks() {
        return  [
          {
            title: this.$vuetify.lang.t('$vuetify.landing.header.links.advantages'),
            link: 'advantages',
            type: {
              text: true,
              icon: false,
              rounded: true,
              outlined: false,
              color: 'white'
            },
            method: this.handleScrollToAnchor
          },
          {
            title: this.$vuetify.lang.t('$vuetify.landing.header.links.solutions'),
            link: 'solutions',
            type: {
              text: true,
              icon: false,
              rounded: true,
              outlined: false,
              color: 'white'
            },
            method: this.handleScrollToAnchor
          },
          {
            title: this.$vuetify.lang.t('$vuetify.landing.header.links.prices'),
            link: 'prices',
            type: {
              text: true,
              icon: false,
              rounded: true,
              outlined: false,
              color: 'white'
            },
            method: this.handleScrollToAnchor
          },
          {
            title: this.$vuetify.lang.t('$vuetify.landing.header.links.login'),
            link: this.appUrls.loginPage,
            type: {
              text: true,
              icon: 'mdiLoginVariant',
              rounded: true,
              outlined: false,
              color: '#ffffff'
            },
            method: this.handleRouteNavigate
          },
          {
            title: this.$vuetify.lang.t('$vuetify.landing.header.links.register'),
            link: this.appUrls.registerPage,
            type: {
              text: true,
              icon: 'mdiAccountPlus',
              rounded: true,
              outlined: true,
              style: 'background: #ffffff',
              color: 'primary'
            },
            method: this.handleRouteNavigate
          }
        ]
      }
    },
    methods: {
      handleScrollToAnchor(elementId) {
        if (!!this.mobileNavMenu) this.mobileNavMenu = !this.mobileNavMenu;

        window.scrollTo({
          top: window.document.getElementById(elementId).offsetTop,
          behavior: 'smooth'
        })
      },
      handleRouteNavigate(link) {
        window.location.replace(link);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-app-bar {
    .v-toolbar {
      &__title {
        font-size: 2rem;
        font-weight: bold;
      }

      &__content {
        .v-navigation-drawer {
          &__content {

          }
        }
      }
    }
  }

  .v-btn__content {
    font-family: "Ubuntu", sans-serif!important;
  }

  .shadow-hover {
    &:hover {
      box-shadow: 0 0 10px 8px #ddd8e599;
    }
  }

  .v-subheader__title {
    font-size: 2rem;
    font-weight: bold;
    color: #ffffff;
  }

  .boxed-container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
