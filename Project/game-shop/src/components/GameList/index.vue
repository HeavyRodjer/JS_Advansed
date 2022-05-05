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
import { mapGetters } from "vuex";

    export default {
        name:"GameList",
        components:{
            GameItem,
        },
        computed: {
           ...mapGetters(["getGamesList"])
        },
        data() {
            return {
                gameList: []
            }
        },
    methods: {
            onLoad() {
            this.gameList = this.getGamesList;
            },
            onEdit(id) {
            this.$router.push({
                name: "editPage",
                params: {
                id,
                },
            });
            },
        },
        mounted() {
            this.onLoad();
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