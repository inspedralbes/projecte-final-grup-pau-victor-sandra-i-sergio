<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>

  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <RouterLink  to="/">
        <img src="../../public/img/GenkiCorpusLogo.png" alt="" width="80" height="80"/>
      </RouterLink>


<span class="material-symbols-outlined">
home
</span>

      <!-- Pantalla pequeña -->

        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div class="offcanvas-header">
            <h4 class="offcanvas-title" id="offcanvasNavbarLabel">Genki Corpus</h4>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Iniciar sesión</RouterLink>
              </li>

              <li class="nav-item">
                <RouterLink class="nav-link" to="/">Inicio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/alimentacion">Alimentación</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/ejercicio">Ejercicio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/saludmental">Salud mental y Descanso</RouterLink>
              </li>
            </ul>
          </div>
        </div>



      <!-- Pantalla pequeña -->

        <RouterLink class="btn btn-primary" to="/">Inicio</RouterLink>

 
    </div>
  </nav>
</template>


<style scoped>
a {
  color: black !important;
}
</style>
