<template>
  <v-card class="mx-auto mt-5" max-width="900">
    <data-table/>
  </v-card>
</template>

<script>
// @ is an alias to /src
import DataTable from '../components/DataTable.vue'

export default {
  name: 'DataTables',
  components: {
    DataTable
  }
}
</script>