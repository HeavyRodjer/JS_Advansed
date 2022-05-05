/* eslint-disable vue/multi-word-component-names */
<template>
 <div><game-list/></div>
</template>

<script>
import GameList from '@/components/GameList/index.vue'


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",

  components: {
    GameList,
  },

  methods: {},
};
</script>

<style lang="css" scoped>
a{
  margin:2%;
}

</style>