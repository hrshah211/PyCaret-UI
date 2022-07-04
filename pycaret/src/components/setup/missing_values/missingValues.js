import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  StyledFormControl,
  StyledGrid,
  StyledTypography,
} from "../../../Styles";

import setupParameters from "../setupParameters";

const MissingValues = () => {
  const getDefaultValue = (source) => {
    const defaultData = source.filter(([i, data]) => data.default === true);
    return defaultData ? defaultData[0][1] : null;
  };

  const getSelectedValue = (source, value) => {
    const selectedData = source.filter(([i, data]) => data.name === value);
    return selectedData ? selectedData[0][1] : null;
  };

  //#region Imputation Type
  const [imputationType, setImputationType] = useState(
    getDefaultValue(
      Object.entries(setupParameters.missing_values.imputation_type)
    )
  );

  const handleImputationTypeChange = (event) => {
    setImputationType(
      getSelectedValue(
        Object.entries(setupParameters.missing_values.imputation_type),
        event.target.value
      )
    );
  };
  //#endregion

  //#region Numeric Imputation
  const [numericImputation, setNumericImputation] = useState(
    getDefaultValue(
      Object.entries(setupParameters.missing_values.numeric_imputation)
    )
  );

  const handleNumericImputationChange = (event) => {
    setNumericImputation(
      getSelectedValue(
        Object.entries(setupParameters.missing_values.numeric_imputation),
        event.target.value
      )
    );
  };
  //#endregion

  //#region Other Numeric Imputation
  const [otherNumericImputation, setOtherNumericImputation] = useState();

  const handleOtherNumericImputationsChange = (event) => {
    setOtherNumericImputation(event.target.value);
  };
  //#endregion

  //#region Categorical Imputation
  const [categoricalImputation, setCategoricalImputation] = useState(
    getDefaultValue(
      Object.entries(setupParameters.missing_values.categorical_imputation)
    )
  );

  const handleCategoricalImputationChange = (event) => {
    setCategoricalImputation(
      getSelectedValue(
        Object.entries(setupParameters.missing_values.categorical_imputation),
        event.target.value
      )
    );
  };
  //#endregion

  //#region Other Categorical Imputation
  const [otherCategoricalImputation, setOtherCategoricalImputation] =
    useState();

  const handleOtherCategoricalImputationsChange = (event) => {
    setOtherCategoricalImputation(event.target.value);
  };
  //#endregion

  //#region Numeric Iterative Imputer
  const [numericIterativeImputer, setNumericIterativeImputer] = useState(
    getDefaultValue(Object.entries(setupParameters.missing_values.regressors))
  );

  const handleNumericIterativeImputerChange = (event) => {
    setNumericIterativeImputer(
      getSelectedValue(
        Object.entries(setupParameters.missing_values.regressors),
        event.target.value
      )
    );
  };
  //#endregion

  //#region iterative Imputation Iterations
  const [iterativeImputationIterations, setIterativeImputationIterations] =
    useState(5);

  const handleIterativeImputationIterationsChange = (event) => {
    setIterativeImputationIterations(event.target.value);
  };
  //#endregion

  //#region Categorical Iterative Imputer
  const [categoricalIterativeImputer, setCategoricalIterativeImputer] =
    useState(
      getDefaultValue(Object.entries(setupParameters.missing_values.regressors))
    );

  const handleCategoricalIterativeImputerChange = (event) => {
    setCategoricalIterativeImputer(
      getSelectedValue(
        Object.entries(setupParameters.missing_values.regressors),
        event.target.value
      )
    );
  };
  //#endregion

  return (
    <>
      <StyledTypography
        variant="h6"
        component="div"
        style={{ fontWeight: 600 }}
        pb={1}
      >
        Missing Values
      </StyledTypography>
      <StyledGrid container pb={1}>
        <StyledGrid item xs={3} pr={1}>
          <StyledFormControl>
            <InputLabel>Imputation Type</InputLabel>
            <Select
              value={imputationType.name}
              label="Imputation Type"
              onChange={handleImputationTypeChange}
            >
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
      {imputationType.name === "Simple" && (
        <>
          <StyledGrid container pb={1}>
            <StyledGrid item xs={3} pr={1}>
              <StyledFormControl>
                <InputLabel>Numeric Imputation</InputLabel>
                <Select
                  value={numericImputation.name}
                  label="Numeric Imputation"
                  onChange={handleNumericImputationChange}
                >
                  {setupParameters.missing_values.numeric_imputation.map(
                    (data) => {
                      return (
                        <MenuItem value={data.name} key={data.code}>
                          {data.name}
                        </MenuItem>
                      );
                    }
                  )}
                </Select>
              </StyledFormControl>
            </StyledGrid>
            {numericImputation.name === "Other" && (
              <StyledGrid item xs={3} pr={1}>
                <StyledFormControl>
                  <TextField
                    type="number"
                    label="Other Numeric Imputation"
                    value={otherNumericImputation}
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
                  value={categoricalImputation.name}
                  label="Categorical Imputation"
                  onChange={handleCategoricalImputationChange}
                >
                  {setupParameters.missing_values.categorical_imputation.map(
                    (data) => {
                      return (
                        <MenuItem value={data.name} key={data.code}>
                          {data.name}
                        </MenuItem>
                      );
                    }
                  )}
                </Select>
              </StyledFormControl>
            </StyledGrid>
            {categoricalImputation.name === "Other" && (
              <StyledGrid item xs={3} pr={1}>
                <StyledFormControl>
                  <TextField
                    label="Other Categorical Imputation"
                    value={otherCategoricalImputation}
                    onChange={handleOtherCategoricalImputationsChange}
                  />
                </StyledFormControl>
              </StyledGrid>
            )}
          </StyledGrid>
        </>
      )}
      {imputationType.name === "Iterative" && (
        <>
          <StyledGrid container pb={1}>
            <StyledGrid item xs={4} pr={1}>
              <StyledFormControl>
                <InputLabel>Numeric Iterative Imputer</InputLabel>
                <Select
                  value={numericIterativeImputer.name}
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
                  value={iterativeImputationIterations}
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
                  value={categoricalIterativeImputer.name}
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

export default MissingValues;
