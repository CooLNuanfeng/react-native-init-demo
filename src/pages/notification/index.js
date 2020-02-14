import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class Cart extends PureComponent {
  render() {
    return (
      <Container>
        <Text> Notification</Text>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 26px;
  color: #333;
`;
