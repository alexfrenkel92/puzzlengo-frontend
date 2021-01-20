<template>
  <v-slide-group show-arrows>
    <v-slide-item
      v-for="(item, i) in coupons"
      :key="i"
    >
      <v-card
        class="mx-2"
        max-width="170"
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
        </v-list-item>

        <v-card-actions>
          <AppButton v-if="item.value<total" class="action-btn" btn-style="approve">
            Get this offer
          </AppButton>
          <AppButton v-else class="action-btn" btn-style="cancel" @click="getMore">
            Get more ponts
          </AppButton>
        </v-card-actions>
      </v-card>
    </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['coupons', 'total'],
  methods: {
    getMore() {
      this.$emit('getMore')
    }
  }
}
</script>

<style scoped>
  .action-btn{
    padding: 5px;
    width: 130px !important;
  }
</style>
