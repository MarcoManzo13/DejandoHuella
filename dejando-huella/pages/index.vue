<template>
    <div>
        <template v-if="articulosIndividuales.length > 0">
            <ArticulosIndividuales 
                v-for="articulo in articulosIndividuales"
                    :key="articulo.id"
                    :imagen="articulo.imagen"
                    :TituloArticulo="articulo.TituloArticulo"
                    :DescripcionArticulo="articulo.DescripcionArticulo"
            />
        </template>
    </div>
</template>

<script>
  import pitbullImage from '../assets/imgArticulos/publicidad.png';
  export default {
    data() {
      return {
        articulosIndividuales: [
          {
            id: 1,
            imagen: pitbullImage,
            TituloArticulo: "Titulo del Artículo",
            DescripcionArticulo: "Descripción del Artículo",
          },
          {
            id: 2,
            imagen: pitbullImage,
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