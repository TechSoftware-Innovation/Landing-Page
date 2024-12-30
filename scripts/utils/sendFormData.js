import {contactFormSubmitButton} from "../modules/constants.js";
import i18next from "i18next";
import {ToastTypes} from "../enums/ToastTypes.js";
import {Toast} from "../classes/Toast.js";

export function submitFormData(event) {
    event.preventDefault();
    validateForm(this);
    const previousButtonValue = getPreviousButtonValue();
    updateButtonState();
    const formDataString = getFormData(this);
    sendFormData(formDataString)
        .then(() => {
            const toast = new Toast(i18next.t("submitSuccessMessage"), ToastTypes.SUCCESS, 15000);
            toast.show();
            resetButtonState(previousButtonValue);
            this.reset();
        })
        .catch(() => {
            const toast = new Toast(i18next.t("submitErrorMessage"), ToastTypes.ERROR, 15000);
            toast.show();
        });
}

function getFormData(form) {
    const formData = new FormData(form);
    let keyValuePairs = [];
    for (const pair of formData.entries()) {
        keyValuePairs.push(pair[0] + '=' + pair[1]);
    }
    return keyValuePairs.join('&');
}

function validateForm(form) {
    if (!form.checkValidity()) {
        form.reportValidity();
    }
}

async function sendFormData(formDataString) {
    const googleScriptURL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    return await fetch( googleScriptURL, {
        redirect: 'follow',
        method: 'POST',
        headers: {
            "Content-Type": "text/plain;charset=utf-8",
        },
        body: formDataString,
    });
}

function getPreviousButtonValue() {
    return contactFormSubmitButton.value;
}

function updateButtonState() {
    const submitButton = contactFormSubmitButton;
    submitButton.disabled = true;
    submitButton.value = i18next.t("submitContactMessage");
}

function resetButtonState(defaultButtonState) {
    contactFormSubmitButton.value = defaultButtonState;
}