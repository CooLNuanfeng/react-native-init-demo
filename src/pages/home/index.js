import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TabComponent from './tabsComponent';
import styled from 'styled-components';

import Todos from './todo';

const TabArrJson = [
  {
    tab: 'tab1',
    tabname: '推荐',
    content: 'tab1 page component',
  },
  {
    tab: 'tab2',
    tabname: '热门',
    content: 'tab2 page component',
  },
  {
    tab: 'tab3',
    tabname: '收藏',
    content: 'tab3 page component',
  },
  {
    tab: 'tab4',
    tabname: 'TODO',
    content: '',
    component: <Todos />,
  },
];

const routerConfig = {};
const createRouterConfig = () => {
  TabArrJson.forEach(item => {
    routerConfig[item.tab] = {};
    routerConfig[item.tab].screen = props => (
      <TabComponent {...props} {...item} />
    );
    routerConfig[item.tab].navigationOptions = {
      tabBarLabel: item.tabname,
      headerShown: false,
    };
  });
};
createRouterConfig();

const TabContainer = createMaterialTopTabNavigator(routerConfig, {
  // initialRouteName: 'tab1',
});

export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: '首页',
    headerShown: false,
  };
  static router = TabContainer.router;
  render() {
    return (
      <HomeContainer>
        <HeaderTop />
        <TabContainer style={{flex: 1}} {...this.props} />
      </HomeContainer>
    );
  }
}

const HomeContainer = styled.View`
  flex: 1;
`;

const HeaderTop = styled.View`
  height: 30px;
  background: #4cb4e7;
`;
