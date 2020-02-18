import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class TabComponent extends PureComponent {
  render() {
    const {navigation, content, tabname} = this.props;
    return (
      <Container>
        <Text
          onPress={() => {
            navigation.navigate('detail', {
              tabname,
            });
          }}>
          {content}
        </Text>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f5f5f5;
`;

const Text = styled.Text`
  font-size: 26px;
  color: #333;
`;
