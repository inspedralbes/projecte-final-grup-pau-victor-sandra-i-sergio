<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      selected: [],
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
          text: "Infancia",
          value: "Infancia",
        },
        {
          text: "Agua",
          value: "Agua",
        },
        {
          text: "Trabajo",
          value: "Trabjo",
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
    guardarseleccionada(id) {
      if (this.selected.length < 5) {
        this.selected.push(id);
      } else {
        alert("No puedes seleccionar más de 5 opciones");
      }

      console.log(this.selected);
    },
    enviarFormulario() {
      var cuestDescanso = new FormData();
      cuestDescanso.append("descripcionSueno", JSON.stringify(this.selected));
      cuestDescanso.append("usuario", "alvaro");

      fetch("http://192.168.210.161:9000/descanso/respuesta-cuestionario", {
        method: "POST",
        body: cuestDescanso,
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
    <div>
      <Header />
    </div>

    <div class="cuestionario_sueño container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="titulo_cuestionario text-center">¿Que has soñado hoy?</h2>
        </div>
        <div class="col-12 text-center subtitulo">
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
          <div>
            <button
              class="btn btn-outline-secondary"
              type="button"
              :value="check.value"
              :id="check.value"
              @click="guardarseleccionada($event.target.value)"
            >
              {{ check.text }}
            </button>
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
  background-color: rgb(199, 234, 255);
  margin-top: 50px;
  padding: 30px;
}

.subtitulo {
  margin: 15px;
}
</style>
