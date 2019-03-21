import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './src/modules/Home';
import Login from './src/modules/Login';
import rootReducer from './src/config/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

const App = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="home" component={Home} hideNavBar />
      </Stack>
    </Router>
  </Provider>
);

export default App;