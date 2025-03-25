<template>
  <v-container fluid class="pa-0">
    <v-container class="mt-10 px-4" style="overflow: visible;">
      <v-row justify="center">
        <v-col cols="12" md="8">
          <!-- Título principal -->
          <h1 class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 font-weight-bold mb-10 text-center secondary-color">Sobre Mim</h1>

          <!-- Descrição pessoal -->
          <p class="text-body-1 mb-4 primary-color">
            Meu nome é Alexandre Costa, sou desenvolvedor, apaixonado por tecnologia, inovação e resolução de problemas.
            Tenho experiência com desenvolvimento frontend e backend, tendo maior foco em front-end. Trabalhei com tecnologias como Vue.js, Vuetify, Python, FastAPI, entre outras.
          </p>

          <p class="text-body-1 mb-4 primary-color">
            Gosto de criar aplicações modernas, responsivas e com foco na experiência do usuário.
            Busco sempre aprender novas ferramentas, boas práticas e me manter atualizado com o mercado.
          </p>       
          <v-divider/>
            
          <!-- Tecnologias -->
          <h2 class="text-h6 font-weight-medium mt-8 mb-3 secondary-color">Tecnologias favoritas</h2>         
            
          <v-chip-group class="mb-6" column>
            <v-chip class="primary-color" prepend-icon="mdi-vuejs">Vue.js</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-vuetify">Vuetify</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-react">React</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-language-javascript">JavaScript</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-language-python">Python</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-nodejs">Node.js</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-fire">Firebase</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-database">SQLite / PostgreSQL</v-chip>
            <v-chip class="primary-color" prepend-icon="mdi-git">Git</v-chip>
          </v-chip-group>       

          <v-divider/>

          <!-- Soft Skills -->
          <h2 class="text-h6 font-weight-medium mb-3 mt-5 secondary-color">Soft Skills</h2>
          <ul class="text-body-1 primary-color mb-6">
            <li>Resolução de Problemas</li>
            <li>Trabalho em Equipe</li>
            <li>Comunicação Clara</li>
            <li>Autonomia e Proatividade</li>
            <li>Organização e Foco em Resultados</li>
          </ul>

          <v-divider/>

          <!-- Objetivo Profissional -->
          <h2 class="text-h6 font-weight-medium mt-5 mb-3 secondary-color">Objetivo Profissional</h2>
          <p class="text-body-1 primary-color mb-8">
            Atuar com desenvolvimento web e webapps, contribuindo com soluções modernas, acessíveis e escaláveis, e evoluir continuamente como profissional e pessoa.
          </p>
          
          <v-divider/>

          <v-container class="mt-10 ml-3 px-4" style="overflow: visible;">
            <v-row justify="left">
              <v-col cols="12" md="8">
                <h2 class="text-h6 font-weight-medium mb-3 secondary-color">Jornada de aprendizado</h2>
                <v-timeline side="end" align="start" density="compact"> <v-timeline-item
                    v-for="(item, index) in timeline"
                    :key="index"
                    :dot-color="item.color"
                    size="small"
                  >
                    <template #opposite>
                      <strong class="secondary-color">{{ item.year }}</strong>
                    </template>
                    <v-card elevation="2" class="pa-4">
                      <h3 class="text-subtitle-1 font-weight-bold primary-color">{{ item.title }}</h3>
                      <p class="text-body-2 primary-color">{{ item.description }}</p>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>

              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>

export default {
  name: "AboutPage",  
  data() {
    return {
      drawerWidth: "56px",
      timeline: [
        {
          year: "2025",
          title: "Projetos Profissionais com Vue.js",
          description: "Desenvolvimento diversos de aplicações modernas com Vue.js.",
          color: "#737373",
        },        
        {
          year: "2022",
          title: "Comunidade DevClub",
          description: "Entro na comunidade DevClub, aprendo muito sobre js, react e outras tecnologias, criando projetos com o professor Rodolfo",
          color: "#5e73d6",
        },
        {
          year: "2020",
          title: "Início dos estudos",
          description: "Após anos, volto a ter contato com a programação e inicio meus estudos com cursos em python.",
          color: "#737373",
        },
        {
          year: "2009",
          title: "Descobrindo a Programação",
          description: "Tenho meu primeiro contato com o mundo dos códigos, através de um amigo que me mostrou C#. Pouco depois fiz meu primeiro projeto com essa tecnologia",
          color: "#5e73d6",
        },
      ],
    };
  },
};
</script>

<style scoped>
.primary-color {
  color: #737373;
}

.secondary-color {
  color: #5e73d6;;
}

li {
  margin-left: 1.5%;
}
</style>
