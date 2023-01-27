import { API_URL, getURL } from "../../store/apiURL";
import {
  AddChart,
  DeleteChart,
  SetChartDetails,
  SetChartTypes,
} from "../../actions/visualizationActions/visualizationActions";
import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import {
  StyledAccordion,
  StyledAccordionSummary,
  StyledBox,
  StyledCardContent,
  StyledDiv,
  StyledFontAwesomeIcon,
  StyledGrid,
  StyledTypography,
} from "../../styles";
import { faCirclePlus, faTrash } from "@fortawesome/free-solid-svg-icons";

import AccordionDetails from "@mui/material/AccordionDetails";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Chart from "./chart";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Loader from "../loader/loader";
import { connect } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";
import useSynchronousState from "../../customHooks/useSynchronousState";

const Visualization = (props) => {
  const [modalChart, setModalChart] = useState({});
  const loading = useSynchronousState(false);

  const mobile = useMediaQuery("(max-width:600px)");
  const desktop = useMediaQuery("(min-width:900px)");
  const tablet = !mobile && !desktop;

  const getChartTypes = () => {
    fetch(getURL(API_URL.GET_CHART_TYPES)).then((res) =>
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

  const handleOpenChartClick = (event, chartId) => {
    const chart = props.charts.filter((chart) => chart.chartId === chartId)[0];
    setModalChart(chart);
    setOpen(true);
  };

  const [open, setOpen] = useState(false);

  const handleDeleteChart = (event, chartId) => {
    props.DeleteChart(chartId);
  };

  return (
    <>
      <StyledAccordion>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <StyledTypography variant="h5" component="div">
            Visualization
          </StyledTypography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <StyledGrid container>
            <StyledGrid xs={mobile ? 12 : 10}>
              {!props.checkFullData && (
                <Alert severity="error">
                  Load the full dataset for accurate visualization!
                </Alert>
              )}
            </StyledGrid>
            <StyledGrid
              xs={mobile ? 12 : 2}
              style={{ textAlign: mobile ? "center" : "end" }}
              pt={1}
            >
              <Button
                variant="outlined"
                size="large"
                onClick={handleAddChartClick}
              >
                <StyledFontAwesomeIcon icon={faCirclePlus} pr={5} />
                <StyledTypography>Add Chart</StyledTypography>
              </Button>
            </StyledGrid>
          </StyledGrid>
          <StyledGrid container pt={2}>
            {loading.get() ? (
              <>
                <Loader />
                <StyledTypography pl={5} pt={1} variant="h6" component="div">
                  Loading Chart Types...
                </StyledTypography>
              </>
            ) : (
              <>
                {props.charts.map((chart, i) => (
                  <StyledGrid
                    item
                    xs={mobile ? 12 : desktop ? 2 : 4}
                    pr={
                      mobile ||
                      (tablet && (i - 2) % 3 === 0) ||
                      (desktop && (i - 5) % 6 === 0)
                        ? 0
                        : 1
                    }
                    pt={1}
                    pb={2}
                    key={chart.chartId}
                  >
                    <Card>
                      <StyledDiv
                        onClick={(event) =>
                          handleOpenChartClick(event, chart.chartId)
                        }
                      >
                        <StyledCardContent>
                          <StyledTypography variant="h5" component="div">
                            {chart.chartName}
                          </StyledTypography>
                        </StyledCardContent>
                      </StyledDiv>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={(event) =>
                            handleDeleteChart(event, chart.chartId)
                          }
                        >
                          <StyledFontAwesomeIcon icon={faTrash} pr={5} />
                        </Button>
                      </CardActions>
                    </Card>
                    <Modal open={open}>
                      <StyledBox
                        mnw={70}
                        mxh={90}
                        style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}
                      >
                        <Chart chart={modalChart} close={setOpen} />
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
    charts: state?.visualizationReducer?.visualization?.charts
      ? state.visualizationReducer.visualization.charts
      : [],
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
