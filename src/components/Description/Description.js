import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import styles from './Description.css';

// UI
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Loading from '../Loading/Loading';

const Description = function Description(props) {
  const { classes } = props;
  const defaultMessage = (
    <div className="default-description">
      <p>
        NeoWs (Near Earth Object Web Service) is a RESTful web service for near
        earth Asteroid information. With NeoWs a user can: search for Asteroids
        based on their closest approach date to Earth, lookup a specific
        Asteroid with its NASA JPL small body id, as well as browse the overall
        data-set.
      </p>
      <p>Data-set: All the data is from the NASA JPL Asteroid team</p>
    </div>
  );
  return (
    <Paper className={classes.description}>
      <Typography variant="caption" color="inherit">
        {props.planet !== '' ? (
          props.descriptions.isLoading ? (
            <Loading />
          ) : (
            <div>
              {props.descriptions.list[props.planet]}
              <a
                href={`https://en.wikipedia.org/wiki/${props.planet}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                [Read more]
              </a>
            </div>
          )
        ) : (
          defaultMessage
        )}
      </Typography>
    </Paper>
  );
};

Description.propTypes = {
  classes: PropTypes.object.isRequired,
  planet: PropTypes.string.isRequired,
  descriptions: PropTypes.shape({
    list: PropTypes.object,
    isLoading: PropTypes.bool
  })
};

export default withStyles(styles)(Description);
