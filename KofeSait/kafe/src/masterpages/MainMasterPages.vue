<template>
  <div>
    <div>
      <h1>Home</h1>
      <slot name="header">
        <router-link to="/About">About</router-link>
        <h3>Мій День</h3>
      </slot>
    </div>
    <div>
      <h1>Мій сайт</h1>
      <slot name="up">
        <ul>
          <li>Випити каву</li>
          <li>Включити комп</li>
          <li>Виключити комп</li>
        </ul>
      </slot>
    </div>
    <div>
      <slot name="mead">
        <h3>Головна мета життя</h3>
      </slot>
    </div>
    <div>
      <slot name="footer">
        <h3>Контакти</h3>
        <ul>
          <li>Тел:+3802312131</li>
          <li>Адерса: м.Ужгород</li>
        </ul>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
  props: {
    owner: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>