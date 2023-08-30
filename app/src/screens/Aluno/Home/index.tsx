import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../../components/Header';
import SideMenu from 'react-native-side-menu';
import { Drawer } from '../../../components/Drawer';

export function HomeAluno() {
  const [drawerOpen, setDrawerOpen] = useState(false);

    const navigation = useNavigation()
    function go(to: string) {
        navigation.navigate(to)
    }

    function openDrawer(){
        setDrawerOpen(true)
    }

  return (
    <SideMenu menu={<Drawer></Drawer>} 
        isOpen={drawerOpen} 
        edgeHitWidth={200}
        onChange={(isOpen) => {
            setDrawerOpen(isOpen)
        }}>
    <SafeAreaView style={[gstyles.container]}>
    <Header openDrawer={openDrawer}></Header>
      <View style={gstyles.body}>
        <Text style={gstyles.titleHome}>
          Bem-vindo (a)
        </Text>
        <Text style={gstyles.subtitleHome}>
          Gerenciador de saídas S-Gate
        </Text>
        <View style={gstyles.buttonRow}>
          <TouchableOpacity style={gstyles.homeButton} onPress={() => go("ListarSaida")}>
            <Feather name="list" size={60} color={colors.grayDark} />
            <Text style={gstyles.homeButtonText}>Visualizar saídas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={gstyles.homeButton} onPress={() => go("CriarSaida")}>
            <Feather name="plus" size={60} color={colors.grayDark} />
            <Text style={gstyles.homeButtonText}>Criar pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  </SideMenu>
  );
}