<template>
    <sbar :usuario="usuario"> </sbar>
    <Sidebar v-model:visible="values.visibleFull" :baseZIndex="10000">
        <!-- El titulo debería variar de acuerdo a la meta -->
        <h2 class="text-center text-white text-2xl">
            {{
                values.accion == "Añadir"
                    ? "Añade metas a este curso"
                    : "Estás editando una meta"
            }}
        </h2>
        <form @submit.prevent="submit">
            <div class="flex flex-col justify-center gap-2">
                <p class="text-white">Nombre de la meta*</p>
                <InputText
                    v-model="values.nombre"
                    placeholder="Nombre"
                ></InputText>
                <p class="text-white">Descripción de la meta*</p>
                <InputText
                    v-model="values.descripcion"
                    placeholder="Descripción"
                ></InputText>
                <p class="text-white">Fecha de inicio*</p>
                <Calendar
                    dateFormat="dd/mm/yy"
                    v-model="values.fecha_inicio"
                    placeholder="Fecha de inicio"
                ></Calendar>
                <p class="text-white">Fecha final*</p>
                <Calendar
                    dateFormat="dd/mm/yy"
                    v-model="values.fecha_fin"
                    placeholder="Fecha final"
                ></Calendar>
                <button
                    class="p-2 rounded-lg"
                    :class="
                        values.accion == 'Añadir'
                            ? 'bg-green-500'
                            : 'bg-yellow-500'
                    "
                    type="submit"
                >
                    {{ values.accion + " meta" }}
                </button>
            </div>
        </form>
    </Sidebar>
    <div class="px-4 mt-2 flex flex-wrap gap-2">
        <a class="text-white text-3xl mb-2">Metas del curso </a>
        <a class="uppercase text-sky-400 text-3xl mb-2">{{
            " " + curso.plantilla.nombre
        }}</a>
        <Button
            v-if="usuario.rol.id_rol <= 2"
            icon="pi pi-th-large"
            @click="
                (values.visibleFull = true),
                    (values.accion = 'Añadir'),
                    (values.nombre = ''),
                    (values.descripcion = ''),
                    (values.fecha_inicio = ''),
                    (values.fecha_fin = '')
            "
            v-tooltip="'Añade metas'"
        />
    </div>

    <div class="px-4 mt-2" v-if="curso.metas.length > 0">
        <div class="m-4">
            <div class="flex flex-row flex-wrap gap-4 justify-center">
                <Card
                    v-for="meta in curso.metas"
                    :key="meta.id_meta"
                    style="width: 25em"
                >
                    <template #title>
                        <div class="flex">
                            {{ meta.plantilla.nombre }} -
                            {{
                                meta.plantilla.fecha_inicio +
                                " | " +
                                meta.plantilla.fecha_fin
                            }}
                        </div>
                        <div
                            v-if="usuario.rol.id_rol <= 2"
                            class="flex flex-wrap gap-2 text-base justify-end"
                        >
                            <button
                                class="bg-yellow-500 rounded-lg p-2"
                                @click="editarMeta(meta)"
                            >
                                Editar
                            </button>
                            <button
                                class="bg-red-500 rounded-lg p-2"
                                @click="deleteMeta(meta)"
                            >
                                Eliminar
                            </button>
                        </div>
                    </template>
                    <template #content>
                        <p>
                            {{ meta.plantilla.descripcion }}
                        </p>
                    </template>
                    <template #footer>
                        <button
                            class="w-full bg-green-500 rounded-lg p-2"
                            @click="verMeta(meta.id_meta)"
                        >
                            Ver tareas y foros
                        </button>
                    </template>
                </Card>
            </div>
        </div>
    </div>
    <div v-else>
        <p class="text-center text-white text-3xl mb-2">Aún no hay metas</p>
    </div>
</template>
<script>
import sbar from "./Navbar.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Tooltip from "primevue/tooltip";
import { reactive } from "vue";
import { Notify, Confirm } from "notiflix";
import { Inertia } from "@inertiajs/inertia";

Notify.init({
    zindex: 100010,
    position: "center-bottom",
    clickToClose: true,
});
export default {
    directives: {
        Tooltip,
    },
    components: {
        Calendar,
        InputText,
        Sidebar,
        Button,
        sbar,
        Card,
    },
    props: {
        usuario: {
            type: Object,
            required: true,
        },
        curso: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const values = reactive({
            visibleFull: false,
            accion: "",
            nombre: "",
            descripcion: "",
            fecha_inicio: "",
            fecha_fin: "",
            id_meta: "",
        });
        const submit = () => {
            //Validar campos

            if (values.nombre.length < 3) {
                Notify.warning("El nombre debe tener 3 caracteres como mínimo");
                return;
            }
            if (values.descripcion.length < 3) {
                Notify.warning(
                    "La descripción debe tener 3 caracteres como mínimo"
                );
                return;
            }
            if (values.fecha_inicio == "") {
                Notify.warning("Debes elegir una fecha de inicio");
                return;
            }
            if (values.fecha_fin == "") {
                Notify.warning("Debes elegir una fecha final");
                return;
            }
            let esto = {
                id_curso: props.curso.id_curso,
                id_meta: values.id_meta,
                nombre: values.nombre,
                descripcion: values.descripcion,
                fecha_inicio: values.fecha_inicio,
                fecha_fin: values.fecha_fin,
            };
            Inertia.post(
                route(
                    values.accion == "Añadir" ? "agregar_meta" : "editar_meta"
                ),
                esto,
                {
                    onSuccess(success) {
                        Notify.success(success.props.flash.success);
                        values.visibleFull = false;
                    },
                    onError(error) {
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
        const editarMeta = (meta) => {
            values.accion = "Editar";
            values.visibleFull = true;
            console.log(meta);
            values.id_meta = meta.id_meta;
            values.nombre = meta.plantilla.nombre;
            values.descripcion = meta.plantilla.descripcion;
            values.fecha_inicio = getDate(meta.plantilla.fecha_inicio);
            values.fecha_fin = getDate(meta.plantilla.fecha_fin);
        };
        const deleteMeta = (meta) => {
            Confirm.init({
                titleColor: "#FF0000",
                okButtonBackground: "#FF0000",
                titleMaxLength: "40",
            });
            Confirm.show(
                "¿Estás seguro de eliminar esta meta?",
                "Estás por eliminar la meta " + meta.plantilla.nombre,
                "Ok",
                "Cancelar",
                () => {
                    Inertia.post(
                        route("eliminar_meta"),
                        {
                            id_meta: meta.id_meta,
                        },
                        {
                            onSuccess(success) {
                                Notify.success(success.props.flash.success);
                                props.curso.metas = success.props.curso.metas;
                            },
                            onError(error) {
                                for (let i in error) {
                                    Notify.failure(error[i]);
                                }
                            },
                        }
                    );
                }
            );
        };
        const verMeta = (id) => {
            Inertia.visit(route("contenido", id));
        };
        return {
            verMeta,
            deleteMeta,
            editarMeta,
            submit,
            values,
        };
    },
};
</script>
