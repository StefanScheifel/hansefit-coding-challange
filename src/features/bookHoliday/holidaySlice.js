import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    requestedHolidays: [
      {
        firstName: "Stefan",
        lastName: "Scheifel",
        unit: "Digital",
        dateFrom: 1597661880000,
        dateTo: 1601463480000,
        holidayType: "Erholungsurlaub",
        email: "stefan.scheifel@me.com",
        totalAmountDays: 44,
        created: 1597661946226,
      },
    ],
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
