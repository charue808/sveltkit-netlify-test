import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `### Okage Sama De

The desire to “give back” is often the premise that drives an individual to become a member of JWSF. And the organization’s programs and activities give members hands-on opportunities to do that. One of the most fulfilling is our interactions with residents of Kuakini Home where members can demonstrate our appreciation to those who given much to the community. The Japanese expression that succinctly explains our sentiment is “okage sama de” or “I am who I am because of you.”`

const kuakiniPrograms = [
	{
		"title": "Adopt A Mom",
		"description": "Adopt-A-Mom is an annual event on the 3rd Sunday of May where JWSF members celebrate the elderly women of Hawaii who deserve to be cherished and appreciated for invaluable role as a mother.",
		"url": "/giving-back/adopt-a-mom",
	},
	{
		"title": "Birthday Angels",
		"description": "A remembered birthday leaves every resident with a happy memory",
		"url": "/giving-back/birthday-angels",
	},
	{
		"title": "Friendship Teas",
		"description": "As part of our long history and commitment with Kuakini. JWSF members hosts monthly Friendship Teas for the residents and our members.",
		"url": "/giving-back/friendship-teas",
	}
];

const communityPrograms = [
	{
		"title": "Food Bank Collection",
		"description": "One of our community service's newest program to help meet the needs of food insecure island residents.",
		"url": "/giving-back/food-bank-collection",
	},
	{
		"title": "Meals on Wheels",
		"description": "Collecting, packaging and delivering tolietries for the Meals on Wheels programs on Oahu.",
		"url": "/giving-back/meals-on-wheels",
	},
	{
		"title": "JWSF Member Check-In",
		"description": "An opportunity for members to maintain and renew their community network.",
		"url": "/giving-back/member-check-in",
	},
	{
		"title": "Ohana Festival",
		"description": "JWSF Members and Sakura Alumnae Volunteer at the Japanese Cultural Center's anuual Ohana Festival where they teach Mini Ikebana and origami to attendees",
		"url": "/giving-back/ohana-festival",
	}
];

export const load: PageServerLoad = async () => {

	return {
		title: 'Service to our community',
		description: 'The desire to “give back” is often the premise that drives an individual to become a member of JWSF. And the organization’s programs and activities give members hands-on opportunities to do that.',
		heading: 'Giving Back',
		subheading: 'Enriching the lives of the residents of Hale Pulama Mau and the Community',
		kuakiniHeading: 'At Hale Pulama Mau, Kuakini Hospital',
		kuakiniDescription: 'To support community efforts in caring for the elderly, nurture the bond between members and the residents and continue visibility as a supporter of women and aging.',
		communityHeading: 'For the Community and Our Members',
		communityDescription: 'To provide services to the elderly and community with projects of care and support.',
		kuakiniPrograms: kuakiniPrograms,
		communityPrograms: communityPrograms,
		content: content
	};


};