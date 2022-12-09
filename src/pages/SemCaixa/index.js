import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

export default function SemCaixa() {
  const [pesoBruto, setPesoBruto] = useState('');
  const [pesoCone, setPesoCone] = useState();
  const [quantidadeCones, setQuantidadeCones] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const calculo = pesoBruto - pesoCone * quantidadeCones;
    setResultado(calculo.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peso Liquido do Fio Sem a Caixa</Text>
      <View style={styles.inputGroup}>
        <TextInput
          mode="outlined"
          style={styles.input}
          type="number"
          label="Peso Bruto"
          required
          onChangeText={setPesoBruto}
          keyboardType="numeric"
        />
        <Picker
          selectedValue={pesoCone}
          onValueChange={(itemValue, itemIndex) => setPesoCone(itemValue)}>
          <Picker.Item label="Escolha um cone" />
          <Picker.Item label="Cone Pequeno 50g" value="0.05" />
          <Picker.Item label="Cone Medio 80g" value="0.08" />
        </Picker>
        <TextInput
          mode="outlined"
          style={styles.input}
          type="number"
          label="Quantidade Cones"
          required
          onChangeText={setQuantidadeCones}
          keyboardType="numeric"
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          calcular();
        }}>
        <Text style={styles.btnText}>Calcular</Text>
      </TouchableOpacity>
      <Text style={styles.resultado}>Resultado: {resultado}Kg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
    fontWeight: '500',
    fontSize: 20,
  },

  inputGroup: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  input: {
    borderColor: '#999',
    borderStyle: 'solid',
  },
  btn: {
    width: 120,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#666',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff',
  },
  resultado: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
});
