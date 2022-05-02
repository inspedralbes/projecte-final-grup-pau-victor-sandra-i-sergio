<script>
import { RouterLink, RouterView } from "vue-router";
import router from "@/router";

export default {
  components: {
    RouterLink,
    RouterView,
  },

  methods: {
    goto(id) {
      router.push({ name: id })
    }
  }
};
</script>

<template>
  <main class="container landingPage">
    <div class="row">
      <div class="col-12 gy-4">
        <span @click="this.goto($event.target.id)" id="ejercicio">Ejercicio</span>
        <img width="70" src="../../public/img/alimentacion.png" alt="">
      </div>
      <div class="col-12 text-end gy-4">
        <span @click="this.goto($event.target.id)" id="alimentacion">Alimentacion</span>
      </div>
      <div class="col-12 gy-4">
        <span @click="this.goto($event.target.id)" id="saludmental">
          Salud Mental y Descanso
        </span>
      </div>
    </div>
  </main>
</template>

<style>
.landingPage .col-12 {
  position: relative;
}

.landingPage .col-12 img{
  position: absolute;
}

.landingPage .col-12 span {
  font-size: 5vw;
  margin: 0;
  padding: 10px 30px;
  border-radius: 10px;
  background-color: slateblue;
}
</style>
