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
      idUsuario: null,
      img: null,
      grafico: false,
      filtro: "Semana",
      filtro2: "Semana",
      data: [],
      labels: [],
      gr: null,
      size: "",
    };
  },
  computed: {
    ...mapStores(sesionStore),
  },
    //guardar informacion del pinia en variables
  created() {
    this.idUsuario = this.sesionStore.getUsuario._id;
    this.nombreUsuario = this.sesionStore.getUsuario.nombreApellidos;
    this.emailUsuario = this.sesionStore.getUsuario.email;
    this.datosUsuario = this.sesionStore.getUsuario.datosPersonales;
    this.img = this.sesionStore.getUsuario.fotoPerfil;
  },
    //para cojer la información del usuario y ponerla en el select
  mounted() {
    this.graficoSaludMental();
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
    //para guardar la información que ha sido modificada
    actualizarDatos() {
      let datos = new FormData();
      datos.append("idUsuario", this.idUsuario);
      datos.append(
        "nombreApellidos",
        document.getElementById("floatingnombre").value
      );
      datos.append("email", this.emailUsuario);
      datos.append("edad", document.getElementById("floatingEdad").value);
      datos.append("img", this.img);
      datos.append("sexo", this.datosUsuario.sexo);
      datos.append("ocupacion", this.ocupacion);
      datos.append("disponibilidadTiempo", this.tiempo);
      datos.append("nivelFisico", this.nivel);

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/usuario/modificar-datos",
        {
          method: "PUT",
          body: datos,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          //alerta de que ha sido modificada la informacion
          Swal.fire({
            position: "center",
            icon: data.status ? "success" : "error",
            title: data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
          //si se ha modificado correctamente se refresca la pàgina
          if (data.status) {
            this.sesionStore.setUsuario(data.usuario);
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          }
        });
    },
      //para obtener los datos de salud mental para cargar el grafico
    filtroSM() {
      this.graficoSaludMental();
    },

      //para obtener los datos de descanso para cargar el grafico
    filtroD() {
      this.graficoDescanso();
    },

      //se crea el grafico
    mostrarGrafico(labels, data) {
      if (this.gr != null) {
        this.gr.destroy();
      }
      const ctx = document.getElementById("grafico").getContext("2d");
      this.gr = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Mi seguimiento",
              data: data,
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(116, 196, 247)",
                "rgb(255, 185, 69)",
                "rgb(5, 105, 255)",
                "rgb(69, 128, 61)",
                "rgb(152, 79, 207)",
                "rgb(202, 207, 45)",
                "rgb(232, 126, 245)",
                "rgb(141, 244, 151)",
              ],
              hoverOffset: 4,
            },
          ],
        },
      });
    },
      //para crear el grafico con los datos de salud mental
    graficoSaludMental() {

      let datos = new FormData();
      datos.append("idUsuario", this.idUsuario);
      datos.append("filtro", this.filtro);

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/salud-mental/respuestas",
        {
          method: "POST",
          body: datos,
        }
      )
        .then((response) => response.json())
        .then((respuesta) => {
          this.mostrarGrafico(respuesta.label, respuesta.data);
        });
    },

      //para crear el grafico con los datos de descanso
    graficoDescanso() {
      let datosDescanso = new FormData();
      datosDescanso.append("idUsuario", this.idUsuario);
      datosDescanso.append("filtro", this.filtro);

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/respuestas",
        {
          method: "POST",
          body: datosDescanso,
        }
      )
        .then((response) => response.json())
        .then((respuesta) => {
          this.mostrarGrafico(respuesta.label, respuesta.data);
        });
    },
      //para identificar en que sección estamos viendo el grafico
    cambiarOpcionNav(item) {
      document.querySelectorAll(".nav-tabs a").forEach((e) => {
        e.classList.remove("active");
      });

      if (item.target.id != "navSaludmental") this.grafico = true;
      else this.grafico = false;

      item.target.classList.add("active");
    },

    hacerFoto(id) {
      setTimeout(() => {
        "use strict";

        const video = document.getElementById("video");
        const canvas = document.getElementById("canvas");
        const snap = document.getElementById("snap");
        const errorMsgElement = document.querySelector("span#errorMsg");
        this.size = document.querySelector(".m-body").getBoundingClientRect();
        const constraints = {
          audio: false,
          video: {
            width: this.size.width,
            height: this.size.height,
          },
        };

        // Access webcam
        async function init() {
          try {
            const stream = await navigator.mediaDevices.getUserMedia(
              constraints
            );
            handleSuccess(stream);
          } catch (e) {
            errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
          }
        }

        // Success
        function handleSuccess(stream) {
          window.stream = stream;
          video.srcObject = stream;
        }

        // Load init
        init();

        // Draw image
        var context = canvas.getContext("2d");
        snap.addEventListener("click", function () {
          context.drawImage(video, 0, 0, 1280, 720);
          let datos = new FormData();
          datos.append("usuario", id);
          datos.append("imgBase64", canvas.toDataURL());

          fetch(
            "http://genkicorpusback.alumnes.inspedralbes.cat:7101/usuario/guardarFotoPerfil",
            {
              method: "POST",
              body: datos,
            }
          )
            .then((response) => response.json())
            .then((data) => {
              Swal.fire({
                position: "center",
                icon: data.status ? "success" : "error",
                title: data.msg,
                showConfirmButton: false,
                timer: 1500,
              });

              //se simula un escape automaticamente para cerrar el modal
              setTimeout(() => {
                document.getElementById("exampleModal").dispatchEvent(
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
              }, 1500);
            });
        });
      }, 500);
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
              <img
                @click="hacerFoto(this.idUsuario)"
                class="img-perfil"
                :src="this.img"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              />
            </div>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                class="
                  modal-dialog
                  modal-lg
                  modal-dialog-centered
                  modal-dialog-scrollable
                "
              >
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      ¡Hazte una foto!
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body" id="modal-body">
                    <div class="m-body">
                      <div class="video-wrap">
                        <video id="video" playsinline autoplay></video>
                      </div>

                      <!-- Webcam video snapshot -->
                      <canvas id="canvas" width="1280" height="720"></canvas>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <!-- Trigger canvas web API -->
                    <div class="controller">
                      <button class="btn btn-dark" id="snap">Capture</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 datos">
          <!-- datos del usuario -->
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
                  <option value="15 min">15 min</option>
                  <option value="30 min">30 min</option>
                  <option value="45 min">45 min</option>
                  <option value="1 h">1 h</option>
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

        <!-- para ver los graficos -->
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
                @click="
                  this.graficoDescanso();
                  cambiarOpcionNav($event);
                "
                class="nav-link"
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
            v-model="this.filtro"
          >
            <option value="Semana" selected>Semana</option>
            <option value="Mes">Mes</option>
          </select>
        </div>

        <div class="col-12 gy-4">
          <div class="grafico">
            <canvas id="grafico" width="400" height="400"></canvas>
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

.modal-content {
  height: 60vh;
}

.m-body {
  height: 100%;
}

.active {
  transition: all 0.7s ease-in-out;
  color: #28844b !important;
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

#canvas {
  display: none;
}

@media only screen and (min-width: 300px) {
  .grafico {
    width: 100% !important;
  }
}

@media only screen and (min-width: 768px) {
  .datos {
    margin-top: 0px;
  }

  .img-perfil {
    width: 70%;
    margin: auto;
  }

  .grafico {
    width: 90% !important;
  }
}

@media only screen and (min-width: 1000px) {
  .grafico {
    width: 70% !important;
  }
}

@media only screen and (min-width: 1400px) {
  .grafico {
    width: 50% !important;
  }
}
</style>
