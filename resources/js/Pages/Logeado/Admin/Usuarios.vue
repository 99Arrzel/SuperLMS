<template>
    <NavBar :usuario="usuario"></NavBar>
    <div class="flex flex-col">
        <div class="mx-auto m-2">
            <p class="text-center text-5xl text-white">Tabla de Usuarios</p>
        </div>
        <div class="w-11/12 mx-auto">
            <DataTable
                :value="usuarios"
                :paginator="true"
                selectionMode="single"
                :rows="10"
                :scrollable="true"
                v-model:filters="filters"
                v-model:selection="valores.usuario_seleccionado"
            >
                <template #empty>
                    <p class="text-white">Añade usuarios!</p>
                </template>
                <template #header>
                    <div class="flex md:flex-row flex-col">
                        <div class="mr-auto">
                            <span class="p-input-icon-right">
                                <i class="pi pi-search" />
                                <InputText
                                    id="search"
                                    v-model="filters.global.value"
                                />
                            </span>
                        </div>
                        <div class="flex sm:flex-row sm:ml-auto flex-col">
                            <!-- Botones para agregar, eliminar y Editar -->
                            <button
                                class="m-1 text-base bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                @click="
                                    (valores.showModal = !valores.showModal),
                                        (valores.accion = 'Agregar'),
                                        blank()
                                "
                            >
                                Agregar
                            </button>

                            <button
                                :disabled="
                                    Object.keys(
                                        valores.usuario_seleccionado ?? {}
                                    ).length > 0
                                        ? false
                                        : true
                                "
                                class="m-1 disabled:bg-gray-500 text-base bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                                @click="
                                    (valores.showModal = !valores.showModal),
                                        (valores.accion = 'Editar'),
                                        setEdit()
                                "
                            >
                                Editar
                            </button>

                            <button
                                v-if="
                                    valores.usuario_seleccionado.deleted_at !=
                                    null
                                "
                                @click="restore_p()"
                                class="m-1 disabled:bg-gray-500 text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                                Restaurar
                            </button>
                            <button
                                v-else
                                @click="delete_p()"
                                class="m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                :disabled="
                                    Object.keys(
                                        valores.usuario_seleccionado ?? {}
                                    ).length > 0
                                        ? false
                                        : true
                                "
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </template>
                <Column field="usuario" header="Usuario"> </Column>
                <Column field="created_at" header="Creado en"> </Column>
                <Column header="Persona">
                    <template #body="slotProps">
                        <p>
                            {{
                                slotProps.data.persona?.nombre +
                                " " +
                                slotProps.data.persona?.apellido_p +
                                " - " +
                                slotProps.data.persona?.ci
                            }}
                        </p>
                    </template>
                </Column>
                <Column header="Rol">
                    <template #body="slotProps">
                        <p>
                            {{ slotProps.data.rol.nombre }}
                        </p>
                    </template>
                </Column>
                <Column header="Estado">
                    <template #body="slotProps">
                        <span
                            :class="
                                slotProps.data.deleted_at
                                    ? 'p-2 bg-yellow-500 rounded-lg'
                                    : 'p-2 bg-green-500 rounded-lg'
                            "
                        >
                            {{
                                slotProps.data.deleted_at
                                    ? "De baja desde " +
                                      slotProps.data.deleted_at
                                    : "Activo"
                            }}
                        </span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :header="
            valores.accion == 'Agregar' ? 'Agregar Usuario' : 'Editar Usuario'
        "
        v-model:visible="valores.showModal"
    >
        <form @submit.prevent="submit">
            <div class="mt-2 flex md:flex-row flex-col gap-y-4 md:gap-6">
                <div class="relative z-0 mb-6 w-full group">
                    <!--Nombre  -->
                    <input
                        name="usuario"
                        autocomplete="off"
                        type="text"
                        placeholder=" "
                        class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        v-model="form_u.usuario"
                    />
                    <label
                        for="usuario"
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Usuario *</label
                    >
                </div>

                <div class="relative z-0 mb-6 w-full group">
                    <!--Nombre  -->
                    <input
                        name="password"
                        autocomplete="off"
                        type="password"
                        placeholder=" "
                        class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        v-model="form_u.password"
                    />
                    <label
                        for="password"
                        class="absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >Password *</label
                    >
                </div>
            </div>
            <div class="mt-2 flex md:flex-row flex-col gap-y-4 md:gap-6">
                <div class="relative z-auto mb-6 w-full group">
                    <label class="z-0">Rol *</label>
                    <vSelect
                        :options="roles_computed"
                        v-model="form_u.id_rol"
                        label="text"
                        class="bg-white text-black w-full z-0"
                    >
                        <template #no-options> No hay roles. </template>
                        <template #selected-option-container="{ option }">
                            <div class="w-full">
                                <span
                                    class="absolute left-2 top-1 truncate w-full"
                                    >{{ option.text }}</span
                                >
                            </div>
                            <!-- Si vas a editar esto intenta que quede responsive -->
                        </template>
                    </vSelect>
                </div>

                <div class="relative z-auto mb-6 w-full group">
                    <label class="z-0">Persona *</label>

                    <vSelect
                        :options="persons_computed"
                        v-model="form_u.id_persona"
                        label="text"
                        class="bg-white text-black w-full z-0"
                    >
                        <template #no-options> No hay personas. </template>
                        <template #selected-option-container="{ option }">
                            <div class="w-full">
                                <span
                                    class="absolute left-2 top-1 truncate w-full text-black"
                                    >{{ option.text }}</span
                                >
                            </div>
                            <!-- Si vas a editar esto intenta que quede responsive -->
                        </template>
                    </vSelect>
                </div>
            </div>

            <!-- submit -->
            <button
                type="submit"
                :class="
                    valores.accion == 'Agregar'
                        ? 'px-4 py-2 bg-green-500 text-white rounded-md'
                        : 'px-4 py-2 bg-yellow-500 text-white rounded-md'
                "
            >
                {{ valores.accion == "Agregar" ? "Crear" : "Editar" }}
            </button>
        </form>
    </Dialog>
