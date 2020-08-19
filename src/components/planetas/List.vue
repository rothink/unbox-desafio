<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h2 id="title" class="pt-7 pb-7">Planetas</h2>
        <v-skeleton-loader type="table" v-if="loading"></v-skeleton-loader>
        <div v-if="!loading">
          <v-col cols="12" sm="23">
            <v-text-field
              v-model="search"
              label="Buscar pelo nome"
              solo
            ></v-text-field>
          </v-col>
          <v-simple-table dense>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Nome</th>
                  <th class="text-left">Terreno</th>
                  <th class="text-left">Diâmetro</th>
                  <th class="text-left">Clima</th>
                  <th class="text-center">Filmes</th>
                  <th class="text-center">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="planeta in planetas.results" :key="planeta.url">
                  <td class="text-left">
                    <strong>{{ planeta.name }}</strong>
                  </td>
                  <td class="text-left">{{ planeta.terrain }}</td>
                  <td class="text-left">{{ planeta.diameter }}</td>
                  <td class="text-left">{{ planeta.climate }}</td>
                  <td class="text-center">
                    <FilmeList v-bind:propsFilmes="planeta.films" />
                  </td>
                  <td class="text-center">
                    <v-btn
                      class="ma-2"
                      color="primary"
                      dark
                      @click="detalharPlaneta(planeta)"
                    >
                      Detalhar
                      <v-icon right>search</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-pagination
            v-model="page"
            :length="planetas.count / 10"
            @input="changePage"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Planetas from "@/api/planetas";
import FilmeList from "@/components/filmes/List";
import helper from "@/helper/index";

export default {
  components: { FilmeList },
  data: () => ({
    filter: {
      name: "",
      page: 1
    },
    page: 1,
    search: "",
    loading: false,
    planetas: []
  }),
  methods: {
    async getPlanetas() {
      let filterUrl = helper.getFilterURL(this.getFilter());
      let { data } = await Planetas.getAll(filterUrl);
      data.results = helper.sortArrayObject(data.results);
      data.results = helper.filterArrayObject(this.filter, data.results);
      this.planetas = data;
      this.loading = false;
    },
    getFilter() {
      let filter = this.filter;
      filter.page = this.page;
      return filter;
    },
    detalharPlaneta(planeta) {
      //TODO verifica a chamada do helper ¬¬
      const id = helper.getIdByUrl(planeta.url);
      this.$router.push(`/detalhar/${id}`);
    },
    changePage() {
      this.clearSearch();
      this.loading = true;
      this.getPlanetas();
    },
    clearSearch() {
      this.search = "";
    }
  },
  beforeMount() {
    this.loading = true;
    this.getPlanetas();
  },
  watch: {
    search: function(value) {
      this.filter.name = value;
      this.getPlanetas();
    }
  }
};
</script>
