import {showOptions} from "../utils/showOptions.js";
import {buttonMobile, formContact, headerVideoSource, languageSelect} from "./constants.js";
import {restoreOptions} from "../utils/restoreOptions.js";
import {generateTestimonials} from "../utils/generateTestimonials.js";
import {updateLanguage} from "../utils/updateLanguage.js";
import {changeNavbarColor} from "../utils/changeNavbarColor.js";
import {verifyTestimonialsCarrousel} from "../utils/verifyTestimonialsCarrousel.js";
import {submitFormData} from "../utils/sendFormData.js";
import {hidePreloadedImageBanner} from "../utils/hidePreloadedImageBanner.js";

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

export const onDomContentLoad = () => {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', onVideoLoadedData);
    } else {
        onVideoLoadedData();
    }
}

const onVideoLoadedData = () => {
    if (headerVideoSource) {
        if (headerVideoSource.readyState >= 2) {
            hidePreloadedImageBanner();
        } else {
            headerVideoSource.addEventListener('loadeddata', hidePreloadedImageBanner);
        }
    }
    else console.warn('No video source found');
}