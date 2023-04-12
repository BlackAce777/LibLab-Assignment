import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MenuItem, FormControl, Select } from "@mui/material";

import { setTableType } from "../redux/slices/tableDataSlice";
import { TABLE_TYPE } from "../util";

const TableSelector = (props) => {
  const { tableType } = useSelector((state) => state.tableData);
  const dispatch = useDispatch();

  const tableTypeChangeHandler = (ev) => {
    dispatch(setTableType(ev.target.value));
  };

  return (
    <FormControl
      variant="standard"
      sx={{ m: 1, minWidth: 120, textAlign: "center" }}
    >
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={tableType}
        onChange={tableTypeChangeHandler}
      >
        {TABLE_TYPE.map((tType) => (
          <MenuItem value={tType.propertyName}>{tType.displayName}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default TableSelector;
