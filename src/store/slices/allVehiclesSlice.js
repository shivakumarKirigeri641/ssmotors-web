const { createSlice } = require("@reduxjs/toolkit");

const allVehiclesSlice = createSlice({
  name: "allVehicles",
  initialState: [],
  reducers: {
    addallVehicles: (state, action) => {
      return action.payload;
    },
    removeallVehicles: (state, action) => {
      return (state.length = 0);
    },
  },
});
export const { addallVehicles, removeallVehicles } = allVehiclesSlice.actions;
export default allVehiclesSlice.reducer;
