import { createRouter, createWebHistory } from "vue-router";
// import App from "../App.vue";
import HomeEjercicio from "../views/HomeEjercicio.vue";
import HomeAlimentacion from "../views/HomeAlimentacion.vue";
import HomeSaludmental from "../views/HomeSaludmental.vue";
import HomeInicio from "../views/HomeInicio.vue";
import HomeDescanso from "../views/HomeDescanso.vue";
import IniciarSesion from "../views/IniciarSesion.vue";
import Articulos from "../views/Articulos.vue";
<<<<<<< Updated upstream
import EditarUsuario from "../views/EditarUsuario.vue";
=======
import RegistroDatos from "../views/RegistroDatos.vue";
>>>>>>> Stashed changes

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
    {
      path: "/iniciarSesion",
      name: "iniciarSesion",
      component: IniciarSesion,
    },
    {
      path: "/articulos",
      name: "articulos",
      component: Articulos,
    },
    {
<<<<<<< Updated upstream
      path: "/editarUsuario",
      name: "editarUsuario",
      component: EditarUsuario,
=======
      path: "/registroDatos",
      name: "registroDatos",
      component: RegistroDatos,
>>>>>>> Stashed changes
    },
  ],
});

export default router;
