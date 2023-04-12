import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { MAIN_URI, TABLE_TYPE } from "../../util";
import token from "../../Token";

const initialState = {
  data: [],
  tableType: TABLE_TYPE[0].propertyName,
  totalRowCount: 1,
  isLoading: false,
  error: null,
};

const fetchTableData = async (tableType, query) => {
  const response = await fetch(`${MAIN_URI}${tableType}/${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resData = await response.json();

  return resData;
};

export const fetchTableDataByQuery = createAsyncThunk(
  "tableData/fetchTableDataByQuery",
  async (query, { getState }) => {
    const { tableType } = getState().tableData;
    const resData = await fetchTableData(tableType, query);

    return resData;
  }
);

export const tableDataSlice = createSlice({
  name: "tableDataSlice",
  initialState,
  reducers: {
    setTableType: (state, action) => {
      state.tableType = action.payload;
      state.data = [];
      state.totalRowCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTableDataByQuery.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTableDataByQuery.fulfilled, (state, action) => {
        state.data = action.payload.docs;
        state.totalRowCount = action.payload.total;
        state.isLoading = false;
      });
  },
});

export const { setTableType } = tableDataSlice.actions;

export default tableDataSlice.reducer;
