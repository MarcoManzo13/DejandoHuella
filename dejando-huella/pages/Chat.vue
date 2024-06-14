<template>
    <div>
        <v-navigation-drawer
            permanent
            style="width: 30%; margin: 0; border: solid blue;"
        >
            <h2 class="my-3 ml-5">Chats</h2>
            <v-list>
                <v-list-item>
                    <v-btn variant="plain" style="max-width: 100%; height: auto;">
                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" md="4" xl="4">
                                <img
                                    src="../assets/imgMascotas/Perro1.jpg"
                                    alt="Imagen de Perfil de la persona"
                                    style="max-width: 100%; border-radius: 50%;"
                                >
                            </v-col>
                            <v-col cols="12" md="8" xl="8" class="d-flex flex-column text-left">
                                <p class="d-inline-block text-truncate text-h5" style="max-width: 250px;">David Rendón</p>
                                <p class="d-inline-block text-truncate text-subtitle-1" style="max-width: 250px;">"Último mensaje en el chat: Me gustan las peras"</p>
                            </v-col>
                        </v-row>
                    </v-btn>
                </v-list-item>
                <v-list-item>
                    <v-btn variant="plain" style="max-width: 100%; height: auto;">
                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" md="4" xl="4">
                                <img
                                    src="../assets/imgMascotas/Perro2.jpg"
                                    alt="Imagen de Perfil de la persona"
                                    style="max-width: 100%; border-radius: 50%;"
                                >
                            </v-col>
                            <v-col cols="12" md="8" xl="8" class="d-flex flex-column text-left">
                                <p class="d-inline-block text-truncate text-h5" style="max-width: 250px;">Juan Manuel</p>
                                <p class="d-inline-block text-truncate text-subtitle-1" style="max-width: 250px;">"Último mensaje en el chat: Me gustan las peras"</p>
                            </v-col>
                        </v-row>
                    </v-btn>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main style="width: 100%; margin-left: 15%">
            <ChatIndividual />
        </v-main>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>

</style>