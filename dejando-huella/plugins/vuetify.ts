// import this after install `@mdi/font` package

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    icons: {
      defaultSet: 'mdi',
    },
    theme: {
        defaultTheme: 'light',
    },
  })
  app.vueApp.use(vuetify)
})