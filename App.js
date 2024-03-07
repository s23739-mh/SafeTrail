import { StyleSheet, Text, View } from 'react-native';
import Header from './elements/Header';
import LoginScreen from './screens/LoginScreen';
import { StatusBar } from "expo-status-bar";
import SelectLanguage from './elements/SelectLanguage';
import LanguageFlag from './elements/LanguageFlag';

//Header is only for demo purpose
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LoginScreen></LoginScreen>
      <Header></Header>
      <SelectLanguage></SelectLanguage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //padding: 50,
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  }
});
