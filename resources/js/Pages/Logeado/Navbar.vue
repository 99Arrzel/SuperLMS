<template>
    <header>
        <nav
            class="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
            <div>
                <a @click="redirectTo('home')">
                    <!-- Trash bo -->
                    <p class="text-5xl">TUNOMBREAQUI</p>
                    <p class="text-cyan-400">
                        Bienvenido {{ usuario.persona.nombre }}
                    </p>
                </a>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" @click="menuOptions.show = !menuOptions.show"
                class="h-6 w-6 cursor-pointer md:hidden block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <div :class="
                'w-full md:flex md:items-center md:w-auto' +
                (menuOptions.show ? ' hidden' : '')
            " id="menu">
                <ul class="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                    <li v-if="usuario.id_rol == 1">
                        <a class="md:p-4 block">
                            <SplitButton :model="urlsAdmin" class="p-button-md p-button-text p-button-secondary">
                                <Button @click="redirectTo('dashboard-adm')">
                                    <a class="text-gray-700 hover:text-red-400">Admin</a>
                                </Button>
                            </SplitButton>
                        </a>
                    </li>
                    <li class="self-center">
                        <InputSwitch v-model="data.dark" v-tooltip.bottom="data.dark ? 'Modo light' : 'Modo dark'">
                        </InputSwitch>
                    </li>
                    <!-- <li>
                        <a class="md:p-4 py-2 block"
                            ><Button
                                class="p-button-md p-button-text p-button-secondary"
                                @click="redirectTo('enlaces')"
                            >
                                <a class="text-gray-700 hover:text-red-400"
                                    >Enlaces</a
                                >
                            </Button></a
                        >
                    </li>
                    <li>
                        <a class="md:p-4 py-2 block"
                            ><Button
                                class="p-button-md p-button-text p-button-secondary"
                                @click="redirectTo('aulas')"
                            >
                                <a class="text-gray-700 hover:text-red-400"
                                    >Aulas</a
                                >
                            </Button></a
                        >
                    </li>
                    <li></li> -->
                    <li>
                        <a class="md:p-4 py-2 block"><Button class="p-button-md p-button-text p-button-secondary"
                                @click="redirectTo('logout')">
                                <a class="text-red-700 hover:text-red-400">Cerrar sesión</a>
                            </Button></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <link :href="data.dark ? '/css/dark.css' : '/css/light.css'" rel="stylesheet" />
    <article>
        <slot />
    </article>
</template>
<script>
/* No va pa atras */
history.pushState(null, document.title, location.href);
window.addEventListener("popstate", function () {
    history.pushState(null, document.title, location.href);
});
/* Primevue */
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";

import { reactive } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";
import SplitButton from "primevue/splitbutton";
import Button from "primevue/button";
import InputSwitch from 'primevue/inputswitch';
import Tooltip from 'primevue/tooltip';
import { onMounted, ref } from "vue";
export default {
    directives: {
        Tooltip
    },
    props: {
        usuario: {
            type: Object,
            default: {},
        },
    },
    components: {
        InputSwitch,
        SplitButton,
        Button,
    },
    setup() {
        const urlsAdmin = ref([
            {
                label: "Personas",
                command: () => {
                    Inertia.visit(route("dashboard_adm_personas"));
                },
            },
            {
                label: "Usuarios",
                command: () => {
                    Inertia.visit(route("dashboard_adm_usuarios"));
                },
            },
            {
                label: "Roles",
                command: () => {
                    Inertia.visit(route("dashboard_adm_roles"));
                },
            },
            {
                label: "Crear Aulas",
                command: () => {
                    Inertia.visit(route("dashboard_adm_cursos"));
                },
            },

        ]);

        const menuOptions = reactive({
            show: true,
        });
        const redirectTo = (url) => {
            Inertia.visit(route(url));
        };
        const data = reactive({
            dark: true,
        });
        return {
            data,
            menuOptions,
            redirectTo,
            urlsAdmin,
        };
    },
};
</script>
