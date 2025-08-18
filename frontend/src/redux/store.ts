import { configureStore } from "@reduxjs/toolkit"
import superheroesReducer from './slices/superhero'
// import {type TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer:{
        superheroes: superheroesReducer
    }
})

// export type RootState = ReturnType<typeof store.getState>
// export const useAppDispatch: () => typeof store.dispatch = useDispatch
// export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;