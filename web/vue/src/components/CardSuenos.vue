<script>
export default {
  data() {
    return {
      datosPinia: null,
      selected: 0,
    };
  },
  props: ["infoCuest"],
  emits: ["id"],

  beforeMount() {
    console.log(this.infoCuest);
  },
  methods: {},
};
</script>

<template>
  <div
    style="max-width: 12rem"
    class="card p-2"
    @click="$emit('id', $event.target.id)"
    @mouseover="this.selected = 1"
    @mouseleave="this.selected = 0"
    :id="infoCuest.value"
  >
    <div :class="[this.selected ? 'appear' : 'disappear']" class="checked">
      <span class="material-symbols-outlined"> done </span>
    </div>
    <div class="d-flex justify-content-center pt-2">
      <img
        :src="infoCuest.emoji"
        class="card-img-top"
        alt="emoticono"
        :id="infoCuest.value"
      />
    </div>
    <div class="card-body mt-3 mb-1 text-center" :id="infoCuest.value">
      <h5 class="card-title" :id="infoCuest.value">{{ infoCuest.value }}</h5>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 5%;
  box-shadow: 25px 38px 53px 0px rgba(0, 0, 0, 0.16);
  transition: all 0.2s ease-in-out;
  position: relative;
  border: 2px solid white;
  z-index: 2;
}

.card:hover {
  box-shadow: 5px 10px 60px -12px rgba(0, 0, 0, 0.67);
  background-color: #c4c4c4;
  border: 2px solid #535353;
  border-radius: 0% 5% 5% 5%;
}

.card-body {
  padding: 0.2rem;
}

.card-img-top {
  max-width: 80%;
  width: auto;
}

@media only screen and (max-width: 500px) {
  .card-title {
    font-size: 1rem;
  }
}

.checked {
  opacity: 0;
  transition: all 0.5s ease-in-out;
  position: absolute;
  top: 0px;
  left: 0px;
  color: white;
  z-index: 1;
}

.checked::before {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  top: -2px;
  left: -2px;
  border-right: 40px solid transparent;
  border-bottom: 40px solid transparent;
  border-left: 40px solid rgb(83, 83, 83);
  z-index: -1;
}

.card:hover .checked,
.card:hover .checked::before {
  opacity: 1;
}

/* .disappear {
  animation: appear 0.5s ease-in-out alternate-reverse
} */

@keyframes appear {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
