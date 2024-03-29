<template>
  <div>
    <div style="width: 100%;" class="text-center align-center justify-content pa-5">
      <div>
        <p class="ma-5" style="font-size: larger; font-weight: 600;">Mascotas encontradas</p>
        <v-divider />
        <NuxtLink to="/CrearReporte">
          <v-btn class="ma-5">Encontré una mascota</v-btn>
        </NuxtLink>
        <v-divider />

        <template v-if="mascotasEncontradas.length > 0">
          <MascotasEncontradas
            v-for="mascota in mascotasEncontradas"
            :key="mascota.id"
            :imagen="mascota.imagen"
            :nombreMascota="mascota.nombreMascota"
            :dueño="mascota.dueño"
            :raza="mascota.raza"
            :color="mascota.color"
            :descripcion="mascota.descripcion"
            :marcasDistintivas="mascota.marcasDistintivas"
            :collar="mascota.collar"
            :genero="mascota.genero"
            :lugar="mascota.lugar"
            :hora="mascota.hora"
          />
        </template>

        <p v-else class="ma-5">No hay mascotas encontradas registradas.</p>
      </div>
    </div>
  </div>
</template>

<script>
import pitbullImage from '../assets/imgMascotas/pitbull.jpeg';
export default {
  data() {
    return {
      mascotasEncontradas: [
        {
          id: 1,
          imagen: pitbullImage,
          nombreMascota: "Firulais",
          dueño: "Marco",
          raza: "Pitbull",
          color: "Gris",
          descripcion: "Un pitbull gris que se perdió",
          marcasDistintivas: "Está muy bonito",
          collar: "En el collar viene el número de teléfono mío",
          genero: "Masculino",
          lugar: "Por ahí",
          hora: "10:00am",
        },
        {
          id: 2,
          nombreMascota: "Firulais",
          dueño: "Marco",
          raza: "Pitbull",
          color: "Gris",
          descripcion: "Un pitbull gris que se perdió",
          marcasDistintivas: "Está muy bonito",
          collar: "En el collar viene el número de teléfono mío",
          genero: "Masculino",
          lugar: "Por ahí",
          hora: "10:00am",
        },
        
      ],
    };
  },
};
</script>

<!-- Por si les sirve, según Bard este código sirve para añadir la información con Endpoints, que la info venga de la bases de datos:

<script>
export default {
data() {
  return {
    mascotasEncontradas: [],
  };
},
async fetch() {
  try {
    const response = await this.$fetch('/api/mascotas-perdidas'); // Replace with your actual endpoint
    this.mascotasEncontradas = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
},
};
</script>

-->

<style scoped>

</style>
