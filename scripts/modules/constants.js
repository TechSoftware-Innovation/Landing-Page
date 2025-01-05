export const apiRandomUser = "https://randomuser.me/api/";

export const buttonMobile = document.querySelector('#display-button');
export const menuOptions = document.querySelector('.navbar__complete-list');
export const navbar = document.querySelector('.navbar');
export const header = document.querySelector('.header');
export const headerVideo = document.querySelector('.header__video');
export const headerImagePlaceholder = document.querySelector('.video__placeholder');
export const headerVideoSource = document.querySelector('.video__content');
export const testimonialsContent = document.querySelector('div.testimonials__content');
export const languageSelect = document.querySelector('#language-select');

export const bannerTitle = document.querySelector('.banner__title');
export const bannerButton = document.querySelector('.banner__button a');
export const navbarItemKnowMore = document.querySelector('.navbar__list li:nth-child(1) a');
export const navbarItemBenefits = document.querySelector('.navbar__list li:nth-child(2) a');
export const navbarItemTestimonials = document.querySelector('.navbar__list li:nth-child(3) a');
export const navbarItemAboutUs = document.querySelector('.navbar__list li:nth-child(4) a');
export const knowMoreTitle = document.querySelector('.know-more__title');
export const knowMoreSubtitle = document.querySelector('.know-more__subtitle');
export const knowMoreInfo = document.querySelector('.know-more__info');
export const knowMoreButton = document.querySelector('.know-more__button a');
export const benefitTitle = document.querySelector('.our-benefits__title');
export const benefitSubtitle = document.querySelector('.our-benefits__subtitle');
export const benefit1Title = document.querySelector('.our-benefits__content article:nth-child(1) h4');
export const benefit1Subtitle = document.querySelector('.our-benefits__content article:nth-child(1) p');
export const benefit2Title = document.querySelector('.our-benefits__content article:nth-child(2) h4');
export const benefit2Subtitle = document.querySelector('.our-benefits__content article:nth-child(2) p');
export const benefit3Title = document.querySelector('.our-benefits__content article:nth-child(3) h4');
export const benefit3Subtitle = document.querySelector('.our-benefits__content article:nth-child(3) p');
export const benefit4Title = document.querySelector('.our-benefits__content article:nth-child(4) h4');
export const benefit4Subtitle = document.querySelector('.our-benefits__content article:nth-child(4) p');
export const testimonialTitle = document.querySelector('.testimonials__title');
export const testimonialSubtitle = document.querySelector('.testimonials__subtitle');
export const aboutUsTitle = document.querySelector('.about-us__title');
export const aboutUsInfo = document.querySelector('.about-us__info');
export const aboutUsMission = document.querySelector('.about-us__details .about-us__card:nth-child(1) h4');
export const aboutUsMissionContent = document.querySelector('.about-us__details .about-us__card:nth-child(1) p');
export const aboutUsVision = document.querySelector('.about-us__details .about-us__card:nth-child(2) h4');
export const aboutUsVisionContent = document.querySelector('.about-us__details .about-us__card:nth-child(2) p');
export const aboutUsValues = document.querySelector('.about-us__details .about-us__card:nth-child(3) h4');
export const aboutUsValuesContent1 = document.querySelector('.about-us__details .about-us__card:nth-child(3) p span:nth-child(1)');
export const aboutUsValuesContent2 = document.querySelector('.about-us__details .about-us__card:nth-child(3) p span:nth-child(2)');
export const aboutUsValuesContent3 = document.querySelector('.about-us__details .about-us__card:nth-child(3) p span:nth-child(3)');
export const aboutUsValuesContent4 = document.querySelector('.about-us__details .about-us__card:nth-child(3) p span:nth-child(4)');

export const contactFormTitle = document.querySelector('.contact-form__title');
export const contactFormSubtitle = document.querySelector('.contact-form__subtitle');
export const contactFormNameLabel = document.querySelector('.contact-form__label[for="name"] span');
export const contactFormEmailLabel = document.querySelector('.contact-form__label[for="email"] span');
export const contactFormPhoneLabel = document.querySelector('.contact-form__label[for="phone"] span');
export const contactFormMessageLabel = document.querySelector('.contact-form__label[for="message"] span');
export const contactFormSubmitButton = document.querySelector('.contact-form__button');
export const socialMediaTitle = document.querySelector('.social-media__title');

export const contactTitle = document.querySelector('.contact__title');
export const contactPhone = document.querySelector('.contact__item:nth-child(1) p');
export const contactEmail = document.querySelector('.contact__item:nth-child(3) p');
export const contactAddress = document.querySelector('.contact__item:nth-child(2) p');

export const legalTitle = document.querySelector('.legal__title');
export const privacyPolicyText = document.querySelector('.legal__link:nth-child(1) > p');
export const termsConditionsText = document.querySelector('.legal__link:nth-child(2) > p');
export const copyrightText = document.querySelector('.footer__copyright');

export const formContact = document.querySelector('#contact-form');

let interval = null;

export let stepCarrousel = 1;
export let stopTestimonialsCarrousel = () =>{
    stepCarrousel = 0;
    isActiveCarrousel = false;
    clearInterval(interval);
};
export let startTestimonialsCarrousel = () =>{
    let maxScrollLeft = testimonialsContent.scrollWidth - testimonialsContent.clientWidth;
    stepCarrousel =  1;
    isActiveCarrousel = true;
    interval = setInterval(()=>{
        testimonialsContent.scrollLeft = testimonialsContent.scrollLeft + stepCarrousel;
        if(testimonialsContent.scrollLeft === maxScrollLeft) stepCarrousel = stepCarrousel * -1;
        if(testimonialsContent.scrollLeft === 0) stepCarrousel = stepCarrousel * -1;
    }, 15);
};
export let isActiveCarrousel = false;
export let isOverTest = false;