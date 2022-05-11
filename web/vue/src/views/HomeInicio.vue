<script>
// import { RouterLink, RouterView } from "vue-router";
import router from "@/router";
import { sesionStore } from '@/stores/sesionStore'

import { mapStores } from 'pinia'

export default {

  methods: {
    goto(id) {
      router.push({ name: id });
    },
  },

  mounted() {
    console.log(this.sesionStore.getSesion);
    console.log(this.sesionStore.getUser);
  },

  computed: {
    ...mapStores(sesionStore),
  },
};
</script>

<template>
  <main class="container landingPage">
    <div class="row">
      <div class="col-12 text-center alimentacion" @click="this.goto('alimentacion')">
        <span @click="this.goto('alimentacion')">
          Alimentación
          <img class="img-home" @click="this.goto('alimentacion')" src="../../public/img/alimentacion.png" alt="" />
        </span>
      </div>

      <div class="col-12 text-center ejercicio" @click="this.goto('ejercicio')">
        <span @click="this.goto('ejercicio')">
          <img class="img-home" @click="this.goto('ejercicio')" src="../../public/img/ejercicio.png" alt="" />
          Ejercicio
        </span>
      </div>

      <div class="col-12 text-center saludmental" @click="this.goto('saludmental')">
        <span @click="this.goto('saludmental')">
          Salud mental y descanso
          <img class="img-home" @click="this.goto('saludmental')" src="../../public/img/dormir.png" alt="" />
        </span>
      </div>

      <!-- <div class="col-12 gy-4">
        <span @click="this.goto($event.target.id)" id="ejercicio">Ejercicio </span>
      </div>

      <div class="col-12 gy-4">
        <div class="row align-items-center">
          <div class="col-6 titulo-saludDescanso">
            <span @click="this.goto($event.target.id)" id="saludmental">Salud Mental y Descanso</span>
          </div>
          <div class="col-6">

            <img class="img-fluid" src="../../public/img/alimentacion.png" alt="">

          </div>

        </div>

      </div> -->
    </div>
  </main>
</template>

<style scoped>
.landingPage .col-12 span {
  font-size: 6vw;
}

.landingPage .col-12 {
  margin-top: 130px;
}

.alimentacion img {
  position: absolute;
  top: -2.5em;
  left: 4em;
  max-width: 90%;
  width: auto;
}

.alimentacion span {
  border-radius: 10px;
  background-color: #7ed957c4;
  padding: 10px 60px 10px 10px;
  text-transform: uppercase;
  position: relative;
}

.ejercicio img {
  position: absolute;
  top: -2em;
  left: -2.75em;
  max-width: 100%;
  width: auto;
}

.ejercicio span {
  border-radius: 10px;
  background-color: #ff914dc4;
  padding: 10px 10px 10px 60px;
  text-transform: uppercase;
  position: relative;
}

.saludmental img {
  position: absolute;
  top: -3.75em;
  left: 6.5em;
  max-width: 60%;
  width: auto;
}

.saludmental span {
  border-radius: 10px;
  background-color: #5cb8e6c4;
  padding: 10px 10px 10px 10px;
  text-transform: uppercase;
  position: relative;
}

.alimentacion:hover {
  box-shadow: red;
}

@media only screen and (min-width: 626px) {
  .landingPage .col-12 span {
    font-size: 4.5vw;
  }

  .alimentacion img {
    top: -2em;
    left: 4.5em;
    max-width: 80%;
  }

  .ejercicio img {
    top: -1.35em;
    left: -2.5em;
    max-width: 90%;
  }

  .saludmental img {
    top: -3em;
    left: 7.25em;
    max-width: 50%;
  }
}

@media only screen and (min-width: 768px) {
  .landingPage .col-12 span {
    font-size: 5vw;
  }

  .alimentacion img {
    top: -2em;
    left: 4.5em;
    max-width: 80%;
  }

  .ejercicio img {
    top: -1.35em;
    left: -2.5em;
    max-width: 90%;
  }

  .saludmental img {
    top: -3.75em;
    left: 6em;
    max-width: 60%;
  }
}

@media only screen and (min-width: 1024px) {
  .landingPage .col-12 span {
    font-size: 4vw;
  }

  .alimentacion img {
    top: -2em;
    left: 4.5em;
    max-width: 80%;
  }

  .ejercicio img {
    top: -1.35em;
    left: -2.5em;
    max-width: 90%;
  }

  .saludmental img {
    top: -3.75em;
    left: 6em;
    max-width: 60%;
  }
}

@media only screen and (min-width: 1600px) {
  .landingPage .col-12 span {
    font-size: 3.5vw;
  }

  .landingPage .col-12 {
    margin-top: 130px;
  }

  .alimentacion img {
    top: -2em;
    left: 4.5em;
    max-width: 80%;
  }

  .ejercicio img {
    top: -1.35em;
    left: -2.5em;
    max-width: 90%;
  }

  .saludmental img {
    top: -3em;
    left: 7.25em;
    max-width: 50%;
  }
}
</style>
