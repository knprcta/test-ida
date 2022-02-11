<template>
  <div class="base-grid">
    <goods-add-form @save="addItem"/>
    <goods-list :items="goods" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import GoodsAddForm from "@/components/GoodsAddForm.vue";
import GoodsList from "@/components/GoodsList.vue";
export default {
  components: {
    GoodsAddForm,
    GoodsList,
  },
  data() {
    return { goods: sourceData };
  },
  methods: {
    addItem(eventData) {
      const newItem = {
        ...eventData.newItem,
      };
      newItem.id = this.goods.length + 1;
      this.goods.push(newItem);
    },
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