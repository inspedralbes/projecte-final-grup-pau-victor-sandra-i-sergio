import { defineStore } from "pinia";

export const sesionStore = defineStore("sesion", {
    state: () => ({
        usuario: {},
        rutaAnterior: "",
        rutaActual: "",
    }),

    getters: {
        getUsuario() {
            return this.usuario;
        },

        getRutaAnterior() {
            return this.rutaAnterior;
        },
    },

    actions: {
        setUsuario(u) {
            this.usuario = u;
            window.localStorage.setItem('usuario', JSON.stringify(this.usuario));
        },

        setRutaActual(r) {
            this.rutaAnterior = this.rutaActual;
            if (r != "registroDatos" && r != "iniciarSesion") {
                this.rutaActual = r;
            }
        },
    },


});