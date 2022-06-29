import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  StyledFormControl,
  StyledGrid,
  StyledTypography,
} from "../../../Styles";

import setupParameters from "../setupParameters";

const MissingValues = () => {
  const [imputationType, setImputationType] = useState("Simple");
  const [numericImputation, setNumericImputation] = useState("Mean");
  const [categoricalImputation, setCategoricalImputation] =
    useState("Constant");
  const [iterativeImputationIterations, setIterativeImputationIterations] =
    useState(0);

  const handleImputationTypeChange = (event) => {
    setImputationType(event.target.value);
  };
  const handleNumericImputationChange = (event) => {
    setNumericImputation(event.target.value);
  };
  const handleCategoricalImputationChange = (event) => {
    setCategoricalImputation(event.target.value);
  };
  const handleIterativeImputationIterationsChange = (event) => {
    setIterativeImputationIterations(event.target.value);
  };
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
        <StyledGrid item xs={4} pr={1}>
          <StyledFormControl fullWidth>
            <InputLabel>Imputation Type</InputLabel>
            <Select
              value={imputationType}
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
        <StyledGrid item xs={4}>
          <StyledFormControl fullWidth>
            <InputLabel>Numeric Imputation</InputLabel>
            <Select
              value={numericImputation}
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
        <StyledGrid item xs={4} pl={1}>
          <StyledFormControl fullWidth>
            <InputLabel>Categorical Imputation</InputLabel>
            <Select
              value={categoricalImputation}
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
      </StyledGrid>
      <StyledGrid container pb={1}>
        <StyledGrid item xs={4} pr={1}>
          <StyledFormControl fullWidth>
            <InputLabel>Numeric Iterative Imputer</InputLabel>
            <Select
              value={imputationType}
              label="Numeric Iterative Imputer"
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
        <StyledGrid item xs={4}>
          <StyledFormControl fullWidth>
            <TextField
              label="Iterative Imputation Iterations"
              type="number"
              value={iterativeImputationIterations}
              InputLabelProps={{
                shrink: true,
              }}
              onchange={handleIterativeImputationIterationsChange}
            />
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={4} pl={1}>
          <StyledFormControl fullWidth>
            <InputLabel>Categorical Iterative Imputer</InputLabel>
            <Select
              value={imputationType}
              label="Categorical Iterative Imputer"
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
    </>
  );
};

export default MissingValues;
