import Plot from "react-plotly.js";
import React from "react";
import { connect } from "react-redux";

const Chart = ({ chart }) => {
  return (
    <>
      <div>{chart.chartType}</div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ title: "A Fancy Plot" }}
      />
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
