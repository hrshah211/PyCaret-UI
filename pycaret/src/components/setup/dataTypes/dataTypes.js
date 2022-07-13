import { Box, Chip, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {
  SetCategoricalFeatures,
  SetDateFeatures,
  SetIgnoredFeatures,
  SetKeepFeatures,
  SetNumericFeatures,
  SetOrdinalFeatures,
  SetOrdinalFeaturesOrder,
  SetSelectedFeatures,
  SetTextFeatures,
} from "../../../actions/setupActions/dataTypesActions/dataTypesActions";
import { StyledFormControl, StyledGrid, StyledTypography } from "../../../Styles";

import React from "react";
import { connect } from "react-redux";

const DataTypes = (props) => {
  const getOrdinalFeatureData = (columnName) => {
    fetch("/loadOrdinalColumnData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ columnName: columnName, dataset: props.selectedDataset }),
    })
      .then((response) => response.json())
      .then((response) => {
        props.SetOrdinalFeaturesOrder({ columnName: columnName, response: response });
      });
  };

  const handleNumericFeaturesChange = (e) => {
    props.SetNumericFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleCategoricalFeaturesChange = (e) => {
    props.SetCategoricalFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleDateFeaturesChange = (e) => {
    props.SetDateFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleTextFeaturesChange = (e) => {
    props.SetTextFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleKeepFeaturesChange = (e) => {
    props.SetKeepFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleIgnoredFeaturesChange = (e) => {
    props.SetIgnoredFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleOrdinalFeaturesChange = (e) => {
    props.SetOrdinalFeatures(e.target.value);
    props.SetOrdinalFeaturesOrder(getOrdinalFeatureData(e.target.value));
    props.SetSelectedFeatures();
  };

  const handleOrdinalFeaturesOrderClick = (e) => {
    console.log(e.target.value);
  };

  const isSelected = (name, category) => {
    switch (category) {
      case "Numeric":
        return !props.numericFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Categorical":
        return !props.categoricalFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Date":
        return !props.dateFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Text":
        return !props.textFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Keep":
        return !props.keepFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Ignored":
        return !props.ignoredFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Ordinal":
        return !props.ordinalFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      default:
    }
  };

  return (
    <>
      <StyledTypography variant="h6" component="div" style={{ fontWeight: 600 }} pb={1}>
        Data Types
      </StyledTypography>
      <StyledGrid container pb={1}>
        <StyledGrid item xs={2} pr={1}>
          <StyledFormControl>
            <InputLabel>Numeric Features</InputLabel>
            <Select
              multiple
              label="Numeric Features"
              value={props.numericFeatures}
              onChange={handleNumericFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Numeric")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={2} pr={1}>
          <StyledFormControl>
            <InputLabel>Categorical Features</InputLabel>
            <Select
              multiple
              label="Categorical Features"
              value={props.categoricalFeatures}
              onChange={handleCategoricalFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Categorical")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={2} pr={1}>
          <StyledFormControl>
            <InputLabel>Date Features</InputLabel>
            <Select
              multiple
              label="Date Features"
              value={props.dateFeatures}
              onChange={handleDateFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Date")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={2} pr={1}>
          <StyledFormControl>
            <InputLabel>Text Features</InputLabel>
            <Select
              multiple
              label="Text Features"
              value={props.textFeatures}
              onChange={handleTextFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Text")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={2} pr={1}>
          <StyledFormControl>
            <InputLabel>Keep Features</InputLabel>
            <Select
              multiple
              label="Keep Features"
              value={props.keepFeatures}
              onChange={handleKeepFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Keep")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={2}>
          <StyledFormControl>
            <InputLabel>Ignored Features</InputLabel>
            <Select
              multiple
              label="Ignored Features"
              value={props.ignoredFeatures}
              onChange={handleIgnoredFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Ignored")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
      </StyledGrid>
      <StyledGrid container>
        <StyledGrid item xs={2} pr={1} pb={1}>
          <StyledFormControl>
            <InputLabel>Ordinal Features</InputLabel>
            <Select
              multiple
              label="Ordinal Features"
              value={props.ordinalFeatures}
              onChange={handleOrdinalFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Ordinal")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        {Object.keys(props.ordinalFeaturesOrder).map((key) => (
          <StyledGrid item xs={2} pr={1} key={key} pb={1}>
            <StyledFormControl>
              <TextField
                label={key}
                value={props.ordinalFeaturesOrder[key]}
                onClick={handleOrdinalFeaturesOrderClick}
                InputProps={{
                  readOnly: true,
                }}
              />
            </StyledFormControl>
          </StyledGrid>
        ))}
      </StyledGrid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDataset: state?.presetReducer?.preset?.selectedDataset ? state.presetReducer.preset.selectedDataset : "",
    dataColumns: state?.presetReducer?.preset?.dataColumns ? state.presetReducer.preset.dataColumns : [],
    numericFeatures: state?.dataTypesReducer?.dataTypes?.numericFeatures
      ? state.dataTypesReducer.dataTypes.numericFeatures
      : [],
    categoricalFeatures: state?.dataTypesReducer?.dataTypes?.categoricalFeatures
      ? state.dataTypesReducer.dataTypes.categoricalFeatures
      : [],
    dateFeatures: state?.dataTypesReducer?.dataTypes?.dateFeatures ? state.dataTypesReducer.dataTypes.dateFeatures : [],
    textFeatures: state?.dataTypesReducer?.dataTypes?.textFeatures ? state.dataTypesReducer.dataTypes.textFeatures : [],
    keepFeatures: state?.dataTypesReducer?.dataTypes?.keepFeatures ? state.dataTypesReducer.dataTypes.keepFeatures : [],
    ignoredFeatures: state?.dataTypesReducer?.dataTypes?.ignoredFeatures
      ? state.dataTypesReducer.dataTypes.ignoredFeatures
      : [],
    selectedFeatures: state?.dataTypesReducer?.dataTypes?.selectedFeatures
      ? state.dataTypesReducer.dataTypes.selectedFeatures
      : [],
    ordinalFeatures: state?.dataTypesReducer?.dataTypes?.ordinalFeatures
      ? state.dataTypesReducer.dataTypes.ordinalFeatures
      : [],
    ordinalFeaturesOrder: state?.dataTypesReducer?.dataTypes?.ordinalFeaturesOrder
      ? state.dataTypesReducer.dataTypes.ordinalFeaturesOrder
      : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetNumericFeatures: (payload) => dispatch(SetNumericFeatures(payload)),
    SetCategoricalFeatures: (payload) => dispatch(SetCategoricalFeatures(payload)),
    SetDateFeatures: (payload) => dispatch(SetDateFeatures(payload)),
    SetTextFeatures: (payload) => dispatch(SetTextFeatures(payload)),
    SetKeepFeatures: (payload) => dispatch(SetKeepFeatures(payload)),
    SetIgnoredFeatures: (payload) => dispatch(SetIgnoredFeatures(payload)),
    SetSelectedFeatures: () => dispatch(SetSelectedFeatures()),
    SetOrdinalFeatures: (payload) => dispatch(SetOrdinalFeatures(payload)),
    SetOrdinalFeaturesOrder: (payload) => dispatch(SetOrdinalFeaturesOrder(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTypes);
