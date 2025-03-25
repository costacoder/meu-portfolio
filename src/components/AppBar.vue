<template>
    <v-app-bar flat>
      <template #prepend>
        <v-btn icon @click="$emit('toggle-drawer')">
          <v-icon class="secondary-color">mdi-menu</v-icon>
        </v-btn>
      </template>
  
      <template v-slot:append>
        <v-btn icon="mdi-github" class="mr-0 secondary-color" @click="openGithub" />
        <v-btn icon="mdi-whatsapp" class="mr-0 secondary-color" @click="openWhatsApp" />
        <v-btn icon="mdi-email-outline" class="secondary-color" @click="openEmail" />
      </template>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    emits: ['toggle-drawer'],
    methods: {
      openGithub() {
        window.open('https://github.com/costacoder', '_blank');
      },
      openWhatsApp() {
        const phone = '5516991731152';
        const msg = 'Olá, vim pelo seu portfólio!';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      },
      openEmail() {
        window.location.href = 'mailto:acosta.coder@gmail.com';
      },
    },
  };
  </script>
  
  <style scoped>
  .v-app-bar {
    background-color: #f4f5fa !important;
  }
  </style>