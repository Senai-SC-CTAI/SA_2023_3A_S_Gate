import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { colors, gstyles } from '../../../../theme';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'

export function NovaSenha() {
    const navigation = useNavigation()
    function go(to: string) {
        navigation.navigate(to)
    }

    return (
        <View style={[gstyles.container, { backgroundColor: colors.gray, justifyContent: "center" }]}>
            <Text style={gstyles.tituloRecSenha}>Recuperação de senha para Responsáveis</Text>
            <TextInput style={[gstyles.accInput, {marginBottom: 20}]} 
            cursorColor="black" placeholder='Nova senha' secureTextEntry textContentType='password'/>
            <TextInput style={[gstyles.accInput, {marginBottom: 40}]} 
            cursorColor="black" placeholder='Confirmar senha' secureTextEntry textContentType='password'/>
            <TouchableOpacity
                onPress={() => go('LogIn')} style={gstyles.submitButton}>
                <Text style={gstyles.submitBtnText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}