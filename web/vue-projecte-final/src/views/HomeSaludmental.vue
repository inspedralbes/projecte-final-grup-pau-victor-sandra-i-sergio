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
          text: "Energico",
          value: "Energico",
          emoji: "😎🏋️‍♀️",
          num: 2,
          motivos: {
            motivo1: "He tomado alguna sustancia energetica",
            motivo2: "He recibido una noticia que no esperaba",
            motivo3: "Me siento energético porque estoy motivado y contento",
          },
        },
        {
          text: "Desanimado",
          value: "Desanimado",
          emoji: "😔",
          num: 3,
          motivos: {
            motivo1: "He recibidio una mala noticia",
            motivo2: "He fracasado una tarea, proyecto o objetivo",
            motivo3: "No tengo a nadie que me pueda ayudar",
          },
        },
        {
          text: "Estresado",
          value: "Estresado",
          emoji: "😩",
          num: 4,
          motivos: {
            motivo1: "Se me estan acumulando trabajos o cosas que hacer",
            motivo2: "No me sale nada de lo que intento",
            motivo3:
              "No aprovecho el tiempo y veo como pasan los meses sin hacer nada",
          },
        },
        {
          text: "Irritado",
          value: "Irritado",
          emoji: "😠",
          num: 5,
          motivos: {
            motivo1:"La gente no tiene en cuenta mis ideas o opiniones en general",
            motivo2: "Me pasan cosas malas que no puedo controlar",
            motivo3: "La suerte no esta nunca de mi lado",
          },
        },
        {
          text: "Triste",
          value: "Triste",
          emoji: "😢",
          num: 6,
          motivos: {
            motivo1: "He recibido una mala noticia",
            motivo2: "Se ha ido una persona cercana a mi",
            motivo3: "No tengo a nadie con quien compartir mi tiempo",
          },
        },
        {
          text: 'Nervioso',
          value: "Nervioso",
          emoji: "😖😟",
          num: 7,
          motivos: {
            motivo1: "Tengo una actividad importante a la vista",
            motivo2: "Estoy esperando una respuesta importante para mi",
            motivo3: "Me he alterado de manera momentanea",
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
      console.log(valor);
      this.selected = this.estado.filter((v) => {
        return v.value == valor;
      });
    },
    guardarMotivo(motivo) {
      console.log(motivo);
      this.selected = this.estado.filter((v) => {
        return v.motivo == motivo;
      });
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
            <button class="btn btn-light float-start" @click="guardarEstado($event.target.id)" :id="opcion.value" :for="opcion.value">{{opcion.emoji}} {{opcion.text}}</button>  
          </div>

        <div class="row">
          <div id="motivo" >
            <div v-if="selected" class="">
                <button
                  @click="guardarMotivo($event.target.value)"  
                  :key="index"
                  v-for="(estado, index) in selected[0].motivos"
                  v-bind:value="estado"
                >
                  {{ estado }}
                </button>
            </div>
          </div>
        </div>


        <div class="col-12 text-center">
          <input
            class="btn btn-outline-secondary form-submit"
            type="button"
            @click="enviarFormulario()"
            value="Confirmar datos"
          />
        </div>
      </div>
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
  </div>
</template>

<style>
select {
  background-color: white;
  color: gray;
}
.cuestionario_estado {
  background-color: rgb(199, 234, 255);
  padding: 20px;
  margin-top: 40px;
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
