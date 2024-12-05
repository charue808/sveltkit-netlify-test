import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const content = `### Our Mission
The Japanese Women’s Society Foundation (JWSF) was founded in 1954 as an educational and service organization. Its mission is to promote culture and provide education and quality services to the community by responding to the changing needs of society.

### Our Objectives


* To become an acknowledged leader and trendsetter in the area of health and issues pertaining to aging, with an emphasis on women:
  * Support community efforts in the areas of gerontology and geriatrics
  * Increase visibility as a leader and champion of issues on women and aging
  * Participate in local and national legislation which impact women’s issues
* To foster an appreciation of world cultures, especially that of Japan:
  * Promote and sponsor cultural programs and activities


### Our History
The Japanese Women’s Society of Honolulu was founded in 1954 as an educational and service organization for the purpose of promoting friendship between the United States and Japan, cultivating fellowship among members, and encouraging members to engage in comunity service. The initial call for such a group came from Mrs. Shinjiro Tsumura, wife of the Japanese Consul General, who urged the formation of an organization of service-minded women to represent the Japanese community in Honolulu.

The tradition of a Japanese women’s service organization has deep roots in Hawaii. The earliest example may have been the Women’s Charity Organization, an outgrowth of the Japanese Benevolent Society (Nihonjin Jizenkai) established in 1887 to render aid to the early contract laborers from Japan. When the Benevolent Society became inactive in 1889 it was restructured as the Women’s Charity Organization, and for three years functioned under the guidance of women before reoganization returned the society to male leadership. Thereafter women played a supportive role as the Benevolent Society expanded its welfare activities and went on to found the medical facility that is today known as Kuakini Medical Center.

A more immediate predecessor to the current JWSF was the Honolulu Japanese Women’s Society (Nihonjin Fujikai), founded in March 1916 with an initial membership of 103 issei (first-generation) Japanese women. During World War I members prepared bandages under the direction of the Red Cross and gathered pledges in a food conservation campaign.

With the formation of The Japanese Women’s Society of Honolulu in 1954, the organization’s leadership positions passed, for the most part, to a new generation of American-born Japanese, with issei women being called on to act as advisers. As a nod to prewar tradition, the wife of the Consul General, Mrs. Tsumura, was named the honorary president, but on her return to Japan in the autumn of 1954 the presidency passed to Hawaii-born Alice Noda, and remained an elected position thereafter. Today JWSF members strive to fulfill the aims expressed in the mission statement. `

const officers = [
	{
		"name": "Carole Hayashino",
		"position": "President",
	},
	{
		"name": "Candice Naito",
		"position": "Vice-President",
	},
	{
		"name": "Lauren Sugai & Naomi Kanna",
		"position": "Secretary",
	},
	{
		"name": "Rika Hirata",
		"position": "Treasurer",
	},
	{
		"name": "Ashley Nabeshima Marumoto",
		"position": "Historian",
	},
	{
		"name": "Sarah Kamida-Nakagawa",
		"position": "President-Elect",
	},
	{
		"name": "Lori Fujikawa-Casey",
		"position": "Past-President"
	}
]

const committeeChairs = [
	{
		"name": "Lynn Araki-Reagan"
	},
	{
		"name": "Corday Feagins"
	},
	{
		"name": "Heather Furutani"
	},
	{
		"name": "Kathy Inkinen"
	},
	{
		"name": "Libby Lum"
	},
	{
		"name": "Ruth Matsunaga"
	},
	{
		"name": "Irene Nakamoto"
	},
	{
		"name": "Julie Shimonishi"
	},
	{
		"name": "Melanie Takahashi"
	},
	{
		"name": "Sandy Takeda"
	},
	{
		"name": "Mabel Yonemori"
	},
	{
		"name": "Staci Yoshihara"
	},
	{
		"name": "Amy Young"
	},
	{
		"name": "Ann Isobe"
	}
]



export const load: PageServerLoad = async () => {



	return {
		title: 'About Us',
		description: 'All about the JWSF. Our mission, history and current leadership',
		heading: "About Japanese Women's Society Foundation",
		subheading: "Our mission and our history",
		officers: officers,
		committeeChairs: committeeChairs,
		content: content,
	};


};