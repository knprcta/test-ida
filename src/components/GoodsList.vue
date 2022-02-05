<template>
  <div class="container">
    <button class="sort-btn">Добавить товар</button>
    <ul class="list">
      <li class="list-item" v-for="item in goods" :key="item.id">
        <img :src="item.image" :alt="item.name" class="item-img" />
        <p class="item-name">{{ item.name }}</p>
        <p class="item-description">{{ item.description }}</p>
        <p class="item-price">{{ item.price }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      goods: sourceData,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.sort-btn {
  align-self: flex-end;
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0;
  margin: 0;
}
.list-item {
  display: flex;
  flex-direction: column;
  margin-right: 16px;
}
.list-item:nth-child(3n + 3) {
  margin: 0;
}
.item-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
</style>