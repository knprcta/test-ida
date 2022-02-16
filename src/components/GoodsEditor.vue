<template>
  <div class="goods-editor">
    <h1 class="form-heading">Добавление товара</h1>
    <VeeForm ref="form" class="form-container" v-slot="{ meta, errors }" @submit="save">
      <goods-editor-field
        label="Наименование товара"
        name="name"
        rules="required"
        placeholder="Введите наименование товара"
        dot
        :invalid="errors.name"
        v-model="name"
      />
      <goods-editor-field
        as="textarea"
        label="Описание товара"
        name="description"
        placeholder="Введите описание товара"
        rows="6"
        :invalid="errors.description"
        v-model="description"
      />
      <goods-editor-field
        label="Ссылка на изображение товара"
        name="image"
        rules="required|url"
        placeholder="Введите ссылку"
        dot
        :invalid="errors.image"
        v-model="image"
      />
      <goods-editor-field
        label="Цена товара"
        name="price"
        :rules="{ required: true, regex: /[0-9 ]+$/ }"
        placeholder="Введите цену"
        dot
        :invalid="errors.price"
        v-model="formattedPrice"
      />
      <button :disabled="!meta.valid" class="form-submit btn" type="submit">
        Добавить товар
      </button>
    </VeeForm>
  </div>
</template>

<script>
import GoodsEditorField from '@/components/GoodsEditorField.vue';
export default {
  components: {
    GoodsEditorField,
  },
  data() {
    return {
      name: "",
      description: "",
      image: "",
      price: "",
    };
  },
  computed: {
    formattedPrice: {
      get() {
        if (this.price !== "") {
          return Number(this.price).toLocaleString();
        } else {
          return null;
        }
      },
      set(newValue) {
        this.price = newValue.replace(/[^+\d]/g, "");
      },
    },
  },
  methods: {
    save() {
      const newItem = {
        name: this.name,
        description: this.description,
        image: this.image,
        price: this.price,
      };
      this.$emit("save", { newItem });
      this.$refs.form.resetForm();
      this.name = "";
      this.description = "";
      this.image = "";
      this.price = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.goods-editor {
  display: flex;
  flex-direction: column;
  gap: size(4);
}
.form-heading {
  margin: 0;
  font-size: font(7);
}
.form-container {
  display: flex;
  flex-direction: column;
  position: sticky;
  top: size(6);
  background-color: color(back);
  border-radius: size(1);
  box-shadow: shadow(div);
  gap: size(4);
  padding: size(8);
}
.form-submit {
  background-color: color(green);
  border: 0;
  border-radius: size(2.5);
  box-shadow: shadow(btn);
  color: white;
  font-size: font(3);
  font-weight: 600;
  padding: size(2.5);
  margin-top: size(2);
}
</style>