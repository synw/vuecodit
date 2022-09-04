import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import HomeView from "./views/HomeView.vue"

const baseTitle = "Vuecodit"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: HomeView,
    meta: {
      title: "Home"
    }
  },
  {
    path: "/python",
    component: () => import("./views/PythonView.vue"),
    meta: {
      title: "Python"
    }
  },
  {
    path: "/javascript",
    component: () => import("./views/JsView.vue"),
    meta: {
      title: "Javascript"
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

router.afterEach((to, from) => { // eslint-disable-line
  document.title = `${baseTitle} - ${to.meta?.title}`
});

export default router