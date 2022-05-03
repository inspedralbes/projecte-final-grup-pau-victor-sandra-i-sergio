<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
};
</script>

<template>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">

      <RouterLink class="navbar-brand" to="/">
        <img src="../../public/img/GenkiCorpusLogo.png" alt="" width="60" height="60">
      </RouterLink>
      <RouterLink class="btn btn-primary" to="/">Home</RouterLink>
    </div>
  </nav>
</template>
