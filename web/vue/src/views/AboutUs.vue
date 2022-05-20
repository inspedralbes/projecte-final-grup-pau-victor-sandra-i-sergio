<script>
import Header from "../components/SubHeader.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapStores(sesionStore),
  },
  mounted() {},
};
</script>

<template>
  <div>
    <div class="titulo text-center mt-5">
      <h1 class="bold">Sobre Nosotros</h1>
    </div>
    <div class="aboutUs d-flex justify-content-center">
      <div class="container m-4">
        <div class="row justify-content-center align-items-center">
          <div class="col-12 col-lg-4">
            <img class="logo" src="../../img/GenkiCorpusLogo.png" alt="" />
          </div>
          <div class="col-12 col-lg-8">
            <h4>Nuestra razón de ser</h4>
            <p class="mt-3 justificado">
              La misión principal de Genki Corpus es ofrecer un sitio web
              confiable que permita a los usuarios construir una vida más
              saludable y equilibrada en los 3 pilares más importantes en
              nuestra salud. Asimismo, este proyecto busca introducir el tema de
              la salud mental y el descanso como una parte más de nuestra vida a
              la que tenemos que prestar una cuidadosa y constante atención.
            </p>
          </div>
        </div>

        <div class="row mt-5 align-items-center">
          <div class="col-12 col-lg-7 mb-4 videoCol">
            <h4 class="mb-4">Conoce un poco más Genki Corpus</h4>
            <div class="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GhDyS5UO5hQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <div id="container" class="col-12 col-lg-5 text-center textoCol">
            Mejora tu
            <div id="flip">
              <div><div class="saludMental">Salud Mental</div></div>
              <div><div class="alimentacion">Alimentación</div></div>
              <div><div class="ejercicio">Condición física</div></div>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-7 equipo">
            <h4>Nuestro equipo</h4>
            <p class="mt-3 justificado">
              Somos 4 estudiantes de DAW (Desarollo de Aplicaciones Web) que
              hemos decidido desarrollar nuestro proyecto de fin de ciclo sobre
              una de las cuestiones que más ha preocupado a la sociedad los
              últimos 3 años, la <span class="bold">salud</span>. La principal
              motivación para realizar este proyecto fue nuestra propia
              preocupación e interes por la salud, por nuestra idea de que ser
              felices y tener una vida saludable es equivalente a entender y
              manejar nuestras emociones, hacer actividad fisica y tener una
              dieta saludable.
            </p>

            <div class="encuentranos mt-5">
              <h5>Donde encontrarnos</h5>
              <div class="linkedin mt-4">
                <a
                  class="lin pe-4"
                  href="https://www.linkedin.com/in/paumunozolivares?original_referer="
                  target="_blank"
                  ><i class="bi bi-linkedin"></i> Pau Muñoz Olivares</a
                >
                <a
                  class="lin pe-4"
                  href="https://www.linkedin.com/in/victor-moreno-moron"
                  target="_blank"
                  ><i class="bi bi-linkedin"></i> Víctor Moreno Moron</a
                >
                <a
                  class="lin pe-4"
                  href="https://www.linkedin.com/in/sandraortizvega"
                  target="_blank"
                  ><i class="bi bi-linkedin"></i> Sandra Ortiz Vega</a
                >
              </div>
            </div>
          </div>
          <div class="col-5 equipo">
            <img class="equipo_foto" src="../../img/equipo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 300px;
}
iframe {
  margin: auto;
}

h4 {
  color: #28844b;
  font-weight: 600;
}

h5 {
  color: #28844b;
  font-weight: 600;
}

.justificado {
  text-align: justify;
  text-justify: inter-word;
}

.textoCol,
.videoCo {
  margin-bottom: 20px;
  margin-top: 15px;
}

.equipo {
  margin-bottom: 20px;
  margin-top: 50px;
}

.logo {
  display: block;
  margin: auto;
  margin-bottom: 40px;
}

.equipo_foto {
  width: 300px;
  display: block;
  margin: auto;
}

a {
  text-decoration: none;
  color: #28844b;
}

.lin {
  color: #a8cf45;
}

@import url("https://fonts.googleapis.com/css?family=Roboto:700");

body {
  margin: 0px;
  font-family: "Roboto";
  text-align: center;
}

#container {
  color: #999;
  text-transform: uppercase;
  font-size: 35px;
  height: 153px;
  font-weight: bold;
}

#flip {
  height: 50px;
  height: 67px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 5px 15px;
  margin-bottom: 55px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 8s linear infinite;
}

#flip div .alimentacion {
  background: #7ed957;
}
#flip div .saludMental {
  background: #5cb8e6;
}
#flip div .ejercicio {
  background: #ff914d;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  10% {
    margin-top: -220px;
  }
  25% {
    margin-top: -220px;
  }
  40% {
    margin-top: -110px;
  }
  55% {
    margin-top: -110px;
  }
  70% {
    margin-top: -4px;
  }
  90% {
    margin-top: -4px;
  }
  99% {
    margin-top: 33px;
  }
  100% {
    margin-top: 33px;
  }
}
</style>
