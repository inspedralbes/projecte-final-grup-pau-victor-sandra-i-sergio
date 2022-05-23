<script>
import Header from "../components/SubHeader.vue";
import CardSuenos from "../components/CardSuenos.vue";
import Acordeon from "../components/AcordeonDescanso.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";
import router from "../router";

export default {
  components: {
    Header,
    CardSuenos,
    Acordeon,
  },

  computed: {
    ...mapStores(sesionStore),
  },

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },

  data() {
    return {
      selected: [],
      elemento: [],
      resultado: [],
      sueno: null,
      animacion1: false,
      animacion2: false,
      sinsueno: ["No he soñado nada"],
      accordionClass: [
        {
          valor1: "panelsStayOpen-collapseOne",
          valor2: "panelsStayOpen-collapseTwo",
          valor3: "panelsStayOpen-collapseThree",
          valor4: "panelsStayOpen-collapseFour",
          valor5: "panelsStayOpen-collapseFive",
        },
      ],
    };
  },

  beforeMount() {
    fetch(
      "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/tipos-suenos"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.elemento = data.tipoSueno;
      });
  },

  created() {
    if (!Object.keys(this.sesionStore.getUsuario).length) {
      Swal.fire({
        title: "¡Inicia tu sesión o registrate!",
        text: "De lo contrario, tu respuesta no se guardará y no podrás ver tu seguimiento",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iniciar sesion",
        cancelButtonText: "Continuar sin cuenta",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push({ name: "iniciarSesion" });
        }
      });
    }
  },

  methods: {
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.selected = ""), (this.elemento = null);
    },

    retroceder() {
      window.history.back();
    },

    guardarseleccionada(id) {
      if (this.selected.length < 5) {
        if (this.selected.includes(id)) {
          this.selected = this.selected.filter((v) => {
            console.log(v);
            return v != id;
          });
        } else {
          this.selected.push(id);
        }
      } else {
        if (this.selected.includes(id)) {
          this.selected = this.selected.filter((v) => {
            return v != id;
          });
        } else {
          alert("No puedes seleccionar más de 5 opciones");
        }
      }

      console.log(this.selected);
      console.log(this.selected.length);
    },

    enviarFormulario() {
      // Si está registrado, guardar la respuesta en la BD
      if (Object.keys(this.sesionStore.getUsuario).length) {
        var guardarDatosDescanso = new FormData();
        guardarDatosDescanso.append(
          "descripcionSueno",
          JSON.stringify(this.selected)
        );
        guardarDatosDescanso.append("usuario", this.sesionStore.getUsuario._id);

        fetch(
          "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/guardar-datos-cuestionario",
          {
            method: "POST",
            body: guardarDatosDescanso,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.resultado = data.resultado;
          });
      }

      // Devolver la respuesta a lo respondido en el cuestionario
      var cuestDescanso = new FormData();
      cuestDescanso.append("descripcionSueno", JSON.stringify(this.selected));

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/respuesta-cuestionario",
        {
          method: "POST",
          body: cuestDescanso,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.resultado = data.resultado;
        });
    },

    enviarSinSueno() {
      this.selected = 1;
      // Si está registrado, guardar la respuesta en la BD
      if (Object.keys(this.sesionStore.getUsuario).length) {
        var guardarDatosSinSueno = new FormData();
        guardarDatosSinSueno.append(
          "descripcionSueno",
          JSON.stringify(this.sinsueno)
        );
        guardarDatosSinSueno.append("usuario", this.sesionStore.getUsuario._id);

        fetch(
          "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/guardar-datos-cuestionario",
          {
            method: "POST",
            body: guardarDatosSinSueno,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.resultado = data.resultado;
          });
      }
      // Devolver la respuesta a lo respondido en el cuestionario
      var cuestSinSueno = new FormData();
      cuestSinSueno.append("descripcionSueno", JSON.stringify(this.sinsueno));
      for (var pair of cuestSinSueno.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/descanso/respuesta-cuestionario",
        {
          method: "POST",
          body: cuestSinSueno,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.resultado = data.resultado;
          console.log(this.resultado);
        });
    },

    activar() {
      this.animacion1 = true;
      setTimeout(() => {
        this.animacion2 = true;
      }, 1000);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
    </div>

    <div class="fondo">
      <div class="submain">
        <Transition name="bounce">
          <div class="container cuestionario_sueño" v-if="!this.animacion1">
            <div class="row">
              <div class="col-12 text-center">
                <h2 class="titulo_cuestionario text-center">
                  ¿Que has soñado hoy?
                </h2>
              </div>
              <div class="col-12 text-center subtitulo">
                <h4 class="text-sec">
                  Selecciona las opciones que más se asemejen a tu sueño
                </h4>
              </div>
            </div>

            <div class="row justify-content-center mt-3">
              <div
                class="col-4 col-sm-4 col-md-3 col-lg-2 gy-3 descansoCards"
                v-for="(check, index) in elemento"
                :key="index"
                v-bind:value="check"
              >
                <!--  CARTAS MOTIVOS SUEÑO  -->
                <CardSuenos
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-direction-row
                    p-2
                  "
                  @id="this.guardarseleccionada"
                  :infoCuest="check"
                  :contador="this.selected.length"
                />
              </div>

              <div class="col-12 gy-4 text-center">
                <input
                  class="btn btn-outline-light form-submit"
                  type="button"
                  @click="enviarFormulario(), activar()"
                  value="Analizar sueño"
                  :disabled="!this.selected.length"
                />
                <input
                  class="btn btn-outline-danger form-submit m-left"
                  type="button"
                  @click="enviarSinSueno(), activar()"
                  value="No he soñado nada"
                />
              </div>
            </div>
          </div>
        </Transition>

        <Transition name="bounce2">
          <!--  RESPUESTA CUESTIONARIO SUEÑO  -->
          <div
            v-if="this.animacion2"
            class="container accordion acordion-margin-top"
          >
            <div class="row">
              <div
                v-for="(sueno, index) in selected"
                :key="index"
                v-bind:value="sueno.value"
                class="col-12"
              >
                <div class="align-items-center justify-content-center">
                  <Acordeon
                    :infoAcordeon="this.resultado[index]"
                    :index="index"
                  />
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
/****  FONDO DE PANTALLA  ***/

.fondo {
  min-height: 100vh;
  height: auto;
  background: linear-gradient(90deg, #162046 0%, #0a0b0e 100%);
}

.submain {
  width: 100%;
  min-height: 100vh;
  background-image: url("http://genkicorpusback.alumnes.inspedralbes.cat/img/stars-back.png");
  background-size: 800px;
  background-repeat: repeat;
}

.submain .col-8 p {
  margin: 0 0 0 7px;
}

/****  CUESTIONARIO  *****/

.cuestionario_sueño {
  color: rgb(255, 255, 255);
  padding: 70px 30px 30px 30px;
}

.titulo_cuestionario {
  font-weight: 600;
}

.subtitulo {
  padding: 15px;
}

.emoji_sueño {
  width: 35px;
}

.card-group {
  display: flex;
  justify-content: center;
}

.card {
  margin: 1%;
}

/****  RESPUESTA ACORDEON  ****/

.acordion-margin-top {
  padding-top: 5%;
}

/*******  ANIMACIONES  *******/

.bounce-enter-active {
  animation: bounce-in 1s ease-in-out 0s 1 normal reverse;
}

.bounce-leave-active {
  animation: bounce-in 1s ease-in-out 0s 1 normal;
}

@keyframes bounce-in {
  from {
  }

  40% {
    transform: translate(0, 100px);
  }

  to {
    transform: translate(0, -700px);
    opacity: 0;
  }
}

.bounce2-enter-active {
  animation: bounce2-in 1s ease-in-out 0s 1 normal;
}

.bounce2-leave-active {
  animation: bounce2-in 1s ease-in-out 0s 1 normal reverse;
}

@keyframes bounce2-in {
  from {
    transform: translate(0, 700px);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.m-left {
  margin-left: 5px;
}

@media only screen and (max-width: 500px) {
  .cuestionario_sueño {
    color: rgb(255, 255, 255);
    padding: 50px 20px 30px 20px;
  }

  .descansoCards {
    padding: 0.25em;
    margin-top: 0.2em;
  }

  .form-submit {
    margin-top: 0.5em;
  }

  .text-sec {
    font-size: 1.1em;
  }
}
</style>
