<template>
    <div style="background-color: #F1EBD5; overflow: hidden">
        <v-row class="mt-15">
            <v-col cols="12" md="1" xl="1" />
            <v-col cols="12" md="10" xl="10">
                <h1 class="text-center">Mis mascotas</h1>
                <v-card class="d-flex flex-row align-center justify-center ma-15 pa-10" style="background-color: #F1EBD5;">
                    <v-row class="d-flex align-center">
                        <v-col cols="12" md="3" xl="3"/>
                        <v-col cols="12" md="3" xl="3">
                            <div style="width: 100%;">
                                <v-img
                                    src="../assets/imgMascotas/Perro1.jpg"
                                    style="border-radius: 50%; max-width: 100%;"
                                />
                            </div>
                        </v-col>
                        <v-col cols="12" md="3" xl="3">
                            <!-- Cambiar los ejemplos por el valor que vienen de la base de datos -->
                            <div class="d-flex flex-column align-center justify-center text-right">
                                <div class="d-flex flex-row justify-center" style="width: 100%;">
                                    <p>
                                        <span style="font-weight: 600;">Nombre: </span> Firulais
                                    </p>
                                </div>
                                <div class="d-flex flex-row justify-center mt-5" style="width: 100%;">
                                    <p>
                                        <span style="font-weight: 600;">Raza: </span> Puddle
                                    </p>
                                </div>
                                <div class="d-flex flex-row justify-center mt-5" style="width: 100%;">
                                    <p>
                                        <span style="font-weight: 600;">Género: </span> Hembra
                                    </p>
                                </div>
                                <div class="d-flex flex-row justify-center mt-5" style="width: 100%;">
                                    <p>
                                        <span style="font-weight: 600;">Color: </span> Blanco
                                    </p>
                                </div>
                                <div class="d-flex flex-row justify-center mt-5" style="width: 100%;">
                                    <p>
                                        <span style="font-weight: 600;">Tamaño: </span> Chico
                                    </p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>