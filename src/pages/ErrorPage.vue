<template>
    <v-container class="error-page">
      <v-row justify="center" align="center">
        <v-col cols="12" md="6" class="text-center">
          <v-icon size="100" class="primary-color mb-10">mdi-alert-circle-outline</v-icon>
          <h1 class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 font-weight-bold mb-10 text-center secondary-color">404 - Página não encontrada</h1>
          <p class="text-body-1 mt-2 primary-color">
            Oops! Parece que a página que você está procurando não existe.
          </p>
          <v-btn class="mt-4 secondary-color" @click="goHome">
            Voltar para a página inicial
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const goHome = () => {
    router.push({ name: "home" }); // Redireciona para a página inicial
  };
  </script>
  
  <style scoped>
  .error-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>