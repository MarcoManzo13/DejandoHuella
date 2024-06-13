<template>
    <div>
        <v-layout>
            <v-app-bar>
                <v-app-bar-title style="text-align: left;">Dejando Huella</v-app-bar-title>
                <template v-slot:append>
                    <NuxtLink icon to="/">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Inicio
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/Reporte">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Reportes
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/Encontrados">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Encontrados
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/Chat">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Chat
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/PerfilUsuario">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Perfil Usuario
                        </v-btn>
                    </NuxtLink>
                    <NuxtLink icon to="/PerfilAdministrador">
                        <v-btn style="color: #000;" variant="outlined" class="mx-2">
                            Perfil Admin
                        </v-btn>
                    </NuxtLink>
                </template>
            </v-app-bar>

            <v-main>
                <slot />
            </v-main>
        </v-layout>
    </div>
</template>


<script>

</script>


<style scoped>
</style>