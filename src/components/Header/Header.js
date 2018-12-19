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
import Button from '@material-ui/core/Button';
// router
import { Link } from 'react-router-dom';

const Header = function(props) {
  const { classes } = props;

  return (
    <div className={classes.appbar}>
      <AppBar position="static" color={'primary'}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Button size="large" component={Link} to="/">
              Showcase
            </Button>
          </Typography>
          <Button
            size="small"
            component={Link}
            to="/about/"
            color="inherit"
            className={(classes.size = 'small')}
          >
            About
          </Button>
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
