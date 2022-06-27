<template>
    <sbar :usuario="props.usuario"> </sbar>
    <div class="m-2">
        <Link class="bg-sky-400 p-2 mr-auto rounded-lg text-white" :href="'/cursos/contenido/' + props.foro.id_meta">
        Otras tareas
        </Link>
    </div>
    <div class="mx-2 mt-2">
        <Panel :header="'Foro ' + props.foro.plantilla.nombre">
            {{ foro.plantilla.descripcion }}
            <div v-for="entrega in props.foro.entregas" :key="entrega.id_entrega">
                <Fieldset :legend="entrega.comentario">
                    <div>
                        <p>
                            -{{ ` ${entrega.usuario.persona.nombre} ${entrega.usuario.persona.apellido_p} - ${entrega.created_at} ` }}-
                        </p>
                        <div v-html="entrega.descripcion">
                        </div>

                    </div>
                </Fieldset>
            </div>
            <Divider />
            <div v-if="evaluarFecha(props.foro.plantilla.fecha_fin)">
                <p class="text-center text-2xl my-2">Participa</p>
                <InputText v-model="data.titulo" placeholder="Titulo"></InputText>
                <button class="bg-green-500 p-2 rounded-lg mx-2" @click="enviar">
                    Crear
                </button>
                <Editor v-model="data.descripcion" placeholder="Escribe tu opinión" class="text-white">
                </Editor>
            </div>
        </Panel>
    </div>
</template>
<script setup>
import sbar from "../Navbar.vue";
import Editor from 'primevue/editor';
import Divider from 'primevue/divider';
import Panel from 'primevue/panel';
import Fieldset from 'primevue/fieldset';
import InputText from "primevue/inputtext";
import { reactive } from "vue";
import { Notify } from "notiflix";
import { Inertia } from "@inertiajs/inertia";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { Link } from '@inertiajs/inertia-vue3';
dayjs.extend(customParseFormat)
const props = defineProps({
    usuario: {
        type: Object,
        required: true,
    },
    foro: {
        type: Object,
        required: true,
    }
});
const data = reactive({
    titulo: "",
    descripcion: ""
});
const enviar = () => {
    if (data.titulo.trim().length > 0 && data.descripcion.trim().length > 0) {
        Inertia.post(route('agregar_foro_participacion'), {
            titulo: data.titulo,
            descripcion: data.descripcion,
            id_foro: props.foro.id_foro
        }, {
            preserveScroll: true,
            onSuccess: () => {
                Notify.success("Entrega creada");
            },
            onError: (error) => {
                for (let i in error) {
                    Notify.failure(error[i]);
                }
            }
        });
    } else {
        Notify.failure("Todos los campos son obligatorios");
    }
};
const evaluarFecha = (fecha) => {
    console.log(fecha);
    let n_fecha = dayjs(fecha, ["DD/MM/YYYY"]);
    return dayjs().diff(n_fecha) < 0;
}
</script>
