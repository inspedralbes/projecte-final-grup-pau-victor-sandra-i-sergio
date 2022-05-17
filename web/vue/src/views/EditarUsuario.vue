<script>
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      nombreUsuario: null,
      emailUsuario: null,
      ctx: null,
      myChart: null,
    };
  },
  computed: {
    ...mapStores(sesionStore),
  },
  mounted() {
    this.nombreUsuario = this.sesionStore.getUsuario.nombreApellidos;
    console.log(this.nombreUsuario);
    this.emailUsuario = this.sesionStore.getUsuario.email;
    console.log(this.emailUsuario);
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-4 d-flex justify-content-center flex-column">
          <h1 class="fontsize text-center">Mi cuenta</h1>
          <img
            class="img-perfil text-center"
            src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
          />
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              :value="this.nombreUsuario"
              placeholder="nombre"
            />
            <label for="floatingInput">Nombre</label>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              :value="this.emailUsuario"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Correo</label>
          </div>
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="form-floating">
                <input
                  type="number"
                  class="form-control"
                  id="floatingEdad"
                  value="20"
                  placeholder="Edad"
                />
                <label for="floatingEdad">Edad</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingSexo"
                  value="sexo"
                  placeholder="Sexo"
                />
                <label for="floatingSexo">Sexo</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingOcupacion"
                  value="Estudiando"
                  placeholder="Ocupacion"
                />
                <label for="floatingOcupacion">Ocupación</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingTiempo"
                  value="+1"
                  placeholder="Tiempo"
                />
                <label for="floatingEdad">Tiempo</label>
              </div>
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingNivel"
                  value="Intermedio"
                  placeholder="Nivel"
                />
                <label for="floatingEdad">Nivel</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row margin-top">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Link</a>
          </li>
        </ul>
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    </div>
  </main>
</template>


<style scoped>
main {
  background-image: url(../../public/img/fondoEditar.png);
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;

}
@media only screen and (min-width: 300px) {
  .container {
    padding-top: 5%;
  }
  .img-perfil {
    width: 100px;
    margin: auto;
  }
  .fontsize {
    font-size: 20px;
  }
}

.row {
  padding: 25px;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
}
.margin-top {
  margin-top: 30px;
}
</style>