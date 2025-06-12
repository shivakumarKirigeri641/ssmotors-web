//ssMotorsServiceSummarySlices
import { createSlice } from "@reduxjs/toolkit";

const ssMotorsServiceSummarySlices = createSlice({
  name: "ssMotorsServiceSummary",
  initialState: null,
  reducers: {
    addSummary: (state, action) => {
      return action.payload;
    },
    removeSummary: (state) => {
      return null;
    },
  },
});
export const { addSummary, removeSummary } =
  ssMotorsServiceSummarySlices.actions;
export default ssMotorsServiceSummarySlices.reducer;
