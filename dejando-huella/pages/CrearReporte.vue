<template>
    <div>
        <h1 style="width: 100%; text-align: center;">Crear un reporte</h1>
        <v-card style="width: 100%; align-items: center;" class="ma-2 pa-10" density="compact">
            <form @submit.prevent="submit">
            
            <!-- Imagen -->
            <v-file-input 
                label="Añadir imágenes (Agregarlas todas como selección)"
                v-model="imagen.value.value"
                :error-messages="imagen.errorMessage.value"
                chips
                multiple
                show-size
                clearable
            />

            <!-- Raza de la mascota -->
            <v-text-field
                v-model="raza.value.value"
                :counter="20"
                :error-messages="raza.errorMessage.value"
                label="Raza:"
                clearable
            ></v-text-field>

            <!-- Color de la mascota -->
            <v-text-field
                v-model="color.value.value"
                :counter="20"
                :error-messages="color.errorMessage.value"
                label="Color:"
                clearable
            ></v-text-field>

            <!-- Descripción de la mascota -->
            <v-text-field
                v-model="descripcion.value.value"
                :counter="20"
                :error-messages="descripcion.errorMessage.value"
                label="Descripción (Sea lo más detallad@ posible):"
                clearable
            ></v-text-field>

            <!-- Marcas distintivas de la mascota -->
            <v-text-field
                v-model="marcasDistintivas.value.value"
                :counter="20"
                :error-messages="marcasDistintivas.errorMessage.value"
                label="Marcas distintivas:"
                clearable
            ></v-text-field>

            <!-- Datos del collar de la mascota -->
            <v-text-field
                v-model="collar.value.value"
                :counter="20"
                :error-messages="collar.errorMessage.value"
                label="Datos en el collar (Si aplica):"
                clearable
            ></v-text-field>

            <!-- Género de la mascota -->
            <v-text-field
                v-model="genero.value.value"
                :counter="20"
                :error-messages="genero.errorMessage.value"
                label="Género:"
                clearable
            ></v-text-field>

            <!-- Última ubicación de la mascota -->
            <v-text-field
                v-model="lugar.value.value"
                :counter="20"
                :error-messages="lugar.errorMessage.value"
                label="Último lugar donde se vió:"
                clearable
            ></v-text-field>

            <!-- Última hora vista de la mascota -->
            <v-text-field
                v-model="hora.value.value"
                :counter="20"
                :error-messages="hora.errorMessage.value"
                label="Última hora donde se vió:"
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
    const raza = useField('raza')
    const color = useField('color')
    const descripcion = useField('descripcion')
    const marcasDistintivas = useField('marcasDistintivas')
    const collar = useField('collar')
    const genero = useField('genero')
    const lugar = useField('lugar')
    const hora = useField('hora')
    const checkbox = useField('checkbox')

    const submit = handleSubmit(async values => {
        const {data: db, error, status} = await useFetch('/api/users/', {
        method: 'POST',
        timeout: 15000,
        body: {
          imagen: imagen.value,
          raza: raza.value,
          color: color.value,
          descripcion: descripcion.value,
          marcasDistintivas: marcasDistintivas.value,
          collar: collar.value,
          genero: genero.value,
          lugar: lugar.value,
          hora: hora.value,
        }

      })
        //alert(JSON.stringify(values, null, 2))
    })

    return {
        handleSubmit,
        handleReset,
        imagen,
        raza,
        color,
        descripcion,
        marcasDistintivas,
        collar,
        genero,
        lugar,
        hora,
        submit,
        checkbox,
    }
}
}
</script>

<style lang="scss" scoped>

</style>