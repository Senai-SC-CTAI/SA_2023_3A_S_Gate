import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: colors.grayDark,
    alignItems: "center",
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 25,
    color: colors.cyan,
    marginTop: 15
  },
  profile: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  submitButton: {
    width: "75%",
    height: "6.5%",
    borderRadius: 15,
    backgroundColor: colors.red,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  submitBtnText: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 17.5,
    color: colors.offwhite
  },
});