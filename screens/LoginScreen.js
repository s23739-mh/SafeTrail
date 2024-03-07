import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLOR3_WHITE, COLOR1_BLUE, COLOR4_BLACK } from "../consts/ColorConsts";
import {VW,VH} from "../consts/DisplayConsts"
import '../src/i18n/i18n.config'
//TODO: 
// Button related logic 
// Testing on different screens
// Future refactor - consider constants instead of flat values in margins, heights etc.
const LoginScreen = () => {
    
const {t} = useTranslation();
  const [email, setEmail] = useState(""); //used in future
  const [password, setPassword] = useState(""); //used in future
  return (
    <View style={styles.container}>
    <View style={styles.logoView}>
      <Image style={styles.logo} source={require("../assets/SafeTrailLogoHeader.png")} /> 
    </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={t("E-mail")}
          placeholderTextColor={COLOR1_BLUE}
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder={t("Password")}
          placeholderTextColor={COLOR1_BLUE}
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View> 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>{t("ForgotPassword")}</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>{t("Login")}</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR4_BLACK,
    alignItems: "center",
    justifyContent: "center",
  },
  logoView: {
    marginBottom: 20 * VH,
    marginTop: 10 * VH
  },
  logo: {
    width: 60 * VW,
    height: 10 * VH,
  },
  inputView: {
    backgroundColor: COLOR3_WHITE,
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: 'center'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: COLOR1_BLUE
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: COLOR3_WHITE,
    
  },
  loginText: {
    color: COLOR1_BLUE
  }
});

export default LoginScreen;