const { createSlice } = require("@reduxjs/toolkit");

const serviceAccordionIndexSlice = createSlice({
  name: "serviceAccordionIndex",
  initialState: null,
  reducers: {
    addserviceAccordionIndex: (state, action) => {
      return action.payload;
    },
    removeserviceAccordionIndex: (state, action) => {
      return null;
    },
  },
});
export const { addserviceAccordionIndex, removeserviceAccordionIndex } =
  serviceAccordionIndexSlice.actions;
export default serviceAccordionIndexSlice.reducer;
