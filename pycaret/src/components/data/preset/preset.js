import React, { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { BorderedDataSetDiv, StyledFormControl } from "../../../Styles";
import Select from "@mui/material/Select";
import TableView from "./tableview";
import useSynchronousState from "../../../customHooks/useSynchronousState";
import Loader from "../../loader/loader";

const Preset = () => {
  const [dataFiles, setDataFiles] = useState([]);
  const [loadedData, setLoadedData] = useState({});
  const loading = useSynchronousState(false);
  const [selectedDataset, setSelectedDataset] = useState("");

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
      <div>
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
        {selectedDataset && (
          <BorderedDataSetDiv mt="2">
            {loading.get() ? <Loader /> : <TableView loadedData={loadedData} />}
          </BorderedDataSetDiv>
        )}
      </div>
    </>
  );
};

export default Preset;
