<template>
  <div class="notification-container">
    <notifications />
    <calendar />
  </div>
</template>

<style scoped>
  .notification-container{
    display: flex;
    max-width: 1300px;
    margin: auto;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 1400px) {
    .notification-container {
      width: 100%;
    }
  }
</style>
