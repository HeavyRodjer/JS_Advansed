<template>
    <div>
        <div class="game-item-holder">
      
           <div class="img"><img :src="pizza.url" ></div> 
           <div class="prod-info">
        <div class="name"><span>{{pizza.name}}</span></div>
        <div class="price"><span>{{pizza.price }}$</span></div>
        <div class="btn">
            <button @click="$emit('buy')"> Купити</button>
        </div>  
        </div>
        </div>

    </div>
</template>

<script>
    export default {
         name:"HomeCart",
          props: {
            pizza: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>