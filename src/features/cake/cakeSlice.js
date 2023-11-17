import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
}); //action types and action creaters(by the name of ordered here) are bydefault provided by rdk.There is no switch case,immer required

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
