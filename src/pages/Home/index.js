import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

export default function Home() {
  const navigation = useNavigation();

  function navegaDetalhes() {
    navigation.navigate('Detalhes');
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.topNavContainer}>
        <Feather
          name="menu"
          size={30}
          color="#900"
          onPress={() => navigation.openDrawer()}
        />
        <Text>RLopes.pt</Text>
      </View> */}
      <View style={styles.content}>
        <Text style={styles.appTitle}>
          Uma pequena app para ajudar a calcular pesos
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
  },
  appTitle: {
    color: '#333',
    fontSize: 18,
  },
});
