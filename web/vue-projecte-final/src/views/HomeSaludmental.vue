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
      window.history.back();
    },

    enviarFormulario() {
      var cuestSalud = new URLSearchParams({
        usuario: "ermengol",
        estado: this.selected[0].value,
        motivo: this.motivo,
      });
      console.log(cuestSalud);
      fetch("http://192.168.210.161:9000/salud-mental/respuesta-cuestionario", {
      // fetch("http://localhost:9000/salud-mental/respuesta-cuestionario", {
        method: "POST",
        body: cuestSalud,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    guardarEstado(valor) {
      this.disabled = true;
      this.disabled2 = true;
      setTimeout(() => {
        this.selected = this.estado.filter((v) => {
          return v.value == valor;
        });
      }, 1500);
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
      <div>
        <Header />
      </div>
      <Transition name="bounce">
        <div class="cuestionario_estado container px-4" v-if="disabled == false">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="titulo_cuestionario text-center">
                ¿Como te sientes hoy?
              </h2>
            </div>
          </div>

          <div class="row justify-content-center cartas">
            <div class="col-6 col-md-3 col-xl-2 g-4 d-flex justify-content-center" v-for="(opcion, index) in estado" :key="index"
              v-bind:value="opcion.value">
              <CardVertical @id="this.guardarEstado" :infoCuest="this.estado[index]" />
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <Transition name="bounce2">
      <div id="card-horizontal" v-if="selected && disabled2 == true" class="card mb-3">
        <div class="row">
          <div class="col-md-4 img-emoji">
            <img :src="selected[0].emoji" id="emoji-card" />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <div class="d-grid">
                <div class="botons col-12">
                  <span class="pregunta" v-if="
                    selected[0].value != 'Alegre' &&
                    selected[0].value != 'Energico'
                  ">¿Por qué estás {{ selected[0].value }}?</span>
                  <button v-if="
                    selected[0].value == 'Alegre' ||
                    selected[0].value == 'Energico'
                  " class="value button btn">
                    Hoy estoy {{ selected[0].value }}
                  </button>
                  <button class="emoji-value button btn" type="button" @click="guardarMotivo($event.target.value)"
                    :key="index" v-for="(estado, index) in selected[0].motivos" :value="estado">
                    {{ estado }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 text-center">
            <input class="btn btn-outline-secondary form-submit" type="button" @click="enviarFormulario()"
              value="Enviar datos" />
          </div>
        </div>
      </div>
    </Transition>

    <!-- <div class="col-12 text-center">
        <input
          class="btn btn-outline-secondary form-submit"
          type="button"
          @click="enviarFormulario()"
          value="Enviar datos"
        />
      </div> -->

    <div id="retroceder" class="text-center mt-5">
      <button @click="retroceder()" type="button" class="btn btn-outline-danger">
        Retroceder
      </button>
    </div>
  </div>
</template>

<style>
select {
  background-color: white;
  color: rgb(168, 225, 248);
}

.cuestionario_estado {
  background-color: rgb(233, 247, 255);
  margin-top: 60px;
  padding: 30px;
}

#card-horizontal {
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}

.img-emoji {
  text-align: center;
  display: flex;
  justify-content: center;
}

#emoji-card {
  max-width: 120px;
  max-height: 120px;
  margin-top: auto;
  margin-bottom: auto;
}

.button {
  padding: auto auto;
  display: block;
  text-align: left;
  color: gray;
  font-size: 1rem;
  transition: all 0.3s;
  overflow: hidden;
}

.pregunta {
  font-size: 1.1rem;
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
  animation: bounce-in 1s ease 0s 2 normal none running;
  transition: transform translate(0, -700px);
}

.bounce-leave-active {
  animation: bounce-in 1s ease 0s 2 normal none running;
  transition: transform translate(0, -700px);
}

@keyframes bounce-in {
  0% {}

  100% {
    transform: translate(0, -700px);
    opacity: 0;
  }
}

.bounce2-enter-active {
  animation: bounce2-in 1s ease 0s 2 normal none running;
}

.bounce2-leave-active {
  animation: bounce2-in 1s ease 0s 2 normal none running;
}

@keyframes bounce-in2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
