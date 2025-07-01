const { createSlice } = require("@reduxjs/toolkit");

const vehicleNumbersSlice = createSlice({
  name: "vehicleNumbers",
  initialState: null,
  reducers: {
    addvehicleNumbers: (state, action) => {
      return action.payload;
    },
    removevehicleNumbers: (state, action) => {
      return null;
    },
  },
});
export const { addvehicleNumbers, removevehicleNumbers } =
  vehicleNumbersSlice.actions;
export default vehicleNumbersSlice.reducer;
