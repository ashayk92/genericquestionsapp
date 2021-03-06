import React from "react";
import CanvasJSReact from "../utils/canvasjs.react";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;
const GeneratePieChart = (props) => {
  const { options } = props;
  return (
    <div style={{ margin: "20px" }}>
      <CanvasJSChart
        options={options}
        /* onRef={ref => this.chart = ref} */
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
};

export default GeneratePieChart;
