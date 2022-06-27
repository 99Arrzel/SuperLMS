<template>

    <p class="text-5xl text-variable text-center">Roles de usuario</p>
    <div class="flex md:flex-row flex-col m-2">
        <div class="sm:basis-6/12">
            <DataTable :value="roles" :paginator="true" selectionMode="single" :rows="10" :scrollable="true"
                v-model:filters="filters" v-model:selection="valores.rol_seleccionado" editMode="cell"
                @cell-edit-complete="onCellEditComplete">
                <template #empty>
                    <p class="text-variable">Añade roles!</p>
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

                            <button @click="delete_p()"
                                class="m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-variable font-bold py-2 px-4 rounded"
                                :disabled="
                                    Object.keys(valores.rol_seleccionado ?? {})
                                        .length > 0
                                        ? false
                                        : true
                                ">
                                Eliminar
                            </button>
                        </div>
                    </div>
                </template>
                <Column field="nombre" header="Nombre" :sorteable="true">
                    <template #editor="slotProps">
                        <InputText v-model="slotProps.data[slotProps.field]" />
                    </template>
                </Column>
                <Column field="created_at" header="Creado en"> </Column>
                <Column field="updated_at" header="Actualizado en"> </Column>
            </DataTable>
        </div>

        <div class="sm:basis-6/12 flex flex-col">
            <div class="mx-auto">
                <p class="text-center text-variable text-3xl">Añade roles</p>
            </div>
            <div class="mx-auto m-4">
                <div class="w-full flex flex-row">
                    <input class="w-5/5 py-2 text-center rounded-tl-lg rounded-bl-lg" v-model="form_r.nombre" />
                    <button @click="crearNuevo()"
                        class="disabled:bg-gray-500 text-base bg-green-500 hover:bg-green-700 text-variable font-bold py-2 px-4 rounded-tr-lg rounded-br-lg">
                        Crear
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* Primevue */

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
import { reactive } from "vue";

export default {
    layout: NavBar,
    props: {
        usuario: {
            type: Object,
            default: {},
        },
        roles: {
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
        const filters = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const form_r = reactive({
            nombre: "",
        });
        const valores = reactive({
            rol_seleccionado: [],
        });
        const onCellEditComplete = (e) => {
            Loading.standard({
                clickToClose: false,
                svgSize: "200",
            });
            axios
                .post(route("dashboard_adm_roles_actualizar"), {
                    id: e.data.id_rol,
                    nombre: e.newValue,
                })
                .then((response) => {
                    if (response.data.success) {
                        Inertia.reload({
                            only: ["roles"],
                            preserveState: false,
                            preserveScroll: true,
                            onSuccess() {
                                Loading.remove();
                            },
                        });
                        Notify.success(response.data.message);
                    } else {
                        Notify.failure(response.data.message);
                        Loading.remove();
                    }
                });
        };
        const crearNuevo = () => {
            if (form_r.nombre == "" || form_r.nombre.length < 3) {
                Notify.failure("El nombre debe ser de 3 digitos o más");
                return;
            }
            if (props.roles.find((r) => r.nombre == form_r.nombre)) {
                Notify.failure("El nombre debe ser único");
                return;
            }
            Loading.standard({
                clickToClose: false,
                svgSize: "200",
            });
            axios
                .post(route("dashboard_adm_roles_crear"), {
                    nombre: form_r.nombre,
                })
                .then((response) => {
                    if (response.data.success) {
                        Inertia.reload({
                            only: ["roles"],
                            preserveState: false,
                            preserveScroll: true,
                            onSuccess: () => {
                                Loading.remove();
                            },
                        });
                        Notify.success(response.data.message);
                    } else {
                        Loading.remove();
                        Notify.failure(response.data.message);
                    }
                });

            return;
        };
        const delete_p = () => {
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                `¿Estas seguro de eliminar el rol ${valores.rol_seleccionado.nombre}?`,
                "Estás a punto de eliminar un rol",
                "Eliminar",
                "Cancelar",
                () => {
                    Loading.standard({
                        clickToClose: false,
                        svgSize: "200",
                    });

                    axios
                        .post(route("dashboard_adm_roles_eliminar"), {
                            id: valores.rol_seleccionado.id_rol,
                        })
                        .then((response) => {
                            if (response.data.success) {
                                Inertia.reload({
                                    only: ["roles"],
                                    preserveState: false,
                                    preserveScroll: true,
                                    onSuccess: () => {
                                        Loading.remove();
                                    },
                                });
                                Notify.success(response.data.message);
                            } else {
                                Loading.remove();
                                Notify.failure(response.data.message);
                            }
                        });
                }
            );
        };
        return {
            delete_p,
            onCellEditComplete,
            crearNuevo,
            form_r,
            valores,
            filters,
        };
    },
};
</script>
