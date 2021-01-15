<template>
  <div>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="details"
        hide-default-footer
        class="elevation-1"
      />
    </v-card-text></div>
</template>

<script>
export default {
  props: ['details'],
  data() {
    return {
      headers: [{ text: 'Value', value: 'value' }, { text: 'Date', value: 'date' }, { text: 'Info', value: 'description' }]
    }
  }
}
</script>
