import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: colors.grayDark,
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: colors.cyanDark,
    marginBottom: 10
  },
  info: {

  },
  title: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
    color: colors.cyan
  },
  state: {
    fontFamily: "Nunito-SemiBoldItalic",
    fontSize: 12,
    color: colors.cyanDark
  }
});