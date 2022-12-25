import { configureStore } from '@reduxjs/toolkit'
import authSlice  from './slices/auth'
export const makeStore = ()=>{
    return configureStore({
        reducer: {
              auth:authSlice,
        },
      })
}



const store  = makeStore();


export default store;

