<template>
  <base-grid />
</template>

<script>
import BaseGrid from "@/components/BaseGrid.vue";

export default {
  name: "App",
  components: {
    BaseGrid,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap");
@import "./assets/styles/normalize.css";

#app {
  min-height: 100vh;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-weight: $font_normal;
  background: $back_main;
  line-height: $font_line;
  color: $dark;
}
.btn {
  transition: all 0.4s ease;
  outline: none;
}
.btn:hover {
  cursor: pointer;
  box-shadow: $shadow_hover;
  transform: scale(1.1);
}
.btn:focus {
  box-shadow: $shadow_hover;
  transform: scale(1.1);
}
</style>
