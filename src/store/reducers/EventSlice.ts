import {createSlice} from '@reduxjs/toolkit';
import { IEvent } from "../../models/IEvent";

interface EventState {
    events: IEvent[]
}

const initialState: EventState = {
    events: []
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        
    }
})

export default eventSlice.reducer;