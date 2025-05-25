import { createSlice } from "@reduxjs/toolkit";

const ssMotorsadminSlices = createSlice({
  name: "ssMotorsadmin",
  initialState: null,
  reducers: {
    addAdmin: (state, action) => {
      state = action.payload;
    },
    removeAdmin: (state) => {
      state = null;
    },
  },
});
export const { addAdmin, removeAdmin } = ssMotorsadminSlices.actions;
export default ssMotorsadminSlices.reducer;
