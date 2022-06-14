import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Preset = () => {
  const [dataFiles, setDataFiles] = useState([]);
  const [loadedData, setloadedData] = useState({});
  const [selectedDataset, setSelectedDataset] = useState("");

  const handleChange = (event) => {
    fetch("/loadData", {
      'method': 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event.target.value)
    }).then(response => response.json())
      .catch(error => console.log(error))
      .then((response) => setloadedData(response))
      .catch(error => console.log('error', error))
    setSelectedDataset(event.target.value);
    console.log(loadedData)
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
      <Box>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Datasets</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedDataset}
            label="Datasets"
            onChange={handleChange}
          >
            {dataFiles.map((data) => {
              return <MenuItem value={data}>{data}</MenuItem>;
            })}
          </Select>
        </FormControl>
      </Box>
      <div>{loadedData['columns']}</div>
      <br></br>
      <div>{loadedData['data']}</div>
    </>
  );
};

export default Preset;
