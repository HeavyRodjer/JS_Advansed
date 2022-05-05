import { createStore } from 'vuex'
import { v4 as uuidv4 } from "uuid";

// Create a new store instance.
const store = createStore({
  state () {
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
  getters:{
    getGamesList: state => state.gameList

  },
  mutations: {
    increment (state,payload) {
      state.gameList = payload
    }
},
  actions:{
    updateValue([comit],payload){
      comit("increment",payload)
    },
   
    
  }
})
export default store