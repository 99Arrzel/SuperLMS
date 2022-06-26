<template>
    <Dialog
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        :modal="true"
        v-model:visible="values.modalArchivos"
    >
        <template #header>
            <h2 class="text-center text-white text-2xl">
                Archivos de la tarea
            </h2>
        </template>
        <TabView>
            <TabPanel header="Lista de archivos">
                <DataTable
                    :value="tarea.plantilla.archivos"
                    v-model:selection="values.archivo"
                    selectionMode="single"
                    :paginator="true"
                    :rows="10"
                >
                    <template #header>
                        <div class="flex">
                            <button
                                class="mx-auto disabled:bg-gray-500 bg-red-500 p-2 rounded-lg text-white"
                                :disabled="
                                    Object.keys(values.archivo ?? {}).length ==
                                    0
                                "
                                @click="eliminarArchivo"
                            >
                                Eliminar
                            </button>
                        </div>
                    </template>
                    <Column header="Descripcion" field="descripcion"
                        ><template #body="slotProps">
                            {{
                                slotProps.data.descripcion == null
                                    ? "Sin descripción"
                                    : slotProps.data.descripcion
                            }}
                        </template></Column
                    >
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
                <InputText
                    v-model="values.descripcion_p"
                    placeholder="Descripción (Opcional)"
                    class="w-1/2"
                ></InputText>

                <FileUpload
                    :chooseLabel="'Cargar'"
                    :uploadLabel="'Subir la tarea'"
                    :showUploadButton="true"
                    :showCancelButton="false"
                    name="tarea[]"
                    @uploader="uploadMaster"
                    :multiple="true"
                    :maxFileSize="10000000"
                    :customUpload="true"
                >
                    <template #empty>
                        <p>Arrastra o carga archivos manualmente.</p>
                    </template>
                </FileUpload>
            </TabPanel>
        </TabView>
    </Dialog>
    <sbar :usuario="usuario"> </sbar>
    <p class="text-white text-3xl text-center">
        Detalles de tarea {{ tarea.plantilla.nombre }}
        <button
            v-if="usuario.id_rol <= 2"
            class="p-2 bg-green-500 rounded-lg text-base"
            @click="values.modalArchivos = true"
        >
            Agregar archivos
        </button>
    </p>
    <div class="mt-4 mx-2">
        <Fieldset :legend="'Tarea: ' + tarea.plantilla.nombre" class="mb-4">
            Descripción: {{ tarea.plantilla.descripcion }}</Fieldset
        >
        <TabView>
            <TabPanel header="Entregar">
                <p class="text-2xl text-white mb-2">
                    Descripción de la entrega:
                </p>
                <InputText
                    v-model="values.descripcion"
                    placeholder="Descripción de la entrega (Opcional)"
                    class="w-full"
                ></InputText>
                <FileUpload
                    :chooseLabel="'Cargar'"
                    :uploadLabel="'Subir la tarea'"
                    :showUploadButton="true"
                    :showCancelButton="false"
                    name="tarea[]"
                    @uploader="myUploader"
                    :multiple="true"
                    :maxFileSize="10000000"
                    :customUpload="true"
                >
                    <template #empty>
                        <p>Arrastra o carga archivos manualmente.</p>
                    </template>
                </FileUpload>
            </TabPanel>
            <TabPanel header="Entregas previas">
                <Fieldset
                    v-for="entrega in usuario.entregas"
                    :key="entrega.id_entrega"
                    :legend="'Fecha: ' + entrega.created_at"
                    class="mb-4"
                >
                    <p>
                        Descripción:
                        {{
                            entrega.descripcion == null
                                ? "Sin descripción"
                                : entrega.descripcion
                        }}
                    </p>
                    <p>Archivos:</p>
                    <ul>
                        <li
                            v-for="archivo in entrega.archivos"
                            :key="archivo.id_archivo"
                        >
                            <a
                                :href="archivo.url"
                                target="_blank"
                                class="text-blue-500"
                            >
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
                        <li
                            v-for="archivo in tarea.plantilla.archivos"
                            :key="archivo.id_archivo"
                        >
                            <a
                                :href="archivo.url"
                                target="_blank"
                                class="text-blue-500"
                            >
                                {{ archivo.nombre }}
                            </a>
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p class="text-white text-center">
                        No hay archivos para esta tarea
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
export default {
    components: {
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
        const eliminarArchivo = () => {

        }
        return {
            uploadMaster,
            myUploader,
            values,
        };
    },
};
</script>
