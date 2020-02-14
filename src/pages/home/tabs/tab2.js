import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class Tab2 extends PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <Text
          onPress={() => {
            navigation.navigate('mine');
          }}>
          Tab2 page
        </Text>
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
