import React from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TabComponent from './tabsComponent';

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
    };
  });
};
createRouterConfig();

const Home = createMaterialTopTabNavigator(routerConfig, {
  // initialRouteName: 'tab1',
  navigationOptions: {
    title: '首页',
    headerStyle: {
      backgroundColor: '#4cb4e7',
    },
  },
});

export default Home;
