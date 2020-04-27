<template>
  <DasboardLayout>
    <div class="home">
      <div class="home__logo"></div>
      <div class="home__recomendaciones">
        <span class="home__titulo">Nuevas Recomendaciones</span>
        <div class="home__productos">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
      <router-view name="login"></router-view>
    </div>
  </DasboardLayout>
</template>

<script>
import Item from "../components/Item";
import DasboardLayout from "../layouts/DasboardLayout.vue";
export default {
  name: "Home",
  components: {
    Item,
    DasboardLayout
  }
};
</script>


<style lang="scss" scoped>
@import "../assets/style";
.home {
  position: relative;
  height: auto;
  .home__logo {
    width: 100%;
    height: 250px;
    background: url("../assets/logo.png") no-repeat;
    background-size: cover;
  }
  .home__recomendaciones {
    width: calc(100% - 60px);
    margin: 0 auto;
    .home__productos {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 20px;
    }
    .home__titulo {
      font-family: $font-family;
      font-size: 30px;
      padding: 20px 0px;
      display: block;
    }
  }
}
</style>