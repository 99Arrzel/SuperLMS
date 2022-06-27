<template>
    <div class="flex flex-col">
        <div class="mr-auto">
            <button
                class="m-2 p-2 bg-blue-600 rounded-lg text-variable"
                @click="go_back"
            >
                Regresar
            </button>
        </div>
        <div class="mx-auto mb-2">
            <p class="text-2xl text-variable text-center">
                Estás asignando usuarios al aula
                {{ curso.plantilla?.nombre }}
            </p>
        </div>
        <div class="w-11/12 mx-auto">
            <PickList
                v-model="usuarios_t"
                dataKey="value"
                @selection-change="sincronizar"
                :stripedRows="true"
            >
                <template #sourceheader> Para asignar </template>
                <template #targetheader> Asignados </template>
                <template #item="slotProps">
                    <span
                        >{{
                            slotProps.item.label +
                            " - " +
                            slotProps.item.rol.nombre
                        }}
                    </span>
                </template>
            </PickList>
        </div>
    </div>
</template>
<script>
/* Primevue */

import PickList from "primevue/picklist";
import { reactive, computed } from "@vue/reactivity";

export default {
    components: {
        PickList,
    },
    props: {
        curso: {
            type: Object,
            default: {},
        },
        usuarios: {
            type: Array,
            default: [],
        },
        cursos: {
            type: Array,
            default: [],
        },
    },
    emits: ["go_back", "sincronizar"],
    setup(props, { emit }) {
        const go_back = () => {
            emit("go_back");
        };

        const usuarios_t = computed({
            get() {
                if (valores.usuarios_x) {
                    return valores.usuarios_x;
                }
                let data = props.usuarios
                    .map((usuario) => {
                        return {
                            label:
                                usuario.persona.nombre +
                                " " +
                                usuario.persona.apellido_p,

                            value: usuario.id_usuario,
                            ...usuario,
                        };
                    })
                    /* Filtrar si el usuario está en el curso */
                    .filter((usuario) => {
                        return !props.curso.usuarios.some(
                            (usuario_curso) =>
                                usuario_curso.id_usuario == usuario.id_usuario
                        );
                    });
                let usuarios_en_curso = props.curso.usuarios.map((usuario) => {
                    let data_de_usuario = props.usuarios.find(
                        (usuario_in) =>
                            usuario_in.id_usuario == usuario.id_usuario
                    );
                    return {
                        label:
                            data_de_usuario.persona.nombre +
                            " " +
                            data_de_usuario.persona.apellido_p,
                        value: data_de_usuario.id_usuario,
                        ...data_de_usuario,
                    };
                });
                return [data, usuarios_en_curso];
            },
            set(val) {
                valores.usuarios_x = val;
            },
        });
        const valores = reactive({
            usuario_seleccionado: {},
            usuarios_x: null,
        });
        const log = (t) => {
            console.log(t);
        };
        const sincronizar = () => {
            /* If the list is different from the original */
            if (valores.usuarios_x == undefined) {
                return;
            }

            let curso_c = props.cursos.find(
                (actual) => actual.id_curso == props.curso.id_curso
            );

            let original_values = curso_c.usuarios.map((usuario) => {
                return usuario.id_usuario;
            });
            let modified_values = valores.usuarios_x[1].map((usuario) => {
                return usuario.value;
            });

            if (!comparador(original_values, modified_values)) {
                /* If the list is different from the original */
                emit("sincronizar", {
                    id_curso: props.curso.id_curso,
                    usuarios: modified_values,
                });
            }
        };
        const comparador = (a, b) => {
            return (
                a.length === b.length &&
                a.every((val, index) => val === b[index])
            );
        };
        return {
            sincronizar,
            log,
            valores,
            usuarios_t,
            go_back,
        };
    },
};
</script>
