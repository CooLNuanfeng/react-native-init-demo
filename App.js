/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from './src/store';
import Welcome from './src/pages/welcome';
import MainNavigator from './src/navigator/mainNavigator';

const AppNavigator = createSwitchNavigator(
  {
    welcome: {
      screen: Welcome,
    },
    main: {
      screen: MainNavigator,
    },
  },
  {
    initialRouteName: 'welcome',
  },
);

class App extends React.PureComponent {
  render() {
    const Container = createAppContainer(AppNavigator);
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
