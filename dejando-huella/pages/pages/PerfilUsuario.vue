<!-- Perfil del Usuario -->
<template>
    <div>
        <v-card class="ma-15 pb-5">
            <v-row class="mt-10">
                <v-col cols="12" md="3" xl="3"/>
                <v-col cols="12" md="6" xl="6">
                    <v-card class="d-flex flex-column justify-center align-center">
                        <v-img
                            src="../assets/imgMascotas/Perro1.jpg"
                            style="border-radius: 50%; min-width: 50%;"
                            class="ma-5"
                        />
                        <p class="mb-10" style="font-size: larger; font-weight: 600;">Nombre del Usuario</p>
                    </v-card>
                    <div class="d-flex flex-column align-center text-center justify-center">
                        <NuxtLink to="/MiCuenta" style="width: 100%;" class="my-3">
                            <v-btn style="width: 100%;">
                                Mi Cuenta
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/MisMascotas" style="width: 100%;" class="my-3">
                            <v-btn style="width: 100%;">
                                Mis Mascotas
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/RegistrarMascotas" style="width: 100%;" class="my-3">
                            <v-btn style="width: 100%;">
                                Registro de Mascotas
                            </v-btn>
                        </NuxtLink>
                        <NuxtLink to="/AcercaDe" style="width: 100%;" class="my-3">
                            <v-btn style="width: 100%;">
                                Acerca De
                            </v-btn>
                        </NuxtLink>
                        <v-btn style="width: 100%;" class="my-3">
                            Cerrar Sesión
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>