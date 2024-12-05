import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `## Become a Member

The JWSF encourages individuals with an interest in serving the community, perpetuating the Japanese culture, and sustaining U.S.-Japan relations to submit an application for membership.

If you would like to learn more and/or request an application, please contact the Membership Relations chairperson by sending an email to: [membership@jwsf.org](mailto:membership@jwsf.org)`

export const load: PageServerLoad = async () => {

	return {
		title: 'Become a Member',
		description: 'The who what why and how to become a member of JWSF',
		heading: 'Become a Member',
		subheading: 'Join us today!',
		content: content
	};


};