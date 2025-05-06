import { createSlice, configureStore } from "@reduxjs/toolkit";
import { State, StatePayload, Exercise } from "@/types";

export const infoTabDefault: Exercise = { date: new Date().toDateString(), name: "", reps: 12, sets: 3, weight: 30 };

const counterSlice = createSlice({
  name: "state",
  initialState: {
    erercises: [],
    infoTab: infoTabDefault,
    infoTabActive: false,
    infoTabEditing: false,
  } as State,
  reducers: {
    updateStore: (state: State, { payload }: { payload: StatePayload<State> }) => Object.keys(payload).forEach((key) => (state[key] = payload[key])),
    updateInfoTab: (state: State, { payload }: { payload: StatePayload<Exercise> }) => Object.keys(payload).forEach((key) => (state.infoTab[key] = payload[key])),
  },
});
export const store = configureStore({
  reducer: counterSlice.reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
export const { updateStore, updateInfoTab } = counterSlice.actions;
