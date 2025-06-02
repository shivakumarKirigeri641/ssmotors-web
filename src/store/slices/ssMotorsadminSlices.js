import { createSlice } from "@reduxjs/toolkit";

const ssMotorsadminSlices = createSlice({
  name: "ssMotorsadmin",
  initialState: null,
  reducers: {
    addAdmin: (state, action) => {
      return action.payload;
    },
    removeAdmin: (state) => {
      return null;
    },
  },
});
export const { addAdmin, removeAdmin } = ssMotorsadminSlices.actions;
export default ssMotorsadminSlices.reducer;
