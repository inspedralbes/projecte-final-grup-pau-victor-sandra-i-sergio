<script>
import { RouterView } from "vue-router";
import Header from "./components/HeaderGeneral.vue";
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";

export default {
  components: {
    RouterView,
    Header,
  },

  computed: {
    ...mapStores(sesionStore),
  },

  created() {
    if (window.localStorage.getItem('usuario')) {
      console.log(JSON.parse(window.localStorage.getItem('usuario')))
      this.sesionStore.setUsuario(JSON.parse(window.localStorage.getItem('usuario')));
    }
  },
};
</script>

<template>
  <div class="wrapper sticky-top">
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

.bold {
  font-weight: 600;
}

@keyframes register {
  from {
    transform: scale(1);
  }

  50% {
    transform: scale(1.15);
  }

  95% {
    transform: scale(0);
  }

  to {
    transform: scale(0);
  }
}

a {
  color: #a8cf45 !important;
  transition: all 0.2s ease-in-out;
  cursor: default
}

a:hover,
a:active,
a:focus,
a:active {
  color: #28844b !important;
}
</style>
