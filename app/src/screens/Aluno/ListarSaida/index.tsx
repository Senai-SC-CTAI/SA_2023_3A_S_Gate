import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PdAlunoPendente } from '../../../components/PdAlunoPendente';
import { PdAlunoConc } from '../../../components/PdAlunoConc';
import { Header } from '../../../components/Header';
import SideMenu from 'react-native-side-menu';
import { Drawer } from '../../../components/Drawer';

export function ListarSaida() {
  const [drawerOpen, setDrawerOpen] = useState(false);

    const navigation = useNavigation()
    function go(to: string) {
        navigation.navigate(to)
    }

    function openDrawer(){
        setDrawerOpen(true)
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
    <SideMenu menu={<Drawer></Drawer>} 
        isOpen={drawerOpen} 
        edgeHitWidth={200}
        onChange={(isOpen) => {
            setDrawerOpen(isOpen)
        }}>
    <SafeAreaView style={[gstyles.container, { paddingBottom: 50 }]}>
    <Header openDrawer={openDrawer}></Header>
      <View style={gstyles.bodyList}>
        <Text style={gstyles.listTitle}>
          Pendente
        </Text>
        <FlatList
          style={gstyles.list}
          data={pendente}
          renderItem={({ item }) =>
            <PdAlunoPendente
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
            <PdAlunoConc
              data={item.data}
              horario={item.horario} />
          }
        />
      </View>
    </SafeAreaView>
  </SideMenu>
  );
}