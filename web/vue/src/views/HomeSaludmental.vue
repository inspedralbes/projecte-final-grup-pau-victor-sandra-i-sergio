<script>
import Header from "../components/SubHeader.vue";
import CardVertical from "../components/CardVertical.vue";

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
      selected: 0,
      motivo: "",
      estado: null,
    };
  },

  beforeMount() {
    fetch("http://192.168.210.161:9000/salud-mental/estado-emocional")
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
      let divresultado = document.getElementById("divResultado");
      divresultado.style.display = 'block';
      var cuestSalud = new URLSearchParams({
        usuario: "ermengol",
        estado: this.selected[0].value,
        motivo: this.motivo,
      });
      console.log(cuestSalud);
      fetch(
        "http://192.168.210.161:9000/salud-mental/guardar-datos-cuestionario",
        {
          // fetch("http://localhost:wd/salud-mental/guardar-datos-cuestionario", {
          method: "POST",
          body: cuestSalud,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
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
      <Transition name="bounce">
        <div
          class="cuestionario_estado container px-4"
          v-if="disabled == false"
        >
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
        <div class="container">
          <div
            id="card-horizontal"
            v-if="selected && disabled2"
            class="card mb-3 shadow"
          >
            <div class="row">
              <div class="col-12 retroceder">
                <a @click="retroceder()">
                  <span class="material-symbols-outlined"> arrow_back </span>
                </a>
              </div>


              <div class="row justify-content-md-center">
                <div class="col-md-3 gy-3 img-emoji">
                  <img :src="selected[0].emoji" id="emoji-card" />
                </div>

                <div class="col-md-7">
                  <div class="card-body">
                    <div v-if="selected[0].value != 'Alegre' && selected[0].value != 'Energico'">
                      <h5 class="text-center card-body-tit">
                        ¿Por qué estás {{ selected[0].value }}?
                      </h5>
                      <div
                        :key="index"
                        v-for="(estado, index) in selected[0].motivos"
                      >
                        <div class="form-check">
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

                  <div  v-if="selected[0].value == 'Alegre' || selected[0].value == 'Energico'">
                    <h5
                      class="text-center card-body-tit"
                    >
                      Hoy estoy {{ selected[0].value }}
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
      </Transition>

      
      <div v-if="selected && disabled2" >
        <div v-if="selected[0].value != 'Alegre' && selected[0].value != 'Energico'" id="divResultado" class="card-respuesta card text-center">
          <div class="card-header">
            Información sobre mi estado de ánimo actual
          </div>
          <div class="card-body">
            <h5 class="card-title">Hoy estoy {{ selected[0].value }} <img id="emojiTexto" :src="selected[0].emoji"  /></h5>
            <p class="card-text">Información sobre porque estoy {{ selected[0].value }} y como puedo cambiar este sentimiento</p>
            <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<style scoped>
section {
  min-height: 81vh;
  height: auto;
}

#card-horizontal {
  padding: 15px;
  margin-top: 20px;
}

#card-horizontal .card-body-tit {
  margin-bottom: 20px;
}

.card-respuesta {
  display: none;
  margin-top: 5%;
  margin-left: 15%;
  margin-right: 15%;
}

.retroceder {
  padding: 5px 17px;
  position: absolute;
  top: 0;
  left: -10px;
}

.retroceder span {
  color: darkblue;
  padding: 5px;
  border-radius: 40%;
  transition: all 0.3s ease-in-out;
}

.retroceder span:hover {
  background-color: #d3d3d35b;
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

#emoji-card {
  height: 80%;
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

form {
  padding-top: 5%;
  text-align: center;
  margin-left: 35%;
  margin-right: 35%;
}

.form-input-email {
  width: 250px;
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
  animation: bounce2-in 0.5s ease 0s 1 normal none running;
}

.bounce2-leave-active {
  animation: bounce2-in 0.5s ease 0s 1 normal none running reverse;
}

@keyframes bounce2-in {
  from {
    opacity: 0;
    transform: translate(0, 300px);
  }

  50% {
    opacity: 1;
  }

  to {
  }
}

.pos_fixed {
  position: fixed;
}
</style>
