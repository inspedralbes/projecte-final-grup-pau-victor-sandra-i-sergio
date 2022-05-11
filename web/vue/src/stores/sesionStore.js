import { defineStore } from "pinia";

export const sesionStore = defineStore("sesion", {
    state: () => ({
        sesion: {},
        usuario: {},
        rutaAnterior: "",
        rutaActual: ""
    }),

    getters: {
        getSesion() {
            return this.sesion;
        },
        getUsuario() {
            return this.usuario;
        },

        getRutaAnterior(){
            return this.rutaAnterior;
        }
    },

    actions: {
        setUsuario(u) {
            this.usuario = u;
        },

        setRutaActual(r){
            this.rutaAnterior = this.rutaActual;
            this.rutaActual = r;
        }
    },
});