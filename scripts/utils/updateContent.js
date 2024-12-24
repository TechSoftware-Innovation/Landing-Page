import {
    aboutUsInfo,
    aboutUsMission,
    aboutUsMissionContent,
    aboutUsTitle,
    aboutUsValues,
    aboutUsValuesContent1,
    aboutUsValuesContent2,
    aboutUsValuesContent3,
    aboutUsValuesContent4,
    aboutUsVision,
    aboutUsVisionContent,
    bannerButton,
    bannerTitle,
    benefit1Subtitle,
    benefit1Title,
    benefit2Subtitle,
    benefit2Title,
    benefit3Subtitle,
    benefit3Title,
    benefit4Subtitle,
    benefit4Title,
    benefitSubtitle,
    benefitTitle,
    contactAddress,
    contactEmail,
    contactFormEmailLabel,
    contactFormMessageLabel,
    contactFormNameLabel,
    contactFormPhoneLabel,
    contactFormSubmitButton,
    contactFormSubtitle,
    contactFormTitle,
    contactPhone,
    contactTitle,
    copyrightText,
    knowMoreButton,
    knowMoreInfo,
    knowMoreSubtitle,
    knowMoreTitle,
    legalTitle,
    navbarItemAboutUs,
    navbarItemBenefits,
    navbarItemKnowMore,
    navbarItemTestimonials,
    privacyPolicyText,
    socialMediaTitle,
    termsConditionsText,
    testimonialSubtitle,
    testimonialTitle,
    usefulLinks1,
    usefulLinks2,
    usefulLinks3,
    usefulLinks4,
    usefulLinks5,
    usefulLinks6,
    usefulLinksTitles
} from "../modules/constants.js";
import i18next from "i18next";

export function updateContent() {
    bannerTitle.innerHTML = i18next.t("home-title");
    bannerButton.innerHTML = i18next.t("hero-button")
    navbarItemKnowMore.innerHTML = i18next.t("navbar-item-know-more");
    navbarItemBenefits.innerHTML = i18next.t("navbar-item-benefits");
    navbarItemTestimonials.innerHTML = i18next.t("navbar-item-testimonials");
    navbarItemAboutUs.innerHTML = i18next.t("navbar-item-about-us");
    knowMoreTitle.innerHTML = i18next.t("know-more-section-title");
    knowMoreSubtitle.innerHTML = i18next.t("know-more-section-subtitle");
    knowMoreInfo.innerHTML = i18next.t("know-more-section-description");
    knowMoreButton.innerHTML = i18next.t("know-more-section-button");
    benefitTitle.innerHTML = i18next.t("benefitTitle");
    benefitSubtitle.innerHTML = i18next.t("benefitSubtitle");
    benefit1Title.innerHTML = i18next.t("benefit1Title");
    benefit1Subtitle.innerHTML = i18next.t("benefit1Subtitle");
    benefit2Title.innerHTML = i18next.t("benefit2Title");
    benefit2Subtitle.innerHTML = i18next.t("benefit2Subtitle");
    benefit3Title.innerHTML = i18next.t("benefit3Title");
    benefit3Subtitle.innerHTML = i18next.t("benefit3Subtitle");
    benefit4Title.innerHTML = i18next.t("benefit4Title");
    benefit4Subtitle.innerHTML = i18next.t("benefit4Subtitle");
    testimonialTitle.innerHTML = i18next.t("testimonialTitle");
    testimonialSubtitle.innerHTML = i18next.t("testimonialSubtitle");
    aboutUsTitle.innerHTML = i18next.t("aboutUsTitle");
    aboutUsInfo.innerHTML = i18next.t("aboutUsInfo");
    aboutUsMission.innerHTML = i18next.t("aboutUsMission");
    aboutUsMissionContent.innerHTML = i18next.t("aboutUsMissionContent");
    aboutUsVision.innerHTML = i18next.t("aboutUsVision");
    aboutUsVisionContent.innerHTML = i18next.t("aboutUsVisionContent");
    aboutUsValues.innerHTML = i18next.t("aboutUsValues");
    aboutUsValuesContent1.innerHTML = i18next.t("aboutUsValuesContent1");
    aboutUsValuesContent2.innerHTML = i18next.t("aboutUsValuesContent2");
    aboutUsValuesContent3.innerHTML = i18next.t("aboutUsValuesContent3");
    aboutUsValuesContent4.innerHTML = i18next.t("aboutUsValuesContent4");
    contactFormTitle.innerHTML = i18next.t("contactFormTitle");
    contactFormSubtitle.innerHTML = i18next.t("contactFormSubtitle");
    contactFormNameLabel.innerHTML = i18next.t("contactFormNameLabel");
    contactFormEmailLabel.innerHTML = i18next.t("contactFormEmailLabel");
    contactFormPhoneLabel.innerHTML = i18next.t("contactFormPhoneLabel");
    contactFormMessageLabel.innerHTML = i18next.t("contactFormMessageLabel");
    contactFormSubmitButton.innerHTML = i18next.t("contactFormSubmitButton");
    socialMediaTitle.innerHTML = i18next.t("socialMediaTitle");
    usefulLinksTitles.innerHTML = i18next.t("usefulLinksTitle");
    usefulLinks1.innerHTML = i18next.t("usefulLinksHome");
    usefulLinks2.innerHTML = i18next.t("usefulLinksKnowMore");
    usefulLinks3.innerHTML = i18next.t("usefulLinksBenefits");
    usefulLinks4.innerHTML = i18next.t("usefulLinksTestimonials");
    usefulLinks5.innerHTML = i18next.t("usefulLinksAboutUs");
    usefulLinks6.innerHTML = i18next.t("usefulLinksContact");

    contactTitle.innerHTML = i18next.t("contactTitle");
    contactPhone.innerHTML = i18next.t("contactPhone");
    contactEmail.innerHTML = i18next.t("contactEmail");
    contactAddress.innerHTML = i18next.t("contactAddress");
    legalTitle.innerHTML = i18next.t("legalTitle");
    privacyPolicyText.innerHTML = i18next.t("privacyPolicyText");
    termsConditionsText.innerHTML = i18next.t("termsConditionsText");
    copyrightText.innerHTML = i18next.t("copyrightText");
}