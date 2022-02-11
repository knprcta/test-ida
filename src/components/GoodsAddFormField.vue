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
  outline: none;
}
.form-input:focus {
  box-shadow: 0px 0px 0px 1px $grey;
}
.form-error {
  font-size: $font_xxs;
  color: $red;
  bottom: -($font_xxs + $p_base);
  letter-spacing: -0.02em;
  position: absolute;
}
.form-input-invalid {
  box-shadow: 0px 0px 0px 1px $red !important;
}
.form-input-invalid:focus {
  box-shadow: 0px 0px 3px 1px $red !important;
}
.dot-red {
  border-radius: 50%;
  background-color: $red;
  width: $font-base;
  height: $font-base;
}
</style>