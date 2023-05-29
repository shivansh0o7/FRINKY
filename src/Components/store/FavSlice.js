import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:[]
}

export const FavSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFav: (state,action) => {
      state.value.push(action.payload);
    },
    removeToFav:(state,action)=>{
        state.value=state.value.filter((obj)=> obj.title !== action.payload.title)
      }
  }
})
export const { addToFav,removeToFav} = FavSlice.actions
export const selectFav = (state) => state.fav.value;
;

export default FavSlice.reducer;