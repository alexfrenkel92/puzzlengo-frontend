<template>
  <div>
    <about />
    <div class="divider div-transparent" />
    <how-it-works />
    <div class="divider div-transparent" />
    <benefits />
  </div>
</template>

<style scoped>
.divider {
  position: relative;
  margin: 20px 0 20px 0;
  height: 1px;
}
.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
.div-transparent:before {
  content: "";
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent,
    rgb(48, 49, 51),
    transparent
  );
}
</style>
