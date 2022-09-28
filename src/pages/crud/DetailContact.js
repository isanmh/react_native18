import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import FIREBASE from '../../helpers/firebase';

const DetailContact = props => {
  const [contacts, setContacts] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    FIREBASE.database()
      .ref('db_contact/' + props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = {...data};

        setContacts(contactItem);
      });
  };

  return (
    <View style={styles.pages}>
      <Text>Nama : </Text>
      <Text style={styles.text}>{contacts.name} </Text>

      <Text>Nomor HP : </Text>
      <Text style={styles.text}>{contacts.nomor} </Text>

      <Text>Alamat : </Text>
      <Text style={styles.text}>{contacts.address} </Text>
    </View>
  );
};

export default DetailContact;

const styles = StyleSheet.create({
  pages: {
    margin: 30,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
});
