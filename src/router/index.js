import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registrar from "../views/Registrar.vue";
import ModalLogin from '@/components/ModalLogin.vue';
import ProductoView from '@/components/ProductoView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      main: Home,
    },
    children: [
      {
        path: "login",
        components: {
          login: ModalLogin
        },
        children: [
          {
            path: "registrar",
            components: {
              login: Registrar
            }
          }
        ]
      },
    ]
  },
  {
    path: "/producto/:id",
    name:'ProductoView',
    components: {
      main: ProductoView
    }
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
