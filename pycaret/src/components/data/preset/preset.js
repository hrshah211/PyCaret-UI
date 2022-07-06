import { BorderedDataSetDiv, StyledFormControl, StyledGrid } from "../../../Styles";
import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";

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
    fetch("/datasets").then((res) =>
      res.json().then((data) => {
        setDataFiles(data.files);
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
        </StyledGrid>
        <StyledGrid item xs={4} display="flex" justifyContent={"center"} alignItems={"center"}>
          {selectedDataset && !loading.get() && (
            <>
              Shape {loadedData.length} rows and {Object.keys(loadedData[0]).length} columns
            </>
          )}
        </StyledGrid>

        <StyledGrid item xs={4} display="flex" justifyContent="flex-end">
          <FormControlLabel
            control={<Checkbox value={checkFullData.get()} onChange={handleFullDataChange} />}
            label="Load Full Data"
          />
        </StyledGrid>
      </StyledGrid>
      {selectedDataset && (
        <BorderedDataSetDiv mt="2">
          {loading.get() ? <Loader /> : <TableView loadedData={loadedData} />}
        </BorderedDataSetDiv>
      )}
    </>
  );
};

export default Preset;
