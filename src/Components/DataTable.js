import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import Spinner from "./Spinner";

import { fetchTableDataByQuery } from "../redux/slices/tableDataSlice";
import { Schemas } from "../util";

const DataTable = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data, tableType, totalRowCount, isLoading } = useSelector(
    (state) => state.tableData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableDataByQuery(`?limit=${rowsPerPage}&&page=${page + 1}`));
  }, [page, rowsPerPage]);

  useEffect(() => {
    if (page === 0) {
      dispatch(fetchTableDataByQuery(`?limit=${rowsPerPage}&&page=${1}`));
    }
    setPage(0);
  }, [tableType]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper
        sx={{
          width: "80%",
        }}
      >
        <TableContainer sx={{ height: "100%" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {Schemas[tableType].map((column) => (
                  <TableCell
                    key={column.propertyName}
                    sx={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontFamily: "Dosis",
                    }}
                  >
                    {column.displayName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((d) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={d.code}>
                    {Schemas[tableType].map((column) => {
                      const value = d[column.propertyName];
                      return (
                        <TableCell
                          key={column.propertyName}
                          sx={{ width: "auto", textAlign: "center" }}
                        >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={totalRowCount}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {isLoading ? <Spinner /> : ""}
    </>
  );
};

export default DataTable;
