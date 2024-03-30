<template>
<div>
    <h1 style="width: 100%; text-align: center;">Registro</h1>
    <v-card style="width: 100%; align-items: center;" class="ma-2 pa-10" density="compact">
        <form @submit.prevent="submit">
        
        <!-- Nombre -->
        <v-text-field
            v-model="name.value.value"
            :counter="20"
            :error-messages="name.errorMessage.value"
            label="Nombre(s)"
            clearable
        ></v-text-field>

        <!-- Appelido -->
        <v-text-field
            v-model="lastName.value.value"
            :counter="20"
            :error-messages="lastName.errorMessage.value"
            label="Apellido(s)"
            clearable
        ></v-text-field>

        <!-- Celular -->
        <v-text-field
            v-model="celular.value.value"
            :counter="10"
            :error-messages="celular.errorMessage.value"
            label="Celular"
            clearable
        ></v-text-field>

        <!-- Correo -->
        <v-text-field
            v-model="email.value.value"
            :error-messages="email.errorMessage.value"
            label="E-mail"
            clearable
        ></v-text-field>

        <!-- Contraseña -->
        <v-text-field
            v-model="contrasena.value.value"
            :type="mostrarContrasena ? 'text' : 'password'"
            :prepend-inner-icon="mostrarContrasena ? 'mdi-eye-off' : 'mdi-eye'"
            @click:prepend-inner="mostrarContrasena = !mostrarContrasena"
            :counter="20"
            :error-messages="contrasena.errorMessage.value"
            label="Contraseña"
            clearable
        ></v-text-field>

        <!-- Confirmar Contraseña -->
        <v-text-field
            v-model="confirmarContrasena.value.value"
            :type="mostrarConfirmarContrasena ? 'text' : 'password'"
            :prepend-inner-icon="mostrarConfirmarContrasena ? 'mdi-eye-off' : 'mdi-eye'"
            @click:prepend-inner="mostrarConfirmarContrasena = !mostrarConfirmarContrasena"
            :counter="20"
            :error-messages="confirmarContrasena.errorMessage.value"
            label="Confirmar Contraseña"
            clearable
        ></v-text-field>

        <!-- Género -->
        <v-select
            v-model="select.value.value"
            :error-messages="select.errorMessage.value"
            :items="items"
            label="Género"
            clearable
        ></v-select>

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
            Registrarse
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
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import { useFetch } from 'nuxt/app'

export default {
setup() {
    const mostrarContrasena = ref(false);
    const mostrarConfirmarContrasena = ref(false);

    const { handleSubmit, handleReset } = useForm({
        validationSchema: {
            name (value) {
                if (value?.length >= 2) return true
                return 'El nombre debe contener al menos 2 caracteres.'
            },
            lastName (value) {
                if (value?.length >= 2) return true
                return 'El apellido debe contener al menos 2 caracteres.'
            },
            celular (value) {
                if (value?.length > 9 && /[0-9-]+/.test(value)) return true
                return 'El celular debe tener al menos 10 dígitos.'
            },
            email (value) {
                if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true
                return 'El correo debe ser válido'
            },
            contrasena (value) {
                if (value?.length >= 10) return true
                return 'La contraseña debe contener al menos 10 caracteres.'
            },
            confirmarContrasena (value) {
                if (value !== contrasena.value.value) return 'Las contraseñas no coinciden.'
                return true
                
            },
            select (value) {
                if (value) return true
                return 'Este campo es obligatorio'
            },
            checkbox (value) {
                if (value === '1') return true
                return 'Debes aceptar los términos y condiciones.'
            },
        },
    })
    const name = useField('name')
    const lastName = useField('lastName')
    const celular = useField('celular')
    const email = useField('email')
    const contrasena = useField('contrasena')
    const confirmarContrasena = useField('confirmarContrasena')
    const select = useField('select')
    const checkbox = useField('checkbox')
    const items = ref([
        'Femenino',
        'Masculino',
        'Prefiero no decir',
    ])
    const submit = handleSubmit(async values => {
        const {data: db, error, status} = await useFetch('/api/user/register', {
        method: 'POST',
        timeout: 15000,
        body: {
          name: name.value,
          lastName: lastName.value,
          email: email.value,
          contrasena: contrasena.value,
          celular: celular.value,
          genero: select.value,
        }

      })
        //alert(JSON.stringify(values, null, 2))
    })

    return {
        mostrarContrasena,
        mostrarConfirmarContrasena,
        handleSubmit,
        handleReset,
        name,
        lastName,
        celular,
        email,
        contrasena,
        confirmarContrasena,
        select,
        checkbox,
        items,
        submit
    }
}
}
</script>

<style scoped>

</style>