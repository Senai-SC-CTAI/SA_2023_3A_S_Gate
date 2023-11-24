import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    data: string;
    horario: string;
    status: string;
    id: number
}



export function PdRespPendente({ data, horario, status, id }: Props) {
    function CompIcon() {
        if (status == "Sol.Est") return (<Feather name='eye' size={40} color={colors.grayDark}></Feather>)
        else return (<Feather name='trash' size={40} color={colors.grayDark}></Feather>)
    }
    const navigation = useNavigation()
    function go(to: string, parameters: object) {
        navigation.navigate(to, parameters)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => go("VisualizarSaida", {
            "data": data,
            "horario": horario,
            "status": status,
            "id": id
        })}>
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