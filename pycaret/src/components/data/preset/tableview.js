import Paper from "@mui/material/Paper";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { connect } from "react-redux";

const TableView = (props) => {
  return (
    props.dataColumns.length > 0 && (
      <TableContainer sx={{ maxHeight: 300 }} component={Paper}>
        <Table stickyHeader aria-label="simple table">
          <TableHead>
            <TableRow>
              {props.dataColumns.map((columns) => (
                <TableCell key={columns}>{columns}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(props.loadedData).map((key) => (
              <TableRow key={key} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {Object.keys(props.loadedData[key]).map((ind) => (
                  <TableCell component="th" scope="row" key={ind}>
                    {props.loadedData[key][ind]}
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

const mapStateToProps = (state) => {
  return {
    loadedData: state?.presetReducer?.preset?.loadedData ? state.presetReducer.preset.loadedData : {},
    dataColumns: state?.presetReducer?.preset?.dataColumns ? state.presetReducer.preset.dataColumns : [],
  };
};

export default connect(mapStateToProps)(TableView);