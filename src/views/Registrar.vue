<template>
  <div class="container__registrar">
    <form @submit.prevent action>
      <span @click="$router.go(-1)" class="return__page material-icons">keyboard_arrow_down</span>

      <div class="form__box">
        <span>EMAIL</span>
        <input type="text" />
      </div>
      <div class="form__box">
        <span>PASSWORD</span>
        <input type="text" />
      </div>
      <div class="form__box">
        <span>NOMBRE</span>
        <input type="text" />
      </div>
      <div class="form__box">
        <input class="btn__submit" type="submit" value="REGISTRAR" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "../assets/style";
.container__registrar {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0);
  @include display-center(center);
  z-index: 999;
  form {
    width: 300px;
    min-width: 250px;
    margin: 0 auto;
    height: 400px;
    background-color: white;
    position: relative;
    @include display-center(center);
    flex-direction: column;
    padding: 10px;
    font-family: $font-family;
    .form__box {
      width: 100%;
      padding: 10px;
      * {
        display: block;
        width: 100%;
        color: black;
        padding: 5px 0;
      }
      .btn__submit {
        background-color: $color-primary;
        padding: 12px;
        border: 1px solid white;
        color: white;
        font-size: 15px;

        border-radius: 3px;
        cursor: pointer;
      }
    }
    .return__page {
      transform: rotateZ(90deg);
      font-size: 50px;
      position: absolute;
      left: 0;
      top: 0;
      padding: 5px;
      cursor: pointer;
    }
  }
}
</style>