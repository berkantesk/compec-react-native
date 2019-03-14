import React from 'react';
import { Text, Button } from 'native-base';
import Screen from '../components/Screen';
import { Actions } from 'react-native-router-flux';

const Login = () => {
  const handleGoHome = () => (
    Actions.home()
  );

  return (
    <Screen hasBackButton={false}>
      <Text>LOGIN MODULE</Text>
      <Button onPress={handleGoHome}>
        <Text>Go HOME</Text>
      </Button>
    </Screen>
  )
};

export default Login;