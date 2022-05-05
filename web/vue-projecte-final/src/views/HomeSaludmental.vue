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
      selected: 0,
      motivo: "",
      estado: [
        {
          text: "Alegre",
          value: "Alegre",
          emoji: "😛",
        },
        {
          text: "Desanimado",
          value: "Desanimado",
          emoji: "😔",
          motivos: {
            motivo1:
              "Últimamente estoy siempre cansado sin importar lo que haga",
            motivo2:
              "Nada me genera especial interés y me cuesta disfrutar de las cosas",
            motivo3: "Otro",
          },
        },
        {
          text: "Irritado",
          value: "Irritado",
          emoji: "😠",
          motivos: {
            motivo1:
              "Estoy pasando situaciones complicadas, estoy a la defensiva",
            motivo2: "He tenido un mal dia",
            motivo3: "Otro",
          },
        },
        {
          text: "Nervioso",
          value: "Nervioso",
          emoji: "😖😟",
          motivos: {
            motivo1: "Estoy viviendo situaciones de incertidumbre",
            motivo2: "Estoy atravesando adversidades",
            motivo3: "Otro",
          },
        },
        {
          text: "Enérgico",
          value: "Energico",
          emoji: "😎🏋️‍♀️",
        },
        {
          text: "Estresado",
          value: "Estresado",
          emoji: "😩",
          motivos: {
            motivo1: "Estoy siendo muy autoexigente",
            motivo2: "Tengo una rutina muy ajetreada, me siento sobrecargado",
            motivo3: "Otro",
          },
        },
        {
          text: "Triste",
          value: "Triste",
          emoji: "😢",
          motivos: {
            motivo1: "Estoy experimentando un duelo emocional",
            motivo2: "Estoy viviendo una época de cambios que me asustan",
            motivo3: "Siento que he fracasado o me da miedo hacerlo",
            motivo4: "Otro",
          },
        },
      ],
    };
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
        method: "POST",
        body: cuestSalud,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    },
    guardarEstado(valor) {
      this.selected = this.estado.filter((v) => {
        return v.value == valor;
      });
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

    <div class="cuestionario_estado container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="titulo_cuestionario text-center">¿Como te sientes hoy?</h2>
        </div>
      </div>

      <div class="row">
        <div
          class="col-6"
          v-for="(opcion, index) in estado"
          :key="index"
          v-bind:value="opcion.value"
        >
          <CardVertical
            @id="this.guardarEstado"
            :infoCuest="this.estado[index]"
          />
        </div>

        <div class="col-12 text-center">
          <input
            class="btn btn-outline-secondary form-submit"
            type="button"
            @click="enviarFormulario()"
            value="Enviar datos"
          />
        </div>
      </div>
    </div>

    <div id="card-horizontal" v-if="selected" class="card mb-3">
      <div class="row">
        <div class="col-md-4 img-emoji">
          <p id="emoji-card">{{ selected[0].emoji }}</p>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div class="d-grid">
              <div class="botons col-12">
                <button v-if="selected[0].value=='Alegre' || selected[0].value=='Energico'" class="emoji-value btn btn-outline-info">
                  Hoy estoy {{ selected[0].text }}
                </button>
                <button
                  class="btn btn-outline-info boton"
                  type="button"
                  @click="guardarMotivo($event.target.value)"
                  :key="index"
                  v-for="(estado, index) in selected[0].motivos"
                  :value="estado"
                >
                  {{ estado }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="retroceder" class="text-center mt-5">
      <button
        @click="retroceder()"
        type="button"
        class="btn btn-outline-danger"
      >
        Retroceder
      </button>
    </div>
  </div>
</template>

<style>
select {
  background-color: white;
  color: gray;
}
.cuestionario_estado {
  background-color: rgb(199, 234, 255);
  margin-top: 50px;
  padding: 30px;
}
#card-horizontal {
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
  max-width: 50%;
}
#emoji-card {
  font-size:800%;
}
.img-emoji {
  text-align: center;
}
.emoji-value {
  font-size: 350%;
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
.btn {
  margin: 20px;
}
</style>
