import {defineStore} from 'pinia'

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user:false,
    }),
    actions: {
        logIn() {
            this.user = true
        },
        logOut() {
            this.user = false
        }
    }
})