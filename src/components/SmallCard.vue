<template>
  <v-card
    elevation="2"
    class="my-card rounded-lg hover-card card-background d-flex flex-column justify-center"
    @click="handleClick"
  >
    <v-card-title class="headline mt-6 secondary-color">{{ title }}</v-card-title>
    <v-card-text class="d-flex align-center justify-center text-center flex-grow-1 primary-color">
      <div>
        <slot name="content"></slot>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "SmallCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: null,
    },
    type: {
      type: String, // 'external' ou 'mailto'
      default: "external",
    },
  },
  methods: {
    handleClick() {
      if (!this.link) return;

      if (this.type === "mailto") {
        window.location.href = this.link;
      } else {
        window.open(this.link, "_blank");
      }
    },
  },
};
</script>

<style scoped>
.my-card {
  width: 100%; /* Ocupa 100% da largura do contêiner pai */
  max-width: 300px; /* Largura máxima para telas grandes */
  min-height: 180px;
  cursor: pointer;
  transition: all 0.3s ease;  
  align-items: center; 
  margin: 0 auto; /* Centraliza o card horizontalmente */
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

/* Ajustes de responsividade */
@media (max-width: 600px) {
  .my-card {
    min-height: 160px; /* Altura menor para telas pequenas */
  }

  .headline {
    font-size: 1.25rem !important; /* Tamanho da fonte menor para telas pequenas */
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .my-card {
    min-height: 170px; /* Altura intermediária para tablets */
  }

  .headline {
    font-size: 1.5rem !important; /* Tamanho da fonte intermediário para tablets */
  }
}
</style>