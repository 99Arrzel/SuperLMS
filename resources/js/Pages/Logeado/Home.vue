<template>
    <sbar :usuario="usuario"> </sbar>
    <div class="px-4 mt-2" v-if="usuario.cursos.length > 0">
        <p class="text-white text-3xl mb-2">Mis cursos</p>
        <div class="flex flex-row flex-wrap gap-4 justify-center">
            <Card v-for="curso in usuario.cursos" :key="curso.id_curso" style="width: 25em">
                <template #header>
                    <img class="object-cover" :src="'/' + curso.foto.url" />
                </template>
                <template #title>
                    {{ curso.plantilla.nombre }}
                    <div class="flex flex-wrap gap-1">
                        <div class="bg-green-500 rounded-lg p-2 text-base w-fit" :class="
                            curso.usuarios
                                .filter((usuario) => usuario.id_rol == 2)
                                .map((usuario) => {
                                    return (
                                        usuario.persona.nombre +
                                        ' ' +
                                        usuario.persona.apellido_p
                                    );
                                })
                                .join(', ') == ''
                                ? 'bg-gray-500'
                                : ''
                        ">
                            {{
                                    curso.usuarios
                                        .filter((usuario) => usuario.id_rol == 2)
                                        .map((usuario) => {
                                            return (
                                                usuario.persona.nombre +
                                                " " +
                                                usuario.persona.apellido_p
                                            );
                                        })
                                        .join(", ") == ""
                                        ? "Aún no tiene profesor"
                                        : "Docente: " +
                                        curso.usuarios
                                            .filter((usuario) => usuario.id_rol == 2)
                                            .map((usuario) => {
                                                return (
                                                    usuario.persona.nombre +
                                                    " " +
                                                    usuario.persona.apellido_p
                                                );
                                            })
                                            .join(", ")
                            }}
                        </div>
                        <div class="bg-purple-500 w-fit text-base p-2 rounded-lg"
                            @click="(data.mostrarEnlaces = true), (data.enlaces = curso.enlaces_plataformas), data.id_curso = curso.id_curso">
                            Enlaces
                        </div>
                        <div class="bg-orange-500 w-fit text-base p-2 rounded-lg"
                            @click="(data.mostrarParticipantes = true), (data.participantes = curso.usuarios)">
                            Participantes
                        </div>
                    </div>

                </template>
                <template #content>
                    <p>
                        {{ curso.plantilla.descripcion }}
                    </p>
                </template>
                <template #footer>
                    <Button label="Ingresar" @click="entrarCurso(curso.id_curso)" />
                </template>
            </Card>
        </div>
    </div>
    <div v-else>
        <p class="text-white text-3xl text-center">
            Vaya... parece que aún no te asignan cursos.
        </p>
    </div>
    <Dialog header="Enlaces" :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"
        :modal="true" v-model:visible="data.mostrarEnlaces">
        <div class="flex flex-wrap justify-center gap-2" v-if="usuario.id_rol < 3">

            <div>
                <p>Nombre*</p>
                <InputText placeholder="Enlace de google" v-model="data.nombre">
                </InputText>
            </div>
            <div>
                <p>URL*</p>
                <InputText placeholder="https://www.google.com" v-model="data.url">
                </InputText>
                <button class="bg-green-500 p-2 rounded-lg" @click="crearEnlace">Crear</button>
            </div>
        </div>
        <DataTable :value="data.enlaces">

            <template #empty>
                Ups, sin enlaces aún
            </template>
            <Column header="Nombre" field="nombre">
            </Column>
            <Column header="URL" field="url">
                <template #body="slotProps">
                    <a class="text-blue-500" target="_blank" :href="slotProps.data.url">{{ slotProps.data.url }}</a>
                </template>
            </Column>
            <Column field="id_enlace_plataforma" v-if="usuario.id_rol < 3">
                <template #body="slotProps">
                    <button class="bg-red-500 p-2 rounded-lg" @click="eliminarEnlace(slotProps.data[slotProps.field])">X
                    </button>
                </template>
            </Column>
        </DataTable>
    </Dialog>
    <!-- Participantes -->
    <Dialog header="Participantes" :breakpoints="{ '960px': '75vw', '640px': '100vw' }" :style="{ width: '50vw' }"
        :modal="true" v-model:visible="data.mostrarParticipantes">
        <DataTable :value="data.participantes">
            <template #empty>
                Ups, sin participantes aún
            </template>
            <Column header="Persona" field="persona">
                <template #body="slotProps">
                    {{ slotProps.data.persona.nombre }} {{ slotProps.data.persona.apellido_p }}
                </template>
            </Column>
            <Column header="Rol" field="id_rol">
                <template #body="slotProps">
                    {{ slotProps.data.rol.nombre }}
                </template>
            </Column>
        </DataTable>
    </Dialog>

</template>
<script>
import sbar from "./Navbar.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import { Inertia } from "@inertiajs/inertia";
import { reactive } from 'vue';
import Dialog from "primevue/dialog";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import { Notify } from 'notiflix';
export default {
    components: {
        InputText,
        DataTable,
        Column,
        Dialog,
        sbar,
        Card,
        Button,
    },
    props: {
        usuario: {
            type: Object,
            required: false,
        },

    },

    setup(props) {
        const entrarCurso = (id) => {
            Inertia.visit(route("curso", id));
        };
        const data = reactive({
            enlaces: [],
            id_curso: "",
            mostrarEnlaces: false,
            nombre: "",
            mostrarParticipantes: false,
            participantes: [],
            url: ""
        });
        const eliminarEnlace = (id) => {
            Inertia.post(route("enlace.eliminar"), {
                id_enlace_plataforma: id
            },
                {
                    preserveScroll: true,
                    preserveState: true,

                    onSuccess: () => {
                        Notify.success("Enlace eliminado");
                        let ncurso = props.usuario.cursos.filter((curso) => curso.id_curso == data.id_curso);
                        console.log(ncurso[0]);
                        data.enlaces = ncurso[0].enlaces_plataformas;
                        data.nombre = "";
                        data.url = "";
                    },
                    onError: () => {
                        Notify.error("Error al eliminar enlace");
                    }
                });
        };
        const crearEnlace = () => {
            /* Validar */
            if (data.nombre.trim() == "" || data.url.trim() == "") {
                Notify.failure("Todos los campos son obligatorios");
                return;
            }
            Inertia.post(route("enlace.crear"), {
                id_curso: data.id_curso,
                nombre: data.nombre,
                url: data.url
            },
                {
                    preserveScroll: true,
                    preserveState: true,
                    onSuccess: () => {
                        Notify.success("Enlace creado");
                        let ncurso = props.usuario.cursos.filter((curso) => curso.id_curso == data.id_curso);
                        console.log(ncurso[0]);
                        data.enlaces = ncurso[0].enlaces_plataformas;

                    },
                    onError: () => {
                        Notify.error("Error al crear enlace");
                    }
                }
            );
        };
        return {
            eliminarEnlace,
            crearEnlace,
            data,
            entrarCurso,
        };
    },
};
</script>
