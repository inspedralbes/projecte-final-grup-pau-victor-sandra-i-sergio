<script>
export default {
  data() {
    return {
      click_registro: 0,
    };
  },
  methods: {
    cambiar_registro() {
      this.click_registro = 1;
    },
    cambiar_login() {
      this.click_registro = 0;
    },
  },
};
</script>

<template>
  <div>

    <!-- CARTA INICIAR SESIÓN / REGISTRO -->
    <div class="container">
      <div class="flip-box">
        <div class="flip-box-inner d-flex align-items-center" v-bind:class="[this.click_registro ? 'flip' : '']">

          <!-- INICIAR SESIÓN -->
          <div class="flip-box-front carta_singup_front shadow col-12">
            <div class="iniciar_sesion">
              <h3>Iniciar Sesión</h3>
              <div class="input-group mb-2 mt-5">
                <span class="input-group-text material-symbols-outlined">alternate_email</span>
                <input type="text" class="form-control" placeholder="Correo" aria-label="Correo"
                  aria-describedby="basic-addon1" />
              </div>

              <div class="input-group mb-2 mt-3">
                <span class="input-group-text material-symbols-outlined">lock</span>
                <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
                  aria-describedby="basic-addon2" />
              </div>

              <button class="btn btn-primary mt-4">Iniciar Sesión</button>
              <div class="login_singup col-12 mt-4 mb-5" @click="cambiar_registro">
                <span>No tienes cuenta?</span>
              </div>
            </div>
          </div>

          <!-- REGISTRO -->
          <div class="flip-box-back carta_singup_back shadow col-12">
            <div class="col-12 registrarse">
              <h3>Unete a Genki Body</h3>

              <div class="input-group mb-2 mt-5">
                <span class="input-group-text material-symbols-outlined">person</span>
                <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre"
                  aria-describedby="basic-addon1" />
              </div>

              <div class="input-group mb-2 mt-3">
                <span class="input-group-text material-symbols-outlined">alternate_email</span>
                <input type="text" class="form-control" placeholder="Correo" aria-label="Correo"
                  aria-describedby="basic-addon1" />
              </div>

              <div class="input-group mb-2 mt-3">
                <span class="input-group-text material-symbols-outlined">lock</span>
                <input type="password" class="form-control" placeholder="Contraseña" aria-label="Contraseña"
                  aria-describedby="basic-addon2" />
              </div>

              <button class="btn btn-primary mt-4">Registrar</button>
              <div class="login_singup vcol-12 mt-4 mb-1" @click="cambiar_login">
                <span>Ya tienes cuenta?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    <!-- P.2 REGISTRO - DATOS DEL USUARIO -->
    <div class="container justify-content-center d-flex align-items-center">
      <div class="div_datos REGISTRO2 align-items-start shadow-lg">
        <div class="div2 p-5">

          <h3 class="text-center titulo mb-5">Cuentanos un poco más sobre ti</h3>

          <div class="row align-items-center">
 
            <div class="col-md-7 col-12">
              <div class="row align-items-center">
                <div class="col-auto">
                  <label class="bold" for="edad">Edad</label>
                </div>
                <div class="col-5 col-md-7 g-1 ">
                  <input type="number" class="form-control" id="edad">
                </div>
              </div>

              <div class="row align-items-start mt-4">
                <div class="col-md-auto col-12">
                  <label class="bold mb-3" for="Ocupación">Ocupación</label>
                  <div class="ocupacion p-3 pe-4 shadow-sm">
                    <div class="form-check ">
                      <input class="form-check-input" type="radio" name="Ocupacion" id="trabajador">
                      <label class="form-check-label" for="trabajador">Trabajo</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Ocupacion" id="estudiante">
                      <label class="form-check-label" for="Ocupacion">Estudio</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="Ocupacion" id="otro">
                      <label class="form-check-label" for="Ocupacion">Otro</label>
                    </div>
                  </div>
                </div>
                
                <div class="col-md-auto col-12">
                  <label class="bold mb-3" for="Ocupación">Sexo</label>
                  <div class="sexo p-3 pe-4 shadow-sm">
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="sexo" id="mujer">
                      <label class="form-check-label" for="trabajador">Mujer</label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="sexo" id="hombre">
                      <label class="form-check-label" for="Ocupacion">Hombre</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-md-5 col-12">

              <div class="row nivel_row align-items-center mt-2">
                <div class="col nivel my-3">
                  <label for="nivel" class="form-label bold">Nivel físico</label>
                  <input type="range" class="form-range" min="1" max="3" id="nivel">
                  <br>
                  <span class="form-label relativeP">Principiante</span>
                  <span class="form-label relativeI">Intermedio</span>
                  <span class="form-label relativeA">Avanzado</span>
                </div>
              </div>

              <div class="row nivel_row align-items-center mt-2">
                <div class="col nivel my-3">
                  <label for="nivel" class="form-label bold">Disponibilidad de tiempo</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Selecciona una opción</option>
                    <option value="1">15 min</option>
                    <option value="2">30 min</option>
                    <option value="3">45 min</option>
                    <option value="3">1 h</option>
                  </select>
                </div>    
              </div>
            </div>

          </div>
          <div class="text-center mt-3">
          <div class="btn btn-primary text-center">Confirmar</div>
          </div>

        </div>
      
      </div>    
    </div>
  </div>

</template>

<style scoped>
.container {
  height: 88vh;
  width: 100vw;
}

.input-group-text/* iconos formulario */ {
  background-color: #ffffff;
  color: black;
}

h3 {
  font-weight: bold !important;
}

.login_singup:hover {
  color: rgb(15, 179, 255);
  cursor: pointer;
}

.carta_singup_front,
.carta_singup_back {
  padding: 40px 30px 30px 30px;
  background-image: url(../../public/img/login.png);
  background-size: 120%;
  border-radius: 10px;
}

.carta_singup_front,
.carta_singup_back {
  position: absolute;
  height: 450px;
}

.bold{
  font-weight: 600;
}

/***** Parte 2 registro ******/

.ocupacion, .sexo {
  background-color: rgba(255, 255, 255, 0.5);
  padding: 8px;
  border-radius: 8px;
}

.REGISTRO2 {
  background-image: url(../../public/img/login.png);
  border-radius: 10px;
}

.div2 {
  margin: 20px;
}

.edad_row {
  padding-left: 0;
}

.relativeP {
  font-size: 14px;
  position: relative;
  right: 29px;
}

.relativeI {
  font-size: 14px;
  position: relative;
  left: 21px;
}

.relativeA {
  font-size: 14px;
  position: relative;
  left: 75px;
}

@media only screen and (min-width: 380px) {
  .div_datos {
    max-width: 760px;
    width: 100%
  }
}


/***** Transformación Flip *****/

.flip-box {
  background-color: transparent;
  height: initial;
  perspective: 10000px;
}

.flip-box-inner {
  height: 88vh;
  text-align: center;
  transition: transform 1.8s;
  transform-style: preserve-3d;
  width: 100%;
  margin: auto;
}

@media only screen and (min-width: 380px) {
  .flip-box-inner {
    max-width: 350px;
    width: 100%
  }
}

.flip {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-back {
  transform: rotateY(180deg);
}
</style>
