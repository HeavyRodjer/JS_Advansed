<template>
    <div>
        <game-item
       v-for="gameItem  in gameList" 
       :key="gameItem.id"
       :gameItem="gameItem"
       
        
        />
      

    </div>
</template>

<script>
import GameItem from "./Gameitem.vue"
    export default {
        name:"GameList",
        components:{
            GameItem

        },
        data() {
            return {
                gameList: [
                    {
                        id:"1",
                        url:"https://game-shop.com.ua/prodimages/25885/thumbs/121422_300_300.jpg",
                        title:"Far Cry 6",
                        price:200,
                       

                    },{
                        id:u,
                        url:"https://game-shop.com.ua/prodimages/25885/thumbs/121422_300_300.jpg",
                        title:"Far Cry 6",
                        price:200
                    }
                ]
            }
        },
            }
</script>

<style lang="css" scoped>

</style>