<template>
  <div class="goods-list">
    <select
      class="list-sort"
      v-model="selected"
      :class="{ hidden: items.length < 2 }"
    >
      <option disabled>Сортировка:</option>
      <option value="default">По умолчанию</option>
      <option value="byMinPrice">Сначала недорогие</option>
      <option value="byMaxPrice">Сначала дорогие</option>
      <option value="byName">По наименованию</option>
    </select>
    <transition name="el-fade" mode="out-in" appear>
      <p class="no-list" v-if="items.length === 0">← Добавьте товар</p>
      <transition-group v-else class="list-container" name="fade" tag="ul">
        <li class="list-item" v-for="item in sortedItems" :key="item.id">
          <img :src="item.image" :alt="item.name" class="list-item-image" />
          <div class="list-item-wrapper">
            <p class="list-item-name">{{ item.name }}</p>
            <p class="list-item-description">
              {{ item.description }}
            </p>
            <p class="list-item-price">
              {{ Number(item.price).toLocaleString() }} руб.
            </p>
          </div>
          <button class="list-item-delete" @click="deleteFromList(item.id)">
            <img
              src="@/assets/images/trash.svg"
              alt="Кнопка удаления"
              class="list-item-delete-icon"
            />
          </button>
        </li>
      </transition-group>
    </transition>
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
      showButton: false,
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
          return [...this.items].sort((a, b) => (a.price > b.price ? 1 : -1));
        case "byMaxPrice":
          return [...this.items].sort((a, b) => (a.price > b.price ? -1 : 1));
        case "byName":
          return [...this.items].sort((a, b) => (a.name > b.name ? 1 : -1));
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
.goods-list {
  display: flex;
  flex-direction: column;
  gap: size(4);
}
.list-sort {
  align-self: flex-end;
  background-color: color(back);
  background: url(../assets/images/arrow.svg) no-repeat;
  background-position: right center;
  border: 0;
  border-radius: size(1);
  box-shadow: shadow(sel);
  color: color(grey);
  font-size: font(3);
  outline: none;
  border-width: size(2.5) size(4);
  border-style: solid;
  border-color: transparent;
  padding-right: size(4);
}
.list-container {
  display: grid;
  position: relative;
  margin: 0;
  padding: 0;
  gap: size(4);
  grid-template-columns: grid(list);
  grid-auto-rows: 1fr;
}
.list-item {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: color(back);
  border-radius: size(1);
  box-shadow: shadow(div);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0px);

  &:hover {
    .list-item-delete {
      visibility: visible;
      opacity: 1;
    }
  }
}
.list-item-image {
  width: 100%;
  height: size(50);
  object-fit: cover;
  border-radius: size(1) size(1) 0 0;
}
.list-item-wrapper {
  display: flex;
  box-sizing: border-box;
  height: calc(100% - size(50));
  flex-direction: column;
  justify-content: space-between;
  word-break: break-word;
  gap: size(4);
  padding: size(4) size(4) size(6);
}
.list-item-name {
  font-size: font(5);
  font-weight: 600;
}
.list-item-description {
  min-height: size(20);
  font-size: font(4);
}
.list-item-price {
  font-size: font(6);
  font-weight: 600;
  padding-top: size(4);
}
.list-item-delete {
  background-color: color(red);
  border: 0;
  border-radius: size(2.5);
  box-shadow: shadow(btn);
  padding: size(2);
  position: absolute;
  font-size: 0;
  right: -(size(2));
  top: -(size(2));
  visibility: hidden;
  opacity: 0;

  &:hover {
    transform: scale(1.3);
  }
}

.no-list {
  font-size: font(7);
  padding: size(12);
  letter-spacing: font(0.5);
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
.el-fade-enter-active, .el-fade-leave-active {
  transition: opacity .5s ease
}

.el-fade-enter-from, .el-fade-leave-to {
  opacity: 0
}
.hidden {
  visibility: hidden;
  opacity: 0;
}
</style>