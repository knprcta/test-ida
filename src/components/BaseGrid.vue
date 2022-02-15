<template>
  <div class="base-grid">
    <goods-add-form @save="addItem" />
    <goods-list :items="goods" @delete="deleteItem" />
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
    return {
      goods: [],
    };
  },
  watch: {
    goods: {
      handler: function (newArr) {
        localStorage.setItem("goods", JSON.stringify(newArr));
      },
      deep: true,
    },
  },
  methods: {
    addItem(eventData) {
      const newItem = {
        ...eventData.newItem,
      };
      newItem.id = this.goods.length + 1;
      this.goods.push(newItem);
    },
    deleteItem(id) {
      this.goods = this.goods.filter((item) => item.id !== id);
    },
  },
  mounted() {
    this.goods = JSON.parse(localStorage.getItem("goods")) || sourceData;
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