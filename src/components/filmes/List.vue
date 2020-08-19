<template>
  <v-container>
    <v-row class="text-center">
      <v-progress-linear
        color="blue"
        indeterminate
        rounded
        height="6"
        v-if="loading"
      ></v-progress-linear>
      <v-list flat v-if="!loading">
        <v-list-item-group v-model="filmes" color="indigo">
          <v-list-item v-for="(filme, i) in filmes" :key="i" dense>
            <v-list-item-content>
              <v-list-item-title v-text="filme.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/filmes";
export default {
  props: {
    propsFilmes: null
  },
  data: () => ({
    filmes: [],
    loading: false
  }),
  methods: {
    async getFilmes(filmes) {
      filmes.map(async url => {
        const id = window.helper.getIdByUrl(url);
        let { data } = await api.getOne(id);
        if (data) {
          this.filmes.push(data);
        }
      });
      await setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  beforeMount() {
    if (this.propsFilmes.length > 0) {
      this.getFilmes(this.propsFilmes);
      this.loading = true;
    }
  }
};
</script>
