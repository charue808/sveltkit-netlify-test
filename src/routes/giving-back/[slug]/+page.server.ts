import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';





const servicePrograms = [
	{
		"slug": 'adopt-a-mom',
		"title": "Adopt A Mom",
		"description": "Adopt-A-Mom is an annual event on the 3rd Sunday of May where JWSF members celebrate the elderly women of Hawaii who deserve to be cherished and appreciated for invaluable role as a mother.",
		"heading": "Adopt A Mom",
		"subheading": "An event to honor our elderly and cultural diversity",
		"content": `### History
		
The first Adopt-A-Mom was held in May 1996. Throughout the years, this special event held on the 3rd Sunday of May has become a valued friendship tea tradition. It acknowledges and values the contributions made by our aging population and extends our appreciation to them. Notable guests from the consulates, government, community and the reigning Cherry Blossom Court honor these women. Members prepare Japanese dishes, cultural groups entertain and adopted moms (and dads) share interesting stories about themselves.`
	},
	{
		"slug": "birthday-angels",
		"title": "Birthday Angels",
		"description": "A remembered birthday leaves every resident with a happy memory",
		"heading": "Birthday Angels",
		"subheading": "A gesture of remembering",
		"content": `The Birthday Angels Program originated in 1980 with the hope that a remembered birthday would indulge every resident with a happy memory and introduce a personal relationship between the women of the 2nd floor and the women of JWS. Today, JWSF carries on the tradition of the Birthday Angel by bringing a beautiful balloon, birthday card and a big smile to the residents (both women and men) of the Kuakini Care Home on their birthdays.`
	},
	{
		"slug": "friendship-teas",
		"title": "Friendship Teas",
		"description": "As part of our long history and commitment with Kuakini. JWSF members hosts monthly Friendship Teas for the residents and our members.",
		"heading": "Friendship Teas",
		"subheading": "The heart of community service",
		"content": `### History

Under the presidency of Alice Noda (1954-1956), there was a desire among the early members of JWSF, in partnership with Kuakini Home, to build and maintain, a care home where elderly women of limited means could be cared for. It took 25 years of fundraising to fund the $360,000 for the second floor of Hale Pulama Mau for the care of women residents. There is a plaque displayed on the second floor that reads: “This floor dedicated to the JWS of Honolulu, 1980.”


### Monthly Friendship Tea

When Alice Noda’s daughter, Mrs. Lillian Yajima, became JWS President (1979-1981), ideas of how to encourage close contact between members and the residents of the newly opened care home, got her thinking. The Friendship Tea materialized and made its debut in November, 1980.  In 2007, the Friendship Tea and the Christmas Tea were extended to the geriatric care residents of the 3rd-6th floors.  Through the generosity of JWSF members and organizations such as the Shufu Society of Hawaii and the Hawaii Fujioka Kenji Kai, residents enjoy dishes such as kabocha, tamagoyaki, nishime, namasu, that are caringly prepared for them. Entertainment by groups performing their special musical venues bring memories of favorite songs and dances.  At the end of the afternoon as each resident leaves the Hale Pulama Mau Auditorium, their thank yous give us the opportunity to say ‘thank you too for coming and see you at the next Friendship Tea.’


### Holiday Friendship Tea

JWSF continues its commitment to the residents of the Second Floor Care Home with friendship teas held in October, January and April.  Halloween activities and games in October; bingo in January; and cultural crafts planned by JWSF’s Past Presidents foster a close fellowship with members and the residents. New members are encouraged to attend a Second Floor Tea as a way to meet the residents and to see what is done at a Friendship Tea in a smaller setting.


### Friendship Tea Schedule
Please contact [community-service@jwsf.org](mailto:community-service@jwsf.org) to learn more about the upcoming schedule.`
	},
	{
		"slug": "food-bank-collection",
		"title": "Food Bank Collection",
		"description": "One of our community service's newest program to help meet the needs of food insecure island residents.",
		"heading": "Food Bank Collection",
		"subheading": "Giving to the community",
		"content": `The Hawaii Foodbank is one of Community Service’s newest program to help meet the needs of food insecure island residents. 

Each month at a board meeting, board members donate non-perishiable food items such as rice, saimin, vienna sausage, spam, soup and other canned goods.  As of January 2020, we delivered 321 pounds of food items.

JWSF members who wish to donate may contact community.services@jwsf.org and arrangements for pick up will be made.`
	},
	{
		"slug": 'meals-on-wheels',
		"title": "Meals on Wheels",
		"description": "Collecting, packaging and delivering tolietries for the Meals on Wheels programs on Oahu.",
		"heading": "Meals on Wheels",
		"subheading": "Thoughtfulness in a goodie bag",
		"content": `Packaged bags of toiletries are collected for homebound residents in the Lanakila Meals on Wheels and Hawaii Meals-on-Wheels programs. The bags compliment the daily meals that are delivered to the residents who are elderly or disabled. 

The bags are filled with toiletry items such as:
- Shampoo/Conditioner
- Lotion
- Soaps
- Kleenex
- Toothbrush/Toothpaste
- Shower Cap
- Socks with underneath grip

Items should be pre-packaged and ready to be delivered. Please exclude any sharp items such as razors or nail clippers/file.

Anyone interested in bringing their packaged bags of toiletries can email Community
Service at [community-service@jwsf.org](mailto:community-service@jwsf.org).`
	},
	{
		"slug": "member-check-in",
		"title": "JWSF Member Check-In",
		"description": "An opportunity for members to maintain and renew their community network.",
		"heading": "JWSF Member Check-In",
		"subheading": "An opportunity to value and appreciate our members",
		"content": `One of the goals that the late Cathy Iwai wanted to achieve as President (2017-2019) was to maintain and renew networking with JWSF members who are homebound and
unable to attend some or all of JWSF events. The program will open the opportunity for our members to be a friend calling to remind them of JWSF events, saving a seat, being
in each other’s company at JWSF events, or making a call once in a while to see how they’re doing.

For more information as to how to get involved with this program either as a Check-In Member or a JWSF Friend, email Community Service at [community-service@jwsf.org](mailto:community-service@jwsf.org).`
	},
	{
		"slug": "ohana-festival",
		"title": "Ohana Festival",
		"description": "JWSF Members and Sakura Alumnae Volunteer at the Japanese Cultural Center's anuual Ohana Festival where they teach Mini Ikebana and origami to attendees",
		"heading": "Ohana Festival at JCCH",
		"wubheading": "Giving to the community",
		"content": `JWSF members and the Sakura Hawaii Alumnae volunteer their time manning the Mini Ikebana and origami tables at the Japanese Cultural Center’s Ohana Festival held in January.`
	}
]

export const load: PageServerLoad = ({ params }) => {

	const result = servicePrograms.find(program => program.slug === params.slug)

	return result;


};