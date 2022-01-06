import {createSlice} from '@reduxjs/toolkit'
import { loadState } from '../../localStorage'
export const themeModeSlice = createSlice({
    name: 'themeMode',
    initialState: {
        value: 'dark',
    },
    reducers: {
        lightMode: (state) =>{
        state.value = 'light'
        },
        darkMode: (state) => {
            state.value = 'dark'
        }
    }
})

export const {lightMode, darkMode} = themeModeSlice.actions
export default themeModeSlice.reducer