<template>
  <div class="base-grid">
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

<style lang="scss" scoped>
.base-grid {
  display: grid;
  grid-template-areas: "form list list list";
  margin: auto;
  max-width: 1440px;
  box-sizing: border-box;
  grid-template-columns: $grid_base;
  gap: $g_l;
  padding: $p_xl;
}
.form-container {
  grid-area: form;
}
.list-container {
  grid-area: list;
}
</style>