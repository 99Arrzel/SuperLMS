<template>
    <sbar :usuario="usuario"> </sbar>
    <Dialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }" :modal="true"
        v-model:visible="values.vertareas">
        <!-- El titulo debería variar de acuerdo a la meta -->
        <template #header>
            <h2 class="text-center text-white text-2xl">
                {{
                        values.accion_t == "Añadir"
                            ? "Añade tareas a esta meta"
                            : "Estás editando una tarea"
                }}
            </h2>
        </template>
        <form @submit.prevent="submit_t">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <p>Nombre para la tarea*</p>
                    <InputText class="w-full" v-model="values.nombre_t"></InputText>
                </div>
                <div>
                    <p>Descripción de la tarea*</p>
                    <InputText class="w-full" v-model="values.descripcion_t"></InputText>
                </div>
                <div>
                    <p>Fecha de inicio*</p>
                    <Calendar dateFormat="dd/mm/yy" class="w-full" v-model="values.fecha_inicio_t"></Calendar>
                </div>
                <div>
                    <p>Fecha de fin (Hasta las 00)</p>
                    <Calendar dateFormat="dd/mm/yy" class="w-full" v-model="values.fecha_fin_t"></Calendar>
                </div>
            </div>
            <button class="rounded-lg p-2 w-full" :class="
                values.accion_t == 'Añadir'
                    ? 'bg-green-500 mt-2 '
                    : 'bg-yellow-500'
            ">
                {{ values.accion_t == "Añadir" ? "Añadir" : "Editar" }}
            </button>
        </form>
    </Dialog>
    <Dialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }" :modal="true"
        v-model:visible="values.verforos">
        <!-- El titulo debería variar de acuerdo a la meta -->
        <template #header>
            <h2 class="text-center text-white text-2xl">
                {{
                        values.accion_f == "Añadir"
                            ? "Añade foros a esta meta"
                            : "Estás editando un foro"
                }}
            </h2>
        </template>
        <form @submit.prevent="submit_f">
            <div class="grid grid-cols-2 gap-2">
                <div>
                    <p>Nombre para el foro*</p>
                    <InputText class="w-full" v-model="values.nombre_f"></InputText>
                </div>
                <div>
                    <p>Descripción del foro*</p>
                    <InputText class="w-full" v-model="values.descripcion_f"></InputText>
                </div>
                <div>
                    <p>Fecha de inicio*</p>
                    <Calendar dateFormat="dd/mm/yy" class="w-full" v-model="values.fecha_inicio_f"></Calendar>
                </div>
                <div>
                    <p>Fecha de fin</p>
                    <Calendar dateFormat="dd/mm/yy" class="w-full" v-model="values.fecha_fin_f"></Calendar>
                </div>
            </div>
            <button class="rounded-lg p-2 w-full mt-2" :class="
                values.accion_f == 'Añadir'
                    ? 'bg-green-500 mt-2 w-full'
                    : 'bg-yellow-500'
            ">
                {{ values.accion_f == "Añadir" ? "Añadir" : "Editar" }}
            </button>
        </form>
    </Dialog>

    <div class="flex m-4">
        <div class="px-4 mt-2 flex flex-wrap gap-2">
            <a class="text-white text-3xl mb-2">Tareas de la meta </a>
            <a class="uppercase text-sky-400 text-3xl mb-2">{{
                    meta.plantilla.nombre
            }}</a>
            <Button v-if="usuario.rol.id_rol <= 2" icon="pi pi-flag" @click="
                (values.vertareas = true),
                (values.accion_t = 'Añadir'),
                (values.nombre_t = ''),
                (values.descripcion_t = ''),
                (values.fecha_inicio_t = ''),
                (values.fecha_fin_t = '')
            " v-tooltip.top="'Añade tareas'" />
            <Button v-if="usuario.rol.id_rol <= 2" icon="pi pi-flag-fill" @click="
                (values.verforos = true),
                (values.accion_f = 'Añadir'),
                (values.nombre_f = ''),
                (values.descripcion_f = ''),
                (values.fecha_inicio_f = ''),
                (values.fecha_fin_f = '')
            " v-tooltip.top="'Añade Foros'" />
        </div>
    </div>
    <div v-if="meta.tareas.length > 0">
        <div class="flex flex-row flex-wrap gap-4 justify-center">
            <Card v-for="tarea in meta.tareas" :key="tarea.id_tarea" style="width: 25em">
                <template #title>
                    <div class="flex">
                        {{
                                tarea.plantilla.nombre +
                                " - " +
                                tarea.plantilla.fecha_inicio +
                                " - " +
                                tarea.plantilla.fecha_fin
                        }}
                    </div>
                    <div v-if="usuario.rol.id_rol <= 2" class="flex flex-wrap gap-2 justify-end text-base">
                        <button class="bg-yellow-500 rounded-lg p-2" @click="editar_tarea(tarea)">
                            Editar
                        </button>
                        <button class="bg-red-500 rounded-lg p-2" @click="eliminar_tarea(tarea)">
                            Eliminar
                        </button>
                    </div>
                </template>
                <template #content>
                    <p>
                        {{ tarea.plantilla.descripcion }}
                    </p>
                </template>
                <template #footer>
                    <button :class="evaluarFecha(tarea.plantilla.fecha_fin) ? 'bg-green-500' : 'bg-yellow-500'"
                        class="w-full  rounded-lg p-2" @click="verTarea(tarea.id_tarea)">
                        {{ evaluarFecha(tarea.plantilla.fecha_fin) ? 'Ver detalles' : 'Esta tarea ya expiró' }}
                    </button>
                </template>
            </Card>
        </div>
    </div>
    <div v-else>
        <p class="text-2xl text-white text-center">"No hay tareas aún</p>
    </div>
    <div class="mx-8 mt-2">
        <a class="text-white text-3xl mb-2">Foros de la meta </a>
        <a class="uppercase text-sky-400 text-3xl mb-2">{{
                meta.plantilla.nombre
        }}</a>
    </div>
    <div v-if="meta.foros.length > 0">
        <div class="flex flex-row flex-wrap gap-4 justify-center">
            <Card v-for="foro in meta.foros" :key="foro.id_foro" style="width: 25em">
                <template #title>
                    <div class="flex">
                        {{
                                foro.plantilla.nombre +
                                " - " +
                                foro.plantilla.fecha_inicio +
                                " | " +
                                foro.plantilla.fecha_fin
                        }}
                    </div>
                    <div v-if="usuario.rol.id_rol <= 2" class="flex flex-wrap gap-2 justify-end text-base">
                        <button class="bg-yellow-500 rounded-lg p-2" @click="editar_foro(foro)">
                            Editar
                        </button>
                        <button class="bg-red-500 rounded-lg p-2" @click="eliminar_foro(foro)">
                            Eliminar
                        </button>
                    </div>
                </template>
                <template #content>
                    <p>
                        {{ foro.plantilla.descripcion }}
                    </p>
                </template>
                <template #footer>
                    <button :class="evaluarFecha(foro.plantilla.fecha_fin) ? 'bg-green-500'
                    : 'bg-yellow-500'" class="w-full rounded-lg p-2" @click="verForo(foro.id_foro)">
                        {{ evaluarFecha(foro.plantilla.fecha_fin) ? 'Ver detalles' : 'Esta foro ya expiró' }}
                    </button>
                </template>
            </Card>
        </div>
    </div>
    <div v-else>
        <p class="text-2xl text-white text-center">No hay foros aún</p>
    </div>
