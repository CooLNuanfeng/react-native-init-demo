import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class Welcome extends PureComponent {
  // componentDidMount() {
  //   const {navigation} = this.props;
  //   let timer = setTimeout(() => {
  //     clearTimeout(timer);
  //     navigation.navigate('main');
  //   }, 3000);
  // }
  render() {
    let {navigation} = this.props;
    return (
      <Container>
        <Text> Welcome </Text>
        <TextBtn
          onPress={() => {
            navigation.navigate('main');
          }}>
          Join in
        </TextBtn>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #4cb4e7;
`;

const Text = styled.Text`
  font-size: 26px;
  color: #fff;
`;

const TextBtn = styled.Text`
  margin-top: 20px;
  padding: 5px 10px;
  font-size: 20px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
`;
