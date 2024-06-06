// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  //...
  devtools: { enabled: true },
  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI,
    awsAccessKeyId: process.env.AWS_ACCESS_KEY_ID,
    awsSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    awsRegion: process.env.AWS_REGION,
    awsBucketName: process.env.AWS_BUCKET_NAME,
    
  },
  css:[
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css"
  ],
  alias: {
    "@": resolve(__dirname, "/")
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
    '@vee-validate/nuxt',
    'nuxt-icon',
  ],
  plugins: [
  
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
