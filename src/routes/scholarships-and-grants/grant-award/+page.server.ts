import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `JWSF will award up to $1,000 to organizations or individuals in Hawaii whose missions are to promote an interest in and an understanding of the Japanese culture by people of Hawaii and to foster appreciation of world culture; enhance understanding and good relationships between the people of Japan and the United States; or render services to the community through activities and charitable contributions in the area of culture, education, gerontology and women’s issues. The grant award may be used to fund the organization or individual's need in the areas of General Support, Start-Up Costs, Capital Expenditures, Project Support, Technical Assistance, or Other.`

const eligibility = [
	"Nonprofit 501c(3) organizations and individuals based in the State, of Hawaii that are pursuing studies and goals as it relates to promoting and understanding of the Japanese culture for the people of Hawaii, enhancing the understanding and good relationships between the people of Japan and the U.S., and/or contributing to the areas of culture, gerontology and women's issues",
	"Grants will be awarded on an annual basis. Projects needing additional funds may reapply",
	"Grantees will be required to submit an annual status report which will include how funds were used and the most notable project outcome. These reports will be due twelve (12) months after the grant is accepted."
]

const submissionAddress = {
	"committee": "JWSF Grant & Scholarship Committee",
	"careOf": "c/o Ruth Matsunaga",
	"street": "3383 Pawaina Street",
	"cityStateZip": "Honolulu, HI 96822",
}

const description = `This award to Nonprofit organizations and individuals is to promote an interest in and an understanding of the Japanese culture by people of Hawaii and to foster appreciation of world culture, enhance understanding and good relationships between the people of Japan and the United States, and render services to the community through worthwhile projects, activities, and contributions in the area of culture, education, gerontology and women’s issues.`



export const load: PageServerLoad = async () => {

	return {
		title: 'Grant Award',
		description: description,
		heading: 'Grant Award',
		isAppOpen: true,
		deadline: 'November 30, 2024',
		applicationDeadline: 'Applications must be postmarked no later than November 30, 2024',
		submissionInfo: "Grantseekers are asked to submit the completed application form and a copy of the organization’s 501c(3) Determination letter as part of its application.",
		email: 'scholarships@jwsf.org',
		applicationForm: '/static/uploads/jwsf-grant-applicataion.pdf',
		submissionAddress: submissionAddress,
		award: '$1,000',
		eligibility: eligibility,
		publishDate: '20 Aug 2024',
		content: content
	};


};