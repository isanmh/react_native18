import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  Button,
  FlatList,
  Alert,
  ToastAndroid,
  BackHandler,
  PermissionsAndroid,
  ActivityIndicator,
  Dimensions,
  Linking,
  RefreshControl,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';

// mendapatkan Dimensions
// const windowWidth = Dimensions.get('window').width;
const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const CoreComponent = () => {
  const [header, setHeader] = useState('Dasar Core Component');
  const [isOn, setIsOn] = useState(true);
  const [name, setName] = useState('');
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [products, setProducts] = useState([
    {
      name: 'Beras',
      price: 10000,
    },
    {
      name: 'Gula',
      price: 14000,
    },
    {
      name: 'Telur',
      price: 20000,
    },
  ]);
  const [refresh, setRefresh] = useState(false);
  // funsi backHandler
  backAction = () => {
    Alert.alert('Perhatian', 'apakah anda yakin ingin menutup app ?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YES', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  // useEffect
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);
    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }, []);

  // request permission
  requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Izin Akses Kamera',
          message: 'Aplikasi membutuhkan izin akses kamera',
          buttonNeutral: 'Tanya Nanti',
          buttonNegative: 'Batal',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Izin diberikan');
      } else {
        console.log('Izin tidak diberikan');
      }
    } catch (err) {
      console.warn(err);
    }
    // app/src/main/AndroidManifest.xml
    // <uses-permission android:name="android.permission.CAMERA" />
    // <uses-permission android:name="android.permission.FLASHLIGHT" />
  };

  return (
    <ScrollView style={{flex: 1}}>
      {/* Status Bar */}
      <StatusBar backgroundColor="#7b1fa2" barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.textHeader}>{header}</Text>
      </View>
      {/* Activity Indicator */}
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#7b1fa2" animating={true} />
      </View>
      {/* Text */}
      <Text style={styles.text}>
        <Text style={{color: 'crimson'}}>Hello</Text>
        <Text style={{fontSize: 28}}>World</Text>
      </Text>
      {/* View */}
      <View style={styles.view}>
        <Text>Hello1</Text>
        <Text>Hello2</Text>
      </View>
      {/* Image */}
      <TouchableOpacity
        style={styles.container}
        // onPress={() => requestPermission()}>
        onPress={() => Linking.openURL('https://www.google.com/')}>
        <Image
          // source={require('../assets/images/banner.png')}
          source={{uri: 'https://placeimg.com/640/480/tech'}}
          style={styles.img}
          resizeMode="cover"
        />
      </TouchableOpacity>
      {/* Image Background */}
      <ImageBackground
        source={{uri: 'https://placeimg.com/640/480/tech'}}
        style={styles.imgBg}>
        <Text style={{color: 'white'}}>Image Background</Text>
      </ImageBackground>
      {/* dengan data object */}
      <FlatList
        data={products}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => {
              console.log('refresh');
              setRefresh(true);
            }}
          />
        }
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() =>
              ToastAndroid.show(item.name + ' di pilih', ToastAndroid.SHORT)
            }>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
      {/* Text Input */}
      <TextInput
        style={styles.textInput}
        placeholder="Username ..."
        value={name}
        onChangeText={value => setName(value)}
      />
      {/* Button tochable Opacity */}
      <TouchableOpacity onPress={() => setHeader('Header')}>
        <Text style={styles.textButton}>Button</Text>
      </TouchableOpacity>
      {/* Switch */}
      <View style={styles.container}>
        <Switch value={isOn} onValueChange={() => setIsOn(!isOn)} />
      </View>
      {/* Button bawaan React Native*/}
      <View style={{marginHorizontal: 20}}>
        <Button title="Click Me" onPress={() => alert('Klik btn')} />
      </View>
      {/* Flat List */}
      {/* <FlatList
        style={{flex: 1}} // agar bisa scroll gk usah pake scrollview
        data={data}
        renderItem={({item, index}) => (
          <Text style={{textAlign: 'center'}}>
            {item} | {index}
          </Text>
        )}
        keyExtractor={item => item.toString()}
      /> */}
      {/* Alert */}
      <TouchableOpacity
        onPress={() =>
          Alert.alert('Penting', 'Anda Mengklik btn alert', [
            {text: 'OK', onPress: () => console.log('OK')},
            {text: 'Cancel', onPress: () => console.log('Cancel')},
          ])
        }>
        <Text style={styles.textButton}>Alert Btn</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CoreComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
    // color: 'rgb(0, 0, 0)',
    // color: '#21212121',
    fontStyle: 'normal',
    textAlign: 'right',
    // textDecorationLine: 'line-through',
    // textDecorationLine: 'underline',
    // textDecorationLine: 'underline line-through',
    letterSpacing: 3,
  },
  view: {
    // width: 100,
    // height: 100,
    // margin: 20,
    // marginVertical: 20,
    marginTop: 20,
    marginBottom: 20,
    // marginHorizontal: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
    // paddingVertical: 20,
    // paddingTop: 20,
    // paddingBottom: 20,
    // paddingHorizontal: 20,
    // paddingLeft: 20,
    // paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // alignItems: 'flex-end',
    flex: 1,
    // flexDirection: 'row-reverse',
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  header: {
    backgroundColor: '#9c27b0',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  // https://www.materialpalette.com/colors
  // unsplash.com
  img: {
    // width: 200,
    // height: 200,
    width: windowWidth,
    height: windowHeight / 5,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#7b1fa2',
    paddingVertical: 15,
    marginVertical: 20,
    marginHorizontal: 50,
    borderRadius: 50,
    textAlign: 'center',
    elevation: 5,
  },
  textInput: {
    // borderBottomWidth: 1,
    borderWidth: 1,
    borderColor: '#7b1fa2',
    borderRadius: 5,
    paddingHorizontal: 20,
    marginHorizontal: 50,
    marginTop: 20,
    borderRadius: 50,
    backgroundColor: '#f3e5f5',
    color: '#7b1fa2',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  imgBg: {
    width: windowWidth,
    height: windowHeight / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
