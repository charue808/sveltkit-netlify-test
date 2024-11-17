import type { Actions } from './$types';

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)
	}
} satisfies Actions;