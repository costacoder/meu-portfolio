<template>
  <v-container fluid class="pa-0">
    <!-- Projetos em Destaque -->
    <v-container fluid class="mt-14 px-4">
      <h1 
        class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 font-weight-bold mb-10 text-center secondary-color"
      >
        Projetos
      </h1>

      <v-row justify="center" align="stretch" class="pa-6 ga-0 custom-row"> 
        <v-col
          cols="12"
          sm="8"
          md="6"
          lg="4"
          v-for="(project, index) in featuredProjects"
          :key="index"
          class="d-flex"
        >
        <v-card
            class="rounded-lg hover-card card-background pa-4 mx-auto d-flex flex-column"
            elevation="3"
            color="#ffffff"
            style="width: 100%; max-width: 420px; min-width: 280px"
          >
            <v-img :src="project.image" height="240px" cover class="mb-4" />

            <v-card-title class="text-h6 font-weight-bold secondary-color mb-2">
              {{ project.title }}
            </v-card-title>

            <!-- Torna o texto expansível para ocupar espaço restante -->
            <v-card-text class="primary-color text-justify mb-4" style="flex-grow: 1;">
              {{ project.description }}
            </v-card-text>

            <!-- Mantém o botão sempre no fim do card -->
            <v-card-actions class="justify-end mt-auto">
              <v-btn
                :to="{ name: 'project-detail', params: { id: project.id } }"
                variant="text"
                class="secondary-color"
              >
                detalhes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import naObraImg from "@/assets/na-obra.png"
import listinhaImg from "@/assets/listinha.png"
import formuladorImg from "@/assets/formulador.png"

export default {
  name: "HomePage",  
  data() {
    return {
      featuredProjects: [
        {
          id: "na-obra",
          title: "na Obra",
          description: `Aplicativo para medição de obras.`,
          image: naObraImg,
        },
        {
          id: "listinha",
          title: "Listinha",
          description: `O companheiro de compras inteligente.`,
          image: listinhaImg,
        },
        {
          id: "formulador",
          title: "Formulador",
          description: `Aplicativo para gerar fórmulas e auxiliar nas produções.`,
          image: formuladorImg,
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-row {
  gap: 8px; /* Espaçamento personalizado entre os cards */
}

.custom-row .v-col {
  padding: 4px; /* Espaçamento interno das colunas */
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
}
.hover-card:hover {
  transform: scale(1.01);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  border: 1px solid #5e73d6;
}
</style>