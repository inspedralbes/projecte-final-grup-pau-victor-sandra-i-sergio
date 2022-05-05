<script>
import { RouterView } from "vue-router";
import Header from "./components/HeaderGeneral.vue";
export default {
  components: {
    RouterView,
    Header,
  },
};
</script>

<template>
  <div class="wrapper">
    <nav>
      <Header />
    </nav>
  </div>
  <RouterView />
</template>

<style>
#app {
  min-height: 100vh;
  min-width: 100vw;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
}
</style>
