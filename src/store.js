import {configureStore } from '@reduxjs/toolkit'
import themeReducer from './features/Theming/ThemeModeSlice'
import { loadState } from './localStorage'

const initialState = loadState()

export default configureStore({
    reducer: {
        theme: themeReducer,
    },
    preloadedState: initialState,
})