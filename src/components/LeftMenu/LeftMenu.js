import React from 'react';
import PropTypes from 'prop-types';

// UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import styles from './LeftMenu.css';

const LeftMenu = function(props) {
  const { classes } = props;
  return (
    <Paper className={classes.wrapper}>
      <Typography variant="h6" color="inherit" className={classes.title}>
        Select an orbit
      </Typography>
      {props.children}
    </Paper>
  );
};

LeftMenu.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeftMenu);
