<template>

    <div class="flex flex-col">
        <div class="mx-auto m-2">
            <p class="text-center text-5xl text-variable">Tabla de personas</p>
        </div>
        <div class="w-11/12 mx-auto">
            <DataTable :value="personas" :paginator="true" selectionMode="single" :rows="10" :scrollable="true"
                v-model:filters="filters" v-model:selection="valores.personas_seleccionada">
                <template #empty>
                    <p>Esto está vacio... añade personas!</p>
                </template>
                <template #header>
                    <div class="flex md:flex-row flex-col">
                        <div class="mr-auto">
                            <span class="p-input-icon-right">
                                <i class="pi pi-search" />
                                <InputText id="search" v-model="filters.global.value" />
                            </span>
                        </div>
                        <div class="flex sm:flex-row sm:ml-auto flex-col">
                            <!-- Botones para agregar, eliminar y Editar -->
                            <button
                                class="m-1 text-base bg-green-500 hover:bg-green-700 text-variable font-bold py-2 px-4 rounded"
                                @click="
                                    (valores.showModal = !valores.showModal),
                                    (valores.accion = 'Agregar'),
                                    blank()
                                ">
                                Agregar
                            </button>

                            <button :disabled="
                                Object.keys(
                                    valores.personas_seleccionada ?? {}
                                ).length > 0
                                    ? false
                                    : true
                            "
                                class="m-1 disabled:bg-gray-500 text-base bg-yellow-500 hover:bg-yellow-700 text-variable font-bold py-2 px-4 rounded"
                                @click="
                                    (valores.showModal = !valores.showModal),
                                    (valores.accion = 'Editar'),
                                    setEdit()
                                ">
                                Editar
                            </button>
                            <button @click="delete_p()"
                                class="m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-variable font-bold py-2 px-4 rounded"
                                :disabled="
                                    Object.keys(
                                        valores.personas_seleccionada ?? {}
                                    ).length > 0
                                        ? false
                                        : true
                                ">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </template>
                <Column filterMatchMode="contains" :sortable="true" field="nombre" header="Nombre"></Column>
                <Column filterMatchMode="contains" :sortable="true" field="apellido_p" header="Apellido Paterno">
                </Column>
                <Column filterMatchMode="contains" :sortable="true" field="apellido_m" header="Apellido Materno">
                </Column>
                <Column filterMatchMode="contains" :sortable="true" field="correo" header="Correo"></Column>
                <Column filterMatchMode="contains" :sortable="true" field="ci" header="CI"></Column>
                <Column filterMatchMode="contains" :sortable="true" field="telefono" header="Telefono"></Column>
                <Column filterMatchMode="contains" :sortable="true" field="direccion" header="Direccion"></Column>
                <Column field="created_at" header="Creado en"></Column>
            </DataTable>
        </div>
    </div>
    <Dialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }" :modal="true" :header="
        valores.accion == 'Agregar' ? 'Agregar Persona' : 'Editar Persona'
    " v-model:visible="valores.showModal">
        <form @submit.prevent="submit">
            <div class="grid xl:grid-cols-2 xl:gap-6 mt-2">
                <div class="relative z-0 mb-6 w-full group">
                    <!--Nombre  -->
                    <input name="nombre" autocomplete="off" type="text" placeholder=" "
                        class="block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        v-model="form_p.nombre" />
                    <label for="nombre"
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre(s)
                        *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <!-- Apellido Paterno -->

                    <input autocomplete="off"
                        class="block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" name="apellido_p" placeholder=" " v-model="form_p.apellido_p" />
                    <label for="apellido_p"
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                        paterno *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <!-- Apellido Materno -->
                    <input placeholder=" " autocomplete="off"
                        class="block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="text" v-model="form_p.apellido_m" />
                    <label
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido
                        Materno *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <!-- Correo -->
                    <input placeholder=" " autocomplete="off"
                        class="block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="email" v-model="form_p.correo" />
                    <label
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo
                        *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <!-- CI -->
                    <input placeholder=" " autocomplete="off"
                        class="block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="number" v-model="form_p.ci" />
                    <label
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cédula
                        de identidad *</label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                    <!-- CI -->
                    <input placeholder=" " autocomplete="off"
                        class="block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        type="number" v-model="form_p.telefono" />
                    <label
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Teléfono
                        *</label>
                </div>
            </div>
            <div class="relative z-0 w-full group mb-2">
                <label for="address"
                    class="block mt-3 mb-2 text-base font-medium text-gray-900 dark:text-gray-400">Dirección</label>
                <textarea v-model="form_p.direccion" maxlength="250" rows="3"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none"
                    placeholder="Ingresa una dirección (Opcional)"></textarea>
            </div>

            <!-- submit -->
            <button type="submit" :disabled="form_p.processing" :class="
                valores.accion == 'Agregar'
                    ? 'px-4 py-2 bg-green-500 text-variable rounded-md'
                    : 'px-4 py-2 bg-yellow-500 text-variable rounded-md'
            ">
                {{ valores.accion == "Agregar" ? "Crear" : "Editar" }}
            </button>
        </form>
    </Dialog>
