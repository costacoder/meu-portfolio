<template>
  <v-app>
    <!-- Componente do drawer -->
    <NavDrawer ref="drawer" @update:drawer-state="updateDrawerState" />
    
    <v-layout>
      <!-- Scrim para desfocar apenas o conteúdo de fundo -->
      <div v-if="isDrawerOpen" class="page-scrim" @click="toggleDrawer"></div>
      
      <!-- Barra de App com ação para abrir/fechar o drawer -->
      <AppBar @toggle-drawer="toggleDrawer" />
      
      <v-main>
        <v-container fluid>
          <slot />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import NavDrawer from '@/components/NavDrawer.vue'
import AppBar from '@/components/AppBar.vue'

export default {
  components: {
    NavDrawer,
    AppBar
  },
  data() {
    return {
      isDrawerOpen: false
    }
  },
  methods: {
    toggleDrawer() {
      this.$refs.drawer.toggleDrawer()
    },
    updateDrawerState(isOpen) {
      this.isDrawerOpen = isOpen
    }
  }
}
</script>

<style scoped>
.v-layout {
  transition: all 0.3s ease;
}

/* Scrim que desfoca apenas o conteúdo da página */
.page-scrim {
  position: fixed;
  inset: 0;
  z-index: 999; /* Abaixo do drawer (1001) e acima do conteúdo */
  backdrop-filter: blur(4px);  
  pointer-events: auto; /* Permite fechar o drawer ao clicar no scrim */  
}

</style>
