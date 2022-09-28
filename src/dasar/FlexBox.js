import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const FlexBox = () => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 20,
        }}>
        Materi Flex Box
      </Text>
      <View
        style={{
          backgroundColor: '#ecf0f1',
          flexDirection: 'row',
          // alignItems: 'center',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}>
        <View
          style={{backgroundColor: '#3498db', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#f1c40f', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#e74c3c', width: 50, height: 50}}></View>
        <View
          style={{backgroundColor: '#9b59b6', width: 50, height: 50}}></View>
        <View style={{backgroundColor: '#9b5e', width: 50, height: 50}}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <Text>Home</Text>
        <Text>Channel</Text>
        <Text>Palylist</Text>
        <Text>Video</Text>
      </View>
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={require('../assets/images/mac.jpg')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginRight: 15,
            }}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Ihsan Miftahul Huda
            </Text>
            <Text>100rb Subcriber</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
});
