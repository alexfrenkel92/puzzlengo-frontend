<template>
  <div>
    <h1 class="text-center display-1 font-weight-thin mb-4 mt-4">Personal information</h1>
    <form>
      <v-text-field
        v-model="personal.name"
        label="Name"
        readonly
      />
      <v-text-field
        v-model="personal.email"
        label="Email"
      />
      <v-text-field
        v-model="personal.phone"
        label="Phone"
      />
    </form>
    <hr>
    <h1 class="text-center display-1 font-weight-thin mb-4 mt-4">Permissions</h1>
    <v-row>
      <v-col>
        <v-switch
          v-model="permissions.location"
          class="ml-4 mt-4"
          label="Location"
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="permissions.heartrate"
          class="ml-4 mt-4"
          label="Heartrate"
        />
      </v-col>
      <v-col>
        <v-switch
          v-model="permissions.steps"
          class="ml-4 mt-4"
          label="Steps"
        />
      </v-col>
    </v-row>
    <hr>
    <h1 class="text-center display-1 font-weight-thin mb-4 mt-4">Page settings</h1>
    <v-switch
      v-model="$vuetify.theme.dark"
      class="ml-4 mt-4"
      label="Dark mode"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      permissions: {
        location: false,
        heartrate: true,
        steps: true
      },
      personal: {
        name: 'Your Name',
        email: 'your.email@address.com',
        phone: '06123456789'
      }
    }
  }
}
</script>
