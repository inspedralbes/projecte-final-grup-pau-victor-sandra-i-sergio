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

  methods: {
    articulo1() {
      let articulos = document.getElementById("lista-articulos");
      let articulo1 = document.getElementById("articulo1");
      articulos.style.display = "none";
      articulo1.style.display = "block";
    },

    retroceder() {
      let articulos = document.getElementById("lista-articulos");
      let articulo1 = document.getElementById("articulo1");
      articulos.style.display = "block";
      articulo1.style.display = "none";
    },
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
    <section id="lista-articulos" class="articulos">
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
                          <button @click="articulo1()" class="btn btn-success">
                            <span>Click per saber més</span>
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
                          <button @click="articulo1()" class="btn btn-success">
                            <span>Click per saber més</span>
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
                          <button @click="articulo1()" class="btn btn-success">
                            <span>Click per saber més</span>
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

    <section id="articulo1" class="articulos">
      <section class="container">
        <br /><br />
        <article class="jumbotron">
          <div class="row">
            <div class="col-12 retroceder">
              <a @click="retroceder()">
                <span id="btn-articulo" class="material-symbols-outlined">
                  arrow_back
                </span>
              </a>
            </div>
            <div class="col-xs-12">
              <h1 class="text-center">¿Por qué soñamos?</h1>
              <section class="thumbnail text-center">
                <img
                  id="img-article"
                  class=""
                  src="https://dormalit.com/img/cms/Some%20of%20our%20favorit%20moments%20this%20year%20(65).jpg"
                  alt="Porque soñamos"
                />
              </section>
              <div>
                <h3 class="text-center">
                  A continuación, abordamos una de las preguntas más
                  interesantes e inquietantes, ¿Por qué soñamos?
                </h3>
                <hr />
                <ul>
                  <li>
                    Los sueños constituyen una parte irremplazable de la riqueza
                    de ser humanos. Podemos acordarnos o no, pueden ser
                    agradables o terroríficos, pero lo cierto es que todos
                    soñamos, sin excepciones. Es por ello que los sueños son una
                    constante en los textos históricos, como parte en la
                    mitología y en la religión. Pero, ¿son los sueños una parte
                    sin importancia de nuestra existencia o trascienden
                    realmente a lo anecdótico?
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“Somos del mismo material del que se tejen los sueños,
                      nuestra pequeña vida está rodeada de sueños”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>William Shakespeare</strong>
                  </li>
                  <br />
                  <h4><strong>¿Cuando soñamos?</strong></h4>
                  <li>
                    Pasamos una tercera parte de nuestra vida durmiendo. Sin
                    embargo, solo soñamos en fases de pocos minutos. Si
                    calculamos un promedio, según las investigaciones, se
                    calcula que, a lo largo de nuestra vida, soñamos cerca de 6
                    años enteros.
                  </li>
                  <br />
                  <li>
                    Durante este proceso, el cerebro se activa necesitando para
                    ello que el flujo de sangre en el mismo sea el doble que el
                    necesario durante el estado de vigilia. Solo una parte del
                    cerebro deja de funcionar mientras dormimos: el centro
                    lógico. Es por esta razón por la que los sueños adquieren
                    muchas veces matices de irrealidad. Además, el cerebro envía
                    señales a la médula espinal con el fin de que no se active
                    el sistema musculoesquelético y nos mantengamos quietos. Lo
                    único que movemos siempre mientras soñamos son nuestros
                    ojos. Es algo que sucede durante la fase conocida como REM
                    (Rapid Eyes Movement, movimientos oculares rápidos).
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“¿Acaso el sueño no es el testimonio del ser perdido, de
                      un ser que se pierde, de un ser que huye de nuestro ser,
                      incluso si podemos repetirlo, volver a encontrarlo en su
                      extraña transformación?”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Gastón Bachelard</strong>
                  </li>
                  <br />
                  <h4><strong>¿Cuál es la función de los sueños?</strong></h4>
                  <li>
                    Una función importante que cumple el cerebro durante el
                    sueño es la de desechar y seleccionar los recuerdos. Por
                    eso, antes de un examen es preferible no pasarnos la noche
                    estudiando, sino descansar la mente y consolidar la memoria.
                    Y eso se consigue solamente si dormimos el tiempo necesario.
                  </li>
                  <br />
                  <li>
                    Cuando soñamos, nuestro cerebro intenta solucionar los
                    problemas que nos ocupan durante el día. Por eso, dormir
                    puede ser la solución a un problema que no conseguimos
                    resolver.
                  </li>
                  <li>
                    Asimismo, un sueño puede ser un reflejo fiel o, en la
                    mayoría de los casos, simbólico de lo que ocupa nuestra
                    mente, de nuestros miedos y de nuestros deseos. De ahí que
                    sean comunes las pesadillas que evocan temores, tales como
                    la falta de confianza en uno mismo, que se puede reflejar,
                    por ejemplo, en un sueño en el que la persona se encuentra
                    desnuda en un lugar público.
                  </li>
                  <br />
                  <li>
                    Pero a veces, es el sueño el que ayuda a eliminar esos
                    temores. Es, al menos lo que señalan algunas teorías. Al
                    soñar con eso que nos da miedo en un contexto diferente lo
                    que ocurre es que se rebaja ese temor. No siempre ocurre, es
                    cierto, pero puede servir como una vía de escape.
                  </li>
                  <br />
                  <h4>
                    <strong
                      >Investigación sobre los sueños y las emociones</strong
                    >
                  </h4>
                  <li>
                    Las teorías que defienden el sueño como un proceso para
                    disminuir el temor pueden fundamentarse en un estudio
                    coordinado por el neurólogo Matthew Walker, de la
                    universidad de Berkeley. En dicha investigación, un grupo de
                    34 jóvenes sanos fue separado en dos grupos. Luego, les
                    hicieron ver un total de 150 imágenes en intervalos de 12
                    horas, mientras que los investigadores observaban su
                    actividad cerebral con un escáner.
                  </li>
                  <br />
                  <li>
                    Las imágenes presentadas reflejaban desde objetos insulsos
                    hasta retratos perturbadores de accidentes. En este caso, el
                    primer grupo veía las fotografías una vez por la mañana y
                    otra vez por la noche, sin haber dormido en el intervalo.
                    Por su parte, el segundo grupo las veía una vez antes de
                    acostarse y otra por la mañana cuando se levantaban.
                  </li>
                  <li>
                    Los resultados arrojan que los participantes que habían
                    dormido entre las visualizaciones tenían una reacción
                    emocional significativamente más suave respecto a la primera
                    visualización. En este caso, los resultados de los escaneos
                    cerebrales durante la fase REM, mostraban como la actividad
                    cerebral en la amígdala (estructura cerebral encargada de
                    las emociones), y el córtex pre frontal (estructura racional
                    del cerebro) procesaban el impacto de las imágenes
                    minimizándolo.
                  </li>
                  <br />
                  <li>
                    De esta forma, se concluye que el sueño REM puede ayudarnos
                    a superar situaciones emocionales difíciles en nuestra vida.
                    Entre ellas, disminuir el miedo de aquellas situaciones que
                    percibimos como amenazantes. Aunque, como muy bien dice el
                    experto en sueño David Kuhlmann, el sueño no es la cura para
                    todos los problemas emocionales.
                  </li>
                  <br />
                  <li class="blockquote text-center">
                    <strong
                      >“La mente es como un iceberg, flota con una séptima parte
                      de su volumen sobre el agua.”</strong
                    >
                  </li>
                  <li class="blockquote-footer text-center">
                    <strong>Sigmund Freud</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <br /><br />
      </section>
    </section>
  </div>
</template>

<style scoped>
.articulos {
  min-height: 82.7vh;
  background-image: url("../../../public/img/fondo_saludmental.png");
}
.container {
  max-width: 1000px;
}
#articulo1 {
  display: none;
}
.jumbotron {
  background-color: white;
  border-bottom: gray groove 1px;
  border-right: gray groove 1px;
  border-left: gray groove 1px;
  border-top: gray groove 1px;
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
#btn-articulo {
  cursor: pointer;
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
button:hover span {
  color: #5cb8e6;
}
#img-article {
  max-width: 1024px;
  max-height: 623px;
}
ul {
  list-style: none;
}
.blockquote {
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
}
.retroceder {
  margin-top: 10px;
  margin-left: 10px;
}
hr {
  margin-left: 10%;
  margin-right: 10%;
}
h4 {
  color: lightblue;
}

.thumbnail a > img,
.thumbnail > img {
  margin-right: auto;
  margin-left: auto;
}
.thumbnail > img {
  display: block;
  max-width: 100%;
  height: auto;
}
</style>
