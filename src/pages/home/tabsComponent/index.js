import React, {PureComponent} from 'react';
import styled from 'styled-components';

export default class TabComponent extends PureComponent {
  render() {
    const {navigation, content, tabname, component} = this.props;
    return (
      <Container>
        {content ? (
          <Text
            onPress={() => {
              navigation.navigate('detail', {
                tabname,
              });
            }}>
            {content}
          </Text>
        ) : null}
        {component ? component : null}
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #f5f5f5;
`;

const Text = styled.Text`
  font-size: 26px;
  color: #333;
`;
