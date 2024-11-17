import type { Actions } from './$types';

export const prerender = true;

export const actions = {
	rsvp: async ({ request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)
	}
} satisfies Actions;