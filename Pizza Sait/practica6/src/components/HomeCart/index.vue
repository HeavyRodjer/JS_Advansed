<template>
    <div>
        <menu-cart  v-for="pizza  in pizza" 
       :key="pizza.id"
       :pizza="pizza"
       @buy="onBuy(pizza)"
       > 
       </menu-cart>
       

    </div>
</template>

<script>
import MenuCart from './MenuCart.vue'
import { mapGetters,mapActions } from "vuex"

    export default {
        name:"HomeCart",
        components: {
            // eslint-disable-next-line vue/no-unused-components
            MenuCart,
        },
        computed: {
           ...mapGetters(["getPizzaList"]),
           ...mapGetters(["getPizzaBuy"]),
           ...mapActions(["updatePizza"])

        },
        data() {
            return {
                pizza:[]
            }
        },
         methods: {
            onLoad() {
            this.pizza = this.getPizzaList;
            },
            onBuy(pizza){
                let pizzaBuy = this.getPizzaBuy;
                pizzaBuy.push(pizza);
                this.updatePizzaBuy(pizzaBuy)
            }
        },
        mounted() {
            this.onLoad();
        },
    }
</script>

<style lang="scss" scoped>

</style>