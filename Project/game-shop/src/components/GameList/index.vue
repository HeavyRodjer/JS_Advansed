<template>
    <div class="game-list">
        <game-item 
       v-for="gameItem  in gameList" 
       :key="gameItem.id"
       :gameItem="gameItem"
       @buy="onBuy(gameItem.id)"
        @edit="onEdit(gameItem.id)"
  />


    </div>
</template>

<script>
import GameItem from "./Gameitem.vue"
import { v4 as uuidv4 } from "uuid";
import store from "@/store";

    export default {
        name:"GameList",
        components:{
            GameItem,
           

        },
        data() {
            return {
                gameList: [
                    {
                        id:uuidv4(),
                        url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
                        title:"Dying Light 2 PS5",
                        price:200,
                       

                    },{
                        id:uuidv4(),
                        url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
                        title:"Dying Light 2 PS5",
                        price:200
                    },
                    {
                        id:uuidv4(),
                        url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
                        title:"Dying Light 2 PS5",
                        price:200,
                       

                    },{
                        id:uuidv4(),
                        url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
                        title:"Dying Light 2 PS5",
                        price:200
                    },{
                        id:uuidv4(),
                        url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
                        title:"Dying Light 2 PS5",
                        price:200,
                       

                    },{
                        id:uuidv4(),
                        url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
                        title:"Dying Light 2 PS5",
                        price:200
                    }
                ]
            }
        },
         computed: {
    isDataEmpty() {
      return this.gameList.length === 0;
    },
  },
        methods: {
onLoad() {
      this.gameList = store.readProducts();
    },
    onEdit(id) {
      this.$router.push({
        name: "editPage",
        params: {
          id,
        },
      });
    },
    mounted() {
    this.onLoad();
  },

  },
 
            }
</script>

<style lang="css" scoped>
.game-list{
     float: left;
    clear: both;
    border-top: none;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-left: 1%;
}

</style>