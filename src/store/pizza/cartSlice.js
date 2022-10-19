import { createSlice } from '@reduxjs/toolkit'


const initialState= {
  items:[],
  totalPrice:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state,action) => {
      let thisItem=state.items.find(obj=>obj.id===action.payload.id)
      if (thisItem) {
        thisItem.count++
      }
      else{

        state.items.push({...action.payload,count:1})
        
      }
      state.totalPrice=state.items.reduce((sum,obj)=>obj.price*obj.count+sum,0)
      
    },
    minusItem: (state,action) => {
      let thisItem=state.items.find(obj=>obj.id===action.payload.id)
      if (thisItem&&thisItem.count>0) {
        thisItem.count--
      }
    
      state.totalPrice=state.items.reduce((sum,obj)=>obj.price*obj.count+sum,0)
      
    },
    removeItemFromCart: (state,action) => {
      
      state.items=state.items.filter(item=>item.id!==action.payload.id)
      state.totalPrice=state.items.reduce((sum,obj)=>obj.price*obj.count+sum,0)

    },
    
  },
})

// Action creators are generated for each case reducer function
export const cartSelector=(state)=>state.cart
export const { addItemToCart,minusItem,removeItemFromCart } = cartSlice.actions

export default cartSlice.reducer