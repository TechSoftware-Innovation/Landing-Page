import '../sass/style.scss'
import {
    onButtonMobileClick,
    onLanguageSelectChange,
    onSubmitForm,
    onWindowLoad,
    onWindowResize,
    onWindowScroll
} from "./modules/eventHandlers.js";
import {updateContent} from "./utils/updateContent.js";
import i18next from "i18next";
import en from '../i18n/en.json';
import es from '../i18n/es.json';

i18next.init({
    lng: 'en',
    resources: {
        en: { translation: en },
        es: { translation: es }
    }
}, function() {
    updateContent();
}).then(() => updateContent());

onButtonMobileClick();

onWindowResize();

onWindowLoad();

onWindowScroll();

onLanguageSelectChange();

onSubmitForm();