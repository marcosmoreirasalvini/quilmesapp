import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/noticias/',
      name: 'noticias',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
    },
    {
      path: '/noticia/:id',
      name: 'noticia',
      component: () => import(/* webpackChunkName: "about" */ './views/Single.vue'),
    },
    {
      path: '/eventos/',
      name: 'eventos',
      component: () => import(/* webpackChunkName: "about" */ './views/Eventos.vue'),
    },
    {
      path: '/evento/:id',
      name: 'evento',
      component: () => import(/* webpackChunkName: "about" */ './views/Single.vue'),
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import(/* webpackChunkName: "about" */ './views/RegistroHome.vue'),
    },
    {
      path: '/registro-datos',
      name: 'registro-datos',
      component: () => import(/* webpackChunkName: "about" */ './views/RegistroDatos.vue'),
    },
    {
      path: '/registro-foto',
      name: 'registro-foto',
      component: () => import(/* webpackChunkName: "about" */ './views/RegistroFoto.vue'),
    },
    {
      path: '/ingreso',
      name: 'ingreso',
      component: () => import(/* webpackChunkName: "about" */ './views/Ingreso.vue'),
    },
    {
      path: '/micuenta',
      name: 'micuenta',
      component: () => import(/* webpackChunkName: "about" */ './views/MiCuenta.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import(/* webpackChunkName: "about" */ './views/Checkout.vue'),
    },
    {
      path: '/checkout-card',
      name: 'checkout-card',
      component: () => import(/* webpackChunkName: "about" */ './views/CheckoutCard.vue'),
    },
    {
      path: '/exito',
      name: 'exito',
      component: () => import(/* webpackChunkName: "about" */ './views/Success.vue'),
    },
    {
      path: '/credencial',
      name: 'credencial',
      component: () => import(/* webpackChunkName: "about" */ './views/Credencial.vue'),
    },
    {
      path: '/cuotas',
      name: 'cuotas',
      component: () => import(/* webpackChunkName: "about" */ './views/Cuotas.vue'),
    },
    {
      path: '/mis-actividades',
      name: 'mis-actividades',
      component: () => import(/* webpackChunkName: "about" */ './views/MisActividades.vue'),
    },
    {
      path: '/actividades',
      name: 'actividades',
      component: () => import(/* webpackChunkName: "about" */ './views/Actividades.vue'),
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: () => import(/* webpackChunkName: "about" */ './views/Cuenta.vue'),
    },
    {
      path: '/club',
      name: 'club',
      component: () => import(/* webpackChunkName: "about" */ './views/Club.vue'),
    },
  ],
});
