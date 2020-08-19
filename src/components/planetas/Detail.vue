<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-card
          :loading="loading"
          class="mx-auto my-12"
          max-width="800"
          elevation="15"
        >
          <v-card-actions class="float-left">
            <v-btn color="primary" text @click="voltar">
              Voltar
            </v-btn>
          </v-card-actions>
          <v-card-title class="justify-center">
            <h2>{{ planeta.name }}</h2>
          </v-card-title>
          <v-card-text>
            <v-row align="center" class="mx-0 justify-center">
              <v-rating
                :value="parseInt(planeta.surface_water)"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>
              <div class="grey--text ml-4">
                Diâmetro ({{ planeta.diameter }})
              </div>
            </v-row>
            <v-container class="grey lighten-5">
              <div class="my-4 subtitle-1">
                • Terreno: {{ planeta.terrain }}
                <br />
                • Clima: {{ planeta.climate }}
              </div>
              <v-row no-gutters>
                <v-col cols="12" lg="6" sm="6" md="6">
                  <v-card class="pa-2 pt-5" outlined tile>
                    <v-badge color="green" :content="planeta.rotation_period">
                      Período de rotação
                    </v-badge>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="6" sm="6" md="6">
                  <v-card class="pa-2 pt-5" outlined tile>
                    <v-badge color="green" :content="planeta.orbital_period">
                      Período de orbitação
                    </v-badge>
                  </v-card>
                </v-col>
                <v-col cols="12" lg="12" sm="12" md="12">
                  <v-card class="pa-2 pt-5" outlined tile>
                    <v-badge color="green" :content="planeta.population">
                      <strong>População</strong>
                    </v-badge>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-title id="title-residentes" class="justify-center">Residentes</v-card-title>
          <ResidentesList v-bind:propsResidentes="planeta.residents" />
          <v-divider class="mx-4"></v-divider>
          <v-card-actions>
            <v-btn color="primary" text @click="voltar">
              Voltar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Planetas from "@/api/planetas";
import ResidentesList from "@/components/residentes/List";

export default {
  components: { ResidentesList },
  data: () => ({
    loading: false,
    planeta: {}
  }),
  methods: {
    async getPlanetaById(id) {
      const { data } = await Planetas.getOne(id);
      this.loading = false;
      this.planeta = data;
    },
    voltar() {
      this.$router.push("/");
    }
  },
  beforeMount() {
    this.loading = true;
    const id = this.$route.params.id;
    this.getPlanetaById(id);
  }
};
</script>
