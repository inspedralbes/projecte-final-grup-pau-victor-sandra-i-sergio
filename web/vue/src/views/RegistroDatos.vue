<script>
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";
import router from "@/router";

export default {
  computed: {
    ...mapStores(sesionStore),
  },

  data() {
    return {
      edad: 0,
      nivelFisico: "",
      tiempo: "",
      ocupacion: "",
      sexo: "",
      error: 0,
    };
  },

  methods: {
    enviarDatos() {
      this.nivelFisico =
        this.nivelFisico == 1
          ? "Principiante"
          : this.nivelFisico == 3
          ? "Avanzado"
          : "Intermedio";
      if (
        this.edad == 0 ||
        this.nivelFisico == "" ||
        this.tiempo == "" ||
        this.ocupacion == "" ||
        this.sexo == ""
      ) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Faltan campos por rellenar",
          showConfirmButton: false,
          timer: 2000,
        });

        setTimeout(() => {
          this.error = 1;
        }, 2000);
      } else {
        let datos = new FormData();
        datos.append("idUsuario", this.sesionStore.getUsuario._id);
        datos.append(
          "datosPersonales",
          JSON.stringify({
            edad: this.edad,
            ocupacion: this.ocupacion,
            sexo: this.sexo,
            nivelFisico: this.nivelFisico,
            disponibilidadTiempo: this.tiempo,
          })
        );

        fetch(
          "http://genkicorpusback.alumnes.inspedralbes.cat:7101/usuario/register-pt2",
          {
            method: "PUT",
            body: datos,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status) {
              this.sesionStore.setUsuario(data.usuario);
              setTimeout(() => {
                router.push({ name: this.sesionStore.getRutaAnterior });
              }, 2100);
            }

            Swal.fire({
              position: "center",
              icon: "success",
              title: data.msg,
              showConfirmButton: false,
              timer: 2000,
            });
          });
      }
    },
  },
};
</script>
<template>
  <!-- P.2 REGISTRO - DATOS DEL USUARIO -->
  <main
    class="container justify-content-center d-flex align-items-center scale1"
  >
    <div class="div_datos REGISTRO2 align-items-start shadow-lg mt-3 mb-3">
      <div class="div2 p-4">
        <h3 class="text-center titulo mb-5">Cuentanos un poco más sobre ti</h3>

        <div class="row align-items-center">
          <div class="col-md-7 col-12">
            <div class="row align-items-center">
              <div class="col-auto">
                <label class="bold" for="edad">Edad</label>
              </div>
              <div class="col-5 col-md-7 g-1">
                <input
                  type="number"
                  class="form-control"
                  :class="[this.error ? 'error' : '']"
                  id="edad"
                  :value="edad"
                  min="0"
                  max="100"
                  @input="(event) => (edad = event.target.value)"
                />
              </div>
            </div>

            <div class="row align-items-start mt-4">
              <div class="col-md-auto col-12">
                <label class="bold mb-3" for="Ocupación">Ocupación</label>
                <div
                  class="ocupacion p-3 pe-4 shadow-sm"
                  :class="[this.error ? 'error' : '']"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Ocupacion"
                      id="trabajador"
                      value="Trabajo"
                      v-model="this.ocupacion"
                    />
                    <label class="form-check-label" for="trabajador"
                      >Trabajo</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Ocupacion"
                      id="estudiante"
                      value="Estudio"
                      v-model="this.ocupacion"
                    />
                    <label class="form-check-label" for="estudiante"
                      >Estudio</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="Ocupacion"
                      id="otro"
                      value="Otro"
                      v-model="this.ocupacion"
                    />
                    <label class="form-check-label" for="otro">Otro</label>
                  </div>
                </div>
              </div>

              <div class="col-md-auto col-12 gy-3 gy-md-0">
                <label class="bold mb-3" for="Ocupación">Sexo</label>
                <div
                  class="sexo p-3 pe-4 shadow-sm"
                  :class="[this.error ? 'error' : '']"
                >
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="sexo"
                      id="mujer"
                      value="Mujer"
                      v-model="this.sexo"
                    />
                    <label class="form-check-label" for="mujer">Mujer</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="sexo"
                      id="hombre"
                      value="Hombre"
                      v-model="this.sexo"
                    />
                    <label class="form-check-label" for="hombre">Hombre</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-5 col-12">
            <div class="row nivel_row align-items-center mt-2">
              <div class="col nivel my-3">
                <label for="nivel" class="form-label bold">Nivel físico</label>
                <input
                  type="range"
                  class="form-range"
                  :class="[this.error ? 'errorSlider' : '']"
                  min="1"
                  max="3"
                  id="nivel"
                  v-model="this.nivelFisico"
                />
                <br />

                <div class="d-flex justify-content-between rangeNivelFisico">
                  <span class="form-label relativeP">Principiante</span>
                  <span class="form-label relativeI">Intermedio</span>
                  <span class="form-label relativeA">Avanzado</span>

                </div>
              </div>
            </div>

            <div class="row nivel_row align-items-center mt-2">
              <div class="col nivel my-3">
                <label for="nivel" class="form-label bold"
                  >Disponibilidad de tiempo</label
                >
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="this.tiempo"
                  :class="[this.error ? 'error' : '']"
                >
                  <option selected disabled>Selecciona una opción</option>
                  <option>15 min</option>
                  <option>30 min</option>
                  <option>45 min</option>
                  <option>1 h</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-3">
          <input
            type="button"
            class="btn btn-primary text-center"
            @click="this.enviarDatos()"
            value="Confirmar"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  /***** Parte 2 registro ******/
  .titulo {
    font-weight: 600;
  }


  main {
    min-height: 89.75vh;
  }

  .ocupacion,
  .sexo {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 8px;
    border-radius: 8px;
    transition: all 0.5s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .error {
    background-color: rgba(255, 0, 0, 15%);
    border: 1px solid rgba(255, 0, 0, 0.446);
  }

  .errorSlider::-webkit-slider-runnable-track {
    -webkit-appearance: none;
    background-color: rgba(255, 0, 0, 15%);
    border: 1px solid rgba(197, 0, 0, 0.593);
  }

  .errorSlider::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: rgba(223, 0, 0, 0.883);
    border: 1px solid rgba(255, 0, 0, 0.446);
  }

  .errorSlider::-webkit-slider-thumb:focus,
  .errorSlider::-webkit-slider-thumb:active {
    border-color: rgba(223, 0, 0, 0.335) !important;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.335) !important;
  }

  .error:focus,
  .error:active {
    border-color: rgba(223, 0, 0, 0.533) !important;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(255, 0, 0, 0.103) !important;
  }

  .REGISTRO2 {
    background-image: url("http://genkicorpusback.alumnes.inspedralbes.cat/img/login.png");
    border-radius: 10px;
  }

  .div2 {
    margin: 20px;
  }

  .edad_row {
    padding-left: 0;
  }

  .rangeNivelFisico span{
      font-size: 0.75em;
  }

  .relativeP {
    position: relative;
    left: -1.9em;
  }

  .relativeI {
    position: relative;
    left: -0.3em;
  }

  .relativeA {
    position: relative;
    right: -1.5em;
  }

  @media only screen and (min-width: 380px) {
    .div_datos {
      max-width: 760px;
      width: 100%;
    }
  }
</style>
