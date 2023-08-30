import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    data: string;
    horario: string;
}



export function PdProfConc({data, horario}: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {data} - {horario}
                </Text>
                <Text style={styles.state}>
                    Aguardando aprovação do responsável
                </Text>
            </View>
            <Feather name='check-square' size={40} color={colors.cyan}></Feather>
        </TouchableOpacity>
    );
}