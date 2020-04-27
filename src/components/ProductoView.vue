<template>
  <ProductoViewLayout>
    <div class="productoview">
      <div class="card__producto">
        <div class="card__producto__header">
          <div class="img">
            <img src="../assets/logo.png" alt />
          </div>
          <div class="description">
            <span>Descripcion</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit numquam, minima incidunt praesentium esse ipsa aut iusto vel doloribus, animi non, quod excepturi repellendus veniam nesciunt recusandae consequuntur eos qui.</span>
          </div>
        </div>
        <div class="card__producto__body">
          <div class="precio">
            <span>S./380</span>
            <span>Se Vende Televisor</span>
            <span>Ica,Ica, Peru</span>
          </div>

          <div class="vendedor">
            <span>Descripcion del vendedor</span>
            <div class="vendedor__informacion">
              <img src="../assets/logo.png" alt />
              <div class="vededor__informacion__datos">
                <span>Yunior Vergara</span>
                <span>Mienbro desde SEpt 2017</span>
              </div>
            </div>
            <div class="vendedor__informacion__contactar">
              <button>CHATEA CON EL VENDEDOR</button>
              <span>********* Mostrar Numero</span>
            </div>
          </div>
        </div>
        <div class="card__producto__footer"></div>
      </div>
    </div>
  </ProductoViewLayout>
</template>

<script>
import ProductoViewLayout from "../layouts/ProductoViewLayout.vue";
export default {
  name: "ProductoView",
  components: {
    ProductoViewLayout
  },
  data() {
    return {
      id: null
    };
  },
  created() {
    this.id = this.$route.params.id;
  }
};
</script>


<style lang="scss" >
@import "../assets/style.scss";
.productoview {
  height: 500px;
  widows: 500;
  background-color: white;
  .card__producto {
    display: center;
    flex-direction: column;
    .card__producto__header {
      padding: 20px;
      margin: 20px;
      border: 1px solid black;
      .img {
        @include display-center();
      }
      .description {
        span {
          display: block;
          padding: 10px;
          font-family: $font-family;
          color: $color-secondary;
        }
        :nth-child(1) {
          font-weight: 700;
          font-size: 20px;
        }
      }
    }
    .card__producto__body {
      border: 1px solid black;
      padding: 20px;
      margin: 20px;
      .precio {
        span {
          display: block;
          padding: 5px 0;
          font-family: $font-family;
          color: $color-secondary;
        }
        :nth-child(1) {
          font-weight: 700;
          font-size: 20px;
        }
      }
      .vendedor {
        padding: 10px 0;
        .vendedor__informacion {
          display: flex;
          align-items: center;
          img {
            width: 50px;
            padding: 10px;
          }
          .vededor__informacion__datos {
            span {
              display: block;
              font-family: $font-family;
            }
            :nth-child(1) {
              font-weight: 700;
            }
          }
        }
        .vendedor__informacion__contactar {
          font-family: $font-family;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          * {
            padding: 10px;
          }
          button {
            background-color: $color-primary;
            color: white;
            border: 1px solid $color-primary;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>