</template>
<script>
import "vue-select/dist/vue-select.css";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import NavBar from "../Navbar.vue";
import InputText from "primevue/inputtext";
import { FilterMatchMode } from "primevue/api";
import Dialog from "primevue/dialog";
import vSelect from "vue-select";
import { Confirm } from "notiflix/build/notiflix-confirm-aio";
import { Loading, Notify } from "notiflix";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { reactive } from "vue";
export default {
    props: {
        usuario: {
            type: Object,
            default: {},
        },
        usuarios: {
            type: Array,
            default: [],
        },
        personas: {
            type: Array,
            default: [],
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
        vSelect,
    },
    //Compute property from roles
    computed: {
        roles_computed() {
            return this.roles.map((rol) => {
                return {
                    text: rol.nombre,
                    value: rol.id_rol,
                };
            });
        },
        persons_computed() {
            return this.personas.map((persona) => {
                return {
                    text:
                        persona.nombre +
                        " " +
                        persona.apellido_p +
                        " - " +
                        persona.ci,
                    value: persona.id_persona,
                };
            });
        },
    },
    setup() {
        const form_u = reactive({
            usuario: "",
            password: "",
            password_confirmation: "",
            id_rol: "",
            id_persona: "",
        });
        const filters = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const valores = reactive({
            usuario_seleccionado: {},
            showModal: false,
            accion: "",
            disablePersona: false,
        });
        const blank = () => {
            form_u.usuario = "";
            form_u.password = "";
            form_u.id_rol = "";
            form_u.id_persona = "";
            valores.disablePersona = false;
        };
        const validate = () => {
            if (form_u.usuario.trim() == "") {
                Notify.failure("El usuario no puede estar vacio");
                return true;
            }
            if (form_u.password?.trim() == "") {
                Notify.failure("La contraseña no puede estar vacia");
                return true;
            }
            if (form_u.id_persona == "") {
                Notify.failure("Seleccioan una persona");
                return true;
            }
            if (form_u.id_rol == "") {
                Notify.failure("Seleccione un rol");
                return true;
            }
        };
        const submit = () => {
            if (validate()) return;
            Loading.standard({
                clickToClose: false,
                svgSize: "200",
            });
            axios
                .post(
                    route(
                        valores.accion == "Agregar"
                            ? "dashboard_adm_usuarios_crear"
                            : "dashboard_adm_usuarios_actualizar"
                    ),
                    {
                        usuario: form_u.usuario,
                        password: form_u.password,
                        id_rol: form_u.id_rol.value,
                        id_persona: form_u.id_persona.value,
                        id: valores.usuario_seleccionado.id_usuario,
                    }
                )
                .then((response) => {
                    if (response.data.success) {
                        Inertia.reload({
                            only: ["personas", "usuarios"],
                            preserveState: true,
                            preserveScroll: true,
                            onSuccess: () => {
                                Notify.success(response.data.message);
                                Loading.remove();
                                valores.showModal = false;
                            },
                        });
                    } else {
                        Notify.failure(response.data.message);
                    }
                });
        };
        const setEdit = () => {
            console.log(valores.usuario_seleccionado.usuario);
            //Can't change person so we set it to the current one
            form_u.id_persona = {
                text:
                    valores.usuario_seleccionado.persona.nombre +
                    " " +
                    valores.usuario_seleccionado.persona.apellido_p,
                value: valores.usuario_seleccionado.id_persona,
            };
            form_u.id_rol = {
                text: valores.usuario_seleccionado.rol.nombre,
                value: valores.usuario_seleccionado.rol.id_rol,
            };

            valores.disablePersona = true;
            valores.accion = "Editar";
            form_u.usuario = valores.usuario_seleccionado.usuario;
            form_u.password = valores.usuario_seleccionado.password;
        };
        const delete_p = () => {
            Confirm.init({
                titleColor: "#FF0000",
                messageColor: "#FF0000",
                okButtonBackground: "#FF0000",
            });
            Confirm.show(
                `¿Estas seguro de dar de baja el usuario ${valores.usuario_seleccionado.nombre}?`,
                "Estás a punto de dar de baja un usuario",
                "De baja",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("dashboard_adm_usuarios_eliminar"),
                        {
                            id: valores.usuario_seleccionado.id_usuario,
                        },
                        {
                            only: ["personas", "usuarios"],
                            preserveScroll: true,
                            onSuccess: () => {
                                valores.usuario_seleccionado = {};
                                Notify.success("Usuario eliminado");
                            },
                        }
                    );
                }
            );
        };
        const restore_p = () => {
            Inertia.post(
                route("dashboard_adm_usuarios_restaurar"),
                {
                    id: valores.usuario_seleccionado.id_usuario,
                },
                {
                    only: ["personas", "usuarios"],
                    preserveScroll: true,
                    onSuccess: () => {
                        valores.usuario_seleccionado = {};
                        Notify.success("Usuario restaurado");
                    },
                }
            );
        };

        return {
            restore_p,
            delete_p,
            setEdit,
            submit,
            form_u,
            blank,
            valores,
            filters,
        };
    },
};
</script>
