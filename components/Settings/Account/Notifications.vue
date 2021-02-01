<template>
  <div>

    <v-switch
      v-for="item in notifications"
      :key="item.title"
      v-model="item.value"
      inset
      :label="item.title"
    />

  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        { title: 'New survey', value: true },
        { title: 'Survey status change', value: true },
        { title: 'Credits received', value: true },
        { title: 'Credits spent', value: false }
      ]
    }
  }
}
</script>
