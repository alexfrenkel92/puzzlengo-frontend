<template>
  <div>
    <h1 class="text-center display-1 font-weight-thin mb-4 mt-4">
      Personal information
    </h1>
    <form>
      <v-text-field v-model="personal.name" label="Name" readonly />
      <v-text-field v-model="personal.email" label="Email" />
      <v-text-field v-model="personal.phone" label="Phone" />
    </form>
    <hr>
    <h1 class="text-center display-1 font-weight-thin mb-4 mt-4">
      Permissions
    </h1>
    <v-row>
      <v-col v-for="(item, index) in permissions" :key="index">
        <v-switch
          v-model="item.allowed"
          class="ml-4 mt-4"
          :label="item.permission"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      permissions: [
        {
          permission: 'Location',
          allowed: true
        },
        {
          permission: 'Heartrate',
          allowed: true
        },
        {
          permission: 'Steps',
          allowed: true
        },
        {
          permission: 'Blood pressure',
          allowed: false
        },
        {
          permission: 'Sleep data',
          allowed: true
        }
      ],
      personal: {
        name: 'Your Name',
        email: 'your.email@address.com',
        phone: '06123456789'
      }
    }
  }
}
</script>
