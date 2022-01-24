<template>
  <v-app>
    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
          ></v-app-bar-nav-icon>
          <v-text-field
            rounded
            dense
            outlined
            class="app-bar-search flex-grow-0"
            hide-details
          ></v-text-field>

          <v-spacer></v-spacer>

          <!-- Right Content -->
          <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
            target="_blank"
            rel="nofollow"
          >

          </a>

          <v-btn
            icon
            small
            class="ms-3"
          >

          </v-btn>

        </div>
      </div>
    </v-app-bar>

    <v-main>
      <slot></slot>
    </v-main>

    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Landing"
}
</script>
