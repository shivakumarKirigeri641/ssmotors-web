const { createSlice } = require("@reduxjs/toolkit");

const selectedServiceDateSlice = createSlice({
  name: "selectedServiceDate",
  initialState: null,
  reducers: {
    addselectedServiceDate: (state, action) => {
      return action.payload;
    },
    removeselectedServiceDate: (state, action) => {
      return null;
    },
  },
});
export const { addselectedServiceDate, removeselectedServiceDate } =
  selectedServiceDateSlice.actions;
export default selectedServiceDateSlice.reducer;
