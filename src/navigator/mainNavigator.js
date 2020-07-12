import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile177443Navigator from '../features/UserProfile177443/navigator';
import UserProfile277442Navigator from '../features/UserProfile277442/navigator';
import UserProfile377441Navigator from '../features/UserProfile377441/navigator';
import UserProfile477440Navigator from '../features/UserProfile477440/navigator';
import UserProfile577439Navigator from '../features/UserProfile577439/navigator';
import UserProfile677438Navigator from '../features/UserProfile677438/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile177443: { screen: UserProfile177443Navigator },
UserProfile277442: { screen: UserProfile277442Navigator },
UserProfile377441: { screen: UserProfile377441Navigator },
UserProfile477440: { screen: UserProfile477440Navigator },
UserProfile577439: { screen: UserProfile577439Navigator },
UserProfile677438: { screen: UserProfile677438Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
