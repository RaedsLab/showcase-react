import React from 'react';

import PropTypes from 'prop-types';

// UI
import styles from './Header.css';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const Header = function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.appbar}>
      <AppBar position="static" color={'primary'}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Showcase
          </Typography>
          <FormControlLabel
            control={
              <Switch
                color="default"
                checked={props.isNightMode}
                onChange={event =>
                  props.onNightModeToggle(event.target.checked)
                }
              />
            }
            label="Night mode"
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isNightMode: PropTypes.bool.isRequired,
  onNightModeToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(Header);
