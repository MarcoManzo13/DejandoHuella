<template>
    <div>
        <h1 style="width: 100%; text-align: center;">Crear un reporte</h1>
        <v-card style="width: 100%; align-items: center;" class="ma-2 pa-10" density="compact">
            <form @submit.prevent="submit">
            
            <!-- Imagen -->
            <v-file-input 
                label="Añadir imágen:"
                v-model="imagen.value.value"
                :error-messages="imagen.errorMessage.value"
                chips
                show-size
                clearable
                multiple
            />

            <!-- Añadir título del artículo -->
            <v-text-field
                v-model="titulo.value.value"
                :counter="20"
                :error-messages="titulo.errorMessage.value"
                label="Título del artículo:"
                clearable
            ></v-text-field>

            <!-- Añadir descripción del artículo -->
            <v-text-field
                v-model="descripcion.value.value"
                :counter="20"
                :error-messages="descripcion.errorMessage.value"
                label="Descripción del artículo:"
                clearable
            ></v-text-field>
    
            <!-- Términos y condiciones -->
            <v-checkbox
                v-model="checkbox.value.value"
                :error-messages="checkbox.errorMessage.value"
                label="¿Aceptas los términos y condiciones?"
                type="checkbox"
                value="1"
            ></v-checkbox>
    
            <!-- Botón Registrarse -->
            <v-btn class="me-4" type="submit">
                Enviar
            </v-btn>
    
            <!-- Botón reiniciar formulario -->
            <v-btn @click="handleReset">
                Borrar Formulario
            </v-btn>
            </form>
        </v-card>
    </div>
    </template>

<script>
import { useField, useForm } from 'vee-validate'
import { useFetch } from 'nuxt/app'

export default {
setup() {
    const { handleSubmit, handleReset } = useForm({
        validationSchema: {
            checkbox (value) {
                if (value === '1') return true
                return 'Debes aceptar los términos y condiciones.'
            },    
        },
    })    
    const imagen = useField('imagen')
    const titulo = useField('titulo')
    const descripcion = useField('descripcion')
    const checkbox = useField('checkbox')

    const submit = handleSubmit(async values => {
        const {data: db, error, status} = await useFetch('/api/users/', {
        method: 'POST',
        timeout: 15000,
        body: {
          imagen: imagen.value,
          titulo: titulo.value,
          descripcion: descripcion.value,
        }

      })
        //alert(JSON.stringify(values, null, 2))
    })

    return {
        handleSubmit,
        handleReset,
        imagen,
        titulo,
        descripcion,
        submit,
        checkbox,
    }
}
}
</script>

<style lang="scss" scoped>

</style>