<template>
    <div>
        <template v-if="articulosIndividuales.length > 0">
            <ArticulosIndividuales 
                v-for="articulo in articulosIndividuales"
                    :key="articulo.id"
                    :TituloArticulo="articulo.TituloArticulo"
                    :DescripcionArticulo="articulo.DescripcionArticulo"
            />
        </template>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        articulosIndividuales: [
          {
            id: 1,
            TituloArticulo: "Titulo del Artículo",
            DescripcionArticulo: "Descripción del Artículo",
          },
          {
            id: 2,
            TituloArticulo: "Titulo del Artículo",
            DescripcionArticulo: "Descripción del Artículo",
          },
        ],
      };
    },
  };
  </script>

<style scoped>
    
</style>