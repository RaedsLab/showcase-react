import React, { useState, useEffect } from 'react';
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

// components
import Header from '../../components/Header/Header';
import LeftMenu from '../../components/LeftMenu/LeftMenu';
import ChartContainer from '../../components/ChartContainer/ChartContainer';
import ErrorDialog from '../../components/ErrorDialog/ErrorDialog';
import Description from '../../components/Description/Description';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import NotFound from '../../components/NotFound/NotFound';
import OrbitSelector from '../../components/OrbitSelector/OrbitSelector';

// easter eggs
import useKonamiCode from '../../utils/use-konami-code';
import EasterEgg from '../../components/EasterEgg/EasterEgg';

export function App(props) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedOrbit, setSelectedOrbit] = useState('');
  const isKonamiCode = useKonamiCode();

  useEffect(() => {
    if (isFirstLoad) {
      props.getPlanets();
    }
    setIsFirstLoad(false);
  });

  const onOrbitChange = (props, selectedOrbit) => {
    setSelectedOrbit(selectedOrbit);

    if (
      selectedOrbit !== '' &&
      props.descriptions.list[selectedOrbit] == null
    ) {
      props.getDescription(selectedOrbit);
    }
  };

  const theme = isNightMode ? themeLDark : themeLight;

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header isNightMode={isNightMode} onNightModeToggle={setIsNightMode} />
        <Switch>
          <Route
            exact
            strict
            path="/"
            component={() => (
              <div className={props.classes.wrapper}>
                <Grid container spacing={24}>
                  <Grid item xs={6} sm={3}>
                    <LeftMenu>
                      <OrbitSelector
                        selectedOrbit={selectedOrbit}
                        orbits={extractListOfOrbits(props.planets.list)}
                        onOrbitChange={orbit => onOrbitChange(props, orbit)}
                      />
                    </LeftMenu>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <ChartContainer
                      data={filterNasaDataByOrbit(
                        props.planets.list,
                        selectedOrbit
                      )}
                      isLoading={props.planets.isLoading}
                    />
                  </Grid>
                </Grid>
                <Description
                  planet={selectedOrbit}
                  descriptions={props.descriptions}
                />
              </div>
            )}
          />
          <Route exact strict path="/about/" component={About} />
          <Route component={NotFound} />
        </Switch>

        <Footer classes={props.classes} />
        {/* declarative error dialog only shown when network error */}
        <ErrorDialog
          isOpen={
            props.planets.error != null || props.descriptions.error != null
          }
          message={`Oups ! there seems to be a network error. Please try again later ! ${
            props.planets.error
          } ${props.descriptions.error}`}
        />
        {isKonamiCode && <EasterEgg />}
      </MuiThemeProvider>
    </Router>
  );
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
