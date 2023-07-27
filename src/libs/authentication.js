import localStorageHelper from "../helpers/localstorage";

export const logUserIn = async function (url, loginDetails) {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginDetails),
		});

		if (!response.ok) {
			return { hasError: true, message: "Invalid email or password" };
		}

		return response.json();
	} catch (error) {
		return { hasError: true, message: "An error occurred!" };
	}
};

export const logUserOut = function (name) {
	localStorageHelper.removeFromLocalStorage(name);
};
