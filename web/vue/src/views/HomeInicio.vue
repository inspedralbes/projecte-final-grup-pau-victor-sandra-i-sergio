<script>
// import { RouterLink, RouterView } from "vue-router";
import router from "@/router";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      disabled: false,
      tamano: null,
    };
  },
  methods: {
    goto(id) {
      router.push({ name: id });
    },
    hoverAlimentación() {
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 1500);
    },
  },

  computed: {
    ...mapStores(sesionStore),
  },
  created() {
    console.log(this.tamano);
    setInterval(() => {
      if (window.innerWidth > 900) {
        this.tamano = true;
        console.log(this.tamano);
      } else {
        this.tamano = false;
      }
    }, 1);
  },
  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },
};
</script>

<template>
  <main class="container landingPage">
    <!--------  MOVIL ------->
    <div class="container">
      <div class="row movil">
        <div class="menu d-flex flex-column justify-content-start">
          <div
            class="col-12 alimentacion_div_sm"
            @click="this.goto('alimentacion')"
          >
            <span @click="this.goto('alimentacion')" class="shadow">
              Alimentación
              <img
                class="img-home"
                @click="this.goto('alimentacion')"
                src="../assets/comer.png"
                alt="chico comiendo una ensalada"
              />
            </span>
          </div>

          <div class="col-12 ejercicio_div_sm" @click="this.goto('ejercicio')">
            <span
              @click="this.goto('ejercicio')"
              class="shadow ejercicio_div_sm"
            >
              <img
                class="img-home"
                @click="this.goto('ejercicio')"
                src="http://genkicorpusback.alumnes.inspedralbes.cat/img/ejercicio.png"
                alt="chica haciendo ejercicio"
              />
              Ejercicio
            </span>
          </div>
          <div
            class="col-12 text-left saludmental_div_sm shadow"
            @click="this.goto('saludmental')"
          >
            <div @click="this.goto('saludmental')">
              <div class="texto_salud">Salud mental y descanso</div>
              <img
                class="img-home"
                @click="this.goto('saludmental')"
                src="../assets/saludMental2.png"
                alt="chica meditando"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--------  ORDENADOR  ------->
    <div class="container pc_container">
      <div
        v-bind:class="[!this.tamano == true ? 'ocultar' : '']"
        class="row pc justify-content-center"
      >
        <div
          class="col-3 alimentacion_div_lg shadow-lg mr-4"
          @click="this.goto('alimentacion')"
        >
          <h2 class="text-center">ALIMENTACIÓN</h2>
          <img src="../assets/comer.png" alt="chico comiendo ensalada" />
        </div>

        <div
          class="col-3 ejercicio_div_lg shadow-lg mx-5"
          @click="this.goto('ejercicio')"
        >
          <h2 class="text-center">EJERCICIO</h2>
          <img
            src="http://genkicorpusback.alumnes.inspedralbes.cat/img/ejercicio.png"
            alt="chica haciendo ejercicio"
          />
        </div>

        <div
          class="col-3 salud_div_lg shadow-lg ml-3"
          @click="this.goto('saludmental')"
        >
          <h2 class="text-center">SALUD MENTAL Y DESCANSO</h2>
          <img src="../assets/saludMental2.png" alt="chica meditando" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.pc {
  width: 100vw;
}

.pc_container {
  position: absolute;
  bottom: 7px;
}

/* Alimentación pantalla grande */
.alimentacion_div_lg {
  background-color: #9be17d;
  height: 80vh;
  position: relative;
}

.alimentacion_div_lg img {
  position: relative;
  left: -2.5em;
  top: 8em;
}

/* Ejercicio pantalla grande */
.ejercicio_div_lg {
  background-color: #ffaa76;
  height: 80vh;
  position: relative;
}

.ejercicio_div_lg img {
  position: relative;
  left: -1.5em;
  top: 6em;
  max-width: 120%;
}

/* Salud pantalla grande */
.salud_div_lg {
  background-color: #81c8eb;
  height: 80vh;
  position: relative;
  position: relative;
}

.salud_div_lg img {
  position: relative;
  left: -3.2em;
  top: 15em;
  max-width: 145%;
}

.landingPage .col-12 span {
  font-size: 6vw;
}

.container {
  margin: 0;
  padding: 0;
}

.texto_salud {
  width: 250px;
  margin: 0;
  padding: 0;
}

