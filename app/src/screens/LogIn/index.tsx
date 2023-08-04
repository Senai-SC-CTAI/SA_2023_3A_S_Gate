import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'

export function LogIn() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text>Testando LogIn</Text>
      <Button title='Ir para aluno' color={"#0F0"}
      onPress={() => {
        navigation.navigate('HomeAluno')
      }}/>
      <Button title='Ir para professor' color={"#0F0"}
      onPress={() => {
        navigation.navigate('HomeProfessor')
      }}/>
      <Button title='Ir para responsavel' color={"#0F0"}
      onPress={() => {
        navigation.navigate('HomeResponsavel')
      }}/>
      <Text>{'/n'}</Text>
      <Button title='Esqueci senha' color={"#0F0"}
      onPress={() => {
        navigation.navigate('RecuperarSenha')
      }}/>
    </View>
  );
}