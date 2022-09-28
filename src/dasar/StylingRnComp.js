import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Mac from '../assets/images/mac.jpg';

const StylingRnComp = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component </Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#9b59b6',
          borderWidth: 2,
          marginTop: 20,
          marginLeft: 20,
        }}
      />
      <View style={styles.Container}>
        <Image source={Mac} style={styles.img} />
        <Text style={styles.title}>Mac Book Pro 2021</Text>
        <Text style={styles.price}>Rp. 25.000.000</Text>
        <Text style={styles.address}>Bandung</Text>
        <View style={styles.btnWrapper}>
          <Text style={styles.btnPress}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

export default StylingRnComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginLeft: 20,
    marginTop: 20,
  },
  Container: {
    padding: 12,
    backgroundColor: '#ecf0f1',
    width: 212,
    borderRadius: 8,
  },
  img: {
    width: 188,
    height: 107,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#e67e22',
  },
  address: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 16,
  },
  btnWrapper: {
    backgroundColor: '#2ecc71',
    // paddingTop: 6,
    // paddingBottom: 6,
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },

  btnPress: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
