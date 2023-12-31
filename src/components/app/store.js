import { configureStore } from "@reduxjs/toolkit";
import  authReducer  from "../features/auth/authSlice";
import  sessionReducer  from "../features/session/sessionSlice";
import serverReducer from "../features/server/serverSlice";

export const store = configureStore({
    reducer:{
        auth:authReducer,
        admin:sessionReducer,
        server:serverReducer
    },
})

