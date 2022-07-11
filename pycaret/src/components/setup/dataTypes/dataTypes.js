import { Box, Chip, InputLabel, MenuItem, Select } from "@mui/material";
import {
  SetCategoricalFeatures,
  SetDateFeatures,
  SetIgnoredFeatures,
  SetNumericFeatures,
} from "../../../actions/setupActions/dataTypesActions/dataTypesActions";
import { StyledFormControl, StyledGrid, StyledTypography } from "../../../Styles";

import React from "react";
import { connect } from "react-redux";

const DataTypes = (props) => {
  const handleNumericFeaturesChange = (e) => {
    props.SetNumericFeatures(e.target.value);
  };

  const handleCategoricalFeaturesChange = (e) => {
    props.SetCategoricalFeatures(e.target.value);
  };

  const handleDateFeaturesChange = (e) => {
    props.SetDateFeatures(e.target.value);
  };

  const handleIgnoredFeaturesChange = (e) => {
    props.SetIgnoredFeatures(e.target.value);
  };

  return (
    <>
      <StyledTypography variant="h6" component="div" style={{ fontWeight: 600 }} pb={1}>
        Data Types
      </StyledTypography>
      <StyledGrid container pb={1}>
        <StyledGrid item xs={3} pr={1}>
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
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={3} pr={1}>
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
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={3} pr={1}>
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
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={3}>
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
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
      </StyledGrid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dataColumns: state?.presetReducer?.preset?.dataColumns ? state.presetReducer.preset.dataColumns : [],
    numericFeatures: state?.dataTypesReducer?.dataTypes?.numericFeatures
      ? state.dataTypesReducer.dataTypes.numericFeatures
      : [],
    categoricalFeatures: state?.dataTypesReducer?.dataTypes?.categoricalFeatures
      ? state.dataTypesReducer.dataTypes.categoricalFeatures
      : [],
    dateFeatures: state?.dataTypesReducer?.dataTypes?.dateFeatures ? state.dataTypesReducer.dataTypes.dateFeatures : [],
    ignoredFeatures: state?.dataTypesReducer?.dataTypes?.ignoredFeatures
      ? state.dataTypesReducer.dataTypes.ignoredFeatures
      : [],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetNumericFeatures: (payload) => dispatch(SetNumericFeatures(payload)),
    SetCategoricalFeatures: (payload) => dispatch(SetCategoricalFeatures(payload)),
    SetDateFeatures: (payload) => dispatch(SetDateFeatures(payload)),
    SetIgnoredFeatures: (payload) => dispatch(SetIgnoredFeatures(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTypes);
