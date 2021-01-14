<template>
  <v-slide-group>
    <v-slide-item
      v-for="(item, i) in coupons"
      :key="i"
      cycle
    >
      <v-card
        class="mx-2"
        max-width="250"
        outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ item.company }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ item.value }} points
            </v-list-item-title>
            <v-list-item-subtitle>{{ item.info }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
            tile
            size="80"
            color="grey"
          />
        </v-list-item>

        <v-card-actions>
          <v-btn>
            Get this offer
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  data() {
    return {
      coupons: [
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' },
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' },
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' },
        { company: 'Amazon', value: 30, info: 'Free delivery' },
        { company: 'Amazon', value: 120, info: '5% off' },
        { company: 'Nike', value: 300, info: '20% off' }
      ]
    }
  }
}
</script>
