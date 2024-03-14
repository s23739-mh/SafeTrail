import { useTranslation } from "react-i18next"
import { TouchableOpacity, View, Text, Image } from "react-native"
import '../src/i18n/i18n.config'
import LanguageFlag from "./LanguageFlag"

const SelectLanguage = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = () => {
        if (i18n.language === 'en'){
            i18n.changeLanguage('pl')
        }
        else {
            i18n.changeLanguage('en')
        }
    }

return (<View>
        <Text>Change Language</Text>
        <LanguageFlag lang="pl"></LanguageFlag>
        <LanguageFlag lang="en"></LanguageFlag>
</View>
);
}

export default SelectLanguage;