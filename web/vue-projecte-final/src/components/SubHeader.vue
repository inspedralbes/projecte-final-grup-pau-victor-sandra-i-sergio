<template>
  <div>
    <nav
      v-if="this.$route.name == 'descanso' || this.$route.name == 'saludmental'"
      class="navazul navbar navbar-light bg-light "
        >
        <div class="container-fluid justify-content-center">
        <RouterLink class="btn btn-primary" to="/saludmental">Salud Mental</RouterLink>
        <RouterLink class="btn btn-primary" to="/descanso">Descanso</RouterLink>
        </div>

    </nav>
    <nav
      v-if="this.$route.name == 'ejercicio'"
      class="navnaranja navbar navbar-light bg-light"
    >
      <div class="container-fluid justify-content-center">
        <RouterLink class="btn btn-primary" to="/saludmental">Rutinas</RouterLink>

        <RouterLink class="btn btn-primary" to="/descanso">Productos</RouterLink>
      </div>
    </nav>
    <nav
      v-if="this.$route.name == 'alimentacion'"
      class="navverde navbar navbar-light bg-light"
    >
      <div class="container-fluid justify-content-center">
        <RouterLink class="btn btn-primary" to="/saludmental">Recetas</RouterLink>

        <RouterLink class="btn btn-primary" to="/descanso">Productos</RouterLink>
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
</style>
