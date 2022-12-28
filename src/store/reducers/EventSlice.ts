import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IEvent } from "../../models/IEvent";

interface EventState {
    events: {
        [key: string]: IEvent[]
    }
}

const initialState: EventState = {
    events: localStorage.getItem('events') 
        ? JSON.parse(localStorage.getItem('events') || '') : {}
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
                    state.events[date].sort((a, b) => parseFloat(a.startTime) - parseFloat(b.startTime));
                } else {
                    state.events[date] = [action.payload];
                }
            }
            localStorage.setItem('events', JSON.stringify(state.events));
        },
        deleteEvent(state, action: PayloadAction<{ id: string, date: string }>) {
            const { date } = action.payload;
            state.events[date] = state.events[date]
                .filter(item => item.id !== action.payload.id);
            localStorage.setItem('events', JSON.stringify(state.events));
        }
    }
});

export default eventSlice.reducer;