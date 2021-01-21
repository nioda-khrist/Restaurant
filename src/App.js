import React from 'react';
import store from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Unauthorized, SnackBar, Navigation } from './components';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';

import Home from './pages/Home';

const theme = createMuiTheme({});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <main>
          <CssBaseline />
          <SnackBar />
          <Router>
            <Switch>
              <Route exact path='/' component={withNavigation(Home)} />
              <Route component={Unauthorized} />
            </Switch>
          </Router>
        </main>
      </ThemeProvider>
    </Provider>
  );
};

// HOC - hide header and footer on unauthorized page
function withNavigation(Component) {
  return (withNavigationComponent) => {
    return (
      <Navigation>
        <Component />
      </Navigation>
    );
  };
}

export default App;
