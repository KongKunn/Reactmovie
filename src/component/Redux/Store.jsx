import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./SliceSearch.jsx"
const store = configureStore({
    reducer : {
        searchResponse :searchReducer
        
    },
})
export default store;