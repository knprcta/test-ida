<template>
  <div class="form-container">
    <h1 class="form-heading">Добавление товара</h1>
    <VeeForm ref="form" class="form" v-slot="{ meta, errors }" @submit="save">
      <goods-add-form-field
        label="Наименование товара"
        name="name"
        rules="required"
        placeholder="Введите наименование товара"
        dot
        :class="{ 'form-input-invalid': errors.name }"
        v-model="name"
      />
      <goods-add-form-field
        as="textarea"
        label="Описание товара"
        name="description"
        placeholder="Введите описание товара"
        rows="6"
        :class="{ 'form-input-invalid': errors.description }"
        v-model="description"
      />
      <goods-add-form-field
        label="Ссылка на изображение товара"
        name="image"
        rules="required|url"
        placeholder="Введите ссылку"
        dot
        :class="{ 'form-input-invalid': errors.image }"
        v-model="image"
      />
      <goods-add-form-field
        label="Цена товара"
        name="price"
        :rules="{ required: true, regex: /[0-9 ]+$/ }"
        placeholder="Введите цену"
        dot
        :class="{ 'form-input-invalid': errors.price }"
        v-model="formattedPrice"
      />
      <button :disabled="!meta.valid" class="form-submit btn" type="submit">
        Добавить товар
      </button>
    </VeeForm>
  </div>
</template>

<script>
import GoodsAddFormField from "@/components/GoodsAddFormField.vue";
export default {
  components: {
    GoodsAddFormField,
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
        this.price = newValue.replace(/[^+\d]/g, '');
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
      this.$emit("save", { newItem }); // access under eventData.item
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
.form-container {
  display: flex;
  flex-direction: column;
  gap: $g_l;
}
.form-heading {
  margin: 0;
  font-size: $font_xxl;
  font-weight: $font_normal;
}
.form {
  display: flex;
  flex-direction: column;
  background: $back;
  border-radius: $radius;
  box-shadow: $shadow_big;
  gap: $g_l;
  padding: $p_l;
}
.form-submit {
  background: $green;
  border: $border;
  border-radius: $radius_big;
  box-shadow: $shadow_xsmall;
  color: $white;
  font-size: $font_s;
  font-weight: $font_bold;
  padding: $p_s;
  margin-top: $p_xs;
}
.form-submit:disabled {
  background: $disabled;
  box-shadow: none;
  color: $grey;
  transform: none;
  cursor: default;
}
</style>