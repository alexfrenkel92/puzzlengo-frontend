<template>
  <v-navigation-drawer v-if="!isMobile">
    <!-- permanent :mini-variant="isMobile" -->
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" :to="item.to" nuxt>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['progress'],
  data() {
    return {
      items: [
        {
          title: 'Account Settings',
          subtitle: 'Personal information, notifications',
          icon: 'mdi-account',
          to: '/settings/account'
        },
        {
          title: 'Permissions',
          subtitle: 'Location, health, activity information',
          icon: 'mdi-lock',
          to: '/settings/permissions'
        },
        {
          title: 'Appearance',
          subtitle: 'Color mode, font size, language',
          icon: 'mdi-heart',
          to: '/settings/appearance'
        }
      ]
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.includes(this.$mq)
    }
  }
}
</script>

<style scoped>
.v-navigation-drawer {
  width: 350px !important;
  min-width: 60px !important;
  height: auto !important;
}
.v-navigation-drawer--mini-variant {
  width: 60px !important;
}
</style>
