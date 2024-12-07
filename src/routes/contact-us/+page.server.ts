import type { Actions } from './$types';
// nodemailer
// googleapis
// use make for now to just insert data into a spreadsheet
export const actions = {
	default: async ({ url, request }) => {
		const formData = Object.fromEntries(await request.formData());
		console.log('form data:', formData)

		const response = await fetch('https://hook.us2.make.com/x266c2md7gxa1xf155srgkl8tkt9pxd4', {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData)
		})

		console.log('response status', response)

		if (response.status !== 200) {
			return { error: true }
		}

		return { success: true}
	}
} satisfies Actions;