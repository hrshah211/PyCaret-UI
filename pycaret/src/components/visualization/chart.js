import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { StyledDiv, StyledFontAwesomeIcon, StyledFormControl, StyledGrid, StyledScrollableDiv, WrappedText, WrappingTextButton } from "../../styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import CloseIcon from "@mui/icons-material/Close";
import Plot from "react-plotly.js";
import SaveIcon from "@mui/icons-material/Save";
import { SetChartDetails } from "../../actions/visualizationActions/visualizationActions";
import { connect } from "react-redux";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const Chart = (props) => {
  const mobile = useMediaQuery("(max-width:600px)");

  const getAxisData = (column) => {
    return props.loadedData.map((x) => x[column]);
  };

  const [chart, setChart] = useState(props.charts.filter((chart) => chart.chartId === props.chart.chartId)[0]);
  const [chartURL, setChartURL] = useState('https://plotly.com/javascript/');
  const [xAxis, setXAxis] = useState(chart.xAxis ? chart.xAxis : "");
  const [xAxisData, setXAxisData] = useState(xAxis ? getAxisData(xAxis) : []);
  const [yAxis, setYAxis] = useState(chart.yAxis ? chart.yAxis : "");
  const [yAxisData, setYAxisData] = useState(yAxis ? getAxisData(yAxis) : []);

  const handleChartNameChange = (e) => {
    setChart({ ...chart, chartName: e.target.value });
  };

  const handleChartTypeChange = (e) => {
    setChart({ ...chart, chartType: e.target.value });
    const categories = Object.values(props.chartTypes);
    const selectedChart = categories.map((charts) => charts.find((c) => c.chartName === e.target.value)).find((c) => c);
    setChartURL(selectedChart ? selectedChart.chartURL : "https://plotly.com/javascript/");
  };

  const handleReset = () => {
    setChart({
      ...chart,
      chartName: "Chart",
      chartType: "",
      xAxis: "",
      yAxis: "",
    });
    setXAxis("");
    setYAxis("");
    setXAxisData([]);
    setYAxisData([]);
  };

  const handleSave = (e) => {
    props.SetChartDetails(chart);
    props.close(false);
  };

  const handleClose = () => {
    props.close(false);
  };

  const handleXAxisChange = (e) => {
    setXAxis(e.target.value);
    setChart({ ...chart, xAxis: e.target.value });
    setXAxisData(getAxisData(e.target.value));
  };

  const handleYAxisChange = (e) => {
    setYAxis(e.target.value);
    setChart({ ...chart, yAxis: e.target.value });
    setYAxisData(getAxisData(e.target.value));
  };

  return (
    <>
      <StyledScrollableDiv style={{ flex: 1 }}>
        <StyledGrid container pt={1} pl={1}>
          <StyledGrid item xs={mobile ? 12 : 6} pr={1}>
            <StyledFormControl>
              <TextField
                label="Chart Name"
                type="text"
                value={chart.chartName}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={handleChartNameChange}
              />
            </StyledFormControl>
          </StyledGrid>
          <StyledGrid item xs={mobile ? 10 : 5} pr={1}>
            <StyledFormControl>
              <InputLabel>Chart Type</InputLabel>
              <Select native label="Chart Type" onChange={handleChartTypeChange} value={chart.chartType}>
                {Object.keys(props.chartTypes).map((key) => (
                  <optgroup key={key} label={key}>
                    {props.chartTypes[key].map((chartType) => (
                      <option key={chartType.chartName}>{chartType.chartName}</option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </StyledFormControl>
          </StyledGrid>
          <StyledGrid item xs={mobile ? 2 : 1} pr={1}>
            {mobile ? (
              <Button>
                <StyledFontAwesomeIcon icon={faFile} />
              </Button>
            ) : (
              <WrappingTextButton
                variant="outlined"
                onClick={() => window.open(chartURL, "_blank")}
                startIcon={<StyledFontAwesomeIcon icon={faFile} pr={5} />}
              >
                <WrappedText>Chart Props</WrappedText>
              </WrappingTextButton>
            )}
          </StyledGrid>
        </StyledGrid>
        <StyledGrid container pt={1} pl={1}>
          <StyledGrid item xs={mobile ? 12 : 6} pr={1}>
            <StyledFormControl>
              <InputLabel>X Axis</InputLabel>
              <Select label="X Axis" value={xAxis} onChange={handleXAxisChange}>
                {props.dataColumns.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </StyledGrid>
          <StyledGrid item xs={mobile ? 12 : 6} pr={1}>
            <StyledFormControl>
              <InputLabel>Y Axis</InputLabel>
              <Select label="Y Axis" value={yAxis} onChange={handleYAxisChange}>
                {props.dataColumns.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </StyledGrid>
        </StyledGrid>
        <StyledGrid container>
          <Plot
            data={[
              {
                x: xAxisData,
                y: yAxisData,
                type: "bar",
              },
            ]}
            layout={{
              title: chart.chartName,
              xaxis: { title: xAxis },
              yaxis: { title: yAxis },
            }}
            useResizeHandler={true}
            style={{ width: "100%", height: "100%" }}
            config={{ toImageButtonOptions: { filename: chart.chartName } }}
          />
        </StyledGrid>
      </StyledScrollableDiv>
      <StyledDiv justifyContent="flex-end" style={{ flex: "0 0 auto" }} pb={10} pt={10}>
        <Button
          variant="outlined"
          onClick={handleReset}
          startIcon={<StyledFontAwesomeIcon icon={faRefresh} pr={5} />}
          style={{ width: "80px", marginRight: "10px" }}
        >
          Reset
        </Button>
        <Button variant="outlined" onClick={handleClose} startIcon={<CloseIcon />} style={{ width: "80px", marginRight: "10px" }}>
          Close
        </Button>
        <Button variant="contained" onClick={handleSave} startIcon={<SaveIcon />} style={{ width: "80px", marginRight: "10px" }}>
          Save
        </Button>
      </StyledDiv>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chartTypes: state?.visualizationReducer?.visualization?.chartTypes ? state.visualizationReducer.visualization.chartTypes : [],
    charts: state?.visualizationReducer?.visualization?.charts ? state.visualizationReducer.visualization.charts : [],
    dataColumns: state?.presetReducer?.data?.preset?.dataColumns ? state.presetReducer.data.preset.dataColumns : [],
    loadedData: state?.presetReducer?.data?.preset?.loadedData ? state.presetReducer.data.preset.loadedData : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return { SetChartDetails: (payload) => dispatch(SetChartDetails(payload)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
