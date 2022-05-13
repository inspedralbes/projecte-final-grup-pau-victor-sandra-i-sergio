<script>
import Header from "../components/SubHeader.vue";
import CardVertical from "../components/CardVertical.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  components: {
    Header,
    CardVertical,
  },
  data() {
    return {
      email: "",
      disabled: false,
      disabled2: false,
      disabled3: false,
      disabled4: false,
      progressbar1: false,
      progressbar2: false,
      selected: 0,
      motivo: "",
      estado: null,
    };
  },

  computed: {
    ...mapStores(sesionStore),
  },

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },

  beforeMount() {
    fetch("http://192.168.210.162:9000/salud-mental/estado-emocional")
      // fetch("http://localhost:9000/salud-mental/estado-emocional")
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

    retroceder() {
      this.disabled2 = false;
      this.disabled = false;
    },

    enviarFormulario() {
      // let divresultado = document.getElementById("divResultado");
      // divresultado.style.display = "block";
      var cuestSalud = new URLSearchParams({
        usuario: "ermengol",
        estado: this.selected[0].value,
        motivo: this.motivo,
      });
      console.log(cuestSalud);
      fetch(
        "http://192.168.210.162:9000/salud-mental/guardar-datos-cuestionario",
        {
          // fetch("http://localhost:wd/salud-mental/guardar-datos-cuestionario", {
          method: "POST",
          body: cuestSalud,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.progressbar2 = true;
          this.disabled2 = false;
          setTimeout(() => {
            this.disabled3 = true;
          }, 500);
        });
    },
    guardarEstado(valor) {
      setTimeout(() => {
        this.selected = this.estado.filter((v) => {
          return v.value == valor;
        });
      }, 1500);
      this.disabled = true;
      this.disabled2 = true;
      this.progressbar1 = true;
      console.log(this.selected);
    },

    guardarMotivo(motivo) {
      this.motivo = motivo;
      console.log(motivo);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-12 d-flex align-items-center justify-content-center">
            <h4 class="titulo-barra">Progresión del formulario</h4>
          </div>
          <div class="col-12 d-flex align-items-center justify-content-center">
            <div class="progress">
              <div class="progress-value"></div>
            </div>
          </div>
        </div>
      </div>
      <Transition name="bounce">
        <div class="cuestionario_estado container px-4" v-if="!this.disabled">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="titulo_cuestionario text-center">
                ¿Como te sientes hoy?
              </h2>
            </div>
          </div>

          <div class="row justify-content-center cartas">
            <div
              class="col-6 col-md-3 col-xl-2 g-4 d-flex justify-content-center"
              v-for="(opcion, index) in estado"
              :key="index"
              v-bind:value="opcion.value"
            >
              <CardVertical
                @id="this.guardarEstado"
                :infoCuest="this.estado[index]"
              />
            </div>
          </div>
        </div>
      </Transition>

      <Transition name="bounce2">
        <div class="container card_motivos">
          <div class="container card_motivos" v-if="this.disabled2">
            <div id="card-horizontal" v-if="selected" class="card mb-3 shadow">
              <div class="row">
                <div class="col-12 retroceder">
                  <a @click="retroceder()">
                    <span class="material-symbols-outlined"> arrow_back </span>
                  </a>
                </div>

                <div class="row justify-content-md-center">
                  <div class="col-md-4 gy-3 img-emoji">
                    <img :src="selected[0].emoji" id="emoji-card" />
                  </div>

                  <div class="col-md-6">
                    <div class="card-body">
                      <div
                        v-if="
                          selected[0].value != 'Alegre' &&
                          selected[0].value != 'Energico'
                        "
                      >
                        <h5 class="text-center card-body-tit">
                          ¿Por qué estás
                          <span style="font-weight: bold">{{
                            selected[0].value
                          }}</span
                          >?
                        </h5>
                        <div
                          :key="index"
                          v-for="(estado, index) in selected[0].motivos"
                        >
                          <div class="form-check my-3">
                            <input
                              class="form-check-input"
                              type="radio"
                              @click="guardarMotivo($event.target.value)"
                              :value="index"
                              name="motivo"
                              :id="index"
                            />
                            <label class="form-check-label" :for="index">
                              {{ estado }}
                            </label>
                          </div>
                        </div>
                      </div>

                      <div
                        v-if="
                          selected[0].value == 'Alegre' ||
                          selected[0].value == 'Energico'
                        "
                      >
                        <h5 class="text-center card-body-tit">
                          Hoy estoy
                          <span style="font-weight: bold">{{
                            selected[0].value
                          }}</span>
                        </h5>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="motivo"
                            checked
                          />
                          <label class="form-check-label">
                            Estoy {{ selected[0].value }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-12 gy-2 text-center">
                    <input
                      class="btn btn-outline-secondary btn-enviarRespuesta"
                      type="button"
                      @click="enviarFormulario()"
                      value="Enviar respuesta"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <Transition name="bounce3">
        <div v-if="selected && disabled3">
          <div
            v-if="
              selected[0].value != 'Alegre' && selected[0].value != 'Energico'
            "
            id="divResultado"
            class="card-respuesta card text-center"
          >
            <div class="card-header">
              Información sobre mi estado de ánimo actual
            </div>
            <div class="card-body">
              <h5 class="card-title">
                Hoy estoy {{ selected[0].value }}
                <img id="emojiTexto" :src="selected[0].emoji" />
              </h5>
              <p class="card-text">
                Información sobre porque estoy {{ selected[0].value }} y como
                puedo cambiar este sentimiento
              </p>
              <a
                href="https://lamenteesmaravillosa.com/tengo-miedo-cambio"
                target="_blank"
                class="link"
                >Click para saber más</a
              >
            </div>
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>

<style scoped>
section {
  min-height: 74vh;
}

#card-horizontal {
  padding: 15px;
  margin-top: 20px;
}

#card-horizontal .card-body-tit {
  color: #038ed3;
  margin-bottom: 35px;
}

.card-respuesta {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

.retroceder {
  padding: 16px 25px;
  position: absolute;
  top: 0;
  left: -10px;
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
  background-color: white;
  color: rgb(168, 225, 248);
}

.cuestionario_estado {
  background-color: rgb(233, 247, 255);
  margin-top: 60px;
  padding: 30px;
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
  padding: 30px;
}

@media only screen and (min-width: 1200px) {
  .card_motivos {
    max-width: 836px !important;
  }

  #emoji-card {
    height: 160px;
  }
}

@media only screen and (max-width: 1000px) {
  .card-respuesta {
    margin-left: 15%;
    margin-right: 15%;
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

/*****  ANIMACIONES  *****/

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
  animation: bounce2-in 1s ease 0s 1 normal reverse;
}

.bounce2-leave-active {
  animation: bounce2-in 1s ease 0s 1 normal;
}

@keyframes bounce2-in {
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

.bounce3-enter-active {
  animation: bounce3-in 0.5s ease 0s 1 normal;
}

.bounce3-leave-active {
  animation: bounce3-in 0.5s ease 0s 1 normal reverse;
}

@keyframes bounce3-in {
  from {
    opacity: 0;
    transform: translate(0, 700px);
  }

  to {
    opacity: 1;
  }
}

.pos_fixed {
  position: fixed;
}

.progress {
  background: #050929;
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 40px;
  width: 500px;
}

.progress-value {
  animation: load 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #5cb8e6;
  height: 30px;
  width: auto;
}

.load50 {
  animation: load50 3s normal forwards;
}

.load100 {
  animation: load100 3s normal forwards;
}

.load-50 {
  animation: load50 3s normal backwards;
}

.load-100 {
  animation: load100 3s normal backwards;
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

.titulo-barra {
  margin-top: 5%;
}
</style>
