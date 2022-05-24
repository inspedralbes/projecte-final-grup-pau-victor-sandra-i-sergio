<script>
import Header from "../components/SubHeader.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    ...mapStores(sesionStore),
  },

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },
};
</script>

<template>
  <div>
    <div>
      <Header />
    </div>
      <!-- imagen para informar que estamos trabajando en ello -->
    <div
      class="alimentacion aling-items-center align-items-center justify-content-center text-center"
    >
      <img
        class="imgg"
        src="http://genkicorpusback.alumnes.inspedralbes.cat/img/cooking.png"
        alt="ilustración de personas cocinando"
      />
      <h2>Cooming soon ...</h2>
    </div>
  </div>
</template>

<style scoped>
.imgg {
  margin: auto;
  width: 90%;
}

@media only screen and (min-width: 500px) {
  .imgg {
    max-width: 40%;
  }
}
</style>
