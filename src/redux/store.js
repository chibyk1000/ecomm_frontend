import { configureStore } from "@reduxjs/toolkit";
import { getUser } from "./userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import cartReducer from "./reducers/cartReducers";
const store = configureStore({
    reducer: {
        [getUser.reducerPath]: getUser.reducer,
        cartReducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(getUser.middleware)
})

setupListeners(store.dispatch)
export default store