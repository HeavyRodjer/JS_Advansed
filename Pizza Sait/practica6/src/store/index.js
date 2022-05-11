import { createStore } from 'vuex'
import { v4 as uuidv4 } from "uuid";

// Create a new store instance.
const store = createStore({
  state () {
    return {
      pizza: [
        {
          id:uuidv4(),
          url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
          name:"Dying Light 2 PS5",
          price:200,
      },{
          id:uuidv4(),
          url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
          name:"Dying Light 2 PS5",
          price:200
      },
      {
          id:uuidv4(),
          url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
          name:"Dying Light 2 PS5",
          price:200,
         

      },{
          id:uuidv4(),
          url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
          name:"Dying Light 2 PS5",
          price:200
      },{
          id:uuidv4(),
          url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
          name:"Dying Light 2 PS5",
          price:200,
         

      },{
          id:uuidv4(),
          url:"https://game-shop.com.ua/prodimages/23818/thumbs/122182_300_300.jpg",
          name:"Dying Light 2 PS5",
          price:200
      }
      ],
      pizzaBuy:[],
    }
  },
  getters:{
    getPizzaList: state => state.pizza,
    getPizzaBuy: state => state.pizzaBuy

  },
  mutations: {
    increment (state,payload) {
      state.pizza = payload
      
    },
    buy(state,buyers){
      state.pizzaBuy=buyers
    }
},
  actions:{
    updateValue([comit],payload){
      comit("increment",payload)
    },
    updatePizza([comit],buyers){
      comit("buy",buyers)
    },
   
    
  }
})
export default store