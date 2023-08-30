import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors, gstyles } from '../../../../theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'

export function RecuperarSenha() {
    const navigation = useNavigation()
    function go(to: string) {
        navigation.navigate(to)
    }

    return (
        <View style={[gstyles.container, { backgroundColor: colors.gray, justifyContent: "center" }]}>
            <Text style={gstyles.tituloRecSenha}>Recuperação de senha para Responsáveis</Text>
            <TextInput style={[gstyles.accInput, {marginBottom: 40}]} cursorColor="black" placeholder='Email' />
            <TouchableOpacity
                onPress={() => go('ConfirmarCodigo')} style={gstyles.submitButton}>
                <Text style={gstyles.submitBtnText}>Enviar Código</Text>
            </TouchableOpacity>
        </View>
    );
}