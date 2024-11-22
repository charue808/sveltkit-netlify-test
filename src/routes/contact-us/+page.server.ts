import type { Actions } from './$types';
// nodemailer
// googleapis
export const actions = {
	contact: async ({ url, request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)

	}
} satisfies Actions;