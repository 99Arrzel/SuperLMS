<template>
    <sbar :usuario="usuario"> </sbar>
    <div class="px-4 mt-2" v-if="usuario.cursos.length > 0">
        <p class="text-white text-3xl mb-2">Mis cursos</p>
        <div class="flex flex-row flex-wrap gap-4 justify-center">
            <Card
                v-for="curso in usuario.cursos"
                :key="curso.id_curso"
                style="width: 25em"
            >
                <template #header>
                    <img class="object-cover" :src="'/' + curso.foto.url" />
                </template>
                <template #title>
                    {{ curso.plantilla.nombre }}
                    <div
                        class="bg-green-500 rounded-lg p-2 text-base w-fit"
                        :class="
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
                        "
                    >
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
                    </div></template
                >
                <template #content>
                    <p>
                        {{ curso.plantilla.descripcion }}
                    </p>
                </template>
                <template #footer>
                    <Button
                        label="Ingresar"
                        @click="entrarCurso(curso.id_curso)"
                    />
                </template>
            </Card>
        </div>
    </div>
    <div v-else>
        <p class="text-white text-3xl text-center">
            Vaya... parece que aún no te asignan cursos.
        </p>
    </div>
</template>
<script>
import sbar from "./Navbar.vue";
import Card from "primevue/card";
import Button from "primevue/button";
import { Inertia } from "@inertiajs/inertia";

export default {
    components: {
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

    setup() {
        const entrarCurso = (id) => {
            Inertia.visit(route("curso", id));
        };
        return {
            entrarCurso,
        };
    },
};
</script>
