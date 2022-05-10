<script>
import Header from "../components/SubHeader.vue";
import CardSuenos from "../components/CardSuenos.vue";

export default {
  components: {
    Header,
    CardSuenos,
  },
  data() {
    return {
      selected: [],
      elemento: [],
      animacion1: false,
      animacion2: false,
      accordionID: [{
        valor1: "panelsStayOpen-headingOne",
        valor2: "panelsStayOpen-headingTwo",
        valor3: "panelsStayOpen-headingThree",
        valor4: "panelsStayOpen-headingFour",
        valor5: "panelsStayOpen-headingFive",
      }],
      accordionClass: [{
        valor1: "panelsStayOpen-collapseOne",
        valor2: "panelsStayOpen-collapseTwo",
        valor3: "panelsStayOpen-collapseThree",
        valor4: "panelsStayOpen-collapseFour",
        valor5: "panelsStayOpen-collapseFive",
      }],
    };
  },

  beforeMount() {
    fetch("http://192.168.210.161:9000/descanso/tipos-suenos")
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
      (this.selected = ""), (this.elementos = null);
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

      //console.log(this.selected);

      console.log(this.selected);
      console.log(this.selected.length);
    },
    enviarFormulario() {
      // let divResultado = document.getElementById("card-respuesta");
      // divResultado.style.display = "block";

      var cuestDescanso = new FormData();
      cuestDescanso.append("descripcionSueno", JSON.stringify(this.selected));
      cuestDescanso.append("usuario", "alvaro");

      fetch("http://192.168.210.161:9000/descanso/respuesta-cuestionario", {
        // fetch("http://localhost:9000/descanso/respuesta-cuestionario", {
        method: "POST",
        body: cuestDescanso,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
                <CardSuenos
                  class="
                    d-flex
                    align-items-center
                    justify-content-center
                    flex-direction-row
                    btn btn-outline-light
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
                />
              </div>
            </div>
          </div>
        </Transition>

        <!-- Card Respuesta -->
        <!-- METODO ACCORDION PERO DE MANERA CUTRE -->
        <!--<div class="accordion" id="card-respuesta">
          <div v-if="this.selected[0]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {{this.selected[0]}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[1]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                {{this.selected[1]}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[2]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                {{this.selected[2]}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[3]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                {{this.selected[3]}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[4]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                {{this.selected[4]}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
        </div>-->

        <!-- ESTE ES EL METODO ACCORDION -->
        <!--<div class="accordion" id="card-respuesta">
          <div class="accordion-item">
            <div v-for="n in this.selected.length" class="col-6 card">

              
              <h2 class="accordion-header" @id="accordionID[n-1]">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="accordionClass[n-1]" aria-expanded="true" :aria-controls="accordionClass[n-1]">
                  {{this.selected[n-1]}}
                </button>
              </h2>
              <div @id="accordionClass[n-1]" class="accordion-collapse collapse show" :aria-labelledby="accordionID[n-1]">
                <div class="accordion-body">
                  <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                  <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
                </div>
              </div>
            </div>  
          </div>
        </div>-->


        <Transition name="bounce2">
        <div v-if="this.animacion2" class="accordion">
          <div v-if="this.selected[0]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                {{this.selected[0].tipo}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[1]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                {{this.selected[1].tipo}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[2]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                {{this.selected[2].tipo}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[3]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                {{this.selected[3].tipo}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
          <div v-if="this.selected[4]!=null" class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                {{this.selected[4].tipo}}
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
              <div class="accordion-body">
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
            </div>
          </div>
        </div>

          <!--<div id="card-respuesta" v-if="this.animacion2">
            <div class="card-group">
              <div v-for="n in this.selected.length" class="col-6 card">
                <img
                  src="http://cantina2.alumnes.inspedralbes.cat/projecteCantina/css/bocadillo1.jpg"
                  class="card-img-top"
                />
                <div class="card-body">
                  <h5 class="card-title">{{ this.selected[n - 1] }}</h5>
                  <p class="card-text">
                    Para saber mas sobre el sueño visite la siguiente página
                  </p>
                  <a
                    href="https://lamenteesmaravillosa.com/tengo-miedo-cambio"
                    class="link"
                    >Click para saber más</a
                  >
                </div>
                <div class="card-footer">
                  <small class="text-muted">Official website</small>
                </div>
              </div>
            </div>
          </div>-->
          
        </Transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cuestionario_sueño {
  color: rgb(255, 255, 255);
  margin-top: 50px;
  padding: 30px;
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

/* #card-respuesta {
  display: none;
  margin-bottom: 10%;
} */

.accordion-item {
  margin-left: 10%;
  margin-right: 10%;
}


.card {
  max-width: 15%;
  min-width: 150px;
  margin: 1%;
}

.fondo {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(90deg, #162046 0%, #0a0b0e 100%);
}

.submain {
  width: 100%;
  min-height: 80vh;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/stars-back.png");
  background-size: 400px;
  background-repeat: repeat;
  position: absolute;
}

.submain .col-8 p {
  margin: 0 0 0 7px;
}

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
