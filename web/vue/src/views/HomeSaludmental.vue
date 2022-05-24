<script>
import Header from "../components/SubHeader.vue";
import CardVertical from "../components/CardVertical.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";
import router from "../router";

export default {
  components: {
    Header,
    CardVertical,
  },
  data() {
    return {
      email: "",
      disabled: true,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      progressBar: 0,
      selected: 0,
      motivo: "",
      estado: null,
      usuario: null,
      respuesta: "",
      animacionCentroArriba: false,
      animacionAbajoCentro: false,
      animacionCentroAbajo: false,
      animacionArribaCentro: false,
    };
  },

  computed: {
    ...mapStores(sesionStore),
  },

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
    this.usuario = this.sesionStore.getUsuario._id;
  },

  created() {
    //Alerta nada mas entrar si no has iniciado sesión
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
//cargar los datos en este caso las emociones
  beforeMount() {
    fetch(
      "http://genkicorpusback.alumnes.inspedralbes.cat:7101/salud-mental/estado-emocional"
    )
      .then((response) => response.json())
      .then((data) => {
        this.estado = data.estadoEmocional;
      });
  },

  methods: {
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.selected = ""), (this.estado = null);
    },

    /*Esta funcion sirve para deshacer la barra de progreso i activar otras animaciones*/
    retroceder() {
      this.animacionAbajoCentro = false;
      this.animacionCentroAbajo = true;
      this.progressBar = 3;
      setTimeout(() => {
        this.disabled2 = false;
        this.disabled = true;
        this.animacionCentroAbajo = false;
        this.animacionArribaCentro = true;
        setTimeout(() => {
          this.animacionArribaCentro = false;
        }, 1000);
      }, 1000);
    },

    /*Hacemos dos POST, el primero sirve para guardar los datos y el segundo para recoger la información que ha sido recibida*/
    enviarFormulario() {
      if (Object.keys(this.sesionStore.getUsuario).length != 0) {
        var cuestSalud = new URLSearchParams({
          usuario: this.usuario,
          estado: this.selected[0].value,
          motivo: this.motivo,
        });

        
        fetch(
          "http://genkicorpusback.alumnes.inspedralbes.cat:7101/salud-mental/guardar-datos-cuestionario",
          {
            method: "POST",
            body: cuestSalud,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            
          });
      }

      var noRegCuestSalud = new URLSearchParams({
        estado: this.selected[0].value,
        motivo: this.motivo,
      });

      fetch(
        "http://genkicorpusback.alumnes.inspedralbes.cat:7101/salud-mental/respuesta-cuestionario",
        {
          method: "POST",
          body: noRegCuestSalud,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.respuesta = data.resultado;
          this.progressBar = 2;
          this.animacionAbajoCentro = false;
          this.animacionCentroArriba = true;

          setTimeout(() => {
            this.disabled2 = false;
            this.disabled3 = true;
            this.animacionAbajoCentro = true;
          }, 1000);

          Swal.fire({
            position: "center",
            icon: data.status ? "success" : "error",
            title: data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },

    /*Utilizamos esta función para guardar el estado que ha sido seleccionado*/
    guardarEstado(valor) {
      this.progressBar = 1;
      this.animacionCentroArriba = true;

      this.selected = this.estado.filter((v) => {
        return v.value == valor;
      });

      /*Una minipausa antes de aplicar las animaciones*/
      setTimeout(() => {
        this.disabled = false;
        this.disabled2 = true;
        this.animacionCentroArriba = false;
        this.animacionAbajoCentro = true;
      }, 1000);
    },

    /*Utilizamos esta función para guardar el motivo que ha sido seleccionado*/
    guardarMotivo(motivo) {
      this.motivo = motivo;
      
    },
  },
};
</script>

<template>
  <div class="saludmental">
    <div>
      <Header />
    </div>
    <section>
      <div class="container">

        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <h5 class="titulo-barra">Progresión del formulario</h5>
          </div>
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="progress">
              <div
                :class="[this.progressBar == 1 ? 'load50' : this.progressBar == 2 ? 'load100' : this.progressBar == 3 ? 'reverse' : '']"
                class="progress-value"></div>
            </div>
          </div>
        </div>
        
      </div>

      <div class="container mallaIconos" v-if="this.disabled" :class="[
        this.animacionCentroArriba ? 'animacionCentroParaArriba' : '',
        this.animacionArribaCentro ? 'animacionArribaParaCentro' : '',
      ]">
        <div class="
            row
            justify-content-center
            cartas
            cuestionario_estado
            shadow-lg
          ">
          <div class="col-12 text-center">
            <h2 class="titulo_cuestionario text-center">
              ¿Como te sientes hoy?
            </h2>
          </div>

          <div class="col-6 col-md-3 g-4 d-flex justify-content-center" v-for="(opcion, index) in estado" :key="index"
            v-bind:value="opcion.value">
            <CardVertical @id="this.guardarEstado" :infoCuest="this.estado[index]" />
          </div>
        </div>
      </div>

      <div class="container card_motivos" v-if="this.disabled2" :class="{
        animacionAbajoParaCentro: this.animacionAbajoCentro,
        animacionCentroParaArriba: this.animacionCentroArriba,
        animacionCentroParaAbajo: this.animacionCentroAbajo,
      }">
        <div id="card-horizontal" v-if="selected" class="card mb-3 shadow">
          <div class="row justify-content-center">
            <div class="col-12 retroceder">
              <a @click="retroceder()">
                <span class="material-symbols-outlined"> arrow_back </span>
              </a>
            </div>

            <div class="col-md-3 centrado-vertical">
              <div class="row justify-content-center">
                <img :src="selected[0].emoji" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="card-body">
                <h5 class="text-center card-body-tit">
                  ¿Por qué estás
                  <span style="font-weight: bold">{{ selected[0].value }}</span>?
                </h5>
                <div :key="index" v-for="(estado, index) in selected[0].motivos">
                  <div class="form-check my-3">
                    <input class="form-check-input" type="radio" @click="guardarMotivo($event.target.value)"
                      :value="estado" name="motivo" :id="index" />
                    <label class="form-check-label" :for="index">
                      {{ estado }}
                    </label>
                  </div>
                </div>
              </div>

              <div class="col-12 gy-2 text-center">
                <input class="btn btn-outline-secondary btn-enviarRespuesta" type="button" @click="enviarFormulario()"
                  value="Enviar respuesta" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selected && disabled3" class="container"
        :class="{ animacionAbajoParaCentro: this.animacionAbajoCentro }">
        <div id="divResultado" class="card-respuesta card text-center shadow">
          <div class="card-body">
            <h4 class="card-title titlo_estado">
              Hoy estoy {{ this.respuesta.estado }}
              <img id="emojiTexto" :src="selected[0].emoji" />
            </h4>
            <!--Depende de que estado haya sido escogido, se mostrara una cosa o la otra-->
            <div
              v-if="
                selected[0].value == 'Alegre' || selected[0].value == 'Enérgico'
              "
            >
              <p class="card-text">
                {{ this.respuesta.respuesta }}
              </p>
            </div>

            <div v-else>
              <p class="card-text">
                Para descubrir porqué te sientes {{ this.respuesta.estado }} y
                como mejorar tu estado de ánimo visita la siguiente página ...
              </p>
              <a :href="this.respuesta.respuesta" target="_blank" class="link">Click para saber más</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.saludmental {
  min-height: 89.55vh;
  height: auto;
  background-image: url("http://genkicorpusback.alumnes.inspedralbes.cat/img/fondo_saludmental.png");
}

