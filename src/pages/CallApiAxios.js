import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import {API} from '../helpers/Api';

const CallApiAxios = ({navigation}) => {
  const [dataUser, setDataUser] = useState({
    avatar: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const [dataJob, setDataJob] = useState({
    name: '',
    job: '',
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(API)
      .then(result => {
        console.log('result: ', result);
        setDataUser(result.data.data);
      })
      .catch(err => console.log('err: ', err));
  };

  const postData = () => {
    const dataForApi = {
      name: 'Ihsan Miftahul Huda',
      job: 'BackEnd Developer',
    };
    // post mengunakan axios
    axios
      .post(API, dataForApi)
      .then(res => setDataJob(res.data))
      .catch(err => console.log('err: ', err));
  };

  return (
    <View>
      <Text style={styles.text}>Call Api dgn Axios</Text>
      <Button title="Get Data" onPress={getData} />
      <Text style={styles.line}>Response Get Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image style={styles.img} source={{uri: dataUser.avatar}} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <Text>{dataUser.avatar}</Text>
      <Button title="Post Data" onPress={postData} />
      <Text style={styles.line}>Response Post Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
      <Button
        title="Ke Halaman CRUD API"
        onPress={() => {
          navigation.navigate('CRUD');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 20,
  },
  line: {
    marginVertical: 20,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default CallApiAxios;
