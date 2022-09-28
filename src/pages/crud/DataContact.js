import {
  ActivityIndicator,
  Alert,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import FIREBASE from '../../helpers/firebase';
import CardContact from '../../components/CardContact';

const DataContact = props => {
  const [contacts, setContacts] = useState({});
  const [contactKey, setContactKey] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  getData = () => {
    FIREBASE.database()
      .ref('db_contact')
      .on('value', querySnapShot => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = {...data};

        setContacts(contactItem);
        setContactKey(Object.keys(contactItem));
      });
  };
  // get async data from firebase
  // async function getData() {
  //   const rootRef = FIREBASE.database().ref();
  //   const urlRef = rootRef.child('db_contact');
  //   await urlRef.on('value', dataSnapshot => {
  //     if (dataSnapshot.val()) {
  //       let data = dataSnapshot.val();
  //       let contactItem = Object.values(data);
  //       setContacts(contactItem);
  //       setContactKey(Object.keys(data));
  //     }
  //   });

  // const contactRef = FIREBASE.database().ref('db_contact');
  // // contactRef.on('value', snapshot => {
  // //   if (snapshot.val()) {
  // //     setContacts(snapshot.val());
  // //     setContactKey(Object.keys(snapshot.val()));
  // //   }
  // // });
  // await contactRef.once('value', querySnapShot => {
  //   let data = querySnapShot.val() ? querySnapShot.val() : {};
  //   let contactItem = {...data};
  //   setContacts(contactItem);
  //   setContactKey(Object.keys(contactItem));
  // });
  // }

  const deleteContact = id => {
    Alert.alert(
      'Info',
      'Are you sure want to delete this contact?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            // console.log('OK Pressed', id);
            FIREBASE.database().ref(`db_contact/${id}`).remove();
            getData();
            Alert.alert('Success', 'Contact has been deleted');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    // console.log('contacts :', contacts),
    // console.log('contactKey :', contactKey),
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Daftar Kontak</Text>
        <View style={styles.garis} />
      </View>

      {/* <View style={styles.listKontak}>
          {contactKey.length > 0 ? (
            contactKey.map(key => (
              <TouchableOpacity
                key={key}
                style={styles.kontak}
                onPress={() => props.navigation.navigate('EditContact', key)}>
                <Text style={styles.nama}>{contacts[key].name}</Text>
                <Text style={styles.nomor}>{contacts[key].nomor}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.kosong}>Data Kosong</Text>
          )}
        </View> */}

      <ScrollView style={styles.listKontak}>
        {contactKey.length > 0 ? (
          contactKey.map(key => (
            <CardContact
              key={key}
              contactItem={contacts[key]}
              id={key}
              {...props}
              deleteContact={deleteContact}
            />
          ))
        ) : (
          <ActivityIndicator size="large" color="#0000ff" />
        )}
      </ScrollView>

      {/* tombol */}
      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => props.navigation.navigate('AddContact')}>
          <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DataContact;

const widthScreen = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginBottom: 100,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  listKontak: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  wrapperButton: {
    position: 'absolute',
    // alignItems: 'center',
    bottom: 0,
    // right: 0,
    // margin: 30,
    marginHorizontal: widthScreen / 2 - 30,
    marginBottom: 30,
  },
  btnTambah: {
    padding: 20,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
