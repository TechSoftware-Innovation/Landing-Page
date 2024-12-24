import i18next from "i18next";
import {updateContent} from "./updateContent.js";

export function updateLanguage(event) {
    const selectedLanguage = event.target.value;
    i18next.changeLanguage(selectedLanguage.toLowerCase(), () => {
        updateContent();
    }).then();
}