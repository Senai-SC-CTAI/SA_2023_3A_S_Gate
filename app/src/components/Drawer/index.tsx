import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { colors, gstyles } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export function Drawer() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
                <Feather name='user' size={60} color={colors.cyan}></Feather>
                <Text style={styles.title}>
                    João Silva
                </Text>
            </View>
            <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.submitBtnText}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}