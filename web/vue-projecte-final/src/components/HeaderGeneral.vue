<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};

</script>

<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Navbar</span>
      <RouterLink class="btn btn-primary" to="/">Home</RouterLink>
    </div>
  </nav>
</template>
