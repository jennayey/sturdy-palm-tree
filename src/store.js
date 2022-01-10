import {configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/Theming/ThemeModeSlice'
import { loadState } from './localStorage'

//loads the value of state that is stored in local storage
//fetches using loadState()
const initialState = loadState()

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
    //preloadedState: passes the value of initialState as the value of the theme state in store
    preloadedState: initialState,
})