import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { read } from '$app/server';
import someFile from '$lib/server/some.txt';

export const load: PageLoad = async ({  }) => {

	const asset = read(someFile);
	const text = await asset.text();

	return {
		title: 'Hello world!',
		content: text
	};


};