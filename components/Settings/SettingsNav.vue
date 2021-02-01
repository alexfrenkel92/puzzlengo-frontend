<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          <ProfileInfo :progress="progress" />
        </v-list-item-title>

      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.to"
        nuxt
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <!--<nuxt-link :to="item.to">-->
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
          <!--</nuxt-link>-->
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import ProfileInfo from '@/components/Settings/ProfileInfo'

export default {
  components: {
    ProfileInfo
  },
  props: ['progress'],
  data() {
    return {
      items: [
        { title: 'Account Settings', subtitle: 'Personal information, notifications', icon: 'mdi-account', to: '/profile/settings/account' },
        { title: 'Permissions', subtitle: 'Location, health, personal information', icon: 'mdi-lock', to: '/profile/settings/permissions' },
        { title: 'Appearance', subtitle: 'Color mode, font size, language', icon: 'mdi-heart', to: '/profile/settings/appearance' }
      ],
      right: null
    }
  }
}
</script>

<style scoped>
  .v-navigation-drawer{
    width: 350px !important;
  }
  #profileInfo{
    margin: 20px 0px;
  }
</style>
