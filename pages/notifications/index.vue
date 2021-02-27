<template>
  <div class="notification-container">
    <notifications />
    <calendar />
  </div>
</template>

<style scoped>
  .notification-container{
    display: flex;
    width: 80%;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 20px 10px;
  }
  @media screen and (max-width: 1400px) {
    .notification-container {
      width: 100%;
    }
  }
</style>
