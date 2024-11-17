import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const prerender = true;

export const actions = {
	default: async ({ url, request }) => {
	
		const formData = await request.formData();

		let origin = url.origin;

		try {
			const response = await fetch(`${origin}/shinnenkai`, {
				method: 'POST',
				headers: {
					'x-sveltekit-action': 'true'
				},
				body: new URLSearchParams(formData).toString()
	
			});
	
			const data = await response.text();

			if (response.status !== 200)
				return fail(response.status, {
					postFail: true,
					err: `Something went wrong, please try again. Error: ${data}`
			});

			return { success: true };
	
		} catch (err) {
			console.log('error: ', err)
			return fail(500, { postFail: true, err })
		}

		
	

	}
} satisfies Actions;