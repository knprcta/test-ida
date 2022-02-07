<template>
  <div class="form-container">
    <h1 class="form-heading">Добавление товара</h1>
    <form class="form" action="">
      <div class="form-group">
        <label class="form-label" for=""
          >Наименование товара<span class="dot-red"></span
        ></label>
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Введите наименование товара"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for="">Описание товара</label>
        <textarea
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Введите описание товара"
          rows="6"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for=""
          >Ссылка на изображение товара<span class="dot-red"></span
        ></label>
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Введите ссылку"
        />
      </div>
      <div class="form-group">
        <label class="form-label" for=""
          >Цена товара<span class="dot-red"></span
        ></label>
        <input
          class="form-input"
          type="text"
          name=""
          id=""
          placeholder="Введите ссылку"
        />
      </div>
      <button class="form-submit" disabled>Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {};
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
.form-group {
  display: flex;
  flex-direction: column;
  gap: $g_s;
}
.form-label {
  display: flex;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: $light;
  font-size: $font_xs;
}
.form-input {
  resize: none;
  background: $back;
  border: $border;
  border-radius: $radius;
  box-shadow: $shadow_small;
  font-size: $font_s;
  padding: $p_s $p_m;
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
}
.form-submit:disabled {
  background: $disabled;
  box-shadow: none;
  color: $grey;
}
.dot-red {
  border-radius: 50%;
  background-color: $red;
  width: $font-base;
  height: $font-base;
}
</style>