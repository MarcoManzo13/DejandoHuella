<template>
    <div style="background-color: #F1EBD5; margin: 0; padding: 0; overflow: hidden;">
        <v-row class="d-flex text-center">
            <v-col cols="12" md="3" xl="3"/>
            <v-col cols="12" md="6" xl="6">
                <h1>Mascotas Encontradas</h1>
                <v-card v-for="perro in perros" :key="perro.id" class="ma-4">
                    <v-row>
                        <v-col cols="12" md="6" xl="6">
                            <v-img
                                :src="perro.foto"
                                class="ma-0 pa-0"
                                contain
                                aspect-ratio="1"
                                width="500"
                            />
                        </v-col>
                        <v-col cols="12" md="6" xl="6" class="d-flex flex-column text-left align-self-center">
                            <v-card-title style="font-size: xx-large;">
                                Nombre: {{ perro.nombre }}
                            </v-card-title>
                            <v-card-text style="font-size: large;">
                                <p class="my-2">Raza: {{ perro.raza }}</p>
                                <p class="my-2">Color: {{ perro.color }}</p>
                            </v-card-text>
                            <v-card-actions class="d-flex flex-column justify-end">
                                <v-btn
                                    color="orange-lighten-2"
                                    text="Alert"
                                    variant="outlined"
                                    prepend-icon="mdi-bullhorn-outline"
                                    style="width: 100%;"
                                    class="my-2 pa-0"
                                />
                                <v-btn
                                    color="orange-lighten-2"
                                    text="Chat"
                                    variant="outlined"
                                    prepend-icon="mdi-chat-outline"
                                    style="width: 100%;"
                                    class="ma-0 pa-0"
                                />
                            </v-card-actions>
                        </v-col>
                    </v-row>
                    
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Perro1 from "../assets/imgMascotas/Perro1.jpg"
import Perro2 from "../assets/imgMascotas/Perro2.jpg"
import Perro3 from "../assets/imgMascotas/Perro3.jpg"
    export default {
        data() {
            return {
                perros: [
                    { id: 1, nombre: 'Rex', raza: 'Trapeador', foto: Perro1, color: "Blanco" },
                    { id: 2, nombre: 'Buddy', raza: 'Casi Golden Retriever', foto: Perro2, color: "Blanco" },
                    { id: 3, nombre: 'Rio', raza: 'Baby Yoda o algo', foto: Perro3, color: "Blanco" }
                ]
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>