import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

//Components
import LoginScreen from './src/Screens/LoginScreen';
import TabNavigation from './TabNavigation';
import SignUpScreen from './src/Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
};

const RootNavigation = () => {
  const token = useSelector(state => state.Reducers.authToken);
  console.log(token, 'RootNavigation');
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        {token ? (
          <Stack.Screen name="TabNavigationScreen" component={TabNavigation} />
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
