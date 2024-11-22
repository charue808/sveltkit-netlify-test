
import type { Actions } from './$types';

export const actions = {
	default: async ({ url, request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)

		const response = await fetch('https://eojh6idmcs66pre.m.pipedream.net', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(Object.fromEntries(formData.entries()))
		})

	}
} satisfies Actions;