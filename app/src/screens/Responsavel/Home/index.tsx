import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export function HomeResponsavel({ route }) {
  const navigation = useNavigation()
  function go(to: string, parameters: object) {
      navigation.navigate(to, parameters)
  }

  const { email } = route.params;

  return (
    <SafeAreaView style={[gstyles.container]}>
      <View style={gstyles.header}>
        <Feather name="menu" size={40} color={colors.cyan} />
        <Image source={require("../../../../assets/logo64.png")} style={gstyles.headerLogo} />
      </View>
      <View style={gstyles.body}>
        <Text style={gstyles.titleHome}>
          Bem-vindo (a)
        </Text>
        <Text style={gstyles.subtitleHome}>
          Gerenciador de saídas S-Gate
        </Text>
        <View style={gstyles.buttonRow}>
          <TouchableOpacity style={gstyles.homeButton} onPress={() => go("ListarSaidaResp")}>
            <Feather name="list" size={60} color={colors.grayDark} />
            <Text style={gstyles.homeButtonText}>Visualizar saídas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={gstyles.homeButton} onPress={() => go("CriarSaidaResp")}>
            <Feather name="plus" size={60} color={colors.grayDark} />
            <Text style={gstyles.homeButtonText}>Criar pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}