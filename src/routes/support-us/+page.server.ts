import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `Through your support we are able provide additional care for the residents at Hale Pulama Mau through our monthly Friendship Teas and annual Adopt-a-Mom event as well as find new ways to enrich their lives. Your support also goes to provide academic scholarships to students focused on gerontology and women's health and to provide grants to individuals or non-profits who are perpetuating Japanese culture in Hawaii. Here are the ways you can support our financially support our mission.`

export const load: PageServerLoad = async () => {

	return {
		title: 'Support Us',
		description: 'All the ways you can support the JWSF',
		heading: 'How you can support us',
		subheading: 'Together we can accomplish great things',
		content: content
	};


};