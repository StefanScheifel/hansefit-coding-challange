import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    requestedHolidays: [],
  },
  reducers: {
    add: (state, action) => {
      state.requestedHolidays = [...state.requestedHolidays, action.payload];
    },
    remove: (state, action) => {
      console.log(action);
    },
  },
});
export const { add, remove } = formSlice.actions;

export const addHolidays = (holiday, timestamp) => (dispatch) => {
  const diffTime = Math.abs(holiday.dateFrom - holiday.dateTo);
  const dayDiff = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  dispatch(add({ ...holiday, totalAmountDays: dayDiff, created: timestamp }));
};

export const selectRequestedHolidays = (state) => state.form.requestedHolidays;

export default formSlice.reducer;
