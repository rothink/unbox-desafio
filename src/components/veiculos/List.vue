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
        <v-list-item-group v-model="veiculos" color="indigo">
          <v-list-item v-for="(veiculo, i) in veiculos" :key="i" dense>
            <v-list-item-content>
              <v-list-item-title v-text="veiculo.name"></v-list-item-title>
              <v-list-item-title v-text="veiculo.model"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
import api from "@/api/veiculos";
export default {
  props: {
    propsVeiculos: null
  },
  data: () => ({
    veiculos: [],
    loading: false
  }),
  methods: {
    async getVeiculos(veiculos) {
      veiculos.map(async url => {
        const id = window.helper.getIdByUrl(url);
        let { data } = await api.getOne(id);
        if (data) {
          this.veiculos.push(data);
        }
      });
      await setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  beforeMount() {
    this.loading = true;
    if (this.propsVeiculos.length > 0) {
      this.getVeiculos(this.propsVeiculos);
    } else {
      this.loading = false;
    }
  }
};
</script>
