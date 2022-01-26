<template>
  <v-app>
    <v-app-bar app>

    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <v-footer app>

    </v-footer>
  </v-app>
</template>

<script>
export default {
name: "LandingLayout"
}
</script>

<style scoped>

</style>
