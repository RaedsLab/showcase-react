import React, { Component } from 'react';

import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

// UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

// theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import themeLight from '../../themes/light';
import themeLDark from '../../themes/night';

// UI
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import ChartContainer from '../../components/ChartContainer/ChartContainer';

// style
import styles from './App.css';

// utils
import {
  extractListOfOrbits,
  filterNasaDataByOrbit
} from '../../utils/formatter';

export class App extends Component {
  state = {
    isNightMode: false,
    selectedOrbit: ''
  };

  componentDidMount() {
    this.props.getPlanets();
  }

  onNightModeToggle = isNightMode => {
    this.setState({
      isNightMode
    });
  };

  onOrbitChange = selectedOrbit => {
    this.setState({
      selectedOrbit
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider
        theme={this.state.isNightMode ? themeLDark : themeLight}
      >
        <CssBaseline />
        <Header
          isNightMode={this.state.isNightMode}
          onNightModeToggle={this.onNightModeToggle}
        />

        <div className={classes.wrapper}>
          <Grid container spacing={24}>
            <Grid item xs={6} sm={3}>
              <LeftMenu
                selectedOrbit={this.state.selectedOrbit}
                orbits={extractListOfOrbits(this.props.planets.list)}
                onOrbitChange={this.onOrbitChange}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <ChartContainer
                data={filterNasaDataByOrbit(
                  this.props.planets.list,
                  this.state.selectedOrbit
                )}
              />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

/**
 * Redux
 */
const mapStateToProps = state => state;

const mapDispatchToProps = {
  ...actions
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(App));
