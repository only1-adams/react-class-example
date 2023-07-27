function saveToLocalStorage(name, value) {
	localStorage.setItem(name, value);
}

function getFromLocalStorage(name) {
	return localStorage.getItem(name);
}

function removeFromLocalStorage(name) {
	return localStorage.removeItem(name);
}

const localStorageHelper = {
	saveToLocalStorage,
	getFromLocalStorage,
	removeFromLocalStorage,
};

export default localStorageHelper;
