import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const navigation = useNavigation();

  function navegaDetalhes() {
    navigation.navigate('Detalhes');
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/balanca.png')}
          style={styles.img}
        />
        <Text style={styles.appTitle}>
          Uma pequena app para ajudar a calcular o peso liquido
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  topNavContainer: {
    flexDirection: 'row',
    top: 0,
    left: 0,
    height: 40,
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  appTitle: {
    color: '#333',
    fontSize: 18,
  },
  img: {
    width: 200,
    height: 400,
  },
});
