import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// DEBUG Infos
let lang = window.navigator.languages ? window.navigator.languages[0] : null;
    lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

let shortLang = lang;
if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[0];

if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[0];

// e.g. en, de -> Firefox OK
// e.g. en-GB, fr-FR,... -> Chrome & Safari 
console.log("lang: ", lang);
console.log("shortLang: ", shortLang);
console.log("navigator.languages: ", navigator.languages)

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {


      en: {
        translation: {

          cookbook: {
            headline: '🇺🇸 Worldwide Cookbook',
            tagline: 'Meals from around the world, for every occasion',
          }


        }
      },

      de: {
        translation: {

          cookbook: {
            headline: '🇩🇪 Kochbuch Weltweit',
            tagline: 'Mahlzeiten aus aller Welt, zu jeder Gelegenheit',
          }


        }
      },

      fr: {
        translation: {

          cookbook: {
            headline: '🇫🇷 livre de cuisine au monde',
            tagline: 'table pour toute occasion... oder so ähnlich',
          }


        }
      }



    }
  });

export default i18n;