import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={{uri: props.gambar}} style={styles.img} />
      <Text style={styles.text}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text style={styles.text}>Materi Props Dinamis</Text>
      <ScrollView horizontal>
        <Story
          judul="Food Vlogger"
          gambar="https://placeimg.com/640/480/people"
        />
        <Story
          judul="Pangalengan"
          gambar="https://placeimg.com/640/480/animal"
        />
        <Story judul="Video" gambar="https://placeimg.com/640/480/tech" />
        <Story
          judul="Kelas online"
          gambar="https://placeimg.com/640/480/nature"
        />
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({
  img: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20,
  },
  text: {
    textAlign: 'center',
    padding: 20,
  },
});
