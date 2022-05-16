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
.material-symbols-outlined {
  font-variation-settings: "FILL"0, "wght"400, "GRAD"0, "opsz"48;
}


.scale0 {
  animation: register 1s ease-in-out;
}

.scale1 {
  transform: scale(1);
  animation: register 1s ease-in-out reverse;
}

@keyframes register {
  from {
    transform: scale(1);

  }

  50% {
    transform: scale(1.15);
  }

  95%{
    transform: scale(0);
  }

  to {
    transform: scale(0);
  }
}

</style>
