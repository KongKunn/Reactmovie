import { configureStore } from '@reduxjs/toolkit';
import searchReducer from "./SliceSearch.jsx";
import changeUsernameReducer from "./SliceUserName.jsx";
import changeEmailReducer from "./SliceEmail.jsx";

const store = configureStore({
    reducer : { 
        searchResponse: searchReducer,
        changeUsername: changeUsernameReducer,
        changeEmail: changeEmailReducer,
    },
})

export default store;
