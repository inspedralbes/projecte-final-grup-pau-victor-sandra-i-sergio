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
    style="width: 12rem"
    class="card carta btn btn-outline-secondary float-start pt-4 "
    @click="$emit('id', $event.target.id)"
    :id="infoCuest.value"
  >
  <div class="d-flex justify-content-center">
    <img
      :src="infoCuest.emoji"
      class="card-img-top"
      alt="emoticono"
      :id="infoCuest.value"
    />
    </div>
    <div class="card-body mt-3 mb-1" :id="infoCuest.value">
      <h5 class="card-title" :id="infoCuest.value">{{ infoCuest.value }}</h5>
    </div>
  </div>
</template>


<style scoped>


.card {
  border-radius: 5%;
  box-shadow: 25px 38px 53px 0px rgba(0,0,0,0.16);
}

.carta:hover{
box-shadow: 5px 10px 60px -12px rgba(0, 0, 0, 0.67);}

.card-img-top {
  width: 65%;
}


</style>
