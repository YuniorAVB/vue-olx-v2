<template>
  <v-container>
    <NavBar />
    <v-content>
      <v-row>
        <c-col cols="4" class="primary">
          <h1>asdasd</h1>
        </c-col>
        <v-col cols="8" class="secondary">
          <slot />
        </v-col>
      </v-row>
    </v-content>
  </v-container>
</template>

<script>
import NavBar from "../components/Navbar.vue";

export default {
  components: {
    NavBar
  }
};
</script>