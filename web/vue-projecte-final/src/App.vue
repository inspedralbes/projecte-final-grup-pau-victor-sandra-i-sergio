<script>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/HeaderGeneral.vue";
export default {
  components: {
    RouterLink,
    RouterView,
    Header,
  },
};
</script>

<template>
  <div class="wrapper">
    <nav>
      <Header />
      <RouterLink to="/"></RouterLink>
    </nav>

    <RouterView />
  </div>
</template>

<style></style>
