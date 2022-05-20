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
  <main class="container landingPage">
    <div class="row">
      <div
        :class="{ hoverA: this.disabled }"
        class="col-12 text-center alimentacion"
        @mouseover="hoverAlimentación;"
        @click="this.goto('alimentacion')"
      >
        <span @click="this.goto('alimentacion')">
          Alimentación
          <img
            class="img-home"
            @click="this.goto('alimentacion')"
            src="../../public/img/alimentacion.png"
            alt=""
          />
        </span>
      </div>

      <div class="col-12 text-center ejercicio" @click="this.goto('ejercicio')">
        <span @click="this.goto('ejercicio')">
          <img
            class="img-home"
            @click="this.goto('ejercicio')"
            src="../../public/img/ejercicio.png"
            alt=""
          />
          Ejercicio
        </span>
      </div>

      <div
        class="col-12 text-center saludmental"
        @click="this.goto('saludmental')"
      >
        <span @click="this.goto('saludmental')">
          Salud mental y descanso
          <img
            class="img-home"
            @click="this.goto('saludmental')"
            src="../../public/img/dormir.png"
            alt=""
          />
        </span>
      </div>
    </div>
  </main>
</template>

<style scoped>
.hoverA {
  animation: hoverA 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes hoverA {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

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
  top: -2.5em;
  left: -1.5em;
  max-width: 60%;
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
  top: -2.6em;
  left: 6.25em;
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
    top: -2.2em;
    left: -2em;
    max-width: 60%;
  }

  .saludmental img {
    top: -2.2em;
    left: 7.4em;
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
    top: -2em;
    left: -2em;
    max-width: 60%;
  }

  .saludmental img {
    top: -2.65em;
    left: 6.05em;
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
    top: -2.5em;
    left: -2.4em;
    max-width: 70%;
  }

  .saludmental img {
    top: -2.6em;
    left: 6.05em;
    max-width: 60%;
  }
}

@media only screen and (min-width: 1300px) {
  .landingPage .col-12 span {
    font-size: 3.5vw;
  }

  .alimentacion img {
    top: -2em;
    left: 4.5em;
    max-width: 80%;
  }

  .ejercicio img {
    top: -1.9em;
    left: -2em;
    max-width: 60%;
  }

  .saludmental img {
    top: -2.18em;
    left: 7.25em;
    max-width: 50%;
  }
}

@media only screen and (min-width: 1600px) {
  .landingPage .col-12 span {
    font-size: 2.75vw;
  }

  .landingPage .col-12 {
    margin-top: 150px;
  }

  .alimentacion img {
    top: -2em;
    left: 4.5em;
    max-width: 80%;
  }

  .ejercicio img {
    top: -2em;
    left: -2em;
    max-width: 60%;
  }

  .saludmental img {
    top: -2.1em;
    left: 7.3em;
    max-width: 50%;
  }
}
</style>
