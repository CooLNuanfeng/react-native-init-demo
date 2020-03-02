import React from 'react';
import {Text} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import TabComponent from './tabsComponent';
import styled from 'styled-components';

import Todos from './todo';

// const TabArrJson = [
//   {
//     tab: 'tab1',
//     tabname: '推荐',
//     content: 'tab1 page',
//   },
//   {
//     tab: 'tab2',
//     tabname: '热门',
//     content: 'tab2 page ',
//   },
//   {
//     tab: 'tab3',
//     tabname: '收藏',
//     content: 'tab3 page',
//   },
//   {
//     tab: 'tab4',
//     tabname: 'TODO',
//     content: '',
//     component: <Todos />,
//   },
//   {
//     tab: 'tab5',
//     tabname: '历史',
//     content: 'tab5 page',
//   },
// ];

const TabsJson = {
  tab1: {
    tab: 'tab1',
    tabname: '推荐',
    content: 'tab1 page',
  },
  tab2: {
    tab: 'tab2',
    tabname: '热门',
    content: 'tab2 page ',
  },
  tab3: {
    tab: 'tab3',
    tabname: '收藏',
    content: 'tab3 page',
  },
  tab4: {
    tab: 'tab4',
    tabname: 'TODO',
    content: '',
    component: <Todos />,
  },
  tab5: {
    tab: 'tab5',
    tabname: '历史',
    content: 'tab5 page',
  },
};

const routerConfig = {};
const createRouterConfig = () => {
  Object.values(TabsJson).forEach(item => {
    routerConfig[item.tab] = {};
    routerConfig[item.tab].screen = props => (
      <TabComponent {...props} {...item} />
    );
    routerConfig[item.tab].navigationOptions = {
      tabBarLabel: item.tabname,
      headerShown: true,
    };
  });
};
createRouterConfig();

const TabContainer = createMaterialTopTabNavigator(routerConfig, {
  initialRouteName: 'tab1',
  tabBarComponent: ({navigation, navigationState, ...props}) => {
    let {routes} = navigationState;
    console.log(props);
    return routes.map((item, ind) => {
      return (
        <Text
          style={{
            padding: 10,
          }}
          key={ind}
          onPress={() => {
            console.log(navigation.state.routes[ind].routeName);
            navigation.navigate(navigation.state.routes[ind].routeName);
          }}>
          {TabsJson[item.key].tabname}
        </Text>
      );
    });
  },
  // navigationOptions: props => {
  //   console.log(props);
  //   return {};
  // },
  tabBarOptions: {
    scrollEnabled: true,
    // showIcon: true,
    style: {
      // backgroundColor: 'blue',
    },
  },
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
  height: 40px;
  background: #4cb4e7;
`;
