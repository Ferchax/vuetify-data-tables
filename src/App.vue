<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    ></v-app-bar>

    <v-main>
      <data-table/>
      <!--<simple-data-table/>-->
    </v-main>
  </v-app>
</template>

<script>
import DataTable from './components/DataTable.vue';
//import SimpleDataTable from './components/SimpleDataTable.vue';

export default {
  name: 'App',

  components: {
    DataTable,
    //SimpleDataTable
  },

  data: () => ({
    //
  }),
};
</script>
