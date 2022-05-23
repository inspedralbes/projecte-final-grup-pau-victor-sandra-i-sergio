<script>
// import { RouterLink, RouterView } from "vue-router";
import router from "@/router";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  data() {
    return {
      disabled: false,
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

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },
};
</script>

<template>
  <main class="container landingPage ">
    <!--------  MOVIL ------->
    <div class="container">
    <div class="row movil">
      <div class="menu d-flex flex-column justify-content-start ">
        <div class="col-12 alimentacion_div_sm" @click="this.goto('alimentacion')">
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
          <span @click="this.goto('ejercicio')" class="shadow ejercicio_div_sm">
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
          class="col-12 text-left saludmental_div_sm
         shadow"
          @click="this.goto('saludmental')"
        >
          <div @click="this.goto('saludmental')"  >
            <div class="texto_salud">Salud mental y descanso</div>
            <img
              class="img-home"
              @click="this.goto('saludmental')"
              src="../assets/dormir.png"
              alt="chico durmiendo en una cama"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  


    <!--------  ORDENADOR  ------->
    <div class="container">
      <div class="row pc justify-content-center">
          <div class="col-3 alimentacion_div_lg shadow-lg mr-4">ALIMENTACIÓN
            <img src="../assets/comer.png" alt="chico comiendo ensalada">
          </div>
          <div class="col-3 ejercicio_div_lg shadow-lg mx-5">EJERCICIO
            <img src="http://genkicorpusback.alumnes.inspedralbes.cat/img/ejercicio.png" alt="chica haciendo ejercicio">
          </div>
          <div class="col-3 salud_div_lg shadow-lg ml-3">SALUD MENTAL Y DESCANSO
            <img src="../assets/dormir.png" alt="chico durmiendo en una cama">
          </div>
      </div>
    </div>


  </main>
</template>

<style scoped>

.pc {
  width: 102vw;
}


/* Alimentación pantalla grande */
.alimentacion_div_lg {
  background-color: #7ed957c4;
  height: 70vh;
}

.alimentacion_div_lg img {
  position: relative;
  left: -2.5em;
  top: 8em;
}


/* Ejercicio pantalla grande */
.ejercicio_div_lg {
  background-color:#ff914dc4;
  height: 70vh;
}

.ejercicio_div_lg img {
  position: relative;
  left: -1.5em;
  top: 6em;
  max-width: 120%;
}


/* Salud pantalla grande */
.salud_div_lg {
  background-color: #5cb8e6c4;
  height: 70vh;
}

.salud_div_lg img {
  position: relative;
  left: -1.5em;
  top: 6em;
  max-width: 120%;
}


.landingPage .col-12 span {
  font-size: 6vw;
}

.container {
  margin: 0;
  padding: 0;
}

.texto_salud{
  width: 250px;
  margin: 0;
  padding: 0;
}





/********  PANTALLA GRANDE  ********/

@media only screen and (min-width: 1100px) {

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
  left: 6em ;
  max-width: 50%;
  width: auto;
}

.ejercicio_div_sm span {
  border-radius: 0px 10px 10px 0px;
  background-color: #ff914dc4;
  padding: 40px 200px 40px 30px;
  text-transform: uppercase;
  position: relative;
  position: relative;
  margin: 0;
}

.saludmental_div_sm img {
  position: absolute;
  top: 2.6em;
  left: 5.5em;
  max-width: 70%;
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


@media only screen and (min-width: 626px) {
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
    padding-right: 245px !important;
  }

  .ejercicio_div_sm img {
    top: -2.6em;
    left: 6em !important;
    max-width: 50%;
  }

  .saludmental_div_sm
 img {
    top: 1.5em;
    left: 6.05em;
    max-width: 90%;
  }

  .saludmental_div_sm
 {
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

  .saludmental_div_sm
 img {
    top: 1.5em;
    left: 6.05em;
    max-width: 80%;
  }

  .saludmental_div_sm
 {
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

  .saludmental_div_sm
 img {
    top: 1.5em;
    left: 6.05em;
    max-width: 70%;
  }

  .saludmental_div_sm
 {
    padding-right: 550px !important;
  }

  .texto_salud {
    width: 450px;
  }
}



</style>
