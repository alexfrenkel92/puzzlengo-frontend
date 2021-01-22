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
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-switch
              v-model="item.allowed"
              class="ml-4 mt-4"
              :label="item.permission"
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <span>{{ item.info }}</span>
        </v-tooltip>
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
          allowed: true,
          info: 'By selecting this you agree to share your location information. For further information please read the terms and conditions.'
        },
        {
          permission: 'Heartrate',
          allowed: true,
          info: 'By selecting this you agree to share your heartrate information. For further information please read the terms and conditions.'
        },
        {
          permission: 'Steps',
          allowed: true,
          info: 'By selecting this you agree to share your steps information. For further information please read the terms and conditions.'
        },
        {
          permission: 'Blood pressure',
          allowed: false,
          info: 'By selecting this you agree to share your blood pressure information. For further information please read the terms and conditions.'
        },
        {
          permission: 'Sleep data',
          allowed: true,
          info: 'By selecting this you agree to share your sleep information. For further information please read the terms and conditions.'
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
