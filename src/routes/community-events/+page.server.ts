import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

	const content = `We are rolling out an updated community events page Q1 2025. If you would like to share your event with our members, please send an email to [community.events@jwsf.org](mailto:community.events@jwsf.org).`

	return {
		title: 'Community Events',
		description: "Japanese Women's Society Foundation (JWSF) provides this event calendar as a benefit to JWSF members in good standing or an Officer of a member of the Kizuna Group. Disclaimer: Events posted to our community calendar are not associated to JWSF. While we respect the dedication and work of the organizations presenting these community events, a listing on these pages does not represent an endorsment.",
		heading: 'Community Events',
		subheading: 'Event Calendar',
		content: content
	};


};