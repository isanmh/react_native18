import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('About', {
            nama: 'Ihsan Miftahul Huda',
            umur: 17,
          })
        }>
        <Text style={styles.text}>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
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
