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
    class="card btn btn-outline-secondary float-start"
    @click="$emit('id', infoCuest.value)"
    :id="infoCuest.value"
  >
    <img :src="infoCuest.emoji" class="card-img-top" alt="emoticono" />
    <div class="card-body">
      <h5 class="card-title">{{ infoCuest.value }}</h5>
    </div>
  </div>
</template>
