<template>
  <div class="grid">
    <goods-add-form />
    <goods-list />
  </div>
</template>

<script>
import GoodsAddForm from "@/components/GoodsAddForm.vue";
import GoodsList from "@/components/GoodsList.vue";
export default {
  components: {
    GoodsAddForm,
    GoodsList,
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 3fr;
}
</style>