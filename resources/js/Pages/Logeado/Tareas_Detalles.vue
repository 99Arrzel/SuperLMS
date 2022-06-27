<template>
    <Dialog :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }" :modal="true"
        v-model:visible="values.modalArchivos">
        <template #header>

            <h2 class="text-center text-variable text-2xl">
                Archivos de la tarea
            </h2>
        </template>
        <TabView>
            <TabPanel header="Lista de archivos">
                <DataTable :value="tarea.plantilla.archivos" v-model:selection="values.archivo" selectionMode="single"
                    :paginator="true" :rows="10">
                    <template #header>
                        <div class="flex">
                            <button class="mx-auto disabled:bg-gray-500 bg-red-500 p-2 rounded-lg text-variable"
                                :disabled="
                                    Object.keys(values.archivo ?? {}).length ==
                                    0
                                " @click="eliminarArchivo">
                                Eliminar
                            </button>
                        </div>
                    </template>
                    <Column header="Descripcion" field="descripcion"><template #body="slotProps">
                            {{
                                    slotProps.data.descripcion == null
                                        ? "Sin descripción"
                                        : slotProps.data.descripcion
                            }}
                        </template></Column>
                    <Column header="Archivo">
                        <template #body="slotProps">
                            <a :href="slotProps.data.url" target="_blank">
                                {{ slotProps.data.nombre }}
                            </a>
                        </template>
                    </Column>
                </DataTable>
            </TabPanel>
            <TabPanel header="Subir archivo">
                <InputText v-model="values.descripcion_p" placeholder="Descripción (Opcional)" class="w-1/2">
                </InputText>

                <FileUpload :chooseLabel="'Cargar'" :uploadLabel="'Subir la tarea'" :showUploadButton="true"
                    :showCancelButton="false" name="tarea[]" @uploader="uploadMaster" :multiple="true"
                    :maxFileSize="10000000" :customUpload="true">
                    <template #empty>
                        <p>Arrastra o carga archivos manualmente.</p>
                    </template>
                </FileUpload>
            </TabPanel>
        </TabView>
    </Dialog>

    <div class="m-2">
        <Link class="bg-sky-400 p-2 mr-auto rounded-lg text-variable" :href="'/cursos/contenido/' + tarea.id_meta">
        Otras tareas
        </Link>
    </div>

    <p class="text-variable text-3xl text-center">
        Detalles de tarea {{ tarea.plantilla.nombre }}
        <button v-if="usuario.id_rol <= 2" class="p-2 bg-green-500 rounded-lg text-base"
            @click="values.modalArchivos = true">
            Agregar archivos
        </button>
    </p>
    <div class="mt-4 mx-2">
        <Fieldset :legend="'Tarea: ' + tarea.plantilla.nombre" class="mb-4">
            Descripción: {{ tarea.plantilla.descripcion }}</Fieldset>
        <TabView>
            <TabPanel header="Entregar" v-if="usuario.id_rol == 3 && evaluarFecha(tarea.plantilla.fecha_fin)">
                <p class="text-2xl text-variable mb-2">
                    Descripción de la entrega:
                </p>
                <InputText v-model="values.descripcion" placeholder="Descripción de la entrega (Opcional)"
                    class="w-full"></InputText>
                <FileUpload :chooseLabel="'Cargar'" :uploadLabel="'Subir la tarea'" :showUploadButton="true"
                    :showCancelButton="false" name="tarea[]" @uploader="myUploader" :multiple="true"
                    :maxFileSize="10000000" :customUpload="true">
                    <template #empty>
                        <p>Arrastra o carga archivos manualmente.</p>
                    </template>
                </FileUpload>
            </TabPanel>
            <TabPanel header="Entregas previas" v-if="usuario.id_rol == 3">
                <Fieldset v-for="entrega in usuario.entregas" :key="entrega.id_entrega"
                    :legend="'Fecha: ' + entrega.created_at" class="mb-4">
                    <p>
                        Descripción:
                        {{
                                entrega.descripcion == null
                                    ? "Sin descripción"
                                    : entrega.descripcion
                        }}
                    </p>
                    <p>Nota: <a :class="entrega.nota > 50 ? 'bg-green-500' : 'bg-red-500'"
                            class="px-1.5 rounded-lg">{{ entrega.nota == null ? "Sin calificar aún" : entrega.nota }}</a>
                    </p>
                    <p>Comentario: {{ entrega.comentario == null ? "Sin comentario" : entrega.comentario }}</p>
                    <p>Archivos:</p>
                    <ul>
                        <li v-for="archivo in entrega.archivos" :key="archivo.id_archivo">
                            <a :href="archivo.url" target="_blank" class="text-blue-500">
                                {{ archivo.nombre }}
                            </a>
                        </li>
                    </ul>
                </Fieldset>
            </TabPanel>
            <TabPanel header="Archivos de la tarea">
                <div v-if="tarea.plantilla.archivos.length > 0">
                    <p>Archivos:</p>
                    <ul>
                        <li v-for="archivo in tarea.plantilla.archivos" :key="archivo.id_archivo">
                            <a :href="archivo.url" target="_blank" class="text-blue-500">
                                {{ archivo.nombre }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p class="text-variable text-center">
                        No hay archivos para esta tarea
                    </p>
                </div>
            </TabPanel>
            <TabPanel header="Tareas de estudiantes" v-if="usuario.id_rol < 3">
                <!-- Esto solo debería existir si el usuario tiene un rol menor a 3 -->
                <div v-if="tarea.entregas.length > 0">
                    <p>Entregas:</p>
                    <DataTable :value="tarea.entregas" editMode="cell" @cell-edit-complete="editarNota">
                        <Column header="Alumno" field="usuario.persona">
                            <template #body="slotProps">
                                {{ slotProps.data.usuario.persona.nombre + " " + slotProps.data.usuario.persona.apellido_p }}
                            </template>
                        </Column>
                        <Column header="Descripción" field="descripcion"></Column>
                        <Column header="Fecha" field="created_at">
                        </Column>
                        <Column header="Archivos" field="archivos">
                            <template #body="slotProps">
                                <div class="overflow-y-auto max-h-32 ...">
                                    <p v-for="entrega in slotProps.data.archivos">
                                        <a :href="entrega.url" target="_blank" class="text-blue-500">
                                            {{ entrega.nombre.slice(11) }}
                                        </a>
                                    </p>
                                </div>
                            </template>
                        </Column>
                        <Column header="Calificación" field="nota">
                            <template #body="slotProps">
                                {{ slotProps.data.nota == null ? "Sin calificación" : slotProps.data.nota }}
                            </template>
                            <template #editor="slotProps">
                                {{ slotProps.data[slotProps.field] }}
                                <Slider v-model="slotProps.data[slotProps.field]" :min="0" :max="100"></Slider>
                            </template>
                        </Column>
                        <Column header="Comentario" field="comentario">
                            <template #body="slotProps">
                                {{ slotProps.data.comentario == null ? "Sin comentario" : slotProps.data.comentario }}
                            </template>
                            <template #editor="slotProps">

                                <InputText v-model="slotProps.data[slotProps.field]"></InputText>
                            </template>
                        </Column>
                    </DataTable>
                </div>
                <div v-else>
                    <p class="text-variable text-center">
                        Nadie entregó la tarea aún
                    </p>
                </div>
            </TabPanel>
        </TabView>
    </div>
</template>
<script>
import sbar from "./Navbar.vue";
import Fieldset from "primevue/fieldset";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import FileUpload from "primevue/fileupload";
import InputText from "primevue/inputtext";
import Dialog from "primevue/dialog";
import { reactive } from "vue";
import { Notify } from "notiflix";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { Inertia } from "@inertiajs/inertia";
import Slider from 'primevue/slider';
import ScrollPanel from 'primevue/scrollpanel';
import { Link } from '@inertiajs/inertia-vue3'
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat)
export default {
    layout: sbar,
    components: {
        Link,
        ScrollPanel,
        Slider,
        DataTable,
        Column,
        Dialog,
        InputText,
        FileUpload,
        TabView,
        TabPanel,
        sbar,
        Fieldset,
    },
    props: {
        usuario: {
            type: Object,
            required: false,
        },
        tarea: {
            type: Object,
            required: false,
        },
    },
    setup(props) {
        const values = reactive({
            descripcion: "",
            modalArchivos: false,
            archivo: {},
            descripcion_p: "",
        });
        const myUploader = (e) => {
            Inertia.post(
                route("entregar_tarea"),
                {
                    id_tarea: props.tarea.id_tarea,
                    descripcion: values.descripcion,
                    archivos: e.files,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        Notify.success("Tarea entregada correctamente");
                        values.descripcion = "";
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const uploadMaster = (e) => {
            Inertia.post(
                route("archivos_profe"),
                {
                    id_tarea: props.tarea.id_tarea,
                    descripcion: values.descripcion_p,
                    archivos: e.files,
                },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: () => {
                        Notify.success("Tarea entregada correctamente");
                        values.descripcion_p = "";
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                }
            );
        };
        const editarNota = (d) => {
            console.log(d)

            Inertia.post(route(d.field == 'nota' ? 'editar_nota' : 'enviar_comentario'), {
                id_entrega: d.data.id_entrega,
                nota: d.newValue,
                comentario: d.newValue
            },
                {
                    preserveState: true,
                    preserveScroll: true,
                    onSuccess: (success) => {
                        Notify.success(success.props.flash.success);
                    },
                    onError: (error) => {
                        for (let i in error) {
                            Notify.failure(error[i]);
                        }
                    },
                });
        }
        const evaluarFecha = (fecha) => {
            console.log(fecha);
            let n_fecha = dayjs(fecha, ["DD/MM/YYYY"]);
            return dayjs().diff(n_fecha) < 0;
        }
        return {
            evaluarFecha,
            editarNota,
            uploadMaster,
            myUploader,
            values,
        };
    },
};
</script>
