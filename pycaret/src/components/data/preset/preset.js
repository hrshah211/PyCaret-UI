import { BorderedDataSetDiv, StyledFormControl } from "../../../Styles";
import React, { useEffect, useState } from "react";

import { Checkbox } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Grid } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Loader from "../../loader/loader";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TableView from "./tableview";
import useSynchronousState from "../../../customHooks/useSynchronousState";

const Preset = () => {
  const [dataFiles, setDataFiles] = useState([]);
  const [loadedData, setLoadedData] = useState({});
  const loading = useSynchronousState(false);
  const [selectedDataset, setSelectedDataset] = useState("");
  const checkFullData = useSynchronousState(false);

  const handleDataSetChange = (event) => {
    loading.set(true);
    getData(event.target.value, checkFullData.get());
    setSelectedDataset(event.target.value);
  };

  const handleFullDataChange = () => {
    checkFullData.set(!checkFullData.get());
    if (selectedDataset) {
      loading.set(true);
      getData(selectedDataset, checkFullData.get());
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
        setLoadedData(response);
        loading.set(false);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    fetch("/datasets", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataFiles(data.files);
      });
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
              onChange={handleDataSetChange}
              MenuProps={{ style: { height: "300px" } }}
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
            control={
              <Checkbox
                value={checkFullData.get()}
                onChange={handleFullDataChange}
              />
            }
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
