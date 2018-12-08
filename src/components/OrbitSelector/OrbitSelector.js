import React, { Component } from 'react';

import PropTypes from 'prop-types';

// UI
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';
import styles from './OrbitSelector.css';

class OrbitSelector extends Component {
  handleChange = event => {
    this.props.onOrbitChange(event.target.value);
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.wrapper}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Orbiting body</InputLabel>
          <Select
            value={this.props.selectedOrbit}
            className={classes.select}
            onChange={this.handleChange}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {this.props.orbits.map(orbit => {
              return (
                <MenuItem key={orbit} value={orbit}>
                  {orbit}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Paper>
    );
  }
}

OrbitSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  selectedOrbit: PropTypes.string.isRequired,
  orbits: PropTypes.array.isRequired,
  onOrbitChange: PropTypes.func.isRequired
};

export default withStyles(styles)(OrbitSelector);
