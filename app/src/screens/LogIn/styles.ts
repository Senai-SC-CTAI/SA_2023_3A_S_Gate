import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  esqueciSenha: {
    fontFamily: "Nunito-SemiBoldItalic",
    fontSize: 15,
    color: "#707070",
  },
  logo: {
    marginBottom: 45
  },
  submitButton: {
    width: "25%",
    height: "6.5%",
    borderRadius: 40,
    backgroundColor: colors.cyan,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
});