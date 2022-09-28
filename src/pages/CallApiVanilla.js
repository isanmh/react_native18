import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import {API} from '../helpers/Api';

const CallApiVanilla = () => {
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
    // Call api
    // fetch('https://reqres.in/api/users/2')
    //   .then(response => response.json())
    //   .then(json => console.log(json));
  }, []);

  const getData = () => {
    fetch(API)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json.data);
      });
  };

  const postData = () => {
    const dataForApi = {
      name: 'Ihsan Miftahul Huda',
      job: 'BackEnd Developer',
    };
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForApi),
    })
      .then(response => response.json())
      .then(json => {
        console.log('Post response', json);
        setDataJob(json);
      });
  };

  return (
    <View>
      <Text style={styles.text}>Call Api dgn Vanilla JS</Text>
      <Button title="Get Data" onPress={getData} />
      <Text style={styles.line}>Response Get Data</Text>
      {dataUser.avatar.length > 0 && (
        <Image style={styles.img} source={{uri: dataUser.avatar}} />
      )}
      <Text>{`${dataUser.first_name} ${dataUser.last_name}`}</Text>
      <Text>{dataUser.email}</Text>
      <Button title="Post Data" onPress={postData} />
      <Text style={styles.line}>Response Post Data</Text>
      <Text>{dataJob.name}</Text>
      <Text>{dataJob.job}</Text>
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

export default CallApiVanilla;
