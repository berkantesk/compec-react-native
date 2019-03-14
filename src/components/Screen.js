import React from 'react';
import styled from 'styled-components';
import { Container, Content } from 'native-base';
import Navbar from './Navbar.js';
import Toolbar from './Toolbar.js';

const ProfilesContainer = styled(Container)``;

const Screen = (props) => (
  <ProfilesContainer>
    <Navbar title="Compec Profiles" />
    <Content>
      {props.children}
    </Content>
    <Toolbar />
  </ProfilesContainer>
);

export default Screen;
