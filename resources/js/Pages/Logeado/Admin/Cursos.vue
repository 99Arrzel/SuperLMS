<template>
    <NavBar :usuario="usuario"></NavBar>
    <div class="flex flex-col" v-if="!valores.editando_curso">
        <div class="mx-auto m-2">
            <p class="text-center text-5xl text-white">Tabla de cursos</p>
        </div>
        <div class="w-11/12 mx-auto">
            <DataTable
                :value="cursos"
                :paginator="true"
                selectionMode="single"
                :rows="10"
                :scrollable="true"
                v-model:filters="filters"
                v-model:selection="valores.curso_seleccionado"
            >
                <template #empty>
                    <p>Esto está vacio... añade cursos!</p>
                </template>
                <template #header>
                    <div class="flex md:flex-row flex-col">
                        <div class="mr-auto">
                            <span class="p-input-icon-right">
                                <i class="pi pi-search" />
                                <input
                                    id="search"
                                    class="p-2 text-white bg-cyan-900 rounded-lg"
                                    placeholder="Buscar..."
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
                                        valores.curso_seleccionado ?? {}
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
                                @click="delete_curso()"
                                class="m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                :disabled="
                                    Object.keys(
                                        valores.curso_seleccionado ?? {}
                                    ).length > 0
                                        ? false
                                        : true
                                "
                            >
                                Eliminar
                            </button>
                            <button
                                @click="
                                    valores.editando_curso =
                                        !valores.editando_curso
                                "
                                class="m-1 disabled:bg-gray-500 text-base bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                :disabled="
                                    Object.keys(
                                        valores.curso_seleccionado ?? {}
                                    ).length > 0
                                        ? false
                                        : true
                                "
                            >
                                Asignar usuarios
                            </button>
                        </div>
                    </div>
                </template>
                <Column header="Nombre" :sortable="true">
                    <template #body="slotProps">
                        {{ slotProps.data.plantilla.nombre }}
                    </template>
                </Column>
                <Column header="Descripción" :sortable="true">
                    <template #body="slotProps">
                        {{ slotProps.data.plantilla.descripcion }}
                    </template>
                </Column>
                <Column header="Imagen">
                    <template #body="slotProps">
                        <div v-if="slotProps.data.foto">
                            <img
                                :src="'/' + slotProps.data.foto.url"
                                width="100"
                                class="rounded-full"
                                style="vertical-align: middle"
                                :alt="slotProps.data.foto.descripcion"
                            />
                            <span class="image-text">{{
                                slotProps.data.foto.nombre
                            }}</span>
                        </div>

                        <span v-else>No hay imagen</span>
                    </template>
                </Column>
                <Column header="Empieza en" :sortable="true">
                    <template #body="slotProps">
                        {{ slotProps.data.plantilla.fecha_inicio }}
                    </template>
                </Column>
                <Column header="Termina en" :sortable="true">
                    <template #body="slotProps">
                        {{ slotProps.data.plantilla.fecha_fin }}
                    </template>
                </Column>
                <Column header="Extensión hasta" :sortable="true">
                    <template #body="slotProps">
                        {{
                            slotProps.data.plantilla.fecha_extension ??
                            "No definida"
                        }}
                    </template>
                </Column>
                <Column header="Estado" :sortable="true">
                    <template #body="slotProps">
                        <button
                            @click="terminar_curso(slotProps.data.id_curso)"
                            class="rounded-lg w-fit p-2"
                            :class="
                                slotProps.data.termino_en == null
                                    ? 'bg-green-500 hover:bg-green-700'
                                    : 'bg-red-500 hover:bg-red-700'
                            "
                        >
                            {{
                                slotProps.data.termino_en == null
                                    ? "Vigente"
                                    : "Finalizó en: " +
                                      slotProps.data.termino_en
                            }}
                        </button>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
    <!-- Emit go back -->
    <Asignar
        v-else
        :usuarios="usuarios"
        :curso="valores.curso_seleccionado"
        @go_back="valores.editando_curso = false"
        :cursos="cursos"
        @sincronizar="
            (datos) => {
                recargarCursos(datos);
            }
        "
    ></Asignar>

    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        :header="
            valores.accion == 'Agregar'
                ? 'Agregar curso'
                : 'Editar curso ' +
                      valores.curso_seleccionado.plantilla?.nombre ?? ''
        "
        v-model:visible="valores.showModal"
        :closeOnEscape="false"
    >
        <form @submit.prevent="crear">
            <div class="grid xl:grid-cols-2 xl:gap-6 mt-2">
                <label>
                    <span class="block text-sm font-bold mb-2">
                        Nombre del curso
                    </span>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Nombre del curso"
                        v-model="valores.nombre"
                    />
                </label>

                <label>
                    <span class="block text-sm font-bold mb-2">
                        Descripción del curso
                    </span>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Descripcion del curso"
                        v-model="valores.descripcion"
                    />
                </label>
                <label>
                    <span class="block text-sm font-bold mb-2">
                        Fecha de inicio del curso
                    </span>
                    <Calendar
                        dateFormat="dd/mm/yy"
                        v-model="valores.fecha_inicio"
                        style="width: 100%"
                    />
                </label>
                <label>
                    <span class="block text-sm font-bold mb-2">
                        Fecha de fin del curso
                    </span>
                    <Calendar
                        dateFormat="dd/mm/yy"
                        v-model="valores.fecha_fin"
                        style="width: 100%"
                    />
                </label>
                <label>
                    <span class="block text-sm font-bold mb-2">
                        Fecha de extensión del curso
                    </span>
                    <Calendar
                        dateFormat="dd/mm/yy"
                        v-model="valores.fecha_extension"
                        style="width: 100%"
                    />
                </label>
            </div>

            <span class="block text-sm font-bold mb-2"> Añade una imagen </span>
            <Cropper
                ref="crop"
                :auto-zoom="true"
                class="min-h-fit w-full"
                :src="imagen.src"
                :default-size="defaultSize"
                :stencil-props="{
                    aspectRatio: 1 / 1,
                }"
            />
            <div class="flex justify-start mt-2">
                <button
                    type="button"
                    class="text-white bg-blue-900 py-2 px-1 text-xl rounded-lg mx-auto"
                    @click="file.click()"
                >
                    <input
                        class="hidden"
                        type="file"
                        ref="file"
                        @change="uploadImage($event)"
                        accept="image/*"
                    />
                    Cargar imagen
                </button>
                <!-- <button
                    type="button"
                    class="ml-2 text-white bg-green-900 py-2 px-1 text-xl rounded-lg disabled:bg-gray-600"
                    @click="cropImage"
                    :disabled="imagen.src == ''"
                >
                    Cortar imagen
                </button> -->
            </div>

            <button
                type="submit"
                class="px-2 py-3 text-xl rounded-lg m-2 w-full disabled:bg-gray-400"
                :class="
                    valores.accion == 'Agregar'
                        ? 'bg-green-600'
                        : 'bg-yellow-600'
                "

                :disabled="valores.id_imagen == ''"
            >
                {{ valores.accion == "Agregar" ? "Agregar" : "Editar" }}
            </button>
        </form>
    </Dialog>
