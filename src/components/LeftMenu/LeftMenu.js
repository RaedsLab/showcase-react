import React from 'react';

// UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';
import styles from './LeftMenu.css';
import OrbitSelector from '../OrbitSelector/OrbitSelector';

const LeftMenu = function LeftMenu(props) {
  const { classes } = props;
  return (
    <Paper className={classes.wrapper}>
      <Typography variant="h6" color="inherit" className={classes.title}>
        Select an orbit
      </Typography>
      <OrbitSelector
        selectedOrbit={props.selectedOrbit}
        orbits={props.orbits}
        onOrbitChange={props.onOrbitChange}
      />
    </Paper>
  );
};

LeftMenu.propTypes = {
  ...OrbitSelector.propTypes
};

export default withStyles(styles)(LeftMenu);
