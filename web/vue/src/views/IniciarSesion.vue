<script>
export default {
  data() {
    return {
     
    }
  },
  methods: {
    cambiarForm() {
      console.log("heeey");
    },
  }
}
</script>
>



<template>
	<div class="container align-items-center justify-content-center text-center">
      <div class="carta-iniciar_sesion row row-cols align-items-center justify-content-center shadow rounded">

        <div class="col-12 iniciar_sesion">
          <h3>Iniciar Sesión</h3>
          <div class="input-group mb-2 mt-5">
            <span class="input-group-text material-symbols-outlined">alternate_email</span>
            <input type="text" class="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-2 mt-3">
            <span class="input-group-text material-symbols-outlined">lock</span>
            <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon2">
          </div>

          <button class="btn btn-primary mt-4" >Iniciar Sesión</button>
          <div class="login_singup col-12 mt-4 mb-5" @click="cambiarFrom()"><span>No tienes cuenta?</span></div>
          
        </div>

        <!-- Registrarse -->
        <div class="col-12 registrarse">
          <h3>Unete a Genki Body</h3>

          <div class="input-group mb-2 mt-5">
            <span class="input-group-text material-symbols-outlined">person</span>
            <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-2 mt-3">
            <span class="input-group-text material-symbols-outlined">alternate_email</span>
            <input type="text" class="form-control" placeholder="Correo" aria-label="Correo" aria-describedby="basic-addon1">
          </div>

          <div class="input-group mb-2 mt-3">
            <span class="input-group-text material-symbols-outlined">lock</span>
            <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña" aria-describedby="basic-addon2">
          </div>

          <button class="btn btn-primary mt-4">Registrar</button>
          <div class="login_singup vcol-12 mt-4 mb-4" @click="cambiarFrom"><span>Ya tienes cuenta?</span></div>
        </div>
      </div>
    </div>
</template>


<style scoped>

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
  width: 100vw;
}

.carta-iniciar_sesion {
  padding: 70px 30px 30px 30px;
  background-image: url(../assets/login3.png);
  border-radius: 10px;
  background-size: 500px;
}

.input-group-text {
  background-color: #ffffff ;
  color: black;
}

p {
  padding-top: 50px;
}

h3 {
  font-weight: bold !important;
}

.registrarse {
  display: none;
}

.oculto {
  display: none;
}

.login_singup:hover {
  color: rgb(15, 179, 255);
  cursor: pointer;
}


</style>