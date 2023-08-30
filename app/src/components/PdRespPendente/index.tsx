import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    data: string;
    horario: string;
    aluno: boolean;
}



export function PdRespPendente({data, horario, aluno}: Props) {
    function CompIcon() {
        if (aluno) return (<Feather name='eye' size={40} color={colors.grayDark}></Feather>)
        else return (<Feather name='trash' size={40} color={colors.grayDark}></Feather>)
    }
    const navigation = useNavigation()
    function go(to: string) {
        navigation.navigate(to)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => go("VisualizarSaida")}>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {data} - {horario}
                </Text>
                <Text style={styles.state}>
                    Aguardando aprovação 
                </Text>
            </View>
            <CompIcon></CompIcon>
        </TouchableOpacity>
    );
}