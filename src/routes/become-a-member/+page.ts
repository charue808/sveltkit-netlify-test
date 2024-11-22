import { error } from '@sveltejs/kit';
import md from '$lib/pages/become-a-member.md';
import type { PageLoad } from './$types';

export const load: PageLoad = ({  }) => {

	console.log('md', md)

	return {
		title: 'Hello world!',
		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	};


};