import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: "/",
    name: "Home2",
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: "/",
    name: "Home3",
    component: Home,
    meta: {
      public: true
    }
  },
  {
    path: "/",
    name: "Home4",
    component: Home,
    meta: {
      public: true
    }
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !localStorage.getItem('storeAuthToken')) {
    next('/');
  }
  else {
    next();
  }
})