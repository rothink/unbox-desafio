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
        <v-list-item-group v-model="especies" color="indigo">
          <v-list-item v-for="(especie, i) in especies" :key="i" dense>
            <v-list-item-content>
              <v-list-item-title v-text="especie.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import Especies from "@/api/especies";
export default {
  props: {
    propsEspecies: null
  },
  data: () => ({
    especies: [],
    loading: false
  }),
  methods: {
    async getEspecie(especies) {
      especies.map(async url => {
        const id = window.helper.getIdByUrl(url);
        let { data } = await Especies.getOne(id);
        this.especies.push(data);
      });
      await setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  beforeMount() {
    this.loading = true;
    if (this.propsEspecies.length > 0) {
      this.getEspecie(this.propsEspecies);
    } else {
      this.loading = false;
    }
  }
};
</script>
