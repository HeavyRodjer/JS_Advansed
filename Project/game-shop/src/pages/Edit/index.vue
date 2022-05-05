/* eslint-disable no-unused-vars */
/* eslint-disable vue/multi-word-component-names */
<template>
  <div>EDIT</div>
  <div class="a">
    <div>
      <label>
        Title
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <label>
        Url
        <input type="text" v-model="url" />
      </label>
    </div>
    <div>
      <label>
        Price
        <input type="number" v-model.number="price"  />
      </label>
    </div>
  </div>
  <div>
    <button @click="onSave">{{ btnTitle }}</button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Edit",

  data() {
    return {
      url: null,
      title: null,
      price: null,
    };
  },

  computed: {
    btnTitle() {
      if (this.currentProductId) return "Save";
      else return "Add";
      // return this.currentProductId ? 'Save':'Add'
    },
    currentProductId() {
      return this.$route.params.id;
    },
    ...mapGetters(['getGamesList'])
  },

  methods: {
    ...mapActions(["updateValue"]),
    onSave() {

      // eslint-disable-next-line no-unused-vars
      let gamesList = this.getGamesList
      if (this.currentProductId){
        // eslint-disable-next-line no-unused-vars
        const games = {
          id: this.currentProductId,
          url: this.url,
          title: this.title,
          price: this.price
        };
            const productIndex = gamesList.findIndex(
                (item) => item.id === games.id
              );
              if (productIndex >= 0)
                gamesList[productIndex] = {
                  ...games,
                };
        this.updateValue(gamesList)
      }
      else {
        gamesList.push(this.id = uuidv4(), this.title, this.price, this.url);
        this.updateValue(gamesList)
      }

      this.$router.push({ name: "home" });
    },
     
  },

  mounted() {
    if (this.currentProductId) {
      // eslint-disable-next-line no-unused-vars
      let gamesList = this.getGamesList;
      // eslint-disable-next-line no-unused-vars
      const games = gamesList.find((item) => item.id === this.currentProductId);
      this.url = games.url;
      this.title = games.title;
      this.price = games.price;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>