<template>
  <button class="button" :class="btnStyle" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.button {
  font: inherit;
  border-radius: 5px;
  color: #fffffb;
  margin: 7px 10% 8px 10%;
  border: none;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  outline: none;
  transition: all 200ms ease-in-out;
}

.button:hover {
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  transform: translateY(2px);
  -webkit-animation: gradientBG 1.5s ease-in-out forwards;
  animation: gradientBG 1.5s ease-in-out forwards;
  cursor: pointer;
}
.button:active {
  box-shadow: 3px 3px 3px rgba(0,0,0,0.5);
  transform: translateY(4px);
}

.approve {
  background-color: #7abe8f;
}

.cancel {
  background-color: #cd4a45;
}
</style>
