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
        {
          text: "Caida",
          value: "Caida",
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
    //enviarFormulario();
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
      <h1>Esto es el HOME de DESCANSO</h1>
    </div>

    <div class="cuestionario_sueño container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="titulo_cuestionario text-center">¿Que has soñado hoy?</h2>
        </div>
        <div class="col-12 text-center">
          <h4>Selecciona las opciones que más se asemejen a tu sueño</h4>
        </div>
      </div>

      <div class="row">
        <div
          class="col-4"
          v-for="(check, index) in elemento"
          :key="index"
          v-bind:value="check.value"
        >
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="Volar"
              id="CheckboxInt"
            />
            <label class="form-check-label float-start" for="CheckboxInt">{{
              check.text
            }}</label>
          </div>
        </div>

        <div class="col-12 text-center">
          <input
            class="btn btn-outline-secondary form-submit"
            type="button"
            @click="enviarFormulario()"
            value="Analizar sueño"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cuestionario_sueño {
  background-color: lightskyblue;
}
</style>
