import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PdProfConc } from '../../../components/PdProfessorConc';
import { PdProfPendente } from '../../../components/PdProfPendente';

export function HomeProfessor() {
  const navigation = useNavigation()
  function go(to: string) {
    navigation.navigate(to)
  }

  const pendente = [{
    data: "01/01/1900",
    horario: "12:00",
    alunoNome: "João Silva"
  },
  {
    data: "01/01/1900",
    horario: "12:00",
    alunoNome: "João Silva"
  }
  ]

  return (
    <SafeAreaView style={[gstyles.container]}>
      <View style={gstyles.header}>
        <Feather name="menu" size={40} color={colors.cyan} />
        <Image source={require("../../../../assets/logo64.png")} style={gstyles.headerLogo} />
      </View>
      <View style={[gstyles.bodyList, { alignItems: "center" }]}>
        <Text style={gstyles.titleHome}>
          Bem-vindo (a)
        </Text>
        <Text style={gstyles.subtitleHome}>
          Gerenciador de saídas S-Gate
        </Text>
        <View style={[gstyles.bodyList]}>
          <Text style={gstyles.listTitle}>
            Saídas pendentes para esta aula
          </Text>
          <FlatList
            style={[gstyles.list, {height: "100%"}]}
            data={pendente}
            renderItem={({ item }) =>
              <PdProfPendente
                data={item.data}
                horario={item.horario}
                alunoNome={item.alunoNome} />
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
}