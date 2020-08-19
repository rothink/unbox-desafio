<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-skeleton-loader
          class="mx-auto"
          max-width="700"
          type="table"
          v-if="loading"
        ></v-skeleton-loader>
        <v-simple-table dense v-if="!loading">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Nome</th>
                <th class="text-left">Cor do cabelo</th>
                <th class="text-left">Cor dos olhos</th>
                <th class="text-left">Gênero</th>
                <th class="text-center">Espécies</th>
                <th class="text-center">Veículos</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="residente in residentes" :key="residente.name">
                <td class="text-left">
                  <strong>{{ residente.name }}</strong>
                </td>
                <td>
                  <v-badge dot :color="residente.hair_color">
                    {{ residente.hair_color }}
                  </v-badge>
                </td>
                <td>
                  <v-badge dot :color="residente.eye_color">
                    {{ residente.eye_color }}
                  </v-badge>
                </td>
                <td>{{ residente.gender }}</td>
                <td class="text-center">
                  <ListEspecies v-bind:propsEspecies="residente.species" />
                </td>
                <td class="text-center">
                  <ListVeiculos v-bind:propsVeiculos="residente.vehicles" />
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Pessoas from "@/api/pessoas";
import ListEspecies from "@/components/especies/List";
import ListVeiculos from "@/components/veiculos/List";

export default {
  components: { ListEspecies, ListVeiculos },
  props: {
    propsResidentes: {
      type: Array
    },
    propsVeiculos: []
  },
  data: () => ({
    residentes: [],
    loading: false
  }),
  methods: {
    async getResidentes(residentes) {
      residentes.map(async url => {
        const id = window.helper.getIdByUrl(url);
        let { data } = await Pessoas.getOne(id);
        this.residentes.push(data);
      });
      await setTimeout(() => {
        this.loading = false;
      }, 500);
    }
  },
  beforeMount() {
    this.loading = true;
  },
  watch: {
    propsResidentes: function(val) {
      this.getResidentes(val);
    }
  }
};
</script>
