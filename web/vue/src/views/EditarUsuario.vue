<script>
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      nombreUsuario: null,
      emailUsuario: null,
      datosUsuario: null,
      ocupacion: null,
      tiempo: null,
      nivel: null,
      id: null,
      img: null,
      grafico: false,
      filtro: "Semana",

      config: {
        type: "doughnut",
        data: {
          labels: "",
          datasets: [
            {
              label: "My First Dataset",
              data: "",
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
        },
      },

      chartJS: "",
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
    this.chartJS = new Chart(document.getElementById("myChart"), this.config);

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

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/usuario/modificar-datos",
        {
          method: "PUT",
          body: datos,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.status) {
            this.sesionStore.setUsuario(data.usuario);
          }
        });
    },

    filtroSM() {
      this.graficoSaludMental();
    },

    filtroD() {
      this.graficoDescanso();
    },

    graficoSaludMental() {
      let datos = new FormData();
      datos.append("idUsuario", this.id);
      datos.append("filtro", "Mes");

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/salud-mental/respuestas",
        {
          method: "POST",
          body: datos,
        }
      )
        .then((response) => response.json())
        .then((respuesta) => {
          console.log("");
          console.log("");
          console.log("");
          this.config.data.labels = respuesta.label;
          this.config.data.datasets[0].data = respuesta.data;
          console.log("");
          console.log("");

          console.log("");
        });
    },

    graficoDescanso() {
      console.log("assaasa");
      let datosDescanso = new FormData();
      datosDescanso.append("idUsuario", this.id);
      datosDescanso.append("filtro", "Mes");

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/respuestas",
        {
          method: "POST",
          body: datosDescanso,
        }
      )
        .then((response) => response.json())
        .then((r) => {
          this.chartJS.data.datasets[0].data = r.data;
          this.chartJS.data.datasets[0].labels = r.label;
          this.chartJS.update();
        });
    },
    cambiarfoto() {},

    cambiarOpcionNav(item) {
      document.querySelectorAll(".nav-tabs a").forEach((e) => {
        e.classList.remove("active");
      });

      item.target.classList.add("active");
    },
  },
};
</script>

<template>
  <main>
    <div class="container">
      <div class="row misDatos align-items-start">
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col-12">
              <h2 class="fontsize text-center">Mis datos</h2>
            </div>
            <div class="col-12 gy-2 text-center">
              <img @click="cambiarfoto()" class="img-perfil" :src="this.img" />
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 datos">
          <div class="row">
            <div class="col-12 col-lg-6">
              <div class="form-floating mb-1">
                <input
                  type="text"
                  class="form-control"
                  id="floatingnombre"
                  :value="this.nombreUsuario"
                  placeholder="nombre"
                />
                <label for="floatingInput">Nombre y Apellidos</label>
              </div>
            </div>

            <div class="col-12 col-lg-6">
              <div class="form-floating mb-2">
                <input
                  type="email"
                  class="form-control"
                  id="floatingemail"
                  :value="this.emailUsuario"
                  placeholder="name@example.com"
                  disabled
                />
                <label for="floatingInput">Email address</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating mb-2">
                <input
                  type="number"
                  class="form-control"
                  id="floatingEdad"
                  :value="this.datosUsuario.edad"
                  placeholder="Edad"
                />
                <label for="floatingEdad">Edad</label>
              </div>
              <div class="form-floating mb-2">
                <input
                  type="text"
                  class="form-control"
                  id="floatingSexo"
                  :value="this.datosUsuario.sexo"
                  placeholder="Sexo"
                  disabled
                />
                <label for="floatingSexo">Sexo</label>
              </div>
              <div class="form-floating mb-2">
                <select
                  id="ocupacion"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="this.ocupacion"
                >
                  <option value="Trabajo">Trabajo</option>
                  <option value="Estudio">Estudio</option>
                  <option value="Otro">Otro</option>
                </select>
                <label for="floatingOcupacion">Ocupacion</label>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="form-floating mb-2">
                <select
                  id="tiempo"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="this.tiempo"
                >
                  <option value="~ 15 min">~ 15 min</option>
                  <option value="30 min">30 min</option>
                  <option value="45 min">45 min</option>
                  <option value="+1 h">+1 h</option>
                </select>
                <label for="floatingEdad">Tiempo</label>
              </div>
              <div class="form-floating mb-2">
                <select
                  id="nivel"
                  class="form-select"
                  aria-label="Default select example"
                  v-model="this.nivel"
                >
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

      <div class="row estadistica mt-3 justify-content-end">
        <div class="col-12 text-center">
          <h2>Mi seguimiento</h2>
        </div>

        <div class="col-12">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a
                id="navSaludmental"
                class="nav-link active"
                @click="
                  this.graficoSaludMental();
                  cambiarOpcionNav($event);
                "
                >Salud Mental</a
              >
            </li>
            <li class="nav-item">
              <a
                id="navDescanso"
                class="nav-link"
                @click="
                  this.graficoDescanso();
                  cambiarOpcionNav($event);
                "
                >Descanso</a
              >
            </li>
          </ul>
        </div>

        <div :class="[this.grafico ? 'ocultar' : '']" class="col-3 gy-2">
          <select
            @change="filtroSM()"
            class="form-select"
            aria-label="Default select example"
            v-model="this.filtro"
          >
            <option value="Semana" selected>Semana</option>
            <option value="Mes">Mes</option>
          </select>
        </div>

        <div :class="[!this.grafico ? 'ocultar' : '']" class="col-3 gy-2">
          <select
            @change="filtroD()"
            class="form-select"
            aria-label="Default select example"
          >
            <option value="Semana" selected>Semana</option>
            <option value="Mes">Mes</option>
          </select>
        </div>

        <div class="col-12 gy-4">
          <div class="grafico">
            <canvas id="myChart" width="300" height="300"></canvas>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  background-image: url("http://genkicorpusback.alumnes.inspedralbes.cat/img/fondoEditar.png");
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
}

.active {
  transition: all 0.7s ease-in-out;
}

.misDatos,
.estadistica {
  background-color: rgba(255, 255, 255, 0.829);
  border: 1px solid black;
  border-radius: 20px;
  padding: 1em;
  box-shadow: rgba(19, 18, 18, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  transition: 0.35s all ease-in-out;
  --bs-gutter-x: 0rem;
}

.misDatos:hover,
.estadistica:hover {
  box-shadow: rgba(22, 21, 21, 0.829) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.btn-danger {
  margin: 5px;
}

.datos {
  margin-top: 20px;
}

.color {
  background-color: blue;
}

.ocultar {
  display: none;
}

.img-perfil {
  width: 50%;
  margin: auto;
}

.container {
  padding-top: 5%;
}

.grafico {
  width: 70%;
  margin: auto;
}

@media only screen and (min-width: 768px) {
  .datos {
    margin-top: 0px;
  }

  .img-perfil {
    width: 70%;
    margin: auto;
  }
}
</style>
