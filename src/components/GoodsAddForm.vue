<template>
  <div class="container">
    <h1 class="heading">Добавление товара</h1>
    <form class="form" action="">
      <div class="form-group">
        <label class="label" for="">Наименование товара</label>
        <input class="input" type="text" name="" id="" />
      </div>
      <div class="form-group">
        <label class="label" for="">Описание товара</label>
        <input class="input" type="text" name="" id="" />
      </div>
      <div class="form-group">
        <label class="label" for="">Ссылка на изображение товара</label>
        <input class="input" type="text" name="" id="" />
      </div>
      <div class="form-group">
        <label class="label" for="">Цена товара</label>
        <input class="input" type="text" name="" id="" />
      </div>
      <button class="button">Добавить товар</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-right: 16px;
}
.heading {
  margin: 0;
}
.form {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.label {
}
.input {
  padding: 10px 16px;
}
.button {
  padding: 10px;
}
</style>