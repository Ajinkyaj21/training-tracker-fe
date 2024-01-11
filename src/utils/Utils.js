
// import Cookies from "js-cookie";

import { LOCALSTORAGE_ITEMS } from "./Constants";

export const isloggedIn = () => {
    // const acccessToken = Cookies.get('token');
    const acccessToken = localStorage.getItem(LOCALSTORAGE_ITEMS.TOKEN);
    if (acccessToken) {
        return true;
    } else {
        return false;
    }
};
export const isloggedInAdmin = () => {
    const accessAdminToken = localStorage.getItem('is_admin');
    if (accessAdminToken) {
        return true;
    } else {
        return false;
    }
};