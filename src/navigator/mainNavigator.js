import React from 'react';
import {getActiveChildNavigationOptions} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import IconWithBadge from '../components/IconWithBadge';
import HomeScreen from '../pages/home';
import CartScreen from '../pages/cart';
import MineScreen from '../pages/mine';

import DetailScreen from '../pages/detail';

const MainScreen = createBottomTabNavigator(
  {
    home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
      },
    },
    cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarLabel: '购物车',
      },
    },
    mine: {
      screen: MineScreen,
      navigationOptions: {
        tabBarLabel: '我的',
      },
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let iconName,
          badgeCount = 0;
        if (routeName === 'home') {
          iconName = 'home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'cart') {
          iconName = 'shoppingcart';
          badgeCount = 5;
        } else if (routeName === 'mine') {
          iconName = 'user';
        }
        return (
          <IconWithBadge
            badgeCount={badgeCount}
            name={iconName}
            size={25}
            color={tintColor}
          />
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#4cb4e7',
      inactiveTintColor: 'gray',
    },
  },
);

const MainNavigator = createStackNavigator(
  {
    main: {
      screen: MainScreen,
      navigationOptions: ({navigation, screenProps}) => ({
        ...getActiveChildNavigationOptions(navigation, screenProps),
      }),
    },
    detail: DetailScreen,
  },
  {
    initialRouteName: 'main',
  },
);

export default MainNavigator;
