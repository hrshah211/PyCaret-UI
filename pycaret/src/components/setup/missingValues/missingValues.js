import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import {
  SetCategoricalImputation,
  SetCategoricalIterativeImputer,
  SetImputationType,
  SetIterativeImputationIterations,
  SetNumericImputation,
  SetNumericIterativeImputer,
  SetOtherCategoricalImputation,
  SetOtherNumericImputation,
} from "../../../actions/setupActions/missingValuesActions/missingValuesActions";
import { StyledFormControl, StyledGrid, StyledTypography } from "../../../Styles";

import React from "react";
import { connect } from "react-redux";
import setupParameters from "../setupParameters";

const getDefaultValue = (source) => {
  const defaultData = source.filter(([i, data]) => data.default === true);
  return defaultData ? defaultData[0][1] : null;
};

const getSelectedValue = (source, value) => {
  const selectedData = source.filter(([i, data]) => data.name === value);
  return selectedData ? selectedData[0][1] : null;
};

const MissingValues = (props) => {
  //#region Imputation Type

  const handleImputationTypeChange = (event) => {
    props.SetImputationType(
      getSelectedValue(Object.entries(setupParameters.missing_values.imputation_type), event.target.value)
    );
  };

  //#endregion

  //#region Numeric Imputation

  const handleNumericImputationChange = (event) => {
    props.SetNumericImputation(
      getSelectedValue(Object.entries(setupParameters.missing_values.numeric_imputation), event.target.value)
    );
  };

  //#endregion

  //#region Other Numeric Imputation

  const handleOtherNumericImputationsChange = (event) => {
    props.SetOtherNumericImputation(event.target.value);
  };

  //#endregion

  //#region Categorical Imputation

  const handleCategoricalImputationChange = (event) => {
    props.SetCategoricalImputation(
      getSelectedValue(Object.entries(setupParameters.missing_values.categorical_imputation), event.target.value)
    );
  };

  //#endregion

  //#region Other Categorical Imputation

  const handleOtherCategoricalImputationsChange = (event) => {
    props.SetOtherCategoricalImputation(event.target.value);
  };

  //#endregion

  //#region Numeric Iterative Imputer

  const handleNumericIterativeImputerChange = (event) => {
    props.SetNumericIterativeImputer(
      getSelectedValue(Object.entries(setupParameters.missing_values.regressors), event.target.value)
    );
  };

  //#endregion

  //#region iterative Imputation Iterations

  const handleIterativeImputationIterationsChange = (event) => {
    props.SetIterativeImputationIterations(event.target.value);
  };

  //#endregion

  //#region Categorical Iterative Imputer

  const handleCategoricalIterativeImputerChange = (event) => {
    props.SetCategoricalIterativeImputer(
      getSelectedValue(Object.entries(setupParameters.missing_values.regressors), event.target.value)
    );
  };

  //#endregion

  return (
    <>
      <StyledTypography variant="h6" component="div" pb={1}>
        Missing Values
      </StyledTypography>
      <StyledGrid container pb={1}>
        <StyledGrid item xs={3} pr={1}>
          <StyledFormControl>
            <InputLabel>Imputation Type</InputLabel>
            <Select value={props.imputationType.name} label="Imputation Type" onChange={handleImputationTypeChange}>
              {setupParameters.missing_values.imputation_type.map((data) => {
                return (
                  <MenuItem value={data.name} key={data.code}>
                    {data.name}
                  </MenuItem>
                );
              })}
            </Select>
          </StyledFormControl>
        </StyledGrid>
      </StyledGrid>
      {props.imputationType.name === "Simple" && (
        <>
          <StyledGrid container pb={1}>
            <StyledGrid item xs={3} pr={1}>
              <StyledFormControl>
                <InputLabel>Numeric Imputation</InputLabel>
                <Select
                  value={props.numericImputation.name}
                  label="Numeric Imputation"
                  onChange={handleNumericImputationChange}
                >
                  {setupParameters.missing_values.numeric_imputation.map((data) => {
                    return (
                      <MenuItem value={data.name} key={data.code}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </StyledFormControl>
            </StyledGrid>
            {props.numericImputation.name === "Other" && (
              <StyledGrid item xs={3} pr={1}>
                <StyledFormControl>
                  <TextField
                    type="number"
                    label="Other Numeric Imputation"
                    value={props.otherNumericImputation}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={handleOtherNumericImputationsChange}
                  />
                </StyledFormControl>
              </StyledGrid>
            )}
            <StyledGrid item xs={3} pr={1}>
              <StyledFormControl>
                <InputLabel>Categorical Imputation</InputLabel>
                <Select
                  value={props.categoricalImputation.name}
                  label="Categorical Imputation"
                  onChange={handleCategoricalImputationChange}
                >
                  {setupParameters.missing_values.categorical_imputation.map((data) => {
                    return (
                      <MenuItem value={data.name} key={data.code}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </StyledFormControl>
            </StyledGrid>
            {props.categoricalImputation.name === "Other" && (
              <StyledGrid item xs={3} pr={1}>
                <StyledFormControl>
                  <TextField
                    label="Other Categorical Imputation"
                    value={props.otherCategoricalImputation}
                    onChange={handleOtherCategoricalImputationsChange}
                  />
                </StyledFormControl>
              </StyledGrid>
            )}
          </StyledGrid>
        </>
      )}
      {props.imputationType.name === "Iterative" && (
        <>
          <StyledGrid container pb={1}>
            <StyledGrid item xs={4} pr={1}>
              <StyledFormControl>
                <InputLabel>Numeric Iterative Imputer</InputLabel>
                <Select
                  value={props.numericIterativeImputer.name}
                  label="Numeric Iterative Imputer"
                  onChange={handleNumericIterativeImputerChange}
                >
                  {setupParameters.missing_values.regressors.map((data) => {
                    return (
                      <MenuItem value={data.name} key={data.code}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </StyledFormControl>
            </StyledGrid>
            <StyledGrid item xs={4}>
              <StyledFormControl>
                <TextField
                  label="Iterative Imputation Iterations"
                  type="number"
                  value={props.iterativeImputationIterations}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={handleIterativeImputationIterationsChange}
                />
              </StyledFormControl>
            </StyledGrid>
            <StyledGrid item xs={4} pl={1}>
              <StyledFormControl>
                <InputLabel>Categorical Iterative Imputer</InputLabel>
                <Select
                  value={props.categoricalIterativeImputer.name}
                  label="Categorical Iterative Imputer"
                  onChange={handleCategoricalIterativeImputerChange}
                >
                  {setupParameters.missing_values.regressors.map((data) => {
                    return (
                      <MenuItem value={data.name} key={data.code}>
                        {data.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </StyledFormControl>
            </StyledGrid>
          </StyledGrid>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    imputationType: state?.missingValuesReducer?.setup?.missingValues?.imputationType
      ? state.missingValuesReducer.setup.missingValues.imputationType
      : getDefaultValue(Object.entries(setupParameters.missing_values.imputation_type)),
    numericImputation: state?.missingValuesReducer?.setup?.missingValues?.numericImputation
      ? state.missingValuesReducer.setup.missingValues.numericImputation
      : getDefaultValue(Object.entries(setupParameters.missing_values.numeric_imputation)),
    otherNumericImputation: state?.missingValuesReducer?.setup?.missingValues?.otherNumericImputation,
    categoricalImputation: state?.missingValuesReducer?.setup?.missingValues?.categoricalImputation
      ? state.missingValuesReducer.setup.missingValues.categoricalImputation
      : getDefaultValue(Object.entries(setupParameters.missing_values.categorical_imputation)),
    otherCategoricalImputation: state?.missingValuesReducer?.setup?.missingValues?.otherCategoricalImputation,
    numericIterativeImputer: state?.missingValuesReducer?.setup?.missingValues?.numericIterativeImputer
      ? state.missingValuesReducer.setup.missingValues.numericIterativeImputer
      : getDefaultValue(Object.entries(setupParameters.missing_values.regressors)),
    iterativeImputationIterations: state?.missingValuesReducer?.setup?.missingValues?.iterativeImputationIterations
      ? state.missingValuesReducer.setup.missingValues.iterativeImputationIterations
      : 5,
    categoricalIterativeImputer: state?.missingValuesReducer?.setup?.missingValues?.categoricalIterativeImputer
      ? state.missingValuesReducer.setup.missingValues.categoricalIterativeImputer
      : getDefaultValue(Object.entries(setupParameters.missing_values.regressors)),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetImputationType: (payload) => dispatch(SetImputationType(payload)),
    SetNumericImputation: (payload) => dispatch(SetNumericImputation(payload)),
    SetOtherNumericImputation: (payload) => dispatch(SetOtherNumericImputation(payload)),
    SetCategoricalImputation: (payload) => dispatch(SetCategoricalImputation(payload)),
    SetOtherCategoricalImputation: (payload) => dispatch(SetOtherCategoricalImputation(payload)),
    SetNumericIterativeImputer: (payload) => dispatch(SetNumericIterativeImputer(payload)),
    SetIterativeImputationIterations: (payload) => dispatch(SetIterativeImputationIterations(payload)),
    SetCategoricalIterativeImputer: (payload) => dispatch(SetCategoricalIterativeImputer(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MissingValues);
