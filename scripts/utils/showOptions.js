import {menuOptions, navbar, header} from "../modules/constants.js";

export function showOptions(){
    menuOptions.classList.toggle('navbar__complete-list--show_list');
    if(menuOptions.classList.contains('navbar__complete-list--show_list')){
        navbar.classList.add('navbar--dark-background');
    }
    if(!(menuOptions.classList.contains('navbar__complete-list--show_list'))
        && document.documentElement.scrollTop < header.clientHeight)
    {
        navbar.classList.remove('navbar--dark-background');
    }
}