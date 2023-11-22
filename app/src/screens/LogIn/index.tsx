import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors, gstyles } from '../../theme';
import { styles } from './styles';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const logar = async (email: string, senha: string) => {
  try {
    const response = await axios.post('http://localhost:8090/api/login', {
      email: email,
      senha: senha,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export function LogIn() {
  const navigation = useNavigation()
  function go(to: string) {
    navigation.navigate(to)
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    try {
      if (!email || !senha) {
        alert("Campos não podem ser nulos")
      }
      else {
        const response = await logar(email, senha);
        if (response) {
          go('HomeAluno')
        }
        else {
          alert("Credenciais inválidas")
        }
      }
    } catch (error) {
      console.error('Erro ao se logar:', error);
    }
  };

  return (
    <View style={[gstyles.container, { backgroundColor: colors.gray, justifyContent: "center" }]}>
      <Image source={require("../../../assets/logo128.png")} style={styles.logo}></Image>
      <TextInput style={gstyles.accInput} cursorColor="black" placeholder='Email' value={email} onChangeText={(e) => setEmail(e)}/>
      <TextInput style={gstyles.accInput} cursorColor="black" placeholder='Senha' secureTextEntry value={senha} onChangeText={(e) => setSenha(e)}/>
      <TouchableOpacity
        onPress={handleLogin} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => go('RecuperarSenha')}>
        <Text style={styles.esqueciSenha}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}