
import type { Actions } from './$types';

export const actions = {
	default: async ({ url, request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)

	}
} satisfies Actions;