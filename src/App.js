import {ScrollView, View} from 'react-native';
import React from 'react';
import DasarComp from './dasar/DasarComp';
import CoreComponent from './dasar/CoreComponent';
import FlexBox from './dasar/FlexBox';
import PotitionReactNative from './dasar/PotitionReactNative';
import StylingRnComp from './dasar/StylingRnComp';
import PropsDinamis from './dasar/PropsDinamis';
import Comunication from './dasar/Comunication';
import CallApiVanilla from './pages/CallApiVanilla';
import CallApiAxios from './pages/CallApiAxios';
import CrudApi from './pages/CrudApi';
import Routers from './routes/Routers';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <CoreComponent /> */}
      {/* <DasarComp /> */}
      {/* <FlexBox /> */}
      {/* <PropsDinamis /> */}
      {/* <Comunication /> */}
      {/* <CallApiVanilla /> */}
      {/* <CallApiAxios /> */}
      {/* <CrudApi /> */}
      <Routers />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
