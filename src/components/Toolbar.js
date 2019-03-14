import React from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';
import styled from 'styled-components';

const StyledFooter = styled(Footer)`
  background-color: blue;
`;

const FooterItem = styled(FooterTab)`
  color: white;
`;

const FooterItemText = styled(Text)`
  color: white;
  font-weight: bold;
`;

const FooterItemTextTwo = styled(FooterItemText)`
  font-weight: normal;
`;

const Toolbar = () => (
  <StyledFooter>
    <FooterItem>
      <Button>
        <FooterItemText>Footer Tab 1</FooterItemText>
        <FooterItemTextTwo>Footer Tab 2</FooterItemTextTwo>
      </Button>
    </FooterItem>
  </StyledFooter>
);

export default Toolbar;