</template>
<script>
/* Primevue */

import NavBar from "../Navbar.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref, reactive } from "vue";
import { FilterMatchMode } from "primevue/api";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import Asignar from "./Asignar_Cursos.vue";
import { Inertia } from "@inertiajs/inertia";
import Notiflix, { Notify } from "notiflix";
import { Cropper } from "vue-advanced-cropper";

import "vue-advanced-cropper/dist/style.css";
export default {
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        cursos: {
            type: Array,
            required: true,
        },
        usuarios: {
            type: Array,
            required: true,
        },
    },
    components: {
        Cropper,

        Calendar,
        Dialog,
        NavBar,
        DataTable,
        Column,
        Asignar,
    },

    //Pass computed data to setup
    setup(props) {
        const crop = ref(null);
        const file = ref(null);
        const defaultSize = (data) => {
            //Start with the image default size
            return {
                width: data.imageSize.width,
                height: data.imageSize.height,
            };
        };
        const valores = reactive({
            curso_seleccionado: {},
            showModal: false,
            accion: "",
            fecha_inicio: "",
            fecha_fin: "",
            fecha_extension: "",
            nombre: "",
            descripcion: "",
            id_imagen: "",
            editando_curso: false,
        });
        const filters = reactive({
            global: {
                value: "",
                matchMode: FilterMatchMode.Contains,
            },
        });
        const blank = () => {
            valores.nombre = "";
            valores.descripcion = "";
            valores.fecha_inicio = "";
            valores.fecha_fin = "";
            valores.fecha_extension = "";
            valores.id_imagen = "";
            valores.curso_seleccionado = {};
            imagen.src = "";
        };
        const validar = () => {
            if (
                valores.nombre.length == 0 &&
                valores.descripcion.length == 0 &&
                valores.fecha_inicio.length == 0 &&
                valores.fecha_fin.length == 0 &&
                valores.fecha_extension.length == 0 &&
                valores.id_imagen.length == 0
            )
                return true;
            return false;
        };
        const giveMeDate = (date) => {
            let nd = date.split("/");

            return new Date(+nd[2], nd[1] - 1, +nd[0]);
        };
        const setEdit = () => {
            console.log("Xd", valores);
            valores.nombre = valores.curso_seleccionado.plantilla.nombre;
            valores.descripcion =
                valores.curso_seleccionado.plantilla.descripcion;
            /* Fechas */
            valores.fecha_inicio = giveMeDate(
                valores.curso_seleccionado.plantilla.fecha_inicio
            );
            valores.fecha_fin = giveMeDate(
                valores.curso_seleccionado.plantilla.fecha_fin
            );
            valores.fecha_extension = giveMeDate(
                valores.curso_seleccionado.plantilla.fecha_extension
            );
            /* =========== */
            imagen.src = "/" + valores.curso_seleccionado.foto.url;
            valores.id_imagen = valores.curso_seleccionado.foto.id_archivo;
        };
        const crear = () => {
            if (validar()) {
                Notify.failure("Debe llenar todos los campos");
                return;
            }
            cropImage();

            if (valores.accion == "Agregar") {
                Inertia.post(
                    route("dashboard_adm_cursos_crear"),
                    {
                        nombre: valores.nombre,
                        descripcion: valores.descripcion,
                        fecha_inicio: valores.fecha_inicio,
                        fecha_fin: valores.fecha_fin,
                        fecha_extension: valores.fecha_extension,
                        id_imagen: valores.id_imagen,
                    },
                    {
                        only: ["cursos", "flash", "errors"],
                        preserveState: true,
                        preserveScroll: true,
                        onSuccess() {
                            Notify.success("Curso agregado correctamente");
                        },
                        onError(error) {
                            for (let i in error) {
                                Notify.failure(error[i]);
                            }
                        },
                    }
                );
            } else {
                Inertia.post(
                    route("dashboard_adm_cursos_actualizar"),
                    {
                        id: valores.curso_seleccionado.id_curso,
                        nombre: valores.nombre,
                        descripcion: valores.descripcion,
                        fecha_inicio: valores.fecha_inicio,
                        fecha_fin: valores.fecha_fin,
                        fecha_extension: valores.fecha_extension,
                        id_foto: valores.id_imagen,
                    },
                    { only: ["cursos", "flash", "errors"], preserveState: true }
                );
            }
            blank();
            valores.showModal = false;
        };
        const imagen = reactive({
            src: "",
            type: "",
        });
        const cropImage = () => {
            const { canvas } = crop.value.getResult();
            console.log("id imagen", valores.id_imagen);
            const data = new FormData();
            data.append("id", valores.id_imagen);
            canvas.toBlob((blob) => {
                Inertia.post(
                    route("editFileUpload"),
                    (data.append("file", blob), data),
                    {
                        only: ["flash", "errors", "cursos"],
                        preserveState: true,
                        preserveScroll: true,
                        onSuccess: (res) => {
                            console.log(res, "ok");
                            let copy = imagen.src;
                            imagen.src = ""; //Reload
                            imagen.src = copy;
                        },
                        onError: (err) => {
                            console.log(err, "error");
                        },
                    }
                );
            });
            /*
            This prints it in a new tab
            const newTab = window.open();
            newTab.document.body.innerHTML = `<img src="${result.canvas.toDataURL(
                imagen.type
            )}"></img>`; */
        };
        const uploadImage = (event) => {
            const { files } = event.target;
            if (files && files[0]) {
                if (imagen.src) {
                    URL.revokeObjectURL(imagen.src);
                }
                Inertia.post(
                    route("fileUpload"),
                    {
                        file: files[0],
                        nombre:
                            props.usuario.persona.nombre +
                            " - " +
                            props.usuario.persona.ci,
                        descripcion: "Imagen de curso",
                    },
                    {
                        only: ["flash", "errors"],
                        preserveState: true,
                        preserveScroll: true,
                        onSuccess: (response) => {
                            imagen.src = "/" + response.props.flash.success.url;
                            imagen.type = files[0].type;
                            valores.id_imagen = response.props.flash.success.id;
                            console.log("el id es", valores.id_imagen);
                        },
                        onError: (err) => {
                            console.log(err, "error");
                        },
                    }
                );
                /*
                Local way
                const blob = URL.createObjectURL(files[0]);
                imagen.src = blob;
                imagen.type = files[0].type; */
            }
        };
        const recargarCursos = (datos) => {
            console.log(datos);
            Inertia.post(route("dashboard_adm_cursos_sincronizar"), datos, {
                preserveScroll: true,
                preserveState: true,
                only: ["cursos", "flash", "errors"],
                onSuccess: (res) => {
                    Notify.success(res.props.flash.success);
                },
                onError: (err) => {
                    console.log(err, "error");
                },
            });
        };
        const delete_curso = () => {
            Inertia.post(
                route("dashboard_adm_cursos_eliminar"),
                {
                    id_curso: valores.curso_seleccionado.id_curso,
                },
                {
                    only: ["cursos", "flash", "errors"],
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: (res) => {
                        Notify.success(res.props.flash.success);
                        valores.curso_seleccionado = {};
                    },
                    onError: (err) => {
                        for (let i in err) {
                            Notify.failure(err[i]);
                        }
                    },
                }
            );
        };
        const terminar_curso = (id) => {
            Inertia.post(
                route("dashboard_adm_cursos_terminar"),
                {
                    id_curso: id,
                },
                {
                    only: ["cursos", "flash", "errors"],
                    onSuccess: (res) => {
                        Notify.success(res.props.flash.success);
                    },
                }
            );
        };
        return {
            terminar_curso,
            delete_curso,
            recargarCursos,
            defaultSize,
            file,
            crop,
            cropImage,
            uploadImage,
            imagen,
            setEdit,
            crear,
            blank,
            valores,
            filters,
        };
    },
};
</script>
