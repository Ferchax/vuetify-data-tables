<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <data-table/>
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
    drawer: null,
    items: [
      { title: 'Data-Table', icon: 'mdi-table', to: '/'},
      { title: 'Tabs', icon: 'mdi-tab', to: '/tabs'}
    ]
  }),
};
</script>
