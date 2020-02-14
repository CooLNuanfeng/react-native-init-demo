import React, {PureComponent} from 'react';
import AntDesigIcon from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components';

export default class IconWithBadge extends PureComponent {
  render() {
    const {name, badgeCount, color, size} = this.props;
    return (
      <Container>
        <AntDesigIcon name={name} size={size} color={color} />
        {badgeCount > 0 && (
          <BadgeView>
            <BadgeText>{badgeCount}</BadgeText>
          </BadgeView>
        )}
      </Container>
    );
  }
}

const Container = styled.View`
  position: relative;
  width: 24px;
  height: 24px;
  margin: 5px;
`;

const BadgeView = styled.View`
  position: absolute;
  right: -6px;
  top: -3px;
  background-color: red;
  border-radius: 6px;
  width: 12px;
  height: 12px;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;
