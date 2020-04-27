<template>
  <v-container>
    <NavBar />
    <Categorias />
    <v-content>
      <slot />
    </v-content>
  </v-container>
</template>
<script>
import NavBar from "../components/Navbar";
import Categorias from "../components/Categorias";
export default {
  components: {
    NavBar,
    Categorias
  }
};
</script>