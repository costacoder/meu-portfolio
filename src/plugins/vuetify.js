// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
  },
  defaults: {
    global: {
      style: {
        fontFamily: 'Poppins, sans-serif', // Fonte padrão para todos os componentes
      },
    },
    VBtn: {
      style: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500, // Peso da fonte para botões
      },
    },
    VCardTitle: {
      style: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 600, // Peso da fonte para títulos de cards
      },
    },
    VCardSubtitle: {
      style: {
        fontFamily: 'Poppins, sans-serif',
        fontWeight: 500,
      },
    },
    VTextField: {
      style: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
    VTextarea: {
      style: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
    VChip: {
      style: {
        fontFamily: 'Poppins, sans-serif',
      },
    },
  },
});