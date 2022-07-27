import {
  AddChart,
  DeleteChart,
  SetChartDetails,
  SetChartTypes,
} from "../../actions/visualizationActions/visualizationActions";
import { Button, Modal, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledBox,
  StyledCardContent,
  StyledDiv,
  StyledFontAwesomeIcon,
  StyledFormControl,
  StyledGrid,
  StyledTypography,
} from "../../Styles";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import { API_URL } from "../../store/apiURL";
import AccordionDetails from "@mui/material/AccordionDetails";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Chart from "./chart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import Loader from "../loader/loader";
import { connect } from "react-redux";
import useSynchronousState from "../../customHooks/useSynchronousState";

const Visualization = (props) => {
  const [modalChart, setModalChart] = useState({});
  const loading = useSynchronousState(false);

  const getChartTypes = () => {
    fetch(API_URL.GET_CHART_TYPES).then((res) =>
      res.json().then((data) => {
        props.SetChartTypes(data);
        loading.set(false);
      })
    );
  };

  const handleAddChartClick = () => {
    if (props.chartTypes.length === 0 && props.charts.length === 0) {
      loading.set(true);
      getChartTypes();
    }
    props.AddChart();
  };

  const handleChartNameChange = (e) => {
    setModalChart({ ...modalChart, chartName: e.target.value });
  };

  const handleChartTypeChange = (e) => {
    setModalChart({ ...modalChart, chartType: e.target.value });
  };

  const handleOpenChartClick = (event, chartId) => {
    const chart = props.charts.filter((chart) => chart.chartId === chartId)[0];
    setModalChart(chart);
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    props.SetChartDetails(modalChart);
    setOpen(false);
  };

  const handleDeleteChart = (event, chartId) => {
    props.DeleteChart(chartId);
  };

  return (
    <>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography variant="h5" component="div" style={{ fontWeight: 550 }}>
            Visualization
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <div style={{ display: "flex" }}>
            <div style={{ width: "80%" }}>
              {!props.checkFullData && (
                <Alert severity="error">Load the full dataset for accurate visualization!</Alert>
              )}
            </div>
            <div style={{ textAlign: "end", width: "20%" }}>
              <Button variant="outlined" onClick={handleAddChartClick}>
                <StyledFontAwesomeIcon icon={faCirclePlus} pr={5} />
                Add Chart
              </Button>
            </div>
          </div>
          <StyledGrid container pb={1}>
            {loading.get() ? (
              <>
                <Loader />
                <StyledTypography pl={5} pt={1} variant="h6" component="div">
                  Loading Chart Types...
                </StyledTypography>
              </>
            ) : (
              <>
                {props.charts.map((chart) => (
                  <StyledGrid item xs={2} pr={1} pt={1} pb={2} key={chart.chartId}>
                    <Card>
                      <StyledDiv onClick={(event) => handleOpenChartClick(event, chart.chartId)}>
                        <StyledCardContent>
                          <StyledTypography variant="h5" component="div">
                            {chart.chartName}
                          </StyledTypography>
                        </StyledCardContent>
                      </StyledDiv>
                      <CardActions>
                        <Button size="small" onClick={(event) => handleDeleteChart(event, chart.chartId)}>
                          <StyledFontAwesomeIcon icon={faTrash} pr={5} />
                        </Button>
                      </CardActions>
                    </Card>
                    <Modal open={open} onClose={handleClose}>
                      <StyledBox mnw={700} mnh={700} mxh={1000}>
                        <StyledGrid container pt={1} pl={1}>
                          <StyledGrid item xs={6} pr={1}>
                            <StyledFormControl>
                              <TextField
                                label="Chart Name"
                                type="text"
                                value={modalChart.chartName}
                                InputLabelProps={{
                                  shrink: true,
                                }}
                                onChange={handleChartNameChange}
                              />
                            </StyledFormControl>
                          </StyledGrid>
                          <StyledGrid item xs={6} pr={1}>
                            <StyledFormControl>
                              <InputLabel>Chart Type</InputLabel>
                              <Select
                                native
                                label="Chart Type"
                                onChange={handleChartTypeChange}
                                value={modalChart.chartType}
                              >
                                {Object.keys(props.chartTypes).map((key) => (
                                  <optgroup key={key} label={key}>
                                    {props.chartTypes[key].map((chartType) => (
                                      <option key={chartType}>{chartType}</option>
                                    ))}
                                  </optgroup>
                                ))}
                              </Select>
                            </StyledFormControl>
                          </StyledGrid>
                        </StyledGrid>
                        <StyledGrid container>
                          <StyledGrid item>
                            <Chart chart={modalChart} />
                          </StyledGrid>
                        </StyledGrid>
                      </StyledBox>
                    </Modal>
                  </StyledGrid>
                ))}
              </>
            )}
          </StyledGrid>
        </AccordionDetails>
      </StyledAccordion>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chartTypes: state?.visualizationReducer?.visualization?.chartTypes
      ? state.visualizationReducer.visualization.chartTypes
      : [],
    charts: state?.visualizationReducer?.visualization?.charts ? state.visualizationReducer.visualization.charts : [],
    checkFullData: state.presetReducer.data.preset.checkFullData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetChartTypes: (payload) => dispatch(SetChartTypes(payload)),
    AddChart: () => dispatch(AddChart()),
    DeleteChart: (payload) => dispatch(DeleteChart(payload)),
    SetChartDetails: (payload) => dispatch(SetChartDetails(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visualization);
