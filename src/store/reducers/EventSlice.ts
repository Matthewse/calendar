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
            const { date } = action.payload;
            if (date) {
                if (state.events[date]?.length > 0) {
                    state.events[date].push(action.payload);
                } else {
                    state.events[date] = [action.payload];
                }
            }
        },
        deleteEvent(state, action: PayloadAction<{ id: string, date: string }>) {
            const { date } = action.payload;
            state.events[date] = state.events[date]
                .filter(item => item.id !== action.payload.id);
        }
    }
});

export default eventSlice.reducer;