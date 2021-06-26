import React from 'react';
import MainApp from './MainApp';
import ComparePrices from './screens/ComparePrices';
import ProfileScreen from './screens/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const sampleTabNavigation = createBottomTabNavigator(
);  
export default class App extends React.Component {
render() {
   return (
   <NavigationContainer>
    <sampleTabNavigation.Navigator
  screenOptions={({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
  let iconName;
   
  if (route.name === 'MainApp') {
  iconName = 'md-home-sharp';
  } else if (route.name === 'about') {
  iconName = 'md-reader-outline';
  }
   
  return <Ionicons name = {iconName} size={size} color={color} />;
  },
  })}
  tabBarOptions={{
  activeTintColor: 'red',
  inactiveTintColor: 'gray',
  }}
  >
  <sampleTabNavigation.Screen name="ShoppingList" component={MainApp} />
  <sampleTabNavigation.Screen name="ComparePrices" component={ComparePrices} />
  <sampleTabNavigation.Screen name="ProfileScreen" component={ProfileScreen}/>
  </sampleTabNavigation.Navigator>
  </NavigationContainer>
  );
  }
  }