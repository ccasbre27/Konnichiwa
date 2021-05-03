import * as React from 'react';
import "./configureMobx";
import { AppStateContextProvider, AppState } from './AppState';
import Header from './components/shared/Header';
import Body from './components/Body';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './App.scss';

const appState = new AppState();

const App = () => {
  return (
    <AppStateContextProvider value={ appState }>
      <div className="app">
        <Header />
        <Body />
        <AppBar position="static" className="footer">
          <Toolbar variant="dense">
            <Typography variant="h6">
              Thank you! return 42;
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </AppStateContextProvider>
  );
}


export default App;
