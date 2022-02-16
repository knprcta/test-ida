<template>
  <div class="base-grid">
    <goods-editor @save="addItem" />
    <goods-list :items="goods" @delete="deleteItem" />
  </div>
</template>

<script>
import sourceData from "@/data.json";
import GoodsEditor from '@/components/GoodsEditor.vue';
import GoodsList from "@/components/GoodsList.vue";
export default {
  name: "App",
  components: {
    GoodsEditor,
    GoodsList
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

<style lang="scss">
#app {
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-weight: 400;
  line-height: 1.25;
  min-height: 100vh;
  background-color: color(back_main);
  color: color(dark);
}
</style>

<style lang="scss" scoped>
.base-grid {
  display: grid;
  grid-template-areas: "form list list list";
  margin: auto;
  max-width: 1440px;
  box-sizing: border-box;
  grid-template-columns: grid(app);
  gap: size(4);
  padding: size(8);
}
.goods-editor {
  grid-area: form;
}
.goods-list {
  grid-area: list;
}
</style>