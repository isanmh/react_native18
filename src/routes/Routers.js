import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  AddContact,
  SplashScreen,
  About,
  DataContact,
  DetailContact,
  EditContact,
} from '../helpers/PageRoute';
import Tabs from '../navigation/Tabs';
import CallApiAxios from '../pages/CallApiAxios';
import CallApiVanilla from '../pages/CallApiVanilla';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator(); // version 5

function Routers() {
  return (
    // <NavigationContainer>
    <Stack.Navigator
      initialRouteName="SplashScreen"
      // screenOptions={{headerShown: true}}
    >
      <Stack.Screen
        name="CallApiAxios"
        component={CallApiAxios}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CallApiVanilla"
        component={CallApiVanilla}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{title: 'About Page'}}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      {/* CRUD */}
      <Stack.Screen
        name="DataContact"
        component={DataContact}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="AddContact"
        component={AddContact}
        options={{title: 'Add Contact'}}
      />
      <Stack.Screen
        name="DetailContact"
        component={DetailContact}
        options={{title: 'Detail Contact'}}
      />
      <Stack.Screen
        name="EditContact"
        component={EditContact}
        options={{title: 'Edit Contact'}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default Routers;
