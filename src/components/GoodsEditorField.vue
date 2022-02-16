<template>
  <div class="form-group">
    <label :for="name" class="form-label">
      {{ label }}
      <span v-if="dot" class="dot-red"></span>
    </label>
    <VeeField
      :name="name"
      :label="label"
      :id="name"
      class="form-input"
      v-bind="$attrs"
    >
    </VeeField>
    <VeeErrorMessage :name="name" class="form-error" />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: { type: String, required: true },
    label: { type: String, default: "" },
    dot: { type: Boolean },
  },
};
</script>

<style lang='scss' scoped>
.form-group {
  display: flex;
  flex-direction: column;
  position: relative;
  gap: size(1);
}
.form-label {
  display: flex;
  letter-spacing: -0.02em;
  line-height: 1.3;
  color: color(light);
  font-size: font(2.5);
}
.form-input {
  resize: none;
  background-color: color(back);
  border: 0;
  border-radius: size(1);
  box-shadow: shadow(sel);
  font-size: font(3);
  padding: size(2.5) size(4);
  outline: none;
}
.form-error {
  font-size: font(2);
  color: color(red);
  bottom: -(font(2) + size(1));
  letter-spacing: -0.02em;
  position: absolute;
}
.dot-red {
  border-radius: 50%;
  background-color: color(red);
  width: font(1);
  height: font(1);
}
</style>