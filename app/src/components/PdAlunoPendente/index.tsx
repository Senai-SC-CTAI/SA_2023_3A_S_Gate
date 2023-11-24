import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

type Props = {
    data: string;
    horario: string;
    id: number;
}



export function PdAlunoPendente({ data, horario, id }: Props) {
    const navigation = useNavigation()
    function go(to: string) {
        navigation.navigate(to)
    }


    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>
                    {data} - {horario}
                </Text>
                <Text style={styles.state}>
                    Aguardando aprovação
                </Text>
            </View>
            <TouchableOpacity><Feather name='trash' size={40} color={colors.grayDark}></Feather></TouchableOpacity>
        </View>
    );
}