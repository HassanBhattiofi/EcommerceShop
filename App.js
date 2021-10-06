import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
//import Home from './screens/Home';
import DetailsScreen from './screens/DetailsScreen';
import DrawerNavigator from './navigators/DrawerNavigator';
import CartScreen from './screens/CartScreen';
import {NavigationContainer} from '@react-navigation/native';
import COLORS from './assets/color';
const Stack = createStackNavigator();

//Redux
import {Provider} from 'react-redux';
import {Store} from './Redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
          <Stack.Screen name="CartScreen" component={CartScreen} />
          <Stack.Screen name="DetailScreen" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

//<Stack.Screen name="Drawer" component={DrawerNavigator} />
