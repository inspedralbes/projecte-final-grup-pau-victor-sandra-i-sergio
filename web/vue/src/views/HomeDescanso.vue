<script>
import Header from "../components/SubHeader.vue";
import CardSuenos from "../components/CardSuenos.vue";
import Acordeon from "../components/AcordeonDescanso.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

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
      accordionID: [
        {
          valor1: "panelsStayOpen-headingOne",
          valor2: "panelsStayOpen-headingTwo",
          valor3: "panelsStayOpen-headingThree",
          valor4: "panelsStayOpen-headingFour",
          valor5: "panelsStayOpen-headingFive",
        },
      ],
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
    fetch("http://192.168.210.162:9000/descanso/tipos-suenos")
      // fetch("http://localhost:9000/descanso/tipos-suenos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.elemento = data.tipoSueno;
      });
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
      // let divResultado = document.getElementById("card-respuesta");
      // divResultado.style.display = "block";

      var cuestDescanso = new FormData();
      cuestDescanso.append("descripcionSueno", JSON.stringify(this.selected));
      cuestDescanso.append("usuario", "alvaro");

      fetch("http://192.168.210.162:9000/descanso/respuesta-cuestionario", {
        // fetch("http://localhost:9000/descanso/respuesta-cuestionario", {
        method: "POST",
        body: cuestDescanso,
      })
        .then((response) => response.json())
        .then((data) => {
          for (let i = 0; i < this.selected.length; i++) {
            console.log(i);
            console.log(data.resultado[i].tipo);
            console.log(data.resultado[i].respuesta);
            this.resultado = data.resultado;
          }
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
                <h4>Selecciona las opciones que más se asemejen a tu sueño</h4>
              </div>
            </div>

            <div class="row justify-content-center mt-3">
              <div
                class="col-6 col-sm-4 col-md-3 col-lg-2 gy-3"
                v-for="(check, index) in elemento"
                :key="index"
                v-bind:value="check"
              >
                <!--  CARTAS MOTIVOS SUEÑO  -->
                <CardSuenos
                  class="d-flex align-items-center justify-content-center flex-direction-row btn btn-outline-light p-2"
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
  min-height: 80vh;
  background-image: url("../../../public/img/stars-back.png");
  background-size: 800px;
  background-repeat: repeat;
  position: absolute;
}

.submain .col-8 p {
  margin: 0 0 0 7px;
}

/****  CUESTIONARIO  *****/

.cuestionario_sueño {
  color: rgb(255, 255, 255);
  margin-top: 50px;
  padding: 30px;
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
  max-width: 15%;
  min-width: 150px;
  margin: 1%;
}

/****  RESPUESTA ACORDEON  ****/

.acordion-margin-top {
  margin-top: 5%;
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
</style>
