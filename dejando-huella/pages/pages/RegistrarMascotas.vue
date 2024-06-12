<template>
    <div style="background-color: #F1EBD5; overflow: hidden" >
        <h1 style="width: 100%; text-align: center;" class="mt-10">
            Registrar mascota
        </h1>
        <v-row style="overflow: hidden">
            <v-col cols="12" md="4" xl="4"/>
            <v-col cols="12" md="4" xl="4">
                <v-card style="width: 100%; align-items: center; background-color: #F1EBD5;" class="ma-2 mb-10 pa-8" density="compact">
                    <form @submit.prevent="submit">
                        <!-- Nombre -->
                        <v-text-field
                            v-model="nombre.value.value"
                            :counter="20"
                            :error-messages="nombre.errorMessage.value"
                            label="Nombre(s)"
                            clearable
                            variant="outlined"
                        ></v-text-field>
                        <!-- Raza -->
                        <v-text-field
                            v-model="raza.value.value"
                            :counter="20"
                            :error-messages="raza.errorMessage.value"
                            label="Raza"
                            clearable
                            variant="outlined"
                        ></v-text-field>
                        <!-- Género -->
                        <v-select
                            v-model="genero.value.value"
                            :error-messages="genero.errorMessage.value"
                            :items="items"
                            label="Género"
                            clearable
                            variant="outlined"
                        />
                        <!-- Color -->
                        <v-text-field
                            v-model="color.value.value"
                            :error-messages="color.errorMessage.value"
                            label="Color"
                            clearable
                            variant="outlined"
                        ></v-text-field>
                        <!-- Tamaño -->
                        <v-select
                            v-model="tamano.value.value"
                            :error-messages="tamano.errorMessage.value"
                            :items="itemstamano"
                            label="Tamaño"
                            clearable
                            variant="outlined"
                        />
                        <!-- Imagen -->
                        <v-file-input
                            label="Añadir Imagen:"
                            prepend-icon="mdi-camera"
                            variant="outlined"
                        />
                        <div class="d-flex flex-column align-center justify-space-between">
                            <!-- Botón Registro -->
                            <v-btn class="my-1" type="submit" style="width: 100%;">
                                Registrar Mascota
                            </v-btn>
                        </div>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { useFetch } from 'nuxt/app'

export default {
setup() {
    const { handleSubmit, handleReset } = useForm({
        validationSchema: {
            nombre (value) {
                if (value?.length >= 2) return true
                return 'El nombre debe contener al menos 2 caracteres.'
            },
            raza (value) {
                if (value?.length >= 2) return true
                return 'La raza debe contener al menos 2 caracteres.'
            },
            color (value) {
                if (value?.length >= 2) return true
                return 'El color debe contener al menos 2 caracteres.'
            },
            genero (value) {
                if (value) return true
                return 'Este campo es obligatorio'
            },
            tamano (value) {
                if (value) return true
                return 'Este campo es obligatorio'
            },
        },
    })
    const nombre = useField('nombre')
    const raza = useField('raza')
    const color = useField('color')
    const genero = useField('genero')
    const items = ref([
        'Hembra',
        'Macho',
    ])
    const tamano = useField('tamano')
    const itemstamano = ref([
        'Chico',
        'Mediano',
        'Grande',
    ])
    const submit = handleSubmit(async values => {
        const {data: db, error, status} = await useFetch('/api/users/', {
        method: 'POST',
        timeout: 15000,
        body: {
            nombre: nombre.value,
            raza: raza.value,
            color: color.value,
            genero: select.value,
            tamano: select.value,
        }
    })
        //alert(JSON.stringify(values, null, 2))
    })

    return {
        nombre,
        raza,
        color,
        genero,
        tamano,
        items,
        itemstamano,
        handleSubmit,
        handleReset,
        submit
    }
}
}
</script>

<style scoped>

</style>