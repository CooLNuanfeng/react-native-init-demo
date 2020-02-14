import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class Detail extends PureComponent {
  static navigationOptions = {
    title: '详情页',
    headerStyle: {
      backgroundColor: '#4cb4e7',
    },
  };
  render() {
    return (
      <Container>
        <Text> Detail InComponent </Text>
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
