import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'

export function HomeResponsavel() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Testando Tela Responsavel</Text>
            <Button title='Listar saida' color={"#00ADB5"}
                onPress={() => {
                    navigation.navigate('ListarSaidaResp')
                }} />
            <Button title='Criar Saida' color={"#00ADB5"}
                onPress={() => {
                    navigation.navigate('CriarSaidaResp')
                }} />
        </View>
    );
}