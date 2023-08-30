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

export function CriarSaida() {
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
                <View style={[gstyles.buttonRow, { justifyContent: 'space-between', height: "15%"  }]}>
                    <TouchableOpacity style={gstyles.cancel} onPress={() => go("HomeAluno")}>
                        <Feather name='x' size={60} color={colors.offwhite} />
                    </TouchableOpacity>
                    <TouchableOpacity style={gstyles.confirm} onPress={() => go("HomeAluno")}>
                        <Feather name='check' size={60} color={colors.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    </SideMenu>
    );
}