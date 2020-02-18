import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class Mine extends PureComponent {
  static navigationOptions = {
    headerShown: false,
  };
  render() {
    return (
      <Container>
        <Text> Mine InComponent </Text>
      </Container>
    );
  }
}

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 26px;
  color: #333;
`;
