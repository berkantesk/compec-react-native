import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';
import { Header, Body, Left, Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const StyledNavbar = styled(Header)`
  background-color: red;
`;

const HeaderText = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;

const Navbar = (props) => {
  const handleBackButton = () => (
    Actions.pop()
  );

  return (
    <StyledNavbar>
      <Left>
        <Button onPress={handleBackButton}>
          <Text>Back</Text>
        </Button>
      </Left>
      <Body>
        <HeaderText>{props.title}</HeaderText>
      </Body>
    </StyledNavbar>
  ) 
};

export default Navbar;