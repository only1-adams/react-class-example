import { useEffect } from "react";

export default function useFetchLoader(
	url,
	callback,
	errorCallback,
	ACCESS_TOKEN
) {
	useEffect(() => {
		async function fetchSingleProduct() {
			try {
				const response = await fetch(url, {
					headers: {
						Authorization: `JWT ${ACCESS_TOKEN}`,
					},
				});
				const data = await response.json();
				callback(data);
			} catch (error) {
				if (error.message === "Unexpected end of JSON input") {
					errorCallback("The requested product was not found!!!!!");
				}
			}
		}

		fetchSingleProduct();
	});
}
