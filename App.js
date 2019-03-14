import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './src/modules/Home';
import Login from './src/modules/Login';

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} hideNavBar />
      <Scene key="home" component={Home} hideNavBar />
    </Stack>
  </Router>
);

export default App;