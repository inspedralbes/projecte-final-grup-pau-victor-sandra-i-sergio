<script>
import Header from "../components/SubHeader.vue";
import CardSuenos from "../components/CardSuenos.vue";

export default {
  components: {
    Header,
    CardSuenos,
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
        if (this.selected.includes(id)) {
          this.selected = this.selected.filter((v) => {
            console.log(v);
            return v != id;
          });
        } else {
          this.selected.push(id);
        }
      } else {
        if (this.selected.includes(id)) {
          this.selected = this.selected.filter((v) => {
            return v != id;
          });
        } else {
          alert("No puedes seleccionar más de 5 opciones");
        }
      }

      //console.log(this.selected);

      console.log(this.selected);
      console.log(this.selected.length);
    },
    enviarFormulario() {
      let divResultado = document.getElementById("card-respuesta");
      divResultado.style.display = 'block';

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
              <h2 class="titulo_cuestionario text-center">
                ¿Que has soñado hoy?
              </h2>
            </div>
            <div class="col-12 text-center subtitulo">
              <h4>Selecciona las opciones que más se asemejen a tu sueño</h4>
            </div>
          </div>

          <div class="row justify-content-center mt-3">
            <div
              class="col-6 col-sm-4 col-md-3 col-lg-2 gy-3"
              v-for="(check, index) in elemento"
              :key="index"
              v-bind:value="check"
            >
              <CardSuenos
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-direction-row
                  btn btn-outline-light
                  p-2
                "
                @id="this.guardarseleccionada"
                :infoCuest="check"
                :contador="this.selected.length"
              />
              <!-- <div
                class="
                  d-flex
                  align-items-center
                  justify-content-center
                  flex-direction-row
                  btn btn-outline-light
                  p-2
                "
                :id="check"
                @click="guardarseleccionada(check)"
              >
                <div class="col-4">
                  <img
                    class="emoji_sueño"
                    src="../../public/img/EMOJIS SUEÑO/agua.png"
                    alt=""
                  />
                </div>

                <div class="col-8">
                  <p class="text-start">{{ check }}</p>
                </div>
              </div> -->
            </div>

            <div class="col-12 gy-4 text-center">
              <input
                class="btn btn-outline-light form-submit"
                type="button"
                @click="enviarFormulario()"
                value="Analizar sueño"
              />
            </div>
          </div>
        </div>


        <!-- Card Respuesta -->
        <div id="card-respuesta">
          <div class="card-group">
            <div v-for="n in this.selected.length" class="col-6 card">
              <img src="http://cantina2.alumnes.inspedralbes.cat/projecteCantina/css/bocadillo1.jpg" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{this.selected[n-1]}}</h5>
                <p class="card-text">Para saber mas sobre el sueño visite la siguiente página</p>
                <a href="https://lamenteesmaravillosa.com/tengo-miedo-cambio" class="link">Click para saber más</a>
              </div>
              <div class="card-footer">
                <small class="text-muted">Official website</small>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  </div>
</template>

<style scoped>
.cuestionario_sueño {
  color: rgb(255, 255, 255);
  margin-top: 50px;
  padding: 30px;
}

.subtitulo {
  padding: 15px;
}

.emoji_sueño {
  width: 35px;
}

.card-group {
  display: flex;
  justify-content: center;
}

#card-respuesta {
  display: none;
}

.card {
  max-width: 15%;
  min-width: 150px;
  margin: 1%;
}

.fondo {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: linear-gradient(90deg, #162046 0%, #0a0b0e 100%);
}

.submain {
  width: 100%;
  min-height: 81.2vh;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/stars-back.png");
  background-size: 400px;
  background-repeat: repeat;
  position: absolute;
}

.submain .col-8 p {
  margin: 0 0 0 7px;
}
</style>
