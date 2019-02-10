import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../redux/actions/actions';

// style
import { withStyles } from '@material-ui/core/styles';
import styles from './App.css';

// utils
import {
  extractListOfOrbits,
  filterNasaDataByOrbit
} from '../../utils/formatter';

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import themeLight from '../../themes/light';
import themeLDark from '../../themes/night';

// UI
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// components
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import ChartContainer from '../../components/ChartContainer/ChartContainer';
import ErrorDialog from '../../components/ErrorDialog/ErrorDialog';
import Description from '../../components/Description/Description';
import About from '../../components/About/About';
import NotFound from '../../components/NotFound/NotFound';
import OrbitSelector from '../../components/OrbitSelector/OrbitSelector';

// easter eggs
import useKonamiCode from '../../utils/use-konami-code';
import EasterEgg from '../../components/EasterEgg/EasterEgg';

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
    if (
      selectedOrbit !== '' &&
      this.props.descriptions.list[selectedOrbit] == null
    ) {
      this.props.getDescription(selectedOrbit);
    }
  };

  footer = props => {
    const isKonamiCode = useKonamiCode();
    return (
      <div className={props.classes.footer}>
        <Typography variant="caption" color="inherit">
          Made with{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          in Nice, France, by <a href="https://raed.it/">Raed</a>.
          {isKonamiCode && <EasterEgg />}
        </Typography>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    const theme = this.state.isNightMode ? themeLDark : themeLight;

    return (
      <Router>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />

          <Header
            isNightMode={this.state.isNightMode}
            onNightModeToggle={this.onNightModeToggle}
          />
          <Switch>
            <Route
              exact
              strict
              path="/"
              component={() => (
                <div className={classes.wrapper}>
                  <Grid container spacing={24}>
                    <Grid item xs={6} sm={3}>
                      <LeftMenu>
                        <OrbitSelector
                          selectedOrbit={this.state.selectedOrbit}
                          orbits={extractListOfOrbits(this.props.planets.list)}
                          onOrbitChange={this.onOrbitChange}
                        />
                      </LeftMenu>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <ChartContainer
                        data={filterNasaDataByOrbit(
                          this.props.planets.list,
                          this.state.selectedOrbit
                        )}
                        isLoading={this.props.planets.isLoading}
                      />
                    </Grid>
                  </Grid>
                  <Description
                    planet={this.state.selectedOrbit}
                    descriptions={this.props.descriptions}
                  />
                </div>
              )}
            />
            <Route exact strict path="/about/" component={About} />
            <Route component={NotFound} />
          </Switch>

          <this.footer classes={this.props.classes} />
          {/* declarative error dialog only shown when network error */}
          <ErrorDialog
            isOpen={
              this.props.planets.error != null ||
              this.props.descriptions.error != null
            }
            message={`Oups ! there seems to be a network error. Please try again later ! ${
              this.props.planets.error
            } ${this.props.descriptions.error}`}
          />
        </MuiThemeProvider>
      </Router>
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