</template>
<script>
/* Primeuve */

import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.css";
import "primeicons/primeicons.css";

import { reactive } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import NavBar from "../Navbar.vue";
import InputText from "primevue/inputtext";
import { FilterMatchMode } from "primevue/api";
import Dialog from "primevue/dialog";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading, Notify } from "notiflix";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";

export default {
    layout: NavBar,
    props: {
        usuario: {
            type: Object,
            default: {},
        },
        personas: {
            type: Array,
            default: [],
        },
    },
    components: {
        InputText,
        NavBar,
        DataTable,
        Column,
        Dialog,
    },
    setup(props) {
        const form_p = reactive({
            nombre: "",
            apellido_p: "",
            apellido_m: "",
            correo: "",
            ci: "",
            telefono: "",
            direccion: "",
            processing: false,
        });

        const filters = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const valores = reactive({
            personas_seleccionada: {},
            showModal: false,
            accion: "",
        });
        const links = (nombre) => {
            return route(nombre);
        };
        const blank = () => {
            form_p.nombre = "";
            form_p.apellido_p = "";
            form_p.apellido_m = "";
            form_p.correo = "";
            form_p.ci = "";
            form_p.telefono = "";
            form_p.direccion = "";
        };
        const setEdit = () => {
            form_p.nombre = valores.personas_seleccionada.nombre;
            form_p.apellido_p = valores.personas_seleccionada.apellido_p;
            form_p.apellido_m = valores.personas_seleccionada.apellido_m;
            form_p.correo = valores.personas_seleccionada.correo;
            form_p.ci = valores.personas_seleccionada.ci;
            form_p.telefono = valores.personas_seleccionada.telefono;
            form_p.direccion = valores.personas_seleccionada.direccion;
        };
        const validateEmpty = () => {
            if (form_p.nombre == "") {
                Notify.failure("El campo nombre no puede estar vacío");
                return true;
            }
            if (form_p.apellido_p == "") {
                Notify.failure(
                    "El campo apellido paterno no puede estar vacío"
                );
                return true;
            }
            if (form_p.apellido_m == "") {
                Notify.failure(
                    "El campo apellido materno no puede estar vacío"
                );
                return true;
            }
            if (form_p.correo == "") {
                Notify.failure("El campo correo no puede estar vacío");
                return true;
            }
            if (form_p.ci == "" || isNaN(form_p.ci)) {
                Notify.failure(
                    "El campo cédula de identidad no puede estar vacío"
                );
                return true;
            }
            if (form_p.telefono == "" || isNaN(form_p.telefono)) {
                Notify.failure("El campo teléfono no puede estar vacío");
                return true;
            }
            if (form_p.direccion == "") {
                Notify.failure("El campo dirección no puede estar vacío");
                return true;
            }
            return false;
        };

        const submit = () => {
            if (validateEmpty()) {
                return;
            }
            form_p.processing = true;
            Loading.standard({
                clickToClose: false,
                svgSize: "200",
            });

            axios
                .post(
                    route(
                        valores.accion == "Agregar"
                            ? "dashboard_adm_personas_crear"
                            : "dashboard_adm_personas_actualizar"
                    ),
                    {
                        nombre: form_p.nombre,
                        apellido_p: form_p.apellido_p,
                        apellido_m: form_p.apellido_m,
                        correo: form_p.correo,
                        ci: form_p.ci,
                        telefono: form_p.telefono,
                        direccion: form_p.direccion,
                        id: valores.personas_seleccionada.id_persona,
                    }
                )
                .then(function (response) {
                    if (response.data.success) {
                        valores.showModal = false;
                        blank();
                        Inertia.reload({
                            only: ["personas"],
                            preserveState: true,
                            preserveScroll: true,
                        });
                        Notify.success(response.data.message);
                    }
                })
                .catch((error) => {
                    Notify.failure(error.response.data.message);
                })
                .finally(function () {
                    form_p.processing = false;
                    Loading.remove();
                });
        };
        const delete_p = () => {
            console.log(props);
            if (valores.personas_seleccionada.id == props.usuario.id_persona) {
                Notify.failure("No podes borrarte a vos mismo.");
                return;
            }
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                `¿Estas seguro de eliminar a ${valores.personas_seleccionada.nombre}?`,
                "Estás a punto de eliminar a una persona",
                "Eliminar",
                "Cancelar",
                () => {
                    Loading.standard({
                        clickToClose: false,
                        svgSize: "200",
                    });
                    axios
                        .post(route("dashboard_adm_personas_eliminar"), {
                            id: valores.personas_seleccionada.id_persona,
                        })
                        .then((response) => {
                            if (response.data.success) {
                                Notify.success(response.data.message);
                                Inertia.reload({
                                    only: ["personas"],
                                    preserveState: true,
                                    preserveScroll: true,
                                    onSuccess: () => {
                                        Loading.remove();
                                    },
                                });
                            }
                        });
                }
            );
        };
        return {
            delete_p,
            blank,
            setEdit,
            submit,
            form_p,
            links,
            filters,
            valores,
        };
    },
};
</script>
