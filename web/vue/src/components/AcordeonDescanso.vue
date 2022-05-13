<script>
export default {
  data() {
    return {
      selected: 0,
    };
  },
  props: ["infoAcordeon", "index"],

  beforeMount() {
    console.log(this.infoAcordeon);
    console.log(this.index);
  },
  methods: {},
};
</script>

<template>
  <div class="accordion-item shadow-sm">
    <h2 class="accordion-header" :id="'panelsStayOpen-heading' + index">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#panelsStayOpen-collapse' + index"
        aria-expanded="true"
        :aria-controls="'panelsStayOpen-collapse' + index"
      >
        <img class="img-little" :src="this.infoAcordeon.img" />Has soñado con<span>{{
          this.infoAcordeon.tipo
        }}</span>
      </button>
    </h2>
    <div
      :id="'panelsStayOpen-collapse' + index"
      class="accordion-collapse collapse show row text-center"
      :aria-labelledby="'panelsStayOpen-heading' + index"
    >
      <div
        class="accordion-body col-12 align-items-center justify-content-center"
      >
        <p class="card-text">
          Para descubrir el significado de tu sueño visita la siguiente página
        </p>
        <a :href="this.infoAcordeon.respuesta" class="link" target="_blank"
          >Click para saber más</a
        >
      </div>
    </div>
  </div>
</template>


<style scoped>
.acordio-resultado {
  padding: 20px;
}

.img-little {
  width: 40px;
  margin-right: 15px;
}

@media only screen and (min-width: 500px) {
  .accordion-item {
    margin-left: 15%;
    margin-right: 15%;
    max-width: 500px;
    margin: auto;
  }
}

.shadow-sm {
  box-shadow: 0 1rem 3rem rgba(214, 208, 208, 0.384) !important;
}

span {
  font-weight: 550;
  margin-left: 5px;
}
</style>
