<template>
  <v-navigation-drawer
    v-model="isDrawerOpen"
    temporary
    attach="#app" 
    class="nav-drawer"
  >
    <v-img
      :src="logoOpened"
      alt="Logo"
      class="logo mx-auto my-4"
    />
    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        :to="{ name: 'home' }"
        class="secondary-color"
      />
      <v-list-item
        prepend-icon="mdi-account-tie"
        title="Sobre mim"
        :to="{ name: 'about' }"
        class="secondary-color"
      />
      <v-list-item
        prepend-icon="mdi-xml"
        title="Projetos"
        :to="{ name: 'projects' }"
        class="secondary-color"
      />
      <v-list-item
        prepend-icon="mdi-at"
        title="Contato"
        :to="{ name: 'contact' }"
        class="secondary-color"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, watch, defineEmits, defineExpose } from 'vue'
import logoOpened from '@/assets/logo-nome.png'

const emit = defineEmits(['update:drawer-state'])
const isDrawerOpen = ref(false)

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value
}

watch(isDrawerOpen, (newVal) => {
  emit('update:drawer-state', newVal)
})

defineExpose({ toggleDrawer })
</script>

<style scoped>
.nav-drawer {
  background-color: #f4f5fa !important;
  z-index: 1001; /* Fica acima do scrim */
}

.logo {
  width: 150px;
  height: auto;
}
</style>
