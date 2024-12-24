import {
    isActiveCarrousel,
    isOverTest,
    startTestimonialsCarrousel,
    stopTestimonialsCarrousel,
    testimonialsContent
} from "../modules/constants.js";

export function verifyTestimonialsCarrousel(){
    if(!isOverTest){
        let posTest = testimonialsContent.getBoundingClientRect();
        if (posTest.top >= 0 && posTest.bottom <= window.innerHeight) {
            if(!isActiveCarrousel) startTestimonialsCarrousel();
        } else {
            stopTestimonialsCarrousel();
        }
    }
}