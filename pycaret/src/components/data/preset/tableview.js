import Paper from "@mui/material/Paper";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableView = ({ loadedData }) => {
  return (
    Object.keys(loadedData).length > 0 && (
      <TableContainer sx={{ maxHeight: 300 }} component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              {Object.keys(loadedData[0]).map((columns) => (
                <TableCell key={columns}>{columns}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(loadedData).map((key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.keys(loadedData[key]).map((ind) => (
                  <TableCell component="th" scope="row" key={ind}>
                    {loadedData[key][ind]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
};

export default TableView;
