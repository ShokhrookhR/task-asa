import { createSlice } from '@reduxjs/toolkit'

const json = localStorage.getItem('fav');
const items = JSON.parse(json);
const initialState= {
  items:items||[],
}

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addItem: (state,action) => {
      let thisItem=state.items.find(obj=>obj.id===action.payload.id)
      if (!thisItem) {
        state.items.push(action.payload)
      }
      
    },
    removeItem: (state,action) => {
      
      state.items=state.items.filter(item=>item.id!==action.payload.id)
      localStorage.removeItem('fav')
    },
    
  },
})

// Action creators are generated for each case reducer function
export const favouritesSelector=(state)=>state.favourites.items
export const { addItem,removeItem } = favouritesSlice.actions

export default favouritesSlice.reducer