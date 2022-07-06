import { Box, Chip, InputLabel, MenuItem, OutlinedInput, Select } from "@mui/material";
import React, { useState } from "react";
import { StyledGrid, StyledTypography } from "../../../Styles";

const DataTypes = () => {
  const names = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const [personName, setPersonName] = useState([]);

  const handleChange = (e) => {
    setPersonName(e.target.value);
  };
  return (
    <>
      <StyledTypography variant="h6" component="div" style={{ fontWeight: 600 }} pb={1}>
        Data Types
      </StyledTypography>
      <StyledGrid container pb={1}>
        <StyledGrid item xs={3} pr={1}>
          <InputLabel>Chip</InputLabel>
          <Select
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </StyledGrid>
        <StyledGrid item xs={3} pr={1}></StyledGrid>
        <StyledGrid item xs={3} pr={1}></StyledGrid>
        <StyledGrid item xs={3}></StyledGrid>
      </StyledGrid>
    </>
  );
};

export default DataTypes;
