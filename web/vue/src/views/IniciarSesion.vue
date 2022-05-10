<script>
export default {
  data() {
    return {
      click: 0,
    };
  },
  methods: {
    cambiar() {
      this.click = 1;
    },
  },
};
</script>
>

<template>
  <div class="container align-items-center justify-content-center text-center">
    <div class="flip-box">
      <div class="flip-box-inner">
        <!-- INICIAR SESIÓN -->
        <div class="flip-box-front carta_singup_front row row-cols">
          <div class="col-12 iniciar_sesion">
            <h3>Iniciar Sesión</h3>
            <div class="input-group mb-2 mt-5">
              <span class="input-group-text material-symbols-outlined"
                >alternate_email</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Correo"
                aria-label="Correo"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-2 mt-3">
              <span class="input-group-text material-symbols-outlined"
                >lock</span
              >
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                aria-label="Contraseña"
                aria-describedby="basic-addon2"
              />
            </div>

            <button class="btn btn-primary mt-4">Iniciar Sesión</button>
            <div class="login_singup col-12 mt-4 mb-5" @click="cambiar">
              <span>No tienes cuenta?</span>
            </div>
          </div>
        </div>
        <!-- REGISTRO -->
        <div class="flip-box-back carta_singup_back row row-cols">
          <div class="col-12 registrarse">
            <h3>Unete a Genki Body</h3>

            <div class="input-group mb-2 mt-5">
              <span class="input-group-text material-symbols-outlined"
                >person</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Nombre"
                aria-label="Nombre"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-2 mt-3">
              <span class="input-group-text material-symbols-outlined"
                >alternate_email</span
              >
              <input
                type="text"
                class="form-control"
                placeholder="Correo"
                aria-label="Correo"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-2 mt-3">
              <span class="input-group-text material-symbols-outlined"
                >lock</span
              >
              <input
                type="password"
                class="form-control"
                placeholder="Contraseña"
                aria-label="Contraseña"
                aria-describedby="basic-addon2"
              />
            </div>

            <button class="btn btn-primary mt-4">Registrar</button>
            <div class="login_singup vcol-12 mt-4 mb-1" @click="cambiar">
              <span>Ya tienes cuenta?</span>
            </div>
          </div>
        </div>
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

/*.carta_singup {
  padding: 70px 30px 30px 30px;
  height: 450px;
  background-image: url(../assets/login3.png);
  border-radius: 10px;
  background-size: 500px;
  backface-visibility: hidden;
}*/

.input-group-text {
  background-color: #ffffff;
  color: black;
}

p {
  padding-top: 50px;
}

h3 {
  font-weight: bold !important;
}

.login_singup:hover {
  color: rgb(15, 179, 255);
  cursor: pointer;
}

.carta_singup_front {
  padding: 70px 30px 30px 30px;
  background-image: url(../assets/login3.png);
  background-size: 500px;
  border-radius: 10px;
}

.carta_singup_back {
  padding: 70px 30px 30px 30px;
  background-image: url(../assets/login3.png);
  background-size: 500px;
  border-radius: 10px;
}

.carta_singup_front,
.carta_singup_back {
  position: absolute;
  height: 450px;
}

/************************************/

.flip-box {
  background-color: transparent;
  width: 380px;
  height: 450px;
  perspective: 10000px;
}

.flip-box-inner {
  width: 380px;
  height: 450px;
  text-align: center;
  transition: transform 1.8s;
  transform-style: preserve-3d;
}

.flip-box-inner:hover {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 380px;
  height: 450px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-back {
  transform: rotateY(180deg);
}
</style>
