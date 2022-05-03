<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      selected: "",
      elemento: [
        {
          text: "Muerte",
          value: "Muerte",
        },
        {
          text: "Desnudo/a",
          value: "Desnudo",
        },
        {
          text: "Volar",
          value: "Volar",
        },
        {
          text: "Perseguido/a",
          value: "Perseguido",
        },
        {
          text: "Infidelidad",
          value: "Infidelidad",
        },
        {
          text: "Caida dientes",
          value: "Caida_dientes",
        },
        {
          text: "Riqueza",
          value: "Riqueza",
        },
      ],
    };
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
    // enviarFormulario();
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
      <h1>Esto es el HOME de DESCANSO</h1>
    </div>
    <div class="cuestionario_sueño">
      <h2>¿Que has soñado hoy?</h2>
    </div>
  </div>
</template>
