import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Header, Body, Left, Icon } from 'native-base';

const StyledNavbar = styled(Header)`
  background-color: red;
`;

const HeaderText = styled(Text)`
  color: white;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
`;

const Navbar = () => (
  <StyledNavbar>
    <Left>
      <TouchableOpacity>
        <Icon name="arrow-back" />
      </TouchableOpacity>
    </Left>
    <Body>
      <HeaderText>Compec Profiles</HeaderText>
    </Body>
  </StyledNavbar>
);

export default Navbar;