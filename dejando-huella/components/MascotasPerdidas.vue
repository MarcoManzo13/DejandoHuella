<template>
    <div class="d-flex justify-center ma-10">
        <v-card style="width: 80%" class="py-5">
            <div class="d-flex flex-column text-left px-10">
                <div class="image-wrapper my-2" style="width: 100%;">
                    <img :src="imagen" alt="Imagen de la mascota">
                </div>
                <p><span style="font-weight: 600;">Nombre del dueño:</span> {{ $props.dueño }}</p>
                <p><span style="font-weight: 600;">Nombre de la mascota:</span> {{ $props.nombreMascota }}</p>
                <p><span style="font-weight: 600;">Raza de la mascota:</span> {{ $props.raza }}</p>
                <p><span style="font-weight: 600;">Color de la mascota:</span> {{ $props.color }}</p>
                <p><span style="font-weight: 600;">Descripción de la mascota:</span> {{ $props.descripcion }}</p>
                <p><span style="font-weight: 600;">Marcas distintivas de la mascota:</span> {{ $props.marcasDistintivas }}</p>
                <p><span style="font-weight: 600;">Información en el collar de la mascota:</span> {{ $props.collar }}</p>
                <p><span style="font-weight: 600;">Genero de la mascota:</span> {{ $props.genero }}</p>
                <p><span style="font-weight: 600;">Última ubicación de la mascota:</span> {{ $props.lugar }}</p>
                <p><span style="font-weight: 600;">Última hora en la que se vió la mascota:</span> {{ $props.hora }}</p>
            </div>
            <div style="width: 100%;" class="mt-5">
                <v-row>
                    <v-col cols="12" md="6" xl="6">
                        <NuxtLink to="/Chat" style="text-decoration: none; color: #000;">
                            <v-btn>
                                Chat
                            </v-btn>
                        </NuxtLink>
                    </v-col>
                    <v-col cols="12" md="6" xl="6">
                        <NuxtLink to="/" style="text-decoration: none; color: #000;">
                            <v-btn>
                                Alerta
                            </v-btn>
                        </NuxtLink>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        props: {
            imagen: String, 
            dueño: String,
            nombreMascota: String,
            raza: String,
            color: String,
            descripcion: String,
            marcasDistintivas: String,
            collar: String,
            genero: String,
            lugar: String,
            hora: String,
        },
    }
</script>

<style scoped>
    .image-wrapper {
        display: flex; 
        justify-content: center; 
        align-items: center; 
        width: 100%; 
    }

    .image-wrapper img {
      width: 50%; 
      height: auto; 
    }

    @media (max-width: 768px) {
      .image-wrapper img {
        width: 100%; 
      }
    }
</style>