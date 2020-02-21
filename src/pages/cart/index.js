import React, {PureComponent} from 'react';
import {Button} from 'react-native';
import styled from 'styled-components';

export default class Cart extends PureComponent {
  static navigationOptions = {
    title: '购物车',
    headerStyle: {
      backgroundColor: '#4cb4e7',
    },
    headerTintColor: '#fff',
    headerRight: () => (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    return (
      <Container>
        <Text> Cart InComponent </Text>
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
