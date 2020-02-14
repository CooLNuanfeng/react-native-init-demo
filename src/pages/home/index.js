import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Tab1 from './tabs/tab1';
import Tab2 from './tabs/tab2';
import Tab3 from './tabs/tab3';

const Home = createMaterialTopTabNavigator(
  {
    tab1: {
      screen: Tab1,
      navigationOptions: {
        tabBarLabel: '推荐',
      },
    },
    tab2: {
      screen: Tab2,
    },
    tab3: {
      screen: Tab3,
    },
  },
  {
    initialRouteName: 'tab1',
    navigationOptions: {
      title: '首页',
      headerStyle: {
        backgroundColor: '#4cb4e7',
      },
    },
  },
);

export default Home;
