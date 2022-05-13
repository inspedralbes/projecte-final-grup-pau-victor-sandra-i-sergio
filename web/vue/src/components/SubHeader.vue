<template>
  <div>
    <!-- Apartado Salud Mental y Descanso -->
    <nav
      v-if="
        this.$route.name == 'descanso' ||
        this.$route.name == 'saludmental' ||
        this.$route.name == 'articulos'
      "
      class="navazul navbar navbar-light bg-light"
    >
      <div class="container-fluid justify-content-center subheader">
        <RouterLink class="link_header" to="/saludmental"
          >Salud Mental</RouterLink
        >
        <RouterLink class="link_header barra-vertical" to="/descanso"
          >Descanso</RouterLink
        >
        <RouterLink class="link_header barra-vertical" to="/articulos"
          >Artículos</RouterLink
        >
      </div>
    </nav>

    <!-- Apartado Ejercicio -->
    <nav
      v-if="this.$route.name == 'ejercicio'"
      class="navnaranja navbar navbar-light bg-light subheader"
    >
      <div class="container-fluid justify-content-center">
        <RouterLink class="link_header" to="">Rutinas</RouterLink>
        <RouterLink class="link_header barra-vertical" to=""
          >Productos</RouterLink
        >
      </div>
    </nav>

    <!-- Apartado Alimentación -->
    <nav
      v-if="this.$route.name == 'alimentacion'"
      class="navverde navbar navbar-light bg-light subheader"
    >
      <div class="container-fluid justify-content-center">
        <RouterLink class="link_header" to="">Recetas</RouterLink>
        <RouterLink class="link_header barra-vertical" to=""
          >Productos</RouterLink
        >
      </div>
    </nav>
  </div>
</template>

<style scoped>
.navazul {
  background-color: #5cb8e6 !important;
}

.navnaranja {
  background-color: #ff914d !important;
}

.navverde {
  background-color: #7ed957 !important;
}

.link_header {
  padding: 1px 15px;
  margin: 12px 0;
  text-decoration: none;
  color: black;
  font-weight: 650;
  font-size: 18px;
  transition: 0.3s ease-in-out;
}

.link_header:hover {
  color: white;
}

.seleccionado {
  color: white;
  font-weight: 800;
}

.barra-vertical {
  border-left: 2px solid black;
}

@media only screen and (max-width: 385px) {
  .link_header {
    padding: 1px 10px;
  }
}

@media only screen and (max-width: 355px) {
  .link_header {
    padding: 1px 8px;
    font-size: 16px;
  }
}
</style>
