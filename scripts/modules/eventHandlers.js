import {showOptions} from "../utils/showOptions.js";
import {buttonMobile, formContact, languageSelect} from "./constants.js";
import {restoreOptions} from "../utils/restoreOptions.js";
import {generateTestimonials} from "../utils/generateTestimonials.js";
import {updateLanguage} from "../utils/updateLanguage.js";
import {changeNavbarColor} from "../utils/changeNavbarColor.js";
import {verifyTestimonialsCarrousel} from "../utils/verifyTestimonialsCarrousel.js";
import {submitFormData} from "../utils/sendFormData.js";

export const onButtonMobileClick = () =>{
    buttonMobile.addEventListener('click', showOptions);
}

export const onWindowResize = () =>{
    window.addEventListener('resize', restoreOptions);
}

export const onWindowLoad = () =>{
    window.addEventListener('load', generateTestimonials);
}

export const onWindowScroll = () =>{
    window.addEventListener('scroll', ()=>{
       changeNavbarColor();
       verifyTestimonialsCarrousel();
    });
}

export const onLanguageSelectChange = () => {
    languageSelect.addEventListener('change', updateLanguage);
}

export const onSubmitForm = () => {
    formContact.addEventListener('submit', submitFormData);
}