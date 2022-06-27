<template>
    <!-- El home va a ser un login igual que el de unifranz -->

    <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div class="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div class="self-start hidden lg:flex flex-col text-white">
                <h1 class="mb-3 font-bold text-5xl">Bienvenido a SuperLMS</h1>
            </div>
        </div>
        <div class="flex justify-center self-center z-10">
            <div class="p-12 bg-white mx-auto rounded-2xl w-100">
                <div class="mb-4">
                    <h3 class="font-semibold text-2xl text-gray-800">
                        Iniciar sesión
                    </h3>
                    <p class="text-gray-500">
                        Ingresa con los datos que se te proporciono.
                    </p>
                </div>
                <div class="space-y-5">
                    <form @submit.prevent="login">
                        <div class="space-y-2">
                            <label class="text-sm font-medium text-gray-700 tracking-wide">Usuario</label>
                            <input
                                class="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                v-model="usuario.usuario" type="" placeholder="Usuario" />
                        </div>
                        <div class="space-y-2">
                            <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                Contraseña
                            </label>
                            <input
                                class="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                type="password" v-model="usuario.password" placeholder="Tu contraseña" />
                        </div>
                        <div class="flex items-center justify-between m-2">
                            <div class="flex items-center">
                                <input id="remember_me" name="remember_me" type="checkbox" @click="
                                    usuario.recuerdame = !usuario.recuerdame
                                " class="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                <label for="remember_me" class="ml-2 block text-sm text-gray-800">
                                    Recuerdame
                                </label>
                            </div>
                        </div>
                        <div>
                            <button :disabled="usuario.disabled" type="submit"
                                class="w-full flex justify-center bg-red-400 hover:bg-red-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                                Iniciar Sesión
                            </button>
                            <p class="text-red-500">{{ error }}</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import { Inertia } from "@inertiajs/inertia";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default {
    props: ["error", "errors"],
    setup() {
        const usuario = reactive({
            usuario: "",
            password: "",
            recuerdame: false,
            disabled: false,
        });
        const login = () => {
            console.log("Holaaa");
            if (usuario.usuario == "" || usuario.password == "") {
                Notify.init({
                    clickToClose: true,
                });
                Notify.failure("Debes introducir usuario y contraseña");
                return;
            }
            Inertia.post(route("loginPost"), usuario, {
                preserveScroll: true,
                preserveState: true,
                onBefore: () => {
                    usuario.disabled = true;
                },
                onSuccess: (success) => {
                    console.log("Logeaste");
                    usuario.disabled = false;
                },
            });
        };
        return {
            usuario,
            login,
        };
    },
};
</script>
