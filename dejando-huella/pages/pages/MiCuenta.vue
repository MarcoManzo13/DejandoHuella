<template>
    <div style="background-color: #F1EBD5; overflow: hidden">
        <v-row class="mt-15">
            <v-col cols="12" md="3" xl="3" />
            <v-col cols="12" md="6" xl="6">
                <h1 class="text-center">Mis datos</h1>
                <div class="d-flex flex-column align-center justify-center">
                    <div class="d-flex flex-row align-center text-center justify-center" style="width: 100%;">
                        <v-file-input
                            label="Cambiar Imagen:"
                            append-inner-icon="mdi-camera"
                            prepend-icon="none"
                            variant="outlined"
                            style="min-width: 35%; margin-right: 5%"
                        />
                        <v-img
                        src="../assets/imgMascotas/Perro1.jpg"
                        style="border-radius: 50%; min-width: 55%;"
                        />
                    </div>
                    <!-- Cambiar los placeholders por el valor que viene de la base de datos -->
                    <div class="d-flex flex-row align-center text-center justify-center mt-5" style="width: 100%;">
                        <p
                        style="min-width: 25%; margin-right: 5%"
                        >
                            Nombre:
                        </p>
                        <v-text-field
                            placeholder="Nombre"
                            style="border-radius: 50%; min-width: 65%;"
                            variant="underlined"
                        />
                    </div>
                    <div class="d-flex flex-row align-center text-center justify-center mt-5" style="width: 100%;">
                        <p
                        style="min-width: 25%; margin-right: 5%"
                        >
                            Apellido:
                        </p>
                        <v-text-field
                            placeholder="Apellido"
                            style="border-radius: 50%; min-width: 65%;"
                            variant="underlined"
                        />
                    </div>
                    <div class="d-flex flex-row align-center text-center justify-center mt-5" style="width: 100%;">
                        <p
                        style="min-width: 25%; margin-right: 5%"
                        >
                            Correo:
                        </p>
                        <v-text-field
                            placeholder="Correo"
                            style="border-radius: 50%; min-width: 65%;"
                            variant="underlined"
                        />
                    </div>
                    <div class="d-flex flex-row align-center text-center justify-center mt-5" style="width: 100%;">
                        <p
                        style="min-width: 25%; margin-right: 5%"
                        >
                            Celular:
                        </p>
                        <v-text-field
                            placeholder="Celular"
                            style="border-radius: 50%; min-width: 65%;"
                            variant="underlined"
                        />
                    </div>
                    <div class="d-flex flex-row align-center text-center justify-center mt-5" style="width: 100%;">
                        <p
                        style="min-width: 25%; margin-right: 5%"
                        >
                            Dirección:
                        </p>
                        <v-text-field
                            placeholder="Dirección"
                            style="border-radius: 50%; min-width: 65%;"
                            variant="underlined"
                        />
                    </div>
                    <div class="d-flex flex-row align-center text-center justify-center my-5" style="width: 100%;">
                        <p
                        style="min-width: 25%; margin-right: 5%"
                        >
                            Código Postal:
                        </p>
                        <v-text-field
                            placeholder="CP"
                            style="border-radius: 50%; min-width: 65%;"
                            variant="underlined"
                        />
                    </div>
                </div>
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