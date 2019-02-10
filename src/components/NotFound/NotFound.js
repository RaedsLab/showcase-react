import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './NotFound.css';

// UI
import Paper from '@material-ui/core/Paper';

const NotFound = function (props) {
  return <Paper className={props.classes.paper}>404 not found</Paper>;
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotFound);
