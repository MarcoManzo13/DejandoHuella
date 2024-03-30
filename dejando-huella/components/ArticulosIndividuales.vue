<template>
    <div class="d-flex justify-center">
        <v-card style="width: 100%;" class="ma-10">
        <v-img
          class="text-white"
          height="200"
          :src="db.imageURL"
          cover
        >
        </v-img>
        <div class="ma-4">
            <div class="font-weight-normal my-5" style="font-size: largest;">
                <strong>{{ db.title}}</strong>
            </div>
            <div class="font-weight-normal">
                <strong>{{ db.description}}</strong>
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

    setup() {
      // se modifica el fetch para recibirla bd de articulos
       const { data: db, error, status } = useFetch('/api/articles/', {
        method: 'GET',
        timeout: 15000,
      });

      //alert(JSON.stringify(values, null, 2))
    }
  }
</script>

<style scoped>

</style>