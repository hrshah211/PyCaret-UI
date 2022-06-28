import { Grid, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

import { StyledFormControl } from "../../../Styles";
import setupParameters from "../setupParameters";

const MissingValues = () => {
  const [imputationType, setImputationType] = useState("");

  const handleImputationTypeChange = (event) => {
    setImputationType(event.target.value);
  };
  return (
    <>
      <Grid container width={"100%"}>
        <Grid item xs={2}>
          <StyledFormControl w="240">
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
        </Grid>
        <Grid item xs={2}>
          <StyledFormControl w="240">
            <InputLabel>Numeric Imputation</InputLabel>
            <Select
              value={imputationType}
              label="Numeric Imputation"
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
        </Grid>
        <Grid item xs={2}>
          <StyledFormControl w="240">
            <InputLabel>Categorical Imputation</InputLabel>
            <Select
              value={imputationType}
              label="Categorical Imputation"
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
        </Grid>
        <Grid item xs={2}>
          <StyledFormControl w="240">
            <InputLabel>Iterative Imputation Iterations</InputLabel>
            <Select
              value={imputationType}
              label="Iterative Imputation Iterations"
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
        </Grid>
        <Grid item xs={2}>
          <StyledFormControl w="240">
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
        </Grid>
        <Grid item xs={2}>
          <StyledFormControl w="240">
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
        </Grid>
      </Grid>
    </>
  );
};

export default MissingValues;
