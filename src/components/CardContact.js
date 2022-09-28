import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';

const CardContact = ({id, contactItem, navigation, deleteContact}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailContact', {id: id})}>
        {contactItem ? (
          <View>
            <Text style={styles.nama}>{contactItem.name}</Text>
            <Text style={styles.noHP}>No. HP : {contactItem.nomor}</Text>
          </View>
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </TouchableOpacity>
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditContact', {id: id})}>
          <FontAwesomeIcon icon={faEdit} color={'orange'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteContact(id)}>
          <FontAwesomeIcon icon={faTimes} color={'red'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardContact;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  nama: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
  },
  noHP: {
    fontSize: 12,
    color: 'gray',
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
