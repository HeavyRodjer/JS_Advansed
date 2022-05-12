<template>
  <div>
    <cart
      v-for="cart in pizzaBuy"
      :key="cart.id"
      :cart="cart"
      @buy="onBuy(cart)"
    >
    </cart>
  </div>
</template>

<script>
import Cart from "./Cart.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartInfo",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Cart,
  },
  computed: {
    ...mapGetters(["getPizzaList", "getPizzaBuy"]),
    
  },
  data() {
    return {
      pizzaBuy: [],
    };
  },
  methods: {
    ...mapActions(["updatePizza"]),
    onLoad() {
      this.cart = this.getPizzaBuy;
    },
    // onBuy(cart){
    //     let pizzaBuy = this.getPizzaBuy;
    //     pizzaBuy.push(cart);
    //     this.updatePizzaBuy(pizzaBuy)
    // }
  },
  mounted() {
    this.onLoad();
  },
};
</script>

<style lang="scss" scoped>
</style>