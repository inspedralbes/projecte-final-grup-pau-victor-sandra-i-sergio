import { createRouter, createWebHistory } from "vue-router";
// import App from "../App.vue";
import HomeEjercicio from "../views/HomeEjercicio.vue";
import HomeAlimentacion from "../views/HomeAlimentacion.vue";
import HomeSaludmental from "../views/HomeSaludmental.vue";
import HomeInicio from "../views/HomeInicio.vue";
import HomeDescanso from "../views/HomeDescanso.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeInicio,
    },
    {
      path: "/ejercicio",
      name: "ejercicio",
      component: HomeEjercicio,
    },
    {
      path: "/alimentacion",
      name: "alimentacion",
      component: HomeAlimentacion,
    },
    {
      path: "/saludmental",
      name: "saludmental",
      component: HomeSaludmental,
    },
    {
      path: "/descanso",
      name: "descanso",
      component: HomeDescanso,
    },
  ],
});

export default router;