</template>
<script>
import Tooltip from "primevue/tooltip";
import Button from "primevue/button";
import sbar from "./Navbar.vue";
import Sidebar from "primevue/sidebar";
import { reactive } from "vue";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import Calendar from "primevue/calendar";
import { Notify, Confirm } from "notiflix";
import { Inertia } from "@inertiajs/inertia";
import Card from "primevue/card";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat)
Confirm.init({
    titleColor: "#FF0000",
    okButtonBackground: "#FF0000",
    titleMaxLength: "40",
});
export default {
    components: {
        Card,
        Calendar,
        Dialog,
        InputText,
        sbar,
        Button,
        Sidebar,
    },
    directives: {
        Tooltip,
    },
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        meta: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const values = reactive({
            accion_t: "Añadir",
            accion_f: "Añadir",
            nombre_t: "",
            nombre_f: "",
            descripcion_t: "",
            descripcion_f: "",
            fecha_inicio_t: "",
            fecha_inicio_f: "",
            fecha_fin_t: "",
            fecha_fin_f: "",
            vertareas: false,
            verforos: false,
            id_tarea: "",
            id_foro: "",
        });
        const validate_t = () => {
            let go = false;
            if (values.nombre_t == "") {
                Notify.failure("El nombre de la tarea no puede estar vacio");
                go = true;
            }
            if (values.descripcion_t == "") {
                Notify.failure(
                    "La descripción de la tarea no puede estar vacia"
                );
                go = true;
            }
            if (values.fecha_inicio_t == "") {
                Notify.failure("La fecha de inicio no puede estar vacia");
                go = true;
            }
            if (values.fecha_fin_t == "") {
                Notify.failure("La fecha de fin no puede estar vacia");
                go = true;
            }
            return go;
        };
        const submit_t = () => {
            if (validate_t()) return;
            Inertia.post(
                route(
                    values.accion_t == "Añadir"
                        ? "agregar_tarea"
                        : "editar_tarea"
                ),
                {
                    id_meta: props.meta.id_meta,
                    id_tarea: values.id_tarea,
                    nombre: values.nombre_t,
                    descripcion: values.descripcion_t,
                    fecha_inicio: values.fecha_inicio_t,
                    fecha_fin: values.fecha_fin_t,
                },
                {
                    onSuccess: () => {
                        values.vertareas = false;
                        values.nombre_t = "";
                        values.descripcion_t = "";
                        values.fecha_inicio_t = "";
                        values.fecha_fin_t = "";
                        Notify.success("Tarea añadida");
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const validate_f = () => {
            let go = false;
            if (values.nombre_f == "") {
                Notify.failure("El nombre del foro no puede estar vacio");
                go = true;
            }
            if (values.descripcion_f == "") {
                Notify.failure("La descripción del foro no puede estar vacia");
                go = true;
            }
            if (values.fecha_inicio_f == "") {
                Notify.failure("La fecha de inicio no puede estar vacia");
                go = true;
            }
            if (values.fecha_fin_f == "") {
                Notify.failure("La fecha de fin no puede estar vacia");
                go = true;
            }
            return go;
        };
        const submit_f = () => {
            if (validate_f()) return;
            Inertia.post(
                route(
                    values.accion_f == "Añadir" ? "agregar_foro" : "editar_foro"
                ),
                {
                    id_meta: props.meta.id_meta,
                    id_foro: values.id_foro,
                    nombre: values.nombre_f,
                    descripcion: values.descripcion_f,
                    fecha_inicio: values.fecha_inicio_f,
                    fecha_fin: values.fecha_fin_f,
                },
                {
                    onSuccess: (success) => {
                        values.verforos = false;
                        values.nombre_f = "";
                        values.descripcion_f = "";
                        values.fecha_inicio_f = "";
                        values.fecha_fin_f = "";
                        Notify.success(success.props.flash.success);
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const getDate = (date) => {
            /* Date is in format 12/12/2012 */
            let d = date.split("/");
            return new Date(d[2], d[1] - 1, d[0]);
        };
        const editar_tarea = (tarea) => {
            values.accion_t = "Editar";
            values.id_tarea = tarea.id_tarea;
            values.nombre_t = tarea.plantilla.nombre;
            values.descripcion_t = tarea.plantilla.descripcion;
            values.fecha_inicio_t = getDate(tarea.plantilla.fecha_inicio);
            values.fecha_fin_t = getDate(tarea.plantilla.fecha_fin);
            values.vertareas = true;
        };
        const editar_foro = (foro) => {
            values.accion_f = "Editar";
            values.id_foro = foro.id_foro;
            values.nombre_f = foro.plantilla.nombre;
            values.descripcion_f = foro.plantilla.descripcion;
            values.fecha_inicio_f = getDate(foro.plantilla.fecha_inicio);
            values.fecha_fin_f = getDate(foro.plantilla.fecha_fin);
            values.verforos = true;
        };
        const eliminar_tarea = (tarea) => {
            Confirm.show(
                "¿Estás seguro de eliminar esta tarea?",
                "Estás por eliminar la tarea " + tarea.plantilla.nombre,
                "Ok",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("eliminar_tarea"),
                        {
                            id_tarea: tarea.id_tarea,
                        },
                        {
                            onSuccess: () => {
                                Notify.success("Tarea eliminada");
                            },
                            onError: () => {
                                Notify.failure("Error al eliminar la tarea");
                            },
                        }
                    );
                }
            );
        };
        const eliminar_foro = (foro) => {
            Confirm.show(
                "¿Estás seguro de eliminar este foro?",
                "Estás por eliminar el foro " + foro.plantilla.nombre,
                "Ok",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("eliminar_foro"),
                        {
                            id_foro: foro.id_foro,
                        },
                        {
                            onSuccess: () => {
                                Notify.success("Foro eliminado");
                            },
                            onError: () => {
                                Notify.failure("Error al eliminar el foro");
                            },
                        }
                    );
                }
            );
        };
        const verTarea = (id) => {
            Inertia.visit(route("detalles_tarea", id));
        };
        const evaluarFecha = (fecha) => {
            let n_fecha = dayjs(fecha, ["DD/MM/YYYY"]);
            return dayjs().diff(n_fecha) < 0;
        }
        const verForo = (id) => {
            Inertia.visit(route("detalles_foro", id));
        }
        return {
            verForo,
            evaluarFecha,
            verTarea,
            eliminar_foro,
            eliminar_tarea,
            editar_foro,
            editar_tarea,
            submit_f,
            values,
            submit_t,
        };
    },
};
</script>
