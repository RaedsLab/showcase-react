import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styles from "./Footer.css";

const Footer = props => {
  return (
    <div className={props.classes.footer}>
      <Typography variant="body2" color="inherit">
        Made in Nice, France, by <a href="https://raed.it/">Raed Chammam</a>.
      </Typography>
      <br />
      <Typography variant="body2" color="inherit">
        Checkout the project on{" "}
        <a href="https://github.com/RaedsLab/showcase-react">Github</a>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
