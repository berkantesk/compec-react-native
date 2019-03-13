import React, { Component } from 'react';
import styled from 'styled-components';
import { Container } from 'native-base';
import Navbar from './Navbar';

const ProfilesContainer = styled(Container)``;

class App extends Component {
  render() {
    return (
      <ProfilesContainer>
        <Navbar />
      </ProfilesContainer>
    );
  }
}

export default App;
