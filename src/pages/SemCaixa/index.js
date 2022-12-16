import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {Modal, Portal, Provider, TextInput} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Feather from 'react-native-vector-icons/Feather';

export default function SemCaixa() {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const [pesoBruto, setPesoBruto] = useState(0);
  const [pesoCone, setPesoCone] = useState(0.05);
  const [quantidadeCones, setQuantidadeCones] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcular() {
    const calculo = pesoBruto - pesoCone * quantidadeCones;
    setResultado(calculo.toFixed(2));
    Keyboard.dismiss();
  }
  function dismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <Provider>
      <View style={styles.container}>
        <Portal style={styles.centeredView}>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            style={styles.modalView}>
            <Text style={styles.title}>Como é feita esta conta?</Text>
            <Text style={styles.subtext}>
              &nbsp;&nbsp;Peso Bruto{'\n'}- Peso de um cone vazio{'\n'}*
              Quantidade de cones
            </Text>
            <Text style={styles.subtextbold}>Exemplo:</Text>
            <Text style={styles.subtext}>
              &nbsp;&nbsp;&nbsp;8.6{'\n'} - 0.05{'\n'} * 13{'\n'}
              ______{'\n'}= 7.95
            </Text>
          </Modal>
        </Portal>

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
            value={pesoBruto}
          />
          <Picker
            selectedValue={pesoCone}
            onValueChange={(itemValue, itemIndex) => setPesoCone(itemValue)}>
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
            value={quantidadeCones}
          />
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              calcular();
            }}>
            <Text style={styles.btnText}>Calcular</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btninfo}
            onPress={() => setVisible(true)}>
            <Feather name="info" size={30} color="#6BB4E9" />
          </TouchableOpacity>
        </View>
        <Text style={styles.resultado}>Peso Liquido: {resultado}Kg</Text>
      </View>
    </Provider>
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
    color: '#222',
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
    marginVertical: 5,
  },
  btninfo: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.0)',
    borderRadius: 5,
    marginVertical: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  resultado: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  btnGroup: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    width: '70%',
    height: '50%',
    top: '25%',
    left: '15%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  subtext: {
    color: '#444',
    fontWeight: '300',
    fontSize: 16,
    marginTop: 20,
  },
  subtextbold: {
    color: '#444',
    fontWeight: '500',
    fontSize: 16,
    marginTop: 20,
  },
});
