<template>
    <div>
      <h1 style="width: 100%; text-align: center;">Crear un reporte</h1>
      <v-card style="width: 100%; align-items: center;" class="ma-2 pa-10" density="compact">
        <form @submit.prevent="submit">
          <!-- Imagen URL -->
          <v-text-field
            v-model="imageURL.value.value"
            :error-messages="imageURL.errorMessage.value"
            label="URL de la imagen:"
            clearable
          ></v-text-field>
  
          <!-- Añadir título del artículo -->
          <v-text-field
            v-model="title.value.value"
            :counter="20"
            :error-messages="title.errorMessage.value"
            label="Título del artículo:"
            clearable
          ></v-text-field>
  
          <!-- Añadir descripción del artículo -->
          <v-text-field
            v-model="description.value.value"
            :counter="20"
            :error-messages="description.errorMessage.value"
            label="Descripción del artículo:"
            clearable
          ></v-text-field>
  
          <!-- Términos y condiciones -->
          <v-checkbox
            v-model="checkbox.value.value"
            :error-messages="checkbox.errorMessage.value"
            label="¿Aceptas los términos y condiciones?"
            type="checkbox"
            value="1"
          ></v-checkbox>
  
          <!-- Botón Enviar -->
          <v-btn class="me-4" type="submit">
            Enviar
          </v-btn>
  
          <!-- Botón reiniciar formulario -->
          <v-btn @click="handleReset">
            Borrar Formulario
          </v-btn>
        </form>
      </v-card>
    </div>
  </template>
  
  <script>
  import { useField, useForm } from 'vee-validate'
  import { useFetch } from 'nuxt/app'
  
  export default {
    setup() {
      const { handleSubmit, handleReset } = useForm({
        validationSchema: {
          checkbox(value) {
            if (value === '1') return true
            return 'Debes aceptar los términos y condiciones.'
          },
        },
      })    
      const imageURL = useField('imageURL')
      const title = useField('title')
      const description = useField('description')
      const checkbox = useField('checkbox')
  
      const submit = handleSubmit(async values => {
        try {
          const { data: db, error, status } = await useFetch('/api/articles/', {
            method: 'POST',
            timeout: 15000,
            body: {
              imageURL: imageURL.value.value, // Send the URL directly
              title: title.value.value,
              description: description.value.value,
            }
          });
          
          // Handle success or error response
          if (status === 200) {
            console.log('Article created successfully:', db);
            // Redirect or show a success message
          } else {
            console.error('Failed to create article:', error);
            // Show an error message
          }
        } catch (error) {
          console.error('Error creating article:', error);
        }
      });
  
      return {
        handleSubmit,
        handleReset,
        imageURL,
        title,
        description,
        checkbox,
        submit
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any scoped styles if needed */
  </style>
  