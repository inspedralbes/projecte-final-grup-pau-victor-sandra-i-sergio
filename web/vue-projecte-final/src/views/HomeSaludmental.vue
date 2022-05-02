<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      email: "",
      selected: "",
      estado: [
        { text: 'Alegre', value: 'Alegre', emoji: '😛', num: 1, motivos: {
            motivo1: 'He recibido una buena noticia',
            motivo2: 'He pasado un gran dia con amigos o familiares',
            motivo3: 'He tenido un golpe de suerte',
            motivo4: 'He finalizado una tarea, proyecto o objetivo', 
            motivo5: 'He conocido a alguien nuevo',
          }},
        { text: 'Energético', value: 'Energético', emoji: '😎🏋️‍♀️', num: 2, motivos: {
            motivo1: 'He tomado alguna sustancia energetica',
            motivo2: 'He recibido una noticia que no esperaba',
            motivo3: 'Me siento energético porque estoy motivado y contento',
          }},
        { text: 'Desanimado, cansado, con malestar', value: 'Desanimado', emoji: '😩', num: 3, motivos: {
            motivo1: 'He recibidio una mala noticia',
            motivo2: 'He fracasado una tarea, proyecto o objetivo',
            motivo3: 'No tengo a nadie que me pueda ayudar',
          }},
        { text: 'Estresado, ajetreado', value: 'Estresado', emoji: '😰', num: 4, motivos: {
            motivo1: 'Se me estan acumulando trabajos o cosas que hacer',
            motivo2: 'No me sale nada de lo que intento',
            motivo3: 'No aprovecho el tiempo y veo como pasan los meses sin hacer nada',
          }},
        { text: 'Irritado, con incertidumbre', value: 'Irritado', emoji: '😠', num: 5, motivos: {
            motivo1: 'La gente no tiene en cuenta mis ideas o opiniones en general',
            motivo2: 'Me pasan cosas malas que no puedo controlar',
            motivo3: 'La suerte no esta nunca de mi lado',
          }},
        { text: 'Triste, fracaso, momento de transición', value: 'Triste', emoji: '😔', num: 6, motivos: {
            motivo1: 'He recibido una mala noticia',
            motivo2: 'Se ha ido una persona cercana a mi',
            motivo3: 'No tengo a nadie con quien compartir mi tiempo',
          }},
        { text: 'Nervioso, sientes "miedo"', value: 'Nervioso', emoji: '😖', num: 7, motivos: {
            motivo1: 'Tengo una actividad importante a la vista',
            motivo2: 'Estoy esperando una respuesta importante para mi',
            motivo3: 'Me he alterado de manera momentanea',
          }},
        { text: 'Enfadado', value: 'Enfadado', emoji: '😡', num: 8, motivos: {
            motivo1: 'Estoy enfadado por alguna cosa que ha pasado con alguna persona (cercana o no)',
            motivo2: 'Me han engañado o estafado',
            motivo3: 'Estoy enfadado por algo que no puedo controlar',
          }},
      ]
    }
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
        estado: this.selected,
        motivo: "Alegre",
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
  },
};
</script>

<template>
  <div>
    <Header />
    <h1>Esto es el HOME de SALUD MENTAL</h1>
  </div>
  <div>
    <form action class="form">
      <h2>Como te sientes HOY?</h2>
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
        <input v-if="email!='null'"
          v-model="email"
          class="form-input-email"
          id="email"
          type="email"
          required
          placeholder="Ingresa el email"
        />
        <p v-if="email=='null'">ejemplo@inspedralbes.cat</p>
      </div>
      <br />
      <br />
      <div>
        <label class="form-label" label="estado" for="#estado"
          >Como te sientes?</label
        >
        <br />
        <select
          v-model="selected"
          class="form-select"
          aria-label="Default select example"
        >
          <option v-for="option in estado" v-bind:value="option.value">
            {{ option.emoji }}{{ option.text }}
          </option>
        </select>
        <!-- <span id="emojis">{{ selected }}</span> -->
      </div>
      <br>
      <div id="estado">
        <div v-if="selected=='Alegre'">
          <select v-model="selected">
            <option v-for="estado in estado[0].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Energético'">
          <select v-model="selected">
            <option v-for="estado in estado[1].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Desanimado'">
          <select v-model="selected">
            <option v-for="estado in estado[2].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Estresado'">
          <select v-model="selected">
            <option v-for="estado in estado[3].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Irritado'">
          <select v-model="selected">
            <option v-for="estado in estado[4].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Triste'">
          <select v-model="selected">
            <option v-for="estado in estado[5].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Nervioso'">
          <select v-model="selected">
            <option v-for="estado in estado[6].motivos" v-bind:value="estado">
              {{ estado }}
            </option>
          </select>
        </div>
        <div v-if="selected=='Enfadado'">
          <select v-model="selected">
            <option v-for="estado in estado[7].motivos" v-bind:value="estado">
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
</style>