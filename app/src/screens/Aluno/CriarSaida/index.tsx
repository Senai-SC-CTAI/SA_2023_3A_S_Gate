import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { colors, gstyles } from '../../../theme';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export function CriarSaida({ route }) {
    const navigation = useNavigation()
    function go(to: string, parameters: object) {
        navigation.navigate(to, parameters)
    }

    const { email } = route.params;

    const [usuarios, setUsuarios] = useState<any[]>([])
    const [pedidos, setPedidos] = useState<any[]>([])
    const [professores, setProfessores] = useState<any[]>([])

    const [user, setUser] = useState(0)
    const [data, setData] = useState('')
    const [horario, setHorario] = useState('')
    const [professorNome, setProfessorNome] = useState('')
    const [professor, setProfessor] = useState(0)
    const [observacao, setObservacao] = useState('')

    useEffect(() => {
        fetchUsuarios()
        fetchProfessores()
        fetchPedidos()
    }, [])

    const fetchUsuarios = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/estudantes`);
            setUsuarios(response.data);
            usuarios.forEach(u => {
                if (u.email == email) {
                    setUser(u.idEstudante)
                }
            });
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
        }
    }

    const fetchPedidos = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/pedidos`);
            setPedidos(response.data);
        } catch (error) {
            console.error('Erro ao buscar pedidos:', error);
        }
    }

    const fetchProfessores = async () => {
        try {
            const response = await axios.get(`http://localhost:8090/professores`);
            setProfessores(response.data);
            professores.forEach(p => {
                if (p.nome == professorNome) {
                setProfessor(p.idProfessor)
                }
            });
        } catch (error) {
            console.error('Erro ao buscar professores:', error);
        }
    }

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:8090/pedidos', {
                "data": data,
                "horario": horario,
                "status": "Sol.Est",
                "estudante": email,
                "professor": professorNome
            });
            fetchPedidos();
        } catch (error) {
            console.error('Erro ao criar pedido:', error);
        }
    }

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
                    <TextInput style={gstyles.saidaInput} placeholder='DD/MM/YYYY' value={data} onChangeText={(e) => setData(e)}>
                    </TextInput>
                </View>
                <View style={gstyles.saidaInputView}>
                    <Text style={gstyles.listTitle}>
                        Horário
                    </Text>
                    <TextInput style={gstyles.saidaInput} placeholder='hh:mm' value={horario} onChangeText={(e) => setHorario(e)}>
                    </TextInput>
                </View>
                <View style={gstyles.saidaInputView}>
                    <Text style={gstyles.listTitle}>
                        Professor
                    </Text>
                    <TextInput style={gstyles.saidaInput} placeholder='Primeiro e último nome (ex: Bruno Bandeira)' value={professorNome} onChangeText={(e) => setProfessorNome(e)}>
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
                    <TouchableOpacity style={gstyles.cancel} onPress={() => go("HomeAluno")}>
                        <Feather name='x' size={60} color={colors.offwhite} />
                    </TouchableOpacity>
                    <TouchableOpacity style={gstyles.confirm} onPress={() => handleSubmit()}>
                        <Feather name='check' size={60} color={colors.offwhite} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    );
}