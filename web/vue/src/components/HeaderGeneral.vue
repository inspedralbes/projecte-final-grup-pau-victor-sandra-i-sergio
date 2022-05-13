<script>
import { RouterLink } from "vue-router";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";
export default {
  components: {
    RouterLink,
  },
  computed: {
    ...mapStores(sesionStore),
  },

  data() {
    return {
      usuario: "a",
    };
  },

  mounted() {
    setInterval(() => {
      this.usuario = this.sesionStore.getUsuario;
    }, 1);
  },

  methods: {
    cerrarNav() {
      document.getElementById("offcanvasNavbar").dispatchEvent(
        new KeyboardEvent("keydown", {
          altKey: false,
          code: "Escape",
          ctrlKey: false,
          isComposing: false,
          key: "Escape",
          location: 0,
          metaKey: false,
          repeat: false,
          shiftKey: false,
          which: 27,
          charCode: 0,
          keyCode: 27,
        })
      );
    },
    cerrarSesion() {
      location.reload();
    },
  },
};
</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink to="/">
        <img
          src="../../public/img/GenkiCorpusLogo.png"
          alt=""
          width="80"
          height="80"
        />
      </RouterLink>

      <!-- Menú Lateral -->

      <button
        class="navbar-toggler mx-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasNavbarLabel">
            Genki Corpus
          </h3>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li v-if="!Object.keys(this.usuario).length" class="nav-item my-1">
              <RouterLink
                class="nav-link"
                to="/iniciarSesion"
                @click="this.cerrarNav()"
              >
                <div class="d-flex align-items-center link_cuenta">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="icono_cuenta material-symbols-outlined"
                      >account_circle</span
                    >
                  </div>
                  <div class="align-self-center mx-2">
                    <span class="bold">Iniciar sesión</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li v-if="Object.keys(this.usuario).length" class="nav-item my-1">
              <RouterLink class="nav-link" to="/" @click="this.cerrarNav()">
                <div class="d-flex link_cuenta">
                  <div id="divAvatar">
                    <span
                      id="avatar_usuario"
                      class="icono_cuenta material-symbols-outlined"
                      ><img
                        id="img-usuario"
                        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                    /></span>
                  </div>
                  <div class="align-self-center mx-4">
                    <span class="bold">Nombre usuario</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li class="nav-item my-1">
              <RouterLink class="nav-link" to="/" @click="this.cerrarNav()">
                <div class="d-flex align-items-center link_inicio">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="icono_inicio material-symbols-outlined"
                      >home</span
                    >
                  </div>
                  <div class="align-self-center mx-2">
                    <span class="bold">Inicio</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li class="nav-item my-1">
              <RouterLink
                class="nav-link"
                to="/alimentacion"
                @click="this.cerrarNav()"
              >
                <div class="d-flex align-items-center link_alimentacion">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="icono_alimentacion material-symbols-outlined"
                      >restaurant</span
                    >
                  </div>
                  <div class="align-self-center mx-2">
                    <span class="bold">Alimentación</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li class="nav-item my-1">
              <RouterLink
                class="nav-link"
                to="/ejercicio"
                @click="this.cerrarNav()"
              >
                <div class="d-flex align-items-center link_ejercicio">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="icono_ejercicio material-symbols-outlined"
                      >fitness_center</span
                    >
                  </div>
                  <div class="align-self-center mx-2">
                    <span class="bold">Ejercicio</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li class="nav-item my-1">
              <RouterLink
                class="nav-link"
                to="/saludmental"
                @click="this.cerrarNav()"
              >
                <div class="d-flex align-items-center link_saludmental">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="icono_saludmental material-symbols-outlined"
                      >self_improvement</span
                    >
                  </div>
                  <div class="align-self-center mx-2">
                    <span class="bold">Salud Mental y Descanso</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li class="nav-item my-1">
              <RouterLink class="nav-link" to="/" @click="this.cerrarNav()">
                <div class="d-flex align-items-center link_about_us">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="icono_about material-symbols-outlined"
                      >group</span
                    >
                  </div>
                  <div class="align-self-center mx-2">
                    <span class="bold">Sobre nosotros</span>
                  </div>
                </div>
              </RouterLink>
            </li>

            <li v-if="Object.keys(this.usuario).length" class="nav-item my-1">
              <RouterLink class="nav-link" to="/" @click="this.cerrarNav()">
                <div class="d-flex align-items-center link_cerrarSession">
                  <div class="align-self-center d-flex align-content-center">
                    <span class="material-symbols-outlined">logout</span>
                  </div>
                  <div class="align-self-center mx-2">
                    <span @click="this.cerrarSesion()" class="bold"
                      >Cerrar Session</span
                    >
                  </div>
                </div>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a {
  color: black !important;
}

.link_cuenta:hover {
  color: #8a8a8a;
}

.link_inicio:hover {
  color: #8a8a8a;
}

.link_alimentacion:hover {
  color: #7ed957;
}

.link_ejercicio:hover {
  color: #ff914d;
}

.link_saludmental:hover {
  color: #5cb8e6;
}

.link_about_us:hover {
  color: #8a8a8a;
}

.link_cerrarSession:hover {
  color: #ff0000;
}

#divAvatar {
  max-width: 24px;
}

#img-usuario {
  max-width: 40px;
}

.bold {
  font-weight: 550;
}

@media only screen and (max-width: 400px) {
  .offcanvas-end {
    width: 350px;
  }
}
</style>
