<template>
  <div class="list-container">
    <select class="list-sort" v-model="selected">
      <option disabled>Сортировка:</option>
      <option value="default">По умолчанию</option>
      <option value="byMinPrice">Сначала недорогие</option>
      <option value="byMaxPrice">Сначала дорогие</option>
      <option value="byName">По наименованию</option>
    </select>
    <transition-group class="list" name="fade" tag="ul">
      <li class="list-item" v-for="item in sortedItems" :key="item.id">
        <img :src="item.image" :alt="item.name" class="list-item-image" />
        <div class="list-item-wrapper">
          <p class="list-item-name no-margin">{{ item.name }}</p>
          <p class="list-item-description no-margin">
            {{ item.description }}
          </p>
          <p class="list-item-price no-margin">
            {{ Number(item.price).toLocaleString() }} руб.
          </p>
        </div>
        <button
          class="list-item-delete-btn btn"
          @click="deleteFromList(item.id)"
        >
          <img
            src="@/assets/images/trash.svg"
            alt="Кнопка удаления"
            class="list-item-delete-btn-icon"
          />
        </button>
      </li>
    </transition-group>
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
  data() {
    return {
      selected: "default",
    };
  },
  computed: {
    reversedItems() {
      return [...this.items].reverse();
    },
    sortedItems() {
      switch (this.selected) {
        case "default":
          return [...this.items].reverse();
        case "byMinPrice":
          return [...this.items].sort((a, b) => a.price > b.price ? 1 : -1);
        case "byMaxPrice":
          return [...this.items].sort((a, b) => a.price > b.price ? -1 : 1);
        case "byName":
          return [...this.items].sort((a, b) => a.name > b.name ? 1 : -1);
      }
      return this.items;
    },
  },
  methods: {
    deleteFromList(id) {
      this.$emit("delete", id);
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
  background: $back;
  border: $border;
  border-radius: $radius;
  box-shadow: $shadow_small;
  color: $grey;
  font-size: $font_s;
  border-width: 8.75px 16px;
  border-style: solid;
  border-color: transparent;
  outline: none;
}
.list {
  display: grid;
  position: relative;
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
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0px);

  &:hover {
    .list-item-delete-btn {
      visibility: visible;
      opacity: 1;
    }
  }
}
.list-item-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: $radius $radius 0 0;
}
.list-item-wrapper {
  display: flex;
  box-sizing: border-box;
  height: calc(100% - 200px);
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

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-leave-active {
  transition: all 0s;
  opacity: 0;
  transform: translateY(0);
  position: absolute;
}

.fade-move {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  @for $i from 1 through 15 {
    &:nth-child(#{$i}) {
      transition: transform 0.4s #{$i * 0.1}s cubic-bezier(0.77, 0, 0.175, 1);
    }
  }
}
</style>