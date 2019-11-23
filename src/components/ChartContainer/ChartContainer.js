import React from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "./ChartContainer.css";

// UI
import { Chart as GoogleChart } from "react-google-charts";
import Paper from "@material-ui/core/Paper";

import { formatNasaDataForChart } from "../../utils/formatter";
import Loading from "../Loading/Loading";

const ChartContainer = props => {
  return (
    <Paper className={props.classes.paper}>
      {props.isLoading ? (
        <Loading />
      ) : (
        <GoogleChart
          chartType="Bar"
          width="100%"
          height="500px"
          options={{
            bars: "horizontal",
            axes: {
              x: {
                label: "Estimated Diameter (km)"
              }
            }
          }}
          data={formatNasaDataForChart(props.data)}
        />
      )}
    </Paper>
  );
};

ChartContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStyles(styles)(ChartContainer);
