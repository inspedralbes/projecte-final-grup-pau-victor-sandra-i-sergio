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
  <div class="accordion-item">
    <h2 class="accordion-header" :id="'panelsStayOpen-heading' + index">
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="'#panelsStayOpen-collapse' + index"
        aria-expanded="true"
        :aria-controls="'panelsStayOpen-collapse' + index"
      >
        <img class="img-little" :src="this.infoAcordeon.img" />{{
          this.infoAcordeon.tipo
        }}
      </button>
    </h2>
    <div
      :id="'panelsStayOpen-collapse' + index"
      class="accordion-collapse collapse show row"
      :aria-labelledby="'panelsStayOpen-heading' + index"
    >
      <div
        class="accordion-body col-12 align-items-center justify-content-center"
      >
        <p class="card-text">
          Para saber mas sobre el sueño visite la siguiente página
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
</style>
