import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FIREBASE from '../../helpers/firebase';

const EditContact = props => {
  const [name, setName] = useState('');
  const [nomor, setNomor] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    FIREBASE.database()
      .ref('db_contact/' + props.route.params.id)
      .once('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = {...data};

        setName(contactItem.name);
        setNomor(contactItem.nomor);
        setAddress(contactItem.address);
      });
  }, []);

  const onSubmit = () => {
    // console.log('data yang dikirim :', name, nomor, address);
    if (name === '' || nomor === '' || address === '') {
      Alert.alert('Error', 'Data harus diisi semua');
    } else {
      const contactRef = FIREBASE.database().ref(
        'db_contact/' + props.route.params.id,
      );
      const contact = {
        name,
        nomor,
        address,
      };
      contactRef
        .update(contact)
        .then(data => {
          Alert.alert('Sukses', 'Data berhasil diupdate');
          props.navigation.replace('DataContact');
        })
        .catch(err => {
          console.log('err :', err);
        });
    }
  };

  return (
    <View style={styles.pages}>
      <Text style={styles.label}>Nama :</Text>
      <TextInput
        placeholder="Nama Lengkap"
        style={styles.textInput}
        value={name}
        onChangeText={value => setName(value)}
      />
      <Text style={styles.label}>No. Hp :</Text>
      <TextInput
        placeholder="Nomor hp ..."
        style={styles.textInput}
        keyboardType="number-pad"
        value={nomor}
        onChangeText={value => setNomor(value)}
      />
      <Text style={styles.label}>Alamat :</Text>
      <TextInput
        placeholder="Alamat Lengkap ..."
        style={styles.textInputArea}
        value={address}
        numberOfLines={4}
        onChangeText={value => setAddress(value)}
      />
      <TouchableOpacity style={styles.tombol} onPress={onSubmit}>
        <Text style={styles.textTombol}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  tombol: {
    backgroundColor: '#2E86C1',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  textTombol: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  container: {
    padding: 10,
    textAlign: 'center',
  },
  textInput: {
    marginVertical: 10,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  textInputArea: {
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    marginBottom: 10,
  },
});

export default EditContact;