.mallaIconos {
  padding: 10px;
}

#card-horizontal {
  padding: 15px;
  margin-top: 20px;
  background-color: rgba(255, 255, 255, 0.651);
}

#card-horizontal .card-body-tit {
  color: #038ed3;
  margin-bottom: 35px;
}

.card-respuesta {
  background-color: rgba(255, 255, 255, 0.651);
  padding: 15px;
  margin: 35px auto;
}

.retroceder {
  padding: 16px 25px;
  position: absolute;
  top: 0;
  left: -10px;
}

.titlo_estado {
  margin-bottom: 25px !important;
}

.retroceder span {
  color: #1490ce;
  font-weight: 600;
  padding: 5px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;
}

.retroceder span:hover {
  background-color: #b0c8d85b;
}

select {
  background-color: rgba(255, 255, 255, 0.575);
  color: rgb(168, 225, 248);
}

.cuestionario_estado {
  margin-top: 10px;
  background-color: rgba(255, 255, 255, 0.651);
  padding: 30px 15px;
  border-radius: 8px;
  margin: 20px 10px;
}

.img-emoji {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-check-input:checked {
  background-color: #5cb8e6;
  border-color: #5cb8e6;
}

#emojiTexto {
  width: 25px;
}

.button {
  padding: auto auto;
  display: block;
  text-align: left;
  color: lightgray;
  font-size: 1rem;
  transition: all 0.3s;
}

