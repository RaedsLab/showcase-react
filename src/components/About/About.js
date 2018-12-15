import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './About.css';

// UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const About = function(props) {
  return (
    <Paper className={props.classes.paper}>
      <div className={props.classes.content}>
        <Typography variant="h4" color="inherit">
          Showcase React
        </Typography>
        <Typography variant="body1" color="inherit">
          This is a project I use and maintain to learn more about React and
          Redux.
        </Typography>
        <Typography variant="body1" color="inherit">
          This project was bootstrapped with Create React App. If you see any
          big blunder in the way the code or tests are written, please comment
          or tweet me{' '}
          <a
            href="https://twitter.com/raed667"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Raed667
          </a>
        </Typography>
        <Typography variant="body1" color="inherit">
          You can find this project on Github{' '}
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
  );
};

About.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(About);
