import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import i18next from "i18next";
import { I18nextProvider } from 'react-i18next';  
import LanguageDetector from 'i18next-browser-languagedetector'; 

import translationEn from "./locales/en/common.json"; 
import translationCh from "./locales/ch/common.json";

const resources = {
  en: {
    translation: translationEn
  },
  ch: {
    translation: translationCh
  }
};

i18next
	.use(LanguageDetector)
	.init({
    resources, 

    lng: 'en',
    fallbackLng: 'en', // use 'en' if detected lng is not available
    debug: true,
    preload: navigator.languages,
    keySeparator: false, // use flat json

    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

/*
	To make the internationalization functions visible 
	in all our components, we have to wrap the App component 
	with I18nextProvider/IntlProvider.
*/
ReactDOM.render(
  <BrowserRouter>
  	<I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
 
