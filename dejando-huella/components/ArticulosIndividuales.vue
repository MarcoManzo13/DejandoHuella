<template>
    <div class="d-flex justify-center">
        <v-card style="width: 100%;" class="ma-10">
        <v-img
          class="text-white"
          height="200"
          :src="imagen"
          cover
        >
        </v-img>
        <div class="ma-4">
            <div class="font-weight-normal my-5" style="font-size: largest;">
                <strong>{{ $props.TituloArticulo}}</strong>
            </div>
            <div class="font-weight-normal">
                <strong>{{ $props.DescripcionArticulo}}</strong>
            </div>
        </div>
      </v-card>
    </div>
</template>

<script>
    export default {
        props: {
            imagen: String, 
            TituloArticulo: String,
            DescripcionArticulo: String,
        },
    }
</script>

<style scoped>

</style>