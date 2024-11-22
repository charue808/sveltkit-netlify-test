import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {

	return {
		title: `Hello ${params.slug}!`,
		content: `Welcome to ${params.slug}. Lorem ipsum dolor sit amet...`
	};


};