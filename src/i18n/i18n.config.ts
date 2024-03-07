import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en, pl } from "./translations";

const resources = {
    en : {
        translation: en,
    },
    pl : {
        translation: pl,
    }
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: false, //Change to true if you want to see logs about translation and some other stuff
    lng: 'pl',
    fallbackLng: 'pl',
    resources,
})

export default i18next;