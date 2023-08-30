import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors, gstyles } from '../../theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'

export function LogIn() {
  const navigation = useNavigation()
  function go(to: string) {
    navigation.navigate(to)
  }

  return (
    <View style={[gstyles.container, { backgroundColor: colors.gray, justifyContent: "center" }]}>
      <Image source={require("../../../assets/logo128.png")} style={styles.logo}></Image>
      <TextInput style={gstyles.accInput} cursorColor="black" placeholder='Email'/>
      <TextInput style={gstyles.accInput} cursorColor="black" placeholder='Senha' secureTextEntry textContentType='password'/>
      <TouchableOpacity
        onPress={() => go('HomeAluno')} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar Aluno</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => go('HomeProfessor')} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar Professor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => go('HomeResponsavel')} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar Responsavel</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => go('RecuperarSenha')}>
        <Text style={styles.esqueciSenha}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}