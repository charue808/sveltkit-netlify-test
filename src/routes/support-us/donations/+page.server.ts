import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `The Japanese Women’s Society Foundation is a non-profit 501(c)(3) organization whose objective is to render service to the community by supporting projects in the area of culture, education, and gerontology. We are always gracious to our members, friends and supporters for their continued support in raising funds to sustain our many philanthropic endeavors. These endeavors include a broad range of support activities for the residents of Kuakini Home, and other elderly projects, grants to support Japanese cultural activities, and events promoting women’s leadership. Through your generous support, JWSF also grants scholarships to graduate students in the geriatric field; helping to ensure the supply of professions to care for our growing elderly population.

We appreciate and thank you for your generous and continued support. `;


export const load: PageServerLoad = async () => {

	return {
		title: 'Donations',
		description: "Through your donations we can continue to enrich the local community in the area's of culture, education, gerontology and women's issues. Whether through support activites for the 2nd floor residents at Hale Pulama Mau, providing grants to local non-profits and individuals, or academic scholarships for local students in the geriatric field, your donation of any amount is graciously needed.",
		heading: 'Donations',
		subheading: 'Your contributions help our cause',
		content: content
	};


};