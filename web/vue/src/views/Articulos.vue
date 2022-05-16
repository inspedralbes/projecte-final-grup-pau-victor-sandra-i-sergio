<script>
import Header from "../components/SubHeader.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  components: {
    Header,
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
  <div>
    <div>
      <Header />
    </div>
    <section class="articulos">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="lista">
              <ol>
                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5">¿Por qué soñamos?</i>
                    </div>
                    <div class="card-body">
                      Los sueños constituyen una parte irremplazable de la
                      riqueza de ser humanos. Podemos acordarnos o no, pueden
                      ser agradables o terroríficos, pero lo cierto es que todos
                      soñamos, sin excepciones. Es por ello que los sueños son
                      una constante en los textos históricos, como parte en la
                      mitología y en la religión. Pero, ¿son los sueños una
                      parte sin importancia de nuestra existencia o trascienden
                      realmente a lo anecdótico?
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button class="btn btn-success">
                            <a
                              target="_blank"
                              href="https://lamenteesmaravillosa.com/por-que-sonamos/"
                              >Click per saber més</a
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5">Los beneficios de dormir</i>
                    </div>
                    <div class="card-body">
                      Tenemos demasiadas exigencias en cuanto a nuestro tiempo
                      (trabajo, familia, mandados), sin contar que queremos
                      encontrar tiempo para relajarnos. Para que todo encaje, a
                      veces sacrificamos el sueño. Sin embargo, el sueño afecta
                      tanto la salud física como la mental. Es fundamental para
                      nuestro bienestar.
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button class="btn btn-success">
                            <a
                              target="_blank"
                              href="https://salud.nih.gov/articulo/los-beneficios-de-dormir/"
                              >Click per saber més</a
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="card card-html">
                    <div class="card-header">
                      <i class="fab fa-html5">Las etapas del sueño</i>
                    </div>
                    <div class="card-body">
                      Mientras dormimos se suceden una serie de procesos
                      regenerativos del músculo y hormonales que nos preparan
                      para afrontar descansados el día siguiente. Se puede decir
                      que nuestro sueño es cíclico y pasa por una serie de fases
                      que se van repitiendo a lo largo de toda la noche. Las dos
                      principales fases del sueño en adultos que conocemos son
                      dos: el sueño REM y el sueño no REM.
                    </div>
                    <div class="card-footer">
                      <div class="clearfix">
                        <div id="enlace" class="float-right">
                          <button class="btn btn-success">
                            <a
                              target="_blank"
                              href="https://liroon.com/blog/fases-del-sueno/"
                              >Click per saber més</a
                            >
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--
    <div id="articulo" class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">Los beneficios de dormir</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>-->
  </div>
</template>

<style scoped>
section {
  min-height: 82.7vh;
  background-image: url("../../../public/img/fondo_saludmental.png");
}
.lista {
  justify-content: center;
}
.lista ol {
  list-style: none;
  counter-reset: my-counter;
  margin: 0rem;
  padding: 0rem 0rem 0rem 1.5rem;
}
.lista li {
  counter-increment: my-counter;
  border-left: solid 2px #cdcdcd;
  padding-top: 2rem;
  padding-bottom: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: "icon:text";
  align-items: start;
}
.lista li:before {
  content: counter(my-counter);
  font-weight: bold;
  background-color: #cdcdcd;
  border: 3px solid #f5f6f1;
  border-radius: 50px;
  font-size: 20px;
  padding: 0.8rem 1.4rem;
  color: #fff;
  margin-left: -2rem;
  margin-right: auto;
  grid-area: icon;
}
.card {
  grid-area: text;
  margin-left: 4rem;
  border-radius: 0px;
  box-shadow: 0 0 5px 1px #ddd;
  margin-top: 0.5rem;
}

.card .card-header {
  background-color: #5cb8e6;
  color: #fff;
  font-size: 22px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
.btn-success {
  background-color: #5cb8e6;
  color: #fff;
  border-color: #5cb8e6;
  border-radius: 0px;
}
.card-footer {
  background-color: white;
}
#enlace {
  text-align: right;
}
a {
  color: white;
  text-decoration: none;
}
button:hover {
  background-color: white;
}
button:hover a {
  color: #5cb8e6;
}
</style>
