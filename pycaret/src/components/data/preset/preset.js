import { BorderedDataSetDiv, StyledFormControl, StyledGrid } from "../../../Styles";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";
import { SetDataFiles, SetLoadedData, SetSelectedDataset } from "../../../actions/dataActions/presetActions/presetActions";

import InputLabel from "@mui/material/InputLabel";
import Loader from "../../loader/loader";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TableView from "./tableview";
import { connect } from "react-redux";
import useSynchronousState from "../../../customHooks/useSynchronousState";

const Preset = (props) => {
  const loading = useSynchronousState(false);
  const checkFullData = useSynchronousState(false);

  const handleDataSetChange = (event) => {
    loading.set(true);
    getData(event.target.value, checkFullData.get());
    props.SetSelectedDataset(event.target.value);
  };

  const handleFullDataChange = () => {
    checkFullData.set(!checkFullData.get());
    if (props.selectedDataset) {
      loading.set(true);
      getData(props.selectedDataset, checkFullData.get());
    }
  };

  const getData = (dataSet, fullData) => {
    fetch("/loadData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: dataSet, fullData: fullData }),
    })
      .then((response) => response.json())
      .then((response) => {
        props.SetLoadedData(response);
        loading.set(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch("/datasets").then((res) =>
      res.json().then((data) => {
        props.SetDataFiles(data.files);
      })
    );
  }, []);
  return (
    <>
      <StyledGrid container>
        <StyledGrid item xs={4}>
          <StyledFormControl w="500">
            <InputLabel>Datasets</InputLabel>
            <Select
              value={props.selectedDataset}
              label="Datasets"
              onChange={handleDataSetChange}
              MenuProps={{ style: { height: "300px" } }}
            >
              {props.dataFiles.map((data) => {
                return (
                  <MenuItem value={data} key={data}>
                    {data}
                  </MenuItem>
                );
              })}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={4} display="flex" justifyContent={"center"} alignItems={"center"}>
          {props.selectedDataset && !loading.get() && (
            <>
              Shape {props.loadedData.length} rows and {Object.keys(props.loadedData[0]).length} columns
            </>
          )}
        </StyledGrid>

        <StyledGrid item xs={4} display="flex" justifyContent="flex-end">
          <FormControlLabel
            control={<Checkbox value={checkFullData.get()} onChange={handleFullDataChange} />}
            label="Load Full Data"
          />
        </StyledGrid>
      </StyledGrid>
      {props.selectedDataset && (
        <BorderedDataSetDiv mt="2">
          {loading.get() ? <Loader /> : <TableView/>}
        </BorderedDataSetDiv>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDataset: state?.presetReducer?.preset?.selectedDataset ? state.presetReducer.preset.selectedDataset : "",
    dataFiles: state?.presetReducer?.preset?.dataFiles ? state.presetReducer.preset.dataFiles : [],
    loadedData: state?.presetReducer?.preset?.loadedData ? state.presetReducer.preset.loadedData : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetSelectedDataset: (payload) => dispatch(SetSelectedDataset(payload)),
    SetDataFiles: (payload) => dispatch(SetDataFiles(payload)),
    SetLoadedData: (payload) => dispatch(SetLoadedData(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preset);
