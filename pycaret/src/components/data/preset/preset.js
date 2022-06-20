import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { BorderedDataSetDiv, StyledFormControl } from "../../../Styles";
import Select from "@mui/material/Select";
import TableView from "./tableview";
import useSynchronousState from "../../../customHooks/useSynchronousState";
import Loader from "../../loader/loader";
import { Checkbox } from "@mui/material";
import { Grid } from "@mui/material";
import { FormControlLabel } from "@mui/material";

const Preset = () => {
  const [dataFiles, setDataFiles] = useState([]);
  const [loadedData, setLoadedData] = useState({});
  const loading = useSynchronousState(false);
  const [selectedDataset, setSelectedDataset] = useState("");
  const [checkFullData, setCheckFullData] = useState(false);

  const handleChange = (event) => {
    loading.set(true);
    fetch("/loadData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event.target.value),
    })
      .then((response) => response.json())
      .then((response) => {
        setLoadedData(response);
        loading.set(false);
      })
      .catch((error) => console.log("error", error));
    setSelectedDataset(event.target.value);
  };

  useEffect(() => {
    fetch("/datasets").then((res) =>
      res.json().then((data) => {
        setDataFiles(data.files);
      })
    );
  }, []);
  return (
    <>
      <Grid container width={"1000px"}>
        <Grid item xs={8}>
          <StyledFormControl>
            <InputLabel id="demo-simple-select-label">Datasets</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedDataset}
              label="Datasets"
              onChange={handleChange}
            >
              {dataFiles.map((data) => {
                return (
                  <MenuItem value={data} key={data}>
                    {data}
                  </MenuItem>
                );
              })}
            </Select>
          </StyledFormControl>
        </Grid>
        <Grid item xs={4} display="flex" justifyContent="flex-end">
          <FormControlLabel
            control={<Checkbox value={checkFullData} />}
            label="Load Full Data"
          />
        </Grid>
      </Grid>
      {selectedDataset && (
        <BorderedDataSetDiv mt="2">
          {loading.get() ? <Loader /> : <TableView loadedData={loadedData} />}
        </BorderedDataSetDiv>
      )}
    </>
  );
};

export default Preset;
