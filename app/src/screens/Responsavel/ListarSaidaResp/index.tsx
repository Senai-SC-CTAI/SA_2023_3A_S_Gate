import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PdRespPendente } from '../../../components/PdRespPendente';
import { PdRespConc } from '../../../components/PdRespConc';

export function ListarSaidaResp() {
  const navigation = useNavigation()
  function go(to: string) {
    navigation.navigate(to)
  }

  const pendente = [{
    data: "01/01/1900",
    horario: "12:00",
    aluno: true
  },
  {
    data: "01/01/1900",
    horario: "12:00",
    aluno: false
  }
]

  const conc = [{
    data: "01/01/1900",
    horario: "12:00"
  }, {
    data: "01/01/1900",
    horario: "12:00"
  }, {
    data: "01/01/1900",
    horario: "12:00"
  }, {
    data: "01/01/1900",
    horario: "12:00"
  }, {
    data: "01/01/1900",
    horario: "12:00"
  }, {
    data: "01/01/1900",
    horario: "12:00"
  }, {
    data: "01/01/1900",
    horario: "12:00"
  }]

  return (
    <SafeAreaView style={[gstyles.container, { paddingBottom: 50 }]}>
      <View style={gstyles.header}>
        <Feather name="menu" size={40} color={colors.cyan} />
        <Image source={require("../../../../assets/logo64.png")} style={gstyles.headerLogo} />
      </View>
      <View style={gstyles.bodyList}>
        <Text style={gstyles.listTitle}>
          Pendente
        </Text>
        <FlatList
          style={gstyles.list}
          data={pendente}
          renderItem={({ item }) =>
            <PdRespPendente
              data={item.data}
              horario={item.horario}
              aluno={item.aluno} />
          }
        />
        <Text style={gstyles.listTitle}>
          Histórico
        </Text>
        <FlatList
          style={gstyles.list}
          data={conc}
          renderItem={({ item }) =>
            <PdRespConc
              data={item.data}
              horario={item.horario} />
          }
        />
      </View>
    </SafeAreaView>
  );
}