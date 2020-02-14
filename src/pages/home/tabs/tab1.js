import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class Tab1 extends PureComponent {
  render() {
    return (
      <Container>
        <Text> Tab1 page</Text>
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
