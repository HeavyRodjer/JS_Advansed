<template>
  <div>
    <main-master-pages>
      <template v-slot:header>
        <h3>Це мій проект</h3>
        <router-link to="/">Home</router-link>
      </template>
      <template v-slot:up>
        <h3>Автор</h3>
        <ul>
          <li>Я</li>
          <li>Мій кум</li>
          <li>Мій сусід</li>
        </ul>
      </template>
      <template v-slot:mead>
        <h1>Головна мета:</h1>
        <h3>Дослідити сенс життя</h3>
      </template>
    </main-master-pages>
  </div>
</template>

<script>
import MainMasterPages from "@/masterpages/MainMasterPages";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {
    MainMasterPages,
  },
};
</script>

<style lang="scss" scoped>
</style>