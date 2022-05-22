<script>
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      nombreUsuario: null,
      emailUsuario: null,
      datosUsuario: null,
      ctx: null,
      myChart: null,
      ocupacion: null,
      tiempo: null,
      nivel: null,
      id: null,
      img: null,
      grafico: false,
    };
  },
  computed: {
    ...mapStores(sesionStore),
  },

  created() {
    this.id = this.sesionStore.getUsuario._id;
    this.nombreUsuario = this.sesionStore.getUsuario.nombreApellidos;
    this.emailUsuario = this.sesionStore.getUsuario.email;
    this.datosUsuario = this.sesionStore.getUsuario.datosPersonales;
    this.img = this.sesionStore.getUsuario.fotoPerfil;
  },

  mounted() {
    this.graficoSaludMental();
    this.graficoDescanso();
    document.querySelectorAll("#nivel option").forEach((opt) => {
      if (opt.value == this.datosUsuario.nivelFisico) {
        this.nivel = this.datosUsuario.nivelFisico;
        opt.setAttribute("selected", "");
      }
    });
    document.querySelectorAll("#ocupacion option").forEach((opt) => {
      if (opt.value == this.datosUsuario.ocupacion) {
        this.ocupacion = this.datosUsuario.ocupacion;
        opt.setAttribute("selected", "");
      }
    });
    document.querySelectorAll("#tiempo option").forEach((opt) => {
      console.log(opt.value);
      if (opt.value == this.datosUsuario.disponibilidadTiempo) {
        this.tiempo = this.datosUsuario.disponibilidadTiempo;
        opt.setAttribute("selected", "");
      }
    });
  },
  methods: {
    actualizarDatos() {
      let datos = new FormData();
      datos.append("idUsuario", this.id);
      datos.append(
        "nombreApellidos",
        document.getElementById("floatingnombre").value
      );
      datos.append("email", this.emailUsuario);
      datos.append("edad", document.getElementById("floatingEdad").value);
      datos.append("img", this.img);
      datos.append("sexo", this.datosUsuario.sexo);
      datos.append("ocupacion", this.ocupacion);
      datos.append("tiempo", this.tiempo);
      datos.append("nivelFisico", this.nivel);
      for (var pair of datos.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }

      fetch("http://localhost:9000/usuario/modificar-datos", {

        // fetch("http://192.168.210.162:9000/usuario/modificar-datos", {
        method: "PUT",
        body: datos,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.status) {
            this.sesionStore.setUsuario(data.usuario);
          }
        });
    },

    graficoSaludMental() {
      let datos = new FormData();
      datos.append("idUsuario", this.id);
      datos.append("filtro", "Mes");

      fetch("http://192.168.210.162:9000/salud-mental/respuestas", {
        method: "POST",
        body: datos,
      })
        .then((response) => response.json())
        .then((respuesta) => {
          console.log(respuesta);
          this.grafico = false;
          console.log(this.grafico);

          const data = {
            labels: respuesta.label,
            datasets: [
              {
                label: "My First Dataset",
                data: respuesta.data,
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(116, 196, 247)",
                  "rgb(255, 185, 69)",
                  "rgb(5, 105, 255)",
                  "rgb(69, 128, 61)",
                  "rgb(152, 79, 207)",
                  "rgb(202, 207, 45)",
                ],
                hoverOffset: 4,
              },
            ],
          };

          const config = {
            type: "doughnut",
            data: data,
          };

          const myChart = new Chart(document.getElementById("myChart"), config);
        });
    },

    graficoDescanso() {
      this.grafico = true;
      let datosDescanso = new FormData();
      datosDescanso.append("idUsuario", this.id);
      datosDescanso.append("filtro", "Mes");

      fetch("http://localhost:9000/descanso/respuestas", {
        // fetch("http://192.168.210.162:9000/descanso/respuestas", {
        method: "POST",
        body: datosDescanso,
      })
        .then((response) => response.json())
        .then((respuesta) => {
          console.log(respuesta);
          this.grafico = false;
          console.log(this.grafico);
          const data = {
            labels: respuesta.label,
            datasets: [
              {
                label: "My First Dataset",
                data: respuesta.data,
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(116, 196, 247)",
                  "rgb(255, 185, 69)",
                  "rgb(5, 105, 255)",
                  "rgb(69, 128, 61)",
                  "rgb(152, 79, 207)",
                  "rgb(202, 207, 45)",
                ],
                hoverOffset: 4,
              },
            ],
          };

          const config = {
            type: "doughnut",
            data: data,
          };

          const myChart2 = new Chart(
            document.getElementById("myChart2"),
            config
          );
        });
    },
    cambiarfoto() { },
  },
};
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-12 col-md-4 d-flex justify-content-center flex-column">
        <h1 class="fontsize text-center">Mi cuenta</h1>
        <img @click="cambiarfoto()" class="img-perfil text-center" :src="this.img" />
        <input type="file" class="form-control-file" id="imagenUsuario" />
        <div class="form-floating mb-3">
          <input type="text" class="form-control" id="floatingnombre" :value="this.nombreUsuario"
            placeholder="nombre" />
          <label for="floatingInput">Nombre</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="floatingemail" :value="this.emailUsuario"
            placeholder="name@example.com" disabled />
          <label for="floatingInput">Email address</label>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="form-floating mb-3">
              <input type="number" class="form-control" id="floatingEdad" :value="this.datosUsuario.edad"
                placeholder="Edad" />
              <label for="floatingEdad">Edad</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="floatingSexo" :value="this.datosUsuario.sexo"
                placeholder="Sexo" disabled />
              <label for="floatingSexo">Sexo</label>
            </div>
            <div class="form-floating mb-3">
              <select id="ocupacion" class="form-select" aria-label="Default select example" v-model="this.ocupacion">
                <option value="Trabajo">Trabajo</option>
                <option value="Estudio">Estudio</option>
                <option value="Otro">Otro</option>
              </select>
              <label for="floatingOcupacion">Ocupacion</label>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="form-floating mb-3">
              <select id="tiempo" class="form-select" aria-label="Default select example" v-model="this.tiempo">
                <option value="~ 15 min">~ 15 min</option>
                <option value="30 min">30 min</option>
                <option value="45 min">45 min</option>
                <option value="+1 h">+1 h</option>
              </select>
              <label for="floatingEdad">Tiempo</label>
            </div>
            <div class="form-floating mb-3">
              <select id="nivel" class="form-select" aria-label="Default select example" v-model="this.nivel">
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <label for="floatingEdad">Nivel</label>
            </div>
            <div class="form-floating">
              <button @click="actualizarDatos()" class="btn btn-success">
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row margin-top">
      <nav class="nav nav-pills nav-fill">
        <button @click="graficoSaludMental()" class="btn btn-danger" aria-current="page">
          Salud Mental
        </button>
        <button @click="graficoDescanso()" class="btn btn-danger">
          Descanso
        </button>
      </nav>
      <div :class="[this.grafico ? 'ocultar' : '']">
        <canvas id="myChart" width="300" height="300"></canvas>
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

.btn-danger {
  margin: 5px;
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

.color {
  background-color: blue;
}

.ocultar {
  display: none;
}
</style>
