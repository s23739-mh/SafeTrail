import { StyleSheet, View, Image, Pressable, Text } from 'react-native';
import { useTranslation } from "react-i18next"

type flagType = {
    lang: string;
}

const LanguageFlag = (type : flagType) => {
    const {t, i18n} = useTranslation();

    const changeLang = () => {
        i18n.changeLanguage(type.lang)
    }
switch(type.lang){
    case "pl": {
        return(<View>
            <Pressable onPress={changeLang}>
            <Image style={styles.image} 
            source={require("../assets/PL_flag.png")}
            />
            <Text>ugabuga</Text>
            </Pressable>
        </View>)
        break;
    }
    case "en": {
        return(<View>
            <Pressable onPress={changeLang}>
            <Image style={styles.image} 
            source={require("../assets/UK_flag.png")}
            />
            </Pressable>
        </View>)
        break;
    }
    default: {
        break;
    }
}
}

const styles = StyleSheet.create({
image:{
width:40,
height:30,
margin: 1
}
});

export default LanguageFlag;