<template>
  <header class="header">
    <nav class="navbar">
      <div class="container-logo">
        <router-link to="/">
          <img class="img-logo" src="../assets/logo.png" />
        </router-link>
      </div>

      <div class="container-search">
        <div
          class="container-search-location"
          @click="isToggleContainerSearch=!isToggleContainerSearch"
        >
          <span class="material-icons">search</span>
          <input type="text" />
          <span
            class="material-icons"
            :class="{'active-container-search-toggle':isToggleContainerSearch}"
          >keyboard_arrow_down</span>
          <div class="container-search-toggle" v-show="isToggleContainerSearch">
            <ul class="lista__state">
              <form @submit.prevent>
                <li
                  class="lista__state__item"
                  v-for="(item,index) in locationAndState"
                  :key="index"
                >
                  <span class="material-icons">location_on</span>
                  {{item}}
                </li>
              </form>
            </ul>
          </div>
        </div>

        <div class="container-search-product">
          <div class="container-input-search">
            <input type="text" />
          </div>
          <div class="container-btn-search">
            <span class="material-icons">search</span>
          </div>
        </div>
      </div>

      <div class="container-login">
        <router-link to="/login">INGRESAR</router-link>
        <router-link to="/login">VENDER</router-link>
      </div>
    </nav>

    <transition name="fade" mode="out-in">
      <router-view name="login"></router-view>
    </transition>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isToggleContainerSearch: false,
      locationAndState: ["Ica", "Lima", "Arequipa"]
    };
  },
  methods: {},
  components: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/style";

.header {
  height: 60px;
  max-width: 1250px;
  background-color: white;
  @include display-center(space-between);
  .navbar {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    .container-logo {
      background-color: white;
      grid-column: span 1;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      .img-logo {
        width: 50px;
        height: 50px;
      }
    }
    .container-search {
      grid-column: span 7;
      position: relative;
      @include display-center(space-between);
      .container-search-location {
        height: 45px;
        border: 1px solid black;
        width: 30%;
        position: relative;
        @include display-center(space-between);
        span {
          color: $color-secondary;
          font-size: 35px;
          cursor: pointer;
          transition: all 300ms ease;
        }
        input[type="text"] {
          border: none;
          outline: none;
          font-size: 16px;
          width: 100%;
        }
        .container-search-toggle {
          height: auto;
          background-color: white;
          position: absolute;
          z-index: 999;
          width: 100%;
          top: calc(100% + 1px);
          box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12),
            0 6px 6px 0 rgba(0, 0, 0, 0.24);
          .lista__state {
            background-color: yellow;
            position: relative;
            display: contents;
            form {
              :hover {
                background-color: rgb(0, 0, 0, 0.2);
              }
              .lista__state__item {
                @include display-center(start);
                list-style: none;
                font-family: $font-family;
                padding: 10px 5px;
                font-size: 14px;
                font-weight: bold;
                text-transform: uppercase;
                cursor: pointer;
                span {
                  font-size: 19px;
                }
              }
            }
          }
        }
        .active-container-search-toggle {
          transform: rotateZ(180deg);
        }
      }
      .container-search-product {
        height: 45px;
        width: 70%;
        margin-left: 10px;
        @include display-center(space-between);
        .container-input-search {
          height: 45px;
          border: 1px solid black;
          width: calc(100% - 50px);
          @include display-center(center);
          input[type="text"] {
            font-size: 16px;
            width: 100%;
            border: none;
            outline: none;
            margin-left: 10px;
          }
        }
        .container-btn-search {
          min-width: 50px;
          max-width: 50px;
          background-color: $color-primary;
          color: white;
          height: 47px;
          @include display-center(center);
          span {
            font-size: 35px;
            cursor: pointer;
          }
        }
      }
    }

    .container-login {
      grid-column: span 4;
      position: relative;
      @include display-center(space-between);
      a {
        text-align: center;
        text-decoration: none;
        width: 50%;
        height: 47px;
        border: none;
        font-size: 18px;
        font-weight: 700;
        font-family: $font-family;
        color: $color-primary;
        outline: none;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        &:hover {
          opacity: 0.8;
          cursor: pointer;
        }
      }

      :nth-child(2) {
        background-color: $color-primary;
        color: white;
      }
    }
  }
}
</style>