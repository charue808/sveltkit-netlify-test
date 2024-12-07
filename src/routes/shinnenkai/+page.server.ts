
import { parse } from 'svelte/compiler';
import type { Actions } from './$types';
import { z } from 'zod';


const reservationSchema = z.object({
	FirstName: z.string().trim().min(1),
	LastName: z.string().trim().min(1),
	Email: z.string().trim().email().min(1),
	Phone: z.string().length(14),
	Payment: z.string(),
	BringingGuests: z.string(),
	TotalRSVP: z.string(),
	TotalCost: z.string(),
	GuestInfo: z.string(),
})

export const actions = {
	default: async ({ url, request }) => {
		const formDataa = Object.fromEntries(await request.formData());
		const parsedData = reservationSchema.safeParse(formDataa)
		console.log(parsedData, parsedData.error)
		if (parsedData.success) {
			const response = await fetch('https://hook.us2.make.com/mfsml1rgtiahrntg45u9ea2d62ats93b', {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(parsedData.data)
			})

			if (response.status !== 200) {
				return {error: true}
			}

			return { success: true }
		}
	}
} satisfies Actions;