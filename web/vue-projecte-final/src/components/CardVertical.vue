<script>
export default {
  data() {
    return {
      datosPinia: null,
      selected: [],
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
    style="width: 18rem"
    class="card btn btn-outline-success float-start"
    @click="$emit('id', $event.target.id)"
    :id="infoCuest.value"
  >
    <img
      src="../../public/img/Enamorarse.png"
      class="card-img-top"
      alt="emoticono"
      :id="infoCuest.value"
    />
    <div class="card-body" :id="infoCuest.value">
      <h5 class="card-title" :id="infoCuest.value">{{ infoCuest.text }}</h5>
    </div>
  </div>
</template>
