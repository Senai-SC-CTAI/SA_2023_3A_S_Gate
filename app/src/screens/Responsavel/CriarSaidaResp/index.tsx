import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'

export function CriarSaidaResp() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>criar saida resp</Text>
        </View>
    );
}