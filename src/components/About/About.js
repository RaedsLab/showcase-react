import React from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "./About.css";

// UI
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const About = props => {
  return (
    <div className="wrapper">
      <Paper className={props.classes.paper}>
        <div className={props.classes.content}>
          <Typography variant="h4" color="inherit">
            Showcase React
          </Typography>
          <Typography variant="body1" color="inherit">
            A simple project that uses simple techniques to show how React,
            Redux and data-fetching work.
          </Typography>
          <Typography variant="body1" color="inherit">
            It is based on `create-react-app`.
          </Typography>
          <Typography variant="body1" color="inherit">
            You can find this project on Github, PRs are welcome{" "}
            <a
              href="https://github.com/RaedsLab/showcase-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              RaedsLab/showcase-react
            </a>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
