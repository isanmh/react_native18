import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faDatabase,
  faUser,
  faBook,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';
import {
  About,
  AddContact,
  DataContact,
  DetailContact,
  EditContact,
  Home,
  SplashScreen,
} from '../helpers/PageRoute';
import {CoreComponent, CrudApi, CallApiAxios} from './TabPages';

const Tab = createBottomTabNavigator();

// custom tab bar bottom
const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}
    onPress={onPress}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#e32f45',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faHome}
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon
                icon={faUser}
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                About
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CrudApi"
        component={CrudApi}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/plus.png')}
              style={{
                width: 30,
                height: 30,
                // tintColor: focused ? '#e32f45' : '#748c94',
              }}
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="DataContact"
        component={DataContact}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesomeIcon
                icon={faDatabase}
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Data Contact
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CoreComponent"
        component={CoreComponent}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faBook}
                size={30}
                color={focused ? '#e32f45' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#e32f45' : '#748c94',
                  fontSize: 12,
                }}>
                Dasar
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
