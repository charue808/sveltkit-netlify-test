import type { Actions } from './$types';
// nodemailer
// googleapis
// use make for now to just insert data into a spreadsheet
export const actions = {
	contact: async ({ url, request }) => {
		const formData = await request.formData();
		console.log('form data:', formData)

	}
} satisfies Actions;