import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TabComponent from './tabsComponent';
import styled from 'styled-components';

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
  render() {
    return (
      <SafeAreaView>
        <HeaderTop />
        <TabContainer {...this.props} />
      </SafeAreaView>
    );
  }
}

Home.router = TabContainer.router;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const HeaderTop = styled.View`
  height: 30px;
  background: #4cb4e7;
`;
