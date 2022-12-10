import { configureStore, combineReducers } from '@reduxjs/toolkit';
import eventReducer from './reducers/EventSlice';

const rootReducer = combineReducers({
    eventReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']