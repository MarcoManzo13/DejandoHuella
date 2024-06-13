<template>
    <div style="background-color: #F1EBD5; margin: 0; padding: 0; height: 100vh; overflow: hidden;">
        <v-row class="mt-15">
            <v-col cols="12" md="4" xl="4"/>
            <v-col cols="12" md="4" xl="4">
                <div style="width: 100%; height: 25%;" class="mb-6">
                    <v-img
                        src="../assets/Logo.png"
                        style="width: 100%;"
                    >
                    </v-img>
                </div>
                <v-card class="mx-2 pa-8" density="compact" style="background-color: #F1EBD5;">
                    <form @submit.prevent="submit">
                    
                        <!-- Campo de ingreso -->
                        <template v-if="metodoInicioSesion === 'correo'">
                            <v-text-field
                                v-model="email.value.value"
                                :error-messages="email.errorMessage.value"
                                label="E-mail"
                                clearable
                                variant="outlined"
                                prepend-inner-icon="mdi-at"
                            ></v-text-field>
                        </template>
                    
                        <template v-if="metodoInicioSesion === 'celular'">
                            <v-text-field
                                v-model="celular.value.value"
                                :counter="10"
                                :error-messages="celular.errorMessage.value"
                                label="Celular"
                                clearable
                                variant="outlined"
                                prepend-inner-icon="mdi-phone"
                            ></v-text-field>
                        </template>
                    
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
                            variant="outlined"
                        ></v-text-field>
                    
                        <div class="d-flex flex-column align-center justify-space-between">
                            <!-- Botón Cambiar Método de Inicio de Sesión -->
                            <v-btn @click="toggleMetodoInicioSesion" style="width: 100%;" class="my-1">
                                {{ metodoInicioSesion === 'correo' ? 'Iniciar sesión con Celular' : 'Iniciar sesión con Correo' }}
                            </v-btn>
                        
                            <!-- Botón Iniciar Sesión -->
                            <v-btn class="my-1" type="submit" style="width: 100%;">
                                Iniciar Sesión
                            </v-btn>

                            <!-- Botón para llevar al usuario al registro -->
                            <NuxtLink to="/Registro" class="my-1" style="width: 100%;">
                                <v-btn style="width: 100%;">
                                    ¿No tienes cuenta? Regístrate
                                </v-btn>
                            </NuxtLink>
                        </div>
                    </form>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>

definePageMeta({
    layout: false,
});

import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const mostrarContrasena = ref(false);
const metodoInicioSesion = ref('correo'); 

const opcionesInicioSesion = [
    { label: 'Correo y Contraseña', value: 'correo' },
    { label: 'Celular y Contraseña', value: 'celular' }
];

const { handleSubmit, handleReset } = useForm({
    validationSchema: {
        celular(value) {
            if (value?.length === 10 && /^[0-9]+$/.test(value)) return true
            return 'El celular debe tener 10 dígitos.'
        },
        email(value) {
            if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) return true
            return 'El correo debe ser válido'
        },
    },
})
const celular = useField('celular')
const email = useField('email')
const contrasena = useField('contrasena')

const usuarioBaseDatos = {
    correo: 'usuario@dominio.com',
    celular: '1234567890',
    contrasena: 'Abcdef123!'
}

const submit = handleSubmit(values => {
    console.log('Valor ingresado de la contraseña:', values.contrasena);
    console.log('Contraseña almacenada en la base de datos:', usuarioBaseDatos.contrasena);
    
    if (
        (metodoInicioSesion.value === 'correo' && values.email === usuarioBaseDatos.correo) ||
        (metodoInicioSesion.value === 'celular' && values.celular === usuarioBaseDatos.celular)
    ) {
        if (values.contrasena === usuarioBaseDatos.contrasena) {
            alert('Inicio de sesión exitoso.');
        } else {
            alert('No se puede iniciar sesión: La contraseña es incorrecta.');
        }
    } else {
        alert('No se puede iniciar sesión, el correo, celular, o contraseña es incorrecta.');
    }
})


const toggleMetodoInicioSesion = () => {
    metodoInicioSesion.value = metodoInicioSesion.value === 'correo' ? 'celular' : 'correo';
}
</script>

<style>
body::-webkit-scrollbar {
    display: none;
}


</style>