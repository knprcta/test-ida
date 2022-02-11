<template>
  <div class="list-container">
    <button class="list-sort btn">
      По умолчанию
      <img src="@/assets/images/arrow.svg" alt="↓" class="list-sort-arrow" />
    </button>
    <transition-group class="list" name="list" tag="ul">
      <li class="list-item" v-for="item in reversedItems" :key="item.id">
        <img :src="item.image" :alt="item.name" class="list-item-image" />
        <div class="list-item-wrapper">
          <p class="list-item-name no-margin">{{ item.name }}</p>
          <p class="list-item-description no-margin">
            {{ item.description }}
          </p>
          <p class="list-item-price no-margin">
            {{ item.price.toLocaleString() }} руб.
          </p>
        </div>
        <button class="list-item-delete-btn btn">
          <img
            src="@/assets/images/trash.svg"
            alt="Кнопка удаления"
            class="list-item-delete-btn-icon"
          />
        </button></li
    ></transition-group>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
  },
  computed: {
    reversedItems() {
      return [...this.items].reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
.list-container {
  display: flex;
  flex-direction: column;
  gap: $g_l;
}
.list-sort {
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 5px;
  background: $back;
  border: $border;
  border-radius: $radius;
  box-shadow: $shadow_small;
  color: $grey;
  font-size: $font_s;
  padding: $p_s $p_m;
}
.list-sort-arrow {
  transform: rotate(45deg);
}
.list {
  display: grid;
  margin: 0;
  padding: 0;
  gap: $g_l;
  grid-template-columns: $grid_list;
  grid-auto-rows: 1fr;
}
.list-item {
  display: flex;
  flex-direction: column;
  position: relative;
  background: $back;
  border-radius: $radius;
  box-shadow: $shadow_big;
  transition: all 2s ease;
}
.list-item-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: $radius $radius 0 0;
}
.list-item-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  gap: $g_l;
  padding: $p_m $p_m $p_l;
}
.list-item-name {
  font-size: $font_l;
  font-weight: $font_bold;
}
.list-item-description {
  min-height: 80px;
  font-size: $font_m;
}
.list-item-price {
  font-size: $font_xl;
  font-weight: $font_bold;
  padding-top: $p_m;
}
.no-margin {
  margin: 0;
}
.list-item-delete-btn {
  background: $red;
  border: $border;
  border-radius: $radius_big;
  box-shadow: $shadow_xsmall;
  padding: $p_xs;
  position: absolute;
  font-size: 0;
  right: -8px;
  top: -8px;
  visibility: hidden;
  opacity: 0;
}

.list-item:hover {
  .list-item-delete-btn {
    visibility: visible;
    opacity: 1;
  }
}

.list-move {
  transition: all 1s ease;
}
</style>