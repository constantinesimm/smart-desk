<template>
  <v-app-bar app flat absolute dark color="#0f4cb5" style="box-shadow: rgb(94 86 105 / 28%) 0 10px 14px 0;">
    <div class="boxed-container w-full">
      <div class="app-navbar d-flex align-center mx-6">
        <!-- Left Content -->
        <v-app-bar-nav-icon @click="mobileNavMenu = !mobileNavMenu" class="d-block d-md-none me-2" />
        <v-toolbar-title class="app-navbar-title">
          SmartDesk
        </v-toolbar-title>

        <v-navigation-drawer
          v-model="mobileNavMenu"
          color="blue darken-4"
          width="100%"
          height="auto"
          absolute
          temporary
        >
          <v-list dense>
            <v-subheader
              class="d-flex justify-center text--white font-weight-bold"
              style="font-size: 28px">
              <div style="position: absolute; left: 35px">
                <v-app-bar-nav-icon @click="mobileNavMenu = !mobileNavMenu" class="d-block d-md-none me-2">
                  <v-icon> {{ icons.mdiCloseThick }} </v-icon>
                </v-app-bar-nav-icon>
              </div>
              SmartDesk
            </v-subheader>

            <v-list-item-group
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item
                v-for="(item, i) in menuItems.links" :key="i"
              >

                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-center">
                    <div class="d-flex justify-space-around" style="width: 25%">
                      <a class="app-nav-mobile__link text--white justify-text-center" :href="item.link">
                        {{ item.text }}
                      </a>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item>

                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-center">
                    <div class="d-flex justify-center" style="width: 25%">
                      <locale-switcher-menu view="full" :divider-visible="false" />
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item
                v-for="(item, i) in menuItems.buttons"
                :key="i"
              >

                <v-list-item-content>
                  <v-list-item-title class="d-flex justify-center">
                    <div class="d-flex justify-space-between" style="width: 25%">
                      <v-icon v-if="item.icon"> {{ icons[item.icon] }} </v-icon>

                      <a class="app-nav-mobile__link text--white justify-text-right" :href="item.link">
                        {{ item.text }}
                      </a>
                    </div>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>

        <v-spacer></v-spacer>

        <!-- Right Content -->
        <div class="app-navbar-links d-none d-md-block mr-5">
          <a href="#advantages" class="app-navbar-links__item">
            {{ $vuetify.lang.t('$vuetify.landing.header.links.advantages') }}
          </a>

          <a href="#solutions" class="app-navbar-links__item">
            {{ $vuetify.lang.t('$vuetify.landing.header.links.solutions') }}
          </a>

          <a href="#prices" class="app-navbar-links__item">
             {{ $vuetify.lang.t('$vuetify.landing.header.links.prices') }}
          </a>
        </div>

        <locale-switcher-menu view="full" divider-direction="vertical" :divider-visible="true" class-list="d-none d-md-block d-lg-block d-xl-block" />

        <div class="app-navbar-buttons d-none d-sm-block ml-5">
          <a
            :href="appUrls.loginPage"
            class="v-btn v-btn--text theme--light v-size--default v-btn--rounded hover-primary mr-1"
          >
            <span class="hover-primary-text">
              <v-icon dark left color="white" class="hover-primary-icon">
              {{ icons.mdiLoginVariant }}
            </v-icon>

              {{ $vuetify.lang.t('$vuetify.landing.header.links.login') }}
            </span>
          </a>

          <a
            :href="appUrls.registerPage"
            class="v-btn v-btn--outlined theme--light v-size--default hover-primary-rounded ml-1"
          >
            <v-icon dark left color="white" class="hover-primary-rounded-icon">
              {{ icons.mdiAccountPlus }}
            </v-icon>

            {{ $vuetify.lang.t('$vuetify.landing.header.links.register') }}
          </a>
        </div>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
  import IconsMixin from '@/mixins/IconsMixin';
  import UrlAndLocaleMixin from '@/mixins/UrlAndLocaleMixin';
  const LocaleSwitcherMenu = () => import('@/components/core/LocaleSwitcherMenu');

  export default {
    name: 'LandingHeader',
    mixins: [IconsMixin, UrlAndLocaleMixin],
    components: {
      LocaleSwitcherMenu
    },
    data() {
      return {
        mobileNavMenu: false,
        selectedItem: 1,
      }
    },
    computed: {
      menuItems() {
        return {
          links: [
            { text: this.$vuetify.lang.t('$vuetify.landing.header.links.advantages'), link: '#advantages', icon: false },
            { text: this.$vuetify.lang.t('$vuetify.landing.header.links.solutions'), link: '#solutions',  icon: false },
            { text: this.$vuetify.lang.t('$vuetify.landing.header.links.prices'), link: '#prices', icon: false }
          ],
          buttons: [
            { text: this.$vuetify.lang.t('$vuetify.landing.header.links.login'), link: this.appUrls.loginPage,  icon: 'mdiLoginVariant' },
            { text: this.$vuetify.lang.t('$vuetify.landing.header.links.register'), link: this.appUrls.loginPage, icon: 'mdiAccountPlus' }
          ]
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .boxed-container {
  .app-nav {
    &-mobile {
      &__link {
        width: 100%;
        display: flex;
        color: #ffffff;
        font-size: 14px;
        text-decoration: none;

        &.justify-text {
          &-center {
            justify-content: center;
          }
          &-right {
            justify-content: right;
          }
        }
      }
    }
  }
  .app-navbar {
    &-title {
      font-size: 28px;
      font-weight: 600;
      color: #ffffff;

      @media (max-width: 599px) {
        width: 100%;
      }
    }

    &-links {
      &__item {
        margin: 0 5px;
        color: #ffffff;
        font-family: "Ubuntu", sans-serif;
        text-decoration: none;
      }
    }

    &-buttons {
      .hover-primary, .hover-primary-rounded {
        color: #ffffff;

        &:hover {
          color: #377fea;
          background: #ffffffd1;

          .hover-primary-text {
            color: #377fea;
          }

          .hover-primary-icon, .hover-primary-rounded-icon {
            color: #377fea!important;
          }
        }
      }

      .hover-primary-rounded {
        border-radius: 28px;
      }
    }
  }
}
</style>
