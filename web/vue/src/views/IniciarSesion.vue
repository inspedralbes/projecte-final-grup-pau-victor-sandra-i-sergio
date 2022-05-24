<script>
import { sesionStore } from "@/stores/sesionStore";
import { mapStores } from "pinia";
import router from "@/router";

export default {
  data() {
    return {
      click_registro: 0,
      passwordLogin: "",
      emailLogin: "",
      passwordRegister: "",
      emailRegister: "",
      nomApeRegister: "",
      animacionRegistrarse: false,
      ocultar: false,
      error: 0,
      scale: 0,
    };
  },

  computed: {
    ...mapStores(sesionStore),
  },

  mounted() {
    this.sesionStore.setRutaActual(this.$route.name);
  },

  methods: {
    cambiar_registro() {
      this.click_registro = 1;
    },
    cambiar_login() {
      this.click_registro = 0;
    },

    iniciarSesion() {
      this.error = this.comprovarDatos(
        this.emailLogin,
        this.passwordLogin,
        "login",
        "~"
      );

      if (!this.error.length) {
        let login = new FormData();
        login.append("email", this.emailLogin);
        login.append("password", this.passwordLogin);

        fetch(
          "http://genkicorpusback.alumnes.inspedralbes.cat:7101/usuario/login",
          {
            method: "POST",
            body: login,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status) {
              this.sesionStore.setUsuario(data.usuario);
              setTimeout(() => {
                router.push({ name: this.sesionStore.getRutaAnterior });
              }, 1700);
            }
            Swal.fire({
              position: "center",
              icon: data.status ? "success" : "error",
              title: data.msg,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: this.error.join(" y "),
          showConfirmButton: false,
          timer: 1500,
        });
      }
    },

    registrarse() {
      this.error = this.comprovarDatos(
        this.emailRegister,
        this.passwordRegister,
        "register",
        this.nomApeRegister
      );

      if (!this.error.length) {
        let register = new FormData();
        register.append("email", this.emailRegister);
        register.append("password", this.passwordRegister);
        register.append("nombreApellidos", this.nomApeRegister);

        fetch(
          "http://genkicorpusback.alumnes.inspedralbes.cat:7101/usuario/register",
          {
            method: "POST",
            body: register,
          }
        )
          .then((response) => response.json())
          .then((data) => {
            if (data.status) {
              this.sesionStore.setUsuario(data.usuario);

              setTimeout(() => {
                this.scale = 1;
              }, 2000);

              setTimeout(() => {
                router.push({ name: "registroDatos" });
              }, 3000);
            }

            Swal.fire({
              position: "center",
              icon: data.status ? "success" : "error",
              title: data.msg,
              showConfirmButton: false,
              timer: 1700,
            });
          });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: this.error.join(" y "),
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },

    comprovarDatos(email, password, tipo, nomApe) {
      let errores = [],
        cont = 0;

      if (email != "" && password != "" && nomApe != "") {
        if (tipo == "register") {
          console.log("reg");
          //Regex nombres
          nomApe.split(" ").forEach((e) => {
            /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
              e
            )
              ? null
              : cont++;
          });
          cont ? errores.push("Nombre o apellidos mal formatados") : null;
        }

        // Regex email
        /^[\w\.]+@([\w]+\.)+[\w]{2,4}$/.test(email)
          ? null
          : errores.push("Email mal formatado");

        // Regex password de 8-16 caracteres, con al menos una letra, un numero y un caracter especial.
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/.test(
          password
        )
          ? null
          : errores.push("Password mal formatado");
      } else {
        errores.push("Falta por rellenar algún campo");
      }

      return errores;
    },
  },
};
</script>

<template>
  <div>
    <!-- CARTA INICIAR SESIÓN / REGISTRO -->

    <div class="container" :class="[this.scale ? 'scale0' : '']">
      <div class="flip-box">
        <div
          class="flip-box-inner d-flex align-items-center"
          v-bind:class="[this.click_registro ? 'flip' : '']"
        >
          <!-- INICIAR SESIÓN -->
          <div class="flip-box-front carta_singup_front shadow col-12">
            <div class="iniciar_sesion">
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
                  :value="this.emailLogin"
                  aria-describedby="basic-addon1"
                  @input="
                    (event) => {
                      this.emailLogin = event.target.value;
                    }
                  "
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
                  :value="this.passwordLogin"
                  @input="
                    (event) => {
                      this.passwordLogin = event.target.value;
                    }
                  "
                />
              </div>

              <button
                class="btn btn-primary mt-4"
                @click="this.iniciarSesion()"
              >
                Iniciar Sesión
              </button>
              <div
                class="login_singup col-12 mt-4 mb-5"
                @click="cambiar_registro"
              >
                <span>No tienes cuenta?</span>
              </div>
            </div>
          </div>

          <!-- REGISTRO -->
          <div class="flip-box-back carta_singup_back shadow col-12">
            <div class="col-12 registrarse">
              <h3>Unete a Genki Corpus</h3>

              <div class="input-group mb-2 mt-5">
                <span class="input-group-text material-symbols-outlined"
                  >person</span
                >
                <input
                  type="text"
                  class="form-control"
                  placeholder="Nombre y apellidos"
                  aria-label="Nombre y apellidos"
                  aria-describedby="basic-addon1"
                  :value="this.nomApeRegister"
                  @input="
                    (event) => {
                      this.nomApeRegister = event.target.value;
                    }
                  "
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
                  :value="this.emailRegister"
                  @input="
                    (event) => {
                      this.emailRegister = event.target.value;
                    }
                  "
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
                  :value="this.passwordRegister"
                  @input="
                    (event) => {
                      this.passwordRegister = event.target.value;
                    }
                  "
                />
              </div>

              <button class="btn btn-primary mt-4" @click="this.registrarse()">
                Registrar
              </button>
              <div
                class="login_singup vcol-12 mt-4 mb-1"
                @click="cambiar_login"
              >
                <span>Ya tienes cuenta?</span>
              </div>
            </div>
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

.input-group-text

/* iconos formulario */ {
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
  background-image: url("http://genkicorpusback.alumnes.inspedralbes.cat/img/login.png");
  background-size: 120%;
  border-radius: 10px;
}

.carta_singup_front,
.carta_singup_back {
  position: absolute;
  height: 450px;
}

.bold {
  font-weight: 600;
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
    width: 100%;
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