/********  PANTALLA GRANDE  ********/

h2 {
  font-weight: 550;
  padding-top: 1.8em;
}


.alimentacion_div_lg::before {
  content: "";
  height: 104%;
  width: 104%;
  background-color: #43742fc4;
  position: absolute;
  top: -1.5em;
  z-index: -1;
}

.ejercicio_div_lg::before {
  content: "";
  height: 104%;
  width: 104%;
  background-color: #e25a00e5;
  position: absolute;
  top: -1.5em;
  z-index: -1;
}

.salud_div_lg::before {
  content: "";
  height: 104%;
  width: 104%;
  background-color: #315e75c4;
  position: absolute;
  top: -1.5em;
  z-index: -1;
}

@media only screen and (min-width: 700px) {
  .alimentacion_div_lg img {
    position: relative;
    left: -1.5em;
    top: 12em;
    max-width: 115%;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -1.1em;
    top: 10em;
    max-width: 120%;
  }

  .salud_div_lg img {
    position: relative;
    left: -2em;
    top: 14em;
    max-width: 140%;
  }
}

@media only screen and (min-width: 900px) {
  .pc {
    visibility: visible !important;
  }
  .movil {
    display: none !important;
  }
  .alimentacion_div_lg img {
    position: relative;
    left: -1.5em;
    top: 9em;
    max-width: 115%;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -1.1em;
    top: 7em;
    max-width: 120%;
  }

  .salud_div_lg img {
    position: relative;
    left: -2em;
    top: 9em;
    max-width: 140%;
  }
}

@media only screen and (min-width: 1050px) {
  .alimentacion_div_lg img {
    position: relative;
    left: -0.3em;
    top: 12em;
    max-width: 100% !important;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -0.3em;
    top: 9em;
    max-width: 110%;
  }

  .salud_div_lg img {
    position: relative;
    left: -3.2em;
    top: 10em;
    max-width: 140%;
  }
}

@media only screen and (min-width: 1280px) {
  .alimentacion_div_lg img {
    position: relative;
    left: 0.6em;
    top: 10em;
    max-width: 90% !important;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -0.1em;
    top: 6.4em;
    max-width: 100%;
  }

  .salud_div_lg img {
    position: relative;
    left: -3.2em;
    top: 10em;
    max-width: 135%;
  }
}

@media only screen and (min-width: 1400px) {
  .alimentacion_div_lg img {
    position: relative;
    left: 0.6em;
    top: 10em;
    max-width: 90% !important;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: 0.2em;
    top: 6em;
    max-width: 100%;
  }

  .salud_div_lg img {
    position: relative;
    left: -3.2em;
    top: 8em;
    max-width: 135%;
  }
}

@media only screen and (min-width: 1600px) {
  .alimentacion_div_lg img {
    position: relative;
    left: 1em;
    top: 12em;
    max-width: 509% !important;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -0.1em;
    top: 8em;
    max-width: 100%;
  }

  .salud_div_lg img {
    position: relative;
    left: -3.2em;
    top: 12em;
    max-width: 135%;
  }
}

@media only screen and (min-width: 1730px) {
  .alimentacion_div_lg img {
    position: relative;
    left: 0.5em;
    top: 12em;
    max-width: 509% !important;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -0.1em;
    top: 8em;
    max-width: 100%;
  }

  .salud_div_lg img {
    position: relative;
    left: -3.2em;
    top: 12em;
    max-width: 135%;
  }
}

@media only screen and (min-width: 1800px) {
  .alimentacion_div_lg img {
    position: relative;
    left: 2em;
    top: 12em;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -0.1em;
    top: 8em;
    max-width: 90%;
  }

  .salud_div_lg img {
    position: relative;
    left: -3.2em;
    top: 13em;
    max-width: 145%;
  }
}

@media only screen and (min-width: 1900px) {
  .alimentacion_div_lg img {
    position: relative;
    left: 2em;
    top: 12em;
    width: 80%;
  }

  .ejercicio_div_lg img {
    position: relative;
    left: -0.1em;
    top: 6em;
    max-width: 200% !important;
  }

  .salud_div_lg img {
    position: relative;
    left: -1.2em;
    top: 12em;
    max-width: 140%;
  }
}


/********  MOVIL ********/

.ejercicio_div_sm {
  margin-top: 170px !important;
}

