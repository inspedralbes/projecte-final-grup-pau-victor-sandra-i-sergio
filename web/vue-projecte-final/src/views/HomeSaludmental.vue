<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
  Header,
  },
  data() {
    return {
      email: '',
      selected: '',
      estado: [
        { text: 'Alegre', value: 'Alegre', emoji: '😛'},
        { text: 'Energético', value: 'Energético', emoji: '😎🏋️‍♀️'},
        { text: 'Desanimado, cansado, con malestar', value: 'Desanimado', emoji: '😩'},
        { text: 'Estresado, ajetreado', value: 'Estresado', emoji: '😰'},
        { text: 'Irritado, con incertidumbre', value: 'Irritado', emoji: '😠'},
        { text: 'Triste, fracaso, momento de transición', value: 'Triste', emoji: '😔'},
        { text: 'Nervioso, sientes "miedo"', value: 'Nervioso', emoji: '😖'},
        { text: 'Enfadado', value: 'Enfadado', emoji: '😡'}
      ],
      motivo: [],
    }
  },
  methods: {
    datos(){
      const datos = {
        email: this.email,
        estado: this.estado.value,
      };
      console.log(datos);
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.email = '',
      this.selected = '',
      this.estado = null
    },
    retroceder() {
      window.history.back();
    },
  }
}
</script>

<template>
  <div>
    <Header />
    <h1>Esto es el HOME de SALUD MENTAL</h1>
  </div>
  <div>
    <form action class="form" @submit.prevent="datos">
    <h2>Como te sientes HOY?</h2>
    <hr>
    <div>
        <label class="form-label" label="Email" description="We'll never share your email with anyone else." for="#email">Email*:</label>
        <br />
        <input
          v-model="email"
          class="form-input-email"
          id="email"
          type="email"
          required
          placeholder="Ingresa el email"
        />
        <!--<p>ejemplo@inspedralbes.cat</p>-->
      </div>
      <br>
      <br>
      <div>
        <label class="form-label" label="estado" for="#estado">Como te sientes?</label>
        <br />
        <select v-model="selected" class="form-select" aria-label="Default select example">
          <option v-for="option in estado" v-bind:value="option.emoji">
            {{ option.text }}
          </option>
        </select>
        <span id="emojis">{{ selected }}</span>
      </div>
      <div>
        <input class="form-submit" type="submit" value="Confirmar dades!" />
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