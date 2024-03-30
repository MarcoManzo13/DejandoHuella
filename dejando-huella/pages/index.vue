<template>
  <div>
    <div>
      <div v-for="article in articles" :key="article._id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
        
      </div>
    </div>
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
          TituloArticulo: db.title,
          DescripcionArticulo: db.description,
        },

      ],
    };
  },
  setup() {
        const {data: db, error, status} = await useFetch('/api/articles/', {
        method: 'GET',
        timeout: 15000,

      })
        //alert(JSON.stringify(values, null, 2))
  }
};


</script>

<style scoped>
  
</style>

