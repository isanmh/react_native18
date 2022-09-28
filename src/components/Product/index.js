import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Mac from '../../assets/images/mac.jpg';

const Product = props => {
  return (
    <View>
      <View style={styles.Container}>
        <Image source={Mac} style={styles.img} />
        <Text style={styles.title}>Mac Book Pro 2021</Text>
        <Text style={styles.price}>Rp. 25.000.000</Text>
        <Text style={styles.address}>Bandung</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.btnWrapper}>
            <Text style={styles.btnPress}>Beli</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

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
