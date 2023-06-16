import { createSlice } from "@reduxjs/toolkit";
import { appList } from "../utility/globalUtils";
import types from "../../types";

const initialState: types.GlobalSliceState = {
  apps: appList,
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {},
});

export default globalSlice.reducer;
