import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `The Japanese Women’s Society of Honolulu was founded in 1954 as an educational and service organization. The Organization was merged with the Japanese Women’s Society Foundation to form the Japanese Women’s Society Foundation in 2006 and its mission and goals remain the same.

Its mission is to promote education and quality services to the community by responding to the changing needs of the society. The JWSF’s goal of becoming “an acknowledged leader and trendsetter in the area of health and issues pertaining to aging” and its objective of rendering worthwhile services to the community have led the JWSF to annually award a scholarship to an enrolled graduate student in the field of health care, social work, or the arts and sciences who is focused on gerontology/geriatrics. This year the JWSF will award one or more academic scholarships up to $5,000.`

const eligibility = [
	"Full or part-time enrollment or acceptance in a graduate degree program at an accredited institution of higher learning in one of the following fields: Medicine, Nursing, Public Health, Social Work, or the Arts and Sciences",
	"Interest and commitment in the field of Gerontology/Geriatrics based on course work, research, and/or volunteerism",
	"Financial need",
	"Hawaii residency",
	"Timely submission of a complete application that includes the application form, official transcripts, letters of recommendation, a statement of financial need, and an essay detailing the applicant’s plans for further academic training and how this would have an impact on the services for the elderly in Hawaii",
	"Preference will be given to citizens of the United States of America, although citizens of other countries may apply",
]

const submissionAddress = {
	"committee": "JWSF Grant & Scholarship Committee",
	"careOf": "c/o Ruth Matsunaga",
	"street": "3383 Pawaina Street",
	"cityStateZip": "Honolulu, HI 96822",
}

const description = `An annual award for deserving full or part time students enrolled or accepted in a graduate degree program at an accredited institution of higher learning in the fields of Medicine, Nursing, Public Health, Social Work, or the Arts and Sciences`


export const load: PageServerLoad = async () => {

	return {
		title: 'Academic Scholarship',
		description: description,
		heading: 'Academic Scholarship',
		subheading: 'Financial support for qualified students and non-profits in Hawaii!',
		isAppOpen: false,
		deadline: 'TBA',
		email: 'scholarships@jwsf.org',
		applicationForm: '/static/uploads/jwsf-scholarship-applicataion.pdf',
		award: '$5,000',
		eligibility: eligibility,
		publishDate: '20 Aug 2024',
		content: content
	};


};