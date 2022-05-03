<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
    Header,
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
          num: 1,
          motivos: {
            motivo1: "He recibido una buena noticia",
            motivo2: "He pasado un gran dia con amigos o familiares",
            motivo3: "He tenido un golpe de suerte",
            motivo4: "He finalizado una tarea, proyecto o objetivo",
            motivo5: "He conocido a alguien nuevo",
          },
        },
        {
          text: "Energético",
          value: "Energético",
          emoji: "😎🏋️‍♀️",
          num: 2,
          motivos: {
            motivo1: "He tomado alguna sustancia energetica",
            motivo2: "He recibido una noticia que no esperaba",
            motivo3: "Me siento energético porque estoy motivado y contento",
          },
        },
        {
          text: "Desanimado, cansado, con malestar",
          value: "Desanimado",
          emoji: "😩",
          num: 3,
          motivos: {
            motivo1: "He recibidio una mala noticia",
            motivo2: "He fracasado una tarea, proyecto o objetivo",
            motivo3: "No tengo a nadie que me pueda ayudar",
          },
        },
        {
          text: "Estresado, ajetreado",
          value: "Estresado",
          emoji: "😰",
          num: 4,
          motivos: {
            motivo1: "Se me estan acumulando trabajos o cosas que hacer",
            motivo2: "No me sale nada de lo que intento",
            motivo3:
              "No aprovecho el tiempo y veo como pasan los meses sin hacer nada",
          },
        },
        {
          text: "Irritado, con incertidumbre",
          value: "Irritado",
          emoji: "😠",
          num: 5,
          motivos: {
            motivo1:
              "La gente no tiene en cuenta mis ideas o opiniones en general",
            motivo2: "Me pasan cosas malas que no puedo controlar",
            motivo3: "La suerte no esta nunca de mi lado",
          },
        },
        {
          text: "Triste, fracaso, momento de transición",
          value: "Triste",
          emoji: "😔",
          num: 6,
          motivos: {
            motivo1: "He recibido una mala noticia",
            motivo2: "Se ha ido una persona cercana a mi",
            motivo3: "No tengo a nadie con quien compartir mi tiempo",
          },
        },
        {
          text: 'Nervioso, sientes "miedo"',
          value: "Nervioso",
          emoji: "😖",
          num: 7,
          motivos: {
            motivo1: "Tengo una actividad importante a la vista",
            motivo2: "Estoy esperando una respuesta importante para mi",
            motivo3: "Me he alterado de manera momentanea",
          },
        },
        {
          text: "Enfadado",
          value: "Enfadado",
          emoji: "😡",
          num: 8,
          motivos: {
            motivo1:
              "Estoy enfadado por alguna cosa que ha pasado con alguna persona (cercana o no)",
            motivo2: "Me han engañado o estafado",
            motivo3: "Estoy enfadado por algo que no puedo controlar",
          },
        },
      ],
    };
  },
  methods: {
    // datos() {
    //   const datos = {
    //     email: this.email,
    //     estado: this.estado.value,
    //   };
    //   console.log(datos);
    // },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.email = ""), (this.selected = ""), (this.estado = null);
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
    guardarseleccionado(valor) {
      console.log(valor);
      this.selected = this.estado.filter((v) => {
        return v.value == valor;
      });
    },
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
      <h1>Esto es el HOME de SALUD MENTAL</h1>
    </div>
    <div>
      <form action class="form">
        <h2>Como te sientes hoy?</h2>
        <hr />
        <div>
          <label
            class="form-label"
            label="Email"
            description="We'll never share your email with anyone else."
            for="#email"
            >Email*:</label
          >
          <br />
          <input
            v-if="email != 'null'"
            v-model="email"
            class="form-input-email"
            id="email"
            type="email"
            required
            placeholder="Ingresa el email"
          />
          <p v-if="email == 'null'">ejemplo@inspedralbes.cat</p>
        </div>
        <br />
        <br />
        <select
          class="form-select"
          aria-label="Default select example"
          @change="guardarseleccionado($event.target.value)"
        >
          <option
            :key="index"
            v-for="(option, index) in estado"
            :value="option.value"
          >
            {{ option.emoji }}{{ option.text }}
          </option>
        </select>
        <!-- <span id="emojis">{{ selected }}</span> -->
        <br />
        <div id="estado">
          <div v-if="selected">
            <select v-model="motivo">
              <option
                :key="index"
                v-for="(estado, index) in selected[0].motivos"
                v-bind:value="estado"
              >
                {{ estado }}
              </option>
            </select>
          </div>
        </div>
        <div>
          <input
            class="btn btn-outline-secondary form-submit"
            type="button"
            @click="enviarFormulario()"
            value="Confirmar dades!"
          />
        </div>
      </form>
    </div>
  </div>
  <div id="retroceder" class="text-center mt-5">
    <button @click="retroceder()" type="button" class="btn btn-outline-danger">
      Retroceder
    </button>
  </div>
</template>

<style>
select {
  background-color: white;
  color: gray;
}
#emojis {
  font-size: 250%;
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
