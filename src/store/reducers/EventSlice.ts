import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../models/IEvent";

interface EventState {
    events: {
        [key: string]: IEvent[]
    }
}

const initialState: EventState = {
    events: {}
}

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent(state, action: PayloadAction<IEvent>) {
            if (action.payload.date) {
                if (state.events[action.payload.date]?.length > 0) {
                    state.events[action.payload.date].push(action.payload);
                } else {
                    state.events[action.payload.date] = [action.payload];
                }
            }
        }
    }
});

export default eventSlice.reducer;