.hoy-estoy {
  padding: auto auto;
  display: block;
  text-align: left;
  color: black;
  font-size: 1rem;
  transition: all 0.3s;
}

@media only screen and (min-width: 1400px) {
  .cartas {
    width: 80%;
    margin: auto;
  }

  .pregunta {
    font-size: 1.1rem;
  }
}

.opcion_motivo {
  padding: 20px;
}

.card_motivos {
  padding: 20px;
}

@media only screen and (min-width: 1200px) {
  .card_motivos {
    max-width: 836px !important;
  }

  #emoji-card {
    height: 160px;
  }
}

@media only screen and (min-width: 768px) {
  .card-respuesta {
    max-width: 80%;
  }
}

@media only screen and (min-width: 1024px) {
  .card-respuesta {
    max-width: 65%;
  }
}

form {
  padding-top: 5%;
  text-align: center;
  margin-left: 35%;
  margin-right: 35%;
}

.form-input-email {
  width: 250px;
}

.titulo_cuestionario {
  font-weight: 600;
}

/*****  ANIMACIONES  *****/

.animacionCentroParaArriba {
  animation: bounce-center-top 1s ease-in-out 0s;
}

.animacionAbajoParaCentro {
  animation: bounce-bottom-center 1s ease-in-out 0s 1 normal;
}

.animacionCentroParaAbajo {
  animation: bounce-center-bottom 1s ease-in-out 0s 1 normal;
}

.animacionArribaParaCentro {
  animation: bounce-top-center 1s ease-in-out 0s 1;
}

@keyframes bounce-center-top {
  from {}

  40% {
    transform: translate(0, 100px);
  }

  to {
    transform: translate(0, -700px);
    opacity: 0;
  }
}

@keyframes bounce-top-center {
  from {
    transform: translate(0, -700px);
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes bounce-center-bottom {
  from {}

  40% {
    transform: translate(0, -100px);
  }

  to {
    transform: translate(0, 100vh);
    opacity: 0;
  }
}

@keyframes bounce-bottom-center {
  from {
    opacity: 0;
    transform: translate(0, 55vh);
  }

  to {
    opacity: 1;
  }
}

.pos_fixed {
  position: fixed;
}

/****  BARRA PROGRESO FORMULARIO  ****/

.titulo-barra {
  margin-top: 5%;
}

.progress {
  background: #050929;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 25px;
  width: 500px;
}

.progress-value {
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #5cb8e6;
  height: 19px;
  width: auto;
}

.load50 {
  animation: load50 3s normal forwards;
}

.load100 {
  animation: load100 3s normal forwards;
}

.reverse {
  animation: back-load 3s normal forwards;
}

@keyframes load {
  0% {
    width: 0%;
  }

  100% {
    width: 10%;
  }
}

@keyframes load50 {
  0% {
    width: 10%;
  }

  100% {
    width: 50%;
  }
}

@keyframes load100 {
  0% {
    width: 50%;
  }

  100% {
    width: 100%;
  }
}

@keyframes back-load {
  0% {
    width: 50%;
  }

  100% {
    width: 10%;
  }
}

.centrado-vertical {
  line-height: 0%;
}
</style>
