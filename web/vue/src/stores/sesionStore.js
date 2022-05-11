import { defineStore } from "pinia";

export const sesionStore = defineStore("sesion", {
    state: () => ({
        sesion: {
            a: 0
        },
        usuario: {
            a: 0
        }
    }),

    getters: {
        getSesion() {
            return this.sesion;
        },
        getUsuario() {
            return this.usuario;
        },
    },

    actions: {
        set(s) {
            this.sesion = s;
        },
    },
});