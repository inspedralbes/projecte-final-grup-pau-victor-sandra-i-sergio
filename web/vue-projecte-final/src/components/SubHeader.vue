<template>
  <div>
    <nav
      v-if="this.$route.name == 'descanso' || this.$route.name == 'saludmental'"
      class="navazul navbar navbar-light bg-light "
        >
        <div class="container-fluid justify-content-center subheader">
        <a><RouterLink class="link_header" to="/saludmental">Salud Mental</RouterLink></a> | 
        <a><RouterLink class="link_header" to="/descanso">Descanso</RouterLink></a>
        </div>
        

    </nav>
    <nav
      v-if="this.$route.name == 'ejercicio'"
      class="navnaranja navbar navbar-light bg-light subheader"
    >
      <div class="container-fluid justify-content-center">
        <RouterLink class="link_header" to="/saludmental">Rutinas</RouterLink> | 

        <RouterLink class="link_header" to="/descanso">Productos</RouterLink>
      </div>
    </nav>
    <nav
      v-if="this.$route.name == 'alimentacion'"
      class="navverde navbar navbar-light bg-light subheader"
    >
      <div class="container-fluid justify-content-center">
        <RouterLink class="link_header" to="/saludmental">Recetas</RouterLink> | 

        <RouterLink class="link_header" to="/descanso">Productos</RouterLink>
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
  margin: 15px;
  text-decoration: none;
  color: black;
  font-weight: 650;
  font-size: 18px;
}

.link_header:hover {
  color: white;
}

.seleccionado {
  color: white;
  font-weight: 800;
}

.subheader{
  padding: 20px;
}
</style>
