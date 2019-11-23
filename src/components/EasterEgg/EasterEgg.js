import React from "react";

import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import styles from "./EasterEgg.css";

// UI
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const EasterEgg = props => {
  return (
    <Dialog
      open={true}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Found it!</DialogTitle>
      <DialogContent>
        <div
          style={{
            width: 500,
            height: 500,
            position: "relative"
          }}
        >
          <iframe
            title="gify"
            src="https://giphy.com/embed/LrmU6jXIjwziE"
            width="100%"
            height="100%"
            style={{ position: "absolute" }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          />
        </div>
        Press any key to close window
      </DialogContent>
    </Dialog>
  );
};

EasterEgg.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EasterEgg);
