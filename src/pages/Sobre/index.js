import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página SOBRE</Text>
      <Text style={styles.text}>
        Esta aplicação foi criada por RLopes para ajudar na tarefa de pesagem no
        armazém da Malhinhas.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000',
  },
  text: {
    color: '#333',
  },
});
