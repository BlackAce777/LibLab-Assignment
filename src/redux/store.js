import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./slices/tableDataSlice";

export const store = configureStore({
  reducer: { tableData: tableDataReducer },
});
