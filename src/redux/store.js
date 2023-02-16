import { configureStore } from "@reduxjs/toolkit";
import { getUser } from "./userApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
    reducer: {
        [getUser.reducerPath]: getUser.reducer
    },
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(getUser.middleware)
})

setupListeners(store.dispatch)
export default store