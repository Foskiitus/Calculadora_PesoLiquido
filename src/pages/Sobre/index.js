import React, {useLayoutEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre a App</Text>
      <Text style={styles.text}>
        Esta aplicação foi criada por RLopes para ajudar na tarefa de pesagem no
        armazém da Malhinhas.
      </Text>
      <Text style={styles.text}>
        Em caso de ter problemas com a aplicação entre em contacto
      </Text>
      <View style={styles.contatosGroup}>
        <Text style={styles.title}>Contacto</Text>
        <Text style={styles.contato}>Email: ricardojsl93@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#222',
    width: '100%',
    textAlign: 'center',
  },
  text: {
    color: '#333',
    padding: 5,
    width: '100%',
    textAlign: 'center',
  },
  contatosGroup: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
