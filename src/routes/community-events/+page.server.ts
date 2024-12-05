import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


export const load: PageServerLoad = async () => {

	return {
		title: 'Community Events',
		description: "Community Events Description",
		heading: 'Community Events',
		subheading: 'Event Calendar',
		content: 'page'
	};


};