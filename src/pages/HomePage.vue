<template>
  <v-container fluid class="pa-0">
    <!-- Hero Banner -->
    <div class="hero-banner d-flex align-center justify-center flex-column text-center">
      <img :src="logo" alt="Logo" style="max-width: 200px">
      <h1 class="text-h4 text-sm-h3 text-md-h2 mb-3 secondary-color">Bem-vindo ao meu Portfólio</h1>
      <p class="text-body-1 mb-6 primary-color">
        Aqui você encontrará informações sobre mim, meus projetos, experiências e formas de contato.
      </p>
      
      <v-row class="mt-4" justify="center" align="center" no-gutters style="gap: 16px;">
        <v-col cols="auto" class="d-flex justify-center">
          <v-btn 
            class="secondary-color"
            :to="{ name: 'projects' }"
            variant="outlined"
            @mouseover="hover.projects = true"
            @mouseleave="hover.projects = false"
            :style="{ minWidth: '150px' }"
          >
            <v-icon v-if="hover.projects">mdi-xml</v-icon>
            <span v-else>Ver Projetos</span>
          </v-btn>
        </v-col>

        <v-col cols="auto" class="d-flex justify-center">
          <v-btn
            class="secondary-color"
            :to="{ name: 'about' }"
            variant="outlined"
            @mouseover="hover.about = true"
            @mouseleave="hover.about = false"
            :style="{ minWidth: '150px' }"
          >
            <v-icon v-if="hover.about">mdi-account-tie</v-icon>
            <span v-else>Sobre Mim</span>
          </v-btn>
        </v-col>
      </v-row>

    </div>

    <!-- Projetos em Destaque -->
    <v-container fluid class="mt-10 px-4">
      <h2 class="text-h5 font-weight-medium mb-4 text-center secondary-color">Projetos em Destaque</h2>
      <v-row justify="center" align="stretch" class="pa-4">
        <v-col cols="12" sm="6" md="3" v-for="(project, index) in featuredProjects" :key="index">
          <v-card 
            class="rounded-lg hover-card card-background d-flex flex-column justify-center"
            elevation="2"
            color="#ffffff"
            :style="{ minHeight: '180px' }"
          >
            <v-card-title class="text-h6 mt-3 font-weight-bold secondary-color">{{ project.title }}</v-card-title>
            <v-card-text class="primary-color">{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn :to="{ name: 'project-detail', params: { id: project.id } }" variant="text" class="secondary-color">
                Ver mais
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import teste2 from "@/assets/teste2.png"
import logo from '@/assets/logo.png'  

export default {
  name: "HomePage",  
  data() {
    return {
      logo,
      hover: {
        projects: false,
        about: false,
      },
      drawerWidth: "56px",
      featuredProjects: [
        {
          id: "na-obra",
          title: "na Obra",
          description: "Aplicativo para medição de obras.",
          image: teste2,
        },
        {
          id: "listinha",
          title: "Listinha",
          description: "Lista de mercado, conectado ao realtime database.",
          image: teste2,
        },
        {
          id: "formulador",
          title: "Formulador",
          description: "Aplicativo para gerar fórmulas e auxiliar nas produções.",
          image: teste2,
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-banner {
  padding: 80px 20px 60px;
  transition: all 0.3s ease;
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
