const { createSlice } = require("@reduxjs/toolkit");

const customerComplaintsSlice = createSlice({
  name: "customercomplaints",
  initialState: {
    complaints: [],
  },
  reducers: {
    addComplaints: (state, action) => {
      state.complaints.push(action.payload);
    },
    removeComplaints: (state, action) => {
      state.complaints.splice(action.payload, 1);
    },
  },
});
export const { addComplaints, removeComplaints } =
  customerComplaintsSlice.actions;
export default customerComplaintsSlice.reducer;
