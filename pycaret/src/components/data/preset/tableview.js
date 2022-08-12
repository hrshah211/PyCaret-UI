import Paper from "@mui/material/Paper";
import React from "react";
import { StyledTypography } from "../../../styles";
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
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {props.dataColumns.map((columns) => (
                <TableCell key={columns}>
                  <StyledTypography>{columns}</StyledTypography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(props.loadedData).map((key) => (
              <TableRow key={key}>
                {Object.keys(props.loadedData[key]).map((ind) => (
                  <TableCell component="th" scope="row" key={ind}>
                    <StyledTypography style={{ fontWeight: 550 }}>{props.loadedData[key][ind]}</StyledTypography>
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
    loadedData: state?.presetReducer?.data?.preset?.loadedData ? state.presetReducer.data.preset.loadedData : {},
    dataColumns: state?.presetReducer?.data?.preset?.dataColumns ? state.presetReducer.data.preset.dataColumns : [],
  };
};

export default connect(mapStateToProps)(TableView);
