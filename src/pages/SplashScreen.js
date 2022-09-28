import {View, ActivityIndicator, Text} from 'react-native';
import React, {useEffect} from 'react';
import {StackActions} from '@react-navigation/native';

const SplashScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      //   props.navigation.navigate('Home');
      // props.navigation.replace('Home');
      props.navigation.replace('Tabs');
      // props.navigation.replace('CallApiVanilla');
      // props.navigation.replace('DataContact');
      //   props.navigation.dispatch(StackActions.replace('Home'));
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#212121',
      }}>
      <ActivityIndicator size="large" color="#ffff" />
      <Text style={{color: 'white'}}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
