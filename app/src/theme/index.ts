import { StyleSheet } from 'react-native';

export const colors = {
    grayDark:"#222831",
    gray:"#393E46",
    cyan:"#00ADB5",
    cyanDark:"#00777C",
    offwhite:"#EEEEEE",
    steel: "#D9D9D9",
    red: "#B50021"
}

export const gstyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offwhite,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  header: {
    height: "8%",
    backgroundColor: colors.gray,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerLogo: {
    resizeMode: "contain",
    width: 40,
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyList: {
    width: "100%", 
    height: "100%",
    padding: "5%",
  },
  buttonRow: {
    height: "30%",
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  list: {
    maxHeight: "50%"
  },

  // buttons

  submitButton: {
    width: "75%",
    height: "6.5%",
    borderRadius: 40,
    backgroundColor: colors.cyan,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15
  },
  submitBtnText: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 17.5
  },
  homeButton: {
    height: 170,
    width: 170,
    backgroundColor: colors.steel,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  homeButtonText: {
    fontFamily: "Nunito-Medium",
    fontSize: 15,
    marginTop: 15
  },
  cancel: {
    backgroundColor: colors.red,
    width: 80,
    height: 80,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  confirm: {
    backgroundColor: colors.cyan,
    width: 80,
    height: 80,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },

  // inputs

  accInput: {
    width: "75%",
    height: "6.5%",
    borderRadius: 5,
    backgroundColor: colors.offwhite,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 10
  },
  saidaInputView: {
    justifyContent: 'center',
    alignItems: "flex-start",
    width: "95%",
    marginBottom: 15
  },
  saidaInput: {
    backgroundColor: colors.steel,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: colors.cyan,
    width: "100%",
    height: 60,
    padding: 10
  },

  // titles
  tituloRecSenha: {
    fontFamily: "Nunito-Bold",
    color: "#909090",
    fontSize: 20,
    marginBottom: 40,
    textAlign: "center"
  },
  titleHome: {
    fontFamily: "Nunito-ExtraBold",
    fontSize: 40,
    color: colors.grayDark,
    marginBottom: 25
  },
  subtitleHome: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 20,
    color: colors.grayDark,
    marginBottom: 15
  },
  listTitle: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 20,
    color: "#707070",
    marginBottom: 15
  }

});