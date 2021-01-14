<template>
  <v-card class="mx-auto" max-width="300">
    <v-img :src="image" height="200px" />
    <v-card-title>
      {{ title }}
    </v-card-title>
    <v-card-subtitle>
      {{ subtitle }}
    </v-card-subtitle>
    <v-card-actions>
      <v-btn @click="$data.showLocal = !$data.showLocal"> Learn more </v-btn>
      <v-spacer />
      <v-btn icon @click="$data.showLocal = !$data.showLocal">
        <v-icon>{{ $data.showLocal ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="$data.showLocal">
        <v-divider />
        <v-card-text>
          {{ text }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['image', 'title', 'subtitle', 'text', 'show'],
  data() {
    return {
      showLocal: this.show
    }
  }
}
</script>
