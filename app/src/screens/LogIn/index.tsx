import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors, gstyles } from '../../theme';
import { styles } from './styles';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const logar = async (email: string, senha: string, tipo: string) => {
  try {
    const response = await axios.post(`http://localhost:8090/api/login${tipo}`, {
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
  function go(to: string, parameters: object) {
    navigation.navigate(to, parameters)
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (tipo: string) => {
    try {
      if (!email || !senha) {
        alert("Campos não podem ser nulos")
      }
      else {
        const response = await logar(email, senha, tipo);
        if (response) {
          if (tipo == "estudante") go("HomeAluno", { "email": email })
          else if (tipo == "professor") go("HomeProfessor", { "email": email })
          else if (tipo == "responsavel") go("HomeResponsavel", { "email": email })
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
      <Image source={require("../../../assets/logo64.png")} style={styles.logo}></Image>
      <TextInput style={gstyles.accInput} cursorColor="black" placeholder='Email' value={email} onChangeText={(e) => setEmail(e)} />
      <TextInput style={gstyles.accInput} cursorColor="black" placeholder='Senha' secureTextEntry value={senha} onChangeText={(e) => setSenha(e)} />
      <TouchableOpacity
        onPress={() => handleLogin("estudante")} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar como aluno</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLogin("professor")} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar como professor</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleLogin("responsavel")} style={gstyles.submitButton}>
        <Text style={gstyles.submitBtnText}>Entrar como responsável</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => go('RecuperarSenha', {"email": ""})}>
        <Text style={styles.esqueciSenha}>Esqueci a senha</Text>
      </TouchableOpacity>
    </View>
  );
}