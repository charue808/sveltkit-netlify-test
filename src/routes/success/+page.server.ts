import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

	return {
		title: 'Success',
		heading: 'Success',
		subheading: 'Your form has been submitted',
		content: 'page'
	};


};