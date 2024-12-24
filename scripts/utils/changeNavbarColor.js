import {header, navbar} from "../modules/constants.js";

export function changeNavbarColor(){
    if(document.documentElement.scrollTop + 126 > header.clientHeight) {
        navbar.classList.add('navbar--dark-background');
    } else {
        navbar.classList.remove('navbar--dark-background');
    }
}