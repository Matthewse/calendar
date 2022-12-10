import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
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
        addEvent(state, action: PayloadAction<IEvent>) {
            state.events = [...state.events, action.payload];
        }
    }
});

export default eventSlice.reducer;