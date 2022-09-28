import React, {Component} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

// functional components
// cara 1
// function Nama() {
//   return <Text>Ihsan Miftahul Huda</Text>;
// }

// cara 2 => arrow function () => {}
const DasarComp = () => {
  return (
    <View style={styles.container}>
      <NamaPanjang />
      <Photo />
      <BoxGreen />
      <Gambar />
    </View>
  );
};

const NamaPanjang = () => {
  return (
    <View>
      <Text style={styles.text}>Ini functional Compnent</Text>
      <Text style={styles.text}>Ihsan Miftahul Huda</Text>
    </View>
  );
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/640/480/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

// Class Components
class BoxGreen extends Component {
  // hrs ada render
  render() {
    return <Text style={styles.text}>Ini Component dari Class</Text>;
  }
}

class Gambar extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/640/480/animals'}}
          style={{width: 100, height: 100, borderRadius: 50, marginTop: 20}}
        />
        <Text style={styles.text}>Ini Hewan </Text>
      </View>
    );
  }
}

export default DasarComp;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: '#6C5ECF',
    textAlign: 'center',
  },
});
