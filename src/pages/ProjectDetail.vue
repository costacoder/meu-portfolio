<template>
  <v-container class="py-10">
    <v-row>
      <!-- Carrossel de Imagens -->
      <v-col cols="12" md="6">
        <v-sheet elevation="2" class="rounded-lg overflow-hidden carousel-shadow-fix">
          <v-carousel
            cycle
            show-arrows
            hide-delimiter-background
            class="ma-0 pa-0 carousel-responsive"
            color="transparent"
          >
            <v-carousel-item v-for="(img, i) in project.images" :key="i">
              <v-img
                :src="img"
                class="cursor-pointer"
                height="100%"
                cover
                @click="openImage(img)"
              />
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </v-col>

      <!-- Título e Descrição -->
      <v-col cols="12" md="6">
        <h1 class="text-h4 font-weight-bold secondary-color mb-4">{{ project.title }}</h1>
        <p class="primary-color text-justify mb-4">{{ project.description }}</p>

        <!-- Funcionalidades -->
        <div v-if="project.features && project.features.length">
          <h2 class="text-h6 font-weight-bold secondary-color mb-2">Funcionalidades:</h2>
          <ul class="primary-color">
            <li v-for="(feature, index) in project.features" :key="index">
              {{ feature }}
            </li>
          </ul>
        </div>

        <!-- Tecnologias -->
        <div v-if="project.tech && project.tech.length" class="mt-6">
          <h2 class="text-h6 font-weight-bold secondary-color mb-2">Tecnologias usadas:</h2>
          <v-chip-group column>
            <v-chip
              v-for="(item, index) in project.tech"
              :key="index"
              class="ma-1 primary-color"
            >
              {{ item }}
            </v-chip>
          </v-chip-group>
        </div>

        <!-- Botões -->
        <div class="mt-6">
          <v-btn
            @click="$router.back()"
            variant="outlined"
            :style="{ minWidth: '150px' }"
            class="secondary-color"
          >
            Voltar
          </v-btn>
        </div>
      </v-col>
    </v-row>

    <!-- Dialog (Lightbox) para Imagem Expandida -->
    <v-dialog v-model="dialog" max-width="90vw">
      <v-card class="rounded-xl">
        <v-img :src="selectedImage" aspect-ratio="16/9" contain />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import naObraImg from "@/assets/na-obra.png"
import naObraImg2 from "@/assets/na-obra-2.png"
import listinhaImg from "@/assets/listinha.png"
import formuladorImg from "@/assets/formulador.png"
import formuladorImg2 from "@/assets/formulador-2.png"

export default {
  data() {
    return {
      project: null,
      dialog: false,
      selectedImage: null
    }
  },
  methods: {
    openImage(image) {
      this.selectedImage = image
      this.dialog = true
    }
  },
  created() {
    const id = this.$route.params.id
    const projects = [
      {
        id: "na-obra",
        title: "na Obra",
        images: [naObraImg, naObraImg2],
        description: `Aplicativo para medição de obras. A ferramenta essencial para medições precisas em projetos de pintura.
        Desenvolvido com Vue.js, permite calcular áreas, gerar PDFs e enviar orçamentos via WhatsApp.`,
        features: [
          "Cálculo automático de área",
          "Relatórios em PDF",
          "Envio direto via WhatsApp",
          "Armazenamento local (cache)"
        ],
        tech: ["Vue.js", "HTML", "CSS", "JavaScript"],
      },
      {
        id: "listinha",
        title: "Listinha",
        images: [listinhaImg],
        description: `App de listas de compras para mercado com sincronização em tempo real via Firebase Realtime Database.`,
        features: [
          "Criação de listas compartilháveis",
          "Atualização em tempo real",
          "Visual simples e intuitivo"
        ],
        tech: ["Vue.js", "Firebase", "CSS", "JavaScript"],
      },
      {
        id: "formulador",
        title: "Formulador",
        images: [formuladorImg, formuladorImg2],
        description: `Aplicativo para gerar fórmulas e auxiliar nas produções com passo a passo e timers integrados.`,
        features: [
          "Formulário com seleção dinâmica",
          "confirmadores de pesagem e adição",
          "Passo a passo",
          "Timer integrado",
          "Dados seguros"
        ],
        tech: ["Vue.js", "Firebase Firestore", "JavaScript"],
      }
    ]

    this.project = projects.find(p => p.id === id)

    if (!this.project) {
      this.$router.replace('/not-found')
    }
  }
}
</script>

<style scoped>
ul {
  padding-left: 1.2rem;
  list-style-type: disc;
}

/* Suaviza visual das bordas com leve sombra interna */
.carousel-shadow-fix {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), inset 0 0 6px rgba(0, 0, 0, 0.05);
}

/* Responsividade do carrossel */
.carousel-responsive {
  height: 400px;
}

@media (max-width: 600px) {
  .carousel-responsive {
    height: 60vw; /* Altura proporcional no mobile */
  }
}
</style>
