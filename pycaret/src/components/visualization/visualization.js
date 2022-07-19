import { AddChart, DeleteChart, SetChartTypes } from "../../actions/visualizationActions/visualizationActions";
import { Button, Select } from "@mui/material";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledFontAwesomeIcon,
  StyledFormControl,
  StyledGrid,
  StyledTypography
} from "../../Styles";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InputLabel from "@mui/material/InputLabel";
import React from "react";
import { connect } from "react-redux";

const Visualization = (props) => {
  const getChartTypes = () => {
    fetch("/getChartTypes").then((res) =>
      res.json().then((data) => {
        props.SetChartTypes(data);
      })
    );
  };

  const handleAddChartClick = () => {
    if (props.charts.length === 0) {
      getChartTypes();
    }
    props.AddChart();
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
          <div style={{ textAlign: "end" }}>
            <Button variant="outlined" onClick={handleAddChartClick}>
              <StyledFontAwesomeIcon icon={faCirclePlus} pr={5} />
              Add Chart
            </Button>
            <StyledGrid container pb={1}>
              {props.charts.map((chart) => (
                <StyledGrid item xs={2} pr={1} pb={3}>
                  <Card key={chart}>
                    {/* <CardMedia
                  component="img"
                  height="140"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                /> */}
                    <CardContent>
                      <StyledTypography variant="h5" component="div">
                        {chart.chartName} - {chart.chartId}
                      </StyledTypography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={(event) => handleDeleteChart(event, chart.chartId)}>
                        <StyledFontAwesomeIcon icon={faTrash} pr={5} />
                      </Button>
                    </CardActions>
                  </Card>
                </StyledGrid>
              ))}
            </StyledGrid>
            <StyledFormControl>
              <InputLabel>Chart Type</InputLabel>
              <Select native label="Chart Type">
                {Object.keys(props.chartTypes).map((key) => (
                  <optgroup key={key} label={key}>
                    {props.chartTypes[key].map((chartType) => (
                      <option key={chartType}>{chartType}</option>
                    ))}
                  </optgroup>
                ))}
              </Select>
            </StyledFormControl>
          </div>
          {/* <ChartSelect></ChartSelect> */}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetChartTypes: (payload) => dispatch(SetChartTypes(payload)),
    AddChart: () => dispatch(AddChart()),
    DeleteChart: (payload) => dispatch(DeleteChart(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Visualization);
