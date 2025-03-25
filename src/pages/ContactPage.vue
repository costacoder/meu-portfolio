<template>
  <v-container class="d-flex flex-column align-center">
    <h1 class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 font-weight-bold mb-10 text-center secondary-color">Contato</h1>
    <v-row justify="center">
      <!-- Card 1: WhatsApp -->
      <v-col cols="12" sm="6" md="4" class="pa-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <SmallCard
              v-bind="attrs"
              v-on="on"
              title="WhatsApp"
              icon="mdi-whatsapp"
              link="https://wa.me/5516991731152?text=Olá,%20vim%20pelo%20seu%20portfólio!"
              type="external"
            >
              <template #content>
                <p class="content-text">Precisa de um site ou webapp? Fale comigo!</p>
              </template>
            </SmallCard>
          </template>
          <span>Clique para abrir o link</span>
        </v-tooltip>
      </v-col>

      <!-- Card 2: E-mail -->
      <v-col cols="12" sm="6" md="4" class="pa-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <SmallCard
              v-bind="attrs"
              v-on="on"
              title="E-mail"
              icon="mdi-email-outline"
              link="mailto:acosta.coder@gmail.com"
              type="mailto"
            >
              <template #content>
                <p class="content-text">acosta.coder@gmail.com</p>
              </template>
            </SmallCard>
          </template>
          <span>Clique para enviar e-mail</span>
        </v-tooltip>
      </v-col>

      <!-- Card 3: GitHub -->
      <v-col cols="12" sm="6" md="4" class="pa-4">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <SmallCard
              v-bind="attrs"
              v-on="on"
              title="GitHub"
              icon="mdi-github"
              link="https://github.com/costacoder"
              type="external"
            >
              <template #content>
                <p class="content-text">Codar é bom demais!</p>
              </template>
            </SmallCard>
          </template>
          <span>Clique para abrir o link</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SmallCard from "@/components/SmallCard.vue";

export default {
  components: {
    SmallCard,
  },
};
</script>

<style scoped>
.content-text {
  white-space: pre-line; /* Preserva as quebras de linha (\n) */
}
</style>