<script>
import Header from "../components/SubHeader.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {};
  },
};
</script>


<template>
  <div>
    <div>
      <Header />
    </div>
    
    <div class="alimentacion aling-items-center align-items-center justify-content-center text-center" >
      <img class="imgg" src="../../public/img/working_out.png" alt="ilustración de personas cocinando">
      <h2>Cooming soon ...</h2>
    </div>
  </div>
</template>


<style scoped>

.imgg {
  margin: 50px;
  width: 700px;
}

</style>
