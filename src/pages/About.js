import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const About = props => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
      {/* <Text>{props.route.params.nama}</Text>
      <Text>{props.route.params.umur}</Text> */}
      {/* <TouchableOpacity onPress={() => props.navigation.pop()}> */}
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Text style={styles.text}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#80cbc4',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
