import { createSlice, createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const initialstate = {}

export const addCart = createAsyncThunk('addCart', async (data, user) => {
    try {
        
       const result =     await axios.post("http://localhost:8080/cart/add", {
             ...data,
             user_id: user._id,
       });
    
        return result.data
    } catch (error) {
        console.log(error);
    }
})


export const getCart = createAsyncThunk("getCart", async (  ) => {
  try {
      const result = await axios.get("http://localhost:8080/cart")
      return result.data
  } catch (error) {}
});


const cartReducers = createReducer(initialstate, (build) => {
    build
      .addCase(addCart.fulfilled, (state, action) => {
        if (action.payload) {
         
            console.log(action.payload);
            // return action.payload
          
        }
      })
      .addCase(getCart.fulfilled, (state, action) => {
        if (action.payload) {
            console.log(action.payload);
     return action.payload;
   
        }
      });
})
// const cartReducer = cartSlice.reducer
export default cartReducers