.landingPage .col-12 {
  margin-top: 110px;
}

.alimentacion_div_sm img {
  position: absolute;
  top: -1.4em;
  left: 8em;
  max-width: 45%;
  width: auto;
}

.alimentacion_div_sm span {
  border-radius: 0px 10px 10px 0px;
  background-color: #7ed957c4;
  padding: 40px 140px 40px 30px;
  text-transform: uppercase;
  position: relative;
  margin: 0;
}

.ejercicio_div_sm img {
  position: absolute;
  top: -2.5em;
  left: 6em;
  max-width: 50%;
  width: auto;
}

.ejercicio_div_sm span {
  border-radius: 0px 10px 10px 0px;
  background-color: #ff914dc4;
  padding: 40px 200px 40px 0px;
  text-transform: uppercase;
  position: relative;
  margin: 0;
}

.saludmental_div_sm img {
  position: absolute;
  top: 0.2em;
  left: 6.2em;
  max-width: 85%;
  width: auto;
}

.saludmental_div_sm {
  border-radius: 0px 10px 10px 0px;
  background-color: #5cb8e6c4;
  padding: 40px 0px 40px 30px;
  text-transform: uppercase;
  position: relative;
  font-size: 5vw;
  width: 330px !important;
}

@media only screen and (min-width: 300px) {
  .ordenador {
    display: none;
  }
  .movil {
    display: block;
  }

  .alimentacion_div_sm {
    padding-right: 10px !important;
    margin: 0;
  }

  .alimentacion_div_sm img {
    top: -1em;
    left: 8em;
    max-width: 45%;
  }

  .ejercicio_div_sm {
    padding-right: 200px !important;
  }

  .ejercicio_div_sm img {
    top: -3em;
    left: 6em !important;
    max-width: 55%;
  }

  .saludmental_div_sm img {
    top: -1.3em;
    left: 6.05em;
    max-width: 85%;
  }

  .saludmental_div_sm {
    padding-right: 230px;
  }

  .texto_salud {
    width: 200px;
  }
}

@media only screen and (min-width: 600px) {
  .ordenador {
    display: none;
  }

  .alimentacion_div_sm {
    padding-right: 50px !important;
    margin: 0;
  }

  .alimentacion_div_sm img {
    top: -1em;
    left: 7em;
    max-width: 40%;
  }

  .ejercicio_div_sm {
    padding-right: 240px !important;
  }

  .ejercicio_div_sm img {
    top: -2.6em;
    left: 6em !important;
    max-width: 50%;
  }

  .saludmental_div_sm img {
    top: -0.6em;
    left: 6.05em;
    max-width: 85%;
  }

  .saludmental_div_sm {
    padding-right: 430px;
  }

  .texto_salud {
    width: 400px;
  }
}

@media only screen and (min-width: 768px) {
  .ordenador {
    display: none;
  }

  .landingPage .col-12 span {
    font-size: 5vw;
  }

  .alimentacion_div_sm {
    padding-right: 200px !important;
  }

  .alimentacion_div_sm img {
    top: -1em;
    left: 7em;
    max-width: 40%;
  }

  .ejercicio_div_sm {
    padding-right: 270px !important;
  }

  .ejercicio_div_sm img {
    top: -2.6em;
    left: 6em !important;
    max-width: 50%;
  }

  .saludmental_div_sm img {
    top: -0.5em;
    left: 6em;
    max-width: 80%;
  }

  .saludmental_div_sm {
    padding-right: 480px;
  }

  .texto_salud {
    width: 380px;
  }
}

@media only screen and (min-width: 1024px) {
  .ordenador {
    display: none;
  }

  .landingPage .col-12 span {
    font-size: 5vw;
  }

  .alimentacion_div_sm {
    padding-right: 220px !important;
  }

  .alimentacion_div_sm img {
    top: -1em;
    left: 7em;
    max-width: 40%;
  }

  .ejercicio_div_sm {
    padding-right: 300px !important;
  }

  .ejercicio_div_sm img {
    top: -1.6em;
    left: 6em !important;
    max-width: 40%;
  }

  .saludmental_div_sm img {
    top: -0.2em;
    left: 6em;
    max-width: 75%;
  }

  .saludmental_div_sm {
    padding-right: 550px !important;
  }

  .texto_salud {
    width: 450px;
  }
}

.ocultar {
  display: none;
}
</style>
