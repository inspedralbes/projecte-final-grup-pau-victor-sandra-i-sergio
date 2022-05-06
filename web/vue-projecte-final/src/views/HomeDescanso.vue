<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      selected: [],
      elemento: [],
    };
  },

  beforeMount() {
    fetch("http://192.168.210.161:9000/descanso/tipos-suenos")
      // fetch("http://localhost:9000/descanso/tipos-suenos")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.elemento = data.tipoSueno;
        console.log(this.elemento);
      });
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
        // fetch("http://localhost:9000/descanso/respuesta-cuestionario", {
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

    <div class="fondo">
      <div class="submain">
        <div class="container cuestionario_sueño">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="titulo_cuestionario text-center">¿Que has soñado hoy?</h2>
            </div>
            <div class="col-12 text-center subtitulo">
              <h4>Selecciona las opciones que más se asemejen a tu sueño</h4>
            </div>
          </div>

          <div class="row">
            <div class="col-4" v-for="(check, index) in elemento" :key="index" v-bind:value="check">
              <div>
                <button class="btn btn-outline-secondary" type="button" :value="check" :id="check"
                  @click="guardarseleccionada($event.target.value)">
                  <img class="emoji_sueño" src="../../public/img/EMOJIS SUEÑO/agua.png" alt="">
                  {{ check }}

                </button>
              </div>
            </div>

            <div class="col-12 text-center">
              <input class="btn btn-outline-secondary form-submit" type="button" @click="enviarFormulario()"
                value="Analizar sueño" />
            </div>
          </div>
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
  padding: 15px;
}

.emoji_sueño {
  width: 35px;
}

.fondo {
  width: 100vw;
  min-height: 81vh;
  background: linear-gradient(90deg, #162046 0%, #0A0B0E 100%);
}

.submain {
  width: 100%;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/stars-back.png');
  background-size: 400px;
  background-repeat: repeat;
  position: absolute;
}
</style>
