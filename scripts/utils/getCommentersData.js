import {apiRandomUser} from "../modules/constants.js";

export async function getCommentersData(amount) {
    const response = await fetch(`${apiRandomUser}?results=${amount}&nat=us`);
    const data = await response.json();
    return data.results;
}