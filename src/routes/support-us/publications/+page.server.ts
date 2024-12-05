import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import kokoroCover from '$lib/imgs/kokoro_cover_resize.jpg';
import sharingHeartsCover from '$lib/imgs/sharing_our_heart_cover_resize.jpg';

const content = `We have released two publications. A revision of our awarding winning 2004 **Kokoro Book** and a cookbook filled with all the local recipes of the japanese hawaiian community, **Sharing Our Hearts Through Cooking**.`

const products = [
	{
		"title": "Kokoro",
		"subtitle": "Cherished Japanese Traditions in Hawai'i",
		"image": kokoroCover,
		"imgAlt": "Cover for Kokoro Book",
		"description": "Kokoro: Cherished Japanese Traditions in Hawai‘i won the Ka Palapala Po`okela Award of Excellence in 2004. It provided comprehensive information on Japanese traditions in Hawai‘i and was met with huge interest selling out in a short time. Due to that success and continued interest in Japanese traditions, JWSF published a revised Kokoro.",
		"salePrice": "$20.00 (Includes GE tax & shipping)",
		"retailPrice": "$25.00"
	},
	{
		"title": "Sharing Our Hearts Through Cooking",
		"subtitle": null,
		"image": sharingHeartsCover,
		"imgAlt": "Cover for Sharing our Hearts through cooking",
		"description": "Sharing Our Hearts Through Cooking is filled with recipes to whet your appetite for a home cooked meal and to inspire a family gathering. It is a great gift for young families who are looking for easy-to-cook recipes that are reminiscent of ones they ate as children. Each recipe is accompanied by a photo so you will know exactly what the dish should look like.",
		"salePrice": "$20.00 (Includes GE tax & shipping)",
		"retailPrice": "$25.00"
	}
]


export const load: PageServerLoad = async () => {

	return {
		title: 'Publications',
		description: "We have released two publications. A revision of our awarding winning 2004 Kokoro Book and a cookbook filled with all the local recipes of the japanese hawaiian community, Sharing With Heart.",
		heading: 'Publications',
		subheading: 'Past publications from JWSF',
		products: products,
		content: content
	};


};