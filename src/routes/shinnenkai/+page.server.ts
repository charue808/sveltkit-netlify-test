import type { Actions } from './$types';

export const actions = {
	rsvp: async ({ url, request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)

		let origin = url.origin

		fetch(`${origin}/shinnenkai`, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString()
		})
			.then(() => alert("Thank you for your submission"))
			.catch(error => alert(error));

	}
} satisfies Actions;