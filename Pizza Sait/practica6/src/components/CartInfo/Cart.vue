<template>
    <div>
        <div class="game-item-holder">
      
           <div class="img"><img :src="cart.url" ></div> 
           <div class="prod-info">
        <div class="name"><span>{{cart.name}}</span></div>
        <div class="price"><span>{{cart.price }}$</span></div>

        </div>  
        </div>

    </div>
</template>

<script>
    export default {
         name:"CartInfo",
          props: {
            cart: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>