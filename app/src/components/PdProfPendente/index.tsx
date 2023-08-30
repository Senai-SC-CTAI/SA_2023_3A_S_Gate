import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

type Props = {
    data: string;
    horario: string;
    alunoNome: string;
}



export function PdProfPendente({data, horario, alunoNome}: Props) {
    return (
        <TouchableOpacity style={styles.container} >
            <View style={styles.info}>
                <Text style={styles.title}>
                    {horario}
                </Text>
                <Text style={styles.state}>
                    {alunoNome}
                </Text>
            </View>
            <Feather name='check-square' size={40} color={colors.grayDark}></Feather>
        </TouchableOpacity>
    );
}