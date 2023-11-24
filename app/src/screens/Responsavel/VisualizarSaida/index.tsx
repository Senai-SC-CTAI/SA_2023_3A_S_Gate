import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

export function VisualizarSaida({ route }) {
    const navigation = useNavigation()
    function go(to: string, parameters: object) {
        navigation.navigate(to, parameters)
    }
  
    const { data, horario, status, id } = route.params;

    return (
        <SafeAreaView style={[gstyles.container]}>
            <View style={gstyles.header}>
                <Feather name="menu" size={40} color={colors.cyan} />
                <Image source={require("../../../../assets/logo64.png")} style={gstyles.headerLogo} />
            </View>
            <View style={[gstyles.bodyList, { alignItems: "center" }]}>
                <View style={gstyles.saidaInputView}>
                    <Text style={gstyles.listTitle}>
                        Data
                    </Text>
                    <TextInput style={gstyles.saidaInput} placeholder='DD/MM/YYYY'>
                    </TextInput>
                </View>
                <View style={gstyles.saidaInputView}>
                    <Text style={gstyles.listTitle}>
                        Horário
                    </Text>
                    <TextInput style={gstyles.saidaInput} placeholder='hh:mm'>
                    </TextInput>
                </View>
                <View style={gstyles.saidaInputView}>
                    <Text style={gstyles.listTitle}>
                        Professor
                    </Text>
                    <TextInput style={gstyles.saidaInput} editable={false}>
                    </TextInput>
                </View>
                <View style={gstyles.saidaInputView}>
                    <Text style={gstyles.listTitle}>
                        Observação
                    </Text>
                    <TextInput style={[gstyles.saidaInput, { height: 160, textAlignVertical: "top" }]} 
                    placeholder='Mensagem para a coordenação'
                    multiline={true}>
                    </TextInput>
                </View>
                <View style={[gstyles.buttonRow, { justifyContent: 'space-between', height: "15%" }]}>
                    <TouchableOpacity style={gstyles.cancel} onPress={() => go("HomeResponsavel")}>
                        <Feather name='x' size={60} color={colors.offwhite} />
                    </TouchableOpacity>
                    <TouchableOpacity style={gstyles.confirm} onPress={() => go("HomeResponsavel")}>
                        <Feather name='check' size={60} color={colors.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}