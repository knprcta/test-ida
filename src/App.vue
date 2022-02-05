<template>
  <base-grid />
</template>

<script>
import BaseGrid from '@/components/BaseGrid.vue';

export default {
  name: "App",
  components: {
    BaseGrid,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  background: rgba(255, 254, 251, 0.8);
  padding: 32px;
  box-sizing: border-box;
  color: #3f3f3f;
}
</style>
