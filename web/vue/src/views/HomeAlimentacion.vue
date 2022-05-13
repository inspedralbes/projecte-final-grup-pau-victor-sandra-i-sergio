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

    <div
      class="alimentacion aling-items-center align-items-center justify-content-center text-center"
    >
      <img
        class="imgg"
        src="../../public/img/cooking.png"
        alt="ilustración de personas cocinando"
      />
      <h2>Cooming soon ...</h2>
    </div>
  </div>
</template>

<style scoped>
.imgg {
  margin: 50px;
  width: 950px;
}
</style>
