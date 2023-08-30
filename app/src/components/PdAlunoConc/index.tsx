import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme';

type Props = {
    data: string;
    horario: string;
}

export function PdAlunoConc({data, horario}: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {data} - {horario}
                </Text>
                <Text style={styles.state}>
                    Saída realizada
                </Text>
            </View>
        </View>
    );
}