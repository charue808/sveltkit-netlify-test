import { error } from '@sveltejs/kit';

export async function load() {
	const slug = 'become-a-member';
	try {
		const page = await import(`../../../pages/${slug}.md`)

		return {
			content: page.default,
			meta: page.metadata
		}
	} catch (e) {
		error(404, `Could not find the /${slug} route`)
	}
}