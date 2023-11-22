import './styles';
import {FiX, FiCheck} from 'react-icons/fi'

export function PdAlunoConc() {
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