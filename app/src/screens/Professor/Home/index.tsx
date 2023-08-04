import React from 'react';
import { View, Text, Button } from 'react-native';

import { styles } from './styles';

import { useNavigation } from '@react-navigation/native'

export function HomeProfessor() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Testando Tela Professor</Text>
        </View>
    );
}