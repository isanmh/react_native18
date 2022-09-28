import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Cart = props => {
  return (
    <View style={styles.container}>
      <Text>Materi Potition React Native</Text>
      <View style={styles.cartWrapper}>
        <Image
          style={styles.iconCart}
          source={require('../../assets/images/shopping-cart.png')}
        />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Keranjang belanja Anda</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  cartWrapper: {
    borderWidth: 1,
    borderColor: '#3498db',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    // untuk lock item
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  text: {
    fontSize: 12,
    color: '#3498db',
    fontWeight: 'bold',
    marginTop: 8,
  },
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#27ae60',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    // agar bebas bergerak
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
