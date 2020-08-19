<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "@/components/planetas/List";

export default {
  name: "HelloWorld",
  components: { List }
};
</script>
