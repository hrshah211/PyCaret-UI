import { BorderedDataSetDiv, StyledFormControl, StyledGrid } from "../../../Styles";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect } from "react";
import {
  SetCheckFullData,
  SetDataFiles,
  SetLoadedData,
  SetSelectedDataset,
} from "../../../actions/dataActions/presetActions/presetActions";

import { API_URL } from "../../../store/apiURL";
import InputLabel from "@mui/material/InputLabel";
import Loader from "../../loader/loader";
import MenuItem from "@mui/material/MenuItem";
import { ResetDataTypesData } from "../../../actions/setupActions/dataTypesActions/dataTypesActions";
import Select from "@mui/material/Select";
import TableView from "./tableview";
import { connect } from "react-redux";
import useSynchronousState from "../../../customHooks/useSynchronousState";

const Preset = (props) => {
  const loading = useSynchronousState(false);

  const handleDataSetChange = (event) => {
    loading.set(true);
    props.SetSelectedDataset(event.target.value);
    getData(event.target.value, props.checkFullData);
    props.ResetDataTypesData();
  };

  const handleFullDataChange = (event) => {
    props.SetCheckFullData(event.target.checked);
    if (props.selectedDataset) {
      loading.set(true);
      getData(props.selectedDataset, event.target.checked);
    }
  };

  const getData = (dataSet, fullData) => {
    fetch(API_URL.LOAD_DATA, {
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
      });
  };

  useEffect(() => {
    fetch(API_URL.DATASETS).then((res) =>
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
            control={<Checkbox value={props.checkFullData} onChange={handleFullDataChange} />}
            label="Load Full Data"
          />
        </StyledGrid>
      </StyledGrid>
      {props.selectedDataset && (
        <BorderedDataSetDiv mt="2">{loading.get() ? <Loader /> : <TableView />}</BorderedDataSetDiv>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDataset: state?.presetReducer?.data?.preset?.selectedDataset
      ? state.presetReducer.data.preset.selectedDataset
      : "",
    dataFiles: state?.presetReducer?.data?.preset?.dataFiles ? state.presetReducer.data.preset.dataFiles : [],
    checkFullData: state.presetReducer.data.preset.checkFullData,
    loadedData: state?.presetReducer?.data?.preset?.loadedData ? state.presetReducer.data.preset.loadedData : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetSelectedDataset: (payload) => dispatch(SetSelectedDataset(payload)),
    SetCheckFullData: (payload) => dispatch(SetCheckFullData(payload)),
    SetDataFiles: (payload) => dispatch(SetDataFiles(payload)),
    SetLoadedData: (payload) => dispatch(SetLoadedData(payload)),
    ResetDataTypesData: () => dispatch(ResetDataTypesData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Preset);
