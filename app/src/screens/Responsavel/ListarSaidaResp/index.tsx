import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PdRespPendente } from '../../../components/PdRespPendente';
import { PdRespConc } from '../../../components/PdRespConc';
import axios from 'axios';

export function ListarSaidaResp() {
  const navigation = useNavigation()
  function go(to: string) {
    navigation.navigate(to)
  }

  const [pedidos, setPedidos] = useState<any[]>([])

  useEffect(() => {
    fetchPedidos()
}, [])

  const fetchPedidos = async () => {
    try {
        const response = await axios.get(`http://localhost:8090/pedidos`);
        setPedidos(response.data);
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
    }
}

  const pendente = pedidos.filter(pedido => pedido.status == "Sol.Est" || "Sol.Res")

  const aprovado = pedidos.filter(pedido => pedido.status == "Apv")

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
              status={item.status}
              id={item.id}
               />
          }
        />
        <Text style={gstyles.listTitle}>
          Histórico
        </Text>
        <button onClick={() => console.log(pedidos)}/>
        <FlatList
          style={gstyles.list}
          data={aprovado}
          keyExtractor={pedido => pedido.idPedido}
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