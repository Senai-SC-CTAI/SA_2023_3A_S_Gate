import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'

export function HomeAluno() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Testando Tela Aluno</Text>
            <Button title='Listar saida' color={"#00ADB5"}
                onPress={() => {
                    navigation.navigate('ListarSaida')
                }} />
            <Button title='Criar Saida' color={"#00ADB5"}
                onPress={() => {
                    navigation.navigate('CriarSaida')
                }} />
        </View>
    );
}