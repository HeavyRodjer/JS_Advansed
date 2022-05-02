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
import store from "@/store";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Edit",

  data() {
    return {
      url: null,
      title: null,
      price:null,

    };
  },

  computed: {
    btnTitle() {
      if (this.currentProductId) return "Save";
      else return "Add";
    },
    currentProductId() {
      return this.$route.params.id;
    },
  },

  methods: {
    onSave() {
      if (this.currentProductId)
        store.updateProduct({
          id: this.currentProductId,
          Title: this.title,
          Url: this.url,
          Price:this.price
          
        });
      else store.addProduct(this.title, this.url,this.price);

      this.$router.push({ name: "home" });
    },
  },

  mounted() {
    if (this.currentProductId) {
      const product = store.getProductById(this.currentProductId);
      this.title = product.title;
      this.url = product.url;
      this.price = product.price;
    }
  },
};
</script>

<style lang="css" scoped>
a{
  margin: 2%;
}
</style>