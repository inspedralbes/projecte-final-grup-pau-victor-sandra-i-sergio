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
</style>
