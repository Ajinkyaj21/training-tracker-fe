
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
	const adminToken = localStorage.getItem('adminToken');
	if (adminToken == 1) {
		return true;
	} else {
		return false;
	}
};