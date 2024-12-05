import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `The Japanese Women’s Society of Honolulu was founded in 1954 as an educational and service organization. The organization was merged with the Japanese Women’s Society Foundation to form the Japanese Women’s Society Foundation in 2006 and its mission and goals remain the same. Its mission is to promote education and quality services to the community by responding to the changing needs of the society. The JWSF’s goal of becoming “an acknowledged leader and trendsetter in the area of health and issues pertaining to aging” and its objective of rendering worthwhile services to the community have led the JWSF to annually award scholarships to enrolled graduate students in the fields of health care, social work, or the arts and sciences who are focused on gerontology/geriatrics.`

const awards = [
	{
		'title': 'Academic Scholarship',
		'url': '/scholarships-and-grants/academic-scholarship',
		'isOpen': false,
		'amount': '$5,000',
		'description': 'An annual award for deserving full or part time students enrolled or accepted in a graduate degree program at an accredited institution of higher learning in the fields of Medicine, Nursing, Public Health, Social Work or the Arts and Sciences.',
		'deadline': 'TBD' 
	},
	{
		'title': 'Grant Award',
		'url': '/scholarships-and-grants/grant-award',
		'isOpen': true,
		'amount': '$1,000',
		'description': 'This award to Nonprofit organizations and individuals is to promote an interest in and an understanding of the Japanese culture by people of Hawaii and to foster appreciation of world culture, enhance understanding and good relationships between the people of Japan and the United States, and render services to the community through worthwhile projects, activities, and contributions in the area of culture, education, gerontology and women’s issues.',
		'deadline': 'November 30, 2024' 
	}
]

export const load: PageServerLoad = async () => {

	return {
		title: 'Scholarships and Grants',
		description: 'Financial support for qualified students and non-profits in Hawaii!',
		heading: 'Scholarships & Grants',
		subheading: 'Financial support for qualified students and non-profits in Hawaii!',
		content: content,
		awards: awards
	};


};