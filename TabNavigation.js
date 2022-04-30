import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/Screens/HomeScreen';
import PaginationListScreen from './src/Screens/PaginationListScreen';
import CaptureImageScreen from './src/Screens/CaptureImageScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'PaginationListScreen') {
            iconName = 'list-ul';
          } else if (route.name === 'CaptureImage') {
            iconName = 'camera';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'dodgerblue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen name="Dashboard" component={HomeScreen} />
      <Tab.Screen
        name="PaginationListScreen"
        component={PaginationListScreen}
      />

      <Tab.Screen name="CaptureImage" component={CaptureImageScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
